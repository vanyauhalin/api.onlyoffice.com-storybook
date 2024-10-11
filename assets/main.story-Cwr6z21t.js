var T=Object.defineProperty;var O=(r,e,s)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var d=(r,e,s)=>(O(r,typeof e!="symbol"?e+"":e,s),s);import{G as R,_ as n,k as t}from"./preact.module-BGZS-fhn.js";import{B as S}from"./main-D8avA-gz.js";import"./main-CeZgRJBv.js";import{P as c}from"./hooks.module-BqWZPo7t.js";import"./main-Bm4Imml9.js";import"./clsx-B-dksMZM.js";class k{constructor(){d(this,"Description",()=>null);d(this,"SyntaxHighlight",()=>null);d(this,"headings",{Constructors:n("h2",null,"Constructors"),Description:n("h2",null,"Description"),Events:n("h2",null,"Events"),Examples:n("h2",null,"Examples"),"Extends By":n("h2",null,"Extends By"),Extends:n("h2",null,"Extends"),"Instance Methods":n("h2",null,"Instance Methods"),"Instance Properties":n("h2",null,"Instance Properties"),"Overloads By":n("h2",null,"Overloads By"),Overloads:n("h2",null,"Overloads"),Parameters:n("h2",null,"Parameters"),Properties:n("h2",null,"Properties"),Returns:n("h2",null,"Returns"),"Try It":n("h2",null,"Try It")});d(this,"onLink",()=>{});d(this,"onRetrieve",()=>{})}}const u=R(new k);function D(r){const e=new k;return e.onLink=r.onLink,e.onRetrieve=r.onRetrieve,n(u.Provider,{value:e},r.children,n(w,{declaration:r.declaration}))}function a(r){const e=c(u);return e.headings[r.for]=n(t,null,r.children),n(t,null)}function C(r){const e=c(u);return e.Description=r.children,n(t,null)}function M(r){const e=c(u);return e.SyntaxHighlight=r.children,n(t,null)}function w(r){const{declaration:e}=r;switch(e.kind){case"class":return n(j,{declaration:e});case"constructor":case"event":case"method":case"property":case"type":return n(_,{declaration:e});default:return n(t,null)}}function j(r){const{declaration:e}=r,{Description:s}=c(u);return n(t,null,e.signature&&n(m,{signature:e.signature}),e.description&&n(t,null,n(o,{for:"Description"}),n(s,null,e.description)),e.examples&&n(t,null,n(o,{for:"Examples"}),n(g,{examples:e.examples})),e.constructors&&n(t,null,n(o,{for:"Constructors"}),n(i,{references:e.constructors})),e.instanceMethods&&n(t,null,n(o,{for:"Instance Methods"}),n(i,{references:e.instanceMethods})),e.instanceProperties&&n(t,null,n(o,{for:"Instance Properties"}),n(i,{references:e.instanceProperties})),e.events&&n(t,null,n(o,{for:"Events"}),n(i,{references:e.events})),e.extends&&n(t,null,n(o,{for:"Extends"}),n(i,{references:e.extends})),e.extendsBy&&n(t,null,n(o,{for:"Extends By"}),n(i,{references:e.extendsBy})),e.overloads&&n(t,null,n(o,{for:"Overloads"}),n(i,{references:e.overloads})),e.overloadsBy&&n(t,null,n(o,{for:"Overloads By"}),n(i,{references:e.overloadsBy})),e.tryIt&&n(t,null,n(o,{for:"Try It"}),n(s,null,e.tryIt)))}function _(r){const{declaration:e}=r;if("id"in e.type)return n(f,{declaration:r.declaration});switch(e.type.type){case"any":case"array":return n(f,{declaration:e});case"function":return n(A,{declaration:e});case"literal":return n(f,{declaration:e});case"object":return n(F,{declaration:e});default:return n(f,{declaration:e})}}function f(r){const{declaration:e}=r,{Description:s}=c(u);return n(t,null,e.signature&&n(m,{signature:e.signature}),e.description&&n(t,null,n(o,{for:"Description"}),n(s,null,e.description)),e.examples&&n(t,null,n(o,{for:"Examples"}),n(g,{examples:e.examples})),e.overloads&&n(t,null,n(o,{for:"Overloads"}),n(i,{references:e.overloads})),e.overloadsBy&&n(t,null,n(o,{for:"Overloads By"}),n(i,{references:e.overloadsBy})),e.tryIt&&n(t,null,n(o,{for:"Try It"}),n(s,null,e.tryIt)))}function A(r){const{declaration:e}=r,{type:s}=e,{Description:l}=c(u);return"id"in s||s.type!=="function"?n(t,null):n(t,null,e.signature&&n(m,{signature:e.signature}),e.description&&n(t,null,n(o,{for:"Description"}),n(l,null,e.description)),s.parameters&&n(t,null,n(o,{for:"Parameters"}),n(B,{values:s.parameters})),s.returns&&n(t,null,n(o,{for:"Returns"}),s.returns.signature&&n("code",null,n(x,{tokens:s.returns.signature})),s.returns.description&&n(l,null,s.returns.description)),e.examples&&n(t,null,n(o,{for:"Examples"}),n(g,{examples:e.examples})),e.overloads&&n(t,null,n(o,{for:"Overloads"}),n(i,{references:e.overloads})),e.overloadsBy&&n(t,null,n(o,{for:"Overloads By"}),n(i,{references:e.overloadsBy})),e.tryIt&&n(t,null,n(o,{for:"Try It"}),n(l,null,e.tryIt)))}function F(r){const{declaration:e}=r,{type:s}=e,{Description:l}=c(u);return"id"in s||s.type!=="object"?n(t,null):n(t,null,e.signature&&n(m,{signature:e.signature}),e.description&&n(t,null,n(o,{for:"Description"}),n(l,null,e.description)),s.properties&&n(t,null,n(o,{for:"Properties"}),n(B,{values:s.properties})),e.examples&&n(t,null,n(o,{for:"Examples"}),n(g,{examples:e.examples})),e.overloads&&n(t,null,n(o,{for:"Overloads"}),n(i,{references:e.overloads})),e.overloadsBy&&n(t,null,n(o,{for:"Overloads By"}),n(i,{references:e.overloadsBy})),e.tryIt&&n(t,null,n(o,{for:"Try It"}),n(l,null,e.tryIt)))}function g(r){const{examples:e}=r,{SyntaxHighlight:s}=c(u);return n(t,null,e.map(l=>n("pre",null,n("code",null,n(s,{syntax:l.syntax},l.code)))))}function m(r){const{signature:e}=r;return n("pre",null,n("code",null,n(x,{tokens:e})))}function i(r){const{references:e}=r,{Description:s,onRetrieve:l}=c(u);return n("dl",null,e.map(P=>{const p=l(P);return p?n(t,null,p.signature&&n("dt",null,p.identifier),p.summary&&n("dd",null,n(s,null,p.summary))):n(t,null)}))}function B(r){const{values:e}=r,{Description:s}=c(u);return n("dl",null,e.map(l=>n(t,null,n("dt",null,l.identifier,l.signature&&n(t,null," ",n(S,null,n(x,{tokens:l.signature})))),n("dd",null,l.description&&n(s,null,l.description),l.default&&n("p",null,"Default: ",n("code",null,String(l.default.value)))))))}function x(r){const{tokens:e}=r;return n(t,null,e.map(s=>n(G,{token:s})))}function G(r){const{token:e}=r;switch(e.type){case"decorator":return n(K,{token:e});case"identifier":return n(V,{token:e});case"keyword":return n(q,{token:e});case"reference":return n(z,{token:e});case"text":return n(J,{token:e});default:return n(t,null)}}function K(r){const{token:e}=r;return n("span",{class:"dt-de"},e.text)}function V(r){const{token:e}=r;return n("span",{class:"dt-id"},e.text)}function q(r){const{token:e}=r;return n("span",{class:"dt-ke"},e.text)}function z(r){const{token:e}=r,{onLink:s}=c(u),l=s(e);return l?n("a",{class:"dt-re",href:l},e.text):n("span",{class:"dt-re"},e.text)}function J(r){const{token:e}=r;return n(t,null,e.text)}function o(r){const{for:e}=r;return c(u).headings[e]}const $={title:"Site / Library"},y={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return n(D,{declaration:{}})}},h={parameters:{actions:{disable:!0}},args:{},render(r){return n(D,{...r},n(a,{for:"Constructors"},n("h2",null,"Constructors")),n(a,{for:"Description"},n("h2",null,"Description")),n(a,{for:"Events"},n("h2",null,"Events")),n(a,{for:"Examples"},n("h2",null,"Examples")),n(a,{for:"Extends By"},n("h2",null,"Extends By")),n(a,{for:"Extends"},n("h2",null,"Extends")),n(a,{for:"Instance Methods"},n("h2",null,"Instance Methods")),n(a,{for:"Instance Properties"},n("h2",null,"Instance Properties")),n(a,{for:"Overloads By"},n("h2",null,"Overloads By")),n(a,{for:"Overloads"},n("h2",null,"Overloads")),n(a,{for:"Parameters"},n("h2",null,"Parameters")),n(a,{for:"Properties"},n("h2",null,"Properties")),n(a,{for:"Returns"},n("h2",null,"Returns")),n(a,{for:"Try It"},n("h2",null,"Try It")),n(C,null,e=>n("p",null,e.children)),n(M,null,e=>n(t,null,e.children)))}};var v,b,L;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    // @ts-ignore todo
    return <Library declaration={{}} />;
  }
}`,...(L=(b=y.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var H,I,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  args: {
    // todo
  },
  render(p) {
    return <Library {...p}>
      <LibraryHeading for="Constructors">
        <h2>Constructors</h2>
      </LibraryHeading>
      <LibraryHeading for="Description">
        <h2>Description</h2>
      </LibraryHeading>
      <LibraryHeading for="Events">
        <h2>Events</h2>
      </LibraryHeading>
      <LibraryHeading for="Examples">
        <h2>Examples</h2>
      </LibraryHeading>
      <LibraryHeading for="Extends By">
        <h2>Extends By</h2>
      </LibraryHeading>
      <LibraryHeading for="Extends">
        <h2>Extends</h2>
      </LibraryHeading>
      <LibraryHeading for="Instance Methods">
        <h2>Instance Methods</h2>
      </LibraryHeading>
      <LibraryHeading for="Instance Properties">
        <h2>Instance Properties</h2>
      </LibraryHeading>
      <LibraryHeading for="Overloads By">
        <h2>Overloads By</h2>
      </LibraryHeading>
      <LibraryHeading for="Overloads">
        <h2>Overloads</h2>
      </LibraryHeading>
      <LibraryHeading for="Parameters">
        <h2>Parameters</h2>
      </LibraryHeading>
      <LibraryHeading for="Properties">
        <h2>Properties</h2>
      </LibraryHeading>
      <LibraryHeading for="Returns">
        <h2>Returns</h2>
      </LibraryHeading>
      <LibraryHeading for="Try It">
        <h2>Try It</h2>
      </LibraryHeading>
      <LibraryDescription>
        {p => <p>{p.children}</p>}
      </LibraryDescription>
      <LibrarySyntaxHighlight>
        {p => <>{p.children}</>}
      </LibrarySyntaxHighlight>
    </Library>;
  }
}`,...(E=(I=h.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};export{y as Default,h as Playground,$ as default};
