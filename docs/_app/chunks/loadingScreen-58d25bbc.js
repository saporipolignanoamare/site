import{a0 as M,S as p,i as y,s as z,J as N,e as d,c as h,a as _,d as f,f as u,b as m,g,O as P,P as B,Q as K,q as w,o as E,I as C,G as D,H as L,w as k,x as q,y as H,B as F,k as U,t as Y,m as Z,h as $,F as I,j as x}from"./vendor-acdcde49.js";import{a as G,t as Q}from"./product.svelte_svelte_type_style_lang-6ed27d54.js";const{createClient:T}=M,v=T({space:"9cbraljlhlcw",accessToken:"YrDMNhz0uvZ9CpB52dFX7r-p29eVUvKADqtErMYD4I0"});async function oe(s){let t=(await v.getEntries({content_type:"categoria",locale:s})).items;return t=t.sort(X),t}function X(s,e){return s.fields.ordine-e.fields.ordine}async function re(s,e){return(await v.getEntries({content_type:"prodotto","fields.categoria.sys.id":s.sys.id,locale:e})).items}async function ce(s){return await v.getEntry("3HQI9CHzu9Ewqh7ZtaXKmv",{locale:s})}async function ue(){return await v.getEntry("1Y6Guv4ycKqCCNlqMMW3rE")}function J(s){let e,t;const n=s[3].default,a=N(n,s,s[2],null);return{c(){e=d("div"),a&&a.c(),this.h()},l(i){e=h(i,"DIV",{style:!0,class:!0});var l=_(e);a&&a.l(l),l.forEach(f),this.h()},h(){u(e,"--navHeight",s[1]+1+"px"),u(e,"--z",s[0]),m(e,"class","svelte-14m4icu")},m(i,l){g(i,e,l),a&&a.m(e,null),t=!0},p(i,[l]){a&&a.p&&(!t||l&4)&&P(a,n,i,i[2],t?K(n,i[2],l,null):B(i[2]),null),(!t||l&2)&&u(e,"--navHeight",i[1]+1+"px"),(!t||l&1)&&u(e,"--z",i[0])},i(i){t||(w(a,i),t=!0)},o(i){E(a,i),t=!1},d(i){i&&f(e),a&&a.d(i)}}}function O(s,e,t){let n;C(s,G,o=>t(1,n=o));let{$$slots:a={},$$scope:i}=e,{zIndex:l="auto"}=e;return s.$$set=o=>{"zIndex"in o&&t(0,l=o.zIndex),"$$scope"in o&&t(2,i=o.$$scope)},[l,n,i,a]}class R extends p{constructor(e){super();y(this,e,O,J,z,{zIndex:0})}}const S=/[a-zA-Z]/,V=(s,e=0)=>[...Array(s).keys()].map(t=>t+e);function j(s,e,t){const n=s.slice();return n[6]=e[t],n}function A(s){let e;return{c(){e=d("div"),this.h()},l(t){e=h(t,"DIV",{class:!0,style:!0}),_(e).forEach(f),this.h()},h(){m(e,"class","dot svelte-14w6xk7"),u(e,"--dotSize",+s[3]*.25+s[1]),u(e,"--color",s[0]),u(e,"animation-delay",s[6]*(+s[5]/10)+s[4])},m(t,n){g(t,e,n)},p(t,n){n&10&&u(e,"--dotSize",+t[3]*.25+t[1]),n&1&&u(e,"--color",t[0])},d(t){t&&f(e)}}}function W(s){let e,t=V(3,1),n=[];for(let a=0;a<t.length;a+=1)n[a]=A(j(s,t,a));return{c(){e=d("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=h(a,"DIV",{class:!0,style:!0});var i=_(e);for(let l=0;l<n.length;l+=1)n[l].l(i);i.forEach(f),this.h()},h(){m(e,"class","wrapper svelte-14w6xk7"),u(e,"--size",s[3]+s[1]),u(e,"--duration",s[2])},m(a,i){g(a,e,i);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(a,[i]){if(i&59){t=V(3,1);let l;for(l=0;l<t.length;l+=1){const o=j(a,t,l);n[l]?n[l].p(o,i):(n[l]=A(o),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}i&10&&u(e,"--size",a[3]+a[1]),i&4&&u(e,"--duration",a[2])},i:D,o:D,d(a){a&&f(e),L(n,a)}}}function ee(s,e,t){let{color:n="#FF3E00"}=e,{unit:a="px"}=e,{duration:i="0.6s"}=e,{size:l="60"}=e,o=i.match(S)[0],c=i.replace(S,"");return s.$$set=r=>{"color"in r&&t(0,n=r.color),"unit"in r&&t(1,a=r.unit),"duration"in r&&t(2,i=r.duration),"size"in r&&t(3,l=r.size)},[n,a,i,l,o,c]}class te extends p{constructor(e){super();y(this,e,ee,W,z,{color:0,unit:1,duration:2,size:3})}}function ne(s){let e,t,n,a,i=s[0]("common.loading")+"",l,o;return t=new te({props:{color:"var(--c-main)"}}),{c(){e=d("div"),k(t.$$.fragment),n=U(),a=d("p"),l=Y(i),this.h()},l(c){e=h(c,"DIV",{class:!0});var r=_(e);q(t.$$.fragment,r),n=Z(r),a=h(r,"P",{class:!0});var b=_(a);l=$(b,i),b.forEach(f),r.forEach(f),this.h()},h(){m(a,"class","svelte-59wlix"),m(e,"class","svelte-59wlix")},m(c,r){g(c,e,r),H(t,e,null),I(e,n),I(e,a),I(a,l),o=!0},p(c,r){(!o||r&1)&&i!==(i=c[0]("common.loading")+"")&&x(l,i)},i(c){o||(w(t.$$.fragment,c),o=!0)},o(c){E(t.$$.fragment,c),o=!1},d(c){c&&f(e),F(t)}}}function ae(s){let e,t;return e=new R({props:{zIndex:98,$$slots:{default:[ne]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,a){H(e,n,a),t=!0},p(n,[a]){const i={};a&3&&(i.$$scope={dirty:a,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function se(s,e,t){let n;return C(s,Q,a=>t(0,n=a)),[n]}class fe extends p{constructor(e){super();y(this,e,se,ae,z,{})}}export{R as F,fe as L,ue as a,ce as b,re as c,oe as g};
