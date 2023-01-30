!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://storage.yandexcloud.net/cft/microfronts/header/footer/",n(n.s="k+nG")}({"09RC":function(e,t,n){"use strict";n("lfCk");var o=n("CQbg"),r=n("Bavv");const s=o.b`
  :host {
    --button-color: inherit;
    --button-hover-color: var(--button-color);
    --button-bg: transparent;
    --button-hover-bg: var(--button-bg);
    --button-border-color: transparent;
    --button-outline: blueviolet;
    --button-border-radius: 4px;
    --button-active-scale: 0.98;

    position: relative;

    color: var(--button-color);
    background-color: var(--button-bg);

    border-radius: var(--button-border-radius);
  }

  :host([scalable]) {
    display: inline-flex;
    background-color: transparent;
  }

  .button-scalable-bg {
    --scale: 1;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    display: block;

    background-color: var(--button-bg);
    border-radius: var(--button-border-radius);

    transform: scale(var(--scale));
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in;

    will-change: transform;
  }

  ::slotted(button),
  ::slotted(a) {
    z-index: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    color: var(--button-color) !important;
    font-weight: 400;
    font-size: 1rem;
    font-family: inherit;
    line-height: 1em;
    text-decoration: none;
    background-color: var(--button-bg) !important;
    border: 1px solid var(--button-border-color);
    border-radius: var(--button-border-radius);
  }

  ::slotted(*) {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  :host([scalable]) ::slotted(button),
  :host([scalable]) ::slotted(a) {
    background-color: transparent !important;
  }

  ${Object(r.b)(o.b`
    :host(:not([scalable]):hover),
    :host(:not([scalable]):hover) ::slotted(button),
    :host(:not([scalable]):hover) ::slotted(a),
    :host([scalable]:hover) .button-scalable-bg {
      background-color: var(--button-hover-bg) !important;
    }

    :host(:hover),
    :host(:hover) ::slotted(button),
    :host(:hover) ::slotted(a) {
      color: var(--button-hover-color) !important;
    }
  `)}

  :host(:not([scalable]):active),
  :host(:not([scalable]):active) ::slotted(button),
  :host(:not([scalable]):active) ::slotted(a), 
  :host([scalable]:active) .button-scalable-bg {
    background-color: var(--button-hover-bg) !important;
  }

  :host(:active),
  :host(:active) ::slotted(button),
  :host(:active) ::slotted(a) {
    color: var(--button-hover-color) !important;
  }

  :host([scalable]:active) .button-scalable-bg {
    --scale: var(--button-active-scale);
  }

  ::slotted(button:focus),
  ::slotted(a:focus) {
    outline: none;
  }

  ::slotted(button:focus-visible),
  ::slotted(a:focus-visible) {
    box-shadow: 0 0 0 3px var(--button-outline);
  }

  ::slotted(button.focus-visible),
  ::slotted(a.focus-visible) {
    box-shadow: 0 0 0 3px var(--button-outline);
  }

  :host([buttonstyle='primary']) {
    --button-color: #fff;
    --button-bg: #484e5c;
    --button-hover-bg: #585f71;
  }

  :host([buttonstyle='secondary']) {
    --button-color: rgb(72, 78, 92);
    --button-bg: #ffffff;
    --button-hover-bg: #f7f7f7;
  }

  :host([buttonstyle='text']) {
    --button-color: rgb(72, 78, 92);
    --button-hover-color: #e6615e;
  }

  .button.m::slotted(button),
  .button.m::slotted(a) {
    padding: 16px 40px;
    font-size: 16px;
    line-height: 19px;
  }

  .button.l::slotted(button),
  .button.l::slotted(a) {
    padding: 24px 76px;
    font-size: 18px;
    line-height: 21px;
  }

  .button.l::slotted(button),
  .button.l::slotted(a) {
    padding: 24px 76px;
    font-size: 18px;
    line-height: 21px;
  }

  .button.fullwidth::slotted(button),
  .button.fullwidth::slotted(a) {
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    line-height: 19px;
  }

  .button.container::slotted(button),
  .button.container::slotted(a) {
    width: 100%;
    height: 100%;
  }
`,i={buttonstyle:{type:String},buttonsize:{type:String,reflect:!0},scalable:{type:Boolean,reflect:!0}};class a extends o.a{static get properties(){return i}static get styles(){return s}constructor(){super(),this.buttonstyle="base",this.buttonsize="",this.scalable=!1}firstUpdated(){null!=window.applyFocusVisiblePolyfill&&window.applyFocusVisiblePolyfill(this.shadowRoot)}render(){return o.c`
      ${this.scalable?o.c`
            <div class="button-scalable-bg"></div>
          `:""}
      <slot class="button ${this.buttonstyle} ${this.buttonsize}"></slot>
    `}}var c=n("GE3P");Object(c.a)("uc-button",a)},"0Phq":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={setRequestParams:"globalEvents/setRequestParams",setRequestID:"globalEvents/setRequestID",setUserAgent:"globalEvents/userAgent",setIsBot:"globalEvents/isBot"}},"0RBU":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h}));const o=1200,r=1023,s=767,i=1024,a=768;let c=null;function l(e){return window.matchMedia(e).matches}function u(){return l(`(min-width: ${o}px)`)}function d(){return l("(max-width: 1199px) and (min-width: 1024px)")}function p(){return"boolean"!=typeof c&&(c=l(`(max-width: ${s}px)`)),c}function h(){return l(`(max-width: ${r}px) and (min-width: 768px)`)||p()}},"0apH":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("VG9E");n("PuJ1");const r=Object(o.a)("div")({name:"CssBaseline",class:"c1caiasm_header-footer"});n("kjdh")},"1yRy":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const o={init:"suggestions/FETCH_SUGGESTIONS/init",request:"suggestions/FETCH_SUGGESTIONS/request",success:"suggestions/FETCH_SUGGESTIONS/success",failure:"suggestions/FETCH_SUGGESTIONS/failure",cancel:"suggestions/FETCH_SUGGESTIONS/cancel"},r="suggestions/RESET_SERVICES"},"2FAm":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const o={init:"pageModel/FETCH_MODEL/init",request:"pageModel/FETCH_MODEL/request",success:"pageModel/FETCH_MODEL/success",failure:"pageModel/FETCH_MODEL/failure",cancel:"pageModel/FETCH_MODEL/cancel"},r="pageModel/RESET"},"2POY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("jogK");const r=(e,t)=>{const n=new o.a;return class extends e{connectedCallback(){super.connectedCallback(),this.__add__events__handler()}disconnectedCallback(){super.disconnectedCallback(),n.release()}__add__events__handler(){super.__add__events__handler&&super.__add__events__handler(),n.addMany(t.map(({event:e,handler:t,params:n={}})=>{const o=e=>t(e,this),{element:r="document"}=n,s={self:this,document:document,window:window};return s[r].addEventListener(e,o,n),()=>s[r].removeEventListener(e,o,n)}))}}}},"4Uh2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return a.b}));var o=n("87j4");let r=new o.a;function s(){return"undefined"!=typeof window?window.storeConfig:r}function i(e){if("undefined"!=typeof window)return window.storeConfig=e;r=e}r.setConfig({bundle:{name:o.b,paths:["/"]}}),"undefined"==typeof window||window.storeConfig||(window.storeConfig=r);var a=n("D7AY");const c={cdnUrl:"",server:"",name:"defaultBundle",paths:[],scripts:[],styles:[],stored:[]};function l(){let e="undefined"!=typeof window&&window.mainBundle;return Object(a.b)(e||c)}},"4YED":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],a=!1,c=-1,l=void 0,u=void 0,d=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},p=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},f=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),s?(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-c;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?p(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",p,o?{passive:!1}:void 0),a=!0)):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(e){e?(i=i.filter((function(t){return t.targetElement!==e})),s?(e.ontouchstart=null,e.ontouchmove=null,a&&0===i.length&&(document.removeEventListener("touchmove",p,o?{passive:!1}:void 0),a=!1)):i.length||h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"7TFv":function(e,t,n){"use strict";function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function r(e,t,n){let o=e?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return t&&n&&(o=`(?:\\/${o})`),o+(t?"?":"")}function s(e,t=!1,n=!1){if("/"===e||""===e)return{keys:[],regexp:new RegExp(`^${t?"\\/":"(?:\\/(?=$))?"}${n?"$":t?"":"(?=\\/|$)"}`,"i")};const s=/:([A-Za-z0-9_]+)([?+*]?)/g;let i=null,a=0,c=[],l="";for(;null!==(i=s.exec(e));){const[,t,n]=i,u="+"===n||"*"===n,d="?"===n||"*"===n,p=d&&"/"===e[i.index-1]?1:0,h=e.substring(a,i.index-p);c.push({name:t}),a=s.lastIndex,l+=o(h)+r(u,d,!!p)}return l+=o(e.substring(a)),{keys:c,regexp:new RegExp(`^${l}${(t?"":"(?:\\/(?=$))?")+(n?"$":"(?=\\/|$)")}`,"i")}}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));const i=new Map;function a(e,t,n){const o=`_${t?"t":"f"}_${n?"t":"f"}_${e}`;return i.has(o)||i.set(o,s(e,t,n)),i.get(o)}},"7isM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));let o=(e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}},"7raJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n("cDcd");let r=Object(o.createContext)(),s="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,i=(...e)=>{let t=Object(o.useContext)(r);let n=Object(o.useState)({});return s(()=>t.on("@changed",(t,o)=>{e.some(e=>e in o)&&n[1]({})}),[]),Object(o.useMemo)(()=>{let n=t.get(),o={};return e.forEach(e=>{o[e]=n[e]}),o.dispatch=t.dispatch,o},[n[0]])}},"87j4":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var o=n("7TFv"),r=n("D7AY");const s="defaultBundle";class i{constructor(){this._stored_paths=[],this._presets={},this._descriptions={},this.config=function(t={}){return{name:"",server:`http://localhost:${e.env.PORT||3e3}/`,paths:[""],cdnUrl:"",sd:"",...t,stored:new Map,widgets:new Set,resources:{}}}()}static fromMainBundle(e){const{name:t,paths:n,stored:o=[],widgets:r=[],resources:s={},...a}=e,c=new i;return c.setConfig({bundle:{name:t,paths:n},config:a}),o.forEach(e=>{c.addStored(e[0],e[1])}),r.forEach(e=>{c.config.widgets.add(e),c.config.resources[e]=s[e]}),c}setConfig({bundle:e,config:t={}}){this.config={...this.config,name:e.name,paths:e.paths||["/"],...t},this.addStored(this.config.server,this.config.paths)}mergeConfig(e={}){this.config={...this.config,...e}}get name(){return this.config.name?this.config.name:s}get paths(){return this.config.paths.concat([...this.config.widgets].map(e=>"/remote-widget/"+e))}get server(){return this.config.server}get cdnUrl(){return""!==this.config.cdnUrl?this.config.cdnUrl:this.config.server||""}get sd(){return this.config.sd}getConfig(){return this.config}toString(){return JSON.stringify(this.toJSON())}toJSON(){return{...this.config,widgets:[...this.config.widgets],stored:[...this.config.stored.entries()],cdnUrl:this.cdnUrl,paths:this.paths}}addStored(e,t){this.config.stored.has(e)||(this.config.stored.set(e,t),t.forEach(t=>{this._stored_paths.push({server:e,...Object(o.a)(t,!1,!0)})}))}addWidget(e,t){this.config.widgets.add(e),this.config.resources[e]=Object(r.a)(t,this.cdnUrl)}getResources(e){return this.config.resources[e]}getWidgets(){return this.config.widgets}getServerByPath(e){for(let t=0;t<this._stored_paths.length;t+=1)if(this._stored_paths[t].regexp.exec(e))return this._stored_paths[t].server;return null}getServersByUrl(e){const t=[];for(let n=0;n<this._stored_paths.length;n+=1)this._stored_paths[n].regexp.exec(e)&&t.push(this._stored_paths[n].server);return t}addDescription(e,t){this._descriptions[e]=t}getDescription(e){return this._descriptions[e]||""}addPreset(e,t){this._presets[e]=(this._presets[e]||[]).concat([t])}addPresets(e,t){this._presets[e]=(this._presets[e]||[]).concat(t)}getPresets(e){return this._presets[e]}getWidgetInfo(e){return{name:e,description:this.getDescription(e),presets:this.getPresets(e),resources:this.getResources(e)}}}}).call(this,n("8oxB"))},"8oxB":function(e,t){var n,o,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9ONQ":function(e,t,n){"use strict";var o=n("iVi/");function r(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?o.parse(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),r(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var o in this.cookies)n[o]=r(this.cookies[o],e);return n},e.prototype.set=function(e,t,n){var r;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=i},Bavv:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));var o=n("CQbg");const r=(e,t=14)=>Object(o.e)(e/t+"rem"),s=e=>o.b`
  @media (hover: hover) and (min-width: 1024px),
    (min-width: 0\\0),
    (min--moz-device-pixel-ratio: 0) {
    ${e}
  }
`},CO7v:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("CQbg");let r;const s=Object(o.d)(r||(r=(e=>e)`<svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 8l8-8 1.5 1.5L3 8l6.5 6.5L8 16 0 8z"/></svg>`))},CQbg:function(e,t,n){"use strict";n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return F})),n.d(t,"e",(function(){return ne})),n.d(t,"b",(function(){return oe})),n.d(t,"a",(function(){return se}));const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${i}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let i=0,c=-1,u=0;const{strings:h,values:{length:f}}=e;for(;u<f;){const e=r.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let o=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=h[u],n=p.exec(t)[2],o=n.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const s=r.split(a);this.parts.push({type:"attribute",index:c,name:n,strings:s}),u+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const o=e.parentNode,r=t.split(a),s=r.length-1;for(let t=0;t<s;t++){let n,s=r[t];if(""===s)n=d();else{const e=p.exec(s);null!==e&&l(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(s)}o.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===r[s]?(o.insertBefore(d(),e),n.push(e)):e.data=r[s],u+=s}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&c!==i||(c++,t.insertBefore(d(),e)),i=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:n},parts:o}=e,r=document.createTreeWalker(n,133,null,!1);let s=m(o),i=o[s],a=-1,c=0;const l=[];let u=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==i&&i.index===a;)i.index=null!==u?-1:i.index-c,s=m(o,s),i=o[s]}l.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(u(t))return n}return-1};const g=new WeakMap,b=e=>"function"==typeof e&&g.has(e),y={},v={};class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,i=0,a=0,c=r.nextNode();for(;i<n.length;)if(s=n[i],u(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=t.pop(),c=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}const x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${s} `;class O{constructor(e,t,n,o){this.strings=e,this.values=t,this.type=n,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const a=p.exec(e);t+=null===a?e+(n?_:i):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==x&&(t=x.createHTML(t)),e.innerHTML=t,e}}class S extends O{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,o=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,o),t=n}})(t,n.firstChild),e}}const j=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!E(e))return e}let o="";for(let r=0;r<t;r++){o+=e[r];const t=n[r];if(void 0!==t){const e=t.value;if(j(e)||!E(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||j(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(j(e)?e!==this.value&&this.__commitText(e):e instanceof O?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),o=n._clone();n.update(e.values),this.__commitNode(o),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,o=0;for(const r of e)n=t[o],void 0===n&&(n=new T(this.options),t.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(r),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class P extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new L(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class L extends C{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=I(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const I=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function R(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(s);return n=t.keyString.get(o),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const M=new Map,U=new WeakMap;const D=new class{handleAttributeExpressions(e,t,n,o){const r=t[0];if("."===r){return new P(e,t.slice(1),n).parts}if("@"===r)return[new N(e,t.slice(1),o.eventContext)];if("?"===r)return[new A(e,t.slice(1),n)];return new k(e,t,n).parts}handleTextExpression(e){return new T(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const B=(e,...t)=>new O(e,t,"html",D),F=(e,...t)=>new S(e,t,"svg",D),z=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const H=e=>t=>{const n=z(t.type,e);let o=M.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},M.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(s);if(r=o.keyString.get(i),void 0===r){const n=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(n,e),r=new c(t,n),o.keyString.set(i,r)}return o.stringsArray.set(t.strings,r),r},V=["html","svg"],G=new Set,Y=(e,t,n)=>{G.add(e);const o=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(o,e);const i=document.createElement("style");for(let e=0;e<s;e++){const t=r[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}(e=>{V.forEach(t=>{const n=M.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),h(e,n)})})})(e);const a=o.content;n?function(e,t,n=null){const{element:{content:o},parts:r}=e;if(null==n)return void o.appendChild(t);const s=document.createTreeWalker(o,133,null,!1);let i=m(r),a=0,c=-1;for(;s.nextNode();){c++;for(s.currentNode===n&&(a=f(t),n.parentNode.insertBefore(t,n));-1!==i&&r[i].index===c;){if(a>0){for(;-1!==i;)r[i].index+=a,i=m(r,i);return}i=m(r,i)}}}(n,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(i,a.firstChild);const e=new Set;e.add(i),h(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const o=this._attributeNameForProperty(n,t);void 0!==o&&(this._attributeToPropertyMap.set(o,n),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||K}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=J){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,o=t.converter||W,r="function"==typeof o?o:o.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,o=t.converter;return(o&&o.toAttribute||W.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=K){const o=this.constructor,r=o._attributeNameForProperty(e,n);if(void 0!==r){const e=o._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(e);if(void 0!==o){const e=n.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let o=!0;if(void 0!==e){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ne=e=>new te(String(e),ee),oe=(e,...t)=>{const n=t.reduce((t,n,o)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new te(n,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const re={};class se extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),o=[];n.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Z){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return ne(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==re&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return re}}se.finalized=!0,se.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,s=U.has(t),i=q&&11===t.nodeType&&!!t.host,a=i&&!G.has(o),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let o=U.get(t);void 0===o&&(r(t,t.firstChild),U.set(t,o=new T(Object.assign({templateFactory:R},n))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:H(o)},n)),a){const e=U.get(c);U.delete(c);const n=e.value instanceof w?e.value.template:void 0;Y(o,c,n),r(t,t.firstChild),t.appendChild(c),U.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)},se.shadowRootOptions={mode:"open"}},D7AY:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var o=n("yNQq");function r(e,t){return e&&t&&!e.startsWith("http://")&&!e.startsWith("https://")?t+e:e}function s(e,t){return{scripts:e.scripts.map(e=>(e=r(e,t),new o.a("script",{src:e}))),styles:e.styles.map(e=>(e=r(e,t),new o.a("link",{rel:"stylesheet",href:e})))}}function i(e){var t,n,r,s;let i={...e,scripts:null===(t=e.scripts)||void 0===t?void 0:t.map(o.a.fromJson),styles:null===(n=e.styles)||void 0===n?void 0:n.map(o.a.fromJson),resources:{}};if(e.resources){i.resources={};for(const t of Object.keys(e.resources))i.resources[t]={scripts:null===(r=e.resources[t].scripts)||void 0===r?void 0:r.map(o.a.fromJson),styles:null===(s=e.resources[t].styles)||void 0===s?void 0:s.map(o.a.fromJson)}}return i}},Duuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("cDcd");function r(e,t,n){const r=Object(o.useMemo)(()=>function(e,t){let n={};return Object.keys(e).forEach(o=>{let r=t[o];if(!r||null==e[o])return;let[s,i]=r;"function"==typeof s&&(s=s(o));let a=i(e[o]);if(Array.isArray(s))for(let e of s)n[e]=a;else n[s]=a}),n}(e,t),[e,t]);return Object(o.useMemo)(()=>({style:{...n,...r}}),[n,r])}},ECaf:function(e,t,n){"use strict";var o=n("GE3P"),r=n("CQbg"),s=n("jogK");let i,a,c=e=>e;class l extends r.a{render(){return Object(r.c)(i||(i=c`<slot></slot>`))}}l.styles=Object(r.b)(a||(a=c`
    :host {
      display: block;
    }

    ${0}
  `),Object(s.d)()),Object(o.a)("uc-page-content",l)},GB9r:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("cDcd"),r=n("iuhU"),s=n("JyMA"),i=n.n(s);const a=o.forwardRef((function({as:e="div",children:t,className:n,...s},a){return o.createElement(e,{role:"presentation",...s,className:Object(r.a)(n,i.a.layout),ref:a},t)}))},GE3P:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("0RBU");function o(e,t){customElements.get(e)||customElements.define(e,t)}},HLvI:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var o=n("cDcd");const r=Object(o.createContext)(Object(o.createRef)());function s(){return{root:Object(o.useContext)(r)}}const i=r.Provider},Hz6d:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));const o=e=>{var t,n;return null!==(t=(null===(n=e["user-auth"])||void 0===n?void 0:n.length)>0)&&void 0!==t&&t},r=e=>{var t;return null!==(t=e.customerId)&&void 0!==t?t:null==e?void 0:e._gid},s=(e,t,n)=>{const o=(e=>e._regionID)(e),r=new URLSearchParams(n).get("fromRegion");return o!==t&&!(r===o)},i=e=>"true"===e.cookie_accepted,a=e=>null==e?void 0:e.userData},I4wW:function(e,t,n){e.exports={"text-primary":"#333","text-secondary":"#666","text-minor":"#999","text-invert":"#fff","background-accent":"#2e323d","background-secondary":"#f2f3f5","background-primary":"#fff","control-primary":"#464c5c","control-secondary":"#ced0d6","control-minor":"#e8e9eb","control-invert":"#fff","control-secondary-invert":"#ffffff66","control-minor-invert":"#ffffff28","control_hover-primary":"#1c212e","control_hover-secondary":"#a9adb8","control_hover-minor":"#dcdde0","control_hover-primary-invert":"#ffffffea","control_hover-secondary-invert":"#ffffff7f","control_hover-minor-invert":"#ffffff3d","success-primary":"#5ab030","success-dark":"#488c26","success-light":"#deefd5","brand-primary":"#5ab030","brand-dark":"#488c26","brand-light":"#deefd5","brand-minor":"#000","brand-invert":"#fff","accent-primary":"#f4be55","accent-dark":"#c39844","accent-light":"#fcf2dd","attention-primary":"#e6615e","attention-dark":"#b84d4b","attention-light":"#fadfde","secondary-green_primary":"#00b2a9","secondary-green_dark":"#008e87","secondary-green_light":"#ccefed","secondary-blue_primary":"#3d6be3","secondary-blue_dark":"#3b59a4","secondary-blue_light":"#d1deff","secondary-orange_primary":"#d95e00","secondary-orange_dark":"#ad4b00","secondary-orange_light":"#f7decc","secondary-purple_primary":"#8961a5","secondary-purple_dark":"#6d4d84","secondary-purple_light":"#e7dfed","secondary-yellow_primary":"#ffe55a","secondary-yellow_dark":"#ccb748","secondary-yellow_light":"#fff9de","opacity-4":"0.4","opacity-6":"0.6","opacity-8":"0.8","rounding-m":"4px","rounding-l":"8px","rounding-xl":"16px","box-shadow-m":"0 1.17px 2px rgba(0, 0, 0, 0.0196802), 0 1.4px 5px rgba(0, 0, 0, 0.03), 0 2px 10px rgba(0, 0, 0, 0.03), 0 2px 18px rgba(0, 0, 0, 0.04), 0 9px 33px rgba(0, 0, 0, 0.03)","box-shadow-m-up":"0 -1.17px 2px rgba(0, 0, 0, 0.0196802), 0 -1.4px 5px rgba(0, 0, 0, 0.03), 0 -2px 10px rgba(0, 0, 0, 0.03), 0 -2px 18px rgba(0, 0, 0, 0.04), 0 -9px 33px rgba(0, 0, 0, 0.03)","box-shadow-s":"0 1px 4px rgba(0, 0, 0, 0.16), 0 2px 9px rgba(0, 0, 0, 0.02)","box-shadow-s-up":"0 -1px 4px rgba(0, 0, 0, 0.16), 0 -2px 9px rgba(0, 0, 0, 0.02)","box-shadow-l":"0 0.166035px 2.21381px rgba(0, 0, 0, 0.0196802), 0 0.399006px 5.32008px rgba(0, 0, 0, 0.0282725), 0 0.751293px 10.0172px rgba(0, 0, 0, 0.035), 0 12px 40px rgba(0, 0, 0, 0.08)","box-shadow-l-up":"0 -0.166035px 2.21381px rgba(0, 0, 0, 0.0196802), 0 -0.399006px 5.32008px rgba(0, 0, 0, 0.0282725), 0 -0.751293px 10.0172px rgba(0, 0, 0, 0.035), 0 -12px 40px rgba(0, 0, 0, 0.08)","space-10":"1px","space-25":"2px","space-35":"3px","space-50":"4px","space-60":"5px","space-75":"6px","space-85":"7px","space-100":"8px","space-125":"10px","space-150":"12px","space-175":"14px","space-200":"16px","space-225":"18px","space-250":"20px","space-275":"22px","space-300":"24px","space-325":"26px","space-350":"28px","space-375":"30px","space-400":"32px","space-425":"34px","space-450":"36px","space-475":"38px","space-500":"40px","space-525":"42px","space-550":"44px","space-575":"46px","space-600":"48px","space-625":"50px","space-650":"52px","space-675":"54px","space-700":"56px","space-725":"58px","space-750":"60px","space-775":"62px","space-800":"64px","space-825":"66px","space-850":"68px","space-875":"70px","space-900":"72px","space-925":"74px","space-950":"76px","space-975":"78px","space-1000":"80px",themeProvider:"_2Z7Yxx-mHq_header-footer",constants:"_1cM5Sipjng_header-footer",lightTheme:"_17Q5fplowC_header-footer"}},IcJs:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return p})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return f}));const o="RUB",r="DY:add_to_cart",s="DY:remove_from_cart",i="DY:sync_cart",a="DY:add_to_wishlist",c="DY:filter_items",l="DY:sort_items",u="DY:keyword_search",d="DY:login",p={[r]:{dyType:"add-to-cart-v1",name:"Add to Cart"},[s]:{dyType:"remove-from-cart-v1",name:"Remove from Cart"},[i]:{dyType:"sync-cart-v1",name:"Sync cart"},[a]:{dyType:"add-to-wishlist-v1",name:"Add to Wishlist"},[c]:{dyType:"filter-items-v1",name:"Filter Items"},[l]:{dyType:"sort-items-v1",name:"Sort Items"},[u]:{dyType:"keyword-search-v1",name:"Keyword Search"},[d]:{dyType:"login-v1",name:"Login"},"DY:signup":{dyType:"signup-v1",name:"Signup"},"DY:purchase":{dyType:"purchase-v1",name:"Purchase"}},h="DY_SS_CART_SYNC_NECESSARY",f="DY_SS_LOGIN_NECESSARY"},JZOa:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=()=>"undefined"!=typeof window&&!0},JyMA:function(e,t,n){e.exports={layout:"_2Q3l31oBv8_header-footer"}},MBLA:function(e,t,n){},MC5f:function(e,t,n){"use strict";var o=n("GE3P"),r=n("CQbg");class s extends r.a{static get properties(){return{url:{type:String},img:{type:String}}}static get styles(){return r.b`
      :host {
        display: block;
      }
      a,
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    `}constructor(){super(),this.url="",this.img=""}firstUpdated(e){super.firstUpdated(e);const t=this.querySelector("a"),n=this.querySelector("img");t&&(this.url=t.getAttribute("href")),n&&(this.img=n.getAttribute("src"))}render(){return r.c`
      <a href="${this.url}">
        <img src="${this.img}" alt="" />
      </a>
    `}}Object(o.a)("uc-header-logo",s);var i=n("4YED"),a=n("iuhU"),c=n("jogK");let l;const u=Object(r.d)(l||(l=(e=>e)`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.39113L18.6089 4L12 10.6089L5.39113 4L4 5.39113L10.6089 12L4 18.6089L5.39113 20L12 13.3911L18.6089 20L20 18.6089L13.3911 12L20 5.39113Z"/></svg>`));n("ECaf");let d,p,h,f,m,g=e=>e;class b extends r.a{static get styles(){return Object(r.b)(d||(d=g`
      :host {
        display: flex;
        box-sizing: border-box;
        height: ${0};
        padding: ${0} 0;
      }

      ${0}

      .header-wrap {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .left-side,
      .right-side {
        display: flex;
        flex: 1 1 50%;
        height: 100%;
      }

      .logo {
        display: flex;
        align-items: center;
        flex: none;
        box-sizing: border-box;
        width: ${0};
        height: 100%;
        padding-bottom: ${0};
        margin: auto;
      }

      ${0}
    `),Object(c.j)(82),Object(c.j)(20),Object(c.i)(Object(r.b)(p||(p=g`
        :host {
          height: ${0};
        }
      `),Object(c.j)(62))),Object(c.j)(47),Object(c.j)(4),Object(c.e)(Object(r.b)(h||(h=g`
        .logo {
          width: ${0};
        }
      `),Object(c.j)(60))))}render(){return Object(r.c)(f||(f=g`
      <uc-page-content>
        <header class="header-wrap">
          ${0}

          <slot name="logo" class="logo">
            <uc-header-logo>
              <a href="/">
                <img src="https://leroymerlin.ru/etc/designs/elbrus/images/logo.svg" alt="Leroy Merlin" />
              </a>
            </uc-header-logo>
          </slot>

          <slot class="right-side" name="right-side"></slot>
        </header>
      </uc-page-content>
    `),c.b.notDesktop(Object(r.c)(m||(m=g` <slot class="left-side" name="left-side"></slot> `))))}}Object(o.a)("uc-header-container",b);var y=n("Bavv");let v,w,x=e=>e;const _=Object(r.b)(v||(v=x`
  :host {
    contain: strict;
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.1s ease-in, visibility 0.1s linear;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .overlay.no-scroll {
    overflow: hidden;
  }

  :host([notransition]) .overlay {
    transition: none;
  }

  .header-wrap {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    align-items: center;
    width: 100%;
    flex: none;
    background-color: #fff;
  }

  @supports not ((position: sticky) or (position: -webkit-sticky)) {
    .header-wrap {
      position: absolute;
    }

    .content {
      padding-top: ${0};
    }

    ${0}
  }

  .container {
    min-height: 100%;
  }

  .scroll-compensator {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: calc(100vw - var(--scrollbar-width, 0));
  }

  .content {
    display: flex;
    flex: 1 1 100%;
    min-height: 100%;
    flex-direction: column;
  }

  .overlay.show {
    visibility: visible;
    opacity: 1;
  }

  .close {
    --button-color: var(--close-button-color);

    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .close-inner {
    margin: 0 -${0};
    padding: ${0};
  }

  :host([withoutheader]) .overlay {
    box-shadow: none;
  }

  :host([dark]) .overlay {
    background-color: rgb(68, 75, 91, 0.6);
  }
`),Object(y.a)(62),Object(c.e)(Object(r.b)(w||(w=x`
      .content {
        padding-top: ${0};
      }
    `),Object(y.a)(82))),Object(y.a)(8),Object(y.a)(8));var O=n("2POY");function S(e,t){27===e.keyCode&&t()}let j,E,k,C,T=e=>e;class A extends r.a{constructor(){super(),this._reflectOuterStateToInnerState=e=>{this._show!==e&&(this._show=e,this._lockBodyScroll(e))},this._lockBodyScroll=e=>{e?Object(i.a)(this._overlayRef,{reserveScrollBarGap:!0}):Object(i.b)(this._overlayRef)},this.show=!1,this.disableFocusLock=!1,this.overlayLevel=c.g,this.withoutHeader=!1,this.noTransition=!1,this.noScroll=!1,this.closeColor="#a9acb1",this._show=this.show,this._overlayRef=null,this._lastActiveElement=null,this.tabIndex=0,this.withoutLastElementFocus=!1}scrollToTop(){this._overlayRef&&(this._overlayRef.scrollTop=0)}firstUpdated(e){this._overlayRef=this.shadowRoot.querySelector(".js-overlay")}updated(e){if(super.updated(e),e.has("show")){const t=e.get("show"),{show:n}=this;!1===n&&void 0!==t&&this._overlayRef&&!this.noTransition?this._overlayRef.addEventListener("transitionend",()=>this._reflectOuterStateToInnerState(n),{once:!0,passive:!0}):this._reflectOuterStateToInnerState(n)}var t;e.has("_show")&&void 0!==this._show&&!this.withoutLastElementFocus&&(this._show?(this._lastActiveElement=Object(c.f)(),this.focus({preventScroll:!0})):null===(t=this._lastActiveElement)||void 0===t||t.focus());e.has("closeColor")&&this.style.setProperty("--close-button-color",this.closeColor)}disconnectedCallback(){super.disconnectedCallback(),this._lockBodyScroll(!1)}render(){return Object(r.c)(j||(j=T`
      <div
        class=${0}
        style="z-index: ${0}"
      >
        ${0}
      </div>
    `),Object(a.a)("overlay js-overlay",{show:this.show},{"no-scroll":this.noScroll}),this.overlayLevel,this._show?Object(r.c)(E||(E=T`
              <div class="container" ?inactive=${0}>
                <div class="scroll-compensator">
                  ${0}
                  <slot class="content"></slot>
                </div>
              </div>
            `),this.disableFocusLock,this.withoutHeader?Object(r.c)(C||(C=T``)):Object(r.c)(k||(k=T`
                        <uc-header-container class="header-wrap">
                          <div slot="left-side" class="title-wrap"><slot name="title"></slot></div>

                          <uc-button
                            slot="right-side"
                            class="close"
                            buttonstyle="text"
                            @click=${0}
                          >
                            <button type="button" class="close-inner" aria-label="Закрыть модальное окно">
                              <uc-icon class="icon" size="m">${0}</uc-icon>
                            </button>
                          </uc-button>
                        </uc-header-container>
                      `),this._closeOverlay,u)):"")}_closeOverlay(){this.dispatchEvent(new CustomEvent("close"))}}A.styles=_,A.properties={show:{type:Boolean},overlayLevel:{type:Number},disableFocusLock:{type:Boolean},withoutHeader:{type:Boolean},withoutLastElementFocus:{type:Boolean},noTransition:{type:Boolean,reflect:!0},noScroll:{type:Boolean,reflect:!0},closeColor:{type:String,attribute:"close-color"},_show:{type:Boolean},_overlayWidth:{type:Number}};const P=(e,t)=>{const n=Object(c.f)();n&&"focusVisibleAdded"in n.dataset||(t._lastActiveElement=null),t._closeOverlay()},L=Object(O.a)(A,[{event:"close-overlay",handler:(e,t)=>{P(0,t),t.show=!1},params:{passive:!0,element:"self"}},{event:"keyup",handler:(e,t)=>S(e,P.bind(void 0,e,t)),params:{passive:!0}},{event:"scrolltop",handler:(e,t)=>{e.stopPropagation(),t._overlayRef&&(t._overlayRef.scrollTop=0)},params:{passive:!0,element:"self"}}]);Object(o.a)("uc-overlay",L)},MZ1S:function(e,t,n){"use strict";function o(e,t){const n=[...new Array(20).map((e,t)=>"fs"+t),"ux","aem","localhost","leroymerlin","mf","publish","author","yandex","arulm","triffle","dispatcher"];if(["adeo.com","leroymerlin.ru","localhost","lmru.tech"].some(e=>t===e)){const[t]=e.split(".");if(!n.some(e=>t.startsWith(e)))return t}return""}n.d(t,"a",(function(){return o}))},NiPq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("JZOa");const r=new class{constructor(){this.hasFlagLogAnalytics=null,Object(o.a)()&&(this.hasFlagLogAnalytics=localStorage.getItem("enabledLogAnalytics"),this.hasFlagLogAnalytics||localStorage.setItem("enabledLogAnalytics",""))}sendEvent(e,t){this.hasFlagLogAnalytics&&console.log(e,t),document.dispatchEvent(new CustomEvent(e,{detail:t}))}}},PuJ1:function(e,t,n){},Tn0p:function(e,t,n){"use strict";function o(e){let t="";const n=e.indexOf("."),o=e.replace(/:[0-9]+/,"");if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g.test(o))return o;if(o.endsWith("localhost")){const e=o.split(".");return e[e.length-1]}if(-1!==n){const n=e.split(".");t=o.split(".").slice(n.length-2).join(".")}return t}n.d(t,"a",(function(){return o}))},VG9E:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("cDcd");var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));const i=(e,t)=>Object.keys(e).filter(e=>!t.includes(e)).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{});var a=function(e){return t=>{const n=(n,r)=>{const{as:a=e,class:c}=n,l=i(n,["as","class"]);let u;if("string"==typeof a&&-1===a.indexOf("-")){u={};for(const e in l)("as"===e||s(e))&&(u[e]=l[e])}else u=l;u.ref=r,u.className=function(...e){return e.filter(Boolean).join(" ")}(u.className||c,t.class);const{vars:d}=t;if(d){const e={};for(const o in d){const r=d[o],s=r[0],i=r[1]||"",a="function"==typeof s?s(n):s;t.name,e["--"+o]=`${a}${i}`}u.style=Object.assign(e,u.style)}return e.__linaria&&e!==a?(u.as=a,o.createElement(e,u)):o.createElement(a,u)},r=o.forwardRef?o.forwardRef(n):e=>{const t=i(e,["innerRef"]);return n(t,e.innerRef)};return r.displayName=t.name,r.__linaria={className:t.class,extends:e},r}}},XH0y:function(e,t,n){var o,r;!function(s,i){"use strict";void 0===(r="function"==typeof(o=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&t?r:void 0!==console[n]?o(console,n):void 0!==console.log?o(console,"log"):e)}function i(t,o){for(var r=0;r<n.length;r++){var s=n[r];this[s]=r<t?e:this.methodFactory(s,t,o)}this.log=this.debug}function a(e,t,n){return function(){"undefined"!=typeof console&&(i.call(this,t,n),this[e].apply(this,arguments))}}function c(e,t,n){return s(e)||a.apply(this,arguments)}function l(e,t,o){var r,s=this;t=null==t?"WARN":t;var a="loglevel";function l(){var e;if("undefined"!=typeof window&&a){try{e=window.localStorage[a]}catch(e){}if(void 0===e)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(a)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=o||c,s.getLevel=function(){return r},s.setLevel=function(t,o){if("string"==typeof t&&void 0!==s.levels[t.toUpperCase()]&&(t=s.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(r=t,!1!==o&&function(e){var t=(n[e]||"silent").toUpperCase();if("undefined"!=typeof window&&a){try{return void(window.localStorage[a]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+t+";"}catch(e){}}}(t),i.call(s,t,e),"undefined"==typeof console&&t<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){t=e,l()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(t,!1),function(){if("undefined"!=typeof window&&a){try{return void window.localStorage.removeItem(a)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var u=l();null==u&&(u=t),s.setLevel(u,!1)}var u=new l,d={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new l(e,u.getLevel(),u.methodFactory)),t};var p="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=p),u},u.getLoggers=function(){return d},u.default=u,u})?o.call(t,n,t,e):o)||(e.exports=r)}()},XhBU:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var o=n("cDcd"),r=n.n(o),s=n("faye"),i=n("4Uh2"),a=n("yNQq");const c=Symbol.for("__$OkapiRuntime__");function l(){return window[c]||(window[c]=function(){window.widgets={},window.apps={},window.widgets_markup=window.widgets_markup||{};const e=i.a.fromMainBundle(Object(i.c)());return Object(i.e)(e),window.addEventListener("DOMContentLoaded",u,{once:!0,passive:!0}),{registerApp:({name:e,render:t})=>{Object(a.i)(e,t)},registerWidget:({name:e,render:t})=>{Object(a.j)(e,t)},helmetContext:{}}}()),window[c]}function u(){Array.from(document.querySelectorAll("[data-remote]")).forEach(e=>{var t;e.dataset.id&&("object"==typeof(t=e.children[0])&&"dataset"in t)&&e.children[0].dataset.content===e.dataset.id&&Object(a.k)(e.dataset.id,e.children[0].innerHTML)});const e=Object(i.b)(),t=Object(a.e)(e.name);if(!t)throw new Error("Okapi error! It seems to your app isn't loaded well.");Object(s.hydrate)(r.a.createElement(t,null),document.getElementById("root"))}function d(e,t){l().registerWidget({name:e,render:t})}function p(e,t){l().registerApp({name:e,render:t(window.INITIAL_STATE[e])})}},YIKF:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("cDcd"),r=n.n(o),s=n("HLvI"),i=n("iuhU"),a=n("Duuu");const c=e=>e;var l=n("I4wW"),u=n.n(l),d=n("v3Fk"),p=n.n(d);const h={light:u.a.lightTheme};let f={};for(const e of Object.keys(p.a))f[e]=["--"+e,c];function m(e){const{children:t,ref:n,className:c,style:l}=function(e){const{theme:t="light",override:n,children:r}=e,s=Object(o.useRef)(null),c=h[t],l="string"==typeof t&&!c,d="string"==typeof n,{style:p}=Object(a.a)({...t,...n},f);return{style:p,className:Object(i.a)(u.a.themeProvider,u.a.constants,c,l&&t,d&&n),ref:s,children:r}}(e);return r.a.createElement("div",{ref:n,className:c,style:l,"data-testid":"theme-provider"},r.a.createElement(s.a,{value:n},t))}},YuFe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=(e,t)=>{var n;return null!==(n=null==e?void 0:e.find(({regionId:e})=>t===e))&&void 0!==n?n:null}},"Z0/C":function(e,t,n){"use strict";let o;n.d(t,"a",(function(){return o})),function(e){e.request="auth/EXECUTE_LOGOUT/request",e.success="auth/EXECUTE_LOGOUT/success",e.failure="auth/EXECUTE_LOGOUT/failure",e.cancel="auth/EXECUTE_LOGOUT/cancel"}(o||(o={}))},ZFBY:function(e,t,n){"use strict";function o(e){return e.replace(/:[0-9]+/,"")}n.d(t,"a",(function(){return o}))},abLE:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={init:"dyEvents/init"}},cDcd:function(e,t){e.exports=React},e4yP:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return a}));const o=e=>"string"==typeof e||"number"==typeof e,r=e=>parseFloat(e.replace(/\s/g,"").replace(/,/g,".")),s=(...e)=>e.every(e=>"number"==typeof e),i=(...e)=>e.every(e=>"string"==typeof e),a=()=>{let e,t=1;return new Promise((n,o)=>{e=setInterval(()=>{"DY"in window?(clearInterval(e),n(!0)):10===t&&(clearInterval(e),o(new Error("DY not loaded"))),t+=1},1e3)})}},faye:function(e,t){e.exports=ReactDOM},"iVi/":function(e,t,n){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},i=e.split(s),c=r.decode||o,l=0;l<i.length;l++){var u=i[l],d=u.indexOf("=");if(!(d<0)){var p=u.substr(0,d).trim(),h=u.substr(++d,u.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),null==n[p]&&(n[p]=a(h,c))}}return n},t.serialize=function(e,t,n){var o=n||{},s=o.encode||r;if("function"!=typeof s)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var a=s(t);if(a&&!i.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=o.maxAge){var l=o.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(c+="; HttpOnly");o.secure&&(c+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var o=decodeURIComponent,r=encodeURIComponent,s=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(t){return e}}},iuhU:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},jogK:function(e,t,n){"use strict";n.d(t,"j",(function(){return h})),n.d(t,"i",(function(){return v})),n.d(t,"l",(function(){return w})),n.d(t,"e",(function(){return x})),n.d(t,"h",(function(){return _})),n.d(t,"m",(function(){return O})),n.d(t,"k",(function(){return S})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return k})),n.d(t,"g",(function(){return C})),n.d(t,"f",(function(){return T})),n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return o}));var o={};n.r(o),n.d(o,"atMobile",(function(){return s})),n.d(o,"atXs",(function(){return i})),n.d(o,"notXs",(function(){return a})),n.d(o,"atDesktop",(function(){return c})),n.d(o,"notDesktop",(function(){return l})),n.d(o,"atTablet",(function(){return u}));var r=n("0RBU");const s=d(r.c),i=d(r.d),a=d(()=>!Object(r.d)()),c=d(()=>Object(r.a)()||Object(r.b)()),l=d(()=>!Object(r.a)()&&!Object(r.b)()),u=d(r.b);function d(e){return(t,n=null)=>e()?t:n}var p=n("CQbg");const h=(e,t=14)=>Object(p.e)(e/t+"rem");let f,m,g,b,y=e=>e;function v(e){return Object(p.b)(f||(f=y`
    @media screen and (max-width: ${0}px) {
      ${0}
    }
  `),r.i,e)}function w(e){return Object(p.b)(m||(m=y`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),r.h,e)}function x(e){return Object(p.b)(g||(g=y`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),r.f,e)}function _(e){return Object(p.b)(b||(b=y`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),r.e,e)}function O(e,t,n=""){const o=("function"==typeof e?e():!!e)?t:n;return"function"==typeof o?o():o}function S(e,t){return fetch(e,t).then(e=>200===e.status?e:Promise.reject(e)).then(e=>e.json())}function j(e,t){if(document.head.querySelector("#"+e))return;const n=document.createElement("style");n.id=e,n.textContent=t.toString(),document.head.appendChild(n)}const E=10,k=(e=":host",t=!0)=>{const n=1180+t*(2*E);return Object(p.e)(`\n    ${e} {\n        box-sizing: border-box;\n        min-width: var(--layout-min-width);\n        width: 100%;\n        max-width: ${n}px;\n        ${t?Object(p.e)("padding-left: var(--layout-gap); padding-right: var(--layout-gap);"):""}\n      }\n      \n      \n\n      ${w(Object(p.e)(`\n        ${e} {\n          width: calc(var(--layout-width) + 2 * var(--layout-gap));\n          margin-left: auto;\n          margin-right: auto;\n        }\n      `))}`)},C=1100;function T(){let e=null,t=document.activeElement;if(!t)return null;for(;e!==t;)e=t,t=(n=e)&&n.shadowRoot?n.shadowRoot.activeElement:n;var n;return t}class A{constructor(){this._collectors=[],this._collectors=[]}add(e){this._collectors.push(e)}addMany(e){e.forEach(e=>this.add(e))}release(){this._collectors.forEach(e=>e())}}new class{constructor(){this.hasFlagLogAnalytics=localStorage.getItem("enabledLogAnalytics"),this.hasFlagLogAnalytics||localStorage.setItem("enabledLogAnalytics","")}sendButtonImpression(e){this._sendEvent("GA:buttonImpression",e)}sendBlockImpression(e){this._sendEvent("GA:blockImpression",e)}sendView(e){this._sendEvent("GA:view",e)}sendClick(e){this._sendEvent("GA:click",e)}sendImpressions(e){this._sendEvent("GA:impressions",e)}sendClickProduct(e){this._sendEvent("GA:clickProduct",e)}sendAddToCard(e){this._sendEvent("GA:addToCart",e)}sendRemoveFromCart(e){this._sendEvent("GA:removeFromCart",e)}sendException(e){this._sendEvent("GA:exception",e)}sendPageView(e){this._sendEvent("GA:pageview",e)}sendPromoView(e){this._sendEvent("GA:promoView",e)}sendPromoClick(e){this._sendEvent("GA:promoClick",e)}sendCheckout(e){this._sendEvent("GA:checkout",e)}sendPurchase(e){this._sendEvent("GA:purchase",e)}sendClickButton(e){this._sendEvent("GA:clickButton",e)}sendFocus(e){this._sendEvent("GA:focus",e)}sendUnFocus(e){this._sendEvent("GA:unfocus",e)}sendRemoveFromCard(e){this._sendEvent("GA:removeFromCart",e)}sendShow(e){this._sendEvent("GA:show",e)}sendAddToCompare(e){this._sendEvent("GA:addToComparisonList",e)}sendRemoveFromCompare(e){this._sendEvent("GA:removeFromComparisonList",e)}sendAddToShopList(e){this._sendEvent("GA:addToShoppingList",e)}sendRemoveFromShopList(e){this._sendEvent("GA:removeFromShoppingList",e)}sendGAABTest(e){this._sendEvent("GA:AB_TEST",e)}_sendEvent(e,t){this.hasFlagLogAnalytics&&console.info(e,t),document.dispatchEvent(new CustomEvent(e,{detail:t}))}};function P(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function L(e){return function t(n){return 0===arguments.length||P(n)?t:e.apply(this,arguments)}}Array.isArray;"undefined"!=typeof Symbol&&Symbol.iterator;function $(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var N=Object.prototype.toString,I=function(){return"[object Arguments]"===N.call(arguments)?function(e){return"[object Arguments]"===N.call(e)}:function(e){return $("callee",e)}}(),R=!{toString:null}.propertyIsEnumerable("toString"),M=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],U=function(){return arguments.propertyIsEnumerable("length")}(),D=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1};Object.keys,Number.isInteger;"function"==typeof Object.is&&Object.is;var B=function(e){return(e<10?"0":"")+e};Date.prototype.toISOString;"function"==typeof Object.assign&&Object.assign;var F="\t\n\v\f\r                　\u2028\u2029\ufeff";String.prototype.trim},"k+nG":function(e,t,n){"use strict";n.r(t);var o=n("cDcd"),r=n.n(o),s=n("XhBU"),i=n("7raJ"),a=n("GB9r"),c=n("NiPq");const l=Object(o.memo)(({footer:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("uc-footer-menu",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{index:0,links:e.company,metaContent:"companyName",name:"Компания"}),r.a.createElement(u,{index:1,links:e.services,metaContent:"",name:"Услуги розничного магазина"}),r.a.createElement(u,{index:2,links:e.onlineStore,metaContent:"companyName",name:"Интернет-магазин"}))))),u=({name:e,index:t,metaContent:n,links:o})=>r.a.createElement("uc-footer-menu-toggle",{key:e,state:0===t,columns:1===t?2:1},r.a.createElement("span",{slot:"name"},e),r.a.createElement("meta",{itemProp:"name",content:n}),o.map(e=>r.a.createElement("uc-footer-menu-item",{key:e.label},r.a.createElement("a",{onClick:()=>{return t=e.label,void c.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"footer",elementName:"menu",elementText:t});var t},itemProp:"url",href:e.link,title:e.label},e.label)))),d=()=>{c.a.sendEvent("GA:clickButton",{elementType:"download",elementBlock:"footer",elementName:"app-stores",elementText:"App Store"})},p=()=>{c.a.sendEvent("GA:clickButton",{elementType:"download",elementBlock:"footer",elementName:"app-stores",elementText:"Google Play"})},h=()=>{c.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"footer",elementName:"shops",elementText:"Магазины Леруа Мерлен"})},f=Object(o.memo)(({footer:e,region:t})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("uc-footer-link-block",null,r.a.createElement("uc-footer-subscribe",{regionid:t.regionId,method:"POST",action:e.misc.subscribeService}),r.a.createElement(m,{footer:e}),r.a.createElement(g,{footer:e}),r.a.createElement("uc-payment-systems",null)))),m=Object(o.memo)(({footer:e})=>r.a.createElement("uc-footer-apps",null,r.a.createElement("uc-footer-app-mobile",{onClick:p,android:"",itemscope:"",itemtype:"https://schema.org/SoftwareApplication"},r.a.createElement("meta",{itemProp:"name",content:"Леруа Мерлен"}),r.a.createElement("a",{href:e.misc.googleplay,itemProp:"url"},"Леруа Мерлен"),"- ",r.a.createElement("span",{itemProp:"operatingSystem"},"Android")," -",r.a.createElement("link",{itemProp:"applicationCategory",href:"https://schema.org/ShoppingApplication"}),"Рейтинг:",r.a.createElement("div",{itemProp:"aggregateRating",itemScope:!0,itemType:"https://schema.org/AggregateRating"},r.a.createElement("span",{itemProp:"ratingValue"},"4.2")," ( ",r.a.createElement("span",{itemProp:"ratingCount"},"36738")," отзывов )"),r.a.createElement("div",{itemProp:"offers",itemScope:!0,itemType:"https://schema.org/Offer"},r.a.createElement("meta",{itemProp:"price",content:"0"}),r.a.createElement("meta",{itemProp:"priceCurrency",content:"RUB"}),"Бесплатная"),r.a.createElement("div",{itemProp:"description"},"Мобильное приложение Леруа Мерлен - начните строительство и ремонт, не выходя из дома!")),r.a.createElement("uc-footer-app-mobile",{onClick:d,ios:"",itemscope:"",itemtype:"https://schema.org/SoftwareApplication"},r.a.createElement("meta",{itemProp:"name",content:"Леруа Мерлен"}),r.a.createElement("a",{href:e.misc.appstore,itemProp:"url"},"Леруа Мерлен"),"- ",r.a.createElement("span",{itemProp:"operatingSystem"},"iOs")," -",r.a.createElement("link",{itemProp:"applicationCategory",href:"https://schema.org/ShoppingApplication"}),"Рейтинг:",r.a.createElement("div",{itemProp:"aggregateRating",itemScope:!0,itemType:"https://schema.org/AggregateRating"},r.a.createElement("span",{itemProp:"ratingValue"},"3.9")," ( ",r.a.createElement("span",{itemProp:"ratingCount"},"1631")," оценок )"),r.a.createElement("div",{itemProp:"offers",itemScope:!0,itemType:"https://schema.org/Offer"},r.a.createElement("meta",{itemProp:"price",content:"0"}),r.a.createElement("meta",{itemProp:"priceCurrency",content:"RUB"}),"Бесплатная"),r.a.createElement("div",{itemProp:"description"},"Мобильное приложение Леруа Мерлен - начните строительство и ремонт, не выходя из дома!")))),g=Object(o.memo)(({footer:e})=>r.a.createElement("uc-adeo-links",null,r.a.createElement("uc-adeo-link",{adeo:""},r.a.createElement("uc-image",null,r.a.createElement("img",{width:56,height:33,loading:"lazy",alt:"adeo",src:"https://leroymerlin.ru/etc/designs/elbrus/images/footer/logo_adeo.png"})),r.a.createElement("a",{href:e.misc.adeoUrl,rel:"noopener noreferrer",target:"_blank","aria-label":"Сайт ADEO"})),r.a.createElement("uc-adeo-link",{onClick:h,shops:""},r.a.createElement("a",{href:e.misc.shops},"Магазины Леруа Мерлен"))));var b=n("YuFe");const y=Object(o.memo)(()=>{var e;const{model:t}=Object(i.b)("model"),n=Object(b.a)(null==t?void 0:t.regions,null==t||null===(e=t.properties)||void 0===e?void 0:e.regionId);return null!=t&&t.footer&&n?r.a.createElement("uc-footer",null,r.a.createElement(a.a,{className:v},r.a.createElement(l,{footer:t.footer}),r.a.createElement(f,{footer:t.footer,region:n}))):null}),v="f1gkbwr8_header-footer";n("MBLA");var w=n("0apH"),x=n("YIKF");const _=Object(o.memo)(({store:e})=>r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(i.a.Provider,{value:e},r.a.createElement(y,null)))));var O=n("uFCc"),S=n("2FAm"),j=n("GE3P"),E=n("CQbg"),k=n("Bavv"),C=(n("09RC"),n("jogK"));let T,A,P,L,$=e=>e;class N extends E.a{static get styles(){return Object(E.b)(T||(T=$`
      :host {
        display: block;
        width: 100%;

        padding: ${0} 0 ${0};
        background: #f1f1f1;
        border-top: 5px solid #66c05d;
      }

      .content {
        display: flex;
        flex-direction: column;
      }

      ${0}

      ${0}
    `),Object(k.a)(10),Object(k.a)(30),Object(C.l)(Object(E.b)(A||(A=$`
        :host {
          padding-top: ${0};
        }
      `),Object(k.a)(40))),Object(C.h)(Object(E.b)(P||(P=$`
        .content {
          flex-direction: row;
        }

        ::slotted(uc-footer-menu) {
          flex: 1 1 70%;
        }
      `))))}render(){return Object(E.c)(L||(L=$`
      <div class="content">
        <slot></slot>
      </div>
    `))}}Object(j.a)("uc-footer",N);let I,R,M=e=>e;class U extends E.a{static get styles(){return Object(E.b)(I||(I=M`
      :host {
        position: relative;

        width: 100%;
        height: 0;
        padding-top: 24%;
        color: transparent;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host([android]) {
        background-image: url('https://res.cloudinary.com/lmru/image/upload/index/google.svg');
      }

      :host([ios]) {
        background-image: url('https://res.cloudinary.com/lmru/image/upload/index/appstore.svg');
      }

      ::slotted(*:not(a)) {
        display: none;
      }

      ::slotted(a) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;

        color: transparent;

        font-size: 0;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `))}render(){return Object(E.c)(R||(R=M` <slot></slot> `))}}Object(j.a)("uc-footer-app-mobile",U);var D=n("0RBU");let B,F,z=e=>e;class q extends E.a{static get styles(){return Object(E.b)(B||(B=z`
      :host {
        display: grid;
        align-items: center;
        grid-gap: ${0};
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: ${0}px) and (max-width: ${0}px) {
        :host {
          height: 100%;
          grid-template-columns: 1fr;
        }
      }
    `),Object(k.a)(8),D.h,D.e)}render(){return Object(E.c)(F||(F=z` <slot></slot> `))}}Object(j.a)("uc-footer-apps",q);let H,V,G,Y=e=>e;class W extends E.a{static get styles(){return Object(E.b)(H||(H=Y`
      :host {
        display: grid;
        grid-template-rows: repeat(5, minmax(0, 50px));
        grid-gap: ${0};
        padding-top: ${0};
      }

      @media (min-width: ${0}px) and (max-width: ${0}px) {
        :host {
          align-items: center;
          grid-template-columns: 1fr 180px 1fr;
          grid-template-rows: ${0} ${0};
          grid-row-gap: ${0};
        }

        ::slotted(uc-footer-apps) {
          grid-area: 1 / 2 / 3 / 3;
        }

        ::slotted(uc-footer-subscribe) {
          grid-area: 2 / 1 / 3 / 2;
        }

        ::slotted(uc-adeo-links) {
          grid-area: 1 / 3 / 2 / 4;
        }

        ::slotted(uc-payment-systems) {
          grid-area: 2 / 3 / 3 / 4;
        }

        ::slotted(uc-parent-link) {
          align-self: start;
          grid-area: 3 / 3 / 4 / 4;
        }
      }

      ${0}
    `),Object(k.a)(16),Object(k.a)(16),D.h,D.e,Object(k.a)(50),Object(k.a)(50),Object(k.a)(10),Object(C.h)(Object(E.b)(V||(V=Y`
        :host {
          padding-top: 0;
        }
      `))))}render(){return Object(E.c)(G||(G=Y` <slot></slot> `))}}Object(j.a)("uc-footer-link-block",W);let J,K,Q=e=>e;const X=Object(E.b)(J||(J=Q`
  :host {
    display: flex;
    flex-direction: column;
  }

  ${0}
`),Object(C.l)(Object(E.b)(K||(K=Q`
    :host {
      flex-direction: row;
    }

    ::slotted(uc-footer-menu-toggle:nth-of-type(1)) {
      flex: 1 1 25%;
      padding-right: ${0};
    }

    ::slotted(uc-footer-menu-toggle:nth-of-type(2)) {
      flex: 1 1 45%;
      padding-right: ${0};
      padding-left: ${0};
      border-left: 1px dashed #ddd;
    }

    ::slotted(uc-footer-menu-toggle:nth-of-type(3)) {
      flex: 1 1 30%;
      padding-left: ${0};
      border-left: 1px dashed #ddd;
    }
  `),Object(k.a)(10),Object(k.a)(10),Object(k.a)(10),Object(k.a)(10))));let Z,ee=e=>e;class te extends E.a{static get styles(){return X}render(){return Object(E.c)(Z||(Z=ee` <slot></slot> `))}}Object(j.a)("uc-footer-menu",te);let ne,oe,re=e=>e;const se=Object(E.b)(ne||(ne=re`
  :host {
    display: inline-block;
    margin-right: ${0};
  }

  ::slotted(*),
  :host {
    font-size: ${0};
  }

  ::slotted(*:hover) {
    text-decoration: underline;
  }

  .menu-item {
    --button-color: #939393;
    line-height: 2;
  }

  ::slotted(*) {
    line-height: 2;
  }

  ${0}
`),Object(k.a)(5),Object(k.a)(12),Object(C.l)(Object(E.b)(oe||(oe=re`
    .menu-item {
      --button-color: #66c05d;
      line-height: 1.398;
    }

    ::slotted(*) {
      line-height: 1.398;
    }
  `))));let ie,ae=e=>e;class ce extends E.a{static get styles(){return se}render(){return Object(E.c)(ie||(ie=ae`
      <uc-button class="menu-item">
        <slot></slot>
      </uc-button>
    `))}}Object(j.a)("uc-footer-menu-item",ce);var le=n("iuhU");let ue,de,pe,he=e=>e;const fe=Object(E.b)(ue||(ue=he`
  .name-button {
    --button-color: #000000;
  }

  :host {
    display: block;
    font-size: ${0};

    margin: 0 -${0};
    padding: ${0} ${0};
    border-bottom: 1px solid #ddd;
  }

  .menu-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: ${0};
  }

  .name::slotted(*) {
    margin: 0;
    padding: 0;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.1;
    text-align: left;
    font-size: ${0};
  }

  .menu-container.hide {
    display: none;
  }

  .menu::slotted(uc-footer-menu-item) {
    margin-right: 10px;
  }

  .accordion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${0};
  }

  .icon-container {
    transform: rotate(270deg);
  }

  .icon-button {
    width: ${0};
    height: ${0};
  }

  ${0}

  ${0}
`),Object(k.a)(14),Object(k.a)(16),Object(k.a)(10),Object(k.a)(16),Object(k.a)(9),Object(k.a)(14),Object(k.a)(4),Object(k.a)(9),Object(k.a)(14),Object(C.i)(Object(E.b)(de||(de=he`
    .menu-container {
      // max-height: 700px;
      // transition: max-height 0.7s ease-out, margin-bottom 0.7s ease-out;
    }
    .menu-container.hide {
      // margin-bottom: 0;
      // max-height: 0;
    }
  `))),Object(C.l)(Object(E.b)(pe||(pe=he`
    :host {
      font-size: ${0};
      height: fit-content;
      padding: 0;
      border-bottom: none;
      margin: 0;
    }

    .name::slotted(*) {
      margin-bottom: ${0};
      margin-top: ${0};
      font-size: ${0};
    }

    .icon-container {
      display: none;
    }

    .accordion {
      display: block;
      margin: 0;
    }

    .menu-container.hide {
      display: block;
    }

    .menu-container {
      column-count: 1;
    }

    .columns.menu-container {
      column-count: 2;
    }

    .menu::slotted(uc-footer-menu-item) {
      width: 100%;
      line-height: 2.17;
    }
  `),Object(k.a)(18),Object(k.a)(18),Object(k.a)(4),Object(k.a)(18))));let me,ge,be=e=>e;const ye={size:{type:String}};class ve extends E.a{static get properties(){return ye}static get styles(){return Object(E.b)(me||(me=be`
      :host {
        --icon-size: 100%;
        --icon-color: currentColor;

        display: block;
        width: var(--icon-size);
        height: var(--icon-size);

        font-size: 0;
      }

      :host,
      ::slotted(*) {
        fill: var(--icon-color);
      }

      ::slotted(*) {
        width: 100%;
        height: 100%;
      }

      :host([size='xxs']) {
        --icon-size: ${0};
      }

      :host([size='xs']) {
        --icon-size: ${0};
      }

      :host([size='s']) {
        --icon-size: ${0};
      }

      :host([size='m']) {
        --icon-size: ${0};
      }

      :host([size='l']) {
        --icon-size: ${0};
      }
    `),Object(k.a)(8),Object(k.a)(12),Object(k.a)(16),Object(k.a)(24),Object(k.a)(32))}constructor(){super(),this.size="custom"}updated(e){if(e.has("size")){const e=parseInt(this.size,10);if(isNaN(e))return;this.style.setProperty("--icon-size",""+Object(k.a)(e))}}render(){return Object(E.c)(ge||(ge=be` <slot></slot> `))}}Object(j.a)("uc-icon",ve);var we=n("CO7v");let xe,_e=e=>e;const Oe={state:{reflect:!0,converter:{fromAttribute:e=>"true"===e,toAttribute:e=>e.toString()}},columns:{type:Number}};class Se extends E.a{static get styles(){return fe}static get properties(){return Oe}constructor(){super(),this.state=!1,this.columns=1}_menuClick(){Object(D.d)()&&(this.state=!1===this.state)}render(){return Object(E.c)(xe||(xe=_e`
      <div class="accordion">
        <uc-button class="name-button">
          <button @click=${0}>
            <slot name="name" class="name"></slot>
          </button>
        </uc-button>
        <uc-button class="icon-container">
          <button class="icon-button" @click=${0}>
            <uc-icon class="icon"> ${0} </uc-icon>
          </button>
        </uc-button>
      </div>

      <div class=${0}>
        <slot class="menu"></slot>
      </div>
    `),()=>this._menuClick(),()=>this._menuClick(),we.a,Object(le.a)("menu-container",{hide:!this.state},{columns:1!==this.columns}))}}Object(j.a)("uc-footer-menu-toggle",Se);let je;const Ee=Object(E.b)(je||(je=(e=>e)`
  :host {
    display: block;
  }

  form {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
  }

  .footer-subscrube-input {
    width: 100%;
    flex: 1 1 70%;
    box-sizing: border-box;
    padding: ${0} ${0} ${0} ${0};
    margin: 0;
    border: 3px solid #66c05d;
    border-right: none;
    border-radius: 0;
  }

  .footer-subscrube-input:focus {
    outline: none;
  }

  .footer-subscrube-input:focus-visible {
    outline: 3px solid blueviolet;
  }

  .footer-subscrube-input.focus-visible {
    outline: 3px solid blueviolet;
  }

  label {
    position: absolute;
    top: 50%;
    left: 15px;
    width: 16px;
    height: 12px;

    font-size: 0;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE2IDEyIj4gICAgPHBhdGggZmlsbD0iI0IyQjJCMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xODIgMGw2LjYwNiA2LjZMMTQuMzg5IDBIMS4xODJ6TTguNzMgNy41NWwtLjk0My45NDItLjk0MS0uOTQyTDAgLjcwNXYxMC41MTNsNC42OTMtNC42OTIuOTQyLjk0Mi00LjQ1OCA0LjQ1OGgxMy4yMjFMOS45NCA3LjQ2OGwuOTQyLS45NDIgNC42OTIgNC42OTZWLjcwNUw4LjczIDcuNTV6Ii8+PC9zdmc+);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  .submit-button {
    --button-bg: #66c05d;
    --button-hover-bg: #4ba842;
    --button-color: #fff;

    --button-border-radius: 0;

    display: flex;
  }

  .submit-button-inner {
    height: 100%;
    padding: 10px;
    margin: 0;
    border: none;

    line-height: 13px;
    font-size: 11px;
  }

  .error-text {
    position: absolute;
    font-size: 10px;
    bottom: 5px;
    margin: 0;
    left: 15px;
    color: #ff0000;
  }

  .subscrube-popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 100%;

    text-align: center;
  }

  .title {
    margin-bottom: ${0};

    color: #66c05d;

    font-size: ${0};
    font-weight: 600;
  }

  .description {
    font-size: ${0};
    color: #ababab;
  }
`),Object(k.a)(8),Object(k.a)(8),Object(k.a)(8),Object(k.a)(36),Object(k.a)(20),Object(k.a)(40),Object(k.a)(14));let ke,Ce,Te=e=>e;class Ae extends E.a{constructor(){super(),this.method="POST",this.action="",this.regionID="0",this._subscribed=!1,this._error="",this._value="",this._maxEmailLength=60}render(){return Object(E.c)(ke||(ke=Te`
      <form @submit=${0} action=${0} method=${0}>
        <input
          id="footer-subscrube-input"
          type="email"
          name="email"
          class="footer-subscrube-input"
          required
          maxlength="${0}"
          spellcheck="false"
          autocorrect="off"
          placeholder="Введите Ваш e-mail"
          .value="${0}"
          @input=${0}
        />
        <label for="footer-subscrube-input">Введите Ваш e-mail</label>

        <input type="hidden" name="personal_city" value="${0}" />

        <uc-button class="submit-button">
          <button class="submit-button-inner">ПОДПИСАТЬСЯ НА&nbsp;РАССЫЛКУ</button>
        </uc-button>

        ${0}
      </form>

      <uc-overlay ?show=${0} @close=${0}>
        <uc-page-content class="subscrube-popup-content">
          <p class="title">Благодарим Вас за подписку на рассылку!</p>
          <p class="description">Для подтверждения подписки, Вам нужно перейти по ссылке в письме.</p>
        </uc-page-content>
      </uc-overlay>
    `),this._onSubmit,this.action,this.method,this._maxEmailLength,this._value,this._onInput,this.regionID,Object(C.m)(this._error,Object(E.c)(Ce||(Ce=Te` <p class="error-text">${0}</p> `),this._error)),this._subscribed,()=>this._subscribed=!1)}_onInput(e){this._value=e.target.value,this._error=""}_onSubmit(e){e.preventDefault(),this._error="";const t=new FormData(e.target);Object(C.k)(this.action,{method:this.method,body:t,credentials:"include"}).then(({data:e,error:t})=>(null==t?void 0:t.length)>0?Promise.reject(t[0]):e).then(e=>"ok"===e?e:Promise.reject(e)).then(e=>this._subscribed=e).then(e=>this._value="").then(e=>{this._subscribed&&c.a.sendEvent("GA:show",{elementType:"block",elementBlock:"footer",elementName:"subscription",elementText:"Благодарим Вас за подписку на рассылку!"})}).catch(e=>this._error="string"==typeof e?e:"Ошибка при выполнении запроса")}}Ae.properties={method:{type:String},action:{type:String},regionID:{type:String},_subscribed:{type:Boolean},_error:{type:String},_value:{type:String}},Ae.styles=Ee,Object(j.a)("uc-footer-subscribe",Ae);let Pe,Le,$e,Ne=e=>e;class Ie extends E.a{static get styles(){return Object(E.b)(Pe||(Pe=Ne`
      :host {
        display: block;
        max-height: ${0};
      }

      .link {
        --button-color: #57ad31;
        --button-hover-color: #4ba842;

        display: flex;
        align-items: center;
      }

      ::slotted(a) {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: stretch;
        text-decoration: none;
      }

      .link::before,
      .link::after {
        display: flex;
        flex: 1 1 25%;
        max-width: 100%;
        height: 1px;

        background-color: #d9d9d9;
      }

      .link::before {
        content: '';
      }

      .link::before {
        margin-right: ${0};
      }

      .link::after {
        margin-left: ${0};
      }

      ${0}
    `),Object(k.a)(25),Object(k.a)(8),Object(k.a)(8),Object(C.i)(Object(E.b)(Le||(Le=Ne`
        .link::after {
          content: '';
        }
      `))))}render(){return Object(E.c)($e||($e=Ne` <uc-button class="link" buttonstyle="base"><slot></slot></uc-button> `))}}Object(j.a)("uc-parent-link",Ie);let Re,Me,Ue,De=e=>e;class Be extends E.a{render(){return Object(E.c)(Re||(Re=De` <uc-button class="container"><slot class="content"></slot></uc-button> `))}}Be.styles=Object(E.b)(Me||(Me=De`
    :host {
      --img-width: auto;

      position: relative;
      display: flex;
      width: auto;
      height: 100%;
    }

    :host([adeo]) {
      --img-height: ${0};
      --img-width: ${0};
    }

    :host([shops]) {
      --img-height: ${0};
      --img-width: ${0};

      max-width: ${0};
      flex: 1 1 auto;

      background-color: #e4e4e4;
    }

    .container {
      --button-color: #666;

      width: 100%;
    }

    .content {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .content::slotted(uc-image) {
      position: absolute;
      top: calc(50% - var(--img-height) / 2);
      left: ${0};
    }

    .content::slotted(a) {
      z-index: 1;
      width: 100%;
      height: 100%;
      padding: ${0} ${0} ${0};
      padding-left: calc(var(--img-width) + ${0});

      font-size: ${0};
    }

    ${0}
  `),Object(k.a)(33),Object(k.a)(56),Object(k.a)(29),Object(k.a)(53),Object(k.a)(220),Object(k.a)(8),Object(k.a)(16),Object(k.a)(10),Object(k.a)(16),Object(k.a)(10),Object(k.a)(10),Object(C.h)(Object(E.b)(Ue||(Ue=De`
      :host([shops]) {
        max-width: initial;
      }

      .content::slotted(a) {
        font-size: ${0};
      }
    `),Object(k.a)(13)))),Object(j.a)("uc-adeo-link",Be);let Fe,ze,qe=e=>e;class He extends E.a{render(){return Object(E.c)(Fe||(Fe=qe` <slot class="content"></slot> `))}}He.styles=Object(E.b)(ze||(ze=qe`
    :host {
      display: flex;

      align-items: center;
      justify-content: space-between;

      height: 100%;
    }
  `)),Object(j.a)("uc-adeo-links",He);let Ve,Ge,Ye,We,Je=e=>e;const Ke=[{name:"mir",alt:"Мир",src:"//res.cloudinary.com/lmru/image/upload/index/mir-logo.svg"},{name:"visa",alt:"Visa",src:"//res.cloudinary.com/lmru/image/upload/index/visa-logo.svg"},{name:"mastercard",alt:"Mastercard",src:"//res.cloudinary.com/lmru/image/upload/index/mastercard-logo.svg"}];class Qe extends E.a{static get styles(){return Object(E.b)(Ve||(Ve=Je`
      :host {
        display: flex;
        flex-wrap: wrap;
        height: 100%;

        align-items: center;

        font-size: ${0};
      }

      .title {
        margin-right: ${0};
      }

      .payment-systems-wrap {
        display: flex;
        flex: 1 0 auto;
        align-items: center;
        justify-content: space-between;
      }

      .payment-system {
        width: auto;
        height: auto;
      }

      .payment-system.mir {
        height: ${0};
      }

      .payment-system.visa {
        height: ${0};
      }

      .payment-system.mastercard {
        height: ${0};
      }

      ${0}
    `),Object(k.a)(10),Object(k.a)(16),Object(k.a)(14),Object(k.a)(16),Object(k.a)(23),Object(C.e)(Object(E.b)(Ge||(Ge=Je`
        :host {
          font-size: ${0};
        }

        .payment-system.mir {
          height: ${0};
        }

        .payment-system.visa {
          height: ${0};
        }

        .payment-system.mastercard {
          height: ${0};
        }
      `),Object(k.a)(14),Object(k.a)(16),Object(k.a)(19),Object(k.a)(27))))}render(){return Object(E.c)(Ye||(Ye=Je`
      <span class="title">Мы принимаем: </span>

      <div class="payment-systems-wrap">
        ${0}
      </div>
    `),Ke.map(({name:e,alt:t,src:n})=>Object(E.c)(We||(We=Je`
            <img
              width="49"
              height="14"
              class="payment-system ${0}"
              alt=${0}
              src=${0}
              loading="lazy"
            />
          `),e,t,n)))}}Object(j.a)("uc-payment-systems",Qe);let Xe;class Ze extends E.a{constructor(){super(),Object(C.c)("uc-image-stylesheet",et)}createRenderRoot(){return this}}const et=Object(E.b)(Xe||(Xe=(e=>e)`
  uc-image {
    display: block;

    line-height: 0;
  }

  uc-image picture {
    display: block;
    width: var(--img-width, 100%);
    height: var(--img-height, auto);
  }

  uc-image img {
    width: var(--img-width, 100%);
    height: var(--img-height, auto);
    object-fit: var(--img-object-fit, initial);

    -webkit-user-drag: none;
  }
`));Object(j.a)("uc-image",Ze);n("MC5f");Object(s.b)("header-footer/footer",e=>()=>{var t;const n=Object(o.useRef)(Object(O.a)());return n.current.dispatch(S.a.success,null!==(t=e.model)&&void 0!==t?t:void 0),r.a.createElement(_,{store:n.current})})},kjdh:function(e,t,n){},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&i(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,a;s(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(a=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&i(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},mwXK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("9ONQ"),r=n("e4yP"),s=n("IcJs");function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const a=(e,t,n)=>!(!Object(r.b)(e)||!Object(r.c)(t,n))&&{productId:e,quantity:t,value:Number(t)*Number(n),currency:s.c},c=new o.a;const l=new class{constructor(){this.dispatchEvent=e=>{var t,n;e&&"DY"in window&&null!==(t=window.DY)&&void 0!==t&&t.API&&(null===(n=window.DY)||void 0===n||n.API("event",e))},this.search=e=>{const t=(e=>{if(s.e in s.l){const{dyType:t,name:n}=s.l[s.e];return{name:n,properties:{dyType:t,keywords:e}}}return!1})(e);this.dispatchEvent(t)},this.handleAddToCart=e=>{const{id:t,quantity:n,productPrice:o}=e.detail,c=((e,t,n)=>{const o=a(e,t,n);if(o&&s.a in s.l){const{dyType:e,name:t}=s.l[s.a];return{name:t,properties:i({dyType:e},o)}}return!1})(t,n,"string"==typeof o?Object(r.e)(o):o);this.dispatchEvent(c)},this.handleRemoveFromCart=e=>{const{id:t,quantity:n,productPrice:o}=e.detail,c=((e,t,n)=>{const o=a(e,t,n);if(o&&s.g in s.l){const{dyType:e,name:t}=s.l[s.g];return{name:t,properties:i({dyType:e},o)}}return!1})(t,n,"string"==typeof o?Object(r.e)(o):o);this.dispatchEvent(c)},this.handleSortItems=e=>{const{sortBy:t,sortOrder:n}=e.detail,o=((e,t)=>{if(Object(r.d)(e,t)&&s.h in s.l){const{dyType:n,name:o}=s.l[s.h];return{name:o,properties:{dyType:n,sortBy:e,sortOrder:t}}}return!1})(t,n);this.dispatchEvent(o)},this.handleFilterItems=e=>{const{filterNumericValue:t,filterType:n}=e.detail,o=((e,t)=>{if(Object(r.b)(t)&&Object(r.d)(e)&&s.d in s.l){const{dyType:n,name:o}=s.l[s.d];return{name:o,properties:i({dyType:n,filterType:e},"number"==typeof t?{filterNumericValue:t}:{filterStringValue:t})}}return!1})(n,t);this.dispatchEvent(o)},this.handleAddToWishList=e=>{const{id:t}=e.detail,n=(e=>{if(Object(r.b)(e)&&s.b in s.l){const{dyType:t,name:n}=s.l[s.b];return{name:n,properties:{dyType:t,productId:e}}}return!1})(t);this.dispatchEvent(n)},this.login=e=>{if("true"===c.get(s.j)){const t=(e=>{if("string"==typeof e&&s.f in s.l){const{dyType:t,name:n}=s.l[s.f];return{name:n,properties:{dyType:t,hashedEmail:e}}}return!1})(e);this.dispatchEvent(t),c.set(s.j,"false")}},this.setDYSSVars=()=>{const e=c.get(s.i),t=c.get(s.j);e||c.set(s.i,"true"),t&&"false"===t||c.set(s.j,"true")},this.getCookieItemObject=e=>{const t=decodeURIComponent(e).replace(/(\\n)/g,"").replace(/\+/g,"").replace(/(\\r)/g,"").replace(/(\\t)/g,"").replace(/(\\f)/g,"").replace(/(\\b)/g,"").replace(/(")/g,'"').replace(/("{)/g,"{").replace(/(}")/g,"}").replace(/(\\)/g,"").replace(/(\/)/g,"/");return JSON.parse(t)},this.isNeedCartSync=()=>"true"===c.get(s.i),this.syncCart=e=>{const t=(e=>{if(s.k in s.l){const{dyType:t,name:n}=s.l[s.k];return{name:n,properties:{dyType:t,currency:s.c,cart:e}}}return!1})(e);this.dispatchEvent(t),c.set(s.i,"false")}}}},uFCc:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));let o;o="undefined"!=typeof navigator&&"ReactNative"!==navigator.product?(e,t,n)=>{void 0!==n?console.log("%c"+e+" %c"+t,"color: #070","color: #070; font-weight: 700",n):console.log("%c"+e+" %c"+t,"color: #070","color: #070; font-weight: 700")}:(e,t,n)=>{void 0!==n?console.log(e,t,n):console.log(e,t)};var r=n("XH0y"),s=n.n(r),i=n("2FAm");const a={headers:{"Content-Type":"application/json"}};function c(e){return"string"==typeof e&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(e)?e:JSON.stringify(e)}function l(e){return"string"==typeof e&&e.includes("application/json")}class u{constructor(){this._source=new AbortController,this._token=this._source.signal}get token(){return this._token}cancel(){this._source.abort()}}const d=class{constructor(e=a){this.isCancel=e=>"AbortError"===e.name,this.defaultConfig={...a,...e},this.core="undefined"!=typeof window?window.fetch.bind(window):fetch}abortController(){return new u}request(e,t){const n=function e(t,n){const o=Object.keys(t),r=Object.keys(n),s=o.filter(e=>r.includes(e)&&"object"==typeof t[e]&&"object"==typeof n[e]),i={};return s.forEach(o=>{i[o]=e(t[o],n[o])}),{...t,...n,...i}}(this.defaultConfig,t),{baseURL:o="",params:r={}}=n,s=o+e+function(e){const t=e,n=new URLSearchParams;for(const[e,o]of Object.entries(t))n.set(e,String(o));return n.toString()}(r),i=this.convertServerConfigToClient(n);return this.core(s,i).then(t=>this.convertClientResponse(e,t,n)).catch(e=>this.throwError(e,n))}get(e,t){return this.request(e,{...t,method:"GET"})}delete(e,t){return this.request(e,{...t,method:"DELETE"})}post(e,t,n){return this.request(e,{...n,data:t,method:"POST"})}put(e,t,n){return this.request(e,{...n,data:t,method:"PUT"})}patch(e,t,n){return this.request(e,{...n,data:t,method:"PATCH"})}convertServerConfigToClient(e){const t=-1!==(e.headers&&e.headers["Content-Type"]||"").indexOf("application/json");return{method:e.method,body:t?c(e.data):e.data,headers:e.headers,signal:e.cancelToken,credentials:e.withCredentials?"include":"same-origin"}}async convertClientResponse(e,t,n){let o;if(t instanceof Error)this.throwError(t,n);else{o={data:await async function(e){let t=null,n=e.headers.get("Content-type");return l(n)?t=await e.json():function(e){return"string"==typeof e&&e.includes("text/plain")}(n)&&(t=await e.text()),t}(t),status:t.status,statusText:t.statusText,headers:t.headers,config:n,request:null}}return o}throwError(e,t){const n={config:t,request:void 0};let o;if("object"==typeof e&&"response"in e){const{response:t}=e;o={name:"",stack:"",message:"",response:t,...n}}else{const{message:t,stack:r,name:s}=e;o={message:t,stack:r,name:s,...n}}throw o}};class p extends Error{constructor(e="",t="other"){super(e),this.status=void 0,this.message=void 0,this.status=t,this.message=e}}const h=["useCredentials","requestID","apiKey"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const m=new d({headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=UTF-8"}}),g=new class{constructor(e){this.http=void 0,this.abortController=()=>this.http.abortController(),this.post=(e,t,n)=>this._doFetch(b(n.orchestratorHost,e),f({method:"POST",data:t,headers:null==n?void 0:n.headers},n)),this.get=(e,t,n)=>{const o=new URLSearchParams(t).toString(),r=`${b(n.orchestratorHost,e)}?${o}`;return this._doFetch(r,f({method:"GET"},n))},this.http=e}_doFetch(e,t){const n=/^\/\//.test(e)?"https:"+e:e,{useCredentials:o,requestID:r,apiKey:s}=t,i=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,h);return i.withCredentials=o,r&&(i.headers=f({},i.headers,{"x-request-id":r})),s&&(i.headers=f({},i.headers,{"x-api-key":s})),this.http.request(n,i).then(e=>200===e.status?e:Promise.reject(e)).then(e=>e.data).catch(e=>{var t;if(e.status>=400)throw new p(null===(t=e.data)||void 0===t?void 0:t.message,e.status);return Promise.reject(e.response)})}}(m);function b(e,t){return new URL(t,e).toString()}function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=n("ZFBY"),w=n("Tn0p"),x=n("MZ1S");const _=[e=>{e.on("@init",()=>({model:null})),e.on(i.a.init,(t,{host:n,url:o})=>{const{modelLoading:r,orchestratorHost:a,useCredentials:c,apiKey:l,requestID:u}=e.get();if(r)return Promise.resolve();e.dispatch(i.a.request);const d=Object(v.a)(n),p=Object(w.a)(d),h=Object(x.a)(d,p),f=o.indexOf("?"),m=-1===f?o:o.substring(0,f);return s.a.info("Fetch model initialised by HF","requestID: ",u,"dateNow: ",Date.now()),((e,t)=>{const n=e.pathname.includes("/checkout/success/")?y({},e,{pathname:"/checkout/success/"}):e,o=n.pathname.includes("/product/")?"v2/get-model":"getModel";return g.get(o,n,t)})({pathname:m,region:h},{orchestratorHost:a,useCredentials:c,apiKey:l,requestID:u}).then(t=>{s.a.info("Model successfully fetched by HF","requestID: ",u,"dateNow: ",Date.now());const{properties:n,regions:o,experiments:r,header:a,footer:c,mobileApp:l}=void 0!==t.modelJson?t.modelJson:t;e.dispatch(i.a.success,{properties:n,regions:o,experiments:r,header:a,footer:c,mobileApp:l})}).catch(t=>e.dispatch(i.a.failure,t))}),e.on(i.a.failure,e=>(s.a.error("Failed to fetch model for HF","requestID: ",e.requestID,"dateNow: ",Date.now()),{model:null})),e.on(i.b,()=>null),e.on(i.a.success,(e,t)=>({model:t}))},e=>{e.on("@init",()=>({modelLoading:!1})),e.on(i.a.success,()=>({modelLoading:!1})),e.on(i.a.failure,()=>({modelLoading:!1})),e.on(i.a.request,()=>({modelLoading:!0}))},e=>{e.on("@init",()=>({modelError:null})),e.on(i.a.request,()=>({modelError:null})),e.on(i.a.success,()=>({modelError:null})),e.on(i.a.failure,(e,t)=>({modelError:t}))}];var O=n("0Phq");function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const j=[e=>{e.on("@init",e=>S({},e,{orchestratorHost:"",useCredentials:!0,requestID:"",isBot:!1,userAgent:""})),e.on(O.a.setRequestParams,(e,{orchestratorHost:t,useCredentials:n,apiKey:o})=>S({},e,{orchestratorHost:t,useCredentials:n,apiKey:o})),e.on(O.a.setRequestID,(e,{requestID:t})=>S({},e,{requestID:t})),e.on(O.a.setIsBot,(e,t)=>S({},e,{isBot:t})),e.on(O.a.setUserAgent,(e,t)=>S({},e,{userAgent:t}))}];var E=n("1yRy");function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var C=n("7isM");function T(e=5){return Object(C.a)(e)}function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const P=e=>{e.on("@init",()=>({suggestions:{suggestions:null,error:!1,loading:!1}})),e.on(E.a.init,(t,n)=>{const{orchestratorHost:o,useCredentials:r,apiKey:s,requestID:i}=e.get();return e.dispatch(E.a.request,!0),((e,t)=>g.get("getSuggestions",k({},e),t))(n,{orchestratorHost:o,useCredentials:r,apiKey:s,requestID:i}).then(t=>e.dispatch(E.a.success,{products:t.products.map(e=>{var t;return A({},e,{id:null!==(t=e.id)&&void 0!==t?t:T()})}),services:t.services.map(e=>{var t;return A({},e,{serviceId:null!==(t=e.serviceId)&&void 0!==t?t:T()})})})).catch(()=>e.dispatch(E.a.failure,!0))}),e.on(E.a.request,e=>({suggestions:A({},e.suggestions,{loading:!0,error:!1})})),e.on(E.a.success,(e,t)=>{var n,o;const{products:r=[],services:s=[]}=t;return{suggestions:{suggestions:{products:r.length>0?r:(null===(n=e.suggestions.suggestions)||void 0===n?void 0:n.products)||[],services:s.length>0?s:(null===(o=e.suggestions.suggestions)||void 0===o?void 0:o.services)||[]},loading:!1,error:!1}}}),e.on(E.a.failure,()=>({suggestions:{suggestions:null,loading:!1,error:!0}})),e.on(E.b,e=>null!=e.suggestions.suggestions?{suggestions:{suggestions:{products:e.suggestions.suggestions.products,services:[]},loading:e.suggestions.loading,error:e.suggestions.error}}:e)};var L=n("9ONQ"),$=n("vB/t");function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const I=e=>{e.on("@init",e=>N({},e,{cookies:{}})),e.on($.a.set,(e,t)=>N({},e,{cookies:new L.a(t).getAll({doNotParse:!0})})),e.on($.a.update,(e,{key:t,value:n,params:o})=>{const r=new L.a(e.cookies);return r.set(t,n,o),N({},e,{cookies:r.getAll()})})};var R=n("Z0/C");const M=e=>{e.on(R.a.request,async()=>{const{requestID:t,model:n}=e.get();var o,r;n&&(await(r={orchestratorHost:(null==n||null===(o=n.header)||void 0===o?void 0:o.logoutUrl)||"",requestID:t,useCredentials:!0},g.get("/identity/logout",{},r)),e.dispatch(R.a.success))}),e.on(R.a.success,()=>{const{model:t}=e.get();var n;t&&(window.location.href=(null==t||null===(n=t.header)||void 0===n?void 0:n.home)||"")})};var U=n("wVn1");function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const B=e=>{e.on("@init",e=>D({},e,{catalogue:{chunks:{},error:!1,loading:!1}})),e.on(U.a.request,(t,{region:n,path:o})=>{const{orchestratorHost:r,useCredentials:s,apiKey:i,requestID:a}=e.get();return((e,t,n)=>g.get("get-flex-catalogue",{region:e,path:t},n))(n,o,{orchestratorHost:r,useCredentials:s,apiKey:i,requestID:a}).then(t=>e.dispatch(U.a.success,{data:t,path:o})).catch(()=>e.dispatch(U.a.failure,o)),D({},t,{catalogue:{chunks:D({},t.catalogue.chunks,{[o]:null}),loading:!0,error:!1}})}),e.on(U.a.success,(e,{data:t,path:n})=>D({},e,{catalogue:{chunks:D({},e.catalogue.chunks,{[n]:t}),loading:!1,error:!1}})),e.on(U.a.failure,(e,t)=>D({},e,{catalogue:{chunks:D({},e.catalogue.chunks,{[t]:null}),loading:!1,error:!0}}))};var F=n("abLE"),z=n("e4yP"),q=n("mwXK"),H=n("Hz6d");function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Y=e=>{e.on("@init",e=>G({},e,{dy:{isLoad:!1}})),e.on(F.a.init,t=>{const n={isLoad:!1};return Object(z.a)().then(()=>{n.isLoad=!0,q.a.setDYSSVars();const{cookies:t}=e.get();if(Object(H.d)(t)){const e=Object(H.c)(t),{userEmailHash:n}=q.a.getCookieItemObject(e);q.a.login(n)}const{orchestratorHost:o,useCredentials:r,apiKey:s,requestID:i,model:a,userAgent:c}=e.get(),l=null==a?void 0:a.properties.regionId;if(l&&c.length>0&&q.a.isNeedCartSync()){const e=window.layers.basket.getBasket(),t=e.map(({code:e})=>e);(u={products:t.join(","),regionId:String(l)},d={orchestratorHost:o,useCredentials:r,apiKey:s,requestID:i},g.get("get-products-price-by-id",V({},u),d)).then(t=>{const n=e.reduce((e,n)=>{const{code:o,quantity:r}=n;return o in t&&e.push({productId:o,quantity:r,itemPrice:t[o]}),e},[]);q.a.syncCart(n)})}var u,d}).catch(()=>{n.isLoad=!1}),G({},t,n)})},W=()=>(e=>{let t={},n={},o={dispatch(e,r){if("@dispatch"!==e&&o.dispatch("@dispatch",[e,r,t[e]]),t[e]){let s,i={};t[e].forEach(e=>{let t=e(n,r);t&&"function"!=typeof t.then&&(s=n={...n,...t},i={...i,...t})}),s&&o.dispatch("@changed",i)}},get:()=>n,on:(e,n)=>((t[e]||(t[e]=[])).push(n),()=>{t[e]=t[e].filter(e=>e!==n)})};return e.forEach(e=>{e&&e(o)}),o.dispatch("@init"),o})([..._,...j,P,I,M,B,Y,!1,!1])},v3Fk:function(e,t,n){e.exports={"text-primary":"#333","text-secondary":"#666","text-minor":"#999","text-invert":"#fff","background-accent":"#2e323d","background-secondary":"#f2f3f5","background-primary":"#fff","control-primary":"#464c5c","control-secondary":"#ced0d6","control-minor":"#e8e9eb","control-invert":"#fff","control-secondary-invert":"#ffffff66","control-minor-invert":"#ffffff28","control_hover-primary":"#1c212e","control_hover-secondary":"#a9adb8","control_hover-minor":"#dcdde0","control_hover-primary-invert":"#ffffffea","control_hover-secondary-invert":"#ffffff7f","control_hover-minor-invert":"#ffffff3d","success-primary":"#5ab030","success-dark":"#488c26","success-light":"#deefd5","brand-primary":"#5ab030","brand-dark":"#488c26","brand-light":"#deefd5","brand-minor":"#000","brand-invert":"#fff","accent-primary":"#f4be55","accent-dark":"#c39844","accent-light":"#fcf2dd","attention-primary":"#e6615e","attention-dark":"#b84d4b","attention-light":"#fadfde","secondary-green_primary":"#00b2a9","secondary-green_dark":"#008e87","secondary-green_light":"#ccefed","secondary-blue_primary":"#3d6be3","secondary-blue_dark":"#3b59a4","secondary-blue_light":"#d1deff","secondary-orange_primary":"#d95e00","secondary-orange_dark":"#ad4b00","secondary-orange_light":"#f7decc","secondary-purple_primary":"#8961a5","secondary-purple_dark":"#6d4d84","secondary-purple_light":"#e7dfed","secondary-yellow_primary":"#ffe55a","secondary-yellow_dark":"#ccb748","secondary-yellow_light":"#fff9de"}},"vB/t":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={set:"cookiesEvents/set",update:"cookiesEvents/update"}},wVn1:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={request:"catalogue/FETCH_CATALOGUE/request",success:"catalogue/FETCH_CATALOGUE/success",failure:"catalogue/FETCH_CATALOGUE/failure",cancel:"catalogue/FETCH_CATALOGUE/cancel"}},yNQq:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"i",(function(){return g}));const o=["body","frame","iframe","img","link","script","style"];function r(e){return new Promise(t=>{const n=e.toHTMLElement();o.indexOf(e.type)>-1?n.onload=()=>{t()}:t(),document.head.appendChild(n)})}async function s(e){const t=document.head||document.querySelector("head");if(void 0!==e.styles&&e.styles.forEach(n=>{let o=n.props.href;o.startsWith("http://")||o.startsWith("https://")||(o=e.cdnUrl+o,n.props.href=new URL(o).toString());return t.querySelectorAll(`link[src="${n.props.href}"]`).length?Promise.resolve():r(n)}),void 0!==e.scripts){const n=e.scripts.map(n=>{let o=n.props.src;o.startsWith("http://")||o.startsWith("https://")||(o=e.cdnUrl+o,n.props.src=new URL(o).toString());return t.querySelectorAll(`script[src="${n.props.src}"]`).length?Promise.resolve():r(n)});await Promise.all(n)}return e}const i=(e,t=!0)=>t?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):String(e);function a(e,t=" "){return Array.isArray(e)?e.join(t):e.toString()}function c(e){let t=0;if(0==e.length)return String(t);for(let n=0;n<e.length;n++){t=(t<<7)-t+e.charCodeAt(n),t&=t}return String(t)}class l{constructor(e,t,n){this.type=e,this.props=t,n&&(this.children=Array.isArray(n)?n.map(e=>"string"==typeof e||e instanceof l?e:l.fromJson(e)):"string"==typeof n||n instanceof l?n:l.fromJson(n))}static fromJson(e){return new l(e.type,e.props,e.children)}addProp(e,t){this.props[e]=t}removeProp(e){this.props[e]&&delete this.props[e]}mergeProps(e){this.props={...this.props,...e}}getHash(){let e=""+this.type;return Object.keys(this.props).sort().forEach(t=>{e+=`[${t.toLowerCase()}="${i(this.props[t].toString())}"]`}),this.children&&(e+=a(this.children)),c(e)}elementAttrToString(){return Object.entries(this.props).reduce((e,[t,n])=>e+(void 0!==n?` ${t}="${i(n.toString())}"`:" "+t),"")}toString(){const e=this.elementAttrToString();return this.children||"script"===this.type?`<${this.type}${e}>${a(this.children||"")}</${this.type}>`:`<${this.type}${e}/>`}toJSON(){let e=[];return this.children&&(e=Array.isArray(this.children)?this.children:[this.children]),{type:this.type,props:this.props,children:e.map(e=>e instanceof l?e.toJSON():e)}}toHTMLElement(){const e=document.createElement(this.type);return Object.entries(this.props).forEach(([t,n])=>{e.setAttribute(t,String(n)||"")}),this.children&&("style"===this.type?e.appendChild(document.createTextNode(a(this.children))):e.innerHTML=a(this.children)),e}}const u=()=>"undefined"!=typeof window,d=()=>"undefined"==typeof window,p=new Map;function h(e,t){d()?p.set(e,t):(window.widgets||(window.widgets={}),window.widgets[e]=t)}function f(e,t){u()&&(window.widgets_markup||(window.widgets_markup={}),window.widgets_markup[e]=t)}function m(e){var t;return u()&&(null===(t=window.apps)||void 0===t?void 0:t[e])||null}function g(e,t){u()&&(window.apps[e]=t)}}});
//# sourceMappingURL=footer.widget.header-footer.d5f48ad61efd01c27335.js.map