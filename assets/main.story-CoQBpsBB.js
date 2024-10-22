import{_ as s}from"./preact.module-BGZS-fhn.js";import{d as p}from"./main-DIEyNR2v.js";import{O as g}from"./OnlyofficeBetaLogo-BOAqJvn8.js";import{c as f}from"./clsx-B-dksMZM.js";function m(n){const{children:z,size:a,...o}=n;return o.class=f("logo",a&&`logo_size_${a}`,o.class),s(p,{...o},s(g,{width:38}))}const _={title:"Site Patterns / Logo"},e={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return s(m,null)}},r={parameters:{actions:{disable:!0}},argTypes:{size:{control:"select",options:["default","small","medium"]}},args:{size:"default"},render(n){return s(m,{size:n.size})}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Logo />;
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small", "medium"]
    }
  },
  args: {
    size: "default"
  },
  render(p) {
    return <Logo size={p.size} />;
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};export{e as Default,r as Playground,_ as default};
