if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_-61f449d2.js",revision:null},{url:"assets/_plugin-vue_export-helper-c27b6911.js",revision:null},{url:"assets/avatar-1-4acd3e19.js",revision:null},{url:"assets/blank-e5bb7bfd.js",revision:null},{url:"assets/browse-13106230.js",revision:null},{url:"assets/calendar-a5a06f93.js",revision:null},{url:"assets/credits-09b60adb.js",revision:null},{url:"assets/dashboard-e1abf8a3.js",revision:null},{url:"assets/default-c760bb09.js",revision:null},{url:"assets/DialogCloseBtn.vue_vue_type_script_setup_true_lang-dc645124.js",revision:null},{url:"assets/downloading-61ee3620.js",revision:null},{url:"assets/ExistIcon-c209383b.js",revision:null},{url:"assets/filemanager-089c7f9c.js",revision:null},{url:"assets/formatters-16dfb57c.js",revision:null},{url:"assets/history-e84e0719.js",revision:null},{url:"assets/index-705cb9e8.js",revision:null},{url:"assets/index-8a8d2865.js",revision:null},{url:"assets/index-973676b3.js",revision:null},{url:"assets/index-d2c33d5a.js",revision:null},{url:"assets/index-df31f177.js",revision:null},{url:"assets/login-bc94df94.js",revision:null},{url:"assets/media-488e78cc.js",revision:null},{url:"assets/MediaCard.vue_vue_type_style_index_0_lang-8df45b97.js",revision:null},{url:"assets/MediaCardListView.vue_vue_type_style_index_0_lang-698f1a6e.js",revision:null},{url:"assets/MediaCardSlideView.vue_vue_type_script_setup_true_lang-8dd3b8fd.js",revision:null},{url:"assets/MediaInfoCard.vue_vue_type_script_setup_true_lang-dae7c9f7.js",revision:null},{url:"assets/NoDataFound.vue_vue_type_script_setup_true_lang-7364b069.js",revision:null},{url:"assets/person-3d0c9d31.js",revision:null},{url:"assets/PersonCard.vue_vue_type_style_index_0_lang-34868e87.js",revision:null},{url:"assets/plugin-80e7fb36.js",revision:null},{url:"assets/ranking-d17acfea.js",revision:null},{url:"assets/resource-a251d11d.js",revision:null},{url:"assets/setting-900da0d0.js",revision:null},{url:"assets/site-f5111b99.js",revision:null},{url:"assets/style-11b47e25.css",revision:null},{url:"assets/subscribe-movie-4596b7e6.js",revision:null},{url:"assets/subscribe-tv-0913b8f8.js",revision:null},{url:"assets/SubscribeListView.vue_vue_type_style_index_0_lang-458c83ce.js",revision:null},{url:"assets/TmdbSelectorCard.vue_vue_type_script_setup_true_lang-32f3f007.js",revision:null},{url:"assets/webfontloader-c61ab7a2.js",revision:null},{url:"index.html",revision:"aebcc2e8689023f24699dcd9c15e40ec"},{url:"loader.css",revision:"06ed83ee757905477a847f4f880e2eec"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
