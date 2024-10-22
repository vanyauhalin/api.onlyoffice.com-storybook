import{_ as e}from"./preact.module-BGZS-fhn.js";import{p as o}from"./hooks.module-BqWZPo7t.js";import{useVariables as u}from"./preview-CPPM6s2L.js";import"./iframe-BapzrP29.js";import"../sb-preview/runtime.js";const h={title:"UI Primitives / Sizes"},n={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){const[s,i]=o([]);return u("size",t=>{i(t)}),e("table",{style:{width:"100%",fontSize:"16px",textAlign:"left",borderCollapse:"collapse"}},e("thead",null,e("tr",null,e("th",null,"Name"),e("th",null,"Original Value"),e("th",null,"Computed Value"))),e("tbody",null,s.map(t=>e("tr",{key:t.name},e("td",null,t.name),e("td",null,t.originalValue),e("td",null,t.computedValue)))))}};var a,l,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    const [sizes, setSizes] = useState<Variable[]>([]);
    useVariables("size", a => {
      setSizes(a);
    });
    return <table style={{
      width: "100%",
      fontSize: "16px",
      textAlign: "left",
      borderCollapse: "collapse"
    }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Original Value</th>
          <th>Computed Value</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map(v => <tr key={v.name}>
          <td>{v.name}</td>
          <td>{v.originalValue}</td>
          <td>{v.computedValue}</td>
        </tr>)}
      </tbody>
    </table>;
  }
}`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};export{n as Default,h as default};
