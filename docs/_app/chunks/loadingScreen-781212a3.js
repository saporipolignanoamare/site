import{a0 as B,S as p,i as y,s as z,J as M,e as d,c as h,a as m,d as f,f as u,b as _,g,O as N,P,Q as K,q as w,o as E,I as C,G as k,H as L,w as D,x as q,y as H,B as F,k as U,t as Y,m as Z,h as $,F as I,j as x}from"./vendor-acdcde49.js";import{t as G}from"./stickyBottom.svelte_svelte_type_style_lang-ce25b696.js";import{a as Q}from"./stores-f2d21f49.js";const{createClient:T}=B,v=T({space:"9cbraljlhlcw",accessToken:"YrDMNhz0uvZ9CpB52dFX7r-p29eVUvKADqtErMYD4I0"});async function re(a){let t=(await v.getEntries({content_type:"categoria",locale:a})).items;return t=t.sort(X),t}function X(a,e){return a.fields.ordine-e.fields.ordine}async function ce(a,e){return(await v.getEntries({content_type:"prodotto","fields.categoria.sys.id":a.sys.id,locale:e})).items}async function ue(a){return await v.getEntry("3HQI9CHzu9Ewqh7ZtaXKmv",{locale:a})}async function fe(){return await v.getEntry("1Y6Guv4ycKqCCNlqMMW3rE")}function J(a){let e,t;const n=a[3].default,s=M(n,a,a[2],null);return{c(){e=d("div"),s&&s.c(),this.h()},l(i){e=h(i,"DIV",{style:!0,class:!0});var o=m(e);s&&s.l(o),o.forEach(f),this.h()},h(){u(e,"--navHeight",a[1]+1+"px"),u(e,"--z",a[0]),_(e,"class","svelte-14m4icu")},m(i,o){g(i,e,o),s&&s.m(e,null),t=!0},p(i,[o]){s&&s.p&&(!t||o&4)&&N(s,n,i,i[2],t?K(n,i[2],o,null):P(i[2]),null),(!t||o&2)&&u(e,"--navHeight",i[1]+1+"px"),(!t||o&1)&&u(e,"--z",i[0])},i(i){t||(w(s,i),t=!0)},o(i){E(s,i),t=!1},d(i){i&&f(e),s&&s.d(i)}}}function O(a,e,t){let n;C(a,Q,l=>t(1,n=l));let{$$slots:s={},$$scope:i}=e,{zIndex:o="auto"}=e;return a.$$set=l=>{"zIndex"in l&&t(0,o=l.zIndex),"$$scope"in l&&t(2,i=l.$$scope)},[o,n,i,s]}class R extends p{constructor(e){super();y(this,e,O,J,z,{zIndex:0})}}const S=/[a-zA-Z]/,j=(a,e=0)=>[...Array(a).keys()].map(t=>t+e);function V(a,e,t){const n=a.slice();return n[6]=e[t],n}function A(a){let e;return{c(){e=d("div"),this.h()},l(t){e=h(t,"DIV",{class:!0,style:!0}),m(e).forEach(f),this.h()},h(){_(e,"class","dot svelte-14w6xk7"),u(e,"--dotSize",+a[3]*.25+a[1]),u(e,"--color",a[0]),u(e,"animation-delay",a[6]*(+a[5]/10)+a[4])},m(t,n){g(t,e,n)},p(t,n){n&10&&u(e,"--dotSize",+t[3]*.25+t[1]),n&1&&u(e,"--color",t[0])},d(t){t&&f(e)}}}function W(a){let e,t=j(3,1),n=[];for(let s=0;s<t.length;s+=1)n[s]=A(V(a,t,s));return{c(){e=d("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=h(s,"DIV",{class:!0,style:!0});var i=m(e);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(f),this.h()},h(){_(e,"class","wrapper svelte-14w6xk7"),u(e,"--size",a[3]+a[1]),u(e,"--duration",a[2])},m(s,i){g(s,e,i);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(s,[i]){if(i&59){t=j(3,1);let o;for(o=0;o<t.length;o+=1){const l=V(s,t,o);n[o]?n[o].p(l,i):(n[o]=A(l),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}i&10&&u(e,"--size",s[3]+s[1]),i&4&&u(e,"--duration",s[2])},i:k,o:k,d(s){s&&f(e),L(n,s)}}}function ee(a,e,t){let{color:n="#FF3E00"}=e,{unit:s="px"}=e,{duration:i="0.6s"}=e,{size:o="60"}=e,l=i.match(S)[0],c=i.replace(S,"");return a.$$set=r=>{"color"in r&&t(0,n=r.color),"unit"in r&&t(1,s=r.unit),"duration"in r&&t(2,i=r.duration),"size"in r&&t(3,o=r.size)},[n,s,i,o,l,c]}class te extends p{constructor(e){super();y(this,e,ee,W,z,{color:0,unit:1,duration:2,size:3})}}function ne(a){let e,t,n,s,i=a[0]("common.loading")+"",o,l;return t=new te({props:{color:"var(--c-main)"}}),{c(){e=d("div"),D(t.$$.fragment),n=U(),s=d("p"),o=Y(i),this.h()},l(c){e=h(c,"DIV",{class:!0});var r=m(e);q(t.$$.fragment,r),n=Z(r),s=h(r,"P",{class:!0});var b=m(s);o=$(b,i),b.forEach(f),r.forEach(f),this.h()},h(){_(s,"class","svelte-59wlix"),_(e,"class","svelte-59wlix")},m(c,r){g(c,e,r),H(t,e,null),I(e,n),I(e,s),I(s,o),l=!0},p(c,r){(!l||r&1)&&i!==(i=c[0]("common.loading")+"")&&x(o,i)},i(c){l||(w(t.$$.fragment,c),l=!0)},o(c){E(t.$$.fragment,c),l=!1},d(c){c&&f(e),F(t)}}}function se(a){let e,t;return e=new R({props:{zIndex:98,$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){D(e.$$.fragment)},l(n){q(e.$$.fragment,n)},m(n,s){H(e,n,s),t=!0},p(n,[s]){const i={};s&3&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function ae(a,e,t){let n;return C(a,G,s=>t(0,n=s)),[n]}class de extends p{constructor(e){super();y(this,e,ae,se,z,{})}}export{R as F,de as L,fe as a,ue as b,ce as c,re as g};
