import{S as E,i as M,s as S,w as d,l as g,x as A,y as p,g as v,n as w,o as _,B as y,p as b,q as c,d as h,J as B,e as k,k as D,c as j,a as q,m as F,b as u,F as z,O as I,P as J,Q as N}from"./vendor-acdcde49.js";import"./product.svelte_svelte_type_style_lang-6ed27d54.js";function C(r){let e,n,f;var i=r[2];function s(l){return{props:{style:"margin-right: 10px"}}}return i&&(e=new i(s())),{c(){e&&d(e.$$.fragment),n=g()},l(l){e&&A(e.$$.fragment,l),n=g()},m(l,a){e&&p(e,l,a),v(l,n,a),f=!0},p(l,a){if(i!==(i=l[2])){if(e){w();const t=e;_(t.$$.fragment,1,0,()=>{y(t,1)}),b()}i?(e=new i(s()),d(e.$$.fragment),c(e.$$.fragment,1),p(e,n.parentNode,n)):e=null}},i(l){f||(e&&c(e.$$.fragment,l),f=!0)},o(l){e&&_(e.$$.fragment,l),f=!1},d(l){l&&h(n),e&&y(e,l)}}}function O(r){let e,n,f,i,s=r[2]&&C(r);const l=r[4].default,a=B(l,r,r[3],null);return{c(){e=k("div"),n=k("a"),s&&s.c(),f=D(),a&&a.c(),this.h()},l(t){e=j(t,"DIV",{class:!0});var o=q(e);n=j(o,"A",{href:!0,rel:!0,class:!0});var m=q(n);s&&s.l(m),f=F(m),a&&a.l(m),m.forEach(h),o.forEach(h),this.h()},h(){u(n,"href",r[0]),u(n,"rel",r[1]),u(n,"class","shadow svelte-luagzy"),u(e,"class","max-width svelte-luagzy")},m(t,o){v(t,e,o),z(e,n),s&&s.m(n,null),z(n,f),a&&a.m(n,null),i=!0},p(t,[o]){t[2]?s?(s.p(t,o),o&4&&c(s,1)):(s=C(t),s.c(),c(s,1),s.m(n,f)):s&&(w(),_(s,1,1,()=>{s=null}),b()),a&&a.p&&(!i||o&8)&&I(a,l,t,t[3],i?N(l,t[3],o,null):J(t[3]),null),(!i||o&1)&&u(n,"href",t[0]),(!i||o&2)&&u(n,"rel",t[1])},i(t){i||(c(s),c(a,t),i=!0)},o(t){_(s),_(a,t),i=!1},d(t){t&&h(e),s&&s.d(),a&&a.d(t)}}}function P(r,e,n){let{$$slots:f={},$$scope:i}=e,{href:s}=e,{rel:l=null}=e,{icon:a=null}=e;return r.$$set=t=>{"href"in t&&n(0,s=t.href),"rel"in t&&n(1,l=t.rel),"icon"in t&&n(2,a=t.icon),"$$scope"in t&&n(3,i=t.$$scope)},[s,l,a,i,f]}class G extends E{constructor(e){super();M(this,e,P,O,S,{href:0,rel:1,icon:2})}}export{G as M};