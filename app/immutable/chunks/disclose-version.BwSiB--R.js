import{t as m,c as E,w as me,R as D,M as R,x as p,E as k,y as Ee,P as Q,D as ve,U as ye,C as X,z as U,A as $,B as be,F as xe,j as N,G as we,f as L,H,r as T,J as Ne,K as Te,L as Ce,N as ee,a as Re,p as Se,O as Ie,g as O,s as Ae,e as q,m as ne,Q as P,u as te,T as Oe,q as Le}from"./runtime.B_QcviKI.js";function re(e,n){return e===n}function se(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function fe(e,n){return!se(e,n)}function le(e,n,t){return{b:t,c:null,d:null,e:null,f:e,l:0,i:null,r:null,v:n,w:0,x:null,y:null}}function oe(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function w(e,n,t,r,s){const f=le(e|ve,null,r);return f.i=n,f.x=E,p!==null&&(f.l=p.l+1,e&R||oe(p,f)),s&&me(f,t),f}function un(){return p?(p.f&R)===0:!1}function z(e){if(p===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=p.f&D&&E!==null&&!E.m,t=w(k,e,!1,m,!n);if(n){const r=E;(r.e??(r.e=[])).push(t)}return t}function G(e){return w(k,e,!1,m,!0)}function Pe(e){return w(k|R,e,!1,m,!0)}function De(e,n){return w(Q|R,e,n,m,!0)}function ke(e){if(p===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=p!==null&&(p.f&D)!==0;return w(Q,()=>{const t=e();return Ee(),t},n,m,!0)}function C(e,n=m,t=!1,r=!0){let s=D;return t&&(s|=R),w(s,e,r,n,!0)}function Fe(e){const t=p===null?$|be:$,r=le(t|X,ye,m);return r.i=e,r.e=re,U!==null&&oe(U,r),r}function Be(e){return Me(xe|X,e)}function Ve(e){var t;const n=Be(e);return n.e=fe,E&&((t=E).d??(t.d=[])).push(n),n}function Me(e,n){return{c:null,e:re,f:e,v:n,w:0}}var y,A,K,ue,ce,F,ie;function ae(){y===void 0&&(y=Node.prototype,A=Element.prototype,K=Text.prototype,ue=y.appendChild,ce=y.cloneNode,A.__click=void 0,K.__nodeValue=" ",A.__className="",F=N(y,"firstChild").get,ie=N(y,"nextSibling").get,N(y,"textContent").set,N(A,"className").set)}function W(e,n){ue.call(e,n)}function Ue(e,n){return ce.call(e,n)}function v(){return document.createTextNode("")}function $e(e){const n=F.call(e);if(h)if(n===null){const t=v();return e.appendChild(t),t}else return B(n);return n}function cn(e,n){if(h){const t=e[0];if(n&&(t==null?void 0:t.nodeType)!==3){const r=v();return g.unshift(r),t&&t.parentNode.insertBefore(r,t),r}return t!==null?B(t):t}return F.call(e)}function an(e,n=!1){const t=ie.call(e);if(h){if(n&&(t==null?void 0:t.nodeType)!==3){const r=v();if(t){const s=g.indexOf(t);g.splice(s,0,r),t.parentNode.insertBefore(r,t)}else g.push(r);return r}if(t!==null)return B(t)}return t}function B(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&g[g.length-1]!==e){const n=V(e),r=(n[n.length-1]||e).nextSibling;return r.$$fragment=n,r}return e}let h=!1,g=null;function b(e){h=e!==null,g=e}function V(e,n=!1){const t=[];let r=e,s=null;for(;r!==null;){const f=r.nodeType,u=r.nextSibling;if(f===8){const i=r.data;if(i.startsWith("ssr:")){const a=i.slice(4);if(s===null)s=a;else if(a===s){if(n&&t.length===0){const l=v();t.push(l),r.parentNode.insertBefore(l,r)}return t}else t.push(r);r=u;continue}}s!==null&&t.push(r),r=u}return null}function M(e,n){if(h){let t=e;if(n&&(t=t.firstChild),t.nodeType===8){let r=t.$$fragment;r===void 0?r=V(t):we(()=>{t.$$fragment=void 0}),b(r)}else{const r=t.firstChild;b(r===null?[]:[r])}}}function He(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function qe(e,n,t){if(L(e)){for(var r=0,s;r<e.length;r++)s=e[r],t===null?W(n,s):t.before(s);return e[0]}else e!==null&&(t===null?W(n,e):t.before(e));return e}function x(e){var n=e;if(L(e))for(var t=0,r;t<e.length;t++)r=e[t],t===0&&(n=r),r.isConnected&&r.remove();else e.isConnected&&e.remove();return n}const ze=1,Ge=2,Ke=4,We=8,Y=["touchstart","touchmove","touchend"];function Ye(e,n,t){const r=[];for(const s of e){const f=s.r,u=s.e;n==="in"?(f==="in"||f==="both"?s.in():s.c(),s.d.inert=!1,H(u,!1)):n==="key"?f==="key"&&(s.p||(s.p=s.i(t)),s.in()):((f==="out"||f==="both")&&(s.p||(s.p=s.i()),r.push(s.o)),s.d.inert=!0,H(u,!0))}if(r.length>0){const s=De(()=>{T(s);const f=Pe(()=>{T(f),Ne(r)})},!1)}}function je(e){return{d:null,e:null,i:e,p:null,r:null,t:Te}}function Ze(){return{d:null,e:null,p:m,r:null,t:Ce}}const Je=new Set,j=new Set;function de(e,n){let t;return()=>{if(t===void 0){const r=He(e);t=n?r:$e(r)}return t}}function _e(e,n,t,r){if(h){t!==null&&M(t,!1);const s=g;if(s!==null)return e?s:s[0]}return n?Ue(r(),!0):document.importNode(r(),!0)}function Qe(e,n,t){return _e(!1,n,e,t)}function Xe(e,n,t){return _e(!0,n,e,t)}const en=de(" ",!1),nn=de("<!>",!0);function dn(e){var n=Qe(e,!0,en);return h&&(n==null?void 0:n.nodeType)!==3&&(n=v(),e.before(n)),n}function _n(e){if(h&&e.nodeType!==3){const n=v();return e.before(n),n}return e}function pn(e){return Xe(e,!0,nn)}function pe(e,n,t){const r=m,s=n?L(e)?e:Array.from(e.childNodes):e;!h&&t!==null&&qe(s,null,t),r.d=s}function hn(e,n){pe(n,!1,e)}function gn(e,n){pe(n,!0,e)}function mn(e,n){C(()=>tn(e,n()))}function tn(e,n){const t=e.__nodeValue,r=rn(n);h&&e.nodeValue===r?e.__nodeValue=r:t!==r&&(e.nodeValue=r,e.__nodeValue=r)}function En(e,n,t,r){let s,f;const u=G(()=>{s=f,f=(r==null?void 0:r())||[],te(()=>{e!==t(...f)&&(n(e,...f),s&&t(...s)===e&&n(null,...s))})});ne(u,()=>{G(()=>{t(...f)===e&&n(null,...f)})})}function Z(e,n){var a;const t=e.ownerDocument,r=n.type,s=((a=n.composedPath)==null?void 0:a.call(n))||[];let f=s[0]||n.target;n.target!==f&&q(n,"target",{configurable:!0,value:f});let u=0;const i=n.__root;if(i){const l=s.indexOf(i);if(l!==-1&&(e===document||e===window)){n.__root=e;return}const o=s.indexOf(e);if(o===-1)return;l<=o&&(u=l+1)}for(f=s[u]||n.target,q(n,"currentTarget",{configurable:!0,get(){return f||t}});f!==null;){const l=f.parentNode||f.host||null,o="__"+r,c=f[o];if(c!==void 0&&!f.disabled)if(L(c)){const[_,...d]=c;_.apply(f,[n,...d])}else c.call(f,n);if(n.cancelBubble||l===e||f===e)break;f=l}n.__root=e,f=e}function vn(e,n,t,r){M(e),n===void 0?r!==null&&r(e):n(e,t)}function yn(e,n,t){const r=Ze();let s=null;M(e);let f=null;r.r=l=>{const o=s,c=o.s;c.add(l),l.f(()=>{c.delete(l),c.size===0&&s!==o&&o.e!==null&&(o.d!==null&&(x(o.d),o.d=null),T(o.e),o.e=null)})};const u=()=>{const l={d:null,e:null,s:new Set,p:s},o=C(()=>{const c=r.d;c!==null&&(x(c),r.d=null),f&&t(f),l.d=r.d,r.d=null},r,!0);l.e=o,s=l},i=()=>{const l=s;if(l===null){u();return}const o=l.s;o.size===0?(l.d!==null&&(x(l.d),l.d=null),l.e?Le(l.e):u()):(u(),Ye(o,"out"))},a=C(()=>{const l=n();f!==l&&(f=l,i())},r,!1);ne(a,()=>{let l=s;for(;l!==null;){const o=l.d;o!==null&&x(o);const c=l.e;c!==null&&T(c),l=l.p}}),r.e=a}function rn(e){return typeof e=="string"?e:e==null?"":e+""}function bn(e,n,t){C(()=>{const r=t();sn(e,n,r)})}function sn(e,n,t){t=t==null?null:t+"",(!h||e.getAttribute(n)!==t&&n!=="src"&&n!=="href"&&n!=="srcset")&&(t===null?e.removeAttribute(n):e.setAttribute(n,t))}function fn(e,n){ae();const t=v();return n.target.appendChild(t),ee(()=>he(e,{...n,anchor:t}),!1)}function xn(e,n){var a,l;ae();const t=n.target,r=t.firstChild,s=V(r,!0),f=g;b(s);let u=null;s===null&&(u=v(),t.appendChild(u));let i=!1;try{return ee(()=>{const o=he(e,{...n,anchor:u});return b(null),i=!0,o},!1)}catch(o){if(!i&&n.recover!==!1&&s!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",o),x(s),r.remove(),(l=(a=s[s.length-1])==null?void 0:a.nextSibling)==null||l.remove(),b(null),fn(e,n);throw o}finally{b(f)}}function he(e,n){const t=new Set,r=n.target,s=je(n.intro||!1);let f;const u=C(()=>{n.context&&(Re({}),E.c=n.context),n.props||(n.props={}),n.events&&(n.props.$$events=n.events),f=e(n.anchor,n.props)||{},n.context&&Se()},s,!0);s.e=u;const i=Z.bind(null,r),a=Z.bind(null,document),l=o=>{for(let c=0;c<o.length;c++){const _=o[c];t.has(_)||(t.add(_),r.addEventListener(_,i,Y.includes(_)?{passive:!0}:void 0),document.addEventListener(_,a,Y.includes(_)?{passive:!0}:void 0))}};return l(Ie(Je)),j.add(l),ge.set(f,()=>{for(const c of t)r.removeEventListener(c,i);j.delete(l);const o=s.d;o!==null&&x(o),T(s.e)}),f}let ge=new WeakMap;function wn(e){const n=ge.get(e);n==null||n()}function Nn(e,n,t,r){var _;var s=(t&ze)!==0,f=(t&Ge)!==0,u=e[n],i=(_=N(e,n))==null?void 0:_.set;if(u===void 0&&r!==void 0){if(i&&f)throw new Error("ERR_SVELTE_BINDING_FALLBACK");t&We&&(r=r()),u=r,i&&i(u)}var a=()=>{var d=e[n];return d!==void 0&&(r=void 0),d===void 0?r:d};if(!(t&Ke))return a;if(i)return function(d){return arguments.length===1?(i(d),d):a()};var l=!1,o=Ve(u),c=Fe(()=>{var d=a(),S=O(o);return l?(l=!1,S):o.v=d});return s||(c.e=fe),function(d,S=!1){var I=O(c);return arguments.length>0?((S||(s?d!==I:se(d,I)))&&(l=!0,Ae(o,S?I:d),O(c)),d):I}}function Tn(){const e=E,n=e.u;n&&(n.b.length&&ke(()=>{J(e),n.b.forEach(P)}),z(()=>{const t=te(()=>n.m.map(P));return()=>{for(const r of t)typeof r=="function"&&r()}}),n.a.length&&z(()=>{J(e),n.a.forEach(P)}))}function J(e){if(e.d)for(const n of e.d)O(n);Oe(e.s)}const ln="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ln);export{ke as A,yn as B,mn as C,hn as D,Qe as E,dn as F,En as G,bn as H,sn as I,cn as a,pn as b,gn as c,_n as d,$e as e,an as f,de as g,Be as h,Tn as i,un as j,x as k,M as l,Ve as m,Ye as n,Xe as o,h as p,g as q,C as r,vn as s,tn as t,z as u,b as v,xn as w,fn as x,wn as y,Nn as z};
