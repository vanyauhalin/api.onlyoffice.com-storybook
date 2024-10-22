import{d as g}from"./main-B1oS_Iqn.js";import{_ as e}from"./preact.module-BGZS-fhn.js";import{ChapterWithAnArticle as d}from"./use.story-ByvuGv5b.js";import{Default as a}from"./main.story-CDddCArP.js";import{HeaderWithEverything as s}from"./use.story-Afbo4IFL.js";import{a as P,P as H,b as h,c as S}from"./main-COqzSKLq.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";import"./main.story-DuqsyrAZ.js";import"./main-GpuiM6_D.js";import"./main-BjCMb_E_.js";import"./main-LyXGk272.js";import"./GithubIcon-CoLQSXXG.js";import"./main-Dpz_9EEB.js";import"./ChevronRightIcon-ZHxdnDVG.js";import"./main-B4tVgU8W.js";import"./main-CeZgRJBv.js";import"./hooks.module-BqWZPo7t.js";import"./main-ByLWEQrm.js";import"./main.story-BiP9jWEV.js";import"./CloseIcon-CwEXBeXb.js";import"./MenuIcon-B8dI-wdF.js";import"./main.story-CoQBpsBB.js";import"./OnlyofficeBetaLogo-BOAqJvn8.js";const L={title:"Site Regions / Page / Use Cases"},t={name:"With Header and Footer",parameters:{controls:{disable:!0},actions:{disable:!0}},render(r,n){return e(g,null,e(P,null,e(H,null,s.render&&s.render(r,n)),e(h,null,"content"),e(S,null,a.render&&a.render(r,n))))}},o={name:"With Chapter",parameters:{controls:{disable:!0},actions:{disable:!0}},render(r,n){return e(g,null,e(P,null,e(H,null,s.render&&s.render(r,n)),e(h,null,d.render&&d.render(r,n)),e(S,null,a.render&&a.render(r,n))))}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With Header and Footer",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render(_, ctx) {
    return <HeaderAccessor>
      <Page>
        <PageHeader>
          {HeaderStory.render && HeaderStory.render(_, ctx)}
        </PageHeader>
        <PageContent>
          content
        </PageContent>
        <PageFooter>
          {FooterStory.render && FooterStory.render(_, ctx)}
        </PageFooter>
      </Page>
    </HeaderAccessor>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With Chapter",
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render(_, ctx) {
    return <HeaderAccessor>
      <Page>
        <PageHeader>
          {HeaderStory.render && HeaderStory.render(_, ctx)}
        </PageHeader>
        <PageContent>
          {ChapterStory.render && ChapterStory.render(_, ctx)}
        </PageContent>
        <PageFooter>
          {FooterStory.render && FooterStory.render(_, ctx)}
        </PageFooter>
      </Page>
    </HeaderAccessor>;
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};export{o as PageWithChapter,t as PageWithHeaderAndFooter,L as default};
