import{S as z,i as w,s as E,F as S,e as v,c as $,a as g,d as _,b as m,f as I,g as y,G as L,H as q,I as A,q as h,o as p,w as D,x as H,y as V,B,k as C,t as J,m as F,h as K,J as k,p as M,K as N,L as O,M as P,n as Q}from"../chunks/vendor-4b7424a8.js";import{p as R}from"../chunks/stores-325eda5a.js";function T(i){let e,t;const s=i[3].default,a=S(s,i,i[2],null);return{c(){e=v("a"),a&&a.c(),this.h()},l(l){e=$(l,"A",{href:!0,style:!0,class:!0});var n=g(e);a&&a.l(n),n.forEach(_),this.h()},h(){m(e,"href",i[1]),I(e,"--size",i[0]),m(e,"class","svelte-1xc2gli")},m(l,n){y(l,e,n),a&&a.m(e,null),t=!0},p(l,[n]){a&&a.p&&(!t||n&4)&&L(a,s,l,l[2],t?A(s,l[2],n,null):q(l[2]),null),(!t||n&2)&&m(e,"href",l[1]),(!t||n&1)&&I(e,"--size",l[0])},i(l){t||(h(a,l),t=!0)},o(l){p(a,l),t=!1},d(l){l&&_(e),a&&a.d(l)}}}function U(i,e,t){let{$$slots:s={},$$scope:a}=e,{size:l}=e,{href:n}=e;return i.$$set=o=>{"size"in o&&t(0,l=o.size),"href"in o&&t(1,n=o.href),"$$scope"in o&&t(2,a=o.$$scope)},[l,n,a,s]}class W extends z{constructor(e){super();w(this,e,U,T,E,{size:0,href:1})}}function G(i){let e,t;return e=new W({props:{href:"/",size:"38px",$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,a){V(e,s,a),t=!0},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function X(i){let e,t;return e=new O({props:{style:"fill: white"}}),{c(){D(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,a){V(e,s,a),t=!0},p:P,i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function Y(i){let e,t,s,a,l,n,o,f=i[0].url.pathname!="/"&&G(i);const b=i[1].default,u=S(b,i,i[2],null);return{c(){e=v("div"),t=v("div"),f&&f.c(),s=C(),a=v("a"),l=J("Sapori"),n=C(),u&&u.c(),this.h()},l(r){e=$(r,"DIV",{class:!0});var c=g(e);t=$(c,"DIV",{class:!0});var d=g(t);f&&f.l(d),s=F(d),a=$(d,"A",{href:!0,class:!0});var j=g(a);l=K(j,"Sapori"),j.forEach(_),d.forEach(_),c.forEach(_),n=F(r),u&&u.l(r),this.h()},h(){m(a,"href","/"),m(a,"class","title svelte-b4kj6j"),m(t,"class","side side-right svelte-b4kj6j"),m(e,"class","navbar svelte-b4kj6j")},m(r,c){y(r,e,c),k(e,t),f&&f.m(t,null),k(t,s),k(t,a),k(a,l),y(r,n,c),u&&u.m(r,c),o=!0},p(r,[c]){r[0].url.pathname!="/"?f?c&1&&h(f,1):(f=G(r),f.c(),h(f,1),f.m(t,s)):f&&(Q(),p(f,1,1,()=>{f=null}),M()),u&&u.p&&(!o||c&4)&&L(u,b,r,r[2],o?A(b,r[2],c,null):q(r[2]),null)},i(r){o||(h(f),h(u,r),o=!0)},o(r){p(f),p(u,r),o=!1},d(r){r&&_(e),f&&f.d(),r&&_(n),u&&u.d(r)}}}function Z(i,e,t){let s;N(i,R,n=>t(0,s=n));let{$$slots:a={},$$scope:l}=e;return i.$$set=n=>{"$$scope"in n&&t(2,l=n.$$scope)},[s,a,l]}class te extends z{constructor(e){super();w(this,e,Z,Y,E,{})}}export{te as default};