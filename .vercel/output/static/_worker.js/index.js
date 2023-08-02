
		import('node:buffer').then(({ Buffer }) => {
			globalThis.Buffer = Buffer;
		})
		.catch(() => null);

		const __ENV_ALS_PROMISE__ = import('node:async_hooks').then(({ AsyncLocalStorage }) => {
			globalThis.AsyncLocalStorage = AsyncLocalStorage;

			const envAsyncLocalStorage = new AsyncLocalStorage();

			globalThis.process = {
				env: new Proxy(
					{},
					{
						get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
						set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value),
				}),
			};
			return envAsyncLocalStorage;
		})
		.catch(() => null);
	
var G=Object.create;var j=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var L=(e,t)=>()=>(e&&(t=e(e=0)),t);var H=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var X=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Z(t))!Q.call(e,a)&&a!==r&&j(e,a,{get:()=>t[a],enumerable:!(s=K(t,a))||s.enumerable});return e};var T=(e,t,r)=>(r=e!=null?G(J(e)):{},X(t||!e||!e.__esModule?j(r,"default",{value:e,enumerable:!0}):r,e));var l,h=L(()=>{l={version:3,routes:{none:[{src:"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$",headers:{Location:"/$1"},status:308,continue:!0},{src:"/_next/__private/trace",dest:"/404",status:404,continue:!0},{src:"/404/?",status:404,continue:!0,missing:[{type:"header",key:"x-prerender-revalidate"}]},{src:"/500",status:500,continue:!0},{src:"^/",has:[{type:"header",key:"rsc"}],dest:"/index.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"},continue:!0,override:!0},{src:"^/((?!.+\\.rsc).+?)(?:/)?$",has:[{type:"header",key:"rsc"}],dest:"/$1.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"},continue:!0,override:!0}],filesystem:[{src:"/_next/data/(.*)",dest:"/_next/data/$1",check:!0}],miss:[{src:"/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+",status:404,check:!0,dest:"$0"}],rewrite:[{src:"/_next/data/(.*)",dest:"/404",status:404}],resource:[{src:"/.*",status:404}],hit:[{src:"/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|CSuk5THTDRNxAJLzUkmyP)/.+",headers:{"cache-control":"public,max-age=31536000,immutable"},continue:!0,important:!0},{src:"/index",headers:{"x-matched-path":"/"},continue:!0,important:!0},{src:"/((?!index$).*)",headers:{"x-matched-path":"/$1"},continue:!0,important:!0}],error:[{src:"/.*",dest:"/404",status:404},{src:"/.*",dest:"/500",status:500}]},images:{domains:[],sizes:[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],remotePatterns:[],minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline"},overrides:{"404.html":{path:"404",contentType:"text/html; charset=utf-8"},"500.html":{path:"500",contentType:"text/html; charset=utf-8"}},framework:{version:"13.4.12"},crons:[]}});var p,d=L(()=>{p={"/404.html":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/500.html":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/_next/static/CSuk5THTDRNxAJLzUkmyP/_buildManifest.js":{type:"static"},"/_next/static/CSuk5THTDRNxAJLzUkmyP/_ssgManifest.js":{type:"static"},"/_next/static/chunks/222-3a33133dc6db0383.js":{type:"static"},"/_next/static/chunks/596-686cfb59dc1bc447.js":{type:"static"},"/_next/static/chunks/685-0f5f737c30b760f6.js":{type:"static"},"/_next/static/chunks/app/edgeRouteA/page-3ec9f85959f30bee.js":{type:"static"},"/_next/static/chunks/app/edgeRouteB/page-b35946b5b43e2e92.js":{type:"static"},"/_next/static/chunks/app/layout-714f48b5b7baa86a.js":{type:"static"},"/_next/static/chunks/app/nodejsRouteA/page-ac421d9383ec25a0.js":{type:"static"},"/_next/static/chunks/app/nodejsRouteB/page-faf4274697fadeb0.js":{type:"static"},"/_next/static/chunks/app/page-02d36194e1983eab.js":{type:"static"},"/_next/static/chunks/fd9d1056-5fc0659828b82348.js":{type:"static"},"/_next/static/chunks/framework-8883d1e9be70c3da.js":{type:"static"},"/_next/static/chunks/main-5169a7edb6ce1410.js":{type:"static"},"/_next/static/chunks/main-app-852b914475be1513.js":{type:"static"},"/_next/static/chunks/pages/_app-52924524f99094ab.js":{type:"static"},"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js":{type:"static"},"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js":{type:"static"},"/_next/static/chunks/webpack-2a553ccb29c26bcf.js":{type:"static"},"/_next/static/css/6ea270b7079408ce.css":{type:"static"},"/_next/static/css/e46ce5b101d356c2.css":{type:"static"},"/_next/static/media/2aaf0723e720e8b9-s.p.woff2":{type:"static"},"/_next/static/media/9c4f34569c9b36ca-s.woff2":{type:"static"},"/_next/static/media/ae9ae6716d4f8bf8-s.woff2":{type:"static"},"/_next/static/media/b1db3e28af9ef94a-s.woff2":{type:"static"},"/_next/static/media/b967158bc7d7a9fb-s.woff2":{type:"static"},"/_next/static/media/c0f5ec5bbf5913b7-s.woff2":{type:"static"},"/_next/static/media/d1d9458b69004127-s.woff2":{type:"static"},"/next.svg":{type:"static"},"/vercel.svg":{type:"static"},"/api/edgeHello":{type:"function",entrypoint:"__next-on-pages-dist__/functions/api/edgeHello.func.js"},"/edgeRouteA":{type:"function",entrypoint:"__next-on-pages-dist__/functions/edgeRouteA.func.js"},"/edgeRouteA.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/edgeRouteA.func.js"},"/edgeRouteB":{type:"function",entrypoint:"__next-on-pages-dist__/functions/edgeRouteB.func.js"},"/edgeRouteB.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/edgeRouteB.func.js"},"/404":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/500":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/api/nodejsHello":{type:"override",path:"/api/nodejsHello",headers:{"content-type":"text/plain;charset=UTF-8","x-next-cache-tags":"/api/nodejsHello/route",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/favicon.ico":{type:"override",path:"/favicon.ico",headers:{"cache-control":"public, max-age=0, must-revalidate","content-type":"image/x-icon","x-next-cache-tags":"/favicon.ico/route",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/index.html":{type:"override",path:"/index.html",headers:{"x-next-cache-tags":"/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/index":{type:"override",path:"/index.html",headers:{"x-next-cache-tags":"/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/":{type:"override",path:"/index.html",headers:{"x-next-cache-tags":"/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/index.rsc":{type:"override",path:"/index.rsc",headers:{"content-type":"text/x-component",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteA.html":{type:"override",path:"/nodejsRouteA.html",headers:{"x-next-cache-tags":"/nodejsRouteA/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteA":{type:"override",path:"/nodejsRouteA.html",headers:{"x-next-cache-tags":"/nodejsRouteA/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteA.rsc":{type:"override",path:"/nodejsRouteA.rsc",headers:{"content-type":"text/x-component",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteB.html":{type:"override",path:"/nodejsRouteB.html",headers:{"x-next-cache-tags":"/nodejsRouteB/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteB":{type:"override",path:"/nodejsRouteB.html",headers:{"x-next-cache-tags":"/nodejsRouteB/page",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}},"/nodejsRouteB.rsc":{type:"override",path:"/nodejsRouteB.rsc",headers:{"content-type":"text/x-component",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch"}}}});var V=H((Se,U)=>{"use strict";h();d();function R(e,t){e=String(e||"").trim();let r=e,s,a="";if(/^[^a-zA-Z\\\s]/.test(e)){s=e[0];let o=e.lastIndexOf(s);a+=e.substring(o+1),e=e.substring(1,o)}let n=0;return e=ee(e,o=>{if(/^\(\?[P<']/.test(o)){let c=/^\(\?P?[<']([^>']+)[>']/.exec(o);if(!c)throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);let u=o.substring(c[0].length,o.length-1);return t&&(t[n]=c[1]),n++,`(${u})`}return o.substring(0,3)==="(?:"||n++,o}),e=e.replace(/\[:([^:]+):\]/g,(o,c)=>R.characterClasses[c]||o),new R.PCRE(e,a,r,a,s)}function ee(e,t){let r=0,s=0,a=!1;for(let i=0;i<e.length;i++){let n=e[i];if(a){a=!1;continue}switch(n){case"(":s===0&&(r=i),s++;break;case")":if(s>0&&(s--,s===0)){let o=i+1,c=r===0?"":e.substring(0,r),u=e.substring(o),f=String(t(e.substring(r,o)));e=c+f+u,i=r}break;case"\\":a=!0;break;default:break}}return e}(function(e){class t extends RegExp{constructor(s,a,i,n,o){super(s,a),this.pcrePattern=i,this.pcreFlags=n,this.delimiter=o}}e.PCRE=t,e.characterClasses={alnum:"[A-Za-z0-9]",word:"[A-Za-z0-9_]",alpha:"[A-Za-z]",blank:"[ \\t]",cntrl:"[\\x00-\\x1F\\x7F]",digit:"\\d",graph:"[\\x21-\\x7E]",lower:"[a-z]",print:"[\\x20-\\x7E]",punct:"[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]",space:"\\s",upper:"[A-Z]",xdigit:"[A-Fa-f0-9]"}})(R||(R={}));R.prototype=R.PCRE.prototype;U.exports=R});var $=H(E=>{"use strict";h();d();E.parse=ce;E.serialize=ue;var oe=Object.prototype.toString,P=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ce(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},s=t||{},a=s.decode||he,i=0;i<e.length;){var n=e.indexOf("=",i);if(n===-1)break;var o=e.indexOf(";",i);if(o===-1)o=e.length;else if(o<n){i=e.lastIndexOf(";",n-1)+1;continue}var c=e.slice(i,n).trim();if(r[c]===void 0){var u=e.slice(n+1,o).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),r[c]=pe(u,a)}i=o+1}return r}function ue(e,t,r){var s=r||{},a=s.encode||de;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!P.test(e))throw new TypeError("argument name is invalid");var i=a(t);if(i&&!P.test(i))throw new TypeError("argument val is invalid");var n=e+"="+i;if(s.maxAge!=null){var o=s.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");n+="; Max-Age="+Math.floor(o)}if(s.domain){if(!P.test(s.domain))throw new TypeError("option domain is invalid");n+="; Domain="+s.domain}if(s.path){if(!P.test(s.path))throw new TypeError("option path is invalid");n+="; Path="+s.path}if(s.expires){var c=s.expires;if(!le(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");n+="; Expires="+c.toUTCString()}if(s.httpOnly&&(n+="; HttpOnly"),s.secure&&(n+="; Secure"),s.priority){var u=typeof s.priority=="string"?s.priority.toLowerCase():s.priority;switch(u){case"low":n+="; Priority=Low";break;case"medium":n+="; Priority=Medium";break;case"high":n+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(s.sameSite){var f=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(f){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return n}function he(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function de(e){return encodeURIComponent(e)}function le(e){return oe.call(e)==="[object Date]"||e instanceof Date}function pe(e,t){try{return t(e)}catch{return e}}});h();d();h();d();h();d();h();d();function _(e,{url:t,cookies:r,headers:s}){switch(e.type){case"host":return t.hostname===e.value;case"header":return e.value!==void 0?!!s.get(e.key)?.match(e.value):s.has(e.key);case"cookie":{let a=r[e.key];return e.value!==void 0?!!a?.match(e.value):a!==void 0}case"query":return e.value!==void 0?!!t.searchParams.get(e.key)?.match(e.value):t.searchParams.has(e.key)}}h();d();function M(e){let t=new Headers(e.headers);return e.cf&&(t.append("x-vercel-ip-city",e.cf.city),t.append("x-vercel-ip-country",e.cf.country),t.append("x-vercel-ip-country-region",e.cf.region),t.append("x-vercel-ip-latitude",e.cf.latitude),t.append("x-vercel-ip-longitude",e.cf.longitude)),new Request(e,{headers:t})}h();d();h();d();var A=T(V());function O(e,t,r){let s=r?"":"i",a=[];return{match:(0,A.default)(`%${e}%${s}`,a).exec(t),captureGroupKeys:a}}function b(e,t,r){return e.replace(/\$([a-zA-Z0-9]+)/g,(s,a)=>{let i=r.indexOf(a);return(i===-1?t[parseInt(a,10)]:t[i+1])||""})}function m(e,t,r){let s=t instanceof Headers?t.entries():Object.entries(t);for(let[a,i]of s){let n=a.toLowerCase(),o=r?.match?b(i,r.match,r.captureGroupKeys):i;n==="set-cookie"?e.append(n,o):e.set(n,o)}}function x(e){return/^https?:\/\//.test(e)}function g(e,t){for(let[r,s]of t.entries()){let a=/^nxtP(.+)$/.exec(r);a?.[1]?(e.set(r,s),e.set(a[1],s)):(!e.has(r)||!!s&&!e.getAll(r).includes(s))&&e.append(r,s)}}function k(e,t){let r=new URL(t,e.url);return g(r.searchParams,new URL(e.url).searchParams),r.pathname=r.pathname.replace(/^\/index.html$/,"/").replace(/\.html$/,""),new Request(r,e)}function w(e){return new Response(e.body,e)}function C(e){return e.split(",").map(t=>{let[r,s]=t.split(";"),a=parseFloat((s??"q=1").replace(/q *= */gi,""));return[r.trim(),isNaN(a)?1:a]}).sort((t,r)=>r[1]-t[1]).map(([t])=>t==="*"||t===""?[]:t).flat()}h();d();function N(e){switch(e){case"none":return"filesystem";case"filesystem":return"rewrite";case"rewrite":return"resource";case"resource":return"miss";default:return"miss"}}async function v(e,{request:t,assetsFetcher:r,ctx:s},{path:a,searchParams:i}){let n,o=new URL(t.url);g(o.searchParams,i);let c=new Request(o,t);try{switch(e?.type){case"function":case"middleware":{n=await(await import(e.entrypoint)).default(c,s);break}case"override":{n=w(await r.fetch(k(c,e.path??a))),e.headers&&m(n.headers,e.headers);break}case"static":{n=await r.fetch(k(c,a));break}default:n=new Response("Not Found",{status:404})}}catch(u){return console.error(u),new Response("Internal Server Error",{status:500})}return w(n)}function q(e,t){let r="^//?(?:",s=")/(.*)";return!e.startsWith(r)||!e.endsWith(s)?!1:e.slice(r.length,-s.length).split("|").every(i=>i in t)}h();d();function te(e,{protocol:t,hostname:r,port:s,pathname:a}){return!(t&&e.protocol.replace(/:$/,"")!==t||!new RegExp(r).test(e.hostname)||s&&!new RegExp(s).test(e.port)||a&&!new RegExp(a).test(e.pathname))}function se(e,t){if(e.method!=="GET")return;let{origin:r,searchParams:s}=new URL(e.url),a=s.get("url"),i=Number.parseInt(s.get("w")??"",10),n=Number.parseInt(s.get("q")??"75",10);if(!a||Number.isNaN(i)||Number.isNaN(n)||!t?.sizes?.includes(i)||n<0||n>100)return;let o=new URL(a,r);if(o.pathname.endsWith(".svg")&&!t?.dangerouslyAllowSVG)return;let c=a.startsWith("/")||a.startsWith("%2F");if(!c&&!t?.domains?.includes(o.hostname)&&!t?.remotePatterns?.find(y=>te(o,y)))return;let u=e.headers.get("Accept")??"",f=t?.formats?.find(y=>u.includes(y))?.replace("image/","");return{isRelative:c,imageUrl:o,options:{width:i,quality:n,format:f}}}function re(e,t,r){let s=new Headers;if(r?.contentSecurityPolicy&&s.set("Content-Security-Policy",r.contentSecurityPolicy),r?.contentDispositionType){let i=t.pathname.split("/").pop(),n=i?`${r.contentDispositionType}; filename="${i}"`:r.contentDispositionType;s.set("Content-Disposition",n)}e.headers.has("Cache-Control")||s.set("Cache-Control",`public, max-age=${r?.minimumCacheTTL??60}`);let a=w(e);return m(a.headers,s),a}async function F(e,{buildOutput:t,assetsFetcher:r,imagesConfig:s}){let a=se(e,s);if(!a)return new Response("Invalid image resizing request",{status:400});let{isRelative:i,imageUrl:n}=a,o=new Request(n,{headers:e.headers}),c=i&&n.pathname in t?await r.fetch(o):await fetch(o);return re(c,n,s)}h();d();function B(){globalThis.fetch[I]||(ae(),globalThis.fetch[I]=!0)}function ae(){let e=globalThis.fetch;globalThis.fetch=async(...t)=>{let r=new Request(...t),s=await ie(r);return s||(ne(r),e(r))}}async function ie(e){if(e.url.startsWith("blob:"))try{let r=(await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default,s={async arrayBuffer(){return r},get body(){return new ReadableStream({start(a){let i=Buffer.from(r);a.enqueue(i),a.close()}})},async text(){return Buffer.from(r).toString()},async json(){let a=Buffer.from(r);return JSON.stringify(a.toString())},async blob(){return new Blob(r)}};return s.clone=()=>({...s}),s}catch{}return null}function ne(e){e.headers.has("user-agent")||e.headers.set("user-agent","Next.js Middleware")}var I=Symbol.for("next-on-pages fetch patch");h();d();var D=T($());var S=class{constructor(t,r,s,a){this.routes=t;this.output=r;this.reqCtx=s;this.url=new URL(s.request.url),this.cookies=(0,D.parse)(s.request.headers.get("cookie")||""),this.path=this.url.pathname||"/",this.headers={normal:new Headers,important:new Headers},this.searchParams=new URLSearchParams,g(this.searchParams,this.url.searchParams),this.checkPhaseCounter=0,this.middlewareInvoked=[],this.wildcardMatch=a?.find(i=>i.domain===this.url.hostname)}url;cookies;wildcardMatch;path;status;headers;searchParams;body;checkPhaseCounter;middlewareInvoked;locales;checkRouteMatch(t,r){let s=O(t.src,this.path,t.caseSensitive);if(!s.match||t.methods&&!t.methods.map(i=>i.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))return;let a={url:this.url,cookies:this.cookies,headers:this.reqCtx.request.headers};if(!t.has?.find(i=>!_(i,a))&&!t.missing?.find(i=>_(i,a))&&!(r&&t.status!==this.status))return s}processMiddlewareResp(t){let r="x-middleware-override-headers",s=t.headers.get(r);if(s){let c=new Set(s.split(",").map(u=>u.trim()));for(let u of c.keys()){let f=`x-middleware-request-${u}`,y=t.headers.get(f);this.reqCtx.request.headers.get(u)!==y&&(y?this.reqCtx.request.headers.set(u,y):this.reqCtx.request.headers.delete(u)),t.headers.delete(f)}t.headers.delete(r)}let a="x-middleware-rewrite",i=t.headers.get(a);if(i){let c=new URL(i,this.url);this.path=c.pathname,g(this.searchParams,c.searchParams),t.headers.delete(a)}let n="x-middleware-next";t.headers.get(n)?t.headers.delete(n):!i&&!t.headers.has("location")&&(this.body=t.body,this.status=t.status),m(this.headers.normal,t.headers),this.headers.middlewareLocation=t.headers.get("location")}async runRouteMiddleware(t){if(!t)return!0;let r=t&&this.output[t];if(!r||r.type!=="middleware")return this.status=500,!1;let s=await v(r,this.reqCtx,{path:this.path,searchParams:this.searchParams,headers:this.headers,status:this.status});return this.middlewareInvoked.push(t),s.status===500?(this.status=s.status,!1):(this.processMiddlewareResp(s),!0)}applyRouteOverrides(t){!t.override||(this.status=void 0,this.headers.normal=new Headers,this.headers.important=new Headers)}applyRouteHeaders(t,r,s){!t.headers||(m(this.headers.normal,t.headers,{match:r,captureGroupKeys:s}),t.important&&m(this.headers.important,t.headers,{match:r,captureGroupKeys:s}))}applyRouteStatus(t){!t.status||(this.status=t.status)}applyRouteDest(t,r,s){if(!t.dest)return this.path;let a=this.path,i=t.dest;this.wildcardMatch&&/\$wildcard/.test(i)&&(i=i.replace(/\$wildcard/g,this.wildcardMatch.value)),this.path=b(i,r,s),/\/index\.rsc$/i.test(this.path)&&!/^\/(?:index)?$/i.test(a)&&(this.path=a);let n=/\.rsc$/i.test(this.path),o=this.path in this.output;n&&!o&&(this.path=this.path.replace(/\.rsc/i,""));let c=new URL(this.path,this.url);return g(this.searchParams,c.searchParams),x(this.path)||(this.path=c.pathname),a}applyLocaleRedirects(t){if(!t.locale?.redirect||(this.locales||(this.locales={}),Object.assign(this.locales,t.locale.redirect),!/^\^(.)*$/.test(t.src)&&t.src!==this.path)||this.headers.normal.has("location"))return;let{locale:{redirect:s,cookie:a}}=t,i=a&&this.cookies[a],n=C(i??""),o=C(this.reqCtx.request.headers.get("accept-language")??""),f=[...n,...o].map(y=>s[y]).filter(Boolean)[0];if(f){!this.path.startsWith(f)&&(this.headers.normal.set("location",f),this.status=307);return}}getLocaleFriendlyRoute(t,r){return!this.locales||r!=="miss"?t:/^\//.test(t.src)&&t.src.slice(1)in this.locales?{...t,src:`^${t.src}$`}:q(t.src,this.locales)?{...t,src:t.src.replace(/\/\(\.\*\)$/,"(?:/(.*))?$")}:t}async checkRoute(t,r){let s=this.getLocaleFriendlyRoute(r,t),a=this.checkRouteMatch(s,t==="error");if(!a?.match||s.middlewarePath&&this.middlewareInvoked.includes(s.middlewarePath))return"skip";let{match:i,captureGroupKeys:n}=a;if(this.applyRouteOverrides(s),this.applyLocaleRedirects(s),!await this.runRouteMiddleware(s.middlewarePath))return"error";if(this.body!==void 0||this.headers.middlewareLocation)return"done";this.applyRouteHeaders(s,i,n),this.applyRouteStatus(s);let c=this.applyRouteDest(s,i,n);if(s.check&&!x(this.path))if(c===this.path){if(t!=="miss")return await this.checkPhase(N(t));this.status=404}else if(t==="miss"){if(!(this.path in this.output))return await this.checkPhase("filesystem");this.status===404&&(this.status=void 0)}else return await this.checkPhase("none");return s.continue?"next":"done"}async checkPhase(t){if(this.checkPhaseCounter++>=50)return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`),this.status=500,"error";this.middlewareInvoked=[];let r=!0;for(let i of this.routes[t]){let n=await this.checkRoute(t,i);if(n==="error")return"error";if(n==="done"){r=!1;break}}if(t==="hit"||x(this.path)||this.headers.normal.has("location")||!!this.body)return"done";let s=this.path in this.output;if(t==="rewrite"&&!s&&this.path.endsWith("/")){let i=this.path.replace(/\/$/,"");s=i in this.output,s&&(this.path=i)}if(t==="miss"&&!s){let i=!this.status||this.status<400;this.status=i?404:this.status}let a="miss";return s||t==="miss"||t==="error"?a="hit":r&&(a=N(t)),await this.checkPhase(a)}async run(t="none"){this.checkPhaseCounter=0;let r=await this.checkPhase(t);return this.headers.normal.has("location")&&(!this.status||this.status<300||this.status>=400)&&(this.status=307),r}};async function z(e,t,r){let s=new S(t.routes,r,e,t.wildcard),a=await W(s);return fe(e,a,r)}async function W(e,t="none",r=!1){return await e.run(t)==="error"||!r&&e.status&&e.status>=400?W(e,"error",!0):{path:e.path,status:e.status,headers:e.headers,searchParams:e.searchParams,body:e.body}}async function fe(e,{path:t="/404",status:r,headers:s,searchParams:a,body:i},n){let o=s.normal.get("location");if(o){if(o!==s.middlewareLocation){let f=[...a.keys()].length?`?${a.toString()}`:"";s.normal.set("location",`${o??"/"}${f}`)}return new Response(null,{status:r,headers:s.normal})}let c;i!==void 0?c=new Response(i,{status:r}):x(t)?c=await fetch(new URL(t),e.request):c=await v(n[t],e,{path:t,status:r,headers:s,searchParams:a});let u=s.normal;return m(u,c.headers),m(u,s.important),c=new Response(c.body,{...c,status:r||c.status,headers:u}),c}B();var yt={async fetch(e,t,r){let s=await __ENV_ALS_PROMISE__;return s?s.run({...t,NODE_ENV:"production"},async()=>{if(new URL(e.url).pathname.startsWith("/_next/image"))return F(e,{buildOutput:p,assetsFetcher:t.ASSETS,imagesConfig:l.images});let i=M(e);return z({request:i,ctx:r,assetsFetcher:t.ASSETS},l,p)}):new Response("Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.",{status:503})}};export{yt as default};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */