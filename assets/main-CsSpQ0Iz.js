import{d as i}from"./main-DIEyNR2v.js";import{c as l}from"./clsx-B-dksMZM.js";import{H as f,E as d,_ as a,k as e}from"./preact.module-BGZS-fhn.js";function _(t){const{children:o,variant:r,...s}=t,c=[];s.class=l("badge",r&&`badge_variant_${r}`,s.class);const p=f(o);for(let n of p){if(typeof n=="object"&&n.type===u){n=d(n,{children:a(e,null,n.props.children,":")}),c.unshift(a(e,null,n," "));continue}c.push(n)}return a(i,{...s},c)}function u(t){const{...o}=t;return o.class=l("badge__caption",o.class),a(i,{...o})}export{_ as B,u as a};
