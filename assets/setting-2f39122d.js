import{d as j,r as x,af as Q,N as ge,q as z,e as ye,o as y,c as S,m as e,i as t,D as R,A as T,B as M,X as xe,j as s,a as l,I as $,V as B,a1 as oe,Q as ae,C as q,E as W,F,K as _,f as A,P as te,a5 as fe,M as L,W as N,t as D,a4 as le,R as he,S as be,ac as Ve,a2 as we,a0 as ne,Y as ue,$ as J,G as Ce,H as ke,L as me,aG as ee,ab as pe,a8 as _e,aa as I,az as O,as as ie,O as se,aH as Re,b as Se,aI as $e,aJ as Ue,aK as Ie,aL as K,T as X}from"./index-3d39bc5b.js";import{r as re}from"./index-705cb9e8.js";import{a as b}from"./index-e40242f1.js";import{a as de}from"./avatar-1-4acd3e19.js";import{_ as ve}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-afaca0cb.js";import{c as De}from"./index-d2c33d5a.js";const Te={class:"d-flex flex-column justify-center gap-5"},Ee={class:"d-flex flex-wrap gap-2"},Fe=l("span",{class:"d-none d-sm-block"},"上传头像",-1),Ae=l("span",{class:"d-none d-sm-block"},"重置",-1),Pe=l("p",{class:"text-body-1 mb-0"}," 允许 JPG、GIF 或 PNG 格式， 最大尺寸 800K。 ",-1),Be=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," 用户名 "),l("th",{scope:"col"}," 邮箱 "),l("th",{scope:"col"}," 状态 "),l("th",{scope:"col"}," 管理员 "),l("th",{scope:"col",class:"w-5"})])],-1),Le=j({__name:"AccountSettingAccount",setup(H){const r=x(!1),u=x(!1),v=x(!1),f=x(""),d=x(""),m=Q.useToast(),V=x(),w=x(!1),U=ge({name:"",password:"",email:""}),k=x({id:0,name:"",password:"",email:"",is_active:!1,is_superuser:!1,avatar:""}),c=x([]);function p(h){const i=new FileReader,{files:Y}=h.target;Y&&Y.length>0&&(i.readAsDataURL(Y[0]),i.onload=()=>{typeof i.result=="string"&&(k.value.avatar=i.result,o())})}function E(){k.value.avatar=de}async function a(){try{const h=await b.get("user/current");k.value=h,k.value.avatar||(k.value.avatar=de)}catch(h){console.log(h)}}async function o(){if(f.value||d.value){if(f.value!==d.value){m.error("两次输入的密码不一致");return}k.value.password=f.value}try{const h=await b.put("user",k.value);h.success?m.success("用户信息保存成功！"):m.error(`用户信息保存失败：${h.message}！`)}catch(h){console.log(h)}}async function n(){try{const h=await b.get("/user");c.value=h}catch(h){console.log(h)}}async function C(h){try{const i=await b.delete(`user/${h.name}`);i.success?(m.success("用户删除成功！"),n()):m.error(`用户删除失败：${i.message}！`)}catch(i){console.log(i)}}async function P(h){try{h.is_active=!h.is_active;const i=await b.put("user",h);i.success?(m.success("用户冻结成功！"),n()):m.error(`用户冻结失败：${i.message}！`)}catch(i){console.log(i)}}async function G(){try{const h=await b.post("user",U);h.success?(m.success("用户新增成功！"),n(),w.value=!1):m.error(`用户新增失败：${h.message}！`)}catch(h){console.log(h)}}return z(()=>{a(),n()}),(h,i)=>{const Y=ye("IconBtn");return y(),S(L,null,[e(q,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(T,{title:"个人信息"},{default:t(()=>[e(M,{class:"d-flex"},{default:t(()=>[e(xe,{rounded:"lg",size:"100",class:"me-6",image:s(k).avatar},null,8,["image"]),l("form",Te,[l("div",Ee,[e($,{color:"primary",onClick:i[0]||(i[0]=g=>{var Z;return(Z=s(V))==null?void 0:Z.click()})},{default:t(()=>[e(B,{icon:"mdi-cloud-upload-outline",class:"d-sm-none"}),Fe]),_:1}),l("input",{ref_key:"refInputEl",ref:V,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:p},null,544),e($,{type:"reset",color:"error",variant:"tonal",onClick:E},{default:t(()=>[Ae,e(B,{icon:"mdi-refresh",class:"d-sm-none"})]),_:1})]),Pe])]),_:1}),e(oe),e(M,null,{default:t(()=>[e(ae,{class:"mt-6"},{default:t(()=>[e(q,null,{default:t(()=>[e(R,{md:"6",cols:"12"},{default:t(()=>[e(W,{modelValue:s(k).name,"onUpdate:modelValue":i[1]||(i[1]=g=>s(k).name=g),readonly:"",label:"用户名"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(k).email,"onUpdate:modelValue":i[2]||(i[2]=g=>s(k).email=g),label:"邮箱",type:"email"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(f),"onUpdate:modelValue":i[3]||(i[3]=g=>F(f)?f.value=g:null),type:s(r)?"text":"password","append-inner-icon":s(r)?"mdi-eye-off-outline":"mdi-eye-outline",label:"新密码",autocomplete:"new-password","onClick:appendInner":i[4]||(i[4]=g=>r.value=!s(r))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(d),"onUpdate:modelValue":i[5]||(i[5]=g=>F(d)?d.value=g:null),type:s(u)?"text":"password","append-inner-icon":s(u)?"mdi-eye-off-outline":"mdi-eye-outline",label:"确认新密码","onClick:appendInner":i[6]||(i[6]=g=>u.value=!s(u))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(R,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e($,{onClick:o},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(k).is_superuser?(y(),A(R,{key:0,cols:"12"},{default:t(()=>[e(T,{title:"所有用户"},{append:t(()=>[e(Y,{onClick:i[7]||(i[7]=te(g=>w.value=!0,["stop"]))},{default:t(()=>[e(B,{icon:"mdi-plus"})]),_:1})]),default:t(()=>[e(fe,{class:"text-no-wrap"},{default:t(()=>[Be,l("tbody",null,[(y(!0),S(L,null,N(s(c),g=>(y(),S("tr",{key:g.name},[l("td",null,D(g.name),1),l("td",null,D(g.email),1),l("td",null,[g.is_active?(y(),A(le,{key:0,color:"success","text-color":"white"},{default:t(()=>[_(" 激活 ")]),_:1})):(y(),A(le,{key:1,color:"error","text-color":"white"},{default:t(()=>[_(" 冻结 ")]),_:1}))]),l("td",null,D(g.is_superuser?"是":"否"),1),l("td",null,[he(e(Y,null,{default:t(()=>[e(B,{icon:"mdi-dots-vertical"}),e(Ve,{activator:"parent","close-on-content-click":""},{default:t(()=>[e(we,null,{default:t(()=>[e(ne,{variant:"plain",onClick:Z=>P(g)},{prepend:t(()=>[e(B,{icon:"mdi-lock"})]),default:t(()=>[e(ue,null,{default:t(()=>[_(D(g.is_active?"冻结":"解冻"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e(ne,{variant:"plain","base-color":"error",onClick:Z=>C(g)},{prepend:t(()=>[e(B,{icon:"mdi-delete"})]),default:t(()=>[e(ue,null,{default:t(()=>[_("删除")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1536),[[be,s(k).is_superuser&&s(k).name!=g.name]])])]))),128))])]),_:1})]),_:1})]),_:1})):J("",!0)]),_:1}),e(me,{modelValue:s(w),"onUpdate:modelValue":i[13]||(i[13]=g=>F(w)?w.value=g:null),"max-width":"800",persistent:""},{default:t(()=>[e(T,{title:"新增用户"},{default:t(()=>[e(M,null,{default:t(()=>[e(ae,{onSubmit:te(()=>{},["prevent"])},{default:t(()=>[e(q,null,{default:t(()=>[e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(U).name,"onUpdate:modelValue":i[8]||(i[8]=g=>s(U).name=g),label:"用户名",rules:[s(re)]},null,8,["modelValue","rules"])]),_:1}),e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(U).password,"onUpdate:modelValue":i[9]||(i[9]=g=>s(U).password=g),label:"密码",rules:[s(re)],type:s(v)?"text":"password","append-inner-icon":s(v)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":i[10]||(i[10]=g=>v.value=!s(v))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(R,{cols:"12",md:"6"},{default:t(()=>[e(W,{modelValue:s(U).email,"onUpdate:modelValue":i[11]||(i[11]=g=>s(U).email=g),label:"邮箱"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(Ce,null,{default:t(()=>[e($,{onClick:i[12]||(i[12]=g=>w.value=!1)},{default:t(()=>[_(" 取消 ")]),_:1}),e(ke),e($,{onClick:G},{default:t(()=>[_(" 确定 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),He=l("thead",null,[l("tr",null,[l("th",{scope:"col"}," 消息类型 "),l("th",{scope:"col"}," 微信 "),l("th",{scope:"col"}," Telegram "),l("th",{scope:"col"}," Slack ")])],-1),Me={key:0},Ne=l("td",{colspan:"4",class:"text-center"}," 没有设置任何通知渠道 ",-1),je=[Ne],Ge={class:"d-flex flex-wrap gap-4 mt-4"},We=j({__name:"AccountSettingNotification",setup(H){const r=x([]),u=Q.useToast();async function v(){try{const d=await b.get("message/switchs");r.value=d}catch(d){console.log(d)}}async function f(){try{(await b.post("message/switchs",r.value)).success?u.success("保存通知消息设置成功"):u.error("保存通知消息设置失败！")}catch(d){console.log(d)}}return z(()=>{v()}),(d,m)=>(y(),A(T,{title:"消息通知"},{default:t(()=>[e(M,null,{default:t(()=>[_(" 对应消息类型只会发送给选中的消息渠道 ")]),_:1}),e(fe,{class:"text-no-wrap"},{default:t(()=>[He,l("tbody",null,[(y(!0),S(L,null,N(s(r),V=>(y(),S("tr",{key:V.mtype},[l("td",null,D(V.mtype),1),l("td",null,[e(ee,{modelValue:V.wechat,"onUpdate:modelValue":w=>V.wechat=w},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(ee,{modelValue:V.telegram,"onUpdate:modelValue":w=>V.telegram=w},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(ee,{modelValue:V.slack,"onUpdate:modelValue":w=>V.slack=w},null,8,["modelValue","onUpdate:modelValue"])])]))),128)),s(r).length===0?(y(),S("tr",Me,je)):J("",!0)])]),_:1}),e(oe),e(M,null,{default:t(()=>[e(ae,{onSubmit:te(()=>{},["prevent"])},{default:t(()=>[l("div",Ge,[e($,{mtype:"submit",onClick:f},{default:t(()=>[_(" 保存 ")]),_:1})])]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}}),ce=j({__name:"FilterRuleCard",props:{pri:String,rules:Array,width:String,height:String},emits:["close","changed"],setup(H,{emit:r}){const u=H;function v(){r("close")}function f(m){r("changed",u.pri,m)}const d=x([{title:"特效字幕",value:" SPECSUB "},{title:"中文字幕",value:" CNSUB "},{title:"分辨率: 4K",value:" 4K "},{title:"分辨率: 1080P",value:" 1080P "},{title:"分辨率: 720P",value:" 720P "},{title:"排除: 720P",value:" !720P "},{title:"质量: 蓝光原盘",value:" BLU "},{title:"排除: 蓝光原盘",value:" !BLU "},{title:"质量: BLURAY",value:" BLURAY "},{title:"排除: BLURAY",value:" !BLURAY "},{title:"质量: UHD",value:" UHD "},{title:"排除: UHD",value:" !UHD "},{title:"质量: REMUX",value:" REMUX "},{title:"排除: REMUX",value:" !REMUX "},{title:"质量: WEB-DL",value:" WEBDL "},{title:"排除: WEB-DL",value:" !WEBDL "},{title:"编码: H265",value:" H265 "},{title:"排除: H265",value:" !H265 "},{title:"编码: H264",value:" H264 "},{title:"排除: H264",value:" !H264 "},{title:"效果: 杜比视界",value:" DOLBY "},{title:"排除: 杜比视界",value:" !DOLBY "},{title:"效果: HDR",value:" HDR "},{title:"排除: HDR",value:" !HDR "},{title:"国语配音",value:" CNVOI "},{title:"排除: 国语配音",value:" !CNVOI "},{title:"促销: 免费",value:" FREE "}]);return(m,V)=>{const w=ve;return y(),A(T,{variant:"tonal",width:u.width,height:u.height},{default:t(()=>[e(w,{onClick:v}),e(I,null,{default:t(()=>[e(pe,null,{default:t(()=>[_("优先级 "+D(u.pri),1)]),_:1}),e(q,null,{default:t(()=>[e(R,null,{default:t(()=>[(y(),A(_e,{key:u.pri,modelValue:u.rules,"onUpdate:modelValue":[V[0]||(V[0]=U=>u.rules=U),f],variant:"underlined",items:s(d),chips:"",label:"",multiple:""},null,8,["modelValue","items"]))]),_:1})]),_:1})]),_:1})]),_:1},8,["width","height"])}}}),qe={class:"grid gap-3 grid-filterrule-card"},Oe=l("span",{class:"d-none d-sm-block"},"增加规则",-1),Ye={class:"grid gap-3 grid-filterrule-card"},Ke=l("span",{class:"d-none d-sm-block"},"增加规则",-1),Xe=j({__name:"AccountSettingRule",setup(H){const r=Q.useToast(),u=x("seeder"),v=[{title:"站点优先",value:"site"},{title:"做种数优先",value:"seeder"}],f=x([]),d=x([]);async function m(a){var o,n;try{const C=await b.get(`system/setting/${a}`);if(C.success){const P=((n=(o=C.data)==null?void 0:o.value)==null?void 0:n.split(">"))??[],G=a==="FilterRules"?f:d;G.value=P==null?void 0:P.map((h,i)=>({pri:(i+1).toString(),rules:h.split("&")}))}}catch(C){console.log(C)}}async function V(){var a;try{const o=await b.get("system/setting/TorrentsPriority");u.value=(a=o.data)==null?void 0:a.value}catch(o){console.log(o)}}async function w(a){try{let o="";f.value.length!==0&&(o=(a==="FilterRules"?f:d).value.filter(G=>G.rules.length>0).map(G=>G.rules.join("&")).join(">"));const n=await b.post(`system/setting/${a}`,o),C=a==="FilterRules"?"过滤规则":"洗版规则";n.success?r.success(`${C}保存成功`):r.error(`${C}保存失败！`)}catch(o){console.log(o)}}async function U(){try{(await b.post("system/setting/TorrentsPriority",u.value)).success?r.success("优先规则保存成功"):r.error("优先规则保存失败！")}catch(a){console.log(a)}}function k(a,o){const n=f.value.find(C=>C.pri===a);n&&(n.rules=o)}function c(a,o){const n=d.value.find(C=>C.pri===a);n&&(n.rules=o)}function p(a,o){const n=(a==="FilterRules"?f.value:d.value).filter(C=>C.pri!==o).map((C,P)=>(C.pri=(P+1).toString(),C));a==="FilterRules"?f.value=n:d.value=n}function E(a){const o=a==="FilterRules"?f:d,C={pri:(o.value.length+1).toString(),rules:[]};o.value.push(C)}return z(()=>{V(),m("FilterRules"),m("FilterRules2")}),(a,o)=>(y(),A(q,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(T,{title:"过滤规则"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 设置在搜索和订阅时默认使用的过滤规则 ")]),_:1}),e(I,null,{default:t(()=>[l("div",qe,[(y(!0),S(L,null,N(s(f),(n,C)=>(y(),A(ce,{key:C,pri:n.pri,rules:n.rules,onChanged:k,onClose:P=>p("FilterRules",n.pri)},null,8,["pri","rules","onClose"]))),128))])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",class:"me-2",onClick:o[0]||(o[0]=n=>w("FilterRules"))},{default:t(()=>[_(" 保存 ")]),_:1}),e($,{color:"success",variant:"tonal",onClick:o[1]||(o[1]=n=>E("FilterRules"))},{default:t(()=>[e(B,{icon:"mdi-plus"}),Oe]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"洗版规则"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 设置在订阅洗版时使用的过滤规则，匹配优先级1时洗版完成 ")]),_:1}),e(I,null,{default:t(()=>[l("div",Ye,[(y(!0),S(L,null,N(s(d),(n,C)=>(y(),A(ce,{key:C,pri:n.pri,rules:n.rules,onChanged:c,onClose:P=>p("FilterRules2",n.pri)},null,8,["pri","rules","onClose"]))),128))])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",class:"me-2",onClick:o[2]||(o[2]=n=>w("FilterRules2"))},{default:t(()=>[_(" 保存 ")]),_:1}),e($,{color:"success",variant:"tonal",onClick:o[3]||(o[3]=n=>E("FilterRules2"))},{default:t(()=>[e(B,{icon:"mdi-plus"}),Ke]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"下载优先规则"},{default:t(()=>[e(M,null,{default:t(()=>[e(_e,{modelValue:s(u),"onUpdate:modelValue":o[4]||(o[4]=n=>F(u)?u.value=n:null),items:v,label:"优先规则",outlined:""},null,8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:U},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const ze=j({__name:"AccountSettingSite",setup(H){const r=Q.useToast(),u=x([]),v=x([]),f=x([]),d=x(!1),m=x("重置站点数据"),V=x(!1);async function w(){try{const a=await b.get("site");f.value=a.filter(o=>o.is_active),U(),c()}catch(a){console.log(a)}}async function U(){var a;try{const o=await b.get("system/setting/IndexerSites");u.value=((a=o.data)==null?void 0:a.value)??[]}catch(o){console.log(o)}}async function k(){try{(await b.post("system/setting/IndexerSites",u.value)).success?r.success("搜索站点保存成功"):r.error("搜索站点保存失败！")}catch(a){console.log(a)}}async function c(){var a;try{const o=await b.get("system/setting/RssSites");v.value=((a=o.data)==null?void 0:a.value)??[]}catch(o){console.log(o)}}async function p(){try{(await b.post("system/setting/RssSites",v.value)).success?r.success("订阅站点保存成功"):r.error("订阅站点保存失败！")}catch(a){console.log(a)}}async function E(){try{V.value=!0,m.value="正在重置...",(await b.get("site/reset")).success?(r.success("站点重置成功，请等待CookieCloud同步完成！"),w()):r.error("站点重置失败！"),V.value=!1,m.value="重置站点数据"}catch(a){console.log(a)}}return z(()=>{w()}),(a,o)=>(y(),A(q,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(T,{title:"搜索站点"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 只有选中的站点才会在搜索中使用")]),_:1}),e(I,null,{default:t(()=>[e(ie,{modelValue:s(u),"onUpdate:modelValue":o[0]||(o[0]=n=>F(u)?u.value=n:null),column:"",multiple:""},{default:t(()=>[(y(!0),S(L,null,N(s(f),n=>(y(),A(le,{key:n.id,color:s(u).includes(n.id)?"primary":"",filter:"",variant:"outlined",value:n.id},{default:t(()=>[_(D(n.name),1)]),_:2},1032,["color","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:k},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"订阅站点"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 只有选中的站点才会在订阅中使用")]),_:1}),e(I,null,{default:t(()=>[e(ie,{modelValue:s(v),"onUpdate:modelValue":o[1]||(o[1]=n=>F(v)?v.value=n:null),column:"",multiple:""},{default:t(()=>[(y(!0),S(L,null,N(s(f),n=>(y(),A(le,{key:n.id,color:s(v).includes(n.id)?"primary":"",filter:"",variant:"outlined",value:n.id},{default:t(()=>[_(D(n.name),1)]),_:2},1032,["color","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:p},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"站点重置"},{default:t(()=>[e(M,null,{default:t(()=>[l("div",null,[e(ee,{modelValue:s(d),"onUpdate:modelValue":o[2]||(o[2]=n=>F(d)?d.value=n:null),label:"确认删除所有站点数据并重新同步"},null,8,["modelValue"])]),e($,{disabled:!s(d)||s(V),color:"error",class:"mt-3",onClick:E},{default:t(()=>[_(D(s(m)),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),Je=j({__name:"AccountSettingWords",setup(H){const r=Q.useToast(),u=x(""),v=x(""),f=x("");async function d(){var c;try{const p=await b.get("system/setting/CustomIdentifiers");u.value=(c=p.data)==null?void 0:c.value.join(`
`)}catch(p){console.log(p)}}async function m(){var c;try{const p=await b.get("system/setting/CustomReleaseGroups");v.value=(c=p.data)==null?void 0:c.value.join(`
`)}catch(p){console.log(p)}}async function V(){var c;try{const p=await b.get("system/setting/TransferExcludeWords");f.value=(c=p.data)==null?void 0:c.value.join(`
`)}catch(p){console.log(p)}}async function w(){try{(await b.post("system/setting/CustomIdentifiers",u.value.split(`
`))).success?r.success("自定义识别词保存成功"):r.error("自定义识别词保存失败！")}catch(c){console.log(c)}}async function U(){try{(await b.post("system/setting/CustomReleaseGroups",v.value.split(`
`))).success?r.success("自定义制作组/字幕组保存成功"):r.error("自定义制作组/字幕组保存失败！")}catch(c){console.log(c)}}async function k(){try{(await b.post("system/setting/TransferExcludeWords",f.value.split(`
`))).success?r.success("文件整理屏蔽词保存成功"):r.error("文件整理屏蔽词保存失败！")}catch(c){console.log(c)}}return z(()=>{d(),m(),V()}),(c,p)=>(y(),A(q,null,{default:t(()=>[e(R,{cols:"12"},{default:t(()=>[e(T,{title:"自定义识别词"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 添加规则对种子名或者文件名进行预处理以校正识别 ")]),_:1}),e(I,null,{default:t(()=>[e(se,{modelValue:s(u),"onUpdate:modelValue":p[0]||(p[0]=E=>F(u)?u.value=E:null),"auto-grow":"",placeholder:`支持正则表达式，特殊字符需要\\转义，一行为一组，支持三种配置格式：
屏蔽词
被替换词 => 替换词
前定位词 <> 后定位词 >> 偏移量（EP）`},null,8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:w},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"自定义制作组/字幕组"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 添加无法识别的制作组/字幕组 ")]),_:1}),e(I,null,{default:t(()=>[e(se,{modelValue:s(v),"onUpdate:modelValue":p[1]||(p[1]=E=>F(v)?v.value=E:null),"auto-grow":"",placeholder:"支持正则表达式，特殊字符需要\\转义，一行代表一个制作组/字幕组"},null,8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:U},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(R,{cols:"12"},{default:t(()=>[e(T,{title:"文件整理屏蔽词"},{default:t(()=>[e(O,null,{default:t(()=>[_(" 目录名或文件名中包含屏蔽词时不进行整理 ")]),_:1}),e(I,null,{default:t(()=>[e(se,{modelValue:s(f),"onUpdate:modelValue":p[2]||(p[2]=E=>F(f)?f.value=E:null),"auto-grow":"",placeholder:"支持正则表达式，特殊字符需要\\转义，一行代表一个屏蔽词"},null,8,["modelValue"])]),_:1}),e(I,null,{default:t(()=>[e($,{type:"submit",onClick:k},{default:t(()=>[_(" 保存 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Qe={class:"px-3"},Ze={class:"section"},et=l("div",null,[l("h3",{class:"heading"}," 关于 MoviePilot ")],-1),tt={class:"section border-t border-gray-800"},lt={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},st=l("dt",{class:"block text-sm font-bold"}," 当前版本 ",-1),at={class:"flex text-sm sm:col-span-2 sm:mt-0"},ot={class:"flex-grow flex flex-row items-center truncate"},nt={class:"truncate"},ut={key:0,href:"https://github.com/jxxghp/MoviePilot/releases",target:"_blank",rel:"noopener noreferrer"},it=l("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap bg-green-500 bg-opacity-80 border border-green-500 !text-green-100 ml-2 !cursor-pointer transition hover:bg-green-400"}," 最新 ",-1),rt=[it],dt={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},ct=l("dt",{class:"block text-sm font-bold"}," 配置目录 ",-1),ft={class:"flex text-sm sm:col-span-2 sm:mt-0"},mt={class:"flex-grow undefined"},pt=l("div",{class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},[l("dt",{class:"block text-sm font-bold"}," 数据目录 "),l("dd",{class:"flex text-sm sm:col-span-2 sm:mt-0"},[l("span",{class:"flex-grow undefined"},[l("code",null,"/moviepilot")])])],-1),_t={class:"max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"},vt=l("dt",{class:"block text-sm font-bold"}," 时区 ",-1),gt={class:"flex text-sm sm:col-span-2 sm:mt-0"},yt={class:"flex-grow undefined"},xt=Re('<div class="section"><div><h3 class="heading"> 支援 </h3></div><div class="section border-t border-gray-800"><dl><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 文档 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://github.com/jxxghp/MoviePilot/blob/main/README.md" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://github.com/jxxghp/MoviePilot/blob/main/README.md </a></span></dd></div></div><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 问题反馈 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://github.com/jxxghp/MoviePilot/issues/new/choose" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://github.com/jxxghp/MoviePilot/issues/new/choose </a></span></dd></div></div><div><div class="max-w-6xl py-4 sm:grid sm:grid-cols-3 sm:gap-4"><dt class="block text-sm font-bold"> 发布频道 </dt><dd class="flex text-sm sm:col-span-2 sm:mt-0"><span class="flex-grow undefined"><a href="https://t.me/moviepilot_channel" target="_blank" rel="noreferrer" class="text-indigo-500 transition duration-300 hover:underline"> https://t.me/moviepilot_channel </a></span></dd></div></div></dl></div></div>',1),ht={class:"section"},bt=l("h3",{class:"heading"}," 软件版本 ",-1),Vt={class:"section space-y-3"},wt={class:"flex w-full flex-grow items-center justify-start space-x-2 truncate sm:justify-start"},Ct={class:"truncate text-lg font-bold"},kt={class:"mr-2 whitespace-nowrap text-xs font-normal"},Rt={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-green-500 bg-opacity-80 border border-green-500 !text-green-100"},St={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-indigo-500 bg-opacity-80 border border-indigo-500 !text-indigo-100"},$t=j({__name:"AccountSettingAbout",setup(H){const r=x({}),u=x([]),v=x(!1),f=x(""),d=x(""),m=x("");function V(c,p){d.value=c,m.value=p.replaceAll(`\r
`,"<br />"),v.value=!0}async function w(){try{const c=await b.get("system/env");r.value=c.data}catch(c){console.log(c)}}async function U(){try{const c=await b.get("system/versions");u.value=c.data??[],u.value.length>0&&(f.value=u.value[0].tag_name)}catch(c){console.log(c)}}function k(c){return`${De(c)}前`}return z(()=>{w(),U()}),(c,p)=>{const E=ve;return y(),S(L,null,[l("div",Qe,[l("div",Ze,[et,l("div",tt,[l("dl",null,[l("div",null,[l("div",lt,[st,l("dd",at,[l("span",ot,[l("code",nt,D(s(r).VERSION),1),s(f)===s(r).VERSION?(y(),S("a",ut,rt)):J("",!0)])])])]),l("div",null,[l("div",dt,[ct,l("dd",ft,[l("span",mt,[l("code",null,D(s(r).CONFIG_DIR),1)])])]),pt]),l("div",null,[l("div",_t,[vt,l("dd",gt,[l("span",yt,[l("code",null,D(s(r).TZ),1)])])])])])])]),xt,l("div",ht,[l("div",null,[bt,l("div",Vt,[l("div",null,[(y(!0),S(L,null,N(s(u),a=>(y(),S("div",{key:a.tag_name,class:"mb-3 flex w-full flex-col space-y-3 rounded-md px-4 py-2 shadow-md ring-1 ring-gray-400 sm:flex-row sm:space-y-0 sm:space-x-3"},[l("div",wt,[l("span",Ct,[l("span",kt,D(k(a.published_at)),1),_(" "+D(a.tag_name),1)]),a.tag_name===s(f)?(y(),S("span",Rt," 最新软件版本 ")):J("",!0),a.tag_name===s(r).VERSION?(y(),S("span",St," 当前版本 ")):J("",!0)]),e($,{onClick:te(o=>V(a.tag_name,a.body),["stop"])},{prepend:t(()=>[e(B,{icon:"mdi-text-box-outline"})]),default:t(()=>[_(" 查看变更日志 ")]),_:2},1032,["onClick"])]))),128))])])])])]),e(me,{modelValue:s(v),"onUpdate:modelValue":p[1]||(p[1]=a=>F(v)?v.value=a:null),width:"600",scrollable:""},{default:t(()=>[e(T,null,{default:t(()=>[e(I,null,{default:t(()=>[e(E,{onClick:p[0]||(p[0]=a=>v.value=!1)}),e(pe,null,{default:t(()=>[_(D(s(d))+" 变更日志",1)]),_:1})]),_:1}),e(M,{innerHTML:s(m)},null,8,["innerHTML"])]),_:1})]),_:1},8,["modelValue"])],64)}}});const At=j({__name:"setting",setup(H){const r=Se(),u=x(r.params.tab),v=[{title:"用户",icon:"mdi-account",tab:"account"},{title:"站点",icon:"mdi-web",tab:"site"},{title:"规则",icon:"mdi-filter-cog",tab:"filter"},{title:"通知",icon:"mdi-bell",tab:"notification"},{title:"词表",icon:"mdi-file-word-box",tab:"words"},{title:"关于",icon:"mdi-information",tab:"about"}];return(f,d)=>(y(),S("div",null,[e($e,{modelValue:s(u),"onUpdate:modelValue":d[0]||(d[0]=m=>F(u)?u.value=m:null),"show-arrows":""},{default:t(()=>[(y(),S(L,null,N(v,m=>e(Ie,{key:m.icon,value:m.tab},{default:t(()=>[e(B,{size:"20",start:"",icon:m.icon},null,8,["icon"]),_(" "+D(m.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(oe),e(Ue,{modelValue:s(u),"onUpdate:modelValue":d[1]||(d[1]=m=>F(u)?u.value=m:null),class:"mt-5 disable-tab-transition"},{default:t(()=>[e(K,{value:"account"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Le)]),_:1})]),_:1}),e(K,{value:"site"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(ze)]),_:1})]),_:1}),e(K,{value:"filter"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Xe)]),_:1})]),_:1}),e(K,{value:"notification"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(We)]),_:1})]),_:1}),e(K,{value:"words"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e(Je)]),_:1})]),_:1}),e(K,{value:"about"},{default:t(()=>[e(X,{name:"fade-slide",appear:""},{default:t(()=>[e($t)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});export{At as default};
