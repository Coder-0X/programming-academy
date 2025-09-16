function Up(a,c){for(var u=0;u<c.length;u++){const f=c[u];if(typeof f!="string"&&!Array.isArray(f)){for(const h in f)if(h!=="default"&&!(h in a)){const g=Object.getOwnPropertyDescriptor(f,h);g&&Object.defineProperty(a,h,g.get?g:{enumerable:!0,get:()=>f[h]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))f(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function u(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function f(h){if(h.ep)return;h.ep=!0;const g=u(h);fetch(h.href,g)}})();function kc(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $o={exports:{}},Nr={},Wo={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function Hp(){if(tc)return Y;tc=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),b=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),C=Symbol.iterator;function U(v){return v===null||typeof v!="object"?null:(v=C&&v[C]||v["@@iterator"],typeof v=="function"?v:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,W={};function R(v,j,J){this.props=v,this.context=j,this.refs=W,this.updater=J||G}R.prototype.isReactComponent={},R.prototype.setState=function(v,j){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,j,"setState")},R.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ie(){}ie.prototype=R.prototype;function F(v,j,J){this.props=v,this.context=j,this.refs=W,this.updater=J||G}var X=F.prototype=new ie;X.constructor=F,Z(X,R.prototype),X.isPureReactComponent=!0;var de=Array.isArray,Se=Object.prototype.hasOwnProperty,Ce={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function De(v,j,J){var K,te={},ne=null,ae=null;if(j!=null)for(K in j.ref!==void 0&&(ae=j.ref),j.key!==void 0&&(ne=""+j.key),j)Se.call(j,K)&&!Pe.hasOwnProperty(K)&&(te[K]=j[K]);var le=arguments.length-2;if(le===1)te.children=J;else if(1<le){for(var fe=Array(le),Xe=0;Xe<le;Xe++)fe[Xe]=arguments[Xe+2];te.children=fe}if(v&&v.defaultProps)for(K in le=v.defaultProps,le)te[K]===void 0&&(te[K]=le[K]);return{$$typeof:a,type:v,key:ne,ref:ae,props:te,_owner:Ce.current}}function rt(v,j){return{$$typeof:a,type:v.type,key:j,ref:v.ref,props:v.props,_owner:v._owner}}function Ke(v){return typeof v=="object"&&v!==null&&v.$$typeof===a}function ct(v){var j={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(J){return j[J]})}var $e=/\/+/g;function ze(v,j){return typeof v=="object"&&v!==null&&v.key!=null?ct(""+v.key):j.toString(36)}function ye(v,j,J,K,te){var ne=typeof v;(ne==="undefined"||ne==="boolean")&&(v=null);var ae=!1;if(v===null)ae=!0;else switch(ne){case"string":case"number":ae=!0;break;case"object":switch(v.$$typeof){case a:case c:ae=!0}}if(ae)return ae=v,te=te(ae),v=K===""?"."+ze(ae,0):K,de(te)?(J="",v!=null&&(J=v.replace($e,"$&/")+"/"),ye(te,j,J,"",function(Xe){return Xe})):te!=null&&(Ke(te)&&(te=rt(te,J+(!te.key||ae&&ae.key===te.key?"":(""+te.key).replace($e,"$&/")+"/")+v)),j.push(te)),1;if(ae=0,K=K===""?".":K+":",de(v))for(var le=0;le<v.length;le++){ne=v[le];var fe=K+ze(ne,le);ae+=ye(ne,j,J,fe,te)}else if(fe=U(v),typeof fe=="function")for(v=fe.call(v),le=0;!(ne=v.next()).done;)ne=ne.value,fe=K+ze(ne,le++),ae+=ye(ne,j,J,fe,te);else if(ne==="object")throw j=String(v),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ae}function Te(v,j,J){if(v==null)return v;var K=[],te=0;return ye(v,K,"","",function(ne){return j.call(J,ne,te++)}),K}function be(v){if(v._status===-1){var j=v._result;j=j(),j.then(function(J){(v._status===0||v._status===-1)&&(v._status=1,v._result=J)},function(J){(v._status===0||v._status===-1)&&(v._status=2,v._result=J)}),v._status===-1&&(v._status=0,v._result=j)}if(v._status===1)return v._result.default;throw v._result}var pe={current:null},z={transition:null},q={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:z,ReactCurrentOwner:Ce};function D(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:Te,forEach:function(v,j,J){Te(v,function(){j.apply(this,arguments)},J)},count:function(v){var j=0;return Te(v,function(){j++}),j},toArray:function(v){return Te(v,function(j){return j})||[]},only:function(v){if(!Ke(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},Y.Component=R,Y.Fragment=u,Y.Profiler=h,Y.PureComponent=F,Y.StrictMode=f,Y.Suspense=k,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Y.act=D,Y.cloneElement=function(v,j,J){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var K=Z({},v.props),te=v.key,ne=v.ref,ae=v._owner;if(j!=null){if(j.ref!==void 0&&(ne=j.ref,ae=Ce.current),j.key!==void 0&&(te=""+j.key),v.type&&v.type.defaultProps)var le=v.type.defaultProps;for(fe in j)Se.call(j,fe)&&!Pe.hasOwnProperty(fe)&&(K[fe]=j[fe]===void 0&&le!==void 0?le[fe]:j[fe])}var fe=arguments.length-2;if(fe===1)K.children=J;else if(1<fe){le=Array(fe);for(var Xe=0;Xe<fe;Xe++)le[Xe]=arguments[Xe+2];K.children=le}return{$$typeof:a,type:v.type,key:te,ref:ne,props:K,_owner:ae}},Y.createContext=function(v){return v={$$typeof:b,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},Y.createElement=De,Y.createFactory=function(v){var j=De.bind(null,v);return j.type=v,j},Y.createRef=function(){return{current:null}},Y.forwardRef=function(v){return{$$typeof:P,render:v}},Y.isValidElement=Ke,Y.lazy=function(v){return{$$typeof:L,_payload:{_status:-1,_result:v},_init:be}},Y.memo=function(v,j){return{$$typeof:S,type:v,compare:j===void 0?null:j}},Y.startTransition=function(v){var j=z.transition;z.transition={};try{v()}finally{z.transition=j}},Y.unstable_act=D,Y.useCallback=function(v,j){return pe.current.useCallback(v,j)},Y.useContext=function(v){return pe.current.useContext(v)},Y.useDebugValue=function(){},Y.useDeferredValue=function(v){return pe.current.useDeferredValue(v)},Y.useEffect=function(v,j){return pe.current.useEffect(v,j)},Y.useId=function(){return pe.current.useId()},Y.useImperativeHandle=function(v,j,J){return pe.current.useImperativeHandle(v,j,J)},Y.useInsertionEffect=function(v,j){return pe.current.useInsertionEffect(v,j)},Y.useLayoutEffect=function(v,j){return pe.current.useLayoutEffect(v,j)},Y.useMemo=function(v,j){return pe.current.useMemo(v,j)},Y.useReducer=function(v,j,J){return pe.current.useReducer(v,j,J)},Y.useRef=function(v){return pe.current.useRef(v)},Y.useState=function(v){return pe.current.useState(v)},Y.useSyncExternalStore=function(v,j,J){return pe.current.useSyncExternalStore(v,j,J)},Y.useTransition=function(){return pe.current.useTransition()},Y.version="18.3.1",Y}var nc;function ra(){return nc||(nc=1,Wo.exports=Hp()),Wo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Vp(){if(rc)return Nr;rc=1;var a=ra(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function b(P,k,S){var L,C={},U=null,G=null;S!==void 0&&(U=""+S),k.key!==void 0&&(U=""+k.key),k.ref!==void 0&&(G=k.ref);for(L in k)f.call(k,L)&&!g.hasOwnProperty(L)&&(C[L]=k[L]);if(P&&P.defaultProps)for(L in k=P.defaultProps,k)C[L]===void 0&&(C[L]=k[L]);return{$$typeof:c,type:P,key:U,ref:G,props:C,_owner:h.current}}return Nr.Fragment=u,Nr.jsx=b,Nr.jsxs=b,Nr}var ic;function $p(){return ic||(ic=1,$o.exports=Vp()),$o.exports}var s=$p(),M=ra();const Lr=kc(M),Wp=Up({__proto__:null,default:Lr},[M]);var Hi={},qo={exports:{}},Ye={},Qo={exports:{}},Go={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc;function qp(){return lc||(lc=1,function(a){function c(z,q){var D=z.length;z.push(q);e:for(;0<D;){var v=D-1>>>1,j=z[v];if(0<h(j,q))z[v]=q,z[D]=j,D=v;else break e}}function u(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var q=z[0],D=z.pop();if(D!==q){z[0]=D;e:for(var v=0,j=z.length,J=j>>>1;v<J;){var K=2*(v+1)-1,te=z[K],ne=K+1,ae=z[ne];if(0>h(te,D))ne<j&&0>h(ae,te)?(z[v]=ae,z[ne]=D,v=ne):(z[v]=te,z[K]=D,v=K);else if(ne<j&&0>h(ae,D))z[v]=ae,z[ne]=D,v=ne;else break e}}return q}function h(z,q){var D=z.sortIndex-q.sortIndex;return D!==0?D:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;a.unstable_now=function(){return g.now()}}else{var b=Date,P=b.now();a.unstable_now=function(){return b.now()-P}}var k=[],S=[],L=1,C=null,U=3,G=!1,Z=!1,W=!1,R=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(z){for(var q=u(S);q!==null;){if(q.callback===null)f(S);else if(q.startTime<=z)f(S),q.sortIndex=q.expirationTime,c(k,q);else break;q=u(S)}}function de(z){if(W=!1,X(z),!Z)if(u(k)!==null)Z=!0,be(Se);else{var q=u(S);q!==null&&pe(de,q.startTime-z)}}function Se(z,q){Z=!1,W&&(W=!1,ie(De),De=-1),G=!0;var D=U;try{for(X(q),C=u(k);C!==null&&(!(C.expirationTime>q)||z&&!ct());){var v=C.callback;if(typeof v=="function"){C.callback=null,U=C.priorityLevel;var j=v(C.expirationTime<=q);q=a.unstable_now(),typeof j=="function"?C.callback=j:C===u(k)&&f(k),X(q)}else f(k);C=u(k)}if(C!==null)var J=!0;else{var K=u(S);K!==null&&pe(de,K.startTime-q),J=!1}return J}finally{C=null,U=D,G=!1}}var Ce=!1,Pe=null,De=-1,rt=5,Ke=-1;function ct(){return!(a.unstable_now()-Ke<rt)}function $e(){if(Pe!==null){var z=a.unstable_now();Ke=z;var q=!0;try{q=Pe(!0,z)}finally{q?ze():(Ce=!1,Pe=null)}}else Ce=!1}var ze;if(typeof F=="function")ze=function(){F($e)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Te=ye.port2;ye.port1.onmessage=$e,ze=function(){Te.postMessage(null)}}else ze=function(){R($e,0)};function be(z){Pe=z,Ce||(Ce=!0,ze())}function pe(z,q){De=R(function(){z(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){Z||G||(Z=!0,be(Se))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return U},a.unstable_getFirstCallbackNode=function(){return u(k)},a.unstable_next=function(z){switch(U){case 1:case 2:case 3:var q=3;break;default:q=U}var D=U;U=q;try{return z()}finally{U=D}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=U;U=z;try{return q()}finally{U=D}},a.unstable_scheduleCallback=function(z,q,D){var v=a.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?v+D:v):D=v,z){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=D+j,z={id:L++,callback:q,priorityLevel:z,startTime:D,expirationTime:j,sortIndex:-1},D>v?(z.sortIndex=D,c(S,z),u(k)===null&&z===u(S)&&(W?(ie(De),De=-1):W=!0,pe(de,D-v))):(z.sortIndex=j,c(k,z),Z||G||(Z=!0,be(Se))),z},a.unstable_shouldYield=ct,a.unstable_wrapCallback=function(z){var q=U;return function(){var D=U;U=q;try{return z.apply(this,arguments)}finally{U=D}}}}(Go)),Go}var oc;function Qp(){return oc||(oc=1,Qo.exports=qp()),Qo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Gp(){if(ac)return Ye;ac=1;var a=ra(),c=Qp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,h={};function g(e,t){b(e,t),b(e+"Capture",t)}function b(e,t){for(h[e]=t,e=0;e<t.length;e++)f.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},C={};function U(e){return k.call(C,e)?!0:k.call(L,e)?!1:S.test(e)?C[e]=!0:(L[e]=!0,!1)}function G(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Z(e,t,n,r){if(t===null||typeof t>"u"||G(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];R[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,F);R[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,F);R[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,F);R[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=R.hasOwnProperty(t)?R[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Z(t,n,i,r)&&(n=null),r||i===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var de=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),Ke=Symbol.for("react.provider"),ct=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,v;function j(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var J=!1;function K(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,d=l.length-1;1<=o&&0<=d&&i[o]!==l[d];)d--;for(;1<=o&&0<=d;o--,d--)if(i[o]!==l[d]){if(o!==1||d!==1)do if(o--,d--,0>d||i[o]!==l[d]){var p=`
`+i[o].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=o&&0<=d);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function te(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case Ce:return"Portal";case rt:return"Profiler";case De:return"StrictMode";case ze:return"Suspense";case ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ct:return(e.displayName||"Context")+".Consumer";case Ke:return(e._context.displayName||"Context")+".Provider";case $e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(t);case 8:return t===De?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xe(e){var t=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Xe(e))}function aa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yi(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ua(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function Ki(e,t){ua(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xi(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xi(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Bn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function pa(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ma(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function ga(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ga(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qc=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,mn=null,hn=null;function ya(e){if(e=cr(e)){if(typeof ll!="function")throw Error(u(280));var t=e.stateNode;t&&(t=ri(t),ll(e.stateNode,e.type,t))}}function xa(e){mn?hn?hn.push(e):hn=[e]:mn=e}function wa(){if(mn){var e=mn,t=hn;if(hn=mn=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function ba(e,t){return e(t)}function ka(){}var ol=!1;function Sa(e,t,n){if(ol)return e(t,n);ol=!0;try{return ba(e,t,n)}finally{ol=!1,(mn!==null||hn!==null)&&(ka(),wa())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var al=!1;if(P)try{var $n={};Object.defineProperty($n,"passive",{get:function(){al=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{al=!1}function Qc(e,t,n,r,i,l,o,d,p){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(E){this.onError(E)}}var Wn=!1,Ir=null,Or=!1,sl=null,Gc={onError:function(e){Wn=!0,Ir=e}};function Jc(e,t,n,r,i,l,o,d,p){Wn=!1,Ir=null,Qc.apply(Gc,arguments)}function Yc(e,t,n,r,i,l,o,d,p){if(Jc.apply(this,arguments),Wn){if(Wn){var w=Ir;Wn=!1,Ir=null}else throw Error(u(198));Or||(Or=!0,sl=w)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(Kt(e)!==e)throw Error(u(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Na(i),e;if(l===r)return Na(i),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,d=i.child;d;){if(d===n){o=!0,n=i,r=l;break}if(d===r){o=!0,r=i,n=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===n){o=!0,n=l,r=i;break}if(d===r){o=!0,r=l,n=i;break}d=d.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ja(e){return e=Kc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var Pa=c.unstable_scheduleCallback,Ta=c.unstable_cancelCallback,Xc=c.unstable_shouldYield,Zc=c.unstable_requestPaint,xe=c.unstable_now,ed=c.unstable_getCurrentPriorityLevel,ul=c.unstable_ImmediatePriority,La=c.unstable_UserBlockingPriority,Dr=c.unstable_NormalPriority,td=c.unstable_LowPriority,_a=c.unstable_IdlePriority,Ar=null,yt=null;function nd(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ar,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ld,rd=Math.log,id=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(rd(e)/id|0)|0}var Fr=64,Br=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var d=o&~i;d!==0?r=qn(d):(l&=o,l!==0&&(r=qn(l)))}else o=n&~i,o!==0?r=qn(o):l!==0&&(r=qn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-dt(l),d=1<<o,p=i[o];p===-1?((d&n)===0||(d&r)!==0)&&(i[o]=od(d,t)):p<=t&&(e.expiredLanes|=d),l&=~d}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ma(){var e=Fr;return Fr<<=1,(Fr&4194240)===0&&(Fr=64),e}function dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var za,fl,Ia,Oa,Da,ml=!1,Hr=[],_t=null,Mt=null,Rt=null,Gn=new Map,Jn=new Map,zt=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Yn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cd(e,t,n,r,i){switch(t){case"focusin":return _t=Yn(_t,e,t,n,r,i),!0;case"dragenter":return Mt=Yn(Mt,e,t,n,r,i),!0;case"mouseover":return Rt=Yn(Rt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Gn.set(l,Yn(Gn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Jn.set(l,Yn(Jn.get(l)||null,e,t,n,r,i)),!0}return!1}function Fa(e){var t=Xt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Da(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=cr(n),t!==null&&fl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ba(e,t,n){Vr(e)&&n.delete(t)}function dd(){ml=!1,_t!==null&&Vr(_t)&&(_t=null),Mt!==null&&Vr(Mt)&&(Mt=null),Rt!==null&&Vr(Rt)&&(Rt=null),Gn.forEach(Ba),Jn.forEach(Ba)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,dd)))}function Xn(e){function t(i){return Kn(i,e)}if(0<Hr.length){Kn(Hr[0],e);for(var n=1;n<Hr.length;n++){var r=Hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Kn(_t,e),Mt!==null&&Kn(Mt,e),Rt!==null&&Kn(Rt,e),Gn.forEach(t),Jn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Fa(n),n.blockedOn===null&&zt.shift()}var gn=de.ReactCurrentBatchConfig,$r=!0;function pd(e,t,n,r){var i=oe,l=gn.transition;gn.transition=null;try{oe=1,hl(e,t,n,r)}finally{oe=i,gn.transition=l}}function fd(e,t,n,r){var i=oe,l=gn.transition;gn.transition=null;try{oe=4,hl(e,t,n,r)}finally{oe=i,gn.transition=l}}function hl(e,t,n,r){if($r){var i=gl(e,t,n,r);if(i===null)Rl(e,t,r,Wr,n),Aa(e,r);else if(cd(i,e,t,n,r))r.stopPropagation();else if(Aa(e,r),t&4&&-1<ud.indexOf(e)){for(;i!==null;){var l=cr(i);if(l!==null&&za(l),l=gl(e,t,n,r),l===null&&Rl(e,t,r,Wr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var Wr=null;function gl(e,t,n,r){if(Wr=null,e=il(r),e=Xt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case ul:return 1;case La:return 4;case Dr:case td:return 16;case _a:return 536870912;default:return 16}default:return 16}}var It=null,vl=null,qr=null;function Ha(){if(qr)return qr;var e,t=vl,n=t.length,r,i="value"in It?It.value:It.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return qr=i.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Va(){return!1}function Ze(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gr:Va,this.isPropagationStopped=Va,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ze(vn),Zn=D({},vn,{view:0,detail:0}),md=Ze(Zn),xl,wl,er,Jr=D({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(xl=e.screenX-er.screenX,wl=e.screenY-er.screenY):wl=xl=0,er=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),$a=Ze(Jr),hd=D({},Jr,{dataTransfer:0}),gd=Ze(hd),vd=D({},Zn,{relatedTarget:0}),bl=Ze(vd),yd=D({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=Ze(yd),wd=D({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=Ze(wd),kd=D({},vn,{data:0}),Wa=Ze(kd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function kl(){return jd}var Ed=D({},Zn,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=Ze(Ed),Td=D({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Ze(Td),Ld=D({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),_d=Ze(Ld),Md=D({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=Ze(Md),zd=D({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Ze(zd),Od=[9,13,27,32],Sl=P&&"CompositionEvent"in window,tr=null;P&&"documentMode"in document&&(tr=document.documentMode);var Dd=P&&"TextEvent"in window&&!tr,Qa=P&&(!Sl||tr&&8<tr&&11>=tr),Ga=" ",Ja=!1;function Ya(e,t){switch(e){case"keyup":return Od.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Ad(e,t){switch(e){case"compositionend":return Ka(t);case"keypress":return t.which!==32?null:(Ja=!0,Ga);case"textInput":return e=t.data,e===Ga&&Ja?null:e;default:return null}}function Fd(e,t){if(yn)return e==="compositionend"||!Sl&&Ya(e,t)?(e=Ha(),qr=vl=It=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bd[e.type]:t==="textarea"}function Za(e,t,n,r){xa(r),t=ei(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function Ud(e){vs(e,0)}function Yr(e){var t=Sn(e);if(aa(t))return e}function Hd(e,t){if(e==="change")return t}var es=!1;if(P){var Cl;if(P){var Nl="oninput"in document;if(!Nl){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Nl=typeof ts.oninput=="function"}Cl=Nl}else Cl=!1;es=Cl&&(!document.documentMode||9<document.documentMode)}function ns(){nr&&(nr.detachEvent("onpropertychange",rs),rr=nr=null)}function rs(e){if(e.propertyName==="value"&&Yr(rr)){var t=[];Za(t,rr,e,il(e)),Sa(Ud,t)}}function Vd(e,t,n){e==="focusin"?(ns(),nr=t,rr=n,nr.attachEvent("onpropertychange",rs)):e==="focusout"&&ns()}function $d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yr(rr)}function Wd(e,t){if(e==="click")return Yr(t)}function qd(e,t){if(e==="input"||e==="change")return Yr(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Qd;function ir(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!k.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function os(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?os(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function as(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gd(e){var t=as(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&os(n.ownerDocument.documentElement,n)){if(r!==null&&jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ls(n,l);var o=ls(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=P&&"documentMode"in document&&11>=document.documentMode,xn=null,El=null,lr=null,Pl=!1;function ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||xn==null||xn!==Rr(r)||(r=xn,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&ir(lr,r)||(lr=r,r=ei(El,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},Tl={},us={};P&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Xr(e){if(Tl[e])return Tl[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in us)return Tl[e]=t[n];return e}var cs=Xr("animationend"),ds=Xr("animationiteration"),ps=Xr("animationstart"),fs=Xr("transitionend"),ms=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){ms.set(e,t),g(t,[e])}for(var Ll=0;Ll<hs.length;Ll++){var _l=hs[Ll],Yd=_l.toLowerCase(),Kd=_l[0].toUpperCase()+_l.slice(1);Ot(Yd,"on"+Kd)}Ot(cs,"onAnimationEnd"),Ot(ds,"onAnimationIteration"),Ot(ps,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(fs,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var d=r[o],p=d.instance,w=d.currentTarget;if(d=d.listener,p!==l&&i.isPropagationStopped())break e;gs(i,d,w),l=p}else for(o=0;o<r.length;o++){if(d=r[o],p=d.instance,w=d.currentTarget,d=d.listener,p!==l&&i.isPropagationStopped())break e;gs(i,d,w),l=p}}}if(Or)throw e=sl,Or=!1,sl=null,e}function ue(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(ys(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),ys(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Zr]){e[Zr]=!0,f.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ml("selectionchange",!1,t))}}function ys(e,t,n,r){switch(Ua(t)){case 1:var i=pd;break;case 4:i=fd;break;default:i=hl}n=i.bind(null,t,n,e),i=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var p=o.tag;if((p===3||p===4)&&(p=o.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;o=o.return}for(;d!==null;){if(o=Xt(d),o===null)return;if(p=o.tag,p===5||p===6){r=l=o;continue e}d=d.parentNode}}r=r.return}Sa(function(){var w=l,E=il(n),T=[];e:{var N=ms.get(e);if(N!==void 0){var I=yl,A=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":I=Pd;break;case"focusin":A="focus",I=bl;break;case"focusout":A="blur",I=bl;break;case"beforeblur":case"afterblur":I=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=_d;break;case cs:case ds:case ps:I=xd;break;case fs:I=Rd;break;case"scroll":I=md;break;case"wheel":I=Id;break;case"copy":case"cut":case"paste":I=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=qa}var B=(t&4)!==0,we=!B&&e==="scroll",y=B?N!==null?N+"Capture":null:N;B=[];for(var m=w,x;m!==null;){x=m;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,y!==null&&(_=Vn(m,y),_!=null&&B.push(sr(m,_,x)))),we)break;m=m.return}0<B.length&&(N=new I(N,A,null,n,E),T.push({event:N,listeners:B}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",N&&n!==rl&&(A=n.relatedTarget||n.fromElement)&&(Xt(A)||A[St]))break e;if((I||N)&&(N=E.window===E?E:(N=E.ownerDocument)?N.defaultView||N.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=w,A=A?Xt(A):null,A!==null&&(we=Kt(A),A!==we||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=w),I!==A)){if(B=$a,_="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(B=qa,_="onPointerLeave",y="onPointerEnter",m="pointer"),we=I==null?N:Sn(I),x=A==null?N:Sn(A),N=new B(_,m+"leave",I,n,E),N.target=we,N.relatedTarget=x,_=null,Xt(E)===w&&(B=new B(y,m+"enter",A,n,E),B.target=x,B.relatedTarget=we,_=B),we=_,I&&A)t:{for(B=I,y=A,m=0,x=B;x;x=bn(x))m++;for(x=0,_=y;_;_=bn(_))x++;for(;0<m-x;)B=bn(B),m--;for(;0<x-m;)y=bn(y),x--;for(;m--;){if(B===y||y!==null&&B===y.alternate)break t;B=bn(B),y=bn(y)}B=null}else B=null;I!==null&&xs(T,N,I,B,!1),A!==null&&we!==null&&xs(T,we,A,B,!0)}}e:{if(N=w?Sn(w):window,I=N.nodeName&&N.nodeName.toLowerCase(),I==="select"||I==="input"&&N.type==="file")var H=Hd;else if(Xa(N))if(es)H=qd;else{H=$d;var V=Vd}else(I=N.nodeName)&&I.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(H=Wd);if(H&&(H=H(e,w))){Za(T,H,n,E);break e}V&&V(e,N,w),e==="focusout"&&(V=N._wrapperState)&&V.controlled&&N.type==="number"&&Xi(N,"number",N.value)}switch(V=w?Sn(w):window,e){case"focusin":(Xa(V)||V.contentEditable==="true")&&(xn=V,El=w,lr=null);break;case"focusout":lr=El=xn=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,ss(T,n,E);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":ss(T,n,E)}var $;if(Sl)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else yn?Ya(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Qa&&n.locale!=="ko"&&(yn||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&yn&&($=Ha()):(It=E,vl="value"in It?It.value:It.textContent,yn=!0)),V=ei(w,Q),0<V.length&&(Q=new Wa(Q,e,null,n,E),T.push({event:Q,listeners:V}),$?Q.data=$:($=Ka(n),$!==null&&(Q.data=$)))),($=Dd?Ad(e,n):Fd(e,n))&&(w=ei(w,"onBeforeInput"),0<w.length&&(E=new Wa("onBeforeInput","beforeinput",null,n,E),T.push({event:E,listeners:w}),E.data=$))}vs(T,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vn(e,n),l!=null&&r.unshift(sr(e,l,i)),l=Vn(e,t),l!=null&&r.push(sr(e,l,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var d=n,p=d.alternate,w=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&w!==null&&(d=w,i?(p=Vn(n,l),p!=null&&o.unshift(sr(n,p,d))):i||(p=Vn(n,l),p!=null&&o.push(sr(n,p,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zd=/\r\n?/g,ep=/\u0000|\uFFFD/g;function ws(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(ep,"")}function ti(e,t,n){if(t=ws(t),ws(e)!==t&&n)throw Error(u(425))}function ni(){}var zl=null,Il=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,tp=typeof clearTimeout=="function"?clearTimeout:void 0,bs=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof bs<"u"?function(e){return bs.resolve(null).then(e).catch(rp)}:Dl;function rp(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),xt="__reactFiber$"+kn,ur="__reactProps$"+kn,St="__reactContainer$"+kn,Fl="__reactEvents$"+kn,ip="__reactListeners$"+kn,lp="__reactHandles$"+kn;function Xt(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ks(e);e!==null;){if(n=e[xt])return n;e=ks(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[xt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function ri(e){return e[ur]||null}var Bl=[],Cn=-1;function At(e){return{current:e}}function ce(e){0>Cn||(e.current=Bl[Cn],Bl[Cn]=null,Cn--)}function se(e,t){Cn++,Bl[Cn]=e.current,e.current=t}var Ft={},Ae=At(Ft),We=At(!1),Zt=Ft;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function ii(){ce(We),ce(Ae)}function Ss(e,t,n){if(Ae.current!==Ft)throw Error(u(168));se(Ae,t),se(We,n)}function Cs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,ae(e)||"Unknown",i));return D({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Zt=Ae.current,se(Ae,e),se(We,We.current),!0}function Ns(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Cs(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,ce(We),ce(Ae),se(Ae,e)):ce(We),se(We,n)}var Ct=null,oi=!1,Ul=!1;function js(e){Ct===null?Ct=[e]:Ct.push(e)}function op(e){oi=!0,js(e)}function Bt(){if(!Ul&&Ct!==null){Ul=!0;var e=0,t=oe;try{var n=Ct;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,oi=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(e+1)),Pa(ul,Bt),i}finally{oe=t,Ul=!1}}return null}var jn=[],En=0,ai=null,si=0,it=[],lt=0,en=null,Nt=1,jt="";function tn(e,t){jn[En++]=si,jn[En++]=ai,ai=e,si=t}function Es(e,t,n){it[lt++]=Nt,it[lt++]=jt,it[lt++]=en,en=e;var r=Nt;e=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-dt(t)+i|n<<i|r,jt=l+e}else Nt=1<<l|n<<i|r,jt=e}function Hl(e){e.return!==null&&(tn(e,1),Es(e,1,0))}function Vl(e){for(;e===ai;)ai=jn[--En],jn[En]=null,si=jn[--En],jn[En]=null;for(;e===en;)en=it[--lt],it[lt]=null,jt=it[--lt],it[lt]=null,Nt=it[--lt],it[lt]=null}var et=null,tt=null,me=!1,ft=null;function Ps(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:Nt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function $l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(me){var t=tt;if(t){var n=t;if(!Ts(e,t)){if($l(e))throw Error(u(418));t=Dt(n.nextSibling);var r=et;t&&Ts(e,t)?Ps(r,n):(e.flags=e.flags&-4097|2,me=!1,et=e)}}else{if($l(e))throw Error(u(418));e.flags=e.flags&-4097|2,me=!1,et=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function ui(e){if(e!==et)return!1;if(!me)return Ls(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=tt)){if($l(e))throw _s(),Error(u(418));for(;t;)Ps(e,t),t=Dt(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Dt(e.stateNode.nextSibling):null;return!0}function _s(){for(var e=tt;e;)e=Dt(e.nextSibling)}function Pn(){tt=et=null,me=!1}function ql(e){ft===null?ft=[e]:ft.push(e)}var ap=de.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var d=i.refs;o===null?delete d[l]:d[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Rs(e){function t(y,m){if(e){var x=y.deletions;x===null?(y.deletions=[m],y.flags|=16):x.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=Gt(y,m),y.index=0,y.sibling=null,y}function l(y,m,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<m?(y.flags|=2,m):x):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,m,x,_){return m===null||m.tag!==6?(m=Ao(x,y.mode,_),m.return=y,m):(m=i(m,x),m.return=y,m)}function p(y,m,x,_){var H=x.type;return H===Pe?E(y,m,x.props.children,_,x.key):m!==null&&(m.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===be&&Ms(H)===m.type)?(_=i(m,x.props),_.ref=dr(y,m,x),_.return=y,_):(_=zi(x.type,x.key,x.props,null,y.mode,_),_.ref=dr(y,m,x),_.return=y,_)}function w(y,m,x,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Fo(x,y.mode,_),m.return=y,m):(m=i(m,x.children||[]),m.return=y,m)}function E(y,m,x,_,H){return m===null||m.tag!==7?(m=cn(x,y.mode,_,H),m.return=y,m):(m=i(m,x),m.return=y,m)}function T(y,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ao(""+m,y.mode,x),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Se:return x=zi(m.type,m.key,m.props,null,y.mode,x),x.ref=dr(y,null,m),x.return=y,x;case Ce:return m=Fo(m,y.mode,x),m.return=y,m;case be:var _=m._init;return T(y,_(m._payload),x)}if(Bn(m)||q(m))return m=cn(m,y.mode,x,null),m.return=y,m;ci(y,m)}return null}function N(y,m,x,_){var H=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return H!==null?null:d(y,m,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Se:return x.key===H?p(y,m,x,_):null;case Ce:return x.key===H?w(y,m,x,_):null;case be:return H=x._init,N(y,m,H(x._payload),_)}if(Bn(x)||q(x))return H!==null?null:E(y,m,x,_,null);ci(y,x)}return null}function I(y,m,x,_,H){if(typeof _=="string"&&_!==""||typeof _=="number")return y=y.get(x)||null,d(m,y,""+_,H);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Se:return y=y.get(_.key===null?x:_.key)||null,p(m,y,_,H);case Ce:return y=y.get(_.key===null?x:_.key)||null,w(m,y,_,H);case be:var V=_._init;return I(y,m,x,V(_._payload),H)}if(Bn(_)||q(_))return y=y.get(x)||null,E(m,y,_,H,null);ci(m,_)}return null}function A(y,m,x,_){for(var H=null,V=null,$=m,Q=m=0,Me=null;$!==null&&Q<x.length;Q++){$.index>Q?(Me=$,$=null):Me=$.sibling;var re=N(y,$,x[Q],_);if(re===null){$===null&&($=Me);break}e&&$&&re.alternate===null&&t(y,$),m=l(re,m,Q),V===null?H=re:V.sibling=re,V=re,$=Me}if(Q===x.length)return n(y,$),me&&tn(y,Q),H;if($===null){for(;Q<x.length;Q++)$=T(y,x[Q],_),$!==null&&(m=l($,m,Q),V===null?H=$:V.sibling=$,V=$);return me&&tn(y,Q),H}for($=r(y,$);Q<x.length;Q++)Me=I($,y,Q,x[Q],_),Me!==null&&(e&&Me.alternate!==null&&$.delete(Me.key===null?Q:Me.key),m=l(Me,m,Q),V===null?H=Me:V.sibling=Me,V=Me);return e&&$.forEach(function(Jt){return t(y,Jt)}),me&&tn(y,Q),H}function B(y,m,x,_){var H=q(x);if(typeof H!="function")throw Error(u(150));if(x=H.call(x),x==null)throw Error(u(151));for(var V=H=null,$=m,Q=m=0,Me=null,re=x.next();$!==null&&!re.done;Q++,re=x.next()){$.index>Q?(Me=$,$=null):Me=$.sibling;var Jt=N(y,$,re.value,_);if(Jt===null){$===null&&($=Me);break}e&&$&&Jt.alternate===null&&t(y,$),m=l(Jt,m,Q),V===null?H=Jt:V.sibling=Jt,V=Jt,$=Me}if(re.done)return n(y,$),me&&tn(y,Q),H;if($===null){for(;!re.done;Q++,re=x.next())re=T(y,re.value,_),re!==null&&(m=l(re,m,Q),V===null?H=re:V.sibling=re,V=re);return me&&tn(y,Q),H}for($=r(y,$);!re.done;Q++,re=x.next())re=I($,y,Q,re.value,_),re!==null&&(e&&re.alternate!==null&&$.delete(re.key===null?Q:re.key),m=l(re,m,Q),V===null?H=re:V.sibling=re,V=re);return e&&$.forEach(function(Bp){return t(y,Bp)}),me&&tn(y,Q),H}function we(y,m,x,_){if(typeof x=="object"&&x!==null&&x.type===Pe&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Se:e:{for(var H=x.key,V=m;V!==null;){if(V.key===H){if(H=x.type,H===Pe){if(V.tag===7){n(y,V.sibling),m=i(V,x.props.children),m.return=y,y=m;break e}}else if(V.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===be&&Ms(H)===V.type){n(y,V.sibling),m=i(V,x.props),m.ref=dr(y,V,x),m.return=y,y=m;break e}n(y,V);break}else t(y,V);V=V.sibling}x.type===Pe?(m=cn(x.props.children,y.mode,_,x.key),m.return=y,y=m):(_=zi(x.type,x.key,x.props,null,y.mode,_),_.ref=dr(y,m,x),_.return=y,y=_)}return o(y);case Ce:e:{for(V=x.key;m!==null;){if(m.key===V)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(y,m.sibling),m=i(m,x.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Fo(x,y.mode,_),m.return=y,y=m}return o(y);case be:return V=x._init,we(y,m,V(x._payload),_)}if(Bn(x))return A(y,m,x,_);if(q(x))return B(y,m,x,_);ci(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,x),m.return=y,y=m):(n(y,m),m=Ao(x,y.mode,_),m.return=y,y=m),o(y)):n(y,m)}return we}var Tn=Rs(!0),zs=Rs(!1),di=At(null),pi=null,Ln=null,Ql=null;function Gl(){Ql=Ln=pi=null}function Jl(e){var t=di.current;ce(di),e._currentValue=t}function Yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){pi=e,Ql=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Ql!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(pi===null)throw Error(u(308));Ln=e,pi.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var nn=null;function Kl(e){nn===null?nn=[e]:nn.push(e)}function Is(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Kl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Et(e,n)}return i=r.interleaved,i===null?(t.next=t,Kl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Et(e,n)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pl(e,n)}}function Ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var i=e.updateQueue;Ut=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,w=p.next;p.next=null,o===null?l=w:o.next=w,o=p;var E=e.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==o&&(d===null?E.firstBaseUpdate=w:d.next=w,E.lastBaseUpdate=p))}if(l!==null){var T=i.baseState;o=0,E=w=p=null,d=l;do{var N=d.lane,I=d.eventTime;if((r&N)===N){E!==null&&(E=E.next={eventTime:I,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var A=e,B=d;switch(N=t,I=n,B.tag){case 1:if(A=B.payload,typeof A=="function"){T=A.call(I,T,N);break e}T=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=B.payload,N=typeof A=="function"?A.call(I,T,N):A,N==null)break e;T=D({},T,N);break e;case 2:Ut=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[d]:N.push(d))}else I={eventTime:I,lane:N,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(w=E=I,p=T):E=E.next=I,o|=N;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;N=d,d=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(E===null&&(p=T),i.baseState=p,i.firstBaseUpdate=w,i.lastBaseUpdate=E,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);on|=o,e.lanes=o,e.memoizedState=T}}function As(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var pr={},wt=At(pr),fr=At(pr),mr=At(pr);function rn(e){if(e===pr)throw Error(u(174));return e}function Zl(e,t){switch(se(mr,t),se(fr,e),se(wt,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}ce(wt),se(wt,t)}function Mn(){ce(wt),ce(fr),ce(mr)}function Fs(e){rn(mr.current);var t=rn(wt.current),n=el(t,e.type);t!==n&&(se(fr,e),se(wt,n))}function eo(e){fr.current===e&&(ce(wt),ce(fr))}var he=At(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var gi=de.ReactCurrentDispatcher,ro=de.ReactCurrentBatchConfig,ln=0,ge=null,Ne=null,Le=null,vi=!1,hr=!1,gr=0,sp=0;function Fe(){throw Error(u(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function lo(e,t,n,r,i,l){if(ln=l,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?pp:fp,e=n(r,i),hr){l=0;do{if(hr=!1,gr=0,25<=l)throw Error(u(301));l+=1,Le=Ne=null,t.updateQueue=null,gi.current=mp,e=n(r,i)}while(hr)}if(gi.current=wi,t=Ne!==null&&Ne.next!==null,ln=0,Le=Ne=ge=null,vi=!1,t)throw Error(u(300));return e}function oo(){var e=gr!==0;return gr=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ge.memoizedState=Le=e:Le=Le.next=e,Le}function at(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Le===null?ge.memoizedState:Le.next;if(t!==null)Le=t,Ne=e;else{if(e===null)throw Error(u(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ge.memoizedState=Le=e:Le=Le.next=e}return Le}function vr(e,t){return typeof t=="function"?t(e):t}function ao(e){var t=at(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=o=null,p=null,w=l;do{var E=w.lane;if((ln&E)===E)p!==null&&(p=p.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var T={lane:E,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};p===null?(d=p=T,o=r):p=p.next=T,ge.lanes|=E,on|=E}w=w.next}while(w!==null&&w!==l);p===null?o=r:p.next=d,pt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ge.lanes|=l,on|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function so(e){var t=at(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);pt(l,t.memoizedState)||(Qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Bs(){}function Us(e,t){var n=ge,r=at(),i=t(),l=!pt(r.memoizedState,i);if(l&&(r.memoizedState=i,Qe=!0),r=r.queue,uo($s.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,yr(9,Vs.bind(null,n,r,i,t),void 0,null),_e===null)throw Error(u(349));(ln&30)!==0||Hs(n,t,i)}return i}function Hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vs(e,t,n,r){t.value=n,t.getSnapshot=r,Ws(t)&&qs(e)}function $s(e,t,n){return n(function(){Ws(t)&&qs(e)})}function Ws(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function qs(e){var t=Et(e,1);t!==null&&vt(t,e,1,-1)}function Qs(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=dp.bind(null,ge,e),[t.memoizedState,e]}function yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gs(){return at().memoizedState}function yi(e,t,n,r){var i=bt();ge.flags|=e,i.memoizedState=yr(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var i=at();r=r===void 0?null:r;var l=void 0;if(Ne!==null){var o=Ne.memoizedState;if(l=o.destroy,r!==null&&io(r,o.deps)){i.memoizedState=yr(t,n,l,r);return}}ge.flags|=e,i.memoizedState=yr(1|t,n,l,r)}function Js(e,t){return yi(8390656,8,e,t)}function uo(e,t){return xi(2048,8,e,t)}function Ys(e,t){return xi(4,2,e,t)}function Ks(e,t){return xi(4,4,e,t)}function Xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zs(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,Xs.bind(null,t,e),n)}function co(){}function eu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nu(e,t,n){return(ln&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(pt(n,t)||(n=Ma(),ge.lanes|=n,on|=n,e.baseState=!0),t)}function up(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ro.transition;ro.transition={};try{e(!1),t()}finally{oe=n,ro.transition=r}}function ru(){return at().memoizedState}function cp(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iu(e))lu(t,n);else if(n=Is(e,t,n,r),n!==null){var i=Ve();vt(n,e,r,i),ou(n,t,r)}}function dp(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iu(e))lu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,d=l(o,n);if(i.hasEagerState=!0,i.eagerState=d,pt(d,o)){var p=t.interleaved;p===null?(i.next=i,Kl(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}n=Is(e,t,i,r),n!==null&&(i=Ve(),vt(n,e,r,i),ou(n,t,r))}}function iu(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function lu(e,t){hr=vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ou(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pl(e,n)}}var wi={readContext:ot,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},pp={readContext:ot,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,Xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Qs,useDebugValue:co,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Qs(!1),t=e[0];return e=up.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=bt();if(me){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),_e===null)throw Error(u(349));(ln&30)!==0||Hs(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Js($s.bind(null,r,l,e),[e]),r.flags|=2048,yr(9,Vs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=bt(),t=_e.identifierPrefix;if(me){var n=jt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:ot,useCallback:eu,useContext:ot,useEffect:uo,useImperativeHandle:Zs,useInsertionEffect:Ys,useLayoutEffect:Ks,useMemo:tu,useReducer:ao,useRef:Gs,useState:function(){return ao(vr)},useDebugValue:co,useDeferredValue:function(e){var t=at();return nu(t,Ne.memoizedState,e)},useTransition:function(){var e=ao(vr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Us,useId:ru,unstable_isNewReconciler:!1},mp={readContext:ot,useCallback:eu,useContext:ot,useEffect:uo,useImperativeHandle:Zs,useInsertionEffect:Ys,useLayoutEffect:Ks,useMemo:tu,useReducer:so,useRef:Gs,useState:function(){return so(vr)},useDebugValue:co,useDeferredValue:function(e){var t=at();return Ne===null?t.memoizedState=e:nu(t,Ne.memoizedState,e)},useTransition:function(){var e=so(vr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Us,useId:ru,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=qt(e),l=Pt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Ht(e,l,i),t!==null&&(vt(t,e,i,r),fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=qt(e),l=Pt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ht(e,l,i),t!==null&&(vt(t,e,i,r),fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=qt(e),i=Pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(vt(t,e,r,n),fi(t,e,r))}};function au(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(i,l):!0}function su(e,t,n){var r=!1,i=Ft,l=t.contextType;return typeof l=="object"&&l!==null?l=ot(l):(i=qe(t)?Zt:Ae.current,r=t.contextTypes,l=(r=r!=null)?Nn(e,i):Ft),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function fo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ot(l):(l=qe(t)?Zt:Ae.current,i.context=Nn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(po(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bi.enqueueReplaceState(i,i.state,null),mi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=te(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function mo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hp=typeof WeakMap=="function"?WeakMap:Map;function cu(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pi||(Pi=!0,Lo=r),ho(e,t)},n}function du(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ho(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ho(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tp.bind(null,e,t,n),t.then(e,e))}function fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var gp=de.ReactCurrentOwner,Qe=!1;function He(e,t,n,r){t.child=e===null?zs(t,null,n,r):Tn(t,e.child,n,r)}function hu(e,t,n,r,i){n=n.render;var l=t.ref;return _n(t,i),r=lo(e,t,n,r,l,i),n=oo(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(me&&n&&Hl(t),t.flags|=1,He(e,t,r,i),t.child)}function gu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Do(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,vu(e,t,l,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(o,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=Gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function vu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return go(e,t,n,r,i)}function yu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(In,nt),nt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(In,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,se(In,nt),nt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,se(In,nt),nt|=r;return He(e,t,i,n),t.child}function xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function go(e,t,n,r,i){var l=qe(n)?Zt:Ae.current;return l=Nn(t,l),_n(t,i),n=lo(e,t,n,r,l,i),r=oo(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(me&&r&&Hl(t),t.flags|=1,He(e,t,n,i),t.child)}function wu(e,t,n,r,i){if(qe(n)){var l=!0;li(t)}else l=!1;if(_n(t,i),t.stateNode===null)Si(e,t),su(t,n,r),fo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,d=t.memoizedProps;o.props=d;var p=o.context,w=n.contextType;typeof w=="object"&&w!==null?w=ot(w):(w=qe(n)?Zt:Ae.current,w=Nn(t,w));var E=n.getDerivedStateFromProps,T=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function";T||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==r||p!==w)&&uu(t,o,r,w),Ut=!1;var N=t.memoizedState;o.state=N,mi(t,r,o,i),p=t.memoizedState,d!==r||N!==p||We.current||Ut?(typeof E=="function"&&(po(t,n,E,r),p=t.memoizedState),(d=Ut||au(t,n,d,r,N,p,w))?(T||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=w,r=d):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Os(e,t),d=t.memoizedProps,w=t.type===t.elementType?d:mt(t.type,d),o.props=w,T=t.pendingProps,N=o.context,p=n.contextType,typeof p=="object"&&p!==null?p=ot(p):(p=qe(n)?Zt:Ae.current,p=Nn(t,p));var I=n.getDerivedStateFromProps;(E=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==T||N!==p)&&uu(t,o,r,p),Ut=!1,N=t.memoizedState,o.state=N,mi(t,r,o,i);var A=t.memoizedState;d!==T||N!==A||We.current||Ut?(typeof I=="function"&&(po(t,n,I,r),A=t.memoizedState),(w=Ut||au(t,n,w,r,N,A,p)||!1)?(E||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,p),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,p)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),o.props=r,o.state=A,o.context=p,r=w):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),r=!1)}return vo(e,t,n,r,l,i)}function vo(e,t,n,r,i,l){xu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ns(t,n,!1),Tt(e,t,l);r=t.stateNode,gp.current=t;var d=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Tn(t,e.child,null,l),t.child=Tn(t,null,d,l)):He(e,t,d,l),t.memoizedState=r.state,i&&Ns(t,n,!0),t.child}function bu(e){var t=e.stateNode;t.pendingContext?Ss(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ss(e,t.context,!1),Zl(e,t.containerInfo)}function ku(e,t,n,r,i){return Pn(),ql(i),t.flags|=256,He(e,t,n,r),t.child}var yo={dehydrated:null,treeContext:null,retryLane:0};function xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Su(e,t,n){var r=t.pendingProps,i=he.current,l=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(he,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ii(o,r,0,null),e=cn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=xo(n),t.memoizedState=yo,e):wo(t,o));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return vp(e,t,o,r,d,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=Gt(i,p),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=Gt(d,l):(l=cn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?xo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=yo,r}return l=e.child,e=l.sibling,r=Gt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wo(e,t){return t=Ii({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&ql(r),Tn(t,e.child,null,n),e=wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=mo(Error(u(422))),ki(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ii({mode:"visible",children:r.children},i,0,null),l=cn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,o),t.child.memoizedState=xo(o),t.memoizedState=yo,l);if((t.mode&1)===0)return ki(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(u(419)),r=mo(l,r,void 0),ki(e,t,o,r)}if(d=(o&e.childLanes)!==0,Qe||d){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Et(e,i),vt(r,e,i,-1))}return Oo(),r=mo(Error(u(421))),ki(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,tt=Dt(i.nextSibling),et=t,me=!0,ft=null,e!==null&&(it[lt++]=Nt,it[lt++]=jt,it[lt++]=en,Nt=e.id,jt=e.overflow,en=t),t=wo(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yl(e.return,t,n)}function bo(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Nu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,t,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bo(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bo(t,!0,n,null,l);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:bu(t),Pn();break;case 5:Fs(t);break;case 1:qe(t.type)&&li(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Su(e,t,n):(se(he,he.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Nu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,yu(e,t,n)}return Tt(e,t,n)}var ju,ko,Eu,Pu;ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ko=function(){},Eu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(wt.current);var l=null;switch(n){case"input":i=Yi(e,i),r=Yi(e,r),l=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),l=[];break;case"textarea":i=Zi(e,i),r=Zi(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}tl(n,r);var o;n=null;for(w in i)if(!r.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var d=i[w];for(o in d)d.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(h.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in r){var p=r[w];if(d=i?.[w],r.hasOwnProperty(w)&&p!==d&&(p!=null||d!=null))if(w==="style")if(d){for(o in d)!d.hasOwnProperty(o)||p&&p.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in p)p.hasOwnProperty(o)&&d[o]!==p[o]&&(n||(n={}),n[o]=p[o])}else n||(l||(l=[]),l.push(w,n)),n=p;else w==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(l=l||[]).push(w,p)):w==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(w,""+p):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(h.hasOwnProperty(w)?(p!=null&&w==="onScroll"&&ue("scroll",e),l||d===p||(l=[])):(l=l||[]).push(w,p))}n&&(l=l||[]).push("style",n);var w=l;(t.updateQueue=w)&&(t.flags|=4)}},Pu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xp(e,t,n){var r=t.pendingProps;switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return qe(t.type)&&ii(),Be(t),null;case 3:return r=t.stateNode,Mn(),ce(We),ce(Ae),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Ro(ft),ft=null))),ko(e,t),Be(t),null;case 5:eo(t);var i=rn(mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Eu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Be(t),null}if(e=rn(wt.current),ui(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[ur]=l,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<or.length;i++)ue(or[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":sa(r,l),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ue("invalid",r);break;case"textarea":da(r,l),ue("invalid",r)}tl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&ti(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&ti(r.textContent,d,e),i=["children",""+d]):h.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Mr(r),ca(r,l,!0);break;case"textarea":Mr(r),fa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ni)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ma(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[ur]=r,ju(e,t,!1,!1),t.stateNode=e;e:{switch(o=nl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<or.length;i++)ue(or[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":sa(e,r),i=Yi(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),ue("invalid",e);break;case"textarea":da(e,r),i=Zi(e,r),ue("invalid",e);break;default:i=r}tl(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var p=d[l];l==="style"?va(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ha(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Un(e,p):typeof p=="number"&&Un(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?p!=null&&l==="onScroll"&&ue("scroll",e):p!=null&&X(e,l,p,o))}switch(n){case"input":Mr(e),ca(e,r,!1);break;case"textarea":Mr(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Pu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=rn(mr.current),rn(wt.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Be(t),null;case 13:if(ce(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)_s(),Pn(),t.flags|=98560,l=!1;else if(l=ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[xt]=t}else Pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else ft!==null&&(Ro(ft),ft=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(he.current&1)!==0?je===0&&(je=3):Oo())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Mn(),ko(e,t),e===null&&ar(t.stateNode.containerInfo),Be(t),null;case 10:return Jl(t.type._context),Be(t),null;case 17:return qe(t.type)&&ii(),Be(t),null;case 19:if(ce(he),l=t.memoizedState,l===null)return Be(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)xr(l,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=hi(e),o!==null){for(t.flags|=128,xr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}l.tail!==null&&xe()>On&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304)}else{if(!r)if(e=hi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!me)return Be(t),null}else 2*xe()-l.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,xr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xe(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function wp(e,t){switch(Vl(t),t.tag){case 1:return qe(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),ce(We),ce(Ae),no(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return eo(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return Mn(),null;case 10:return Jl(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var Ci=!1,Ue=!1,bp=typeof WeakSet=="function"?WeakSet:Set,O=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function So(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Tu=!1;function kp(e,t){if(zl=$r,e=as(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,d=-1,p=-1,w=0,E=0,T=e,N=null;t:for(;;){for(var I;T!==n||i!==0&&T.nodeType!==3||(d=o+i),T!==l||r!==0&&T.nodeType!==3||(p=o+r),T.nodeType===3&&(o+=T.nodeValue.length),(I=T.firstChild)!==null;)N=T,T=I;for(;;){if(T===e)break t;if(N===n&&++w===i&&(d=o),N===l&&++E===r&&(p=o),(I=T.nextSibling)!==null)break;T=N,N=T.parentNode}T=I}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Il={focusedElem:e,selectionRange:n},$r=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var B=A.memoizedProps,we=A.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?B:mt(t.type,B),we);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(_){ve(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return A=Tu,Tu=!1,A}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&So(t,n,l)}i=i.next}while(i!==r)}}function Ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lu(e){var t=e.alternate;t!==null&&(e.alternate=null,Lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ur],delete t[Fl],delete t[ip],delete t[lp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}function jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),e=e.sibling}var Ie=null,ht=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Ru(e,t,n),n=n.sibling}function Ru(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ar,n)}catch{}switch(n.tag){case 5:Ue||zn(n,t);case 6:var r=Ie,i=ht;Ie=null,Vt(e,t,n),Ie=r,ht=i,Ie!==null&&(ht?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ht?(e=Ie,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Xn(e)):Al(Ie,n.stateNode));break;case 4:r=Ie,i=ht,Ie=n.stateNode.containerInfo,ht=!0,Vt(e,t,n),Ie=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&So(n,t,o),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Ue&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){ve(n,t,d)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Vt(e,t,n),Ue=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bp),t.forEach(function(r){var i=_p.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 5:Ie=d.stateNode,ht=!1;break e;case 3:Ie=d.stateNode.containerInfo,ht=!0;break e;case 4:Ie=d.stateNode.containerInfo,ht=!0;break e}d=d.return}if(Ie===null)throw Error(u(160));Ru(l,o,i),Ie=null,ht=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(w){ve(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling}function Iu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),kt(e),r&4){try{wr(3,e,e.return),Ni(3,e)}catch(B){ve(e,e.return,B)}try{wr(5,e,e.return)}catch(B){ve(e,e.return,B)}}break;case 1:gt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(gt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(B){ve(e,e.return,B)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&ua(i,l),nl(d,o);var w=nl(d,l);for(o=0;o<p.length;o+=2){var E=p[o],T=p[o+1];E==="style"?va(i,T):E==="dangerouslySetInnerHTML"?ha(i,T):E==="children"?Un(i,T):X(i,E,T,w)}switch(d){case"input":Ki(i,l);break;case"textarea":pa(i,l);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var I=l.value;I!=null?fn(i,!!l.multiple,I,!1):N!==!!l.multiple&&(l.defaultValue!=null?fn(i,!!l.multiple,l.defaultValue,!0):fn(i,!!l.multiple,l.multiple?[]:"",!1))}i[ur]=l}catch(B){ve(e,e.return,B)}}break;case 6:if(gt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(B){ve(e,e.return,B)}}break;case 3:if(gt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(B){ve(e,e.return,B)}break;case 4:gt(t,e),kt(e);break;case 13:gt(t,e),kt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(To=xe())),r&4&&zu(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(w=Ue)||E,gt(t,e),Ue=w):gt(t,e),kt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!E&&(e.mode&1)!==0)for(O=e,E=e.child;E!==null;){for(T=O=E;O!==null;){switch(N=O,I=N.child,N.tag){case 0:case 11:case 14:case 15:wr(4,N,N.return);break;case 1:zn(N,N.return);var A=N.stateNode;if(typeof A.componentWillUnmount=="function"){r=N,n=N.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(B){ve(r,n,B)}}break;case 5:zn(N,N.return);break;case 22:if(N.memoizedState!==null){Au(T);continue}}I!==null?(I.return=N,O=I):Au(T)}E=E.sibling}e:for(E=null,T=e;;){if(T.tag===5){if(E===null){E=T;try{i=T.stateNode,w?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=T.stateNode,p=T.memoizedProps.style,o=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=ga("display",o))}catch(B){ve(e,e.return,B)}}}else if(T.tag===6){if(E===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(B){ve(e,e.return,B)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;E===T&&(E=null),T=T.return}E===T&&(E=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:gt(t,e),kt(e),r&4&&zu(e);break;case 21:break;default:gt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_u(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var l=Mu(e);jo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,d=Mu(e);No(e,d,o);break;default:throw Error(u(161))}}catch(p){ve(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){O=e,Ou(e)}function Ou(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ci;if(!o){var d=i.alternate,p=d!==null&&d.memoizedState!==null||Ue;d=Ci;var w=Ue;if(Ci=o,(Ue=p)&&!w)for(O=i;O!==null;)o=O,p=o.child,o.tag===22&&o.memoizedState!==null?Fu(i):p!==null?(p.return=o,O=p):Fu(i);for(;l!==null;)O=l,Ou(l),l=l.sibling;O=i,Ci=d,Ue=w}Du(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,O=l):Du(e)}}function Du(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||Ni(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&As(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}As(t,o,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var E=w.memoizedState;if(E!==null){var T=E.dehydrated;T!==null&&Xn(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ue||t.flags&512&&Co(t)}catch(N){ve(t,t.return,N)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Au(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Fu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ni(4,t)}catch(p){ve(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(p){ve(t,i,p)}}var l=t.return;try{Co(t)}catch(p){ve(t,l,p)}break;case 5:var o=t.return;try{Co(t)}catch(p){ve(t,o,p)}}}catch(p){ve(t,t.return,p)}if(t===e){O=null;break}var d=t.sibling;if(d!==null){d.return=t.return,O=d;break}O=t.return}}var Cp=Math.ceil,ji=de.ReactCurrentDispatcher,Eo=de.ReactCurrentOwner,st=de.ReactCurrentBatchConfig,ee=0,_e=null,ke=null,Oe=0,nt=0,In=At(0),je=0,br=null,on=0,Ei=0,Po=0,kr=null,Ge=null,To=0,On=1/0,Lt=null,Pi=!1,Lo=null,$t=null,Ti=!1,Wt=null,Li=0,Sr=0,_o=null,_i=-1,Mi=0;function Ve(){return(ee&6)!==0?xe():_i!==-1?_i:_i=xe()}function qt(e){return(e.mode&1)===0?1:(ee&2)!==0&&Oe!==0?Oe&-Oe:ap.transition!==null?(Mi===0&&(Mi=Ma()),Mi):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Ua(e.type)),e)}function vt(e,t,n,r){if(50<Sr)throw Sr=0,_o=null,Error(u(185));Qn(e,n,r),((ee&2)===0||e!==_e)&&(e===_e&&((ee&2)===0&&(Ei|=n),je===4&&Qt(e,Oe)),Je(e,r),n===1&&ee===0&&(t.mode&1)===0&&(On=xe()+500,oi&&Bt()))}function Je(e,t){var n=e.callbackNode;ad(e,t);var r=Ur(e,e===_e?Oe:0);if(r===0)n!==null&&Ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ta(n),t===1)e.tag===0?op(Uu.bind(null,e)):js(Uu.bind(null,e)),np(function(){(ee&6)===0&&Bt()}),n=null;else{switch(Ra(r)){case 1:n=ul;break;case 4:n=La;break;case 16:n=Dr;break;case 536870912:n=_a;break;default:n=Dr}n=Ju(n,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bu(e,t){if(_i=-1,Mi=0,(ee&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ur(e,e===_e?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ri(e,r);else{t=r;var i=ee;ee|=2;var l=Vu();(_e!==e||Oe!==t)&&(Lt=null,On=xe()+500,sn(e,t));do try{Ep();break}catch(d){Hu(e,d)}while(!0);Gl(),ji.current=l,ee=i,ke!==null?t=0:(_e=null,Oe=0,t=je)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(r=i,t=Mo(e,i))),t===1)throw n=br,sn(e,0),Qt(e,r),Je(e,xe()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Np(i)&&(t=Ri(e,r),t===2&&(l=cl(e),l!==0&&(r=l,t=Mo(e,l))),t===1))throw n=br,sn(e,0),Qt(e,r),Je(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:un(e,Ge,Lt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=To+500-xe(),10<t)){if(Ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dl(un.bind(null,e,Ge,Lt),t);break}un(e,Ge,Lt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cp(r/1960))-r,10<r){e.timeoutHandle=Dl(un.bind(null,e,Ge,Lt),r);break}un(e,Ge,Lt);break;case 5:un(e,Ge,Lt);break;default:throw Error(u(329))}}}return Je(e,xe()),e.callbackNode===n?Bu.bind(null,e):null}function Mo(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Ro(t)),e}function Ro(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!pt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Po,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if((ee&6)!==0)throw Error(u(327));Dn();var t=Ur(e,0);if((t&1)===0)return Je(e,xe()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Mo(e,r))}if(n===1)throw n=br,sn(e,0),Qt(e,t),Je(e,xe()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ge,Lt),Je(e,xe()),null}function zo(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(On=xe()+500,oi&&Bt())}}function an(e){Wt!==null&&Wt.tag===0&&(ee&6)===0&&Dn();var t=ee;ee|=1;var n=st.transition,r=oe;try{if(st.transition=null,oe=1,e)return e()}finally{oe=r,st.transition=n,ee=t,(ee&6)===0&&Bt()}}function Io(){nt=In.current,ce(In)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tp(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:Mn(),ce(We),ce(Ae),no();break;case 5:eo(r);break;case 4:Mn();break;case 13:ce(he);break;case 19:ce(he);break;case 10:Jl(r.type._context);break;case 22:case 23:Io()}n=n.return}if(_e=e,ke=e=Gt(e.current,null),Oe=nt=t,je=0,br=null,Po=Ei=on=0,Ge=kr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}nn=null}return e}function Hu(e,t){do{var n=ke;try{if(Gl(),gi.current=wi,vi){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vi=!1}if(ln=0,Le=Ne=ge=null,hr=!1,gr=0,Eo.current=null,n===null||n.return===null){je=1,br=t,ke=null;break}e:{var l=e,o=n.return,d=n,p=t;if(t=Oe,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var w=p,E=d,T=E.tag;if((E.mode&1)===0&&(T===0||T===11||T===15)){var N=E.alternate;N?(E.updateQueue=N.updateQueue,E.memoizedState=N.memoizedState,E.lanes=N.lanes):(E.updateQueue=null,E.memoizedState=null)}var I=fu(o);if(I!==null){I.flags&=-257,mu(I,o,d,l,t),I.mode&1&&pu(l,w,t),t=I,p=w;var A=t.updateQueue;if(A===null){var B=new Set;B.add(p),t.updateQueue=B}else A.add(p);break e}else{if((t&1)===0){pu(l,w,t),Oo();break e}p=Error(u(426))}}else if(me&&d.mode&1){var we=fu(o);if(we!==null){(we.flags&65536)===0&&(we.flags|=256),mu(we,o,d,l,t),ql(Rn(p,d));break e}}l=p=Rn(p,d),je!==4&&(je=2),kr===null?kr=[l]:kr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var y=cu(l,p,t);Ds(l,y);break e;case 1:d=p;var m=l.type,x=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&($t===null||!$t.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var _=du(l,d,t);Ds(l,_);break e}}l=l.return}while(l!==null)}Wu(n)}catch(H){t=H,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Vu(){var e=ji.current;return ji.current=wi,e===null?wi:e}function Oo(){(je===0||je===3||je===2)&&(je=4),_e===null||(on&268435455)===0&&(Ei&268435455)===0||Qt(_e,Oe)}function Ri(e,t){var n=ee;ee|=2;var r=Vu();(_e!==e||Oe!==t)&&(Lt=null,sn(e,t));do try{jp();break}catch(i){Hu(e,i)}while(!0);if(Gl(),ee=n,ji.current=r,ke!==null)throw Error(u(261));return _e=null,Oe=0,je}function jp(){for(;ke!==null;)$u(ke)}function Ep(){for(;ke!==null&&!Xc();)$u(ke)}function $u(e){var t=Gu(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Wu(e):ke=t,Eo.current=null}function Wu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xp(n,t,nt),n!==null){ke=n;return}}else{if(n=wp(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);je===0&&(je=5)}function un(e,t,n){var r=oe,i=st.transition;try{st.transition=null,oe=1,Pp(e,t,n,r)}finally{st.transition=i,oe=r}return null}function Pp(e,t,n,r){do Dn();while(Wt!==null);if((ee&6)!==0)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(sd(e,l),e===_e&&(ke=_e=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ti||(Ti=!0,Ju(Dr,function(){return Dn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=st.transition,st.transition=null;var o=oe;oe=1;var d=ee;ee|=4,Eo.current=null,kp(e,n),Iu(n,e),Gd(Il),$r=!!zl,Il=zl=null,e.current=n,Sp(n),Zc(),ee=d,oe=o,st.transition=l}else e.current=n;if(Ti&&(Ti=!1,Wt=e,Li=i),l=e.pendingLanes,l===0&&($t=null),nd(n.stateNode),Je(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pi)throw Pi=!1,e=Lo,Lo=null,e;return(Li&1)!==0&&e.tag!==0&&Dn(),l=e.pendingLanes,(l&1)!==0?e===_o?Sr++:(Sr=0,_o=e):Sr=0,Bt(),null}function Dn(){if(Wt!==null){var e=Ra(Li),t=st.transition,n=oe;try{if(st.transition=null,oe=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Li=0,(ee&6)!==0)throw Error(u(331));var i=ee;for(ee|=4,O=e.current;O!==null;){var l=O,o=l.child;if((O.flags&16)!==0){var d=l.deletions;if(d!==null){for(var p=0;p<d.length;p++){var w=d[p];for(O=w;O!==null;){var E=O;switch(E.tag){case 0:case 11:case 15:wr(8,E,l)}var T=E.child;if(T!==null)T.return=E,O=T;else for(;O!==null;){E=O;var N=E.sibling,I=E.return;if(Lu(E),E===w){O=null;break}if(N!==null){N.return=I,O=N;break}O=I}}}var A=l.alternate;if(A!==null){var B=A.child;if(B!==null){A.child=null;do{var we=B.sibling;B.sibling=null,B=we}while(B!==null)}}O=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,O=o;else e:for(;O!==null;){if(l=O,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:wr(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,O=y;break e}O=l.return}}var m=e.current;for(O=m;O!==null;){o=O;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,O=x;else e:for(o=m;O!==null;){if(d=O,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ni(9,d)}}catch(H){ve(d,d.return,H)}if(d===o){O=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,O=_;break e}O=d.return}}if(ee=i,Bt(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ar,e)}catch{}r=!0}return r}finally{oe=n,st.transition=t}}return!1}function qu(e,t,n){t=Rn(n,t),t=cu(e,t,1),e=Ht(e,t,1),t=Ve(),e!==null&&(Qn(e,1,t),Je(e,t))}function ve(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Rn(n,e),e=du(t,e,1),t=Ht(t,e,1),e=Ve(),t!==null&&(Qn(t,1,e),Je(t,e));break}}t=t.return}}function Tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Oe&n)===n&&(je===4||je===3&&(Oe&130023424)===Oe&&500>xe()-To?sn(e,0):Po|=n),Je(e,t)}function Qu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var n=Ve();e=Et(e,t),e!==null&&(Qn(e,t,n),Je(e,n))}function Lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qu(e,n)}function _p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Qu(e,n)}var Gu;Gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,yp(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,me&&(t.flags&1048576)!==0&&Es(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var i=Nn(t,Ae.current);_n(t,n),i=lo(null,t,r,e,i,n);var l=oo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,li(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xl(t),i.updater=bi,t.stateNode=i,i._reactInternals=t,fo(t,r,e,n),t=vo(null,t,r,!0,l,n)):(t.tag=0,me&&l&&Hl(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rp(r),e=mt(r,e),i){case 0:t=go(null,t,r,e,n);break e;case 1:t=wu(null,t,r,e,n);break e;case 11:t=hu(null,t,r,e,n);break e;case 14:t=gu(null,t,r,mt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),go(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),wu(e,t,r,i,n);case 3:e:{if(bu(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Os(e,t),mi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Rn(Error(u(423)),t),t=ku(e,t,r,n,i);break e}else if(r!==i){i=Rn(Error(u(424)),t),t=ku(e,t,r,n,i);break e}else for(tt=Dt(t.stateNode.containerInfo.firstChild),et=t,me=!0,ft=null,n=zs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===i){t=Tt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return Fs(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ol(r,i)?o=null:l!==null&&Ol(r,l)&&(t.flags|=32),xu(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Su(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),hu(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,se(di,r._currentValue),r._currentValue=o,l!==null)if(pt(l.value,o)){if(l.children===i.children&&!We.current){t=Tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){o=l.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=Pt(-1,n&-n),p.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var E=w.pending;E===null?p.next=p:(p.next=E.next,E.next=p),w.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),Yl(l.return,n,t),d.lanes|=n;break}p=p.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(u(341));o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Yl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=ot(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),gu(e,t,r,i,n);case 15:return vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Si(e,t),t.tag=1,qe(r)?(e=!0,li(t)):e=!1,_n(t,n),su(t,r,i),fo(t,r,i,n),vo(null,t,r,!0,e,n);case 19:return Nu(e,t,n);case 22:return yu(e,t,n)}throw Error(u(156,t.tag))};function Ju(e,t){return Pa(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Mp(e,t,n,r)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rp(e){if(typeof e=="function")return Do(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$e)return 11;if(e===Te)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Do(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pe:return cn(n.children,i,l,t);case De:o=8,i|=8;break;case rt:return e=ut(12,n,t,i|2),e.elementType=rt,e.lanes=l,e;case ze:return e=ut(13,n,t,i),e.elementType=ze,e.lanes=l,e;case ye:return e=ut(19,n,t,i),e.elementType=ye,e.lanes=l,e;case pe:return Ii(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ke:o=10;break e;case ct:o=9;break e;case $e:o=11;break e;case Te:o=14;break e;case be:o=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function cn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ii(e,t,n,r){return e=ut(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ao(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Fo(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bo(e,t,n,r,i,l,o,d,p){return e=new zp(e,t,n,d,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(l),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yu(e){if(!e)return Ft;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(qe(n))return Cs(e,n,t)}return t}function Ku(e,t,n,r,i,l,o,d,p){return e=Bo(n,r,!0,e,i,l,o,d,p),e.context=Yu(null),n=e.current,r=Ve(),i=qt(n),l=Pt(r,i),l.callback=t??null,Ht(n,l,i),e.current.lanes=i,Qn(e,i,r),Je(e,r),e}function Oi(e,t,n,r){var i=t.current,l=Ve(),o=qt(i);return n=Yu(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,o),e!==null&&(vt(e,i,o,l),fi(e,i,o)),o}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uo(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}function Op(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ho(e){this._internalRoot=e}Ai.prototype.render=Ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Oi(e,t,null,null)},Ai.prototype.unmount=Ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Oi(null,e,null,null)}),t[St]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Fa(e)}};function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function Dp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var w=Di(o);l.call(w)}}var o=Ku(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=o,e[St]=o.current,ar(e.nodeType===8?e.parentNode:e),an(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var w=Di(p);d.call(w)}}var p=Bo(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=p,e[St]=p.current,ar(e.nodeType===8?e.parentNode:e),an(function(){Oi(t,p,n,r)}),p}function Bi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var d=i;i=function(){var p=Di(o);d.call(p)}}Oi(t,o,e,i)}else o=Dp(n,t,e,i,r);return Di(o)}za=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(pl(t,n|1),Je(t,xe()),(ee&6)===0&&(On=xe()+500,Bt()))}break;case 13:an(function(){var r=Et(e,1);if(r!==null){var i=Ve();vt(r,e,1,i)}}),Uo(e,1)}},fl=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ve();vt(t,e,134217728,n)}Uo(e,134217728)}},Ia=function(e){if(e.tag===13){var t=qt(e),n=Et(e,t);if(n!==null){var r=Ve();vt(n,e,t,r)}Uo(e,t)}},Oa=function(){return oe},Da=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},ll=function(e,t,n){switch(t){case"input":if(Ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ri(r);if(!i)throw Error(u(90));aa(r),Ki(r,i)}}}break;case"textarea":pa(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}},ba=zo,ka=an;var Ap={usingClientEntryPoint:!1,Events:[cr,Sn,ri,xa,wa,zo]},Cr={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ja(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||Op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Ar=Ui.inject(Fp),yt=Ui}catch{}}return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap,Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(t))throw Error(u(200));return Ip(e,t,null,n)},Ye.createRoot=function(e,t){if(!Vo(e))throw Error(u(299));var n=!1,r="",i=Zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bo(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,ar(e.nodeType===8?e.parentNode:e),new Ho(t)},Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ja(t),e=e===null?null:e.stateNode,e},Ye.flushSync=function(e){return an(e)},Ye.hydrate=function(e,t,n){if(!Fi(t))throw Error(u(200));return Bi(null,e,t,!0,n)},Ye.hydrateRoot=function(e,t,n){if(!Vo(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ku(t,null,e,1,n??null,i,!1,l,o),e[St]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ai(t)},Ye.render=function(e,t,n){if(!Fi(t))throw Error(u(200));return Bi(null,e,t,!1,n)},Ye.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(u(40));return e._reactRootContainer?(an(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1},Ye.unstable_batchedUpdates=zo,Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fi(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Bi(e,t,n,!1,r)},Ye.version="18.3.1-next-f1338f8080-20240426",Ye}var sc;function Sc(){if(sc)return qo.exports;sc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),qo.exports=Gp(),qo.exports}var uc;function Jp(){if(uc)return Hi;uc=1;var a=Sc();return Hi.createRoot=a.createRoot,Hi.hydrateRoot=a.hydrateRoot,Hi}var Yp=Jp();const Kp=kc(Yp);Sc();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(a[f]=u[f])}return a},Er.apply(this,arguments)}var Yt;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Yt||(Yt={}));const cc="popstate";function Xp(a){a===void 0&&(a={});function c(f,h){let{pathname:g,search:b,hash:P}=f.location;return ea("",{pathname:g,search:b,hash:P},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function u(f,h){return typeof h=="string"?h:Nc(h)}return ef(c,u,null,a)}function Ee(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Cc(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Zp(){return Math.random().toString(36).substr(2,8)}function dc(a,c){return{usr:a.state,key:a.key,idx:c}}function ea(a,c,u,f){return u===void 0&&(u=null),Er({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof c=="string"?Fn(c):c,{state:u,key:c&&c.key||f||Zp()})}function Nc(a){let{pathname:c="/",search:u="",hash:f=""}=a;return u&&u!=="?"&&(c+=u.charAt(0)==="?"?u:"?"+u),f&&f!=="#"&&(c+=f.charAt(0)==="#"?f:"#"+f),c}function Fn(a){let c={};if(a){let u=a.indexOf("#");u>=0&&(c.hash=a.substr(u),a=a.substr(0,u));let f=a.indexOf("?");f>=0&&(c.search=a.substr(f),a=a.substr(0,f)),a&&(c.pathname=a)}return c}function ef(a,c,u,f){f===void 0&&(f={});let{window:h=document.defaultView,v5Compat:g=!1}=f,b=h.history,P=Yt.Pop,k=null,S=L();S==null&&(S=0,b.replaceState(Er({},b.state,{idx:S}),""));function L(){return(b.state||{idx:null}).idx}function C(){P=Yt.Pop;let R=L(),ie=R==null?null:R-S;S=R,k&&k({action:P,location:W.location,delta:ie})}function U(R,ie){P=Yt.Push;let F=ea(W.location,R,ie);S=L()+1;let X=dc(F,S),de=W.createHref(F);try{b.pushState(X,"",de)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;h.location.assign(de)}g&&k&&k({action:P,location:W.location,delta:1})}function G(R,ie){P=Yt.Replace;let F=ea(W.location,R,ie);S=L();let X=dc(F,S),de=W.createHref(F);b.replaceState(X,"",de),g&&k&&k({action:P,location:W.location,delta:0})}function Z(R){let ie=h.location.origin!=="null"?h.location.origin:h.location.href,F=typeof R=="string"?R:Nc(R);return F=F.replace(/ $/,"%20"),Ee(ie,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,ie)}let W={get action(){return P},get location(){return a(h,b)},listen(R){if(k)throw new Error("A history only accepts one active listener");return h.addEventListener(cc,C),k=R,()=>{h.removeEventListener(cc,C),k=null}},createHref(R){return c(h,R)},createURL:Z,encodeLocation(R){let ie=Z(R);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:U,replace:G,go(R){return b.go(R)}};return W}var pc;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(pc||(pc={}));function tf(a,c,u){return u===void 0&&(u="/"),nf(a,c,u)}function nf(a,c,u,f){let h=typeof c=="string"?Fn(c):c,g=Pc(h.pathname||"/",u);if(g==null)return null;let b=jc(a);rf(b);let P=null;for(let k=0;P==null&&k<b.length;++k){let S=gf(g);P=ff(b[k],S)}return P}function jc(a,c,u,f){c===void 0&&(c=[]),u===void 0&&(u=[]),f===void 0&&(f="");let h=(g,b,P)=>{let k={relativePath:P===void 0?g.path||"":P,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};k.relativePath.startsWith("/")&&(Ee(k.relativePath.startsWith(f),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+f+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(f.length));let S=dn([f,k.relativePath]),L=u.concat(k);g.children&&g.children.length>0&&(Ee(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+S+'".')),jc(g.children,c,L,S)),!(g.path==null&&!g.index)&&c.push({path:S,score:df(S,g.index),routesMeta:L})};return a.forEach((g,b)=>{var P;if(g.path===""||!((P=g.path)!=null&&P.includes("?")))h(g,b);else for(let k of Ec(g.path))h(g,b,k)}),c}function Ec(a){let c=a.split("/");if(c.length===0)return[];let[u,...f]=c,h=u.endsWith("?"),g=u.replace(/\?$/,"");if(f.length===0)return h?[g,""]:[g];let b=Ec(f.join("/")),P=[];return P.push(...b.map(k=>k===""?g:[g,k].join("/"))),h&&P.push(...b),P.map(k=>a.startsWith("/")&&k===""?"/":k)}function rf(a){a.sort((c,u)=>c.score!==u.score?u.score-c.score:pf(c.routesMeta.map(f=>f.childrenIndex),u.routesMeta.map(f=>f.childrenIndex)))}const lf=/^:[\w-]+$/,of=3,af=2,sf=1,uf=10,cf=-2,fc=a=>a==="*";function df(a,c){let u=a.split("/"),f=u.length;return u.some(fc)&&(f+=cf),c&&(f+=af),u.filter(h=>!fc(h)).reduce((h,g)=>h+(lf.test(g)?of:g===""?sf:uf),f)}function pf(a,c){return a.length===c.length&&a.slice(0,-1).every((f,h)=>f===c[h])?a[a.length-1]-c[c.length-1]:0}function ff(a,c,u){let{routesMeta:f}=a,h={},g="/",b=[];for(let P=0;P<f.length;++P){let k=f[P],S=P===f.length-1,L=g==="/"?c:c.slice(g.length)||"/",C=mf({path:k.relativePath,caseSensitive:k.caseSensitive,end:S},L),U=k.route;if(!C)return null;Object.assign(h,C.params),b.push({params:h,pathname:dn([g,C.pathname]),pathnameBase:kf(dn([g,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(g=dn([g,C.pathnameBase]))}return b}function mf(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,f]=hf(a.path,a.caseSensitive,a.end),h=c.match(u);if(!h)return null;let g=h[0],b=g.replace(/(.)\/+$/,"$1"),P=h.slice(1);return{params:f.reduce((S,L,C)=>{let{paramName:U,isOptional:G}=L;if(U==="*"){let W=P[C]||"";b=g.slice(0,g.length-W.length).replace(/(.)\/+$/,"$1")}const Z=P[C];return G&&!Z?S[U]=void 0:S[U]=(Z||"").replace(/%2F/g,"/"),S},{}),pathname:g,pathnameBase:b,pattern:a}}function hf(a,c,u){c===void 0&&(c=!1),u===void 0&&(u=!0),Cc(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let f=[],h="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,P,k)=>(f.push({paramName:P,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(f.push({paramName:"*"}),h+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?h+="\\/*$":a!==""&&a!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,c?void 0:"i"),f]}function gf(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Cc(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),a}}function Pc(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,f=a.charAt(u);return f&&f!=="/"?null:a.slice(u)||"/"}function vf(a,c){c===void 0&&(c="/");let{pathname:u,search:f="",hash:h=""}=typeof a=="string"?Fn(a):a;return{pathname:u?u.startsWith("/")?u:yf(u,c):c,search:Sf(f),hash:Cf(h)}}function yf(a,c){let u=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(h=>{h===".."?u.length>1&&u.pop():h!=="."&&u.push(h)}),u.length>1?u.join("/"):"/"}function Jo(a,c,u,f){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(f)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xf(a){return a.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function wf(a,c){let u=xf(a);return c?u.map((f,h)=>h===u.length-1?f.pathname:f.pathnameBase):u.map(f=>f.pathnameBase)}function bf(a,c,u,f){f===void 0&&(f=!1);let h;typeof a=="string"?h=Fn(a):(h=Er({},a),Ee(!h.pathname||!h.pathname.includes("?"),Jo("?","pathname","search",h)),Ee(!h.pathname||!h.pathname.includes("#"),Jo("#","pathname","hash",h)),Ee(!h.search||!h.search.includes("#"),Jo("#","search","hash",h)));let g=a===""||h.pathname==="",b=g?"/":h.pathname,P;if(b==null)P=u;else{let C=c.length-1;if(!f&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),C-=1;h.pathname=U.join("/")}P=C>=0?c[C]:"/"}let k=vf(h,P),S=b&&b!=="/"&&b.endsWith("/"),L=(g||b===".")&&u.endsWith("/");return!k.pathname.endsWith("/")&&(S||L)&&(k.pathname+="/"),k}const dn=a=>a.join("/").replace(/\/\/+/g,"/"),kf=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Sf=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Cf=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Nf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Tc=["post","put","patch","delete"];new Set(Tc);const jf=["get",...Tc];new Set(jf);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(a[f]=u[f])}return a},Pr.apply(this,arguments)}const ia=M.createContext(null),Ef=M.createContext(null),Qi=M.createContext(null),Gi=M.createContext(null),pn=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Lc=M.createContext(null);function Ji(){return M.useContext(Gi)!=null}function _c(){return Ji()||Ee(!1),M.useContext(Gi).location}function Mc(a){M.useContext(Qi).static||M.useLayoutEffect(a)}function _r(){let{isDataRoute:a}=M.useContext(pn);return a?Bf():Pf()}function Pf(){Ji()||Ee(!1);let a=M.useContext(ia),{basename:c,future:u,navigator:f}=M.useContext(Qi),{matches:h}=M.useContext(pn),{pathname:g}=_c(),b=JSON.stringify(wf(h,u.v7_relativeSplatPath)),P=M.useRef(!1);return Mc(()=>{P.current=!0}),M.useCallback(function(S,L){if(L===void 0&&(L={}),!P.current)return;if(typeof S=="number"){f.go(S);return}let C=bf(S,JSON.parse(b),g,L.relative==="path");a==null&&c!=="/"&&(C.pathname=C.pathname==="/"?c:dn([c,C.pathname])),(L.replace?f.replace:f.push)(C,L.state,L)},[c,f,b,g,a])}function Rc(){let{matches:a}=M.useContext(pn),c=a[a.length-1];return c?c.params:{}}function Tf(a,c){return Lf(a,c)}function Lf(a,c,u,f){Ji()||Ee(!1);let{navigator:h}=M.useContext(Qi),{matches:g}=M.useContext(pn),b=g[g.length-1],P=b?b.params:{};b&&b.pathname;let k=b?b.pathnameBase:"/";b&&b.route;let S=_c(),L;if(c){var C;let R=typeof c=="string"?Fn(c):c;k==="/"||(C=R.pathname)!=null&&C.startsWith(k)||Ee(!1),L=R}else L=S;let U=L.pathname||"/",G=U;if(k!=="/"){let R=k.replace(/^\//,"").split("/");G="/"+U.replace(/^\//,"").split("/").slice(R.length).join("/")}let Z=tf(a,{pathname:G}),W=If(Z&&Z.map(R=>Object.assign({},R,{params:Object.assign({},P,R.params),pathname:dn([k,h.encodeLocation?h.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?k:dn([k,h.encodeLocation?h.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),g,u,f);return c&&W?M.createElement(Gi.Provider,{value:{location:Pr({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:Yt.Pop}},W):W}function _f(){let a=Ff(),c=Nf(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},c),u?M.createElement("pre",{style:h},u):null,null)}const Mf=M.createElement(_f,null);class Rf extends M.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,u){return u.location!==c.location||u.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:u.error,location:u.location,revalidation:c.revalidation||u.revalidation}}componentDidCatch(c,u){console.error("React Router caught the following error during render",c,u)}render(){return this.state.error!==void 0?M.createElement(pn.Provider,{value:this.props.routeContext},M.createElement(Lc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zf(a){let{routeContext:c,match:u,children:f}=a,h=M.useContext(ia);return h&&h.static&&h.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=u.route.id),M.createElement(pn.Provider,{value:c},f)}function If(a,c,u,f){var h;if(c===void 0&&(c=[]),u===void 0&&(u=null),f===void 0&&(f=null),a==null){var g;if(!u)return null;if(u.errors)a=u.matches;else if((g=f)!=null&&g.v7_partialHydration&&c.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let b=a,P=(h=u)==null?void 0:h.errors;if(P!=null){let L=b.findIndex(C=>C.route.id&&P?.[C.route.id]!==void 0);L>=0||Ee(!1),b=b.slice(0,Math.min(b.length,L+1))}let k=!1,S=-1;if(u&&f&&f.v7_partialHydration)for(let L=0;L<b.length;L++){let C=b[L];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(S=L),C.route.id){let{loaderData:U,errors:G}=u,Z=C.route.loader&&U[C.route.id]===void 0&&(!G||G[C.route.id]===void 0);if(C.route.lazy||Z){k=!0,S>=0?b=b.slice(0,S+1):b=[b[0]];break}}}return b.reduceRight((L,C,U)=>{let G,Z=!1,W=null,R=null;u&&(G=P&&C.route.id?P[C.route.id]:void 0,W=C.route.errorElement||Mf,k&&(S<0&&U===0?(Uf("route-fallback"),Z=!0,R=null):S===U&&(Z=!0,R=C.route.hydrateFallbackElement||null)));let ie=c.concat(b.slice(0,U+1)),F=()=>{let X;return G?X=W:Z?X=R:C.route.Component?X=M.createElement(C.route.Component,null):C.route.element?X=C.route.element:X=L,M.createElement(zf,{match:C,routeContext:{outlet:L,matches:ie,isDataRoute:u!=null},children:X})};return u&&(C.route.ErrorBoundary||C.route.errorElement||U===0)?M.createElement(Rf,{location:u.location,revalidation:u.revalidation,component:W,error:G,children:F(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):F()},null)}var zc=function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a}(zc||{}),Ic=function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a}(Ic||{});function Of(a){let c=M.useContext(ia);return c||Ee(!1),c}function Df(a){let c=M.useContext(Ef);return c||Ee(!1),c}function Af(a){let c=M.useContext(pn);return c||Ee(!1),c}function Oc(a){let c=Af(),u=c.matches[c.matches.length-1];return u.route.id||Ee(!1),u.route.id}function Ff(){var a;let c=M.useContext(Lc),u=Df(),f=Oc();return c!==void 0?c:(a=u.errors)==null?void 0:a[f]}function Bf(){let{router:a}=Of(zc.UseNavigateStable),c=Oc(Ic.UseNavigateStable),u=M.useRef(!1);return Mc(()=>{u.current=!0}),M.useCallback(function(h,g){g===void 0&&(g={}),u.current&&(typeof h=="number"?a.navigate(h):a.navigate(h,Pr({fromRouteId:c},g)))},[a,c])}const mc={};function Uf(a,c,u){mc[a]||(mc[a]=!0)}function Hf(a,c){a?.v7_startTransition,a?.v7_relativeSplatPath}function An(a){Ee(!1)}function Vf(a){let{basename:c="/",children:u=null,location:f,navigationType:h=Yt.Pop,navigator:g,static:b=!1,future:P}=a;Ji()&&Ee(!1);let k=c.replace(/^\/*/,"/"),S=M.useMemo(()=>({basename:k,navigator:g,static:b,future:Pr({v7_relativeSplatPath:!1},P)}),[k,P,g,b]);typeof f=="string"&&(f=Fn(f));let{pathname:L="/",search:C="",hash:U="",state:G=null,key:Z="default"}=f,W=M.useMemo(()=>{let R=Pc(L,k);return R==null?null:{location:{pathname:R,search:C,hash:U,state:G,key:Z},navigationType:h}},[k,L,C,U,G,Z,h]);return W==null?null:M.createElement(Qi.Provider,{value:S},M.createElement(Gi.Provider,{children:u,value:W}))}function $f(a){let{children:c,location:u}=a;return Tf(ta(c),u)}new Promise(()=>{});function ta(a,c){c===void 0&&(c=[]);let u=[];return M.Children.forEach(a,(f,h)=>{if(!M.isValidElement(f))return;let g=[...c,h];if(f.type===M.Fragment){u.push.apply(u,ta(f.props.children,g));return}f.type!==An&&Ee(!1),!f.props.index||!f.props.children||Ee(!1);let b={id:f.props.id||g.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(b.children=ta(f.props.children,g)),u.push(b)}),u}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Wf="6";try{window.__reactRouterVersion=Wf}catch{}const qf="startTransition",hc=Wp[qf];function Qf(a){let{basename:c,children:u,future:f,window:h}=a,g=M.useRef();g.current==null&&(g.current=Xp({window:h,v5Compat:!0}));let b=g.current,[P,k]=M.useState({action:b.action,location:b.location}),{v7_startTransition:S}=f||{},L=M.useCallback(C=>{S&&hc?hc(()=>k(C)):k(C)},[k,S]);return M.useLayoutEffect(()=>b.listen(L),[b,L]),M.useEffect(()=>Hf(f),[f]),M.createElement(Vf,{basename:c,children:u,location:P.location,navigationType:P.action,navigator:b,future:f})}var gc;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(gc||(gc={}));var vc;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(vc||(vc={}));/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Re=(a,c)=>{const u=M.forwardRef(({color:f="currentColor",size:h=24,strokeWidth:g=2,absoluteStrokeWidth:b,className:P="",children:k,...S},L)=>M.createElement("svg",{ref:L,...Gf,width:h,height:h,stroke:f,strokeWidth:b?Number(g)*24/Number(h):g,className:["lucide",`lucide-${Jf(a)}`,P].join(" "),...S},[...c.map(([C,U])=>M.createElement(C,U)),...Array.isArray(k)?k:[k]]));return u.displayName=`${a}`,u};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Re("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=Re("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=Re("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=Re("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=Re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=Re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=Re("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=Re("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=Re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Re("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Re("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=Re("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=Re("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Re("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=Re("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=Re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=Re("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),la=[{id:"html",name:"HTML",icon:"📝",description:"Master the foundation of web development with HTML structure and semantics",color:"orange",gradient:"from-orange-400 to-red-500",totalLevels:10,levels:[{id:1,title:"Basic Structure & Tags",description:"Learn HTML document structure, basic tags, and how to create your first webpage",difficulty:"beginner",topics:["HTML Document Structure","Head and Body Tags","Headings","Paragraphs","Basic Formatting"],estimatedTime:"30 minutes",codeExample:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first webpage!</p>
</body>
</html>`},{id:2,title:"Forms & Input Elements",description:"Create interactive forms with various input types and validation",difficulty:"beginner",topics:["Form Elements","Input Types","Labels","Buttons","Form Validation"],estimatedTime:"45 minutes",prerequisites:[1]},{id:3,title:"Semantic HTML5",description:"Use semantic elements to create meaningful and accessible web structures",difficulty:"intermediate",topics:["Semantic Elements","Article","Section","Header","Footer","Nav"],estimatedTime:"40 minutes",prerequisites:[1,2]},{id:4,title:"Multimedia & Embedding",description:"Embed images, videos, audio, and external content",difficulty:"intermediate",topics:["Images","Video","Audio","Iframes","Canvas","SVG"],estimatedTime:"50 minutes",prerequisites:[3]},{id:5,title:"Tables & Data",description:"Create and style data tables with proper structure",difficulty:"intermediate",topics:["Table Structure","Headers","Rows","Columns","Styling Tables"],estimatedTime:"35 minutes",prerequisites:[3]},{id:6,title:"Advanced Forms",description:"Build complex forms with custom validation and accessibility",difficulty:"intermediate",topics:["Custom Validation","Fieldsets","Progress","Datalist","Form Accessibility"],estimatedTime:"60 minutes",prerequisites:[2,5]},{id:7,title:"Accessibility & ARIA",description:"Make your websites accessible to all users with ARIA and best practices",difficulty:"advanced",topics:["ARIA Labels","Screen Readers","Keyboard Navigation","Semantic Markup"],estimatedTime:"55 minutes",prerequisites:[3,6]},{id:8,title:"Web Components",description:"Create reusable custom elements with Web Components",difficulty:"advanced",topics:["Custom Elements","Shadow DOM","Templates","Slots"],estimatedTime:"70 minutes",prerequisites:[7]},{id:9,title:"Progressive Enhancement",description:"Build websites that work everywhere with progressive enhancement",difficulty:"advanced",topics:["Feature Detection","Graceful Degradation","Performance","Compatibility"],estimatedTime:"65 minutes",prerequisites:[8]},{id:10,title:"Modern HTML APIs",description:"Explore cutting-edge HTML APIs and browser features",difficulty:"advanced",topics:["Web Storage","Geolocation","File API","Drag & Drop","Service Workers"],estimatedTime:"80 minutes",prerequisites:[9]}]},{id:"css",name:"CSS",icon:"🎨",description:"Style beautiful and responsive websites with modern CSS techniques",color:"blue",gradient:"from-blue-400 to-purple-500",totalLevels:10,levels:[{id:1,title:"CSS Basics & Selectors",description:"Learn CSS syntax, selectors, and how to style HTML elements",difficulty:"beginner",topics:["CSS Syntax","Selectors","Properties","Values","Colors"],estimatedTime:"40 minutes"},{id:2,title:"Box Model & Layout",description:"Understand the CSS box model and basic layout principles",difficulty:"beginner",topics:["Box Model","Margin","Padding","Border","Width","Height"],estimatedTime:"45 minutes",prerequisites:[1]},{id:3,title:"Flexbox Layout",description:"Master flexible box layout for modern web design",difficulty:"intermediate",topics:["Flex Container","Flex Items","Alignment","Direction","Wrap"],estimatedTime:"60 minutes",prerequisites:[2]},{id:4,title:"CSS Grid",description:"Create complex layouts with CSS Grid system",difficulty:"intermediate",topics:["Grid Container","Grid Items","Tracks","Areas","Alignment"],estimatedTime:"75 minutes",prerequisites:[3]},{id:5,title:"Responsive Design",description:"Build websites that work on all devices and screen sizes",difficulty:"intermediate",topics:["Media Queries","Viewport","Breakpoints","Mobile-First"],estimatedTime:"55 minutes",prerequisites:[3,4]},{id:6,title:"Animations & Transitions",description:"Add life to your designs with CSS animations and transitions",difficulty:"intermediate",topics:["Transitions","Animations","Keyframes","Transform","Timing Functions"],estimatedTime:"65 minutes",prerequisites:[3]},{id:7,title:"Advanced Selectors & Pseudo-classes",description:"Master complex selectors and pseudo-class techniques",difficulty:"advanced",topics:["Advanced Selectors","Pseudo-classes","Pseudo-elements","Attribute Selectors"],estimatedTime:"50 minutes",prerequisites:[1,5]},{id:8,title:"CSS Variables & Custom Properties",description:"Use CSS custom properties to create maintainable stylesheets",difficulty:"advanced",topics:["CSS Variables","Custom Properties","Theming","Dynamic Styles"],estimatedTime:"45 minutes",prerequisites:[7]},{id:9,title:"Modern CSS Features",description:"Explore cutting-edge CSS features and techniques",difficulty:"advanced",topics:["Container Queries","Subgrid","Logical Properties","Color Functions"],estimatedTime:"70 minutes",prerequisites:[8]},{id:10,title:"Performance & Optimization",description:"Optimize CSS for performance and maintainability",difficulty:"advanced",topics:["Performance","Critical CSS","Optimization","Best Practices"],estimatedTime:"60 minutes",prerequisites:[9]}]},{id:"javascript",name:"JavaScript",icon:"⚡",description:"Bring your websites to life with interactive JavaScript programming",color:"yellow",gradient:"from-yellow-400 to-orange-500",totalLevels:10,levels:[{id:1,title:"Variables & Data Types",description:"Learn JavaScript basics: variables, data types, and operators",difficulty:"beginner",topics:["Variables","Data Types","Operators","Console","Comments"],estimatedTime:"45 minutes",codeExample:`// Variables and data types
let name = "JavaScript";
const year = 2025;
let isAwesome = true;

console.log("Welcome to " + name + "!");`},{id:2,title:"Functions & Scope",description:"Master functions, parameters, return values, and scope",difficulty:"beginner",topics:["Functions","Parameters","Return","Scope","Arrow Functions"],estimatedTime:"50 minutes",prerequisites:[1]},{id:3,title:"Arrays & Objects",description:"Work with complex data structures and object manipulation",difficulty:"beginner",topics:["Arrays","Objects","Methods","Properties","Iteration"],estimatedTime:"60 minutes",prerequisites:[2]},{id:4,title:"DOM Manipulation",description:"Interact with HTML elements and modify web pages dynamically",difficulty:"intermediate",topics:["DOM","Selectors","Events","Element Manipulation","Styling"],estimatedTime:"65 minutes",prerequisites:[3]},{id:5,title:"Events & Interactivity",description:"Handle user interactions and create responsive interfaces",difficulty:"intermediate",topics:["Event Listeners","Event Object","Event Delegation","Form Handling"],estimatedTime:"55 minutes",prerequisites:[4]},{id:6,title:"Async/Await & Promises",description:"Handle asynchronous operations and API calls",difficulty:"intermediate",topics:["Promises","Async/Await","Callbacks","Error Handling","API Calls"],estimatedTime:"70 minutes",prerequisites:[5]},{id:7,title:"ES6+ Features",description:"Modern JavaScript features and syntax improvements",difficulty:"intermediate",topics:["Destructuring","Template Literals","Modules","Classes","Spread Operator"],estimatedTime:"60 minutes",prerequisites:[3,6]},{id:8,title:"APIs & Fetch",description:"Connect to external APIs and handle data exchange",difficulty:"advanced",topics:["Fetch API","REST APIs","JSON","Error Handling","Authentication"],estimatedTime:"75 minutes",prerequisites:[6,7]},{id:9,title:"Object-Oriented Programming",description:"Apply OOP principles in JavaScript development",difficulty:"advanced",topics:["Classes","Inheritance","Polymorphism","Encapsulation","Prototypes"],estimatedTime:"80 minutes",prerequisites:[7,8]},{id:10,title:"Advanced Patterns & Frameworks",description:"Explore design patterns and popular JavaScript frameworks",difficulty:"advanced",topics:["Design Patterns","Module Pattern","MVC","Framework Introduction","Best Practices"],estimatedTime:"90 minutes",prerequisites:[9]}]},{id:"java",name:"Java",icon:"☕",description:"Build robust applications with Java enterprise programming",color:"red",gradient:"from-red-400 to-pink-500",totalLevels:10,levels:[{id:1,title:"Syntax & Basic Concepts",description:"Learn Java syntax, variables, and fundamental programming concepts",difficulty:"beginner",topics:["Java Syntax","Variables","Data Types","Operators","Control Structures"],estimatedTime:"60 minutes",codeExample:`public class HelloJava {
    public static void main(String[] args) {
        String message = "Hello, Java!";
        int year = 2025;
        
        System.out.println(message + " Welcome to " + year);
    }
}`},{id:2,title:"Object-Oriented Programming",description:"Master classes, objects, inheritance, and polymorphism",difficulty:"beginner",topics:["Classes","Objects","Inheritance","Polymorphism","Encapsulation"],estimatedTime:"75 minutes",prerequisites:[1]},{id:3,title:"Collections & Data Structures",description:"Work with Java collections framework and data structures",difficulty:"intermediate",topics:["ArrayList","HashMap","Sets","Queues","Iterators"],estimatedTime:"70 minutes",prerequisites:[2]},{id:4,title:"Exception Handling",description:"Handle errors gracefully with Java exception mechanisms",difficulty:"intermediate",topics:["Try-Catch","Throw","Custom Exceptions","Finally","Error Types"],estimatedTime:"55 minutes",prerequisites:[2,3]},{id:5,title:"File I/O & Streams",description:"Read and write files, work with input/output streams",difficulty:"intermediate",topics:["File Operations","Streams","Readers","Writers","Serialization"],estimatedTime:"65 minutes",prerequisites:[4]},{id:6,title:"Multithreading",description:"Create concurrent applications with Java threading",difficulty:"advanced",topics:["Threads","Synchronization","Executors","Concurrent Collections","Thread Safety"],estimatedTime:"85 minutes",prerequisites:[5]},{id:7,title:"Generics & Annotations",description:"Use generics for type safety and annotations for metadata",difficulty:"advanced",topics:["Generic Classes","Type Parameters","Wildcards","Annotations","Reflection"],estimatedTime:"70 minutes",prerequisites:[3,6]},{id:8,title:"Design Patterns",description:"Implement common design patterns in Java applications",difficulty:"advanced",topics:["Singleton","Factory","Observer","Strategy","MVC Pattern"],estimatedTime:"80 minutes",prerequisites:[2,7]},{id:9,title:"Spring Framework",description:"Build enterprise applications with Spring framework",difficulty:"advanced",topics:["Spring Core","Dependency Injection","Spring Boot","REST APIs","Database Integration"],estimatedTime:"95 minutes",prerequisites:[8]},{id:10,title:"Advanced Java & Performance",description:"Optimize Java applications and explore advanced features",difficulty:"advanced",topics:["JVM Tuning","Memory Management","Performance","Lambda Expressions","Stream API"],estimatedTime:"90 minutes",prerequisites:[9]}]},{id:"python",name:"Python",icon:"🐍",description:"From basics to AI: master Python for web development, data science, and machine learning",color:"green",gradient:"from-green-400 to-blue-500",totalLevels:10,levels:[{id:1,title:"Syntax & Basic Concepts",description:"Learn Python syntax, variables, and fundamental programming concepts",difficulty:"beginner",topics:["Python Syntax","Variables","Data Types","Operators","Input/Output"],estimatedTime:"45 minutes",codeExample:`# Welcome to Python!
name = "Python"
year = 2025
is_awesome = True

print(f"Hello {name}! Welcome to {year}!")
print(f"Is Python awesome? {is_awesome}")`},{id:2,title:"Data Structures",description:"Master Python lists, dictionaries, tuples, and sets",difficulty:"beginner",topics:["Lists","Dictionaries","Tuples","Sets","List Comprehensions"],estimatedTime:"55 minutes",prerequisites:[1]},{id:3,title:"Functions & Modules",description:"Create reusable code with functions and organize with modules",difficulty:"beginner",topics:["Functions","Parameters","Return Values","Modules","Packages"],estimatedTime:"50 minutes",prerequisites:[2]},{id:4,title:"Object-Oriented Programming",description:"Apply OOP principles in Python development",difficulty:"intermediate",topics:["Classes","Objects","Inheritance","Methods","Properties"],estimatedTime:"65 minutes",prerequisites:[3]},{id:5,title:"File Handling & Exceptions",description:"Work with files and handle errors gracefully",difficulty:"intermediate",topics:["File Operations","Exception Handling","Context Managers","CSV","JSON"],estimatedTime:"60 minutes",prerequisites:[4]},{id:6,title:"Libraries & Packages",description:"Explore Python ecosystem and popular libraries",difficulty:"intermediate",topics:["pip","Virtual Environments","requests","datetime","os"],estimatedTime:"55 minutes",prerequisites:[5]},{id:7,title:"Web Development (Flask/Django)",description:"Build web applications with Python frameworks",difficulty:"advanced",topics:["Flask Basics","Routes","Templates","Django Introduction","Database Integration"],estimatedTime:"85 minutes",prerequisites:[6]},{id:8,title:"Data Science & Pandas",description:"Analyze and manipulate data with pandas and numpy",difficulty:"advanced",topics:["NumPy","Pandas","Data Analysis","Visualization","Data Cleaning"],estimatedTime:"80 minutes",prerequisites:[6]},{id:9,title:"Machine Learning Basics",description:"Introduction to machine learning with scikit-learn",difficulty:"advanced",topics:["ML Concepts","Scikit-learn","Classification","Regression","Model Evaluation"],estimatedTime:"90 minutes",prerequisites:[8]},{id:10,title:"Advanced Python & Frameworks",description:"Master advanced Python concepts and modern frameworks",difficulty:"advanced",topics:["Decorators","Generators","Async/Await","FastAPI","Best Practices"],estimatedTime:"95 minutes",prerequisites:[7,9]}]}],em=()=>{M.useEffect(()=>{const a=f=>{f.forEach(h=>{h.isIntersecting&&h.target.classList.add("revealed")})},c=new IntersectionObserver(a,{root:null,rootMargin:"0px",threshold:.1}),u=document.querySelectorAll(".scroll-reveal");return u.forEach(f=>c.observe(f)),()=>{u.forEach(f=>c.unobserve(f))}},[])},tm=()=>{const a=_r(),[c,u]=M.useState({x:0,y:0});em(),M.useEffect(()=>{const g=b=>{u({x:b.clientX/window.innerWidth*100,y:b.clientY/window.innerHeight*100})};return window.addEventListener("mousemove",g),()=>window.removeEventListener("mousemove",g)},[]);const f=[{icon:Yo,label:"Total Levels",value:"50",color:"blue",gradient:"from-blue-500 to-cyan-500"},{icon:Wi,label:"Completed",value:"0",color:"green",gradient:"from-green-500 to-emerald-500"},{icon:wc,label:"Total XP",value:"0",color:"yellow",gradient:"from-yellow-500 to-amber-500"},{icon:xc,label:"Languages",value:"5",color:"purple",gradient:"from-purple-500 to-violet-500"}],h=g=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{a(`/${g}`)},100)};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-visible",children:[s.jsx("div",{className:"particle-bg",children:[...Array(60)].map((g,b)=>s.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*25}s`,animationDuration:`${20+Math.random()*15}s`,width:`${2+Math.random()*6}px`,height:`${2+Math.random()*6}px`}},b))}),s.jsx("div",{className:"relative hero-gradient",children:s.jsx("div",{className:"hero-overlay",children:s.jsx("div",{className:"relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8",style:{transform:`translateY(${c.y*.1}px) translateX(${c.x*.1}px)`},children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"animate-float mb-8",children:s.jsxs("div",{className:"inline-flex items-center gap-4 mb-6",children:[s.jsx(jr,{className:"w-12 h-12 text-yellow-300 animate-pulse-glow"}),s.jsx("h1",{className:"text-6xl md:text-8xl font-bold text-white",children:s.jsx("span",{className:"animate-text-shimmer",children:"Programming Academy"})}),s.jsx(Xo,{className:"w-12 h-12 text-pink-300 animate-float",style:{animationDelay:"1s"}})]})}),s.jsx("p",{className:"text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium",children:"🚀 Master 5 programming languages with our revolutionary 50-level learning platform. Experience interactive examples, stunning UI, and intelligent progress tracking like never before!"}),s.jsx("div",{className:"flex flex-wrap justify-center gap-8 mb-16",children:f.map((g,b)=>s.jsx("div",{className:"stats-card group scroll-reveal scale-in",style:{animationDelay:`${b*.15}s`,background:"linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"},children:s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${g.gradient} mb-4 group-hover:scale-125 transition-transform duration-300`,children:s.jsx(g.icon,{className:"w-8 h-8 text-white"})}),s.jsx("div",{className:"text-4xl font-bold text-white mb-2 animate-text-shimmer",children:g.value}),s.jsx("div",{className:"text-sm text-blue-100 font-medium",children:g.label})]})},g.label))}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center items-center",children:[s.jsx("button",{onClick:()=>a("/html"),className:"btn-primary group relative overflow-hidden",children:s.jsxs("span",{className:"relative z-10 flex items-center gap-3",children:[s.jsx(yc,{className:"w-6 h-6"}),"Start Your Journey",s.jsx(Ko,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),s.jsx("button",{onClick:()=>{document.getElementById("language-tracks")?.scrollIntoView({behavior:"smooth"})},className:"btn-secondary group",children:s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(jr,{className:"w-5 h-5"}),"Explore Tracks"]})})]})]})})})}),s.jsxs("div",{id:"language-tracks",className:"max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative",children:[s.jsxs("div",{className:"text-center mb-20 scroll-reveal",children:[s.jsxs("div",{className:"inline-flex items-center gap-4 mb-8",children:[s.jsx("div",{className:"w-1 h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent"}),s.jsx("h2",{className:"text-6xl font-bold learning-path-text",children:"Choose Your Learning Path"}),s.jsx("div",{className:"w-1 h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent"})]}),s.jsx("p",{className:"text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium",children:"Each track contains 10 progressive levels, designed by industry experts. Master one language or conquer them all! Your coding odyssey starts here. 🌟"})]}),s.jsx("div",{className:"language-tracks-grid",children:la.map((g,b)=>s.jsx("div",{className:"language-card scroll-reveal",onClick:()=>h(g.id),style:{animationDelay:`${b*.2}s`},children:s.jsxs("div",{className:"language-card-content relative z-10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-8",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx("div",{className:"text-6xl mr-6 animate-float track-icon",style:{animationDelay:`${b*.3}s`},children:g.icon}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-3xl font-bold text-gray-900",children:g.name}),s.jsx("div",{className:"text-sm text-gray-600 font-medium mt-1",children:"Advanced Track"})]})]}),s.jsx(Ko,{className:"w-8 h-8 text-gray-500 chevron-icon"})]}),s.jsx("p",{className:"text-gray-700 mb-10 leading-relaxed text-lg font-medium",children:g.description}),s.jsxs("div",{className:"flex items-center justify-between mb-8",children:[s.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[s.jsx(Yo,{className:"w-6 h-6 mr-3 text-blue-500"}),s.jsxs("span",{className:"font-semibold text-lg",children:[g.totalLevels," Comprehensive Levels"]})]}),s.jsx("div",{className:"flex items-center space-x-1",children:[...Array(5)].map((P,k)=>s.jsx(Xf,{className:"w-5 h-5 text-yellow-400 fill-current"},k))})]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:`progress-fill bg-gradient-to-r ${g.gradient} relative overflow-hidden`,style:{width:"0%"},children:s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-float"})})}),s.jsx("div",{className:"mt-6 text-center",children:s.jsx("span",{className:"text-sm text-gray-400 font-medium px-4 py-2 rounded-full bg-gray-800",children:"🚀 Click to embark on your journey!"})})]})},g.id))})]}),s.jsxs("div",{className:"wave-background py-24 relative overflow-visible",children:[s.jsxs("div",{className:"absolute inset-0 opacity-30",children:[s.jsx("div",{className:"absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-white/20 to-white/10 rounded-full filter blur-3xl"}),s.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-white/15 to-white/5 rounded-full filter blur-3xl"}),s.jsx("div",{className:"absolute bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-white/25 to-white/8 rounded-full filter blur-3xl"})]}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[s.jsxs("div",{className:"text-center mb-20 scroll-reveal",children:[s.jsxs("div",{className:"inline-flex items-center gap-4 mb-8",children:[s.jsx(jr,{className:"w-8 h-8 text-purple-500 animate-pulse-glow"}),s.jsx("h2",{className:"text-6xl font-bold color-flow-text color-flow-glow",children:"Why Choose Programming Academy?"}),s.jsx(jr,{className:"w-8 h-8 text-blue-500 animate-pulse-glow"})]}),s.jsx("p",{className:"text-xl text-white/80 max-w-4xl mx-auto font-medium drop-shadow",children:"Experience the future of programming education with our revolutionary platform"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",children:[{icon:qi,title:"Interactive Examples",description:"Learn by doing with hands-on coding examples, real-time feedback, and intelligent code completion",color:"from-blue-500 via-purple-500 to-pink-500",accent:"blue"},{icon:Yo,title:"Progressive Learning",description:"Structured curriculum designed by industry experts, from absolute beginner to advanced developer",color:"from-green-500 via-teal-500 to-cyan-500",accent:"green"},{icon:Wi,title:"Achievement System",description:"Track your progress, earn exclusive badges, unlock achievements, and celebrate every milestone",color:"from-yellow-500 via-orange-500 to-red-500",accent:"yellow"},{icon:wc,title:"Modern UI/UX",description:"Beautiful, responsive design with cutting-edge animations that adapts seamlessly to any device",color:"from-pink-500 via-purple-500 to-indigo-500",accent:"pink"}].map((g,b)=>s.jsxs("div",{className:"feature-card scroll-reveal scale-in group",style:{animationDelay:`${b*.2}s`},children:[s.jsx("div",{className:`feature-icon bg-gradient-to-br ${g.color} group-hover:shadow-glow`,children:s.jsx(g.icon,{className:"w-8 h-8"})}),s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-6",children:g.title}),s.jsx("p",{className:"text-gray-700 leading-relaxed font-medium",children:g.description}),s.jsxs("div",{className:"mt-6 flex items-center justify-center",children:[s.jsx("div",{className:`w-2 h-2 rounded-full bg-gradient-to-r ${g.color} animate-pulse-glow`}),s.jsx("div",{className:`w-1 h-1 rounded-full bg-gradient-to-r ${g.color} mx-1 opacity-60`}),s.jsx("div",{className:`w-1 h-1 rounded-full bg-gradient-to-r ${g.color} opacity-40`})]})]},g.title))}),s.jsxs("div",{className:"mt-20 text-center scroll-reveal",children:[s.jsx("h3",{className:"text-4xl font-bold text-white drop-shadow-lg mb-12",children:"Join the Revolution"}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[{number:"10K+",label:"Students Learning",icon:xc},{number:"50",label:"Interactive Levels",icon:yc},{number:"5",label:"Programming Languages",icon:qi},{number:"99%",label:"Success Rate",icon:Wi}].map(g=>s.jsxs("div",{className:"text-center group",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300",children:s.jsx(g.icon,{className:"w-8 h-8"})}),s.jsx("div",{className:"text-3xl font-bold text-gradient mb-2",children:g.number}),s.jsx("div",{className:"text-gray-600 font-medium",children:g.label})]},g.label))})]})]})]}),s.jsxs("div",{className:"hero-gradient relative overflow-visible",children:[s.jsx("div",{className:"hero-overlay",children:s.jsx("div",{className:"max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24",children:s.jsxs("div",{className:"scroll-reveal",children:[s.jsxs("div",{className:"inline-flex items-center gap-4 mb-8",children:[s.jsx(Xo,{className:"w-12 h-12 text-yellow-300 animate-float"}),s.jsxs("h2",{className:"text-6xl font-bold text-white",children:["Ready to Start Your ",s.jsx("span",{className:"animate-text-shimmer",children:"Epic Coding Journey"}),"?"]}),s.jsx(jr,{className:"w-12 h-12 text-pink-300 animate-pulse-glow"})]}),s.jsx("p",{className:"text-xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto font-medium",children:"Join thousands of developers who have transformed their careers with our academy. Your programming adventure begins with a single click. Are you ready to code your future? 🚀"}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-8 justify-center items-center mb-12",children:[s.jsx("button",{onClick:()=>a("/html"),className:"btn-primary text-xl px-16 py-6 group relative",children:s.jsxs("span",{className:"relative z-10 flex items-center gap-4",children:[s.jsx(Xo,{className:"w-6 h-6 group-hover:rotate-12 transition-transform duration-300"}),"Begin with HTML",s.jsx(Ko,{className:"w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"})]})}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-blue-100 text-sm font-medium mb-2",children:"✨ No credit card required • Free to start • 50 levels of premium content"}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-blue-200 text-xs",children:[s.jsx("div",{className:"w-2 h-2 rounded-full bg-green-400 animate-pulse"}),s.jsx("span",{children:"Trusted by 10,000+ developers worldwide"})]})]})]}),s.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-8 opacity-80",children:[s.jsx("div",{className:"text-blue-200 text-sm font-medium",children:"As featured in:"}),["TechCrunch","Product Hunt","Hacker News","Dev.to"].map(g=>s.jsx("div",{className:"text-blue-100 text-sm font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm",children:g},g))]})]})})}),s.jsx("div",{className:"absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float blur-xl"}),s.jsx("div",{className:"absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-float blur-lg",style:{animationDelay:"2s"}}),s.jsx("div",{className:"absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-float blur-md",style:{animationDelay:"4s"}})]})]})};/*! js-cookie v3.0.5 | MIT */function Vi(a){for(var c=1;c<arguments.length;c++){var u=arguments[c];for(var f in u)a[f]=u[f]}return a}var nm={read:function(a){return a[0]==='"'&&(a=a.slice(1,-1)),a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(a){return encodeURIComponent(a).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function na(a,c){function u(h,g,b){if(!(typeof document>"u")){b=Vi({},c,b),typeof b.expires=="number"&&(b.expires=new Date(Date.now()+b.expires*864e5)),b.expires&&(b.expires=b.expires.toUTCString()),h=encodeURIComponent(h).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var P="";for(var k in b)b[k]&&(P+="; "+k,b[k]!==!0&&(P+="="+b[k].split(";")[0]));return document.cookie=h+"="+a.write(g,h)+P}}function f(h){if(!(typeof document>"u"||arguments.length&&!h)){for(var g=document.cookie?document.cookie.split("; "):[],b={},P=0;P<g.length;P++){var k=g[P].split("="),S=k.slice(1).join("=");try{var L=decodeURIComponent(k[0]);if(b[L]=a.read(S,L),h===L)break}catch{}}return h?b[h]:b}}return Object.create({set:u,get:f,remove:function(h,g){u(h,"",Vi({},g,{expires:-1}))},withAttributes:function(h){return na(this.converter,Vi({},this.attributes,h))},withConverter:function(h){return na(Vi({},this.converter,h),this.attributes)}},{attributes:{value:Object.freeze(c)},converter:{value:Object.freeze(a)}})}var Zo=na(nm,{path:"/"});function bc(a){try{const u=a.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),f=decodeURIComponent(atob(u).split("").map(h=>"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(f)}catch{return null}}const Bc=M.createContext({user:null,setAuthToken:()=>{},logout:()=>{}}),rm=({children:a})=>{const[c,u]=M.useState(null);M.useEffect(()=>{const g=Zo.get("auth_token");if(g){const b=bc(g);u(b)}},[]);const f=g=>{Zo.set("auth_token",g,{expires:7});const b=bc(g);u(b)},h=()=>{Zo.remove("auth_token"),u(null)};return s.jsx(Bc.Provider,{value:{user:c,setAuthToken:f,logout:h},children:a})},oa=()=>Lr.useContext(Bc),Uc=M.createContext(void 0),im=({children:a})=>{const{user:c}=oa(),[u,f]=M.useState({});M.useEffect(()=>{if(c){const k=`programming-academy-progress:${c.sub}`,S=localStorage.getItem(k);f(S?JSON.parse(S):{})}else f({})},[c]),M.useEffect(()=>{if(c){const k=`programming-academy-progress:${c.sub}`;localStorage.setItem(k,JSON.stringify(u))}},[u,c]);const h=(k,S)=>{f(L=>{const C=L[k]||{languageId:k,completedLevels:[],currentLevel:1,totalXP:0,achievements:[],startedAt:new Date,lastActivity:new Date},U=C.completedLevels.includes(S)?C.completedLevels:[...C.completedLevels,S];return{...L,[k]:{...C,completedLevels:U,currentLevel:Math.max(C.currentLevel,S+1),totalXP:C.totalXP+(C.completedLevels.includes(S)?0:100),lastActivity:new Date}}})},g=k=>u[k]||null,b=()=>Object.values(u).reduce((k,S)=>k+S.totalXP,0),P=()=>Object.values(u).reduce((k,S)=>k+S.completedLevels.length,0);return s.jsx(Uc.Provider,{value:{progress:u,updateProgress:h,getProgress:g,getTotalXP:b,getCompletedLevels:P},children:a})},Hc=()=>{const a=M.useContext(Uc);if(a===void 0)throw new Error("useProgress must be used within a ProgressProvider");return a},lm=()=>{const{language:a}=Rc(),c=_r(),{getProgress:u}=Hc();M.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a]);const f=la.find(S=>S.id===a),h=u(a||"");if(!f)return s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Language Not Found"}),s.jsx("button",{onClick:()=>c("/"),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Go Back Home"})]})});const g=h?.completedLevels||[],b=h?.currentLevel||1,P=S=>{if(S===1)return!0;const L=f.levels.find(C=>C.id===S);return L?.prerequisites?L.prerequisites.every(C=>g.includes(C)):!0},k=S=>{switch(S){case"beginner":return"bg-green-100 text-green-800";case"intermediate":return"bg-yellow-100 text-yellow-800";case"advanced":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[s.jsx("div",{className:"hero-gradient relative overflow-hidden",children:s.jsx("div",{className:"hero-overlay",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[s.jsxs("button",{onClick:()=>c("/"),className:"btn-secondary mb-8 animate-float",children:[s.jsx(Dc,{className:"w-5 h-5 mr-2"}),"Back to Home"]}),s.jsxs("div",{className:"flex items-center mb-8",children:[s.jsx("div",{className:"text-7xl mr-6 animate-float",style:{animationDelay:"0.5s"},children:f.icon}),s.jsxs("div",{children:[s.jsxs("h1",{className:"text-5xl font-bold mb-3 text-white",children:[f.name," ",s.jsx("span",{className:"animate-text-shimmer",children:"Track"})]}),s.jsx("p",{className:"text-xl text-blue-100 leading-relaxed max-w-2xl",children:f.description})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"stats-card",children:[s.jsx("div",{className:"text-3xl font-bold text-white mb-1",children:f.totalLevels}),s.jsx("div",{className:"text-blue-100",children:"Total Levels"})]}),s.jsxs("div",{className:"stats-card",children:[s.jsx("div",{className:"text-3xl font-bold text-white mb-1",children:g.length}),s.jsx("div",{className:"text-blue-100",children:"Completed"})]}),s.jsxs("div",{className:"stats-card",children:[s.jsxs("div",{className:"text-3xl font-bold text-white mb-1",children:[Math.round(g.length/f.totalLevels*100),"%"]}),s.jsx("div",{className:"text-blue-100",children:"Progress"})]})]})]})})}),s.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:f.levels.map(S=>{const L=g.includes(S.id),C=P(S.id),U=S.id===b&&!L;return s.jsxs("div",{className:`level-card relative transform transition-all duration-300 ${C?"cursor-pointer hover:scale-105":"opacity-50 cursor-not-allowed"} ${U?"ring-2 ring-blue-500 shadow-glow":""} ${L?"bg-gradient-to-br from-green-50 to-emerald-100 border-green-200":""}`,onClick:()=>{C&&c(`/${a}/level/${S.id}`)},children:[s.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-5 rounded-xl`}),s.jsx("div",{className:"absolute -top-3 -right-3 z-10",children:L?s.jsx("div",{className:"w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow",children:s.jsx($i,{className:"w-6 h-6 text-white"})}):C?s.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform",children:s.jsx(Fc,{className:"w-6 h-6 text-white ml-1"})}):s.jsx("div",{className:"w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center shadow-lg",children:s.jsx(Kf,{className:"w-6 h-6 text-white"})})}),s.jsxs("div",{className:"relative z-10 mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full",children:["Level ",S.id]}),s.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${k(S.difficulty)}`,children:S.difficulty})]}),s.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 leading-tight",children:S.title}),s.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:S.description})]}),s.jsxs("div",{className:"space-y-4 relative z-10",children:[s.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[s.jsx(Ac,{className:"w-4 h-4 mr-2 text-blue-500"}),s.jsx("span",{className:"font-medium",children:S.estimatedTime})]}),s.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[s.jsx(Tr,{className:"w-4 h-4 mr-2 text-green-500"}),s.jsxs("span",{className:"font-medium",children:[S.topics.length," Topics"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[S.topics.slice(0,3).map(G=>s.jsx("span",{className:"px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100",children:G},G)),S.topics.length>3&&s.jsxs("span",{className:"px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium border border-gray-100",children:["+",S.topics.length-3," more"]})]}),S.prerequisites&&S.prerequisites.length>0&&!C&&s.jsxs("div",{className:"text-xs text-red-600 mt-3 p-2 bg-red-50 rounded-lg border border-red-100",children:["🔒 Requires: Level ",S.prerequisites.join(", ")]}),C&&s.jsx("div",{className:"text-center pt-2",children:s.jsx("span",{className:"text-xs text-blue-600 font-medium",children:"Click to start →"})})]})]},S.id)})}),s.jsxs("div",{className:"mt-12 glass-card p-8 shadow-glow",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h3",{className:"text-2xl font-semibold text-gray-900",children:"Overall Progress"}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-2xl font-bold text-gradient",children:[Math.round(g.length/f.totalLevels*100),"%"]}),s.jsxs("span",{className:"text-sm text-gray-600",children:[g.length," of ",f.totalLevels," levels completed"]})]})]}),s.jsx("div",{className:"progress-bar mb-4",children:s.jsx("div",{className:`progress-fill bg-gradient-to-r ${f.gradient}`,style:{width:`${g.length/f.totalLevels*100}%`}})}),s.jsxs("div",{className:"flex justify-between text-sm text-gray-500",children:[s.jsx("span",{children:"Beginner"}),s.jsx("span",{children:"Intermediate"}),s.jsx("span",{children:"Advanced"})]})]})]})]})},om=({topic:a,isOpen:c,onClose:u})=>!c||!a?null:s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:s.jsxs("div",{className:"bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[s.jsxs("div",{className:"sticky top-0 bg-white border-b p-6 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(Tr,{className:"w-6 h-6 text-purple-600 mr-3"}),s.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:a.name})]}),s.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-600 transition-colors",children:s.jsx(Zf,{className:"w-6 h-6"})})]}),s.jsxs("div",{className:"p-6 space-y-8",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-4",children:[s.jsx(Yf,{className:"w-5 h-5 text-yellow-500 mr-2"}),s.jsxs("h3",{className:"text-lg font-semibold text-gray-900",children:["What is ",a.name,"?"]})]}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:a.description})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-4",children:[s.jsx(Tr,{className:"w-5 h-5 text-blue-500 mr-2"}),s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Theory"})]}),s.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-6",children:s.jsx("p",{className:"text-gray-800 leading-relaxed whitespace-pre-line",children:a.theory})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-4",children:[s.jsx(qi,{className:"w-5 h-5 text-green-500 mr-2"}),s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Syntax"})]}),s.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-6",children:s.jsx("pre",{className:"text-sm overflow-x-auto",children:s.jsx("code",{children:a.syntax})})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-4",children:[s.jsx(qi,{className:"w-5 h-5 text-purple-500 mr-2"}),s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Example"})]}),s.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-6",children:s.jsx("pre",{className:"text-sm overflow-x-auto",children:s.jsx("code",{children:a.example})})})]})]}),s.jsx("div",{className:"sticky bottom-0 bg-gray-50 border-t p-6",children:s.jsx("button",{onClick:u,className:"w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors",children:"Got it! Close"})})]})}),am={"HTML Structure":{name:"HTML Structure",description:"HTML (HyperText Markup Language) provides the basic structure for web pages using elements and tags.",theory:`HTML is the backbone of every webpage. It uses a hierarchical structure of elements defined by tags.

Key concepts:
• Tags are enclosed in angle brackets < >
• Most tags come in pairs: opening <tag> and closing </tag>
• Tags can have attributes that provide additional information
• HTML documents have a standard structure with DOCTYPE, html, head, and body sections

The document follows a tree-like structure where elements can contain other elements, creating parent-child relationships.`,syntax:`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page Title</title>
</head>
<body>
    <element attribute="value">Content</element>
</body>
</html>`,example:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph with <strong>bold text</strong>.</p>
    <a href="https://example.com">Visit Example</a>
</body>
</html>`},"Text Elements":{name:"Text Elements",description:"HTML provides various elements for structuring and formatting text content.",theory:`Text elements in HTML allow you to structure content semantically and provide meaning to different parts of your text.

Heading elements (h1-h6):
• Create a hierarchy of importance
• h1 is most important, h6 is least important
• Should be used in logical order

Paragraph elements:
• Contain blocks of text
• Automatically add spacing before and after

Inline text elements:
• <strong> for important text (usually bold)
• <em> for emphasized text (usually italic)
• <span> for generic inline container`,syntax:`<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>

<!-- Paragraphs -->
<p>Paragraph text here</p>

<!-- Inline formatting -->
<p>This is <strong>important</strong> and <em>emphasized</em> text.</p>`,example:`<article>
    <h1>Introduction to Web Development</h1>
    
    <h2>What is HTML?</h2>
    <p>HTML stands for <strong>HyperText Markup Language</strong>. 
    It is the <em>standard markup language</em> for creating web pages.</p>
    
    <h2>Getting Started</h2>
    <p>To begin learning HTML, you need:</p>
    <p>A text editor and a web browser. That's it!</p>
    
    <h3>Basic Concepts</h3>
    <p>HTML uses <span style="color: blue;">tags</span> to structure content.</p>
</article>`},"Links and Images":{name:"Links and Images",description:"Learn how to create hyperlinks and embed images to make your web pages interactive and visually appealing.",theory:`Links and images are fundamental elements that make the web interactive and visually rich.

Links (Anchor elements):
• Connect pages together
• Can link to other websites, pages, or sections
• Use the href attribute to specify destination
• Can open in new windows/tabs with target="_blank"

Images:
• Embed visual content in web pages
• Use src attribute for image source
• Alt attribute provides accessibility and fallback text
• Can be resized with width/height attributes
• Should always include meaningful alt text for screen readers`,syntax:`<!-- Links -->
<a href="URL">Link text</a>
<a href="URL" target="_blank">Open in new tab</a>
<a href="#section">Link to page section</a>

<!-- Images -->
<img src="image.jpg" alt="Description">
<img src="image.jpg" alt="Description" width="300" height="200">`,example:`<!-- Navigation Links -->
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="https://google.com" target="_blank">Google</a>
</nav>

<!-- Article with image -->
<article>
    <h2>Beautiful Sunset</h2>
    <img src="sunset.jpg" 
         alt="Orange and pink sunset over calm ocean waters" 
         width="500" 
         height="300">
    
    <p>Check out this <a href="#gallery">photo gallery</a> for more images.</p>
    
    <p>Photo credit: <a href="mailto:photographer@example.com">John Doe</a></p>
</article>`},"HTML Document Structure":{name:"HTML Document Structure",description:"The fundamental structure and organization of HTML documents including DOCTYPE, html, head, and body elements.",theory:`HTML documents follow a specific hierarchical structure that browsers understand and parse correctly.

Essential components:
• DOCTYPE declaration defines the HTML version
• <html> element is the root container
• <head> contains metadata not visible on the page
• <body> contains all visible content
• Proper nesting creates a logical document tree

Document structure affects:
• SEO and search engine crawling
• Accessibility for screen readers
• Browser rendering performance
• Validation and standards compliance`,syntax:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Page content goes here -->
</body>
</html>`,example:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A sample HTML page">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is the main content area.</p>
    </main>
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>`},"Head and Body Tags":{name:"Head and Body Tags",description:"Understanding the distinction and proper use of head and body sections in HTML documents.",theory:`The head and body elements serve different purposes in HTML documents:

Head section contains:
• Metadata about the document
• Links to external resources (CSS, scripts)
• SEO-related information
• Character encoding and viewport settings
• Not visible to users directly

Body section contains:
• All visible content
• Text, images, videos, forms
• Interactive elements
• The actual webpage content users see`,syntax:`<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="description" content="Page description">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer><\/script>
</head>

<body>
    <h1>Visible Content</h1>
    <p>This appears on the webpage</p>
</body>`,example:`<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta information -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learning HTML head and body tags">
    <meta name="keywords" content="HTML, tutorial, web development">
    
    <!-- Page title -->
    <title>Head vs Body Example</title>
    
    <!-- External resources -->
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- Visible content starts here -->
    <header>
        <h1>Understanding HTML Structure</h1>
        <nav>
            <a href="#section1">Section 1</a>
            <a href="#section2">Section 2</a>
        </nav>
    </header>
    
    <main>
        <section id="section1">
            <h2>What goes in the head?</h2>
            <p>Metadata, links to stylesheets, and other non-visible elements.</p>
        </section>
        
        <section id="section2">
            <h2>What goes in the body?</h2>
            <p>All the content that users can see and interact with.</p>
        </section>
    </main>
</body>
</html>`},Headings:{name:"Headings",description:"HTML heading elements (h1-h6) create a hierarchical structure for content organization.",theory:`HTML headings provide semantic structure and hierarchy to content:

Heading levels (h1-h6):
• h1: Most important heading (page title)
• h2: Major section headings
• h3-h6: Subsection headings in order
• Should follow logical hierarchy
• Important for SEO and accessibility

Best practices:
• Use only one h1 per page
• Don't skip heading levels
• Use for structure, not styling
• Screen readers use headings for navigation`,syntax:`<h1>Main Page Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>`,example:`<article>
    <h1>Complete Guide to Web Development</h1>
    
    <h2>Frontend Development</h2>
    <p>Frontend focuses on user interface and experience.</p>
    
    <h3>HTML Fundamentals</h3>
    <p>HTML provides the structure for web pages.</p>
    
    <h4>Semantic Elements</h4>
    <p>Use meaningful HTML elements for better accessibility.</p>
    
    <h3>CSS Styling</h3>
    <p>CSS controls the visual presentation.</p>
    
    <h4>Responsive Design</h4>
    <p>Making websites work on all devices.</p>
    
    <h2>Backend Development</h2>
    <p>Backend handles server-side logic and data.</p>
    
    <h3>Databases</h3>
    <p>Storing and retrieving data efficiently.</p>
</article>`},Paragraphs:{name:"Paragraphs",description:"The paragraph element (p) is used to structure text content into readable blocks.",theory:`Paragraphs are fundamental for text content organization:

Key characteristics:
• Block-level element with automatic spacing
• Contains flowing text content
• Browsers add margin before and after
• Can contain inline elements but not block elements
• Essential for readability and SEO

Accessibility benefits:
• Screen readers pause between paragraphs
• Helps users navigate content logically
• Improves text scanning and comprehension`,syntax:`<p>This is a paragraph of text.</p>

<p>This is another paragraph with <strong>bold text</strong> 
and <em>italic text</em> inline.</p>

<p>Paragraphs can contain 
<a href="link.html">links</a> and other inline elements.</p>`,example:`<article>
    <h1>The Importance of Web Accessibility</h1>
    
    <p>Web accessibility ensures that websites and web applications are usable by people with disabilities. This includes individuals with visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
    
    <p>According to the <strong>World Health Organization</strong>, over 1 billion people worldwide have some form of disability. By making websites accessible, we create inclusive digital experiences that benefit everyone.</p>
    
    <p>Key accessibility principles include:</p>
    <ul>
        <li>Perceivable information and user interface</li>
        <li>Operable interface and navigation</li>
        <li>Understandable information and UI operation</li>
        <li>Robust content that works with assistive technologies</li>
    </ul>
    
    <p>Implementing accessibility from the start is more cost-effective than retrofitting existing websites. It also improves SEO, usability for all users, and helps avoid legal issues.</p>
    
    <p>Learn more about web accessibility at the <a href="https://www.w3.org/WAI/" target="_blank">W3C Web Accessibility Initiative</a>.</p>
</article>`},"Basic Formatting":{name:"Basic Formatting",description:"Essential HTML elements for text formatting including emphasis, importance, and inline styling.",theory:`HTML provides semantic elements for text formatting that convey meaning:

Semantic formatting:
• <strong> indicates strong importance (usually bold)
• <em> indicates stress emphasis (usually italic)
• <mark> highlights relevant text
• <small> represents side comments or fine print
• <sub> and <sup> for subscript and superscript

Visual vs. Semantic:
• Use <strong> instead of <b> for important text
• Use <em> instead of <i> for emphasized text
• Semantic elements provide meaning to screen readers
• Better for SEO and accessibility`,syntax:`<p>This is <strong>very important</strong> text.</p>
<p>This text has <em>emphasis</em> on it.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>Chemical formula: H<sub>2</sub>O</p>
<p>Mathematical expression: x<sup>2</sup> + y<sup>2</sup></p>
<p><small>This is fine print text.</small></p>`,example:`<article>
    <h1>Understanding HTML Text Formatting</h1>
    
    <p>When writing content, it's important to use <strong>semantic HTML elements</strong> rather than relying solely on CSS for styling. This approach ensures that your content is <em>accessible</em> and meaningful to all users.</p>
    
    <p>Here are some examples of proper text formatting:</p>
    
    <h2>Chemical Formulas</h2>
    <p>Water is represented as H<sub>2</sub>O, while carbon dioxide is CO<sub>2</sub>. These subscripts indicate the number of atoms in each molecule.</p>
    
    <h2>Mathematical Expressions</h2>
    <p>The famous equation E = mc<sup>2</sup> shows the relationship between energy and mass. In algebra, we often see expressions like x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup> for the equation of a circle.</p>
    
    <h2>Highlighting Important Information</h2>
    <p>When reviewing code, you might want to <mark>highlight specific sections</mark> that need attention or contain bugs.</p>
    
    <p><small>Note: Always test your HTML in different browsers and with screen readers to ensure accessibility.</small></p>
    
    <p>Remember: <strong>semantic markup</strong> is <em>essential</em> for creating accessible web content that works for everyone.</p>
</article>`},"Form Elements":{name:"Form Elements",description:"HTML form elements enable user input and data collection through various interactive controls.",theory:`HTML forms are essential for user interaction and data collection:

Core form elements:
• <form> container defines the form boundary
• <input> various input types for different data
• <textarea> multi-line text input
• <select> dropdown menus
• <button> clickable form controls
• <label> associates text with form controls

Form attributes:
• action: where to send form data
• method: GET or POST
• enctype: encoding type for file uploads
• novalidate: disable browser validation

Accessibility requirements:
• Each input needs an associated label
• Use fieldsets for grouping related inputs
• Provide clear error messages and instructions`,syntax:`<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <button type="submit">Send</button>
</form>`,example:`<form action="/contact" method="POST" novalidate>
    <fieldset>
        <legend>Personal Information</legend>
        
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required 
                   placeholder="Enter your first name">
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required 
                   placeholder="Enter your last name">
        </div>
        
        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" required 
                   placeholder="your.email@example.com">
        </div>
        
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" 
                   placeholder="(555) 123-4567">
        </div>
    </fieldset>
    
    <fieldset>
        <legend>Message Details</legend>
        
        <div class="form-group">
            <label for="subject">Subject *</label>
            <select id="subject" name="subject" required>
                <option value="">Choose a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea id="message" name="message" rows="6" required 
                      placeholder="Please describe your inquiry in detail..."></textarea>
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" name="newsletter" value="yes">
                Subscribe to our newsletter for updates
            </label>
        </div>
    </fieldset>
    
    <div class="form-actions">
        <button type="reset">Clear Form</button>
        <button type="submit">Send Message</button>
    </div>
</form>`},"Input Types":{name:"Input Types",description:"Various HTML input types provide specialized controls for different kinds of user data.",theory:`HTML5 introduced many input types for better user experience and validation:

Text-based inputs:
• text: basic text input
• email: email validation
• password: hidden text
• search: search functionality
• url: URL validation
• tel: telephone numbers

Number inputs:
• number: numeric input with spinners
• range: slider control
• date, time, datetime-local: date/time pickers

Selection inputs:
• checkbox: multiple selections
• radio: single selection from group
• file: file upload

Special inputs:
• hidden: invisible data
• submit, reset, button: form controls
• color: color picker`,syntax:`<!-- Text inputs -->
<input type="text" name="username">
<input type="email" name="email">
<input type="password" name="password">
<input type="search" name="query">
<input type="url" name="website">
<input type="tel" name="phone">

<!-- Number inputs -->
<input type="number" name="age" min="1" max="120">
<input type="range" name="volume" min="0" max="100">

<!-- Date/time inputs -->
<input type="date" name="birthday">
<input type="time" name="appointment">

<!-- Selection inputs -->
<input type="checkbox" name="agree" value="yes">
<input type="radio" name="size" value="small">
<input type="file" name="upload" accept=".pdf,.doc">

<!-- Other inputs -->
<input type="color" name="theme">
<input type="hidden" name="token" value="abc123">`,example:`<form action="/registration" method="POST" enctype="multipart/form-data">
    <h2>User Registration Form</h2>
    
    <!-- Basic Information -->
    <fieldset>
        <legend>Basic Information</legend>
        
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required 
               minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+">
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required 
               minlength="8">
        
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
        
        <label for="website">Personal Website:</label>
        <input type="url" id="website" name="website" 
               placeholder="https://example.com">
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" 
               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
               placeholder="123-456-7890">
    </fieldset>
    
    <!-- Personal Details -->
    <fieldset>
        <legend>Personal Details</legend>
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="13" max="120" required>
        
        <label for="birthday">Date of Birth:</label>
        <input type="date" id="birthday" name="birthday" required>
        
        <label for="meetingTime">Preferred Contact Time:</label>
        <input type="time" id="meetingTime" name="meetingTime">
        
        <label for="favoriteColor">Favorite Color:</label>
        <input type="color" id="favoriteColor" name="favoriteColor" value="#3366cc">
        
        <label for="experience">Years of Experience:</label>
        <input type="range" id="experience" name="experience" 
               min="0" max="50" value="5" 
               oninput="this.nextElementSibling.value = this.value">
        <output>5</output> years
        
        <label for="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" name="profilePicture" 
               accept=".jpg,.jpeg,.png,.gif" required>
    </fieldset>
    
    <!-- Preferences -->
    <fieldset>
        <legend>Preferences</legend>
        
        <p>Preferred Programming Languages (check all that apply):</p>
        <label><input type="checkbox" name="languages" value="javascript"> JavaScript</label>
        <label><input type="checkbox" name="languages" value="python"> Python</label>
        <label><input type="checkbox" name="languages" value="java"> Java</label>
        <label><input type="checkbox" name="languages" value="csharp"> C#</label>
        
        <p>Experience Level:</p>
        <label><input type="radio" name="level" value="beginner" required> Beginner</label>
        <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
        <label><input type="radio" name="level" value="advanced"> Advanced</label>
        
        <label for="searchQuery">What would you like to learn?</label>
        <input type="search" id="searchQuery" name="searchQuery" 
               placeholder="Search topics...">
    </fieldset>
    
    <!-- Hidden fields -->
    <input type="hidden" name="referrer" value="homepage">
    <input type="hidden" name="timestamp" value="2025-06-25">
    
    <!-- Form Controls -->
    <div class="form-actions">
        <input type="reset" value="Clear Form">
        <input type="submit" value="Create Account">
    </div>
</form>`},Labels:{name:"Labels",description:"The label element associates descriptive text with form controls for better accessibility and usability.",theory:`Labels are crucial for form accessibility and usability:

Purpose and benefits:
• Provide descriptive text for form controls
• Enable screen readers to identify inputs
• Clicking label focuses/activates associated control
• Required for web accessibility compliance
• Improve user experience on mobile devices

Association methods:
• Using 'for' attribute pointing to input's id
• Wrapping the input element inside label
• Implicit association through nesting

Best practices:
• Every form control should have a label
• Use clear, descriptive text
• Position labels consistently
• Consider label placement for mobile usability`,syntax:`<!-- Explicit association with 'for' attribute -->
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">

<!-- Implicit association by wrapping -->
<label>
    Password:
    <input type="password" name="password">
</label>

<!-- Multiple inputs in one label -->
<label>
    Phone Number:
    <input type="tel" name="phone" placeholder="(555) 123-4567">
</label>`,example:`<form action="/profile" method="POST">
    <h2>Update Your Profile</h2>
    
    <!-- Explicit labeling (recommended for complex layouts) -->
    <div class="form-row">
        <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required>
        </div>
        
        <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required>
        </div>
    </div>
    
    <!-- Implicit labeling (good for simple forms) -->
    <div class="form-group">
        <label>
            Email Address *
            <input type="email" name="email" required>
        </label>
    </div>
    
    <!-- Complex form controls with labels -->
    <fieldset>
        <legend>Contact Preferences</legend>
        
        <div class="form-group">
            <label for="contactMethod">Preferred Contact Method:</label>
            <select id="contactMethod" name="contactMethod">
                <option value="">Choose one...</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="bio">About You:</label>
            <textarea id="bio" name="bio" rows="4" 
                      placeholder="Tell us about yourself..."></textarea>
        </div>
        
        <!-- Checkbox and radio button labeling -->
        <div class="form-group">
            <fieldset>
                <legend>Communication Preferences:</legend>
                
                <label>
                    <input type="checkbox" name="newsletter" value="yes">
                    Subscribe to weekly newsletter
                </label>
                
                <label>
                    <input type="checkbox" name="promotions" value="yes">
                    Receive promotional offers
                </label>
                
                <label>
                    <input type="checkbox" name="updates" value="yes">
                    Product updates and announcements
                </label>
            </fieldset>
        </div>
        
        <div class="form-group">
            <fieldset>
                <legend>Account Type:</legend>
                
                <label>
                    <input type="radio" name="accountType" value="personal" required>
                    Personal Account
                </label>
                
                <label>
                    <input type="radio" name="accountType" value="business" required>
                    Business Account
                </label>
                
                <label>
                    <input type="radio" name="accountType" value="nonprofit" required>
                    Non-profit Organization
                </label>
            </fieldset>
        </div>
    </fieldset>
    
    <!-- File upload with label -->
    <div class="form-group">
        <label for="profileImage">Profile Picture:</label>
        <input type="file" id="profileImage" name="profileImage" 
               accept=".jpg,.jpeg,.png" aria-describedby="imageHelp">
        <small id="imageHelp">Accepted formats: JPG, JPEG, PNG. Max size: 2MB.</small>
    </div>
    
    <!-- Form submission -->
    <div class="form-actions">
        <button type="submit">Update Profile</button>
        <button type="reset">Reset Changes</button>
    </div>
</form>`},Buttons:{name:"Buttons",description:"HTML button elements provide interactive controls for user actions and form submissions.",theory:`Buttons are essential interactive elements in web interfaces:

Button types:
• button: Generic clickable button
• submit: Submits form data
• reset: Resets form to initial state
• Custom buttons with JavaScript events

Implementation options:
• <button> element (recommended)
• <input type="button/submit/reset">
• <a> styled as button (for navigation)

Accessibility considerations:
• Use semantic button elements
• Provide clear, descriptive text
• Ensure keyboard navigation works
• Use ARIA labels when necessary
• Consider focus states and contrast

Best practices:
• Use button for actions, links for navigation
• Provide visual feedback on interaction
• Make buttons large enough for touch devices
• Use consistent styling across site`,syntax:`<!-- Basic button element -->
<button type="button">Click Me</button>

<!-- Form submission buttons -->
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>

<!-- Input-based buttons -->
<input type="button" value="Click Me">
<input type="submit" value="Submit">
<input type="reset" value="Reset">

<!-- Button with attributes -->
<button type="button" id="myButton" class="primary" disabled>
    Disabled Button
</button>`,example:`<form action="/order" method="POST">
    <h2>Order Confirmation</h2>
    
    <!-- Product selection -->
    <fieldset>
        <legend>Select Products</legend>
        
        <label>
            <input type="checkbox" name="products" value="laptop">
            Laptop - $999
        </label>
        
        <label>
            <input type="checkbox" name="products" value="mouse">
            Wireless Mouse - $29
        </label>
        
        <label>
            <input type="checkbox" name="products" value="keyboard">
            Mechanical Keyboard - $149
        </label>
    </fieldset>
    
    <!-- Action buttons with different purposes -->
    <div class="button-group">
        <!-- Primary action button -->
        <button type="submit" class="btn-primary">
            Place Order
        </button>
        
        <!-- Secondary action button -->
        <button type="button" class="btn-secondary" onclick="calculateTotal()">
            Calculate Total
        </button>
        
        <!-- Reset button -->
        <button type="reset" class="btn-outline">
            Clear Selections
        </button>
        
        <!-- Cancel button (navigation) -->
        <button type="button" class="btn-danger" onclick="window.history.back()">
            Cancel Order
        </button>
    </div>
</form>

<!-- Interactive buttons outside forms -->
<div class="interactive-demo">
    <h3>Interactive Button Examples</h3>
    
    <!-- Toggle button -->
    <button type="button" id="toggleBtn" onclick="toggleTheme()">
        🌙 Switch to Dark Mode
    </button>
    
    <!-- Counter button -->
    <div class="counter">
        <button type="button" onclick="decrement()">-</button>
        <span id="count">0</span>
        <button type="button" onclick="increment()">+</button>
    </div>
    
    <!-- Modal trigger button -->
    <button type="button" onclick="openModal()" aria-haspopup="dialog">
        Open Settings
    </button>
    
    <!-- Download button -->
    <button type="button" onclick="downloadFile()">
        📥 Download Report
    </button>
    
    <!-- Loading button with state -->
    <button type="button" id="loadBtn" onclick="loadData()">
        <span class="btn-text">Load Data</span>
        <span class="btn-spinner" style="display: none;">Loading...</span>
    </button>
    
    <!-- Disabled button with explanation -->
    <button type="button" disabled title="Complete the form to enable this button">
        Submit Application
    </button>
    
    <!-- Button with icon and text -->
    <button type="button" class="btn-icon">
        <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Add New Item
    </button>
</div>

<script>
// Example JavaScript for button interactions
let count = 0;
let isDarkMode = false;

function increment() {
    count++;
    document.getElementById('count').textContent = count;
}

function decrement() {
    count--;
    document.getElementById('count').textContent = count;
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const btn = document.getElementById('toggleBtn');
    btn.textContent = isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode';
    document.body.classList.toggle('dark-mode');
}

function calculateTotal() {
    // Calculate order total logic
    alert('Total calculation would happen here');
}

function openModal() {
    alert('Modal would open here');
}

function downloadFile() {
    alert('File download would start here');
}

function loadData() {
    const btn = document.getElementById('loadBtn');
    const text = btn.querySelector('.btn-text');
    const spinner = btn.querySelector('.btn-spinner');
    
    btn.disabled = true;
    text.style.display = 'none';
    spinner.style.display = 'inline';
    
    // Simulate loading
    setTimeout(() => {
        btn.disabled
        text.style.display = 'inline';
        spinner.style.display = 'none';
    }, 2000);
}
<\/script>`},"Form Validation":{name:"Form Validation",description:"HTML5 form validation provides built-in client-side validation for better user experience and data quality.",theory:`Form validation ensures data quality and improves user experience:

HTML5 validation features:
• Built-in validation for input types
• Required attribute for mandatory fields
• Pattern attribute for custom validation
• Min/max attributes for numbers and dates
• Custom validation messages
• CSS pseudo-classes for styling states

Validation states:
• :valid - field contains valid data
• :invalid - field contains invalid data
• :required - field is required
• :optional - field is optional

JavaScript validation:
• Custom validation logic
• Real-time validation feedback
• Form submission prevention
• Better user experience

Best practices:
• Combine client and server-side validation
• Provide clear error messages
• Validate on appropriate events
• Don't rely solely on client-side validation`,syntax:`<!-- Required field validation -->
<input type="text" name="username" required>

<!-- Email validation -->
<input type="email" name="email" required>

<!-- Pattern validation -->
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">

<!-- Number range validation -->
<input type="number" min="1" max="100" required>

<!-- Length validation -->
<input type="text" minlength="8" maxlength="20" required>

<!-- Custom validation message -->
<input type="email" required 
       oninvalid="this.setCustomValidity('Please enter a valid email')"
       oninput="this.setCustomValidity('')">`,example:`<!-- Registration form with validation -->
<form id="registrationForm" novalidate>
    <div class="form-group">
        <label for="username">Username *</label>
        <input type="text" id="username" name="username" required
               minlength="3" maxlength="20"
               pattern="[a-zA-Z0-9_]+"
               title="Username must be 3-20 characters, letters, numbers, and underscores only">
        <div class="error-message" id="usernameError"></div>
    </div>
    
    <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" required>
        <div class="error-message" id="emailError"></div>
    </div>
    
    <div class="form-group">
        <label for="password">Password *</label>
        <input type="password" id="password" name="password" required
               minlength="8"
               pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}"
               title="Password must be at least 8 characters with uppercase, lowercase, number, and special character">
        <div class="error-message" id="passwordError"></div>
    </div>
    
    <div class="form-group">
        <label for="age">Age *</label>
        <input type="number" id="age" name="age" required
               min="13" max="120">
        <div class="error-message" id="ageError"></div>
    </div>
    
    <div class="form-group">
        <label>
            <input type="checkbox" id="terms" name="terms" required>
            I agree to the Terms of Service *
        </label>
        <div class="error-message" id="termsError"></div>
    </div>
    
    <button type="submit">Create Account</button>
</form>

/* CSS for validation styling */
input:valid { border-color: #28a745; }
input:invalid { border-color: #dc3545; }
.error-message { color: #dc3545; font-size: 0.875rem; }`},"CSS Syntax":{name:"CSS Syntax",description:"Understanding the fundamental syntax and structure of CSS rules and declarations.",theory:`CSS syntax consists of selectors, properties, and values organized into rules:

Basic structure:
• Selector: targets HTML elements
• Declaration block: contains style rules
• Property: aspect to style (color, font-size, etc.)
• Value: how to style the property
• Semicolon: separates declarations
• Curly braces: enclose declaration block

Comments in CSS:
• Use /* comment */ format
• Can span multiple lines
• Help document your styles
• Ignored by browser

Best practices:
• Use consistent indentation
• Organize properties logically
• Group related rules together
• Use meaningful class and ID names`,syntax:`/* CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Examples */
h1 {
    color: blue;
    font-size: 24px;
}

.my-class {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 5px;
}

#unique-id {
    width: 100%;
    text-align: center;
}`,example:`/* Complete CSS example with various syntax elements */

/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element selectors */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
}

h1, h2, h3 {
    margin-bottom: 1rem;
    font-weight: bold;
}

/* Class selectors */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

/* ID selectors */
#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
}

#navigation {
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e0e0e0;
    z-index: 1000;
}

/* Multiple selectors */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    color: #2c3e50;
}

/* Descendant selectors */
.card p {
    margin-bottom: 1rem;
    color: #666;
}

.navigation ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

.navigation ul li {
    margin: 0 1rem;
}

/* Comments for organization */
/* =================================
   UTILITY CLASSES
   ================================= */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 2rem; }

/* =================================
   RESPONSIVE DESIGN
   ================================= */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    .btn {
        width: 100%;
        text-align: center;
    }
}`},Properties:{name:"Properties",description:"CSS properties define what aspect of an element to style, from colors to layout to animations.",theory:`CSS properties control different aspects of element appearance and behavior:

Text properties:
• color: text color
• font-family: typeface
• font-size: text size
• font-weight: text thickness
• text-align: horizontal alignment
• text-decoration: underlines, strikethrough

Box properties:
• width, height: element dimensions
• padding: inner spacing
• margin: outer spacing
• border: element outline
• background: element background

Layout properties:
• display: element type (block, inline, flex)
• position: positioning method
• float: text wrapping
• z-index: stacking order

Visual effects:
• opacity: transparency
• transform: 2D/3D transformations
• transition: smooth property changes
• animation: keyframe animations`,syntax:`/* Text properties */
color: red;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;

/* Box properties */
width: 300px;
height: 200px;
padding: 20px;
margin: 10px;
border: 1px solid black;
background-color: lightblue;

/* Layout properties */
display: flex;
position: relative;
float: left;
z-index: 10;

/* Effects */
opacity: 0.8;
transform: rotate(45deg);
transition: all 0.3s ease;`,example:`/* Comprehensive example showcasing various CSS properties */

/* Typography properties */
.heading {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    text-transform: uppercase;
    color: #2c3e50;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* Box model properties */
.card {
    width: 350px;
    max-width: 100%;
    height: auto;
    min-height: 200px;
    padding: 2rem;
    margin: 1rem auto;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    background-color: #ffffff;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Layout properties */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
}

/* Positioning properties */
.sticky-nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

.floating-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
}

/* Visual effect properties */
.interactive-element {
    opacity: 0.9;
    transform: translateY(0) scale(1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    filter: brightness(1) contrast(1);
}

.interactive-element:hover {
    opacity: 1;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    filter: brightness(1.1) contrast(1.1);
}

/* Animation properties */
.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Responsive properties */
.responsive-text {
    font-size: clamp(1rem, 4vw, 3rem);
    line-height: clamp(1.2, 1.5, 1.8);
}

.responsive-container {
    width: min(90%, 1200px);
    padding: clamp(1rem, 5vw, 3rem);
}

/* Modern CSS properties */
.modern-card {
    aspect-ratio: 16/9;
    container-type: inline-size;
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(209, 213, 219, 0.3);
    border-radius: 12px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`},Values:{name:"Values",description:"CSS values specify how properties should be styled, including units, colors, and keywords.",theory:`CSS values come in different types and formats:

Length units:
• Absolute: px, pt, in, cm, mm
• Relative: em, rem, %, vh, vw, vmin, vmax
• Modern: ch, ex, fr, svw, lvh

Color values:
• Keywords: red, blue, transparent
• Hex: #ff0000, #f00
• RGB: rgb(255, 0, 0), rgba(255, 0, 0, 0.5)
• HSL: hsl(0, 100%, 50%), hsla(0, 100%, 50%, 0.5)

Keywords:
• Global: inherit, initial, unset, revert
• Property-specific: auto, none, center
• Special: currentColor, transparent

Functions:
• calc(): mathematical calculations
• url(): external resources
• var(): CSS custom properties
• min(), max(), clamp(): responsive values`,syntax:`/* Length values */
width: 100px;          /* absolute pixel */
height: 50%;           /* relative percentage */
font-size: 1.2em;      /* relative to parent */
margin: 2rem;          /* relative to root font-size */
padding: 5vh;          /* relative to viewport height */

/* Color values */
color: red;                    /* keyword */
background: #3498db;           /* hex */
border-color: rgb(52, 152, 219);  /* rgb */
box-shadow: 0 0 10px rgba(0,0,0,0.3);  /* rgba */
outline-color: hsl(204, 70%, 53%);      /* hsl */

/* Keywords */
display: block;
position: relative;
margin: auto;
text-align: center;

/* Functions */
width: calc(100% - 40px);
background-image: url('image.jpg');
color: var(--primary-color);
font-size: clamp(1rem, 4vw, 3rem);`,example:`/* Comprehensive example of CSS values */

:root {
    /* CSS Custom Properties (variables) */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --text-dark: #2c3e50;
    --text-light: #ecf0f1;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

/* Length units examples */
.length-examples {
    /* Absolute units */
    width: 320px;              /* pixels */
    height: 2in;               /* inches */
    border-width: 1pt;         /* points */
    
    /* Relative units */
    font-size: 1.5rem;         /* relative to root font size */
    line-height: 1.6em;        /* relative to element font size */
    padding: 5%;               /* percentage of parent */
    margin: 2ch;               /* character width */
    
    /* Viewport units */
    min-height: 100vh;         /* viewport height */
    max-width: 90vw;           /* viewport width */
    gap: 5vmin;                /* smaller viewport dimension */
}

/* Color value examples */
.color-examples {
    /* Named colors */
    color: darkslateblue;
    border-color: transparent;
    
    /* Hex colors */
    background-color: #ffffff;    /* white */
    outline-color: #f39c12;       /* orange */
    
    /* RGB colors */
    box-shadow: 0 0 20px rgb(231, 76, 60);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    /* HSL colors */
    background: hsl(200, 70%, 50%);
    border: 3px solid hsla(120, 60%, 40%, 0.8);
    
    /* Modern color functions */
    background: color-mix(in srgb, var(--primary-color) 70%, white);
}

/* Function values */
.function-examples {
    /* calc() for calculations */
    width: calc(100% - 4rem);
    height: calc(100vh - 200px);
    font-size: calc(1rem + 0.5vw);
    
    /* min(), max(), clamp() for responsive design */
    width: min(90%, 1200px);
    font-size: max(1rem, 3vw);
    padding: clamp(1rem, 5%, 3rem);
    
    /* url() for external resources */
    background-image: url('../images/pattern.svg');
    cursor: url('custom-cursor.cur'), pointer;
    
    /* var() for custom properties */
    color: var(--primary-color);
    background: var(--secondary-color, #fallback);
    border-radius: var(--border-radius);
    
    /* Multiple backgrounds */
    background: 
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30.5%, rgba(255,255,255,0.1) 70%, transparent 70.5%),
        url('texture.jpg'),
        var(--primary-color);
}

/* Keyword values */
.keyword-examples {
    /* Global keywords */
    margin: auto;                /* centers block elements */
    color: inherit;              /* inherits from parent */
    background: initial;         /* browser default */
    
    /* Property-specific keywords */
    display: none;               /* hides element */
    position: static;            /* normal flow */
    overflow: hidden;            /* clips content */
    text-align: center;          /* centers text */
    
    /* Special keywords */
    color: currentColor;         /* current text color */
    background: transparent;     /* see-through */
}

/* Advanced value combinations */
.advanced-values {
    /* Complex background */
    background: 
        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
        linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    
    /* Complex transform */
    transform: 
        translateX(calc(50vw - 50%)) 
        rotate(45deg) 
        scale(1.2) 
        skew(5deg);
    
    /* Complex animation timing */
    animation: 
        slideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
        fadeIn 0.6s ease-in-out 0.2s both;
    
    /* Complex box shadow (multiple shadows) */
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12),
        0 1px 2px rgba(0,0,0,0.24),
        inset 0 0 0 1px rgba(255,255,255,0.1);
    
    /* Complex filter effects */
    filter: 
        brightness(1.1) 
        contrast(1.2) 
        saturate(1.3) 
        drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

/* Container queries with values */
@container (min-width: 400px) {
    .card {
        padding: clamp(1rem, 4cqi, 3rem);
        font-size: max(1rem, 2.5cqi);
    }
}`},Colors:{name:"Colors",description:"CSS provides multiple ways to specify colors for styling elements.",theory:`CSS offers several color systems and formats:

Color formats:
• Named colors: 147 predefined color names
• Hex notation: #RRGGBB or #RGB format
• RGB: Red, Green, Blue values (0-255)
• RGBA: RGB with alpha (transparency)
• HSL: Hue, Saturation, Lightness
• HSLA: HSL with alpha transparency

Color keywords:
• transparent: completely see-through
• currentColor: inherits text color
• inherit: uses parent element's color
• initial: browser default color

Color accessibility:
• Contrast ratios for readability
• Color blindness considerations
• Dark mode compatibility
• Sufficient color differentiation

Modern color features:
• CSS custom properties for color themes
• color-mix() for color blending
• Relative color syntax
• Wide gamut color spaces`,syntax:`/* Named colors */
color: red;
background-color: lightblue;
border-color: transparent;

/* Hex colors */
color: #FF0000;        /* red */
background: #3498DB;   /* blue */
border: #FFF;          /* white (shorthand) */

/* RGB colors */
color: rgb(255, 0, 0);              /* red */
background: rgba(52, 152, 219, 0.8); /* blue with transparency */

/* HSL colors */
color: hsl(0, 100%, 50%);           /* red */
background: hsla(210, 70%, 53%, 0.9); /* blue with transparency */

/* Special keywords */
color: currentColor;
background: transparent;
border-color: inherit;`,example:`/* Complete color system example */

:root {
    /* Color palette using different formats */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* Semantic color names */
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    --color-info: #06b6d4;
    
    /* Neutral colors */
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    
    /* Theme colors with transparency */
    --background-primary: rgba(255, 255, 255, 0.95);
    --background-secondary: rgba(248, 250, 252, 0.8);
    --text-primary: rgba(15, 23, 42, 0.9);
    --text-secondary: rgba(71, 85, 105, 0.8);
}

/* Named color examples */
.named-colors {
    color: darkslateblue;
    background-color: lavender;
    border: 2px solid mediumseagreen;
    outline-color: coral;
}

/* Hex color examples */
.hex-colors {
    /* Full hex notation */
    background: #ff6b6b;
    color: #ffffff;
    border-top: 3px solid #4ecdc4;
    
    /* Short hex notation */
    box-shadow: 0 0 10px #333;
    text-shadow: 1px 1px 2px #000;
}

/* RGB color examples */
.rgb-colors {
    /* Basic RGB */
    background-color: rgb(255, 107, 107);
    color: rgb(255, 255, 255);
    
    /* RGBA with transparency */
    background: rgba(78, 205, 196, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* HSL color examples */
.hsl-colors {
    /* Basic HSL */
    background-color: hsl(354, 100%, 82%);  /* red */
    color: hsl(0, 0%, 20%);                 /* dark gray */
    
    /* HSLA with transparency */
    background: hsla(174, 72%, 56%, 0.9);   /* teal */
    border: 2px solid hsla(240, 100%, 50%, 0.5); /* blue */
}

/* Color theme system */
.light-theme {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --border-color: #e2e8f0;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

.dark-theme {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --border-color: #334155;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Using theme colors */
.themed-component {
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px var(--shadow-color);
}

/* Gradient combinations */
.gradient-examples {
    /* Linear gradients */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    
    /* Radial gradients */
    background: radial-gradient(circle, #ff6b6b 0%, #4ecdc4 100%);
    
    /* Complex multi-stop gradient */
    background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 50%,
        #f093fb 100%
    );
    
    /* Conic gradient */
    background: conic-gradient(
        from 0deg,
        red 0deg 60deg,
        yellow 60deg 120deg,
        green 120deg 180deg,
        cyan 180deg 240deg,
        blue 240deg 300deg,
        magenta 300deg 360deg
    );
}

/* Color accessibility examples */
.accessible-colors {
    /* High contrast for readability */
    background: #ffffff;
    color: #2d3748;              /* WCAG AA compliant */
    
    /* Link colors with sufficient contrast */
    --link-color: #2b6cb0;       /* Blue with good contrast */
    --link-visited: #553c9a;     /* Purple for visited links */
    --link-hover: #2c5282;       /* Darker blue on hover */
}

/* Modern color features */
.modern-colors {
    /* Color mixing (future CSS) */
    background: color-mix(in srgb, #ff0000 30%, #0000ff);
    
    /* Relative color syntax (future CSS) */
    --accent: from var(--primary-color) srgb r g b / 0.8;
    
    /* Using currentColor for consistency */
    border: 2px solid currentColor;
    outline-color: currentColor;
}

/* Color animation */
.color-animation {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-size: 300% 300%;
    animation: colorShift 4s ease-in-out infinite;
}

@keyframes colorShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Color states for interactive elements */
.interactive {
    background: var(--primary-500);
    color: white;
    transition: all 0.2s ease;
}

.interactive:hover {
    background: var(--primary-600);
    transform: translateY(-1px);
}

.interactive:active {
    background: var(--primary-700);
    transform: translateY(0);
}

.interactive:focus {
    outline: 2px solid var(--primary-300);
    outline-offset: 2px;
}`},"Box Model":{name:"Box Model",description:"The CSS box model describes how elements are structured with content, padding, border, and margin.",theory:`The CSS box model is fundamental to understanding layout and spacing:

Box model components (from inside out):
• Content: actual text/images
• Padding: space between content and border
• Border: outline around padding
• Margin: space outside border

Box-sizing property:
• content-box (default): width/height applies to content only
• border-box: width/height includes padding and border
• Padding and border are added to specified dimensions

Visual debugging:
• Use browser dev tools to visualize box model
• * { border: 1px solid red; } shows all boxes
• outline doesn't affect layout (unlike border)

Common issues:
• Margin collapse between adjacent elements
• Padding vs margin usage
• Box-sizing affecting calculations`,syntax:`/* Box model properties */
width: 300px;
height: 200px;
padding: 20px;
border: 2px solid black;
margin: 10px;

/* Individual sides */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;

/* Shorthand notation */
padding: 10px 15px;        /* top/bottom left/right */
margin: 10px 15px 20px 5px; /* top right bottom left */

/* Box sizing */
box-sizing: border-box;    /* includes padding/border in width */
box-sizing: content-box;   /* default, width is content only */`,example:`/* Box model comprehensive example */

    /* Reset for consistent box model */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    */`},"API Calls":{name:"API Calls",description:"",theory:"",syntax:"",example:""},"ARIA Labels":{name:"ARIA Labels",description:"",theory:"",syntax:"",example:""},"Advanced Selectors":{name:"Advanced Selectors",description:"",theory:"",syntax:"",example:""},"Java Basics":{name:"Java Basics",description:"Java is a popular, object-oriented programming language known for its 'write once, run anywhere' philosophy.",theory:`Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It's designed to be platform-independent through the Java Virtual Machine (JVM).

Key characteristics:
• Object-oriented: Everything is based on objects and classes
• Platform-independent: Compiled to bytecode, runs on JVM
• Strongly typed: Variables must be declared with specific types
• Automatic memory management: Garbage collection handles memory
• Rich standard library: Extensive built-in functionality

Java program structure:
• Source code in .java files
• Compiled to .class files (bytecode)
• Executed by JVM
• Every application needs a main() method as entry point

Basic syntax rules:
• Case-sensitive
• Statements end with semicolons
• Code blocks enclosed in curly braces
• Comments: // for single line, /* */ for multi-line`,syntax:`// Declaration
let variableName;
const CONSTANT_NAME = value;

// Declaration with assignment
let message = "Hello";
const PI = 3.14159;

// Multiple declarations
let a, b, c;
let x = 1, y = 2, z = 3;`,example:`// Complete Java program
public class HelloWorld {
    // Main method - entry point of the program
    public static void main(String[] args) {
        // Variable declarations
        String greeting = "Hello, Java!";
        int year = 2024;
        double version = 17.0;
        boolean isRunning = true;
        
        // Output to console
        System.out.println(greeting);
        System.out.println("Year: " + year);
        System.out.println("Java version: " + version);
        System.out.println("Program running: " + isRunning);
        
        // Method call
        displayMessage("Welcome to Java programming!");
    }
    
    // Custom method
    public static void displayMessage(String message) {
        System.out.println("Message: " + message);
    }
}`},"Classes and Objects":{name:"Classes and Objects",description:"Classes are blueprints for creating objects, and objects are instances of classes that contain data and methods.",theory:`Object-Oriented Programming (OOP) in Java is based on classes and objects.

Classes:
• Blueprints or templates for creating objects
• Define attributes (fields) and behaviors (methods)
• Use 'class' keyword to define
• Should start with capital letter (convention)

Objects:
• Instances of classes
• Created using 'new' keyword
• Have their own copy of instance variables
• Can call methods defined in their class

Key concepts:
• Encapsulation: Hide internal details, expose through methods
• Constructor: Special method to initialize objects
• this keyword: Refers to current object instance
• Access modifiers: public, private, protected, package-private

Instance vs Static:
• Instance members: Belong to specific object instances
• Static members: Belong to the class itself, shared by all instances`,syntax:`// Class definition
public class ClassName {
    // Fields (attributes)
    private dataType fieldName;
    
    // Constructor
    public ClassName(parameters) {
        this.fieldName = value;
    }
    
    // Methods
    public returnType methodName(parameters) {
        return value;
    }
}

// Creating objects
ClassName objectName = new ClassName(arguments);`,example:`// Person class definition
public class Person {
    // Private fields (encapsulation)
    private String name;
    private int age;
    private String email;
    
    // Constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    
    // Behavior method
    public void introduce() {
        System.out.println("Hi, I'm " + name + ", " + age + " years old.");
    }
    
    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}

// Using the class
public class Main {
    public static void main(String[] args) {
        // Create objects
        Person person1 = new Person("Alice", 25, "alice@example.com");
        Person person2 = new Person("Bob", 30, "bob@example.com");
        
        // Use objects
        person1.introduce();
        person2.introduce();
        
        // Modify object state
        person1.setAge(26);
        System.out.println(person1.toString());
    }
}`},"Python Syntax":{name:"Python Syntax",description:"Python syntax is clean and readable, using indentation to define code blocks and emphasizing simplicity.",theory:`Python is known for its clean, readable syntax that emphasizes code clarity and simplicity.

Key syntax features:
• Indentation defines code blocks (no curly braces)
• No semicolons needed at end of lines
• Dynamic typing: Variables don't need type declarations
• Case-sensitive: 'name' and 'Name' are different
• Snake_case naming convention for variables and functions

Indentation rules:
• Use consistent indentation (4 spaces recommended)
• All statements in same block must have same indentation
• Python will raise IndentationError for incorrect indentation

Comments:
• Single line: # This is a comment
• Multi-line: Triple quotes """ or '''

Python philosophy (The Zen of Python):
• Beautiful is better than ugly
• Explicit is better than implicit
• Simple is better than complex
• Readability counts`,syntax:`# Variable assignment
variable_name = value

# Function definition
def function_name(parameters):
    """Optional docstring"""
    # Indented code block
    return value

# Conditional statements
if condition:
    # Indented code
    pass
elif another_condition:
    # Indented code
    pass
else:
    # Indented code
    pass

# Loops
for item in iterable:
    # Indented code
    pass

while condition:
    # Indented code
    pass`,example:`# Python program demonstrating syntax
def greet_user(name, age=None):
    """
    Greets a user with their name and optionally their age.
    
    Args:
        name (str): The user's name
        age (int, optional): The user's age
    
    Returns:
        str: A greeting message
    """
    greeting = f"Hello, {name}!"
    
    if age is not None:
        if age < 18:
            greeting += " You're quite young!"
        elif age >= 65:
            greeting += " Respect your elders!"
       
        else:
            greeting += " Nice to meet you!"
    
    return greeting

# Variables and function calls
user_name = "Alice"
user_age = 25

# Function call
message = greet_user(user_name, user_age)
print(message)

# List and loop
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    square = num ** 2
    print(f"{num} squared is {square}")

# Dictionary example
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}

for key, value in person.items():
    print(f"{key}: {value}")`},"Data Types":{name:"Data Types",description:"Python has several built-in data types for storing different kinds of information, from numbers to complex data structures.",theory:`Python has several built-in data types that are used to store different kinds of data.

Numeric types:
• int: Whole numbers (unlimited precision)
• float: Decimal numbers (64-bit precision)
• complex: Complex numbers with real and imaginary parts

Text type:
• str: String of characters, immutable

Boolean type:
• bool: True or False values

Sequence types:
• list: Ordered, mutable collection [1, 2, 3]
• tuple: Ordered, immutable collection (1, 2, 3)
• range: Sequence of numbers range(5)

Mapping type:
• dict: Key-value pairs {"key": "value"}

Set types:
• set: Unordered collection of unique items {1, 2, 3}
• frozenset: Immutable set

Type checking:
• type() function returns the type of an object
• isinstance() checks if object is instance of specific type`,syntax:`# Numbers
integer = 42
floating_point = 3.14159
complex_number = 3 + 4j

# Strings
single_quotes = 'Hello'
double_quotes = "World"
multi_line = """This is a
multi-line string"""

# Boolean
is_true = True
is_false = False

# Collections
my_list = [1, 2, 3, 'mixed', True]
my_tuple = (1, 2, 3)
my_dict = {'key': 'value', 'number': 42}
my_set = {1, 2, 3, 3, 4, 4, 5}  # Duplicates removed

# Type checking
print(type(variable))
print(isinstance(variable, int))`,example:`# Demonstrating Python data types

# Numbers
age = 25                    # int
height = 5.9               # float
temperature = -10          # int (negative)
pi = 3.14159              # float
scientific = 1.5e-4       # float (scientific notation)

print(f"Age: {age} (type: {type(age).__name__})")
print(f"Height: {height} (type: {type(height).__name__})")

# Strings
name = "Alice Johnson"
quote = 'She said, "Hello!"'
paragraph = """This is a long
paragraph that spans
multiple lines."""

print(f"Name length: {len(name)}")
print(f"Uppercase name: {name.upper()}")

# Lists (mutable)
fruits = ['apple', 'banana', 'orange']
fruits.append('grape')
fruits[0] = 'pear'  # Modify existing item
print(f"Fruits: {fruits}")

# Tuples (immutable)
coordinates = (10, 20)
rgb_color = (255, 128, 0)
print(f"Coordinates: {coordinates}")

# Dictionaries
student = {
    'name': 'Bob',
    'age': 20,
    'grades': [85, 92, 78],
    'is_enrolled': True
}

print(f"Student name: {student['name']}")
print(f"Average grade: {sum(student['grades']) / len(student['grades'])}")

# Sets (unique values)
unique_numbers = {1, 2, 3, 3, 4, 4, 5}
print(f"Unique numbers: {unique_numbers}")  # {1, 2, 3, 4, 5}

# Type conversions
number_as_string = "42"
string_as_number = int(number_as_string)
print(f"Converted: {string_as_number} (type: {type(string_as_number).__name__})")`}},sm=()=>{const{language:a,levelId:c}=Rc(),u=_r(),{updateProgress:f,getProgress:h}=Hc(),[g,b]=M.useState(null),[P,k]=M.useState(!1);M.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a,c]);const S=la.find(F=>F.id===a),L=S?.levels.find(F=>F.id===parseInt(c||"0")),C=h(a||"");if(!S||!L)return s.jsx("div",{className:"min-h-screen flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Level Not Found"}),s.jsx("button",{onClick:()=>u("/"),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Go Back Home"})]})});const U=C?.completedLevels.includes(L.id)||!1,G=()=>{f(a,L.id)},Z=()=>{const F=S.levels.find(X=>X.id===L.id+1);u(F?`/${a}/level/${F.id}`:`/${a}`)},W=F=>{const X=am[F]??{name:F,description:"Content coming soon. Stay tuned!",theory:"Theory content for this topic is coming soon.",syntax:"",example:""};b(X),k(!0)},R=()=>{k(!1),b(null)},ie=(()=>{const F=L.topics;return F.length<=3?F.map(X=>`Explain ${X} with an example.`):[`Explain ${F[0]} and ${F[1]}.`,`Demonstrate use of ${F[2]} and ${F[3]||F[2]}.`,`Create a snippet incorporating ${F[4]||F[0]} and ${F[5]||F[1]}.`]})();return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:[s.jsx("div",{className:`bg-gradient-to-r ${S.gradient} text-white py-12`,children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("button",{onClick:()=>u(`/${a}`),className:"flex items-center text-white/80 hover:text-white mb-6 transition-colors",children:[s.jsx(Dc,{className:"w-5 h-5 mr-2"}),"Back to ",S.name," Track"]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center mb-2",children:[s.jsx("span",{className:"text-4xl mr-3",children:S.icon}),s.jsxs("span",{className:"text-lg text-white/80",children:["Level ",L.id]})]}),s.jsx("h1",{className:"text-4xl font-bold mb-2",children:L.title}),s.jsx("p",{className:"text-xl text-white/80",children:L.description})]}),U&&s.jsxs("div",{className:"flex items-center text-green-300",children:[s.jsx($i,{className:"w-8 h-8 mr-2"}),s.jsx("span",{className:"text-lg font-semibold",children:"Completed"})]})]})]})}),s.jsx("div",{className:"max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[s.jsx("div",{className:"lg:col-span-2",children:s.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 mb-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(Ac,{className:"w-6 h-6 text-blue-600 mr-3"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-gray-600",children:"Estimated Time"}),s.jsx("div",{className:"font-semibold",children:L.estimatedTime})]})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(Tr,{className:"w-6 h-6 text-green-600 mr-3"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-gray-600",children:"Topics"}),s.jsxs("div",{className:"font-semibold",children:[L.topics.length," Topics"]})]})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(Wi,{className:"w-6 h-6 text-yellow-600 mr-3"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-gray-600",children:"Difficulty"}),s.jsx("div",{className:"font-semibold capitalize",children:L.difficulty})]})]})]}),s.jsxs("div",{className:"mb-8",children:[s.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Topics Covered"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:L.topics.map((F,X)=>s.jsxs("button",{onClick:()=>W(F),className:"flex items-center p-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 rounded-lg transition-all duration-200 text-left group",children:[s.jsx(Tr,{className:"w-5 h-5 text-purple-600 mr-3 group-hover:text-purple-700"}),s.jsx("span",{className:"text-gray-800 group-hover:text-purple-900 font-medium",children:F})]},X))})]}),L.codeExample&&s.jsxs("div",{className:"mb-8",children:[s.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Code Example"}),s.jsx("div",{className:"bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto",children:s.jsx("pre",{className:"text-sm",children:s.jsx("code",{children:L.codeExample})})})]}),s.jsxs("div",{className:"border-t pt-8",children:[s.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Practice Exercise"}),s.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6",children:[s.jsx("p",{className:"text-gray-800 mb-4",children:"Practice the concepts from this level by implementing the code examples and experimenting with the topics covered. Try to understand each concept thoroughly before moving to the next level."}),s.jsxs("div",{className:"text-sm text-yellow-800",children:[s.jsx("strong",{children:"Tip:"})," Use your browser's developer tools to test JavaScript code, or try online editors for other languages!"]})]}),s.jsxs("div",{className:"practice-questions mb-6",children:[s.jsx("h4",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Practice Questions"}),s.jsx("ul",{className:"list-disc list-inside space-y-2",children:ie.map((F,X)=>s.jsx("li",{className:"text-gray-800",children:F},X))})]}),U?s.jsxs("button",{onClick:Z,className:"w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105",children:[s.jsx(Fc,{className:"w-6 h-6 inline mr-2"}),"Next Level"]}):s.jsxs("button",{onClick:G,className:"w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105",children:[s.jsx($i,{className:"w-6 h-6 inline mr-2"}),"Mark as Complete"]})]})]})}),s.jsxs("div",{className:"lg:col-span-1",children:[s.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8",children:[s.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Your Progress"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-1",children:[s.jsx("span",{children:"Track Progress"}),s.jsxs("span",{children:[C?.completedLevels.length||0,"/",S.totalLevels]})]}),s.jsx("div",{className:"bg-gray-200 rounded-full h-2",children:s.jsx("div",{className:`h-2 bg-gradient-to-r ${S.gradient} rounded-full transition-all duration-500`,style:{width:`${(C?.completedLevels.length||0)/S.totalLevels*100}%`}})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold text-gray-900",children:C?.totalXP||0}),s.jsx("div",{className:"text-sm text-gray-600",children:"Total XP Earned"})]})]})]}),s.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[s.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-4",children:"Level Navigation"}),s.jsx("div",{className:"space-y-2",children:S.levels.map(F=>s.jsxs("button",{onClick:()=>u(`/${a}/level/${F.id}`),className:`w-full text-left p-3 rounded-lg transition-colors ${F.id===L.id?"bg-blue-100 text-blue-800 border border-blue-200":C?.completedLevels.includes(F.id)?"bg-green-50 text-green-800 hover:bg-green-100":"text-gray-600 hover:bg-gray-50"}`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:"font-medium",children:["Level ",F.id]}),C?.completedLevels.includes(F.id)&&s.jsx($i,{className:"w-4 h-4 text-green-600"})]}),s.jsx("div",{className:"text-sm opacity-75",children:F.title})]},F.id))})]})]})]})}),s.jsx(om,{topic:g,isOpen:P,onClose:R})]})};function um(a={}){const{nonce:c,onScriptLoadSuccess:u,onScriptLoadError:f}=a,[h,g]=M.useState(!1),b=M.useRef(u);b.current=u;const P=M.useRef(f);return P.current=f,M.useEffect(()=>{const k=document.createElement("script");return k.src="https://accounts.google.com/gsi/client",k.async=!0,k.defer=!0,k.nonce=c,k.onload=()=>{var S;g(!0),(S=b.current)===null||S===void 0||S.call(b)},k.onerror=()=>{var S;g(!1),(S=P.current)===null||S===void 0||S.call(P)},document.body.appendChild(k),()=>{document.body.removeChild(k)}},[c]),h}const Vc=M.createContext(null);function cm({clientId:a,nonce:c,onScriptLoadSuccess:u,onScriptLoadError:f,children:h}){const g=um({nonce:c,onScriptLoadSuccess:u,onScriptLoadError:f}),b=M.useMemo(()=>({clientId:a,scriptLoadedSuccessfully:g}),[a,g]);return Lr.createElement(Vc.Provider,{value:b},h)}function dm(){const a=M.useContext(Vc);if(!a)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return a}function pm(a){var c;return(c=a?.clientId)!==null&&c!==void 0?c:a?.client_id}const fm={large:40,medium:32,small:20};function $c({onSuccess:a,onError:c,useOneTap:u,promptMomentNotification:f,type:h="standard",theme:g="outline",size:b="large",text:P,shape:k,logo_alignment:S,width:L,locale:C,click_listener:U,containerProps:G,...Z}){const W=M.useRef(null),{clientId:R,scriptLoadedSuccessfully:ie}=dm(),F=M.useRef(a);F.current=a;const X=M.useRef(c);X.current=c;const de=M.useRef(f);return de.current=f,M.useEffect(()=>{var Se,Ce,Pe,De,rt,Ke,ct,$e,ze;if(ie)return(Pe=(Ce=(Se=window?.google)===null||Se===void 0?void 0:Se.accounts)===null||Ce===void 0?void 0:Ce.id)===null||Pe===void 0||Pe.initialize({client_id:R,callback:ye=>{var Te;if(!ye?.credential)return(Te=X.current)===null||Te===void 0?void 0:Te.call(X);const{credential:be,select_by:pe}=ye;F.current({credential:be,clientId:pm(ye),select_by:pe})},...Z}),(Ke=(rt=(De=window?.google)===null||De===void 0?void 0:De.accounts)===null||rt===void 0?void 0:rt.id)===null||Ke===void 0||Ke.renderButton(W.current,{type:h,theme:g,size:b,text:P,shape:k,logo_alignment:S,width:L,locale:C,click_listener:U}),u&&((ze=($e=(ct=window?.google)===null||ct===void 0?void 0:ct.accounts)===null||$e===void 0?void 0:$e.id)===null||ze===void 0||ze.prompt(de.current)),()=>{var ye,Te,be;u&&((be=(Te=(ye=window?.google)===null||ye===void 0?void 0:ye.accounts)===null||Te===void 0?void 0:Te.id)===null||be===void 0||be.cancel())}},[R,ie,u,h,g,b,P,k,S,L,C]),Lr.createElement("div",{...G,ref:W,style:{height:fm[b],...G?.style}})}const mm=()=>{const a=_r(),{setAuthToken:c}=oa(),[u,f]=M.useState(null);return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white",children:s.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg w-full max-w-sm",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),u&&s.jsx("div",{className:"text-red-600 mb-4",children:u}),s.jsx($c,{onSuccess:h=>{h.credential&&(c(h.credential),a("/"))},onError:()=>f("Login Failed")}),s.jsxs("p",{className:"mt-4 text-center text-sm",children:["Don't have an account?"," ",s.jsx("button",{onClick:()=>a("/register"),className:"text-blue-600 hover:underline",children:"Register"})]})]})})},hm=()=>{const{setAuthToken:a}=oa(),c=_r(),[u,f]=M.useState(null),h=g=>{g.credential&&(a(g.credential),c("/"))};return s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white",children:s.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-lg w-full max-w-sm",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Register"}),u&&s.jsx("div",{className:"text-red-600 mb-4",children:u}),s.jsx($c,{onSuccess:h,onError:()=>f("Registration Failed")})]})})};function gm(){return s.jsx(rm,{children:s.jsx(cm,{clientId:"411571048636-s6lbcijvsck9la3kaltin5me4022mdt0.apps.googleusercontent.com",children:s.jsx(im,{children:s.jsx(Qf,{children:s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:s.jsxs($f,{children:[s.jsx(An,{path:"/login",element:s.jsx(mm,{})}),s.jsx(An,{path:"/register",element:s.jsx(hm,{})}),s.jsx(An,{path:"/",element:s.jsx(tm,{})}),s.jsx(An,{path:"/:language",element:s.jsx(lm,{})}),s.jsx(An,{path:"/:language/level/:levelId",element:s.jsx(sm,{})})]})})})})})})}Kp.createRoot(document.getElementById("root")).render(s.jsx(Lr.StrictMode,{children:s.jsx(gm,{})}));
