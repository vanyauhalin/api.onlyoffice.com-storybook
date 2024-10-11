import{_ as e,k as g}from"./preact.module-BGZS-fhn.js";import{S as i,a as u}from"./main-5WIygv4U.js";import"./main-Bm4Imml9.js";import"./clsx-B-dksMZM.js";import"./hooks.module-BqWZPo7t.js";const S={title:"Site / Signature"},n={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return e(g,null,t.args&&t.args.signature&&e(i,{signature:t.args.signature}))}},t={parameters:{actions:{disable:!0}},argTypes:{variant:{control:"select",options:["default","block","inline"]}},args:{variant:"default",signature:[{type:"keyword",text:"function"},{type:"text",text:" "},{type:"entity",text:"ConvertDocument"},{type:"text",text:"("},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"sConvertType"},{type:"text",text:": "},{type:"string",text:'"markdown"'},{type:"text",text:" | "},{type:"string",text:'"html"'},{type:"text",text:" = "},{type:"string",text:'"markdown"'},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bHtmlHeadings"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bBase64img"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bDemoteHeadings"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bRenderHTMLTags"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"): "},{type:"type",text:"string"}]},render(l){return e(i,{...l},e(u,null,x=>e("a",{href:x.reference.id},x.children)))}};var r,p,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <>
      {Playground.args && Playground.args.signature && <Signature signature={Playground.args.signature} />}
    </>;
  }
}`,...(a=(p=n.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var y,s,o;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "block", "inline"]
    }
  },
  args: {
    variant: "default",
    signature: [{
      type: "keyword",
      text: "function"
    }, {
      type: "text",
      text: " "
    }, {
      type: "entity",
      text: "ConvertDocument"
    }, {
      type: "text",
      text: "("
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "  "
    }, {
      type: "parameter",
      text: "sConvertType"
    }, {
      type: "text",
      text: ": "
    }, {
      type: "string",
      text: '"markdown"'
    }, {
      type: "text",
      text: " | "
    }, {
      type: "string",
      text: '"html"'
    }, {
      type: "text",
      text: " = "
    }, {
      type: "string",
      text: '"markdown"'
    }, {
      type: "text",
      text: ","
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "  "
    }, {
      type: "parameter",
      text: "bHtmlHeadings"
    }, {
      type: "text",
      text: ": "
    }, {
      type: "type",
      text: "boolean"
    }, {
      type: "text",
      text: " = "
    }, {
      type: "text",
      text: "false"
    }, {
      type: "text",
      text: ","
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "  "
    }, {
      type: "parameter",
      text: "bBase64img"
    }, {
      type: "text",
      text: ": "
    }, {
      type: "type",
      text: "boolean"
    }, {
      type: "text",
      text: " = "
    }, {
      type: "text",
      text: "false"
    }, {
      type: "text",
      text: ","
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "  "
    }, {
      type: "parameter",
      text: "bDemoteHeadings"
    }, {
      type: "text",
      text: ": "
    }, {
      type: "type",
      text: "boolean"
    }, {
      type: "text",
      text: " = "
    }, {
      type: "text",
      text: "false"
    }, {
      type: "text",
      text: ","
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "  "
    }, {
      type: "parameter",
      text: "bRenderHTMLTags"
    }, {
      type: "text",
      text: ": "
    }, {
      type: "type",
      text: "boolean"
    }, {
      type: "text",
      text: " = "
    }, {
      type: "text",
      text: "false"
    }, {
      type: "text",
      text: ","
    }, {
      type: "text",
      text: "\\n"
    }, {
      type: "text",
      text: "): "
    }, {
      type: "type",
      text: "string"
    }]
  },
  render(p) {
    return <Signature {...p}>
      <SignatureReference>
        {p => <a href={p.reference.id}>{p.children}</a>}
      </SignatureReference>
    </Signature>;
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};export{n as Default,t as Playground,S as default};
