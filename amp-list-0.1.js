(self.AMP=self.AMP||[]).push({n:"amp-list",v:"2008290323001",f:(function(AMP,_){
'use strict';var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m,fa;function p(){return fa?fa:fa=Promise.resolve(void 0)};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ja(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var ka=Object.prototype.toString;function q(a){return Array.isArray(a)}function la(a){return a?Array.prototype.slice.call(a):[]};var r=self.AMP_CONFIG||{},ma=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function na(a){if(!self.document||!self.document.head||self.location&&ma.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var oa={thirdParty:r.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:r.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof r.thirdPartyFrameRegex?new RegExp(r.thirdPartyFrameRegex):r.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:r.cdnUrl||na("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:ma,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:r.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:r.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:r.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:r.geoApiUrl||na("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function v(){if(t.dev)return t.dev;throw Error("failed to call initLogConstructor");}function w(a,b,c,d,e){u().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function x(a){return a||{}};function pa(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(a){return b.hasAttribute(a)})};function y(){this.fa=100;this.N=this.Y=0;this.L=Object.create(null)}y.prototype.has=function(a){return!!this.L[a]};y.prototype.get=function(a){var b=this.L[a];if(b)return b.access=++this.N,b.payload};y.prototype.put=function(a,b){this.has(a)||this.Y++;this.L[a]={payload:b,access:this.N};if(!(this.Y<=this.fa)){v().warn("lru-cache","Trimming LRU cache");a=this.L;var c=this.N+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.Y--)}};function A(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var qa=x({c:!0,v:!0,a:!0,ad:!0}),ra,sa,ta=/[?&]amp_js[^&]*/,ua=/[?&]amp_gsa[^&]*/,va=/[?&]amp_r[^&]*/,wa=/[?&]amp_kit[^&]*/,xa=/[?&]usqp[^&]*/;
function B(a){ra||(ra=self.document.createElement("a"),sa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new y));var b=sa,c=ra;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function ya(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(q(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")}
function za(a,b){var c=void 0===c?"source":c;w(null!=a,"%s %s must be available",b,c);var d=a;"string"==typeof d&&(d=B(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);w(e||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,a)}
function Aa(a){"string"==typeof a&&(a=B(a));var b=a;"string"==typeof b&&(b=B(b));if(!oa.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");w(qa[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);w(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(ta,"").replace(ua,"").replace(va,"").replace(wa,"").replace(xa,"").replace(/^[?&]/,
""))?"?"+d:"":"";return b+d+(a.hash||"")};var Ba={"AMP-IMG":["src","srcset","layout","width","height"]};function Ca(a,b){var c=A(a.tagName,"AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&Ba[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}Object.freeze(x({input:{type:/(?:image|button)/i}}));Object.freeze(x({input:{type:/(?:button|file|image|password)/i}}));var Da=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" "));
Object.freeze(x({input:Da,textarea:Da,select:Da}));Object.freeze(x({"amp-anim":["controls"],form:["name"]}));function Ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var C;function Fa(a){var b=a.ownerDocument||a;C&&C.ownerDocument===b||(C=b.createElement("div"));return Ga}function Ga(a){var b=C;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};var D,Ha="Webkit webkit Moz moz ms O o".split(" ");function Ia(a,b,c){if(A(b,"--"))return b;D||(D=Object.create(null));var d=D[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<Ha.length;f++){var h=Ha[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var g=e;void 0!==a[g]&&(d=g)}c||(D[b]=d)}return d}function Ja(a,b){a=a.style;for(var c in b)a.setProperty(Ia(a,c),b[c].toString(),"important")}
function E(a,b){for(var c in b){var d=a,e=b[c],f=Ia(d.style,c,void 0);f&&(A(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}}function Ka(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};var La={NODISPLAY:"nodisplay",FIXED:"fixed",FIXED_HEIGHT:"fixed-height",RESPONSIVE:"responsive",CONTAINER:"container",FILL:"fill",FLEX_ITEM:"flex-item",FLUID:"fluid",INTRINSIC:"intrinsic"};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var F;function Ma(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(e){return!1}};function Na(a,b,c){if(b(a))c();else{var d=a.ownerDocument.defaultView;if(d.MutationObserver){var e=new d.MutationObserver(function(){b(a)&&(e.disconnect(),c())});e.observe(a,{childList:!0})}else var f=d.setInterval(function(){b(a)&&(d.clearInterval(f),c())},5)}}function Oa(a,b){Na(a.documentElement,function(){return!!a.body},b)}function Pa(a){return new Promise(function(b){return Oa(a,b)})}function Qa(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
function G(a,b){/^[\w-]+$/.test(b);return Ra(a,"> ["+b+"]")}function Sa(a,b){a.classList.add("i-amphtml-scoped");var c=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return b}function Ra(a,b){if(void 0!==F?F:F=Ma(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));var c=Sa(a,b);return void 0===c[0]?null:c[0]};var Ta=['<amp-list-load-more load-more-button class="amp-visible i-amphtml-default-ui"><button load-more-clickable class=i-amphtml-list-load-more-button><label>See More</label></button></amp-list-load-more>'],Ua=["<amp-list-load-more load-more-loading class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-spinner></div></amp-list-load-more>"],Va=['<amp-list-load-more load-more-failed class=i-amphtml-default-ui><div class=i-amphtml-list-load-more-message>Unable to Load More</div><button load-more-clickable class="i-amphtml-list-load-more-button i-amphtml-list-load-more-button-has-icon i-amphtml-list-load-more-button-small"><div class=i-amphtml-list-load-more-icon></div><label>Retry</label></button></amp-list-load-more>'];
function Wa(a){this.l=a;this.I=this.S=this.F=this.G=this.R=this.o=null}k=Wa.prototype;k.initializeLoadMore=function(){Xa(this);Ya(this);Za(this);this.I||(this.I=G(this.l,"load-more-end"))&&this.l.appendChild(this.I)};function Xa(a){a.o=G(a.l,"load-more-button");a.o?a.o.classList.add("amp-visible"):a.o=Fa(a.l)(Ta);a.l.appendChild(a.o);E(a.o,{visibility:"hidden"})}function Ya(a){a.G=G(a.l,"load-more-loading");a.G||(a.G=Fa(a.l)(Ua));a.l.appendChild(a.G)}
k.getLoadMoreButton=function(){this.o||Xa(this);return this.o};k.getLoadMoreLoadingElement=function(){this.G||Ya(this);return this.G};k.getLoadMoreButtonClickable=function(){if(!this.R){var a=this.getLoadMoreButton();this.R=G(a,"load-more-clickable")||a}return this.R};function Za(a){a.F=G(a.l,"load-more-failed");a.F||(a.F=Fa(a.l)(Va));a.l.appendChild(a.F)}k.getLoadMoreFailedElement=function(){this.F||Za(this);return this.F};
k.getLoadMoreFailedClickable=function(){if(!this.S){var a=this.getLoadMoreFailedElement();this.S=G(a,"load-more-clickable")||a}return this.S};k.getLoadMoreEndElement=function(){return this.I};k.setLoadMoreEnded=function(){this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);this.getLoadMoreButton().classList.toggle("amp-visible",!1);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1);var a=this.getLoadMoreEndElement();a&&a.classList.toggle("amp-visible",!0)};
k.toggleLoadMoreLoading=function(a){a&&this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);var b=this.getLoadMoreEndElement();b&&b.classList.toggle("amp-visible",!1);this.getLoadMoreButton().classList.toggle("amp-visible",!a);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",a)};
k.setLoadMoreFailed=function(){var a=this.getLoadMoreFailedElement(),b=this.getLoadMoreButton();if(a||b)a.classList.toggle("amp-visible",!0),b.classList.toggle("amp-visible",!1),this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1)};
k.hideAllLoadMoreElements=function(){this.getLoadMoreButton().classList.toggle("amp-visible",!1);this.getLoadMoreLoadingElement().classList.toggle("amp-visible",!1);this.getLoadMoreFailedElement().classList.toggle("amp-visible",!1);this.getLoadMoreEndElement()&&this.getLoadMoreEndElement().classList.toggle("amp-visible",!1)};function $a(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,ab(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=ja(a.location.originalHash||a.location.hash);for(var g=0;g<c.length;g++){var l=a["e-"+c[g]];"1"==l&&(b[c[g]]=!0);"0"==l&&(b[c[g]]=!1)}}return b}
function ab(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){v().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function bb(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f=!!$a(d)["ampdoc-fie"];e&&!f?b=cb(c,b)?H(c,b):null:(a=I(a),a=J(a),b=cb(a,b)?H(a,b):null);return b}function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function db(a,b){var c=I(a);c=J(c);return H(c,b)}function I(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}
function H(a,b){cb(a,b);a=eb(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function fb(a){var b=gb(a);if(b)return b;a=eb(a);a.bind=hb();return a.bind.promise}function gb(a){var b=eb(a).bind;if(b){if(b.promise)return b.promise;H(a,"bind");return b.promise=Promise.resolve(b.obj)}return null}function eb(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}
function cb(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function hb(){var a=new Ea,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};function ib(a){var b=gb(J(a));if(b)return b;var c=I(a);return c.waitForBodyOpen().then(function(){return jb(c.win,c.win.document.head)}).then(function(){var b=c.win;return b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-bind"]?fb(J(a)):null})}function L(a){var b=bb(a,"bind");if(b)return Promise.resolve(b);b=a.ownerDocument.defaultView;var c=b.__AMP_TOP||(b.__AMP_TOP=b);return b!==c?kb(b):ib(a)}
function jb(a,b){if(b){var c={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var d=0;d<b.length;d++){var e=b[d];e=e.getAttribute("custom-element")||e.getAttribute("custom-template");c[e]=!0}c=Object.keys(c)}else c=[];return c.includes("amp-bind")?K(a,"extensions").waitForExtension(a,"amp-bind"):p()}
function kb(a){return Pa(a.document).then(function(){return jb(a,a.document.head)}).then(function(){return a.__AMP_EXTENDED_ELEMENTS&&a.__AMP_EXTENDED_ELEMENTS["amp-bind"]?fb(a):null})};function M(a,b){var c=this;this.ca=K(a,"timer");this.ha=b;this.ga=0;this.J=-1;this.U=0;this.X=!1;this.ea=function(){c.J=-1;c.U=0;c.X=!0;c.ha();c.X=!1}}M.prototype.isPending=function(){return-1!=this.J};M.prototype.schedule=function(a){var b=a||this.ga;this.X&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.U?(this.cancel(),this.U=c,this.J=this.ca.delay(this.ea,b),!0):!1};M.prototype.cancel=function(){this.isPending()&&(this.ca.cancel(this.J),this.J=-1)};function lb(a){return!!a&&"function"==typeof a.getFormData};var mb=["GET","POST"],nb=[q,function(a){return"[object Object]"===ka.call(a)}];function ob(a){a=a||{};var b=a.method;void 0===b?b="GET":(b=b.toUpperCase(),mb.includes(b));a.method=b;a.headers=a.headers||x({});a.headers.Accept="application/json";return a}
function pb(a){var b=ob(a);"POST"!=b.method||lb(b.body)||(nb.some(function(a){return a(b.body)}),b.headers["Content-Type"]=b.headers["Content-Type"]||"text/plain;charset=utf-8",b.body="application/x-www-form-urlencoded"===b.headers["Content-Type"]?ya(b.body):JSON.stringify(b.body))};function N(a,b){this.M=a;this.A=b;this.ia="amp-list"}N.prototype.isEnabled=function(){var a=this.M.getAmpDoc();return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.M.hasCapability("viewerRenderTemplate"):!1};N.prototype.assertTrustedViewer=function(a){return this.M.isTrustedViewer().then(function(b){w(b,"Refused to attempt SSR in untrusted viewer: ",a)})};
N.prototype.ssr=function(a,b,c,d){var e=this;c=void 0===c?null:c;d=void 0===d?{}:d;var f;c||(f=this.A.maybeFindTemplate(a));return this.assertTrustedViewer(a).then(function(){return e.M.sendMessageAwaitResponse("viewerRenderTemplate",qb(e,b,f,c,d))})};
N.prototype.applySsrOrCsrTemplate=function(a,b){var c=this;if(this.isEnabled()){w("string"===typeof b.html,"Server side html response must be defined");var d=this.assertTrustedViewer(a).then(function(){return c.A.findAndSetHtmlForTemplate(a,b.html)})}else d=q(b)?this.A.findAndRenderTemplateArray(a,b):this.A.findAndRenderTemplate(a,b);return d};
function qb(a,b,c,d,e){e=void 0===e?{}:e;var f=x({type:a.ia}),h=d&&d.successTemplate?d.successTemplate:c;h&&(f.successTemplate={type:"amp-mustache",payload:h.innerHTML});var g=d&&d.errorTemplate?d.errorTemplate:null;g&&(f.errorTemplate={type:"amp-mustache",payload:g.innerHTML});e&&Object.assign(f,e);a=b.xhrUrl;c=b.fetchOpt;b=Object.assign({},c);if(lb(c.body)){c=c.body;b.headers["Content-Type"]="multipart/form-data;charset=utf-8";c=c.entries();d=[];for(e=c.next();!e.done;e=c.next())d.push(e.value);
b.body=d}return x({originalRequest:{input:a,init:b},ampComponent:f})};function rb(a,b){if("."==b)return a;b=b.split(".");for(var c=0;c<b.length;c++){var d=b[c];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a};function sb(a,b,c){c=void 0===c?{}:c;var d=void 0===c.expr?".":c.expr,e=void 0===c.urlReplacement?0:c.urlReplacement,f=void 0===c.refresh?!1:c.refresh,h=void 0===c.xssiPrefix?void 0:c.xssiPrefix;za(b.getAttribute("src"),b);var g=K(a.win,"batched-xhr");return tb(b,e,f).then(function(a){return g.fetchJson(a.xhrUrl,a.fetchOpt)}).then(function(b){return K(a.win,"xhr").xssiJson(b,h)}).then(function(a){if(null==a)throw Error("Response is undefined.");return rb(a,d||".")}).catch(function(a){throw u().createError("failed fetching JSON data",
a);})}
function tb(a,b,c){var d=a.getAttribute("src"),e=bb(a,"url-replace");return(1<=b?e.expandUrlAsync(d):Promise.resolve(d)).then(function(d){if(1==b){var f=e.collectDisallowedVarsSync(a);if(0<f.length)throw u().createError('URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="'+(f.join(" ")+'" to the <')+(a.tagName+"> element. See https://bit.ly/amp-var-subs."));}var g={};a.hasAttribute("credentials")&&(g.credentials=a.getAttribute("credentials"));c&&
(g.cache="reload");return{xhrUrl:d,fetchOpt:g}})};var O;function ub(a,b){var c=vb();a.addEventListener("click",function(a){try{return b(a)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},c?void 0:!1)}function vb(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function wb(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function xb(a,b){ub(a,b)};P.KEY="data-key";P.IGNORE="data-ignore";P.CHECKSUM="data-checksum";var yb="_set-dom-",zb=yb+"mounted",Ab=1,Bb=9,Cb=11,Q=null;function P(a,b){Q=[];if(!a||!a.nodeType)throw Error("set-dom: You must provide a valid node to update.");a.nodeType===Bb&&(a=a.documentElement);b.nodeType===Cb?Db(a,b):Eb(a,b);a[zb]||(a[zb]=!0,R(a));var c=Q;Q=null;return c}
function Eb(a,b){if(a.nodeType===b.nodeType)if(a.nodeType===Ab){var c=null!=a.getAttribute(P.IGNORE)&&null!=b.getAttribute(P.IGNORE);c&&Q.push(a,b);if(!c&&(a.getAttribute(P.CHECKSUM)||NaN)!==(b.getAttribute(P.CHECKSUM)||NaN)&&!a.isEqualNode(b))if(Db(a,b),a.nodeName===b.nodeName){a=a.attributes;b=b.attributes;var d;for(c=a.length;c--;){var e=a[c];var f=e.namespaceURI;var h=e.localName;(d=b.getNamedItemNS(f,h))||a.removeNamedItemNS(f,h)}for(c=b.length;c--;)(e=b[c],f=e.namespaceURI,h=e.localName,d=a.getNamedItemNS(f,
h),d)?d.value!==e.value&&(d.value=e.value):(b.removeNamedItemNS(f,h),a.setNamedItemNS(e))}else{for(var g=b.cloneNode();a.firstChild;)g.appendChild(a.firstChild);a.parentNode.replaceChild(g,a)}}else a.nodeValue!==b.nodeValue&&(a.nodeValue=b.nodeValue);else a.parentNode.replaceChild(b,S(a,"dismount")),R(b)}
function Db(a,b){var c,d,e,f=a.firstChild;b=b.firstChild;for(var h=0;f;){h++;var g=f;var l=T(g);f=f.nextSibling;l&&(e||(e={}),e[l]=g)}for(f=a.firstChild;b;){h--;var z=b;b=b.nextSibling;e&&(c=T(z))&&(d=e[c])?(delete e[c],d!==f?a.insertBefore(d,f):f=f.nextSibling,Eb(d,z)):f?(g=f,f=f.nextSibling,T(g)?(a.insertBefore(z,g),R(z)):Eb(g,z)):(a.appendChild(z),R(z))}for(l in e)h--,a.removeChild(S(e[l],"dismount"));for(;0<=--h;)a.removeChild(S(a.lastChild,"dismount"))}
function T(a){if(a.nodeType===Ab&&(a=a.getAttribute(P.KEY)||a.id))return yb+a}function R(a){S(a,"mount")}function S(a,b){if(T(a)){var c=document.createEvent("Event"),d={value:a};c.initEvent(b,!1,!1);Object.defineProperty(c,"target",d);Object.defineProperty(c,"srcElement",d);a.dispatchEvent(c)}for(d=a.firstChild;d;)d=S(d,b).nextSibling;return a};function U(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.K=null;b.Z=!1;b.aa=new M(b.win,function(){return Fb(b)});b.C=null;b.ba=null;b.A=K(b.win,"templates");b.P=!1;b.m=!1;b.$=null;b.H=null;b.D=null;b.j=!1;b.T=null;b.B=null;b.W=!1;b.da=null;b.registerAction("refresh",function(){if(b.P)return Gb(b),Hb(b,!0)});b.registerAction("changeToLayoutContainer",function(){return Ib(b)});b.w=null;b.O=null;b.V=null;return b}var V=AMP.BaseElement;U.prototype=aa(V.prototype);U.prototype.constructor=U;
if(ea)ea(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var Jb=Object.getOwnPropertyDescriptor(V,W);Jb&&Object.defineProperty(U,W,Jb)}else U[W]=V[W];U.ja=V.prototype;k=U.prototype;
k.isLayoutSupported=function(a){if("container"===a){a=this.element.ownerDocument;w(a&&pa(a)||!!$a(this.win)["amp-list-layout-container"],'Experiment "amp-list-layout-container" is not turned on.');var b=this.element.hasAttribute("diffable")&&Kb(this);w(this.getPlaceholder()||b,"amp-list[layout=container] requires a placeholder to establish an initial size. See https://go.amp.dev/c/amp-list/#placeholder-and-fallback. %s",this.element);return this.m=!0}return"fixed"==a||"fixed-height"==a||"responsive"==
a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
k.buildCallback=function(){var a=this;this.O=bb(this.element,"action");this.V=db(this.element,"owners");this.O.addToAllowlist("AMP-LIST",["changeToLayoutContainer","refresh"],["email"]);this.K=this.getViewport();var b=db(this.getAmpDoc(),"viewer");this.w=new N(b,this.A);this.j=this.element.hasAttribute("load-more");w(!(this.j&&this.m),"%s initialized with layout=container does not support infinite scrolling with [load-more]. %s","amp-list",this.element);this.$=this.element.getAttribute("src");this.element.hasAttribute("diffable")&&
((this.H=Kb(this))?this.h=this.H:u().warn("amp-list","Could not find child div[role=list] for diffing.",this.element));this.h||(this.h=Lb(this),this.element.appendChild(this.h));this.element.hasAttribute("aria-live")||this.element.setAttribute("aria-live","polite");this.element.hasAttribute("auto-resize")&&u().warn("amp-list","auto-resize attribute is deprecated and its behavior is disabled. This feature will be relaunched under a new name soon. Please see https://github.com/ampproject/amphtml/issues/18849");
P.KEY="i-amphtml-key";P.IGNORE="i-amphtml-ignore";L(this.element).then(function(b){a.D=b})};k.reconstructWhenReparented=function(){return!1};k.layoutCallback=function(){var a=this;this.P=!0;var b=this.getPlaceholder();b?X(this,b):this.H&&X(this,this.h);this.K.onResize(function(){Mb(a)});this.j&&Nb(this);return Hb(this)};function Kb(a){return Ra(a.element,"> div[role=list]:not([placeholder]):not([fallback]):not([fetch-error])")}
function Nb(a){a.mutateElement(function(){Y(a).initializeLoadMore();var b=a.getOverflowElement();b&&Ka(b);a.element.warnOnMissingOverflow=!1}).then(function(){Ob(a);xb(Y(a).getLoadMoreFailedClickable(),function(){return Pb(a,!0,!0)});xb(Y(a).getLoadMoreButtonClickable(),function(){return Pb(a,!1,!0)})})}function Mb(a){if(a.j)Qb(a,a.h);else return X(a,a.h)}function Y(a){a.T||(a.T=new Wa(a.element));return a.T}
function Ob(a){var b,c;a.measureMutateElement(function(){b=Y(a).getLoadMoreButton().offsetHeight;c=a.element.offsetHeight},function(){E(a.h,{"max-height":"calc(100% - "+(b+"px)")});a.element.applySize(c+b)})}
function Rb(a,b){return L(a.element).then(function(c){w(c,'"amp-state:" URLs require amp-bind to be installed.');w(!a.w.isEnabled(),'[amp-list]: "amp-state" URIs cannot be used in SSR mode.');var d=b.slice(10);return c.getStateAsync(d).catch(function(a){var b=d.split(".")[0];u().error("amp-list","'amp-state' element with id '"+b+"' was not found.");throw a;})}).then(function(a){w("undefined"!==typeof a,"[amp-list] No data was found at provided uri: "+b);return a})}
function Sb(a,b){return p().then(function(){w(!!$a(a.win)["protocol-adapters"],"Experiment 'protocol-adapters' is not turned on.");w(!a.w.isEnabled(),'[amp-list]: "amp-script" URIs cannot be used in SSR mode.');var c=b.slice(11).split(".");w(2===c.length&&0<c[0].length&&0<c[1].length,'[amp-list]: "amp-script" URIs must be of the format "scriptId.functionIdentifier".');var d=c[0],e=c[1],f=a.element.getAmpDoc().getElementById(d);w(f&&"AMP-SCRIPT"===f.tagName,"[amp-list]: could not find <amp-script> with script set to "+
d);return f.getImpl().then(function(a){return a.callFunction(e)})}).then(function(a){w("object"===typeof a,"[amp-list] "+b+" must return json, but instead returned: "+typeof a);return a})}
k.mutatedAttributesCallback=function(a){function b(a){c.element.setAttribute("src","");w(!c.w.isEnabled(),'[amp-list] "[src]" may not be bound in SSR mode.');a=q(a)?a:[a];Gb(c,!1);return Z(c,a,!1)}var c=this;v().info("amp-list","mutate:",this.element,a);var d=a.src;void 0!==d&&("string"===typeof d?this.P&&(Gb(this),Hb(this)):"object"===typeof d?b(d):this.user().error("amp-list",'Unexpected "src" type: '+d));a["is-layout-container"]&&Ib(this)};k.isLoadingReused=function(){return this.element.hasAttribute("reset-on-refresh")};
function Lb(a){var b=a.win.document.createElement("div");a.element.hasAttribute("single-item")||b.setAttribute("role","list");a.j||a.m||a.applyFillContent(b,!0);return b}
function Tb(a,b,c){b.forEach(function(b){b.hasAttribute("role")||a.element.hasAttribute("single-item")||b.setAttribute("role","listitem");var d;(d=b.hasAttribute("tabindex"))||(d=((d=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector)?d.call(b,'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'):!1)||!!Ra(b,'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'));
d||b.setAttribute("tabindex","0");c.appendChild(b)})}function Ub(a,b){if(b||a.Z)a.toggleFallback(b),a.Z=b}
function Gb(a,b){if((b=void 0===b?!0:b)&&a.element.hasAttribute("reset-on-refresh")||"always"===a.element.getAttribute("reset-on-refresh")){var c=function(){a.togglePlaceholder(!0);a.toggleLoading(!0);Ub(a,!1);if(a.D){var b=la(a.h.children);a.D.rescan([],b,{fast:!0,update:!1})}a.V.scheduleUnlayout(a.element,a.h);Qa(a.h)};!a.j&&a.m?Vb(a,c):a.mutateElement(function(){c();a.j&&Y(a).hideAllLoadMoreElements()})}}
function Wb(a,b){var c=a.element.getAttribute("items")||"items",d=b;"."!=c&&(d=rb(b,c));w("undefined"!==typeof d,'Response must contain an array or object at "%s". %s',c,a.element);a.element.hasAttribute("single-item")&&!q(d)&&(d=[d]);d=u().assertArray(d);a.element.hasAttribute("max-items")&&(b=d,a=parseInt(a.element.getAttribute("max-items"),10),a<b.length&&(b=b.slice(0,a)),d=b);return d}
function Xb(a,b){b=b?wb(a.win,"amp-list.error",x({response:b.response})):null;a.O.trigger(a.element,"fetch-error",b,1)}
function Hb(a,b){b=void 0===b?!1:b;var c=a.element.getAttribute("src");if(!c)return p();if(a.w.isEnabled())var d=Yb(a,b);else d=A(c,"amp-state:")?Rb(a,c):A(c,"amp-script:")?Sb(a,c):Zb(a,b),d=d.then(function(b){if(c===a.element.getAttribute("src")){var d=Wb(a,b);a.j&&$b(a,b);return Z(a,d,!1,b).then(function(){return a.j?ac(a):p()})}});return d.catch(function(b){Xb(a,b);a.element.classList.add("i-amphtml-list-fetch-error");G(a.element,"fetch-error")&&X(a,a.element);a.toggleLoading(!1);a.getFallback()&&
(Ub(a,!0),a.togglePlaceholder(!1));throw b;})}function bc(a){return a.element.getAttribute("src")?Zb(a).then(function(b){var c=Wb(a,b);$b(a,b);return Z(a,c,!0,b)}):p()}function $b(a,b){var c=a.element.getAttribute("load-more-bookmark")||"load-more-src";a.B=rb(b,c)}
function Yb(a,b){var c=a.element.getAttribute("src"),d;return tb(a.element,cc(a),b).then(function(b){var c=d=b,e=a.win,g=d.xhrUrl;if(!1!==d.fetchOpt.ampCors){var l=B(g);l=ja(l.search);w(!("__amp_source_origin"in l),"Source origin is not allowed in %s",g);e=B(Aa(e.location.href)).origin;e=encodeURIComponent("__amp_source_origin")+"="+encodeURIComponent(e);e&&(g=g.split("#",2),l=g[0].split("?",2),e=l[0]+(l[1]?"?"+l[1]+"&"+e:"?"+e),g=e+=g[1]?"#"+g[1]:"")}c.xhrUrl=g;c=d;e=d.xhrUrl;g=(g=d.fetchOpt)||{};
l=a.win;l=l.origin||B(l.location.href).origin;e=B(e).origin;l==e&&(g.headers=g.headers||{},g.headers["AMP-Same-Origin"]="true");c.fetchOpt=g;pb(b.fetchOpt);b=x({ampListAttributes:{items:a.element.getAttribute("items")||"items",singleItem:a.element.hasAttribute("single-item"),maxItems:a.element.getAttribute("max-items")}});return a.w.ssr(a.element,d,null,b)}).then(function(a){w(a,"Error proxying amp-list templates, received no response.");var b=a.init;if(b&&(b=b.status,300<=b))throw u().createError("Error proxying amp-list templates with status: ",
b);w("string"===typeof a.html,"Expected response with format {html: <string>}. Received: ",a);d.fetchOpt.responseType="application/json";return a},function(a){throw u().createError("Error proxying amp-list templates",a);}).then(function(b){if(c===a.element.getAttribute("src"))return Z(a,b,!1)})}function Z(a,b,c,d){var e=new Ea,f=e.promise,h=e.resolve,g=e.reject;a.C||a.aa.schedule();a.C={data:b,resolver:h,rejecter:g,append:c,payload:d};a.ba&&c&&(a.C.payload=d||{});return f}
function Fb(a){function b(){a.C!==c?a.aa.schedule(1):(a.ba=a.C.data,a.C=null)}var c=a.C;u().fine("amp-list","Rendering list",a.element,"with data",c.data);var d=a.w.isEnabled(),e=a.w.applySsrOrCsrTemplate(a.element,c.data).then(function(b){return dc(a,b,c.append)}).then(function(b){return ec(a,b,c.append)});if(!d){var f=c.payload;e=e.then(function(){if(a.j){var b=[];b.push(fc(a,Y(a).getLoadMoreButton(),f));b.push(fc(a,Y(a).getLoadMoreEndElement(),f));b=Promise.all(b)}else b=p();return b})}e.then(function(){b();
c.resolver()},function(){b();c.rejecter()})}function fc(a,b,c){return b&&a.A.hasTemplate(b)?a.A.findAndRenderTemplate(b,c).then(function(c){return a.mutateElement(function(){Qa(b);b.appendChild(c)})}):p()}
function dc(a,b,c){function d(b){return b.rescan(e,c?[]:[a.h],{fast:!0,update:!0}).then(function(){return e},function(){return e})}var e=q(b)?b:[b],f=a.element.getAttribute("binding");if("no"===f||!e.some(function(a){return a.hasAttribute("i-amphtml-binding")||!!a.querySelector("[i-amphtml-binding]")}))return Promise.resolve(e);f||u().warn("amp-list",'Missing "binding" attribute. Using binding="refresh" is recommended for performance.');if(f&&A(f,"refresh")){if(a.D&&a.D.signals().get("FIRST_MUTATE"))return d(a.D);
L(a.element).then(function(a){a&&a.rescan(e,[],{fast:!0,update:"refresh-evaluate"==f?"evaluate":!1})});return Promise.resolve(e)}return L(a.element).then(function(a){return a?d(a):Promise.resolve(e)})}
function ec(a,b,c){function d(){a.element.classList.remove("i-amphtml-list-fetch-error");a.toggleLoading(!1);a.getFallback()&&Ub(a,!1);a.togglePlaceholder(!1);if(a.element.hasAttribute("diffable")&&e.hasChildNodes()){var d=Lb(a);Tb(a,b,d);a.H&&gc(e);d=P(e,d);for(var h=0;h<d.length;h+=2)hc(d[h],d[h+1])}else c||(a.V.scheduleUnlayout(a.element,e),Qa(e)),Tb(a,b,e);d=wb(a.win,"amp:dom-update",null,{bubbles:!0});a.h.dispatchEvent(d);a.element.getResources().getResourceForElement(a.element).resetPendingChangeSize();
return Mb(a)}c=void 0===c?!1:c;v().info("amp-list","render:",a.element,b);var e=a.h;return!a.j&&a.m?Vb(a,function(){(d()||Promise.resolve(!0)).then(function(b){if(b){Ja(a.element,{height:"",overflow:""});var c=void 0}else c=null;return c})}):a.mutateElement(d)}function gc(a){var b=-1;la(a.querySelectorAll(".i-amphtml-element")).forEach(function(a){Ca(a,function(){return String(b--)})})}
function hc(a,b){var c=Ba[a.nodeName];if(c)if(c.some(function(c){return a.getAttribute(c)!==b.getAttribute(c)}))a.parentElement.replaceChild(b,a);else{for(var d=0;d<b.classList.length;d++)a.classList.add(b.classList[d]);for(d=0;d<a.classList.length;d++){var e=a.classList[d];A(e,"i-amphtml-")||b.classList.contains(e)||a.classList.remove(e)}if(b.hasAttribute("style")){var f=b.getAttribute("style");a.setAttribute("style",(a.getAttribute("style")||"")+";"+f)}}}
function Vb(a,b){if(!a.m||a.j)return v().error("amp-list","%s initialized with layout=container does not support infinite scrolling with [load-more]. %s",a.element),p();var c;return a.measureMutateElement(function(){c=a.element.offsetHeight},function(){Ja(a.element,{height:c+"px",overflow:"hidden"});return b()})}
function X(a,b){return"container"!=a.element.getAttribute("layout")||a.m?a.measureElement(function(){var c=b.scrollHeight;return c>a.element.offsetHeight?a.attemptChangeHeight(c).then(function(){return!0},function(){return!1}):!0}):Promise.resolve(!0)}function Qb(a,b){var c=a.B?Y(a).getLoadMoreButton():Y(a).getLoadMoreEndElement();ic(a,c,b)}
function ic(a,b,c){"container"!=a.element.getAttribute("layout")&&a.measureElement(function(){var d=c.scrollHeight,e=b?b.offsetHeight:0;d+e>a.element.offsetHeight&&a.attemptChangeHeight(d+e).then(function(){a.W=!1;"auto"===a.element.getAttribute("load-more")&&jc(a);E(a.h,{"max-height":""})}).catch(function(){a.W=!0;Ob(a)})})}
function Ib(a){if(a.m)return u().warn("amp-list","[is-layout-container] and changeToLayoutContainer are ineffective when an amp-list initially sets layout=container",a.element),p();var b=a.element.getAttribute("i-amphtml-layout");return"container"==b?p():a.mutateElement(function(){a:{for(c in La)if(La[c]==b){var c=La[c];break a}c=void 0}a.element.classList.remove("i-amphtml-layout-"+c,"i-amphtml-layout-size-defined");["fixed","flex-item","fluid","intrinsic","responsive"].includes(c)?E(a.element,{width:"",
height:""}):"fixed-height"==c&&E(a.element,{height:""});a.element.applySize();a.h.classList.remove("i-amphtml-fill-content","i-amphtml-replaced-content");(c=a.getOverflowElement())&&Ka(c);a.element.setAttribute("layout","container");a.element.setAttribute("i-amphtml-layout","container");a.element.classList.add("i-amphtml-layout-container")})}
function ac(a){return a.B?("auto"===a.element.getAttribute("load-more")&&kc(a),a.mutateElement(function(){Y(a).toggleLoadMoreLoading(!1);E(Y(a).getLoadMoreButton(),{visibility:""})})):a.mutateElement(function(){return Y(a).setLoadMoreEnded()})}
function Pb(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;if(a.B)a.element.setAttribute("src",a.B),a.B=null;else if(!b)return p();var d=lc(a.h);a.mutateElement(function(){Y(a).toggleLoadMoreLoading(!0)});return bc(a).then(function(){return a.mutateElement(function(){if(a.B){if(Y(a).toggleLoadMoreLoading(!1),d&&c)try{d.focus()}catch(e){}}else Y(a).setLoadMoreEnded()})}).then(function(){Qb(a,a.h)}).catch(function(b){Xb(a,b);mc(a)})}
function mc(a){a.mutateElement(function(){return Y(a).setLoadMoreFailed()}).then(function(){ic(a,Y(a).getLoadMoreFailedElement(),a.h)})}function kc(a){a.da||(a.da=a.K.onChanged(function(){return jc(a)}))}function jc(a){a.W||a.K.getClientRectAsync(a.h.lastChild||a.h).then(function(b){if(3*a.K.getHeight()>b.bottom)return Pb(a)})}
function Zb(a,b){b=void 0===b?!1:b;b=void 0===b?!1:b;return sb(a.getAmpDoc(),a.element,{expr:".",urlReplacement:cc(a),refresh:b,xssiPrefix:a.element.getAttribute("xssi-prefix")||void 0})}function cc(a){var b=a.element.getAttribute("src"),c=1;if(b==a.$||B(Aa(b)).origin==B(Aa(a.getAmpDoc().win.location)).origin)c=2;return c}
function lc(a){return(a=(void 0!==F?F:F=Ma(a))?a.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'.replace(/^|,/g,"$&:scope ")):Sa(a,'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls], video[controls], [contenteditable]:not([contenteditable="false"])'))?a[a.length-1]:null}(function(a){a.registerElement("amp-list",U,"amp-list.i-amphtml-list-fetch-error [fetch-error],amp-list[load-more] [load-more-button].amp-visible,amp-list[load-more] [load-more-end].amp-visible,amp-list[load-more] [load-more-failed].amp-visible,amp-list[load-more] [load-more-loading].amp-visible{display:block}amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{height:80px;padding:12px 0px;box-sizing:border-box}.i-amphtml-list-load-more-button,amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#333;text-align:center}amp-list[load-more] [load-more-loading].i-amphtml-default-ui .i-amphtml-list-load-more-spinner{display:inline-block;width:40px;height:40px;margin:8px 0px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23333' stop-opacity='.75'/%3E%3Cstop offset='100%25' stop-color='%23333' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M11 4.4A18 18 0 1038 20' fill='none' stroke='url(%23a)' stroke-width='1.725'/%3E%3C/svg%3E\");animation:amp-list-load-more-spinner 1000ms linear infinite}@keyframes amp-list-load-more-spinner{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}.i-amphtml-list-load-more-button{border:none;display:inline-block;background-color:rgba(51,51,51,0.75);color:#fff;margin:4px 0px;padding:0px 32px;box-sizing:border-box;height:48px;border-radius:24px}[load-more] div[role=list]{overflow-y:hidden}.i-amphtml-list-load-more-button,.i-amphtml-list-load-more-button label,.i-amphtml-list-load-more-icon{cursor:pointer}.i-amphtml-list-load-more-button:hover{background-color:#333}.i-amphtml-list-load-more-button.i-amphtml-list-load-more-button-small{margin:0px;padding:4px 16px;height:32px}.i-amphtml-list-load-more-button label{display:inline-block;vertical-align:middle;line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-message{line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-icon{height:24px;width:24px;display:inline-block;vertical-align:middle;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23fff' d='M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-list/0.1/amp-list.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-list-0.1.js.map
