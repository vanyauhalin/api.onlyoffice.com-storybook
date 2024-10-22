import{_ as t}from"./preact.module-BGZS-fhn.js";function S(e){return t("combobox-container",{name:e.name,class:"select"},e.children)}function s(e){return t("div",{role:"combobox"},e.children)}function v(e){const{children:l,hidden:n=!0}=e;return t("div",{role:"listbox",hidden:n},l)}function o(e){const{children:l,selected:n,value:c}=e;return t("div",{class:"select__option-container"},t("div",{role:"option",...h()},l));function h(){const p={};return n!==void 0&&(p["aria-selected"]=n),c!==void 0&&(p["data-value"]=c),p}}const f={title:"UI Foundation / Select"};function i(){return t(S,null,t(s,null,"Default option"),t(v,null,t(o,{value:"default-option",selected:!0},"Default option"),t(o,{value:"first-option"},"First option"),t(o,{value:"second-option"},"Second option"),t(o,{value:"third-option"},"Third option"),t(o,{value:"fourth-option"},"Fourth option"),t(o,{value:"fifth-option"},"Fifth option"),t(o,{value:"sixth-option"},"Sixth option"),t(o,{value:"seventh-option"},"Seventh option"),t(o,{value:"eighth-option"},"Eighth option"),t(o,{value:"ninth-option"},"Ninth option"),t(o,{value:"tenth-option"},"Tenth option")))}var u,r,a;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`function Default(): JSX.Element {
  return <Select>
    <SelectCombobox>Default option</SelectCombobox>
    <SelectListbox>
      <SelectOption value="default-option" selected={true}>Default option</SelectOption>
      <SelectOption value="first-option">First option</SelectOption>
      <SelectOption value="second-option">Second option</SelectOption>
      <SelectOption value="third-option">Third option</SelectOption>
      <SelectOption value="fourth-option">Fourth option</SelectOption>
      <SelectOption value="fifth-option">Fifth option</SelectOption>
      <SelectOption value="sixth-option">Sixth option</SelectOption>
      <SelectOption value="seventh-option">Seventh option</SelectOption>
      <SelectOption value="eighth-option">Eighth option</SelectOption>
      <SelectOption value="ninth-option">Ninth option</SelectOption>
      <SelectOption value="tenth-option">Tenth option</SelectOption>
    </SelectListbox>
  </Select>;
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};export{i as Default,f as default};
