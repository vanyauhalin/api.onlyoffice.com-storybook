import{_ as r}from"./preact.module-BGZS-fhn.js";import{Default as C}from"./main.story-DbOqHmPs.js";import{C as u,a as s,b as f}from"./main-ByLWEQrm.js";import"./main-B4tVgU8W.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./main-CeZgRJBv.js";import"./hooks.module-BqWZPo7t.js";import"./MagnifyingGlassIcon-u9hgdrBa.js";import"./main-BCPT5Nat.js";const $={title:"Site Regions / Chapter"};function t(){return r(f,null,r(s,null,Array.from({length:100},(a,e)=>r("div",null,r("a",{key:e,href:"/"},e)))),r(u,null,Array.from({length:100},(a,e)=>r("p",{key:e},e))))}function n(){return r(f,null,r(s,null,r(C,null),Array.from({length:100},(a,e)=>r("div",null,r("a",{key:e,href:"/"},e)))),r(u,null,Array.from({length:100},(a,e)=>r("p",{key:e},e))))}var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`function Default(): JSX.Element {
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,h,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`function WithSearch(): JSX.Element {
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
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};export{t as Default,n as WithSearch,$ as default};
