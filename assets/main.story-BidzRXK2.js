import{_ as u}from"./preact.module-BGZS-fhn.js";import{B as c}from"./main-CiwqFC_z.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";const B={title:"UI Foundation / Button"},e={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return u(c,null,"Button")}},n={parameters:{actions:{disable:!0}},argTypes:{size:{control:"select",options:["default","small","medium","large"]},variant:{control:"select",options:["default","accent","neutral"]}},args:{size:"default",variant:"default",children:"Button"},render(t){return u(c,{size:t.size,variant:t.variant},t.children)}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Button>Button</Button>;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var s,i,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small", "medium", "large"]
    },
    variant: {
      control: "select",
      options: ["default", "accent", "neutral"]
    }
  },
  args: {
    size: "default",
    variant: "default",
    children: "Button"
  },
  render(p) {
    return <Button size={p.size} variant={p.variant}>
      {p.children}
    </Button>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{e as Default,n as Playground,B as default};
