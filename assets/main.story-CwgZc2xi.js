var w=Object.defineProperty;var T=(t,n,i)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i;var h=(t,n,i)=>(T(t,typeof n!="symbol"?n+"":n,i),i);import{G as z,_ as e,k as r}from"./preact.module-BGZS-fhn.js";import{S as E}from"./main-5WIygv4U.js";import{B as y,a as S}from"./main-D8avA-gz.js";import{f as L,C as B,a as F,b as I,e as Q}from"./main-DBeNRR-h.js";import"./main-CeZgRJBv.js";import{P as c}from"./hooks.module-BqWZPo7t.js";import"./main-Bm4Imml9.js";import"./clsx-B-dksMZM.js";class j{constructor(){h(this,"type","type");h(this,"text","")}}class R{constructor(){h(this,"Description",()=>null);h(this,"SyntaxHighlight",()=>null);h(this,"headings",{Authorization:e("h3",null,"Authorization"),Body:e("h3",null,"Body"),Cookies:e("h3",null,"Cookies"),Examples:e("h3",null,"Examples"),Headers:e("h3",null,"Headers"),Path:e("h3",null,"Path"),Query:e("h3",null,"Query"),Request:e("h2",null,"Request"),Responses:e("h2",null,"Responses")})}}const l=z(new R);function A(t){return e(l.Provider,{value:new R},t.children,e(U,{declaration:t.declaration}))}function s(t){const n=c(l);return n.headings[t.for]=e(r,null,t.children),e(r,null)}function K(t){const n=c(l);return n.Description=t.children,e(r,null)}function O(t){const n=c(l);return n.SyntaxHighlight=t.children,e(r,null)}function U(t){const{declaration:n}=t;switch(n.type){case"group":return e(r,null);case"operation":return e(_,{declaration:n})}return e(r,null)}function _(t){const{declaration:n}=t,{request:i}=n;return e(r,null,i.signature.length!==0&&e(E,{signature:i.signature}),e(u,{for:"Request"}),e($,{request:i}),n.responses.length!==0&&e(r,null,e(u,{for:"Responses"}),n.responses.map(a=>e(W,{response:a}))))}function $(t){const{request:n}=t,{Description:i}=c(l);return e(r,null,n.description&&e(i,null,n.description),n.authorizations.length!==0&&e(r,null,e(u,{for:"Authorization"}),n.authorizations.map(a=>e(G,{authorization:a}))),n.cookieParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Cookies"}),e(p,{entity:n.cookieParameters})),n.headerParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Headers"}),e(p,{entity:n.headerParameters})),n.pathParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Path"}),e(p,{entity:n.pathParameters})),n.queryParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Query"}),e(p,{entity:n.queryParameters})),n.bodyParameters.type.type!=="noop"&&e(r,null,e(u,{for:"Body"}),e(p,{entity:n.bodyParameters})),n.examples.length!==0&&e(r,null,e(u,{for:"Examples"}),e(Y,{examples:n.examples})))}function G(t){const{authorization:n}=t,{Description:i}=c(l);let a=e(r,null),o=e(r,null);return n.type==="apiKey"&&n.in==="header"?(a=e("p",null,"An API key is a token that you provide when making API calls."," ","Include the token in a header parameter called ",e("code",null,n.identifier),"."),o=e("p",null,"Example: ",e("code",null,n.identifier,": 864FE52C-1C1C-469F-9308-51DAFEFE7436"),".")):n.type==="apiKey"&&n.in==="cookie"&&(a=e("p",null,"An API key is a token that you provide when making API calls."," ","Include the token in a cookie parameter called ",e("code",null,n.identifier),"."),o=e("p",null,"Example: ",e("code",null,n.identifier,"=864FE52C-1C1C-469F-9308-51DAFEFE7436"),".")),e(r,null,n.description&&e(i,null,n.description),a,o)}function W(t){const{response:n}=t,{Description:i}=c(l);return e(r,null,e("h3",null,n.status),n.description&&e(i,null,n.description),n.body.type.type!=="noop"&&e(p,{entity:n.body}))}function p(t){const{entity:n}=t,{Description:i}=c(l);return e(r,null,n.description&&e(i,null,n.description),e(q,{type:n.type}))}function q(t){const{type:n}=t;switch(n.type){case"array":return e(J,{type:n});case"boolean":return e(r,null);case"complex":return e(M,{type:n});case"enum":return e(N,{type:n});case"integer":return e(r,null);case"literal":return e(V,{type:n});case"noop":case"null":case"number":return e(r,null);case"object":return e(X,{type:n});case"string":case"union":case"unknown":return e(r,null)}return e(r,null)}function J(t){const{type:n}=t;return n.items.type==="circular"?e(r,null):e(p,{entity:n.items})}function M(t){const{type:n}=t;return e(D,{entities:n.entities})}function N(t){const{type:n}=t,i=[];for(const[a,o]of n.cases.entries()){if(o.type.type!=="literal")throw new Error(`Expected literal type, got: ${o.type.type}`);const d=e(q,{type:o.type});n.cases&&a!==n.cases.length-1?i.push(e(r,null,d,", ")):i.push(e(r,null,d,"."))}return i.length===0?e(r,null):e("p",null,"Can be one of: ",i)}function V(t){const{type:n}=t;return n.const.type==="noop"?e(r,null):e("code",null,String(n.const.value))}function X(t){const{type:n}=t;return e(D,{properties:n.properties})}function D(t){return e(r,null,t.properties&&t.properties.length!==0&&e("dl",null,t.properties.map(n=>e(v,{property:n,entity:n.self}))),t.entities&&t.entities.length!==0&&e("dl",null,t.entities.map(n=>e(v,{entity:n}))))}function v(t){const{entity:n,property:i}=t,a=[],o=[];i&&i.identifier&&a.push(e(y,{variant:"calm"},i.identifier));let d=[];if(n.type==="circular"){const g=new j;g.text="circular reference",d=[g]}else d=n.signature;return d.length!==0&&a.push(e(E,{variant:"inline",signature:d})),n.type!=="circular"&&n.format&&a.push(e(y,{variant:"neutral"},e(S,null,"format"),n.format)),n.type!=="circular"&&i&&i.required&&a.push(e(y,{variant:"critical"},"required")),n.type!=="circular"&&n.default.type!=="noop"&&a.push(e(y,{variant:"neutral"},e(S,null,"default"),n.default.value)),n.type!=="circular"&&o.push(e(p,{entity:n})),e(r,null,e("dt",null,a),e("dd",null,o))}function Y(t){const{examples:n}=t,{SyntaxHighlight:i}=c(l);return e(Q,null,e(B,null,e(F,{label:"List of Request Examples"},n.map(o=>e(I,{id:o.syntax},a(o.syntax))))),n.map(o=>e(L,{by:o.syntax},e("pre",null,e("code",null,e(i,{syntax:o.syntax},o.code))))));function a(o){switch(o){case"http":return"HTTP";case"shell":return"cURL"}throw new Error(`Unknown syntax: ${o}`)}}function u(t){const{for:n}=t;return c(l).headings[n]}const se={title:"Site / Service"},f={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return e(A,{declaration:{}})}},m={parameters:{actions:{disable:!0}},args:{},render(t){return e(A,{...t},e(s,{for:"Authorization"},e("h3",null,"Authorization")),e(s,{for:"Body"},e("h3",null,"Body")),e(s,{for:"Cookies"},e("h3",null,"Cookies")),e(s,{for:"Examples"},e("h3",null,"Examples")),e(s,{for:"Headers"},e("h3",null,"Headers")),e(s,{for:"Path"},e("h3",null,"Path")),e(s,{for:"Query"},e("h3",null,"Query")),e(s,{for:"Request"},e("h2",null,"Request")),e(s,{for:"Responses"},e("h2",null,"Responses")),e(K,null,n=>e("p",null,n.children)),e(O,null,n=>e(r,null,n.children)))}};var x,H,P;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var k,C,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(C=m.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};export{f as Default,m as Playground,se as default};
