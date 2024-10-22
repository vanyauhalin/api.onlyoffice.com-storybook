import{J as u}from"./main-GpuiM6_D.js";import{S as m,a as h}from"./main-EHJN3-NQ.js";import{_ as e,k as g}from"./preact.module-BGZS-fhn.js";import{B as G}from"./main-BcFeQ9FJ.js";import{B as r,a as w}from"./main-CsSpQ0Iz.js";import"./main-CeZgRJBv.js";import{G as f,a as D,c as x,b as c}from"./main-BhfpKIv1.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./hooks.module-BqWZPo7t.js";const A={title:"Site Patterns / Glossary / Use Cases"},t={name:"Glossary of Methods",parameters:{controls:{disable:!0},actions:{disable:!0}},args:{variant:"default",signature:[{type:"text",text:"("},{type:"text",text:"sImageSrc"},{type:"text",text:", "},{type:"text",text:"nWidth"},{type:"text",text:", "},{type:"text",text:"nHeight"},{type:"text",text:", "},{type:"text",text:"Data"},{type:"text",text:")"},{type:"text",text:": "},{id:window.location.href,token:{type:"type",text:"ApiOleObject"}}]},render(a){return e(c,null,Array.from({length:20}).map(()=>e(g,null,e(f,null,e(D,null,e("a",{href:window.location.href},"CreateOleObject")),e(m,{variant:"inline",signature:a.signature},e(h,null,s=>e("a",{href:s.reference.id},s.children)))),e(x,null,e(u,{separator:" "},"Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs.")))))}},n={name:"Glossary of Parameters",parameters:{controls:{disable:!0},actions:{disable:!0}},args:{variant:"default",signature:[{type:"string",text:'"markdown"'},{type:"text",text:" | "},{type:"string",text:'"html"'}]},render(a){return e(c,null,Array.from({length:20}).map(()=>e(g,null,e(f,null,e(G,null,e(r,{variant:"calm"},"sConvertType"),e(r,{variant:"transparent"},e(m,{variant:"inline",signature:a.signature})),e(r,{variant:"neutral"},e(w,null,"default"),"markdown"))),e(x,null,e(u,{separator:" "},"Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs.")))))}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Glossary of Methods",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  args: {
    variant: "default",
    signature: [{
      type: "text",
      text: "("
    }, {
      type: "text",
      text: "sImageSrc"
    }, {
      type: "text",
      text: ", "
    }, {
      type: "text",
      text: "nWidth"
    }, {
      type: "text",
      text: ", "
    }, {
      type: "text",
      text: "nHeight"
    }, {
      type: "text",
      text: ", "
    }, {
      type: "text",
      text: "Data"
    }, {
      type: "text",
      text: ")"
    }, {
      type: "text",
      text: ": "
    }, {
      id: window.location.href,
      token: {
        type: "type",
        text: "ApiOleObject"
      }
    }]
  },
  render(p) {
    return <Glossary>
      {Array.from({
        length: 20
      }).map(() => <>
        <GlossaryTerm>
          <GlossaryName>
            <a href={window.location.href}>CreateOleObject</a>
          </GlossaryName>
          <Signature variant="inline" signature={p.signature}>
            <SignatureReference>
              {p => <a href={p.reference.id}>{p.children}</a>}
            </SignatureReference>
          </Signature>
        </GlossaryTerm>
        <GlossaryDetails>
          <Join separator=" ">
            Defines if the HTML headings and IDs will be generated when the
            Markdown renderer of your target platform does not handle
            Markdown-style IDs.
          </Join>
        </GlossaryDetails>
      </>)}
    </Glossary>;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Glossary of Parameters",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  args: {
    variant: "default",
    signature: [{
      type: "string",
      text: '"markdown"'
    }, {
      type: "text",
      text: " | "
    }, {
      type: "string",
      text: '"html"'
    }]
  },
  render(p) {
    return <Glossary>
      {Array.from({
        length: 20
      }).map(() => <>
        <GlossaryTerm>
          <BadgeGroup>
            <Badge variant="calm">sConvertType</Badge>
            <Badge variant="transparent">
              <Signature variant="inline" signature={p.signature} />
            </Badge>
            <Badge variant="neutral">
              <BadgeCaption>
                default
              </BadgeCaption>
              markdown
            </Badge>
          </BadgeGroup>
        </GlossaryTerm>
        <GlossaryDetails>
          <Join separator=" ">
            Defines if the HTML headings and IDs will be generated when the
            Markdown renderer of your target platform does not handle
            Markdown-style IDs.
          </Join>
        </GlossaryDetails>
      </>)}
    </Glossary>;
  }
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};export{t as GlossaryOfMethods,n as GlossaryOfParameters,A as default};
