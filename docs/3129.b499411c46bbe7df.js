"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3129],{7464:(ee,I,b)=>{b.d(I,{E_:()=>S,F3:()=>H,I9:()=>T});var c=b(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var y=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(y||{});class T extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const g=r=>{var e,t,o,s,n;const a=r.CapacitorCustomPlatform||null,i=r.Capacitor||{},p=i.Plugins=i.Plugins||{},l=r.CapacitorPlatforms,U=(null===(e=null==l?void 0:l.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==a?a.name:(r=>{var e,t;return null!=r&&r.androidBridge?"android":null!==(t=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(r)),ae=(null===(t=null==l?void 0:l.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==U()),ce=(null===(o=null==l?void 0:l.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(d=>{const u=F.get(d);return!!(null!=u&&u.platforms.has(U())||Y(d))}),Y=(null===(s=null==l?void 0:l.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(d=>{var u;return null===(u=i.PluginHeaders)||void 0===u?void 0:u.find(j=>j.name===d)}),F=new Map,he=(null===(n=null==l?void 0:l.currentPlatform)||void 0===n?void 0:n.registerPlugin)||((d,u={})=>{const j=F.get(d);if(j)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),j.proxy;const O=U(),D=Y(d);let _;const pe=function(){var f=(0,c.A)(function*(){return!_&&O in u?_=_="function"==typeof u[O]?yield u[O]():u[O]:null!==a&&!_&&"web"in u&&(_=_="function"==typeof u.web?yield u.web():u.web),_});return function(){return f.apply(this,arguments)}}(),K=f=>{let m;const P=(...E)=>{const C=pe().then(v=>{const k=((f,m)=>{var P,E;if(!D){if(f)return null===(E=f[m])||void 0===E?void 0:E.bind(f);throw new T(`"${d}" plugin is not implemented on ${O}`,y.Unimplemented)}{const C=null==D?void 0:D.methods.find(v=>m===v.name);if(C)return"promise"===C.rtype?v=>i.nativePromise(d,m.toString(),v):(v,k)=>i.nativeCallback(d,m.toString(),v,k);if(f)return null===(P=f[m])||void 0===P?void 0:P.bind(f)}})(v,f);if(k){const M=k(...E);return m=null==M?void 0:M.remove,M}throw new T(`"${d}.${f}()" is not implemented on ${O}`,y.Unimplemented)});return"addListener"===f&&(C.remove=(0,c.A)(function*(){return m()})),C};return P.toString=()=>`${f.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:f,writable:!1,configurable:!1}),P},Z=K("addListener"),N=K("removeListener"),ve=(f,m)=>{const P=Z({eventName:f},m),E=function(){var v=(0,c.A)(function*(){const k=yield P;N({eventName:f,callbackId:k},m)});return function(){return v.apply(this,arguments)}}(),C=new Promise(v=>P.then(()=>v({remove:E})));return C.remove=(0,c.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield E()}),C},G=new Proxy({},{get(f,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return D?ve:Z;case"removeListener":return N;default:return K(m)}}});return p[d]=G,F.set(d,{name:d,proxy:G,platforms:new Set([...Object.keys(u),...D?[O]:[]])}),G});return i.convertFileSrc||(i.convertFileSrc=d=>d),i.getPlatform=U,i.handleError=d=>r.console.error(d),i.isNativePlatform=ae,i.isPluginAvailable=ce,i.pluginMethodNoop=(d,u,j)=>Promise.reject(`${j} does not have an implementation of "${u}".`),i.registerPlugin=he,i.Exception=T,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},L=(r=>r.Capacitor=g(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),H=L.registerPlugin;class S{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(t);const a=this.windowListeners[e];a&&!a.registered&&this.addWindowListener(a),s&&this.sendRetainedArgumentsForEvent(e);const i=function(){var l=(0,c.A)(function*(){return o.removeListener(e,t)});return function(){return l.apply(this,arguments)}}();return Promise.resolve({remove:i})}removeAllListeners(){var e=this;return(0,c.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t,o){const s=this.listeners[e];if(s)s.forEach(n=>n(t));else if(o){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new L.Exception(e,y.Unimplemented)}unavailable(e="not available"){return new L.Exception(e,y.Unavailable)}removeListener(e,t){var o=this;return(0,c.A)(function*(){const s=o.listeners[e];if(!s)return;const n=s.indexOf(t);o.listeners[e].splice(n,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}}const Q=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),X=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class te extends S{getCookies(){return(0,c.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=X(s).trim(),n=X(n).trim(),t[s]=n}),t})()}setCookie(e){return(0,c.A)(function*(){try{const t=Q(e.key),o=Q(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${n}; ${a};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,c.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,c.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,c.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}H("CapacitorCookies",{web:()=>new te});const re=function(){var r=(0,c.A)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const n=s.result;t(n.indexOf(",")>=0?n.split(",")[1]:n)},s.onerror=n=>o(n),s.readAsDataURL(e)})});return function(t){return r.apply(this,arguments)}}();class ie extends S{request(e){return(0,c.A)(function*(){const t=((r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),s=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,n,a)=>(s[n]=r[e[a]],s),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)t.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[a,i]of Object.entries(r.data||{}))n.set(a,i);t.body=n.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){const n=new FormData;if(r.data instanceof FormData)r.data.forEach((i,p)=>{n.append(p,i)});else for(const i of Object.keys(r.data))n.append(i,r.data[i]);t.body=n;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||"object"==typeof r.data)&&(t.body=JSON.stringify(r.data));return t})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,s)=>{const[n,a]=s;let i,p;return Array.isArray(a)?(p="",a.forEach(l=>{i=e?encodeURIComponent(l):l,p+=`${n}=${i}&`}),p.slice(0,-1)):(i=e?encodeURIComponent(a):a,p=`${n}=${i}`),`${o}&${p}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,n=yield fetch(s,t),a=n.headers.get("content-type")||"";let p,l,{responseType:i="text"}=n.ok?e:{};switch(a.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":l=yield n.blob(),p=yield re(l);break;case"json":p=yield n.json();break;default:p=yield n.text()}const x={};return n.headers.forEach((U,B)=>{x[B]=U}),{data:p,headers:x,status:n.status,url:n.url}})()}get(e){var t=this;return(0,c.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,c.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,c.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,c.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,c.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}H("CapacitorHttp",{web:()=>new ie})},3303:(ee,I,b)=>{b.d(I,{n:()=>z});var c=b(467),W=b(1626),q=b(6697),$=b(3953),V=b(5602);let z=(()=>{var w;class y{constructor(h,g){this.http=h,this.userser=g,this.apiUrl="https://todo.iraqsapp.com/todos",this.gettodosApi="https://todo.iraqsapp.com/todos"}addToDo(h){const g=this.userser.getAuthHeaders();return console.log("Headers:",g),this.http.post(this.apiUrl,h,{headers:g})}uploadImage(h){var g=this;return(0,c.A)(function*(){const A=localStorage.getItem("access_token"),L=new W.Lr({Authorization:`Bearer ${A}`}),J=yield(yield fetch(h)).blob(),R=new FormData;return R.append("image",J,"image.png"),g.http.post("https://todo.iraqsapp.com/upload/image",R,{headers:L}).toPromise()})()}toDos(h=1){const g=this.userser.getAuthHeaders();return console.log("Headers:",g),this.http.get(`${this.gettodosApi}?page=${h}`,{headers:g}).pipe((0,q.s)(1))}oneToDo(h){const g=this.userser.getAuthHeaders();return console.log("Headers:",g),this.http.get(`https://todo.iraqsapp.com/todos/${h}`,{headers:g})}deleteTodo(h){const g=this.userser.getAuthHeaders();return console.log("Headers:",g),this.http.delete(`https://todo.iraqsapp.com/todos/${h}`,{headers:g})}}return(w=y).\u0275fac=function(h){return new(h||w)($.KVO(W.Qq),$.KVO(V.g))},w.\u0275prov=$.jDH({token:w,factory:w.\u0275fac,providedIn:"root"}),y})()}}]);