import{_ as e}from"./preact.module-BGZS-fhn.js";function l({children:r,label:i}){return e("theme-switcher-container",{class:"theme-switcher"},e("radiogroup-container",null,e("div",{role:"radiogroup","aria-label":i},r)))}function a({children:r,value:i}){return e("div",{role:"radio","data-value":i},r)}const u={title:"Site Patterns / Theme Switcher"};function t(){return e(l,{label:"Color Theme Switcher"},e(a,{value:"light"},"light"),e(a,{value:"auto"},"auto"),e(a,{value:"dark"},"dark"))}var o,n,h;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`function Default(): JSX.Element {
  return <ThemeSwitcher label="Color Theme Switcher">
    <ThemeSwitcherOption value="light">light</ThemeSwitcherOption>
    <ThemeSwitcherOption value="auto">auto</ThemeSwitcherOption>
    <ThemeSwitcherOption value="dark">dark</ThemeSwitcherOption>
  </ThemeSwitcher>;
}`,...(h=(n=t.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};export{t as Default,u as default};
