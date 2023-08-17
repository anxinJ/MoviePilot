import{aj as X,g as $}from"./index-6958f571.js";var O={exports:{}};(function(P,A){(function(j,H){P.exports=H(X)})(self,function(j){return(()=>{var H=[,(a,n,t)=>{t.r(n),t.d(n,{default:()=>c});var e=t(2),i=t(5);t(9),i.default.render=e.render,i.default.__file="package/PullRefresh.vue";const c=i.default},(a,n,t)=>{t.r(n),t.d(n,{render:()=>e.render});var e=t(3)},(a,n,t)=>{t.r(n),t.d(n,{render:()=>l});var e=t(4);const i={class:"lb-pull-refresh",ref:"root"},c={key:0,class:"pull-text"},m={key:1,class:"pull-text-loading"};function l(o,d,s,g,y,h){return(0,e.openBlock)(),(0,e.createElementBlock)("div",i,[(0,e.createElementVNode)("div",{class:"lb-pull-refresh__track",style:(0,e.normalizeStyle)(o.trackStyle),onTouchstart:d[0]||(d[0]=(...T)=>o.onTouchStart&&o.onTouchStart(...T)),onTouchmove:d[1]||(d[1]=(...T)=>o.onTouchMove&&o.onTouchMove(...T)),onTouchend:d[2]||(d[2]=(...T)=>o.onTouchEnd&&o.onTouchEnd(...T)),onTouchcancel:d[3]||(d[3]=(...T)=>o.onTouchend&&o.onTouchend(...T))},[(0,e.createElementVNode)("div",{style:(0,e.normalizeStyle)(o.getHeadStyle),class:"lb-pull-refresh__head"},[o.TEXT_STATUS.includes(o.status)?((0,e.openBlock)(),(0,e.createElementBlock)("div",c,(0,e.toDisplayString)(o.getStatusText()),1)):(0,e.createCommentVNode)("v-if",!0),o.status==="loading"?((0,e.openBlock)(),(0,e.createElementBlock)("div",m,(0,e.toDisplayString)(o.loadingText),1)):(0,e.createCommentVNode)("v-if",!0)],4),(0,e.renderSlot)(o.$slots,"default")],36)],512)}},a=>{a.exports=j},(a,n,t)=>{t.r(n),t.d(n,{default:()=>e.default});var e=t(6)},(a,n,t)=>{t.r(n),t.d(n,{default:()=>m});var e=t(4),i=t(7),c=t(8);const m=(0,e.defineComponent)({name:"pull-refresh",props:{disabled:Boolean,successText:{type:String,default:"刷新成功"},pullingText:{type:String,default:"下拉即可刷新..."},loosingText:{type:String,default:"释放即可刷新..."},loadingText:{type:String,default:"加载中..."},pullDistance:[Number,String],modelValue:{type:Boolean,default:!1},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:50}},emits:["refresh","update:modelValue"],setup(l,{emit:o,slots:d}){let s=!1;const g=(0,e.ref)(null);let y=(0,i.default)(g);const h=(0,e.reactive)({status:"normal",distance:0,duration:0}),T=(0,e.ref)({}),x=(0,c.default)(),E=(0,e.computed)(()=>l.headHeight!==50?{height:`${l.headHeight}px`}:{}),D=()=>h.status!=="loading"&&h.status!=="success"&&!l.disabled,N=(b,_)=>{const r=+(l.pullDistance||l.headHeight);h.distance=b,h.status=_?"loading":b===0?"normal":b<r?"pulling":"loosing",T.value={transitionDuration:`${h.duration}ms`,transform:h.distance?`translate3d(0,${h.distance}px, 0)`:""}},B=b=>{s=function(_){const r="scrollTop"in _?_.scrollTop:_.pageYOffset;return Math.max(r,0)}(y.value)===0,s&&(h.duration=0,x.start(b))};return(0,e.watch)(()=>l.modelValue,b=>{h.duration=+l.animationDuration,b?N(+l.headHeight,!0):d.success||l.successText?(h.status="success",setTimeout(()=>{N(0)},+l.successDuration)):N(0,!1)}),{...(0,e.toRefs)(h),root:g,trackStyle:T,TEXT_STATUS:["pulling","loosing","success"],getHeadStyle:E,getStatusText:()=>{const{status:b}=h;return b==="normal"?"":l[`${b}Text`]||""},onTouchStart:b=>{D()&&B(b)},onTouchMove:b=>{if(D()){s||B(b);const{deltaY:_}=x;x.move(b),s&&_.value>=0&&x.isVertical()&&(function(r,u){(typeof r.cancelable!="boolean"||r.cancelable)&&r.preventDefault()}(b),N((r=>{const u=+(l.pullDistance||l.headHeight);return r>u&&(r=r<2*u?u+(r-u)/2:1.5*u+(r-2*u)/4),Math.round(r)})(_.value)))}},onTouchEnd:()=>{s&&x.deltaY.value&&D()&&(h.duration=+l.animationDuration,h.status==="loosing"?(N(+l.headHeight,!0),o("update:modelValue",!0),(0,e.nextTick)(()=>o("refresh"))):N(0))}}}})},(a,n,t)=>{t.r(n),t.d(n,{getScrollParent:()=>o,default:()=>d});var e=t(4);const i=typeof window<"u",c=/scroll|auto/i,m=i?window:void 0;function l(s){return s.tagName!=="HTML"&&s.tagName!=="BODY"&&s.nodeType===1}function o(s,g=m){let y=s;for(;y&&y!==g&&l(y);){const{overflowY:h}=window.getComputedStyle(y);if(c.test(h))return y;y=y.parentNode}return g}function d(s,g){const y=(0,e.ref)(null);return(0,e.onMounted)(()=>{s.value&&(y.value=o(s.value,g))}),y}},(a,n,t)=>{t.r(n),t.d(n,{default:()=>i});var e=t(4);function i(){const c=(0,e.ref)(0),m=(0,e.ref)(0),l=(0,e.ref)(0),o=(0,e.ref)(0),d=(0,e.ref)(0),s=(0,e.ref)(0),g=(0,e.ref)(""),y=()=>{l.value=0,o.value=0,d.value=0,s.value=0,g.value=""};return{move:h=>{const T=h.touches[0];var x,E;l.value=T.clientX<0?0:T.clientX-c.value,o.value=T.clientY-m.value,d.value=Math.abs(l.value),s.value=Math.abs(o.value),g.value||(g.value=(x=d.value)>(E=s.value)&&x>10?"horizontal":E>x&&E>10?"vertical":"")},start:h=>{y(),c.value=h.touches[0].clientX,m.value=h.touches[0].clientY},reset:y,startX:c,startY:m,deltaX:l,deltaY:o,offsetX:d,offsetY:s,direction:g,isVertical:()=>g.value==="vertical",isHorizontal:()=>g.value==="horizontal"}}},(a,n,t)=>{t.r(n);var e=t(10),i={};for(const c in e)c!=="default"&&(i[c]=()=>e[c]);t.d(n,i)},(a,n,t)=>{var e=t(11);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[a.id,e,""]]),e.locals&&(a.exports=e.locals),(0,t(13).default)("2e4b41e4",e,!1,{})},(a,n,t)=>{t.r(n),t.d(n,{default:()=>c});var e=t(12),i=t.n(e)()(function(m){return m[1]});i.push([a.id,`
:root {\r
  --lb-pull-refresh-head-height: 50px;\r
  --lb-pull-refresh-head-font-size: 14px;\r
  --lb-pull-refresh-head-text-color: #969696;\r
  --lb-pull-refresh-loading-icon-size: 16px;
}
.lb-pull-refresh {\r
  overflow: hidden;\r
  user-select: none;\r
  height: 100%;
}
.lb-pull-refresh__track {\r
  position: relative;\r
  height: 100%;\r
  transition-property: transform;
}
.lb-pull-refresh__head {\r
    position: absolute;\r
    left: 0;\r
    width: 100%;\r
    height: var(--lb-pull-refresh-head-height);\r
    overflow: hidden;\r
    color: var(--lb-pull-refresh-head-text-color);\r
    font-size: var(--lb-pull-refresh-head-font-size);\r
    line-height: var(--lb-pull-refresh-head-height);\r
    text-align: center;\r
    transform: translateY(-100%);
}\r
`,""]);const c=i},a=>{a.exports=function(n){var t=[];return t.toString=function(){return this.map(function(e){var i=n(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i}).join("")},t.i=function(e,i,c){typeof e=="string"&&(e=[[null,e,""]]);var m={};if(c)for(var l=0;l<this.length;l++){var o=this[l][0];o!=null&&(m[o]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);c&&m[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},(a,n,t)=>{t.r(n),t.d(n,{default:()=>T});var e=t(14),i=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},m=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,o=0,d=!1,s=function(){},g=null,y="data-vue-ssr-id",h=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function T(r,u,v,p){d=v,g=p||{};var f=(0,e.default)(r,u);return x(f),function(S){for(var w=[],C=0;C<f.length;C++){var U=f[C];(k=c[U.id]).refs--,w.push(k)}for(S?x(f=(0,e.default)(r,S)):f=[],C=0;C<w.length;C++){var k;if((k=w[C]).refs===0){for(var V=0;V<k.parts.length;V++)k.parts[V]();delete c[k.id]}}}}function x(r){for(var u=0;u<r.length;u++){var v=r[u],p=c[v.id];if(p){p.refs++;for(var f=0;f<p.parts.length;f++)p.parts[f](v.parts[f]);for(;f<v.parts.length;f++)p.parts.push(D(v.parts[f]));p.parts.length>v.parts.length&&(p.parts.length=v.parts.length)}else{var S=[];for(f=0;f<v.parts.length;f++)S.push(D(v.parts[f]));c[v.id]={id:v.id,refs:1,parts:S}}}}function E(){var r=document.createElement("style");return r.type="text/css",m.appendChild(r),r}function D(r){var u,v,p=document.querySelector("style["+y+'~="'+r.id+'"]');if(p){if(d)return s;p.parentNode.removeChild(p)}if(h){var f=o++;p=l||(l=E()),u=b.bind(null,p,f,!1),v=b.bind(null,p,f,!0)}else p=E(),u=_.bind(null,p),v=function(){p.parentNode.removeChild(p)};return u(r),function(S){if(S){if(S.css===r.css&&S.media===r.media&&S.sourceMap===r.sourceMap)return;u(r=S)}else v()}}var N,B=(N=[],function(r,u){return N[r]=u,N.filter(Boolean).join(`
`)});function b(r,u,v,p){var f=v?"":p.css;if(r.styleSheet)r.styleSheet.cssText=B(u,f);else{var S=document.createTextNode(f),w=r.childNodes;w[u]&&r.removeChild(w[u]),w.length?r.insertBefore(S,w[u]):r.appendChild(S)}}function _(r,u){var v=u.css,p=u.media,f=u.sourceMap;if(p&&r.setAttribute("media",p),g.ssrId&&r.setAttribute(y,u.id),f&&(v+=`
/*# sourceURL=`+f.sources[0]+" */",v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */"),r.styleSheet)r.styleSheet.cssText=v;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(v))}}},(a,n,t)=>{function e(i,c){for(var m=[],l={},o=0;o<c.length;o++){var d=c[o],s=d[0],g={id:i+":"+o,css:d[1],media:d[2],sourceMap:d[3]};l[s]?l[s].parts.push(g):m.push(l[s]={id:s,parts:[g]})}return m}t.r(n),t.d(n,{default:()=>e})}],z={};function M(a){var n=z[a];if(n!==void 0)return n.exports;var t=z[a]={id:a,exports:{}};return H[a](t,t.exports,M),t.exports}M.n=a=>{var n=a&&a.__esModule?()=>a.default:()=>a;return M.d(n,{a:n}),n},M.d=(a,n)=>{for(var t in n)M.o(n,t)&&!M.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:n[t]})},M.o=(a,n)=>Object.prototype.hasOwnProperty.call(a,n),M.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var Y={};return(()=>{M.r(Y),M.d(Y,{default:()=>n});var a=M(1);a.default.install=t=>{t.component(a.default.name,a.default)};const n=a.default})(),Y})()})})(O);var R=O.exports;const q=$(R);export{q as P};