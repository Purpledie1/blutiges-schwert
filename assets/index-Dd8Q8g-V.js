var _E=Object.defineProperty;var vE=(o,e,i)=>e in o?_E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var na=(o,e,i)=>vE(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function wx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fh={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function xE(){if(xv)return ol;xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:f}}return ol.Fragment=e,ol.jsx=i,ol.jsxs=i,ol}var Sv;function SE(){return Sv||(Sv=1,fh.exports=xE()),fh.exports}var R=SE(),dh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function yE(){if(yv)return oe;yv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),E=Symbol.iterator;function T(H){return H===null||typeof H!="object"?null:(H=E&&H[E]||H["@@iterator"],typeof H=="function"?H:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function C(H,_t,wt){this.props=H,this.context=_t,this.refs=x,this.updater=wt||D}C.prototype.isReactComponent={},C.prototype.setState=function(H,_t){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,_t,"setState")},C.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function F(){}F.prototype=C.prototype;function N(H,_t,wt){this.props=H,this.context=_t,this.refs=x,this.updater=wt||D}var O=N.prototype=new F;O.constructor=N,y(O,C.prototype),O.isPureReactComponent=!0;var L=Array.isArray;function I(){}var M={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function z(H,_t,wt){var Q=wt.ref;return{$$typeof:o,type:H,key:_t,ref:Q!==void 0?Q:null,props:wt}}function k(H,_t){return z(H.type,_t,H.props)}function q(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function at(H){var _t={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(wt){return _t[wt]})}var j=/\/+/g;function tt(H,_t){return typeof H=="object"&&H!==null&&H.key!=null?at(""+H.key):_t.toString(36)}function W(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(I,I):(H.status="pending",H.then(function(_t){H.status==="pending"&&(H.status="fulfilled",H.value=_t)},function(_t){H.status==="pending"&&(H.status="rejected",H.reason=_t)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function Z(H,_t,wt,Q,pt){var At=typeof H;(At==="undefined"||At==="boolean")&&(H=null);var It=!1;if(H===null)It=!0;else switch(At){case"bigint":case"string":case"number":It=!0;break;case"object":switch(H.$$typeof){case o:case e:It=!0;break;case S:return It=H._init,Z(It(H._payload),_t,wt,Q,pt)}}if(It)return pt=pt(H),It=Q===""?"."+tt(H,0):Q,L(pt)?(wt="",It!=null&&(wt=It.replace(j,"$&/")+"/"),Z(pt,_t,wt,"",function(Pe){return Pe})):pt!=null&&(q(pt)&&(pt=k(pt,wt+(pt.key==null||H&&H.key===pt.key?"":(""+pt.key).replace(j,"$&/")+"/")+It)),_t.push(pt)),1;It=0;var vt=Q===""?".":Q+":";if(L(H))for(var Ct=0;Ct<H.length;Ct++)Q=H[Ct],At=vt+tt(Q,Ct),It+=Z(Q,_t,wt,At,pt);else if(Ct=T(H),typeof Ct=="function")for(H=Ct.call(H),Ct=0;!(Q=H.next()).done;)Q=Q.value,At=vt+tt(Q,Ct++),It+=Z(Q,_t,wt,At,pt);else if(At==="object"){if(typeof H.then=="function")return Z(W(H),_t,wt,Q,pt);throw _t=String(H),Error("Objects are not valid as a React child (found: "+(_t==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":_t)+"). If you meant to render a collection of children, use an array instead.")}return It}function ht(H,_t,wt){if(H==null)return H;var Q=[],pt=0;return Z(H,Q,"","",function(At){return _t.call(wt,At,pt++)}),Q}function ut(H){if(H._status===-1){var _t=H._result,wt=_t();wt.then(function(Q){(H._status===0||H._status===-1)&&(H._status=1,H._result=Q,wt.status===void 0&&(wt.status="fulfilled",wt.value=Q))},function(Q){(H._status===0||H._status===-1)&&(H._status=2,H._result=Q,wt.status===void 0&&(wt.status="rejected",wt.reason=Q))}),H._status===-1&&(H._status=0,H._result=wt)}if(H._status===1)return H._result.default;throw H._result}var mt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(_t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Et(H){var _t=M.T,wt={};wt.types=_t!==null?_t.types:null,M.T=wt;try{var Q=H(),pt=M.S;pt!==null&&pt(wt,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(I,mt)}catch(At){mt(At)}finally{_t!==null&&wt.types!==null&&(_t.types=wt.types),M.T=_t}}function Zt(H){var _t=M.T;if(_t!==null){var wt=_t.types;wt===null?_t.types=[H]:wt.indexOf(H)===-1&&wt.push(H)}else Et(Zt.bind(null,H))}var qt={map:ht,forEach:function(H,_t,wt){ht(H,function(){_t.apply(this,arguments)},wt)},count:function(H){var _t=0;return ht(H,function(){_t++}),_t},toArray:function(H){return ht(H,function(_t){return _t})||[]},only:function(H){if(!q(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return oe.Activity=v,oe.Children=qt,oe.Component=C,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=p,oe.ViewTransition=_,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,oe.__COMPILER_RUNTIME={__proto__:null,c:function(H){return M.H.useMemoCache(H)}},oe.addTransitionType=Zt,oe.cache=function(H){return function(){return H.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(H,_t,wt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var Q=y({},H.props),pt=H.key;if(_t!=null)for(At in _t.key!==void 0&&(pt=""+_t.key),_t)!U.call(_t,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&_t.ref===void 0||(Q[At]=_t[At]);var At=arguments.length-2;if(At===1)Q.children=wt;else if(1<At){for(var It=Array(At),vt=0;vt<At;vt++)It[vt]=arguments[vt+2];Q.children=It}return z(H.type,pt,Q)},oe.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},oe.createElement=function(H,_t,wt){var Q,pt={},At=null;if(_t!=null)for(Q in _t.key!==void 0&&(At=""+_t.key),_t)U.call(_t,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(pt[Q]=_t[Q]);var It=arguments.length-2;if(It===1)pt.children=wt;else if(1<It){for(var vt=Array(It),Ct=0;Ct<It;Ct++)vt[Ct]=arguments[Ct+2];pt.children=vt}if(H&&H.defaultProps)for(Q in It=H.defaultProps,It)pt[Q]===void 0&&(pt[Q]=It[Q]);return z(H,At,pt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(H){return{$$typeof:h,render:H}},oe.isValidElement=q,oe.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:ut}},oe.memo=function(H,_t){return{$$typeof:m,type:H,compare:_t===void 0?null:_t}},oe.startTransition=Et,oe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},oe.use=function(H){return M.H.use(H)},oe.useActionState=function(H,_t,wt){return M.H.useActionState(H,_t,wt)},oe.useCallback=function(H,_t){return M.H.useCallback(H,_t)},oe.useContext=function(H){return M.H.useContext(H)},oe.useDebugValue=function(){},oe.useDeferredValue=function(H,_t){return M.H.useDeferredValue(H,_t)},oe.useEffect=function(H,_t){return M.H.useEffect(H,_t)},oe.useEffectEvent=function(H){return M.H.useEffectEvent(H)},oe.useId=function(){return M.H.useId()},oe.useImperativeHandle=function(H,_t,wt){return M.H.useImperativeHandle(H,_t,wt)},oe.useInsertionEffect=function(H,_t){return M.H.useInsertionEffect(H,_t)},oe.useLayoutEffect=function(H,_t){return M.H.useLayoutEffect(H,_t)},oe.useMemo=function(H,_t){return M.H.useMemo(H,_t)},oe.useOptimistic=function(H,_t){return M.H.useOptimistic(H,_t)},oe.useReducer=function(H,_t,wt){return M.H.useReducer(H,_t,wt)},oe.useRef=function(H){return M.H.useRef(H)},oe.useState=function(H){return M.H.useState(H)},oe.useSyncExternalStore=function(H,_t,wt){return M.H.useSyncExternalStore(H,_t,wt)},oe.useTransition=function(){return M.H.useTransition()},oe.version="19.3.1",oe}var Mv;function kp(){return Mv||(Mv=1,dh.exports=yE()),dh.exports}var Re=kp();const Xp=wx(Re);var hh={exports:{}},ll={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function ME(){return Ev||(Ev=1,(function(o){function e(W,Z){var ht=W.length;W.push(Z);t:for(;0<ht;){var ut=ht-1>>>1,mt=W[ut];if(0<l(mt,Z))W[ut]=Z,W[ht]=mt,ht=ut;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var Z=W[0],ht=W.pop();if(ht!==Z){W[0]=ht;t:for(var ut=0,mt=W.length,Et=mt>>>1;ut<Et;){var Zt=2*(ut+1)-1,qt=W[Zt],H=Zt+1,_t=W[H];if(0>l(qt,ht))H<mt&&0>l(_t,qt)?(W[ut]=_t,W[H]=ht,ut=H):(W[ut]=qt,W[Zt]=ht,ut=Zt);else if(H<mt&&0>l(_t,ht))W[ut]=_t,W[H]=ht,ut=H;else break t}}return Z}function l(W,Z){var ht=W.sortIndex-Z.sortIndex;return ht!==0?ht:W.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,v=null,_=3,E=!1,T=!1,D=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(W){for(var Z=i(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=W)s(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=i(m)}}function O(W){if(D=!1,N(W),!T)if(i(p)!==null)T=!0,L||(L=!0,q());else{var Z=i(m);Z!==null&&tt(O,Z.startTime-W)}}var L=!1,I=-1,M=5,U=-1;function z(){return y?!0:!(o.unstable_now()-U<M)}function k(){if(y=!1,L){var W=o.unstable_now();U=W;var Z=!0;try{t:{T=!1,D&&(D=!1,C(I),I=-1),E=!0;var ht=_;try{e:{for(N(W),v=i(p);v!==null&&!(v.expirationTime>W&&z());){var ut=v.callback;if(typeof ut=="function"){v.callback=null,_=v.priorityLevel;var mt=ut(v.expirationTime<=W);if(W=o.unstable_now(),typeof mt=="function"){v.callback=mt,N(W),Z=!0;break e}v===i(p)&&s(p),N(W)}else s(p);v=i(p)}if(v!==null)Z=!0;else{var Et=i(m);Et!==null&&tt(O,Et.startTime-W),Z=!1}}break t}finally{v=null,_=ht,E=!1}Z=void 0}}finally{Z?q():L=!1}}}var q;if(typeof F=="function")q=function(){F(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,j=at.port2;at.port1.onmessage=k,q=function(){j.postMessage(null)}}else q=function(){x(k,0)};function tt(W,Z){I=x(function(){W(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(W){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var ht=_;_=Z;try{return W()}finally{_=ht}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(W,Z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ht=_;_=W;try{return Z()}finally{_=ht}},o.unstable_scheduleCallback=function(W,Z,ht){var ut=o.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?ut+ht:ut):ht=ut,W){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=ht+mt,W={id:S++,callback:Z,priorityLevel:W,startTime:ht,expirationTime:mt,sortIndex:-1},ht>ut?(W.sortIndex=ht,e(m,W),i(p)===null&&W===i(m)&&(D?(C(I),I=-1):D=!0,tt(O,ht-ut))):(W.sortIndex=mt,e(p,W),T||E||(T=!0,L||(L=!0,q()))),W},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(W){var Z=_;return function(){var ht=_;_=Z;try{return W.apply(this,arguments)}finally{_=ht}}}})(mh)),mh}var bv;function EE(){return bv||(bv=1,ph.exports=ME()),ph.exports}var gh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function bE(){if(Tv)return On;Tv=1;var o=kp();function e(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:S,containerInfo:v,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.browser=function(S){return{$$typeof:f,_reason:S}},On.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(S,v,null,_)},On.flushSync=function(S){var v=p.T,_=s.p;try{if(p.T=null,s.p=2,S)return S()}finally{p.T=v,s.p=_,s.d.f()}},On.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},On.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},On.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,E=m(_,v.crossOrigin),T=typeof v.integrity=="string"?v.integrity:void 0,D=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:D}):_==="script"&&s.d.X(S,{crossOrigin:E,integrity:T,fetchPriority:D,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},On.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=m(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},On.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=m(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},On.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=m(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},On.requestFormReset=function(S){s.d.r(S)},On.unstable_batchedUpdates=function(S,v){return S(v)},On.useFormState=function(S,v,_){return p.H.useFormState(S,v,_)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.1",On}var Av;function TE(){if(Av)return gh.exports;Av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gh.exports=bE(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function AE(){if(Rv)return ll;Rv=1;var o=EE(),e=kp(),i=TE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return p(c),t;if(u===r)return p(c),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=u;else{for(var g=!1,w=c.child;w;){if(w===a){g=!0,a=c,r=u;break}if(w===r){g=!0,r=c,a=u;break}w=w.sibling}if(!g){for(w=u.child;w;){if(w===a){g=!0,a=u,r=c;break}if(w===r){g=!0,r=u,a=c;break}w=w.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,c,u))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=_(t);return a===null||D(n,t,a.child,{foundSelf:!1}),n}function D(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,C=null;function F(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function N(t,n,a){return t===a?(C=t,!1):t===n?(C!==null&&(x=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var u=n;u;u=a(u))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var I=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),qt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),_t=Symbol.for("react.recoverable"),wt=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=wt&&t[wt]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Symbol.for("react.client.reference");function At(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case at:return"Profiler";case q:return"StrictMode";case Z:return"Suspense";case ht:return"SuspenseList";case Et:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case tt:return t.displayName||"Context";case j:return(t._context.displayName||"Context")+".Consumer";case W:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ut:return n=t.displayName||null,n!==null?n:At(t.type)||"Memo";case mt:n=t._payload,t=t._init;try{return At(t(n))}catch{}}return null}var It=Array.isArray,vt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe={pending:!1,data:null,method:null,action:null},ce=[],he=-1;function ge(t){return{current:t}}function te(t){0>he||(t.current=ce[he],ce[he]=null,he--)}function ne(t,n){he++,ce[he]=t.current,t.current=n}var Be=ge(null),nn=ge(null),Ee=ge(null),je=ge(null);function X(t,n){switch(ne(Ee,n),ne(nn,t),ne(Be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?w_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=w_(n),t=C_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Be),ne(Be,t)}function Je(){te(Be),te(nn),te(Ee)}function ye(t){var n=t.memoizedState;n!==null&&(Hr._currentValue=n.memoizedState,ne(je,t)),n=Be.current;var a=C_(n,t.type);n!==a&&(ne(nn,t),ne(Be,a))}function P(t){nn.current===t&&(te(Be),te(nn)),je.current===t&&(te(je),Hr._currentValue=Pe)}var b,et;function rt(t){if(b===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+b+t+et}var it=!1;function Tt(t,n){if(!t||it)return"";it=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(Ot){var K=Ot}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(Ot){K=Ot}yt=!1;try{var ct=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new t}finally{yt&&(ct!==void 0?Object.defineProperty(t.prototype,"props",ct):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){K=Ot}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(Ot){if(Ot&&K&&typeof Ot.stack=="string")return[Ot.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],w=u[1];if(g&&w){var B=g.split(`
`),$=w.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===$.length)for(r=B.length-1,c=$.length-1;1<=r&&0<=c&&B[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==$[c]){var ft=`
`+B[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=c);break}}}finally{it=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?rt(a):""}function Rt(t,n){switch(t.tag){case 26:case 27:case 5:return rt(t.type);case 16:return rt("Lazy");case 13:return t.child!==n&&n!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return rt("Activity");case 30:return rt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Rt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var St=Object.prototype.hasOwnProperty,Nt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,Pt=o.unstable_requestPaint,kt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,Y=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Vt=o.log,bt=o.unstable_setDisableYieldValue,Jt=null,Gt=null;function De(t){if(typeof Vt=="function"&&bt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:Fu,ni=Math.log,_i=Math.LN2;function Fu(t){return t>>>=0,t===0?32:31-(ni(t)/_i|0)|0}var nr=256,ys=262144,za=4194304;function ha(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ms(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var w=r&134217727;return w!==0?(r=w&~u,r!==0?c=ha(r):(g&=w,g!==0?c=ha(g):a||(a=w&~t,a!==0&&(c=ha(a))))):(w=r&~u,w!==0?c=ha(w):g!==0?c=ha(g):a||(a=r&~t,a!==0&&(c=ha(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ue(a),c=1<<r;n|=t[r],a&=~c}return n}function ho(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var t=za;return za<<=1,(za&62914560)===0&&(za=4194304),t}function ir(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ki(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rl(t,n,a,r,c,u){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-ue(a),yt=1<<ft;w[ft]=0,B[ft]=-1;var K=$[ft];if(K!==null)for($[ft]=null,ft=0;ft<K.length;ft++){var ct=K[ft];ct!==null&&(ct.lane&=-536870913)}a&=~yt}r!==0&&Es(t,r,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~n))}function Es(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ue(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function mo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ue(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function go(t,n){var a=n&-n;return a=(a&42)!==0?1:_o(a),(a&(t.suspendedLanes|n))!==0?0:a}function _o(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wl(){var t=Ct.p;return t!==0?t:(t=window.event,t===void 0?32:dv(t.type))}function Cl(t,n){var a=Ct.p;try{return Ct.p=t,n()}finally{Ct.p=a}}var vi=Math.random().toString(36).slice(2),A="__reactFiber$"+vi,G="__reactProps$"+vi,dt="__reactContainer$"+vi,ot="__reactEvents$"+vi,lt="__reactListeners$"+vi,zt="__reactHandles$"+vi,Xt="__reactResources$"+vi,Lt="__reactMarker$"+vi,jt="__reactLoad$"+vi;function Kt(t){delete t[A],delete t[G],delete t[lt],delete t[zt]}function se(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Y_(t);t!==null;){if(a=t[A])return a;t=Y_(t)}return n}t=a,a=t.parentNode}return null}function fe(t){if(t=t[A]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Wt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function be(t){var n=t[Xt];return n||(n=t[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ve(t){t[Lt]=!0}function Ze(t){t[jt]=void 0}var Ve=new Set,vn={};function Ft(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(vn[t]=n,t=0;t<n.length;t++)Ve.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ii={};function Xi(t){return St.call(ii,t)?!0:St.call(Gn,t)?!1:Ue.test(t)?ii[t]=!0:(Gn[t]=!0,!1)}var xe=!1;function He(){var t=xe;return xe=!1,t}function $e(t,n,a){if(Xi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ai(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function we(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Hu(t){if(!t._valueTracker){var n=pa(t)?"checked":"value";t._valueTracker=Nl(t,n,""+t[n])}}function gm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=pa(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var zS=/[\n"\\]/g;function xi(t){return t.replace(zS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gu(t,n,a,r,c,u,g,w){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+cn(n)):t.value!==""+cn(n)&&(t.value=""+cn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Vu(t,cn(t.value)):Vu(t,cn(n)):a!=null?Vu(t,cn(a)):r!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+cn(w):t.removeAttribute("name")}function _m(t,n,a,r,c,u,g,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Hu(t);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Hu(t)}function Vu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ar(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vm(t,n,a){if(n!=null&&(n=""+cn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+cn(a):""}function xm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=cn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Hu(t)}function sr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var FS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||FS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ym(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",xe=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Sm(t,c,r),xe=!0)}else for(var u in n)n.hasOwnProperty(u)&&Sm(t,u,n[u])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var HS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return GS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function Mm(t){var n=fe(t);if(n&&(t=n.stateNode)){var a=t[G]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[G]||null;if(!c)throw Error(s(90));Gu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&gm(r)}break t;case"textarea":vm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ar(t,!!a.multiple,n,!1)}}}var Yu=!1;function Em(t,n,a){if(Yu)return t(n,a);Yu=!0;try{var r=t(n);return r}finally{if(Yu=!1,(rr!==null||or!==null)&&(Dc(),rr&&(n=rr,t=or,or=rr=null,Mm(n),t)))for(n=0;n<t.length;n++)Mm(t[n])}}function xo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[G]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(ma)try{var So={};Object.defineProperty(So,"passive",{get:function(){qu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{qu=!1}var Ha=null,ju=null,Ul=null;function bm(){if(Ul)return Ul;var t,n=ju,a=n.length,r,c="value"in Ha?Ha.value:Ha.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[u-r];r++);return Ul=c.slice(t,1<r?1-r:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Tm(){return!1}function Vn(t){function n(a,r,c,u,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ol:Tm,this.isPropagationStopped=Tm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Vn(Ga),yo=I({},Ga,{view:0,detail:0}),VS=Vn(yo),Zu,Ku,Mo,Pl=I({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Zu=t.screenX-Mo.screenX,Ku=t.screenY-Mo.screenY):Ku=Zu=0,Mo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Am=Vn(Pl),kS=I({},Pl,{dataTransfer:0}),XS=Vn(kS),WS=I({},yo,{relatedTarget:0}),Qu=Vn(WS),YS=I({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=Vn(YS),jS=I({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZS=Vn(jS),KS=I({},Ga,{data:0}),Rm=Vn(KS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$S[t])?!!n[t]:!1}function Ju(){return ty}var ey=I({},yo,{key:function(t){if(t.key){var n=QS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ny=Vn(ey),iy=I({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=Vn(iy),ay=I({},Ga,{submitter:0}),sy=Vn(ay),ry=I({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),oy=Vn(ry),ly=I({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Vn(ly),uy=I({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=Vn(uy),dy=I({},Ga,{newState:0,oldState:0,source:0}),hy=Vn(dy),py=[9,13,27,32],$u=ma&&"CompositionEvent"in window,Eo=null;ma&&"documentMode"in document&&(Eo=document.documentMode);var my=ma&&"TextEvent"in window&&!Eo,Cm=ma&&(!$u||Eo&&8<Eo&&11>=Eo),Nm=" ",Dm=!1;function Um(t,n){switch(t){case"keyup":return py.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function gy(t,n){switch(t){case"compositionend":return Lm(n);case"keypress":return n.which!==32?null:(Dm=!0,Nm);case"textInput":return t=n.data,t===Nm&&Dm?null:t;default:return null}}function _y(t,n){if(lr)return t==="compositionend"||!$u&&Um(t,n)?(t=bm(),Ul=ju=Ha=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cm&&n.locale!=="ko"?null:n.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vy[t.type]:n==="textarea"}function Im(t,n,a,r){rr?or?or.push(r):or=[r]:rr=r,n=Bc(n,"onChange"),0<n.length&&(a=new Il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var bo=null,To=null;function xy(t){M_(t,0)}function Bl(t){var n=Wt(t);if(gm(n))return t}function Pm(t,n){if(t==="change")return n}var Bm=!1;if(ma){var tf;if(ma){var ef="oninput"in document;if(!ef){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),ef=typeof zm.oninput=="function"}tf=ef}else tf=!1;Bm=tf&&(!document.documentMode||9<document.documentMode)}function Fm(){bo&&(bo.detachEvent("onpropertychange",Hm),To=bo=null)}function Hm(t){if(t.propertyName==="value"&&Bl(To)){var n=[];Im(n,To,t,Wu(t)),Em(xy,n)}}function Sy(t,n,a){t==="focusin"?(Fm(),bo=n,To=a,bo.attachEvent("onpropertychange",Hm)):t==="focusout"&&Fm()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(To)}function My(t,n){if(t==="click")return Bl(n)}function Ey(t,n){if(t==="input"||t==="change")return Bl(n)}function by(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:by;function Ao(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!St.call(n,c)||!si(t[c],n[c]))return!1}return!0}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,n){var a=Gm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gm(a)}}function km(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?km(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nf(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ty=ma&&"documentMode"in document&&11>=document.documentMode,cr=null,sf=null,Ro=null,rf=!1;function Wm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rf||cr==null||cr!==nf(r)||(r=cr,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Ao(Ro,r)||(Ro=r,r=Bc(sf,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=cr)))}function bs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},of={},Ym={};ma&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Ts(t){if(of[t])return of[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ym)return of[t]=n[a];return t}var qm=Ts("animationend"),jm=Ts("animationiteration"),Zm=Ts("animationstart"),Ay=Ts("transitionrun"),Ry=Ts("transitionstart"),wy=Ts("transitioncancel"),Km=Ts("transitionend"),Qm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Ni(t,n){Qm.set(t,n),Ft(n,[t])}var Cy=0;function ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=Cy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Jm(t){if(t==null||typeof t=="string")return t;var n=null,a=Nr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function _a(t,n){return t=Jm(t),n=Jm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],fr=0,cf=0;function Fl(){for(var t=fr,n=cf=fr=0;n<t;){var a=Si[n];Si[n++]=null;var r=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var u=Si[n];if(Si[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}u!==0&&$m(a,c,u)}}function Hl(t,n,a,r){Si[fr++]=t,Si[fr++]=n,Si[fr++]=a,Si[fr++]=r,cf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uf(t,n,a,r){return Hl(t,n,a,r),Gl(t)}function As(t,n){return Hl(t,null,null,n),Gl(t)}function $m(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-ue(a),t=u.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),u):null}function Gl(t){if(50<Zo)throw Zo=0,Nc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var dr={};function Ny(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new Ny(t,n,a,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function t0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,r,c,u){var g=0;if(r=t,typeof r=="function")ff(r)&&(g=1);else if(typeof r=="string")g=aE(t,a,Be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Et:return t=jn(31,a,n,c),t.elementType=Et,t.lanes=u,t;case k:return Rs(a.children,c,u,n);case q:g=8,c|=24;break;case at:return t=jn(12,a,n,c|2),t.elementType=at,t.lanes=u,t;case Z:return t=jn(13,a,n,c),t.elementType=Z,t.lanes=u,t;case ht:return t=jn(19,a,n,c),t.elementType=ht,t.lanes=u,t;case Zt:case H:return t=c|32,t=jn(30,a,n,t),t.elementType=H,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:g=10;break t;case j:g=9;break t;case W:g=11;break t;case ut:g=14;break t;case mt:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=u,n}function Rs(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function df(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function e0(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function hf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var n0=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=n0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},n0.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var hr=[],pr=0,kl=null,wo=0,Mi=[],Ei=0,Va=null,Yi=1,qi="";function xa(t,n){hr[pr++]=wo,hr[pr++]=kl,kl=t,wo=n}function i0(t,n,a){Mi[Ei++]=Yi,Mi[Ei++]=qi,Mi[Ei++]=Va,Va=t;var r=Yi;t=qi;var c=32-ue(r)-1;r&=~(1<<c),a+=1;var u=32-ue(n)+c;if(30<u){var g=c-c%5;u=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Yi=1<<32-ue(n)+c|a<<c|r,qi=u+t}else Yi=1<<u|a<<c|r,qi=t}function Xl(t){t.return!==null&&(xa(t,1),i0(t,1,0))}function pf(t){for(;t===kl;)kl=hr[--pr],hr[pr]=null,wo=hr[--pr],hr[pr]=null;for(;t===Va;)Va=Mi[--Ei],Mi[Ei]=null,qi=Mi[--Ei],Mi[Ei]=null,Yi=Mi[--Ei],Mi[Ei]=null}function a0(t,n){Mi[Ei++]=Yi,Mi[Ei++]=qi,Mi[Ei++]=Va,Yi=n.id,qi=n.overflow,Va=t}var En=null,tn=null,Se=!1,ka=null,bi=!1,mf=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(yi(n,t)),mf}function s0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[A]=t,n[G]=r,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)Ae(Qo[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),_m(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),xm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||A_(n.textContent,a)?(r.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),r.onScroll!=null&&Ae("scroll",n),r.onScrollEnd!=null&&Ae("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Xa(t,!0)}function Wl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:En=En.return}}function mr(t){if(t!==En)return!1;if(!Se)return Wl(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wd(t.type,t.memoizedProps)),a=!a),a&&tn&&Xa(t),Wl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=W_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=W_(t)}else n===27?(n=tn,rs(t.type)?(t=th,th=null,tn=t):tn=n):tn=En?Ai(t.stateNode.nextSibling):null;return!0}function ws(){tn=En=null,Se=!1}function gf(){var t=ka;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),ka=null),t}function Co(t){ka===null?ka=[t]:ka.push(t)}var _f=ge(null),Cs=null,Sa=null;function Wa(t,n,a){ne(_f,n._currentValue),n._currentValue=a}function ya(t){t._currentValue=_f.current,te(_f)}function Yl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function vf(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;t:for(;u!==null;){var w=u;u=c;for(var B=0;B<n.length;B++)if(w.context===n[B]){u.lanes|=a,w=u.alternate,w!==null&&(w.lanes|=a),Yl(u.return,a,t),r||(g=null);break t}u=w.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),Yl(g,a,t),g=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),Yl(c.return,a,t),g=c.child,g=g!==null?g.sibling:null):g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ns(t,n,a,r){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var w=c.type;si(c.pendingProps.value,g.value)||(t!==null?t.push(w):t=[w])}}else if(c===je.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Hr):t=[Hr])}c=c.return}return t!==null&&vf(n,t,a,r),n.flags|=262144,t!==null}function ql(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Cs=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return r0(Cs,t)}function jl(t,n){return Cs===null&&Ds(t),r0(t,n)}function r0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(t===null)throw Error(s(308));Sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Sa=Sa.next=n;return a}var Dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Uy=o.unstable_scheduleCallback,Ly=o.unstable_NormalPriority,hn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new Dy,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&Uy(Ly,function(){t.controller.abort()})}function o0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Do=null;function Oy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,Sf=0,Us=0,gr=null;function Iy(t,n){if(Uo===null){var a=Uo=[];Sf=0,Us=Pd(),gr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Sf++,n.then(l0,l0),n}function l0(){if(--Sf===0&&(Do=null,Uo!==null)){gr!==null&&(gr.status="fulfilled");var t=Uo;Uo=null,Us=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Py(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var c0=vt.S;vt.S=function(t,n){if(e_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Iy(t,n),Do!==null)for(var a=Or;a!==null;)o0(a,Do),a=a.next;if(a=t.types,a!==null){for(var r=Or;r!==null;)o0(r,a),r=r.next;if(Us!==0){r=Do,r===null&&(r=Do=[]);for(var c=0;c<a.length;c++){var u=a[c];r.indexOf(u)===-1&&r.push(u)}}}c0!==null&&c0(t,n)};var Ls=ge(null);function yf(){var t=Ls.current;return t!==null?t:Qe.pooledCache}function Zl(t,n){n===null?ne(Ls,Ls.current):ne(Ls,n.pool)}function u0(){var t=yf();return t===null?null:{parent:hn._currentValue,pool:t}}var _r=Error(s(460)),Mf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function f0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function d0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,p0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,p0(t),t}throw Is=n,_r}}function Os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Is=a,_r):a}}var Is=null;function h0(){if(Is===null)throw Error(s(459));var t=Is;return Is=null,t}function p0(t){if(t===_r||t===Kl)throw Error(s(483))}var vr=null,Lo=0;function Jl(t){var n=Lo;return Lo+=1,vr===null&&(vr=[]),d0(vr,t,n)}function Ya(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===M?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function m0(t){function n(J,V){if(t){var nt=J.deletions;nt===null?(J.deletions=[V],J.flags|=16):nt.push(V)}}function a(J,V){if(!t)return null;for(;V!==null;)n(J,V),V=V.sibling;return null}function r(J){for(var V=new Map;J!==null;)J.key===null?V.set(J.index,J):V.set(J.key,J),J=J.sibling;return V}function c(J,V){return J=va(J,V),J.index=0,J.sibling=null,J}function u(J,V,nt){return J.index=nt,t?(nt=J.alternate,nt!==null?(nt=nt.index,nt<V?(J.flags|=2,V):nt):(J.flags|=134217730,V)):(J.flags|=1048576,V)}function g(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function w(J,V,nt,xt){return V===null||V.tag!==6?(V=df(nt,J.mode,xt),V.return=J,V):(V=c(V,nt),V.return=J,V)}function B(J,V,nt,xt){var Yt=nt.type;return Yt===k?(J=ft(J,V,nt.props.children,xt,nt.key),Ya(J,nt),J):V!==null&&(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===mt&&Os(Yt)===V.type)?(V=c(V,nt.props),Ya(V,nt),V.return=J,V):(V=Vl(nt.type,nt.key,nt.props,null,J.mode,xt),Ya(V,nt),V.return=J,V)}function $(J,V,nt,xt){return V===null||V.tag!==4||V.stateNode.containerInfo!==nt.containerInfo||V.stateNode.implementation!==nt.implementation?(V=hf(nt,J.mode,xt),V.return=J,V):(V=c(V,nt.children||[]),V.return=J,V)}function ft(J,V,nt,xt,Yt){return V===null||V.tag!==7?(V=Rs(nt,J.mode,xt,Yt),V.return=J,V):(V=c(V,nt),V.return=J,V)}function yt(J,V,nt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=df(""+V,J.mode,nt),V.return=J,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return nt=Vl(V.type,V.key,V.props,null,J.mode,nt),Ya(nt,V),nt.return=J,nt;case z:return V=hf(V,J.mode,nt),V.return=J,V;case mt:return V=Os(V),yt(J,V,nt)}if(It(V)||Q(V))return V=Rs(V,J.mode,nt,null),V.return=J,V;if(typeof V.then=="function")return yt(J,Jl(V),nt);if(V.$$typeof===tt)return yt(J,jl(J,V),nt);$l(J,V)}return null}function K(J,V,nt,xt){var Yt=V!==null?V.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Yt!==null?null:w(J,V,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case U:return nt.key===Yt?B(J,V,nt,xt):null;case z:return nt.key===Yt?$(J,V,nt,xt):null;case mt:return nt=Os(nt),K(J,V,nt,xt)}if(It(nt)||Q(nt))return Yt!==null?null:ft(J,V,nt,xt,null);if(typeof nt.then=="function")return K(J,V,Jl(nt),xt);if(nt.$$typeof===tt)return K(J,V,jl(J,nt),xt);$l(J,nt)}return null}function ct(J,V,nt,xt,Yt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return J=J.get(nt)||null,w(V,J,""+xt,Yt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case U:return J=J.get(xt.key===null?nt:xt.key)||null,B(V,J,xt,Yt);case z:return J=J.get(xt.key===null?nt:xt.key)||null,$(V,J,xt,Yt);case mt:return xt=Os(xt),ct(J,V,nt,xt,Yt)}if(It(xt)||Q(xt))return J=J.get(nt)||null,ft(V,J,xt,Yt,null);if(typeof xt.then=="function")return ct(J,V,nt,Jl(xt),Yt);if(xt.$$typeof===tt)return ct(J,V,nt,jl(V,xt),Yt);$l(V,xt)}return null}function Ot(J,V,nt,xt){for(var Yt=null,Ne=null,ee=V,ae=V=0,gn=null;ee!==null&&ae<nt.length;ae++){ee.index>ae?(gn=ee,ee=null):gn=ee.sibling;var ze=K(J,ee,nt[ae],xt);if(ze===null){ee===null&&(ee=gn);break}t&&ee&&ze.alternate===null&&n(J,ee),V=u(ze,V,ae),Ne===null?Yt=ze:Ne.sibling=ze,Ne=ze,ee=gn}if(ae===nt.length)return a(J,ee),Se&&xa(J,ae),Yt;if(ee===null){for(;ae<nt.length;ae++)ee=yt(J,nt[ae],xt),ee!==null&&(V=u(ee,V,ae),Ne===null?Yt=ee:Ne.sibling=ee,Ne=ee);return Se&&xa(J,ae),Yt}for(ee=r(ee);ae<nt.length;ae++)gn=ct(ee,J,ae,nt[ae],xt),gn!==null&&(t&&(ze=gn.alternate,ze!==null&&ee.delete(ze.key===null?ae:ze.key)),V=u(gn,V,ae),Ne===null?Yt=gn:Ne.sibling=gn,Ne=gn);return t&&ee.forEach(function(fs){return n(J,fs)}),Se&&xa(J,ae),Yt}function Qt(J,V,nt,xt){if(nt==null)throw Error(s(151));for(var Yt=null,Ne=null,ee=V,ae=V=0,gn=null,ze=nt.next();ee!==null&&!ze.done;ae++,ze=nt.next()){ee.index>ae?(gn=ee,ee=null):gn=ee.sibling;var fs=K(J,ee,ze.value,xt);if(fs===null){ee===null&&(ee=gn);break}t&&ee&&fs.alternate===null&&n(J,ee),V=u(fs,V,ae),Ne===null?Yt=fs:Ne.sibling=fs,Ne=fs,ee=gn}if(ze.done)return a(J,ee),Se&&xa(J,ae),Yt;if(ee===null){for(;!ze.done;ae++,ze=nt.next())ze=yt(J,ze.value,xt),ze!==null&&(V=u(ze,V,ae),Ne===null?Yt=ze:Ne.sibling=ze,Ne=ze);return Se&&xa(J,ae),Yt}for(ee=r(ee);!ze.done;ae++,ze=nt.next())ze=ct(ee,J,ae,ze.value,xt),ze!==null&&(t&&(gn=ze.alternate,gn!==null&&ee.delete(gn.key===null?ae:gn.key)),V=u(ze,V,ae),Ne===null?Yt=ze:Ne.sibling=ze,Ne=ze);return t&&ee.forEach(function(gE){return n(J,gE)}),Se&&xa(J,ae),Yt}function me(J,V,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===k&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case U:t:{for(var Yt=nt.key;V!==null;){if(V.key===Yt){if(Yt=nt.type,Yt===k){if(V.tag===7){a(J,V.sibling),xt=c(V,nt.props.children),Ya(xt,nt),xt.return=J,J=xt;break t}}else if(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===mt&&Os(Yt)===V.type){a(J,V.sibling),xt=c(V,nt.props),Ya(xt,nt),xt.return=J,J=xt;break t}a(J,V);break}else n(J,V);V=V.sibling}nt.type===k?(xt=Rs(nt.props.children,J.mode,xt,nt.key),Ya(xt,nt),xt.return=J,J=xt):(xt=Vl(nt.type,nt.key,nt.props,null,J.mode,xt),Ya(xt,nt),xt.return=J,J=xt)}return g(J);case z:t:{for(Yt=nt.key;V!==null;){if(V.key===Yt)if(V.tag===4&&V.stateNode.containerInfo===nt.containerInfo&&V.stateNode.implementation===nt.implementation){a(J,V.sibling),xt=c(V,nt.children||[]),xt.return=J,J=xt;break t}else{a(J,V);break}else n(J,V);V=V.sibling}xt=hf(nt,J.mode,xt),xt.return=J,J=xt}return g(J);case mt:return nt=Os(nt),me(J,V,nt,xt)}if(It(nt))return Ot(J,V,nt,xt);if(Q(nt)){if(Yt=Q(nt),typeof Yt!="function")throw Error(s(150));return nt=Yt.call(nt),Qt(J,V,nt,xt)}if(typeof nt.then=="function")return me(J,V,Jl(nt),xt);if(nt.$$typeof===tt)return me(J,V,jl(J,nt),xt);$l(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,V!==null&&V.tag===6?(a(J,V.sibling),xt=c(V,nt),xt.return=J,J=xt):(a(J,V),xt=df(nt,J.mode,xt),xt.return=J,J=xt),g(J)):a(J,V)}return function(J,V,nt,xt){try{Lo=0;var Yt=me(J,V,nt,xt);return vr=null,Yt}catch(ee){if(ee===_r||ee===Kl)throw ee;var Ne=jn(29,ee,null,J.mode);return Ne.lanes=xt,Ne.return=J,Ne}finally{}}}var Ps=m0(!0),g0=m0(!1),qa=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ge&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Gl(t),$m(t,null,a),n}return Hl(t,r,n,a),Gl(t)}function Oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,mo(t,a)}}function Tf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Af=!1;function Io(){if(Af){var t=gr;if(t!==null)throw t}}function Po(t,n,a,r){Af=!1;var c=t.updateQueue;qa=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var B=w,$=B.next;B.next=null,g===null?u=$:g.next=$,g=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,w=ft.lastBaseUpdate,w!==g&&(w===null?ft.firstBaseUpdate=$:w.next=$,ft.lastBaseUpdate=B))}if(u!==null){var yt=c.baseState;g=0,ft=$=B=null,w=u;do{var K=w.lane&-536870913,ct=K!==w.lane;if(ct?(Ce&K)===K:(r&K)===K){K!==0&&K===Us&&(Af=!0),ft!==null&&(ft=ft.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Ot=t,Qt=w;K=n;var me=a;switch(Qt.tag){case 1:if(Ot=Qt.payload,typeof Ot=="function"){yt=Ot.call(me,yt,K);break t}yt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Qt.payload,K=typeof Ot=="function"?Ot.call(me,yt,K):Ot,K==null)break t;yt=I({},yt,K);break t;case 2:qa=!0}}K=w.callback,K!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[K]:ct.push(K))}else ct={lane:K,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ft===null?($=ft=ct,B=yt):ft=ft.next=ct,g|=K;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;ct=w,w=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ft===null&&(B=yt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,u===null&&(c.shared.lanes=0),ns|=g,t.lanes=g,t.memoizedState=yt}}function _0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function v0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_0(a[t],n)}var Ka=ge(null),tc=ge(0);function x0(t,n){t=Aa,ne(tc,t),ne(Ka,n),Aa=t|n.baseLanes}function Rf(){ne(tc,Aa),ne(Ka,Ka.current)}function wf(){Aa=tc.current,te(Ka),te(tc)}var Nn=ge(null),Bn=null;function Qa(t){var n=t.alternate;ne(Dn,Dn.current&1),ne(Nn,t),Bn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Bn=t)}function Cf(t){ne(Dn,Dn.current),ne(Nn,t),Bn===null&&(Bn=t)}function S0(t){t.tag===22?(ne(Dn,Dn.current),ne(Nn,t),Bn===null&&(Bn=t)):Ja()}function Ja(){ne(Dn,Dn.current),ne(Nn,Nn.current)}function ri(t){te(Nn),Bn===t&&(Bn=null),te(Dn)}var Dn=ge(0);function Bo(t,n){ne(Nn,Nn.current),ne(Dn,n)}function Nf(t){te(Dn),te(Nn),Bn===t&&(Bn=null)}function ec(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jd(a)||$d(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,pe=null,Ke=null,pn=null,nc=!1,xr=!1,Bs=!1,ic=0,zo=0,Sr=null,By=0;function un(){throw Error(s(321))}function Df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Uf(t,n,a,r,c,u){return Ma=u,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vt.H=t===null||t.memoizedState===null?ig:ag,Bs=!1,u=a(r,c),Bs=!1,xr&&(u=M0(n,a,r,c)),y0(t),u}function y0(t){vt.H=uc;var n=Ke!==null&&Ke.next!==null;if(Ma=0,pn=Ke=pe=null,nc=!1,zo=0,Sr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&ql(t)&&(mn=!0))}function M0(t,n,a,r){pe=t;var c=0;do{if(xr&&(Sr=null),zo=0,xr=!1,25<=c)throw Error(s(301));if(c+=1,pn=Ke=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}vt.H=Wy,u=n(a,r)}while(xr);return u}function zy(){var t=vt.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(pe.flags|=1024),n}function Lf(){var t=ic!==0;return ic=0,t}function Of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function If(t){if(nc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nc=!1}Ma=0,pn=Ke=pe=null,xr=!1,zo=ic=0,Sr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?pe.memoizedState=pn=t:pn=pn.next=t,pn}function dn(){if(Ke===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=pn===null?pe.memoizedState:pn.next;if(n!==null)pn=n,Ke=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},pn===null?pe.memoizedState=pn=t:pn=pn.next=t}return pn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=zo;return zo+=1,Sr===null&&(Sr=[]),t=d0(Sr,t,n),n=pe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,vt.H=n===null||n.memoizedState===null?ig:ag),t}function sc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===_t)return;if(t.$$typeof===tt)return Cn(t)}throw Error(s(438,String(t)))}function Pf(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ac(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=qt;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function rc(t){var n=dn();return Bf(n,Ke,t)}function Bf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,u=r.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}n.baseQueue=c=u,r.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var w=g=null,B=null,$=n,ft=!1;do{var yt=$.lane&-536870913;if(yt!==$.lane?(Ce&yt)===yt:(Ma&yt)===yt){var K=$.revertLane;if(K===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),yt===Us&&(ft=!0);else if((Ma&K)===K){$=$.next,K===Us&&(ft=!0);continue}else yt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(w=B=yt,g=u):B=B.next=yt,pe.lanes|=K,ns|=K;yt=$.action,Bs&&a(u,yt),u=$.hasEagerState?$.eagerState:a(u,yt)}else K={lane:yt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(w=B=K,g=u):B=B.next=K,pe.lanes|=yt,ns|=yt;$=$.next}while($!==null&&$!==n);if(B===null?g=u:B.next=w,!si(u,t.memoizedState)&&(mn=!0,ft&&(a=gr,a!==null)))throw a;t.memoizedState=u,t.baseState=g,t.baseQueue=B,r.lastRenderedState=u}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do u=t(u,g.action),g=g.next;while(g!==c);si(u,n.memoizedState)||(mn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function E0(t,n,a){var r=pe,c=dn(),u=Se;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!si((Ke||c).memoizedState,a);if(g&&(c.memoizedState=a,mn=!0),c=c.queue,Gf(A0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||g||pn!==null&&(pn.memoizedState.tag&1)!==0,yr(t?9:8,{destroy:void 0},T0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));u||(Ma&127)!==0||b0(r,n,a)}return a}function b0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=ac(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function T0(t,n,a,r){n.value=a,n.getSnapshot=r,R0(n)&&w0(t)}function A0(t,n,a){return a(function(){R0(n)&&w0(t)})}function R0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function w0(t){var n=As(t,2);n!==null&&Jn(n,t,2)}function Ff(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Bs){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function C0(t,n,a,r){return t.baseState=a,Bf(t,Ke,typeof r=="function"?r:Ea)}function Fy(t,n,a,r,c){if(cc(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};vt.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,N0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function N0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var u=vt.T,g={};g.types=u!==null?u.types:null,vt.T=g;try{var w=a(c,r),B=vt.S;B!==null&&B(g,w),D0(t,n,w)}catch($){Hf(t,n,$)}finally{u!==null&&g.types!==null&&(u.types=g.types),vt.T=u}}else try{u=a(c,r),D0(t,n,u)}catch($){Hf(t,n,$)}}function D0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){U0(t,n,r)},function(r){return Hf(t,n,r)}):U0(t,n,a)}function U0(t,n,a){n.status="fulfilled",n.value=a,L0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,N0(t,a)))}function Hf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,L0(n),n=n.next;while(n!==r)}t.action=null}function L0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function O0(t,n){return n}function I0(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=pe;if(Se){if(tn){e:{for(var c=tn,u=bi;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ai(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){tn=Ai(c.nextSibling),r=c.data==="F!";break t}}Xa(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:n},a.queue=r,a=tg.bind(null,pe,r),r.dispatch=a,r=Ff(!1),u=Yf.bind(null,pe,!1,r.queue),r=kn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Fy.bind(null,pe,c,u,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function P0(t){var n=dn();return B0(n,Ke,t)}function B0(t,n,a){if(n=Bf(t,n,O0)[0],t=rc(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Fo(n)}catch(g){throw g===_r?Kl:g}else r=n;n=dn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,yr(9,{destroy:void 0},Hy.bind(null,c,a),null)),[r,u,t]}function Hy(t,n){t.action=n}function z0(t){var n=dn(),a=Ke;if(a!==null)return B0(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function yr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=ac(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function F0(){return dn().memoizedState}function oc(t,n,a,r){var c=kn();pe.flags|=t,c.memoizedState=yr(1|n,{destroy:void 0},a,r===void 0?null:r)}function lc(t,n,a,r){var c=dn();r=r===void 0?null:r;var u=c.memoizedState.inst;Ke!==null&&r!==null&&Df(r,Ke.memoizedState.deps)?c.memoizedState=yr(n,u,a,r):(pe.flags|=t,c.memoizedState=yr(1|n,u,a,r))}function H0(t,n){oc(8390656,8,t,n)}function Gf(t,n){lc(2048,8,t,n)}function Gy(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=ac(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function G0(t){var n=dn().memoizedState;return Gy({ref:n,nextImpl:t}),function(){if((Ge&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function V0(t,n){return lc(4,2,t,n)}function k0(t,n){return lc(4,4,t,n)}function X0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function W0(t,n,a){a=a!=null?a.concat([t]):null,lc(4,4,X0.bind(null,n,t),a)}function Vf(){}function Y0(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Df(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function q0(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Df(n,r[1]))return r[0];if(r=t(),Bs){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[r,n],r}function kf(t,n,a){return a===void 0||(Ma&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=i_(),pe.lanes|=t,ns|=t,a)}function j0(t,n,a,r){return si(a,n)?a:Ka.current!==null?(t=kf(t,a,r),si(t,n)||(mn=!0),t):(Ma&106)===0||(Ma&1073741824)!==0&&(Ce&261930)===0?(mn=!0,t.memoizedState=a):(t=i_(),pe.lanes|=t,ns|=t,n)}function Z0(t,n,a,r,c){var u=Ct.p;Ct.p=u!==0&&8>u?u:8;var g=vt.T,w={};w.types=g!==null?g.types:null,vt.T=w,Yf(t,!1,n,a);try{var B=c(),$=vt.S;if($!==null&&$(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=Py(B,r);Ho(t,n,ft,ui(t))}else Ho(t,n,r,ui(t))}catch(yt){Ho(t,n,{then:function(){},status:"rejected",reason:yt},ui())}finally{Ct.p=u,g!==null&&w.types!==null&&(g.types=w.types),vt.T=g}}function Vy(){}function Xf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=K0(t).queue;Z0(t,c,n,Pe,a===null?Vy:function(){return Q0(t),a(r)})}function K0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Pe,baseState:Pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Pe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Q0(t){var n=K0(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},ui())}function Wf(){return Cn(Hr)}function J0(){return dn().memoizedState}function $0(){return dn().memoizedState}function ky(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=ja(a);var r=Za(n,t,a);r!==null&&(Jn(r,n,a),Oo(r,n,a)),n={cache:xf()},t.payload=n;return}n=n.return}}function Xy(t,n,a){var r=ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cc(t)?eg(n,a):(a=uf(t,n,a,r),a!==null&&(Jn(a,t,r),ng(a,n,r)))}function tg(t,n,a){var r=ui();Ho(t,n,a,r)}function Ho(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cc(t))eg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,w=u(g,a);if(c.hasEagerState=!0,c.eagerState=w,si(w,g))return Hl(t,n,c,0),Qe===null&&Fl(),!1}catch{}finally{}if(a=uf(t,n,c,r),a!==null)return Jn(a,t,r),ng(a,n,r),!0}return!1}function Yf(t,n,a,r){if(r={lane:2,revertLane:Pd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cc(t)){if(n)throw Error(s(479))}else n=uf(t,a,r,2),n!==null&&Jn(n,t,2)}function cc(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function eg(t,n){xr=nc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ng(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,mo(t,a)}}var uc={readContext:Cn,use:sc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},ig={readContext:Cn,use:sc,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:H0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,oc(4194308,4,X0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return oc(4194308,4,t,n)},useInsertionEffect:function(t,n){oc(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var r=t();if(Bs){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=kn();if(a!==void 0){var c=a(n);if(Bs){De(!0);try{a(n)}finally{De(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Xy.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,a=tg.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(t,n){var a=kn();return kf(a,t,n)},useTransition:function(){var t=Ff(!1);return t=Z0.bind(null,pe,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,c=kn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ce&127)!==0||b0(r,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,H0(A0.bind(null,r,u,t),[t]),r.flags|=2048,yr(9,{destroy:void 0},T0.bind(null,r,u,a,n),null),a},useId:function(){var t=kn(),n=Qe.identifierPrefix;if(Se){var a=qi,r=Yi;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=By++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wf,useFormState:I0,useActionState:I0,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return kn().memoizedState=ky.bind(null,pe)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ag={readContext:Cn,use:sc,useCallback:Y0,useContext:Cn,useEffect:Gf,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:k0,useMemo:q0,useReducer:rc,useRef:F0,useState:function(){return rc(Ea)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=dn();return j0(a,Ke.memoizedState,t,n)},useTransition:function(){var t=rc(Ea)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Wf,useFormState:P0,useActionState:P0,useOptimistic:function(t,n){var a=dn();return C0(a,Ke,t,n)},useMemoCache:Pf,useCacheRefresh:$0,useEffectEvent:G0},Wy={readContext:Cn,use:sc,useCallback:Y0,useContext:Cn,useEffect:Gf,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:k0,useMemo:q0,useReducer:zf,useRef:F0,useState:function(){return zf(Ea)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=dn();return Ke===null?kf(a,t,n):j0(a,Ke.memoizedState,t,n)},useTransition:function(){var t=zf(Ea)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:Wf,useFormState:z0,useActionState:z0,useOptimistic:function(t,n){var a=dn();return Ke!==null?C0(a,Ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:$0,useEffectEvent:G0};function qf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ui(),c=ja(r);c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,r),n!==null&&(Jn(n,t,r),Oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ui(),c=ja(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Za(t,c,r),n!==null&&(Jn(n,t,r),Oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),r=ja(a);r.tag=2,n!=null&&(r.callback=n),n=Za(t,r,a),n!==null&&(Jn(n,t,a),Oo(n,t,a))}};function sg(t,n,a,r,c,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,g):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,r)||!Ao(c,u):!0}function rg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function zs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=I({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function og(t){zl(t)}function lg(t){console.error(t)}function cg(t){zl(t)}function fc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function ug(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zf(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){fc(t,n)},a}function fg(t){return t=ja(t),t.tag=3,t}function dg(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;t.payload=function(){return c(u)},t.callback=function(){ug(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){ug(n,a,r),typeof c!="function"&&(is===null?is=new Set([this]):is.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Yy(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?Uc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ld(t,r,c)),!1;case 22:return a.flags|=65536,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ld(t,r,c)),!1}throw Error(s(435,a.tag))}return Ld(t,r,c),Uc(),!1}if(Se)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==mf&&(t=Error(s(422),{cause:r}),Co(yi(t,a)))):(r!==mf&&(n=Error(s(423),{cause:r}),Co(yi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=yi(r,a),c=Zf(t.stateNode,r,c),Tf(t,c),fn!==4&&(fn=2)),!1;var u=Error(s(520),{cause:r});if(u=yi(u,a),jo===null?jo=[u]:jo.push(u),fn!==4&&(fn=2),n===null)return!0;r=yi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zf(a.stateNode,r,t),Tf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(is===null||!is.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=fg(c),dg(c,t,a,r),Tf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),mn=!1;function xn(t,n,a,r){n.child=t===null?g0(n,null,a,r):Ps(n,t.child,a,r)}function hg(t,n,a,r,c){a=a.render;var u=n.ref;if("ref"in r){var g={};for(var w in r)w!=="ref"&&(g[w]=r[w])}else g=r;return Ds(n),r=Uf(t,n,a,g,u,c),w=Lf(),t!==null&&!mn?(Of(t,n,c),ba(t,n,c)):(Se&&w&&Xl(n),n.flags|=1,xn(t,n,r,c),n.child)}function pg(t,n,a,r,c){if(t===null){var u=a.type;return typeof u=="function"&&!ff(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,mg(t,n,u,r,c)):(t=Vl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!ad(t,c)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(g,r)&&t.ref===n.ref)return ba(t,n,c)}return n.flags|=1,t=va(u,r),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,a,r,c){if(t!==null){var u=t.memoizedProps;if(Ao(u,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=u,ad(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ba(t,n,c)}return Qf(t,n,a,r,c)}function gg(t,n,a,r){var c=r.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,n.child=null;return _g(t,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,u!==null?u.cachePool:null),u!==null?x0(n,u):Rf(),S0(n);else return r=n.lanes=536870912,_g(t,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Zl(n,u.cachePool),x0(n,u),Ja(),n.memoizedState=null):(t!==null&&Zl(n,null),Rf(),Ja());return xn(t,n,c,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(t,n,a,r,c){var u=yf();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Zl(n,null),Rf(),S0(n),t!==null&&Ns(t,n,r,!0),n.childLanes=c,null}function dc(t,n){return n=hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return Ps(n,t.child,null,a),t=dc(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function qy(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=dc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Go(null,t);if(Cf(n),(t=tn)?(t=X_(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=e0(t),a.return=n,n.child=a,En=n,tn=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return dc(n,r)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(Cf(n),c)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Ns(t,n,a,!1),c=(a&t.childLanes)!==0,mn||c){if(Ka.current===null){if(r=Qe,r!==null&&(g=go(r,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,As(t,g),Jn(r,t,g),Kf;Uc()}n=vg(t,n,a)}else t=u.treeContext,tn=Ai(g.nextSibling),En=n,Se=!0,ka=null,bi=!1,t!==null&&a0(n,t),n=dc(n,r),n.flags|=134221824;return n}return t=va(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Mr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,r,c){return Ds(n),a=Uf(t,n,a,r,void 0,c),r=Lf(),t!==null&&!mn?(Of(t,n,c),ba(t,n,c)):(Se&&r&&Xl(n),n.flags|=1,xn(t,n,a,c),n.child)}function xg(t,n,a,r,c,u){return Ds(n),n.updateQueue=null,a=M0(n,r,a,c),y0(t),r=Lf(),t!==null&&!mn?(Of(t,n,u),ba(t,n,u)):(Se&&r&&Xl(n),n.flags|=1,xn(t,n,a,u),n.child)}function Sg(t,n,a,r,c){if(Ds(n),n.stateNode===null){var u=dr,g=a.contextType;typeof g=="object"&&g!==null&&(u=Cn(g)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},Ef(n),g=a.contextType,u.context=typeof g=="object"&&g!==null?Cn(g):dr,u.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(qf(n,a,g,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&jf.enqueueReplaceState(u,u.state,null),Po(n,r,u,c),Io(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){u=n.stateNode;var w=n.memoizedProps,B=zs(a,w);u.props=B;var $=u.context,ft=a.contextType;g=dr,typeof ft=="object"&&ft!==null&&(g=Cn(ft));var yt=a.getDerivedStateFromProps;ft=typeof yt=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ft||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||$!==g)&&rg(n,u,r,g),qa=!1;var K=n.memoizedState;u.state=K,Po(n,r,u,c),Io(),$=n.memoizedState,w||K!==$||qa?(typeof yt=="function"&&(qf(n,a,yt,r),$=n.memoizedState),(B=qa||sg(n,a,B,r,K,$,g))?(ft||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),u.props=r,u.state=$,u.context=g,r=B):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,bf(t,n),g=n.memoizedProps,ft=zs(a,g),u.props=ft,yt=n.pendingProps,K=u.context,$=a.contextType,B=dr,typeof $=="object"&&$!==null&&(B=Cn($)),w=a.getDerivedStateFromProps,($=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==yt||K!==B)&&rg(n,u,r,B),qa=!1,K=n.memoizedState,u.state=K,Po(n,r,u,c),Io();var ct=n.memoizedState;g!==yt||K!==ct||qa||t!==null&&t.dependencies!==null&&ql(t.dependencies)?(typeof w=="function"&&(qf(n,a,w,r),ct=n.memoizedState),(ft=qa||sg(n,a,ft,r,K,ct,B)||t!==null&&t.dependencies!==null&&ql(t.dependencies))?($||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ct,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ct,B)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),u.props=r,u.state=ct,u.context=B,r=ft):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),r=!1)}return u=r,Mr(t,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&r?(n.child=Ps(n,t.child,null,c),n.child=Ps(n,null,a,c)):xn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=ba(t,n,c),t}function yg(t,n,a,r){return ws(),n.flags|=256,xn(t,n,a,r),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:u0()}}function td(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Mg(t,n,a){var r=n.pendingProps,c=!1,u=(n.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Qa(n):Ja(),(t=tn)?(t=X_(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=e0(t),a.return=n,n.child=a,En=n,tn=null)):t=null,t===null)throw Xa(n);return $d(t)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,c?(Ja(),c=n.mode,u=hc({mode:"hidden",children:u},c),r=Rs(r,c,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=$f(a),r.childLanes=td(t,g,a),n.memoizedState=Jf,Go(null,r)):(Qa(n),ed(n,u))}var w=t.memoizedState;if(w!==null){var B=w.dehydrated;if(B!==null)return jy(t,n,u,g,r,B,w,a)}return c?(Ja(),c=r.fallback,u=n.mode,w=t.child,B=w.sibling,r=va(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,B!==null?c=va(B,c):(c=Rs(c,u,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Go(null,r),r=n.child,c=t.child.memoizedState,c===null?c=$f(a):(u=c.cachePool,u!==null?(w=hn._currentValue,u=u.parent!==w?{parent:w,pool:w}:u):u=u0(),c={baseLanes:c.baseLanes|a,cachePool:u}),r.memoizedState=c,r.childLanes=td(t,g,a),n.memoizedState=Jf,Go(t.child,r)):(Qa(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ed(t,n){return n=hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hc(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function pc(t,n,a){return Ps(n,t.child,null,a),t=ed(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jy(t,n,a,r,c,u,g,w){if(a)return n.flags&256?(Qa(n),n.flags&=-257,pc(t,n,w)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),u=c.fallback,g=n.mode,c=hc({mode:"visible",children:c.children},g),u=Rs(u,g,w,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Ps(n,t.child,null,w),c=n.child,c.memoizedState=$f(w),c.childLanes=td(t,r,w),n.memoizedState=Jf,Go(null,c));if(Qa(n),$d(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Co({value:c,source:null,stack:null})),pc(t,n,w)}if(mn||Ns(t,n,w,!1),r=(w&t.childLanes)!==0,mn||r){if(Ka.current!==null)return pc(t,n,w);if(r=Qe,r!==null&&(c=go(r,w),c!==0&&c!==g.retryLane))throw g.retryLane=c,As(t,c),Jn(r,t,c),Kf;return Jd(u)||Uc(),pc(t,n,w)}return Jd(u)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,tn=Ai(u.nextSibling),En=n,Se=!0,ka=null,bi=!1,t!==null&&a0(n,t),n=ed(n,c.children),n.flags|=134221824,n)}function Eg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Yl(t.return,n,a)}function bg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ec(a)===null&&(n=t),t=t.sibling}return n}function mc(t,n,a,r,c,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=u)}function nd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function id(t,n,a){var r=n.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var g=Dn.current;if(n.flags&128)return Bo(n,g),null;var w=(g&2)!==0;if(w?(g=g&1|2,n.flags|=128):g&=1,Bo(n,g),c==="backwards"&&t!==null?(nd(t),xn(t,n,r,a),nd(t)):xn(t,n,r,a),r=Se?wo:0,!w&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,a,n);else if(t.tag===19)Eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=bg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,nd(n)),mc(n,!0,c,null,u,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ec(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}mc(n,!0,a,null,u,r);break;case"together":mc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=bg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),mc(n,!1,c,a,u,r)}return n.child}function Tg(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),xn(t,n,r.children,a),n.child}function ba(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ns(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ad(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ql(t)))}function Zy(t,n,a){switch(n.tag){case 3:X(n,n.stateNode.containerInfo),Wa(n,hn,t.memoizedState.cache),ws();break;case 27:case 5:ye(n);break;case 4:X(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=Ns(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Mg(t,n,a):(Qa(n),t=ba(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return id(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ns(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return id(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Bo(n,Dn.current),r)break;return null;case 22:return n.lanes=0,gg(t,n,a,n.pendingProps);case 24:Wa(n,hn,t.memoizedState.cache)}return ba(t,n,a)}function Ag(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!ad(t,a)&&(n.flags&128)===0)return mn=!1,Zy(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Se&&(n.flags&1048576)!==0&&i0(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")ff(t)?(r=zs(t,r),n.tag=1,n=Sg(null,n,t,r,a)):(n.tag=0,n=Qf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===W){n.tag=11,n=hg(null,n,t,r,a);break t}else if(c===ut){n.tag=14,n=pg(null,n,t,r,a);break t}else if(c===tt){n.tag=10,n.type=t,n=Tg(null,n,a);break t}}throw n=At(t)||t,Error(s(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=zs(r,n.pendingProps),Sg(t,n,r,c,a);case 3:t:{if(X(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;c=u.element,bf(t,n),Po(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Wa(n,hn,r),r!==u.cache&&vf(n,[hn],a,!0),Io(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=yg(t,n,r,a);break t}else if(r!==c){c=yi(Error(s(424)),n),Co(c),n=yg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ai(t.firstChild),En=n,Se=!0,ka=null,bi=!0,a=g0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(ws(),r===c){n=ba(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return Mr(t,n),t===null?(a=Q_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=N_(n.type,n.pendingProps,Ee.current,n)):n.memoizedState=Q_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ye(n),t===null&&Se&&(r=n.stateNode=q_(n.type,n.pendingProps,Ee.current),En=n,bi=!0,c=tn,rs(n.type)?(th=c,tn=Ai(r.firstChild)):tn=c),xn(t,n,n.pendingProps.children,a),Mr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=tn)&&(r=kM(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,En=n,tn=Ai(r.firstChild),bi=!1,c=!0):c=!1),c||Xa(n)),ye(n),c=n.type,u=n.pendingProps,g=t!==null?t.memoizedProps:null,r=u.children,Wd(c,u)?r=null:g!==null&&Wd(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uf(t,n,zy,null,null,a),Hr._currentValue=c),Mr(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=tn)&&(a=XM(a,n.pendingProps,bi),a!==null?(n.stateNode=a,En=n,tn=null,t=!0):t=!1),t||Xa(n)),null;case 13:return Mg(t,n,a);case 4:return X(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ps(n,null,r,a):xn(t,n,r,a),n.child;case 11:return hg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Mr(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return Tg(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Ds(n),c=Cn(c),r=r(c),n.flags|=1,xn(t,n,r,a),n.child;case 14:return pg(t,n,n.type,n.pendingProps,a);case 15:return mg(t,n,n.type,n.pendingProps,a);case 19:return id(t,n,a);case 31:return qy(t,n,a);case 22:return gg(t,n,a,n.pendingProps);case 24:return Ds(n),r=Cn(hn),t===null?(c=yf(),c===null&&(c=Qe,u=xf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:r,cache:c},Ef(n),Wa(n,hn,c)):((t.lanes&a)!==0&&(bf(t,n),Po(n,null,null,a),Io()),c=t.memoizedState,u=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Wa(n,hn,r)):(r=u.cache,Wa(n,hn,r),r!==c.cache&&vf(n,[hn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Xl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Mr(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(t){t.flags|=4}function sd(t,n,a,r,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?ev(n,r):ev(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(o_())t.flags|=8192;else throw Is=Ql,Mf}else t.flags&=-16777217}function Rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nv(n))if(o_())t.flags|=8192;else throw Is=Ql,Mf}function gc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?po():536870912,t.lanes|=n,Rr|=n)}function Vo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Ky(t,n,a){var r=n.pendingProps;switch(pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ya(hn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mr(n)?Ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),en(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(Ta(n),u!==null?(en(n),Rg(n,u)):(en(n),sd(n,c,null,r,a))):u?u!==t.memoizedState?(Ta(n),en(n),Rg(n,u)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ta(n),en(n),sd(n,c,t,r,a)),null;case 27:if(P(n),a=Ee.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return en(n),n.subtreeFlags&=-33554433,null}t=Be.current,mr(n)?s0(n):(t=q_(c,r,a),n.stateNode=t,Ta(n))}return en(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return en(n),n.subtreeFlags&=-33554433,null}if(u=Be.current,mr(n))s0(n);else{var g=$o(Ee.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}u[A]=n,u[G]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=u;t:switch(Ln(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ta(n)}}return en(n),n.subtreeFlags&=-33554433,sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ee.current,mr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||A_(t.nodeValue,a)),t||Xa(n,!0)}else t=$o(t).createTextNode(r),t[A]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=mr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[A]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=mr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[A]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gc(n,n.updateQueue),en(n),null);case 4:return Je(),t===null&&Hd(n.stateNode.containerInfo),n.flags|=67108864,en(n),null;case 10:return ya(n.type),en(n),null;case 19:if(Nf(n),r=n.memoizedState,r===null)return en(n),null;if(c=(n.flags&128)!==0,u=r.rendering,u===null)if(c)Vo(r,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=ec(t),u!==null){for(n.flags|=128,Vo(r,!1),t=u.updateQueue,n.updateQueue=t,gc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)t0(a,t),a=a.sibling;return Bo(n,Dn.current&1|2),Se&&xa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&kt()>wc&&(n.flags|=128,c=!0,Vo(r,!1),n.lanes=4194304)}else{if(!c)if(t=ec(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,gc(n,t),Vo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Se)return en(n),null}else 2*kt()-r.renderingStartTime>wc&&a!==536870912&&(n.flags|=128,c=!0,Vo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(t=r.last,t!==null?t.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=kt(),t.sibling=null,u=Dn.current,u=c?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Bo(n,u):(a=u,ne(Nn,n),ne(Dn,a),Bn===null&&(Bn=n)),Se&&xa(n,r.treeForkCount),t}return en(n),null;case 22:case 23:return ri(n),wf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&gc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&te(Ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(hn),en(n),null;case 25:return null;case 30:return n.flags|=33554432,en(n),null}throw Error(s(156,n.tag))}function Qy(t,n){switch(pf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ya(hn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Nf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Je(),null;case 10:return ya(n.type),null;case 22:case 23:return ri(n),wf(),t!==null&&te(Ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ya(hn),null;case 25:return null;default:return null}}function wg(t,n){switch(pf(n),n.tag){case 3:ya(hn),Je();break;case 26:case 27:case 5:P(n);break;case 4:Je();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Nf(n);break;case 10:ya(n.type);break;case 22:case 23:ri(n),wf(),t!==null&&te(Ls);break;case 24:ya(hn)}}function ko(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var u=a.create,g=a.inst;r=u(),g.destroy=r}a=a.next}while(a!==c)}}catch(w){We(n,n.return,w)}}function $a(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&t)===t){var g=r.inst,w=g.destroy;if(w!==void 0){g.destroy=void 0,c=n;var B=a,$=w;try{$()}catch(ft){We(c,B,ft)}}}r=r.next}while(r!==u)}}catch(ft){We(n,n.return,ft)}}function Cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{v0(n,a)}catch(r){We(t,t.return,r)}}}function Ng(t,n,a){a.props=zs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function ji(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,u=ga(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=B_(u)),r=c.ref;break;case 7:if(t.stateNode===null){var g=new fi(t);v(t.child,!1,GM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(w){We(t,n,w)}}function Un(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){We(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){We(t,n,c)}else a.current=null}function _c(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)k_(t.stateNode,n[a])}function Dg(t){for(var n=t.return;n!==null&&(od(n)&&k_(t.stateNode,n.stateNode),!rd(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(od(n)&&VM(t.stateNode,n.stateNode),!rd(n));)n=n.return}function rd(t){return t.tag===5||t.tag===3||t.tag===27}function od(t){return t&&t.tag===7&&t.stateNode!==null}function ld(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){We(t,t.return,c)}}function cd(t,n,a){try{var r=t.stateNode;EM(r,t.type,a,n),r[G]=n}catch(c){We(t,t.return,c)}}function Ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function ud(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),_c(t,r),xe=!0;else if(c!==4&&(c===27&&(_c(t,r),r=null,rs(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(fd(t,n,a,r),t=t.sibling;t!==null;)fd(t,n,a,r),t=t.sibling}function vc(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),_c(t,r),xe=!0;else if(c!==4&&(c===27&&(_c(t,r),r=null,rs(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vc(t,n,a,r),t=t.sibling;t!==null;)vc(t,n,a,r),t=t.sibling}function Lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,r,a),n[A]=t,n[G]=a}catch(u){We(t,t.return,u)}}var xc=!1,oi=null;function Og(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(xc=!0)}var Zi=null;function Ig(){var t=Zi;return Zi=null,t}var Zn=0;function Er(t,n,a,r,c){return Zn=0,Pg(t.child,n,a,r,c)}function Pg(t,n,a,r,c){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var w=jd(g);r.push(w),w.view&&(u=!0)}else u||jd(g).view&&(u=!0);xc=!0,I_(g,Zn===0?n:n+"_"+Zn,a),Zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Pg(t.child,n,a,r,c)&&(u=!0));t=t.sibling}return u}function Ki(t,n){for(;t!==null;)t.tag===5?P_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Sc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Sc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(Er(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function dd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=ga(r,a),u=_a(r.default,a.paired?r.share:r.enter);u!=="none"?Er(t,c,u,null,!1)?(Sc(t),a.paired||n||Dr(t,r.onEnter)):Ki(t.child,!1):Sc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dd(t,n),t=t.sibling;else Sc(t)}function hd(t){if(oi!==null&&oi.size!==0){var n=oi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var u=_a(a.default,a.share);if(u!=="none"&&(Er(t,r,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Dr(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}hd(t)}t=t.sibling}}}function pd(t){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode),r=oi!==null?oi.get(a):void 0,c=_a(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Er(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,oi.delete(a),Dr(t,n.onShare)):Dr(t,n.onExit):Ki(t.child,!1)),oi!==null&&hd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pd(t),t=t.sibling;else oi!==null&&hd(t)}function Bg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&Er(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Bg(t);t=t.sibling}}function md(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}md(t)}t=t.sibling}}function yc(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),md(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yc(t),t=t.sibling;else md(t)}function zg(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&zg(t),t=t.sibling}function gd(t,n,a,r,c,u,g){for(var w=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(u!==null&&Zn<u.length){var $=u[Zn],ft=jd(B);($.view||ft.view)&&(w=!0);var yt;if(yt=(t.flags&4)===0)if(ft.clip)yt=!0;else{yt=$.rect;var K=ft.rect;yt=yt.y!==K.y||yt.x!==K.x||yt.height!==K.height||yt.width!==K.width}yt&&(t.flags|=4),ft.abs?ft=!$.abs:($=$.rect,ft=ft.rect,ft=$.height!==ft.height||$.width!==ft.width),ft&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&I_(B,Zn===0?a:a+"_"+Zn,c),w&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(B,Zn===0?r:r+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:gd(t,n.child,a,r,c,u,g)&&(w=!0));n=n.sibling}return w}function Fg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=ga(a,r),u=_a(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var w=t.child;Zn=0,c=gd(r,w,c,c,u,g,!1),(t.flags&4)!==0&&c&&Dr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Fg(t);t=t.sibling}}var bn=!1,ke=!1,Qi=!1,_d=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Ji=!1,Wo=!1,Mc=!1,vd=!1;function Jy(t,n,a){if(t=t.containerInfo,kd=Gr,t=Xm(t),af(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var u=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var w=0,B=-1,$=-1,ft=0,yt=0,K=t,ct=null;e:for(;;){for(var Ot;K!==r||u!==0&&K.nodeType!==3||(B=w+u),K!==g||c!==0&&K.nodeType!==3||($=w+c),K.nodeType===3&&(w+=K.nodeValue.length),(Ot=K.firstChild)!==null;)ct=K,K=Ot;for(;;){if(K===t)break e;if(ct===r&&++ft===u&&(B=w),ct===g&&++yt===c&&($=w),(Ot=K.nextSibling)!==null)break;K=ct,ct=K.parentNode}K=Ot}r=B===-1||$===-1?null:{start:B,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xd={focusedElem:t,selectionRange:r},Gr=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&pd(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Og(t),Ec(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&pd(r),Ec(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Og(t),Ec(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&Bg(t),Ec(a))}}oi=null}function Ec(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var g=zs(n.type,c);a=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(w){We(n,n.return,w)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Qd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=_a(c.default,c.update),c!=="none"&&Er(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function Gg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&ko(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){We(a,a.return,g)}else{var c=zs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){We(a,a.return,g)}}r&64&&Cg(a),r&512&&ji(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{v0(t,n)}catch(g){We(a,a.return,g)}}break;case 27:n===null&&r&4&&Lg(a);case 26:case 5:$i(t,a),n===null&&r&4&&ld(a),r&512&&ji(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&Wg(t,a);break;case 13:$i(t,a),r&4&&Yg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uM.bind(null,a),WM(t,a))));break;case 22:if(r=a.memoizedState!==null||bn,!r){var u=n!==null&&n.memoizedState!==null||ke;n=bn,c=ke,bn=r,(ke=u)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(t,a,r)):$i(t,a),bn=n,ke=c}break;case 30:$i(t,a),r&512&&ji(a,a.return);break;case 7:r&512&&ji(a,a.return);default:$i(t,a)}}function xd(t,n){for(t=t.child;t!==null;)Vg(t,n),t=t.sibling}function Vg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(B){We(t,t.return,B)}Sd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,xe=!0}catch(B){We(t,t.return,B)}break;case 18:try{var w=t.stateNode;n?O_(w,!0):O_(t.stateNode,!1)}catch(B){We(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&xd(t,n);break;default:xd(t,n)}}function Sd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Vg(a,r);break t;case 22:a.memoizedState===null&&Sd(a,r);break t;default:Sd(a,r)}}t=t.sibling}}function kg(t){var n=t.alternate;n!==null&&(t.alternate=null,kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Kt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var an=null,Kn=!1;function Di(t,n,a){for(a=a.child;a!==null;)Xg(t,n,a),a=a.sibling}function Xg(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:ke||Un(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Un(a,n),Xo(a);var r=an,c=Kn;rs(a.type)&&(an=a.stateNode,Kn=!1),Di(t,n,a),j_(a.stateNode,a.type,a.memoizedProps),an=r,Kn=c;break;case 5:ke||Un(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),r=an,c=Kn,an=null,Di(t,n,a),an=r,Kn=c,an!==null)if(Kn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),xe=!0}catch(u){We(a,n,u)}else try{an.removeChild(a.stateNode),xe=!0}catch(u){We(a,n,u)}break;case 18:an!==null&&(Kn?(t=an,L_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vr(t)):L_(an,a.stateNode));break;case 4:r=an,c=Kn,an=a.stateNode.containerInfo,Kn=!0,Di(t,n,a),an=r,Kn=c;break;case 0:case 11:case 14:case 15:$a(2,a,n),ke||$a(4,a,n),Di(t,n,a);break;case 1:ke||(Un(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ng(a,n,r)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:ke=(r=ke)||a.memoizedState!==null,Di(t,n,a),ke=r;break;case 30:Un(a,n),Di(t,n,a);break;case 7:ke||Un(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function Wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vr(t)}catch(a){We(n,n.return,a)}}}function Yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vr(t)}catch(a){We(n,n.return,a)}}function $y(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hg),n;default:throw Error(s(435,t.tag))}}function bc(t,n){var a=$y(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=fM.bind(null,t,r);r.then(c,c)}})}function Xn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var u=r[c],g=t,w=n,B=w;t:for(;B!==null;){switch(B.tag){case 27:if(rs(B.type)){an=B.stateNode,Kn=!1;break t}break;case 5:an=B.stateNode,Kn=!1;break t;case 3:case 4:an=B.stateNode.containerInfo,Kn=!0;break t}B=B.return}if(an===null)throw Error(s(160));Xg(g,w,u),an=null,Kn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qg(n,t,a),n=n.sibling}var Ui=null;function qg(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}Xn(n,t,a),Wn(t),c&4&&($a(3,t,t.return),ko(3,t),$a(5,t,t.return));break;case 1:Xn(n,t,a),Wn(t),c&512&&(ke||r===null||Un(r,r.return)),c&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ui,Xn(n,t,a),Wn(t),c&512&&(ke||r===null||Un(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=N_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Lt]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Ln(r,n,a),r[A]=t,ve(r),n=r;break t;case"link":if(u=tv("link","href",c).get(n+(a.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break e}}r=c.createElement(n),Ln(r,n,a),c.head.appendChild(r);break;case"meta":if(u=tv("meta","content",c).get(n+(a.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break e}}r=c.createElement(n),Ln(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=t,ve(r),n=r}t.stateNode=n}else bn||ah(u,t.type,t.stateNode);else t.stateNode=$_(u,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||ke||n.parentNode.removeChild(n)):c.count--,a===null?bn||ah(u,t.type,t.stateNode):$_(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&cd(t,t.memoizedProps,r.memoizedProps);break;case 27:Xn(n,t,a),Wn(t),c&512&&(ke||r===null||Un(r,r.return)),r!==null&&c&4&&cd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Qi,Qi=!1,Xn(n,t,a),Qi=u,Wn(t),c&512&&(ke||r===null||Un(r,r.return)),t.flags&32){n=t.stateNode;try{sr(n,""),xe=!0}catch(ft){We(t,t.return,ft)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,cd(t,n,r!==null?r.memoizedProps:n)),c&1024&&(_d=!0);break;case 6:if(Xn(n,t,a),Wn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,xe=!0}catch(ft){We(t,t.return,ft)}}break;case 3:if(xe=!1,Fc=null,u=Ui,Ui=tl(n.containerInfo),Xn(n,t,a),Ui=u,Wn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Vr(n.containerInfo)}catch(ft){We(t,t.return,ft)}_d&&(_d=!1,jg(t)),xe=!1;break;case 4:c=Qi,Qi=bn,r=He(),u=Ui,Ui=tl(t.stateNode.containerInfo),Xn(n,t,a),Wn(t),Ui=u,xe&&Wo&&(Mc=!0),xe=r,Qi=c;break;case 12:Xn(n,t,a),Wn(t);break;case 31:Xn(n,t,a),Wn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 13:Xn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rc=kt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 22:u=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var w=bn,B=ke,$=Qi;bn=w||u,Qi=$||u,ke=B||g,Xn(n,t,a),ke=B,Qi=$,bn=w,Wn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||g||bn||ke||(n=g||ke,a=bn,r=ke,bn=u||bn,ke=n,ts(t,2),bn=a,ke=r),!u&&Qi||xd(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bc(t,a))));break;case 19:Xn(n,t,a),Wn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bc(t,n)));break;case 30:c&512&&(ke||r===null||Un(r,r.return)),c=He(),u=Wo,g=(a&335544064)===a,w=t.memoizedProps,Wo=g&&_a(w.default,w.update)!=="none",Xn(n,t,a),Wn(t),g&&r!==null&&xe&&(t.flags|=4),Wo=u,xe=c;break;case 21:break;case 7:c&512&&(ke||r===null||Un(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Xn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Ug(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(od(c)){var u=c.stateNode;r===null?r=[u]:r.push(u)}if(rd(c))break;c=c.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,B=ud(t);vc(t,B,w,g);break;case 5:var $=a.stateNode;a.flags&32&&(sr($,""),a.flags&=-33);var ft=ud(t);vc(t,ft,$,g);break;case 3:case 4:var yt=a.stateNode.containerInfo,K=ud(t);fd(t,K,yt,g);break;default:throw Error(s(161))}}catch(ct){We(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function jg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;jg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Gr=!0,n.reset(),Gr=!1),t=t.sibling}}function br(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Zg(n,t),n=n.sibling;else Fg(n)}function Zg(t,n){var a=t.alternate;if(a===null)dd(t,!1);else switch(t.tag){case 3:if(vd=Ji=!1,Ig(),br(n,t),!Ji&&!Mc){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];P_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vd=!0}Zi=null;break;case 5:br(n,t);break;case 4:r=Ji,Ji=!1,br(n,t),Ji&&(Mc=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dd(t,!1):br(n,t));break;case 30:r=Ji,c=Ig(),Ji=!1,br(n,t),Ji&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;n=ga(u,g),g=ga(a.memoizedProps,g);var w=_a(u.default,u.update);w==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Zn=0,n=gd(t,a,n,g,w,u,!0),Zn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Dr(t,t.memoizedProps.onUpdate),Zi=c):c!==null&&(c.push.apply(c,Zi),Zi=c),Ji=(t.flags&32)!==0?!0:r;break;default:br(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(t,n.alternate,n),n=n.sibling}function ts(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,r);break;case 1:Un(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Ng(a,a.return,c),ts(a,r);break;case 27:(r&2)!==0&&j_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),ts(a,r);break;case 6:Xo(a);break;case 26:Un(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||ke||c.parentNode.removeChild(c),ts(a,r);break;case 22:a.memoizedState===null&&ts(a,r);break;case 30:Un(a,a.return),ts(a,r);break;case 7:Un(a,a.return);default:ts(a,r)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,u=n,g=u.flags,w=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(c,u,a),ko(4,u);break;case 1:if(Li(c,u,a),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ft){We(r,r.return,ft)}if(r=u,c=r.updateQueue,c!==null){var B=r.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)_0($[c],B)}catch(ft){We(r,r.return,ft)}}w&&g&64&&Cg(u),ji(u,u.return);break;case 27:(a&2)!==0&&Lg(u);case 5:u.tag!==5&&u.tag!==27||Dg(u),Li(c,u,a),w&&r===null&&g&4&&ld(u),ji(u,u.return);break;case 6:Dg(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||bn||ah(tl(B.ownerDocument),u.type,B),Li(c,u,a),w&&r===null&&g&4&&ld(u),ji(u,u.return);break;case 12:Li(c,u,a);break;case 31:Li(c,u,a),w&&g&4&&Wg(c,u);break;case 13:Li(c,u,a),w&&g&4&&Yg(c,u);break;case 22:u.memoizedState===null&&Li(c,u,a),ji(u,u.return);break;case 30:Li(c,u,a),ji(u,u.return);break;case 7:ji(u,u.return);default:Li(c,u,a)}n=n.sibling}}function yd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&No(a))}function Md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t))}function Ti(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Kg(t,n,a,r),n=n.sibling;else c&&zg(n)}function Kg(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&yc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),u&2048&&ko(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),c&&vd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&No(u)));break;case 12:if(u&2048){Ti(t,n,a,r),u=n.stateNode;try{var g=n.memoizedProps,w=g.id,B=g.onPostCommit;typeof B=="function"&&B(w,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch($){We(n,n.return,$)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,w=n.alternate,n.memoizedState!==null?(c&&w!==null&&w.memoizedState===null&&yc(w),g._visibility&2?Ti(t,n,a,r):Yo(t,n)):(c&&w!==null&&w.memoizedState!==null&&yc(n),g._visibility&2?Ti(t,n,a,r):(g._visibility|=2,Tr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&yd(w,n);break;case 24:Ti(t,n,a,r),u&2048&&Md(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),Ti(t,n,a,r);break;default:Ti(t,n,a,r)}}function Tr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,g=n,w=a,B=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Tr(u,g,w,B,c),ko(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?Tr(u,g,w,B,c):Yo(u,g):(ft._visibility|=2,Tr(u,g,w,B,c)),c&&$&2048&&yd(g.alternate,g);break;case 24:Tr(u,g,w,B,c),c&&$&2048&&Md(g.alternate,g);break;default:Tr(u,g,w,B,c)}n=n.sibling}}function Yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:Yo(a,r),c&2048&&yd(r.alternate,r);break;case 24:Yo(a,r),c&2048&&Md(r.alternate,r);break;default:Yo(a,r)}n=n.sibling}}var Fs=8192;function Hs(t,n,a){if(t.subtreeFlags&Fs)for(t=t.child;t!==null;)Qg(t,n,a),t=t.sibling}function Qg(t,n,a){switch(t.tag){case 26:Hs(t,n,a),t.flags&Fs&&(t.memoizedState!==null?sE(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&av(a,t)));break;case 5:Hs(t,n,a),t.flags&Fs&&(t=t.stateNode,(n&335544128)===n&&av(a,t));break;case 3:case 4:var r=Ui;Ui=tl(t.stateNode.containerInfo),Hs(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Fs,Fs=16777216,Hs(t,n,a),Fs=r):Hs(t,n,a));break;case 30:if((t.flags&Fs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,oi===null&&(oi=new Map),oi.set(r,c)}Hs(t,n,a);break;default:Hs(t,n,a)}}function Jg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,t_(r,t)}Jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$g(t),t=t.sibling}function $g(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tc(t)):qo(t);break;default:qo(t)}}function Tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,t_(r,t)}Jg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tc(n));break;default:Tc(n)}t=t.sibling}}function t_(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:No(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var c=r.sibling,u=r.return;if(kg(r),r===a){Tn=null;break t}if(c!==null){c.return=u,Tn=c;break t}Tn=u}}}var tM={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},eM=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Qe=null,Te=null,Ce=0,Xe=0,li=null,es=!1,Ar=!1,Ed=!1,Aa=0,fn=0,ns=0,Gs=0,Ac=0,ci=0,Rr=0,jo=null,Qn=null,bd=!1,Rc=0,e_=0,wc=1/0,Cc=null,is=null,sn=0,Oi=null,Vs=null,ta=0,Td=0,Ad=null,n_=null,wr=null,Cr=null,Nr=null,Zo=0,Nc=null;function ui(){return(Ge&2)!==0&&Ce!==0?Ce&-Ce:vt.T!==null?Pd():wl()}function i_(){if(ci===0)if((Ce&536870912)===0||Se){var t=ys;ys<<=1,(ys&3932160)===0&&(ys=262144),ci=t}else ci=536870912;return t=Nn.current,t!==null&&(t.flags|=32),ci}function Dr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=B_(ga(t.memoizedProps,a))),Cr===null&&(Cr=[]),Cr.push(n.bind(null,r))}}function Jn(t,n,a){(t===Qe&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),as(t,Ce,ci,!1)),ki(t,a),((Ge&2)===0||t!==Qe)&&(t===Qe&&((Ge&2)===0&&(Gs|=a),fn===4&&as(t,Ce,ci,!1)),ea(t))}function a_(t,n,a){if((Ge&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),c=r?aM(t,n):wd(t,n,!0),u=r;do{if(c===0){Ar&&!r&&as(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!nM(a)){c=wd(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var w=t;c=jo;var B=w.current.memoizedState.isDehydrated;if(B&&(Ur(w,g).flags|=256),g=wd(w,g,!1),g!==2&&g!==6){if(Ed&&!B){w.errorRecoveryDisabledLanes|=u,Gs|=u,c=4;break t}u=Qn,Qn=c,u!==null&&(Qn===null?Qn=u:Qn.push.apply(Qn,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Ur(t,0),as(t,n,0,!0);break}t:{switch(r=t,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(r,n,ci,!es);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Rc+300-kt(),10<c)){if(as(r,n,ci,!es),Ms(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=qd(s_.bind(null,r,a,Qn,Cc,bd,n,ci,Gs,Rr,es,u,"Throttled",-0,0),c);break t}s_(r,a,Qn,Cc,bd,n,ci,Gs,Rr,es,u,null,-0,0)}}break}while(!0);ea(t)}function s_(t,n,a,r,c,u,g,w,B,$,ft,yt,K,ct){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Qt=(u&335544064)===u;if(yt=null,(Qt||Ot&8192||(Ot&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},oi=null,Qg(n,u,yt),Qt&&(Ot=yt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=il.bind(Ot),Qt.finished.then(Ot,Ot))),Ot=(u&62914560)===u?Rc-kt():(u&4194048)===u?e_-kt():0,Ot=rE(yt,Ot),Ot!==null)){ta=u,t.cancelPendingCommit=Ot(h_.bind(null,t,n,u,a,r,c,g,w,B,$,ft,yt,null,K,ct)),as(t,u,g,!$);return}h_(t,n,u,a,r,c,g,w,B,$,ft,yt)}function nM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],u=c.getSnapshot;c=c.value;try{if(!si(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,r){n=Vi(t,n),n&=~Ac,n&=~Gs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var u=31-ue(c),g=1<<u;r[u]=-1,c&=~g}a!==0&&Es(t,a,n)}function Dc(){return(Ge&6)===0?(Ko(0),!1):!0}function Rd(){if(Te!==null){if(Xe===0)var t=Te.return;else t=Te,Sa=Cs=null,If(t),vr=null,Lo=0,t=Te;for(;t!==null;)wg(t.alternate,t),t=t.return;Te=null}}function Ur(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,AM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Rd(),Qe=t,Te=a=va(t.current,null),Ce=n,Xe=0,li=null,es=!1,Ar=Fa(t,n),Ed=!1,Rr=ci=Ac=Gs=ns=fn=0,Qn=jo=null,bd=!1,Aa=Vi(t,n),Fl(),a}function r_(t,n){pe=null,vt.H=uc,n===_r||n===Kl?(n=h0(),Xe=3):n===Mf?(n=h0(),Xe=4):Xe=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Te===null&&(fn=1,fc(t,yi(n,t.current)))}function o_(){var t=Nn.current;return t===null?!0:(Ce&4194048)===Ce?Bn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Bn:!1}function l_(){var t=vt.H;return vt.H=uc,t===null?uc:t}function c_(){var t=vt.A;return vt.A=tM,t}function Uc(){fn=4,es||(Ce&4194048)!==Ce&&Nn.current!==null||(Ar=!0),(ns&134217727)===0&&(Gs&134217727)===0||Qe===null||as(Qe,Ce,ci,!1)}function wd(t,n,a){var r=Ge;Ge|=2;var c=l_(),u=c_();(Qe!==t||Ce!==n)&&(Cc=null,Ur(t,n)),n=!1;var g=fn;t:do try{if(Xe!==0&&Te!==null){var w=Te,B=li;switch(Xe){case 8:Rd(),g=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var $=Xe;if(Xe=0,li=null,Lr(t,w,B,$),a&&Ar){g=0;break t}break;default:$=Xe,Xe=0,li=null,Lr(t,w,B,$)}}iM(),g=fn;break}catch(ft){r_(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Sa=Cs=null,Ge=r,vt.H=c,vt.A=u,Te===null&&(Qe=null,Ce=0,Fl()),g}function iM(){for(;Te!==null;)u_(Te)}function aM(t,n){var a=Ge;Ge|=2;var r=l_(),c=c_();Qe!==t||Ce!==n?(Cc=null,wc=kt()+500,Ur(t,n)):Ar=Fa(t,n);t:do try{if(Xe!==0&&Te!==null){n=Te;var u=li;e:switch(Xe){case 1:Xe=0,li=null,Lr(t,n,u,1);break;case 2:case 9:if(f0(u)){Xe=0,li=null,f_(n);break}n=function(){Xe!==2&&Xe!==9||Qe!==t||(Xe=7),ea(t)},u.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:f0(u)?(Xe=0,li=null,f_(n)):(Xe=0,li=null,Lr(t,n,u,7));break;case 5:var g=null;switch(Te.tag){case 26:g=Te.memoizedState;case 5:case 27:var w=Te;if(g?nv(g):w.stateNode.complete){Xe=0,li=null;var B=w.sibling;if(B!==null)Te=B;else{var $=w.return;$!==null?(Te=$,Lc($)):Te=null}break e}}Xe=0,li=null,Lr(t,n,u,5);break;case 6:Xe=0,li=null,Lr(t,n,u,6);break;case 8:Rd(),fn=6;break t;default:throw Error(s(462))}}sM();break}catch(ft){r_(t,ft)}while(!0);return Sa=Cs=null,vt.H=r,vt.A=c,Ge=a,Te!==null?0:(Qe=null,Ce=0,Fl(),fn)}function sM(){for(;Te!==null&&!Bt();)u_(Te)}function u_(t){var n=Ag(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?Lc(t):Te=n}function f_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:If(n);var r=n;r===En&&(Se?(Wl(r),r.tag===5&&r.stateNode!=null&&(tn=r.stateNode)):(Wl(r),Se=!0));default:wg(a,n),n=Te=t0(n,Aa),n=Ag(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?Lc(t):Te=n}function Lr(t,n,a,r){Sa=Cs=null,If(n),vr=null,Lo=0;var c=n.return;try{if(Yy(t,c,n,a,Ce)){fn=1,fc(t,yi(a,t.current)),Te=null;return}}catch(u){if(c!==null)throw Te=c,u;fn=1,fc(t,yi(a,t.current)),Te=null;return}n.flags&32768?(Se||r===1?t=!0:Ar||(Ce&536870912)!==0?t=!1:(es=t=!0,(r===2||r===9||r===3||r===6)&&(r=Nn.current,r!==null&&r.tag===13&&(r.flags|=16384))),d_(n,t)):Lc(n)}function Lc(t){var n=t;do{if((n.flags&32768)!==0){d_(n,es);return}t=n.return;var a=Ky(n.alternate,n,Aa);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);fn===0&&(fn=5)}function d_(t,n){do{var a=Qy(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);fn=6,Te=null}function h_(t,n,a,r,c,u,g,w,B,$,ft,yt){t.cancelPendingCommit=null;do Oc();while(sn!==0);if((Ge&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(Te=Qe=null,Ce=0),Vs=n,Oi=t,ta=a,Ad=c,n_=r,rM(t,n,a,g,w,B,yt)}}function rM(t,n,a,r,c,u,g){var w=n.lanes|n.childLanes;if(Td=w,w|=cf,Rl(t,a,w,r,c,u),Cr=null,(a&335544064)===a?(Nr=Oy(t),r=10262):(Nr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,dM(Dt,function(){return Ud(),null})):(t.callbackNode=null,t.callbackPriority=0),xc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=vt.T,vt.T=null,c=Ct.p,Ct.p=2,u=Ge,Ge|=4;try{Jy(t,n,a)}finally{Ge=u,Ct.p=c,vt.T=r}}sn=1,xc?wr=UM(g,t.containerInfo,Nr,Cd,Nd,lM,Dd,Ud,oM):(Cd(),Nd(),Dd())}function oM(t){if(sn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function lM(){sn===3&&(sn=0,Zg(Vs,Oi),sn=4)}function Cd(){if(sn===1){sn=0;var t=Oi,n=Vs,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=vt.T,vt.T=null;var c=Ct.p;Ct.p=2;var u=Ge;Ge|=4;try{Wo=Mc=!1,qg(n,t,a),a=Xd;var g=Xm(t.containerInfo),w=a.focusedElem,B=a.selectionRange;if(g!==w&&w&&w.ownerDocument&&km(w.ownerDocument.documentElement,w)){if(B!==null&&af(w)){var $=B.start,ft=B.end;if(ft===void 0&&(ft=$),"selectionStart"in w)w.selectionStart=$,w.selectionEnd=Math.min(ft,w.value.length);else{var yt=w.ownerDocument||document,K=yt&&yt.defaultView||window;if(K.getSelection){var ct=K.getSelection(),Ot=w.textContent.length,Qt=Math.min(B.start,Ot),me=B.end===void 0?Qt:Math.min(B.end,Ot);!ct.extend&&Qt>me&&(g=me,me=Qt,Qt=g);var J=Vm(w,Qt),V=Vm(w,me);if(J&&V&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==V.node||ct.focusOffset!==V.offset)){var nt=yt.createRange();nt.setStart(J.node,J.offset),ct.removeAllRanges(),Qt>me?(ct.addRange(nt),ct.extend(V.node,V.offset)):(nt.setEnd(V.node,V.offset),ct.addRange(nt))}}}}for(yt=[],ct=w;ct=ct.parentNode;)ct.nodeType===1&&yt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var xt=yt[w];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Gr=!!kd,Xd=kd=null}finally{Ge=u,Ct.p=c,vt.T=r}}t.current=n,sn=2}}function Nd(){if(sn===2){sn=0;var t=Oi,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=vt.T,vt.T=null;var r=Ct.p;Ct.p=2;var c=Ge;Ge|=4;try{Gg(t,n.alternate,n)}finally{Ge=c,Ct.p=r,vt.T=a}}sn=3}}function Dd(){if(sn===4||sn===3){sn=0;var t=wr;wr=null,Pt();var n=Oi,a=Vs,r=ta,c=n_,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?sn=5:(sn=0,Vs=Oi=null,p_(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(is=null),vo(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=vt.T,u=Ct.p,Ct.p=2,vt.T=null;try{for(var g=n.onRecoverableError,w=0;w<c.length;w++){var B=c[w];g(B.value,{componentStack:B.stack})}}finally{vt.T=a,Ct.p=u}}if(c=Cr,g=Nr,Nr=null,c!==null&&(Cr=null,g===null&&(g=[]),t!==null))for(B=0;B<c.length;B++)a=(0,c[B])(g),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Oc(),ea(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Nc?Zo++:(Zo=0,Nc=n):(Zo=0,Nc=null),Ko(0)}}function p_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,No(n)))}function Oc(){return wr!==null&&(wr.skipTransition(),wr=null),Cd(),Nd(),Dd(),Ud()}function Ud(){if(sn!==5)return!1;var t=Oi,n=Td;Td=0;var a=vo(ta),r=vt.T,c=Ct.p;try{Ct.p=32>a?32:a,vt.T=null,a=Ad,Ad=null;var u=Oi,g=ta;if(sn=0,Vs=Oi=null,ta=0,(Ge&6)!==0)throw Error(s(331));var w=Ge;if(Ge|=4,$g(u.current),Kg(u,u.current,g,a),Ge=w,Ko(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jt,u)}catch{}return!0}finally{Ct.p=c,vt.T=r,p_(t,n)}}function m_(t,n,a){n=yi(a,n),n=Zf(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(ki(t,2),ea(t))}function We(t,n,a){if(t.tag===3)m_(t,t,a);else for(;n!==null;){if(n.tag===3){m_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(is===null||!is.has(r))){t=yi(a,t),a=fg(2),r=Za(n,a,2),r!==null&&(dg(a,r,n,t),ki(r,2),ea(r));break}}n=n.return}}function Ld(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new eM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ed=!0,c.add(a),t=cM.bind(null,t,n,a),n.then(t,t))}function cM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Ce&a)===a&&((fn===4||fn===3&&(Ce&62914560)===Ce&&300>kt()-Rc)&&(Ge&2)===0?Ur(t,0):Ac|=a,Rr===Ce&&(Rr=0)),ea(t)}function g_(t,n){n===0&&(n=po()),t=As(t,n),t!==null&&(ki(t,n),ea(t))}function uM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),g_(t,a)}function fM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),g_(t,a)}function dM(t,n){return Nt(t,n)}var Or=null,Ir=null,Od=!1,Ic=!1,Id=!1,ss=0;function ea(t){t!==Ir&&t.next===null&&(Ir===null?Or=Ir=t:Ir=Ir.next=t),Ic=!0,Od||(Od=!0,pM())}function Ko(t,n){if(!Id&&Ic){Id=!0;do for(var a=!1,r=Or;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var g=r.suspendedLanes,w=r.pingedLanes;u=(1<<31-ue(42|t)+1)-1,u&=c&~(g&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,S_(r,u))}else u=Ce,u=Ms(r,r===Qe?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Fa(r,u)||(a=!0,S_(r,u));r=r.next}while(a);Id=!1}}function hM(){__()}function __(){Ic=Od=!1;var t=0;ss!==0&&TM()&&(t=ss);for(var n=kt(),a=null,r=Or;r!==null;){var c=r.next,u=v_(r,n);u===0?(r.next=null,a===null?Or=c:a.next=c,c===null&&(Ir=a)):(a=r,(t!==0||(u&3)!==0)&&(Ic=!0)),r=c}sn!==0&&sn!==5||Ko(t),ss!==0&&(ss=0)}function v_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-ue(u),w=1<<g,B=c[g];B===-1?((w&a)===0||(w&r)!==0)&&(c[g]=ho(w,n)):B<=n&&(t.expiredLanes|=w),u&=~w}if(n=Qe,a=Ce,a=Ms(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),vo(a)){case 2:case 8:a=Y;break;case 32:a=Dt;break;case 268435456:a=Ut;break;default:a=Dt}return r=x_.bind(null,t),a=Nt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function x_(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Oc()&&t.callbackNode!==a)return null;var r=Ce;return r=Ms(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(a_(t,r,n),v_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?x_.bind(null,t):null)}function S_(t,n){if(Oc())return null;a_(t,n,!0)}function pM(){RM(function(){(Ge&6)!==0?Nt(le,hM):__()})}function Pd(){if(ss===0){var t=Us;t===0&&(t=nr,nr<<=1,(nr&261888)===0&&(nr=256)),ss=t}return ss}function y_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(t)}function mM(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var u=y_((c[G]||null).action),g=r.submitter;g&&(n=(n=g[G]||null)?y_(n.formAction):g.getAttribute("formAction"),n!==null&&(u=n,g=null));var w=new Il("action","action",null,r,c);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ss!==0){var B=new FormData(c,g);Xf(a,{pending:!0,data:B,method:c.method,action:u},null,B)}}else typeof u=="function"&&(w.preventDefault(),B=new FormData(c,g),Xf(a,{pending:!0,data:B,method:c.method,action:u},u,B))},currentTarget:c}]})}}for(var Bd=0;Bd<lf.length;Bd++){var zd=lf[Bd],gM=zd.toLowerCase(),_M=zd[0].toUpperCase()+zd.slice(1);Ni(gM,"on"+_M)}Ni(qm,"onAnimationEnd"),Ni(jm,"onAnimationIteration"),Ni(Zm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Ay,"onTransitionRun"),Ni(Ry,"onTransitionStart"),Ni(wy,"onTransitionCancel"),Ni(Km,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function M_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var u=void 0;if(n)for(var g=r.length-1;0<=g;g--){var w=r[g],B=w.instance,$=w.currentTarget;if(w=w.listener,B!==u&&c.isPropagationStopped())break t;u=w,c.currentTarget=$;try{u(c)}catch(ft){zl(ft)}c.currentTarget=null,u=B}else for(g=0;g<r.length;g++){if(w=r[g],B=w.instance,$=w.currentTarget,w=w.listener,B!==u&&c.isPropagationStopped())break t;u=w,c.currentTarget=$;try{u(c)}catch(ft){zl(ft)}c.currentTarget=null,u=B}}}}function Ae(t,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var r=t+"__bubble";a.has(r)||(E_(n,t,2,!1),a.add(r))}function Fd(t,n,a){var r=0;n&&(r|=4),E_(a,t,r,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Hd(t){if(!t[Pc]){t[Pc]=!0,Ve.forEach(function(a){a!=="selectionchange"&&(vM.has(a)||Fd(a,!1,t),Fd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,Fd("selectionchange",!1,n))}}function E_(t,n,a,r){switch(dv(n)){case 2:var c=uE;break;case 8:c=fE;break;default:c=rh}a=c.bind(null,n,a,t),c=void 0,!qu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Gd(t,n,a,r,c){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var w=r.stateNode.containerInfo;if(w===c)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;w!==null;){if(g=se(w),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=u=g;continue t}w=w.parentNode}}r=r.return}Em(function(){var $=u,ft=Wu(a),yt=[];t:{var K=Qm.get(t);if(K!==void 0){var ct=Il,Ot=t;switch(t){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":ct=ny;break;case"focusin":Ot="focus",ct=Qu;break;case"focusout":Ot="blur",ct=Qu;break;case"beforeblur":case"afterblur":ct=Qu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=oy;break;case qm:case jm:case Zm:ct=qS;break;case Km:ct=cy;break;case"scroll":case"scrollend":ct=VS;break;case"wheel":ct=fy;break;case"copy":case"cut":case"paste":ct=ZS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=wm;break;case"submit":ct=sy;break;case"toggle":case"beforetoggle":ct=hy}var Qt=(n&4)!==0,me=!Qt&&(t==="scroll"||t==="scrollend"),J=Qt?K!==null?K+"Capture":null:K;Qt=[];for(var V=$,nt;V!==null;){var xt=V;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||J===null||(xt=xo(V,J),xt!=null&&Qt.push(Jo(V,xt,nt))),me)break;V=V.return}0<Qt.length&&(K=new ct(K,Ot,null,a,ft),yt.push({event:K,listeners:Qt}))}}if((n&7)===0){t:{if(ct=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",ct&&a!==Xu&&(Ot=a.relatedTarget||a.fromElement)&&(se(Ot)||Ot[dt]))break t;(K||ct)&&(Ot=ft.window===ft?ft:(ct=ft.ownerDocument)?ct.defaultView||ct.parentWindow:window,K?(ct=a.relatedTarget||a.toElement,K=$,ct=ct?se(ct):null,ct!==null&&(me=f(ct),Qt=ct.tag,ct!==me||Qt!==5&&Qt!==27&&Qt!==6)&&(ct=null)):(K=null,ct=$),K!==ct&&(Qt=Am,xt="onMouseLeave",J="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=wm,xt="onPointerLeave",J="onPointerEnter",V="pointer"),me=K==null?Ot:Wt(K),nt=ct==null?Ot:Wt(ct),Ot=new Qt(xt,V+"leave",K,a,ft),Ot.target=me,Ot.relatedTarget=nt,xt=null,se(ft)===$&&(Qt=new Qt(J,V+"enter",ct,a,ft),Qt.target=nt,Qt.relatedTarget=me,xt=Qt),me=xt,Qt=K&&ct?L(K,ct,xM):null,K!==null&&b_(yt,Ot,K,Qt,!1),ct!==null&&me!==null&&b_(yt,me,ct,Qt,!0)))}t:{if(K=$?Wt($):window,ct=K.nodeName&&K.nodeName.toLowerCase(),ct==="select"||ct==="input"&&K.type==="file")var Yt=Pm;else if(Om(K))if(Bm)Yt=Ey;else{Yt=yy;var Ne=Sy}else ct=K.nodeName,!ct||ct.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&ku($.elementType)&&(Yt=Pm):Yt=My;if(Yt&&(Yt=Yt(t,$))){Im(yt,Yt,a,ft);break t}Ne&&Ne(t,K,$)}switch(Ne=$?Wt($):window,t){case"focusin":(Om(Ne)||Ne.contentEditable==="true")&&(cr=Ne,sf=$,Ro=null);break;case"focusout":Ro=sf=cr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Wm(yt,a,ft);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Wm(yt,a,ft)}var ee;if($u)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else lr?Um(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Cm&&a.locale!=="ko"&&(lr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&lr&&(ee=bm()):(Ha=ft,ju="value"in Ha?Ha.value:Ha.textContent,lr=!0)),Ne=Bc($,ae),0<Ne.length&&(ae=new Rm(ae,t,null,a,ft),yt.push({event:ae,listeners:Ne}),ee?ae.data=ee:(ee=Lm(a),ee!==null&&(ae.data=ee)))),(ee=my?gy(t,a):_y(t,a))&&(ae=Bc($,"onBeforeInput"),0<ae.length&&(Ne=new Rm("onBeforeInput","beforeinput",null,a,ft),yt.push({event:Ne,listeners:ae}),Ne.data=ee)),mM(yt,t,$,a,ft)}M_(yt,n)})}function Jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bc(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=xo(t,a),c!=null&&r.unshift(Jo(t,c,u)),c=xo(t,n),c!=null&&r.push(Jo(t,c,u))),t.tag===3)return r;t=t.return}return[]}function xM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b_(t,n,a,r,c){for(var u=n._reactName,g=[];a!==null&&a!==r;){var w=a,B=w.alternate,$=w.stateNode;if(w=w.tag,B!==null&&B===r)break;w!==5&&w!==26&&w!==27||$===null||(B=$,c?($=xo(a,u),$!=null&&g.unshift(Jo(a,$,B))):c||($=xo(a,u),$!=null&&g.push(Jo(a,$,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var SM=/\r\n?/g,yM=/\u0000|\uFFFD/g;function T_(t){return(typeof t=="string"?t:""+t).replace(SM,`
`).replace(yM,"")}function A_(t,n){return n=T_(n),T_(t)===n}function Ye(t,n,a,r,c,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||sr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&sr(t,""+r);else return;break;case"className":ai(t,"class",r);break;case"tabIndex":ai(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(t,a,r);break;case"style":ym(t,r,u);return;case"data":if(n!=="object"){ai(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",c.name,c,null),Ye(t,n,"formEncType",c.formEncType,c,null),Ye(t,n,"formMethod",c.formMethod,c,null),Ye(t,n,"formTarget",c.formTarget,c,null)):(Ye(t,n,"encType",c.encType,c,null),Ye(t,n,"method",c.method,c,null),Ye(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Wi);return;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),$e(t,"popover",r);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$e(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=HS.get(a)||a,$e(t,a,r);else return}xe=!0}function Vd(t,n,a,r,c,u){switch(a){case"style":ym(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")sr(t,r);else if(typeof r=="number"||typeof r=="bigint")sr(t,""+r);else return;break;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!vn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[G]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,c);break t}xe=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):$e(t,a,r)}return}xe=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var r=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,u,g,a,null)}}c&&Ye(t,n,"srcSet",a.srcSet,a,null),r&&Ye(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var w=u=g=c=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":g=ft;break;case"checked":B=ft;break;case"defaultChecked":$=ft;break;case"value":u=ft;break;case"defaultValue":w=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ye(t,n,r,ft,a,null)}}_m(t,u,w,B,$,g,c,!1);return;case"select":Ae("invalid",t),r=g=u=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":u=w;break;case"defaultValue":g=w;break;case"multiple":r=w;default:Ye(t,n,c,w,a,null)}n=u,a=g,t.multiple=!!r,n!=null?ar(t,!!r,n,!1):a!=null&&ar(t,!!r,a,!0);return;case"textarea":Ae("invalid",t),u=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(w=a[g],w!=null))switch(g){case"value":r=w;break;case"defaultValue":c=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ye(t,n,g,w,a,null)}xm(t,r,c,u);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ye(t,n,B,r,a,null)}return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(r=0;r<Qo.length;r++)Ae(Qo[r],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(t,n,$,r,a,null)}return;default:if(ku(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Vd(t,n,ft,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Ye(t,n,w,r,a,null))}var MM={};function EM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,w=null,B=null,$=null,ft=null;for(ct in a){var yt=a[ct];if(a.hasOwnProperty(ct)&&yt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=yt;default:r.hasOwnProperty(ct)||Ye(t,n,ct,null,r,yt)}}for(var K in r){var ct=r[K];if(yt=a[K],r.hasOwnProperty(K)&&(ct!=null||yt!=null))switch(K){case"type":ct!==yt&&(xe=!0),u=ct;break;case"name":ct!==yt&&(xe=!0),c=ct;break;case"checked":ct!==yt&&(xe=!0),$=ct;break;case"defaultChecked":ct!==yt&&(xe=!0),ft=ct;break;case"value":ct!==yt&&(xe=!0),g=ct;break;case"defaultValue":ct!==yt&&(xe=!0),w=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==yt&&Ye(t,n,K,ct,r,yt)}}Gu(t,g,w,B,$,ft,u,c);return;case"select":ct=g=w=K=null;for(u in a)if(B=a[u],a.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":ct=B;default:r.hasOwnProperty(u)||Ye(t,n,u,null,r,B)}for(c in r)if(u=r[c],B=a[c],r.hasOwnProperty(c)&&(u!=null||B!=null))switch(c){case"value":u!==B&&(xe=!0),K=u;break;case"defaultValue":u!==B&&(xe=!0),w=u;break;case"multiple":u!==B&&(xe=!0),g=u;default:u!==B&&Ye(t,n,c,u,r,B)}n=w,a=g,r=ct,K!=null?ar(t,!!a,K,!1):!!r!=!!a&&(n!=null?ar(t,!!a,n,!0):ar(t,!!a,a?[]:"",!1));return;case"textarea":ct=K=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ye(t,n,w,null,r,c)}for(g in r)if(c=r[g],u=a[g],r.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":c!==u&&(xe=!0),K=c;break;case"defaultValue":c!==u&&(xe=!0),ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&Ye(t,n,g,c,r,u)}vm(t,K,ct);return;case"option":for(var Ot in a)if(K=a[Ot],a.hasOwnProperty(Ot)&&K!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Ye(t,n,Ot,null,r,K)}for(B in r)if(K=r[B],ct=a[B],r.hasOwnProperty(B)&&K!==ct&&(K!=null||ct!=null))switch(B){case"selected":K!==ct&&(xe=!0),t.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Ye(t,n,B,K,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)K=a[Qt],a.hasOwnProperty(Qt)&&K!=null&&!r.hasOwnProperty(Qt)&&Ye(t,n,Qt,null,r,K);for($ in r)if(K=r[$],ct=a[$],r.hasOwnProperty($)&&K!==ct&&(K!=null||ct!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:Ye(t,n,$,K,r,ct)}return;default:if(ku(n)){for(var me in a)K=a[me],a.hasOwnProperty(me)&&K!==void 0&&!r.hasOwnProperty(me)&&Vd(t,n,me,void 0,r,K);for(ft in r)K=r[ft],ct=a[ft],!r.hasOwnProperty(ft)||K===ct||K===void 0&&ct===void 0||Vd(t,n,ft,K,r,ct);return}}for(var J in a)K=a[J],a.hasOwnProperty(J)&&K!=null&&!r.hasOwnProperty(J)&&Ye(t,n,J,null,r,K);for(yt in r)K=r[yt],ct=a[yt],!r.hasOwnProperty(yt)||K===ct||K==null&&ct==null||Ye(t,n,yt,K,r,ct)}function R_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],u=c.transferSize,g=c.initiatorType,w=c.duration;if(u&&w&&R_(g)){for(g=0,w=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>w)break;var ft=B.transferSize,yt=B.initiatorType;ft&&R_(yt)&&(B=B.responseEnd,g+=ft*(B<w?1:(w-$)/(B-$)))}if(--r,n+=8*(u+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kd=null,Xd=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function w_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function N_(t,n,a,r){return a=$o(a).createElement(t),a[A]=r,a[G]=n,Ln(a,t,n),ve(a),a}function Wd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yd=null;function TM(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,AM=typeof clearTimeout=="function"?clearTimeout:void 0,D_=typeof Promise=="function"?Promise:void 0,U_=typeof requestAnimationFrame=="function"?requestAnimationFrame:qd,RM=typeof queueMicrotask=="function"?queueMicrotask:typeof D_<"u"?function(t){return D_.resolve(null).then(t).catch(wM)}:qd;function wM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function L_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Vr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")eh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,eh(a);for(var u=a.firstChild;u;){var g=u.nextSibling,w=u.nodeName;u[Lt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&eh(t.ownerDocument.body);a=c}while(a);Vr(n)}function O_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function I_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function P_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function CM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return CM(n,a,t)}function NM(t){return t.documentElement.clientHeight}function DM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function UM(t,n,a,r,c,u,g,w,B){var $=n.nodeType===9?n:n.ownerDocument;try{var ft=$.startViewTransition({update:function(){var K=$.defaultView,ct=K.navigation&&K.navigation.transition,Ot=$.fonts.status;r();var Qt=[];if(Ot==="loaded"&&(NM($),$.fonts.status==="loading"&&Qt.push($.fonts.ready)),Ot=Qt.length,t!==null)for(var me=t.suspenseyImages,J=0,V=0;V<me.length;V++){var nt=me[V];if(!nt.complete){var xt=nt.getBoundingClientRect();if(0<xt.bottom&&0<xt.right&&xt.top<K.innerHeight&&xt.left<K.innerWidth){if(J+=iv(nt),J>Hc){Qt.length=Ot;break}nt=new Promise(DM.bind(nt)),Qt.push(nt)}}}if(0<Qt.length)return K=Promise.race([Promise.all(Qt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(c,c),(ct?Promise.allSettled([ct.finished,K]):K).then(u,u);if(c(),ct)return ct.finished.then(u,u);u()},types:a});$.__reactViewTransition=ft;var yt=[];return ft.ready.then(function(){for(var K=$.documentElement.getAnimations({subtree:!0}),ct=0;ct<K.length;ct++){var Ot=K[ct],Qt=Ot.effect,me=Qt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){yt.push(Ot),Ot=Qt.getKeyframes();for(var J=me=void 0,V=!0,nt=0;nt<Ot.length;nt++){var xt=Ot[nt],Yt=xt.width;if(me===void 0)me=Yt;else if(me!==Yt){V=!1;break}if(Yt=xt.height,J===void 0)J=Yt;else if(J!==Yt){V=!1;break}delete xt.width,delete xt.height,xt.transform==="none"&&delete xt.transform}V&&me!==void 0&&J!==void 0&&(Qt.setKeyframes(Ot),V=getComputedStyle(Qt.target,Qt.pseudoElement),V.width!==me||V.height!==J)&&(V=Ot[0],V.width=me,V.height=J,V=Ot[Ot.length-1],V.width=me,V.height=J,Qt.setKeyframes(Ot))}}g()},function(K){$.__reactViewTransition===ft&&($.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&B(K)}finally{r(),c(),g()}}),ft.finished.finally(function(){for(var K=0;K<yt.length;K++)yt[K].cancel();$.__reactViewTransition===ft&&($.__reactViewTransition=null),w()}),ft}catch{return r(),c(),g(),null}}function ks(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}ks.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},ks.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&r.push(a[c])}return r},ks.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function B_(t){return{name:t,group:new ks("group",t),imagePair:new ks("image-pair",t),old:new ks("old",t),new:new ks("new",t)}}function fi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}fi.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(F_(u,t,n,a)===-1){var g=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(B){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(c=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Pr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:c}),v(this._fragmentFiber.child,!1,LM,t,w,r)}this._eventListeners=u}};function LM(t,n,a,r){return y(t).addEventListener(n,a,r),!1}fi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=F_(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var u=c.cleanup;c=Pr(c.optionsOrUseCapture),v(this._fragmentFiber.child,!1,OM,t,a,c),r.splice(n,1),u!==null&&u()}};function OM(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Pr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function z_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function F_(t,n,a,r){if(t.length===0)return-1;r=z_(r);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&z_(u.optionsOrUseCapture)===r)return c}return-1}fi.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];r.addEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],r.removeEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},fi.prototype.focus=function(t){v(this._fragmentFiber.child,!0,H_,t,void 0,void 0)};function H_(t,n){return t.tag===6?!1:(t=y(t),YM(t,n))}fi.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,Zd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!H_(n[a],t);a--);};function Zd(t,n){return n.push(t),!1}fi.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=$o(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,IM,t,void 0,void 0))};function IM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}fi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,PM,t,void 0,void 0)};function PM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}fi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,BM,t,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var r=Ii[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ii[n++]=r}Ii.length=n}};function BM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ii=[],Kd=!1;function zM(t,n,a){Ii.push({fragmentInstance:t,observer:n,instance:a}),Kd||(Kd=!0,qM(function(){Kd=!1;var r=Ii;Ii=[];for(var c=0;c<r.length;c++){var u=r[c];u.observer.unobserve(u.instance)}}))}fi.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,FM,t,void 0,void 0),t};function FM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}fi.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},fi.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Zd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),c=y(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),w=c.compareDocumentPosition(t),B=g&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||u&&c===t||B||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||HM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function HM(t,n,a,r,c){var u=se(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=_(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=L(a,u,O),n===null?n=!1:(v(n,!0,F,u,a),u=x,x=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=L(r,u,O),n===null?n=!1:(v(n,!0,N,u,r),u=x,C=x=null,n=u!==null)),n):!1}function G_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}fi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Zd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),G_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=y(c),G_(c,a)):y(c).scrollIntoView(t),r+=a?-1:1}};function GM(t,n){return t=y(t),V_(t,n),!1}function V_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function k_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,Pr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var g=0,w=0;w<Ii.length;w++){var B=Ii[w];(B.fragmentInstance!==n||B.observer!==u||B.instance!==t)&&(Ii[g++]=B)}Ii.length=g,u.observe(t)}),V_(t,n))}function VM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,Pr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?zM(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qd(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function kM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Lt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function XM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function X_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function $d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function WM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var th=null;function W_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Y_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function YM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function qM(t){U_(function(){U_(function(n){return t(n)})})}function q_(t,n,a){switch(n=$o(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function j_(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Ye(t,n,r,null,MM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),Kt(t)}function eh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Kt(t)}var Ri=new Map,Z_=new Set;function tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ra=Ct.d;Ct.d={f:jM,r:ZM,D:KM,C:QM,L:JM,m:$M,X:eE,S:tE,M:nE};function jM(){var t=Ra.f(),n=Dc();return t||n}function ZM(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?Q0(n):Ra.r(t)}var Br=typeof document>"u"?null:document;function K_(t,n,a){var r=Br;if(r&&typeof n=="string"&&n){var c=xi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Z_.has(c)||(Z_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Ln(n,"link",t),ve(n),r.head.appendChild(n)))}}function KM(t){Ra.D(t),K_("dns-prefetch",t,null)}function QM(t,n){Ra.C(t,n),K_("preconnect",t,n)}function JM(t,n,a){Ra.L(t,n,a);var r=Br;if(r&&t&&n){var c='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xi(a.imageSizes)+'"]')):c+='[href="'+xi(t)+'"]';var u=c;switch(n){case"style":u=zr(t);break;case"script":u=Fr(t)}if(!(Ri.has(u)||(t=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(u,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(el(u))||n==="script"&&r.querySelector(nl(u))))){var g=r.createElement("link");Ln(g,"link",t),n==="style"&&(g[jt]=!0,g.onload=g.onerror=function(){Ze(g)}),ve(g),r.head.appendChild(g)}}}function $M(t,n){Ra.m(t,n);var a=Br;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xi(r)+'"][href="'+xi(t)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Fr(t)}if(!Ri.has(u)&&(t=I({rel:"modulepreload",href:t},n),Ri.set(u,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(u)))return}r=a.createElement("link"),Ln(r,"link",t),ve(r),a.head.appendChild(r)}}}function tE(t,n,a){Ra.S(t,n,a);var r=Br;if(r&&t){var c=be(r).hoistableStyles,u=zr(t);n=n||"default";var g=c.get(u);if(!g){var w={loading:0,preload:null};if(g=r.querySelector(el(u)))w.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(u))&&nh(t,a);var B=g=r.createElement("link");ve(B),Ln(B,"link",t),B._p=new Promise(function($,ft){B.onload=$,B.onerror=ft}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,zc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:w},c.set(u,g)}}}function eE(t,n){Ra.X(t,n);var a=Br;if(a&&t){var r=be(a).hoistableScripts,c=Fr(t),u=r.get(c);u||(u=a.querySelector(nl(c)),u||(t=I({src:t,async:!0},n),(n=Ri.get(c))&&ih(t,n),u=a.createElement("script"),ve(u),Ln(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function nE(t,n){Ra.M(t,n);var a=Br;if(a&&t){var r=be(a).hoistableScripts,c=Fr(t),u=r.get(c);u||(u=a.querySelector(nl(c)),u||(t=I({src:t,async:!0,type:"module"},n),(n=Ri.get(c))&&ih(t,n),u=a.createElement("script"),ve(u),Ln(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function Q_(t,n,a,r){var c=(c=Ee.current)?tl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zr(a.href),n=be(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zr(a.href);var u=be(c).hoistableStyles,g=u.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=c.querySelector(el(t)))?u._p||(g.instance=u,g.state.loading=5):(u=Ri.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,u)),iE(c,t,u,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fr(a),n=be(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zr(t){return'href="'+xi(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function J_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function iE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[jt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[jt]=!0,n.onload=n.onerror=Ze.bind(null,n),Ln(n,"link",a),ve(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Fr(t){return'[src="'+xi(t)+'"]'}function nl(t){return"script[async]"+t}function $_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(r)return n.instance=r,ve(r),r;var c=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ve(r),Ln(r,"style",c),zc(r,a.precedence,t),n.instance=r;case"stylesheet":c=zr(a.href);var u=t.querySelector(el(c));if(u)return n.state.loading|=4,n.instance=u,ve(u),u;r=J_(a),(c=Ri.get(c))&&nh(r,c),u=(t.ownerDocument||t).createElement("link"),ve(u);var g=u;return g._p=new Promise(function(w,B){g.onload=w,g.onerror=B}),Ln(u,"link",r),n.state.loading|=4,zc(u,a.precedence,t),n.instance=u;case"script":return u=Fr(a.src),(c=t.querySelector(nl(u)))?(n.instance=c,ve(c),c):(r=a,(c=Ri.get(u))&&(r=I({},a),ih(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),ve(c),Ln(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,zc(r,a.precedence,t));return n.instance}function zc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,g=0;g<r.length;g++){var w=r[g];if(w.dataset.precedence===n)u=w;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fc=null;function tv(t,n,a){if(Fc===null){var r=new Map,c=Fc=new Map;c.set(a,r)}else c=Fc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Lt]||u[A]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(n)||"";g=t+g;var w=r.get(g);w?w.push(u):r.set(g,[u])}}return r}function ah(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ev(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function iv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function av(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=iv(n),t.suspenseyImages.push(n)),t=oE.bind(t),n.decode().then(t,t))}function sE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=zr(r.href),u=n.querySelector(el(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,ve(u);return}u=n.ownerDocument||n,r=J_(r),(c=Ri.get(c))&&nh(r,c),u=u.createElement("link"),ve(u);var g=u;g._p=new Promise(function(w,B){g.onload=w,g.onerror=B}),Ln(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hc=0;function rE(t,n){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Hc===0&&(Hc=62500*bM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Hc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function sv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function il(){this.count--,sv(this)}function oE(){this.imgCount--,sv(this)}var Gc=null;function Vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,n.forEach(lE,t),Gc=null,il.call(t))}function lE(t,n){if(!(n.state.loading&4)){var a=Gc.get(t);if(a)var r=a.get(null);else{a=new Map,Gc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),u=a.get(g)||r,u===r&&a.set(null,c),a.set(g,c),this.count++,r=il.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Hr={$$typeof:tt,Provider:null,Consumer:null,_currentValue:Pe,_currentValue2:Pe,_threadCount:0};function cE(t,n,a,r,c,u,g,w,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.hiddenUpdates=ir(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function rv(t,n,a,r,c,u,g,w,B,$,ft,yt){return t=new cE(t,n,a,g,B,$,ft,yt,w),n=1,u===!0&&(n|=24),u=jn(3,null,null,n),t.current=u,u.stateNode=t,n=xf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},Ef(u),t}function ov(t){return t?(t=dr,t):dr}function lv(t,n,a,r,c,u){c=ov(c),r.context===null?r.context=c:r.pendingContext=c,r=ja(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Za(t,r,n),a!==null&&(Jn(a,t,n),Oo(a,t,n))}function cv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sh(t,n){cv(t,n),(t=t.alternate)&&cv(t,n)}function uv(t){if(t.tag===13||t.tag===31){var n=As(t,67108864);n!==null&&Jn(n,t,67108864),sh(t,67108864)}}function fv(t){if(t.tag===13||t.tag===31){var n=ui();n=_o(n);var a=As(t,n);a!==null&&Jn(a,t,n),sh(t,n)}}var Gr=!0;function uE(t,n,a,r){var c=vt.T;vt.T=null;var u=Ct.p;try{Ct.p=2,rh(t,n,a,r)}finally{Ct.p=u,vt.T=c}}function fE(t,n,a,r){var c=vt.T;vt.T=null;var u=Ct.p;try{Ct.p=8,rh(t,n,a,r)}finally{Ct.p=u,vt.T=c}}function rh(t,n,a,r){if(Gr){var c=oh(r);if(c===null)Gd(t,n,r,kc,a),hv(t,r);else if(hE(c,t,n,a,r))r.stopPropagation();else if(hv(t,r),n&4&&-1<dE.indexOf(t)){for(;c!==null;){var u=fe(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=ha(u.pendingLanes);if(g!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;g;){var B=1<<31-ue(g);w.entanglements[1]|=B,g&=~B}ea(u),(Ge&6)===0&&(wc=kt()+500,Ko(0))}}break;case 31:case 13:w=As(u,2),w!==null&&Jn(w,u,2),Dc(),sh(u,2)}if(u=oh(r),u===null&&Gd(t,n,r,kc,a),u===c)break;c=u}c!==null&&r.stopPropagation()}else Gd(t,n,r,null,a)}}function oh(t){return t=Wu(t),lh(t)}var kc=null;function lh(t){if(kc=null,t=se(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kc=t,null}function dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case le:return 2;case Y:return 8;case Dt:case Mt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var ch=!1,os=null,ls=null,cs=null,al=new Map,sl=new Map,us=[],dE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(t,n,a,r,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},n!==null&&(n=fe(n),n!==null&&uv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hE(t,n,a,r,c){switch(n){case"focusin":return os=rl(os,t,n,a,r,c),!0;case"dragenter":return ls=rl(ls,t,n,a,r,c),!0;case"mouseover":return cs=rl(cs,t,n,a,r,c),!0;case"pointerover":var u=c.pointerId;return al.set(u,rl(al.get(u)||null,t,n,a,r,c)),!0;case"gotpointercapture":return u=c.pointerId,sl.set(u,rl(sl.get(u)||null,t,n,a,r,c)),!0}return!1}function pv(t){var n=se(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Cl(t.priority,function(){fv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Cl(t.priority,function(){fv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=oh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Xu=r,a.target.dispatchEvent(r),Xu=null}else return n=fe(a),n!==null&&uv(n),t.blockedOn=a,!1;n.shift()}return!0}function mv(t,n,a){Xc(t)&&a.delete(n)}function pE(){ch=!1,os!==null&&Xc(os)&&(os=null),ls!==null&&Xc(ls)&&(ls=null),cs!==null&&Xc(cs)&&(cs=null),al.forEach(mv),sl.forEach(mv)}function Wc(t,n){t.blockedOn===n&&(t.blockedOn=null,ch||(ch=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pE)))}var Yc=null;function gv(t){Yc!==t&&(Yc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(lh(r||a)===null)continue;break}var u=fe(a);u!==null&&(t.splice(n,3),n-=3,Xf(u,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Vr(t){function n(B){return Wc(B,t)}os!==null&&Wc(os,t),ls!==null&&Wc(ls,t),cs!==null&&Wc(cs,t),al.forEach(n),sl.forEach(n);for(var a=0;a<us.length;a++){var r=us[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)pv(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],u=a[r+1],g=c[G]||null;if(typeof u=="function")g||gv(a);else if(g){var w=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[G]||null)w=g.formAction;else if(lh(c)!==null)continue}else w=g.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),gv(a)}}}function _v(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function uh(t){this._internalRoot=t}qc.prototype.render=uh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ui();lv(a,r,t,n,null,null)},qc.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;lv(t.current,2,null,t,null,null),Dc(),n[dt]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var n=wl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&pv(t)}};var vv=e.version;if(vv!=="19.3.1")throw Error(s(527,vv,"19.3.1"));Ct.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var mE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{Jt=jc.inject(mE),Gt=jc}catch{}}return ll.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=og,u=lg,g=cg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=rv(t,1,!1,null,null,a,r,null,c,u,g,_v),t[dt]=n.current,Hd(t),new uh(n)},ll.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",u=og,g=lg,w=cg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=rv(t,1,!0,n,a??null,r,c,B,u,g,w,_v),n.context=ov(null),a=n.current,r=ui(),r=_o(r),c=ja(r),c.callback=null,Za(a,c,r),a=r,n.current.lanes=a,ki(n,a),ea(n),t[dt]=n.current,Hd(t),new qc(n)},ll.version="19.3.1",ll}var wv;function RE(){if(wv)return hh.exports;wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=AE(),hh.exports}var wE=RE();const CE=wx(wE),NE=[{id:"BS-00",slotNumber:"SLOT 00 [PROTOTYPE]",code:"HL-BS-00-GUARDIAN",title:"THE CATACOMB GUARDIAN // ORIGIN SPECIMEN",germanTitle:"DER KATACOMBEN-WÄCHTER (URSPRUNG)",category:"LEATHER_TACTICAL",status:"DOCUMENTED",imageUrl:"./media/origin-artifact.jpg",season:"ARCHIVE // OCT 31 HALLOWEEN PROTOTYPE",silhouette:"Sculpted Flared Silhouette with Gargoyle Wings Armature",materials:["Bonded Calfskin Leather","Oxidized Heavy Denim","Distressed Rib Knit"],hardware:["Sterling Silver Tribal Carvings","Dual Ring Harness Buckles","Articulated Gauntlet Claws"],dimensions:"Height: 188cm / Proportion: Extended Flare",description:"Центральный концептуальный артефакт архива Blutiges Schwert. Монументальный силуэт в духе темного фэнтези 2000-х: анатомический открытый торс с кожаной перевязью, брутальные расклешенные кожаные брюки с гравированными серебряными пластинами и гаргульевидные крылья.",curatorNotes:"Архивный референс. Символ дуализма утилитарного минимализма и средневековой готики.",colorPalette:["#09090b","#3b0d11","#8b909a","#c0c0c0"]},{id:"BS-01",slotNumber:"SLOT 01 [ARCHIVED]",code:"HL-BS-01-DANTE-DMC3",title:"DANTE (DMC3) // CATACOMB REVENANT ARCHIVE OUTFIT",germanTitle:"DANTE: DER SCHATTEN-REVENANT (KAPITEL 01)",category:"OUTERWEAR",status:"DOCUMENTED",imageUrl:"./media/dante-wide-pants-v2.jpg",secondaryImageUrl:"./media/outfit-specimen-01.png",season:"AUTUMN-WINTER 2026 // CATACOMB SERIES",silhouette:"DMC3 Dante In-Game Model in Ultra-Wide Baggy Shredded Denim & Fur Hood Parka",materials:["Heavy Horizontal Shredded Wide-Leg Denim","Contrasting White Fang Panels","Wolf Faux Fur Collar","Armored Chitin Leather"],hardware:["Demon Tooth Creeper Soles","Chitinous Spiked Gauntlets","Vertebrae Spine Tail Belt","Raccagni Two-Way Zippers"],description:"Легендарный Данте из Devil May Cry 3 в экстремально широких оверсайз-джинсах (JNCO / Baggy Flare) с горизонтальной бахромой и белыми зубьями, тяжелой парке с меховым воротом, шипованных крагах и массивных ботинках с акульими шипами.",curatorNotes:"Точный образ Данте (DMC3) в массивных широких брюках по референсу дизайнера.",colorPalette:["#0d0d10","#1a1a20","#f8fafc","#7f1d1d"]},{id:"BS-02",slotNumber:"SLOT 02",code:"BS-ARCH-02-BOTTM",title:"EMPTY CELL // AWAITING TROUSERS CONCEPT",germanTitle:"LEERE ZELLE // HOSE KONZEPT",category:"BOTTOMS",status:"AWAITING_DESIGN",season:"PERPETUAL ARCHIVE",silhouette:"Extended Inseam Stacked / Aggressive Bootcut Flare",materials:["Waxed Denim","Treated Goat Leather","Awaiting User Spec"],hardware:["Custom Gothic Rivets","Heavy Industrial D-Rings"],description:"Пустая ячейка для низа. Ожидает концепта (например: расклешенные карго-брюки с шипами, кожаные штаны с молниями или джинсы с серебряными цепями).",curatorNotes:"Слот зарезервирован под кастомный дизайн брюк.",colorPalette:["#070708","#222226","#94a3b8"]},{id:"BS-03",slotNumber:"SLOT 03",code:"BS-ARCH-03-JACKT",title:"EMPTY CELL // AWAITING MOTO / BOMBER CONCEPT",germanTitle:"LEERE ZELLE // JACKE KONZEPT",category:"OUTERWEAR",status:"AWAITING_DESIGN",season:"HALLOWEEN REVERIE",silhouette:"Cropped Boxy / Asymmetric Cut",materials:["Distressed Oilskin","Armor-Plated Cotton","Awaiting User Spec"],hardware:["Chunky Two-Way Raccagni Zipper","Pewter Snap Closures"],description:"Пустая ячейка для куртки/бомбера. Идеально под кропнутый силуэт с акцентными плечами, ремнями безопасности в стиле раннего Helmut Lang или готическими деталями.",curatorNotes:"Слот ждет вашей идеи.",colorPalette:["#121216","#2b0c10","#a1a1aa"]},{id:"BS-04",slotNumber:"SLOT 04",code:"BS-ARCH-04-HARNS",title:"EMPTY CELL // AWAITING TACTICAL HARNESS",germanTitle:"LEERE ZELLE // KÖRPERHARNISCH",category:"LEATHER_TACTICAL",status:"AWAITING_DESIGN",season:"CATACOMB HARDWARE",silhouette:"Body-Contouring Modular Harness / Vest",materials:["Full-Grain Bridle Leather","Military Webbing","Awaiting User Spec"],hardware:["Hand-Forged Cobalt Buckles","Spike Studs"],description:"Пустая ячейка для тактического жилета, портупеи или кожаного корсета. Вдохновлена экипировкой бойцов и ритуальной амуницией.",curatorNotes:"Готова к наполнению кастомным эскизом.",colorPalette:["#09090b","#3b070c","#e2e8f0"]},{id:"BS-05",slotNumber:"SLOT 05",code:"BS-ARCH-05-BOOTS",title:"EMPTY CELL // AWAITING EXOSKELETON FOOTWEAR",germanTitle:"LEERE ZELLE // SCHUHWERK",category:"FOOTWEAR",status:"AWAITING_DESIGN",season:"INDUSTRIAL CYCLE",silhouette:"Bulky Platform Creeper / Armored Knee-High",materials:["Rigid Vulcanized Rubber","Polished Bullhide","Awaiting User Spec"],hardware:["Steel Toe Caps","Rear Zip with Engraved Cross Charm"],description:"Пустая ячейка для обуви. Массивные ботинки на платформе, металлические накладки на носок, рифленая тракторная подошва.",curatorNotes:"Слот открыт для концепта обуви.",colorPalette:["#040405","#17171a","#6b7280"]},{id:"BS-06",slotNumber:"SLOT 06",code:"BS-ARCH-06-RELIC",title:"EMPTY CELL // AWAITING GOTHIC JEWELRY & ARTIFACTS",germanTitle:"LEERE ZELLE // RELIKTIEN & SCHMUCK",category:"RELICS",status:"AWAITING_DESIGN",season:"OCCULT RITUAL",silhouette:"Micro-Object / Wearable Sculpture",materials:["925 Sterling Silver","Obsidian Stone","Awaiting User Spec"],hardware:["Barbed Wire Links","Gargoyle Motif Signet Ring"],description:"Пустая ячейка для аксессуаров и реликвий (печатки, массивные цепи с шипами, серебряные пряжки, подвески с символикой меча).",curatorNotes:"Готова к размещению драгоценного артефакта.",colorPalette:["#1c1c22","#a8a29e","#f8fafc"]},{id:"BS-07",slotNumber:"SLOT 07",code:"BS-ARCH-07-KNITW",title:"EMPTY CELL // AWAITING DESTRUCTED KNITWEAR",germanTitle:"LEERE ZELLE // STRICKWAREN",category:"OUTERWEAR",status:"AWAITING_DESIGN",season:"DECAY SERIES",silhouette:"Laddered Loose Knit / Trailing Threads",materials:["Mohair Blend","Raw Distressed Cotton","Awaiting User Spec"],hardware:["Safety Pin Fasteners","Oxidized Silver Badges"],description:"Пустая ячейка для рваного трикотажа: паутинные свитера крупной вязки, спущенные петли, готическая многослойность.",curatorNotes:"Слот ждет вашей идеи для трикотажа.",colorPalette:["#0b0b0e","#222228","#831843"]}];/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function UE(o,e,i=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:DE(o),size:24,node:e,...i.length>0?{aliases:i}:{}}}/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=o=>{let e="",i=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){i=e.length>0;continue}e.length===0?e+=s.toLowerCase():e+=i?s.toUpperCase():s,i=!1}return e};/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=o=>{const e=LE(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _h(o){return o!=null}function IE(o,e={}){var _,E;const i=e.attributeNames??{},s=T=>i[T]??T,l=o.size??o.width??Xs.width,f=o.size??o.height??Xs.height,d=((_=o.aliases)==null?void 0:_.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],h=[...o.name?[`lucide-${o.name}`]:[],...d],p=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?Qh(...p):Qh("lucide",...h,...p),S=e.absoluteStrokeWidth?Number(e.strokeWidth??Xs["stroke-width"])*Number(o.size??o.width??Xs.width)/Number(e.size??e.width??Xs.width):e.strokeWidth??Xs["stroke-width"];return["svg",{...Object.entries(Xs).reduce((T,[D,y])=>(T[s(D)]=y,T),{}),..."color"in e&&e.color&&{[s("stroke")]:e.color},..."size"in e&&_h(e.size)&&{[s("width")]:e.size,[s("height")]:e.size},..."width"in e&&_h(e.width)&&{[s("width")]:e.width},..."height"in e&&_h(e.height)&&{[s("height")]:e.height},[s("stroke-width")]:S,...m&&{[s("class")]:m},[s("viewBox")]:`0 0 ${l} ${f}`,...e.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},o.node.map(T=>{const[D,y,x]=T,C=e.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...y}:y;return x?[D,C,x]:[D,C]})]}/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function PE(o,e={}){return IE(o,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zE=Re.createContext({}),FE=()=>Re.useContext(zE),HE=Re.forwardRef(({color:o,size:e,width:i,height:s,strokeWidth:l,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:p,iconNode:m=[],icon:S={node:m,aliases:[],size:24},...v},_)=>{const{size:E=24,strokeWidth:T=2,absoluteStrokeWidth:D=!1,nonScalingStroke:y=!1,color:x="currentColor",className:C=""}=FE()??{},F=!!p||BE(v),[N,O,L=[]]=PE(S,{color:o??x,width:i??e??E,height:s??e??E,strokeWidth:l??T,absoluteStrokeWidth:f??D,nonScalingStroke:d??y,className:Qh(C,h),hasA11yProp:F,attributes:v});return Re.createElement(N,{ref:_,...O},[...L.map(([I,M])=>Re.createElement(I,M)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Mn(o,e=[],i=[]){const s=typeof o=="string"?UE(o,e,i):o,l=Re.forwardRef(({className:f,...d},h)=>Re.createElement(HE,{ref:h,icon:s,className:f,...d}));return s.name&&(l.displayName=OE(s.name)),l}/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Cx.node;const Wp=Mn(Cx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Nx.node;const GE=Mn(Nx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Dx.node;const Ux=Mn(Dx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Lx.node;const VE=Mn(Lx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"corner-down-right",size:24,node:[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]};Ox.node;const kE=Mn(Ox);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};Ix.node;const XE=Mn(Ix);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Px.node;const Bx=Mn(Px);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};zx.node;const WE=Mn(zx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Fx.node;const YE=Mn(Fx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Hx.node;const qE=Mn(Hx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};Gx.node;const jE=Mn(Gx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Vx.node;const ZE=Mn(Vx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};kx.node;const KE=Mn(kx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Xx.node;const QE=Mn(Xx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Wx.node;const Lu=Mn(Wx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Yx.node;const qx=Mn(Yx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};jx.node;const JE=Mn(jx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Zx.node;const $E=Mn(Zx);/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Kx.node;const Qx=Mn(Kx);class tb{constructor(){na(this,"ctx",null);na(this,"noiseSource",null);na(this,"masterGain",null);na(this,"filterLow",null);na(this,"filterHigh",null);na(this,"isPlaying",!1);na(this,"volume",.45)}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}createPinkNoiseBuffer(){if(!this.ctx)return null;const e=this.ctx.sampleRate*3,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);let l=0,f=0,d=0,h=0,p=0,m=0,S=0;for(let v=0;v<e;v++){const _=Math.random()*2-1;l=.99886*l+_*.0555179,f=.99332*f+_*.0750759,d=.969*d+_*.153852,h=.8665*h+_*.3104856,p=.55*p+_*.5329522,m=-.7616*m-_*.016898,s[v]=(l+f+d+h+p+m+S+_*.5362)*.14,S=_*.115926}return i}setVolume(e){if(this.volume=Math.max(0,Math.min(1,e)),this.ctx&&this.masterGain){const i=this.ctx.currentTime,s=this.isPlaying?Math.pow(this.volume,1.8)*.35:1e-4;this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,i),this.masterGain.gain.linearRampToValueAtTime(s,i+.05)}e>0&&!this.isPlaying?this.start():e===0&&this.isPlaying&&this.stop()}getVolume(){return this.volume}getStatus(){return this.isPlaying}toggle(){return this.isPlaying?(this.stop(),!1):(this.volume===0&&(this.volume=.45),this.start(),!0)}start(){if(this.init(),!this.ctx||this.isPlaying)return;const e=this.ctx.currentTime,i=this.createPinkNoiseBuffer();if(!i)return;this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=i,this.noiseSource.loop=!0,this.filterLow=this.ctx.createBiquadFilter(),this.filterLow.type="lowpass",this.filterLow.frequency.setValueAtTime(950,e),this.filterLow.Q.setValueAtTime(1.2,e),this.filterHigh=this.ctx.createBiquadFilter(),this.filterHigh.type="highpass",this.filterHigh.frequency.setValueAtTime(180,e),this.masterGain=this.ctx.createGain();const s=Math.pow(this.volume,1.8)*.35;this.masterGain.gain.setValueAtTime(.001,e),this.masterGain.gain.linearRampToValueAtTime(s,e+.6),this.noiseSource.connect(this.filterHigh),this.filterHigh.connect(this.filterLow),this.filterLow.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.noiseSource.start(e),this.isPlaying=!0}stop(){if(!this.ctx||!this.masterGain||!this.isPlaying)return;const e=this.ctx.currentTime;this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,e),this.masterGain.gain.linearRampToValueAtTime(1e-4,e+.4),setTimeout(()=>{var i,s,l,f,d;try{(i=this.noiseSource)==null||i.stop(),(s=this.noiseSource)==null||s.disconnect(),(l=this.filterLow)==null||l.disconnect(),(f=this.filterHigh)==null||f.disconnect(),(d=this.masterGain)==null||d.disconnect()}catch{}this.isPlaying=!1},450)}}const Zc=new tb;class eb{constructor(){na(this,"ctx",null);na(this,"soundEnabled",!0)}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.soundEnabled=e}playHover(){if(this.soundEnabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter(),l=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(1400,l),e.frequency.exponentialRampToValueAtTime(800,l+.04),s.type="highpass",s.frequency.setValueAtTime(600,l),i.gain.setValueAtTime(.015,l),i.gain.exponentialRampToValueAtTime(1e-4,l+.04),e.connect(s),s.connect(i),i.connect(this.ctx.destination),e.start(l),e.stop(l+.05)}catch{}}playClick(){if(this.soundEnabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(220,s),e.frequency.exponentialRampToValueAtTime(60,s+.08),i.gain.setValueAtTime(.05,s),i.gain.exponentialRampToValueAtTime(.001,s+.08),e.connect(i),i.connect(this.ctx.destination),e.start(s),e.stop(s+.09)}catch{}}playDossierOpen(){if(this.soundEnabled)try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[130.81,196,261.63].forEach(s=>{if(!this.ctx)return;const l=this.ctx.createOscillator(),f=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(s,e),f.gain.setValueAtTime(.03,e),f.gain.exponentialRampToValueAtTime(1e-4,e+1.2),l.connect(f),f.connect(this.ctx.destination),l.start(e),l.stop(e+1.3)})}catch{}}}const mi=new eb,nb=({children:o,activeTab:e,onSelectTab:i,currentCategory:s,onSelectCategory:l,pendingCount:f,isRainActive:d,onToggleRain:h,onOpenQuickPrompt:p})=>{const[m,S]=Re.useState(.4),[v,_]=Re.useState(!1);Re.useEffect(()=>{Zc.setVolume(m)},[m]);const E=x=>{const C=parseFloat(x.target.value);S(C),Zc.setVolume(C),C>0?_(!0):_(!1)},T=()=>{mi.playClick(),v?(Zc.stop(),_(!1)):(m===0&&S(.4),Zc.start(),_(!0))},D=x=>{mi.playClick(),i(x)},y=[{label:"ALL SPECIMENS",value:"ALL",code:"00"},{label:"OUTERWEAR",value:"OUTERWEAR",code:"01"},{label:"BOTTOMS",value:"BOTTOMS",code:"02"},{label:"TACTICAL / HARNESS",value:"LEATHER_TACTICAL",code:"03"},{label:"FOOTWEAR",value:"FOOTWEAR",code:"04"},{label:"RELICS",value:"RELICS",code:"05"}];return R.jsxs("div",{className:"relative min-h-screen bg-obsidian-950 text-steel-200 font-mono flex flex-col selection:bg-blood-700 selection:text-white",children:[R.jsxs("header",{className:"sticky top-0 z-40 bg-obsidian-950/95 backdrop-blur-md border-b border-white/10",children:[R.jsxs("div",{className:"border-b border-white/5 px-4 py-1.5 flex flex-wrap justify-between items-center text-[10px] text-neutral-400 gap-2",children:[R.jsxs("div",{className:"flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap",children:[R.jsxs("span",{className:"flex items-center text-blood-500 font-bold",children:[R.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blood-500 animate-ping mr-1.5"}),"SYS: CATACOMB VAULT"]}),R.jsx("span",{className:"text-white/20",children:"/"}),R.jsx("span",{className:"hidden sm:inline text-neutral-400",children:"FRAME_NW // 48.2082°N 16.3738°E"})]}),R.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[R.jsxs("div",{className:"flex items-center space-x-1",children:[R.jsx("span",{className:"text-neutral-500 hidden xs:inline",children:"VACANT:"}),R.jsxs("span",{className:"text-blood-400 font-bold bg-blood-950/60 border border-blood-800/40 px-1.5 py-0.5 text-[9px]",children:[f," SLOTS"]})]}),R.jsxs("button",{onClick:()=>{mi.playClick(),h()},title:"Toggle Blood Rain Visual Particles",className:`flex items-center space-x-1 px-2 py-0.5 border text-[9px] transition-colors ${d?"border-blood-600 bg-blood-950/80 text-blood-300":"border-white/10 bg-obsidian-900 text-neutral-400 hover:text-white"}`,children:[R.jsx(XE,{className:`w-3 h-3 ${d?"text-blood-500 animate-pulse":""}`}),R.jsxs("span",{children:["VISUAL RAIN: ",d?"ON":"OFF"]})]}),R.jsxs("div",{className:"flex items-center space-x-2 bg-obsidian-900/80 border border-white/10 px-2 py-0.5",children:[R.jsx("button",{onClick:T,className:"hover:text-white transition-colors",title:v?"Mute Rain Sound":"Play Rain Sound",children:v&&m>0?R.jsx(JE,{className:"w-3 h-3 text-blood-500 animate-pulse"}):R.jsx($E,{className:"w-3 h-3 text-neutral-500"})}),R.jsxs("div",{className:"flex items-center space-x-1.5",children:[R.jsx("span",{className:"text-[9px] text-neutral-400 hidden md:inline",children:"RAIN AUDIO:"}),R.jsx("input",{type:"range",min:"0",max:"1",step:"0.02",value:v?m:0,onChange:E,className:"w-16 sm:w-20 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blood-500",title:"Rain Volume Slider"}),R.jsx("span",{className:"text-[9px] text-neutral-300 w-7 text-right",children:v?`${Math.round(m*100)}%`:"0%"})]})]})]})]}),R.jsxs("div",{className:"px-4 lg:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsxs("div",{className:"w-12 h-12 sm:w-14 sm:h-14 border border-white/15 bg-black/80 flex items-center justify-center p-1 relative shadow-[0_0_15px_rgba(220,38,38,0.25)] group",children:[R.jsx("img",{src:"./media/winged-sword.png",alt:"Blutiges Schwert Crest",className:"w-full h-full object-contain filter contrast-125 brightness-110 group-hover:scale-110 transition-transform duration-300"}),R.jsx("div",{className:"absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blood-500"}),R.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blood-500"})]}),R.jsxs("div",{children:[R.jsx("div",{className:"text-[9px] tracking-ultra text-blood-500 uppercase font-bold",children:"HIGH UTILITARIAN ATELIER // EST. MMXXVI"}),R.jsx("h1",{className:"font-gothic text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white drop-shadow-[0_4px_16px_rgba(220,38,38,0.35)] leading-none",children:"Blutiges Schwert"})]})]}),R.jsxs("div",{className:"flex items-center space-x-1.5 text-xs overflow-x-auto scrollbar-none",children:[R.jsxs("button",{onClick:()=>D("MATRIX"),className:`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${e==="MATRIX"?"bg-steel-100 text-obsidian-950 font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.2)]":"bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white"}`,children:[R.jsx(YE,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"CATALOGUE MATRIX"})]}),R.jsxs("button",{onClick:()=>D("3D_VAULT"),className:`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${e==="3D_VAULT"?"bg-blood-700 text-white font-bold border-blood-400 shadow-[0_0_15px_rgba(220,38,38,0.5)]":"bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white"}`,children:[R.jsx(Wp,{className:"w-3.5 h-3.5 text-blood-400 animate-pulse"}),R.jsx("span",{children:"3D BLADE VAULT"})]}),R.jsxs("button",{onClick:()=>D("MANIFESTO"),className:`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${e==="MANIFESTO"?"bg-steel-100 text-obsidian-950 font-bold border-white":"bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white"}`,children:[R.jsx(qx,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"MANIFESTO"})]})]})]}),e==="MATRIX"&&R.jsxs("div",{className:"px-4 lg:px-8 py-2 bg-obsidian-900/60 overflow-x-auto scrollbar-none flex items-center space-x-2 text-xs",children:[R.jsxs("span",{className:"text-[10px] text-neutral-400 mr-1 flex items-center",children:[R.jsx(KE,{className:"w-3 h-3 mr-1 text-neutral-400"}),"FILTER:"]}),y.map(x=>{const C=s===x.value;return R.jsxs("button",{onClick:()=>{mi.playClick(),l(x.value)},className:`px-2.5 py-0.5 whitespace-nowrap border text-[11px] transition-all ${C?"bg-blood-900/80 text-white border-blood-500 font-bold":"bg-obsidian-950 text-neutral-400 border-white/5 hover:text-white hover:border-white/20"}`,children:[R.jsxs("span",{className:"text-[9px] mr-1 opacity-60",children:["[",x.code,"]"]}),x.label]},x.value)})]})]}),R.jsxs("div",{className:"flex-grow flex flex-col md:flex-row relative",children:[R.jsxs("aside",{className:"w-full md:w-16 md:min-w-[4rem] border-r border-b md:border-b-0 border-white/10 bg-obsidian-950 flex md:flex-col justify-between items-center p-3 text-[10px] text-neutral-400 select-none z-30",children:[R.jsxs("div",{className:"hidden md:flex flex-col items-center space-y-6 pt-4",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-blood-500 animate-pulse"}),R.jsx("div",{className:"[writing-mode:vertical-rl] rotate-180 tracking-widest text-[9px] uppercase text-neutral-400",children:"BLUTIGES SCHWERT // CATACOMB"})]}),R.jsx("div",{className:"flex md:flex-col gap-1.5 overflow-x-auto py-1",children:["00","01","02","03","04","05","06","07"].map(x=>R.jsx("span",{className:`w-6 h-6 flex items-center justify-center border text-[9px] font-bold ${x==="00"||x==="01"?"border-emerald-700/80 bg-emerald-950/40 text-emerald-400":"border-blood-800/80 bg-blood-950/40 text-blood-400"}`,title:x==="00"?"Origin Specimen":x==="01"?"Archived Specimen 01":`Vacant Slot ${x}`,children:x},x))}),R.jsxs("div",{className:"hidden md:flex flex-col items-center space-y-2 pb-4 text-neutral-400",children:[R.jsx(Ux,{className:"w-4 h-4 text-blood-500"}),R.jsx("span",{className:"text-[8px] tracking-widest",children:"N.07"})]})]}),R.jsx("main",{className:"flex-grow overflow-x-hidden relative",children:o})]}),R.jsx("div",{className:"fixed bottom-10 right-4 z-40",children:R.jsxs("button",{onClick:()=>{mi.playDossierOpen(),p()},className:"group flex items-center space-x-2 bg-blood-700 hover:bg-blood-600 text-white border border-blood-400 px-4 py-2.5 shadow-[0_0_20px_rgba(220,38,38,0.6)] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105",children:[R.jsx(Lu,{className:"w-4 h-4 text-white animate-spin"}),R.jsx("span",{children:"НАПОЛНИТЬ ЯЧЕЙКУ ИДЕЕЙ"}),R.jsx("span",{className:"bg-black/60 px-1.5 py-0.5 text-[10px] text-blood-300 border border-white/10",children:f})]})}),R.jsxs("footer",{className:"border-t border-white/10 bg-obsidian-950 px-4 py-3 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 z-30 gap-2",children:[R.jsxs("div",{className:"flex items-center space-x-4",children:[R.jsx("span",{className:"text-white font-bold",children:"BLUTIGES SCHWERT ATELIER"}),R.jsx("span",{className:"text-white/20",children:"|"}),R.jsx("span",{className:"text-blood-400",children:"HELMUT LANG DISCIPLINE × ARCHIVE-CORE"}),R.jsx("span",{className:"hidden lg:inline text-white/20",children:"|"}),R.jsx("span",{className:"hidden lg:inline text-neutral-400",children:"WEB AUDIO RAIN ENGINE // THREE.JS 3D"})]}),R.jsxs("div",{className:"flex items-center space-x-3 text-neutral-400",children:[R.jsx("span",{children:"GITHUB PAGES VERIFIED"}),R.jsx("span",{children:"© 2026 PURPLE DIE 1"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="186",ib=0,Cv=1,ab=2,yu=1,sb=2,gl=3,Js=0,ti=1,La=2,Ia=0,xl=1,Jh=2,Nv=3,Dv=4,rb=5,no=100,ob=101,lb=102,cb=103,ub=104,fb=200,db=201,hb=202,pb=203,Jx=204,$x=205,mb=206,gb=207,_b=208,vb=209,xb=210,Sb=211,yb=212,Mb=213,Eb=214,$h=0,tp=1,ep=2,Sl=3,np=4,ip=5,ap=6,sp=7,tS=0,bb=1,Tb=2,la=0,eS=1,nS=2,iS=3,qp=4,aS=5,sS=6,rS=7,oS=300,$s=301,oo=302,vh=303,xh=304,Ou=306,rp=1e3,Oa=1001,op=1002,In=1003,Ab=1004,Kc=1005,Hn=1006,Sh=1007,Ks=1008,gi=1009,lS=1010,cS=1011,yl=1012,jp=1013,ua=1014,ra=1015,fa=1016,Zp=1017,Kp=1018,Ml=1020,uS=35902,fS=35899,dS=1021,hS=1022,Hi=1023,Ba=1026,Qs=1027,pS=1028,Qp=1029,tr=1030,Jp=1031,$p=1033,Mu=33776,Eu=33777,bu=33778,Tu=33779,lp=35840,cp=35841,up=35842,fp=35843,dp=36196,hp=37492,pp=37496,mp=37488,gp=37489,Ru=37490,_p=37491,vp=37808,xp=37809,Sp=37810,yp=37811,Mp=37812,Ep=37813,bp=37814,Tp=37815,Ap=37816,Rp=37817,wp=37818,Cp=37819,Np=37820,Dp=37821,Up=36492,Lp=36494,Op=36495,Ip=36283,Pp=36284,wu=36285,Bp=36286,Rb=3200,zp=0,wb=1,vs="",Ci="srgb",Cu="srgb-linear",Nu="linear",qe="srgb",yh=7680,Cb=519,Nb=512,Db=513,Ub=514,tm=515,Lb=516,Ob=517,em=518,Ib=519,Pb=35044,Uv="300 es",oa=2e3,El=2001;function Bb(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Du(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zb(){const o=Du("canvas");return o.style.display="block",o}const Lv={};function Ov(...o){const e="THREE."+o.shift();console.log(e,...o)}function mS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function re(...o){o=mS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Fe(...o){o=mS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function ao(...o){const e=o.join(" ");e in Lv||(Lv[e]=!0,re(...o))}function Fb(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const Hb={[$h]:tp,[ep]:ap,[np]:sp,[Sl]:ip,[tp]:$h,[ap]:ep,[sp]:np,[ip]:Sl};class er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,Fp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Oe(o,e,i){return Math.max(e,Math.min(i,o))}function Gb(o,e){return(o%e+e)%e}function Eh(o,e,i){return(1-i)*o+i*e}function cl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fm=class fm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Oe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*l+e.x,this.y=f*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fm.prototype.isVector2=!0;let Me=fm;class co{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,d,h){let p=s[l+0],m=s[l+1],S=s[l+2],v=s[l+3],_=f[d+0],E=f[d+1],T=f[d+2],D=f[d+3];if(v!==D||p!==_||m!==E||S!==T){let y=p*_+m*E+S*T+v*D;y<0&&(_=-_,E=-E,T=-T,D=-D,y=-y);let x=1-h;if(y<.9995){const C=Math.acos(y),F=Math.sin(C);x=Math.sin(x*C)/F,h=Math.sin(h*C)/F,p=p*x+_*h,m=m*x+E*h,S=S*x+T*h,v=v*x+D*h}else{p=p*x+_*h,m=m*x+E*h,S=S*x+T*h,v=v*x+D*h;const C=1/Math.sqrt(p*p+m*m+S*S+v*v);p*=C,m*=C,S*=C,v*=C}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,f,d){const h=s[l],p=s[l+1],m=s[l+2],S=s[l+3],v=f[d],_=f[d+1],E=f[d+2],T=f[d+3];return e[i]=h*T+S*v+p*E-m*_,e[i+1]=p*T+S*_+m*v-h*E,e[i+2]=m*T+S*E+h*_-p*v,e[i+3]=S*T-h*v-p*_-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),S=h(l/2),v=h(f/2),_=p(s/2),E=p(l/2),T=p(f/2);switch(d){case"XYZ":this._x=_*S*v+m*E*T,this._y=m*E*v-_*S*T,this._z=m*S*T+_*E*v,this._w=m*S*v-_*E*T;break;case"YXZ":this._x=_*S*v+m*E*T,this._y=m*E*v-_*S*T,this._z=m*S*T-_*E*v,this._w=m*S*v+_*E*T;break;case"ZXY":this._x=_*S*v-m*E*T,this._y=m*E*v+_*S*T,this._z=m*S*T+_*E*v,this._w=m*S*v-_*E*T;break;case"ZYX":this._x=_*S*v-m*E*T,this._y=m*E*v+_*S*T,this._z=m*S*T-_*E*v,this._w=m*S*v+_*E*T;break;case"YZX":this._x=_*S*v+m*E*T,this._y=m*E*v+_*S*T,this._z=m*S*T-_*E*v,this._w=m*S*v-_*E*T;break;case"XZY":this._x=_*S*v-m*E*T,this._y=m*E*v-_*S*T,this._z=m*S*T+_*E*v,this._w=m*S*v+_*E*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],v=i[10],_=s+h+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(S-p)*E,this._y=(f-m)*E,this._z=(d-l)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(S-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(f+m)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(f-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+S)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-l)/E,this._x=(f+m)/E,this._y=(p+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+l*m-f*p,this._y=l*S+d*p+f*h-s*m,this._z=f*S+d*m+s*p-l*h,this._w=d*S-s*h-l*p-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dm=class dm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Iv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Iv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),S=2*(h*i-f*l),v=2*(f*s-d*i);return this.x=i+p*m+d*v-h*S,this.y=s+p*S+h*m-f*v,this.z=l+p*v+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this.z=Oe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this.z=Oe(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-f*h,this.y=f*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Oe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dm.prototype.isVector3=!0;let st=dm;const bh=new st,Iv=new co,hm=class hm{constructor(e,i,s,l,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,m)}set(e,i,s,l,f,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=f,S[5]=p,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],S=s[4],v=s[7],_=s[2],E=s[5],T=s[8],D=l[0],y=l[3],x=l[6],C=l[1],F=l[4],N=l[7],O=l[2],L=l[5],I=l[8];return f[0]=d*D+h*C+p*O,f[3]=d*y+h*F+p*L,f[6]=d*x+h*N+p*I,f[1]=m*D+S*C+v*O,f[4]=m*y+S*F+v*L,f[7]=m*x+S*N+v*I,f[2]=_*D+E*C+T*O,f[5]=_*y+E*F+T*L,f[8]=_*x+E*N+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*p+l*f*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],v=S*d-h*m,_=h*p-S*f,E=m*f-d*p,T=i*v+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(l*m-S*s)*D,e[2]=(h*s-l*d)*D,e[3]=_*D,e[4]=(S*i-l*p)*D,e[5]=(l*f-h*i)*D,e[6]=E*D,e[7]=(s*p-m*i)*D,e[8]=(d*i-s*f)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,i)),this}rotate(e){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,i){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hm.prototype.isMatrix3=!0;let de=hm;const Th=new de,Pv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vb(){const o={enabled:!0,workingColorSpace:Cu,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(l.r=so(l.r),l.g=so(l.g),l.b=so(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Cu]:{primaries:e,whitePoint:s,transfer:Nu,toXYZ:Pv,fromXYZ:Bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Pv,fromXYZ:Bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),o}const Le=Vb();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function so(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let kr;class kb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{kr===void 0&&(kr=Du("canvas")),kr.width=e.width,kr.height=e.height;const l=kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=kr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Du("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Pa(f[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xb=0;class nm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Ah(l[d].image)):f.push(Ah(l[d]))}else f=Ah(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function Ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let Wb=0;const Rh=new st;class qn extends er{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Oa,l=Oa,f=Hn,d=Ks,h=Hi,p=gi,m=qn.DEFAULT_ANISOTROPY,S=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Tl(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rp:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rp:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=oS;qn.DEFAULT_ANISOTROPY=1;const pm=class pm{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,m=p[0],S=p[4],v=p[8],_=p[1],E=p[5],T=p[9],D=p[2],y=p[6],x=p[10];if(Math.abs(S-_)<.01&&Math.abs(v-D)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+D)<.1&&Math.abs(T+y)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(m+1)/2,N=(E+1)/2,O=(x+1)/2,L=(S+_)/4,I=(v+D)/4,M=(T+y)/4;return F>N&&F>O?F<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(F),l=L/s,f=I/s):N>O?N<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(N),s=L/l,f=M/l):O<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(O),s=I/f,l=M/f),this.set(s,l,f,i),this}let C=Math.sqrt((y-T)*(y-T)+(v-D)*(v-D)+(_-S)*(_-S));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-D)/C,this.z=(_-S)/C,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Oe(this.x,e.x,i.x),this.y=Oe(this.y,e.y,i.y),this.z=Oe(this.z,e.z,i.z),this.w=Oe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Oe(this.x,e,i),this.y=Oe(this.y,e,i),this.z=Oe(this.z,e,i),this.w=Oe(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Oe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pm.prototype.isVector4=!0;let rn=pm;class Yb extends er{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},f=new qn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new nm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Yb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class gS extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qb extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Uu=class Uu{constructor(e,i,s,l,f,d,h,p,m,S,v,_,E,T,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,m,S,v,_,E,T,D,y)}set(e,i,s,l,f,d,h,p,m,S,v,_,E,T,D,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=v,x[14]=_,x[3]=E,x[7]=T,x[11]=D,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Xr.setFromMatrixColumn(e,0).length(),f=1/Xr.setFromMatrixColumn(e,1).length(),d=1/Xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),S=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*S,E=d*v,T=h*S,D=h*v;i[0]=p*S,i[4]=-p*v,i[8]=m,i[1]=E+T*m,i[5]=_-D*m,i[9]=-h*p,i[2]=D-_*m,i[6]=T+E*m,i[10]=d*p}else if(e.order==="YXZ"){const _=p*S,E=p*v,T=m*S,D=m*v;i[0]=_+D*h,i[4]=T*h-E,i[8]=d*m,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=E*h-T,i[6]=D+_*h,i[10]=d*p}else if(e.order==="ZXY"){const _=p*S,E=p*v,T=m*S,D=m*v;i[0]=_-D*h,i[4]=-d*v,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*S,i[9]=D-_*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const _=d*S,E=d*v,T=h*S,D=h*v;i[0]=p*S,i[4]=T*m-E,i[8]=_*m+D,i[1]=p*v,i[5]=D*m+_,i[9]=E*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const _=d*p,E=d*m,T=h*p,D=h*m;i[0]=p*S,i[4]=D-_*v,i[8]=T*v+E,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=E*v+T,i[10]=_-D*v}else if(e.order==="XZY"){const _=d*p,E=d*m,T=h*p,D=h*m;i[0]=p*S,i[4]=-v,i[8]=m*S,i[1]=_*v+D,i[5]=d*S,i[9]=E*v-T,i[2]=T*v-E,i[6]=h*S,i[10]=D*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jb,e,Zb)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),ds.crossVectors(s,di),ds.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ds.crossVectors(s,di)),ds.normalize(),Qc.crossVectors(di,ds),l[0]=ds.x,l[4]=Qc.x,l[8]=di.x,l[1]=ds.y,l[5]=Qc.y,l[9]=di.y,l[2]=ds.z,l[6]=Qc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],S=s[1],v=s[5],_=s[9],E=s[13],T=s[2],D=s[6],y=s[10],x=s[14],C=s[3],F=s[7],N=s[11],O=s[15],L=l[0],I=l[4],M=l[8],U=l[12],z=l[1],k=l[5],q=l[9],at=l[13],j=l[2],tt=l[6],W=l[10],Z=l[14],ht=l[3],ut=l[7],mt=l[11],Et=l[15];return f[0]=d*L+h*z+p*j+m*ht,f[4]=d*I+h*k+p*tt+m*ut,f[8]=d*M+h*q+p*W+m*mt,f[12]=d*U+h*at+p*Z+m*Et,f[1]=S*L+v*z+_*j+E*ht,f[5]=S*I+v*k+_*tt+E*ut,f[9]=S*M+v*q+_*W+E*mt,f[13]=S*U+v*at+_*Z+E*Et,f[2]=T*L+D*z+y*j+x*ht,f[6]=T*I+D*k+y*tt+x*ut,f[10]=T*M+D*q+y*W+x*mt,f[14]=T*U+D*at+y*Z+x*Et,f[3]=C*L+F*z+N*j+O*ht,f[7]=C*I+F*k+N*tt+O*ut,f[11]=C*M+F*q+N*W+O*mt,f[15]=C*U+F*at+N*Z+O*Et,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],v=e[6],_=e[10],E=e[14],T=e[3],D=e[7],y=e[11],x=e[15],C=p*E-m*_,F=h*E-m*v,N=h*_-p*v,O=d*E-m*S,L=d*_-p*S,I=d*v-h*S;return i*(D*C-y*F+x*N)-s*(T*C-y*O+x*L)+l*(T*F-D*O+x*I)-f*(T*N-D*L+y*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*p)+l*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],v=e[9],_=e[10],E=e[11],T=e[12],D=e[13],y=e[14],x=e[15],C=i*h-s*d,F=i*p-l*d,N=i*m-f*d,O=s*p-l*h,L=s*m-f*h,I=l*m-f*p,M=S*D-v*T,U=S*y-_*T,z=S*x-E*T,k=v*y-_*D,q=v*x-E*D,at=_*x-E*y,j=C*at-F*q+N*k+O*z-L*U+I*M;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/j;return e[0]=(h*at-p*q+m*k)*tt,e[1]=(l*q-s*at-f*k)*tt,e[2]=(D*I-y*L+x*O)*tt,e[3]=(_*L-v*I-E*O)*tt,e[4]=(p*z-d*at-m*U)*tt,e[5]=(i*at-l*z+f*U)*tt,e[6]=(y*N-T*I-x*F)*tt,e[7]=(S*I-_*N+E*F)*tt,e[8]=(d*q-h*z+m*M)*tt,e[9]=(s*z-i*q-f*M)*tt,e[10]=(T*L-D*N+x*C)*tt,e[11]=(v*N-S*L-E*C)*tt,e[12]=(h*U-d*k-p*M)*tt,e[13]=(i*k-s*U+l*M)*tt,e[14]=(D*F-T*O-y*C)*tt,e[15]=(S*O-v*F+_*C)*tt,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+s,S*p-l*d,0,m*p-l*h,S*p+l*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,d){return this.set(1,s,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,S=d+d,v=h+h,_=f*m,E=f*S,T=f*v,D=d*S,y=d*v,x=h*v,C=p*m,F=p*S,N=p*v,O=s.x,L=s.y,I=s.z;return l[0]=(1-(D+x))*O,l[1]=(E+N)*O,l[2]=(T-F)*O,l[3]=0,l[4]=(E-N)*L,l[5]=(1-(_+x))*L,l[6]=(y+C)*L,l[7]=0,l[8]=(T+F)*I,l[9]=(y-C)*I,l[10]=(1-(_+D))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Xr.set(l[0],l[1],l[2]).length();const h=Xr.set(l[4],l[5],l[6]).length(),p=Xr.set(l[8],l[9],l[10]).length();f<0&&(d=-d),Pi.copy(this);const m=1/d,S=1/h,v=1/p;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,i.setFromRotationMatrix(Pi),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,l,f,d,h=oa,p=!1){const m=this.elements,S=2*f/(i-e),v=2*f/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let T,D;if(p)T=f/(d-f),D=d*f/(d-f);else if(h===oa)T=-(d+f)/(d-f),D=-2*d*f/(d-f);else if(h===El)T=-d/(d-f),D=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=D,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,f,d,h=oa,p=!1){const m=this.elements,S=2/(i-e),v=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,D;if(p)T=1/(d-f),D=d/(d-f);else if(h===oa)T=-2/(d-f),D=-(d+f)/(d-f);else if(h===El)T=-1/(d-f),D=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=T,m[14]=D,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Uu.prototype.isMatrix4=!0;let on=Uu;const Xr=new st,Pi=new on,jb=new st(0,0,0),Zb=new st(1,1,1),ds=new st,Qc=new st,di=new st,zv=new on,Fv=new co;class Ss{constructor(e=0,i=0,s=0,l=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],v=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Oe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class _S{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kb=0;const Hv=new st,Wr=new co,wa=new on,Jc=new st,ul=new st,Qb=new st,Jb=new co,Gv=new st(1,0,0),Vv=new st(0,1,0),kv=new st(0,0,1),Xv={type:"added"},$b={type:"removed"},Yr={type:"childadded",child:null},wh={type:"childremoved",child:null};class Pn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new st,i=new Ss,s=new co,l=new st(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new de}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _S,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Gv,e)}rotateY(e){return this.rotateOnAxis(Vv,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,i){return Hv.copy(e).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gv,e)}translateY(e){return this.translateOnAxis(Vv,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Jc.copy(e):Jc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(ul,Jc,this.up):wa.lookAt(Jc,ul,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),Wr.setFromRotationMatrix(wa),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent($b),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,Qb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,Jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*l,f[13]+=s-f[1]*i-f[5]*s-f[9]*l,f[14]+=l-f[2]*i-f[6]*s-f[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const v=p[m];f(e.shapes,v)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),v=d(e.shapes),_=d(e.skeletons),E=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new st(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _l extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,s),x=this._getHandJoint(m,D);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=S.position.distanceTo(v.position),E=.02,T=.005;m.inputState.pinching&&_>E+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=E-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new _l;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},$c={h:0,s:0,l:0};function Nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=Gb(e,1),i=Oe(i,0,1),s=Oe(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Nh(d,f,e+1/3),this.g=Nh(d,f,e),this.b=Nh(d,f,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=Ci){function s(f){f!==void 0&&parseFloat(f)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ci){const s=vS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Le.workingToColorSpace(Fn.copy(this),e),Math.round(Oe(Fn.r*255,0,255))*65536+Math.round(Oe(Fn.g*255,0,255))*256+Math.round(Oe(Fn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,f=Fn.b,d=Math.max(s,l,f),h=Math.min(s,l,f);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=S<=.5?v/(d+h):v/(2-d-h),d){case s:p=(l-f)/v+(l<f?6:0);break;case l:p=(f-s)/v+2;break;case f:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ci){Le.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==Ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL($c);const s=Eh(hs.h,$c.h,i),l=Eh(hs.s,$c.s,i),f=Eh(hs.l,$c.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ie;Ie.NAMES=vS;class im{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=i}clone(){return new im(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class e1 extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new st,Ca=new st,Dh=new st,Na=new st,qr=new st,jr=new st,Wv=new st,Uh=new st,Lh=new st,Oh=new st,Ih=new rn,Ph=new rn,Bh=new rn;class Fi{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Bi.subVectors(e,i),l.cross(Bi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Bi.subVectors(l,i),Ca.subVectors(s,i),Dh.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Ca),p=Bi.dot(Dh),m=Ca.dot(Ca),S=Ca.dot(Dh),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,E=(m*p-h*S)*_,T=(d*S-h*p)*_;return f.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(e,i,s,l,f,d,h,p){return this.getBarycoord(e,i,s,l,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Na.x),p.addScaledVector(d,Na.y),p.addScaledVector(h,Na.z),p)}static getInterpolatedAttribute(e,i,s,l,f,d){return Ih.setScalar(0),Ph.setScalar(0),Bh.setScalar(0),Ih.fromBufferAttribute(e,i),Ph.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ih,f.x),d.addScaledVector(Ph,f.y),d.addScaledVector(Bh,f.z),d}static isFrontFacing(e,i,s,l){return Bi.subVectors(s,i),Ca.subVectors(e,i),Bi.cross(Ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Bi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Fi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Fi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let d,h;qr.subVectors(l,s),jr.subVectors(f,s),Uh.subVectors(e,s);const p=qr.dot(Uh),m=jr.dot(Uh);if(p<=0&&m<=0)return i.copy(s);Lh.subVectors(e,l);const S=qr.dot(Lh),v=jr.dot(Lh);if(S>=0&&v<=S)return i.copy(l);const _=p*v-S*m;if(_<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(s).addScaledVector(qr,d);Oh.subVectors(e,f);const E=qr.dot(Oh),T=jr.dot(Oh);if(T>=0&&E<=T)return i.copy(f);const D=E*m-p*T;if(D<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(s).addScaledVector(jr,h);const y=S*T-E*v;if(y<=0&&v-S>=0&&E-T>=0)return Wv.subVectors(f,l),h=(v-S)/(v-S+(E-T)),i.copy(l).addScaledVector(Wv,h);const x=1/(y+D+_);return d=D*x,h=_*x,i.copy(s).addScaledVector(qr,d).addScaledVector(jr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Al{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(f,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tu.copy(s.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),eu.subVectors(this.max,fl),Zr.subVectors(e.a,fl),Kr.subVectors(e.b,fl),Qr.subVectors(e.c,fl),ps.subVectors(Kr,Zr),ms.subVectors(Qr,Kr),Ws.subVectors(Zr,Qr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Ws.z,Ws.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Ws.z,0,-Ws.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Ws.y,Ws.x,0];return!zh(i,Zr,Kr,Qr,eu)||(i=[1,0,0,0,1,0,0,0,1],!zh(i,Zr,Kr,Qr,eu))?!1:(nu.crossVectors(ps,ms),i=[nu.x,nu.y,nu.z],zh(i,Zr,Kr,Qr,eu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new st,new st,new st,new st,new st,new st,new st,new st],zi=new st,tu=new Al,Zr=new st,Kr=new st,Qr=new st,ps=new st,ms=new st,Ws=new st,fl=new st,eu=new st,nu=new st,Ys=new st;function zh(o,e,i,s,l){for(let f=0,d=o.length-3;f<=d;f+=3){Ys.fromArray(o,f);const h=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),p=e.dot(Ys),m=i.dot(Ys),S=s.dot(Ys);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const _n=new st,iu=new Me;let n1=0;class ca extends er{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Pb,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)iu.fromBufferAttribute(this,i),iu.applyMatrix3(e),this.setXY(i,iu.x,iu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=cl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=cl(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=cl(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=cl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=cl(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),f=$n(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xS extends ca{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class SS extends ca{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wn extends ca{constructor(e,i,s){super(new Float32Array(e),i,s)}}const i1=new Al,dl=new st,Fh=new st;class Iu{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):i1.setFromPoints(e).getCenter(s);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const i=dl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(dl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(Fh)),this.expandByPoint(dl.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let a1=0;const wi=new on,Hh=new Pn,Jr=new st,hi=new Al,hl=new Al,An=new st;class ei extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bb(e)?SS:xS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new wn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(hi.min,hl.min),hi.expandByPoint(An),An.addVectors(hi.max,hl.max),hi.expandByPoint(An)):(hi.expandByPoint(hl.min),hi.expandByPoint(hl.max))}hi.getCenter(s);let l=0;for(let f=0,d=e.count;f<d;f++)An.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(Jr.fromBufferAttribute(e,m),An.add(Jr)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new ca(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let M=0;M<s.count;M++)h[M]=new st,p[M]=new st;const m=new st,S=new st,v=new st,_=new Me,E=new Me,T=new Me,D=new st,y=new st;function x(M,U,z){m.fromBufferAttribute(s,M),S.fromBufferAttribute(s,U),v.fromBufferAttribute(s,z),_.fromBufferAttribute(f,M),E.fromBufferAttribute(f,U),T.fromBufferAttribute(f,z),S.sub(m),v.sub(m),E.sub(_),T.sub(_);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(D.copy(S).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(k),y.copy(v).multiplyScalar(E.x).addScaledVector(S,-T.x).multiplyScalar(k),h[M].add(D),h[U].add(D),h[z].add(D),p[M].add(y),p[U].add(y),p[z].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let M=0,U=C.length;M<U;++M){const z=C[M],k=z.start,q=z.count;for(let at=k,j=k+q;at<j;at+=3)x(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const F=new st,N=new st,O=new st,L=new st;function I(M){O.fromBufferAttribute(l,M),L.copy(O);const U=h[M];F.copy(U),F.sub(O.multiplyScalar(O.dot(U))).normalize(),N.crossVectors(L,U);const k=N.dot(p[M])<0?-1:1;d.setXYZW(M,F.x,F.y,F.z,k)}for(let M=0,U=C.length;M<U;++M){const z=C[M],k=z.start,q=z.count;for(let at=k,j=k+q;at<j;at+=3)I(e.getX(at+0)),I(e.getX(at+1)),I(e.getX(at+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ca(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new st,f=new st,d=new st,h=new st,p=new st,m=new st,S=new st,v=new st;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),D=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),S.subVectors(d,f),v.subVectors(l,f),S.cross(v),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,D),m.fromBufferAttribute(s,y),h.add(S),p.add(S),m.add(S),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(D,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(l,f),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,v=h.normalized,_=new m.constructor(p.length*S);let E=0,T=0;for(let D=0,y=p.length;D<y;D++){h.isInterleavedBufferAttribute?E=p[D]*h.data.stride+h.offset:E=p[D]*S;for(let x=0;x<S;x++)_[T++]=m[E++]}return new ca(_,S,v)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ei,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let S=0,v=m.length;S<v;S++){const _=m[S],E=e(_,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let v=0,_=m.length;v<_;v++){const E=m[v];S.push(E.toJSON(e.data))}S.length>0&&(l[p]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],v=f[m];for(let _=0,E=v.length;_<E;_++)S.push(v[_].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new st,s1=new st,r1=new de;class _s{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Gh.subVectors(s,i).cross(s1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Gh),f=this.normal.dot(l);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||r1.getNormalMatrix(e),l=this.coplanarPoint(Gh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let o1=0;class uo extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=xl,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jx,this.blendDst=$x,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new _s().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Me().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new st,Vh=new st,au=new st,su=new st;class yS{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Vh.copy(e).add(i).multiplyScalar(.5),au.copy(i).sub(e).normalize(),su.copy(this.origin).sub(Vh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(au),h=su.dot(this.direction),p=-su.dot(au),m=su.lengthSq(),S=Math.abs(1-d*d);let v,_,E,T;if(S>0)if(v=d*p-h,_=d*h-p,T=f*S,v>=0)if(_>=-T)if(_<=T){const D=1/S;v*=D,_*=D,E=v*(v+d*_+2*h)+_*(d*v+_+2*p)+m}else _=f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*p)+m;else _=-f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*p)+m;else _<=-T?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-p),f),E=-v*v+_*(_+2*p)+m):_<=T?(v=0,_=Math.min(Math.max(-f,-p),f),E=_*(_+2*p)+m):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-p),f),E=-v*v+_*(_+2*p)+m);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),E=-v*v+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vh).addScaledVector(au,_),E}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const s=Ua.dot(this.direction),l=Ua.dot(Ua)-s*s,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,l=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,l=(e.min.x-_.x)*m),S>=0?(f=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(f=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||f>l||((f>s||isNaN(s))&&(s=f),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,s,l,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,v=e.x-d.x,_=e.y-d.y,E=e.z-d.z,T=i.x-d.x,D=i.y-d.y,y=i.z-d.z,x=s.x-d.x,C=s.y-d.y,F=s.z-d.z,N=Math.abs(p),O=Math.abs(m),L=Math.abs(S);let I,M,U,z,k,q,at,j,tt,W,Z,ht;if(N>=O&&N>=L?(U=p,q=v,tt=T,ht=x,p>=0?(I=m,M=S,z=_,k=E,at=D,j=y,W=C,Z=F):(I=S,M=m,z=E,k=_,at=y,j=D,W=F,Z=C)):O>=L?(U=m,q=_,tt=D,ht=C,m>=0?(I=S,M=p,z=E,k=v,at=y,j=T,W=F,Z=x):(I=p,M=S,z=v,k=E,at=T,j=y,W=x,Z=F)):(U=S,q=E,tt=y,ht=F,S>=0?(I=p,M=m,z=v,k=_,at=T,j=D,W=x,Z=C):(I=m,M=p,z=_,k=v,at=D,j=T,W=C,Z=x)),U===0)return null;const ut=I/U,mt=M/U,Et=1/U,Zt=z-ut*q,qt=k-mt*q,H=at-ut*tt,_t=j-mt*tt,wt=W-ut*ht,Q=Z-mt*ht,pt=wt*_t-Q*H,At=Zt*Q-qt*wt,It=H*qt-_t*Zt;if(l){if(pt<0||At<0||It<0)return null}else if((pt<0||At<0||It<0)&&(pt>0||At>0||It>0))return null;const vt=pt+At+It;if(vt===0)return null;const Ct=Et*(pt*q+At*tt+It*ht);return(vt>0?Ct<0:Ct>0)?null:this.at(Ct/vt,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class MS extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=tS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yv=new on,qs=new yS,ru=new Iu,qv=new st,ou=new st,lu=new st,cu=new st,kh=new st,uu=new st,jv=new st,fu=new st;class Rn extends Pn{constructor(e=new ei,i=new MS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){uu.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const S=h[p],v=f[p];S!==0&&(kh.fromBufferAttribute(v,e),d?uu.addScaledVector(kh,S):uu.addScaledVector(kh.sub(i),S))}i.add(uu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(f),qs.copy(e.ray).recast(e.near),!(ru.containsPoint(qs.origin)===!1&&(qs.intersectSphere(ru,qv)===null||qs.origin.distanceToSquared(qv)>(e.far-e.near)**2))&&(Yv.copy(f).invert(),qs.copy(e.ray).applyMatrix4(Yv),!(s.boundingBox!==null&&qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,qs)))}_computeIntersections(e,i,s){let l;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,D=_.length;T<D;T++){const y=_[T],x=d[y.materialIndex],C=Math.max(y.start,E.start),F=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let N=C,O=F;N<O;N+=3){const L=h.getX(N),I=h.getX(N+1),M=h.getX(N+2);l=du(this,x,e,s,m,S,v,L,I,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(h.count,E.start+E.count);for(let y=T,x=D;y<x;y+=3){const C=h.getX(y),F=h.getX(y+1),N=h.getX(y+2);l=du(this,d,e,s,m,S,v,C,F,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,D=_.length;T<D;T++){const y=_[T],x=d[y.materialIndex],C=Math.max(y.start,E.start),F=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let N=C,O=F;N<O;N+=3){const L=N,I=N+1,M=N+2;l=du(this,x,e,s,m,S,v,L,I,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let y=T,x=D;y<x;y+=3){const C=y,F=y+1,N=y+2;l=du(this,d,e,s,m,S,v,C,F,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function l1(o,e,i,s,l,f,d,h){let p;if(e.side===ti?p=s.intersectTriangle(d,f,l,!0,h):p=s.intersectTriangle(l,f,d,e.side===Js,h),p===null)return null;fu.copy(h),fu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(fu);return m<i.near||m>i.far?null:{distance:m,point:fu.clone(),object:o}}function du(o,e,i,s,l,f,d,h,p,m){o.getVertexPosition(h,ou),o.getVertexPosition(p,lu),o.getVertexPosition(m,cu);const S=l1(o,e,i,s,ou,lu,cu,jv);if(S){const v=new st;Fi.getBarycoord(jv,ou,lu,cu,v),l&&(S.uv=Fi.getInterpolatedAttribute(l,h,p,m,v,new Me)),f&&(S.uv1=Fi.getInterpolatedAttribute(f,h,p,m,v,new Me)),d&&(S.normal=Fi.getInterpolatedAttribute(d,h,p,m,v,new st),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new st,materialIndex:0};Fi.getNormal(ou,lu,cu,_.normal),S.face=_,S.barycoord=v}return S}class c1 extends qn{constructor(e=null,i=1,s=1,l,f,d,h,p,m=In,S=In,v,_){super(null,d,h,p,m,S,l,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const js=new Iu,u1=new Me(.5,.5),hu=new st;class am{constructor(e=new _s,i=new _s,s=new _s,l=new _s,f=new _s,d=new _s){this.planes=[e,i,s,l,f,d]}set(e,i,s,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=oa,s=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],S=f[4],v=f[5],_=f[6],E=f[7],T=f[8],D=f[9],y=f[10],x=f[11],C=f[12],F=f[13],N=f[14],O=f[15];if(l[0].setComponents(m-d,E-S,x-T,O-C).normalize(),l[1].setComponents(m+d,E+S,x+T,O+C).normalize(),l[2].setComponents(m+h,E+v,x+D,O+F).normalize(),l[3].setComponents(m-h,E-v,x-D,O-F).normalize(),s)l[4].setComponents(p,_,y,N).normalize(),l[5].setComponents(m-p,E-_,x-y,O-N).normalize();else if(l[4].setComponents(m-p,E-_,x-y,O-N).normalize(),i===oa)l[5].setComponents(m+p,E+_,x+y,O+N).normalize();else if(i===El)l[5].setComponents(p,_,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);const i=u1.distanceTo(e.center);return js.radius=.7071067811865476+i,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ES extends uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zv=new on,Hp=new yS,pu=new Iu,mu=new st;class f1 extends Pn{constructor(e=new ei,i=new ES){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(l),pu.radius+=f,e.ray.intersectsSphere(pu)===!1)return;Zv.copy(l).invert(),Hp.copy(e.ray).applyMatrix4(Zv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,v=s.attributes.position;if(m!==null){const _=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let T=_,D=E;T<D;T++){const y=m.getX(T);mu.fromBufferAttribute(v,y),Kv(mu,y,p,l,e,i,this)}}else{const _=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=_,D=E;T<D;T++)mu.fromBufferAttribute(v,T),Kv(mu,T,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Kv(o,e,i,s,l,f,d){const h=Hp.distanceSqToPoint(o);if(h<i){const p=new st;Hp.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;f.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class bS extends qn{constructor(e=[],i=$s,s,l,f,d,h,p,m,S){super(e,i,s,l,f,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bl extends qn{constructor(e,i,s=ua,l,f,d,h=In,p=In,m,S=Ba,v=1){if(S!==Ba&&S!==Qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,f,d,h,p,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class d1 extends bl{constructor(e,i=ua,s=$s,l,f,d=In,h=In,p,m=Ba){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,l,f,d,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class TS extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xs extends ei{constructor(e=1,i=1,s=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],S=[],v=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,e,d,f,0),T("z","y","x",1,-1,s,i,-e,d,f,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,f,4),T("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(v,2));function T(D,y,x,C,F,N,O,L,I,M,U){const z=N/I,k=O/M,q=N/2,at=O/2,j=L/2,tt=I+1,W=M+1;let Z=0,ht=0;const ut=new st;for(let mt=0;mt<W;mt++){const Et=mt*k-at;for(let Zt=0;Zt<tt;Zt++){const qt=Zt*z-q;ut[D]=qt*C,ut[y]=Et*F,ut[x]=j,m.push(ut.x,ut.y,ut.z),ut[D]=0,ut[y]=0,ut[x]=L>0?1:-1,S.push(ut.x,ut.y,ut.z),v.push(Zt/I),v.push(1-mt/M),Z+=1}}for(let mt=0;mt<M;mt++)for(let Et=0;Et<I;Et++){const Zt=_+Et+tt*mt,qt=_+Et+tt*(mt+1),H=_+(Et+1)+tt*(mt+1),_t=_+(Et+1)+tt*mt;p.push(Zt,qt,_t),p.push(qt,H,_t),ht+=6}h.addGroup(E,ht,U),E+=ht,_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ro extends ei{constructor(e=1,i=1,s=1,l=32,f=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),f=Math.floor(f);const S=[],v=[],_=[],E=[];let T=0;const D=[],y=s/2;let x=0;C(),d===!1&&(e>0&&F(!0),i>0&&F(!1)),this.setIndex(S),this.setAttribute("position",new wn(v,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(E,2));function C(){const N=new st,O=new st;let L=0;const I=(i-e)/s;for(let M=0;M<=f;M++){const U=[],z=M/f,k=z*(i-e)+e;for(let q=0;q<=l;q++){const at=q/l,j=at*p+h,tt=Math.sin(j),W=Math.cos(j);O.x=k*tt,O.y=-z*s+y,O.z=k*W,v.push(O.x,O.y,O.z),N.set(tt,I,W).normalize(),_.push(N.x,N.y,N.z),E.push(at,1-z),U.push(T++)}D.push(U)}for(let M=0;M<l;M++)for(let U=0;U<f;U++){const z=D[U][M],k=D[U+1][M],q=D[U+1][M+1],at=D[U][M+1];(e>0||U!==0)&&(S.push(z,k,at),L+=3),(i>0||U!==f-1)&&(S.push(k,q,at),L+=3)}m.addGroup(x,L,0),x+=L}function F(N){const O=T,L=new Me,I=new st;let M=0;const U=N===!0?e:i,z=N===!0?1:-1;for(let q=1;q<=l;q++)v.push(0,y*z,0),_.push(0,z,0),E.push(.5,.5),T++;const k=T;for(let q=0;q<=l;q++){const j=q/l*p+h,tt=Math.cos(j),W=Math.sin(j);I.x=U*W,I.y=y*z,I.z=U*tt,v.push(I.x,I.y,I.z),_.push(0,z,0),L.x=tt*.5+.5,L.y=W*.5*z+.5,E.push(L.x,L.y),T++}for(let q=0;q<l;q++){const at=O+q,j=k+q;N===!0?S.push(j,j+1,at):S.push(j+1,j,at),M+=3}m.addGroup(x,M,N===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sm extends ro{constructor(e=1,i=1,s=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,s,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new sm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rm extends ei{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const f=[],d=[];h(l),m(s),S(),this.setAttribute("position",new wn(f,3)),this.setAttribute("normal",new wn(f.slice(),3)),this.setAttribute("uv",new wn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(C){const F=new st,N=new st,O=new st;for(let L=0;L<i.length;L+=3)E(i[L+0],F),E(i[L+1],N),E(i[L+2],O),p(F,N,O,C)}function p(C,F,N,O){const L=O+1,I=[];for(let M=0;M<=L;M++){I[M]=[];const U=C.clone().lerp(N,M/L),z=F.clone().lerp(N,M/L),k=L-M;for(let q=0;q<=k;q++)q===0&&M===L?I[M][q]=U:I[M][q]=U.clone().lerp(z,q/k)}for(let M=0;M<L;M++)for(let U=0;U<2*(L-M)-1;U++){const z=Math.floor(U/2);U%2===0?(_(I[M][z+1]),_(I[M+1][z]),_(I[M][z])):(_(I[M][z+1]),_(I[M+1][z+1]),_(I[M+1][z]))}}function m(C){const F=new st;for(let N=0;N<f.length;N+=3)F.x=f[N+0],F.y=f[N+1],F.z=f[N+2],F.normalize().multiplyScalar(C),f[N+0]=F.x,f[N+1]=F.y,f[N+2]=F.z}function S(){const C=new st;for(let F=0;F<f.length;F+=3){C.x=f[F+0],C.y=f[F+1],C.z=f[F+2];const N=y(C)/2/Math.PI+.5,O=x(C)/Math.PI+.5;d.push(N,1-O)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const F=d[C+0],N=d[C+2],O=d[C+4],L=Math.max(F,N,O),I=Math.min(F,N,O);L>.9&&I<.1&&(F<.2&&(d[C+0]+=1),N<.2&&(d[C+2]+=1),O<.2&&(d[C+4]+=1))}}function _(C){f.push(C.x,C.y,C.z)}function E(C,F){const N=C*3;F.x=e[N+0],F.y=e[N+1],F.z=e[N+2]}function T(){const C=new st,F=new st,N=new st,O=new st,L=new Me,I=new Me,M=new Me;for(let U=0,z=0;U<f.length;U+=9,z+=6){C.set(f[U+0],f[U+1],f[U+2]),F.set(f[U+3],f[U+4],f[U+5]),N.set(f[U+6],f[U+7],f[U+8]),L.set(d[z+0],d[z+1]),I.set(d[z+2],d[z+3]),M.set(d[z+4],d[z+5]),O.copy(C).add(F).add(N).divideScalar(3);const k=y(O);D(L,z+0,C,k),D(I,z+2,F,k),D(M,z+4,N,k)}}function D(C,F,N,O){O<0&&C.x===1&&(d[F]=C.x-1),N.x===0&&N.z===0&&(d[F]=O/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function x(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.vertices,e.indices,e.radius,e.detail)}}class om extends rm{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=1/s,f=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-s,0,-l,s,0,l,-s,0,l,s,-l,-s,0,-l,s,0,l,-s,0,l,s,0,-s,0,-l,s,0,-l,-s,0,l,s,0,l],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(f,d,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new om(e.radius,e.detail)}}class Pu extends ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,S=p+1,v=e/h,_=i/p,E=[],T=[],D=[],y=[];for(let x=0;x<S;x++){const C=x*_-d;for(let F=0;F<m;F++){const N=F*v-f;T.push(N,-C,0),D.push(0,0,1),y.push(F/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<h;C++){const F=C+m*x,N=C+m*(x+1),O=C+1+m*(x+1),L=C+1+m*x;E.push(F,N,L),E.push(N,O,L)}this.setIndex(E),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(D,3)),this.setAttribute("uv",new wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class lm extends ei{constructor(e=1,i=.4,s=12,l=48,f=Math.PI*2,d=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:f,thetaStart:d,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],S=[],v=[],_=new st,E=new st,T=new st;for(let D=0;D<=s;D++){const y=d+D/s*h;for(let x=0;x<=l;x++){const C=x/l*f;E.x=(e+i*Math.cos(y))*Math.cos(C),E.y=(e+i*Math.cos(y))*Math.sin(C),E.z=i*Math.sin(y),m.push(E.x,E.y,E.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),T.subVectors(E,_).normalize(),S.push(T.x,T.y,T.z),v.push(x/l),v.push(D/s)}}for(let D=1;D<=s;D++)for(let y=1;y<=l;y++){const x=(l+1)*D+y-1,C=(l+1)*(D-1)+y-1,F=(l+1)*(D-1)+y,N=(l+1)*D+y;p.push(x,C,N),p.push(C,F,N)}this.setIndex(p),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function lo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(Qv(l))l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Qv(l[0])){const f=[];for(let d=0,h=l.length;d<h;d++)f[d]=l[d].clone();e[i][s]=f}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const s=lo(o[i]);for(const l in s)e[l]=s[l]}return e}function Qv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function h1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function AS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const p1={clone:lo,merge:Yn};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ie().setHex(l.value);break;case"v2":this.uniforms[s].value=new Me().fromArray(l.value);break;case"v3":this.uniforms[s].value=new st().fromArray(l.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new de().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _1 extends da{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gu extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v1 extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cm extends Pn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Xh=new on,Jv=new st,$v=new st;class RS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new am,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,l){Xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Xh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=l?l.z/f.x:1,h=l?l.w/f.y:1,p=l?l.x/f.x:0,m=l?l.y/f.y:0;e.coordinateSystem===El||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(Xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _u=new st,vu=new co,ia=new st;class wS extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_u,vu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,ia.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(_u,vu,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,vu,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new st,tx=new Me,ex=new Me;class pi extends wS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,i){return this.getViewBounds(e,tx,ex),i.subVectors(ex,tx)}setViewOffset(e,i,s,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class S1 extends RS{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class y1 extends cm{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new S1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class um extends wS{constructor(e=-1,i=1,s=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class M1 extends RS{constructor(){super(new um(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nx extends cm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new M1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class E1 extends cm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const $r=-90,to=1;class b1 extends Pn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi($r,to,e,i);l.layers=this.layers,this.add(l);const f=new pi($r,to,e,i);f.layers=this.layers,this.add(f);const d=new pi($r,to,e,i);d.layers=this.layers,this.add(d);const h=new pi($r,to,e,i);h.layers=this.layers,this.add(h);const p=new pi($r,to,e,i);p.layers=this.layers,this.add(p);const m=new pi($r,to,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===El)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,S]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,_,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class T1 extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class A1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const mm=class mm{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=l,this}};mm.prototype.isMatrix2=!0;let ix=mm;function ax(o,e,i,s){const l=R1(s);switch(i){case dS:return o*e;case pS:return o*e/l.components*l.byteLength;case Qp:return o*e/l.components*l.byteLength;case tr:return o*e*2/l.components*l.byteLength;case Jp:return o*e*2/l.components*l.byteLength;case hS:return o*e*3/l.components*l.byteLength;case Hi:return o*e*4/l.components*l.byteLength;case $p:return o*e*4/l.components*l.byteLength;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bu:case Tu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case fp:return Math.max(o,16)*Math.max(e,8)/4;case lp:case up:return Math.max(o,8)*Math.max(e,8)/2;case dp:case hp:case mp:case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pp:case Ru:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Up:case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case wu:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function R1(o){switch(o){case gi:case lS:return{byteLength:1,components:1};case yl:case cS:case fa:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case ua:case jp:case ra:return{byteLength:4,components:1};case uS:case fS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let o=null,e=!1,i=null,s=null;function l(f,d){s=o.requestAnimationFrame(l),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function w1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,m,S),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,p,m){const S=p.array,v=p.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,S);else{v.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<v.length;E++){const T=v[_],D=v[E];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++_,v[_]=D)}v.length=_+1;for(let E=0,T=v.length;E<T;E++){const D=v[E];o.bufferSubData(m,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:f,update:d}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sT="gl_FragColor = linearToOutputTexel( gl_FragColor );",rT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ST=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,MT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ET=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:C1,alphahash_pars_fragment:N1,alphamap_fragment:D1,alphamap_pars_fragment:U1,alphatest_fragment:L1,alphatest_pars_fragment:O1,aomap_fragment:I1,aomap_pars_fragment:P1,batching_pars_vertex:B1,batching_vertex:z1,begin_vertex:F1,beginnormal_vertex:H1,bsdfs:G1,iridescence_fragment:V1,bumpmap_pars_fragment:k1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:q1,color_fragment:j1,color_pars_fragment:Z1,color_pars_vertex:K1,color_vertex:Q1,common:J1,cube_uv_reflection_fragment:$1,defaultnormal_vertex:tT,displacementmap_pars_vertex:eT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:aT,colorspace_fragment:sT,colorspace_pars_fragment:rT,envmap_fragment:oT,envmap_common_pars_fragment:lT,envmap_pars_fragment:cT,envmap_pars_vertex:uT,envmap_physical_pars_fragment:yT,envmap_vertex:fT,fog_vertex:dT,fog_pars_vertex:hT,fog_fragment:pT,fog_pars_fragment:mT,gradientmap_pars_fragment:gT,lightmap_pars_fragment:_T,lights_lambert_fragment:vT,lights_lambert_pars_fragment:xT,lights_pars_begin:ST,lights_toon_fragment:MT,lights_toon_pars_fragment:ET,lights_phong_fragment:bT,lights_phong_pars_fragment:TT,lights_physical_fragment:AT,lights_physical_pars_fragment:RT,lights_fragment_begin:wT,lights_fragment_maps:CT,lights_fragment_end:NT,lightprobes_pars_fragment:DT,logdepthbuf_fragment:UT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:OT,logdepthbuf_vertex:IT,map_fragment:PT,map_pars_fragment:BT,map_particle_fragment:zT,map_particle_pars_fragment:FT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:GT,morphinstance_vertex:VT,morphcolor_vertex:kT,morphnormal_vertex:XT,morphtarget_pars_vertex:WT,morphtarget_vertex:YT,normal_fragment_begin:qT,normal_fragment_maps:jT,normal_pars_fragment:ZT,normal_pars_vertex:KT,normal_vertex:QT,normalmap_pars_fragment:JT,clearcoat_normal_fragment_begin:$T,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:eA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:sA,project_vertex:rA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:dA,shadowmap_vertex:hA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:_A,skinnormal_vertex:vA,specularmap_fragment:xA,specularmap_pars_fragment:SA,tonemapping_fragment:yA,tonemapping_pars_fragment:MA,transmission_fragment:EA,transmission_pars_fragment:bA,uv_pars_fragment:TA,uv_pars_vertex:AA,uv_vertex:RA,worldpos_vertex:wA,background_vert:CA,background_frag:NA,backgroundCube_vert:DA,backgroundCube_frag:UA,cube_vert:LA,cube_frag:OA,depth_vert:IA,depth_frag:PA,distance_vert:BA,distance_frag:zA,equirect_vert:FA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:kA,meshbasic_frag:XA,meshlambert_vert:WA,meshlambert_frag:YA,meshmatcap_vert:qA,meshmatcap_frag:jA,meshnormal_vert:ZA,meshnormal_frag:KA,meshphong_vert:QA,meshphong_frag:JA,meshphysical_vert:$A,meshphysical_frag:tR,meshtoon_vert:eR,meshtoon_frag:nR,points_vert:iR,points_frag:aR,shadow_vert:sR,shadow_frag:rR,sprite_vert:oR,sprite_frag:lR},Ht={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new st},probesMax:{value:new st},probesResolution:{value:new st}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},sa={basic:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Yn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Yn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Yn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ie(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Yn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Yn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Yn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Yn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Yn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Yn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Yn([Ht.common,Ht.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Yn([Ht.lights,Ht.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};sa.physical={uniforms:Yn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const xu={r:0,b:0,g:0},cR=new on,NS=new de;NS.set(-1,0,0,0,1,0,0,0,1);function uR(o,e,i,s,l,f){const d=new Ie(0);let h=l===!0?0:1,p,m,S=null,v=0,_=null;function E(C){let F=C.isScene===!0?C.background:null;if(F&&F.isTexture){const N=C.backgroundBlurriness>0;F=e.get(F,N)}return F}function T(C){let F=!1;const N=E(C);N===null?y(d,h):N&&N.isColor&&(y(N,1),F=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(C,F){const N=E(F);N&&(N.isCubeTexture||N.mapping===Ou)?(m===void 0&&(m=new Rn(new xs(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:lo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cR.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(NS),m.material.toneMapped=Le.getTransfer(N.colorSpace)!==qe,(S!==N||v!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=N,v=N.version,_=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Rn(new Pu(2,2),new da({name:"BackgroundMaterial",uniforms:lo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Le.getTransfer(N.colorSpace)!==qe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||v!==N.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,S=N,v=N.version,_=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,F){C.getRGB(xu,AS(o)),i.buffers.color.setClear(xu.r,xu.g,xu.b,F,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,F=1){d.set(C),h=F,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,y(d,h)},render:T,addToRenderList:D,dispose:x}}function fR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let f=l,d=!1;function h(k,q,at,j,tt){let W=!1;const Z=v(k,j,at,q);f!==Z&&(f=Z,m(f.object)),W=E(k,j,at,tt),W&&T(k,j,at,tt),tt!==null&&e.update(tt,o.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,N(k,q,at,j),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return o.createVertexArray()}function m(k){return o.bindVertexArray(k)}function S(k){return o.deleteVertexArray(k)}function v(k,q,at,j){const tt=j.wireframe===!0;let W=s[q.id];W===void 0&&(W={},s[q.id]=W);const Z=k.isInstancedMesh===!0?k.id:0;let ht=W[Z];ht===void 0&&(ht={},W[Z]=ht);let ut=ht[at.id];ut===void 0&&(ut={},ht[at.id]=ut);let mt=ut[tt];return mt===void 0&&(mt=_(p()),ut[tt]=mt),mt}function _(k){const q=[],at=[],j=[];for(let tt=0;tt<i;tt++)q[tt]=0,at[tt]=0,j[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:at,attributeDivisors:j,object:k,attributes:{},index:null}}function E(k,q,at,j){const tt=f.attributes,W=q.attributes;let Z=0;const ht=at.getAttributes();for(const ut in ht)if(ht[ut].location>=0){const Et=tt[ut];let Zt=W[ut];if(Zt===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(Zt=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(Zt=k.instanceColor)),Et===void 0||Et.attribute!==Zt||Zt&&Et.data!==Zt.data)return!0;Z++}return f.attributesNum!==Z||f.index!==j}function T(k,q,at,j){const tt={},W=q.attributes;let Z=0;const ht=at.getAttributes();for(const ut in ht)if(ht[ut].location>=0){let Et=W[ut];Et===void 0&&(ut==="instanceMatrix"&&k.instanceMatrix&&(Et=k.instanceMatrix),ut==="instanceColor"&&k.instanceColor&&(Et=k.instanceColor));const Zt={};Zt.attribute=Et,Et&&Et.data&&(Zt.data=Et.data),tt[ut]=Zt,Z++}f.attributes=tt,f.attributesNum=Z,f.index=j}function D(){const k=f.newAttributes;for(let q=0,at=k.length;q<at;q++)k[q]=0}function y(k){x(k,0)}function x(k,q){const at=f.newAttributes,j=f.enabledAttributes,tt=f.attributeDivisors;at[k]=1,j[k]===0&&(o.enableVertexAttribArray(k),j[k]=1),tt[k]!==q&&(o.vertexAttribDivisor(k,q),tt[k]=q)}function C(){const k=f.newAttributes,q=f.enabledAttributes;for(let at=0,j=q.length;at<j;at++)q[at]!==k[at]&&(o.disableVertexAttribArray(at),q[at]=0)}function F(k,q,at,j,tt,W,Z){Z===!0?o.vertexAttribIPointer(k,q,at,tt,W):o.vertexAttribPointer(k,q,at,j,tt,W)}function N(k,q,at,j){D();const tt=j.attributes,W=at.getAttributes(),Z=q.defaultAttributeValues;for(const ht in W){const ut=W[ht];if(ut.location>=0){let mt=tt[ht];if(mt===void 0&&(ht==="instanceMatrix"&&k.instanceMatrix&&(mt=k.instanceMatrix),ht==="instanceColor"&&k.instanceColor&&(mt=k.instanceColor)),mt!==void 0){const Et=mt.normalized,Zt=mt.itemSize,qt=e.get(mt);if(qt===void 0)continue;const H=qt.buffer,_t=qt.type,wt=qt.bytesPerElement,Q=_t===o.INT||_t===o.UNSIGNED_INT||mt.gpuType===jp;if(mt.isInterleavedBufferAttribute){const pt=mt.data,At=pt.stride,It=mt.offset;if(pt.isInstancedInterleavedBuffer){for(let vt=0;vt<ut.locationSize;vt++)x(ut.location+vt,pt.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let vt=0;vt<ut.locationSize;vt++)y(ut.location+vt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let vt=0;vt<ut.locationSize;vt++)F(ut.location+vt,Zt/ut.locationSize,_t,Et,At*wt,(It+Zt/ut.locationSize*vt)*wt,Q)}else{if(mt.isInstancedBufferAttribute){for(let pt=0;pt<ut.locationSize;pt++)x(ut.location+pt,mt.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let pt=0;pt<ut.locationSize;pt++)y(ut.location+pt);o.bindBuffer(o.ARRAY_BUFFER,H);for(let pt=0;pt<ut.locationSize;pt++)F(ut.location+pt,Zt/ut.locationSize,_t,Et,Zt*wt,Zt/ut.locationSize*pt*wt,Q)}}else if(Z!==void 0){const Et=Z[ht];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(ut.location,Et);break;case 3:o.vertexAttrib3fv(ut.location,Et);break;case 4:o.vertexAttrib4fv(ut.location,Et);break;default:o.vertexAttrib1fv(ut.location,Et)}}}}C()}function O(){U();for(const k in s){const q=s[k];for(const at in q){const j=q[at];for(const tt in j){const W=j[tt];for(const Z in W)S(W[Z].object),delete W[Z];delete j[tt]}}delete s[k]}}function L(k){if(s[k.id]===void 0)return;const q=s[k.id];for(const at in q){const j=q[at];for(const tt in j){const W=j[tt];for(const Z in W)S(W[Z].object),delete W[Z];delete j[tt]}}delete s[k.id]}function I(k){for(const q in s){const at=s[q];for(const j in at){const tt=at[j];if(tt[k.id]===void 0)continue;const W=tt[k.id];for(const Z in W)S(W[Z].object),delete W[Z];delete tt[k.id]}}}function M(k){for(const q in s){const at=s[q],j=k.isInstancedMesh===!0?k.id:0,tt=at[j];if(tt!==void 0){for(const W in tt){const Z=tt[W];for(const ht in Z)S(Z[ht].object),delete Z[ht];delete tt[W]}delete at[j],Object.keys(at).length===0&&delete s[q]}}}function U(){z(),d=!0,f!==l&&(f=l,m(f.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:z,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:C}}function dR(o,e,i){let s;function l(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(s,p,m,S),i.update(m,s,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,S);let _=0;for(let E=0;E<S;E++)_+=m[E];i.update(_,s,1)}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function hR(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Hi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const M=I===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==gi&&I!==ra&&!M&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(re("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:C,maxVaryings:F,maxFragmentUniforms:N,maxSamples:O,samples:L}}function pR(o){const e=this;let i=null,s=0,l=!1,f=!1;const d=new _s,h=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||l;return l=_,s=v.length,E},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,E){const T=v.clippingPlanes,D=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||T===null||T.length===0||f&&!y)f?S(null):m();else{const C=f?0:s,F=C*4;let N=x.clippingState||null;p.value=N,N=S(T,_,F,E);for(let O=0;O!==F;++O)N[O]=i[O];x.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,_,E,T){const D=v!==null?v.length:0;let y=null;if(D!==0){if(y=p.value,T!==!0||y===null){const x=E+D*4,C=_.matrixWorldInverse;h.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,N=E;F!==D;++F,N+=4)d.copy(v[F]).applyMatrix4(C,h),d.normal.toArray(y,N),y[N+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const io=4,mR=6,gR=20,_R=256,pl=new um,sx=new Ie;let Wh=null,Yh=0,qh=0,jh=!1;const vR=new st,Zs=new st;class rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,f={}){const{size:d=256,position:h=vR}=f;Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Yh,qh),this._renderer.xr.enabled=jh,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===$s||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:fa,format:Hi,colorSpace:Cu,depthBuffer:!1},l=ox(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xR(f)),this._blurMaterial=yR(f,e,i),this._ggxMaterial=SR(f,e,i)}return l}_compileMaterial(e){const i=new Rn(new ei,e);this._renderer.compile(i,pl)}_sceneToCubeUV(e,i,s,l,f){const p=new pi(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(sx),v.toneMapping=la,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new xs,new MS({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let x=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,x=!0):(y.color.copy(sx),x=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(p.up.set(0,m[F],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+S[F],f.y,f.z)):N===1?(p.up.set(0,0,m[F]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+S[F],f.z)):(p.up.set(0,m[F],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+S[F]));const O=this._cubeSize;eo(l,N*O,F>2?O:0,O,O),v.setRenderTarget(l),x&&v.render(D,p),v.render(e,p)}v.toneMapping=E,v.autoClear=_,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===$s||e.mapping===oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lx());const f=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;eo(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,pl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-S*S),_=m*1.25,E=v*_,{_lodMax:T}=this,D=this._sizeLods[s],y=3*D*(s>T-io?s-T+io:0),x=4*(this._cubeSize-D);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=T-i,eo(f,y,x,3*D,2*D),l.setRenderTarget(f),l.render(h,pl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=T-s,eo(e,y,x,3*D,2*D),l.setRenderTarget(e),l.render(h,pl)}_blur(e,i,s,l){const f=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,l,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[l],v=3*S*(l>this._lodMax-io?l-this._lodMax+io:0),_=4*(this._cubeSize-S);eo(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(p,pl)}}function xR(o){const e=[],i=[];let s=o;const l=o-io+1+mR;for(let f=0;f<l;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,_=6,E=3,T=new Float32Array(E*_*v),D=new Float32Array(E*_*v);for(let x=0;x<v;x++){const C=x%3*2/3-1,F=x>2?0:-1,N=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];T.set(N,E*_*x);for(let O=0;O<_;O++){const L=S[O*2]*2-1,I=S[O*2+1]*2-1;x===0?Zs.set(1,I,L):x===1?Zs.set(-L,1,-I):x===2?Zs.set(-L,I,1):x===3?Zs.set(-1,I,-L):x===4?Zs.set(-L,-1,I):Zs.set(L,I,-1),Zs.toArray(D,(x*_+O)*E)}}const y=new ei;y.setAttribute("position",new ca(T,E)),y.setAttribute("outputDirection",new ca(D,E)),i.push(new Rn(y,null)),s>io&&s--}return{lodMeshes:i,sizeLods:e}}function ox(o,e,i){const s=new Gi(o,e,i);return s.texture.mapping=Ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eo(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function SR(o,e,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_R,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function yR(o,e,i){return new da({name:"SphericalGaussianBlur",defines:{SAMPLES:gR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function lx(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function cx(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class DS extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new bS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new xs(5,5,5),f=new da({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Ia});f.uniforms.tEquirect.value=i;const d=new Rn(l,f),h=i.minFilter;return i.minFilter===Ks&&(i.minFilter=Hn),new b1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(f)}}function MR(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?d(_):f(_)}function f(_){if(_&&_.isTexture){const E=_.mapping;if(E===vh||E===xh)if(e.has(_)){const T=e.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const D=new DS(T.height);return D.fromEquirectangularTexture(o,_),e.set(_,D),_.addEventListener("dispose",m),h(D.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,T=E===vh||E===xh,D=E===$s||E===oo;if(T||D){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new rx(o)),y=T?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const C=_.image;return T&&C&&C.height>0||D&&C&&p(C)?(s===null&&(s=new rx(o)),y=T?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",S),y.texture):null}}}return _}function h(_,E){return E===vh?_.mapping=$s:E===xh&&(_.mapping=oo),_}function p(_){let E=0;const T=6;for(let D=0;D<T;D++)_[D]!==void 0&&E++;return E===T}function m(_){const E=_.target;E.removeEventListener("dispose",m);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function S(_){const E=_.target;E.removeEventListener("dispose",S);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function ER(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ao("WebGLRenderer: "+s+" extension not supported."),l}}}function bR(o,e,i,s){const l={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const E=f.get(_);E&&(e.remove(E),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function m(v){const _=[],E=v.index,T=v.attributes.position;let D=0;if(T===void 0)return;if(E!==null){const C=E.array;D=E.version;for(let F=0,N=C.length;F<N;F+=3){const O=C[F+0],L=C[F+1],I=C[F+2];_.push(O,L,L,I,I,O)}}else{const C=T.array;D=T.version;for(let F=0,N=C.length/3-1;F<N;F+=3){const O=F+0,L=F+1,I=F+2;_.push(O,L,L,I,I,O)}}const y=new(T.count>=65535?SS:xS)(_,1);y.version=D;const x=f.get(v);x&&e.remove(x),f.set(v,y)}function S(v){const _=f.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:p,getWireframeAttribute:S}}function TR(o,e,i){let s;function l(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function p(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function m(v,_,E){E!==0&&(o.drawElementsInstanced(s,_,f,v*d,E),i.update(_,s,E))}function S(v,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,E);let D=0;for(let y=0;y<E;y++)D+=_[y];i.update(D,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function AR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Fe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function RR(o,e,i){const s=new WeakMap,l=new rn;function f(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let z=function(){M.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var E=z;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),D===!0&&(N=2),y===!0&&(N=3);let O=h.attributes.position.count*N,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const I=new Float32Array(O*L*4*v),M=new gS(I,O,L,v);M.type=ra,M.needsUpdate=!0;const U=N*4;for(let k=0;k<v;k++){const q=x[k],at=C[k],j=F[k],tt=O*L*4*k;for(let W=0;W<q.count;W++){const Z=W*U;T===!0&&(l.fromBufferAttribute(q,W),I[tt+Z+0]=l.x,I[tt+Z+1]=l.y,I[tt+Z+2]=l.z,I[tt+Z+3]=0),D===!0&&(l.fromBufferAttribute(at,W),I[tt+Z+4]=l.x,I[tt+Z+5]=l.y,I[tt+Z+6]=l.z,I[tt+Z+7]=0),y===!0&&(l.fromBufferAttribute(j,W),I[tt+Z+8]=l.x,I[tt+Z+9]=l.y,I[tt+Z+10]=l.z,I[tt+Z+11]=j.itemSize===4?l.w:1)}}_={count:v,texture:M,size:new Me(O,L)},s.set(h,_),h.addEventListener("dispose",z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const D=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function wR(o,e,i,s,l){let f=new WeakMap;function d(m){const S=l.render.frame,v=m.geometry,_=e.get(m,v);if(f.get(_)!==S&&(e.update(_),f.set(_,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const E=m.skeleton;f.get(E)!==S&&(E.update(),f.set(E,S))}return _}function h(){f=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const CR={[eS]:"LINEAR_TONE_MAPPING",[nS]:"REINHARD_TONE_MAPPING",[iS]:"CINEON_TONE_MAPPING",[qp]:"ACES_FILMIC_TONE_MAPPING",[sS]:"AGX_TONE_MAPPING",[rS]:"NEUTRAL_TONE_MAPPING",[aS]:"CUSTOM_TONE_MAPPING"};function NR(o,e,i,s,l,f){const d=new Gi(e,i,{type:o,depthBuffer:l,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new ei;m.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new wn([0,2,0,0,2,0],2));const S=new _1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Rn(m,S),_=new um(-1,1,1,-1,0,1);let E=null,T=null,D=!1,y,x=null,C=[],F=!1;this.setSize=function(N,O){d.setSize(N,O),h!==null&&h.setSize(N,O),p!==null&&p.setSize(N,O);for(let L=0;L<C.length;L++){const I=C[L];I.setSize&&I.setSize(N,O)}},this.setEffects=function(N){C=N,F=C.length>0&&C[0].isRenderPass===!0;const O=d.width,L=d.height;C.length>0&&h===null&&(h=new Gi(O,L,{type:fa,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(O,L,{type:fa,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<C.length;I++){const M=C[I];M.setSize&&M.setSize(O,L)}},this.begin=function(N,O){if(D||N.toneMapping===la&&C.length===0)return!1;if(x=O,O!==null){const L=O.width,I=O.height;(d.width!==L||d.height!==I)&&this.setSize(L,I)}return F===!1&&N.setRenderTarget(d),y=N.toneMapping,N.toneMapping=la,!0},this.hasRenderPass=function(){return F},this.end=function(N,O){N.toneMapping=y,D=!0;let L=d,I=h;for(let M=0;M<C.length;M++){const U=C[M];U.enabled!==!1&&(U.render(N,I,L,O),U.needsSwap!==!1&&(L=I,I=I===h?p:h))}if(E!==N.outputColorSpace||T!==N.toneMapping){E=N.outputColorSpace,T=N.toneMapping,S.defines={},Le.getTransfer(E)===qe&&(S.defines.SRGB_TRANSFER="");const M=CR[T];M&&(S.defines[M]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(x),N.render(v,_),x=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const US=new qn,Gp=new bl(1,1),LS=new gS,OS=new qb,IS=new bS,ux=[],fx=[],dx=new Float32Array(16),hx=new Float32Array(9),px=new Float32Array(4);function fo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=ux[l];if(f===void 0&&(f=new Float32Array(l),ux[l]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function zu(o,e){let i=fx[e];i===void 0&&(i=new Int32Array(e),fx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function DR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function IR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;px.set(s),o.uniformMatrix2fv(this.addr,!1,px),yn(i,s)}}function PR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;hx.set(s),o.uniformMatrix3fv(this.addr,!1,hx),yn(i,s)}}function BR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;dx.set(s),o.uniformMatrix4fv(this.addr,!1,dx),yn(i,s)}}function zR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function FR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function VR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function kR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function XR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function WR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function YR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(Gp.compareFunction=i.isReversedDepthBuffer()?em:tm,f=Gp):f=US,i.setTexture2D(e||f,l)}function qR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||OS,l)}function jR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||IS,l)}function ZR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||LS,l)}function KR(o){switch(o){case 5126:return DR;case 35664:return UR;case 35665:return LR;case 35666:return OR;case 35674:return IR;case 35675:return PR;case 35676:return BR;case 5124:case 35670:return zR;case 35667:case 35671:return FR;case 35668:case 35672:return HR;case 35669:case 35673:return GR;case 5125:return VR;case 36294:return kR;case 36295:return XR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return ZR}}function QR(o,e){o.uniform1fv(this.addr,e)}function JR(o,e){const i=fo(e,this.size,2);o.uniform2fv(this.addr,i)}function $R(o,e){const i=fo(e,this.size,3);o.uniform3fv(this.addr,i)}function t3(o,e){const i=fo(e,this.size,4);o.uniform4fv(this.addr,i)}function e3(o,e){const i=fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function n3(o,e){const i=fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function i3(o,e){const i=fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function a3(o,e){o.uniform1iv(this.addr,e)}function s3(o,e){o.uniform2iv(this.addr,e)}function r3(o,e){o.uniform3iv(this.addr,e)}function o3(o,e){o.uniform4iv(this.addr,e)}function l3(o,e){o.uniform1uiv(this.addr,e)}function c3(o,e){o.uniform2uiv(this.addr,e)}function u3(o,e){o.uniform3uiv(this.addr,e)}function f3(o,e){o.uniform4uiv(this.addr,e)}function d3(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Gp:d=US;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,f[h])}function h3(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||OS,f[d])}function p3(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||IS,f[d])}function m3(o,e,i){const s=this.cache,l=e.length,f=zu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||LS,f[d])}function g3(o){switch(o){case 5126:return QR;case 35664:return JR;case 35665:return $R;case 35666:return t3;case 35674:return e3;case 35675:return n3;case 35676:return i3;case 5124:case 35670:return a3;case 35667:case 35671:return s3;case 35668:case 35672:return r3;case 35669:case 35673:return o3;case 5125:return l3;case 36294:return c3;case 36295:return u3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return d3;case 35679:case 36299:case 36307:return h3;case 35680:case 36300:case 36308:case 36293:return p3;case 36289:case 36303:case 36311:case 36292:return m3}}class _3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KR(i.type)}}class v3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=g3(i.type)}}class x3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],s)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function mx(o,e){o.seq.push(e),o.map[e.id]=e}function S3(o,e,i){const s=o.name,l=s.length;for(Zh.lastIndex=0;;){const f=Zh.exec(s),d=Zh.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){mx(i,m===void 0?new _3(h,o,e):new v3(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new x3(h),mx(i,v)),i=v}}}class Au{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);S3(h,p,this)}const l=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):f.push(d);l.length>0&&(this.seq=l.concat(f))}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function gx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const y3=37297;let M3=0;function E3(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const _x=new de;function b3(o){Le._getMatrix(_x,Le.workingColorSpace,o);const e=`mat3( ${_x.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Nu:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function vx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+E3(o.getShaderSource(e),h)}else return f}function T3(o,e){const i=b3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const A3={[eS]:"Linear",[nS]:"Reinhard",[iS]:"Cineon",[qp]:"ACESFilmic",[sS]:"AgX",[rS]:"Neutral",[aS]:"Custom"};function R3(o,e){const i=A3[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new st;function w3(){Le.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function N3(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function D3(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function vl(o){return o!==""}function xx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(o){return o.replace(U3,O3)}const L3=new Map;function O3(o,e){let i=_e[e];if(i===void 0){const s=L3.get(e);if(s!==void 0)i=_e[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vp(i)}const I3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(o){return o.replace(I3,P3)}function P3(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Mx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const B3={[yu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function z3(o){return B3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F3={[$s]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function H3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":F3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const G3={[oo]:"ENVMAP_MODE_REFRACTION"};function V3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":G3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const k3={[tS]:"ENVMAP_BLENDING_MULTIPLY",[bb]:"ENVMAP_BLENDING_MIX",[Tb]:"ENVMAP_BLENDING_ADD"};function X3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":k3[o.combine]||"ENVMAP_BLENDING_NONE"}function W3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Y3(o,e,i,s){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=z3(i),m=H3(i),S=V3(i),v=X3(i),_=W3(i),E=C3(i),T=N3(f),D=l.createProgram();let y,x,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),x.length>0&&(x+=`
`)):(y=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),x=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?_e.tonemapping_pars_fragment:"",i.toneMapping!==la?R3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,T3("linearToOutputTexel",i.outputColorSpace),w3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),d=Vp(d),d=xx(d,i),d=Sx(d,i),h=Vp(h),h=xx(h,i),h=Sx(h,i),d=yx(d),h=yx(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=C+y+d,N=C+x+h,O=gx(l,l.VERTEX_SHADER,F),L=gx(l,l.FRAGMENT_SHADER,N);l.attachShader(D,O),l.attachShader(D,L),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(k){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(D)||"",at=l.getShaderInfoLog(O)||"",j=l.getShaderInfoLog(L)||"",tt=q.trim(),W=at.trim(),Z=j.trim();let ht=!0,ut=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,O,L);else{const mt=vx(l,O,"vertex"),Et=vx(l,L,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+tt+`
`+mt+`
`+Et)}else tt!==""?re("WebGLProgram: Program Info Log:",tt):(W===""||Z==="")&&(ut=!1);ut&&(k.diagnostics={runnable:ht,programLog:tt,vertexShader:{log:W,prefix:y},fragmentShader:{log:Z,prefix:x}})}l.deleteShader(O),l.deleteShader(L),M=new Au(l,D),U=D3(l,D)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(D,y3)),z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M3++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=O,this.fragmentShader=L,this}let q3=0;class j3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Z3(e),i.set(e,s)),s}}class Z3{constructor(e){this.id=q3++,this.code=e,this.usedTimes=0}}function K3(o){return o===tr||o===Ru||o===wu}function Q3(o,e,i,s,l,f){const d=new _S,h=new j3,p=new Set,m=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(M){return p.add(M),M===0?"uv":`uv${M}`}function D(M,U,z,k,q,at){const j=k.fog,tt=q.geometry,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ht=e.get(M.envMap||W,Z),ut=ht&&ht.mapping===Ou?ht.image.height:null,mt=E[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&re("WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const Et=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Zt=Et!==void 0?Et.length:0;let qt=0;tt.morphAttributes.position!==void 0&&(qt=1),tt.morphAttributes.normal!==void 0&&(qt=2),tt.morphAttributes.color!==void 0&&(qt=3);let H,_t,wt,Q;if(mt){const De=sa[mt];H=De.vertexShader,_t=De.fragmentShader}else{H=M.vertexShader,_t=M.fragmentShader;const De=h.getVertexShaderStage(M),ue=h.getFragmentShaderStage(M);h.update(M,De,ue),wt=De.id,Q=ue.id}const pt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),It=q.isInstancedMesh===!0,vt=q.isBatchedMesh===!0,Ct=!!M.map,Pe=!!M.matcap,ce=!!ht,he=!!M.aoMap,ge=!!M.lightMap,te=!!M.bumpMap&&M.wireframe===!1,ne=!!M.normalMap,Be=!!M.displacementMap,nn=!!M.emissiveMap,Ee=!!M.metalnessMap,je=!!M.roughnessMap,X=M.anisotropy>0,Je=M.clearcoat>0,ye=M.dispersion>0,P=M.retroreflectivity>0,b=M.iridescence>0,et=M.sheen>0,rt=M.transmission>0,it=X&&!!M.anisotropyMap,Tt=Je&&!!M.clearcoatMap,Rt=Je&&!!M.clearcoatNormalMap,gt=Je&&!!M.clearcoatRoughnessMap,St=b&&!!M.iridescenceMap,Nt=b&&!!M.iridescenceThicknessMap,$t=et&&!!M.sheenColorMap,Bt=et&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,kt=!!M.specularColorMap,ie=!!M.specularIntensityMap,le=rt&&!!M.transmissionMap,Y=rt&&!!M.thicknessMap,Dt=!!M.gradientMap,Mt=!!M.alphaMap,Ut=M.alphaTest>0,Vt=!!M.alphaHash,bt=!!M.extensions;let Jt=la;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Gt={shaderID:mt,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:_t,defines:M.defines,customVertexShaderID:wt,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:vt,batchingColor:vt&&q._colorsTexture!==null,instancing:It,instancingColor:It&&q.instanceColor!==null,instancingMorph:It&&q.morphTexture!==null,outputColorSpace:pt===null?o.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ct,matcap:Pe,envMap:ce,envMapMode:ce&&ht.mapping,envMapCubeUVHeight:ut,aoMap:he,lightMap:ge,bumpMap:te,normalMap:ne,displacementMap:Be,emissiveMap:nn,normalMapObjectSpace:ne&&M.normalMapType===wb,normalMapTangentSpace:ne&&M.normalMapType===zp,packedNormalMap:ne&&M.normalMapType===zp&&K3(M.normalMap.format),metalnessMap:Ee,roughnessMap:je,anisotropy:X,anisotropyMap:it,clearcoat:Je,clearcoatMap:Tt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:gt,dispersion:ye,retroreflection:P,iridescence:b,iridescenceMap:St,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:$t,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:kt,specularIntensityMap:ie,transmission:rt,transmissionMap:le,thicknessMap:Y,gradientMap:Dt,opaque:M.transparent===!1&&M.blending===xl&&M.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ut,alphaHash:Vt,combine:M.combine,mapUv:Ct&&T(M.map.channel),aoMapUv:he&&T(M.aoMap.channel),lightMapUv:ge&&T(M.lightMap.channel),bumpMapUv:te&&T(M.bumpMap.channel),normalMapUv:ne&&T(M.normalMap.channel),displacementMapUv:Be&&T(M.displacementMap.channel),emissiveMapUv:nn&&T(M.emissiveMap.channel),metalnessMapUv:Ee&&T(M.metalnessMap.channel),roughnessMapUv:je&&T(M.roughnessMap.channel),anisotropyMapUv:it&&T(M.anisotropyMap.channel),clearcoatMapUv:Tt&&T(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&T(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&T(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&T(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&T(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(M.sheenRoughnessMap.channel),specularMapUv:Pt&&T(M.specularMap.channel),specularColorMapUv:kt&&T(M.specularColorMap.channel),specularIntensityMapUv:ie&&T(M.specularIntensityMap.channel),transmissionMapUv:le&&T(M.transmissionMap.channel),thicknessMapUv:Y&&T(M.thicknessMap.channel),alphaMapUv:Mt&&T(M.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ne||X),vertexNormals:!!tt.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&(Ct||Mt),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||tt.attributes.normal===void 0&&ne===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:qt,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&Le.getTransfer(M.map.colorSpace)===qe,decodeVideoTextureEmissive:nn&&M.emissiveMap.isVideoTexture===!0&&Le.getTransfer(M.emissiveMap.colorSpace)===qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===La,flipSided:M.side===ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:bt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&M.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=p.has(1),Gt.vertexUv2s=p.has(2),Gt.vertexUv3s=p.has(3),p.clear(),Gt}function y(M){const U=[];if(M.shaderID?U.push(M.shaderID):(U.push(M.customVertexShaderID),U.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)U.push(z),U.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(x(U,M),C(U,M),U.push(o.outputColorSpace)),U.push(M.customProgramCacheKey),U.join()}function x(M,U){M.push(U.precision),M.push(U.outputColorSpace),M.push(U.envMapMode),M.push(U.envMapCubeUVHeight),M.push(U.mapUv),M.push(U.alphaMapUv),M.push(U.lightMapUv),M.push(U.aoMapUv),M.push(U.bumpMapUv),M.push(U.normalMapUv),M.push(U.displacementMapUv),M.push(U.emissiveMapUv),M.push(U.metalnessMapUv),M.push(U.roughnessMapUv),M.push(U.anisotropyMapUv),M.push(U.clearcoatMapUv),M.push(U.clearcoatNormalMapUv),M.push(U.clearcoatRoughnessMapUv),M.push(U.iridescenceMapUv),M.push(U.iridescenceThicknessMapUv),M.push(U.sheenColorMapUv),M.push(U.sheenRoughnessMapUv),M.push(U.specularMapUv),M.push(U.specularColorMapUv),M.push(U.specularIntensityMapUv),M.push(U.transmissionMapUv),M.push(U.thicknessMapUv),M.push(U.combine),M.push(U.fogExp2),M.push(U.sizeAttenuation),M.push(U.morphTargetsCount),M.push(U.morphAttributeCount),M.push(U.numSunLights),M.push(U.numDirLights),M.push(U.numPointLights),M.push(U.numSpotLights),M.push(U.numSpotLightMaps),M.push(U.numHemiLights),M.push(U.numRectAreaLights),M.push(U.numSunLightShadows),M.push(U.numDirLightShadows),M.push(U.numPointLightShadows),M.push(U.numSpotLightShadows),M.push(U.numSpotLightShadowsWithMaps),M.push(U.numLightProbes),M.push(U.shadowMapType),M.push(U.toneMapping),M.push(U.numClippingPlanes),M.push(U.numClipIntersection),M.push(U.depthPacking)}function C(M,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.retroreflection&&d.enable(24),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),M.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),U.hasPositionAttribute&&d.enable(23),M.push(d.mask)}function F(M){const U=E[M.type];let z;if(U){const k=sa[U];z=p1.clone(k.uniforms)}else z=M.uniforms;return z}function N(M,U){let z=S.get(U);return z!==void 0?++z.usedTimes:(z=new Y3(o,U,M,l),m.push(z),S.set(U,z)),z}function O(M){if(--M.usedTimes===0){const U=m.indexOf(M);m[U]=m[m.length-1],m.pop(),S.delete(M.cacheKey),M.destroy()}}function L(M){h.remove(M)}function I(){h.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:F,acquireProgram:N,releaseProgram:O,releaseShaderCache:L,programs:m,dispose:I}}function J3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function $3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function Ex(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bx(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,T,D,y,x){let C=o[e];return C===void 0?(C={id:_.id,object:_,geometry:E,material:T,materialVariant:d(_),groupOrder:D,renderOrder:_.renderOrder,z:y,group:x},o[e]=C):(C.id=_.id,C.object=_,C.geometry=E,C.material=T,C.materialVariant=d(_),C.groupOrder=D,C.renderOrder=_.renderOrder,C.z=y,C.group=x),e++,C}function p(_,E,T,D,y,x,C){C.reversedDepth===!0&&(y=-y);const F=h(_,E,T,D,y,x);T.transmission>0?s.push(F):T.transparent===!0?l.push(F):i.push(F)}function m(_,E,T,D,y,x){const C=h(_,E,T,D,y,x);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function S(_,E){i.length>1&&i.sort(_||$3),s.length>1&&s.sort(E||Ex),l.length>1&&l.sort(E||Ex)}function v(){for(let _=e,E=o.length;_<E;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:p,unshift:m,finish:v,sort:S}}function tw(){let o=new WeakMap;function e(s,l){const f=o.get(s);let d;return f===void 0?(d=new bx,o.set(s,[d])):l>=f.length?(d=new bx,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function ew(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new st,color:new Ie};break;case"SpotLight":i={position:new st,direction:new st,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function nw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iw=0;function aw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sw(o){const e=new ew,i=nw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new st);const l=new st,f=new on,d=new on;function h(m){let S=0,v=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let E=0,T=0,D=0,y=0,x=0,C=0,F=0,N=0,O=0,L=0,I=0,M=0,U=0,z=0;m.sort(aw);for(let q=0,at=m.length;q<at;q++){const j=m[q],tt=j.color,W=j.intensity,Z=j.distance;let ht=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===tr?ht=j.shadow.map.texture:ht=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)S+=tt.r*W,v+=tt.g*W,_+=tt.b*W;else if(j.isLightProbe){for(let ut=0;ut<9;ut++)s.probe[ut].addScaledVector(j.sh.coefficients[ut],W);z++}else if(j.isSunLight){const ut=e.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const mt=j.shadow,Et=i.get(j);Et.shadowIntensity=mt.intensity,Et.shadowBias=mt.bias,Et.shadowNormalBias=mt.normalBias,Et.shadowRadius=mt.radius,Et.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),s.sunShadow[T]=Et,s.sunShadowMap[T]=ht;const Zt=mt.getViewportCount();for(let qt=0;qt<Zt;qt++)s.sunShadowMatrix[D+qt]=mt.getMatrix(qt),s.sunShadowCascade[D+qt]=mt._cascadeData[qt];D+=Zt,T++}s.sun[E]=ut,E++}else if(j.isDirectionalLight){const ut=e.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const mt=j.shadow,Et=i.get(j);Et.shadowIntensity=mt.intensity,Et.shadowBias=mt.bias,Et.shadowNormalBias=mt.normalBias,Et.shadowRadius=mt.radius,Et.shadowMapSize=mt.mapSize,s.directionalShadow[y]=Et,s.directionalShadowMap[y]=ht,s.directionalShadowMatrix[y]=j.shadow.matrix,O++}s.directional[y]=ut,y++}else if(j.isSpotLight){const ut=e.get(j);ut.position.setFromMatrixPosition(j.matrixWorld),ut.color.copy(tt).multiplyScalar(W),ut.distance=Z,ut.coneCos=Math.cos(j.angle),ut.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ut.decay=j.decay,s.spot[C]=ut;const mt=j.shadow;if(j.map&&(s.spotLightMap[M]=j.map,M++,mt.updateMatrices(j),j.castShadow&&U++),s.spotLightMatrix[C]=mt.matrix,j.castShadow){const Et=i.get(j);Et.shadowIntensity=mt.intensity,Et.shadowBias=mt.bias,Et.shadowNormalBias=mt.normalBias,Et.shadowRadius=mt.radius,Et.shadowMapSize=mt.mapSize,s.spotShadow[C]=Et,s.spotShadowMap[C]=ht,I++}C++}else if(j.isRectAreaLight){const ut=e.get(j);ut.color.copy(tt).multiplyScalar(W),ut.halfWidth.set(j.width*.5,0,0),ut.halfHeight.set(0,j.height*.5,0),s.rectArea[F]=ut,F++}else if(j.isPointLight){const ut=e.get(j);if(ut.color.copy(j.color).multiplyScalar(j.intensity),ut.distance=j.distance,ut.decay=j.decay,j.castShadow){const mt=j.shadow,Et=i.get(j);Et.shadowIntensity=mt.intensity,Et.shadowBias=mt.bias,Et.shadowNormalBias=mt.normalBias,Et.shadowRadius=mt.radius,Et.shadowMapSize=mt.mapSize,Et.shadowCameraNear=mt.camera.near,Et.shadowCameraFar=mt.camera.far,s.pointShadow[x]=Et,s.pointShadowMap[x]=ht,s.pointShadowMatrix[x]=j.shadow.matrix,L++}s.point[x]=ut,x++}else if(j.isHemisphereLight){const ut=e.get(j);ut.skyColor.copy(j.color).multiplyScalar(W),ut.groundColor.copy(j.groundColor).multiplyScalar(W),s.hemi[N]=ut,N++}}F>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.sunLength!==E||k.directionalLength!==y||k.pointLength!==x||k.spotLength!==C||k.rectAreaLength!==F||k.hemiLength!==N||k.numSunShadows!==T||k.numDirectionalShadows!==O||k.numPointShadows!==L||k.numSpotShadows!==I||k.numSpotMaps!==M||k.numLightProbes!==z)&&(s.sun.length=E,s.directional.length=y,s.spot.length=C,s.rectArea.length=F,s.point.length=x,s.hemi.length=N,s.sunShadow.length=T,s.sunShadowMap.length=T,s.sunShadowMatrix.length=D,s.sunShadowCascade.length=D,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.directionalShadowMatrix.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.pointShadowMatrix.length=L,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+M-U,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=z,k.sunLength=E,k.directionalLength=y,k.pointLength=x,k.spotLength=C,k.rectAreaLength=F,k.hemiLength=N,k.numSunShadows=T,k.numDirectionalShadows=O,k.numPointShadows=L,k.numSpotShadows=I,k.numSpotMaps=M,k.numLightProbes=z,s.version=iw++)}function p(m,S){let v=0,_=0,E=0,T=0,D=0,y=0;const x=S.matrixWorldInverse;for(let C=0,F=m.length;C<F;C++){const N=m[C];if(N.isSunLight){const O=s.sun[v];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(x),v++}else if(N.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),_++}else if(N.isSpotLight){const O=s.spot[T];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),T++}else if(N.isRectAreaLight){const O=s.rectArea[D];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),d.identity(),f.copy(N.matrixWorld),f.premultiply(x),d.extractRotation(f),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),D++}else if(N.isPointLight){const O=s.point[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(x),E++}else if(N.isHemisphereLight){const O=s.hemi[y];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(x),y++}}}return{setup:h,setupView:p,state:s}}function Tx(o){const e=new sw(o),i=[],s=[],l=[];function f(_){v.camera=_,i.length=0,s.length=0,l.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function p(_){l.push(_)}function m(){e.setup(i)}function S(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function rw(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new Tx(o),e.set(l,[h])):f>=d.length?(h=new Tx(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cw=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],uw=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],Ax=new on,ml=new st,Kh=new st;function fw(o,e,i){let s=new am;const l=new Me,f=new Me,d=new rn,h=new v1,p=new x1,m={},S=i.maxTextureSize,v={[Js]:ti,[ti]:Js,[La]:La},_=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ow,fragmentShader:lw}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new ei;T.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Rn(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let x=this.type;this.render=function(L,I,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===sb&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yu);const U=o.getRenderTarget(),z=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),q=o.state;q.setBlending(Ia),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const at=x!==this.type;at&&I.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(tt=>tt.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,tt=L.length;j<tt;j++){const W=L[j],Z=W.shadow;if(Z===void 0){re("WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ht=Z.getFrameExtents();l.multiply(ht),f.copy(Z.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/ht.x),l.x=f.x*ht.x,Z.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/ht.y),l.y=f.y*ht.y,Z.mapSize.y=f.y));const ut=o.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ut,Z.map===null||at===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===gl){if(W.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Gi(l.x,l.y,{format:tr,type:fa,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),Z.map.texture.name=W.name+".shadowMap",Z.map.depthTexture=new bl(l.x,l.y,ra),Z.map.depthTexture.name=W.name+".shadowMapDepth",Z.map.depthTexture.format=Ba,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=In,Z.map.depthTexture.magFilter=In}else W.isPointLight?(Z.map=new DS(l.x),Z.map.depthTexture=new d1(l.x,ua)):(Z.map=new Gi(l.x,l.y),Z.map.depthTexture=new bl(l.x,l.y,ua)),Z.map.depthTexture.name=W.name+".shadowMap",Z.map.depthTexture.format=Ba,this.type===yu?(Z.map.depthTexture.compareFunction=ut?em:tm,Z.map.depthTexture.minFilter=Hn,Z.map.depthTexture.magFilter=Hn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=In,Z.map.depthTexture.magFilter=In);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==l.x||Z.map.height!==l.y)&&Z.map.setSize(l.x,l.y);const mt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();W.isPointLight!==!0&&Z.updateMatrices(W,M);for(let Et=0;Et<mt;Et++){const Zt=Z.getCamera(Et);if(W.isPointLight){const qt=Z.camera,H=Z.matrix,_t=W.distance||qt.far;_t!==qt.far&&(qt.far=_t,qt.updateProjectionMatrix()),ml.setFromMatrixPosition(W.matrixWorld),qt.position.copy(ml),Kh.copy(qt.position),Kh.add(cw[Et]),qt.up.copy(uw[Et]),qt.lookAt(Kh),qt.updateMatrixWorld(),H.makeTranslation(-ml.x,-ml.y,-ml.z),Ax.multiplyMatrices(qt.projectionMatrix,qt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Ax,qt.coordinateSystem,qt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)o.setRenderTarget(Z.map,Et),o.clear();else{Et===0&&(o.setRenderTarget(Z.map),o.clear());const qt=Z.getViewport(Et);d.set(f.x*qt.x,f.y*qt.y,f.x*qt.z,f.y*qt.w),q.viewport(d)}s=Z.getFrustum(Et),N(I,M,Zt,W,this.type)}Z.isPointLightShadow!==!0&&this.type===gl&&C(Z,M),Z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(U,z,k)};function C(L,I){const M=e.update(D);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null?L.mapPass=new Gi(l.x,l.y,{format:tr,type:fa}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(I,null,M,_,D,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value.set(L.map.width,L.map.height),E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(I,null,M,E,D,null)}function F(L,I,M,U){let z=null;const k=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)z=k;else if(z=M.isPointLight===!0?p:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const q=z.uuid,at=I.uuid;let j=m[q];j===void 0&&(j={},m[q]=j);let tt=j[at];tt===void 0&&(tt=z.clone(),j[at]=tt,I.addEventListener("dispose",O)),z=tt}if(z.visible=I.visible,z.wireframe=I.wireframe,U===gl?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:v[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,M.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=o.properties.get(z);q.light=M}return z}function N(L,I,M,U,z){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===gl)&&(!L.frustumCulled||L.intersectsFrustum(s))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const at=e.update(L),j=L.material;if(Array.isArray(j)){const tt=at.groups;for(let W=0,Z=tt.length;W<Z;W++){const ht=tt[W],ut=j[ht.materialIndex];if(ut&&ut.visible){const mt=F(L,ut,U,z);L.onBeforeShadow(o,L,I,M,at,mt,ht),o.renderBufferDirect(M,null,at,mt,L,ht),L.onAfterShadow(o,L,I,M,at,mt,ht)}}}else if(j.visible){const tt=F(L,j,U,z);L.onBeforeShadow(o,L,I,M,at,tt,null),o.renderBufferDirect(M,null,at,tt,L,null),L.onAfterShadow(o,L,I,M,at,tt,null)}}const q=L.children;for(let at=0,j=q.length;at<j;at++)N(q[at],I,M,U,z)}function O(L){L.target.removeEventListener("dispose",O);for(const M in m){const U=m[M],z=L.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}}function dw(o,e){function i(){let Y=!1;const Dt=new rn;let Mt=null;const Ut=new rn(0,0,0,0);return{setMask:function(Vt){Mt!==Vt&&!Y&&(o.colorMask(Vt,Vt,Vt,Vt),Mt=Vt)},setLocked:function(Vt){Y=Vt},setClear:function(Vt,bt,Jt,Gt,De){De===!0&&(Vt*=Gt,bt*=Gt,Jt*=Gt),Dt.set(Vt,bt,Jt,Gt),Ut.equals(Dt)===!1&&(o.clearColor(Vt,bt,Jt,Gt),Ut.copy(Dt))},reset:function(){Y=!1,Mt=null,Ut.set(-1,0,0,0)}}}function s(){let Y=!1,Dt=!1,Mt=null,Ut=null,Vt=null;return{setReversed:function(bt){if(Dt!==bt){const Jt=e.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Dt=bt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return Dt},setTest:function(bt){bt?pt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(bt){Mt!==bt&&!Y&&(o.depthMask(bt),Mt=bt)},setFunc:function(bt){if(Dt&&(bt=Hb[bt]),Ut!==bt){switch(bt){case $h:o.depthFunc(o.NEVER);break;case tp:o.depthFunc(o.ALWAYS);break;case ep:o.depthFunc(o.LESS);break;case Sl:o.depthFunc(o.LEQUAL);break;case np:o.depthFunc(o.EQUAL);break;case ip:o.depthFunc(o.GEQUAL);break;case ap:o.depthFunc(o.GREATER);break;case sp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=bt}},setLocked:function(bt){Y=bt},setClear:function(bt){Vt!==bt&&(Vt=bt,Dt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){Y=!1,Mt=null,Ut=null,Vt=null,Dt=!1}}}function l(){let Y=!1,Dt=null,Mt=null,Ut=null,Vt=null,bt=null,Jt=null,Gt=null,De=null;return{setTest:function(ue){Y||(ue?pt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(ue){Dt!==ue&&!Y&&(o.stencilMask(ue),Dt=ue)},setFunc:function(ue,ni,_i){(Mt!==ue||Ut!==ni||Vt!==_i)&&(o.stencilFunc(ue,ni,_i),Mt=ue,Ut=ni,Vt=_i)},setOp:function(ue,ni,_i){(bt!==ue||Jt!==ni||Gt!==_i)&&(o.stencilOp(ue,ni,_i),bt=ue,Jt=ni,Gt=_i)},setLocked:function(ue){Y=ue},setClear:function(ue){De!==ue&&(o.clearStencil(ue),De=ue)},reset:function(){Y=!1,Dt=null,Mt=null,Ut=null,Vt=null,bt=null,Jt=null,Gt=null,De=null}}}const f=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let S={},v={},_={},E=new WeakMap,T=[],D=null,y=!1,x=null,C=null,F=null,N=null,O=null,L=null,I=null,M=new Ie(0,0,0),U=0,z=!1,k=null,q=null,at=null,j=null,tt=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ht=0;const ut=o.getParameter(o.VERSION);ut.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(ut)[1]),Z=ht>=1):ut.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),Z=ht>=2);let mt=null,Et={};const Zt=o.getParameter(o.SCISSOR_BOX),qt=o.getParameter(o.VIEWPORT),H=new rn().fromArray(Zt),_t=new rn().fromArray(qt);function wt(Y,Dt,Mt,Ut){const Vt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(Y,bt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Mt;Jt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(Dt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return bt}const Q={};Q[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pt(o.DEPTH_TEST),d.setFunc(Sl),te(!1),ne(Cv),pt(o.CULL_FACE),he(Ia);function pt(Y){S[Y]!==!0&&(o.enable(Y),S[Y]=!0)}function At(Y){S[Y]!==!1&&(o.disable(Y),S[Y]=!1)}function It(Y,Dt){return _[Y]!==Dt?(o.bindFramebuffer(Y,Dt),_[Y]=Dt,Y===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Dt),Y===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function vt(Y,Dt){let Mt=T,Ut=!1;if(Y){Mt=E.get(Dt),Mt===void 0&&(Mt=[],E.set(Dt,Mt));const Vt=Y.textures;if(Mt.length!==Vt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Jt=Vt.length;bt<Jt;bt++)Mt[bt]=o.COLOR_ATTACHMENT0+bt;Mt.length=Vt.length,Ut=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(Mt)}function Ct(Y){return D!==Y?(o.useProgram(Y),D=Y,!0):!1}const Pe={[no]:o.FUNC_ADD,[ob]:o.FUNC_SUBTRACT,[lb]:o.FUNC_REVERSE_SUBTRACT};Pe[cb]=o.MIN,Pe[ub]=o.MAX;const ce={[fb]:o.ZERO,[db]:o.ONE,[hb]:o.SRC_COLOR,[Jx]:o.SRC_ALPHA,[xb]:o.SRC_ALPHA_SATURATE,[_b]:o.DST_COLOR,[mb]:o.DST_ALPHA,[pb]:o.ONE_MINUS_SRC_COLOR,[$x]:o.ONE_MINUS_SRC_ALPHA,[vb]:o.ONE_MINUS_DST_COLOR,[gb]:o.ONE_MINUS_DST_ALPHA,[Sb]:o.CONSTANT_COLOR,[yb]:o.ONE_MINUS_CONSTANT_COLOR,[Mb]:o.CONSTANT_ALPHA,[Eb]:o.ONE_MINUS_CONSTANT_ALPHA};function he(Y,Dt,Mt,Ut,Vt,bt,Jt,Gt,De,ue){if(Y===Ia){y===!0&&(At(o.BLEND),y=!1);return}if(y===!1&&(pt(o.BLEND),y=!0),Y!==rb){if(Y!==x||ue!==z){if((C!==no||O!==no)&&(o.blendEquation(o.FUNC_ADD),C=no,O=no),ue)switch(Y){case xl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jh:o.blendFunc(o.ONE,o.ONE);break;case Nv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case xl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Nv:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dv:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",Y);break}F=null,N=null,L=null,I=null,M.set(0,0,0),U=0,x=Y,z=ue}return}Vt=Vt||Dt,bt=bt||Mt,Jt=Jt||Ut,(Dt!==C||Vt!==O)&&(o.blendEquationSeparate(Pe[Dt],Pe[Vt]),C=Dt,O=Vt),(Mt!==F||Ut!==N||bt!==L||Jt!==I)&&(o.blendFuncSeparate(ce[Mt],ce[Ut],ce[bt],ce[Jt]),F=Mt,N=Ut,L=bt,I=Jt),(Gt.equals(M)===!1||De!==U)&&(o.blendColor(Gt.r,Gt.g,Gt.b,De),M.copy(Gt),U=De),x=Y,z=!1}function ge(Y,Dt){Y.side===La?At(o.CULL_FACE):pt(o.CULL_FACE);let Mt=Y.side===ti;Dt&&(Mt=!Mt),te(Mt),Y.blending===xl&&Y.transparent===!1?he(Ia):he(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),f.setMask(Y.colorWrite);const Ut=Y.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),nn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(Y){k!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),k=Y)}function ne(Y){Y!==ib?(pt(o.CULL_FACE),Y!==q&&(Y===Cv?o.cullFace(o.BACK):Y===ab?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),q=Y}function Be(Y){Y!==at&&(Z&&o.lineWidth(Y),at=Y)}function nn(Y,Dt,Mt){Y?(pt(o.POLYGON_OFFSET_FILL),(j!==Dt||tt!==Mt)&&(j=Dt,tt=Mt,d.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,Mt))):At(o.POLYGON_OFFSET_FILL)}function Ee(Y){Y?pt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function je(Y){Y===void 0&&(Y=o.TEXTURE0+W-1),mt!==Y&&(o.activeTexture(Y),mt=Y)}function X(Y,Dt,Mt){Mt===void 0&&(mt===null?Mt=o.TEXTURE0+W-1:Mt=mt);let Ut=Et[Mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Et[Mt]=Ut),(Ut.type!==Y||Ut.texture!==Dt)&&(mt!==Mt&&(o.activeTexture(Mt),mt=Mt),o.bindTexture(Y,Dt||Q[Y]),Ut.type=Y,Ut.texture=Dt)}function Je(){const Y=Et[mt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ye(){try{o.compressedTexImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function b(){try{o.texSubImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function et(){try{o.texSubImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function it(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Tt(){try{o.texStorage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Rt(){try{o.texStorage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function gt(){try{o.texImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function St(){try{o.texImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Nt(Y){return v[Y]!==void 0?v[Y]:o.getParameter(Y)}function $t(Y,Dt){v[Y]!==Dt&&(o.pixelStorei(Y,Dt),v[Y]=Dt)}function Bt(Y){H.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),H.copy(Y))}function Pt(Y){_t.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),_t.copy(Y))}function kt(Y,Dt){let Mt=m.get(Dt);Mt===void 0&&(Mt=new WeakMap,m.set(Dt,Mt));let Ut=Mt.get(Y);Ut===void 0&&(Ut=o.getUniformBlockIndex(Dt,Y.name),Mt.set(Y,Ut))}function ie(Y,Dt){const Ut=m.get(Dt).get(Y);p.get(Dt)!==Ut&&(o.uniformBlockBinding(Dt,Ut,Y.__bindingPointIndex),p.set(Dt,Ut))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},mt=null,Et={},_={},E=new WeakMap,T=[],D=null,y=!1,x=null,C=null,F=null,N=null,O=null,L=null,I=null,M=new Ie(0,0,0),U=0,z=!1,k=null,q=null,at=null,j=null,tt=null,H.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:pt,disable:At,bindFramebuffer:It,drawBuffers:vt,useProgram:Ct,setBlending:he,setMaterial:ge,setFlipSided:te,setCullFace:ne,setLineWidth:Be,setPolygonOffset:nn,setScissorTest:Ee,activeTexture:je,bindTexture:X,unbindTexture:Je,compressedTexImage2D:ye,compressedTexImage3D:P,texImage2D:gt,texImage3D:St,pixelStorei:$t,getParameter:Nt,updateUBOMapping:kt,uniformBlockBinding:ie,texStorage2D:Tt,texStorage3D:Rt,texSubImage2D:b,texSubImage3D:et,compressedTexSubImage2D:rt,compressedTexSubImage3D:it,scissor:Bt,viewport:Pt,reset:le}}function hw(o,e,i,s,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Me,S=new WeakMap,v=new Set;let _;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(P,b){return T?new OffscreenCanvas(P,b):Du("canvas")}function y(P,b,et){let rt=1;const it=ye(P);if((it.width>et||it.height>et)&&(rt=et/Math.max(it.width,it.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Tt=Math.floor(rt*it.width),Rt=Math.floor(rt*it.height);_===void 0&&(_=D(Tt,Rt));const gt=b?D(Tt,Rt):_;return gt.width=Tt,gt.height=Rt,gt.getContext("2d").drawImage(P,0,0,Tt,Rt),re("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Tt+"x"+Rt+")."),gt}else return"data"in P&&re("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function x(P){return P.generateMipmaps}function C(P){o.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(P,b,et,rt,it,Tt=!1){if(P!==null){if(o[P]!==void 0)return o[P];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Rt;rt&&(Rt=e.get("EXT_texture_norm16"),Rt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=b;if(b===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8),et===o.UNSIGNED_SHORT&&Rt&&(gt=Rt.R16_EXT),et===o.SHORT&&Rt&&(gt=Rt.R16_SNORM_EXT)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8),et===o.UNSIGNED_SHORT&&Rt&&(gt=Rt.RG16_EXT),et===o.SHORT&&Rt&&(gt=Rt.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_SHORT&&Rt&&(gt=Rt.RGB16_EXT),et===o.SHORT&&Rt&&(gt=Rt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),b===o.RGBA){const St=Tt?Nu:Le.getTransfer(it);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=St===qe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Rt&&(gt=Rt.RGBA16_EXT),et===o.SHORT&&Rt&&(gt=Rt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function O(P,b){let et;return P?b===null||b===ua||b===Ml?et=o.DEPTH24_STENCIL8:b===ra?et=o.DEPTH32F_STENCIL8:b===yl&&(et=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ua||b===Ml?et=o.DEPTH_COMPONENT24:b===ra?et=o.DEPTH_COMPONENT32F:b===yl&&(et=o.DEPTH_COMPONENT16),et}function L(P,b){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=P.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&S.delete(b),b.isHTMLTexture&&v.delete(b)}function M(P){const b=P.target;b.removeEventListener("dispose",M),k(b)}function U(P){const b=s.get(P);if(b.__webglInit===void 0)return;const et=P.source,rt=E.get(et);if(rt){const it=rt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&z(P),Object.keys(rt).length===0&&E.delete(et)}s.remove(P)}function z(P){const b=s.get(P);o.deleteTexture(b.__webglTexture);const et=P.source,rt=E.get(et);delete rt[b.__cacheKey],d.memory.textures--}function k(P){const b=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let it=0;it<b.__webglFramebuffer[rt].length;it++)o.deleteFramebuffer(b.__webglFramebuffer[rt][it]);else o.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)o.deleteFramebuffer(b.__webglFramebuffer[rt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=P.textures;for(let rt=0,it=et.length;rt<it;rt++){const Tt=s.get(et[rt]);Tt.__webglTexture&&(o.deleteTexture(Tt.__webglTexture),d.memory.textures--),s.remove(et[rt])}s.remove(P)}let q=0;function at(){q=0}function j(){return q}function tt(P){q=P}function W(){const P=q;return P>=l.maxTextures&&re("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),q+=1,P}function Z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ht(P,b){const et=s.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const rt=P.image;if(rt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{At(et,P,b);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function ut(P,b){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){At(et,P,b);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function mt(P,b){const et=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){At(et,P,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Et(P,b){const et=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){It(et,P,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const Zt={[rp]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[op]:o.MIRRORED_REPEAT},qt={[In]:o.NEAREST,[Ab]:o.NEAREST_MIPMAP_NEAREST,[Kc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[Sh]:o.LINEAR_MIPMAP_NEAREST,[Ks]:o.LINEAR_MIPMAP_LINEAR},H={[Nb]:o.NEVER,[Ib]:o.ALWAYS,[Db]:o.LESS,[tm]:o.LEQUAL,[Ub]:o.EQUAL,[em]:o.GEQUAL,[Lb]:o.GREATER,[Ob]:o.NOTEQUAL};function _t(P,b){if(b.type===ra&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===Sh||b.magFilter===Kc||b.magFilter===Ks||b.minFilter===Hn||b.minFilter===Sh||b.minFilter===Kc||b.minFilter===Ks)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Zt[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Zt[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Zt[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,qt[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,qt[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===In||b.minFilter!==Kc&&b.minFilter!==Ks||b.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function wt(P,b){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const rt=b.source;let it=E.get(rt);it===void 0&&(it={},E.set(rt,it));const Tt=Z(b);if(Tt!==P.__cacheKey){it[Tt]===void 0&&(it[Tt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),it[Tt].usedTimes++;const Rt=it[P.__cacheKey];Rt!==void 0&&(it[P.__cacheKey].usedTimes--,Rt.usedTimes===0&&z(b)),P.__cacheKey=Tt,P.__webglTexture=it[Tt].texture}return et}function Q(P,b,et){return Math.floor(Math.floor(P/et)/b)}function pt(P,b,et,rt){const Tt=P.updateRanges;if(Tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,rt,b.data);else{Tt.sort(($t,Bt)=>$t.start-Bt.start);let Rt=0;for(let $t=1;$t<Tt.length;$t++){const Bt=Tt[Rt],Pt=Tt[$t],kt=Bt.start+Bt.count,ie=Q(Pt.start,b.width,4),le=Q(Bt.start,b.width,4);Pt.start<=kt+1&&ie===le&&Q(Pt.start+Pt.count-1,b.width,4)===ie?Bt.count=Math.max(Bt.count,Pt.start+Pt.count-Bt.start):(++Rt,Tt[Rt]=Pt)}Tt.length=Rt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),St=i.getParameter(o.UNPACK_SKIP_PIXELS),Nt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let $t=0,Bt=Tt.length;$t<Bt;$t++){const Pt=Tt[$t],kt=Math.floor(Pt.start/4),ie=Math.ceil(Pt.count/4),le=kt%b.width,Y=Math.floor(kt/b.width),Dt=ie,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,le,Y,Dt,Mt,et,rt,b.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,St),i.pixelStorei(o.UNPACK_SKIP_ROWS,Nt)}}function At(P,b,et){let rt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=o.TEXTURE_3D);const it=wt(P,b),Tt=b.source;i.bindTexture(rt,P.__webglTexture,o.TEXTURE0+et);const Rt=s.get(Tt);if(Tt.version!==Rt.__version||it===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Mt=Le.getPrimaries(Le.workingColorSpace),Ut=b.colorSpace===vs?null:Le.getPrimaries(b.colorSpace),Vt=b.colorSpace===vs||Mt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let St=y(b.image,!1,l.maxTextureSize);St=Je(b,St);const Nt=f.convert(b.format,b.colorSpace),$t=f.convert(b.type);let Bt=N(b.internalFormat,Nt,$t,b.normalized,b.colorSpace,b.isVideoTexture);_t(rt,b);let Pt;const kt=b.mipmaps,ie=b.isVideoTexture!==!0,le=Rt.__version===void 0||it===!0,Y=Tt.dataReady,Dt=L(b,St);if(b.isDepthTexture)Bt=O(b.format===Qs,b.type),le&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Bt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Bt,St.width,St.height,0,Nt,$t,null));else if(b.isDataTexture)if(kt.length>0){ie&&le&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,kt[0].width,kt[0].height);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Pt=kt[Mt],ie?Y&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Nt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Pt.width,Pt.height,0,Nt,$t,Pt.data);b.generateMipmaps=!1}else ie?(le&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,St.width,St.height),Y&&pt(b,St,Nt,$t)):i.texImage2D(o.TEXTURE_2D,0,Bt,St.width,St.height,0,Nt,$t,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,kt[0].width,kt[0].height,St.depth);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)if(Pt=kt[Mt],b.format!==Hi)if(Nt!==null)if(ie){if(Y)if(b.layerUpdates.size>0){const Vt=ax(Pt.width,Pt.height,b.format,b.type);for(const bt of b.layerUpdates){const Jt=Pt.data.subarray(bt*Vt/Pt.data.BYTES_PER_ELEMENT,(bt+1)*Vt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,bt,Pt.width,Pt.height,1,Nt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,St.depth,Nt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,Pt.width,Pt.height,St.depth,0,Pt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,St.depth,Nt,$t,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,Pt.width,Pt.height,St.depth,0,Nt,$t,Pt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ie&&le&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,kt[0].width,kt[0].height);for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Pt=kt[Mt],b.format!==Hi?Nt!==null?ie?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Nt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Bt,Pt.width,Pt.height,0,Pt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Y&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Nt,$t,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Pt.width,Pt.height,0,Nt,$t,Pt.data)}else if(b.isDataArrayTexture)if(ie){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,St.width,St.height,St.depth),Y)if(b.layerUpdates.size>0){const Mt=ax(St.width,St.height,b.format,b.type);for(const Ut of b.layerUpdates){const Vt=St.data.subarray(Ut*Mt/St.data.BYTES_PER_ELEMENT,(Ut+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,St.width,St.height,1,Nt,$t,Vt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Nt,$t,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,St.width,St.height,St.depth,0,Nt,$t,St.data);else if(b.isData3DTexture)ie?(le&&i.texStorage3D(o.TEXTURE_3D,Dt,Bt,St.width,St.height,St.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Nt,$t,St.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,St.width,St.height,St.depth,0,Nt,$t,St.data);else if(b.isFramebufferTexture){if(le)if(ie)i.texStorage2D(o.TEXTURE_2D,Dt,Bt,St.width,St.height);else{let Mt=St.width,Ut=St.height;for(let Vt=0;Vt<Dt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,Bt,Mt,Ut,0,Nt,$t,null),Mt>>=1,Ut>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),St.parentNode!==Mt){Mt.appendChild(St),v.add(b),Mt.onpaint=Ut=>{const Vt=Ut.changedElements;for(const bt of v)Vt.includes(bt.image)&&(bt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,St);else{const Vt=o.RGBA,bt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,bt,Jt,St)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ie&&le){const Mt=ye(kt[0]);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height)}for(let Mt=0,Ut=kt.length;Mt<Ut;Mt++)Pt=kt[Mt],ie?Y&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Nt,$t,Pt):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Nt,$t,Pt);b.generateMipmaps=!1}else if(ie){if(le){const Mt=ye(St);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,$t,St)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Nt,$t,St);x(b)&&C(rt),Rt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function It(P,b,et){if(b.image.length!==6)return;const rt=wt(P,b),it=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const Tt=s.get(it);if(it.version!==Tt.__version||rt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Le.getPrimaries(Le.workingColorSpace),gt=b.colorSpace===vs?null:Le.getPrimaries(b.colorSpace),St=b.colorSpace===vs||Rt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Nt=b.isCompressedTexture||b.image[0].isCompressedTexture,$t=b.image[0]&&b.image[0].isDataTexture,Bt=[];for(let bt=0;bt<6;bt++)!Nt&&!$t?Bt[bt]=y(b.image[bt],!0,l.maxCubemapSize):Bt[bt]=$t?b.image[bt].image:b.image[bt],Bt[bt]=Je(b,Bt[bt]);const Pt=Bt[0],kt=f.convert(b.format,b.colorSpace),ie=f.convert(b.type),le=N(b.internalFormat,kt,ie,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,Dt=Tt.__version===void 0||rt===!0,Mt=it.dataReady;let Ut=L(b,Pt);_t(o.TEXTURE_CUBE_MAP,b);let Vt;if(Nt){Y&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,Pt.width,Pt.height);for(let bt=0;bt<6;bt++){Vt=Bt[bt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];b.format!==Hi?kt!==null?Y?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Gt.width,Gt.height,kt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,le,Gt.width,Gt.height,0,Gt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Gt.width,Gt.height,kt,ie,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,le,Gt.width,Gt.height,0,kt,ie,Gt.data)}}}else{if(Vt=b.mipmaps,Y&&Dt){Vt.length>0&&Ut++;const bt=ye(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if($t){Y?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Bt[bt].width,Bt[bt].height,kt,ie,Bt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,Bt[bt].width,Bt[bt].height,0,kt,ie,Bt[bt].data);for(let Jt=0;Jt<Vt.length;Jt++){const De=Vt[Jt].image[bt].image;Y?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,De.width,De.height,kt,ie,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,le,De.width,De.height,0,kt,ie,De.data)}}else{Y?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,kt,ie,Bt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,le,kt,ie,Bt[bt]);for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];Y?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,kt,ie,Gt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,le,kt,ie,Gt.image[bt])}}}x(b)&&C(o.TEXTURE_CUBE_MAP),Tt.__version=it.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function vt(P,b,et,rt,it,Tt){const Rt=f.convert(et.format,et.colorSpace),gt=f.convert(et.type),St=N(et.internalFormat,Rt,gt,et.normalized,et.colorSpace),Nt=s.get(b),$t=s.get(et);if($t.__renderTarget=b,!Nt.__hasExternalTextures){const Bt=Math.max(1,b.width>>Tt),Pt=Math.max(1,b.height>>Tt);it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?i.texImage3D(it,Tt,St,Bt,Pt,b.depth,0,Rt,gt,null):i.texImage2D(it,Tt,St,Bt,Pt,0,Rt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),je(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,it,$t.__webglTexture,0,Ee(b)):(it===o.TEXTURE_2D||it>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,it,$t.__webglTexture,Tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(P,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const rt=b.depthTexture,it=rt&&rt.isDepthTexture?rt.type:null,Tt=O(b.stencilBuffer,it),Rt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee(b),Tt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee(b),Tt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,P)}else{const rt=b.textures;for(let it=0;it<rt.length;it++){const Tt=rt[it],Rt=f.convert(Tt.format,Tt.colorSpace),gt=f.convert(Tt.type),St=N(Tt.internalFormat,Rt,gt,Tt.normalized,Tt.colorSpace);je(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee(b),St,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee(b),St,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,St,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(P,b,et){const rt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=s.get(b.depthTexture);if(it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),rt){if(it.__webglInit===void 0&&(it.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),it.__webglTexture===void 0){it.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),_t(o.TEXTURE_CUBE_MAP,b.depthTexture);const Nt=f.convert(b.depthTexture.format),$t=f.convert(b.depthTexture.type);let Bt;b.depthTexture.format===Ba?Bt=o.DEPTH_COMPONENT24:b.depthTexture.format===Qs&&(Bt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Bt,b.width,b.height,0,Nt,$t,null)}}else ht(b.depthTexture,0);const Tt=it.__webglTexture,Rt=Ee(b),gt=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,St=b.depthTexture.format===Qs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ba)je(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,gt,Tt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,St,gt,Tt,0);else if(b.depthTexture.format===Qs)je(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,gt,Tt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,St,gt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(P){const b=s.get(P),et=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const rt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",it)};rt.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=rt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(et)for(let rt=0;rt<6;rt++)Pe(b.__webglFramebuffer[rt],P,rt);else{const rt=P.texture.mipmaps;rt&&rt.length>0?Pe(b.__webglFramebuffer[0],P,0):Pe(b.__webglFramebuffer,P,0)}else if(et){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ct(b.__webglDepthbuffer[rt],P,!1);else{const it=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=b.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,Tt)}}else{const rt=P.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ct(b.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,Tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(P,b,et){const rt=s.get(P);b!==void 0&&vt(rt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&ce(P)}function ge(P){const b=P.texture,et=s.get(P),rt=s.get(b);P.addEventListener("dispose",M);const it=P.textures,Tt=P.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=b.version,d.memory.textures++),Tt){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let St=0;St<b.mipmaps.length;St++)et.__webglFramebuffer[gt][St]=o.createFramebuffer()}else et.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)et.__webglFramebuffer[gt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Rt)for(let gt=0,St=it.length;gt<St;gt++){const Nt=s.get(it[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&je(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<it.length;gt++){const St=it[gt];et.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);const Nt=f.convert(St.format,St.colorSpace),$t=f.convert(St.type),Bt=N(St.internalFormat,Nt,$t,St.normalized,St.colorSpace,P.isXRRenderTarget===!0),Pt=Ee(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Bt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),_t(o.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)vt(et.__webglFramebuffer[gt][St],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else vt(et.__webglFramebuffer[gt],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(b)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let gt=0,St=it.length;gt<St;gt++){const Nt=it[gt],$t=s.get(Nt);let Bt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Bt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,$t.__webglTexture),_t(Bt,Nt),vt(et.__webglFramebuffer,P,Nt,o.COLOR_ATTACHMENT0+gt,Bt,0),x(Nt)&&C(Bt)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,rt.__webglTexture),_t(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)vt(et.__webglFramebuffer[St],P,b,o.COLOR_ATTACHMENT0,gt,St);else vt(et.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,gt,0);x(b)&&C(gt),i.unbindTexture()}P.depthBuffer&&ce(P)}function te(P){const b=P.textures;for(let et=0,rt=b.length;et<rt;et++){const it=b[et];if(x(it)){const Tt=F(P),Rt=s.get(it).__webglTexture;i.bindTexture(Tt,Rt),C(Tt),i.unbindTexture()}}}const ne=[],Be=[];function nn(P){if(P.samples>0){if(je(P)===!1){const b=P.textures,et=P.width,rt=P.height;let it=o.COLOR_BUFFER_BIT;const Tt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=s.get(P),gt=b.length>1;if(gt)for(let Nt=0;Nt<b.length;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const St=P.texture.mipmaps;St&&St.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Nt=0;Nt<b.length;Nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Nt]);const $t=s.get(b[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,et,rt,0,0,et,rt,it,o.NEAREST),p===!0&&(ne.length=0,Be.length=0,ne.push(o.COLOR_ATTACHMENT0+Nt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(Tt),Be.push(Tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Be)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let Nt=0;Nt<b.length;Nt++){i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Nt]);const $t=s.get(b[Nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&p){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ee(P){return Math.min(l.maxSamples,P.samples)}function je(P){const b=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(P){const b=d.render.frame;S.get(P)!==b&&(S.set(P,b),P.update())}function Je(P,b){const et=P.colorSpace,rt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==Cu&&et!==vs&&(Le.getTransfer(et)===qe?(rt!==Hi||it!==gi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",et)),b}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=at,this.getTextureUnits=j,this.setTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=ut,this.setTexture3D=mt,this.setTextureCube=Et,this.rebindTextures=he,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function pw(o,e){function i(s,l=vs){let f;const d=Le.getTransfer(l);if(s===gi)return o.UNSIGNED_BYTE;if(s===Zp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Kp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===uS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===fS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===lS)return o.BYTE;if(s===cS)return o.SHORT;if(s===yl)return o.UNSIGNED_SHORT;if(s===jp)return o.INT;if(s===ua)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===fa)return o.HALF_FLOAT;if(s===dS)return o.ALPHA;if(s===hS)return o.RGB;if(s===Hi)return o.RGBA;if(s===Ba)return o.DEPTH_COMPONENT;if(s===Qs)return o.DEPTH_STENCIL;if(s===pS)return o.RED;if(s===Qp)return o.RED_INTEGER;if(s===tr)return o.RG;if(s===Jp)return o.RG_INTEGER;if(s===$p)return o.RGBA_INTEGER;if(s===Mu||s===Eu||s===bu||s===Tu)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Mu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Mu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lp||s===cp||s===up||s===fp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===lp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===up)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp||s===hp||s===pp||s===mp||s===gp||s===Ru||s===_p)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===dp||s===hp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===mp)return f.COMPRESSED_R11_EAC;if(s===gp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Ru)return f.COMPRESSED_RG11_EAC;if(s===_p)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===Rp||s===wp||s===Cp||s===Np||s===Dp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ap)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Np)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Up||s===Lp||s===Op)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Up)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Op)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ip||s===Pp||s===wu||s===Bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ip)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new TS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new da({vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rn(new Pu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vw extends er{constructor(e,i){super();const s=this;let l=null,f=1,d=null,h="local-floor",p=1,m=null,S=null,v=null,_=null,E=null,T=null;const D=typeof XRWebGLBinding<"u",y=new _w,x={},C=i.getContextAttributes();let F=null,N=null;const O=[],L=[],I=new Me;let M=null,U=null;const z=new pi;z.viewport=new rn;const k=new pi;k.viewport=new rn;const q=[z,k],at=new T1;let j=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=O[Q];return pt===void 0&&(pt=new Ch,O[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=O[Q];return pt===void 0&&(pt=new Ch,O[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=O[Q];return pt===void 0&&(pt=new Ch,O[Q]=pt),pt.getHandSpace()};function W(Q){const pt=L.indexOf(Q.inputSource);if(pt===-1)return;const At=O[pt];At!==void 0&&(At.update(Q.inputSource,Q.frame,m||d),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",Z),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<O.length;Q++){const pt=L[Q];pt!==null&&(L[Q]=null,O[Q].disconnect(pt))}j=null,tt=null,y.reset();for(const Q in x)delete x[Q];if(e.setRenderTarget(F),E=null,_=null,v=null,l=null,N=null,wt.stop(),s.isPresenting=!1,e.setPixelRatio(M),e.setSize(I.width,I.height,!1),U!==null){const Q=U.camera;Q.fov=U.fov,Q.zoom=U.zoom,Q.updateProjectionMatrix(),U=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",Z),l.addEventListener("inputsourceschange",ht),C.xrCompatible!==!0&&await i.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,It=null,vt=null;C.depth&&(vt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=C.stencil?Qs:Ba,It=C.stencil?Ml:ua);const Ct={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Ct),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Gi(_.textureWidth,_.textureHeight,{format:Hi,type:gi,depthTexture:new bl(_.textureWidth,_.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const At={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Gi(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const At=Q.removed[pt],It=L.indexOf(At);It>=0&&(L[It]=null,O[It].disconnect(At))}for(let pt=0;pt<Q.added.length;pt++){const At=Q.added[pt];let It=L.indexOf(At);if(It===-1){for(let Ct=0;Ct<O.length;Ct++)if(Ct>=L.length){L.push(At),It=Ct;break}else if(L[Ct]===null){L[Ct]=At,It=Ct;break}if(It===-1)break}const vt=O[It];vt&&vt.connect(At)}}const ut=new st,mt=new st;function Et(Q,pt,At){ut.setFromMatrixPosition(pt.matrixWorld),mt.setFromMatrixPosition(At.matrixWorld);const It=ut.distanceTo(mt),vt=pt.projectionMatrix.elements,Ct=At.projectionMatrix.elements,Pe=vt[14]/(vt[10]-1),ce=vt[14]/(vt[10]+1),he=(vt[9]+1)/vt[5],ge=(vt[9]-1)/vt[5],te=(vt[8]-1)/vt[0],ne=(Ct[8]+1)/Ct[0],Be=Pe*te,nn=Pe*ne,Ee=It/(-te+ne),je=Ee*-te;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(Ee),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),vt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const X=Pe+Ee,Je=ce+Ee,ye=Be-je,P=nn+(It-je),b=he*ce/Je*X,et=ge*ce/Je*X;Q.projectionMatrix.makePerspective(ye,P,b,et,X,Je),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Zt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,At=Q.far;y.texture!==null&&(y.depthNear>0&&(pt=y.depthNear),y.depthFar>0&&(At=y.depthFar)),at.near=k.near=z.near=pt,at.far=k.far=z.far=At,(j!==at.near||tt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),j=at.near,tt=at.far),at.layers.mask=Q.layers.mask|6,z.layers.mask=at.layers.mask&-5,k.layers.mask=at.layers.mask&-3;const It=Q.parent,vt=at.cameras;Zt(at,It);for(let Ct=0;Ct<vt.length;Ct++)Zt(vt[Ct],It);vt.length===2?Et(at,z,k):at.projectionMatrix.copy(z.projectionMatrix),U===null&&Q.isPerspectiveCamera&&(U={camera:Q,fov:Q.fov,zoom:Q.zoom}),qt(Q,at,It)};function qt(Q,pt,At){At===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Fp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(_===null&&E===null))return p},this.setFoveation=function(Q){p=Q,_!==null&&(_.fixedFoveation=Q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function(Q){return x[Q]};let H=null;function _t(Q,pt){if(S=pt.getViewerPose(m||d),T=pt,S!==null){const At=S.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let It=!1;At.length!==at.cameras.length&&(at.cameras.length=0,It=!0);for(let ce=0;ce<At.length;ce++){const he=At[ce];let ge=null;if(E!==null)ge=E.getViewport(he);else{const ne=v.getViewSubImage(_,he);ge=ne.viewport,ce===0&&(e.setRenderTargetTextures(N,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(N))}let te=q[ce];te===void 0&&(te=new pi,te.layers.enable(ce),te.viewport=new rn,q[ce]=te),te.matrix.fromArray(he.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(he.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ge.x,ge.y,ge.width,ge.height),ce===0&&(at.matrix.copy(te.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),It===!0&&at.cameras.push(te)}const vt=l.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const ce=v.getDepthInformation(At[0]);ce&&ce.isValid&&ce.texture&&y.init(ce,l.renderState)}if(vt&&vt.includes("camera-access")&&D){e.state.unbindTexture(),v=s.getBinding();for(let ce=0;ce<At.length;ce++){const he=At[ce].camera;if(he){let ge=x[he];ge||(ge=new TS,x[he]=ge);const te=v.getCameraImage(he);ge.sourceTexture=te}}}}for(let At=0;At<O.length;At++){const It=L[At],vt=O[At];It!==null&&vt!==void 0&&vt.update(It,pt,m||d)}H&&H(Q,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),T=null}const wt=new CS;wt.setAnimationLoop(_t),this.setAnimationLoop=function(Q){H=Q},this.dispose=function(){}}}const xw=new on,PS=new de;PS.set(-1,0,0,0,1,0,0,0,1);function Sw(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,AS(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,C,F,N){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(y,x):x.isMeshLambertMaterial?(f(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(y,x),v(y,x)):x.isMeshPhongMaterial?(f(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(y,x),_(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(f(y,x),T(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),D(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,C,F):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ti&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ti&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),F=C.envMap,N=C.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(PS),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,C,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=F*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function D(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function yw(o,e,i,s){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,O){const L=O.program;s.uniformBlockBinding(N,L)}function m(N,O){let L=l[N.id];L===void 0&&(y(N),L=S(N),l[N.id]=L,N.addEventListener("dispose",C));const I=O.program;s.updateUBOMapping(N,I);const M=e.render.frame;f[N.id]!==M&&(_(N),f[N.id]=M)}function S(N){const O=v();N.__bindingPointIndex=O;const L=o.createBuffer(),I=N.__size,M=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,I,M),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const O=l[N.id],L=N.uniforms,I=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let M=0,U=L.length;M<U;M++){const z=L[M];if(Array.isArray(z))for(let k=0,q=z.length;k<q;k++)E(z[k],M,k,I);else E(z,M,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(N,O,L,I){if(D(N,O,L,I)===!0){const M=N.__offset,U=N.value;if(Array.isArray(U)){let z=0;for(let k=0;k<U.length;k++){const q=U[k],at=x(q);T(q,N.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=at.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,N.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,M,N.__data)}}function T(N,O,L){typeof N=="number"||typeof N=="boolean"?O[0]=N:N.isMatrix3?(O[0]=N.elements[0],O[1]=N.elements[1],O[2]=N.elements[2],O[3]=0,O[4]=N.elements[3],O[5]=N.elements[4],O[6]=N.elements[5],O[7]=0,O[8]=N.elements[6],O[9]=N.elements[7],O[10]=N.elements[8],O[11]=0):ArrayBuffer.isView(N)?O.set(new N.constructor(N.buffer,N.byteOffset,O.length)):N.toArray(O,L)}function D(N,O,L,I){const M=N.value,U=O+"_"+L;if(I[U]===void 0)return typeof M=="number"||typeof M=="boolean"?I[U]=M:ArrayBuffer.isView(M)?I[U]=M.slice():I[U]=M.clone(),!0;{const z=I[U];if(typeof M=="number"||typeof M=="boolean"){if(z!==M)return I[U]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(z.equals(M)===!1)return z.copy(M),!0}}return!1}function y(N){const O=N.uniforms;let L=0;const I=16;for(let U=0,z=O.length;U<z;U++){const k=Array.isArray(O[U])?O[U]:[O[U]];for(let q=0,at=k.length;q<at;q++){const j=k[q],tt=Array.isArray(j.value)?j.value:[j.value];for(let W=0,Z=tt.length;W<Z;W++){const ht=tt[W],ut=x(ht),mt=L%I,Et=mt%ut.boundary,Zt=mt+Et;L+=Et,Zt!==0&&I-Zt<ut.storage&&(L+=I-Zt),j.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=ut.storage}}}const M=L%I;return M>0&&(L+=I-M),N.__size=L,N.__cache={},this}function x(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(O.boundary=16,O.storage=N.byteLength):re("WebGLRenderer: Unsupported uniform value type.",N),O}function C(N){const O=N.target;O.removeEventListener("dispose",C);const L=d.indexOf(O.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete f[O.id]}function F(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},f={}}return{bind:p,update:m,dispose:F}}const Mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function Ew(){return aa===null&&(aa=new c1(Mw,16,16,tr,fa),aa.name="DFG_LUT",aa.minFilter=Hn,aa.magFilter=Hn,aa.wrapS=Oa,aa.wrapT=Oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class bw{constructor(e={}){const{canvas:i=zb(),context:s=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=gi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const D=E,y=new Set([$p,Jp,Qp]),x=new Set([gi,ua,yl,Ml,Zp,Kp]),C=new Uint32Array(4),F=new Int32Array(4),N=new st;let O=null,L=null;const I=[],M=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let k=!1,q=null,at=null,j=null,tt=null;this._outputColorSpace=Ci;let W=0,Z=0,ht=null,ut=-1,mt=null;const Et=new rn,Zt=new rn;let qt=null;const H=new Ie(0);let _t=0,wt=i.width,Q=i.height,pt=1,At=null,It=null;const vt=new rn(0,0,wt,Q),Ct=new rn(0,0,wt,Q);let Pe=!1;const ce=new am;let he=!1,ge=!1;const te=new on,ne=new st,Be=new rn,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function je(){return ht===null?pt:1}let X=s;function Je(A,G){return i.getContext(A,G)}let ye,P,b,et,rt,it,Tt,Rt,gt,St,Nt,$t,Bt,Pt,kt,ie,le,Y,Dt,Mt,Ut,Vt,bt;try{const A={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yp}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ni,!1),X===null){const G="webgl2";if(X=Je(G,A),X===null)throw Je(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),Fe("WebGLRenderer: "+A.message),A}function Jt(){ye=new ER(X),ye.init(),Ut=new pw(X,ye),P=new hR(X,ye,e,Ut),b=new dw(X,ye),P.reversedDepthBuffer&&_&&b.buffers.depth.setReversed(!0),at=X.createFramebuffer(),j=X.createFramebuffer(),tt=X.createFramebuffer(),et=new AR(X),rt=new J3,it=new hw(X,ye,b,rt,P,Ut,et),Tt=new MR(z),Rt=new w1(X),Vt=new fR(X,Rt),gt=new bR(X,Rt,et,Vt),St=new wR(X,gt,Rt,Vt,et),Y=new RR(X,P,it),kt=new pR(rt),Nt=new Q3(z,Tt,ye,P,Vt,kt),$t=new Sw(z,rt),Bt=new tw,Pt=new rw(ye),le=new uR(z,Tt,b,St,T,p),ie=new fw(z,St,P),bt=new yw(X,et,P,b),Dt=new dR(X,ye,et),Mt=new TR(X,ye,et),et.programs=Nt.programs,z.capabilities=P,z.extensions=ye,z.properties=rt,z.renderLists=Bt,z.shadowMap=ie,z.state=b,z.info=et}D!==gi&&(U=new NR(D,i.width,i.height,h,l,f));const Gt=new vw(z,X);this.xr=Gt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(wt,Q,!1))},this.getSize=function(A){return A.set(wt,Q)},this.setSize=function(A,G,dt=!0){if(Gt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=A,Q=G,i.width=Math.floor(A*pt),i.height=Math.floor(G*pt),dt===!0&&(i.style.width=A+"px",i.style.height=G+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(wt*pt,Q*pt).floor()},this.setDrawingBufferSize=function(A,G,dt){wt=A,Q=G,pt=dt,i.width=Math.floor(A*dt),i.height=Math.floor(G*dt),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(D===gi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Et)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,G,dt,ot){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,G,dt,ot),b.viewport(Et.copy(vt).multiplyScalar(pt).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,G,dt,ot){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,G,dt,ot),b.scissor(Zt.copy(Ct).multiplyScalar(pt).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){b.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,dt=!0){let ot=0;if(A){let lt=!1;if(ht!==null){const zt=ht.texture.format;lt=y.has(zt)}if(lt){const zt=ht.texture.type,Xt=x.has(zt),Lt=le.getClearColor(),jt=le.getClearAlpha(),Kt=Lt.r,se=Lt.g,fe=Lt.b;Xt?(C[0]=Kt,C[1]=se,C[2]=fe,C[3]=jt,X.clearBufferuiv(X.COLOR,0,C)):(F[0]=Kt,F[1]=se,F[2]=fe,F[3]=jt,X.clearBufferiv(X.COLOR,0,F))}else ot|=X.COLOR_BUFFER_BIT}G&&(ot|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ni,!1),le.dispose(),Bt.dispose(),Pt.dispose(),rt.dispose(),Tt.dispose(),St.dispose(),Vt.dispose(),bt.dispose(),Nt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ms),Gt.removeEventListener("sessionend",Fa),Vi.stop()};function De(A){A.preventDefault(),Ov("WebGLRenderer: Context Lost."),k=!0}function ue(){Ov("WebGLRenderer: Context Restored."),k=!1;const A=et.autoReset,G=ie.enabled,dt=ie.autoUpdate,ot=ie.needsUpdate,lt=ie.type;Jt(),et.autoReset=A,ie.enabled=G,ie.autoUpdate=dt,ie.needsUpdate=ot,ie.type=lt}function ni(A){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _i(A){const G=A.target;G.removeEventListener("dispose",_i),Fu(G)}function Fu(A){nr(A),rt.remove(A)}function nr(A){const G=rt.get(A).programs;G!==void 0&&(G.forEach(function(dt){Nt.releaseProgram(dt)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,dt,ot,lt,zt){G===null&&(G=nn);const Xt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Lt=vo(A,G,dt,ot,lt);b.setMaterial(ot,Xt);let jt=dt.index,Kt=1;if(ot.wireframe===!0){if(jt=gt.getWireframeAttribute(dt),jt===void 0)return;Kt=2}const se=dt.drawRange,fe=dt.attributes.position;let Wt=se.start*Kt,be=(se.start+se.count)*Kt;zt!==null&&(Wt=Math.max(Wt,zt.start*Kt),be=Math.min(be,(zt.start+zt.count)*Kt)),jt!==null?(Wt=Math.max(Wt,0),be=Math.min(be,jt.count)):fe!=null&&(Wt=Math.max(Wt,0),be=Math.min(be,fe.count));const ve=be-Wt;if(ve<0||ve===1/0)return;Vt.setup(lt,ot,Lt,dt,jt);let Ze,Ve=Dt;if(jt!==null&&(Ze=Rt.get(jt),Ve=Mt,Ve.setIndex(Ze)),lt.isMesh)ot.wireframe===!0?(b.setLineWidth(ot.wireframeLinewidth*je()),Ve.setMode(X.LINES)):Ve.setMode(X.TRIANGLES);else if(lt.isLine){let vn=ot.linewidth;vn===void 0&&(vn=1),b.setLineWidth(vn*je()),lt.isLineSegments?Ve.setMode(X.LINES):lt.isLineLoop?Ve.setMode(X.LINE_LOOP):Ve.setMode(X.LINE_STRIP)}else lt.isPoints?Ve.setMode(X.POINTS):lt.isSprite&&Ve.setMode(X.TRIANGLES);if(lt.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))Ve.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const vn=lt._multiDrawStarts,Ft=lt._multiDrawCounts,ln=lt._multiDrawCount,Ue=jt?Rt.get(jt).bytesPerElement:1,Gn=rt.get(ot).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)Gn.setValue(X,"_gl_DrawID",ii),Ve.render(vn[ii]/Ue,Ft[ii])}else if(lt.isInstancedMesh)Ve.renderInstances(Wt,ve,lt.count);else if(dt.isInstancedBufferGeometry){const vn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ft=Math.min(dt.instanceCount,vn);Ve.renderInstances(Wt,ve,Ft)}else Ve.render(Wt,ve)};function ys(A,G,dt,ot){q!==null&&A.isNodeMaterial&&q.setObject(ot,A),he===!0&&kt.setState(A,dt,!1),A.transparent===!0&&A.side===La&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Es(A,G,ot),A.side=Js,A.needsUpdate=!0,Es(A,G,ot),A.side=La):Es(A,G,ot)}this.compile=function(A,G,dt=null){dt===null&&(dt=A),q!==null&&q.renderStart(A,G,dt),L=Pt.get(dt),L.init(G),M.push(L),dt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),A!==dt&&A.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),L.setupLights(),q!==null&&q.updateLights(L.state.lightsArray),ge=this.localClippingEnabled,he=kt.init(this.clippingPlanes,ge),he===!0&&kt.setGlobalState(this.clippingPlanes,G),q!==null&&ie.render(L.state.shadowsArray,dt,G);const ot=new Set;return A.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const zt=lt.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Lt=zt[Xt];ys(Lt,dt,G,lt),ot.add(Lt)}else ys(zt,dt,G,lt),ot.add(zt)}),L=M.pop(),q!==null&&q.renderEnd(),ot},this.compileAsync=function(A,G,dt=null){const ot=this.compile(A,G,dt);return new Promise(lt=>{function zt(){if(ot.forEach(function(Xt){const jt=rt.get(Xt).currentProgram;(jt===void 0||jt.isReady())&&ot.delete(Xt)}),ot.size===0){lt(A);return}setTimeout(zt,10)}ye.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let za=null;function ha(A){za&&za(A)}function Ms(){Vi.stop()}function Fa(){Vi.start()}const Vi=new CS;Vi.setAnimationLoop(ha),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){za=A,Gt.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Gt.addEventListener("sessionstart",Ms),Gt.addEventListener("sessionend",Fa),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(A,G);const dt=Gt.enabled===!0&&Gt.isPresenting===!0,ot=U!==null&&(ht===null||dt)&&U.begin(z,ht);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(G),G=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,G,ht),L=Pt.get(A,M.length),L.init(G),L.state.textureUnits=it.getTextureUnits(),M.push(L),te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix(te,oa,G.reversedDepth),ge=this.localClippingEnabled,he=kt.init(this.clippingPlanes,ge),O=Bt.get(A,I.length),O.init(),I.push(O),Gt.enabled===!0&&Gt.isPresenting===!0){const Xt=z.xr.getDepthSensingMesh();Xt!==null&&ho(Xt,G,-1/0,z.sortObjects)}ho(A,G,0,z.sortObjects),O.finish(),q!==null&&q.updateLights(L.state.lightsArray),z.sortObjects===!0&&O.sort(At,It),Ee=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ee&&le.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&kt.beginShadows();const lt=L.state.shadowsArray;if(ie.render(lt,A,G),he===!0&&kt.endShadows(),(ot&&U.hasRenderPass())===!1){const Xt=O.opaque,Lt=O.transmissive;if(L.setupLights(),G.isArrayCamera){const jt=G.cameras;if(Lt.length>0)for(let Kt=0,se=jt.length;Kt<se;Kt++){const fe=jt[Kt];ir(Xt,Lt,A,fe)}Ee&&le.render(A);for(let Kt=0,se=jt.length;Kt<se;Kt++){const fe=jt[Kt];po(O,A,fe,fe.viewport)}}else Lt.length>0&&ir(Xt,Lt,A,G),Ee&&le.render(A),po(O,A,G)}ht!==null&&Z===0&&(it.updateMultisampleRenderTarget(ht),it.updateRenderTargetMipmap(ht)),ot&&U.end(z),A.isScene===!0&&A.onAfterRender(z,A,G),Vt.resetDefaultState(),ut=-1,mt=null,M.pop(),M.length>0?(L=M[M.length-1],it.setTextureUnits(L.state.textureUnits),he===!0&&kt.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?O=I[I.length-1]:O=null,q!==null&&q.renderEnd()};function ho(A,G,dt,ot){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)dt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){ot&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);const Xt=St.update(A),Lt=A.material;Lt.visible&&O.push(A,Xt,Lt,dt,Be.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){const Xt=St.update(A),Lt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Be.copy(Xt.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(Lt)){const jt=Xt.groups;for(let Kt=0,se=jt.length;Kt<se;Kt++){const fe=jt[Kt],Wt=Lt[fe.materialIndex];Wt&&Wt.visible&&O.push(A,Xt,Wt,dt,Be.z,fe,G)}}else Lt.visible&&O.push(A,Xt,Lt,dt,Be.z,null,G)}}const zt=A.children;for(let Xt=0,Lt=zt.length;Xt<Lt;Xt++)ho(zt[Xt],G,dt,ot)}function po(A,G,dt,ot){const{opaque:lt,transmissive:zt,transparent:Xt}=A;L.setupLightsView(dt),he===!0&&kt.setGlobalState(z.clippingPlanes,dt),ot&&b.viewport(Et.copy(ot)),lt.length>0&&ki(lt,G,dt),zt.length>0&&ki(zt,G,dt),Xt.length>0&&ki(Xt,G,dt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ir(A,G,dt,ot){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ot.id]===void 0){const Wt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ot.id]=new Gi(1,1,{generateMipmaps:!0,type:Wt?fa:gi,minFilter:Ks,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const zt=L.state.transmissionRenderTarget[ot.id],Xt=ot.viewport||Et;zt.setSize(Xt.z*z.transmissionResolutionScale,Xt.w*z.transmissionResolutionScale);const Lt=z.getRenderTarget(),jt=z.getActiveCubeFace(),Kt=z.getActiveMipmapLevel();z.setRenderTarget(zt),z.getClearColor(H),_t=z.getClearAlpha(),_t<1&&z.setClearColor(16777215,.5),z.clear(),Ee&&le.render(dt);const se=z.toneMapping;z.toneMapping=la;const fe=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),L.setupLightsView(ot),he===!0&&kt.setGlobalState(z.clippingPlanes,ot),ki(A,dt,ot),it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let be=0,ve=G.length;be<ve;be++){const Ze=G[be],{object:Ve,geometry:vn,material:Ft,group:ln}=Ze;if(Ft.side===La&&Ve.layers.test(ot.layers)){const Ue=Ft.side;Ft.side=ti,Ft.needsUpdate=!0,Rl(Ve,dt,ot,vn,Ft,ln),Ft.side=Ue,Ft.needsUpdate=!0,Wt=!0}}Wt===!0&&(it.updateMultisampleRenderTarget(zt),it.updateRenderTargetMipmap(zt))}z.setRenderTarget(Lt,jt,Kt),z.setClearColor(H,_t),fe!==void 0&&(ot.viewport=fe),z.toneMapping=se}function ki(A,G,dt){const ot=G.isScene===!0?G.overrideMaterial:null;for(let lt=0,zt=A.length;lt<zt;lt++){const Xt=A[lt],{object:Lt,geometry:jt,group:Kt}=Xt;let se=Xt.material;se.allowOverride===!0&&ot!==null&&(se=ot),Lt.layers.test(dt.layers)&&Rl(Lt,G,dt,jt,se,Kt)}}function Rl(A,G,dt,ot,lt,zt){q!==null&&lt.isNodeMaterial&&q.setObject(A,lt),A.onBeforeRender(z,G,dt,ot,lt,zt),A.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),lt.onBeforeRender(z,G,dt,ot,A,zt),lt.transparent===!0&&lt.side===La&&lt.forceSinglePass===!1?(lt.side=ti,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,A,zt),lt.side=Js,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,A,zt),lt.side=La):z.renderBufferDirect(dt,G,ot,lt,A,zt),A.onAfterRender(z,G,dt,ot,lt,zt)}function Es(A,G,dt){G.isScene!==!0&&(G=nn);const ot=rt.get(A),lt=L.state.lights,zt=L.state.shadowsArray,Xt=lt.state.version,Lt=Nt.getParameters(A,lt.state,zt,G,dt,L.state.lightProbeGridArray),jt=Nt.getProgramCacheKey(Lt);let Kt=ot.programs;ot.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,ot.fog=G.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ot.envMap=Tt.get(A.envMap||ot.environment,se),ot.envMapRotation=ot.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",_i),Kt=new Map,ot.programs=Kt);let fe=Kt.get(jt);if(fe!==void 0){if(ot.currentProgram===fe&&ot.lightsStateVersion===Xt)return go(A,Lt),fe}else Lt.uniforms=Nt.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,dt,Lt),A.onBeforeCompile(Lt,z),fe=Nt.acquireProgram(Lt,jt),Kt.set(jt,fe),ot.uniforms=Lt.uniforms;const Wt=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=kt.uniform),go(A,Lt),ot.needsLights=Cl(A),ot.lightsStateVersion=Xt,ot.needsLights&&(Wt.ambientLightColor.value=lt.state.ambient,Wt.lightProbe.value=lt.state.probe,Wt.sunLights.value=lt.state.sun,Wt.sunLightShadows.value=lt.state.sunShadow,Wt.directionalLights.value=lt.state.directional,Wt.directionalLightShadows.value=lt.state.directionalShadow,Wt.spotLights.value=lt.state.spot,Wt.spotLightShadows.value=lt.state.spotShadow,Wt.rectAreaLights.value=lt.state.rectArea,Wt.ltc_1.value=lt.state.rectAreaLTC1,Wt.ltc_2.value=lt.state.rectAreaLTC2,Wt.pointLights.value=lt.state.point,Wt.pointLightShadows.value=lt.state.pointShadow,Wt.hemisphereLights.value=lt.state.hemi,Wt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Wt.sunShadowCascade.value=lt.state.sunShadowCascade,Wt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Wt.spotLightMatrix.value=lt.state.spotLightMatrix,Wt.spotLightMap.value=lt.state.spotLightMap,Wt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ot.lightProbeGrid=L.state.lightProbeGridArray.length>0,ot.currentProgram=fe,ot.uniformsList=null,fe}function mo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Au.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function go(A,G){const dt=rt.get(A);dt.outputColorSpace=G.outputColorSpace,dt.batching=G.batching,dt.batchingColor=G.batchingColor,dt.instancing=G.instancing,dt.instancingColor=G.instancingColor,dt.instancingMorph=G.instancingMorph,dt.skinning=G.skinning,dt.morphTargets=G.morphTargets,dt.morphNormals=G.morphNormals,dt.morphColors=G.morphColors,dt.morphTargetsCount=G.morphTargetsCount,dt.numClippingPlanes=G.numClippingPlanes,dt.numIntersection=G.numClipIntersection,dt.vertexAlphas=G.vertexAlphas,dt.vertexTangents=G.vertexTangents,dt.toneMapping=G.toneMapping}function _o(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(G.matrixWorld);for(let dt=0,ot=A.length;dt<ot;dt++){const lt=A[dt];if(lt.texture!==null&&lt.boundingBox.containsPoint(N))return lt}return null}function vo(A,G,dt,ot,lt){G.isScene!==!0&&(G=nn),it.resetTextureUnits();const zt=G.fog,Xt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?G.environment:null,Lt=ht===null?z.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Le.workingColorSpace,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Kt=Tt.get(ot.envMap||Xt,jt),se=ot.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,fe=!!dt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!dt.morphAttributes.position,be=!!dt.morphAttributes.normal,ve=!!dt.morphAttributes.color;let Ze=la;ot.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ze=z.toneMapping);const Ve=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,vn=Ve!==void 0?Ve.length:0,Ft=rt.get(ot),ln=L.state.lights;if(he===!0&&(ge===!0||A!==mt)){const we=A===mt&&ot.id===ut;kt.setState(ot,A,we)}let Ue=!1;ot.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ln.state.version||Ft.outputColorSpace!==Lt||lt.isBatchedMesh&&Ft.batching===!1||!lt.isBatchedMesh&&Ft.batching===!0||lt.isBatchedMesh&&Ft.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Ft.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Ft.instancing===!1||!lt.isInstancedMesh&&Ft.instancing===!0||lt.isSkinnedMesh&&Ft.skinning===!1||!lt.isSkinnedMesh&&Ft.skinning===!0||lt.isInstancedMesh&&Ft.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Ft.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Ft.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Ft.instancingMorph===!1&&lt.morphTexture!==null||Ft.envMap!==Kt||ot.fog===!0&&Ft.fog!==zt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==se||Ft.vertexTangents!==fe||Ft.morphTargets!==Wt||Ft.morphNormals!==be||Ft.morphColors!==ve||Ft.toneMapping!==Ze||Ft.morphTargetsCount!==vn||!!Ft.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Ft.__version=ot.version);let Gn=Ft.currentProgram;Ue===!0&&(Gn=Es(ot,G,lt),q&&ot.isNodeMaterial&&q.onUpdateProgram(ot,Gn,Ft));let ii=!1,Xi=!1,xe=!1;const He=Gn.getUniforms(),$e=Ft.uniforms;if(b.useProgram(Gn.program)&&(ii=!0,Xi=!0,xe=!0),ot.id!==ut&&(ut=ot.id,Xi=!0),Ft.needsLights){const we=_o(L.state.lightProbeGridArray,lt);Ft.lightProbeGrid!==we&&(Ft.lightProbeGrid=we,Xi=!0)}if(ii||mt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(X,"projectionMatrix",A.projectionMatrix),He.setValue(X,"viewMatrix",A.matrixWorldInverse);const cn=He.map.cameraPosition;cn!==void 0&&cn.setValue(X,ne.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&He.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),mt!==A&&(mt=A,Xi=!0,xe=!0)}if(Ft.needsLights&&(ln.state.sunShadowMap.length>0&&He.setValue(X,"sunShadowMap",ln.state.sunShadowMap,it),ln.state.directionalShadowMap.length>0&&He.setValue(X,"directionalShadowMap",ln.state.directionalShadowMap,it),ln.state.spotShadowMap.length>0&&He.setValue(X,"spotShadowMap",ln.state.spotShadowMap,it),ln.state.pointShadowMap.length>0&&He.setValue(X,"pointShadowMap",ln.state.pointShadowMap,it)),lt.isSkinnedMesh){He.setOptional(X,lt,"bindMatrix"),He.setOptional(X,lt,"bindMatrixInverse");const we=lt.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),He.setValue(X,"boneTexture",we.boneTexture,it))}lt.isBatchedMesh&&(He.setOptional(X,lt,"batchingTexture"),He.setValue(X,"batchingTexture",lt._matricesTexture,it),He.setOptional(X,lt,"batchingIdTexture"),He.setValue(X,"batchingIdTexture",lt._indirectTexture,it),He.setOptional(X,lt,"batchingColorTexture"),lt._colorsTexture!==null&&He.setValue(X,"batchingColorTexture",lt._colorsTexture,it));const ai=dt.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Y.update(lt,dt,Gn),(Xi||Ft.receiveShadow!==lt.receiveShadow)&&(Ft.receiveShadow=lt.receiveShadow,He.setValue(X,"receiveShadow",lt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&G.environment!==null&&($e.envMapIntensity.value=G.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Ew()),Xi){if(He.setValue(X,"toneMappingExposure",z.toneMappingExposure),Ft.needsLights&&wl($e,xe),zt&&ot.fog===!0&&$t.refreshFogUniforms($e,zt),$t.refreshMaterialUniforms($e,ot,pt,Q,L.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const we=Ft.lightProbeGrid;$e.probesSH.value=we.texture,$e.probesMin.value.copy(we.boundingBox.min),$e.probesMax.value.copy(we.boundingBox.max),$e.probesResolution.value.copy(we.resolution)}Au.upload(X,mo(Ft),$e,it)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Au.upload(X,mo(Ft),$e,it),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&He.setValue(X,"center",lt.center),He.setValue(X,"modelViewMatrix",lt.modelViewMatrix),He.setValue(X,"normalMatrix",lt.normalMatrix),He.setValue(X,"modelMatrix",lt.matrixWorld),ot.uniformsGroups!==void 0){const we=ot.uniformsGroups;for(let cn=0,pa=we.length;cn<pa;cn++){const Nl=we[cn];bt.update(Nl,Gn),bt.bind(Nl,Gn)}}return Gn}function wl(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Cl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(A,G,dt){const ot=rt.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),rt.get(A.texture).__webglTexture=G,rt.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:dt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const dt=rt.get(A);dt.__webglFramebuffer=G,dt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,dt=0){ht=A,W=G,Z=dt;let ot=null,lt=!1,zt=!1;if(A){const Lt=rt.get(A);if(Lt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,Lt.__webglFramebuffer),Et.copy(A.viewport),Zt.copy(A.scissor),qt=A.scissorTest,b.viewport(Et),b.scissor(Zt),b.setScissorTest(qt),ut=-1;return}else if(Lt.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(Lt.__hasExternalTextures)it.rebindTextures(A,rt.get(A.texture).__webglTexture,rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Lt.__boundDepthTexture!==se){if(se!==null&&rt.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(zt=!0);const Kt=rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[G])?ot=Kt[G][dt]:ot=Kt[G],lt=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?ot=rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?ot=Kt[dt]:ot=Kt,Et.copy(A.viewport),Zt.copy(A.scissor),qt=A.scissorTest}else Et.copy(vt).multiplyScalar(pt).floor(),Zt.copy(Ct).multiplyScalar(pt).floor(),qt=Pe;if(dt!==0&&(ot=at),b.bindFramebuffer(X.FRAMEBUFFER,ot)&&b.drawBuffers(A,ot),b.viewport(Et),b.scissor(Zt),b.setScissorTest(qt),lt){const Lt=rt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Lt.__webglTexture,dt)}else if(zt){const Lt=G;for(let jt=0;jt<A.textures.length;jt++){const Kt=rt.get(A.textures[jt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+jt,Kt.__webglTexture,dt,Lt)}}else if(A!==null&&dt!==0){const Lt=rt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Lt.__webglTexture,dt)}ut=-1};function vi(A){const G=rt.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=P.textureFormatReadable(A.format),G.__typeReadable=P.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,dt,ot,lt,zt,Xt,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt){b.bindFramebuffer(X.FRAMEBUFFER,jt);try{const Kt=A.textures[Lt],se=Kt.format,fe=Kt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt);const Wt=vi(Kt);if(Wt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ot&&dt>=0&&dt<=A.height-lt&&X.readPixels(G,dt,ot,lt,Ut.convert(se),Ut.convert(fe),zt)}finally{const Kt=ht!==null?rt.get(ht).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,G,dt,ot,lt,zt,Xt,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(jt=jt[Xt]),jt)if(G>=0&&G<=A.width-ot&&dt>=0&&dt<=A.height-lt){b.bindFramebuffer(X.FRAMEBUFFER,jt);const Kt=A.textures[Lt],se=Kt.format,fe=Kt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Lt);const Wt=vi(Kt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.bufferData(X.PIXEL_PACK_BUFFER,zt.byteLength,X.STREAM_READ),X.readPixels(G,dt,ot,lt,Ut.convert(se),Ut.convert(fe),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const ve=ht!==null?rt.get(ht).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,ve);const Ze=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Fb(X,Ze,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,zt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(be),X.deleteSync(Ze),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,dt=0){const ot=Math.pow(2,-dt),lt=Math.floor(A.image.width*ot),zt=Math.floor(A.image.height*ot),Xt=G!==null?G.x:0,Lt=G!==null?G.y:0;it.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,dt,0,0,Xt,Lt,lt,zt),b.unbindTexture()},this.copyTextureToTexture=function(A,G,dt=null,ot=null,lt=0,zt=0){let Xt,Lt,jt,Kt,se,fe,Wt,be,ve;const Ze=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(dt!==null)Xt=dt.max.x-dt.min.x,Lt=dt.max.y-dt.min.y,jt=dt.isBox3?dt.max.z-dt.min.z:1,Kt=dt.min.x,se=dt.min.y,fe=dt.isBox3?dt.min.z:0;else{const $e=Math.pow(2,-lt);Xt=Math.floor(Ze.width*$e),Lt=Math.floor(Ze.height*$e),A.isDataArrayTexture?jt=Ze.depth:A.isData3DTexture?jt=Math.floor(Ze.depth*$e):jt=1,Kt=0,se=0,fe=0}ot!==null?(Wt=ot.x,be=ot.y,ve=ot.z):(Wt=0,be=0,ve=0);const Ve=Ut.convert(G.format),vn=Ut.convert(G.type);let Ft;G.isData3DTexture?(it.setTexture3D(G,0),Ft=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Ft=X.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Ft=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const ln=b.getParameter(X.UNPACK_ROW_LENGTH),Ue=b.getParameter(X.UNPACK_IMAGE_HEIGHT),Gn=b.getParameter(X.UNPACK_SKIP_PIXELS),ii=b.getParameter(X.UNPACK_SKIP_ROWS),Xi=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,Ze.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ze.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),b.pixelStorei(X.UNPACK_SKIP_ROWS,se),b.pixelStorei(X.UNPACK_SKIP_IMAGES,fe);const xe=A.isDataArrayTexture||A.isData3DTexture,He=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const $e=rt.get(A),ai=rt.get(G),we=rt.get($e.__renderTarget),cn=rt.get(ai.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,we.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let pa=0;pa<jt;pa++)xe&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(A).__webglTexture,lt,fe+pa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(G).__webglTexture,zt,ve+pa)),X.blitFramebuffer(Kt,se,Xt,Lt,Wt,be,Xt,Lt,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(lt!==0||A.isRenderTargetTexture||rt.has(A)){const $e=rt.get(A),ai=rt.get(G);b.bindFramebuffer(X.READ_FRAMEBUFFER,j),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,tt);for(let we=0;we<jt;we++)xe?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.__webglTexture,lt,fe+we):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,$e.__webglTexture,lt),He?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ai.__webglTexture,zt,ve+we):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ai.__webglTexture,zt),lt!==0?X.blitFramebuffer(Kt,se,Xt,Lt,Wt,be,Xt,Lt,X.COLOR_BUFFER_BIT,X.NEAREST):He?X.copyTexSubImage3D(Ft,zt,Wt,be,ve+we,Kt,se,Xt,Lt):X.copyTexSubImage2D(Ft,zt,Wt,be,Kt,se,Xt,Lt);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else He?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ft,zt,Wt,be,ve,Xt,Lt,jt,Ve,vn,Ze.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Ft,zt,Wt,be,ve,Xt,Lt,jt,Ve,Ze.data):X.texSubImage3D(Ft,zt,Wt,be,ve,Xt,Lt,jt,Ve,vn,Ze):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,zt,Wt,be,Xt,Lt,Ve,vn,Ze.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,zt,Wt,be,Ze.width,Ze.height,Ve,Ze.data):X.texSubImage2D(X.TEXTURE_2D,zt,Wt,be,Xt,Lt,Ve,vn,Ze);b.pixelStorei(X.UNPACK_ROW_LENGTH,ln),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ue),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Gn),b.pixelStorei(X.UNPACK_SKIP_ROWS,ii),b.pixelStorei(X.UNPACK_SKIP_IMAGES,Xi),zt===0&&G.generateMipmaps&&X.generateMipmap(Ft),b.unbindTexture()},this.initRenderTarget=function(A){rt.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){W=0,Z=0,ht=null,b.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const BS=()=>{const o=Re.useRef(null),[e,i]=Re.useState(!1),[s,l]=Re.useState(!0),[f,d]=Re.useState(0),[h,p]=Re.useState({x:"0.00",y:"0.00",z:"0.00"}),m=Re.useRef(null),S=Re.useRef(null),v=Re.useRef([]);Re.useEffect(()=>{const T=o.current;if(!T)return;const D=T.clientWidth,y=T.clientHeight||480,x=new e1;m.current=x,x.fog=new im(328967,.04);const C=new pi(45,D/y,.1,100);C.position.set(0,0,7.5);const F=new bw({antialias:!0,alpha:!0,powerPreference:"high-performance"});F.setSize(D,y),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.toneMapping=qp,F.toneMappingExposure=1.2,S.current=F,T.appendChild(F.domElement);const N=new E1(657935,1.2);x.add(N);const O=new nx(14870768,2.5);O.position.set(5,8,4),x.add(O);const L=new nx(3359061,1.5);L.position.set(-5,-3,-4),x.add(L);const I=new y1(14427686,4,12);I.position.set(0,0,2),x.add(I);const M=new _l;x.add(M);const U=[],z=[],k=new gu({color:1579036,metalness:.95,roughness:.2,wireframe:!1});U.push(k);const q=new gu({color:10033947,emissive:8330525,emissiveIntensity:.6,metalness:.8,roughness:.3,wireframe:!1});U.push(q);const at=new gu({color:4674921,metalness:.85,roughness:.4,wireframe:!1});U.push(at);const j=new gu({color:986898,metalness:.1,roughness:.85,wireframe:!1});U.push(j),v.current=U;const tt=new xs(.32,3.8,.05);z.push(tt);const W=new Rn(tt,k);W.position.y=1.4,M.add(W);const Z=new sm(.24,.9,4);z.push(Z);const ht=new Rn(Z,k);ht.rotation.y=Math.PI/4,ht.position.y=3.75,M.add(ht);const ut=new xs(.08,3.2,.06);z.push(ut);const mt=new Rn(ut,q);mt.position.y=1.35,M.add(mt);const Et=new xs(.7,.24,.3);z.push(Et);const Zt=new Rn(Et,at);Zt.position.y=-.5,M.add(Zt);const qt=new ro(.06,.16,1.4,6);z.push(qt);const H=new Rn(qt,at);H.position.set(-.85,-.4,0),H.rotation.z=Math.PI/2.8,M.add(H);const _t=new ro(.06,.16,1.4,6);z.push(_t);const wt=new Rn(_t,at);wt.position.set(.85,-.4,0),wt.rotation.z=-Math.PI/2.8,M.add(wt);const Q=new ro(.1,.12,1.2,12);z.push(Q);const pt=new Rn(Q,j);pt.position.y=-1.2,M.add(pt);for(let it=0;it<4;it++){const Tt=new lm(.12,.015,6,16);z.push(Tt);const Rt=new Rn(Tt,at);Rt.rotation.x=Math.PI/2,Rt.position.y=-.8-it*.24,M.add(Rt)}const At=new om(.26,0);z.push(At);const It=new Rn(At,at);It.position.y=-1.95,M.add(It);const vt=200,Ct=new ei,Pe=new Float32Array(vt*3),ce=new Float32Array(vt);for(let it=0;it<vt;it++){const Tt=Math.random()*Math.PI*2,Rt=1.2+Math.random()*2.2;Pe[it*3]=Math.cos(Tt)*Rt,Pe[it*3+1]=(Math.random()-.5)*6,Pe[it*3+2]=Math.sin(Tt)*Rt,ce[it]=.01+Math.random()*.02}Ct.setAttribute("position",new ca(Pe,3)),z.push(Ct);const he=new ES({color:14427686,size:.055,transparent:!0,opacity:.8,blending:Jh});U.push(he);const ge=new f1(Ct,he);x.add(ge);let te=0;z.forEach(it=>{te+=it.attributes.position.count}),d(te);let ne=!1,Be={x:0,y:0},nn=0,Ee=0;const je=it=>{ne=!0,Be={x:it.clientX,y:it.clientY}},X=it=>{const Tt=T.getBoundingClientRect(),Rt=(it.clientX-Tt.left)/Tt.width*2-1,gt=-((it.clientY-Tt.top)/Tt.height*2-1);if(I.position.x=Rt*3,I.position.y=gt*3,!ne)return;const St=it.clientX-Be.x,Nt=it.clientY-Be.y;nn+=St*.012,Ee+=Nt*.012,Ee=Math.max(-Math.PI/4,Math.min(Math.PI/4,Ee)),Be={x:it.clientX,y:it.clientY}},Je=()=>{ne=!1},ye=F.domElement;ye.addEventListener("mousedown",je),window.addEventListener("mousemove",X),window.addEventListener("mouseup",Je);const P=()=>{if(!T)return;const it=T.clientWidth,Tt=T.clientHeight||480;C.aspect=it/Tt,C.updateProjectionMatrix(),F.setSize(it,Tt)};window.addEventListener("resize",P);let b,et=new A1;const rt=()=>{et.getDelta();const it=et.getElapsedTime();s&&!ne&&(nn+=.008),M.rotation.y+=(nn-M.rotation.y)*.08,M.rotation.x+=(Ee-M.rotation.x)*.08,M.position.y=Math.sin(it*1.5)*.12,ge.rotation.y=-it*.15;const Tt=Ct.attributes.position.array;for(let Rt=0;Rt<vt;Rt++){let gt=Tt[Rt*3+1];gt+=ce[Rt],gt>3.5&&(gt=-3.5),Tt[Rt*3+1]=gt}Ct.attributes.position.needsUpdate=!0,p({x:M.rotation.x.toFixed(2),y:M.rotation.y.toFixed(2),z:M.position.y.toFixed(2)}),F.render(x,C),b=requestAnimationFrame(rt)};return rt(),()=>{cancelAnimationFrame(b),ye.removeEventListener("mousedown",je),window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",Je),window.removeEventListener("resize",P),z.forEach(it=>it.dispose()),U.forEach(it=>it.dispose()),F.dispose(),T.contains(ye)&&T.removeChild(ye)}},[s]);const _=()=>{mi.playClick();const T=!e;i(T),v.current.forEach(D=>{"wireframe"in D&&(D.wireframe=T)})},E=()=>{mi.playClick(),l(T=>!T)};return R.jsxs("div",{className:"w-full border-b border-hairline bg-obsidian-950 relative overflow-hidden font-mono",children:[R.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"font-gothic text-2xl text-blood-500",children:"Das Schwert"}),R.jsx("span",{className:"text-xs text-neutral-400",children:"// REAL-TIME 3D ARTIFACT VAULT"})]}),R.jsx("p",{className:"text-[10px] text-neutral-400 uppercase tracking-widest mt-1",children:"INTERACTIVE THREE.JS RELIC // DRAG CURSOR TO ROTATE 360° // DYNAMIC SPECULAR SHIFT"})]}),R.jsxs("div",{className:"flex items-center space-x-2 text-[10px]",children:[R.jsxs("button",{onClick:_,className:`px-2.5 py-1 border transition-all flex items-center space-x-1.5 ${e?"bg-blood-900 border-blood-500 text-white":"bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white"}`,children:[R.jsx(Wp,{className:"w-3 h-3"}),R.jsx("span",{children:e?"SOLID MODE":"WIREFRAME"})]}),R.jsxs("button",{onClick:E,className:`px-2.5 py-1 border transition-all flex items-center space-x-1.5 ${s?"bg-steel-200 text-obsidian-950 font-bold border-white":"bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white"}`,children:[R.jsx(jE,{className:"w-3 h-3"}),R.jsxs("span",{children:["ORBIT: ",s?"AUTO":"MANUAL"]})]})]})]}),R.jsxs("div",{className:"relative w-full h-[460px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none",children:[R.jsx("div",{ref:o,className:"w-full h-full"}),R.jsxs("div",{className:"absolute top-4 left-4 pointer-events-none text-[10px] space-y-1 text-neutral-500 bg-obsidian-950/80 p-2.5 border border-white/5 backdrop-blur-xs",children:[R.jsxs("div",{className:"text-white font-bold flex items-center",children:[R.jsx(Ux,{className:"w-3 h-3 mr-1 text-blood-500"}),"3D VECTOR TELEMETRY"]}),R.jsxs("div",{children:["ROTATION_X: ",h.x," rad"]}),R.jsxs("div",{children:["ROTATION_Y: ",h.y," rad"]}),R.jsxs("div",{children:["ELEVATION_Z: ",h.z," units"]}),R.jsxs("div",{className:"text-blood-400 pt-1 border-t border-white/5",children:["VERTS: ",f," POLYGONS"]})]}),R.jsxs("div",{className:"absolute bottom-4 right-4 pointer-events-none text-[10px] text-right space-y-1 text-neutral-500 bg-obsidian-950/80 p-2.5 border border-white/5 backdrop-blur-xs",children:[R.jsxs("div",{className:"text-neutral-300 font-bold flex items-center justify-end",children:[R.jsx(QE,{className:"w-3 h-3 mr-1 text-neutral-400"}),"MATERIAL COMPOSITION"]}),R.jsx("div",{children:"BLADE: OBSIDIAN STEEL (MET: 0.95)"}),R.jsx("div",{children:"CHANNEL: ARTERIAL BLOOD CORE"}),R.jsx("div",{children:"QUiLLONS: SWEPT WING ALLOY"}),R.jsx("div",{className:"text-emerald-400 pt-1 border-t border-white/5",children:"RENDER: WEBGL2 / 60 FPS"})]}),R.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] text-neutral-500 bg-black/60 px-3 py-1 border border-white/10 uppercase tracking-widest hidden sm:block",children:"HOLD & DRAG TO ROTATE ARTIFACT // MOVE MOUSE TO CONTROL BLOOD LIGHT"})]})]})},Tw=({originItem:o,onInspect:e})=>{const[i,s]=Re.useState("IMAGE");return R.jsxs("section",{className:"w-full border-b border-hairline bg-obsidian-950/80 relative overflow-hidden font-mono",children:[R.jsx("div",{className:"absolute top-0 right-0 bottom-0 pointer-events-none select-none opacity-5 flex items-center pr-12 overflow-hidden",children:R.jsx("span",{className:"font-gothic text-[28vw] leading-none text-white whitespace-nowrap",children:"Blut"})}),R.jsxs("div",{className:"max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 relative z-10",children:[R.jsxs("div",{className:"flex flex-wrap items-center justify-between border-b border-white/10 pb-3 mb-8 text-[11px] text-neutral-400 gap-3",children:[R.jsxs("div",{className:"flex items-center space-x-3",children:[R.jsx("span",{className:"bg-blood-900/80 text-white font-bold px-2 py-0.5 border border-blood-500 uppercase text-[9px] tracking-widest",children:"CAPSULE PROTOTYPE ZERO"}),R.jsx("span",{className:"text-white font-bold",children:o.code}),R.jsx("span",{className:"text-white/20",children:"//"}),R.jsx("span",{className:"text-neutral-400 hidden sm:inline",children:"ORIGIN: CATACOMB GUARDIAN"})]}),R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"text-neutral-400 text-[10px]",children:"STAGE MODE:"}),R.jsxs("button",{onClick:()=>{mi.playClick(),s("IMAGE")},className:`px-2 py-0.5 border text-[10px] flex items-center space-x-1 ${i==="IMAGE"?"bg-steel-200 text-obsidian-950 font-bold border-white":"bg-obsidian-900 text-neutral-400 border-white/10 hover:text-white"}`,children:[R.jsx(WE,{className:"w-3 h-3"}),R.jsx("span",{children:"PHOTO ARCHIVE"})]}),R.jsxs("button",{onClick:()=>{mi.playClick(),s("3D")},className:`px-2 py-0.5 border text-[10px] flex items-center space-x-1 ${i==="3D"?"bg-blood-700 text-white font-bold border-blood-400 shadow-[0_0_10px_rgba(220,38,38,0.5)]":"bg-obsidian-900 text-neutral-400 border-white/10 hover:text-white"}`,children:[R.jsx(Wp,{className:"w-3 h-3 text-blood-400"}),R.jsx("span",{children:"3D BLADE MODEL"})]})]})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[R.jsx("div",{className:"lg:col-span-5 relative",children:i==="IMAGE"?R.jsxs("div",{className:"border border-white/20 bg-black p-2 relative shadow-2xl group",children:[R.jsx("div",{className:"absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blood-500"}),R.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blood-500"}),R.jsx("div",{className:"absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blood-500"}),R.jsx("div",{className:"absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blood-500"}),R.jsxs("div",{className:"relative aspect-[3/4] overflow-hidden bg-obsidian-950",children:[R.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"}),R.jsx("div",{className:"absolute bottom-3 left-3 right-3 flex justify-between items-end text-[10px] text-white",children:R.jsxs("div",{children:[R.jsx("span",{className:"text-blood-400 font-bold tracking-widest text-[9px] uppercase",children:"ARCHIVE REF_00"}),R.jsx("p",{className:"text-neutral-300 font-bold",children:o.title})]})})]}),R.jsxs("div",{className:"mt-2 flex justify-between text-[10px] text-neutral-400 px-1",children:[R.jsx("span",{children:"DEVIL_JIN FLARINGS"}),R.jsx("span",{children:"GOTHIC HARNESS"})]})]}):R.jsx("div",{className:"border border-white/20 bg-black relative shadow-2xl overflow-hidden",children:R.jsx(BS,{})})}),R.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between space-y-6",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[R.jsx("span",{className:"font-gothic text-3xl sm:text-4xl text-blood-500",children:o.germanTitle}),R.jsx("span",{className:"text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5",children:"HL-BS-00"})]}),R.jsx("h2",{className:"text-xl sm:text-2xl font-bold tracking-tight text-white mb-4",children:o.title}),R.jsx("p",{className:"text-neutral-300 font-sans text-sm leading-relaxed mb-6 border-l-2 border-blood-600 pl-4 py-1",children:o.description}),R.jsxs("div",{className:"border border-white/10 bg-obsidian-900/60 divide-y divide-white/5 text-xs",children:[R.jsxs("div",{className:"grid grid-cols-3 p-3",children:[R.jsx("span",{className:"text-neutral-400",children:"SILHOUETTE:"}),R.jsx("span",{className:"col-span-2 text-white font-medium",children:o.silhouette})]}),R.jsxs("div",{className:"grid grid-cols-3 p-3",children:[R.jsx("span",{className:"text-neutral-400",children:"MATERIALITY:"}),R.jsx("div",{className:"col-span-2 flex flex-wrap gap-1.5",children:o.materials.map((l,f)=>R.jsx("span",{className:"bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 text-[11px]",children:l},f))})]}),R.jsxs("div",{className:"grid grid-cols-3 p-3",children:[R.jsx("span",{className:"text-neutral-400",children:"HARDWARE ACCENTS:"}),R.jsx("div",{className:"col-span-2 flex flex-wrap gap-1.5",children:o.hardware.map((l,f)=>R.jsx("span",{className:"bg-blood-950/50 border border-blood-900/50 text-blood-300 px-2 py-0.5 text-[11px]",children:l},f))})]}),R.jsxs("div",{className:"grid grid-cols-3 p-3",children:[R.jsx("span",{className:"text-neutral-400",children:"SEASON CATALOGUE:"}),R.jsx("span",{className:"col-span-2 text-neutral-200",children:o.season})]})]})]}),R.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[R.jsxs("button",{onClick:()=>{mi.playDossierOpen(),e(o)},className:"flex items-center space-x-2 bg-steel-100 hover:bg-white text-obsidian-950 text-xs font-bold px-6 py-3 tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]",children:[R.jsx(Bx,{className:"w-4 h-4"}),R.jsx("span",{children:"INSPECT SPECIMEN DOSSIER [00]"})]}),R.jsxs("div",{className:"text-[11px] text-blood-400 bg-blood-950/30 border border-blood-900/50 px-3 py-2.5 flex items-center space-x-2",children:[R.jsx(Lu,{className:"w-3.5 h-3.5 animate-spin"}),R.jsx("span",{children:"СЛОТЫ 01–07 ГОТОВЫ К ВАШЕМУ ДИЗАЙНУ"})]})]})]})]})]})]})},Aw=({item:o,onSelect:e})=>{const[i,s]=Re.useState({x:0,y:0,glareX:50,glareY:50}),[l,f]=Re.useState(!1),d=o.status==="AWAITING_DESIGN",h=v=>{const _=v.currentTarget.getBoundingClientRect(),E=v.clientX-_.left,T=v.clientY-_.top,D=E/_.width*2-1,y=T/_.height*2-1,x=D*7,C=-y*7;s({x:C,y:x,glareX:E/_.width*100,glareY:T/_.height*100})},p=()=>{f(!0),mi.playHover()},m=()=>{f(!1),s({x:0,y:0,glareX:50,glareY:50})},S=()=>{mi.playDossierOpen(),e()};return R.jsx("div",{style:{perspective:"1000px"},className:"w-full",children:R.jsxs("div",{onClick:S,onMouseMove:h,onMouseEnter:p,onMouseLeave:m,style:{transform:l?`rotateX(${i.x}deg) rotateY(${i.y}deg) translateY(-4px) scale3d(1.02, 1.02, 1.02)`:"rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)",transition:l?"transform 0.08s ease-out":"transform 0.4s ease-out"},className:`group relative flex flex-col justify-between border cursor-pointer select-none overflow-hidden ${d?"border-neutral-800 bg-obsidian-900/70 hover:border-blood-600/80 hover:bg-obsidian-850":"border-white/20 bg-obsidian-950 hover:border-white shadow-xl"}`,children:[l&&R.jsx("div",{className:"absolute inset-0 pointer-events-none z-30 opacity-25 mix-blend-overlay transition-opacity",style:{background:`radial-gradient(circle at ${i.glareX}% ${i.glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`}}),R.jsxs("div",{className:"border-b border-white/5 p-3 flex justify-between items-center font-mono text-[10px] z-10",children:[R.jsx("span",{className:"font-bold text-white tracking-widest",children:o.slotNumber}),R.jsx("span",{className:`px-1.5 py-0.5 border text-[9px] uppercase tracking-wider ${d?"border-blood-700/50 bg-blood-950/40 text-blood-400":"border-emerald-700/50 bg-emerald-950/40 text-emerald-400"}`,children:d?"VACANT // PENDING":"CATALOGUED"})]}),R.jsxs("div",{className:"relative aspect-[3/4] w-full overflow-hidden bg-obsidian-950 flex flex-col items-center justify-center p-4",children:[d?R.jsxs("div",{className:"w-full h-full border border-dashed border-neutral-800 flex flex-col items-center justify-center p-4 text-center relative group-hover:border-blood-600/60 transition-colors",children:[R.jsx("div",{className:"absolute top-1 left-1 text-[8px] font-mono text-neutral-600",children:"+"}),R.jsx("div",{className:"absolute top-1 right-1 text-[8px] font-mono text-neutral-600",children:"+"}),R.jsx("div",{className:"absolute bottom-1 left-1 text-[8px] font-mono text-neutral-600",children:"+"}),R.jsx("div",{className:"absolute bottom-1 right-1 text-[8px] font-mono text-neutral-600",children:"+"}),R.jsx("div",{className:"w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mb-4 group-hover:border-blood-600/50 transition-all group-hover:scale-110",children:R.jsx("div",{className:"w-12 h-12 rounded-full border border-blood-900/50 flex items-center justify-center",children:R.jsx(qE,{className:"w-6 h-6 text-neutral-600 group-hover:text-blood-400 transition-colors"})})}),R.jsx("span",{className:"font-gothic text-lg text-neutral-300 group-hover:text-white transition-colors mb-1",children:o.germanTitle}),R.jsx("span",{className:"font-mono text-[10px] text-blood-400 tracking-widest uppercase",children:"[CLICK TO CONFIGURE CONCEPT]"}),R.jsx("div",{className:"mt-3 font-mono text-[9px] text-neutral-400 uppercase tracking-wider",children:o.category.replace("_"," ")})]}):R.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[R.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"})]}),R.jsx("div",{className:"absolute inset-0 bg-obsidian-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-xs z-20",children:R.jsxs("div",{className:"border border-white/20 bg-black px-4 py-2 flex items-center space-x-2 font-mono text-xs tracking-widest uppercase text-white shadow-2xl",children:[R.jsx(Bx,{className:"w-3.5 h-3.5 text-blood-500"}),R.jsx("span",{children:d?"PROVIDE CONCEPT":"VIEW SPECIMEN"})]})})]}),R.jsxs("div",{className:"p-3.5 border-t border-white/5 bg-obsidian-950/80 font-mono text-[11px] space-y-2 z-10",children:[R.jsxs("div",{className:"flex justify-between items-baseline text-neutral-400",children:[R.jsx("span",{className:"text-white font-bold tracking-wider truncate max-w-[170px]",children:o.code}),R.jsx("span",{className:"text-[9px] text-neutral-400",children:o.season})]}),R.jsx("div",{className:"text-[10px] text-neutral-400 line-clamp-2 font-sans",children:o.silhouette}),R.jsxs("div",{className:"pt-2 border-t border-white/5 flex justify-between items-center text-[10px]",children:[R.jsxs("span",{className:"text-neutral-400 flex items-center",children:[R.jsx(kE,{className:"w-3 h-3 mr-1 text-blood-500"}),o.category]}),R.jsx("span",{className:"text-neutral-400 group-hover:text-blood-400 transition-colors font-bold",children:"SPEC_DOSSIER →"})]})]})]})})},Rw=({items:o,onSelectItem:e})=>R.jsxs("section",{className:"w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8",children:[R.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-hairline pb-4 mb-8 gap-4 font-mono",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"font-gothic text-2xl text-white",children:"Zellenspeicher"}),R.jsx("span",{className:"text-xs text-neutral-400",children:"// ARCHIVAL SPECIMEN CELLS (3D PERSPECTIVE)"})]}),R.jsx("p",{className:"text-[11px] text-neutral-400 mt-1 uppercase tracking-wider",children:"EDITORIAL CATALOGUE // TACTILE 3D HOVER ACCELERATION"})]}),R.jsxs("div",{className:"flex items-center space-x-3 text-xs bg-obsidian-900 border border-white/10 px-3 py-1.5",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-blood-500 animate-pulse"}),R.jsxs("span",{className:"text-neutral-300",children:["TOTAL CELLS: ",o.length]}),R.jsx("span",{className:"text-neutral-600",children:"|"}),R.jsxs("span",{className:"text-blood-400 font-bold",children:["EMPTY: ",o.filter(i=>i.status==="AWAITING_DESIGN").length]})]})]}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:o.map(i=>R.jsx(Aw,{item:i,onSelect:()=>e(i)},i.id))})]}),ww=()=>R.jsxs("div",{className:"max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 font-mono text-steel-200 space-y-12 animate-in fade-in duration-500",children:[R.jsxs("div",{className:"border-b border-white/10 pb-6 space-y-2",children:[R.jsx("span",{className:"text-blood-500 text-xs font-bold tracking-ultra uppercase block",children:"DAS MANIFEST // ARCHIVAL DIRECTIVE"}),R.jsx("h2",{className:"font-gothic text-4xl sm:text-5xl text-white",children:"Blutiges Schwert: Der Weg des Stahls"}),R.jsx("p",{className:"text-xs text-neutral-400 uppercase tracking-widest",children:"DOCUMENT PROTOCOL MMXXVI // POST-HUMAN GOTHIC DISCIPLINE"})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-12",children:[R.jsxs("div",{className:"border border-white/10 bg-obsidian-900/60 p-6 space-y-3",children:[R.jsx("span",{className:"text-blood-400 font-bold text-sm block",children:"01 / DISCIPLINE"}),R.jsx("h3",{className:"text-white text-base font-bold",children:"Утилитарный Минимализм"}),R.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed",children:"Отсечение любого лишнего визуального шума. Прямые строгие линии, моноширинные технические штампы, промышленные коды и функциональные ремни в традиции раннего Helmut Lang."})]}),R.jsxs("div",{className:"border border-white/10 bg-obsidian-900/60 p-6 space-y-3",children:[R.jsx("span",{className:"text-blood-400 font-bold text-sm block",children:"02 / ARCHIVE-CORE"}),R.jsx("h3",{className:"text-white text-base font-bold",children:"Темное Фэнтези 2000-х"}),R.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed",children:"Символизм готических руин, кожаная экипировка, крылатые силуэты гаргулий, состаренное стерлинговое серебро и демонические мотивы эпохи PS2 (Devil Jin / DMC / Rick Owens)."})]}),R.jsxs("div",{className:"border border-white/10 bg-obsidian-900/60 p-6 space-y-3",children:[R.jsx("span",{className:"text-blood-400 font-bold text-sm block",children:"03 / CO-CREATION"}),R.jsx("h3",{className:"text-white text-base font-bold",children:"Живой Реестр Вещей"}),R.jsx("p",{className:"text-xs text-neutral-400 font-sans leading-relaxed",children:"Архив не является статичным. 7 пустых ячеек резервируются под эксклюзивные идеи главного дизайнера и пополняются новыми сгенерированными артами в режиме реального времени."})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"flex justify-between items-center text-xs text-neutral-400",children:[R.jsxs("span",{className:"text-white font-bold uppercase tracking-wider flex items-center",children:[R.jsx(qx,{className:"w-4 h-4 mr-1 text-blood-500"}),"РЕЕСТР АРХИВНЫХ АРТЕФАКТОВ"]}),R.jsx("span",{children:"8 ITEMS TOTAL"})]}),R.jsxs("div",{className:"border border-white/10 divide-y divide-white/5 text-xs bg-obsidian-900/40",children:[R.jsxs("div",{className:"p-3 grid grid-cols-12 text-neutral-400 text-[10px] uppercase",children:[R.jsx("span",{className:"col-span-2",children:"ID"}),R.jsx("span",{className:"col-span-4",children:"НАЗВАНИЕ"}),R.jsx("span",{className:"col-span-3",children:"КАТЕГОРИЯ"}),R.jsx("span",{className:"col-span-3 text-right",children:"СТАТУС"})]}),R.jsxs("div",{className:"p-3 grid grid-cols-12 text-white items-center",children:[R.jsx("span",{className:"col-span-2 text-blood-400 font-bold",children:"HL-BS-00"}),R.jsx("span",{className:"col-span-4 font-bold",children:"THE CATACOMB GUARDIAN"}),R.jsx("span",{className:"col-span-3 text-neutral-400",children:"LEATHER & HARNESS"}),R.jsx("span",{className:"col-span-3 text-right text-emerald-400 font-bold",children:"ARCHIVED"})]}),R.jsxs("div",{className:"p-3 grid grid-cols-12 text-neutral-300 items-center",children:[R.jsx("span",{className:"col-span-2 text-blood-400 font-bold",children:"HL-BS-01"}),R.jsx("span",{className:"col-span-4",children:"FLOOR-LENGTH COAT"}),R.jsx("span",{className:"col-span-3 text-neutral-400",children:"OUTERWEAR"}),R.jsx("span",{className:"col-span-3 text-right text-blood-400 font-bold",children:"AWAITING CONCEPT"})]}),R.jsxs("div",{className:"p-3 grid grid-cols-12 text-neutral-300 items-center",children:[R.jsx("span",{className:"col-span-2 text-blood-400 font-bold",children:"HL-BS-02"}),R.jsx("span",{className:"col-span-4",children:"FLARED RUNIC TROUSERS"}),R.jsx("span",{className:"col-span-3 text-neutral-400",children:"BOTTOMS"}),R.jsx("span",{className:"col-span-3 text-right text-blood-400 font-bold",children:"AWAITING CONCEPT"})]}),R.jsxs("div",{className:"p-3 grid grid-cols-12 text-neutral-300 items-center",children:[R.jsx("span",{className:"col-span-2 text-blood-400 font-bold",children:"HL-BS-03"}),R.jsx("span",{className:"col-span-4",children:"MOTO BOMBER JACKET"}),R.jsx("span",{className:"col-span-3 text-neutral-400",children:"OUTERWEAR"}),R.jsx("span",{className:"col-span-3 text-right text-blood-400 font-bold",children:"AWAITING CONCEPT"})]})]})]})]}),Cw=({item:o,onClose:e})=>{const i=Re.useRef(null),[s,l]=Xp.useState("PRIMARY");if(Re.useEffect(()=>{l("PRIMARY")},[o]),Re.useEffect(()=>{const d=i.current;d&&(o?d.open||d.showModal():d.open&&d.close())},[o]),Re.useEffect(()=>{const d=i.current;if(!d)return;const h=m=>{if(!("closedBy"in HTMLDialogElement.prototype)){if(m.target!==d)return;const S=d.getBoundingClientRect();S.top<=m.clientY&&m.clientY<=S.top+S.height&&S.left<=m.clientX&&m.clientX<=S.left+S.width||(d.close(),e())}},p=()=>{e()};return d.addEventListener("click",h),d.addEventListener("close",p),()=>{d.removeEventListener("click",h),d.removeEventListener("close",p)}},[e]),!o)return null;const f=o.status==="AWAITING_DESIGN";return R.jsx("dialog",{ref:i,closedby:"any","aria-labelledby":"dialogTitle",className:"m-auto bg-obsidian-950 text-steel-200 border border-white/20 p-0 max-w-4xl w-[94vw] max-h-[90vh] overflow-y-auto shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm",children:R.jsxs("div",{className:"relative flex flex-col",children:[R.jsxs("div",{className:"border-b border-white/10 p-4 flex items-center justify-between bg-obsidian-900 font-mono text-xs",children:[R.jsxs("div",{className:"flex items-center space-x-3",children:[R.jsx("span",{className:"text-blood-500 font-bold tracking-widest",children:o.slotNumber}),R.jsx("span",{className:"text-neutral-600",children:"//"}),R.jsx("span",{className:"text-neutral-400 font-semibold",children:o.code})]}),R.jsx("form",{method:"dialog",children:R.jsx("button",{type:"submit",onClick:e,className:"p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors","aria-label":"Close dialog",children:R.jsx(Qx,{className:"w-5 h-5"})})})]}),R.jsxs("div",{className:"p-6 md:p-8 space-y-6",children:[R.jsxs("div",{children:[R.jsx("div",{className:"flex items-center gap-3",children:R.jsx("span",{className:"font-gothic text-2xl sm:text-3xl text-blood-500",children:o.germanTitle})}),R.jsx("h2",{id:"dialogTitle",className:"font-mono text-xl sm:text-2xl font-bold text-white mt-1",children:o.title})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-start",children:[R.jsxs("div",{className:"border border-white/10 bg-black/60 p-2 relative",children:[o.secondaryImageUrl&&R.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-2 font-mono text-[10px]",children:[R.jsx("button",{onClick:()=>l("PRIMARY"),className:`px-2 py-0.5 border ${s==="PRIMARY"?"bg-steel-100 text-obsidian-950 font-bold border-white":"bg-obsidian-900 text-neutral-400 border-white/10"}`,children:"3D DANTE LOOK"}),R.jsx("button",{onClick:()=>l("PANTS"),className:`px-2 py-0.5 border ${s==="PANTS"?"bg-blood-700 text-white font-bold border-white shadow-[0_0_8px_rgba(220,38,38,0.5)]":"bg-obsidian-900 text-neutral-400 border-white/10"}`,children:"WIDE FANG PANTS"}),R.jsx("button",{onClick:()=>l("SECONDARY"),className:`px-2 py-0.5 border ${s==="SECONDARY"?"bg-blood-900 text-white font-bold border-blood-500":"bg-obsidian-900 text-neutral-400 border-white/10"}`,children:"OUTFIT COLLAGE"})]}),R.jsx("div",{className:"aspect-[3/4] overflow-hidden bg-obsidian-900 flex items-center justify-center",children:o.imageUrl?R.jsx("img",{src:s==="PRIMARY"?o.imageUrl:s==="PANTS"?"./media/wide-fanged-pants.png":o.secondaryImageUrl||o.imageUrl,alt:o.title,className:"w-full h-full object-cover object-center"}):R.jsxs("div",{className:"p-6 text-center space-y-3 font-mono",children:[R.jsx("div",{className:"w-16 h-16 mx-auto rounded-full border border-blood-800/60 flex items-center justify-center bg-blood-950/20",children:R.jsx(Lu,{className:"w-8 h-8 text-blood-500 animate-pulse"})}),R.jsx("div",{className:"text-sm text-neutral-200 font-bold uppercase tracking-wider",children:"RESERVED SPECIMEN SLOT"}),R.jsx("p",{className:"text-[11px] text-neutral-400 leading-relaxed font-sans",children:"Эта ячейка ждет вашей идеи. Когда вы опишете вещь, я нарисую для неё эскиз и интегрирую прямо в эту карточку."})]})}),R.jsxs("div",{className:"mt-2 flex justify-between font-mono text-[10px] text-neutral-400",children:[R.jsxs("span",{children:["CATEGORY: ",o.category]}),R.jsx("span",{className:f?"text-blood-400 font-bold":"text-emerald-400",children:f?"STATUS: PENDING IDEA":"STATUS: ARCHIVED"})]})]}),R.jsxs("div",{className:"space-y-5 font-mono text-xs",children:[R.jsxs("div",{className:"border border-white/10 bg-obsidian-900/40 p-4 space-y-3",children:[R.jsxs("div",{className:"text-[10px] text-neutral-400 tracking-widest uppercase border-b border-white/5 pb-1 flex items-center justify-between",children:[R.jsx("span",{children:"SPECIFICATION PARAMETERS"}),R.jsx("span",{className:"text-blood-500 font-bold",children:o.season})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"SILHOUETTE / CUT:"}),R.jsx("p",{className:"text-white font-medium mt-0.5",children:o.silhouette})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"PROPOSED MATERIALS:"}),R.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:o.materials.map((d,h)=>R.jsx("span",{className:"bg-neutral-800 text-neutral-200 px-2 py-0.5 text-[10px]",children:d},h))})]}),R.jsxs("div",{children:[R.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"PROPOSED HARDWARE:"}),R.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:o.hardware.map((d,h)=>R.jsx("span",{className:"bg-blood-950/50 border border-blood-900/50 text-blood-300 px-2 py-0.5 text-[10px]",children:d},h))})]})]}),R.jsxs("div",{className:"space-y-2",children:[R.jsx("span",{className:"text-neutral-400 text-[10px] tracking-wider uppercase block",children:"ARCHIVIST NOTES:"}),R.jsx("p",{className:"text-neutral-300 font-sans leading-relaxed text-sm bg-obsidian-900/20 p-3 border-l-2 border-blood-600",children:o.description})]}),f&&R.jsxs("div",{className:"border border-blood-600/60 bg-blood-950/20 p-4 space-y-3",children:[R.jsxs("div",{className:"flex items-center space-x-2 text-blood-400 font-bold",children:[R.jsx(ZE,{className:"w-4 h-4"}),R.jsx("span",{className:"tracking-widest uppercase",children:"КАК НАПОЛНИТЬ ЭТУ ЯЧЕЙКУ"})]}),R.jsxs("p",{className:"text-neutral-300 font-sans text-xs leading-relaxed",children:["Напишите в диалоге:",R.jsx("br",{}),R.jsxs("code",{className:"text-white bg-black/60 px-2 py-1 mt-1 block font-mono text-[11px] border border-white/10",children:['"Для ячейки ',o.id,' нарисуй: [ваше описание вещи, детали, цвет]"']})]}),R.jsx("p",{className:"text-neutral-400 text-[10px]",children:"Я сразу создам визуализацию одежды и обновлю сайт!"})]})]})]})]}),R.jsxs("div",{className:"border-t border-white/10 p-4 bg-obsidian-900 flex justify-between items-center font-mono text-xs",children:[R.jsx("span",{className:"text-neutral-500 text-[10px]",children:"BLUTIGES SCHWERT // CATACOMB PROTOCOL MMXXVI"}),R.jsx("form",{method:"dialog",children:R.jsx("button",{type:"submit",onClick:e,className:"bg-steel-100 hover:bg-white text-obsidian-950 px-4 py-2 font-bold uppercase tracking-widest text-[11px] transition-colors",children:"CLOSE DOSSIER [ESC]"})})]})]})})},Nw=({isOpen:o,onClose:e,items:i})=>{const s=Re.useRef(null),[l,f]=Xp.useState(null);Re.useEffect(()=>{const p=s.current;p&&(o?p.open||p.showModal():p.open&&p.close())},[o]);const d=(p,m)=>{mi.playClick(),navigator.clipboard.writeText(p),f(m),setTimeout(()=>f(null),2e3)},h=i.filter(p=>p.status==="AWAITING_DESIGN");return R.jsx("dialog",{ref:s,closedby:"any","aria-labelledby":"promptTitle",className:"m-auto bg-obsidian-950 text-steel-200 border border-blood-700/80 p-0 max-w-2xl w-[94vw] max-h-[85vh] overflow-y-auto shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md font-mono",children:R.jsxs("div",{className:"p-4 sm:p-6 space-y-6",children:[R.jsxs("div",{className:"flex justify-between items-start border-b border-white/10 pb-4",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center space-x-2 text-blood-500 font-bold text-xs uppercase",children:[R.jsx(Lu,{className:"w-4 h-4 animate-spin"}),R.jsx("span",{children:"ГЕНЕРАТОР КОНЦЕПТОВ ОДЕЖДЫ"})]}),R.jsx("h2",{id:"promptTitle",className:"text-xl font-bold text-white mt-1",children:"Наполнить пустые ячейки Blutiges Schwert"})]}),R.jsx("form",{method:"dialog",children:R.jsx("button",{type:"submit",onClick:e,className:"p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors",children:R.jsx(Qx,{className:"w-5 h-5"})})})]}),R.jsxs("div",{className:"bg-blood-950/30 border border-blood-800/40 p-4 text-xs space-y-2 font-sans",children:[R.jsx("p",{className:"text-neutral-200 leading-relaxed",children:"Чтобы я сгенерировал и встроил одежду в нужную ячейку сайта, просто напишите мне в чат:"}),R.jsx("div",{className:"bg-black/70 border border-white/10 p-2 text-white font-mono text-[11px]",children:"Для ячейки [ID] нарисуй: [Ваша идея вещи, материал, силуэт, металлические детали]"})]}),R.jsxs("div",{className:"space-y-3",children:[R.jsx("span",{className:"text-xs text-neutral-400 uppercase tracking-wider block",children:"Свободные ячейки и готовые шаблоны (кликните, чтобы скопировать):"}),R.jsx("div",{className:"space-y-2",children:h.map(p=>{const m=`Для ячейки ${p.id} (${p.category}): ${p.silhouette}, черная кожа, серебряные пряжки и шипы`,S=l===p.id;return R.jsxs("div",{onClick:()=>d(m,p.id),className:"group border border-neutral-800 hover:border-blood-500 bg-obsidian-900/50 p-3 flex justify-between items-center cursor-pointer transition-all hover:bg-obsidian-850",children:[R.jsxs("div",{className:"space-y-0.5",children:[R.jsxs("div",{className:"flex items-center space-x-2",children:[R.jsx("span",{className:"text-blood-400 font-bold text-xs",children:p.slotNumber}),R.jsx("span",{className:"text-neutral-500",children:"//"}),R.jsx("span",{className:"text-white text-xs",children:p.category})]}),R.jsx("p",{className:"text-[11px] text-neutral-400 font-sans line-clamp-1",children:p.silhouette})]}),R.jsx("button",{className:`px-2.5 py-1 border text-[10px] flex items-center space-x-1.5 transition-colors ${S?"border-emerald-500 text-emerald-400 bg-emerald-950/40":"border-white/10 text-neutral-400 group-hover:text-white group-hover:border-blood-500"}`,children:S?R.jsxs(R.Fragment,{children:[R.jsx(GE,{className:"w-3 h-3 text-emerald-400"}),R.jsx("span",{children:"СКОПИРОВАНО"})]}):R.jsxs(R.Fragment,{children:[R.jsx(VE,{className:"w-3 h-3"}),R.jsx("span",{children:"СКОПИРОВАТЬ"})]})})]},p.id)})})]}),R.jsxs("div",{className:"border-t border-white/10 pt-4 flex justify-between items-center text-xs",children:[R.jsx("span",{className:"text-neutral-500 text-[10px]",children:"BLUTIGES SCHWERT // ATELIER PROMPT DISCIPLINE"}),R.jsx("form",{method:"dialog",children:R.jsx("button",{type:"submit",onClick:e,className:"bg-steel-100 hover:bg-white text-obsidian-950 px-4 py-2 font-bold uppercase text-[11px] transition-colors",children:"ЗАКРЫТЬ"})})]})]})})},Dw=({enabled:o=!0})=>{const e=Re.useRef(null);return Re.useEffect(()=>{if(!o)return;const i=e.current;if(!i)return;const s=i.getContext("2d");if(!s)return;let l,f=i.width=window.innerWidth,d=i.height=window.innerHeight;const h=()=>{i&&(f=i.width=window.innerWidth,d=i.height=window.innerHeight)};window.addEventListener("resize",h);const p=["rgba(185, 28, 28, ","rgba(220, 38, 38, ","rgba(127, 29, 29, ","rgba(153, 27, 27, ","rgba(255, 40, 70, "],m=Math.min(130,Math.floor(f/10)),S=[],v=[];for(let y=0;y<m;y++)S.push({x:Math.random()*(f+200)-100,y:Math.random()*d,length:Math.random()*28+14,speed:Math.random()*14+10,opacity:Math.random()*.55+.2,width:Math.random()*1.5+.6,color:p[Math.floor(Math.random()*p.length)]});const _=.18,E=Math.sin(_),T=Math.cos(_),D=()=>{s.clearRect(0,0,f,d);const y=s.createLinearGradient(0,d-160,0,d);y.addColorStop(0,"rgba(50, 0, 5, 0)"),y.addColorStop(1,"rgba(70, 0, 8, 0.18)"),s.fillStyle=y,s.fillRect(0,d-160,f,160),s.lineCap="round";for(let x=0;x<S.length;x++){const C=S[x];s.beginPath();const F=C.x,N=C.y,O=C.x-C.length*E,L=C.y+C.length*T;s.strokeStyle=`${C.color}${C.opacity})`,s.lineWidth=C.width,s.moveTo(F,N),s.lineTo(O,L),s.stroke(),C.x-=C.speed*E,C.y+=C.speed*T,(C.y>d||C.x<-100)&&(Math.random()>.4&&v.length<25&&v.push({x:C.x,y:Math.min(d-2,C.y),radius:1,maxRadius:Math.random()*8+4,opacity:C.opacity*.8,color:C.color}),C.y=-C.length-Math.random()*50,C.x=Math.random()*(f+200)-50,C.speed=Math.random()*14+10)}for(let x=v.length-1;x>=0;x--){const C=v[x];s.beginPath(),s.ellipse(C.x,C.y,C.radius*2,C.radius*.6,0,0,Math.PI*2),s.strokeStyle=`${C.color}${C.opacity})`,s.lineWidth=1,s.stroke(),C.radius+=.4,C.opacity-=.035,(C.opacity<=0||C.radius>=C.maxRadius)&&v.splice(x,1)}l=requestAnimationFrame(D)};return D(),()=>{window.removeEventListener("resize",h),cancelAnimationFrame(l)}},[o]),o?R.jsx("canvas",{ref:e,className:"fixed inset-0 pointer-events-none z-20 select-none mix-blend-screen opacity-75",style:{willChange:"transform"}}):null},Uw=()=>{const[o]=Re.useState(NE),[e,i]=Re.useState("ALL"),[s,l]=Re.useState(null),[f,d]=Re.useState(!0),[h,p]=Re.useState("MATRIX"),[m,S]=Re.useState(!1),v=o.find(T=>T.id==="BS-00")||o[0],_=o.filter(T=>e==="ALL"?T.id!=="BS-00":T.category===e),E=o.filter(T=>T.status==="AWAITING_DESIGN").length;return R.jsxs(R.Fragment,{children:[R.jsx(Dw,{enabled:f}),R.jsxs(nb,{activeTab:h,onSelectTab:p,currentCategory:e,onSelectCategory:i,pendingCount:E,isRainActive:f,onToggleRain:()=>d(T=>!T),onOpenQuickPrompt:()=>S(!0),children:[h==="MATRIX"&&R.jsxs("div",{className:"animate-in fade-in duration-300",children:[e==="ALL"&&R.jsx(Tw,{originItem:v,onInspect:T=>l(T)}),R.jsx(Rw,{items:_,onSelectItem:T=>l(T)})]}),h==="3D_VAULT"&&R.jsx("div",{className:"animate-in fade-in duration-500 py-6",children:R.jsx(BS,{})}),h==="MANIFESTO"&&R.jsx(ww,{})]}),R.jsx(Cw,{item:s,onClose:()=>l(null)}),R.jsx(Nw,{isOpen:m,onClose:()=>S(!1),items:o})]})},Rx=document.getElementById("root");Rx&&CE.createRoot(Rx).render(R.jsx(Xp.StrictMode,{children:R.jsx(Uw,{})}));
