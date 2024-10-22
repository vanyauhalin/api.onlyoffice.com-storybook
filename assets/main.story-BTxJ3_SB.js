import{_ as n}from"./preact.module-BGZS-fhn.js";import{T as g,a as m,b as T,c as r,d as t}from"./main-LyXGk272.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";const L={title:"Site Patterns / Table of Contents (TOC)"},i={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return n(m,null,n(g,null,"In this article"),n(T,null,n(r,null,n(t,{href:"#introduction"},"Introduction")),n(r,null,n(t,{href:"#installation"},"Installation")),n(r,null,n(t,{href:"#usage"},"Usage")),n(r,null,n(t,{href:"#conclusion"},"Conclusion"))))}},s={parameters:{actions:{disable:!0}},args:{heading:"In this article",links:["Introduction","Installation","Usage","Conclusion"],paragraphs:20},render(a){return n("div",{style:{display:"grid",gridTemplateColumns:"1fr min-content"}},n("main",null,n("h1",null,"Playground"),n("p",null,"Scroll down to view the changes in the table of contents component."),Array.from({length:a.paragraphs},(e,o)=>n("p",{key:o},"...")),n("h2",{id:"introduction"},"Introduction"),Array.from({length:a.paragraphs},(e,o)=>n("p",{key:o},"...")),n("h2",{id:"installation"},"Installation"),Array.from({length:a.paragraphs},(e,o)=>n("p",{key:o},"...")),n("h2",{id:"usage"},"Usage"),Array.from({length:a.paragraphs},(e,o)=>n("p",{key:o},"...")),n("h2",{id:"conclusion"},"Conclusion"),Array.from({length:a.paragraphs},(e,o)=>n("p",{key:o},"..."))),n("aside",null,n("div",{style:{position:"sticky",top:0}},n(m,null,n(g,null,a.heading),n(T,null,a.links.map(e=>n(r,null,n(t,{href:`#${e.toLocaleLowerCase()}`},e))))))))}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Toc>
      <TocHeading>In this article</TocHeading>
      <TocList>
        <TocItem>
          <TocLink href="#introduction">Introduction</TocLink>
        </TocItem>
        <TocItem>
          <TocLink href="#installation">Installation</TocLink>
        </TocItem>
        <TocItem>
          <TocLink href="#usage">Usage</TocLink>
        </TocItem>
        <TocItem>
          <TocLink href="#conclusion">Conclusion</TocLink>
        </TocItem>
      </TocList>
    </Toc>;
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  args: {
    heading: "In this article",
    links: ["Introduction", "Installation", "Usage", "Conclusion"],
    paragraphs: 20
  },
  render(p) {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr min-content"
    }}>
      <main>
        <h1>Playground</h1>
        <p>Scroll down to view the changes in the table of contents component.</p>
        {Array.from({
          length: p.paragraphs
        }, (_, i) => <p key={i}>...</p>)}
        <h2 id="introduction">Introduction</h2>
        {Array.from({
          length: p.paragraphs
        }, (_, i) => <p key={i}>...</p>)}
        <h2 id="installation">Installation</h2>
        {Array.from({
          length: p.paragraphs
        }, (_, i) => <p key={i}>...</p>)}
        <h2 id="usage">Usage</h2>
        {Array.from({
          length: p.paragraphs
        }, (_, i) => <p key={i}>...</p>)}
        <h2 id="conclusion">Conclusion</h2>
        {Array.from({
          length: p.paragraphs
        }, (_, i) => <p key={i}>...</p>)}
      </main>
      <aside>
        <div style={{
          position: "sticky",
          top: 0
        }}>
          <Toc>
            <TocHeading>{p.heading}</TocHeading>
            <TocList>
              {p.links.map(s => <TocItem>
                <TocLink href={\`#\${s.toLocaleLowerCase()}\`}>{s}</TocLink>
              </TocItem>)}
            </TocList>
          </Toc>
        </div>
      </aside>
    </div>;
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};export{i as Default,s as Playground,L as default};
