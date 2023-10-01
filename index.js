// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_MOBILE=r(e.require$$0)}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(t=(-o).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=o.toString(r),o||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,b=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,o=parseFloat(e.arg);if(!isFinite(o)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);o=e.arg}switch(e.specifier){case"e":case"E":t=o.toExponential(e.precision);break;case"f":case"F":t=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),t=o.toExponential(r)):t=o.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,b,"e+0$1"),t=g.call(t,d,"e-0$1"),e.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,v,"$1.e")),o>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):f.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var O=String.fromCharCode,E=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,c,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(s(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=T.exec(e);n;)(r=e.slice(o,T.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),o=T.lastIndex,n=T.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function V(e){return"string"==typeof e}function $(e){var r,t,n;if(!V(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,C=Object.prototype,B=C.toString,L=C.__defineGetter__,R=C.__defineSetter__,G=C.__lookupGetter__,M=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var Z=I;function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=X()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[J]=t:delete e[J],n}:function(e){return q.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return N(e)||re(e)}function ne(){return new Function("return this;")()}W(te,"isPrimitive",N),W(te,"isObject",re);var oe,ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;function se(e){if(arguments.length){if(!N(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ue)return ue;if(ie)return ie;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};var le=oe;var fe=/./,pe=se(),ge=pe.document&&pe.document.childNodes,be=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;function ve(e){return null!==e&&"object"==typeof e}W(de,"REGEXP",ye);var he=function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve);function we(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return ve(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(ve,"isObjectLikeArray",he);var me="function"==typeof fe||"object"==typeof be||"function"==typeof ge?function(e){return we(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?we(e).toLowerCase():r};function je(e){return"function"===me(e)}var _e,Se=Object,Oe=Object.getPrototypeOf;_e=je(Object.getPrototypeOf)?Oe:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ee=_e;var xe=Object.prototype;function ke(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!le(e)}(e)&&(r=function(e){return null==e?null:(e=Se(e),Ee(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&je(r.constructor)&&"[object Function]"===K(r.constructor)&&D(r,"isPrototypeOf")&&je(r.isPrototypeOf)&&(r===xe||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Ae(e){return"string"==typeof e}var Te=String.prototype.valueOf;var Fe=X();function Pe(e){return"object"==typeof e&&(e instanceof String||(Fe?function(e){try{return Te.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function Ve(e){return Ae(e)||Pe(e)}W(Ve,"isPrimitive",Ae),W(Ve,"isObject",Pe);var $e=Object.prototype.toString;var Ie=new Function("try {return this === global;} catch ( err ) {return false;}")(),Ce=e,Be=se(),Le=/node|io\.js/;var Re,Ge="object"==typeof global&&global===Be&&Be===Be.global&&("[object global]"===K(Be)||"[object Object]"===K(Be))&&!0===Ie&&"object"==typeof Ce&&"[object process]"===(Re=Ce,$e.call(Re))&&ke(Ce.versions)&&Ae(Ce.versions.node)&&(void 0===Ce.release||ke(Ce.release)&&Ae(Ce.release.name)&&Le.test(Ce.release.name));var Me=new Function("try {return this === window;} catch ( err ) {return false;}")(),Ze=se();var We=!1===Ge&&"object"==typeof window&&window===Ze&&!0===Me,Ne=se();return function(){return We&&Ne.navigator&&Ne.navigator.userAgent&&/Mobi/.test(Ne.navigator.userAgent)}}));
//# sourceMappingURL=index.js.map
