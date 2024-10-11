import{_ as e}from"./preact.module-BGZS-fhn.js";import{p as c}from"./hooks.module-BqWZPo7t.js";import{u as m}from"./shared-BlyHkNEI.js";const f={title:"UI Primitives / Colors"},o={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){const[d,u]=c([]);return m(t=>{const r=[];for(let n=t.length-1;n>=0;n-=1){const l=t[n];l.name.includes("color")&&r.push(l)}t=r.sort((n,l)=>n.name.localeCompare(l.name)),u(t)}),e("table",{style:{width:"100%",fontSize:"16px",textAlign:"left",borderCollapse:"collapse"}},e("thead",null,e("tr",null,e("th",null,"Name"),e("th",null,"Value"),e("th",{style:{minWidth:"30%"}},"Preview"))),e("tbody",null,d.map(t=>e("tr",{key:t.name},e("td",null,t.name),e("td",null,t.computedValue),e("td",{style:{backgroundColor:t.computedValue}})))))}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    useVariables(a => {
      const b: Variable[] = [];
      for (let i = a.length - 1; i >= 0; i -= 1) {
        const v = a[i];
        if (v.name.includes("color")) {
          b.push(v);
        }
      }
      a = b.sort((a, b) => a.name.localeCompare(b.name));
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
          {/* <th>Original Value</th> */}
          <th>Value</th>
          <th style={{
            minWidth: "30%"
          }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {colors.map(v => <tr key={v.name}>
          <td>{v.name}</td>
          {/* <td>{v.originalValue}</td> */}
          <td>{v.computedValue}</td>
          <td style={{
            backgroundColor: v.computedValue
          }} />
        </tr>)}
      </tbody>
    </table>;
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{o as Default,f as default};
