(()=>{var e,t,n={433:(e,t,n)=>{"use strict";n.d(t,{H:()=>b,b:()=>R,h:()=>m,p:()=>c,r:()=>_});let r,o,s=!1;const l="undefined"!=typeof window?window:{},i=l.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),p=new WeakMap,d=e=>"sc-"+e.o,h={},f=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let r=null,o=!1,s=!1,l=[];const i=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?i(r):null!=r&&"boolean"!=typeof r&&((o="function"!=typeof e&&!f(r))&&(r+=""),o&&s?l[l.length-1].i+=r:l.push(o?y(null,r):r),s=o)};i(n);const a=y(e,null);return a.u=t,l.length>0&&(a.$=l),a},y=(e,t)=>({t:0,h:e,i:t,p:null,$:null,u:null}),b={},g=(e,t,n,r)=>{if(n!==r&&(t.toLowerCase(),"style"===t)){for(const t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}},w=(e,t,n,r)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.u||h,l=t.u||h;for(r in s)r in l||g(o,r,s[r],void 0);for(r in l)g(o,r,s[r],l[r])},v=(e,t,n)=>{let o,s,l=t.$[n],a=0;if(null!==l.i)o=l.p=i.createTextNode(l.i);else if(o=l.p=i.createElement(l.h),w(null,l),null!=r&&o["s-si"]!==r&&o.classList.add(o["s-si"]=r),l.$)for(a=0;a<l.$.length;++a)s=v(e,l,a),s&&o.appendChild(s);return o},S=(e,t,n,r,s,l)=>{let i,a=e;for(a.shadowRoot&&a.tagName===o&&(a=a.shadowRoot);s<=l;++s)r[s]&&(i=v(null,n,s),i&&(r[s].p=i,a.insertBefore(i,t)))},j=(e,t,n,r)=>{for(;t<=n;++t)(r=e[t])&&r.p.remove()},C=(e,t)=>e.h===t.h,k=(e,t)=>{const n=t.p=e.p,r=e.$,o=t.$,s=t.i;null===s?("slot"===t.h||w(e,t),null!==r&&null!==o?((e,t,n,r)=>{let o,s=0,l=0,i=t.length-1,a=t[0],c=t[i],u=r.length-1,p=r[0],d=r[u];for(;s<=i&&l<=u;)null==a?a=t[++s]:null==c?c=t[--i]:null==p?p=r[++l]:null==d?d=r[--u]:C(a,p)?(k(a,p),a=t[++s],p=r[++l]):C(c,d)?(k(c,d),c=t[--i],d=r[--u]):C(a,d)?(k(a,d),e.insertBefore(a.p,c.p.nextSibling),a=t[++s],d=r[--u]):C(c,p)?(k(c,p),e.insertBefore(c.p,a.p),c=t[--i],p=r[++l]):(o=v(t&&t[l],n,l),p=r[++l],o&&a.p.parentNode.insertBefore(o,a.p));s>i?S(e,null==r[u+1]?null:r[u+1].p,n,r,l,u):l>u&&j(t,s,i)})(n,r,t,o):null!==o?(null!==e.i&&(n.textContent=""),S(n,null,t,o,0,o.length-1)):null!==r&&j(r,0,r.length-1)):e.i!==s&&(n.data=s)},O=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},P=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.S),Q((()=>E(e,t)));e.t|=512},E=(e,t)=>{const n=e.g;return A(void 0,(()=>T(e,n,t)))},T=async(e,t,n)=>{const r=e.v,o=r["s-rc"];n&&(e=>{const t=e.M,n=e.v,r=t.t,o=((e,t)=>{let n=d(t),r=D.get(n);if(e=11===e.nodeType?e:i,r)if("string"==typeof r){let t,o=p.get(e=e.head||e);o||p.set(e,o=new Set),o.has(n)||(t=i.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e),M(e,t),o&&(o.map((e=>e())),r["s-rc"]=void 0);{const t=r["s-p"],n=()=>x(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},M=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2,((e,t)=>{const n=e.v,s=e.j||y(null,null),l=(e=>e&&e.h===b)(t)?t:m(null,null,t);o=n.tagName,l.h=null,l.t|=4,e.j=l,l.p=s.p=n.shadowRoot||n,r=n["s-sc"],k(s,l)})(e,t)}catch(t){F(t,e.v)}return null},x=e=>{const t=e.v,n=e.S;64&e.t||(e.t|=64,N(t),e.k(t),n||L()),e.m&&(e.m(),e.m=void 0),512&e.t&&J((()=>P(e,!1))),e.t&=-517},L=()=>{N(i.documentElement),J((()=>(e=>{const t=a.ce("appload",{detail:{namespace:"web-component"}});return e.dispatchEvent(t),t})(l)))},A=(e,t)=>e&&e.then?e.then(t):t(),N=e=>e.classList.add("hydrated"),$=(e,t,n)=>{if(t.C){const r=Object.entries(t.C),o=e.prototype;if(r.map((([e,[r]])=>{(31&r||2&n&&32&r)&&Object.defineProperty(o,e,{get(){return((e,t)=>U(this).O.get(t))(0,e)},set(n){((e,t,n,r)=>{const o=U(this),s=o.O.get(t),l=o.t,i=o.g;n=((e,t)=>null==e||f(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,r.C[t][0]),8&l&&void 0!==s||n===s||(o.O.set(t,n),i&&2==(18&l)&&P(o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,r){a.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))r=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==r)return;this[n]=(null!==r||"boolean"!=typeof this[n])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,n])=>{const r=n[1]||e;return t.set(r,e),r}))}}return e},R=(e,t={})=>{const n=[],r=t.exclude||[],o=l.customElements,s=i.head,c=s.querySelector("meta[charset]"),p=i.createElement("style"),h=[];let f,m=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],C:t[2],P:t[3]};s.C=t[2];const l=s.o,i=class extends HTMLElement{constructor(e){super(e),q(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),m?h.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=U(e),n=t.M,r=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.S=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,r,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=W(n)).then){const e=()=>{};o=await o,e()}o.isProxied||($(o,n,2),o.isProxied=!0);const r=()=>{};t.t|=8;try{new o(t)}catch(e){F(e)}t.t&=-9,r()}if(o.style){let e=o.style;const t=d(n);if(!D.has(t)){const r=()=>{};((e,t,n)=>{let r=D.get(e);u&&n?(r=r||new CSSStyleSheet,r.replace(t)):r=t,D.set(e,r)})(t,e,!!(1&n.t)),r()}}}const s=t.S,l=()=>P(t,!0);s&&s["s-rc"]?s["s-rc"].push(l):l()})(0,t,n)}r()}})(this)))}disconnectedCallback(){a.jmp((()=>{}))}componentOnReady(){return U(this).T}};s.A=e[0],r.includes(l)||o.get(l)||(n.push(l),o.define(l,$(i,s,1)))}))})),p.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),s.insertBefore(p,c?c.nextSibling:s.firstChild),m=!1,h.length?h.map((e=>e.connectedCallback())):a.jmp((()=>f=setTimeout(L,30)))},B=new WeakMap,U=e=>B.get(e),_=(e,t)=>B.set(t.g=e,t),q=(e,t)=>{const n={t:0,v:e,M:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],B.set(e,n)},F=(e,t)=>(0,console.error)(e,t),H=new Map,W=e=>{const t=e.o.replace(/-/g,"_"),r=e.A,o=H.get(r);return o?o[t]:n(265)(`./${r}.entry.js`).then((e=>(H.set(r,e),e[t])),F)},D=new Map,I=[],K=[],z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){F(e)}e.length=0},G=()=>{z(I),z(K),(s=I.length>0)&&a.raf(G)},J=e=>c().then(e),Q=((e,t)=>t=>{e.push(t),s||(s=!0,4&a.t?J(G):a.raf(G))})(K)},265:(e,t,n)=>{var r={"./p-6b785d93.entry.js":[463,463],"./p-c941815a.entry.js":[219,219]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=265,e.exports=o}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,o),s.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".main.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="web-components:",o.l=(n,r,s,l)=>{if(e[n])e[n].push(r);else{var i,a;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+s){i=p;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=n),e[n]=[r];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),a&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=s);var l=o.p+o.u(t),i=new Error;o.l(l,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+l+")",i.name="ChunkLoadError",i.type=s,i.request=l,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,s,[l,i,a]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);a&&a(o)}for(t&&t(n);c<l.length;c++)s=l[c],o.o(e,s)&&e[s]&&e[s][0](),e[l[c]]=0},n=self.webpackChunkweb_components=self.webpackChunkweb_components||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=o(433);(()=>{const t={};return t.resourcesUrl=new URL(".","file:///Users/saadnoorsalehin/git/bbx/plugins/WebKit/web-components/dist/web-component/web-component.esm.js").href,(0,e.p)(t)})().then((t=>(0,e.b)([["p-c941815a",[[1,"avatar-initial",{width:[2],height:[2],name:[1]}]]],["p-6b785d93",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]]],t)))})()})();