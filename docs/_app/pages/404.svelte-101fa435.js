import{S as R,i as q,s as C,t as k,k as j,h as b,m as S,g as m,j as v,d as o,e as g,l as y,c as E,a as J,F as N,G as O,I as h}from"../chunks/vendor-acdcde49.js";import{p as F}from"../chunks/stores-8c79090f.js";import{g as G}from"../chunks/navigation-c0b2019f.js";import{c as I}from"../chunks/stores-8df143b6.js";import"../chunks/singletons-a6a7384f.js";function z(i){let t,f,a=(i[0]in i[1].map(P))+"",n;return{c(){t=k(i[0]),f=j(),n=k(a)},l(s){t=b(s,i[0]),f=S(s),n=b(s,a)},m(s,l){m(s,t,l),m(s,f,l),m(s,n,l)},p(s,l){l&1&&v(t,s[0]),l&3&&a!==(a=(s[0]in s[1].map(P))+"")&&v(n,a)},d(s){s&&o(t),s&&o(f),s&&o(n)}}}function A(i){let t,f=JSON.stringify(i[2].params,null,2)+"",a,n,s,l=JSON.stringify(i[1].map(w),null,2)+"",u,c,_,r=z(i);return{c(){t=g("pre"),a=k(f),n=j(),s=g("pre"),u=k(l),c=j(),r&&r.c(),_=y()},l(e){t=E(e,"PRE",{});var p=J(t);a=b(p,f),p.forEach(o),n=S(e),s=E(e,"PRE",{});var d=J(s);u=b(d,l),d.forEach(o),c=S(e),r&&r.l(e),_=y()},m(e,p){m(e,t,p),N(t,a),m(e,n,p),m(e,s,p),N(s,u),m(e,c,p),r&&r.m(e,p),m(e,_,p)},p(e,[p]){p&4&&f!==(f=JSON.stringify(e[2].params,null,2)+"")&&v(a,f),p&2&&l!==(l=JSON.stringify(e[1].map(w),null,2)+"")&&v(u,l),r.p(e,p)},i:O,o:O,d(e){e&&o(t),e&&o(n),e&&o(s),e&&o(c),r&&r.d(e),e&&o(_)}}}const w=i=>i.fields.slug,P=i=>i.fields.slug;function B(i,t,f){let a,n;h(i,I,l=>f(1,a=l)),h(i,F,l=>f(2,n=l));let s;{let l=window.location.href.split("/");s=l[l.length-1],s in a.map(u=>u.fields.slug)&&G("/"+s)}return[s,a,n]}class Q extends R{constructor(t){super();q(this,t,B,A,C,{})}}export{Q as default};
