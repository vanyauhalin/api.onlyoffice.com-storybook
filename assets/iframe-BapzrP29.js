function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./main.story-DuqsyrAZ.js","./main-GpuiM6_D.js","./preact.module-BGZS-fhn.js","./main-BjCMb_E_.js","./main-LyXGk272.js","./main-DIEyNR2v.js","./clsx-B-dksMZM.js","./GithubIcon-CoLQSXXG.js","./main-Dpz_9EEB.js","./ChevronRightIcon-ZHxdnDVG.js","./main-B4tVgU8W.js","./main-CeZgRJBv.js","./hooks.module-BqWZPo7t.js","./main.story-CQb6YpQa.js","./main.story-DbOqHmPs.js","./MagnifyingGlassIcon-u9hgdrBa.js","./main-BCPT5Nat.js","./main-ByLWEQrm.js","./use.story-ByvuGv5b.js","./main.story-DJvPp96u.js","./main-EHJN3-NQ.js","./main.story-_esnoWqX.js","./main.story-CDddCArP.js","./main.story-7ADbPngs.js","./main-BhfpKIv1.js","./use.story-VtOVo83X.js","./main-BcFeQ9FJ.js","./main-CsSpQ0Iz.js","./main.story-BiOcC1Gk.js","./main-B1oS_Iqn.js","./use.story-Afbo4IFL.js","./main.story-BiP9jWEV.js","./CloseIcon-CwEXBeXb.js","./MenuIcon-B8dI-wdF.js","./main.story-CoQBpsBB.js","./OnlyofficeBetaLogo-BOAqJvn8.js","./main.story-D9DOj2kG.js","./main.story-BDgBWbDt.js","./JavascriptSdkIcon-CLKuss9m.js","./main-Ct3f7Pyg.js","./main.story-B5fnfEXL.js","./main-TBfWLzY6.js","./main.story-CdGfGHgB.js","./main-COqzSKLq.js","./use.story-oMJjPZaR.js","./main.story-aIAZXaC4.js","./JavascriptSdkIcon-DvZr7Ff-.js","./main-YOs7wSM_.js","./main.story-Djl-W8h1.js","./main.story-BpytpSa9.js","./main-DBeNRR-h.js","./main.story-XyP3G_70.js","./main.story-DsGu4du6.js","./main-BTS_ov0M.js","./SpikyWow-D2AnOsIW.js","./main-CiwqFC_z.js","./main.story-BTgkqx-A.js","./main.story-BTxJ3_SB.js","./main.story-DMo3sRcL.js","./main.story-DjHk0Uyl.js","./main.story-C6rMqooY.js","./main.story-BidzRXK2.js","./main.story-CskicUSA.js","./main.story-Dair3jz1.js","./main.story-DcspCHcL.js","./main.story-uCCDlWuT.js","./main.story-Cs5rIgjv.js","./main.story-1WEriah8.js","./main.story-C1Ajeyig.js","./main.story-BESr9X_T.js","./main.story-BCbhp10u.js","./main.story-qgersnND.js","./colors.story-BKeJAWxZ.js","./preview-CPPM6s2L.js","./preview-CO2SBcZp.css","./sizes.story-BoI3WAvW.js","./main.story-BdB-0goj.js","./main.story-tBQOBWB0.js","./entry-preview-Bf4oBNXQ.js","./index-DrFu-skq.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function m(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const d="modulepreload",y=function(o,_){return new URL(o,_).href},l={},t=function(_,a,m){let r=Promise.resolve();if(a&&a.length>0){const e=document.getElementsByTagName("link");r=Promise.all(a.map(i=>{if(i=y(i,m),i in l)return;l[i]=!0;const n=i.endsWith(".css"),E=n?'[rel="stylesheet"]':"";if(!!m)for(let p=e.length-1;p>=0;p--){const u=e[p];if(u.href===i&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${E}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":d,n||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),n)return new Promise((p,u)=>{s.addEventListener("load",p),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>_()).catch(e=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e})},{createBrowserChannel:O}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,c=O({page:"preview"});R.setChannel(c);window.__STORYBOOK_ADDONS_CHANNEL__=c;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=c);const P={"../packages/site-article/lib/main.story.tsx":async()=>t(()=>import("./main.story-DuqsyrAZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),"../packages/site-chapter/lib/main.story.tsx":async()=>t(()=>import("./main.story-CQb6YpQa.js"),__vite__mapDeps([13,2,14,10,5,6,11,12,15,16,17]),import.meta.url),"../packages/site-chapter/lib/use.story.tsx":async()=>t(()=>import("./use.story-ByvuGv5b.js"),__vite__mapDeps([18,2,0,1,3,4,5,6,7,8,9,10,11,12,17]),import.meta.url),"../packages/site-content/lib/main.story.tsx":async()=>t(()=>import("./main.story-DJvPp96u.js"),__vite__mapDeps([19,20,5,2,6,12,10,11]),import.meta.url),"../packages/site-document-editor-playground/lib/main.story.tsx":async()=>t(()=>import("./main.story-_esnoWqX.js"),__vite__mapDeps([21,2]),import.meta.url),"../packages/site-footer/lib/main.story.tsx":async()=>t(()=>import("./main.story-CDddCArP.js"),__vite__mapDeps([22,2,5,6]),import.meta.url),"../packages/site-glossary/lib/main.story.tsx":async()=>t(()=>import("./main.story-7ADbPngs.js"),__vite__mapDeps([23,1,2,24,5,6]),import.meta.url),"../packages/site-glossary/lib/use.story.tsx":async()=>t(()=>import("./use.story-VtOVo83X.js"),__vite__mapDeps([25,1,2,20,5,6,12,26,27,11,24]),import.meta.url),"../packages/site-header/lib/main.story.tsx":async()=>t(()=>import("./main.story-BiOcC1Gk.js"),__vite__mapDeps([28,2,29,5,6]),import.meta.url),"../packages/site-header/lib/use.story.tsx":async()=>t(()=>import("./use.story-Afbo4IFL.js"),__vite__mapDeps([30,31,2,32,33,5,6,34,35,29]),import.meta.url),"../packages/site-help/lib/main.story.tsx":async()=>t(()=>import("./main.story-D9DOj2kG.js"),__vite__mapDeps([36,2,7,3]),import.meta.url),"../packages/site-home/lib/main.story.tsx":async()=>t(()=>import("./main.story-BDgBWbDt.js"),__vite__mapDeps([37,2,38,39,11,6,12,14,10,5,15,16]),import.meta.url),"../packages/site-library/lib/main.story.tsx":async()=>t(()=>import("./main.story-B5fnfEXL.js"),__vite__mapDeps([40,2,41,24,5,6,20,12,26,27,11]),import.meta.url),"../packages/site-logo/lib/main.story.tsx":async()=>t(()=>import("./main.story-CoQBpsBB.js"),__vite__mapDeps([34,2,5,35,6]),import.meta.url),"../packages/site-menubar/lib/main.story.tsx":async()=>t(()=>import("./main.story-BiP9jWEV.js").then(o=>o.m),__vite__mapDeps([31,2,32,33,5,6]),import.meta.url),"../packages/site-page/lib/main.story.tsx":async()=>t(()=>import("./main.story-CdGfGHgB.js"),__vite__mapDeps([42,2,43,5,6]),import.meta.url),"../packages/site-page/lib/use.story.tsx":async()=>t(()=>import("./use.story-oMJjPZaR.js"),__vite__mapDeps([44,29,5,2,6,18,0,1,3,4,7,8,9,10,11,12,17,22,30,31,32,33,34,35,43]),import.meta.url),"../packages/site-part/lib/main.story.tsx":async()=>t(()=>import("./main.story-aIAZXaC4.js"),__vite__mapDeps([45,2,38,46,11,6,12,47,36,7,3]),import.meta.url),"../packages/site-playground/lib/main.story.tsx":async()=>t(()=>import("./main.story-Djl-W8h1.js"),__vite__mapDeps([48,2]),import.meta.url),"../packages/site-search/lib/main.story.tsx":async()=>t(()=>import("./main.story-DbOqHmPs.js"),__vite__mapDeps([14,2,10,5,6,11,12,15,16]),import.meta.url),"../packages/site-service/lib/main.story.tsx":async()=>t(()=>import("./main.story-BpytpSa9.js"),__vite__mapDeps([49,2,41,24,5,6,20,12,26,27,50,11]),import.meta.url),"../packages/site-signature/lib/main.story.tsx":async()=>t(()=>import("./main.story-XyP3G_70.js"),__vite__mapDeps([51,2,20,5,6,12]),import.meta.url),"../packages/site-status/lib/main.story.tsx":async()=>t(()=>import("./main.story-DsGu4du6.js"),__vite__mapDeps([52,2,11,6,12,53,5,54,55,47]),import.meta.url),"../packages/site-theme-switcher/lib/main.story.tsx":async()=>t(()=>import("./main.story-BTgkqx-A.js"),__vite__mapDeps([56,2]),import.meta.url),"../packages/site-toc/lib/main.story.tsx":async()=>t(()=>import("./main.story-BTxJ3_SB.js"),__vite__mapDeps([57,2,4,5,6]),import.meta.url),"../packages/ui-badge-group/lib/main.story.tsx":async()=>t(()=>import("./main.story-DMo3sRcL.js"),__vite__mapDeps([58,27,5,2,6,26]),import.meta.url),"../packages/ui-badge/lib/main.story.tsx":async()=>t(()=>import("./main.story-DjHk0Uyl.js"),__vite__mapDeps([59,2,27,5,6]),import.meta.url),"../packages/ui-breadcrumb/lib/main.story.tsx":async()=>t(()=>import("./main.story-C6rMqooY.js"),__vite__mapDeps([60,2,8,9]),import.meta.url),"../packages/ui-button/lib/main.story.tsx":async()=>t(()=>import("./main.story-BidzRXK2.js"),__vite__mapDeps([61,2,55,5,6]),import.meta.url),"../packages/ui-code-editor/lib/main.story.tsx":async()=>t(()=>import("./main.story-CskicUSA.js"),__vite__mapDeps([62,2]),import.meta.url),"../packages/ui-code-listing/lib/main.story.tsx":async()=>t(()=>import("./main.story-Dair3jz1.js"),__vite__mapDeps([63,2,62,50]),import.meta.url),"../packages/ui-code-preview/lib/main.story.tsx":async()=>t(()=>import("./main.story-DcspCHcL.js"),__vite__mapDeps([64,2,39]),import.meta.url),"../packages/ui-content/lib/main.story.tsx":async()=>t(()=>import("./main.story-uCCDlWuT.js"),__vite__mapDeps([65,2,62,63,50,10,5,6]),import.meta.url),"../packages/ui-form-control/lib/main.story.tsx":async()=>t(()=>import("./main.story-Cs5rIgjv.js"),__vite__mapDeps([66,2,32,67,11,6,12]),import.meta.url),"../packages/ui-icons/lib/main.story.tsx":async()=>t(()=>import("./main.story-C1Ajeyig.js"),__vite__mapDeps([68,2,9,15,32,33,7,38,46]),import.meta.url),"../packages/ui-logos/lib/main.story.tsx":async()=>t(()=>import("./main.story-BESr9X_T.js"),__vite__mapDeps([69,2,35]),import.meta.url),"../packages/ui-mascots/lib/main.story.tsx":async()=>t(()=>import("./main.story-BCbhp10u.js"),__vite__mapDeps([70,2,54]),import.meta.url),"../packages/ui-pictures/lib/main.story.tsx":async()=>t(()=>import("./main.story-qgersnND.js"),__vite__mapDeps([71,2,53,5,54,6]),import.meta.url),"../packages/ui-primitives/lib/colors.story.tsx":async()=>t(()=>import("./colors.story-BKeJAWxZ.js"),__vite__mapDeps([72,2,12,73,74]),import.meta.url),"../packages/ui-primitives/lib/sizes.story.tsx":async()=>t(()=>import("./sizes.story-BoI3WAvW.js"),__vite__mapDeps([75,2,12,73,74]),import.meta.url),"../packages/ui-select/lib/main.story.tsx":async()=>t(()=>import("./main.story-1WEriah8.js"),__vite__mapDeps([67,2]),import.meta.url),"../packages/ui-sr-only/lib/main.story.tsx":async()=>t(()=>import("./main.story-BdB-0goj.js"),__vite__mapDeps([76,2,47]),import.meta.url),"../packages/ui-text-input/lib/main.story.tsx":async()=>t(()=>import("./main.story-tBQOBWB0.js"),__vite__mapDeps([77,2,15,16]),import.meta.url)};async function g(o){return P[o]()}const{composeConfigs:v,PreviewWeb:T,ClientApi:V}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const o=await Promise.all([t(()=>import("./entry-preview-Bf4oBNXQ.js"),__vite__mapDeps([78,2,79]),import.meta.url),t(()=>import("./entry-preview-docs-DbzIP2u-.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-wHzAMLBx.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([80,79]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([81,79]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-zAKvEAra.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CPPM6s2L.js"),__vite__mapDeps([73,2,12,74]),import.meta.url)]);return v(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T(g,L);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};