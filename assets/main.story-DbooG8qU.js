import{_ as u}from"./preact.module-BGZS-fhn.js";import{B as c}from"./main-CY_FeEvP.js";import"./main-Bm4Imml9.js";import"./clsx-B-dksMZM.js";const B={title:"UI / Button"},e={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return u(c,null,"Button")}},n={parameters:{actions:{disable:!0}},argTypes:{size:{control:"select",options:["default","small","medium","large"]},variant:{control:"select",options:["default","accent","neutral"]}},args:{size:"default",variant:"default",children:"Button"},render(t){return u(c,{size:t.size,variant:t.variant},t.children)}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,i,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
