import{_ as r}from"./preact.module-BGZS-fhn.js";import{D as C}from"./main.story-Dy2yCSAy.js";import"./main-CwveWsly.js";import"./main-CeZgRJBv.js";import"./clsx-B-dksMZM.js";import"./hooks.module-BqWZPo7t.js";import"./MagnifyingGlassIcon-u9hgdrBa.js";import"./main-BCPT5Nat.js";function u(t){const{children:n,...f}=t;return r("chapter-container",{class:"chapter",...f},n)}function s({children:t}){return r("div",{class:"chapter__navigation"},t)}function m({children:t}){return r("div",{class:"chapter__content"},t)}const N={title:"Site/Chapter"};function e(){return r(u,null,r(s,null,Array.from({length:100},(t,n)=>r("div",null,r("a",{key:n,href:"/"},n)))),r(m,null,Array.from({length:100},(t,n)=>r("p",{key:n},n))))}function a(){return r(u,null,r(s,null,r(C,null),Array.from({length:100},(t,n)=>r("div",null,r("a",{key:n,href:"/"},n)))),r(m,null,Array.from({length:100},(t,n)=>r("p",{key:n},n))))}var o,i,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function Default(): JSX.Element {
  return <Chapter>
    <ChapterNavigation>
      {Array.from({
        length: 100
      }, (_, i) => <div><a key={i} href="/">{i}</a></div>)}
    </ChapterNavigation>
    <ChapterContent>
      {Array.from({
        length: 100
      }, (_, i) => <p key={i}>{i}</p>)}
    </ChapterContent>
  </Chapter>;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,h,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`function WithSearch(): JSX.Element {
  return <Chapter>
    <ChapterNavigation>
      <SearchStory />
      {Array.from({
        length: 100
      }, (_, i) => <div><a key={i} href="/">{i}</a></div>)}
    </ChapterNavigation>
    <ChapterContent>
      {Array.from({
        length: 100
      }, (_, i) => <p key={i}>{i}</p>)}
    </ChapterContent>
  </Chapter>;
}`,...(c=(h=a.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};export{e as Default,a as WithSearch,N as default};
