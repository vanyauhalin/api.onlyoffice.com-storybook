import{H as f,_ as r,E as s,k as l}from"./preact.module-BGZS-fhn.js";import{C as B}from"./ChevronRightIcon-ZHxdnDVG.js";function C(n){const{children:a,...m}=n,b=f(a);return r("nav",{class:"breadcrumb",...m},b.map((u,o)=>r(h,{index:o},u)));function h(u){return u.index===b.length-1?s(u.children,{"aria-current":"page"}):r(l,null,u.children,r(B,{width:11,class:"breadcrumb__separator"}))}}function e(n){const{children:a,...m}=n;return m.href===void 0?r("span",null,a):r("a",{class:"breadcrumb__crumb",...m},a)}const S={title:"UI/Breadcrumb"};function c(){return r(C,{"aria-label":"Breadcrumb"},r(e,{href:"/"},"First"),r(e,{href:"/"},"Second"),r(e,{href:"/"},"Third"),r(e,{href:"/"},"In the middle"),r(e,{href:"/"},"Fourth"),r(e,{href:"/"},"Fifth"),r(e,{href:"/"},"Sixth"))}var t,d,i;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`function Default(): JSX.Element {
  return <Breadcrumb aria-label="Breadcrumb">
    <BreadcrumbCrumb href="/">First</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">Second</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">Third</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">In the middle</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">Fourth</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">Fifth</BreadcrumbCrumb>
    <BreadcrumbCrumb href="/">Sixth</BreadcrumbCrumb>
  </Breadcrumb>;
}`,...(i=(d=c.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};export{c as Default,S as default};
