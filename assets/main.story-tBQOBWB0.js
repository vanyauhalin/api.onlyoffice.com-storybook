import{_ as n}from"./preact.module-BGZS-fhn.js";import{M as s,C as o}from"./MagnifyingGlassIcon-u9hgdrBa.js";import{T as u,a as r,b as p,c,d,e as x}from"./main-BCPT5Nat.js";const g={title:"UI Foundation / Text Input"};function e(){return n("div",{style:{display:"inline-flex",flexDirection:"column",rowGap:"var(--base-size-12)"}},["small","medium","large","xlarge","default",void 0].map(t=>n("div",{style:{alignItems:"center",columnGap:"var(--base-size-12)",display:"inline-flex"}},n(u,{size:t},n(r,null,n(s,null)),n(p,null,"placeholder"),n(c,null,n("input",{type:"text"})),n(d,null,n(x,null,n("button",{type:"button"},n(o,null))))),n("span",null,"size: ",String(t)))))}var l,i,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`function Default(): JSX.Element {
  const sizes: TextInputProperties["size"][] = ["small", "medium", "large", "xlarge", "default", undefined];
  return <div style={{
    display: "inline-flex",
    flexDirection: "column",
    rowGap: "var(--base-size-12)"
  }}>
    {sizes.map(size => <div style={{
      alignItems: "center",
      columnGap: "var(--base-size-12)",
      display: "inline-flex"
    }}>
      <TextInput size={size}>
        <TextInputLeading>
          <MagnifyingGlassIcon />
        </TextInputLeading>
        <TextInputPlaceholder>
          placeholder
        </TextInputPlaceholder>
        <TextInputControl>
          <input type="text" />
        </TextInputControl>
        <TextInputTrailing>
          <TextInputAction>
            <button type="button">
              <CancelIcon />
            </button>
          </TextInputAction>
        </TextInputTrailing>
      </TextInput>
      <span>size: {String(size)}</span>
    </div>)}
  </div>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};export{e as Default,g as default};
