import{_ as t,k as u}from"./preact.module-BGZS-fhn.js";import{S as l,a as g}from"./main-EHJN3-NQ.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./hooks.module-BqWZPo7t.js";const S={title:"Site Patterns / Signature"},x={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return t(u,null,e.args&&e.args.signature&&t(l,{signature:e.args.signature},t(g,null,n=>t("a",{href:n.reference.id},n.children))))}},e={parameters:{actions:{disable:!0}},argTypes:{variant:{control:"select",options:["default","block","inline"]}},args:{variant:"default",signature:[{type:"keyword",text:"function"},{type:"text",text:" "},{type:"entity",text:"ConvertDocument"},{type:"text",text:"("},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"sConvertType"},{type:"text",text:": "},{type:"string",text:'"markdown"'},{type:"text",text:" | "},{type:"string",text:'"html"'},{type:"text",text:" = "},{type:"string",text:'"markdown"'},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bHtmlHeadings"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bBase64img"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bDemoteHeadings"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{type:"parameter",text:"bRenderHTMLTags"},{type:"text",text:": "},{type:"type",text:"boolean"},{type:"text",text:" = "},{type:"text",text:"false"},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"  "},{id:"#",token:{type:"parameter",text:"iAmReferenceOnPage"}},{type:"text",text:": "},{id:window.location.href,token:{type:"type",text:"iAmReferenceOnExternalPage"}},{type:"text",text:","},{type:"text",text:`
`},{type:"text",text:"): "},{type:"type",text:"string"}]},render(n){return t(l,{...n},t(g,null,r=>t("a",{href:r.reference.id},r.children)))}};var p,a,y;x.parameters={...x.parameters,docs:{...(p=x.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      {Playground.args && Playground.args.signature && <Signature signature={Playground.args.signature}>
          <SignatureReference>
            {p => <a href={p.reference.id}>{p.children}</a>}
          </SignatureReference>
        </Signature>}
    </>;
  }
}`,...(y=(a=x.parameters)==null?void 0:a.docs)==null?void 0:y.source}}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      text: "  "
    }, {
      id: "#",
      token: {
        type: "parameter",
        text: "iAmReferenceOnPage"
      }
    }, {
      type: "text",
      text: ": "
    }, {
      id: window.location.href,
      token: {
        type: "type",
        text: "iAmReferenceOnExternalPage"
      }
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{x as Default,e as Playground,S as default};
