import{S as P,i as W,s as Y,e as I,c as C,a2 as T,b,g as z,a3 as ge,a4 as ve,a5 as be,W as le,a6 as se,d as g,a as E,n as U,a7 as pe,p as X,q as R,o as q,v as ye,a8 as ke,a9 as ae,aa as we,G as Ee,J as Ie,l as re,K as Z,t as F,L as x,h as J,F as y,j as K,C as $,M as ie,N as A,O as Ce,P as Me,Q as De,z as Re,R as ze,T as ne,U as B,w as j,x as O,y as H,B as L,k as S,m as G,f as oe,X as qe,H as Ae,I as ce}from"../chunks/vendor-acdcde49.js";import{c as Be,t as Ve}from"../chunks/product.svelte_svelte_type_style_lang-6ed27d54.js";import{S as je}from"../chunks/squareDiv-c45b89ea.js";import"../chunks/preload-helper-ec9aa979.js";function ue(s,e,t){const l=s.slice();return l[3]=e[t],l}function fe(s,e){let t,l,a,o,d=Ee,c;return{key:s,first:null,c(){t=I("img"),this.h()},l(r){t=C(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){T(t.src,l=e[3])||b(t,"src",l),b(t,"alt",""),b(t,"class","svelte-sb8fv5"),this.first=t},m(r,u){z(r,t,u),c=!0},p(r,u){e=r,(!c||u&1&&!T(t.src,l=e[3]))&&b(t,"src",l)},r(){o=t.getBoundingClientRect()},f(){ge(t),d(),ve(t,o)},a(){d(),d=be(t,o,ke,{})},i(r){c||(le(()=>{a||(a=se(t,ae,{},!0)),a.run(1)}),c=!0)},o(r){a||(a=se(t,ae,{},!1)),a.run(0),c=!1},d(r){r&&g(t),r&&a&&a.end()}}}function He(s){let e,t=[],l=new Map,a,o=s[0];const d=c=>c[3];for(let c=0;c<o.length;c+=1){let r=ue(s,o,c),u=d(r);l.set(u,t[c]=fe(u,r))}return{c(){e=I("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=C(c,"DIV",{class:!0});var r=E(e);for(let u=0;u<t.length;u+=1)t[u].l(r);r.forEach(g),this.h()},h(){b(e,"class","svelte-sb8fv5")},m(c,r){z(c,e,r);for(let u=0;u<t.length;u+=1)t[u].m(e,null);a=!0},p(c,[r]){if(r&1){o=c[0],U();for(let u=0;u<t.length;u+=1)t[u].r();t=pe(t,r,d,1,c,o,l,e,we,fe,null,ue);for(let u=0;u<t.length;u+=1)t[u].a();X()}},i(c){if(!a){for(let r=0;r<o.length;r+=1)R(t[r]);a=!0}},o(c){for(let r=0;r<t.length;r+=1)q(t[r]);a=!1},d(c){c&&g(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function Le(s,e,t){let{images:l}=e,a=1,o=[l[1],l[0]];return ye(()=>{setInterval(()=>{a=(a+1)%l.length,t(0,o=[l[a],...o]),o.pop()},2e3)}),s.$$set=d=>{"images"in d&&t(1,l=d.images)},[o,l]}class Se extends P{constructor(e){super();W(this,e,Le,He,Y,{images:1})}}function he(s){let e,t;return{c(){e=Z("title"),t=F(s[2])},l(l){e=x(l,"title",{});var a=E(e);t=J(a,s[2]),a.forEach(g)},m(l,a){z(l,e,a),y(e,t)},p(l,a){a&4&&K(t,l[2])},d(l){l&&g(e)}}}function Ge(s){let e,t=s[2]&&he(s);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,a){t&&t.m(l,a),z(l,e,a)},p(l,a){l[2]?t?t.p(l,a):(t=he(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&g(e)}}}function Ne(s){let e,t,l,a,o;const d=s[11].default,c=Ie(d,s,s[10],null),r=c||Ge(s);let u=[{"data-carbon-icon":"ArrowRight24"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},{fill:"currentColor"},{width:"24"},{height:"24"},{class:s[0]},{preserveAspectRatio:"xMidYMid meet"},{style:s[3]},{id:s[1]},s[4]],v={};for(let i=0;i<u.length;i+=1)v=$(v,u[i]);return{c(){e=Z("svg"),t=Z("path"),r&&r.c(),this.h()},l(i){e=x(i,"svg",{"data-carbon-icon":!0,xmlns:!0,viewBox:!0,fill:!0,width:!0,height:!0,class:!0,preserveAspectRatio:!0,style:!0,id:!0});var _=E(e);t=x(_,"path",{d:!0}),E(t).forEach(g),r&&r.l(_),_.forEach(g),this.h()},h(){b(t,"d","M14 4L12.9 5.1 18.9 11.2 2 11.2 2 12.8 18.9 12.8 12.9 18.9 14 20 22 12z"),ie(e,v)},m(i,_){z(i,e,_),y(e,t),r&&r.m(e,null),l=!0,a||(o=[A(e,"click",s[12]),A(e,"mouseover",s[13]),A(e,"mouseenter",s[14]),A(e,"mouseleave",s[15]),A(e,"keyup",s[16]),A(e,"keydown",s[17])],a=!0)},p(i,[_]){c?c.p&&(!l||_&1024)&&Ce(c,d,i,i[10],l?De(d,i[10],_,null):Me(i[10]),null):r&&r.p&&(!l||_&4)&&r.p(i,l?_:-1),ie(e,v=Re(u,[{"data-carbon-icon":"ArrowRight24"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},{fill:"currentColor"},{width:"24"},{height:"24"},(!l||_&1)&&{class:i[0]},{preserveAspectRatio:"xMidYMid meet"},(!l||_&8)&&{style:i[3]},(!l||_&2)&&{id:i[1]},_&16&&i[4]]))},i(i){l||(R(r,i),l=!0)},o(i){q(r,i),l=!1},d(i){i&&g(e),r&&r.d(i),a=!1,ze(o)}}}function Pe(s,e,t){let l,a,o,d,{$$slots:c={},$$scope:r}=e,{class:u=void 0}=e,{id:v=void 0}=e,{tabindex:i=void 0}=e,{focusable:_=!1}=e,{title:D=void 0}=e,{style:p=void 0}=e;function k(n){B.call(this,s,n)}function M(n){B.call(this,s,n)}function h(n){B.call(this,s,n)}function w(n){B.call(this,s,n)}function f(n){B.call(this,s,n)}function m(n){B.call(this,s,n)}return s.$$set=n=>{t(18,e=$($({},e),ne(n))),"class"in n&&t(0,u=n.class),"id"in n&&t(1,v=n.id),"tabindex"in n&&t(5,i=n.tabindex),"focusable"in n&&t(6,_=n.focusable),"title"in n&&t(2,D=n.title),"style"in n&&t(3,p=n.style),"$$scope"in n&&t(10,r=n.$$scope)},s.$$.update=()=>{t(9,l=e["aria-label"]),t(8,a=e["aria-labelledby"]),s.$$.dirty&772&&t(7,o=l||a||D),s.$$.dirty&992&&t(4,d={"aria-label":l,"aria-labelledby":a,"aria-hidden":o?void 0:!0,role:o?"img":void 0,focusable:i==="0"?!0:_,tabindex:i})},e=ne(e),[u,v,D,p,d,i,_,o,a,l,r,c,k,M,h,w,f,m]}class de extends P{constructor(e){super();W(this,e,Pe,Ne,Y,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}}function We(s){let e,t,l,a,o,d,c=s[0].fields.nomeCategoria+"",r,u,v,i,_,D,p;var k=de;function M(h){return{props:{style:"fill: var(--c-content-0-l)"}}}return k&&(i=new k(M())),{c(){e=I("a"),t=I("img"),a=S(),o=I("div"),d=I("p"),r=F(c),u=S(),v=I("div"),i&&j(i.$$.fragment),this.h()},l(h){e=C(h,"A",{href:!0,style:!0,class:!0});var w=E(e);t=C(w,"IMG",{src:!0,alt:!0,class:!0}),a=G(w),o=C(w,"DIV",{class:!0});var f=E(o);d=C(f,"P",{class:!0});var m=E(d);r=J(m,c),m.forEach(g),u=G(f),v=C(f,"DIV",{class:!0});var n=E(v);i&&O(i.$$.fragment,n),n.forEach(g),f.forEach(g),w.forEach(g),this.h()},h(){T(t.src,l=s[2])||b(t,"src",l),b(t,"alt",s[3]),b(t,"class","svelte-mm6yck"),b(d,"class","category svelte-mm6yck"),b(v,"class","arrow shadow btn btn-base-l svelte-mm6yck"),b(o,"class","overlay svelte-mm6yck"),b(e,"href",_="/"+s[0].fields.slug),oe(e,"--size",s[1]+"px"),b(e,"class","svelte-mm6yck"),le(()=>s[4].call(e))},m(h,w){z(h,e,w),y(e,t),y(e,a),y(e,o),y(o,d),y(d,r),y(o,u),y(o,v),i&&H(i,v,null),D=qe(e,s[4].bind(e)),p=!0},p(h,w){if((!p||w&1)&&c!==(c=h[0].fields.nomeCategoria+"")&&K(r,c),k!==(k=de)){if(i){U();const f=i;q(f.$$.fragment,1,0,()=>{L(f,1)}),X()}k?(i=new k(M()),j(i.$$.fragment),R(i.$$.fragment,1),H(i,v,null)):i=null}(!p||w&1&&_!==(_="/"+h[0].fields.slug))&&b(e,"href",_),(!p||w&2)&&oe(e,"--size",h[1]+"px")},i(h){p||(i&&R(i.$$.fragment,h),p=!0)},o(h){i&&q(i.$$.fragment,h),p=!1},d(h){h&&g(e),i&&L(i),D()}}}function Ye(s){let e,t;return e=new je({props:{side:"100%",$$slots:{default:[We]},$$scope:{ctx:s}}}),{c(){j(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){H(e,l,a),t=!0},p(l,[a]){const o={};a&35&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Fe(s,e,t){let{category:l}=e;const a=l.fields.immagine.fields.file.url+"?w=300&h=300",o=l.fields.nomeCategoria;let d;function c(){d=this.clientWidth,t(1,d)}return s.$$set=r=>{"category"in r&&t(0,l=r.category)},[l,d,a,o,c]}class Je extends P{constructor(e){super();W(this,e,Fe,Ye,Y,{category:0})}}function _e(s,e,t){const l=s.slice();return l[3]=e[t],l}function me(s){let e,t;return e=new Je({props:{category:s[3]}}),{c(){j(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){H(e,l,a),t=!0},p(l,a){const o={};a&1&&(o.category=l[3]),e.$set(o)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Ke(s){let e,t,l,a,o,d=s[1]("home.intro")+"",c,r,u,v,i=s[1]("home.cta")+"",_,D,p,k;t=new Se({props:{images:s[2]}});let M=s[0],h=[];for(let f=0;f<M.length;f+=1)h[f]=me(_e(s,M,f));const w=f=>q(h[f],1,1,()=>{h[f]=null});return{c(){e=I("div"),j(t.$$.fragment),l=S(),a=I("div"),o=I("h1"),c=F(d),r=S(),u=I("div"),v=I("h1"),_=F(i),D=S(),p=I("div");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0});var m=E(e);O(t.$$.fragment,m),l=G(m),a=C(m,"DIV",{class:!0});var n=E(a);o=C(n,"H1",{class:!0});var V=E(o);c=J(V,d),V.forEach(g),n.forEach(g),m.forEach(g),r=G(f),u=C(f,"DIV",{class:!0});var N=E(u);v=C(N,"H1",{class:!0});var ee=E(v);_=J(ee,i),ee.forEach(g),D=G(N),p=C(N,"DIV",{class:!0});var te=E(p);for(let Q=0;Q<h.length;Q+=1)h[Q].l(te);te.forEach(g),N.forEach(g),this.h()},h(){b(o,"class","svelte-wumbv9"),b(a,"class","intro-container svelte-wumbv9"),b(e,"class","heading svelte-wumbv9"),b(v,"class","cta svelte-wumbv9"),b(p,"class","categories grid svelte-wumbv9"),b(u,"class","max-width content svelte-wumbv9")},m(f,m){z(f,e,m),H(t,e,null),y(e,l),y(e,a),y(a,o),y(o,c),z(f,r,m),z(f,u,m),y(u,v),y(v,_),y(u,D),y(u,p);for(let n=0;n<h.length;n+=1)h[n].m(p,null);k=!0},p(f,[m]){if((!k||m&2)&&d!==(d=f[1]("home.intro")+"")&&K(c,d),(!k||m&2)&&i!==(i=f[1]("home.cta")+"")&&K(_,i),m&1){M=f[0];let n;for(n=0;n<M.length;n+=1){const V=_e(f,M,n);h[n]?(h[n].p(V,m),R(h[n],1)):(h[n]=me(V),h[n].c(),R(h[n],1),h[n].m(p,null))}for(U(),n=M.length;n<h.length;n+=1)w(n);X()}},i(f){if(!k){R(t.$$.fragment,f);for(let m=0;m<M.length;m+=1)R(h[m]);k=!0}},o(f){q(t.$$.fragment,f),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)q(h[m]);k=!1},d(f){f&&g(e),L(t),f&&g(r),f&&g(u),Ae(h,f)}}}function Oe(s,e,t){let l,a;ce(s,Be,d=>t(0,l=d)),ce(s,Ve,d=>t(1,a=d));const o=[];return l.forEach(d=>{o.push(d.fields.immagine.fields.file.url+"?h=700&fm=jpg&fl=progressive")}),[l,a,o]}class Ze extends P{constructor(e){super();W(this,e,Oe,Ke,Y,{})}}export{Ze as default};
