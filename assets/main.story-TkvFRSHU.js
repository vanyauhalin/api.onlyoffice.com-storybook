import{_ as e,k as u,H as G}from"./preact.module-BGZS-fhn.js";import"./main-CeZgRJBv.js";import{O as I}from"./OnlyofficeLogo-CJNH9HCc.js";import{S as m}from"./main-YOs7wSM_.js";import{Default as J}from"./main.story-C0761kot.js";import{Default as X}from"./main.story-C2_thpQW.js";import{Default as j}from"./main.story-BWsD3viK.js";import{Default as p}from"./main.story-Cj7eo0FQ.js";import{Default as q}from"./main.story-DiyLOWjD.js";import{u as c}from"./main.story-Dy2yCSAy.js";import{S as z}from"./SidebarIcon-BMuD2XRW.js";import"./clsx-B-dksMZM.js";import"./hooks.module-BqWZPo7t.js";import"./JavascriptSdkIcon-CLKuss9m.js";import"./main-Ct3f7Pyg.js";import"./JavascriptSdkIcon-DvZr7Ff-.js";import"./main.story-BXvVjrSB.js";import"./GithubIcon-CoLQSXXG.js";import"./main-D3092p42.js";import"./main-Bm4Imml9.js";import"./SpikyWow-D2AnOsIW.js";import"./main-CY_FeEvP.js";import"./main-CwveWsly.js";import"./MagnifyingGlassIcon-u9hgdrBa.js";import"./main-BCPT5Nat.js";function B({children:r}){const[o,a]=c(r,{header:C,footer:N});return e("page-container",{class:"page"},e("div",{class:"page__header"},o.header),a,e("div",{class:"page__footer"},o.footer))}function C({children:r}){const[o,a]=c(r,{logo:T,menu:A,nav:W});return e("header",{role:"banner",class:"page-header"},a,e("div",{class:"page-header__logo"},o.logo),e("div",{class:"page-header__menu"},o.menu),o.nav&&e("div",{class:"page-header__nav-toggler"},o.nav))}function T({children:r}){return e(u,null,r)}function A({children:r}){return e(u,null,r)}function W(r){return e("button",{class:"page-header-nav-toggler","aria-label":r.label,"data-page-container-chapter-navigation-toggler":!0},e(z,{height:24,width:24}))}function N({children:r}){const[o,a]=c(r,{links:[g],theme:O,copyright:$});return e("footer",{class:"page-footer"},a,e("div",{class:"page-footer__link-list"},o.links),e("div",{class:"page-footer__theme-switcher"},o.theme),e("div",{class:"page-footer__copyright"},o.copyright))}function g({children:r,label:o}){const[a,M]=c(r,{links:[e("a",null)]});return e("nav",{"aria-label":o},M,e("ul",null,G(a.links).map((x,E)=>e("li",{key:E},x))))}function O({children:r}){return e(u,null,r)}function $({children:r}){return e(u,null,r)}const Pe={title:"Site/Page"};function n({children:r}){return e(B,null,e(C,null,e(m,null,e("h2",null,"Navigation Menu")),e(T,null,e("a",{href:"/"},e(I,{height:38}))),e(A,null,e("nav",{"aria-label":"Global"},e("a",{href:"/docspace/"},"DocSpace"),e("a",{href:"/docs/"},"Docs"),e("a",{href:"/workspace/"},"Workspace"))),e(W,{label:"Navigation Toggler"})),e("main",null,r??Array.from({length:12}).map((o,a)=>e("p",{key:a},a))),e(N,null,e(m,null,e("h2",null,"Site-wide Links")),e(g,{label:"Links related to"},e("h3",null,"Get Help"),e("a",{href:"/"},"home"),e("a",{href:"/"},"too looooooooooooooooong")),e(g,{label:"Links related to"},e("h3",null,"Try Now"),e("a",{href:"/"},"home")),e(O,null,e(q,null)),e($,null,e("a",{href:"/"},"onlyoffice.com"),e("p",null,"© Ascensio System SIA 2024. All right reserved"))))}function t(){return e(n,null,e(X,null))}function l(){return e(n,null,e(j,null))}function i(){return e(n,null,e(J,null))}const s={render(r,o){return e(n,null,p.render&&p.render({},o))}};var h,f,d;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`function Default({
  children
}: ChildrenIncludable): JSX.Element {
  return <Page>
    <PageHeader>
      <SrOnly>
        <h2>Navigation Menu</h2>
      </SrOnly>
      <PageHeaderLogo>
        <a href="/">
          <OnlyofficeLogo height={38} />
        </a>
      </PageHeaderLogo>
      <PageHeaderMenu>
        <nav aria-label="Global">
          <a href="/docspace/">DocSpace</a>
          <a href="/docs/">Docs</a>
          <a href="/workspace/">Workspace</a>
        </nav>
      </PageHeaderMenu>
      <PageHeaderNavToggler label="Navigation Toggler" />
    </PageHeader>
    <main>
      {children ?? Array.from({
        length: 12
      }).map((_, i) => <p key={i}>{i}</p>)}
    </main>
    <PageFooter>
      <SrOnly>
        <h2>Site-wide Links</h2>
      </SrOnly>
      <PageFooterLinkContainer label="Links related to">
        <h3>Get Help</h3>
        <a href="/">home</a>
        <a href="/">too looooooooooooooooong</a>
      </PageFooterLinkContainer>
      <PageFooterLinkContainer label="Links related to">
        <h3>Try Now</h3>
        <a href="/">home</a>
      </PageFooterLinkContainer>
      <PageFooterThemeSwitcher>
        <ThemeSwitcherStory />
      </PageFooterThemeSwitcher>
      <PageFooterCopyright>
        <a href="/">onlyoffice.com</a>
        <p>© Ascensio System SIA 2024. All right reserved</p>
      </PageFooterCopyright>
    </PageFooter>
  </Page>;
}`,...(d=(f=n.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var S,P,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`function WithHome(): JSX.Element {
  return <Default><HomeStory /></Default>;
}`,...(y=(P=t.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var v,k,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`function WithPart(): JSX.Element {
  return <Default><PartStory /></Default>;
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,b,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`function WithChapter(): JSX.Element {
  return <Default><ChapterStory /></Default>;
}`,...(H=(b=i.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var L,F,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render(_, ctx) {
    return <Default>
      {StatusStory.render && StatusStory.render({}, ctx)}
    </Default>;
  }
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};export{n as Default,i as WithChapter,t as WithHome,l as WithPart,s as WithStatus,Pe as default};
