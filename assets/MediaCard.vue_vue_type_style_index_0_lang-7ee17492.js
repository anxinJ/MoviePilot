import{_ as ve}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-3e7268af.js";import{E as ye}from"./ExistIcon-14874f76.js";import{d as we,af as $e,r as p,ax as xe,p as Se,e as T,o as h,c as q,m as i,i as n,A as K,z as Ce,j as u,ag as O,n as D,a as v,R as W,S as Z,a4 as L,K as b,t as c,f as V,$ as j,B as G,P as N,aC as Ve,aT as ke,aU as Ie,ab as Ee,a2 as Be,F as J,M as Q,W as Le,ah as je,aw as Me,Y as Te,Z as z,V as De,a0 as Ne,I as ze,at as P,au as A,aj as X}from"./index-29acab4d.js";import{b as Pe}from"./formatters-16dfb57c.js";import{a as x}from"./index-585ed20f.js";const ee="/assets/no-image-f5f483aa.jpeg",Ae={class:"w-full h-full"},Fe={class:"font-bold"},Ue={class:"mb-1 text-white font-extrabold text-xl line-clamp-2 overflow-hidden text-ellipsis ..."},He={class:"leading-4 line-clamp-4 overflow-hidden text-ellipsis ..."},Re={class:"flex align-center justify-between"},Ye={class:"w-full h-full"},qe={class:"my-2 text-center"},Je=we({__name:"MediaCard",props:{media:Object,width:String,height:String},setup(F){const a=F,y=$e.useToast(),k=p(!1),M=p(!1),U=p(!0),S=p(!1),I=p(!1),C=p({}),w=p(!1),E=p([]),$=p([]);function te(){w.value=!1,$.value.forEach(t=>{B(t.season_number)})}function H(t){return t==="电影"?"border-blue-500 bg-blue-600":t==="电视剧"?" bg-indigo-500 border-indigo-600":"border-purple-600 bg-purple-600"}async function ae(){var t,e,s,r,l;if(((t=a.media)==null?void 0:t.type)==="电视剧"&&((e=a.media)!=null&&e.tmdb_id)){if(await de(),!E.value){y.error(`${(s=a.media)==null?void 0:s.title} 查询剧集信息失败！`);return}if(await le(),!U.value)return;E.value.length===1?B(1):w.value=!0}else if(((r=a.media)==null?void 0:r.type)==="电视剧"){const d=((l=a.media)==null?void 0:l.season)??1;B(d)}else B()}async function B(t=0){var e,s,r,l,d,_,o;P();try{let m=I.value?1:0;t&&((e=a.media)!=null&&e.tmdb_id)&&(m=C.value[t]?0:1);const f=await x.post("subscribe/",{name:(s=a.media)==null?void 0:s.title,type:(r=a.media)==null?void 0:r.type,year:(l=a.media)==null?void 0:l.year,tmdbid:(d=a.media)==null?void 0:d.tmdb_id,doubanid:(_=a.media)==null?void 0:_.douban_id,season:t,best_version:m});f.success&&(S.value=!0),se(f.success,((o=a.media)==null?void 0:o.title)??"",t,f.message,m)}catch(m){console.error(m)}A()}function se(t,e,s,r,l){s&&(e=`${e} ${Pe(s.toString())}`);let d="订阅";l>0&&(d="洗版订阅"),t?y.success(`${e} 添加${d}成功！`):y.error(`${e} 添加${d}失败：${r}！`)}async function oe(){var t,e,s,r,l,d;P();try{const _=(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`,o=await x.delete(`subscribe/media/${_}`,{params:{season:(r=a.media)==null?void 0:r.season}});o.success?(S.value=!1,y.success(`${(l=a.media)==null?void 0:l.title} 已取消订阅！`)):y.error(`${(d=a.media)==null?void 0:d.title} 取消订阅失败：${o.message}！`)}catch(_){console.error(_)}A()}async function re(){var t;try{await ne((t=a.media)==null?void 0:t.season)&&(S.value=!0)}catch(e){console.error(e)}}async function ie(){var t,e,s,r,l;try{(await x.get("media/exists",{params:{tmdbid:(t=a.media)==null?void 0:t.tmdb_id,title:(e=a.media)==null?void 0:e.title,year:(s=a.media)==null?void 0:s.year,season:(r=a.media)==null?void 0:r.season,mtype:(l=a.media)==null?void 0:l.type}})).success&&(I.value=!0)}catch(d){console.error(d)}}async function ne(t=0){var e,s,r;try{const l=(e=a.media)!=null&&e.tmdb_id?`tmdb:${(s=a.media)==null?void 0:s.tmdb_id}`:`douban:${(r=a.media)==null?void 0:r.douban_id}`;return(await x.get(`subscribe/media/${l}`,{params:{season:t}})).id||null}catch(l){console.error(l)}return null}async function le(){var t;P();try{const e=await x.post("download/notexists",a.media);e&&e.forEach(s=>{let r=0;s.episodes.length===0?r=2:s.episodes.length<s.total_episode&&(r=1),C.value[s.season]=r})}catch{y.error(`${(t=a.media)==null?void 0:t.title}无法识别TMDB媒体信息！`),U.value=!1}A()}async function de(){var t;try{E.value=await x.get(`tmdb/seasons/${(t=a.media)==null?void 0:t.tmdb_id}`)}catch(e){console.error(e)}}function ce(){S.value?oe():ae()}function ue(t){const e=C.value[t];return e?e===1?"warning":e===2?"error":"success":"success"}function me(t){const e=C.value[t];return e?e===1?"部分缺失":e===2?"缺失":"已存在":"已存在"}function fe(){var t,e,s,r;X.push({path:"/media",query:{mediaid:`${(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`}`,type:(r=a.media)==null?void 0:r.type}})}function pe(){var t,e,s,r;X.push({path:"/resource",query:{keyword:`${(t=a.media)!=null&&t.tmdb_id?`tmdb:${(e=a.media)==null?void 0:e.tmdb_id}`:`douban:${(s=a.media)==null?void 0:s.douban_id}`}`,type:(r=a.media)==null?void 0:r.type,area:"title"}})}xe(()=>{re(),ie()});const be=Se(()=>{var e,s;if(M.value)return ee;const t=((s=(e=a.media)==null?void 0:e.poster_path)==null?void 0:s.replace("original","w500"))??ee;return t.includes("doubanio.com")?`/api/v1/douban/img/${encodeURIComponent(t)}`:t});function _e(t){return t?`https://image.tmdb.org/t/p/w500${t}`:""}function ge(t){if(!t)return"";const e=new Date(t);return`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日`}function he(t){return t?new Date(t).getFullYear():""}return(t,e)=>{const s=T("VSkeletonLoader"),r=ye,l=T("IconBtn"),d=ve,_=T("VBottomSheet");return h(),q(Q,null,[i(Ie,Ve(ke(a)),{default:n(o=>[i(K,Ce(o.props,{height:a.height,width:a.width,class:["outline-none shadow ring-gray-500 rounded-lg",{"transition transform-cpu duration-300 scale-105 shadow-lg":o.isHovering,"ring-1":u(k)}]}),{default:n(()=>[i(O,{"aspect-ratio":"2/3",src:u(be),class:D(["object-cover aspect-w-2 aspect-h-3",o.isHovering?"on-hover":""]),cover:"",onLoad:e[0]||(e[0]=m=>k.value=!0),onError:e[1]||(e[1]=m=>M.value=!0)},{placeholder:n(()=>[v("div",Ae,[i(s,{class:"object-cover aspect-w-2 aspect-h-3"})])]),default:n(()=>{var m,f;return[W(i(L,{variant:"elevated",size:"small",class:D([H(((m=a.media)==null?void 0:m.type)||""),"absolute left-2 top-2 bg-opacity-80 shadow-md text-white font-bold"])},{default:n(()=>{var g;return[b(c((g=a.media)==null?void 0:g.type),1)]}),_:1},8,["class"]),[[Z,u(k)]]),u(I)?(h(),V(r,{key:0})):j("",!0),u(k)&&((f=a.media)!=null&&f.vote_average)&&!u(I)?(h(),V(L,{key:1,variant:"elevated",size:"small",class:D([H("rating"),"absolute right-2 top-2 bg-opacity-80 shadow-md text-white font-bold"])},{default:n(()=>{var g;return[b(c((g=a.media)==null?void 0:g.vote_average),1)]}),_:1},8,["class"])):j("",!0),W(i(G,{class:"w-full flex flex-col flex-wrap justify-end align-left text-white absolute bottom-0 cursor-pointer pa-2",onClick:N(fe,["stop"])},{default:n(()=>{var g,R,Y;return[v("span",Fe,c((g=a.media)==null?void 0:g.year),1),v("h1",Ue,c((R=a.media)==null?void 0:R.title),1),v("p",He,c((Y=a.media)==null?void 0:Y.overview),1),v("div",Re,[i(l,{icon:"mdi-magnify",color:"white",onClick:N(pe,["stop"])},null,8,["onClick"]),i(l,{icon:"mdi-heart",color:u(S)?"error":"white",onClick:N(ce,["stop"])},null,8,["color","onClick"])])]}),_:2},1032,["onClick"]),[[Z,o.isHovering||u(M)]])]}),_:2},1032,["src","class"])]),_:2},1040,["height","width","class"])]),_:1},16),i(_,{modelValue:u(w),"onUpdate:modelValue":e[4]||(e[4]=o=>J(w)?w.value=o:null),inset:"",scrollable:""},{default:n(()=>[i(K,null,{default:n(()=>[i(d,{onClick:e[2]||(e[2]=o=>w.value=!1)}),i(Ee,{class:"pe-10"},{default:n(()=>{var o;return[b(" 订阅 - "+c((o=a.media)==null?void 0:o.title),1)]}),_:1}),i(G,null,{default:n(()=>[i(Be,{selected:u($),"onUpdate:selected":e[3]||(e[3]=o=>J($)?$.value=o:null),lines:"three","select-strategy":"classic"},{default:n(()=>[(h(!0),q(Q,null,Le(u(E),(o,m)=>(h(),V(Ne,{key:m,value:o},{prepend:n(()=>[i(O,{height:"90",width:"60",src:_e(o.poster_path||""),"aspect-ratio":"2/3",class:"object-cover rounded shadow ring-gray-500 me-3",cover:""},{placeholder:n(()=>[v("div",Ye,[i(s,{class:"object-cover aspect-w-2 aspect-h-3"})])]),_:2},1032,["src"])]),append:n(({isSelected:f})=>[i(je,{start:""},{default:n(()=>[i(Me,{"model-value":f},null,8,["model-value"])]),_:2},1024)]),default:n(()=>[i(Te,null,{default:n(()=>[b(" 第 "+c(o.season_number)+" 季 ",1)]),_:2},1024),i(z,{class:"mt-1 me-2"},{default:n(()=>[o.vote_average?(h(),V(L,{key:0,color:"primary",size:"small",class:"mb-1"},{default:n(()=>[i(De,{icon:"mdi-star"}),b(" "+c(o.vote_average),1)]),_:2},1024)):j("",!0),b(" "+c(he(o.air_date||""))+" • "+c(o.episode_count)+" 集 ",1)]),_:2},1024),i(z,null,{default:n(()=>{var f;return[b(" 《"+c((f=F.media)==null?void 0:f.title)+"》第 "+c(o.season_number)+" 季于 "+c(ge(o.air_date||""))+" 首播。 ",1)]}),_:2},1024),i(z,null,{default:n(()=>[u(C)?(h(),V(L,{key:0,class:"mt-2",size:"small",color:ue(o.season_number||0)},{default:n(()=>[b(c(me(o.season_number||0)),1)]),_:2},1032,["color"])):j("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])]),_:1}),v("div",qe,[i(ze,{disabled:u($).length===0,width:"30%",onClick:te},{default:n(()=>[b(c(u($).length===0?"请选择订阅季":"提交订阅"),1)]),_:1},8,["disabled"])])]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Je as _};
