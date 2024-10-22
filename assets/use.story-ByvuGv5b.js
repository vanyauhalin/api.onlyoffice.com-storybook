import{_ as r}from"./preact.module-BGZS-fhn.js";import{Default as n}from"./main.story-DuqsyrAZ.js";import{C as s,a as m,b as l}from"./main-ByLWEQrm.js";import"./main-GpuiM6_D.js";import"./main-BjCMb_E_.js";import"./main-LyXGk272.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./GithubIcon-CoLQSXXG.js";import"./main-Dpz_9EEB.js";import"./ChevronRightIcon-ZHxdnDVG.js";import"./main-B4tVgU8W.js";import"./main-CeZgRJBv.js";import"./hooks.module-BqWZPo7t.js";const w={title:"Site Regions / Chapter / Use Cases"},e={name:"Chapter with an article",parameters:{controls:{disable:!0},actions:{disable:!0}},render(h,p){return r(l,null,r(m,null,Array.from({length:100},(c,t)=>r("div",null,r("a",{key:t,href:"/"},t)))),r(s,null,n.render&&n.render({},p)))}};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Chapter with an article",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render(_, ctx) {
    return <Chapter>
      <ChapterNavigation>
        {Array.from({
          length: 100
        }, (_, i) => <div><a key={i} href="/">{i}</a></div>)}
      </ChapterNavigation>
      <ChapterContent>
        {ArticleStory.render && ArticleStory.render({}, ctx)}
      </ChapterContent>
    </Chapter>;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{e as ChapterWithAnArticle,w as default};
