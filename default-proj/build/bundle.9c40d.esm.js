!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"e6c71",3:"62c75"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(a===i||a===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var p;if((a=(p=s[c]).getAttribute("data-href"))===i||a===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home",3:"route-profile"}[e]||e)+".chunk."+{2:"ddc38",3:"f0dff"}[e]+".esm.js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({GFNa:function(){},QfWi:function(e,t,n){"use strict";n.r(t);n("GFNa");var r=n("hosL"),o=n("Y3FI"),i=n("ox/y"),u=n("ySiU"),l=n.n(u),c=()=>Object(r.h)("header",{class:l.a.header},Object(r.h)("h1",null,"Preact App"),Object(r.h)("nav",null,Object(r.h)(i.Link,{activeClassName:l.a.active,href:"/"},"Home"),Object(r.h)(i.Link,{activeClassName:l.a.active,href:"/profile"},"Me"),Object(r.h)(i.Link,{activeClassName:l.a.active,href:"/profile/john"},"John"))),a=function(e){function t(){var t,n;r.Component.call(this),this.componentWillMount=()=>{t=this.base=this.nextBase||this.__b,e(e=>{this.setState({child:e.default||e})})},this.shouldComponentUpdate=(e,o)=>(n=(o=void 0===o.child)&&void 0===n&&t?3===t.nodeType?t.data:Object(r.h)(t.nodeName,{dangerouslySetInnerHTML:{__html:t.innerHTML}}):"",!o),this.render=(e,t)=>t.child?Object(r.h)(t.child,e):n}return(t.prototype=new r.Component).constructor=t,t},s=a((function(e){n.e(2).then(function(){e(n("+1Jk"))}.bind(null,n)).catch(n.oe)})),p=a((function(e){n.e(3).then(function(){e(n("BM80"))}.bind(null,n)).catch(n.oe)}));t.default=class extends r.Component{constructor(){super(...arguments),this.handleRoute=e=>{this.currentUrl=e.url}}render(){return Object(r.h)("div",{id:"app"},Object(r.h)(c,null),Object(r.h)(o.Router,{onChange:this.handleRoute},Object(r.h)(s,{path:"/"}),Object(r.h)(p,{path:"/profile/",user:"me"}),Object(r.h)(p,{path:"/profile/:user"})))}}},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var p=Math.max(e.length,t.length),f=0;f<p;f++)if(t[f]&&":"===t[f].charAt(0)){var _=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=e[f]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[_]=decodeURIComponent(m),d||v){u[_]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function s(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=g.length;t--;)if(g[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),m&&m[t]?m[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),p(e)}function p(e){for(var t=!1,n=0;n<g.length;n++)!0===g[n].routeTo(e)&&(t=!0);for(var r=b.length;r--;)b[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(t)}}function _(e){if(0==e.button)return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return b})),n.d(t,"getCurrentUrl",(function(){return a})),n.d(t,"route",(function(){return s})),n.d(t,"Router",(function(){return O})),n.d(t,"Route",(function(){return j})),n.d(t,"Link",(function(){return x})),n.d(t,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(e){function t(t){e.call(this,t),t.history&&(m=t.history),this.state={url:t.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){p(a())})),addEventListener("click",d)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){g.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;m&&(this.unlisten=m.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(v.Component),x=function(e){return Object(v.createElement)("a",r({onClick:_},e))},j=function(e){return Object(v.createElement)(e.component,e)};O.subscribers=b,O.getCurrentUrl=a,O.route=s,O.Router=O,O.Route=j,O.Link=x,t.default=O},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return u(e,i,t&&t.key,t&&t.ref)}function u(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return P.vnode&&P.vnode(o),o}function l(){return{}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function p(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return p(e)}}function f(e){(!e.__d&&(e.__d=!0)&&1===E.push(e)||N!==P.debounceRendering)&&((N=P.debounceRendering)||A)(_)}function _(){var e,t,n,o,i,u,l;for(E.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=E.pop();)e.__d&&(n=void 0,o=void 0,u=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],o=g(l,i,r({},i),t.__n,void 0!==l.ownerSVGElement,null,n,null==u?s(i):u),b(n,i),o!=u&&p(i)))}function h(e,t,n,r,i,u,l,c,a){var p,f,_,h,v,y,m,b=n&&n.__k||D,k=b.length;if(c==R&&(c=null!=u?u[0]:k?s(n,0):null),p=0,t.__k=d(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(_=b[p])||_&&n.key==_.key&&n.type===_.type)b[p]=void 0;else for(f=0;f<k;f++){if((_=b[f])&&n.key==_.key&&n.type===_.type){b[f]=void 0;break}_=null}if(h=g(e,n,_=_||R,r,i,u,l,c,a),(f=n.ref)&&_.ref!=f&&(m||(m=[]),_.ref&&m.push(_.ref,null,n),m.push(f,n.__c||h,n)),null!=h){if(null==y&&(y=h),null!=n.__d)h=n.__d,n.__d=null;else if(u==_||h!=c||null==h.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(h);else{for(v=c,f=0;(v=v.nextSibling)&&f<k;f+=2)if(v==h)break e;e.insertBefore(h,c)}"option"==t.type&&(e.value="")}c=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return p++,n})),t.__e=y,null!=u&&"function"!=typeof t.type)for(p=u.length;p--;)null!=u[p]&&o(u[p]);for(p=k;p--;)null!=b[p]&&O(b[p],b[p]);if(m)for(p=0;p<m.length;p++)C(m[p],m[++p],m[++p])}function d(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)d(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?u(null,e,null,null):null!=e.__e||null!=e.__c?u(e.type,e.props,e.key,null):e):e);return n}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===W.test(t)?n+"px":null==n?"":n}function y(e,t,n,r,o){var i,u,l,c,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||v(i,u,"");if(n)for(l in n)r&&n[l]===r[l]||v(i,l,n[l])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,m,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,m,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function m(e){this.l[e.type](P.event?P.event(e):e)}function g(e,t,n,o,i,u,l,s,p){var f,_,v,y,m,g,b,C,O,j,w=t.type;if(void 0!==t.constructor)return null;(f=P.__b)&&f(t);try{e:if("function"==typeof w){if(C=t.props,O=(f=w.contextType)&&o[f.__c],j=f?O?O.props.value:f.__:o,n.__c?b=(_=t.__c=n.__c).__=_.__E:("prototype"in w&&w.prototype.render?t.__c=_=new w(C,j):(t.__c=_=new a(C,j),_.constructor=w,_.render=x),O&&O.sub(_),_.props=C,_.state||(_.state={}),_.context=j,_.__n=o,v=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=w.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,w.getDerivedStateFromProps(C,_.__s))),y=_.props,m=_.state,v)null==w.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==w.getDerivedStateFromProps&&C!==y&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(C,j),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(C,_.__s,j)){for(_.props=C,_.state=_.__s,_.__d=!1,_.__v=t,t.__e=n.__e,t.__k=n.__k,_.__h.length&&l.push(_),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(C,_.__s,j),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(y,m,g)}))}_.context=j,_.props=C,_.state=_.__s,(f=P.__r)&&f(t),_.__d=!1,_.__v=t,_.__P=e,f=_.render(_.props,_.state,_.context),t.__k=d(null!=f&&f.type==c&&null==f.key?f.props.children:f),null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),v||null==_.getSnapshotBeforeUpdate||(g=_.getSnapshotBeforeUpdate(y,m)),h(e,t,n,o,i,u,l,s,p),_.base=t.__e,_.__h.length&&l.push(_),b&&(_.__E=_.__=null),_.__e=null}else t.__e=k(n.__e,t,n,o,i,u,l,p);(f=P.diffed)&&f(t)}catch(e){P.__e(e,t,n)}return t.__e}function b(e,t){P.__c&&P.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){P.__e(e,t.__v)}}))}function k(e,t,n,r,o,i,u,l){var c,a,s,p,f,_=n.props,d=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&(null===t.type?3===a.nodeType:a.localName===t.type)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}if(null===t.type)null!=i&&(i[i.indexOf(e)]=null),_!==d&&(e.data=d);else if(t!==n){if(null!=i&&(i=D.slice.call(e.childNodes)),s=(_=n.props||R).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!l){if(_===R)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||y(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||y(e,i,t[i],n[i],r)})(e,d,_,o,l),t.__k=t.props.children,p||h(e,t,n,r,"foreignObject"!==t.type&&o,i,u,R,l),l||("value"in d&&void 0!==d.value&&d.value!==e.value&&(e.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==e.checked&&(e.checked=d.checked))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){P.__e(e,n)}}function O(e,t,n){var r,i,u;if(P.unmount&&P.unmount(e),(r=e.ref)&&C(r,null,t),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){P.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&O(r[u],t,n);null!=i&&o(i)}function x(e,t,n){return this.constructor(e,n)}function j(e,t,n){var r,o,u;P.__&&P.__(e,t),o=(r=n===T)?null:n&&n.__k||t.__k,e=i(c,null,[e]),u=[],g(t,(r?t:n||t).__k=e,o||R,R,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:D.slice.call(t.childNodes),u,n||R,r),b(u,e)}function w(e,t){j(e,t,T)}function S(e,t){return t=r(r({},e.props),t),arguments.length>2&&(t.children=D.slice.call(arguments,2)),u(e.type,t,t.key||e.key,t.ref||e.ref)}function L(e){var t={},n={__c:"__cC"+M++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,f(e)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}n.r(t),n.d(t,"render",(function(){return j})),n.d(t,"hydrate",(function(){return w})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return c})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return S})),n.d(t,"createContext",(function(){return L})),n.d(t,"toChildArray",(function(){return d})),n.d(t,"_unmount",(function(){return O})),n.d(t,"options",(function(){return P}));var P,U,E,A,N,T,M,R={},D=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;P={__e:function(e,t){for(var n;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return f(n.__E=n)}catch(t){e=t}throw e}},U=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=c,E=[],A="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T=R,M=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof o(n("QfWi"))){var i=document.body.firstElementChild;0,(()=>{var e=o(n("QfWi")),t={},u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(t=JSON.parse(u.innerHTML).preRenderData);var l={preRenderData:t};i=Object(r.render)(Object(r.h)(e,{CLI_DATA:l}),document.body,i)})()}},"ox/y":function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("hosL"),u=n("Y3FI"),l=t.Match=function(e){function t(){for(var t,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},r(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){u.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,u.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,u.exec)(n,e.path,{})})},t}(i.Component),c=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(e){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=c,t.default=l,l.Link=c},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.9c40d.esm.js.map