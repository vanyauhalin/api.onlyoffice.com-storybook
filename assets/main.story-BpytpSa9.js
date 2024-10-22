var w=Object.defineProperty;var z=(t,n,i)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i;var y=(t,n,i)=>(z(t,typeof n!="symbol"?n+"":n,i),i);import{G as B,_ as e,k as r}from"./preact.module-BGZS-fhn.js";import{T as L}from"./main-TBfWLzY6.js";import{b as v,G as F,c as G}from"./main-BhfpKIv1.js";import{S as R}from"./main-EHJN3-NQ.js";import{B as I}from"./main-BcFeQ9FJ.js";import{B as h,a as S}from"./main-CsSpQ0Iz.js";import{f as Q,C as $,a as j,b as K,e as O}from"./main-DBeNRR-h.js";import"./main-CeZgRJBv.js";import{P as c}from"./hooks.module-BqWZPo7t.js";import"./main-DIEyNR2v.js";import"./clsx-B-dksMZM.js";class A{constructor(){y(this,"Description",()=>null);y(this,"SyntaxHighlight",()=>null);y(this,"headings",{Authorization:e("h3",null,"Authorization"),Body:e("h3",null,"Body"),Cookies:e("h3",null,"Cookies"),Examples:e("h3",null,"Examples"),Headers:e("h3",null,"Headers"),Path:e("h3",null,"Path"),Query:e("h3",null,"Query"),Request:e("h2",null,"Request"),Responses:e("h2",null,"Responses")})}}const l=B(new A);function q(t){return e(l.Provider,{value:new A},t.children,e(W,{declaration:t.declaration}))}function s(t){const n=c(l);return n.headings[t.for]=e(r,null,t.children),e(r,null)}function U(t){const n=c(l);return n.Description=t.children,e(r,null)}function _(t){const n=c(l);return n.SyntaxHighlight=t.children,e(r,null)}function W(t){const{declaration:n}=t;switch(n.type){case"group":return e(r,null);case"operation":return e(J,{declaration:n})}return e(r,null)}function J(t){const{declaration:n}=t,{request:i}=n;return e(r,null,i.signature.length!==0&&e(R,{signature:i.signature}),e(u,{for:"Request"}),e(M,{request:i}),n.responses.length!==0&&e(r,null,e(u,{for:"Responses"}),n.responses.map(o=>e(V,{response:o}))))}function M(t){const{request:n}=t,{Description:i}=c(l);return e(r,null,n.description&&e(i,null,n.description),n.authorizations.length!==0&&e(r,null,e(u,{for:"Authorization"}),n.authorizations.map(o=>e(N,{authorization:o}))),n.cookieParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Cookies"}),e(p,{entity:n.cookieParameters})),n.headerParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Headers"}),e(p,{entity:n.headerParameters})),n.pathParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Path"}),e(p,{entity:n.pathParameters})),n.queryParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Query"}),e(p,{entity:n.queryParameters})),n.bodyParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Body"}),e(p,{entity:n.bodyParameters})),n.examples.length!==0&&e(r,null,e(u,{for:"Examples"}),e(te,{examples:n.examples})))}function N(t){const{authorization:n}=t,{Description:i}=c(l);let o=e(r,null),a=e(r,null);return n.type==="apiKey"&&n.in==="header"?(o=e("p",null,"An API key is a token that you provide when making API calls."," ","Include the token in a header parameter called ",e("code",null,n.identifier),"."),a=e("p",null,"Example: ",e("code",null,n.identifier,": 864FE52C-1C1C-469F-9308-51DAFEFE7436"),".")):n.type==="apiKey"&&n.in==="cookie"&&(o=e("p",null,"An API key is a token that you provide when making API calls."," ","Include the token in a cookie parameter called ",e("code",null,n.identifier),"."),a=e("p",null,"Example: ",e("code",null,n.identifier,"=864FE52C-1C1C-469F-9308-51DAFEFE7436"),".")),e(r,null,n.description&&e(i,null,n.description),o,a)}function V(t){const{response:n}=t,{Description:i}=c(l);return e(r,null,e("h3",null,n.status),n.description&&e(i,null,n.description),n.body.type.type!=="noop"&&e(p,{entity:n.body}))}function p(t){const{entity:n}=t,{Description:i}=c(l);return e(r,null,n.description&&e(i,null,n.description),e(T,{type:n.type}))}function T(t){const{type:n}=t;switch(n.type){case"array":return e(X,{type:n});case"boolean":return e(r,null);case"complex":return e(Y,{type:n});case"enum":return e(Z,{type:n});case"integer":return e(r,null);case"literal":return e(ee,{type:n});case"noop":case"null":case"number":return e(r,null);case"object":return e(ne,{type:n});case"string":case"union":case"unknown":return e(r,null)}return e(r,null)}function X(t){const{type:n}=t;return n.items.type==="circular"?e(r,null):e(p,{entity:n.items})}function Y(t){const{type:n}=t;return e(D,{entities:n.entities})}function Z(t){const{type:n}=t,i=[];for(const[o,a]of n.cases.entries()){if(a.type.type!=="literal")throw new Error(`Expected literal type, got: ${a.type.type}`);const d=e(T,{type:a.type});n.cases&&o!==n.cases.length-1?i.push(e(r,null,d,", ")):i.push(e(r,null,d,"."))}return i.length===0?e(r,null):e("p",null,"Can be one of: ",i)}function ee(t){const{type:n}=t;return n.const.type==="noop"?e(r,null):e("code",null,String(n.const.value))}function ne(t){const{type:n}=t;return e(D,{properties:n.properties})}function D(t){return e(r,null,t.properties&&t.properties.length!==0&&e(v,null,t.properties.map(n=>e(x,{property:n,entity:n.self}))),t.entities&&t.entities.length!==0&&e(v,null,t.entities.map(n=>e(x,{entity:n}))))}function x(t){const{entity:n,property:i}=t,o=[],a=[];i&&i.identifier?o.push(e(h,{variant:"calm"},i.identifier)):o.push(e(h,{variant:"calm"},"."));let d=[];if(n.type==="circular"){const g=new L;g.text="circular reference",d=[g]}else d=n.signature;return d.length!==0&&o.push(e(h,{variant:"transparent"},e(R,{variant:"inline",signature:d}))),n.type!=="circular"&&n.format&&o.push(e(h,{variant:"neutral"},e(S,null,"format"),n.format)),n.type!=="circular"&&i&&i.required&&o.push(e(h,{variant:"critical"},"required")),n.type!=="circular"&&n.default.type!=="noop"&&o.push(e(h,{variant:"neutral"},e(S,null,"default"),n.default.value)),n.type!=="circular"&&a.push(e(p,{entity:n})),e(r,null,e(F,null,o.length!==0&&e(I,null,o)),e(G,null,a))}function te(t){const{examples:n}=t,{SyntaxHighlight:i}=c(l);return e(O,null,e($,null,e(j,{label:"List of Request Examples"},n.map(a=>e(K,{id:a.syntax},o(a.syntax))))),n.map(a=>e(Q,{by:a.syntax},e("pre",null,e("code",null,e(i,{syntax:a.syntax},a.code))))));function o(a){switch(a){case"http":return"HTTP";case"shell":return"cURL"}throw new Error(`Unknown syntax: ${a}`)}}function u(t){const{for:n}=t;return c(l).headings[n]}const fe={title:"Site Composites / Service"},f={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return e(q,{declaration:{}})}},m={parameters:{actions:{disable:!0}},args:{},render(t){return e(q,{...t},e(s,{for:"Authorization"},e("h3",null,"Authorization")),e(s,{for:"Body"},e("h3",null,"Body")),e(s,{for:"Cookies"},e("h3",null,"Cookies")),e(s,{for:"Examples"},e("h3",null,"Examples")),e(s,{for:"Headers"},e("h3",null,"Headers")),e(s,{for:"Path"},e("h3",null,"Path")),e(s,{for:"Query"},e("h3",null,"Query")),e(s,{for:"Request"},e("h2",null,"Request")),e(s,{for:"Responses"},e("h2",null,"Responses")),e(U,null,n=>e("p",null,n.children)),e(_,null,n=>e(r,null,n.children)))}};var H,P,C;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    return <Service declaration={{}} />;
  }
}`,...(C=(P=f.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var b,k,E;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    actions: {
      disable: true
    }
  },
  args: {
    // todo
  },
  render(p) {
    return <Service {...p}>
      <ServiceHeading for="Authorization">
        <h3>Authorization</h3>
      </ServiceHeading>
      <ServiceHeading for="Body">
        <h3>Body</h3>
      </ServiceHeading>
      <ServiceHeading for="Cookies">
        <h3>Cookies</h3>
      </ServiceHeading>
      <ServiceHeading for="Examples">
        <h3>Examples</h3>
      </ServiceHeading>
      <ServiceHeading for="Headers">
        <h3>Headers</h3>
      </ServiceHeading>
      <ServiceHeading for="Path">
        <h3>Path</h3>
      </ServiceHeading>
      <ServiceHeading for="Query">
        <h3>Query</h3>
      </ServiceHeading>
      <ServiceHeading for="Request">
        <h2>Request</h2>
      </ServiceHeading>
      <ServiceHeading for="Responses">
        <h2>Responses</h2>
      </ServiceHeading>
      <ServiceDescription>
        {p => <p>{p.children}</p>}
      </ServiceDescription>
      <ServiceSyntaxHighlight>
        {p => <>{p.children}</>}
      </ServiceSyntaxHighlight>
    </Service>;
  }
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};export{f as Default,m as Playground,fe as default};
