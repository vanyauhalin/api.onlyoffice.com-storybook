import{_ as e}from"./preact.module-BGZS-fhn.js";import{p as d}from"./hooks.module-BqWZPo7t.js";import{u as c}from"./shared-BlyHkNEI.js";const f={title:"UI Primitives / Sizes"},l={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){const[u,m]=d([]);return c(t=>{const r=[];for(let n=t.length-1;n>=0;n-=1){const a=t[n];a.name.includes("size")&&r.push(a)}t=r.sort((n,a)=>n.name.localeCompare(a.name)),m(t)}),e("table",{style:{width:"100%",fontSize:"16px",textAlign:"left",borderCollapse:"collapse"}},e("thead",null,e("tr",null,e("th",null,"Name"),e("th",null,"Value"))),e("tbody",null,u.map(t=>e("tr",{key:t.name},e("td",null,t.name),e("td",null,t.computedValue)))))}};var o,s,i;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        if (v.name.includes("size")) {
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
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {colors.map(v => <tr key={v.name}>
          <td>{v.name}</td>
          <td>{v.computedValue}</td>
        </tr>)}
      </tbody>
    </table>;
  }
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{l as Default,f as default};
