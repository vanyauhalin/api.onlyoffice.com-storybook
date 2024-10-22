var G=Object.defineProperty;var w=(t,n,a)=>n in t?G(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;var y=(t,n,a)=>(w(t,typeof n!="symbol"?n+"":n,a),a);import{G as j,_ as r,k as e}from"./preact.module-BGZS-fhn.js";import{R as _}from"./main-TBfWLzY6.js";import{G as O,a as A,c as R,b as T}from"./main-BhfpKIv1.js";import{a as F,S as N}from"./main-EHJN3-NQ.js";import{B as V}from"./main-BcFeQ9FJ.js";import{B as x,a as $}from"./main-CsSpQ0Iz.js";import"./main-CeZgRJBv.js";import{P as d}from"./hooks.module-BqWZPo7t.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";class S{constructor(){y(this,"Description",()=>null);y(this,"SyntaxHighlight",()=>null);y(this,"headings",{Constructors:r("h2",null,"Constructors"),Description:r("h2",null,"Description"),Events:r("h2",null,"Events"),Examples:r("h2",null,"Examples"),"Extends By":r("h2",null,"Extends By"),Extends:r("h2",null,"Extends"),"Instance Methods":r("h2",null,"Instance Methods"),"Instance Properties":r("h2",null,"Instance Properties"),"Overloads By":r("h2",null,"Overloads By"),Overloads:r("h2",null,"Overloads"),Parameters:r("h2",null,"Parameters"),Properties:r("h2",null,"Properties"),Returns:r("h2",null,"Returns"),"Try It":r("h2",null,"Try It")});y(this,"onLink",()=>"");y(this,"onRetrieve",()=>{})}}const c=j(new S);function k(t){const n=new S;return n.onLink=t.onLink,n.onRetrieve=t.onRetrieve,r(c.Provider,{value:n},t.children,r(J,{declaration:t.declaration}))}function o(t){const n=d(c);return n.headings[t.for]=r(e,null,t.children),r(e,null)}function q(t){const n=d(c);return n.Description=t.children,r(e,null)}function z(t){const n=d(c);return n.SyntaxHighlight=t.children,r(e,null)}function J(t){const{declaration:n}=t;switch(n.kind){case"class":return r(K,{declaration:n});case"constructor":case"event":case"method":case"property":case"type":return r(Q,{declaration:n});default:return r(e,null)}}function K(t){const{declaration:n}=t,{Description:a}=d(c);return r(e,null,n.signature&&r(p,{variant:"block",signature:n.signature}),n.description&&r(e,null,r(s,{for:"Description"}),r(a,null,n.description)),n.examples&&r(e,null,r(s,{for:"Examples"}),r(v,{examples:n.examples})),n.constructors&&r(e,null,r(s,{for:"Constructors"}),r(u,{references:n.constructors})),n.instanceMethods&&r(e,null,r(s,{for:"Instance Methods"}),r(u,{references:n.instanceMethods})),n.instanceProperties&&r(e,null,r(s,{for:"Instance Properties"}),r(u,{references:n.instanceProperties})),n.events&&r(e,null,r(s,{for:"Events"}),r(u,{references:n.events})),n.extends&&r(e,null,r(s,{for:"Extends"}),r(u,{references:n.extends})),n.extendsBy&&r(e,null,r(s,{for:"Extends By"}),r(u,{references:n.extendsBy})),n.overloads&&r(e,null,r(s,{for:"Overloads"}),r(u,{references:n.overloads})),n.overloadsBy&&r(e,null,r(s,{for:"Overloads By"}),r(u,{references:n.overloadsBy})),n.tryIt&&r(e,null,r(s,{for:"Try It"}),r(a,null,n.tryIt)))}function Q(t){const{declaration:n}=t;if("id"in n.type)return r(h,{declaration:t.declaration});switch(n.type.type){case"any":case"array":return r(h,{declaration:n});case"function":return r(U,{declaration:n});case"literal":return r(h,{declaration:n});case"object":return r(W,{declaration:n});default:return r(h,{declaration:n})}}function h(t){const{declaration:n}=t,{Description:a}=d(c);return r(e,null,n.signature&&r(p,{variant:"block",signature:n.signature}),n.description&&r(e,null,r(s,{for:"Description"}),r(a,null,n.description)),n.examples&&r(e,null,r(s,{for:"Examples"}),r(v,{examples:n.examples})),n.overloads&&r(e,null,r(s,{for:"Overloads"}),r(u,{references:n.overloads})),n.overloadsBy&&r(e,null,r(s,{for:"Overloads By"}),r(u,{references:n.overloadsBy})),n.tryIt&&r(e,null,r(s,{for:"Try It"}),r(a,null,n.tryIt)))}function U(t){const{declaration:n}=t,{type:a}=n,{Description:l}=d(c);return"id"in a||a.type!=="function"?r(e,null):r(e,null,n.signature&&r(p,{variant:"block",signature:n.signature}),n.description&&r(e,null,r(s,{for:"Description"}),r(l,null,n.description)),a.parameters&&r(e,null,r(s,{for:"Parameters"}),r(C,{values:a.parameters})),a.returns&&r(e,null,r(s,{for:"Returns"}),a.returns.signature&&r(p,{variant:"inline",signature:a.returns.signature}),a.returns.description&&r(l,null,a.returns.description)),n.examples&&r(e,null,r(s,{for:"Examples"}),r(v,{examples:n.examples})),n.overloads&&r(e,null,r(s,{for:"Overloads"}),r(u,{references:n.overloads})),n.overloadsBy&&r(e,null,r(s,{for:"Overloads By"}),r(u,{references:n.overloadsBy})),n.tryIt&&r(e,null,r(s,{for:"Try It"}),r(l,null,n.tryIt)))}function W(t){const{declaration:n}=t,{type:a}=n,{Description:l}=d(c);return"id"in a||a.type!=="object"?r(e,null):r(e,null,n.signature&&r(p,{variant:"block",signature:n.signature}),n.description&&r(e,null,r(s,{for:"Description"}),r(l,null,n.description)),a.properties&&r(e,null,r(s,{for:"Properties"}),r(C,{values:a.properties})),n.examples&&r(e,null,r(s,{for:"Examples"}),r(v,{examples:n.examples})),n.overloads&&r(e,null,r(s,{for:"Overloads"}),r(u,{references:n.overloads})),n.overloadsBy&&r(e,null,r(s,{for:"Overloads By"}),r(u,{references:n.overloadsBy})),n.tryIt&&r(e,null,r(s,{for:"Try It"}),r(l,null,n.tryIt)))}function v(t){const{examples:n}=t,{SyntaxHighlight:a}=d(c);return r(e,null,n.map(l=>r("pre",null,r("code",null,r(a,{syntax:l.syntax},l.code)))))}function u(t){const{references:n}=t,{Description:a,onLink:l,onRetrieve:i}=d(c);return r(T,null,n.map(M=>{const f=i(M);return f?r(e,null,r(O,null,f.identifier&&r(A,null,(()=>{const b=new _;b.id=f.id;const L=l(b);return L?r("a",{href:L},f.identifier):r(e,null,f.identifier)})()),f.summary&&f.summary.signature&&r(p,{variant:"inline",signature:f.summary.signature})),r(R,null,f.summary&&f.summary.text&&r(a,null,f.summary.text))):r(e,null)}))}function C(t){const{values:n}=t,{Description:a}=d(c);return r(T,null,n.map(i=>r(e,null,r(O,null,r(V,null,i.identifier&&r(x,{variant:"calm"},i.identifier),i.signature&&r(x,{variant:"transparent"},r(p,{variant:"inline",signature:i.signature})),i.default&&r(x,{variant:"neutral"},r($,null,"default"),l(i.default.value)))),r(R,null,i.description&&r(a,null,i.description)))));function l(i){return i===void 0?"undefined":i===null?"null":String(i)}}function p(t){const{onLink:n}=d(c);return r(N,{...t},r(F,null,a=>{const l=n(a.reference);return l?r("a",{href:l},a.children):r(e,null,a.children)}))}function s(t){const{for:n}=t;return d(c).headings[n]}const or={title:"Site Composites / Library"},m={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return r(k,{declaration:{}})}},g={parameters:{actions:{disable:!0}},args:{},render(t){return r(k,{...t},r(o,{for:"Constructors"},r("h2",null,"Constructors")),r(o,{for:"Description"},r("h2",null,"Description")),r(o,{for:"Events"},r("h2",null,"Events")),r(o,{for:"Examples"},r("h2",null,"Examples")),r(o,{for:"Extends By"},r("h2",null,"Extends By")),r(o,{for:"Extends"},r("h2",null,"Extends")),r(o,{for:"Instance Methods"},r("h2",null,"Instance Methods")),r(o,{for:"Instance Properties"},r("h2",null,"Instance Properties")),r(o,{for:"Overloads By"},r("h2",null,"Overloads By")),r(o,{for:"Overloads"},r("h2",null,"Overloads")),r(o,{for:"Parameters"},r("h2",null,"Parameters")),r(o,{for:"Properties"},r("h2",null,"Properties")),r(o,{for:"Returns"},r("h2",null,"Returns")),r(o,{for:"Try It"},r("h2",null,"Try It")),r(q,null,n=>r("p",null,n.children)),r(z,null,n=>r(e,null,n.children)))}};var H,B,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,D,P;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};export{m as Default,g as Playground,or as default};
