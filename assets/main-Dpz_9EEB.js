import{C as o}from"./ChevronRightIcon-ZHxdnDVG.js";import{H as s,_ as r,E as d,k as m}from"./preact.module-BGZS-fhn.js";function h(a){const{children:e,...c}=a,t=s(e);return r("nav",{class:"breadcrumb",...c},t.map((n,i)=>r(u,{index:i},n)));function u(n){return n.index===t.length-1?d(n.children,{"aria-current":"page"}):r(m,null,n.children,r(o,{width:11,class:"breadcrumb__separator"}))}}function p(a){const{children:e,...c}=a;return c.href===void 0?r("span",null,e):r("a",{class:"breadcrumb__crumb",...c},e)}export{p as B,h as a};
