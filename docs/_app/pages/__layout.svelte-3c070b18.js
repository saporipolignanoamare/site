import{S as z,i as w,s as E,F as S,e as v,c as $,a as g,d as _,b as m,f as I,g as y,G as L,H as q,I as A,q as h,o as p,w as D,x as H,y as V,B,k as C,t as J,m as F,h as K,J as k,p as M,K as N,L as O,M as P,n as Q}from"../chunks/vendor-63f95e45.js";import{p as R}from"../chunks/stores-55200c5e.js";function T(i){let e,t;const s=i[3].default,l=S(s,i,i[2],null);return{c(){e=v("a"),l&&l.c(),this.h()},l(a){e=$(a,"A",{href:!0,style:!0,class:!0});var n=g(e);l&&l.l(n),n.forEach(_),this.h()},h(){m(e,"href",i[1]),I(e,"--size",i[0]),m(e,"class","svelte-1xc2gli")},m(a,n){y(a,e,n),l&&l.m(e,null),t=!0},p(a,[n]){l&&l.p&&(!t||n&4)&&L(l,s,a,a[2],t?A(s,a[2],n,null):q(a[2]),null),(!t||n&2)&&m(e,"href",a[1]),(!t||n&1)&&I(e,"--size",a[0])},i(a){t||(h(l,a),t=!0)},o(a){p(l,a),t=!1},d(a){a&&_(e),l&&l.d(a)}}}function U(i,e,t){let{$$slots:s={},$$scope:l}=e,{size:a}=e,{href:n}=e;return i.$$set=o=>{"size"in o&&t(0,a=o.size),"href"in o&&t(1,n=o.href),"$$scope"in o&&t(2,l=o.$$scope)},[a,n,l,s]}class W extends z{constructor(e){super();w(this,e,U,T,E,{size:0,href:1})}}function G(i){let e,t;return e=new W({props:{href:"/",size:"38px",$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){D(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){V(e,s,l),t=!0},i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function X(i){let e,t;return e=new O({props:{style:"fill: white"}}),{c(){D(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,l){V(e,s,l),t=!0},p:P,i(s){t||(h(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function Y(i){let e,t,s,l,a,n,o,f=i[0].url.pathname!="/"&&G(i);const b=i[1].default,u=S(b,i,i[2],null);return{c(){e=v("div"),t=v("div"),f&&f.c(),s=C(),l=v("a"),a=J("Sapori"),n=C(),u&&u.c(),this.h()},l(r){e=$(r,"DIV",{class:!0});var c=g(e);t=$(c,"DIV",{class:!0});var d=g(t);f&&f.l(d),s=F(d),l=$(d,"A",{href:!0,class:!0});var j=g(l);a=K(j,"Sapori"),j.forEach(_),d.forEach(_),c.forEach(_),n=F(r),u&&u.l(r),this.h()},h(){m(l,"href","/"),m(l,"class","title svelte-b4kj6j"),m(t,"class","side side-right svelte-b4kj6j"),m(e,"class","navbar svelte-b4kj6j")},m(r,c){y(r,e,c),k(e,t),f&&f.m(t,null),k(t,s),k(t,l),k(l,a),y(r,n,c),u&&u.m(r,c),o=!0},p(r,[c]){r[0].url.pathname!="/"?f?c&1&&h(f,1):(f=G(r),f.c(),h(f,1),f.m(t,s)):f&&(Q(),p(f,1,1,()=>{f=null}),M()),u&&u.p&&(!o||c&4)&&L(u,b,r,r[2],o?A(b,r[2],c,null):q(r[2]),null)},i(r){o||(h(f),h(u,r),o=!0)},o(r){p(f),p(u,r),o=!1},d(r){r&&_(e),f&&f.d(),r&&_(n),u&&u.d(r)}}}function Z(i,e,t){let s;N(i,R,n=>t(0,s=n));let{$$slots:l={},$$scope:a}=e;return i.$$set=n=>{"$$scope"in n&&t(2,a=n.$$scope)},[s,l,a]}class te extends z{constructor(e){super();w(this,e,Z,Y,E,{})}}export{te as default};