import{S as j,i as x,s as D,w as S,x as C,y as E,q as p,o as k,B as P,e as v,t as y,k as z,c as $,a as b,h as q,d as h,m as O,b as m,f as H,g,J as d,j as J,O as L,l as M,P as N,M as w,n as V,p as A,Q}from"../chunks/vendor-4b7424a8.js";import{S as R,c as F,L as G}from"../chunks/loadingScreen-5ded58b7.js";function K(o){let e,r,t=o[0].name+"",n,f,u,l,i;return{c(){e=v("a"),r=v("p"),n=y(t),f=z(),u=v("p"),l=y("\u2192"),this.h()},l(a){e=$(a,"A",{href:!0,style:!0,class:!0});var s=b(e);r=$(s,"P",{class:!0});var c=b(r);n=q(c,t),c.forEach(h),f=O(s),u=$(s,"P",{class:!0});var _=b(u);l=q(_,"\u2192"),_.forEach(h),s.forEach(h),this.h()},h(){m(r,"class","category svelte-nt8fc9"),m(u,"class","arrow svelte-nt8fc9"),m(e,"href",i="/"+o[0].slug),H(e,"--bg","url("+o[0].immagine+")"),m(e,"class","svelte-nt8fc9")},m(a,s){g(a,e,s),d(e,r),d(r,n),d(e,f),d(e,u),d(u,l)},p(a,s){s&1&&t!==(t=a[0].name+"")&&J(n,t),s&1&&i!==(i="/"+a[0].slug)&&m(e,"href",i),s&1&&H(e,"--bg","url("+a[0].immagine+")")},d(a){a&&h(e)}}}function T(o){let e,r;return e=new R({props:{width:"100%",$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){E(e,t,n),r=!0},p(t,[n]){const f={};n&3&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function U(o,e,r){let{category:t}=e;return o.$$set=n=>{"category"in n&&r(0,t=n.category)},[t]}class W extends j{constructor(e){super();x(this,e,U,T,D,{category:0})}}function B(o,e,r){const t=o.slice();return t[3]=e[r],t}function X(o){let e=JSON.parse(o[6].message).message+"",r;return{c(){r=y(e)},l(t){r=q(t,e)},m(t,n){g(t,r,n)},p:w,i:w,o:w,d(t){t&&h(r)}}}function Y(o){let e,r,t,n,f,u=o[2],l=[];for(let a=0;a<u.length;a+=1)l[a]=I(B(o,u,a));const i=a=>k(l[a],1,1,()=>{l[a]=null});return{c(){e=v("h2"),r=y("Scopri i nostri prodotti! \u{1F447}"),t=z(),n=v("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=$(a,"H2",{class:!0});var s=b(e);r=q(s,"Scopri i nostri prodotti! \u{1F447}"),s.forEach(h),t=O(a),n=$(a,"DIV",{class:!0});var c=b(n);for(let _=0;_<l.length;_+=1)l[_].l(c);c.forEach(h),this.h()},h(){m(e,"class","svelte-1th5qgz"),m(n,"class","categories svelte-1th5qgz")},m(a,s){g(a,e,s),d(e,r),g(a,t,s),g(a,n,s);for(let c=0;c<l.length;c+=1)l[c].m(n,null);f=!0},p(a,s){if(s&1){u=a[2];let c;for(c=0;c<u.length;c+=1){const _=B(a,u,c);l[c]?(l[c].p(_,s),p(l[c],1)):(l[c]=I(_),l[c].c(),p(l[c],1),l[c].m(n,null))}for(V(),c=u.length;c<l.length;c+=1)i(c);A()}},i(a){if(!f){for(let s=0;s<u.length;s+=1)p(l[s]);f=!0}},o(a){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)k(l[s]);f=!1},d(a){a&&h(e),a&&h(t),a&&h(n),Q(l,a)}}}function I(o){let e,r;return e=new W({props:{category:o[3]}}),{c(){S(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){E(e,t,n),r=!0},p:w,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function Z(o){let e,r;return e=new G({}),{c(){S(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){E(e,t,n),r=!0},p:w,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function ee(o){let e,r,t,n,f,u,l={ctx:o,current:null,token:null,hasCatch:!0,pending:Z,then:Y,catch:X,value:2,error:6,blocks:[,,,]};return L(o[0],l),{c(){e=v("div"),r=v("h1"),t=y("Olive, taralli, frutta secca e altre bont\xE0 da Polignano a Mare"),n=z(),f=M(),l.block.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var a=b(e);r=$(a,"H1",{class:!0});var s=b(r);t=q(s,"Olive, taralli, frutta secca e altre bont\xE0 da Polignano a Mare"),s.forEach(h),a.forEach(h),n=O(i),f=M(),l.block.l(i),this.h()},h(){m(r,"class","svelte-1th5qgz"),m(e,"class","heading svelte-1th5qgz")},m(i,a){g(i,e,a),d(e,r),d(r,t),g(i,n,a),g(i,f,a),l.block.m(i,l.anchor=a),l.mount=()=>f.parentNode,l.anchor=f,u=!0},p(i,[a]){o=i,N(l,o,a)},i(i){u||(p(l.block),u=!0)},o(i){for(let a=0;a<3;a+=1){const s=l.blocks[a];k(s)}u=!1},d(i){i&&h(e),i&&h(n),i&&h(f),l.block.d(i),l.token=null,l=null}}}function te(o){return o.items.map(r=>({name:r.fields.nomeCategoria,slug:r.fields.slug,immagine:r.fields.immagine.fields.file.url,ordine:r.fields.ordine})).sort(ae)}function ae(o,e){return o.ordine-e.ordine}function re(o){async function e(){const t=await F.getEntries({content_type:"categoria"});return te(t)}return[e()]}class ne extends j{constructor(e){super();x(this,e,re,ee,D,{})}}export{ne as default};