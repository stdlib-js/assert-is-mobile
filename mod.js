// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":s(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,h,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var T=String.fromCharCode,O=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,i,a,s,l,f,p;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(u(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=x.exec(e);n;)(r=e.slice(o,x.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),o=x.lastIndex,n=x.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function F(e){return"string"==typeof e}function V(e){var r,t,n;if(!F(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var L,$=Object.prototype,C=$.toString,I=$.__defineGetter__,M=$.__defineSetter__,B=$.__lookupGetter__,N=$.__lookupSetter__;L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var R=L;function G(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"boolean"==typeof e}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return D&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";var J=W()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[H],r=X(e,H);try{e[H]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[H]=t:delete e[H],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=W();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return Z(e)||ee(e)}function te(){return new Function("return this;")()}G(re,"isPrimitive",Z),G(re,"isObject",ee);var ne="object"==typeof self?self:null,oe="object"==typeof window?window:null,ie="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ae="object"==typeof ie?ie:null,ce="object"==typeof globalThis?globalThis:null;function ue(e){if(arguments.length){if(!Z(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ce)return ce;if(ne)return ne;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}function se(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function le(){throw new Error("setTimeout has not been defined")}function fe(){throw new Error("clearTimeout has not been defined")}var pe=le,ge=fe;function de(e){if(pe===setTimeout)return setTimeout(e,0);if((pe===le||!pe)&&setTimeout)return pe=setTimeout,setTimeout(e,0);try{return pe(e,0)}catch(r){try{return pe.call(null,e,0)}catch(r){return pe.call(this,e,0)}}}"function"==typeof ie.setTimeout&&(pe=setTimeout),"function"==typeof ie.clearTimeout&&(ge=clearTimeout);var be,he=[],ye=!1,ve=-1;function we(){ye&&be&&(ye=!1,be.length?he=be.concat(he):ve=-1,he.length&&me())}function me(){if(!ye){var e=de(we);ye=!0;for(var r=he.length;r;){for(be=he,he=[];++ve<r;)be&&be[ve].run();ve=-1,r=he.length}be=null,ye=!1,function(e){if(ge===clearTimeout)return clearTimeout(e);if((ge===fe||!ge)&&clearTimeout)return ge=clearTimeout,clearTimeout(e);try{ge(e)}catch(r){try{return ge.call(null,e)}catch(r){return ge.call(this,e)}}}(e)}}function je(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];he.push(new _e(e,r)),1!==he.length||ye||de(me)}function _e(e,r){this.fun=e,this.array=r}_e.prototype.run=function(){this.fun.apply(null,this.array)};var Te={},Oe=[],Ee={},Se={},ke={};function xe(){}var Ae=xe,Pe=xe,Fe=xe,Ve=xe,Le=xe,$e=xe,Ce=xe;function Ie(e){throw new Error("process.binding is not supported")}function Me(){return"/"}function Be(e){throw new Error("process.chdir is not supported")}function Ne(){return 0}var Re=ie.performance||{},Ge=Re.now||Re.mozNow||Re.msNow||Re.oNow||Re.webkitNow||function(){return(new Date).getTime()};function Ze(e){var r=.001*Ge.call(Re),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var De=new Date;function We(){return(new Date-De)/1e3}var ze,Ue={nextTick:je,title:"browser",browser:true,env:Te,argv:Oe,version:"",versions:Ee,on:Ae,addListener:Pe,once:Fe,off:Ve,removeListener:Le,removeAllListeners:$e,emit:Ce,binding:Ie,cwd:Me,chdir:Be,umask:Ne,hrtime:Ze,platform:"browser",release:Se,config:ke,uptime:We},Xe=se(Object.freeze({__proto__:null,addListener:Pe,argv:Oe,binding:Ie,browser:true,chdir:Be,config:ke,cwd:Me,default:Ue,emit:Ce,env:Te,hrtime:Ze,nextTick:je,off:Ve,on:Ae,once:Fe,platform:"browser",release:Se,removeAllListeners:$e,removeListener:Le,title:"browser",umask:Ne,uptime:We,version:"",versions:Ee}));ze=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var qe=ze;var He=/./,Je=ue(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array;function Ye(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;function rr(e){return null!==e&&"object"==typeof e}G(Ye,"REGEXP",er);var tr=function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!qe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(rr);function nr(e){var r,t,n,o;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=er.exec(n.toString()))return r[1]}return rr(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(rr,"isObjectLikeArray",tr);var or="function"==typeof He||"object"==typeof Qe||"function"==typeof Ke?function(e){return nr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?nr(e).toLowerCase():r};function ir(e){return"function"===or(e)}var ar,cr=Object,ur=Object.getPrototypeOf;ar=ir(Object.getPrototypeOf)?ur:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var sr=ar;var lr=Object.prototype;function fr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!qe(e)}(e)&&(r=function(e){return null==e?null:(e=cr(e),sr(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&ir(r.constructor)&&"[object Function]"===J(r.constructor)&&X(r,"isPrototypeOf")&&ir(r.isPrototypeOf)&&(r===lr||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function pr(e){return"string"==typeof e}var gr=String.prototype.valueOf;var dr=W();function br(e){return"object"==typeof e&&(e instanceof String||(dr?function(e){try{return gr.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function hr(e){return pr(e)||br(e)}G(hr,"isPrimitive",pr),G(hr,"isObject",br);var yr=Object.prototype.toString;var vr=new Function("try {return this === global;} catch ( err ) {return false;}")(),wr=Xe,mr=ue(),jr=/node|io\.js/;var _r,Tr="object"==typeof ie&&ie===mr&&mr===mr.global&&("[object global]"===J(mr)||"[object Object]"===J(mr))&&!0===vr&&"object"==typeof wr&&"[object process]"===(_r=wr,yr.call(_r))&&fr(wr.versions)&&pr(wr.versions.node)&&(void 0===wr.release||fr(wr.release)&&pr(wr.release.name)&&jr.test(wr.release.name));var Or=new Function("try {return this === window;} catch ( err ) {return false;}")(),Er=ue();var Sr=!1===Tr&&"object"==typeof window&&window===Er&&!0===Or,kr=ue();function xr(){return Sr&&kr.navigator&&kr.navigator.userAgent&&/Mobi/.test(kr.navigator.userAgent)}export{xr as default};
//# sourceMappingURL=mod.js.map
