import{a as v}from"./index-228e1652.js";import{_ as V}from"./MediaCard.vue_vue_type_style_index_0_lang-53f53763.js";import{_ as b}from"./NoDataFound.vue_vue_type_script_setup_true_lang-5d770d0c.js";import{d as L,r as s,e as B,o as r,c as l,j as i,m as g,a3 as M,$ as d,i as h,M as k,W as S,f as x}from"./index-d97604e4.js";const D={key:0,class:"mt-12 w-full text-center text-gray-500 text-sm flex flex-col items-center"},H={key:0,class:"grid gap-4 grid-media-card mx-3",tabindex:"0"},N=L({__name:"MediaCardListView",props:{apipath:String,params:Object},setup(y){const n=y;function p(){return document.body.scrollHeight-(window.innerHeight||document.documentElement.clientHeight)>2}const c=s(1),u=s(!1),o=s(!1),t=s([]),a=s([]);function f(){let e={page:c.value};return n.params&&(e={...e,...n.params}),e}async function w({done:e}){try{if(!n.apipath)return;if(u.value){e("ok");return}if(u.value=!0,p()){if(a.value=await v.get(n.apipath,{params:f()}),o.value=!0,a.value.length===0){e("ok");return}t.value=[...t.value,...a.value],c.value++}else for(;!p();){if(a.value=await v.get(n.apipath,{params:f()}),o.value=!0,a.value.length===0){e("ok");return}t.value=[...t.value,...a.value],c.value++}u.value=!1,e("ok")}catch(_){console.error(_),e("error")}}return(e,_)=>{const C=B("VInfiniteScroll");return r(),l(k,null,[i(o)?d("",!0):(r(),l("div",D,[g(M,{size:"48",indeterminate:"",color:"primary"})])),g(C,{mode:"intersect",side:"end",items:i(t),class:"overflow-hidden",onLoad:w},{loading:h(()=>[]),default:h(()=>[i(t).length>0?(r(),l("div",H,[(r(!0),l(k,null,S(i(t),m=>(r(),x(V,{key:m.tmdb_id||m.douban_id,media:m},null,8,["media"]))),128))])):d("",!0),i(t).length===0&&i(o)?(r(),x(b,{key:1,"error-code":"404","error-title":"没有数据","error-description":"无法获取到TMDB媒体信息。"})):d("",!0)]),_:1},8,["items"])],64)}}});export{N as _};