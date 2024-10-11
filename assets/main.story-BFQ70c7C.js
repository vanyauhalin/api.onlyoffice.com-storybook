import{_ as n}from"./preact.module-BGZS-fhn.js";import{D as y,H as k,U as I,L,A as _}from"./main-Bm4Imml9.js";import{c as i}from"./clsx-B-dksMZM.js";function m(t){const{...o}=t;return o.class=i("toc",o.class),n("toc-container",null,n(y,{...o}))}function T(t){const{...o}=t;return o.class=i("toc__heading",o.class),n(k,{...o})}function f(t){const{...o}=t;return o.class=i("toc__list",o.class),n(I,{...o})}function r(t){const{...o}=t;return o.class=i("toc__item",o.class),n(L,{...o})}function e(t){const{...o}=t;return o.class=i("toc__link",o.class),n(_,{...o})}const v={title:"Site / Table of Contents (TOC)"},s={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return n(m,null,n(T,null,"In this article"),n(f,null,n(r,null,n(e,{href:"#introduction"},"Introduction")),n(r,null,n(e,{href:"#installation"},"Installation")),n(r,null,n(e,{href:"#usage"},"Usage")),n(r,null,n(e,{href:"#conclusion"},"Conclusion"))))}},c={parameters:{actions:{disable:!0}},args:{heading:"In this article",links:["Introduction","Installation","Usage","Conclusion"],paragraphs:20},render(t){return n("div",{style:{display:"grid",gridTemplateColumns:"1fr min-content"}},n("main",null,n("h1",null,"Playground"),n("p",null,"Scroll down to view the changes in the table of contents component."),Array.from({length:t.paragraphs},(o,a)=>n("p",{key:a},"...")),n("h2",{id:"introduction"},"Introduction"),Array.from({length:t.paragraphs},(o,a)=>n("p",{key:a},"...")),n("h2",{id:"installation"},"Installation"),Array.from({length:t.paragraphs},(o,a)=>n("p",{key:a},"...")),n("h2",{id:"usage"},"Usage"),Array.from({length:t.paragraphs},(o,a)=>n("p",{key:a},"...")),n("h2",{id:"conclusion"},"Conclusion"),Array.from({length:t.paragraphs},(o,a)=>n("p",{key:a},"..."))),n("aside",null,n("div",{style:{position:"sticky",top:0}},n(m,null,n(T,null,t.heading),n(f,null,t.links.map(o=>n(r,null,n(e,{href:`#${o.toLocaleLowerCase()}`},o))))))))}};var l,u,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,h,g;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};export{s as Default,c as Playground,v as default};
