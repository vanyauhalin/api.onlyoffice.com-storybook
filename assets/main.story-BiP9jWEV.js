import{_ as e}from"./preact.module-BGZS-fhn.js";import{C as S}from"./CloseIcon-CwEXBeXb.js";import{M as f,J as t}from"./MenuIcon-B8dI-wdF.js";import{S as p,D as d,B as g,N as _,U as m,L as h,A as M}from"./main-DIEyNR2v.js";import{c as r}from"./clsx-B-dksMZM.js";function x(a){const{...n}=a;return n.class=r("menubar-accessor",n.class),e(p,{...n})}function v(a){const{...n}=a;return n.class=r("menubar",n.class),e("menubar-container",null,e(d,{...n}))}function k(a){const{...n}=a;return n.class=r("menubar__toggle",n.class),n.type||(n.type="button"),e(g,{...n})}function I(a){const{...n}=a;return n.class=r("menubar__navigation",n.class),e(_,{...n})}function D(a){const{...n}=a;return n.class=r("menubar__menu",n.class),e(m,{...n})}function J(a){const{...n}=a;return n.class=r("menubar__menu-item",n.class),e(h,{...n})}function L(a){const{active:n,...s}=a;return s.class=r("menubar__menu-link",n&&"menubar__menu-link_active",s.class),e(M,{...s})}function w(a){const{...n}=a;return n.class=r("menubar__submenu",n.class),e(m,{...n})}function o(a){const{...n}=a;return n.class=r("menubar__submenu-item",n.class),e(h,{...n})}function i(a){const{...n}=a;return n.class=r("menubar__submenu-link",n.class),e(M,{...n})}const K={title:"Site Patterns / Menubar"},u={parameters:{controls:{disable:!0},actions:{disable:!0}},render(){return e(v,null,e(k,null,e(f,{width:24,height:24}),e(S,{width:24,height:24})),e(I,{"aria-label":"Global Navigation"},e(D,null,["DocSpace","Docs","Workspace"].map(a=>e(J,null,e(L,{href:location.href},a),e(w,null,e(o,null,e(t,{width:24,height:24}),e(i,{href:location.href},"JavaScript SDK")),e(o,null,e(t,{width:24,height:24}),e(i,{href:location.href},"JavaScript SDK")),e(o,null,e(t,{width:24,height:24}),e(i,{href:location.href},"JavaScript SDK")),e(o,null,e(t,{width:24,height:24}),e(i,{href:location.href},"JavaScript SDK"))))))))}};var c,b,l;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render() {
    return <Menubar>
      <MenubarToggle>
        <MenuIcon width={24} height={24} />
        <CloseIcon width={24} height={24} />
      </MenubarToggle>
      <MenubarNavigation aria-label="Global Navigation">
        <MenubarMenu>
          {["DocSpace", "Docs", "Workspace"].map(n => <MenubarMenuItem>
            <MenubarMenuLink href={location.href}>
              {n}
            </MenubarMenuLink>
            <MenubarSubmenu>
              <MenubarSubmenuItem>
                <JavascriptSdkIcon width={24} height={24} />
                <MenubarSubmenuLink href={location.href}>
                  JavaScript SDK
                </MenubarSubmenuLink>
              </MenubarSubmenuItem>
              <MenubarSubmenuItem>
                <JavascriptSdkIcon width={24} height={24} />
                <MenubarSubmenuLink href={location.href}>
                  JavaScript SDK
                </MenubarSubmenuLink>
              </MenubarSubmenuItem>
              <MenubarSubmenuItem>
                <JavascriptSdkIcon width={24} height={24} />
                <MenubarSubmenuLink href={location.href}>
                  JavaScript SDK
                </MenubarSubmenuLink>
              </MenubarSubmenuItem>
              <MenubarSubmenuItem>
                <JavascriptSdkIcon width={24} height={24} />
                <MenubarSubmenuLink href={location.href}>
                  JavaScript SDK
                </MenubarSubmenuLink>
              </MenubarSubmenuItem>
            </MenubarSubmenu>
          </MenubarMenuItem>)}
        </MenubarMenu>
      </MenubarNavigation>
    </Menubar>;
  }
}`,...(l=(b=u.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,Default:u,default:K},Symbol.toStringTag,{value:"Module"}));export{u as D,x as M,A as m};
