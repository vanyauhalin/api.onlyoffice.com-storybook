import{_ as t,k as z}from"./preact.module-BGZS-fhn.js";import"./main-CeZgRJBv.js";import{P as S}from"./main-BTS_ov0M.js";import{D as _,f as w}from"./main-DIEyNR2v.js";import{c as o}from"./clsx-B-dksMZM.js";import{B as D}from"./main-CiwqFC_z.js";import{S as B}from"./main-YOs7wSM_.js";import"./hooks.module-BqWZPo7t.js";import"./SpikyWow-D2AnOsIW.js";function f(n){const{children:e,size:u,...r}=n;return r.class=o("status",u&&`status_size_${u}`,r.class),t(_,{...r},t("div",{class:"status__inner"},e))}function h(n){return t(B,null,n.children)}function g(n){return t(z,null,n.children)}function P(n){const{...e}=n;return e.class=o("status__description",e.class),t(w,{...e})}function b(n){const{...e}=n;return e.class=o("status__button",e.class),t(D,{variant:"accent",...e})}const R={title:"Site Regions / Status"},s={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return t(f,null,t(h,null,t("h1",null,"404")),t(g,null,t(S,null)),t(P,null,"Oops...Page not found!"),t(b,{asChild:!0},t("a",{href:window.location.href},"Go to home page")))}},a={parameters:{actions:{disable:!0}},argTypes:{size:{control:"select",options:["default","small","medium","large"]}},args:{size:"default",heading:"404",description:"Oops...Page not found!",button:"Go to home page"},render(n){return t(f,{size:n.size},t(h,null,t("h1",null,n.heading)),t(g,null,t(S,null)),t(P,null,n.description),t(b,{asChild:!0},t("a",{href:window.location.href},n.button)))}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Status>
      <StatusHeading>
        <h1>404</h1>
      </StatusHeading>
      <StatusPicture>
        <Picture404 />
      </StatusPicture>
      <StatusDescription>Oops...Page not found!</StatusDescription>
      <StatusButton asChild>
        <a href={window.location.href}>Go to home page</a>
      </StatusButton>
    </Status>;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small", "medium", "large"]
    }
  },
  args: {
    size: "default",
    heading: "404",
    description: "Oops...Page not found!",
    button: "Go to home page"
  },
  render(p) {
    return <Status size={p.size}>
      <StatusHeading>
        <h1>{p.heading}</h1>
      </StatusHeading>
      <StatusPicture>
        <Picture404 />
      </StatusPicture>
      <StatusDescription>{p.description}</StatusDescription>
      <StatusButton asChild>
        <a href={window.location.href}>{p.button}</a>
      </StatusButton>
    </Status>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{s as Default,a as Playground,R as default};
