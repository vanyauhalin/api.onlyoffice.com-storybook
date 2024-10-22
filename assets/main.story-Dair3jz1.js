import{_ as n}from"./preact.module-BGZS-fhn.js";import{Default as a}from"./main.story-CskicUSA.js";import{C,a as g,b as i,c as u,d as e,e as T,f as s}from"./main-DBeNRR-h.js";const A={title:"UI Foundation / Code Listing"};function t(){return n(T,null,n(C,null,n(g,{label:"List of Tabs"},n(i,{id:"first"},"First Tab"),n(i,{id:"second"},"Second Tab")),n(u,{label:"List of Actions"},n(e,null,n("button",{type:"button"},"@")),n(e,null,n("button",{type:"button"},"@")))),n(s,{by:"first"},n("pre",null,n("code",null,'console.log("First Tab Content")'))),n(s,{by:"second"},n("pre",null,n("code",null,'console.log("Second Tab Content")'))))}function o(){return n(T,null,n(C,null,n(g,{label:"List of Tabs"},n(i,{id:"first"},"First Tab"),n(i,{id:"second"},"Second Tab")),n(u,{label:"List of Actions"},n(e,null,n("button",{type:"button"},"@")),n(e,null,n("button",{type:"button"},"@")))),n(s,{by:"first"},n(a,null,'console.log("First Tab Content")')),n(s,{by:"second"},n(a,null,'console.log("Second Tab Content")')))}var d,b,r;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`function Default(): JSX.Element {
  return <CodeListing>
    <CodeListingTabListWrapper>
      <CodeListingTabList label="List of Tabs">
        <CodeListingTab id="first">First Tab</CodeListingTab>
        <CodeListingTab id="second">Second Tab</CodeListingTab>
      </CodeListingTabList>
      <CodeListingActionList label="List of Actions">
        <CodeListingAction>
          <button type="button">@</button>
        </CodeListingAction>
        <CodeListingAction>
          <button type="button">@</button>
        </CodeListingAction>
      </CodeListingActionList>
    </CodeListingTabListWrapper>
    <CodeListingTabPanel by="first">
      <pre><code>console.log("First Tab Content")</code></pre>
    </CodeListingTabPanel>
    <CodeListingTabPanel by="second">
      <pre><code>console.log("Second Tab Content")</code></pre>
    </CodeListingTabPanel>
  </CodeListing>;
}`,...(r=(b=t.parameters)==null?void 0:b.docs)==null?void 0:r.source}}};var l,L,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`function WithCodeEditor(): JSX.Element {
  return <CodeListing>
    <CodeListingTabListWrapper>
      <CodeListingTabList label="List of Tabs">
        <CodeListingTab id="first">First Tab</CodeListingTab>
        <CodeListingTab id="second">Second Tab</CodeListingTab>
      </CodeListingTabList>
      <CodeListingActionList label="List of Actions">
        <CodeListingAction>
          <button type="button">@</button>
        </CodeListingAction>
        <CodeListingAction>
          <button type="button">@</button>
        </CodeListingAction>
      </CodeListingActionList>
    </CodeListingTabListWrapper>
    <CodeListingTabPanel by="first">
      <CodeEditorStory>console.log("First Tab Content")</CodeEditorStory>
    </CodeListingTabPanel>
    <CodeListingTabPanel by="second">
      <CodeEditorStory>console.log("Second Tab Content")</CodeEditorStory>
    </CodeListingTabPanel>
  </CodeListing>;
}`,...(c=(L=o.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};export{t as Default,o as WithCodeEditor,A as default};
