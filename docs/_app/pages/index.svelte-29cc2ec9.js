import{S as P,i as W,s as Y,e as I,c as C,a2 as T,b,g as z,a3 as ge,a4 as ve,a5 as be,W as le,a6 as se,d as g,a as E,n as U,a7 as pe,p as X,q as R,o as j,v as ye,a8 as ke,a9 as ae,aa as we,G as Ee,J as Ie,l as re,K as Z,t as F,L as x,h as J,F as y,j as K,C as $,M as ie,N as q,O as Ce,P as Me,Q as De,z as Re,R as ze,T as ne,U as A,w as V,x as O,y as H,B as L,k as S,m as G,f as oe,X as je,H as qe,I as ce}from"../chunks/vendor-acdcde49.js";import{t as Ae}from"../chunks/product.svelte_svelte_type_style_lang-1aa0bd15.js";import{c as Be}from"../chunks/stores-8df143b6.js";import{S as Ve}from"../chunks/squareDiv-a024eb0f.js";import"../chunks/preload-helper-ec9aa979.js";function fe(s,e,t){const l=s.slice();return l[3]=e[t],l}function ue(s,e){let t,l,a,o,d=Ee,c;return{key:s,first:null,c(){t=I("img"),this.h()},l(r){t=C(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){T(t.src,l=e[3])||b(t,"src",l),b(t,"alt",""),b(t,"class","svelte-sb8fv5"),this.first=t},m(r,f){z(r,t,f),c=!0},p(r,f){e=r,(!c||f&1&&!T(t.src,l=e[3]))&&b(t,"src",l)},r(){o=t.getBoundingClientRect()},f(){ge(t),d(),ve(t,o)},a(){d(),d=be(t,o,ke,{})},i(r){c||(le(()=>{a||(a=se(t,ae,{},!0)),a.run(1)}),c=!0)},o(r){a||(a=se(t,ae,{},!1)),a.run(0),c=!1},d(r){r&&g(t),r&&a&&a.end()}}}function He(s){let e,t=[],l=new Map,a,o=s[0];const d=c=>c[3];for(let c=0;c<o.length;c+=1){let r=fe(s,o,c),f=d(r);l.set(f,t[c]=ue(f,r))}return{c(){e=I("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=C(c,"DIV",{class:!0});var r=E(e);for(let f=0;f<t.length;f+=1)t[f].l(r);r.forEach(g),this.h()},h(){b(e,"class","svelte-sb8fv5")},m(c,r){z(c,e,r);for(let f=0;f<t.length;f+=1)t[f].m(e,null);a=!0},p(c,[r]){if(r&1){o=c[0],U();for(let f=0;f<t.length;f+=1)t[f].r();t=pe(t,r,d,1,c,o,l,e,we,ue,null,fe);for(let f=0;f<t.length;f+=1)t[f].a();X()}},i(c){if(!a){for(let r=0;r<o.length;r+=1)R(t[r]);a=!0}},o(c){for(let r=0;r<t.length;r+=1)j(t[r]);a=!1},d(c){c&&g(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Le(s,e,t){let{images:l}=e,a=1,o=[l[1],l[0]];return ye(()=>{setInterval(()=>{a=(a+1)%l.length,t(0,o=[l[a],...o]),o.pop()},2e3)}),s.$$set=d=>{"images"in d&&t(1,l=d.images)},[o,l]}class Se extends P{constructor(e){super();W(this,e,Le,He,Y,{images:1})}}function he(s){let e,t;return{c(){e=Z("title"),t=F(s[2])},l(l){e=x(l,"title",{});var a=E(e);t=J(a,s[2]),a.forEach(g)},m(l,a){z(l,e,a),y(e,t)},p(l,a){a&4&&K(t,l[2])},d(l){l&&g(e)}}}function Ge(s){let e,t=s[2]&&he(s);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,a){t&&t.m(l,a),z(l,e,a)},p(l,a){l[2]?t?t.p(l,a):(t=he(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&g(e)}}}function Ne(s){let e,t,l,a,o;const d=s[11].default,c=Ie(d,s,s[10],null),r=c||Ge(s);let f=[{"data-carbon-icon":"ArrowRight24"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},{fill:"currentColor"},{width:"24"},{height:"24"},{class:s[0]},{preserveAspectRatio:"xMidYMid meet"},{style:s[3]},{id:s[1]},s[4]],v={};for(let i=0;i<f.length;i+=1)v=$(v,f[i]);return{c(){e=Z("svg"),t=Z("path"),r&&r.c(),this.h()},l(i){e=x(i,"svg",{"data-carbon-icon":!0,xmlns:!0,viewBox:!0,fill:!0,width:!0,height:!0,class:!0,preserveAspectRatio:!0,style:!0,id:!0});var m=E(e);t=x(m,"path",{d:!0}),E(t).forEach(g),r&&r.l(m),m.forEach(g),this.h()},h(){b(t,"d","M14 4L12.9 5.1 18.9 11.2 2 11.2 2 12.8 18.9 12.8 12.9 18.9 14 20 22 12z"),ie(e,v)},m(i,m){z(i,e,m),y(e,t),r&&r.m(e,null),l=!0,a||(o=[q(e,"click",s[12]),q(e,"mouseover",s[13]),q(e,"mouseenter",s[14]),q(e,"mouseleave",s[15]),q(e,"keyup",s[16]),q(e,"keydown",s[17])],a=!0)},p(i,[m]){c?c.p&&(!l||m&1024)&&Ce(c,d,i,i[10],l?De(d,i[10],m,null):Me(i[10]),null):r&&r.p&&(!l||m&4)&&r.p(i,l?m:-1),ie(e,v=Re(f,[{"data-carbon-icon":"ArrowRight24"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},{fill:"currentColor"},{width:"24"},{height:"24"},(!l||m&1)&&{class:i[0]},{preserveAspectRatio:"xMidYMid meet"},(!l||m&8)&&{style:i[3]},(!l||m&2)&&{id:i[1]},m&16&&i[4]]))},i(i){l||(R(r,i),l=!0)},o(i){j(r,i),l=!1},d(i){i&&g(e),r&&r.d(i),a=!1,ze(o)}}}function Pe(s,e,t){let l,a,o,d,{$$slots:c={},$$scope:r}=e,{class:f=void 0}=e,{id:v=void 0}=e,{tabindex:i=void 0}=e,{focusable:m=!1}=e,{title:D=void 0}=e,{style:p=void 0}=e;function k(n){A.call(this,s,n)}function M(n){A.call(this,s,n)}function h(n){A.call(this,s,n)}function w(n){A.call(this,s,n)}function u(n){A.call(this,s,n)}function _(n){A.call(this,s,n)}return s.$$set=n=>{t(18,e=$($({},e),ne(n))),"class"in n&&t(0,f=n.class),"id"in n&&t(1,v=n.id),"tabindex"in n&&t(5,i=n.tabindex),"focusable"in n&&t(6,m=n.focusable),"title"in n&&t(2,D=n.title),"style"in n&&t(3,p=n.style),"$$scope"in n&&t(10,r=n.$$scope)},s.$$.update=()=>{t(9,l=e["aria-label"]),t(8,a=e["aria-labelledby"]),s.$$.dirty&772&&t(7,o=l||a||D),s.$$.dirty&992&&t(4,d={"aria-label":l,"aria-labelledby":a,"aria-hidden":o?void 0:!0,role:o?"img":void 0,focusable:i==="0"?!0:m,tabindex:i})},e=ne(e),[f,v,D,p,d,i,m,o,a,l,r,c,k,M,h,w,u,_]}class de extends P{constructor(e){super();W(this,e,Pe,Ne,Y,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}}function We(s){let e,t,l,a,o,d,c=s[0].fields.nomeCategoria+"",r,f,v,i,m,D,p;var k=de;function M(h){return{props:{style:"fill: var(--c-content-0-l)"}}}return k&&(i=new k(M())),{c(){e=I("a"),t=I("img"),a=S(),o=I("div"),d=I("p"),r=F(c),f=S(),v=I("div"),i&&V(i.$$.fragment),this.h()},l(h){e=C(h,"A",{href:!0,style:!0,class:!0});var w=E(e);t=C(w,"IMG",{src:!0,alt:!0,class:!0}),a=G(w),o=C(w,"DIV",{class:!0});var u=E(o);d=C(u,"P",{class:!0});var _=E(d);r=J(_,c),_.forEach(g),f=G(u),v=C(u,"DIV",{class:!0});var n=E(v);i&&O(i.$$.fragment,n),n.forEach(g),u.forEach(g),w.forEach(g),this.h()},h(){T(t.src,l=s[2])||b(t,"src",l),b(t,"alt",s[3]),b(t,"class","svelte-mm6yck"),b(d,"class","category svelte-mm6yck"),b(v,"class","arrow shadow btn btn-base-l svelte-mm6yck"),b(o,"class","overlay svelte-mm6yck"),b(e,"href",m="/"+s[0].fields.slug),oe(e,"--size",s[1]+"px"),b(e,"class","svelte-mm6yck"),le(()=>s[4].call(e))},m(h,w){z(h,e,w),y(e,t),y(e,a),y(e,o),y(o,d),y(d,r),y(o,f),y(o,v),i&&H(i,v,null),D=je(e,s[4].bind(e)),p=!0},p(h,w){if((!p||w&1)&&c!==(c=h[0].fields.nomeCategoria+"")&&K(r,c),k!==(k=de)){if(i){U();const u=i;j(u.$$.fragment,1,0,()=>{L(u,1)}),X()}k?(i=new k(M()),V(i.$$.fragment),R(i.$$.fragment,1),H(i,v,null)):i=null}(!p||w&1&&m!==(m="/"+h[0].fields.slug))&&b(e,"href",m),(!p||w&2)&&oe(e,"--size",h[1]+"px")},i(h){p||(i&&R(i.$$.fragment,h),p=!0)},o(h){i&&j(i.$$.fragment,h),p=!1},d(h){h&&g(e),i&&L(i),D()}}}function Ye(s){let e,t;return e=new Ve({props:{side:"100%",$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){V(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){H(e,l,a),t=!0},p(l,[a]){const o={};a&35&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){j(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Fe(s,e,t){let{category:l}=e;const a=l.fields.immagine.fields.file.url+"?w=300&h=300",o=l.fields.nomeCategoria;let d;function c(){d=this.clientWidth,t(1,d)}return s.$$set=r=>{"category"in r&&t(0,l=r.category)},[l,d,a,o,c]}class Je extends P{constructor(e){super();W(this,e,Fe,Ye,Y,{category:0})}}function me(s,e,t){const l=s.slice();return l[3]=e[t],l}function _e(s){let e,t;return e=new Je({props:{category:s[3]}}),{c(){V(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){H(e,l,a),t=!0},p(l,a){const o={};a&1&&(o.category=l[3]),e.$set(o)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){j(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Ke(s){let e,t,l,a,o,d=s[1]("home.intro")+"",c,r,f,v,i=s[1]("home.cta")+"",m,D,p,k;t=new Se({props:{images:s[2]}});let M=s[0],h=[];for(let u=0;u<M.length;u+=1)h[u]=_e(me(s,M,u));const w=u=>j(h[u],1,1,()=>{h[u]=null});return{c(){e=I("div"),V(t.$$.fragment),l=S(),a=I("div"),o=I("h1"),c=F(d),r=S(),f=I("div"),v=I("h1"),m=F(i),D=S(),p=I("div");for(let u=0;u<h.length;u+=1)h[u].c();this.h()},l(u){e=C(u,"DIV",{class:!0});var _=E(e);O(t.$$.fragment,_),l=G(_),a=C(_,"DIV",{class:!0});var n=E(a);o=C(n,"H1",{class:!0});var B=E(o);c=J(B,d),B.forEach(g),n.forEach(g),_.forEach(g),r=G(u),f=C(u,"DIV",{class:!0});var N=E(f);v=C(N,"H1",{class:!0});var ee=E(v);m=J(ee,i),ee.forEach(g),D=G(N),p=C(N,"DIV",{class:!0});var te=E(p);for(let Q=0;Q<h.length;Q+=1)h[Q].l(te);te.forEach(g),N.forEach(g),this.h()},h(){b(o,"class","svelte-wumbv9"),b(a,"class","intro-container svelte-wumbv9"),b(e,"class","heading svelte-wumbv9"),b(v,"class","cta svelte-wumbv9"),b(p,"class","categories grid svelte-wumbv9"),b(f,"class","max-width content svelte-wumbv9")},m(u,_){z(u,e,_),H(t,e,null),y(e,l),y(e,a),y(a,o),y(o,c),z(u,r,_),z(u,f,_),y(f,v),y(v,m),y(f,D),y(f,p);for(let n=0;n<h.length;n+=1)h[n].m(p,null);k=!0},p(u,[_]){if((!k||_&2)&&d!==(d=u[1]("home.intro")+"")&&K(c,d),(!k||_&2)&&i!==(i=u[1]("home.cta")+"")&&K(m,i),_&1){M=u[0];let n;for(n=0;n<M.length;n+=1){const B=me(u,M,n);h[n]?(h[n].p(B,_),R(h[n],1)):(h[n]=_e(B),h[n].c(),R(h[n],1),h[n].m(p,null))}for(U(),n=M.length;n<h.length;n+=1)w(n);X()}},i(u){if(!k){R(t.$$.fragment,u);for(let _=0;_<M.length;_+=1)R(h[_]);k=!0}},o(u){j(t.$$.fragment,u),h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)j(h[_]);k=!1},d(u){u&&g(e),L(t),u&&g(r),u&&g(f),qe(h,u)}}}function Oe(s,e,t){let l,a;ce(s,Be,d=>t(0,l=d)),ce(s,Ae,d=>t(1,a=d));const o=[];return l.forEach(d=>{o.push(d.fields.immagine.fields.file.url+"?h=700&fm=jpg&fl=progressive")}),[l,a,o]}class xe extends P{constructor(e){super();W(this,e,Oe,Ke,Y,{})}}export{xe as default};
