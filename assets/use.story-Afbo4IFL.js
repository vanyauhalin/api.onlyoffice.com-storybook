import{D as a,M as d}from"./main.story-BiP9jWEV.js";import{_ as e}from"./preact.module-BGZS-fhn.js";import{Default as t}from"./main.story-CoQBpsBB.js";import{a as l,H as c,b as u,c as m}from"./main-B1oS_Iqn.js";import"./CloseIcon-CwEXBeXb.js";import"./MenuIcon-B8dI-wdF.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./OnlyofficeBetaLogo-BOAqJvn8.js";const L={title:"Site Composites / Header / Use Cases"},r={name:"Header with everything",parameters:{controls:{disable:!0},actions:{disable:!0}},render(p,n){return e(d,null,e(l,null,e(c,null,e("a",{href:location.href},t.render&&t.render({},n))),e(u,null,a.render&&a.render({},n)),e(m,null)))}};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Header with everything",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render(_, ctx) {
    return <MenubarAccessor>
      <Header>
        <HeaderLeading>
          <a href={location.href}>
            {LogoStory.render && LogoStory.render({}, ctx)}
          </a>
        </HeaderLeading>
        <HeaderContent>
          {MenubarStory.render && MenubarStory.render({}, ctx)}
        </HeaderContent>
        <HeaderTrailing>
          {/* trailing */}
        </HeaderTrailing>
      </Header>
    </MenubarAccessor>;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{r as HeaderWithEverything,L as default};
