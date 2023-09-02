import shutil
import threading
from pathlib import Path
from typing import List, Optional, Tuple, Union, Dict

from sqlalchemy.orm import Session

from app.chain import ChainBase
from app.chain.media import MediaChain
from app.core.config import settings
from app.core.context import MediaInfo
from app.core.meta import MetaBase
from app.core.metainfo import MetaInfo
from app.db.downloadhistory_oper import DownloadHistoryOper
from app.db.models.downloadhistory import DownloadHistory
from app.db.models.transferhistory import TransferHistory
from app.db.transferhistory_oper import TransferHistoryOper
from app.helper.format import FormatParser
from app.helper.progress import ProgressHelper
from app.log import logger
from app.schemas import TransferInfo, TransferTorrent, Notification, EpisodeFormat
from app.schemas.types import TorrentStatus, EventType, MediaType, ProgressKey, NotificationType, MessageChannel
from app.utils.string import StringUtils
from app.utils.system import SystemUtils

lock = threading.Lock()


class TransferChain(ChainBase):
    """
    文件转移处理链
    """

    def __init__(self, db: Session = None):
        super().__init__(db)
        self.downloadhis = DownloadHistoryOper(self._db)
        self.transferhis = TransferHistoryOper(self._db)
        self.progress = ProgressHelper()
        self.mediachain = MediaChain(self._db)

    def process(self) -> bool:
        """
        获取下载器中的种子列表，并执行转移
        """

        # 全局锁，避免重复处理
        with lock:
            logger.info("开始执行下载器文件转移 ...")
            # 从下载器获取种子列表
            torrents: Optional[List[TransferTorrent]] = self.list_torrents(status=TorrentStatus.TRANSFER)
            if not torrents:
                logger.info("没有获取到已完成的下载任务")
                return False

            logger.info(f"获取到 {len(torrents)} 个已完成的下载任务")

            for torrent in torrents:
                # 查询下载记录识别情况
                downloadhis: DownloadHistory = self.downloadhis.get_by_hash(torrent.hash)
                if downloadhis:
                    # 类型
                    mtype = MediaType(downloadhis.type)
                    # 按TMDBID识别
                    mediainfo = self.recognize_media(mtype=mtype,
                                                     tmdbid=downloadhis.tmdbid)
                else:
                    # 非MoviePilot下载的任务，按文件识别
                    mediainfo = None

                # 执行转移
                self.do_transfer(path=torrent.path, mediainfo=mediainfo,
                                 download_hash=torrent.hash)

                # 设置下载任务状态
                self.transfer_completed(hashs=torrent.hash, path=torrent.path)
            # 结束
            logger.info("下载器文件转移执行完成")
            return True

    def do_transfer(self, path: Path, meta: MetaBase = None,
                    mediainfo: MediaInfo = None, download_hash: str = None,
                    target: Path = None, transfer_type: str = None,
                    epformat: EpisodeFormat = None, min_filesize: int = 0) -> Tuple[bool, str]:
        """
        执行一个复杂目录的转移操作
        :param path: 待转移目录或文件
        :param meta: 元数据
        :param mediainfo: 媒体信息
        :param download_hash: 下载记录hash
        :param target: 目标路径
        :param transfer_type: 转移类型
        :param epformat: 剧集格式
        :param min_filesize: 最小文件大小(MB)
        返回：成功标识，错误信息
        """
        if not transfer_type:
            transfer_type = settings.TRANSFER_TYPE

        # 获取待转移路径清单
        trans_paths = self.__get_trans_paths(path)
        if not trans_paths:
            logger.warn(f"{path.name} 没有找到可转移的媒体文件")
            return False, f"{path.name} 没有找到可转移的媒体文件"

        # 汇总错误信息
        err_msgs: List[str] = []
        # 汇总季集清单
        season_episodes: Dict[Tuple, List[int]] = {}
        # 汇总元数据
        metas: Dict[Tuple, MetaBase] = {}
        # 汇总媒体信息
        medias: Dict[Tuple, MediaInfo] = {}
        # 汇总转移信息
        transfers: Dict[Tuple, TransferInfo] = {}

        # 有集自定义格式
        formaterHandler = FormatParser(eformat=epformat.format,
                                       details=epformat.detail,
                                       part=epformat.part,
                                       offset=epformat.offset) if epformat else None

        # 开始进度
        self.progress.start(ProgressKey.FileTransfer)
        # 总数
        transfer_files = SystemUtils.list_files(directory=path,
                                                extensions=settings.RMT_MEDIAEXT,
                                                min_filesize=min_filesize)
        if formaterHandler:
            # 有集自定义格式，过滤文件
            transfer_files = [f for f in transfer_files if formaterHandler.match(f.name)]
        # 总数
        total_num = len(transfer_files)
        # 已处理数量
        processed_num = 0
        self.progress.update(value=0,
                             text=f"开始转移 {path}，共 {total_num} 个文件 ...",
                             key=ProgressKey.FileTransfer)

        # 处理所有待转移目录或文件，默认一个转移路径或文件只有一个媒体信息
        for trans_path in trans_paths:
            # 如果是目录且不是⼀蓝光原盘，获取所有文件并转移
            if (not trans_path.is_file()
                    and not SystemUtils.is_bluray_dir(trans_path)):
                # 遍历获取下载目录所有文件
                file_paths = SystemUtils.list_files(directory=trans_path,
                                                    extensions=settings.RMT_MEDIAEXT,
                                                    min_filesize=min_filesize)
            else:
                file_paths = [trans_path]

            if formaterHandler:
                # 有集自定义格式，过滤文件
                file_paths = [f for f in file_paths if formaterHandler.match(f.name)]

            # 转移所有文件
            for file_path in file_paths:
                # 回收站及隐藏的文件不处理
                file_path_str = str(file_path)
                if file_path_str.find('/@Recycle/') != -1 \
                        or file_path_str.find('/#recycle/') != -1 \
                        or file_path_str.find('/.') != -1 \
                        or file_path_str.find('/@eaDir') != -1:
                    logger.debug(f"{file_path_str} 是回收站或隐藏的文件")
                    continue

                if not meta:
                    # 上级目录元数据
                    dir_meta = MetaInfo(title=file_path.parent.name)
                    # 文件元数据，不包含后缀
                    file_meta = MetaInfo(title=file_path.stem)
                    # 合并元数据
                    file_meta.merge(dir_meta)
                else:
                    file_meta = meta

                if not file_meta:
                    logger.error(f"{file_path} 无法识别有效信息")
                    err_msgs.append(f"{file_path} 无法识别有效信息")
                    continue

                # 自定义识别
                if formaterHandler:
                    # 开始集、结束集、PART
                    begin_ep, end_ep, part = formaterHandler.split_episode(file_path.stem)
                    if begin_ep is not None:
                        file_meta.begin_episode = begin_ep
                        file_meta.part = part
                    if end_ep is not None:
                        file_meta.end_episode = end_ep

                if not mediainfo:
                    # 识别媒体信息
                    file_mediainfo = self.recognize_media(meta=file_meta)
                else:
                    file_mediainfo = mediainfo

                if not file_mediainfo:
                    logger.warn(f'{file_path} 未识别到媒体信息')
                    # 新增转移失败历史记录
                    his = self.transferhis.add_fail(
                        src_path=file_path,
                        mode=settings.TRANSFER_TYPE,
                        meta=file_meta,
                        download_hash=download_hash
                    )
                    self.post_message(Notification(
                        mtype=NotificationType.Manual,
                        title=f"{file_path.name} 未识别到媒体信息，无法入库！\n"
                              f"回复：```\n/redo {his.id} [tmdbid]|[类型]\n``` 手动识别转移。"
                    ))
                    continue

                logger.info(f"{file_path.name} 识别为：{file_mediainfo.type.value} {file_mediainfo.title_year}")

                # 电视剧没有集无法转移
                if file_mediainfo.type == MediaType.TV and not file_meta.episode:
                    # 转移失败
                    logger.warn(f"{file_path.name} 入库失败：未识别到集数")
                    err_msgs.append(f"{file_path.name} 未识别到集数")
                    # 新增转移失败历史记录
                    self.transferhis.add_fail(
                        src_path=file_path,
                        mode=settings.TRANSFER_TYPE,
                        download_hash=download_hash,
                        meta=file_meta,
                        mediainfo=file_mediainfo
                    )
                    # 发送消息
                    self.post_message(Notification(
                        mtype=NotificationType.Manual,
                        title=f"{file_path.name} 入库失败！",
                        text=f"原因：未识别到集数",
                        image=file_mediainfo.get_message_image()
                    ))
                    continue

                # 更新媒体图片
                self.obtain_images(mediainfo=file_mediainfo)

                if not download_hash:
                    download_file = self.downloadhis.get_file_by_fullpath(file_path_str)
                    if download_file:
                        download_hash = download_file.download_hash

                # 执行转移
                transferinfo: TransferInfo = self.transfer(meta=file_meta,
                                                           mediainfo=file_mediainfo,
                                                           path=file_path,
                                                           transfer_type=transfer_type,
                                                           target=target)
                if not transferinfo:
                    logger.error("文件转移模块运行失败")
                    return False, "文件转移模块运行失败"
                if not transferinfo.target_path:
                    # 转移失败
                    logger.warn(f"{file_path.name} 入库失败：{transferinfo.message}")
                    err_msgs.append(f"{file_path.name} {transferinfo.message}")
                    # 新增转移失败历史记录
                    self.transferhis.add_fail(
                        src_path=file_path,
                        mode=settings.TRANSFER_TYPE,
                        download_hash=download_hash,
                        meta=file_meta,
                        mediainfo=file_mediainfo,
                        transferinfo=transferinfo
                    )
                    # 发送消息
                    self.post_message(Notification(
                        mtype=NotificationType.Manual,
                        title=f"{file_mediainfo.title_year} {file_meta.season_episode} 入库失败！",
                        text=f"原因：{transferinfo.message or '未知'}",
                        image=file_mediainfo.get_message_image()
                    ))
                    continue

                # 汇总信息
                mkey = (file_mediainfo.tmdb_id, file_meta.begin_season)
                if mkey not in medias:
                    # 新增信息
                    metas[mkey] = file_meta
                    medias[mkey] = file_mediainfo
                    season_episodes[mkey] = file_meta.episode_list
                    transfers[mkey] = transferinfo
                else:
                    # 合并季集清单
                    season_episodes[mkey] = list(set(season_episodes[mkey] + file_meta.episode_list))
                    # 合并转移数据
                    transfers[mkey].file_count += transferinfo.file_count
                    transfers[mkey].total_size += transferinfo.total_size
                    transfers[mkey].file_list.extend(transferinfo.file_list)
                    transfers[mkey].file_list_new.extend(transferinfo.file_list_new)
                    transfers[mkey].fail_list.extend(transferinfo.fail_list)

                # 新增转移成功历史记录
                self.transferhis.add_success(
                    src_path=file_path,
                    mode=settings.TRANSFER_TYPE,
                    download_hash=download_hash,
                    meta=file_meta,
                    mediainfo=file_mediainfo,
                    transferinfo=transferinfo
                )

                # 广播事件
                self.eventmanager.send_event(EventType.TransferComplete, {
                    'meta': file_meta,
                    'mediainfo': file_mediainfo,
                    'transferinfo': transferinfo
                })
                # 更新进度
                processed_num += 1
                self.progress.update(value=processed_num / total_num * 100,
                                     text=f"{file_path.name} 转移完成",
                                     key=ProgressKey.FileTransfer)

            # 目录或文件转移完成
            for mkey, media in medias.items():
                meta = metas[mkey]
                transferinfo = transfers[mkey]
                # 刷新媒体库
                self.refresh_mediaserver(mediainfo=media, file_path=transferinfo.target_path)
                # 刮削
                self.scrape_metadata(path=transferinfo.target_path, mediainfo=media)
                # 发送通知
                se_str = None
                if media.type == MediaType.TV:
                    se_str = f"{meta.season} {StringUtils.format_ep(season_episodes[mkey])}"
                self.send_transfer_message(meta=meta,
                                           mediainfo=media,
                                           transferinfo=transferinfo,
                                           season_episode=se_str)
            # 结束进度
            logger.info(f"{path} 转移完成，共 {total_num} 个文件，"
                        f"成功 {total_num - len(err_msgs)} 个，失败 {len(err_msgs)} 个")
            self.progress.end(ProgressKey.FileTransfer)

        return True, "\n".join(err_msgs)

    @staticmethod
    def __get_trans_paths(directory: Path):
        """
        获取转移目录列表
        """

        if not directory.exists():
            logger.warn(f"目录不存在：{directory}")
            return []

        # 单文件
        if directory.is_file():
            return [directory]

        # 蓝光原盘
        if SystemUtils.is_bluray_dir(directory):
            return [directory]

        # 需要转移的路径列表
        trans_paths = []

        # 先检查当前目录的下级目录，以支持合集的情况
        for sub_dir in SystemUtils.list_sub_directory(directory):
            # 如果是蓝光原盘
            if SystemUtils.is_bluray_dir(sub_dir):
                trans_paths.append(sub_dir)
            # 没有媒体文件的目录跳过
            elif SystemUtils.list_files(sub_dir, extensions=settings.RMT_MEDIAEXT):
                trans_paths.append(sub_dir)

        if not trans_paths:
            # 没有有效子目录，直接转移当前目录
            trans_paths.append(directory)
        else:
            # 有子目录时，把当前目录的文件添加到转移任务中
            trans_paths.extend(
                SystemUtils.list_sub_files(directory, extensions=settings.RMT_MEDIAEXT)
            )
        return trans_paths

    def remote_transfer(self, arg_str: str, channel: MessageChannel, userid: Union[str, int] = None):
        """
        远程重新转移，参数 历史记录ID TMDBID|类型
        """

        def args_error():
            self.post_message(Notification(channel=channel,
                                           title="请输入正确的命令格式：/redo [id] [tmdbid]|[类型]，"
                                                 "[id]历史记录编号", userid=userid))

        if not arg_str:
            args_error()
            return
        arg_strs = str(arg_str).split()
        if len(arg_strs) != 2:
            args_error()
            return
        # 历史记录ID
        logid = arg_strs[0]
        if not logid.isdigit():
            args_error()
            return
        # TMDB ID
        tmdb_strs = arg_strs[1].split('|')
        tmdbid = tmdb_strs[0]
        if not logid.isdigit():
            args_error()
            return
        # 类型
        type_str = tmdb_strs[1] if len(tmdb_strs) > 1 else None
        if not type_str or type_str not in [MediaType.MOVIE.value, MediaType.TV.value]:
            args_error()
            return
        state, errmsg = self.re_transfer(logid=int(logid),
                                         mtype=MediaType(type_str), tmdbid=int(tmdbid))
        if not state:
            self.post_message(Notification(channel=channel, title="手动整理失败",
                                           text=errmsg, userid=userid))
            return

    def re_transfer(self, logid: int, mtype: MediaType, tmdbid: int) -> Tuple[bool, str]:
        """
        根据历史记录，重新识别转移，只处理对应的src目录
        :param logid: 历史记录ID
        :param mtype: 媒体类型
        :param tmdbid: TMDB ID
        """
        # 查询历史记录
        history: TransferHistory = self.transferhis.get(logid)
        if not history:
            logger.error(f"历史记录不存在，ID：{logid}")
            return False, "历史记录不存在"
        # 没有下载记录，按源目录路径重新转移
        src_path = Path(history.src)
        if not src_path.exists():
            return False, f"源目录不存在：{src_path}"
        # 识别元数据
        meta = MetaInfo(title=src_path.stem)
        if not meta.name:
            return False, f"未识别到元数据，标题：{src_path.stem}"
        # 查询媒体信息
        mediainfo = self.recognize_media(mtype=mtype, tmdbid=tmdbid)
        if not mediainfo:
            return False, f"未识别到媒体信息，类型：{mtype.value}，tmdbid：{tmdbid}"
        # 重新执行转移
        logger.info(f"{mtype.value} {tmdbid} 识别为：{mediainfo.title_year}")
        # 更新媒体图片
        self.obtain_images(mediainfo=mediainfo)

        # 转移
        state, errmsg = self.do_transfer(path=src_path,
                                         meta=meta,
                                         mediainfo=mediainfo,
                                         download_hash=history.download_hash)
        if not state:
            return False, errmsg

        # 删除旧历史记录
        self.transferhis.delete(logid)

        return True, ""

    def manual_transfer(self, in_path: Path,
                        target: Path = None,
                        tmdbid: int = None,
                        mtype: MediaType = None,
                        season: int = None,
                        transfer_type: str = None,
                        epformat: EpisodeFormat = None,
                        min_filesize: int = 0) -> Tuple[bool, Union[str, list]]:
        """
        手动转移
        :param in_path: 源文件路径
        :param target: 目标路径
        :param tmdbid: TMDB ID
        :param mtype: 媒体类型
        :param season: 季度
        :param transfer_type: 转移类型
        :param epformat: 剧集格式
        :param min_filesize: 最小文件大小(MB)
        """
        logger.info(f"手动转移：{in_path} ...")

        if tmdbid:
            # 有输入TMDBID时单个识别
            meta = MetaInfo(in_path.stem)
            # 整合数据
            if mtype:
                meta.type = mtype
            if season is not None:
                meta.begin_season = season
            # 识别媒体信息
            mediainfo: MediaInfo = self.mediachain.recognize_media(tmdbid=tmdbid, mtype=mtype)
            if not mediainfo:
                return False, f"媒体信息识别失败，tmdbid: {tmdbid}, type: {mtype.value}"
            # 开始进度
            self.progress.start(ProgressKey.FileTransfer)
            self.progress.update(value=0,
                                 text=f"开始转移 {in_path} ...",
                                 key=ProgressKey.FileTransfer)
            # 开始转移
            state, errmsg = self.do_transfer(
                path=in_path,
                meta=meta,
                mediainfo=mediainfo,
                target=target,
                epformat=epformat,
                min_filesize=min_filesize
            )
            if not state:
                return False, errmsg

            self.progress.end(ProgressKey.FileTransfer)
            logger.info(f"{in_path} 转移完成")
            return True, ""
        else:
            # 没有输入TMDBID时，按文件识别
            state, errmsg = self.do_transfer(path=in_path,
                                             target=target,
                                             transfer_type=transfer_type,
                                             epformat=epformat,
                                             min_filesize=min_filesize)
            return state, errmsg

    def send_transfer_message(self, meta: MetaBase, mediainfo: MediaInfo,
                              transferinfo: TransferInfo, season_episode: str = None):
        """
        发送入库成功的消息
        """
        msg_title = f"{mediainfo.title_year} {meta.season_episode if not season_episode else season_episode} 已入库"
        if mediainfo.vote_average:
            msg_str = f"评分：{mediainfo.vote_average}，类型：{mediainfo.type.value}"
        else:
            msg_str = f"类型：{mediainfo.type.value}"
        if mediainfo.category:
            msg_str = f"{msg_str}，类别：{mediainfo.category}"
        if meta.resource_term:
            msg_str = f"{msg_str}，质量：{meta.resource_term}"
        msg_str = f"{msg_str}，共{transferinfo.file_count}个文件，" \
                  f"大小：{StringUtils.str_filesize(transferinfo.total_size)}"
        if transferinfo.message:
            msg_str = f"{msg_str}，以下文件处理失败：\n{transferinfo.message}"
        # 发送
        self.post_message(Notification(
            mtype=NotificationType.Organize,
            title=msg_title, text=msg_str, image=mediainfo.get_message_image()))

    @staticmethod
    def delete_files(path: Path):
        """
        删除转移后的文件以及空目录
        """
        logger.info(f"开始删除文件以及空目录：{path} ...")
        if not path.exists():
            logger.error(f"{path} 不存在")
            return
        elif path.is_file():
            # 删除文件
            path.unlink()
            logger.warn(f"文件 {path} 已删除")
            # 判断目录是否为空, 为空则删除
            if str(path.parent.parent) != str(path.root):
                # 父目录非根目录，才删除父目录
                files = SystemUtils.list_files(path.parent, settings.RMT_MEDIAEXT)
                if not files:
                    shutil.rmtree(path.parent)
                    logger.warn(f"目录 {path.parent} 已删除")
        else:
            if str(path.parent) != str(path.root):
                # 父目录非根目录，才删除目录
                shutil.rmtree(path)
                # 删除目录
                logger.warn(f"目录 {path} 已删除")
