function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(w(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=E(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return E(e)||C(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(E(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":w(e)||C(e)&&(e.toString===R||!k(e.toString))?JSON.stringify(e,l,2):String(e),l=(e,t)=>t&&t.__v_isRef?l(e,t.value):I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()]}:!C(t)||w(t)||P(t)?t:String(t),u={},h=[],d=()=>{},p=()=>!1,f=/^on[^a-z]/,v=e=>f.test(e),g=e=>e.startsWith("onUpdate:"),m=Object.assign,y=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_=Object.prototype.hasOwnProperty,b=(e,t)=>_.call(e,t),w=Array.isArray,I=e=>"[object Map]"===A(e),T=e=>"[object Set]"===A(e),k=e=>"function"==typeof e,E=e=>"string"==typeof e,S=e=>"symbol"==typeof e,C=e=>null!==e&&"object"==typeof e,O=e=>C(e)&&k(e.then)&&k(e.catch),R=Object.prototype.toString,A=e=>R.call(e),P=e=>"[object Object]"===A(e),N=e=>E(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,D=L((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,F=L((e=>e.replace(U,"-$1").toLowerCase())),j=L((e=>e.charAt(0).toUpperCase()+e.slice(1))),V=L((e=>e?`on${j(e)}`:"")),z=(e,t)=>!Object.is(e,t),W=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},H=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $;const G=[];class K{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$&&(this.parent=$,this.index=($.scopes||($.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(G.push(this),$=this)}off(){this.active&&(G.pop(),$=G[G.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const q=e=>{const t=new Set(e);return t.w=0,t.n=0,t},J=e=>(e.w&Q)>0,X=e=>(e.n&Q)>0,Y=new WeakMap;let Z=0,Q=1;const ee=[];let te;const ne=Symbol(""),re=Symbol("");class ie{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||$)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!ee.includes(this))try{return ee.push(te=this),ae.push(oe),oe=!0,Q=1<<++Z,Z<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Q})(this):se(this),this.fn()}finally{Z<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];J(i)&&!X(i)?i.delete(e):t[n++]=i,i.w&=~Q,i.n&=~Q}t.length=n}})(this),Q=1<<--Z,le(),ee.pop();const e=ee.length;te=e>0?ee[e-1]:void 0}}stop(){this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let oe=!0;const ae=[];function ce(){ae.push(oe),oe=!1}function le(){const e=ae.pop();oe=void 0===e||e}function ue(e,t,n){if(!he())return;let r=Y.get(e);r||Y.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=q()),de(i)}function he(){return oe&&void 0!==te}function de(e,t){let n=!1;Z<=30?X(e)||(e.n|=Q,n=!J(e)):n=!e.has(te),n&&(e.add(te),te.deps.push(e))}function pe(e,t,n,r,i,s){const o=Y.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&w(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":w(e)?N(n)&&a.push(o.get("length")):(a.push(o.get(ne)),I(e)&&a.push(o.get(re)));break;case"delete":w(e)||(a.push(o.get(ne)),I(e)&&a.push(o.get(re)));break;case"set":I(e)&&a.push(o.get(ne))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(q(e))}}function fe(e,t){for(const n of w(e)?e:[...e])(n!==te||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ve=e("__proto__,__v_isRef,__isVue"),ge=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(S)),me=Ie(),ye=Ie(!1,!0),_e=Ie(!0),be=we();function we(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=at(this);for(let t=0,i=this.length;t<i;t++)ue(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(at)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ce();const n=at(this)[t].apply(this,e);return le(),n}})),e}function Ie(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Qe:Ze:t?Ye:Xe).get(n))return n;const s=w(n);if(!e&&s&&b(be,r))return Reflect.get(be,r,i);const o=Reflect.get(n,r,i);if(S(r)?ge.has(r):ve(r))return o;if(e||ue(n,0,r),t)return o;if(lt(o)){return!s||!N(r)?o.value:o}return C(o)?e?nt(o):tt(o):o}}function Te(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=at(r),s=at(s),!w(t)&&lt(s)&&!lt(r)))return s.value=r,!0;const o=w(t)&&N(n)?Number(n)<t.length:b(t,n),a=Reflect.set(t,n,r,i);return t===at(i)&&(o?z(r,s)&&pe(t,"set",n,r):pe(t,"add",n,r)),a}}const ke={get:me,set:Te(),deleteProperty:function(e,t){const n=b(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ge.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,w(e)?"length":ne),Reflect.ownKeys(e)}},Ee={get:_e,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Se=m({},ke,{get:ye,set:Te(!0)}),Ce=e=>C(e)?tt(e):e,Oe=e=>C(e)?nt(e):e,Re=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function Pe(e,t,n=!1,r=!1){const i=at(e=e.__v_raw),s=at(t);t!==s&&!n&&ue(i,0,t),!n&&ue(i,0,s);const{has:o}=Ae(i),a=r?Re:n?Oe:Ce;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Ne(e,t=!1){const n=this.__v_raw,r=at(n),i=at(e);return e!==i&&!t&&ue(r,0,e),!t&&ue(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function xe(e,t=!1){return e=e.__v_raw,!t&&ue(at(e),0,ne),Reflect.get(e,"size",e)}function Le(e){e=at(e);const t=at(this);return Ae(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Me(e,t){t=at(t);const n=at(this),{has:r,get:i}=Ae(n);let s=r.call(n,e);s||(e=at(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?z(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function De(e){const t=at(this),{has:n,get:r}=Ae(t);let i=n.call(t,e);i||(e=at(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function Ue(){const e=at(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Fe(e,t){return function(n,r){const i=this,s=i.__v_raw,o=at(s),a=t?Re:e?Oe:Ce;return!e&&ue(o,0,ne),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function je(e,t,n){return function(...r){const i=this.__v_raw,s=at(i),o=I(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Re:t?Oe:Ce;return!t&&ue(s,0,c?re:ne),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return"delete"!==e&&this}}function ze(){const e={get(e){return Pe(this,e)},get size(){return xe(this)},has:Ne,add:Le,set:Me,delete:De,clear:Ue,forEach:Fe(!1,!1)},t={get(e){return Pe(this,e,!1,!0)},get size(){return xe(this)},has:Ne,add:Le,set:Me,delete:De,clear:Ue,forEach:Fe(!1,!0)},n={get(e){return Pe(this,e,!0)},get size(){return xe(this,!0)},has(e){return Ne.call(this,e,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Fe(!0,!1)},r={get(e){return Pe(this,e,!0,!0)},get size(){return xe(this,!0)},has(e){return Ne.call(this,e,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Fe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=je(i,!1,!1),n[i]=je(i,!0,!1),t[i]=je(i,!1,!0),r[i]=je(i,!0,!0)})),[e,n,t,r]}const[We,Be,He,$e]=ze();function Ge(e,t){const n=t?e?$e:He:e?Be:We;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}const Ke={get:Ge(!1,!1)},qe={get:Ge(!1,!0)},Je={get:Ge(!0,!1)},Xe=new WeakMap,Ye=new WeakMap,Ze=new WeakMap,Qe=new WeakMap;function et(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>A(e).slice(8,-1))(e))}function tt(e){return e&&e.__v_isReadonly?e:rt(e,!1,ke,Ke,Xe)}function nt(e){return rt(e,!0,Ee,Je,Ze)}function rt(e,t,n,r,i){if(!C(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=et(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function it(e){return st(e)?it(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return it(e)||st(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function ct(e){return B(e,"__v_skip",!0),e}function lt(e){return Boolean(e&&!0===e.__v_isRef)}const ut={get:(e,t,n)=>{return lt(r=Reflect.get(e,t,n))?r.value:r;var r},set:(e,t,n,r)=>{const i=e[t];return lt(i)&&!lt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ht(e){return it(e)?e:new Proxy(e,ut)}class dt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ie(e,(()=>{var e;this._dirty||(this._dirty=!0,(e=at(e=this)).dep&&fe(e.dep))})),this.__v_isReadonly=n}get value(){const e=at(this);var t;return t=e,he()&&((t=at(t)).dep||(t.dep=q()),de(t.dep)),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pt(e,t){let n,r;k(e)?(n=e,r=d):(n=e.get,r=e.set);return new dt(n,r,k(e)||!e.set)}Promise.resolve();function ft(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(H))}let a,c=r[a=V(t)]||r[a=V(D(t))];!c&&s&&(c=r[a=V(F(t))]),c&&br(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,br(l,e,6,i)}}function vt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!k(e)){const r=e=>{const n=vt(e,t,!0);n&&(a=!0,m(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(w(s)?s.forEach((e=>o[e]=null)):m(o,s),r.set(e,o),o):(r.set(e,null),null)}function gt(e,t){return!(!e||!v(t))&&(t=t.slice(2).replace(/Once$/,""),b(e,t[0].toLowerCase()+t.slice(1))||b(e,F(t))||b(e,t))}let mt=null,yt=null;function _t(e){const t=mt;return mt=e,yt=e&&e.type.__scopeId||null,t}function bt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:v}=e;let m;const y=_t(e);try{let e;if(4&n.shapeFlag){const t=i||r;m=er(u.call(t,t,h,s,p,d,f)),e=c}else{const n=t;0,m=er(n.length>1?n(s,{attrs:c,slots:a,emit:l}):n(s,null)),e=t.props?c:wt(c)}let y=m;if(e&&!1!==v){const t=Object.keys(e),{shapeFlag:n}=y;t.length&&7&n&&(o&&t.some(g)&&(e=It(e,o)),y=Zn(y,e))}0,n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y}catch(_){Un.length=0,wr(_,e,1),m=Yn(Mn)}return _t(y),m}const wt=e=>{let t;for(const n in e)("class"===n||"style"===n||v(n))&&((t||(t={}))[n]=e[n]);return t},It=(e,t)=>{const n={};for(const r in e)g(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Tt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!gt(n,s))return!0}return!1}function kt(e,t,n=!1){const r=lr||mt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&k(t)?t.call(r.proxy):t}}const Et=[Function,Array];Boolean,Boolean;function St(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ct(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:v,onAppear:g,onAfterAppear:m,onAppearCancelled:y}=t,_=String(e.key),b=St(n,e),w=(e,t)=>{e&&br(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const s=b[_];s&&Gn(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=g||c,r=m||l,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?f:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>Ct(e,t,n,r)};return I}function Ot(e){if(xt(e))return(e=Zn(e)).children=null,e}function Rt(e){return xt(e)?e.children?e.children[0]:void 0:e}function At(e,t){6&e.shapeFlag&&e.component?At(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===xn?(128&s.patchFlag&&r++,n=n.concat(Pt(s.children,t))):(t||s.type!==Mn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}const Nt=e=>!!e.type.__asyncLoader,xt=e=>e.type.__isKeepAlive;function Lt(e,t){Dt(e,"a",t)}function Mt(e,t){Dt(e,"da",t)}function Dt(e,t,n=lr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Ft(t,r,n),n){let e=n.parent;for(;e&&e.parent;)xt(e.parent.vnode)&&Ut(r,t,n,e),e=e.parent}}function Ut(e,t,n,r){const i=Ft(t,e,r,!0);$t((()=>{y(r[t],i)}),n)}function Ft(e,t,n=lr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ce(),hr(n);const i=br(t,n,e,r);return dr(),le(),i});return r?i.unshift(s):i.push(s),s}}const jt=e=>(t,n=lr)=>(!fr||"sp"===e)&&Ft(e,t,n),Vt=jt("bm"),zt=jt("m"),Wt=jt("bu"),Bt=jt("u"),Ht=jt("bum"),$t=jt("um"),Gt=jt("sp"),Kt=jt("rtg"),qt=jt("rtc");function Jt(e,t=lr){Ft("ec",e,t)}let Xt=!0;function Yt(e){const t=en(e),n=e.proxy,r=e.ctx;Xt=!1,t.beforeCreate&&Zt(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:f,updated:v,activated:g,deactivated:m,beforeDestroy:y,beforeUnmount:_,destroyed:b,unmounted:I,render:T,renderTracked:E,renderTriggered:S,errorCaptured:O,serverPrefetch:R,expose:A,inheritAttrs:P,components:N,directives:x,filters:L}=t;if(l&&function(e,t,n=d,r=!1){w(e)&&(e=sn(e));for(const i in e){const n=e[i];let s;s=C(n)?"default"in n?kt(n.from||i,n.default,!0):kt(n.from||i):kt(n),lt(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const d in o){const e=o[d];k(e)&&(r[d]=e.bind(n))}if(i){const t=i.call(n,n);C(t)&&(e.data=tt(t))}if(Xt=!0,s)for(const w in s){const e=s[w],t=pt({get:k(e)?e.bind(n,n):k(e.get)?e.get.bind(n,n):d,set:!k(e)&&k(e.set)?e.set.bind(n):d});Object.defineProperty(r,w,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)Qt(a[d],r,n,d);if(c){const e=k(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{!function(e,t){if(lr){let n=lr.provides;const r=lr.parent&&lr.parent.provides;r===n&&(n=lr.provides=Object.create(r)),n[e]=t}}(t,e[t])}))}function M(e,t){w(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Zt(u,e,"c"),M(Vt,h),M(zt,p),M(Wt,f),M(Bt,v),M(Lt,g),M(Mt,m),M(Jt,O),M(qt,E),M(Kt,S),M(Ht,_),M($t,I),M(Gt,R),w(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===d&&(e.render=T),null!=P&&(e.inheritAttrs=P),N&&(e.components=N),x&&(e.directives=x)}function Zt(e,t,n){br(w(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Qt(e,t,n,r){const i=r.includes(".")?Kr(n,r):()=>n[r];if(E(e)){const n=t[e];k(n)&&Hr(i,n)}else if(k(e))Hr(i,e.bind(n));else if(C(e))if(w(e))e.forEach((e=>Qt(e,t,n,r)));else{const r=k(e.handler)?e.handler.bind(n):t[e.handler];k(r)&&Hr(i,r,e)}}function en(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>tn(c,e,o,!0))),tn(c,t,o)):c=t,s.set(t,c),c}function tn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&tn(e,s,n,!0),i&&i.forEach((t=>tn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=nn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const nn={data:rn,props:an,emits:an,methods:an,computed:an,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,destroyed:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:an,directives:an,watch:function(e,t){if(!e)return t;if(!t)return e;const n=m(Object.create(null),e);for(const r in t)n[r]=on(e[r],t[r]);return n},provide:rn,inject:function(e,t){return an(sn(e),sn(t))}};function rn(e,t){return t?e?function(){return m(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function sn(e){if(w(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function on(e,t){return e?[...new Set([].concat(e,t))]:t}function an(e,t){return e?m(m(Object.create(null),e),t):t}function cn(e,t,n,r=!1){const i={},s={};B(s,Kn,1),e.propsDefaults=Object.create(null),ln(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:rt(i,!1,Se,qe,Ye):e.type.props?e.props=i:e.props=s,e.attrs=s}function ln(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(x(c))continue;const l=t[c];let u;i&&b(i,u=D(c))?s&&s.includes(u)?(o||(o={}))[u]=l:n[u]=l:gt(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,a=!0)}if(s){const t=at(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=un(i,t,a,r[a],e,!b(r,a))}}return a}function un(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=b(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&k(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(hr(i),r=s[n]=e.call(null,t),dr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==F(n)||(r=!0))}return r}function hn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!k(e)){const r=e=>{c=!0;const[n,r]=hn(e,t,!0);m(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,h),h;if(w(s))for(let h=0;h<s.length;h++){const e=D(s[h]);dn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=D(u);if(dn(e)){const t=s[u],n=o[e]=w(t)||k(t)?{type:t}:t;if(n){const t=vn(Boolean,n.type),r=vn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||b(n,"default"))&&a.push(e)}}}const l=[o,a];return r.set(e,l),l}function dn(e){return"$"!==e[0]}function pn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function fn(e,t){return pn(e)===pn(t)}function vn(e,t){return w(t)?t.findIndex((t=>fn(t,e))):k(t)&&fn(t,e)?0:-1}const gn=e=>"_"===e[0]||"$stable"===e,mn=e=>w(e)?e.map(er):[er(e)],yn=(e,t,n)=>{const r=function(e,t=mt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zn(-1);const i=_t(t),s=e(...n);return _t(i),r._d&&zn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}(((...e)=>mn(t(...e))),n);return r._c=!1,r},_n=(e,t,n)=>{const r=e._ctx;for(const i in e){if(gn(i))continue;const n=e[i];if(k(n))t[i]=yn(0,n,r);else if(null!=n){const e=mn(n);t[i]=()=>e}}},bn=(e,t)=>{const n=mn(t);e.slots.default=()=>n};function wn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ce(),br(c,n,8,[e.el,a,e,t]),le())}}function In(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tn=0;function kn(e,t){return function(n,r=null){null==r||C(r)||(r=null);const i=In(),s=new Set;let o=!1;const a=i.app={_uid:Tn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Jr,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&k(e.install)?(s.add(e),e.install(a,...t)):k(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=Yn(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const En=function(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):Fr(e,Ar,Rr,Pr)};function Sn(e){return function(e,t){const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:c,setElementText:l,parentNode:p,nextSibling:f,setScopeId:v=d,cloneNode:g,insertStaticContent:y}=e,_=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gn(e,t)&&(r=te(e),X(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Ln:w(e,t,n,r);break;case Mn:I(e,t,n,r);break;case Dn:null==e&&T(t,n,r,o);break;case xn:M(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?U(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,re)}null!=u&&i&&Cn(u,e&&e.ref,s,t||e,!t)},w=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},I=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},T=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r)},k=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=f(e),n(e,r,i),e=s;n(t,r,i)},E=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),r(e),e=n;r(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):P(e,t,i,s,o,a,c)},C=(e,t,r,o,a,c,u,h)=>{let d,p;const{type:f,props:v,shapeFlag:m,transition:y,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==g&&-1===_)d=e.el=g(e.el);else{if(d=e.el=s(e.type,c,v&&v.is,v),8&m?l(d,e.children):16&m&&A(e.children,d,null,o,a,c&&"foreignObject"!==f,u,h),b&&wn(e,null,o,"created"),v){for(const t in v)"value"===t||x(t)||i(d,t,null,v[t],c,e.children,o,a,ee);"value"in v&&i(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&On(p,o,e)}R(d,e,e.scopeId,u,o)}b&&wn(e,null,o,"beforeMount");const w=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(d),n(d,t,r),((p=v&&v.onVnodeMounted)||w||b)&&En((()=>{p&&On(p,o,e),w&&y.enter(d),b&&wn(e,null,o,"mounted")}),a)},R=(e,t,n,r,i)=>{if(n&&v(e,n),r)for(let s=0;s<r.length;s++)v(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?tr(e[l]):er(e[l]);_(null,c,t,n,r,i,s,o,a)}},P=(e,t,n,r,s,o,a)=>{const c=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const f=e.props||u,v=t.props||u;let g;(g=v.onVnodeBeforeUpdate)&&On(g,n,t,e),p&&wn(t,e,n,"beforeUpdate");const m=s&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,c,n,r,m,o):a||$(e,t,c,null,n,r,m,o,!1),h>0){if(16&h)L(c,t,f,v,n,r,s);else if(2&h&&f.class!==v.class&&i(c,"class",null,v.class,s),4&h&&i(c,"style",f.style,v.style,s),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=f[a],u=v[a];u===l&&"value"!==a||i(c,a,l,u,s,e.children,n,r,ee)}}1&h&&e.children!==t.children&&l(c,t.children)}else a||null!=d||L(c,t,f,v,n,r,s);((g=v.onVnodeUpdated)||p)&&En((()=>{g&&On(g,n,t,e),p&&wn(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===xn||!Gn(c,l)||70&c.shapeFlag)?p(c.el):n;_(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,a)=>{if(n!==r){for(const c in r){if(x(c))continue;const l=r[c],u=n[c];l!==u&&"value"!==c&&i(e,c,u,l,a,t.children,s,o,ee)}if(n!==u)for(const c in n)x(c)||c in r||i(e,c,n[c],null,a,t.children,s,o,ee);"value"in r&&i(e,"value",n.value,r.value)}},M=(e,t,r,i,s,a,c,l,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(n(h,r,i),n(d,r,i),A(t.children,r,d,s,a,c,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(N(e.dynamicChildren,f,r,s,a,c,l),(null!=t.key||s&&t===s.subTree)&&Rn(e,t,!0)):$(e,t,r,d,s,a,c,l,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):V(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||ar,s={uid:cr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new K(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hn(r,i),emitsOptions:vt(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=ft.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(xt(e)&&(a.ctx.renderer=re),function(e,t=!1){fr=t;const{props:n,children:r}=e.vnode,i=pr(e);cn(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=at(t),B(t,"_",n)):_n(t,e.slots={})}else e.slots={},t&&bn(e,t);B(e.slots,Kn,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ct(new Proxy(e.ctx,or));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ue(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;hr(e),ce();const i=_r(r,e,0,[e.props,n]);if(le(),dr(),O(i)){if(i.then(dr,dr),t)return i.then((t=>{vr(e,t)})).catch((t=>{wr(t,e,0)}));e.asyncDep=i}else vr(e,i)}else gr(e)}(e,t):void 0;fr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,z),!e.el){const e=a.subTree=Yn(Mn);I(null,e,t,n)}}else z(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Tt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Tt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!gt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void H(r,t,n);r.next=t,function(e){const t=kr.indexOf(e);t>Er&&kr.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},z=(e,t,n,r,i,s,o)=>{const a=new ie((()=>{if(e.isMounted){let t,{next:n,bu:r,u:c,parent:l,vnode:u}=e,h=n;a.allowRecurse=!1,n?(n.el=u.el,H(e,n,o)):n=u,r&&W(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&On(t,l,n,u),a.allowRecurse=!0;const d=bt(e),f=e.subTree;e.subTree=d,_(f,d,p(f.el),te(f),e,i,s),n.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),c&&En(c,i),(t=n.props&&n.props.onVnodeUpdated)&&En((()=>On(t,l,n,u)),i)}else{let o;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,p=Nt(t);if(a.allowRecurse=!1,u&&W(u),!p&&(o=l&&l.onVnodeBeforeMount)&&On(o,d,t),a.allowRecurse=!0,c&&oe){const n=()=>{e.subTree=bt(e),oe(c,e.subTree,e,i,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=bt(e);_(null,o,n,r,e,i,s),t.el=o.el}if(h&&En(h,i),!p&&(o=l&&l.onVnodeMounted)){const e=t;En((()=>On(o,d,e)),i)}256&t.shapeFlag&&e.a&&En(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>Dr(e.update)),e.scope),c=e.update=a.run.bind(a);c.id=e.uid,a.allowRecurse=c.allowRecurse=!0,c()},H=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=at(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;ln(e,t,i,s)&&(l=!0);for(const s in a)t&&(b(t,s)||(r=F(s))!==s&&b(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=un(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&b(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(c)if(b(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=D(o);i[t]=un(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&pe(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(m(i,t),n||1!==e||delete i._):(s=!t.$stable,_n(t,i)),o=t}else t&&(bn(e,t),o={default:1});if(s)for(const a in i)gn(a)||a in o||delete i[a]})(e,t.children,n),ce(),jr(void 0,e.update),le()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void q(u,d,n,r,i,s,o,a,c);if(256&p)return void G(u,d,n,r,i,s,o,a,c)}8&f?(16&h&&ee(u,i,s),d!==u&&l(n,d)):16&h?16&f?q(u,d,n,r,i,s,o,a,c):ee(u,i,s,!0):(8&h&&l(n,""),16&f&&A(d,n,r,i,s,o,a,c))},G=(e,t,n,r,i,s,o,a,c)=>{t=t||h;const l=(e=e||h).length,u=t.length,d=Math.min(l,u);let p;for(p=0;p<d;p++){const r=t[p]=c?tr(t[p]):er(t[p]);_(e[p],r,n,null,i,s,o,a,c)}l>u?ee(e,i,s,!0,!1,d):A(t,n,r,i,s,o,a,c,d)},q=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let d=e.length-1,p=u-1;for(;l<=d&&l<=p;){const r=e[l],u=t[l]=c?tr(t[l]):er(t[l]);if(!Gn(r,u))break;_(r,u,n,null,i,s,o,a,c),l++}for(;l<=d&&l<=p;){const r=e[d],l=t[p]=c?tr(t[p]):er(t[p]);if(!Gn(r,l))break;_(r,l,n,null,i,s,o,a,c),d--,p--}if(l>d){if(l<=p){const e=p+1,h=e<u?t[e].el:r;for(;l<=p;)_(null,t[l]=c?tr(t[l]):er(t[l]),n,h,i,s,o,a,c),l++}}else if(l>p)for(;l<=d;)X(e[l],i,s,!0),l++;else{const f=l,v=l,g=new Map;for(l=v;l<=p;l++){const e=t[l]=c?tr(t[l]):er(t[l]);null!=e.key&&g.set(e.key,l)}let m,y=0;const b=p-v+1;let w=!1,I=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=f;l<=d;l++){const r=e[l];if(y>=b){X(r,i,s,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(m=v;m<=p;m++)if(0===T[m-v]&&Gn(r,t[m])){u=m;break}void 0===u?X(r,i,s,!0):(T[u-v]=l+1,u>=I?I=u:w=!0,_(r,t[u],n,null,i,s,o,a,c),y++)}const k=w?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(T):h;for(m=k.length-1,l=b-1;l>=0;l--){const e=v+l,h=t[e],d=e+1<u?t[e+1].el:r;0===T[l]?_(null,h,n,d,i,s,o,a,c):w&&(m<0||l!==k[m]?J(h,n,d,2):m--)}}},J=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void J(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,re);if(a===xn){n(o,t,r);for(let e=0;e<l.length;e++)J(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===Dn)return void k(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),En((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},X=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Cn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Nt(e);let v;if(f&&(v=o&&o.onVnodeBeforeUnmount)&&On(v,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&wn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,re,r):l&&(s!==xn||h>0&&64&h)?ee(l,t,n,!1,!0):(s===xn&&384&h||!i&&16&u)&&ee(c,t,n),r&&Y(e)}(f&&(v=o&&o.onVnodeUnmounted)||p)&&En((()=>{v&&On(v,t,e),p&&wn(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===xn)return void Z(n,i);if(t===Dn)return void E(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},Z=(e,t)=>{let n;for(;e!==t;)n=f(e),r(e),e=n;r(t)},Q=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&W(r),i.stop(),s&&(s.active=!1,X(o,e,t,n)),a&&En(a,t),En((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)X(e[o],t,n,r,i)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&X(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),Vr(),t._vnode=e},re={p:_,um:X,m:J,r:Y,mt:j,mc:A,pc:$,pbc:N,n:te,o:e};let se,oe;t&&([se,oe]=t(re));return{render:ne,hydrate:se,createApp:kn(ne,se)}}(e)}function Cn(e,t,n,r,i=!1){if(w(e))return void e.forEach(((e,s)=>Cn(e,t&&(w(t)?t[s]:t),n,r,i)));if(Nt(r)&&!i)return;const s=4&r.shapeFlag?mr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=l&&l!==c&&(E(l)?(h[l]=null,b(d,l)&&(d[l]=null)):lt(l)&&(l.value=null)),E(c)){const e=()=>{h[c]=o,b(d,c)&&(d[c]=o)};o?(e.id=-1,En(e,n)):e()}else if(lt(c)){const e=()=>{c.value=o};o?(e.id=-1,En(e,n)):e()}else k(c)&&_r(c,a,12,[o,h])}function On(e,t,n,r=null){br(e,t,7,[n,r])}function Rn(e,t,n=!1){const r=e.children,i=t.children;if(w(r)&&w(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=tr(i[s]),t.el=e.el),n||Rn(e,t))}}function An(e,t){return function(e,t,n=!0,r=!1){const i=mt||lr;if(i){const n=i.type;if("components"===e){const e=yr(n);if(e&&(e===t||e===D(t)||e===j(D(t))))return n}const s=Nn(i[e]||n[e],t)||Nn(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Pn=Symbol();function Nn(e,t){return e&&(e[t]||e[D(t)]||e[j(D(t))])}const xn=Symbol(void 0),Ln=Symbol(void 0),Mn=Symbol(void 0),Dn=Symbol(void 0),Un=[];let Fn=null;function jn(e=!1){Un.push(Fn=e?null:[])}let Vn=1;function zn(e){Vn+=e}function Wn(e){return e.dynamicChildren=Vn>0?Fn||h:null,Un.pop(),Fn=Un[Un.length-1]||null,Vn>0&&Fn&&Fn.push(e),e}function Bn(e,t,n,r,i,s){return Wn(Xn(e,t,n,r,i,s,!0))}function Hn(e,t,n,r,i){return Wn(Yn(e,t,n,r,i,!0))}function $n(e){return!!e&&!0===e.__v_isVNode}function Gn(e,t){return e.type===t.type&&e.key===t.key}const Kn="__vInternal",qn=({key:e})=>null!=e?e:null,Jn=({ref:e})=>null!=e?E(e)||lt(e)||k(e)?{i:mt,r:e}:e:null;function Xn(e,t=null,n=null,r=0,i=null,s=(e===xn?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qn(t),ref:t&&Jn(t),scopeId:yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(nr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=E(n)?8:16),Vn>0&&!o&&Fn&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&Fn.push(c),c}const Yn=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Pn||(e=Mn);if($n(e)){const r=Zn(e,t,!0);return n&&nr(r,n),r}c=e,k(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){t=function(e){return e?ot(e)||Kn in e?m({},e):e:null}(t);let{class:e,style:n}=t;e&&!E(e)&&(t.class=a(e)),C(n)&&(ot(n)&&!w(n)&&(n=m({},n)),t.style=r(n))}const l=E(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:C(e)?4:k(e)?2:0;return Xn(e,t,n,i,s,l,o,!0)};function Zn(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(v(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&qn(l),ref:t&&t.ref?n&&s?w(s)?s.concat(Jn(t)):[s,Jn(t)]:Jn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zn(e.ssContent),ssFallback:e.ssFallback&&Zn(e.ssFallback),el:e.el,anchor:e.anchor}}function Qn(e=" ",t=0){return Yn(Ln,null,e,t)}function er(e){return null==e||"boolean"==typeof e?Yn(Mn):w(e)?Yn(xn,null,e.slice()):"object"==typeof e?tr(e):Yn(Ln,null,String(e))}function tr(e){return null===e.el||e.memo?e:Zn(e)}function nr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(w(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),nr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kn in t?3===r&&mt&&(1===mt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=mt}}else k(t)?(t={default:t,_ctx:mt},n=32):(t=String(t),64&r?(n=16,t=[Qn(t)]):n=8);e.children=t,e.shapeFlag|=n}function rr(e,t,n,r){let i;const s=n&&n[r];if(w(e)||E(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(C(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const ir=e=>e?pr(e)?mr(e)||e.proxy:ir(e.parent):null,sr=m(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ir(e.parent),$root:e=>ir(e.root),$emit:e=>e.emit,$options:e=>en(e),$forceUpdate:e=>()=>Dr(e.update),$nextTick:e=>Mr.bind(e.proxy),$watch:e=>Gr.bind(e)}),or={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&b(r,t))return o[t]=0,r[t];if(i!==u&&b(i,t))return o[t]=1,i[t];if((l=e.propsOptions[0])&&b(l,t))return o[t]=2,s[t];if(n!==u&&b(n,t))return o[t]=3,n[t];Xt&&(o[t]=4)}}const h=sr[t];let d,p;return h?("$attrs"===t&&ue(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&b(n,t)?(o[t]=3,n[t]):(p=c.config.globalProperties,b(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&b(i,t))i[t]=n;else if(r!==u&&b(r,t))r[t]=n;else if(b(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&b(e,o)||t!==u&&b(t,o)||(a=s[0])&&b(a,o)||b(r,o)||b(sr,o)||b(i.config.globalProperties,o)}},ar=In();let cr=0;let lr=null;const ur=()=>lr||mt,hr=e=>{lr=e,e.scope.on()},dr=()=>{lr&&lr.scope.off(),lr=null};function pr(e){return 4&e.vnode.shapeFlag}let fr=!1;function vr(e,t,n){k(t)?e.render=t:C(t)&&(e.setupState=ht(t)),gr(e)}function gr(e,t,n){const r=e.type;e.render||(e.render=r.render||d),hr(e),ce(),Yt(e),le(),dr()}function mr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ht(ct(e.exposed)),{get:(t,n)=>n in t?t[n]:n in sr?sr[n](e):void 0}))}function yr(e){return k(e)&&e.displayName||e.name}function _r(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){wr(s,t,n)}return i}function br(e,t,n,r){if(k(e)){const i=_r(e,t,n,r);return i&&O(i)&&i.catch((e=>{wr(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(br(e[s],t,n,r));return i}function wr(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void _r(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Ir=!1,Tr=!1;const kr=[];let Er=0;const Sr=[];let Cr=null,Or=0;const Rr=[];let Ar=null,Pr=0;const Nr=Promise.resolve();let xr=null,Lr=null;function Mr(e){const t=xr||Nr;return e?t.then(this?e.bind(this):e):t}function Dr(e){kr.length&&kr.includes(e,Ir&&e.allowRecurse?Er+1:Er)||e===Lr||(null==e.id?kr.push(e):kr.splice(function(e){let t=Er+1,n=kr.length;for(;t<n;){const r=t+n>>>1;zr(kr[r])<e?t=r+1:n=r}return t}(e.id),0,e),Ur())}function Ur(){Ir||Tr||(Tr=!0,xr=Nr.then(Wr))}function Fr(e,t,n,r){w(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Ur()}function jr(e,t=null){if(Sr.length){for(Lr=t,Cr=[...new Set(Sr)],Sr.length=0,Or=0;Or<Cr.length;Or++)Cr[Or]();Cr=null,Or=0,Lr=null,jr(e,t)}}function Vr(e){if(Rr.length){const e=[...new Set(Rr)];if(Rr.length=0,Ar)return void Ar.push(...e);for(Ar=e,Ar.sort(((e,t)=>zr(e)-zr(t))),Pr=0;Pr<Ar.length;Pr++)Ar[Pr]();Ar=null,Pr=0}}const zr=e=>null==e.id?1/0:e.id;function Wr(e){Tr=!1,Ir=!0,jr(e),kr.sort(((e,t)=>zr(e)-zr(t)));try{for(Er=0;Er<kr.length;Er++){const e=kr[Er];e&&!1!==e.active&&_r(e,null,14)}}finally{Er=0,kr.length=0,Vr(),Ir=!1,xr=null,(kr.length||Sr.length||Rr.length)&&Wr(e)}}const Br={};function Hr(e,t,n){return $r(e,t,n)}function $r(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u){const a=lr;let c,l,h=!1,p=!1;if(lt(e)?(c=()=>e.value,h=!!e._shallow):it(e)?(c=()=>e,r=!0):w(e)?(p=!0,h=e.some(it),c=()=>e.map((e=>lt(e)?e.value:it(e)?qr(e):k(e)?_r(e,a,2):void 0))):c=k(e)?t?()=>_r(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),br(e,a,3,[f])}:d,t&&r){const e=c;c=()=>qr(e())}let f=e=>{l=_.onStop=()=>{_r(e,a,4)}},v=p?[]:Br;const g=()=>{if(_.active)if(t){const e=_.run();(r||h||(p?e.some(((e,t)=>z(e,v[t]))):z(e,v)))&&(l&&l(),br(t,a,3,[e,v===Br?void 0:v,f]),v=e)}else _.run()};let m;g.allowRecurse=!!t,m="sync"===i?g:"post"===i?()=>En(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){Fr(e,Cr,Sr,Or)}(g):g()};const _=new ie(c,m);return t?n?g():v=_.run():"post"===i?En(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&y(a.scope.effects,_)}}function Gr(e,t,n){const r=this.proxy,i=E(e)?e.includes(".")?Kr(r,e):()=>r[e]:e.bind(r,r);let s;k(t)?s=t:(s=t.handler,n=t);const o=lr;hr(this);const a=$r(i,s.bind(r),n);return o?hr(o):dr(),a}function Kr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function qr(e,t=new Set){if(!C(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),lt(e))qr(e.value,t);else if(w(e))for(let n=0;n<e.length;n++)qr(e[n],t);else if(T(e)||I(e))e.forEach((e=>{qr(e,t)}));else if(P(e))for(const n in e)qr(e[n],t);return e}const Jr="3.2.6",Xr="undefined"!=typeof document?document:null,Yr=new Map,Zr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Xr.createElementNS("http://www.w3.org/2000/svg",e):Xr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Xr.createTextNode(e),createComment:e=>Xr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=Yr.get(e);if(!s){const t=Xr.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}Yr.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const Qr=/\s*!important$/;function ei(e,t,n){if(w(n))n.forEach((n=>ei(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=ni[t];if(n)return n;let r=D(t);if("filter"!==r&&r in e)return ni[t]=r;r=j(r);for(let i=0;i<ti.length;i++){const n=ti[i]+r;if(n in e)return ni[t]=n}return t}(e,t);Qr.test(n)?e.setProperty(F(r),n.replace(Qr,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],ni={};const ri="http://www.w3.org/1999/xlink";let ii=Date.now,si=!1;if("undefined"!=typeof window){ii()>document.createEvent("Event").timeStamp&&(ii=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);si=!!(e&&Number(e[1])<=53)}let oi=0;const ai=Promise.resolve(),ci=()=>{oi=0};function li(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ui.test(e)){let n;for(t={};n=e.match(ui);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[F(e.slice(2)),t]}(t);if(r){!function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||ii();(si||r>=n.attached-1)&&br(function(e,t){if(w(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>oi||(ai.then(ci),oi=ii()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;const hi=/^on[a-z]/;Boolean;const di=m({patchProp:(e,r,i,s,o=!1,a,c,l,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style;if(n)if(E(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)ei(r,e,n[e]);if(t&&!E(t))for(const e in t)null==n[e]&&ei(r,e,"")}else e.removeAttribute("style")}(e,i,s):v(r)?g(r)||li(e,r,0,s,c):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&hi.test(t)&&k(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(hi.test(t)&&E(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName){e._value=r;const n=null==r?"":r;return e.value!==n&&(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=r}catch(l){}}(e,r,s,a,c,l,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(ri,r.slice(6,r.length)):e.setAttributeNS(ri,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},Zr);let pi;const fi=(...e)=>{const t=(pi||(pi=Sn(di))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(E(e)){return document.querySelector(e)}return e}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(e);if(!r)return;const i=t._component;k(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};var vi=function(e,t){return(vi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function gi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function mi(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function yi(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function _i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function bi(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function wi(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|l>>6,p=63&l;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var l=s<<2|o>>4;if(r.push(l),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ti=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ei=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Si.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}vi(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Si=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Ci(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Ei(i,a,r);return c},e}();function Ci(e,t){return e.replace(Oi,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Oi=/\{\$([^}]+)}/g;function Ri(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],c=t[o];if(Ai(a)&&Ai(c)){if(!Ri(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=r;l<u.length;l++){o=u[l];if(!n.includes(o))return!1}return!0}function Ai(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}var Ni=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=xi),void 0===r.error&&(r.error=xi),void 0===r.complete&&(r.complete=xi);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function xi(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e){return e&&e._delegate?e._delegate:e}var Mi=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Di=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ti;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=_i(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=bi(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return mi(this,void 0,void 0,(function(){var e;return yi(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(wi(wi([],bi(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),bi(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=_i(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=bi(c.value,2),u=l[0],h=l[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=_i(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(c){}}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui,Fi,ji,Vi=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Di(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function zi(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ji=Fi||(Fi={}))[ji.DEBUG=0]="DEBUG",ji[ji.VERBOSE=1]="VERBOSE",ji[ji.INFO=2]="INFO",ji[ji.WARN=3]="WARN",ji[ji.ERROR=4]="ERROR",ji[ji.SILENT=5]="SILENT";var Wi={debug:Fi.DEBUG,verbose:Fi.VERBOSE,info:Fi.INFO,warn:Fi.WARN,error:Fi.ERROR,silent:Fi.SILENT},Bi=Fi.INFO,Hi=((Ui={})[Fi.DEBUG]="log",Ui[Fi.VERBOSE]="log",Ui[Fi.INFO]="info",Ui[Fi.WARN]="warn",Ui[Fi.ERROR]="error",Ui),$i=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=Hi[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,zi(["["+i+"]  "+e.name+":"],n))}},Gi=function(){function e(e){this.name=e,this._logLevel=Bi,this._logHandler=$i,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Fi))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Wi[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zi([this,Fi.DEBUG],e)),this._logHandler.apply(this,zi([this,Fi.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zi([this,Fi.VERBOSE],e)),this._logHandler.apply(this,zi([this,Fi.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zi([this,Fi.INFO],e)),this._logHandler.apply(this,zi([this,Fi.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zi([this,Fi.WARN],e)),this._logHandler.apply(this,zi([this,Fi.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zi([this,Fi.ERROR],e)),this._logHandler.apply(this,zi([this,Fi.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const qi=new Gi("@firebase/app"),Ji={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Xi=new Map,Yi=new Map;function Zi(e,t){try{e.container.addComponent(t)}catch(n){qi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qi(e){const t=e.name;if(Yi.has(t))return qi.debug(`There were multiple attempts to register component ${t}.`),!1;Yi.set(t,e);for(const n of Xi.values())Zi(n,e);return!0}function es(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Si("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Mi("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ts.create("bad-app-name",{appName:String(r)});const i=Xi.get(r);if(i){if(Ri(e,i.options)&&Ri(n,i.config))return i;throw ts.create("duplicate-app",{appName:r})}const s=new Vi(r);for(const a of Yi.values())s.addComponent(a);const o=new ns(e,n,s);return Xi.set(r,o),o}function is(e,t,n){var r;let i=null!==(r=Ji[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void qi.warn(e.join(" "))}Qi(new Mi(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss;Qi(new Mi("platform-logger",(e=>new Ki(e)),"PRIVATE")),is("@firebase/app","0.7.0",ss),is("fire-js","");const os=new Si("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),as=new Gi("@firebase/auth");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e,...t){as.logLevel<=Fi.ERROR&&as.error(`Auth (9.0.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e,...t){throw hs(e,...t)}function us(e,...t){return hs(e,...t)}function hs(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return os.create(e,...t)}function ds(e,t,...n){if(!e)throw hs(t,...n)}function ps(e){const t="INTERNAL ASSERTION FAILED: "+e;throw cs(t),new Error(t)}function fs(e,t){e||ps(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map;function gs(e){fs(e instanceof Function,"Expected a class definition");let t=vs.get(e);return t?(fs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vs.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ms(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ys(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ys()&&"https:"!==ys()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,fs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ki())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return _s()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e,t){fs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},ks=new bs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ss(e,t,n,r,i={}){return Cs(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Pi(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Is.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Is.fetch()(Rs(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Cs(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ts),t);try{const t=new As(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ps(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Ps(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Ps(e,"email-already-in-use",s);ls(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Ei)throw i;ls(e,"network-request-failed")}}async function Os(e,t,n,r,i={}){const s=await Ss(e,t,n,r,i);return"mfaPendingCredential"in s&&ls(e,"multi-factor-auth-required",{serverResponse:s}),s}function Rs(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ws(e.config,i):`${e.config.apiScheme}://${i}`}class As{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(us(this.auth,"timeout"))),ks.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ps(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=us(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ns(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function xs(e){return 1e3*Number(e)}function Ls(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ii.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(cs("Failed to decode base64 JWT payload"),null)}catch(i){return cs("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ms(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ei&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Ds{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ms(e,async function(e,t){return Ss(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ds(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=gi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Us(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ds(e.idToken,"internal-error"),ds(void 0!==e.idToken,"internal-error"),ds(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ls(e);return ds(t,"internal-error"),ds(void 0!==t.exp,"internal-error"),ds(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ds(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Cs(e,{},(()=>{const n=Pi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Rs(e,r,"/v1/token",`key=${i}`);return Is.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new js;return n&&(ds("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(ds("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(ds("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return ps("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e,t){ds("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zs{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=gi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ds(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Us(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return ds(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Li(e),r=await n.getIdToken(t),i=Ls(r);ds(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(xs(i.auth_time)),issuedAtTime:Ns(xs(i.iat)),expirationTime:Ns(xs(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Li(e);await Fs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ds(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ds(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ms(this,async function(e,t){return Ss(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,m=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=t;ds(y&&I,e,"internal-error");const T=js.fromJSON(this.name,I);ds("string"==typeof y,e,"internal-error"),Vs(u,e.name),Vs(h,e.name),ds("boolean"==typeof _,e,"internal-error"),ds("boolean"==typeof b,e,"internal-error"),Vs(d,e.name),Vs(p,e.name),Vs(f,e.name),Vs(v,e.name),Vs(g,e.name),Vs(m,e.name);const k=new zs({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:g,lastLoginAt:m});return w&&Array.isArray(w)&&(k.providerData=w.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new js;r.updateFromServerResponse(t);const i=new zs({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Fs(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ws.type="NONE";const Bs=Ws;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e,t,n){return`firebase:${e}:${t}:${n}`}class $s{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Hs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Hs("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new $s(gs(Bs),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||gs(Bs);const s=Hs(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=zs._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new $s(i,e,n)):new $s(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ks(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zs(t))return"Blackberry";if(Qs(t))return"Webos";if(qs(t))return"Safari";if((t.includes("chrome/")||Js(t))&&!t.includes("edge/"))return"Chrome";if(Ys(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ks(e=ki()){return/firefox\//i.test(e)}function qs(e=ki()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Js(e=ki()){return/crios\//i.test(e)}function Xs(e=ki()){return/iemobile/i.test(e)}function Ys(e=ki()){return/android/i.test(e)}function Zs(e=ki()){return/blackberry/i.test(e)}function Qs(e=ki()){return/webos/i.test(e)}function eo(e=ki()){return/iphone|ipad|ipod/i.test(e)}function to(){return((e=ki()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function no(e=ki()){return eo(e)||Ys(e)||Qs(e)||Zs(e)||/windows phone/i.test(e)||Xs(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(e,t=[]){let n;switch(e){case"Browser":n=Gs(ki());break;case"Worker":n=`${Gs(ki())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=os,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gs(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await $s.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ds(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Li(e):null;return t&&ds(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ds(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gs(e)||this._popupRedirectResolver;ds(t,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[gs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ds(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ds(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ro(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function so(e){return Li(e)}class oo{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ni((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return ds(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(e,t){return Os(e,"POST","/v1/accounts:signInWithIdp",Es(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ls("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=gi(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new lo(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return co(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,co(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pi(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends uo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends ho{constructor(){super("facebook.com")}static credential(e){return lo._fromParams({providerId:po.PROVIDER_ID,signInMethod:po.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return po.credentialFromTaggedObject(e)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return po.credential(e.oauthAccessToken)}catch(t){return null}}}po.FACEBOOK_SIGN_IN_METHOD="facebook.com",po.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lo._fromParams({providerId:fo.PROVIDER_ID,signInMethod:fo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fo.credentialFromTaggedObject(e)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return fo.credential(t,n)}catch(r){return null}}}fo.GOOGLE_SIGN_IN_METHOD="google.com",fo.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo extends ho{constructor(){super("github.com")}static credential(e){return lo._fromParams({providerId:vo.PROVIDER_ID,signInMethod:vo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vo.credentialFromTaggedObject(e)}static credentialFromError(e){return vo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vo.credential(e.oauthAccessToken)}catch(t){return null}}}vo.GITHUB_SIGN_IN_METHOD="github.com",vo.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go extends ho{constructor(){super("twitter.com")}static credential(e,t){return lo._fromParams({providerId:go.PROVIDER_ID,signInMethod:go.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return go.credentialFromTaggedObject(e)}static credentialFromError(e){return go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return go.credential(t,n)}catch(r){return null}}}go.TWITTER_SIGN_IN_METHOD="twitter.com",go.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await zs._fromIdTokenResponse(e,n,r),s=yo(n);return new mo({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=yo(n);return new mo({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function yo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(e){var t;const n=so(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new mo({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Os(e,"POST","/v1/accounts:signUp",Es(e,t))}(n,{returnSecureToken:!0}),i=await mo._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Ei{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,bo.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new bo(e,t,n,r)}}function wo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw bo._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Io{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ki();return qs(e)||eo(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=no(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);to()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}To.type="LOCAL";const ko=To;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Io{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Eo.type="SESSION";const So=Eo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Co(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Co.receivers=[];class Ro{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Oo("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Po(){return void 0!==Ao().WorkerGlobalScope&&"function"==typeof Ao().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const No="firebaseLocalStorageDb";class xo{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lo(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Mo(){const e=indexedDB.open(No,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(No);return new xo(e).toPromise()}(),t(await Mo()))}))}))}async function Do(e,t,n){const r=Lo(e,!0).put({fbase_key:t,value:n});return new xo(r).toPromise()}function Uo(e,t){const n=Lo(e,!0).delete(t);return new xo(n).toPromise()}class Fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Mo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Po()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Co._getInstance(Po()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ro(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mo();return await Do(e,"__sak","1"),await Uo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Do(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Lo(e,!1).get(t),r=await new xo(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Uo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lo(e,!1).getAll();return new xo(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fo.type="LOCAL";const jo=Fo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=us("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}new bs(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo extends ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wo(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){const r="signIn",i=await wo(e,r,t),s=await mo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new zo(e),e.bypassAuthState)}function Bo(e){const{auth:t,user:n}=e;return ds(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ms(e,wo(r,i,t,e),n);ds(s.idToken,r,"internal-error");const o=Ls(s.idToken);ds(o,r,"internal-error");const{sub:a}=o;return ds(e.uid===a,r,"user-mismatch"),mo._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&ls(r,"user-mismatch"),s}}(n,new zo(e),e.bypassAuthState)}async function Ho(e){const{auth:t,user:n}=e;return ds(n,t,"internal-error"),async function(e,t,n=!1){const r=await Ms(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mo._forOperation(e,"link",r)}(n,new zo(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wo;case"linkViaPopup":case"linkViaRedirect":return Ho;case"reauthViaPopup":case"reauthViaRedirect":return Bo;default:ls(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new bs(2e3,1e4);class Ko extends $o{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ko.currentPopupAction&&Ko.currentPopupAction.cancel(),Ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ds(e,this.auth,"internal-error"),e}async onExecution(){fs(1===this.filter.length,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(us(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(us(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(us(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Go.get())};e()}}Ko.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qo=new Map;class Jo extends $o{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Hs("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await Xo(e)._get(n);return await Xo(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}qo.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Xo(e){return gs(e._redirectPersistence)}async function Yo(e,t,n=!1){const r=so(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?gs(t):(ds(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Jo(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ea(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ea(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(us(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qo(e))}saveEventToCache(e){this.cachedEventUids.add(Qo(e)),this.lastProcessedEventTime=Date.now()}}function Qo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ea({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,na=/^https?/;async function ra(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ss(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(ia(r))return}catch(n){}ls(e,"unauthorized-domain")}function ia(e){const t=ms(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!na.test(n))return!1;if(ta.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new bs(3e4,6e4);function oa(){const e=Ao().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function aa(e){return new Promise(((t,n)=>{var r,i,s;function o(){oa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oa(),n(us(e,"network-request-failed"))},timeout:sa.get()})}if(null===(i=null===(r=Ao().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ao().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ao()[t]=()=>{gapi.load?o():n(us(e,"network-request-failed"))},Vo(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw ca=null,e}))}let ca=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const la=new bs(5e3,15e3),ua={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},ha=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function da(e){const t=e.config;ds(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ws(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=ha.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pi(r).slice(1)}`}async function pa(e){const t=await function(e){return ca=ca||aa(e),ca}(e),n=Ao().gapi;return ds(n,e,"internal-error"),t.open({where:document.body,url:da(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ua,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=us(e,"network-request-failed"),s=Ao().setTimeout((()=>{r(i)}),la.get());function o(){Ao().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class va{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ga(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fa),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ki().toLowerCase();n&&(a=Js(l)?"_blank":n),Ks(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ki()){var t;return eo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new va(null);const h=window.open(t||"",a,u);ds(h,e,"popup-blocked");try{h.focus()}catch(d){}return new va(h)}function ma(e,t,n,r,i,s){ds(e.config.authDomain,e,"auth-domain-config-required"),ds(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof uo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ho){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return ws(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Pi(a).slice(1)}`}const ya=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=So,this._completeRedirectFn=Yo}async _openPopup(e,t,n,r){var i;fs(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ga(e,ma(e,t,n,ms(),r),Oo())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ma(e,t,n,ms(),r),Ao().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(fs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await pa(e),n=new Zo(e);return t.register("authEvent",(t=>{ds(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ls(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ra(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return no()||qs()||eo()}};var _a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ds(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wa(e=function(e="[DEFAULT]"){const t=Xi.get(e);if(!t)throw ts.create("no-app",{appName:e});return t}()){const t=es(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=es(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ri(n.getOptions(),null!=t?t:{}))return e;ls(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ya,persistence:[jo,ko,So]})}_a="Browser",Qi(new Mi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{ds(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ds(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:_a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ro(_a)},s=new io(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Qi(new Mi("auth-internal",(e=>{const t=so(e.getProvider("auth").getImmediate());return new ba(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),is("@firebase/auth","0.17.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_a));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
is("firebase","9.0.0","app");export{xn as F,Xn as a,rr as b,Bn as c,Hn as d,Yn as e,fi as f,wa as g,rs as i,a as n,jn as o,An as r,_o as s,c as t};
