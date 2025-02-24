// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,v,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function T(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function E(e){var r,t,n,i,a,u,s,l,f,p,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,o;for(t=[],o=0,n=S.exec(e);n;)(r=e.slice(o,S.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=S.lastIndex,n=S.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return E.apply(null,r)}var P,F=Object.prototype,V=F.toString,L=F.__defineGetter__,$=F.__defineSetter__,C=F.__lookupGetter__,I=F.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(e,r)||I.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var M=P;function R(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return G&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&D.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,U="function"==typeof z?z.toStringTag:"";var X=N()?function(e){var r,t,n;if(null==e)return Z.call(e);t=e[U],r=W(e,U);try{e[U]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[U]=t:delete e[U],n}:function(e){return Z.call(e)},q=Boolean,H=Boolean.prototype.toString;var J=N();function K(e){return"object"==typeof e&&(e instanceof q||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===X(e)))}function Q(e){return B(e)||K(e)}R(Q,"isPrimitive",B),R(Q,"isObject",K);var Y="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},te="object"==typeof re?re:null,ne="object"==typeof globalThis?globalThis:null;function oe(e){if(arguments.length){if(!B(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(Y)return Y;if(ee)return ee;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}function ie(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function ae(){throw new Error("setTimeout has not been defined")}function ce(){throw new Error("clearTimeout has not been defined")}var ue=ae,se=ce;function le(e){if(ue===setTimeout)return setTimeout(e,0);if((ue===ae||!ue)&&setTimeout)return ue=setTimeout,setTimeout(e,0);try{return ue(e,0)}catch(r){try{return ue.call(null,e,0)}catch(r){return ue.call(this,e,0)}}}"function"==typeof re.setTimeout&&(ue=setTimeout),"function"==typeof re.clearTimeout&&(se=clearTimeout);var fe,pe=[],ge=!1,de=-1;function he(){ge&&fe&&(ge=!1,fe.length?pe=fe.concat(pe):de=-1,pe.length&&be())}function be(){if(!ge){var e=le(he);ge=!0;for(var r=pe.length;r;){for(fe=pe,pe=[];++de<r;)fe&&fe[de].run();de=-1,r=pe.length}fe=null,ge=!1,function(e){if(se===clearTimeout)return clearTimeout(e);if((se===ce||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(e);try{return se(e)}catch(r){try{return se.call(null,e)}catch(r){return se.call(this,e)}}}(e)}}function ve(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];pe.push(new ye(e,r)),1!==pe.length||ge||le(be)}function ye(e,r){this.fun=e,this.array=r}ye.prototype.run=function(){this.fun.apply(null,this.array)};var we="browser",me="browser",je={},_e=[],Te={},Oe={},Ee={};function Se(){}var ke=Se,xe=Se,Ae=Se,Pe=Se,Fe=Se,Ve=Se,Le=Se;function $e(e){throw new Error("process.binding is not supported")}function Ce(){return"/"}function Ie(e){throw new Error("process.chdir is not supported")}function Me(){return 0}var Re=re.performance||{},Be=Re.now||Re.mozNow||Re.msNow||Re.oNow||Re.webkitNow||function(){return(new Date).getTime()};function Ge(e){var r=.001*Be.call(Re),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Ne=new Date;function Ze(){return(new Date-Ne)/1e3}var De,We={nextTick:ve,title:we,browser:true,env:je,argv:_e,version:"",versions:Te,on:ke,addListener:xe,once:Ae,off:Pe,removeListener:Fe,removeAllListeners:Ve,emit:Le,binding:$e,cwd:Ce,chdir:Ie,umask:Me,hrtime:Ge,platform:me,release:Oe,config:Ee,uptime:Ze},ze=ie(Object.freeze({__proto__:null,addListener:xe,argv:_e,binding:$e,browser:true,chdir:Ie,config:Ee,cwd:Ce,default:We,emit:Le,env:je,hrtime:Ge,nextTick:ve,off:Pe,on:ke,once:Ae,platform:me,release:Oe,removeAllListeners:Ve,removeListener:Fe,title:we,umask:Me,uptime:Ze,version:"",versions:Te}));De=Array.isArray?Array.isArray:function(e){return"[object Array]"===X(e)};var Ue=De;var Xe=/./,qe=oe(),He=qe.document&&qe.document.childNodes,Je=Int8Array;function Ke(){return/^\s*function\s*([^(]*)/i}var Qe=/^\s*function\s*([^(]*)/i;function Ye(e){return null!==e&&"object"==typeof e}R(Ke,"REGEXP",Qe);var er=function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ye);function rr(e){var r,t,n,o;if(("Object"===(t=X(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Qe.exec(n.toString()))return r[1]}return Ye(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}R(Ye,"isObjectLikeArray",er);var tr="function"==typeof Xe||"object"==typeof Je||"function"==typeof He?function(e){return rr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?rr(e).toLowerCase():r};function nr(e){return"function"===tr(e)}var or,ir=Object,ar=Object.getPrototypeOf;or=nr(Object.getPrototypeOf)?ar:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===X(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var cr=or;var ur=Object.prototype;function sr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Ue(e)}(e)&&(r=function(e){return null==e?null:(e=ir(e),cr(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&nr(r.constructor)&&"[object Function]"===X(r.constructor)&&W(r,"isPrototypeOf")&&nr(r.isPrototypeOf)&&(r===ur||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function lr(e){return"string"==typeof e}var fr=String.prototype.valueOf;var pr=N();function gr(e){return"object"==typeof e&&(e instanceof String||(pr?function(e){try{return fr.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function dr(e){return lr(e)||gr(e)}R(dr,"isPrimitive",lr),R(dr,"isObject",gr);var hr=Object.prototype.toString;var br=new Function("try {return this === global;} catch ( err ) {return false;}")(),vr=ze,yr=oe(),wr=/node|io\.js/;var mr,jr="object"==typeof re&&re===yr&&yr===yr.global&&("[object global]"===X(yr)||"[object Object]"===X(yr))&&!0===br&&"object"==typeof vr&&"[object process]"===(mr=vr,hr.call(mr))&&sr(vr.versions)&&lr(vr.versions.node)&&(void 0===vr.release||sr(vr.release)&&lr(vr.release.name)&&wr.test(vr.release.name));var _r=new Function("try {return this === window;} catch ( err ) {return false;}")(),Tr=oe();var Or=!1===jr&&"object"==typeof window&&window===Tr&&!0===_r,Er=oe();function Sr(){return Or&&Er.navigator&&Er.navigator.userAgent&&/Mobi/.test(Er.navigator.userAgent)}export{Sr as default};
//# sourceMappingURL=mod.js.map
