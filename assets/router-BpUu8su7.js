import{r as e,R as t}from"./react-vendor-UTipGiiB.js";
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}var r,a;(a=r||(r={})).Pop="POP",a.Push="PUSH",a.Replace="REPLACE";const o="popstate";function i(e){return void 0===e&&(e={}),function(e,t,a,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,d=s.history,f=r.Pop,m=null,v=g();null==v&&(v=0,d.replaceState(n({},d.state,{idx:v}),""));function g(){return(d.state||{idx:null}).idx}function y(){f=r.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:E.location,delta:t})}function b(e,t){f=r.Push;let n=c(E.location,e,t);a&&a(n,e),v=g()+1;let o=u(n,v),i=E.createHref(n);try{d.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&m&&m({action:f,location:E.location,delta:1})}function x(e,t){f=r.Replace;let n=c(E.location,e,t);a&&a(n,e),v=g();let o=u(n,v),i=E.createHref(n);d.replaceState(o,"",i),p&&m&&m({action:f,location:E.location,delta:0})}function w(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:h(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let E={get action(){return f},get location(){return e(s,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),m=e,()=>{s.removeEventListener(o,y),m=null}},createHref:e=>t(s,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:b,replace:x,go:e=>d.go(e)};return E}((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:h(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e)try{throw new Error(t)}catch(n){}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,r,a){return void 0===r&&(r=null),n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:r,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var d,f;function m(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let a="string"==typeof t?p(t):t,o=k(a.pathname||"/",n);if(null==o)return null;let i=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let s=0;null==l&&s<i.length;++s){let e=O(o);l=P(i[s],e,r)}return l}(e,t,n,!1)}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=W([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of g(e.path))a(e,t,r);else a(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=g(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}(f=d||(d={})).data="data",f.deferred="deferred",f.redirect="redirect",f.error="error";const y=/^:[\w-]+$/,b=3,x=2,w=1,E=10,C=-2,R=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=C),t&&(r+=x),n.filter((e=>!R(e))).reduce(((e,t)=>e+(y.test(t)?b:""===t?w:E)),r)}function P(e,t,n){let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=U({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),h=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=U({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:W([o,c.pathname]),pathnameBase:D(W([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=W([o,c.pathnameBase]))}return i}function U(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function k(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function B(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function j(e,t,r,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=p(e):(o=n({},e),l(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let i,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(null==u)i=r;else{let e=t.length-1;if(!a&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:N(r),hash:T(a)}}(o,i),h=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&r.endsWith("/");return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}const W=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",T=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const $=["post","put","patch","delete"];new Set($);const F=["get",...$];
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}new Set(F);const M=e.createContext(null),I=e.createContext(null),_=e.createContext(null),H=e.createContext(null),J=e.createContext({outlet:null,matches:[],isDataRoute:!1}),z=e.createContext(null);function V(){return null!=e.useContext(H)}function K(){return V()||l(!1),e.useContext(H).location}function q(t){e.useContext(_).static||e.useLayoutEffect(t)}function G(){let{isDataRoute:t}=e.useContext(J);return t?function(){let{router:t}=function(){let t=e.useContext(M);return t||l(!1),t}(ne.UseNavigateStable),n=ae(re.UseNavigateStable),r=e.useRef(!1);return q((()=>{r.current=!0})),e.useCallback((function(e,a){void 0===a&&(a={}),r.current&&("number"==typeof e?t.navigate(e):t.navigate(e,A({fromRouteId:n},a)))}),[t,n])}():function(){V()||l(!1);let t=e.useContext(M),{basename:n,future:r,navigator:a}=e.useContext(_),{matches:o}=e.useContext(J),{pathname:i}=K(),s=JSON.stringify(B(o,r.v7_relativeSplatPath)),u=e.useRef(!1);return q((()=>{u.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!u.current)return;if("number"==typeof e)return void a.go(e);let o=j(e,JSON.parse(s),i,"path"===r.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:W([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,s,i,t])}()}function Q(t,n){let{relative:r}=void 0===n?{}:n,{future:a}=e.useContext(_),{matches:o}=e.useContext(J),{pathname:i}=K(),l=JSON.stringify(B(o,a.v7_relativeSplatPath));return e.useMemo((()=>j(t,JSON.parse(l),i,"path"===r)),[t,l,i,r])}function X(t,n){return function(t,n,a,o){V()||l(!1);let{navigator:i}=e.useContext(_),{matches:s}=e.useContext(J),u=s[s.length-1],c=u?u.params:{};!u||u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let d,f=K();if(n){var v;let e="string"==typeof n?p(n):n;"/"===h||(null==(v=e.pathname)?void 0:v.startsWith(h))||l(!1),d=e}else d=f;let g=d.pathname||"/",y=g;if("/"!==h){let e=h.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=m(t,{pathname:y}),x=function(t,n,r,a){var o;void 0===n&&(n=[]);void 0===r&&(r=null);void 0===a&&(a=null);if(null==t){var i;if(!r)return null;if(r.errors)t=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;t=r.matches}}let s=t,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,h=-1;if(r&&a&&a.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(h=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){c=!0,s=h>=0?s.slice(0,h+1):[s[0]];break}}}return s.reduceRight(((t,a,o)=>{let i,l=!1,p=null,d=null;r&&(i=u&&a.route.id?u[a.route.id]:void 0,p=a.route.errorElement||Z,c&&(h<0&&0===o?(l=!0,d=null):h===o&&(l=!0,d=a.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,o+1)),m=()=>{let n;return n=i?p:l?d:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(te,{match:a,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?e.createElement(ee,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:W([h,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:W([h,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);if(n&&x)return e.createElement(H.Provider,{value:{location:A({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:r.Pop}},x);return x}(t,n)}function Y(){let t=function(){var t;let n=e.useContext(z),r=function(){let t=e.useContext(I);return t||l(!1),t}(re.UseRouteError),a=ae(re.UseRouteError);if(void 0!==n)return n;return null==(t=r.errors)?void 0:t[a]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,null)}const Z=e.createElement(Y,null);class ee extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?e.createElement(J.Provider,{value:this.props.routeContext},e.createElement(z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function te(t){let{routeContext:n,match:r,children:a}=t,o=e.useContext(M);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(J.Provider,{value:n},a)}var ne=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ne||{}),re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(re||{});function ae(t){let n=function(){let t=e.useContext(J);return t||l(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}function oe(e){l(!1)}function ie(t){let{basename:n="/",children:a=null,location:o,navigationType:i=r.Pop,navigator:s,static:u=!1,future:c}=t;V()&&l(!1);let h=n.replace(/^\/*/,"/"),d=e.useMemo((()=>({basename:h,navigator:s,static:u,future:A({v7_relativeSplatPath:!1},c)})),[h,c,s,u]);"string"==typeof o&&(o=p(o));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=o,b=e.useMemo((()=>{let e=k(f,h);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:i}}),[h,f,m,v,g,y,i]);return null==b?null:e.createElement(_.Provider,{value:d},e.createElement(H.Provider,{children:a,value:b}))}function le(e){let{children:t,location:n}=e;return X(se(t),n)}function se(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,a)=>{if(!e.isValidElement(t))return;let o=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,se(t.props.children,o));t.type!==oe&&l(!1),t.props.index&&t.props.children&&l(!1);let i={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=se(t.props.children,o)),r.push(i)})),r}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}new Promise((()=>{}));const ce=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(xe){}const he=t.startTransition;function pe(t){let{basename:n,children:r,future:a,window:o}=t,l=e.useRef();null==l.current&&(l.current=i({window:o,v5Compat:!0}));let s=l.current,[u,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:h}=a||{},p=e.useCallback((e=>{h&&he?he((()=>c(e))):c(e)}),[c,h]);return e.useLayoutEffect((()=>s.listen(p)),[s,p]),e.createElement(ie,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}const de="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,fe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,me=e.forwardRef((function(t,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:p,preventScrollReset:d,viewTransition:f}=t,m=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,ce),{basename:v}=e.useContext(_),g=!1;if("string"==typeof p&&fe.test(p)&&(r=p,de))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=k(t.pathname,v);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:g=!0}catch(xe){}let y=function(t,n){let{relative:r}=void 0===n?{}:n;V()||l(!1);let{basename:a,navigator:o}=e.useContext(_),{hash:i,pathname:s,search:u}=Q(t,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:W([a,s])),o.createHref({pathname:c,search:u,hash:i})}(p,{relative:o}),b=function(t,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,u=G(),c=K(),p=Q(t,{relative:l});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,r)){e.preventDefault();let n=void 0!==a?a:h(c)===h(p);u(t,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[c,u,p,a,o,r,t,i,l,s])}(p,{replace:s,state:u,target:c,preventScrollReset:d,relative:o,viewTransition:f});return e.createElement("a",ue({},m,{href:r||y,onClick:g||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:n,target:c}))}));var ve,ge,ye,be;(ge=ve||(ve={})).UseScrollRestoration="useScrollRestoration",ge.UseSubmit="useSubmit",ge.UseSubmitFetcher="useSubmitFetcher",ge.UseFetcher="useFetcher",ge.useViewTransitionState="useViewTransitionState",(be=ye||(ye={})).UseFetcher="useFetcher",be.UseFetchers="useFetchers",be.UseScrollRestoration="useScrollRestoration";export{pe as H,me as L,le as R,K as a,oe as b,G as u};
