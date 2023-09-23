import{d as q,r as x,af as z,N as ge,q as J,e as ye,o as b,c as I,m as e,i as t,D as U,A as T,B as W,X as be,j as s,a as l,I as F,V as L,a1 as ne,Q as ee,C as H,E as G,F as B,K as g,f as E,P as le,a5 as ce,M as j,W as O,t as A,a4 as se,R as xe,S as he,ac as Ve,a2 as we,a0 as ue,Y as ie,$ as Z,G as Ce,H as Se,L as fe,aG as Q,az as N,a8 as me,aa as D,O as ae,ab as pe,aH as ke,as as _e,b as Re,aI as $e,aJ as Ue,aK as Fe,aL as K,T as X}from"./index-d97604e4.js";import{r as re}from"./index-705cb9e8.js";import{a as S}from"./index-228e1652.js";import{a as de}from"./avatar-1-4acd3e19.js";import{_ as ve}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-46ff3c26.js";import{c as De}from"./index-d2c33d5a.js";const Ie={class:"d-flex flex-column justify-center gap-5"},Te={class:"d-flex flex-wrap gap-2"},Ae=l("span",{class:"d-none d-sm-block"},"上传头像",-1),Ee=l("span",{class:"d-none d-sm-block"},"重置",-1),Be=l("p",{class:"text-body-1 mb-0"}," 允许 JPG、GIF 或 PNG 格式， 最大尺寸 800K。 ",-1),Pe=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," 用户名 "),l("th",{scope:"col"}," 邮箱 "),l("th",{scope:"col"}," 状态 "),l("th",{scope:"col"}," 管理员 "),l("th",{scope:"col",class:"w-5"})])],-1),Le=q({__name:"AccountSettingAccount",setup(M){const i=x(!1),a=x(!1),c=x(!1),d=x(""),m=x(""),v=z.useToast(),k=x(),R=x(!1),V=ge({name:"",password:"",email:""}),p=x({id:0,name:"",password:"",email:"",is_active:!1,is_superuser:!1,avatar:""}),n=x([]);function w(h){const r=new FileReader,{files:Y}=h.target;Y&&Y.length>0&&(r.readAsDataURL(Y[0]),r.onload=()=>{typeof r.result=="string"&&(p.value.avatar=r.result,o())})}function y(){p.value.avatar=de}async function _(){try{const h=await S.get("user/current");p.value=h,p.value.avatar||(p.value.avatar=de)}catch(h){console.log(h)}}async function o(){if(d.value||m.value){if(d.value!==m.value){v.error("两次输入的密码不一致");return}p.value.password=d.value}try{const h=await S.put("user/",p.value);h.success?v.success("用户信息保存成功！"):v.error(`用户信息保存失败：${h.message}！`)}catch(h){console.log(h)}}async function u(){try{const h=await S.get("/user/");n.value=h}catch(h){console.log(h)}}async function f(h){try{const r=await S.delete(`user/${h.name}`);r.success?(v.success("用户删除成功！"),u()):v.error(`用户删除失败：${r.message}！`)}catch(r){console.log(r)}}async function $(h){try{h.is_active=!h.is_active;const r=await S.put("user/",h);r.success?(v.success("用户冻结成功！"),u()):v.error(`用户冻结失败：${r.message}！`)}catch(r){console.log(r)}}async function P(){try{const h=await S.post("user",V);h.success?(v.success("用户新增成功！"),u(),R.value=!1):v.error(`用户新增失败：${h.message}！`)}catch(h){console.log(h)}}return J(()=>{_(),u()}),(h,r)=>{const Y=ye("IconBtn");return b(),I(j,null,[e(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"个人信息"},{default:t(()=>[e(W,{class:"d-flex"},{default:t(()=>[e(be,{rounded:"lg",size:"100",class:"me-6",image:s(p).avatar},null,8,["image"]),l("form",Ie,[l("div",Te,[e(F,{color:"primary",onClick:r[0]||(r[0]=C=>{var te;return(te=s(k))==null?void 0:te.click()})},{default:t(()=>[e(L,{icon:"mdi-cloud-upload-outline",class:"d-sm-none"}),Ae]),_:1}),l("input",{ref_key:"refInputEl",ref:k,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:w},null,544),e(F,{type:"reset",color:"error",variant:"tonal",onClick:y},{default:t(()=>[Ee,e(L,{icon:"mdi-refresh",class:"d-sm-none"})]),_:1})]),Be])]),_:1}),e(ne),e(W,null,{default:t(()=>[e(ee,{class:"mt-6"},{default:t(()=>[e(H,null,{default:t(()=>[e(U,{md:"6",cols:"12"},{default:t(()=>[e(G,{modelValue:s(p).name,"onUpdate:modelValue":r[1]||(r[1]=C=>s(p).name=C),readonly:"",label:"用户名"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(p).email,"onUpdate:modelValue":r[2]||(r[2]=C=>s(p).email=C),label:"邮箱",type:"email"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(d),"onUpdate:modelValue":r[3]||(r[3]=C=>B(d)?d.value=C:null),type:s(i)?"text":"password","append-inner-icon":s(i)?"mdi-eye-off-outline":"mdi-eye-outline",label:"新密码",autocomplete:"new-password","onClick:appendInner":r[4]||(r[4]=C=>i.value=!s(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(m),"onUpdate:modelValue":r[5]||(r[5]=C=>B(m)?m.value=C:null),type:s(a)?"text":"password","append-inner-icon":s(a)?"mdi-eye-off-outline":"mdi-eye-outline",label:"确认新密码","onClick:appendInner":r[6]||(r[6]=C=>a.value=!s(a))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(U,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(F,{onClick:o},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(p).is_superuser?(b(),E(U,{key:0,cols:"12"},{default:t(()=>[e(T,{title:"所有用户"},{append:t(()=>[e(Y,{onClick:r[7]||(r[7]=le(C=>R.value=!0,["stop"]))},{default:t(()=>[e(L,{icon:"mdi-plus"})]),_:1})]),default:t(()=>[e(ce,{class:"text-no-wrap"},{default:t(()=>[Pe,l("tbody",null,[(b(!0),I(j,null,O(s(n),C=>(b(),I("tr",{key:C.name},[l("td",null,A(C.name),1),l("td",null,A(C.email),1),l("td",null,[C.is_active?(b(),E(se,{key:0,color:"success","text-color":"white"},{default:t(()=>[g(" 激活 ")]),_:1})):(b(),E(se,{key:1,color:"error","text-color":"white"},{default:t(()=>[g(" 冻结 ")]),_:1}))]),l("td",null,A(C.is_superuser?"是":"否"),1),l("td",null,[xe(e(Y,null,{default:t(()=>[e(L,{icon:"mdi-dots-vertical"}),e(Ve,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(we,null,{default:t(()=>[e(ue,{variant:"plain",onClick:te=>$(C)},{prepend:t(()=>[e(L,{icon:"mdi-lock"})]),default:t(()=>[e(ie,null,{default:t(()=>[g(A(C.is_active?"冻结":"解冻"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e(ue,{variant:"plain","base-color":"error",onClick:te=>f(C)},{prepend:t(()=>[e(L,{icon:"mdi-delete"})]),default:t(()=>[e(ie,null,{default:t(()=>[g("删除")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1536),[[he,s(p).is_superuser&&s(p).name!=C.name]])])]))),128))])]),_:1})]),_:1})]),_:1})):Z("",!0)]),_:1}),e(fe,{modelValue:s(R),"onUpdate:modelValue":r[13]||(r[13]=C=>B(R)?R.value=C:null),"max-width":"50rem",persistent:""},{default:t(()=>[e(T,{title:"新增用户"},{default:t(()=>[e(W,null,{default:t(()=>[e(ee,{onSubmit:le(()=>{},["prevent"])},{default:t(()=>[e(H,null,{default:t(()=>[e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(V).name,"onUpdate:modelValue":r[8]||(r[8]=C=>s(V).name=C),label:"用户名",rules:[s(re)]},null,8,["modelValue","rules"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(V).password,"onUpdate:modelValue":r[9]||(r[9]=C=>s(V).password=C),label:"密码",rules:[s(re)],type:s(c)?"text":"password","append-inner-icon":s(c)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":r[10]||(r[10]=C=>c.value=!s(c))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(V).email,"onUpdate:modelValue":r[11]||(r[11]=C=>s(V).email=C),label:"邮箱"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(Ce,null,{default:t(()=>[e(F,{onClick:r[12]||(r[12]=C=>R.value=!1)},{default:t(()=>[g(" 取消 ")]),_:1}),e(Se),e(F,{onClick:P},{default:t(()=>[g(" 确定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),He=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," 消息类型 "),l("th",{scope:"col"}," 微信 "),l("th",{scope:"col"}," Telegram "),l("th",{scope:"col"}," Slack "),l("th",{scope:"col"}," SynologyChat ")])],-1),je={key:0},Me=l("td",{colspan:"4",class:"text-center"}," 没有设置任何通知渠道 ",-1),Ne=[Me],qe={class:"d-flex flex-wrap gap-4 mt-4"},Ge=q({__name:"AccountSettingNotification",setup(M){const i=x([]),a=z.useToast();async function c(){try{const m=await S.get("message/switchs");i.value=m}catch(m){console.log(m)}}async function d(){try{(await S.post("message/switchs",i.value)).success?a.success("保存通知消息设置成功"):a.error("保存通知消息设置失败！")}catch(m){console.log(m)}}return J(()=>{c()}),(m,v)=>(b(),E(T,{title:"消息通知"},{default:t(()=>[e(W,null,{default:t(()=>[g(" 对应消息类型只会发送给选中的消息渠道。 ")]),_:1}),e(ce,{class:"text-no-wrap"},{default:t(()=>[He,l("tbody",null,[(b(!0),I(j,null,O(s(i),k=>(b(),I("tr",{key:k.mtype},[l("td",null,A(k.mtype),1),l("td",null,[e(Q,{modelValue:k.wechat,"onUpdate:modelValue":R=>k.wechat=R},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(Q,{modelValue:k.telegram,"onUpdate:modelValue":R=>k.telegram=R},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(Q,{modelValue:k.slack,"onUpdate:modelValue":R=>k.slack=R},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(Q,{modelValue:k.synologychat,"onUpdate:modelValue":R=>k.synologychat=R},null,8,["modelValue","onUpdate:modelValue"])])]))),128)),s(i).length===0?(b(),I("tr",je,Ne)):Z("",!0)])]),_:1}),e(ne),e(W,null,{default:t(()=>[e(ee,{onSubmit:le(()=>{},["prevent"])},{default:t(()=>[l("div",qe,[e(F,{mtype:"submit",onClick:d},{default:t(()=>[g(" 保存 ")]),_:1})])]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}}),We=q({__name:"AccountSettingRule",setup(M){const i=z.useToast(),a=x("seeder"),c=[{title:"站点优先",value:"site"},{title:"做种数优先",value:"seeder"}],d=x({include:"",exclude:""});async function m(){var V;try{const p=await S.get("system/setting/TorrentsPriority");a.value=(V=p.data)==null?void 0:V.value}catch(p){console.log(p)}}async function v(){var V,p;try{const n=await S.get("system/setting/DefaultFilterRules");(V=n.data)!=null&&V.value&&(d.value=(p=n.data)==null?void 0:p.value)}catch(n){console.log(n)}}async function k(){try{(await S.post("system/setting/TorrentsPriority",a.value)).success?i.success("优先规则保存成功"):i.error("优先规则保存失败！")}catch(V){console.log(V)}}async function R(){try{(await S.post("system/setting/DefaultFilterRules",d.value)).success?i.success("默认包含/排除规则保存成功"):i.error("默认包含/排除规则保存失败！")}catch(V){console.log(V)}}return J(()=>{m(),v()}),(V,p)=>(b(),E(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"下载优先规则"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 按站点优先级或资源种子数量排序和择优下载。 ")]),_:1}),e(W,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(H,null,{default:t(()=>[e(U,{cols:"12",md:"6"},{default:t(()=>[e(me,{modelValue:s(a),"onUpdate:modelValue":p[0]||(p[0]=n=>B(a)?a.value=n:null),items:c,label:"优先规则",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:k},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"默认过滤规则"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 设置在搜索和订阅时默认使用的过滤规则。 ")]),_:1}),e(W,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(H,null,{default:t(()=>[e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(d).include,"onUpdate:modelValue":p[1]||(p[1]=n=>s(d).include=n),type:"text",label:"包含（关键字、正则式）"},null,8,["modelValue"])]),_:1}),e(U,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:s(d).exclude,"onUpdate:modelValue":p[2]||(p[2]=n=>s(d).exclude=n),type:"text",label:"排除（关键字、正则式）"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:R},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const Oe=q({__name:"AccountSettingSite",setup(M){const i=z.useToast(),a=x(!1),c=x("重置站点数据"),d=x(!1);async function m(){try{d.value=!0,c.value="正在重置...",(await S.get("site/reset")).success?i.success("站点重置成功，请等待CookieCloud同步完成！"):i.error("站点重置失败！"),d.value=!1,c.value="重置站点数据"}catch(v){console.log(v)}}return(v,k)=>(b(),E(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"站点重置"},{default:t(()=>[e(W,null,{default:t(()=>[l("div",null,[e(Q,{modelValue:s(a),"onUpdate:modelValue":k[0]||(k[0]=R=>B(a)?a.value=R:null),label:"确认删除所有站点数据并重新同步。"},null,8,["modelValue"])]),e(F,{disabled:!s(a)||s(d),color:"error",class:"mt-3",onClick:m},{default:t(()=>[g(A(s(c)),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ye=q({__name:"AccountSettingWords",setup(M){const i=z.useToast(),a=x(""),c=x(""),d=x("");async function m(){var n;try{const w=await S.get("system/setting/CustomIdentifiers");a.value=(n=w.data)==null?void 0:n.value.join(`
`)}catch(w){console.log(w)}}async function v(){var n;try{const w=await S.get("system/setting/CustomReleaseGroups");c.value=(n=w.data)==null?void 0:n.value.join(`
`)}catch(w){console.log(w)}}async function k(){var n;try{const w=await S.get("system/setting/TransferExcludeWords");d.value=(n=w.data)==null?void 0:n.value.join(`
`)}catch(w){console.log(w)}}async function R(){try{(await S.post("system/setting/CustomIdentifiers",a.value.split(`
`))).success?i.success("自定义识别词保存成功"):i.error("自定义识别词保存失败！")}catch(n){console.log(n)}}async function V(){try{(await S.post("system/setting/CustomReleaseGroups",c.value.split(`
`))).success?i.success("自定义制作组/字幕组保存成功"):i.error("自定义制作组/字幕组保存失败！")}catch(n){console.log(n)}}async function p(){try{(await S.post("system/setting/TransferExcludeWords",d.value.split(`
`))).success?i.success("文件整理屏蔽词保存成功"):i.error("文件整理屏蔽词保存失败！")}catch(n){console.log(n)}}return J(()=>{m(),v(),k()}),(n,w)=>(b(),E(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"自定义识别词"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 添加规则对种子名或者文件名进行预处理以校正识别。 ")]),_:1}),e(D,null,{default:t(()=>[e(ae,{modelValue:s(a),"onUpdate:modelValue":w[0]||(w[0]=y=>B(a)?a.value=y:null),"auto-grow":"",placeholder:`支持正则表达式，特殊字符需要\\转义，一行为一组，支持以下几种配置格式：
屏蔽词
被替换词 => 替换词
前定位词 <> 后定位词 >> 集偏移量（EP）
被替换词 => 替换词 && 前定位词 <> 后定位词 >> 集偏移量（EP）`},null,8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:R},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"自定义制作组/字幕组"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 添加无法识别的制作组/字幕组。 ")]),_:1}),e(D,null,{default:t(()=>[e(ae,{modelValue:s(c),"onUpdate:modelValue":w[1]||(w[1]=y=>B(c)?c.value=y:null),"auto-grow":"",placeholder:"支持正则表达式，特殊字符需要\\转义，一行代表一个制作组/字幕组"},null,8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:V},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"文件整理屏蔽词"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 目录名或文件名中包含屏蔽词时不进行整理。 ")]),_:1}),e(D,null,{default:t(()=>[e(ae,{modelValue:s(d),"onUpdate:modelValue":w[2]||(w[2]=y=>B(d)?d.value=y:null),"auto-grow":"",placeholder:"支持正则表达式，特殊字符需要\\转义，一行代表一个屏蔽词"},null,8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:p},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ke={class:"px-3"},Xe={class:"section"},ze=l("div",null,[l("h3",{class:"heading"}," 关于 MoviePilot ")],-1),Je={class:"section border-t border-gray-800"},Qe={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},Ze=l("dt",{class:"block text-sm font-bold"}," 当前版本 ",-1),et={class:"flex text-sm sm:col-span-2 sm:mt-0"},tt={class:"flex-grow flex flex-row items-center truncate"},lt={class:"truncate"},st={key:0,href:"https://github.com/jxxghp/MoviePilot/releases",target:"_blank",rel:"noopener noreferrer"},at=l("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap bg-green-500 bg-opacity-80 border border-green-500 !text-green-100 ml-2 !cursor-pointer transition hover:bg-green-400"}," 最新 ",-1),ot=[at],nt={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},ut=l("dt",{class:"block text-sm font-bold"}," 配置目录 ",-1),it={class:"flex text-sm sm:col-span-2 sm:mt-0"},rt={class:"flex-grow undefined"},dt=l("div",{class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},[l("dt",{class:"block text-sm font-bold"}," 数据目录 "),l("dd",{class:"flex text-sm sm:col-span-2 sm:mt-0"},[l("span",{class:"flex-grow undefined"},[l("code",null,"/moviepilot")])])],-1),ct={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},ft=l("dt",{class:"block text-sm font-bold"}," 时区 ",-1),mt={class:"flex text-sm sm:col-span-2 sm:mt-0"},pt={class:"flex-grow undefined"},_t=ke('<div class="section"><div><h3 class="heading"> 支援 </h3></div><div class="section border-t border-gray-800"><dl><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 文档 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://github.com/jxxghp/MoviePilot/blob/main/README.md" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://github.com/jxxghp/MoviePilot/blob/main/README.md </a></span></dd></div></div><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 问题反馈 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://github.com/jxxghp/MoviePilot/issues/new/choose" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://github.com/jxxghp/MoviePilot/issues/new/choose </a></span></dd></div></div><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 发布频道 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://t.me/moviepilot_channel" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://t.me/moviepilot_channel </a></span></dd></div></div></dl></div></div>',1),vt={class:"section"},gt=l("h3",{class:"heading"}," 软件版本 ",-1),yt={class:"section space-y-3"},bt={class:"flex w-full flex-grow items-center justify-start space-x-2 truncate sm:justify-start"},xt={class:"truncate text-lg font-bold"},ht={class:"mr-2 whitespace-nowrap text-xs font-normal"},Vt={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-green-500 bg-opacity-80 border border-green-500 !text-green-100"},wt={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-indigo-500 bg-opacity-80 border border-indigo-500 !text-indigo-100"},Ct=q({__name:"AccountSettingAbout",setup(M){const i=x({}),a=x([]),c=x(!1),d=x(""),m=x(""),v=x("");function k(n,w){m.value=n,v.value=w.replaceAll(`\r
`,"<br />"),c.value=!0}async function R(){try{const n=await S.get("system/env");i.value=n.data}catch(n){console.log(n)}}async function V(){try{const n=await S.get("system/versions");a.value=n.data??[],a.value.length>0&&(d.value=a.value[0].tag_name)}catch(n){console.log(n)}}function p(n){return`${De(n)}前`}return J(()=>{R(),V()}),(n,w)=>{const y=ve;return b(),I(j,null,[l("div",Ke,[l("div",Xe,[ze,l("div",Je,[l("dl",null,[l("div",null,[l("div",Qe,[Ze,l("dd",et,[l("span",tt,[l("code",lt,A(s(i).VERSION),1),s(d)===s(i).VERSION?(b(),I("a",st,ot)):Z("",!0)])])])]),l("div",null,[l("div",nt,[ut,l("dd",it,[l("span",rt,[l("code",null,A(s(i).CONFIG_DIR),1)])])]),dt]),l("div",null,[l("div",ct,[ft,l("dd",mt,[l("span",pt,[l("code",null,A(s(i).TZ),1)])])])])])])]),_t,l("div",vt,[l("div",null,[gt,l("div",yt,[l("div",null,[(b(!0),I(j,null,O(s(a),_=>(b(),I("div",{key:_.tag_name,class:"mb-3 flex w-full flex-col space-y-3 rounded-md px-4 py-2 shadow-md ring-1 ring-gray-400 sm:flex-row sm:space-y-0 sm:space-x-3"},[l("div",bt,[l("span",xt,[l("span",ht,A(p(_.published_at)),1),g(" "+A(_.tag_name),1)]),_.tag_name===s(d)?(b(),I("span",Vt," 最新软件版本 ")):Z("",!0),_.tag_name===s(i).VERSION?(b(),I("span",wt," 当前版本 ")):Z("",!0)]),e(F,{onClick:le(o=>k(_.tag_name,_.body),["stop"])},{prepend:t(()=>[e(L,{icon:"mdi-text-box-outline"})]),default:t(()=>[g(" 查看变更日志 ")]),_:2},1032,["onClick"])]))),128))])])])])]),e(fe,{modelValue:s(c),"onUpdate:modelValue":w[1]||(w[1]=_=>B(c)?c.value=_:null),width:"600",scrollable:""},{default:t(()=>[e(T,null,{default:t(()=>[e(D,null,{default:t(()=>[e(y,{onClick:w[0]||(w[0]=_=>c.value=!1)}),e(pe,null,{default:t(()=>[g(A(s(m))+" 变更日志",1)]),_:1})]),_:1}),e(W,{innerHTML:s(v)},null,8,["innerHTML"])]),_:1})]),_:1},8,["modelValue"])],64)}}});const oe=q({__name:"FilterRuleCard",props:{pri:String,rules:Array,width:String,height:String},emits:["close","changed"],setup(M,{emit:i}){const a=M;function c(){i("close")}function d(v){i("changed",a.pri,v)}const m=x([{title:"特效字幕",value:" SPECSUB "},{title:"中文字幕",value:" CNSUB "},{title:"分辨率: 4K",value:" 4K "},{title:"分辨率: 1080P",value:" 1080P "},{title:"分辨率: 720P",value:" 720P "},{title:"排除: 720P",value:" !720P "},{title:"质量: 蓝光原盘",value:" BLU "},{title:"排除: 蓝光原盘",value:" !BLU "},{title:"质量: BLURAY",value:" BLURAY "},{title:"排除: BLURAY",value:" !BLURAY "},{title:"质量: UHD",value:" UHD "},{title:"排除: UHD",value:" !UHD "},{title:"质量: REMUX",value:" REMUX "},{title:"排除: REMUX",value:" !REMUX "},{title:"质量: WEB-DL",value:" WEBDL "},{title:"排除: WEB-DL",value:" !WEBDL "},{title:"编码: H265",value:" H265 "},{title:"排除: H265",value:" !H265 "},{title:"编码: H264",value:" H264 "},{title:"排除: H264",value:" !H264 "},{title:"效果: 杜比视界",value:" DOLBY "},{title:"排除: 杜比视界",value:" !DOLBY "},{title:"效果: HDR",value:" HDR "},{title:"排除: HDR",value:" !HDR "},{title:"国语配音",value:" CNVOI "},{title:"排除: 国语配音",value:" !CNVOI "},{title:"促销: 免费",value:" FREE "}]);return(v,k)=>{const R=ve;return b(),E(T,{variant:"tonal",width:a.width,height:a.height},{default:t(()=>[e(R,{onClick:c}),e(D,null,{default:t(()=>[e(pe,null,{default:t(()=>[g("优先级 "+A(a.pri),1)]),_:1}),e(H,null,{default:t(()=>[e(U,null,{default:t(()=>[(b(),E(me,{key:a.pri,modelValue:a.rules,"onUpdate:modelValue":[k[0]||(k[0]=V=>a.rules=V),d],variant:"underlined",items:s(m),chips:"",label:"",multiple:""},null,8,["modelValue","items"]))]),_:1})]),_:1})]),_:1})]),_:1},8,["width","height"])}}}),St={class:"grid gap-3 grid-filterrule-card"},kt=q({__name:"AccountSettingSearch",setup(M){const i=z.useToast(),a=x([]),c=x([]),d=x([]);async function m(){var y,_;try{const o=await S.get("system/setting/SearchFilterRules");if(o.success){const u=((_=(y=o.data)==null?void 0:y.value)==null?void 0:_.split(">"))??[];a.value=u==null?void 0:u.map((f,$)=>({pri:($+1).toString(),rules:f.split("&")}))}}catch(o){console.log(o)}}async function v(){try{let y="";a.value.length!==0&&(y=a.value.filter(o=>o.rules.length>0).map(o=>o.rules.join("&")).join(">")),(await S.post("system/setting/SearchFilterRules",y)).success?i.success("搜索优先级保存成功"):i.error("搜索优先级保存失败！")}catch(y){console.log(y)}}function k(y,_){const o=a.value.find(u=>u.pri===y);o&&(o.rules=_)}function R(y){const _=a.value.filter(o=>o.pri!==y).map((o,u)=>(o.pri=(u+1).toString(),o));a.value=_}function V(){const _={pri:(a.value.length+1).toString(),rules:[]};a.value.push(_)}async function p(){try{const y=await S.get("site/");c.value=y.filter(_=>_.is_active),n()}catch(y){console.log(y)}}async function n(){var y;try{const _=await S.get("system/setting/IndexerSites");d.value=((y=_.data)==null?void 0:y.value)??[]}catch(_){console.log(_)}}async function w(){try{(await S.post("system/setting/IndexerSites",d.value)).success?i.success("搜索站点保存成功"):i.error("搜索站点保存失败！")}catch(y){console.log(y)}}return J(()=>{m(),p()}),(y,_)=>(b(),E(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"搜索站点"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 只有选中的站点才会在搜索中使用。")]),_:1}),e(D,null,{default:t(()=>[e(_e,{modelValue:s(d),"onUpdate:modelValue":_[0]||(_[0]=o=>B(d)?d.value=o:null),column:"",multiple:""},{default:t(()=>[(b(!0),I(j,null,O(s(c),o=>(b(),E(se,{key:o.id,color:s(d).includes(o.id)?"primary":"",filter:"",variant:"outlined",value:o.id},{default:t(()=>[g(A(o.name),1)]),_:2},1032,["color","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:w},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"搜索优先级"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 设置在搜索时默认使用的优先级排序，未在优先级中的资源将不在搜索结果中显示。 ")]),_:1}),e(D,null,{default:t(()=>[l("div",St,[(b(!0),I(j,null,O(s(a),(o,u)=>(b(),E(oe,{key:u,pri:o.pri,rules:o.rules,onChanged:k,onClose:f=>R(o.pri)},null,8,["pri","rules","onClose"]))),128))])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",class:"me-2",onClick:_[1]||(_[1]=o=>v())},{default:t(()=>[g(" 保存 ")]),_:1}),e(F,{color:"success",variant:"tonal",onClick:_[2]||(_[2]=o=>V())},{default:t(()=>[e(L,{icon:"mdi-plus"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const Rt={class:"grid gap-3 grid-filterrule-card"},$t={class:"grid gap-3 grid-filterrule-card"},Ut=q({__name:"AccountSettingSubscribe",setup(M){const i=z.useToast(),a=x([]),c=x([]),d=x([]),m=x([]);async function v(){var o;try{const u=await S.get("system/setting/RssSites");m.value=((o=u.data)==null?void 0:o.value)??[]}catch(u){console.log(u)}}async function k(){try{(await S.post("system/setting/RssSites",m.value)).success?i.success("订阅站点保存成功"):i.error("订阅站点保存失败！")}catch(o){console.log(o)}}async function R(){try{const o=await S.get("site/");d.value=o.filter(u=>u.is_active),v()}catch(o){console.log(o)}}async function V(o){var u,f;try{const $=await S.get(`system/setting/${o}`);if($.success){const P=((f=(u=$.data)==null?void 0:u.value)==null?void 0:f.split(">"))??[],h=o==="SubscribeFilterRules"?a:c;h.value=P==null?void 0:P.map((r,Y)=>({pri:(Y+1).toString(),rules:r.split("&")}))}}catch($){console.log($)}}async function p(o){try{let u="";const f=o==="SubscribeFilterRules"?a:c;f.value.length!==0&&(u=f.value.filter(h=>h.rules.length>0).map(h=>h.rules.join("&")).join(">"));const $=await S.post(`system/setting/${o}`,u),P=o==="SubscribeFilterRules"?"订阅优先级":"洗版优先级";$.success?i.success(`${P}保存成功`):i.error(`${P}保存失败！`)}catch(u){console.log(u)}}function n(o,u){const f=a.value.find($=>$.pri===o);f&&(f.rules=u)}function w(o,u){const f=c.value.find($=>$.pri===o);f&&(f.rules=u)}function y(o,u){const f=(o==="SubscribeFilterRules"?a.value:c.value).filter($=>$.pri!==u).map(($,P)=>($.pri=(P+1).toString(),$));o==="SubscribeFilterRules"?a.value=f:c.value=f}function _(o){const u=o==="SubscribeFilterRules"?a:c,$={pri:(u.value.length+1).toString(),rules:[]};u.value.push($)}return J(()=>{R(),V("SubscribeFilterRules"),V("BestVersionFilterRules")}),(o,u)=>(b(),E(H,null,{default:t(()=>[e(U,{cols:"12"},{default:t(()=>[e(T,{title:"订阅站点"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 只有选中的站点才会在订阅中使用。")]),_:1}),e(D,null,{default:t(()=>[e(_e,{modelValue:s(m),"onUpdate:modelValue":u[0]||(u[0]=f=>B(m)?m.value=f:null),column:"",multiple:""},{default:t(()=>[(b(!0),I(j,null,O(s(d),f=>(b(),E(se,{key:f.id,color:s(m).includes(f.id)?"primary":"",filter:"",variant:"outlined",value:f.id},{default:t(()=>[g(A(f.name),1)]),_:2},1032,["color","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",onClick:k},{default:t(()=>[g(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"订阅优先级"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 设置在正常订阅时默认使用的优先级，未在优先级中的资源将不会自动下载。 ")]),_:1}),e(D,null,{default:t(()=>[l("div",Rt,[(b(!0),I(j,null,O(s(a),(f,$)=>(b(),E(oe,{key:$,pri:f.pri,rules:f.rules,onChanged:n,onClose:P=>y("SubscribeFilterRules",f.pri)},null,8,["pri","rules","onClose"]))),128))])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",class:"me-2",onClick:u[1]||(u[1]=f=>p("SubscribeFilterRules"))},{default:t(()=>[g(" 保存 ")]),_:1}),e(F,{color:"success",variant:"tonal",onClick:u[2]||(u[2]=f=>_("SubscribeFilterRules"))},{default:t(()=>[e(L,{icon:"mdi-plus"})]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{cols:"12"},{default:t(()=>[e(T,{title:"洗版优先级"},{default:t(()=>[e(N,null,{default:t(()=>[g(" 设置在订阅洗版时使用的优先级，匹配优先级1时洗版完成。 ")]),_:1}),e(D,null,{default:t(()=>[l("div",$t,[(b(!0),I(j,null,O(s(c),(f,$)=>(b(),E(oe,{key:$,pri:f.pri,rules:f.rules,onChanged:w,onClose:P=>y("BestVersionFilterRules",f.pri)},null,8,["pri","rules","onClose"]))),128))])]),_:1}),e(D,null,{default:t(()=>[e(F,{type:"submit",class:"me-2",onClick:u[3]||(u[3]=f=>p("BestVersionFilterRules"))},{default:t(()=>[g(" 保存 ")]),_:1}),e(F,{color:"success",variant:"tonal",onClick:u[4]||(u[4]=f=>_("BestVersionFilterRules"))},{default:t(()=>[e(L,{icon:"mdi-plus"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const Bt=q({__name:"setting",setup(M){const i=Re(),a=x(i.params.tab),c=[{title:"用户",icon:"mdi-account",tab:"account"},{title:"站点",icon:"mdi-web",tab:"site"},{title:"搜索",icon:"mdi-magnify",tab:"search"},{title:"订阅",icon:"mdi-rss",tab:"subscribe"},{title:"规则",icon:"mdi-filter-cog",tab:"filter"},{title:"通知",icon:"mdi-bell",tab:"notification"},{title:"词表",icon:"mdi-file-word-box",tab:"words"},{title:"关于",icon:"mdi-information",tab:"about"}];return(d,m)=>(b(),I("div",null,[e($e,{modelValue:s(a),"onUpdate:modelValue":m[0]||(m[0]=v=>B(a)?a.value=v:null),"show-arrows":""},{default:t(()=>[(b(),I(j,null,O(c,v=>e(Fe,{key:v.icon,value:v.tab},{default:t(()=>[e(L,{size:"20",start:"",icon:v.icon},null,8,["icon"]),g(" "+A(v.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(ne),e(Ue,{modelValue:s(a),"onUpdate:modelValue":m[1]||(m[1]=v=>B(a)?a.value=v:null),class:"mt-5 disable-tab-transition"},{default:t(()=>[e(K,{value:"account"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Le)]),_:1})]),_:1}),e(K,{value:"site"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Oe)]),_:1})]),_:1}),e(K,{value:"search"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(kt)]),_:1})]),_:1}),e(K,{value:"subscribe"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Ut)]),_:1})]),_:1}),e(K,{value:"filter"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(We)]),_:1})]),_:1}),e(K,{value:"notification"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Ge)]),_:1})]),_:1}),e(K,{value:"words"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Ye)]),_:1})]),_:1}),e(K,{value:"about"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Ct)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});export{Bt as default};