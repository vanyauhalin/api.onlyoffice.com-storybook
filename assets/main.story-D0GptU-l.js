import{_ as e}from"./preact.module-BGZS-fhn.js";import{B as d,a as u}from"./main-D8avA-gz.js";import"./main-Bm4Imml9.js";import"./clsx-B-dksMZM.js";const f={title:"UI / Badge"},a={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return e(d,null,"Default")}},n={parameters:{actions:{disable:!0}},argTypes:{variant:{control:"select",options:["default","calm","critical","neutral"]}},args:{variant:"default",caption:"Story",text:"Playground"},render(r){return e(d,{variant:r.variant},e(u,null,r.caption),r.text)}};var t,o,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Badge>Default</Badge>;
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "calm", "critical",
      // "innovative",
      "neutral"
      // "vibrant",
      ]
    }
  },
  args: {
    variant: "default",
    caption: "Story",
    text: "Playground"
  },
  render(p) {
    return <Badge variant={p.variant}>
      <BadgeCaption>
        {p.caption}
      </BadgeCaption>
      {p.text}
    </Badge>;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{a as Default,n as Playground,f as default};
