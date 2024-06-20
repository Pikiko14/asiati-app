var tt=Object.defineProperty;var nt=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>(nt(e,typeof t!="symbol"?t+"":t,n),n);import{n as k,i as rt,a as st,c as Pe,b as ot,d as it,r as Q}from"./index.f19e594f.js";import{notification as A}from"./notification.42b47c46.js";function at(e){return rt(e)===!0?"__q_date|"+e.getTime():st(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function ct(e){if(e.length<9)return e;const n=e.substring(0,8),r=e.substring(9);switch(n){case"__q_date":const s=Number(r);return new Date(Number.isNaN(s)===!0?r:s);case"__q_expr":return new RegExp(r);case"__q_numb":return Number(r);case"__q_bool":return Boolean(r==="1");case"__q_strn":return""+r;case"__q_objt":return JSON.parse(r);default:return e}}function xe(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:k,setItem:k,remove:k,removeItem:k,clear:k,isEmpty:()=>!0}}function Ne(e){const t=window[e+"Storage"],n=o=>{const c=t.getItem(o);return c?ct(c):null},r=o=>t.getItem(o)!==null,s=(o,c)=>{t.setItem(o,at(c))},i=o=>{t.removeItem(o)};return{has:r,hasItem:r,getLength:()=>t.length,getItem:n,getIndex:o=>o<t.length?n(t.key(o)):null,getKey:o=>o<t.length?t.key(o):null,getAll:()=>{let o;const c={},l=t.length;for(let d=0;d<l;d++)o=t.key(d),c[o]=n(o);return c},getAllKeys:()=>{const o=[],c=t.length;for(let l=0;l<c;l++)o.push(t.key(l));return o},set:s,setItem:s,remove:i,removeItem:i,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const Ce=Pe.has.webStorage===!1?xe():Ne("local"),D={install({$q:e}){e.localStorage=Ce}};Object.assign(D,Ce);const Ie=Pe.has.webStorage===!1?xe():Ne("session"),v={install({$q:e}){e.sessionStorage=Ie}};Object.assign(v,Ie);class ue{constructor(t){X(this,"store");this.store=t}saveInStorage(t,n,r){return t==="local"?(D.set(n,r),!0):(v.set(n,r),!0)}getItemStorage(t,n){let r=null;return t=="local"?r=D.getItem(n)?D.getItem(n):null:r=v.getItem(n)?sessionStorage.getItem(n):null,r}deleteItemStorage(t,n){return t=="local"?D.remove(n):v.remove(n),null}setCookie(t,n,r){const s=new Date;s.setHours(s.getHours()+t);const i=encodeURIComponent(n)+"; expires="+s.toUTCString()+"; path=/";return document.cookie=`${r}=${i}`,null}getCookie(t){const n=t+"=",s=decodeURIComponent(document.cookie).split(";");for(let i=0;i<s.length;i++){let o=s[i];for(;o.charAt(0)===" ";)o=o.substring(1);if(o.indexOf(n)===0)return o.substring(n.length,o.length)}return null}removeCookie(t){document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain="+window.location.hostname+";"}}function Fe(e,t){return function(){return e.apply(t,arguments)}}const{toString:ut}=Object.prototype,{getPrototypeOf:le}=Object,J=(e=>t=>{const n=ut.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:B}=Array,U=V("undefined");function lt(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=O("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const dt=V("string"),E=V("function"),ke=V("number"),W=e=>e!==null&&typeof e=="object",ht=e=>e===!0||e===!1,$=e=>{if(J(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pt=O("Date"),mt=O("File"),gt=O("Blob"),yt=O("FileList"),wt=e=>W(e)&&E(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=J(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},bt=O("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const De=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Ue=e=>!U(e)&&e!==De;function se(){const{caseless:e}=Ue(this)&&this||{},t={},n=(r,s)=>{const i=e&&Le(t,s)||s;$(t[i])&&$(r)?t[i]=se(t[i],r):$(r)?t[i]=se({},r):B(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,i)=>{n&&E(s)?e[i]=Fe(s,n):e[i]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),At=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_t=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&le(Uint8Array)),Nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},It=O("HTMLFormElement"),Ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Bt=O("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},kt=e=>{je(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},Ut=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",ye="0123456789",qe={DIGIT:ye,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+ye},jt=(e=16,t=qe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=B(r)?[]:{};return j(r,(o,c)=>{const l=n(o,s+1);!U(l)&&(i[c]=l)}),t[s]=void 0,i}}return r};return n(e,0)},$t=O("AsyncFunction"),Ht=e=>e&&(W(e)||E(e))&&E(e.then)&&E(e.catch);var a={isArray:B,isArrayBuffer:Be,isBuffer:lt,isFormData:St,isArrayBufferView:ft,isString:dt,isNumber:ke,isBoolean:ht,isObject:W,isPlainObject:$,isUndefined:U,isDate:pt,isFile:mt,isBlob:gt,isRegExp:Bt,isFunction:E,isStream:wt,isURLSearchParams:bt,isTypedArray:xt,isFileList:yt,forEach:j,merge:se,extend:Rt,trim:Et,stripBOM:Ot,inherits:At,toFlatObject:_t,kindOf:J,kindOfTest:O,endsWith:Tt,toArray:Pt,forEachEntry:Nt,matchAll:Ct,isHTMLForm:It,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:je,freezeMethods:kt,toObjectSet:Lt,toCamelCase:Ft,noop:Dt,toFiniteNumber:Ut,findKey:Le,global:De,isContextDefined:Ue,ALPHABET:qe,generateString:jt,isSpecCompliantForm:qt,toJSONObject:vt,isAsyncFn:$t,isThenable:Ht};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ve=m.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(m,$e);Object.defineProperty(ve,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(ve);return a.toFlatObject(e,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var Mt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,i){return s=He(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(oe)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,w){return!a.isUndefined(w[p])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!l&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function f(h,p,w){let S=h;if(h&&!w&&typeof h=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&zt(h)||(a.isFileList(h)||a.endsWith(p,"[]"))&&(S=a.toArray(h)))return p=He(p),S.forEach(function(P,et){!(a.isUndefined(P)||P===null)&&t.append(o===!0?we([p],et,i):o===null?p:p+"[]",d(P))}),!1}return oe(h)?!0:(t.append(we(w,p,i),d(h)),!1)}const u=[],y=Object.assign(Jt,{defaultVisitor:f,convertValue:d,isVisitable:oe});function b(h,p){if(!a.isUndefined(h)){if(u.indexOf(h)!==-1)throw Error("Circular reference detected in "+p.join("."));u.push(h),a.forEach(h,function(S,T){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(T)?T.trim():T,p,y))===!0&&b(S,p?p.concat(T):[T])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fe(e,t){this._pairs=[],e&&K(e,this,t)}const Me=fe.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var be=Wt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kt=typeof URLSearchParams!="undefined"?URLSearchParams:fe,Gt=typeof FormData!="undefined"?FormData:null,Xt=typeof Blob!="undefined"?Blob:null,Qt={isBrowser:!0,classes:{URLSearchParams:Kt,FormData:Gt,Blob:Xt},protocols:["http","https","file","blob","url","data"]};const Ve=typeof window!="undefined"&&typeof document!="undefined",Zt=(e=>Ve&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Yt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ve,hasStandardBrowserWebWorkerEnv:Yt,hasStandardBrowserEnv:Zt},Symbol.toStringTag,{value:"Module"})),R={...en,...Qt};function tn(e,t){return K(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function We(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,l?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=rn(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}function sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const de={transitional:Je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return K(c?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),sn(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});var he=de;const on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var an=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Ee=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function H(e){return e===!1||e==null?e:a.isArray(e)?e.map(H):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,l,d){const f=L(l);if(!f)throw new Error("header name must be a non-empty string");const u=a.findKey(s,f);(!u||s[u]===void 0||d===!0||d===void 0&&s[u]!==!1)&&(s[u||l]=H(c))}const o=(c,l)=>a.forEach(c,(d,f)=>i(d,f,l));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!un(t)?o(an(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=L(o),o){const c=a.findKey(r,o);c&&(!n||Y(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Y(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=H(s),delete n[i];return}const c=t?ln(i):String(i).trim();c!==i&&delete n[i],n[c]=H(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=L(o);r[c]||(fn(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(G.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(G);var _=G;function ee(e,t){const n=this||he,r=t||n,s=_.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ke(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function dn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var hn=R.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!pn(t)?mn(e,t):t}var gn=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),f=r[i];o||(o=d),n[s]=l,r[s]=d;let u=i,y=0;for(;u!==s;)y+=n[u++],u=u%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-o<t)return;const b=f&&d-f;return b?Math.round(y*1e3/b):void 0}}function Re(e,t){let n=0;const r=wn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,l=r(c),d=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o&&d?(o-i)/l:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Sn=typeof XMLHttpRequest!="undefined";var bn=Sn&&function(e){return new Promise(function(n,r){let s=e.data;const i=_.from(e.headers).normalize();let{responseType:o,withXSRFToken:c}=e,l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(a.isFormData(s)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[p,...w]=f?f.split(";").map(S=>S.trim()).filter(Boolean):[];i.setContentType([p||"multipart/form-data",...w].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(p+":"+w))}const y=Ge(e.baseURL,e.url);u.open(e.method.toUpperCase(),ze(y,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function b(){if(!u)return;const p=_.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:e,request:u};dn(function(P){n(P),d()},function(P){r(P),d()},S),u=null}if("onloadend"in u?u.onloadend=b:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(b)},u.onabort=function(){!u||(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Je;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new m(w,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},R.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&gn(y))){const p=e.xsrfHeaderName&&e.xsrfCookieName&&hn.read(e.xsrfCookieName);p&&i.set(e.xsrfHeaderName,p)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(w,S){u.setRequestHeader(S,w)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Re(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=p=>{!u||(r(!p||p.type?new q(null,e,u):p),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=yn(y);if(h&&R.protocols.indexOf(h)===-1){r(new m("Unsupported protocol "+h+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})};const ie={http:Mt,xhr:bn};a.forEach(ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Oe=e=>`- ${e}`,En=e=>a.isFunction(e)||e===null||e===!1;var Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!En(n)&&(r=ie[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Oe).join(`
`):" "+Oe(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ie};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Ae(e){return te(e),e.headers=_.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||he.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=_.from(r.headers),r},function(r){return Ke(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=_.from(r.response.headers))),Promise.reject(r)})}const _e=e=>e instanceof _?{...e}:e;function F(e,t){t=t||{};const n={};function r(d,f,u){return a.isPlainObject(d)&&a.isPlainObject(f)?a.merge.call({caseless:u},d,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(d,f,u){if(a.isUndefined(f)){if(!a.isUndefined(d))return r(void 0,d,u)}else return r(d,f,u)}function i(d,f){if(!a.isUndefined(f))return r(void 0,f)}function o(d,f){if(a.isUndefined(f)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function c(d,f,u){if(u in t)return r(d,f);if(u in e)return r(void 0,d)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(d,f)=>s(_e(d),_e(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const u=l[f]||s,y=u(e[f],t[f],f);a.isUndefined(y)&&u!==c||(n[f]=y)}),n}const Qe="1.6.8",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Te={};pe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Te[o]&&(Te[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],l=c===void 0||o(c,i,e);if(l!==!0)throw new m("option "+i+" must be "+l,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}var ae={assertOptions:Rn,validators:pe};const x=ae.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=_.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(l=l&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const d=[];this.interceptors.response.forEach(function(p){d.push(p.fulfilled,p.rejected)});let f,u=0,y;if(!l){const h=[Ae.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,d),y=h.length,f=Promise.resolve(n);u<y;)f=f.then(h[u++],h[u++]);return f}y=c.length;let b=n;for(u=0;u<y;){const h=c[u++],p=c[u++];try{b=h(b)}catch(w){p.call(this,w);break}}try{f=Ae.call(this,b)}catch(h){return Promise.reject(h)}for(u=0,y=d.length;u<y;)f=f.then(d[u++],d[u++]);return f}getUri(t){t=F(this.defaults,t);const n=Ge(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});var M=z;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new q(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}var On=me;function An(e){return function(n){return e.apply(null,n)}}function _n(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});var Tn=ce;function Ze(e){const t=new M(e),n=Fe(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ze(F(e,s))},n}const g=Ze(he);g.Axios=M;g.CanceledError=q;g.CancelToken=On;g.isCancel=Ke;g.VERSION=Qe;g.toFormData=K;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=An;g.isAxiosError=_n;g.mergeConfig=F;g.AxiosHeaders=_;g.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Xe.getAdapter;g.HttpStatusCode=Tn;g.default=g;var Ye=g;const I=Ye.create({baseURL:"https://financiero.asiaticorp.com/api/v1"});var Pn=ot(async({app:e})=>{e.config.globalProperties.$axios=Ye,e.config.globalProperties.$api=I;const t=new ue("interceptor"),n=Nn();I.interceptors.response.use(void 0,async r=>{var s;if(((s=r.response)==null?void 0:s.status)===401&&(t.deleteItemStorage("local","user"),t.deleteItemStorage("local","session"),n.doLogout(),setTimeout(()=>{window.location.reload()},1500)),r.response)if(r.response.status===422){if(r){const{data:i}=r.response.data,{msg:o}=i.shift();A("negative",o,"red")}}else{if(r.response.status===500&&r.response.data&&r.response.data.data)return A("negative",r.response.data.data,"red"),!0;r.response.data.message?A("negative",r.response.data.message,"red"):r.response.data.error?A("negative",r.response.data.error,"red"):A("negative",r.response.statusText,"red")}else A("negative",r.message?r.message:"Algo ha ocurrio al intentar procesar esta solicitud","red");return Promise.reject(r)})}),Bn=Object.freeze(Object.defineProperty({__proto__:null,default:Pn,api:I},Symbol.toStringTag,{value:"Module"}));const N=new ue("api");class xn{constructor(t){X(this,"headers",{});this.headers=t}doRequest(t,n,r,s=!1){r==="get"&&this.doGetRequest(t,n,s),r==="post"&&this.doPostRequest(t,n,s)}doGetRequest(t,n,r){if(r){const s=N.getItemStorage("local","have_controll_user");this.headers={...this.headers,Authorization:`Bearer ${N.getItemStorage("local","session")||""}`,"Is-Supervisor":s?"Si":"No"}}return new Promise((s,i)=>{I.get(`${t}${n}`,{headers:this.headers}).then(o=>{s(o.data)}).catch(o=>{i(o)})})}doPostRequest(t,n,r,s=!1){const i=N.getItemStorage("local","have_controll_user");return r&&(this.headers={...this.headers,Authorization:`Bearer ${N.getItemStorage("local","session")||""}`,"Is-Supervisor":i?"Si":"No"}),s&&(this.headers={...this.headers,Content:"multipart/form-data"}),new Promise((o,c)=>{I.post(t,n,{headers:this.headers}).then(l=>{l.data.status===422&&(A("negative",l.data.message,"red-9"),c(l.data)),o(l.data)}).catch(l=>{c(l)})})}doDeleteRequest(t,n){if(n){const r=N.getItemStorage("local","have_controll_user");this.headers={...this.headers,Authorization:`Bearer ${N.getItemStorage("local","session")||""}`,"Is-Supervisor":r?"Si":"No"}}return new Promise((r,s)=>{I.delete(`${t}`,{headers:this.headers}).then(i=>{i.data.status===422&&(A("negative",i.data.message,"red-9"),s(i.data)),r(i.data)}).catch(i=>{s(i)})})}doPutRequest(t,n,r,s=!1){if(r){const i=N.getItemStorage("local","have_controll_user");this.headers={...this.headers,Authorization:`Bearer ${N.getItemStorage("local","session")||""}`,"Is-Supervisor":i?"Si":"No"}}return s&&(this.headers={...this.headers,Content:"multipart/form-data"}),new Promise((i,o)=>{const c=n.id?`${t}/${n.id}`:t;I.put(c,n,{headers:this.headers}).then(l=>{l.data.status===422&&(A("negative",l.data.message,"red-9"),o(l.data)),i(l.data)}).catch(l=>{o(l)})})}}const ne="auth",re=new xn({Accept:"application/json"}),C=new ue("auth"),Nn=it("authStore",()=>{const e=Q(""),t=Q(C.getItemStorage("local","session")||""),n=Q(C.getItemStorage("local","user")||{});return{user:n,token:t,now:e,doLogin:async c=>{try{C.deleteItemStorage("local","session"),C.deleteItemStorage("local","user");const l=await re.doPostRequest(`${ne}/login`,c,!1,!1);if(l.success){const{data:d}=l;return C.saveInStorage("local","user",d.user),C.saveInStorage("local","session",d.token),t.value=d.token,n.value=d.user,l}}catch{}},doLogout:()=>{try{return C.deleteItemStorage("local","session"),C.deleteItemStorage("local","user"),n.value={_id:"",username:"",name:"",last_name:"",email:"",scopes:[],password:""},t.value="",!0}catch(c){console.log(c)}},doChangePassword:async c=>{try{const l=await re.doPostRequest(`${ne}/change-password`,c,!1,!1);if(l.success)return l}catch(l){console.log(l)}},initRecoveryPassword:async c=>{try{const l=await re.doPostRequest(`${ne}/recovery`,c,!1,!1);if(l.success)return l}catch(l){console.log(l)}}}});export{xn as R,Bn as a,Nn as u};
