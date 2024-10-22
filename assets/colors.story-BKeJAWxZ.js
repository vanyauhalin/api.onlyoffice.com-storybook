import{_ as t}from"./preact.module-BGZS-fhn.js";import{p as d}from"./hooks.module-BqWZPo7t.js";import{useVariables as u}from"./preview-CPPM6s2L.js";import"./iframe-BapzrP29.js";import"../sb-preview/runtime.js";const b={title:"UI Primitives / Colors"},n={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){const[a,s]=d([]);return u("color",e=>{s(e)}),t("table",{style:{width:"100%",fontSize:"16px",textAlign:"left",borderCollapse:"collapse"}},t("thead",null,t("tr",null,t("th",null,"Name"),t("th",null,"Original Value"),t("th",null,"Computed Value"),t("th",{style:{minWidth:"30%"}},"Preview"))),t("tbody",null,a.map(e=>t("tr",{key:e.name},t("td",null,e.name),t("td",null,e.originalValue),t("td",null,e.computedValue),t("td",{style:{backgroundColor:e.computedValue}})))))}};var l,r,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    const [colors, setColors] = useState<Variable[]>([]);
    useVariables("color", a => {
      setColors(a);
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
          <th style={{
            minWidth: "30%"
          }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {colors.map(v => <tr key={v.name}>
          <td>{v.name}</td>
          <td>{v.originalValue}</td>
          <td>{v.computedValue}</td>
          <td style={{
            backgroundColor: v.computedValue
          }} />
        </tr>)}
      </tbody>
    </table>;
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};export{n as Default,b as default};
