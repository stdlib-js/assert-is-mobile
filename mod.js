// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,a=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,l,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,e)||a.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function l(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&v.call(t,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,n;if(null==t)return b.call(t);r=t[w],e=d(t,w);try{t[w]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[w]=r:delete t[w],n}:function(t){return b.call(t)},g=Boolean.prototype.toString;var h=y();function j(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function _(t){return s(t)||j(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",s),l(_,"isObject",j);var T="object"==typeof self?self:null,S="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof P?P:null;function E(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(T)return T;if(S)return S;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}function k(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}function L(){throw new Error("setTimeout has not been defined")}function B(){throw new Error("clearTimeout has not been defined")}var x=L,F=B;function M(t){if(x===setTimeout)return setTimeout(t,0);if((x===L||!x)&&setTimeout)return x=setTimeout,setTimeout(t,0);try{return x(t,0)}catch(e){try{return x.call(null,t,0)}catch(e){return x.call(this,t,0)}}}"function"==typeof P.setTimeout&&(x=setTimeout),"function"==typeof P.clearTimeout&&(F=clearTimeout);var N,D=[],V=!1,C=-1;function G(){V&&N&&(V=!1,N.length?D=N.concat(D):C=-1,D.length&&z())}function z(){if(!V){var t=M(G);V=!0;for(var e=D.length;e;){for(N=D,D=[];++C<e;)N&&N[C].run();C=-1,e=D.length}N=null,V=!1,function(t){if(F===clearTimeout)return clearTimeout(t);if((F===B||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(t);try{F(t)}catch(e){try{return F.call(null,t)}catch(e){return F.call(this,t)}}}(t)}}function I(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];D.push(new R(t,e)),1!==D.length||V||M(z)}function R(t,e){this.fun=t,this.array=e}R.prototype.run=function(){this.fun.apply(null,this.array)};var U={},X=[],q={},H={},J={};function K(){}var Q=K,W=K,Y=K,Z=K,$=K,tt=K,et=K;function rt(t){throw new Error("process.binding is not supported")}function nt(){return"/"}function ot(t){throw new Error("process.chdir is not supported")}function it(){return 0}var ut=P.performance||{},ct=ut.now||ut.mozNow||ut.msNow||ut.oNow||ut.webkitNow||function(){return(new Date).getTime()};function at(t){var e=.001*ct.call(ut),r=Math.floor(e),n=Math.floor(e%1*1e9);return t&&(r-=t[0],(n-=t[1])<0&&(r--,n+=1e9)),[r,n]}var ft=new Date;function lt(){return(new Date-ft)/1e3}var st,pt={nextTick:I,title:"browser",browser:true,env:U,argv:X,version:"",versions:q,on:Q,addListener:W,once:Y,off:Z,removeListener:$,removeAllListeners:tt,emit:et,binding:rt,cwd:nt,chdir:ot,umask:it,hrtime:at,platform:"browser",release:H,config:J,uptime:lt},yt=k(Object.freeze({__proto__:null,addListener:W,argv:X,binding:rt,browser:true,chdir:ot,config:J,cwd:nt,default:pt,emit:et,env:U,hrtime:at,nextTick:I,off:Z,on:Q,once:Y,platform:"browser",release:H,removeAllListeners:tt,removeListener:$,title:"browser",umask:it,uptime:lt,version:"",versions:q}));st=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var bt=st;var vt=/./,dt=E(),wt=dt.document&&dt.document.childNodes,mt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function jt(t){return null!==t&&"object"==typeof t}l(gt,"REGEXP",ht);var _t=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!bt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(jt);function Ot(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ht.exec(n.toString()))return e[1]}return jt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(jt,"isObjectLikeArray",_t);var Tt="function"==typeof vt||"object"==typeof mt||"function"==typeof wt?function(t){return Ot(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ot(t).toLowerCase():e};function St(t){return"function"===Tt(t)}var Pt,At=Object.getPrototypeOf;Pt=St(Object.getPrototypeOf)?At:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Et=Pt;var kt=Object.prototype;function Lt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!bt(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Et(t))}(t),!e||!d(t,"constructor")&&d(e,"constructor")&&St(e.constructor)&&"[object Function]"===m(e.constructor)&&d(e,"isPrototypeOf")&&St(e.isPrototypeOf)&&(e===kt||function(t){var e;for(e in t)if(!d(t,e))return!1;return!0}(t)))}function Bt(t){return"string"==typeof t}var xt=String.prototype.valueOf;var Ft=y();function Mt(t){return"object"==typeof t&&(t instanceof String||(Ft?function(t){try{return xt.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function Nt(t){return Bt(t)||Mt(t)}l(Nt,"isPrimitive",Bt),l(Nt,"isObject",Mt);var Dt=Object.prototype.toString;var Vt=new Function("try {return this === global;} catch ( err ) {return false;}")(),Ct=yt,Gt=E(),zt=/node|io\.js/;var It,Rt="object"==typeof P&&P===Gt&&Gt===Gt.global&&("[object global]"===m(Gt)||"[object Object]"===m(Gt))&&!0===Vt&&"object"==typeof Ct&&"[object process]"===(It=Ct,Dt.call(It))&&Lt(Ct.versions)&&Bt(Ct.versions.node)&&(void 0===Ct.release||Lt(Ct.release)&&Bt(Ct.release.name)&&zt.test(Ct.release.name));var Ut=new Function("try {return this === window;} catch ( err ) {return false;}")(),Xt=E();var qt=!1===Rt&&"object"==typeof window&&window===Xt&&!0===Ut,Ht=E();function Jt(){return qt&&Ht.navigator&&Ht.navigator.userAgent&&/Mobi/.test(Ht.navigator.userAgent)}export{Jt as default};
//# sourceMappingURL=mod.js.map
