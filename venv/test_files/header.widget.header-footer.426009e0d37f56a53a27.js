!function(e){function t(t){for(var n,o,a=t[0],s=t[1],i=0,l=[];i<a.length;i++)o=a[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={3:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+""+({}[e]||e)+".header-footer."+{4:"ba6c4dce6fd643bbc25e",5:"18dc25a929ff1556d6f7"}[e]+".js"}(e);var c=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://storage.yandexcloud.net/cft/microfronts/header/footer/",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var c=s;o(o.s="t1Rk")}({"+8i8":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n("mrSG");function o(e){return e}function a(e,t){void 0===t&&(t=o);var n=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},s=function(){return Promise.resolve().then(a)};s(),n={push:function(e){t.push(e),s()},filter:function(e){return t=t.filter(e),n}}}}}function s(e,t){return void 0===t&&(t=o),a(e,t)}function i(e){void 0===e&&(e={});var t=a(null);return t.options=r.a({async:!0,ssr:!1},e),t}},"+qE3":function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,a=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(){void 0!==a&&e.removeListener("error",a),n([].slice.call(arguments))}var a;"error"!==t&&(a=function(n){e.removeListener(t,o),r(n)},e.once("error",a)),e.once(t,o)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var c=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function d(e,t,n,r){var o,a,s,i;if(l(n),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),s=a[t]),void 0===s)s=a[t]=n,++e._eventsCount;else if("function"==typeof s?s=a[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=u(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,i=c,console&&console.warn&&console.warn(i)}return e}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=h.bind(r);return o.listener=n,r.wrapFn=o,o}function f(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):g(o,o.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var i=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw i.context=s,i}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)a(c,this,t);else{var l=c.length,u=g(c,l);for(n=0;n<l;++n)a(u[n],this,t)}return!0},i.prototype.addListener=function(e,t){return d(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return d(this,e,t,!0)},i.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,a,s;if(l(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){s=n[a].listener,o=a;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,a=Object.keys(n);for(r=0;r<a.length;++r)"removeListener"!==(o=a[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return f(this,e,!0)},i.prototype.rawListeners=function(e){return f(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},i.prototype.listenerCount=m,i.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},"/uc9":function(e,t,n){e.exports={regularButton:"_1PRj0XXCeB_header-footer",primary:"_10nS6q3Yuv_header-footer",secondary:"YJW_JiHt6u_header-footer",alert:"_2rGBfXm7ha_header-footer",outline:"_1i_8W6RQOx_header-footer",pseudo:"_3TAKNe7-Q__header-footer","alert-pseudo":"_7KXLQJafUn_header-footer",s:"_3jTDMDNO2I_header-footer",m:"lajGDI0tLt_header-footer",l:"_2WYuHJh9Ko_header-footer",wide:"_1i20r6f7ev_header-footer",rounded:"_1xY8s8WGXx_header-footer",square:"_1D6DS6O_dA_header-footer",contentWrap:"a5g9sF2yTP_header-footer",iconLeft:"ern_IZfx1K_header-footer",iconRight:"_85dIPmPbQz_header-footer"}},"09RC":function(e,t,n){"use strict";n("lfCk");var r=n("CQbg"),o=n("Bavv");const a=r.b`
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

  ${Object(o.b)(r.b`
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
`,s={buttonstyle:{type:String},buttonsize:{type:String,reflect:!0},scalable:{type:Boolean,reflect:!0}};class i extends r.a{static get properties(){return s}static get styles(){return a}constructor(){super(),this.buttonstyle="base",this.buttonsize="",this.scalable=!1}firstUpdated(){null!=window.applyFocusVisiblePolyfill&&window.applyFocusVisiblePolyfill(this.shadowRoot)}render(){return r.c`
      ${this.scalable?r.c`
            <div class="button-scalable-bg"></div>
          `:""}
      <slot class="button ${this.buttonstyle} ${this.buttonsize}"></slot>
    `}}var c=n("GE3P");Object(c.a)("uc-button",i)},"0Phq":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={setRequestParams:"globalEvents/setRequestParams",setRequestID:"globalEvents/setRequestID",setUserAgent:"globalEvents/userAgent",setIsBot:"globalEvents/isBot"}},"0RBU":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return p}));const r=1200,o=1023,a=767,s=1024,i=768;let c=null;function l(e){return window.matchMedia(e).matches}function u(){return l(`(min-width: ${r}px)`)}function d(){return l("(max-width: 1199px) and (min-width: 1024px)")}function h(){return"boolean"!=typeof c&&(c=l(`(max-width: ${a}px)`)),c}function p(){return l(`(max-width: ${o}px) and (min-width: 768px)`)||h()}},"0Z6T":function(e,t,n){},"0apH":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("VG9E");n("PuJ1");const o=Object(r.a)("div")({name:"CssBaseline",class:"c1caiasm_header-footer"});n("kjdh")},"16Al":function(e,t,n){"use strict";var r=n("WbBG");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"1yRy":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r={init:"suggestions/FETCH_SUGGESTIONS/init",request:"suggestions/FETCH_SUGGESTIONS/request",success:"suggestions/FETCH_SUGGESTIONS/success",failure:"suggestions/FETCH_SUGGESTIONS/failure",cancel:"suggestions/FETCH_SUGGESTIONS/cancel"},o="suggestions/RESET_SERVICES"},"2D9j":function(e,t,n){},"2FAm":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r={init:"pageModel/FETCH_MODEL/init",request:"pageModel/FETCH_MODEL/request",success:"pageModel/FETCH_MODEL/success",failure:"pageModel/FETCH_MODEL/failure",cancel:"pageModel/FETCH_MODEL/cancel"},o="pageModel/RESET"},"2POY":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("jogK");const o=(e,t)=>{const n=new r.a;return class extends e{connectedCallback(){super.connectedCallback(),this.__add__events__handler()}disconnectedCallback(){super.disconnectedCallback(),n.release()}__add__events__handler(){super.__add__events__handler&&super.__add__events__handler(),n.addMany(t.map(({event:e,handler:t,params:n={}})=>{const r=e=>t(e,this),{element:o="document"}=n,a={self:this,document:document,window:window};return a[o].addEventListener(e,r,n),()=>a[o].removeEventListener(e,r,n)}))}}}},"39m2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd");function o(e,t=!0){Object(r.useEffect)(()=>{if(t){const t=t=>{"Escape"===t.key&&e()};return document.addEventListener("keyup",t,{passive:!0}),()=>document.removeEventListener("keyup",t)}return()=>{}},[e,t])}},"3G09":function(e,t,n){},"3MeJ":function(e,t,n){},"4Uh2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return i.b}));var r=n("87j4");let o=new r.a;function a(){return"undefined"!=typeof window?window.storeConfig:o}function s(e){if("undefined"!=typeof window)return window.storeConfig=e;o=e}o.setConfig({bundle:{name:r.b,paths:["/"]}}),"undefined"==typeof window||window.storeConfig||(window.storeConfig=o);var i=n("D7AY");const c={cdnUrl:"",server:"",name:"defaultBundle",paths:[],scripts:[],styles:[],stored:[]};function l(){let e="undefined"!=typeof window&&window.mainBundle;return Object(i.b)(e||c)}},"4YED":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=!1;if("undefined"!=typeof window){var o={get passive(){r=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],i=!1,c=-1,l=void 0,u=void 0,d=function(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},h=function(e){var t=e||window.event;return!!d(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},f=function(e,t){if(e){if(!s.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s),[n]),a?(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-c;!d(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?h(e):e.stopPropagation())}(t,e)},i||(document.addEventListener("touchmove",h,r?{passive:!1}:void 0),i=!0)):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},m=function(e){e?(s=s.filter((function(t){return t.targetElement!==e})),a?(e.ontouchstart=null,e.ontouchmove=null,i&&0===s.length&&(document.removeEventListener("touchmove",h,r?{passive:!1}:void 0),i=!1)):s.length||p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"4rgk":function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("cDcd"),o=n.n(r),a=n("6Sgj"),s=n("GB9r"),i=n("SlpU"),c=n("6MWF"),l=n("jgVx"),u=n("NiPq"),d=n("RFtk"),h=n("wnWD"),p=n("fDmc"),f=n("iuhU");const m=e=>{const t="moscow-region";return[{regionId:e.regionId,regionName:"Химки (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Мытищи (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Шолохово (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Пушкино (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Троицк (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Люберцы (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Зеленоград (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Климовск (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Красногорск (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Домодедово (Москва)",regionCode:t,currentPageLink:e.currentPageLink},{regionId:e.regionId,regionName:"Юдино (Москва)",regionCode:t,currentPageLink:e.currentPageLink}]};var g=n("dK5d"),b=n("zxh6");const v=(e,t,n,r)=>{const o=new URL(e);return new URLSearchParams(t).forEach((e,t)=>o.searchParams.set(t,e)),r&&n&&o.searchParams.set("fromRegion",r),o},y=["city","currentSearchParams","hasRegionNumberChanged","className","currentRegionId","regionsModalIsOpen"];function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const O=e=>{let{city:t,currentSearchParams:n,hasRegionNumberChanged:a,className:s="",currentRegionId:i,regionsModalIsOpen:c}=e,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,y);const{currentPageLink:d,regionCode:p,regionName:m}=t,g=Object(r.useMemo)(()=>v(d,n,c,i),[d,n,i,c]),b=Object(r.useMemo)(()=>Object(f.a)(E.includes(p)&&_,s),[p,s]),O=Object(r.useCallback)(()=>{u.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"regionPopup",elementName:void 0===a?"chooseRegionSuggest":"chooseRegionHint",elementText:m})},[a,m]);return o.a.createElement("div",{role:"listitem","data-qa-regions-item":""},o.a.createElement(h.a,w({kind:"link",variant:"normal",size:"m",withExtraClickZone:!0,className:b,onClick:O,href:g.toString()},l),m))},E=["moscow","spb"],_="hxj6cfs_header-footer";n("FZUf");n("Ctpk");var j=n("R0ca"),x=n("wfSj");const k=(e,t)=>{switch(e){case"inputFocus":u.a.sendEvent("GA:focus",{elementType:"input",elementBlock:"regionPopup",elementName:"chooseRegion",elementText:"Выберите город"});break;case"inputUnfocus":u.a.sendEvent("GA:unfocus",{elementType:"input",elementBlock:"regionPopup",elementName:"chooseRegion",elementText:t});break;case"inputClean":u.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"regionPopup",elementName:"chooseRegionCleanInput"})}},C=({cities:e=[],className:t,onSearch:n,loading:a,value:s="",setValue:i,regionsModalIsOpen:l,currentRegionId:d})=>{const y=Object(c.d)().getSearch(),w=Object(r.useMemo)(()=>[...e,...m(e.find(e=>"34"===e.regionId))],[e]),E=Object(r.useRef)(null),[_,C]=Object(r.useState)(!1),[S,N]=Object(r.useState)(""),[L,P]=Object(r.useState)([]),[T,$]=Object(r.useState)(!1),{index:A,reset:R,selectedItem:M,onKeyDown:I,onMouseEnter:B,onMouseLeave:D}=Object(j.a)(L,{canUnselectAllItems:!1}),q=Object(r.useCallback)(e=>w.filter(t=>{var n;return null===(n=t.regionName)||void 0===n?void 0:n.toLowerCase().startsWith(e.toLowerCase().trim())}),[w]),z=Object(r.useCallback)(e=>{const t=q(e);R(),null==i||i(e),P(t),n(!(!e||!t.length))},[R,n,i,P,q]);Object(x.a)(()=>z(s)),Object(r.useEffect)(()=>{const e=L.length!==w.length&&!!L.length;$(e)},[w,L]);const U=Object(r.useCallback)(e=>{const{key:t,ctrlKey:n}=e,r=(e=>({q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю"}[e.toLowerCase()]))(t);if(r&&!n){var o,a;let t;e.preventDefault();const n=null!==(o=null===(a=window.getSelection())||void 0===a?void 0:a.toString().toLowerCase())&&void 0!==o?o:"";t=n.length?s.toLowerCase().replace(n,r):s+r,z(t),N(t)}},[z,s]),F=Object(r.useMemo)(()=>{if(null!=L&&L.length&&s){const e=L[-1===A?0:A].currentPageLink;return v(e,y,l,d)}return null},[A,y,L,s,d,l]),H=Object(r.useCallback)(e=>{F&&(u.a.sendEvent("GA:click",{name:"changeRegion",position:"header"}),document.location.href=F.toString()),e.preventDefault()},[F]),V=Object(r.useCallback)(()=>{var e;R(),null==i||i(""),n(!1),null===(e=E.current)||void 0===e||e.focus(),k("inputClean")},[R,i,n,E]),G=Object(r.useMemo)(()=>Object(f.a)("ssn6omx_header-footer",_?"i17kura2_header-footer":""),[_]),W=Object(r.useCallback)(e=>{const t=(null==M?void 0:M.regionName)===e.regionName;return Object(f.a)("cm8veuz_header-footer",t?"c1awbmu9_header-footer":"")},[M]),K=Object(r.useCallback)(e=>{z(e.target.value),N(e.target.value)},[z]),Y=Object(r.useCallback)(()=>{C(!0),k("inputFocus")},[]),Z=Object(r.useCallback)(()=>{C(!1),k("inputUnfocus",S)},[S]);return o.a.createElement("div",{className:Object(f.a)("wsgzecb_header-footer",t),onKeyDown:I},o.a.createElement("form",{method:"get",name:"search-form",onSubmit:H,className:G},o.a.createElement("label",null,o.a.createElement("div",{className:"i1yyny41_header-footer"},o.a.createElement("input",{className:"s7b7fdn_header-footer",type:"search",name:"q",placeholder:"Поиск",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:"false",onKeyDown:U,onFocus:Y,onBlur:Z,onChange:e=>K(e),value:(null==M?void 0:M.regionName)||s,ref:E}))),a&&o.a.createElement(b.a,{className:"p16jaaog_header-footer"}),s&&o.a.createElement(h.a,{type:"reset",label:"Сбросить",className:"c6bnlfp_header-footer",onClick:V},o.a.createElement(p.a,{size:16},o.a.createElement(g.a,null)))),s&&L&&o.a.createElement("div",{className:"ca1k5bw_header-footer"},null==L?void 0:L.map((e,t)=>o.a.createElement(O,{city:e,hasRegionNumberChanged:T,currentSearchParams:y,key:t,className:W(e),onMouseEnter:()=>B(t),onMouseLeave:D,currentRegionId:d,regionsModalIsOpen:l}))))},S=({cities:e=[],show:t,onClose:n,isBot:h,logoUrl:p,currentRegionId:f})=>{const m=Object(l.a)(),g=Object(c.d)(),b=Object(a.a)(),[v,y]=Object(r.useState)(!1),[w,E]=Object(r.useState)(""),_=Object(r.useMemo)(()=>{if(m){if(m.mobile)return 1;if(m.tablet)return 2}return 4},[m]),j=Math.ceil(e.length/_),x=Object(r.useMemo)(()=>e.reduce((e,t,n)=>(e[Math.trunc(n/j)].push(t),e),function(e){const t=[];for(let n=0;n<e;n+=1)t.push([]);return t}(_)),[e,_,j]),k=Object(r.useMemo)(()=>v?$:"",[v]);return Object(r.useEffect)(()=>{t&&u.a.sendEvent("GA:blockImpression",{elementType:"block",elementBlock:"regionPopup",elementName:"changeRegion"})},[t]),o.a.createElement(d.a,{renderHidden:h,renderInPortal:!1,show:t,logoUrl:p,onClose:n,"aria-labelledby":b,"data-qa-header-regions-modal":""},()=>o.a.createElement(s.a,{"data-qa-regions-block":""},o.a.createElement("div",{className:P},o.a.createElement(i.a,{id:b,className:N,variant:"h2","data-qa-regions-title":""},"Выберите город"),o.a.createElement(C,{cities:e,className:L,onSearch:e=>y(e),value:w,setValue:e=>E(e),currentRegionId:f,regionsModalIsOpen:t}),o.a.createElement("div",{role:"list",style:{display:"contents"},"data-qa-regions-list":"",className:k},x.map((e,n)=>o.a.createElement("div",{key:n,className:T,"data-qa-regions-column":""},e.map(e=>o.a.createElement(O,{city:e,currentSearchParams:g.getSearch(),key:e.regionId,currentRegionId:f,regionsModalIsOpen:t}))))))))};const N="t19tdea0_header-footer",L="s18g023j_header-footer",P="l1mvy3mk_header-footer",T="c13d0qto_header-footer",$="vz3ciu1_header-footer";n("y4Lc")},"5dl1":function(e,t,n){"use strict";var r=n("wx14"),o=n("cDcd"),a=(n("17x9"),n("xCns")),s=n("BsTD"),i=n("aIkk"),c=n("yRvu"),l=[],u=o.forwardRef((function(e,t){var n,u=o.useState(),d=u[0],h=u[1],p=o.useRef(),f=o.useRef(!1),m=o.useRef(null),g=e.children,b=e.disabled,v=e.noFocusGuards,y=e.persistentFocus,w=e.crossFrame,O=e.autoFocus,E=(e.allowTextSelection,e.group),_=e.className,j=e.whiteList,x=e.shards,k=void 0===x?l:x,C=e.as,S=void 0===C?"div":C,N=e.lockProps,L=void 0===N?{}:N,P=e.sideCar,T=e.returnFocus,$=e.onActivation,A=e.onDeactivation,R=o.useState({})[0],M=o.useCallback((function(){m.current=m.current||document&&document.activeElement,p.current&&$&&$(p.current),f.current=!0}),[$]),I=o.useCallback((function(){f.current=!1,A&&A(p.current)}),[A]),B=o.useCallback((function(e){var t=m.current;if(Boolean(T)&&t&&t.focus){var n="object"==typeof T?T:void 0;m.current=null,e?Promise.resolve().then((function(){return t.focus(n)})):t.focus(n)}}),[T]),D=o.useCallback((function(e){f.current&&c.c.useMedium(e)}),[]),q=c.a.useMedium,z=o.useCallback((function(e){p.current!==e&&(p.current=e,h(e))}),[]);var U=Object(r.a)(((n={})[a.c]=b&&"disabled",n[a.d]=E,n),L),F=!0!==v,H=F&&"tail"!==v,V=Object(s.a)([t,z]);return o.createElement(o.Fragment,null,F&&[o.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:b?-1:0,style:i.a}),o.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:b?-1:1,style:i.a})],!b&&o.createElement(P,{id:R,sideCar:c.d,observed:d,disabled:b,persistentFocus:y,crossFrame:w,autoFocus:O,whiteList:j,shards:k,onActivation:M,onDeactivation:I,returnFocus:B}),o.createElement(S,Object(r.a)({ref:V},U,{className:_,onBlur:q,onFocus:D}),g),H&&o.createElement("div",{"data-focus-guard":!0,tabIndex:b?-1:0,style:i.a}))}));u.propTypes={},u.defaultProps={children:void 0,disabled:!1,returnFocus:!1,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0},t.a=u},"5ofk":function(e,t,n){},"6MWF":function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return k})),n.d(t,"b",(function(){return b}));var r=n("cDcd"),o=n.n(r),a=n("yNQq"),s=n("+qE3");let i=new s.EventEmitter;i.setMaxListeners(50),"undefined"!=typeof window&&(window.pubsub||(window.pubsub=new s.EventEmitter),i=window.pubsub);i.eventNames.bind(i),i.setMaxListeners.bind(i),i.getMaxListeners.bind(i);const c=i.emit.bind(i),l=(i.addListener.bind(i),i.on.bind(i)),u=(i.once.bind(i),i.prependListener.bind(i),i.prependOnceListener.bind(i),i.removeListener.bind(i),i.off.bind(i));i.removeAllListeners.bind(i),i.listeners.bind(i),i.listenerCount.bind(i),i.rawListeners.bind(i);var d=n("7TFv"),h=n("4Uh2");function p({path:e="",search:t="",hash:n=""}){return e+t+n}function f(e){const t={};let n=e;if(n){const e=n.indexOf("#");e>=0&&(t.hash=n.substr(e),n=n.substr(0,e));const r=n.indexOf("?");r>=0&&(t.search=n.substr(r),n=n.substr(0,r)),n&&(t.path=n)}return t}const m=["popstate","pushState","replaceState","hashchange"];class g{constructor(e){if(this._currentPath="/",this._fullPath={path:"/"},this._redirect=null,this._bundle="defaultBundle",this.toJSON=()=>({bundle:this._bundle,path:this.getPath(),params:this.getParams(),search:this.getSearch(),hash:this.getHash()}),this.navigate=(e,t=!1)=>{let n="";switch(e[0]){case"?":n+=this.getPath()+(e.length>1?e:"");break;case"#":n+=this.getPath()+this.getSearch()+(e.length>1?e:"");break;default:n+=e}return Object(a.f)()?(history[t?"replaceState":"pushState"](0,"",n),n):(this._redirect=f(n),n)},this.checkPath=(e,t,n)=>this.matcher(this._availablePaths,e,t,n),this.matcher=(e,t,n,r)=>(Array.isArray(e)?e:[e]).reduce((e,o)=>{const{regexp:a,keys:s}=this.getRegexp(o||"",n,r),i=a.exec(t);if(!i)return e;return[!0,s.reduce((e,t,n)=>(e[t.name]=i[n+1],e),e[1]||{})]},[!1,null]),this.checkForUpdates=()=>{const e=this.getPath();if(e!==this._currentPath){const t=Array.from(this._paths.values());for(let n=0;n<t.length;n+=1)if(t[n].regexp.exec(e))return this.runChange(t[n].name);if("defaultBundle"===this._bundle)return this._paths.set(e,{name:"defaultBundle",...this.getRegexp(e,!1,!0)}),this.runChange("defaultBundle");const n=Object(h.b)().getServerByPath(e);if(n)return fetch(n+"config",{method:"POST"}).then(e=>e.json()).then(h.d).then(e=>Object(a.h)(e).then(()=>e)).then(this.addBundle).then(e=>this.runChange(e.name));if(Object(a.f)())return location.replace(this.toString())}return this.runChange(this._bundle)},this.subscribe=()=>{m.forEach(e=>addEventListener(e,this.checkForUpdates))},this.unsubscribe=()=>{m.forEach(e=>removeEventListener(e,this.checkForUpdates))},this.getRegexp=(e,t,n)=>{const r=`_${t?"t":"f"}_${n?"t":"f"}_${e}`;return this._cache.has(r)||this._cache.set(r,Object(d.b)(e,t,n)),this._cache.get(r)},this.addBundle=e=>{this._bundles.set(e.name,e);const t=e&&e.stored||[];return this._availablePaths=[...new Set(t.reduce((e,t)=>e.concat(t[1]),this._availablePaths))],e.paths.forEach(t=>{this._paths.set(t,{name:e.name,...this.getRegexp(t,!1,!0)})}),e},this._paths=new Map,this._cache=new Map,this._bundles=new Map,this._availablePaths=[],this._patched=!1,Object(a.f)()){const e=Object(h.c)();this._currentPath=this.getPath(),this._bundle=e.name||"defaultBundle",this.addBundle(e),this.patchHistoryEvents(),this.subscribe()}else e&&(this.fullPath=e)}set fullPath(e){this._fullPath=f(e)}get fullPath(){return p(this._fullPath)}get redirectURL(){return!!this._redirect&&p(this._redirect)}getPath(){return Object(a.f)()?location.pathname:this._fullPath.path||"/"}getSearch(){return Object(a.f)()?location.search:this._fullPath.search||""}getHash(){return Object(a.f)()?location.hash:this._fullPath.hash||""}getBundle(e){return this._bundles.get(e)}getSearchParsed(){const e=new URLSearchParams(this.getSearch()),t={};return e.forEach((e,n)=>{t[n]=e}),t}getParams(){let e={};const t=[...Array.from(this._paths.values()),...Array.from(this._cache.values())],n=this.getPath();for(let r=0;r<t.length;r+=1){const o=t[r].regexp.exec(n);o&&(e=t[r].keys.reduce((e,t,n)=>(e[t.name]=o[n+1],e),e))}return e}toString(){return this.getPath()+this.getSearch()+this.getHash()}patchHistoryEvents(){if(this._patched)return;this._patched=!0;const e=this,t=history.pushState,n=history.replaceState;history.pushState=function(...n){const r=t.apply(this,n);return e.checkForUpdates(),r},history.replaceState=function(...t){const r=n.apply(this,t);return e.checkForUpdates(),r}}runChange(e){this._bundle=e;const t=this.toJSON();this._currentPath=t.path,c("changePath",t)}}function b(){return Object(a.f)()?(window.globalRouter||(window.globalRouter=new g),window.globalRouter):new g}const v=b();const y=Object(r.createContext)(v),w=({children:e,router:t})=>Object(r.createElement)(y.Provider,{value:t,children:e}),O=Object(a.g)()?r.useEffect:r.useLayoutEffect;function E(e){const t=Object(r.useContext)(y);O(()=>(l("changePath",e),()=>{u("changePath",e)}),[t,e])}function _(){const e=Object(r.useContext)(y),[t,n]=Object(r.useState)(e.getPath());return E(Object(r.useCallback)(({path:e})=>{t!==e&&void 0!==e&&n(e)},[t])),e}function j(){const e=_();return[e.getPath(),e.navigate]}Object(r.forwardRef)((function({children:e,onClick:t,replace:n,to:a,onlyExists:s=!1,...i},c){const[,l]=j(),u=_(),d="function"==typeof a?a():a||"/",h=Object(r.useCallback)(e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)t&&t(e);else{if(s&&d){if(!u.checkPath(d,!0,!0)[0])return void(t&&t(e))}e.preventDefault(),d&&l(d,n),t&&t(e)}},[d,t,l,n,s]),p={href:d,onClick:h};return o.a.createElement("a",{ref:c,...i,...p},e)}));const x=({children:e,router:t})=>o.a.createElement(w,{router:t},e);function k(){const e=_(),[t,n]=Object(r.useState)(e.getSearch());E(Object(r.useCallback)(()=>{"undefined"!=typeof location&&location.search!==t&&n(location.search)},[t,n]));const o=Object(r.useCallback)(t=>{const n=new URLSearchParams(t);e.navigate(`${e.getPath()}?${n}`,!0)},[e]);return[e.getSearchParsed(),o]}const C=new Map;let S;try{S=n(!function(){var e=new Error("Cannot find module 'async_hooks'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){S={executionAsyncId:()=>0,createHook:()=>({enable(){return this},disable(){return this}})}}Object(a.g)()&&S.createHook({destroy:e=>{C.has(e)&&C.delete(e)}}).enable()},"6PdD":function(e,t,n){},"6Sgj":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("cDcd"),o=n("7isM");const a=(e=5,t="id")=>Object(r.useMemo)(()=>`${t}_${Object(o.a)(e)}`,[t,e])},"7JA9":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("cDcd"),o=n.n(r);const a=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 0L0 1l4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4-1-1-4 4-4-4z"})))},"7TFv":function(e,t,n){"use strict";function r(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e,t,n){let r=e?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return t&&n&&(r=`(?:\\/${r})`),r+(t?"?":"")}function a(e,t=!1,n=!1){if("/"===e||""===e)return{keys:[],regexp:new RegExp(`^${t?"\\/":"(?:\\/(?=$))?"}${n?"$":t?"":"(?=\\/|$)"}`,"i")};const a=/:([A-Za-z0-9_]+)([?+*]?)/g;let s=null,i=0,c=[],l="";for(;null!==(s=a.exec(e));){const[,t,n]=s,u="+"===n||"*"===n,d="?"===n||"*"===n,h=d&&"/"===e[s.index-1]?1:0,p=e.substring(i,s.index-h);c.push({name:t}),i=a.lastIndex,l+=r(p)+o(u,d,!!h)}return l+=r(e.substring(i)),{keys:c,regexp:new RegExp(`^${l}${(t?"":"(?:\\/(?=$))?")+(n?"$":"(?=\\/|$)")}`,"i")}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));const s=new Map;function i(e,t,n){const r=`_${t?"t":"f"}_${n?"t":"f"}_${e}`;return s.has(r)||s.set(r,a(e,t,n)),s.get(r)}},"7isM":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));let r=(e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t}},"7raJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n("cDcd");let o=Object(r.createContext)(),a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,s=(...e)=>{let t=Object(r.useContext)(o);let n=Object(r.useState)({});return a(()=>t.on("@changed",(t,r)=>{e.some(e=>e in r)&&n[1]({})}),[]),Object(r.useMemo)(()=>{let n=t.get(),r={};return e.forEach(e=>{r[e]=n[e]}),r.dispatch=t.dispatch,r},[n[0]])}},"87j4":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n("7TFv"),o=n("D7AY");const a="defaultBundle";class s{constructor(){this._stored_paths=[],this._presets={},this._descriptions={},this.config=function(t={}){return{name:"",server:`http://localhost:${e.env.PORT||3e3}/`,paths:[""],cdnUrl:"",sd:"",...t,stored:new Map,widgets:new Set,resources:{}}}()}static fromMainBundle(e){const{name:t,paths:n,stored:r=[],widgets:o=[],resources:a={},...i}=e,c=new s;return c.setConfig({bundle:{name:t,paths:n},config:i}),r.forEach(e=>{c.addStored(e[0],e[1])}),o.forEach(e=>{c.config.widgets.add(e),c.config.resources[e]=a[e]}),c}setConfig({bundle:e,config:t={}}){this.config={...this.config,name:e.name,paths:e.paths||["/"],...t},this.addStored(this.config.server,this.config.paths)}mergeConfig(e={}){this.config={...this.config,...e}}get name(){return this.config.name?this.config.name:a}get paths(){return this.config.paths.concat([...this.config.widgets].map(e=>"/remote-widget/"+e))}get server(){return this.config.server}get cdnUrl(){return""!==this.config.cdnUrl?this.config.cdnUrl:this.config.server||""}get sd(){return this.config.sd}getConfig(){return this.config}toString(){return JSON.stringify(this.toJSON())}toJSON(){return{...this.config,widgets:[...this.config.widgets],stored:[...this.config.stored.entries()],cdnUrl:this.cdnUrl,paths:this.paths}}addStored(e,t){this.config.stored.has(e)||(this.config.stored.set(e,t),t.forEach(t=>{this._stored_paths.push({server:e,...Object(r.a)(t,!1,!0)})}))}addWidget(e,t){this.config.widgets.add(e),this.config.resources[e]=Object(o.a)(t,this.cdnUrl)}getResources(e){return this.config.resources[e]}getWidgets(){return this.config.widgets}getServerByPath(e){for(let t=0;t<this._stored_paths.length;t+=1)if(this._stored_paths[t].regexp.exec(e))return this._stored_paths[t].server;return null}getServersByUrl(e){const t=[];for(let n=0;n<this._stored_paths.length;n+=1)this._stored_paths[n].regexp.exec(e)&&t.push(this._stored_paths[n].server);return t}addDescription(e,t){this._descriptions[e]=t}getDescription(e){return this._descriptions[e]||""}addPreset(e,t){this._presets[e]=(this._presets[e]||[]).concat([t])}addPresets(e,t){this._presets[e]=(this._presets[e]||[]).concat(t)}getPresets(e){return this._presets[e]}getWidgetInfo(e){return{name:e,description:this.getDescription(e),presets:this.getPresets(e),resources:this.getResources(e)}}}}).call(this,n("8oxB"))},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,d=-1;function h(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=i(h);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9ONQ":function(e,t,n){"use strict";var r=n("iVi/");function o(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(e){}return e}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?r.parse(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=o(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=a(a({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=a(a({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=s},"9R94":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r="Invariant failed";function o(e,t){if(!e)throw new Error(r)}},"9wWz":function(e,t,n){},Bavv:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("CQbg");const o=(e,t=14)=>Object(r.e)(e/t+"rem"),a=e=>r.b`
  @media (hover: hover) and (min-width: 1024px),
    (min-width: 0\\0),
    (min--moz-device-pixel-ratio: 0) {
    ${e}
  }
`},BsTD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd");function o(e,t){return n=t,o=function(t){return e.forEach((function(e){return function(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}(e,t)}))},(a=Object(r.useState)((function(){return{value:n,callback:o,facade:{get current(){return a.value},set current(e){var t=a.value;t!==e&&(a.value=e,a.callback(e,t))}}}}))[0]).callback=o,a.facade;var n,o,a}},"C+7h":function(e,t,n){},CO7v:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("CQbg");let o;const a=Object(r.d)(o||(o=(e=>e)`<svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 8l8-8 1.5 1.5L3 8l6.5 6.5L8 16 0 8z"/></svg>`))},CQbg:function(e,t,n){"use strict";n.d(t,"c",(function(){return q})),n.d(t,"d",(function(){return z})),n.d(t,"e",(function(){return ne})),n.d(t,"b",(function(){return re})),n.d(t,"a",(function(){return ae}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${a}--\x3e`,i=new RegExp(`${a}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,u=0;const{strings:p,values:{length:f}}=e;for(;u<f;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[u],n=h.exec(t)[2],r=n.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const a=o.split(i);this.parts.push({type:"attribute",index:c,name:n,strings:a}),u+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const r=e.parentNode,o=t.split(i),a=o.length-1;for(let t=0;t<a;t++){let n,a=o[t];if(""===a)n=d();else{const e=h.exec(a);null!==e&&l(e[2],"$lit$")&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(a)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===o[a]?(r.insertBefore(d(),e),n.push(e)):e.data=o[a],u+=a}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(d(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let a=m(r),s=r[a],i=-1,c=0;const l=[];let u=null;for(;o.nextNode();){i++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===i;)s.index=null!==u?-1:s.index-c,a=m(r,a),s=r[a]}l.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(u(t))return n}return-1};const g=new WeakMap,b=e=>"function"==typeof e&&g.has(e),v={},y={};class w{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,s=0,i=0,c=o.nextNode();for(;s<n.length;)if(a=n[s],u(a)){for(;i<a.index;)i++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const O=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),E=` ${a} `;class _{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=h.exec(e);t+=null===i?e+(n?E:s):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+a}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==O&&(t=O.createHTML(t)),e.innerHTML=t,e}}class j extends _{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(t,n.firstChild),e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let r="";for(let o=0;o<t;o++){r+=e[o];const t=n[o];if(void 0!==t){const e=t.value;if(x(e)||!k(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||x(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const n=new w(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new N(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class L{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class P extends C{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends S{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function M(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(a);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const I=new Map,B=new WeakMap;const D=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new P(e,t.slice(1),n).parts}if("@"===o)return[new A(e,t.slice(1),r.eventContext)];if("?"===o)return[new L(e,t.slice(1),n)];return new C(e,t,n).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const q=(e,...t)=>new _(e,t,"html",D),z=(e,...t)=>new j(e,t,"svg",D),U=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const H=e=>t=>{const n=U(t.type,e);let r=I.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},I.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(a);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(n,e),o=new c(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},V=["html","svg"],G=new Set,W=(e,t,n)=>{G.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<a;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{V.forEach(t=>{const n=I.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),p(e,n)})})})(e);const i=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const a=document.createTreeWalker(r,133,null,!1);let s=m(o),i=0,c=-1;for(;a.nextNode();){c++;for(a.currentNode===n&&(i=f(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(i>0){for(;-1!==s;)o[s].index+=i,s=m(o,s);return}s=m(o,s)}}}(n,s,i.firstChild):i.insertBefore(s,i.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){i.insertBefore(s,i.firstChild);const e=new Set;e.add(s),p(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const K={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),Z={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Y};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Z){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Z}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=Y){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||K,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||K.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Z){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ne=e=>new te(String(e),ee),re=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new te(n,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const oe={};class ae extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Q){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return ne(t)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return oe}}ae.finalized=!0,ae.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,a=B.has(t),s=F&&11===t.nodeType&&!!t.host,i=s&&!G.has(r),c=i?document.createDocumentFragment():t;if(((e,t,n)=>{let r=B.get(t);void 0===r&&(o(t,t.firstChild),B.set(t,r=new N(Object.assign({templateFactory:M},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:H(r)},n)),i){const e=B.get(c);B.delete(c);const n=e.value instanceof w?e.value.template:void 0;W(r,c,n),o(t,t.firstChild),t.appendChild(c),B.set(t,e)}!a&&s&&window.ShadyCSS.styleElement(t.host)},ae.shadowRootOptions={mode:"open"}},Cft0:function(e,t,n){},Ctpk:function(e,t,n){},D7AY:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var r=n("yNQq");function o(e,t){return e&&t&&!e.startsWith("http://")&&!e.startsWith("https://")?t+e:e}function a(e,t){return{scripts:e.scripts.map(e=>(e=o(e,t),new r.a("script",{src:e}))),styles:e.styles.map(e=>(e=o(e,t),new r.a("link",{rel:"stylesheet",href:e})))}}function s(e){var t,n,o,a;let s={...e,scripts:null===(t=e.scripts)||void 0===t?void 0:t.map(r.a.fromJson),styles:null===(n=e.styles)||void 0===n?void 0:n.map(r.a.fromJson),resources:{}};if(e.resources){s.resources={};for(const t of Object.keys(e.resources))s.resources[t]={scripts:null===(o=e.resources[t].scripts)||void 0===o?void 0:o.map(r.a.fromJson),styles:null===(a=e.resources[t].styles)||void 0===a?void 0:a.map(r.a.fromJson)}}return s}},D7Kd:function(e,t,n){e.exports={icon:"_3uk7Z0fcdl_header-footer"}},DUc8:function(e,t,n){"use strict";var r=n("zLVn"),o=n("wx14"),a=n("cDcd"),s=n("5dl1"),i=n("SNmK"),c=a.forwardRef((function(e,t){return a.createElement(s.a,Object(o.a)({sideCar:i.a,ref:t},e))})),l=s.a.propTypes||{};l.sideCar,Object(r.a)(l,["sideCar"]);c.propTypes={};var u=c;t.a=u},DsmL:function(e,t,n){e.exports={modalTransitionEnter:"Yr__k8PPtB_header-footer",overlay:"_20OU_gjkbk_header-footer","full-screen":"sVjWKarMEV_header-footer",curtain:"_1G4lsQP2Kg_header-footer",modal:"MTBF6uJY2d_header-footer",modalTransitionEnterActive:"_1UxjMWsOV0_header-footer",toTop:"pgDnfR5Hz2_header-footer",simple:"_2adYK0urrO_header-footer",modalTransitionExit:"_1FnKGkxYqH_header-footer",modalTransitionExitActive:"rhnG7tNniT_header-footer",disappear:"_3KLiXn9KsV_header-footer","overlay-type-light":"_2BW7nNTdcX_header-footer","overlay-type-medium":"_31G8pWfC_W_header-footer","overlay-type-dark":"_21orW1i4OI_header-footer",wrapper:"_1LxYuF4ust_header-footer",s:"_J_BocZ0L8_header-footer",m:"_3IqYQb-68p_header-footer",l:"_3ENPrKskze_header-footer",sticky:"UumXKx_MX-_header-footer",contentWrapper:"_216SK1ViUj_header-footer",closeButtonWrapper:"FtMZmiv4nn_header-footer",closeButtonDesktop:"_1H3m1CGUCg_header-footer",closeButtonMobile:"_2bs2VS4y8X_header-footer",fadeOut:"_2JOcn59n7S_header-footer"}},Duuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd");function o(e,t,n){const o=Object(r.useMemo)(()=>function(e,t){let n={};return Object.keys(e).forEach(r=>{let o=t[r];if(!o||null==e[r])return;let[a,s]=o;"function"==typeof a&&(a=a(r));let i=s(e[r]);if(Array.isArray(a))for(let e of a)n[e]=i;else n[a]=i}),n}(e,t),[e,t]);return Object(r.useMemo)(()=>({style:{...n,...o}}),[n,o])}},ECaf:function(e,t,n){"use strict";var r=n("GE3P"),o=n("CQbg"),a=n("jogK");let s,i,c=e=>e;class l extends o.a{render(){return Object(o.c)(s||(s=c`<slot></slot>`))}}l.styles=Object(o.b)(i||(i=c`
    :host {
      display: block;
    }

    ${0}
  `),Object(a.d)()),Object(r.a)("uc-page-content",l)},"FLU+":function(e,t,n){},FZUf:function(e,t,n){},FgJ6:function(e,t,n){e.exports={"only-mobile":"_3v05hTu_Fg_header-footer","only-tablet":"_3mib_0pxQ1_header-footer","only-desktop":"_2n8xyyQINA_header-footer","only-largeDesktop":"_21UXy0pBeV_header-footer","from-tablet":"_1j-mQIOf8A_header-footer","from-desktop":"_75R6twinSa_header-footer","from-largeDesktop":"_1EL9UF5xqU_header-footer","to-tablet":"_1sAuiThNPb_header-footer","to-desktop":"_1lGTBpkeRn_header-footer","to-largeDesktop":"_1EqJSV4UH__header-footer"}},Fyhp:function(e,t,n){"use strict";var r=n("5dl1");t.a=r.a},GB9r:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cDcd"),o=n("iuhU"),a=n("JyMA"),s=n.n(a);const i=r.forwardRef((function({as:e="div",children:t,className:n,...a},i){return r.createElement(e,{role:"presentation",...a,className:Object(o.a)(n,s.a.layout),ref:i},t)}))},GE3P:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("0RBU");function r(e,t){customElements.get(e)||customElements.define(e,t)}},HLvI:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n("cDcd");const o=Object(r.createContext)(Object(r.createRef)());function a(){return{root:Object(r.useContext)(o)}}const s=o.Provider},Hz6d:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));const r=e=>{var t,n;return null!==(t=(null===(n=e["user-auth"])||void 0===n?void 0:n.length)>0)&&void 0!==t&&t},o=e=>{var t;return null!==(t=e.customerId)&&void 0!==t?t:null==e?void 0:e._gid},a=(e,t,n)=>{const r=(e=>e._regionID)(e),o=new URLSearchParams(n).get("fromRegion");return r!==t&&!(o===r)},s=e=>"true"===e.cookie_accepted,i=e=>null==e?void 0:e.userData},I4wW:function(e,t,n){e.exports={"text-primary":"#333","text-secondary":"#666","text-minor":"#999","text-invert":"#fff","background-accent":"#2e323d","background-secondary":"#f2f3f5","background-primary":"#fff","control-primary":"#464c5c","control-secondary":"#ced0d6","control-minor":"#e8e9eb","control-invert":"#fff","control-secondary-invert":"#ffffff66","control-minor-invert":"#ffffff28","control_hover-primary":"#1c212e","control_hover-secondary":"#a9adb8","control_hover-minor":"#dcdde0","control_hover-primary-invert":"#ffffffea","control_hover-secondary-invert":"#ffffff7f","control_hover-minor-invert":"#ffffff3d","success-primary":"#5ab030","success-dark":"#488c26","success-light":"#deefd5","brand-primary":"#5ab030","brand-dark":"#488c26","brand-light":"#deefd5","brand-minor":"#000","brand-invert":"#fff","accent-primary":"#f4be55","accent-dark":"#c39844","accent-light":"#fcf2dd","attention-primary":"#e6615e","attention-dark":"#b84d4b","attention-light":"#fadfde","secondary-green_primary":"#00b2a9","secondary-green_dark":"#008e87","secondary-green_light":"#ccefed","secondary-blue_primary":"#3d6be3","secondary-blue_dark":"#3b59a4","secondary-blue_light":"#d1deff","secondary-orange_primary":"#d95e00","secondary-orange_dark":"#ad4b00","secondary-orange_light":"#f7decc","secondary-purple_primary":"#8961a5","secondary-purple_dark":"#6d4d84","secondary-purple_light":"#e7dfed","secondary-yellow_primary":"#ffe55a","secondary-yellow_dark":"#ccb748","secondary-yellow_light":"#fff9de","opacity-4":"0.4","opacity-6":"0.6","opacity-8":"0.8","rounding-m":"4px","rounding-l":"8px","rounding-xl":"16px","box-shadow-m":"0 1.17px 2px rgba(0, 0, 0, 0.0196802), 0 1.4px 5px rgba(0, 0, 0, 0.03), 0 2px 10px rgba(0, 0, 0, 0.03), 0 2px 18px rgba(0, 0, 0, 0.04), 0 9px 33px rgba(0, 0, 0, 0.03)","box-shadow-m-up":"0 -1.17px 2px rgba(0, 0, 0, 0.0196802), 0 -1.4px 5px rgba(0, 0, 0, 0.03), 0 -2px 10px rgba(0, 0, 0, 0.03), 0 -2px 18px rgba(0, 0, 0, 0.04), 0 -9px 33px rgba(0, 0, 0, 0.03)","box-shadow-s":"0 1px 4px rgba(0, 0, 0, 0.16), 0 2px 9px rgba(0, 0, 0, 0.02)","box-shadow-s-up":"0 -1px 4px rgba(0, 0, 0, 0.16), 0 -2px 9px rgba(0, 0, 0, 0.02)","box-shadow-l":"0 0.166035px 2.21381px rgba(0, 0, 0, 0.0196802), 0 0.399006px 5.32008px rgba(0, 0, 0, 0.0282725), 0 0.751293px 10.0172px rgba(0, 0, 0, 0.035), 0 12px 40px rgba(0, 0, 0, 0.08)","box-shadow-l-up":"0 -0.166035px 2.21381px rgba(0, 0, 0, 0.0196802), 0 -0.399006px 5.32008px rgba(0, 0, 0, 0.0282725), 0 -0.751293px 10.0172px rgba(0, 0, 0, 0.035), 0 -12px 40px rgba(0, 0, 0, 0.08)","space-10":"1px","space-25":"2px","space-35":"3px","space-50":"4px","space-60":"5px","space-75":"6px","space-85":"7px","space-100":"8px","space-125":"10px","space-150":"12px","space-175":"14px","space-200":"16px","space-225":"18px","space-250":"20px","space-275":"22px","space-300":"24px","space-325":"26px","space-350":"28px","space-375":"30px","space-400":"32px","space-425":"34px","space-450":"36px","space-475":"38px","space-500":"40px","space-525":"42px","space-550":"44px","space-575":"46px","space-600":"48px","space-625":"50px","space-650":"52px","space-675":"54px","space-700":"56px","space-725":"58px","space-750":"60px","space-775":"62px","space-800":"64px","space-825":"66px","space-850":"68px","space-875":"70px","space-900":"72px","space-925":"74px","space-950":"76px","space-975":"78px","space-1000":"80px",themeProvider:"_2Z7Yxx-mHq_header-footer",constants:"_1cM5Sipjng_header-footer",lightTheme:"_17Q5fplowC_header-footer"}},IXZf:function(e,t,n){},IcJs:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"k",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return h})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return f}));const r="RUB",o="DY:add_to_cart",a="DY:remove_from_cart",s="DY:sync_cart",i="DY:add_to_wishlist",c="DY:filter_items",l="DY:sort_items",u="DY:keyword_search",d="DY:login",h={[o]:{dyType:"add-to-cart-v1",name:"Add to Cart"},[a]:{dyType:"remove-from-cart-v1",name:"Remove from Cart"},[s]:{dyType:"sync-cart-v1",name:"Sync cart"},[i]:{dyType:"add-to-wishlist-v1",name:"Add to Wishlist"},[c]:{dyType:"filter-items-v1",name:"Filter Items"},[l]:{dyType:"sort-items-v1",name:"Sort Items"},[u]:{dyType:"keyword-search-v1",name:"Keyword Search"},[d]:{dyType:"login-v1",name:"Login"},"DY:signup":{dyType:"signup-v1",name:"Signup"},"DY:purchase":{dyType:"purchase-v1",name:"Purchase"}},p="DY_SS_CART_SYNC_NECESSARY",f="DY_SS_LOGIN_NECESSARY"},JU4c:function(e,t,n){},JZOa:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=()=>"undefined"!=typeof window&&!0},Jt3X:function(e,t,n){},JyMA:function(e,t,n){e.exports={layout:"_2Q3l31oBv8_header-footer"}},K0og:function(e,t,n){},M8Ev:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,"a",(function(){return r}))},MC5f:function(e,t,n){"use strict";var r=n("GE3P"),o=n("CQbg");class a extends o.a{static get properties(){return{url:{type:String},img:{type:String}}}static get styles(){return o.b`
      :host {
        display: block;
      }
      a,
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    `}constructor(){super(),this.url="",this.img=""}firstUpdated(e){super.firstUpdated(e);const t=this.querySelector("a"),n=this.querySelector("img");t&&(this.url=t.getAttribute("href")),n&&(this.img=n.getAttribute("src"))}render(){return o.c`
      <a href="${this.url}">
        <img src="${this.img}" alt="" />
      </a>
    `}}Object(r.a)("uc-header-logo",a);var s=n("4YED"),i=n("iuhU"),c=n("jogK");let l;const u=Object(o.d)(l||(l=(e=>e)`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.39113L18.6089 4L12 10.6089L5.39113 4L4 5.39113L10.6089 12L4 18.6089L5.39113 20L12 13.3911L18.6089 20L20 18.6089L13.3911 12L20 5.39113Z"/></svg>`));n("ECaf");let d,h,p,f,m,g=e=>e;class b extends o.a{static get styles(){return Object(o.b)(d||(d=g`
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
    `),Object(c.j)(82),Object(c.j)(20),Object(c.i)(Object(o.b)(h||(h=g`
        :host {
          height: ${0};
        }
      `),Object(c.j)(62))),Object(c.j)(47),Object(c.j)(4),Object(c.e)(Object(o.b)(p||(p=g`
        .logo {
          width: ${0};
        }
      `),Object(c.j)(60))))}render(){return Object(o.c)(f||(f=g`
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
    `),c.b.notDesktop(Object(o.c)(m||(m=g` <slot class="left-side" name="left-side"></slot> `))))}}Object(r.a)("uc-header-container",b);var v=n("Bavv");let y,w,O=e=>e;const E=Object(o.b)(y||(y=O`
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
`),Object(v.a)(62),Object(c.e)(Object(o.b)(w||(w=O`
      .content {
        padding-top: ${0};
      }
    `),Object(v.a)(82))),Object(v.a)(8),Object(v.a)(8));var _=n("2POY");function j(e,t){27===e.keyCode&&t()}let x,k,C,S,N=e=>e;class L extends o.a{constructor(){super(),this._reflectOuterStateToInnerState=e=>{this._show!==e&&(this._show=e,this._lockBodyScroll(e))},this._lockBodyScroll=e=>{e?Object(s.a)(this._overlayRef,{reserveScrollBarGap:!0}):Object(s.b)(this._overlayRef)},this.show=!1,this.disableFocusLock=!1,this.overlayLevel=c.g,this.withoutHeader=!1,this.noTransition=!1,this.noScroll=!1,this.closeColor="#a9acb1",this._show=this.show,this._overlayRef=null,this._lastActiveElement=null,this.tabIndex=0,this.withoutLastElementFocus=!1}scrollToTop(){this._overlayRef&&(this._overlayRef.scrollTop=0)}firstUpdated(e){this._overlayRef=this.shadowRoot.querySelector(".js-overlay")}updated(e){if(super.updated(e),e.has("show")){const t=e.get("show"),{show:n}=this;!1===n&&void 0!==t&&this._overlayRef&&!this.noTransition?this._overlayRef.addEventListener("transitionend",()=>this._reflectOuterStateToInnerState(n),{once:!0,passive:!0}):this._reflectOuterStateToInnerState(n)}var t;e.has("_show")&&void 0!==this._show&&!this.withoutLastElementFocus&&(this._show?(this._lastActiveElement=Object(c.f)(),this.focus({preventScroll:!0})):null===(t=this._lastActiveElement)||void 0===t||t.focus());e.has("closeColor")&&this.style.setProperty("--close-button-color",this.closeColor)}disconnectedCallback(){super.disconnectedCallback(),this._lockBodyScroll(!1)}render(){return Object(o.c)(x||(x=N`
      <div
        class=${0}
        style="z-index: ${0}"
      >
        ${0}
      </div>
    `),Object(i.a)("overlay js-overlay",{show:this.show},{"no-scroll":this.noScroll}),this.overlayLevel,this._show?Object(o.c)(k||(k=N`
              <div class="container" ?inactive=${0}>
                <div class="scroll-compensator">
                  ${0}
                  <slot class="content"></slot>
                </div>
              </div>
            `),this.disableFocusLock,this.withoutHeader?Object(o.c)(S||(S=N``)):Object(o.c)(C||(C=N`
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
                      `),this._closeOverlay,u)):"")}_closeOverlay(){this.dispatchEvent(new CustomEvent("close"))}}L.styles=E,L.properties={show:{type:Boolean},overlayLevel:{type:Number},disableFocusLock:{type:Boolean},withoutHeader:{type:Boolean},withoutLastElementFocus:{type:Boolean},noTransition:{type:Boolean,reflect:!0},noScroll:{type:Boolean,reflect:!0},closeColor:{type:String,attribute:"close-color"},_show:{type:Boolean},_overlayWidth:{type:Number}};const P=(e,t)=>{const n=Object(c.f)();n&&"focusVisibleAdded"in n.dataset||(t._lastActiveElement=null),t._closeOverlay()},T=Object(_.a)(L,[{event:"close-overlay",handler:(e,t)=>{P(0,t),t.show=!1},params:{passive:!0,element:"self"}},{event:"keyup",handler:(e,t)=>j(e,P.bind(void 0,e,t)),params:{passive:!0}},{event:"scrolltop",handler:(e,t)=>{e.stopPropagation(),t._overlayRef&&(t._overlayRef.scrollTop=0)},params:{passive:!0,element:"self"}}]);Object(r.a)("uc-overlay",T)},MZ1S:function(e,t,n){"use strict";function r(e,t){const n=[...new Array(20).map((e,t)=>"fs"+t),"ux","aem","localhost","leroymerlin","mf","publish","author","yandex","arulm","triffle","dispatcher"];if(["adeo.com","leroymerlin.ru","localhost","lmru.tech"].some(e=>t===e)){const[t]=e.split(".");if(!n.some(e=>t.startsWith(e)))return t}return""}n.d(t,"a",(function(){return r}))},MZmn:function(e,t,n){},N19E:function(e,t,n){},NiPq:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("JZOa");const o=new class{constructor(){this.hasFlagLogAnalytics=null,Object(r.a)()&&(this.hasFlagLogAnalytics=localStorage.getItem("enabledLogAnalytics"),this.hasFlagLogAnalytics||localStorage.setItem("enabledLogAnalytics",""))}sendEvent(e,t){this.hasFlagLogAnalytics&&console.log(e,t),document.dispatchEvent(new CustomEvent(e,{detail:t}))}}},PPLs:function(e,t,n){e.exports={iconButton:"_2gqxFggGGP_header-footer",primary:"_2DPuTKh3wA_header-footer",secondary:"_1dxyU-MB_1_header-footer",invert:"_1B-gclqGH8_header-footer"}},PuJ1:function(e,t,n){},Qn3M:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cDcd"),o=n.n(r),a=n("wnWD"),s=n("iuhU");const i=Object(r.memo)(({logoURL:e,url:t,className:n})=>o.a.createElement("div",{className:Object(s.a)(c,n),itemScope:!0,itemType:"https://schema.org/Organization","data-qa-header-logo":""},o.a.createElement("div",{className:l,itemScope:!0,itemType:"https://schema.org/Brand"},o.a.createElement(a.a,{as:t?"a":"div",className:u,href:t,itemProp:"url","data-position":"header","data-qa-header-logo-link":"","data-qa":"logo-button","data-name":""},o.a.createElement("div",{className:"visually-hidden",itemProp:"name"},"Леруа Мерлен"),o.a.createElement("img",{className:d,src:e,alt:"Леруа Мерлен",role:"presentation","aria-hidden":"true",itemProp:"logo",width:"59",height:"48"}))))),c="l1kxh95o_header-footer",l="llwq37i_header-footer",u="l1s0pk5w_header-footer",d="i1iye343_header-footer";n("C+7h")},R0ca:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cDcd");const o=r.useLayoutEffect;var a=n("fmJQ");const s={ArrowUp:-1,ArrowDown:1};function i(e,t={}){var n,i;const{canUnselectAllItems:c=!1,defaultSelected:l=-1}=t,u=function(e){const t=Object(r.useRef)(e);return o(()=>{t.current=e},[e]),t}(e),[d,h]=Object(r.useState)(l),p=Object(r.useCallback)(e=>h(e),[]),f=Object(r.useCallback)(()=>h(-1),[]),m=Object(r.useCallback)(()=>h(-1),[]);Object(a.a)(()=>{var t;const n=(null!==(t=null==e?void 0:e.length)&&void 0!==t?t:0)-1;h(e=>n<e?n:e)},[e]);const g=Object(r.useCallback)(e=>{e.persist(),h(t=>{if(!u.current)return t;const n=u.current.length-1,r=s[e.key];return r?(e.preventDefault(),e.stopPropagation(),function(e,t,n,r){const o=t+n;if(o<e)return r;if(o>r)return e;return o}(c?-1:0,t,r,n)):t})},[u,c]),b=Object(r.useCallback)(e=>{u.current&&(e<0||e>=u.current.length||h(e))},[u]);return{index:d,reset:m,selectedItem:null!==(n=null===(i=u.current)||void 0===i?void 0:i[d])&&void 0!==n?n:null,selectItem:b,onMouseEnter:p,onMouseLeave:f,onKeyDown:g}}},RFtk:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("cDcd"),o=n.n(r),a=n("iuhU"),s=n("DUc8"),i=n("glgz"),c=n("wnWD"),l=n("sMGQ"),u=n("7JA9");n("xdBz");var d=n("ltqI"),h=n("Qn3M"),p=n("39m2");const f=["children","logoUrl","show","onClose","disableBodyLock","disableFocusLock","className","focusGroup","renderInPortal","renderHidden"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const g=o.a.createContext(null),b=Object(r.forwardRef)((e,t)=>{let{children:n,logoUrl:b,show:v,onClose:y,disableBodyLock:w=!1,disableFocusLock:O=!1,className:E,focusGroup:_,renderInPortal:j=!0,renderHidden:x=!1}=e,k=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,f);const C=Object(r.useRef)(null),S=Object(r.useRef)(null);Object(l.a)({ref:C,locked:!w&&v}),Object(p.a)(y);const N=()=>({scrollTop:()=>{var e,t;return null!==(e=null===(t=C.current)||void 0===t?void 0:t.scrollTop)&&void 0!==e?e:0},scrollHeight:()=>{var e,t;return null!==(e=null===(t=C.current)||void 0===t?void 0:t.scrollHeight)&&void 0!==e?e:0},scrollToTop:()=>{C.current&&(C.current.scrollTop=0)},scrollTo:({top:e,left:t})=>{var n;return null===(n=C.current)||void 0===n?void 0:n.scrollTo({top:e,left:t})}});return Object(r.useImperativeHandle)(S,N,[]),Object(r.useImperativeHandle)(t,N,[]),v||x?o.a.createElement(i.a,{disabled:!j},o.a.createElement("div",m({ref:C,role:"dialog","aria-modal":"true",className:Object(a.a)("mb5lzm5_header-footer",{show:v},E)},k),o.a.createElement("div",{className:"s1f37odd_header-footer"},o.a.createElement(s.a,{group:_,className:"frxqwye_header-footer",autoFocus:!1,disabled:O},o.a.createElement(g.Provider,{value:S},o.a.createElement("div",{className:"cfu7fnf_header-footer"},"function"==typeof n?n():n),o.a.createElement("div",{className:"sdhm2vw_header-footer"},o.a.createElement(d.a,{className:"h1h4eqp8_header-footer"},o.a.createElement(h.a,{className:"ldpsui9_header-footer",logoURL:b}),o.a.createElement(c.a,{kind:"icon",withExtraClickZone:!0,className:"c16r4g6o_header-footer",variant:"primary",size:"s",label:"Закрыть",onClick:y},o.a.createElement(u.a,null))))))))):null});g.Consumer},SNmK:function(e,t,n){"use strict";var r=n("cDcd"),o=n.n(r),a=(n("17x9"),n("dI71"));var s=function(e,t){return function(n){var s,i=[];function c(){s=e(i.map((function(e){return e.props}))),t(s)}var l,u,d,h=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e),t.peek=function(){return s};var r=t.prototype;return r.componentDidMount=function(){i.push(this),c()},r.componentDidUpdate=function(){c()},r.componentWillUnmount=function(){var e=i.indexOf(this);i.splice(e,1),c()},r.render=function(){return o.a.createElement(n,this.props)},t}(r.PureComponent);return l=h,u="displayName",d="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",u in l?Object.defineProperty(l,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[u]=d,h}},i=n("xCns"),c=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},l=function(e){return Array.isArray(e)?e:[e]},u=function(e){return e.parentNode?u(e.parentNode):e},d=function(e){return l(e).filter(Boolean).reduce((function(e,t){var n=t.getAttribute(i.d);return e.push.apply(e,n?function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter((function(e,n){return!t.has(n)}))}(c(u(t).querySelectorAll("["+i.d+'="'+n+'"]:not(['+i.c+'="disabled"])'))):[t]),e}),[])},h=function(e){return Boolean(c(e.querySelectorAll("iframe")).some((function(e){return e===document.activeElement})))},p=function(e){var t=document&&document.activeElement;return!(!t||t.dataset&&t.dataset.focusGuard)&&d(e).reduce((function(e,n){return e||n.contains(t)||h(n)}),!1)},f=function(e){return"INPUT"===e.tagName&&"radio"===e.type},m=function(e,t){return f(e)&&e.name?function(e,t){return t.filter(f).filter((function(t){return t.name===e.name})).filter((function(e){return e.checked}))[0]||e}(e,t):e},g=function(e){return e[0]&&e.length>1?m(e[0],e):e[0]},b=function(e,t){return e.length>1?e.indexOf(m(e[t],e)):t},v=function(e,t){var n=e.get(t);if(void 0!==n)return n;var r=function(e,t){return!e||e===document||e&&e.nodeType===Node.DOCUMENT_NODE||!((n=window.getComputedStyle(e,null))&&n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility")))&&t(e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode);var n}(t,v.bind(void 0,e));return e.set(t,r),r},y=function(e){return Boolean(e&&e.dataset&&e.dataset.focusGuard)},w=function(e){return!y(e)},O=function(e){return Boolean(e)},E=function(e,t,n,r){var o=e.length,a=e[0],s=e[o-1],i=y(n);if(!(e.indexOf(n)>=0)){var c,l,u=t.indexOf(n),d=r?t.indexOf(r):u,h=r?e.indexOf(r):-1,p=u-d,f=t.indexOf(a),g=t.indexOf(s),v=(c=t,l=new Set,c.forEach((function(e){return l.add(m(e,c))})),c.filter((function(e){return l.has(e)}))),w=v.indexOf(n)-(r?v.indexOf(r):u),O=b(e,0),E=b(e,o-1);return-1===u||-1===h?"NEW_FOCUS":!p&&h>=0?h:u<=f&&i&&Math.abs(p)>1?E:u>=g&&i&&Math.abs(p)>1?O:p&&Math.abs(w)>1?h:u<=f?E:u>g?O:p?Math.abs(p)>1?h:(o+h+p)%o:void 0}},_=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},j=function(e,t,n){return c(e).map((function(e,t){return{node:e,index:t,tabIndex:n&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!t||e.tabIndex>=0})).sort(_)},x=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"].join(","),k=x+", [data-focus-guard]",C=function(e,t){return e.reduce((function(e,n){return e.concat(c(n.querySelectorAll(t?k:x)),n.parentNode?c(n.parentNode.querySelectorAll(x)).filter((function(e){return e===n})):[])}),[])},S=function(e,t){return c(e).filter((function(e){return v(t,e)})).filter((function(e){return function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))}(e)}))},N=function(e,t,n){return j(S(C(e,n),t),!0,n)},L=function(e,t){return j(S(C(e),t),!1)},P=function(e,t){return S((n=e.querySelectorAll("["+i.b+"]"),c(n).map((function(e){return C([e])})).reduce((function(e,t){return e.concat(t)}),[])),t);var n},T=function(e,t){return void 0===t&&(t=[]),t.push(e),e.parentNode&&T(e.parentNode,t),t},$=function(e,t){for(var n=T(e),r=T(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},A=function(e,t,n){var r=l(e),o=l(t),a=r[0],s=!1;return o.filter(Boolean).forEach((function(e){s=$(s||e,e)||s,n.filter(Boolean).forEach((function(e){var t=$(a,e);t&&(s=!s||t.contains(s)?t:$(t,s))}))})),s},R=function(e,t){var n=document&&document.activeElement,r=d(e).filter(w),o=A(n||e,e,r),a=new Map,s=L(r,a),i=N(r,a).filter((function(e){var t=e.node;return w(t)}));if(i[0]||(i=s)[0]){var c,l,u,h,p=L([o],a).map((function(e){return e.node})),f=(c=p,l=i,u=new Map,l.forEach((function(e){return u.set(e.node,e)})),c.map((function(e){return u.get(e)})).filter(O)),m=f.map((function(e){return e.node})),b=E(m,p,n,t);if("NEW_FOCUS"===b){var v=s.map((function(e){return e.node})).filter((h=function(e,t){return e.reduce((function(e,n){return e.concat(P(n,t))}),[])}(r,a),function(e){return e.autofocus||e.dataset&&!!e.dataset.autofocus||h.indexOf(e)>=0}));return{node:v&&v.length?g(v):g(m)}}return void 0===b?b:f[b]}},M=0,I=!1,B=function(e,t){var n,r=R(e,t);if(!I&&r){if(M>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),I=!0,void setTimeout((function(){I=!1}),1);M++,(n=r.node).focus(),"contentWindow"in n&&n.contentWindow&&n.contentWindow.focus(),M--}};function D(e){var t=window.setImmediate;void 0!==t?t(e):setTimeout(e,1)}var q=n("yRvu"),z=function(){return document&&document.activeElement===document.body||document&&c(document.querySelectorAll("["+i.a+"]")).some((function(e){return e.contains(document.activeElement)}))},U=null,F=null,H=null,V=!1,G=function(){return!0};function W(e,t,n,r){var o=null,a=e;do{var s=r[a];if(s.guard)s.node.dataset.focusAutoGuard&&(o=s);else{if(!s.lockItem)break;if(a!==e)return;o=null}}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var K=function(e){return e&&"current"in e?e.current:e},Y=function(){var e,t,n,r,o,a,s,i=!1;if(U){var c=U,l=c.observed,u=c.persistentFocus,h=c.autoFocus,f=c.shards,m=c.crossFrame,g=l||H&&H.portaledElement,b=document&&document.activeElement;if(g){var v=[g].concat(f.map(K).filter(Boolean));if(b&&!function(e){return(U.whiteList||G)(e)}(b)||(u||(m?Boolean(V):"meanwhile"===V)||!z()||!F&&h)&&(!g||p(v)||(s=b,H&&H.portaledElement===s)||(document&&!F&&b&&!h?(b.blur&&b.blur(),document.body.focus()):(i=B(v,F),H={})),V=!1,F=document&&document.activeElement),document){var O=document&&document.activeElement,E=(t=d(e=v).filter(w),n=A(e,e,t),r=new Map,o=N([n],r,!0),a=N(t,r).filter((function(e){var t=e.node;return w(t)})).map((function(e){return e.node})),o.map((function(e){var t=e.node;return{node:t,index:e.index,lockItem:a.indexOf(t)>=0,guard:y(t)}}))),_=E.map((function(e){return e.node})).indexOf(O);_>-1&&(E.filter((function(e){var t=e.guard,n=e.node;return t&&n.dataset.focusAutoGuard})).forEach((function(e){return e.node.removeAttribute("tabIndex")})),W(_,E.length,1,E),W(_,-1,-1,E))}}}return i},Z=function(e){Y()&&e&&(e.stopPropagation(),e.preventDefault())},J=function(){return D(Y)},X=function(e){var t=e.target,n=e.currentTarget;n.contains(t)||(H={observerNode:n,portaledElement:t})},Q=function(){V="just",setTimeout((function(){V="meanwhile"}),0)};q.c.assignSyncMedium(X),q.a.assignMedium(J),q.b.assignMedium((function(e){return e({moveFocusInside:B,focusInside:p})}));t.a=s((function(e){return e.filter((function(e){return!e.disabled}))}),(function(e){var t=e.slice(-1)[0];t&&!U&&(document.addEventListener("focusin",Z,!0),document.addEventListener("focusout",J),window.addEventListener("blur",Q));var n=U,r=n&&t&&t.id===n.id;U=t,n&&!r&&(n.onDeactivation(),e.filter((function(e){return e.id===n.id})).length||n.returnFocus(!t)),t?(F=null,r&&n.observed===t.observed||t.onActivation(),Y(),D(Y)):(document.removeEventListener("focusin",Z,!0),document.removeEventListener("focusout",J),window.removeEventListener("blur",Q),F=null)}))((function(){return null}))},SlpU:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("cDcd"),o=n.n(r),a=n("iuhU"),s=n("bMRi"),i=n.n(s),c=n("Duuu"),l=n("zSPp");const u=Object(r.forwardRef)((function({children:e,variant:t,size:n,className:s,as:l="span",color:u,style:h,...p},f){const m=Object(c.a)({color:u},d,h),g=Object(r.useMemo)(()=>{const e="s"===t||"m"===t||"l"===t?"_"+t:t;return Object(a.a)(i.a.typography,i.a[e],s,n&&i.a[n])},[s,t,n]);return o.a.createElement(l,{...p,...m,className:g,ref:f},e)})),d={color:["color",l.a]}},SyjR:function(e,t,n){},Tn0p:function(e,t,n){"use strict";function r(e){let t="";const n=e.indexOf("."),r=e.replace(/:[0-9]+/,"");if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g.test(r))return r;if(r.endsWith("localhost")){const e=r.split(".");return e[e.length-1]}if(-1!==n){const n=e.split(".");t=r.split(".").slice(n.length-2).join(".")}return t}n.d(t,"a",(function(){return r}))},VG9E:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cDcd");var o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));const s=(e,t)=>Object.keys(e).filter(e=>!t.includes(e)).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{});var i=function(e){return t=>{const n=(n,o)=>{const{as:i=e,class:c}=n,l=s(n,["as","class"]);let u;if("string"==typeof i&&-1===i.indexOf("-")){u={};for(const e in l)("as"===e||a(e))&&(u[e]=l[e])}else u=l;u.ref=o,u.className=function(...e){return e.filter(Boolean).join(" ")}(u.className||c,t.class);const{vars:d}=t;if(d){const e={};for(const r in d){const o=d[r],a=o[0],s=o[1]||"",i="function"==typeof a?a(n):a;t.name,e["--"+r]=`${i}${s}`}u.style=Object.assign(e,u.style)}return e.__linaria&&e!==i?(u.as=i,r.createElement(e,u)):r.createElement(i,u)},o=r.forwardRef?r.forwardRef(n):e=>{const t=s(e,["innerRef"]);return n(t,e.innerRef)};return o.displayName=t.name,o.__linaria={className:t.class,extends:e},o}}},VWYa:function(e,t,n){},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},XH0y:function(e,t,n){var r,o;!function(a,s){"use strict";void 0===(o="function"==typeof(r=function(){var e=function(){},t="undefined"!=typeof window&&void 0!==window.navigator&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function a(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&("trace"===n&&t?o:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):e)}function s(t,r){for(var o=0;o<n.length;o++){var a=n[o];this[a]=o<t?e:this.methodFactory(a,t,r)}this.log=this.debug}function i(e,t,n){return function(){"undefined"!=typeof console&&(s.call(this,t,n),this[e].apply(this,arguments))}}function c(e,t,n){return a(e)||i.apply(this,arguments)}function l(e,t,r){var o,a=this;t=null==t?"WARN":t;var i="loglevel";function l(){var e;if("undefined"!=typeof window&&i){try{e=window.localStorage[i]}catch(e){}if(void 0===e)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(i)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(e){}return void 0===a.levels[e]&&(e=void 0),e}}"string"==typeof e?i+=":"+e:"symbol"==typeof e&&(i=void 0),a.name=e,a.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},a.methodFactory=r||c,a.getLevel=function(){return o},a.setLevel=function(t,r){if("string"==typeof t&&void 0!==a.levels[t.toUpperCase()]&&(t=a.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=a.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(o=t,!1!==r&&function(e){var t=(n[e]||"silent").toUpperCase();if("undefined"!=typeof window&&i){try{return void(window.localStorage[i]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(i)+"="+t+";"}catch(e){}}}(t),s.call(a,t,e),"undefined"==typeof console&&t<a.levels.SILENT)return"No console available for logging"},a.setDefaultLevel=function(e){t=e,l()||a.setLevel(e,!1)},a.resetLevel=function(){a.setLevel(t,!1),function(){if("undefined"!=typeof window&&i){try{return void window.localStorage.removeItem(i)}catch(e){}try{window.document.cookie=encodeURIComponent(i)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},a.enableAll=function(e){a.setLevel(a.levels.TRACE,e)},a.disableAll=function(e){a.setLevel(a.levels.SILENT,e)};var u=l();null==u&&(u=t),a.setLevel(u,!1)}var u=new l,d={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new l(e,u.getLevel(),u.methodFactory)),t};var h="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return d},u.default=u,u})?r.call(t,n,t,e):r)||(e.exports=o)}()},XhBU:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return h}));var r=n("cDcd"),o=n.n(r),a=n("faye"),s=n("4Uh2"),i=n("yNQq");const c=Symbol.for("__$OkapiRuntime__");function l(){return window[c]||(window[c]=function(){window.widgets={},window.apps={},window.widgets_markup=window.widgets_markup||{};const e=s.a.fromMainBundle(Object(s.c)());return Object(s.e)(e),window.addEventListener("DOMContentLoaded",u,{once:!0,passive:!0}),{registerApp:({name:e,render:t})=>{Object(i.i)(e,t)},registerWidget:({name:e,render:t})=>{Object(i.j)(e,t)},helmetContext:{}}}()),window[c]}function u(){Array.from(document.querySelectorAll("[data-remote]")).forEach(e=>{var t;e.dataset.id&&("object"==typeof(t=e.children[0])&&"dataset"in t)&&e.children[0].dataset.content===e.dataset.id&&Object(i.k)(e.dataset.id,e.children[0].innerHTML)});const e=Object(s.b)(),t=Object(i.e)(e.name);if(!t)throw new Error("Okapi error! It seems to your app isn't loaded well.");Object(a.hydrate)(o.a.createElement(t,null),document.getElementById("root"))}function d(e,t){l().registerWidget({name:e,render:t})}function h(e,t){l().registerApp({name:e,render:t(window.INITIAL_STATE[e])})}},YIKF:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("cDcd"),o=n.n(r),a=n("HLvI"),s=n("iuhU"),i=n("Duuu");const c=e=>e;var l=n("I4wW"),u=n.n(l),d=n("v3Fk"),h=n.n(d);const p={light:u.a.lightTheme};let f={};for(const e of Object.keys(h.a))f[e]=["--"+e,c];function m(e){const{children:t,ref:n,className:c,style:l}=function(e){const{theme:t="light",override:n,children:o}=e,a=Object(r.useRef)(null),c=p[t],l="string"==typeof t&&!c,d="string"==typeof n,{style:h}=Object(i.a)({...t,...n},f);return{style:h,className:Object(s.a)(u.a.themeProvider,u.a.constants,c,l&&t,d&&n),ref:a,children:o}}(e);return o.a.createElement("div",{ref:n,className:c,style:l,"data-testid":"theme-provider"},o.a.createElement(a.a,{value:n},t))}},YuFe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>{var n;return null!==(n=null==e?void 0:e.find(({regionId:e})=>t===e))&&void 0!==n?n:null}},"Z0/C":function(e,t,n){"use strict";let r;n.d(t,"a",(function(){return r})),function(e){e.request="auth/EXECUTE_LOGOUT/request",e.success="auth/EXECUTE_LOGOUT/success",e.failure="auth/EXECUTE_LOGOUT/failure",e.cancel="auth/EXECUTE_LOGOUT/cancel"}(r||(r={}))},ZFBY:function(e,t,n){"use strict";function r(e){return e.replace(/:[0-9]+/,"")}n.d(t,"a",(function(){return r}))},ZMmm:function(e,t,n){},ZXs1:function(e,t){const n={"--only-mobile":"(max-width: 767px)","--only-tablet":"(min-width: 768px) and (max-width: 1023px)","--only-desktop":"(min-width: 1024px) and (max-width: 1199px)","--only-large-desktop":"(min-width: 1200px)"},r={"--from-tablet":"(min-width: 768px)","--from-desktop":"(min-width: 1024px)","--from-large-desktop":"(min-width: 1200px)"},o={"--to-tablet":"(max-width: 1023px)","--to-desktop":"(max-width: 1199px)"},a=Object.assign({},n,r,o);e.exports={ldMin:1200,mdMin:1024,mdMax:1199,smMin:768,smMax:1023,xsMax:767,breakpoints:a,strictBreakpoints:n,lowerBoundsBreakpoints:r,upperBoundsBreakpoints:o}},aCcD:function(e,t,n){e.exports={button:"_3XXcJoFzXo_header-footer",extraClickZone:"OlnG71pXEL_header-footer"}},aIkk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd"),o=(n("17x9"),{width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"}),a=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:o}),t,t&&r.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:o}))};a.propTypes={},a.defaultProps={children:null}},aUsF:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var s=a[o];if(!e(t[s],n[s]))return!1}return!0}return t!=t&&n!=n}},abLE:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={init:"dyEvents/init"}},b53Z:function(e,t,n){},bK66:function(e,t,n){},bMRi:function(e,t,n){e.exports={typography:"_3ZkVWJ-JEE_header-footer",display:"_1AsKYqUpPU_header-footer",h1:"_2lca-_zsJX_header-footer",h2:"_2YOcEnUxeU_header-footer",h3:"_2_2xQIdJh2_header-footer",overline:"_250BOTOmfW_header-footer",caption:"_1sXUurJD9J_header-footer",caption_accent:"_3GTKfCuEZ8_header-footer",_s:"_2U-D_vpH7u_header-footer",body_long:"C8VlKzIRm1_header-footer",body_short:"_1rNXkrEvIi_header-footer",body_accent:"_157CYMY0tN_header-footer",subtitle:"ocFNVmI40y_header-footer",_m:"_2vRdFj4ABC_header-footer",_l:"_2U4nfHXIK4_header-footer"}},cDcd:function(e,t){e.exports=React},dI71:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return o}))},dK5d:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("cDcd"),o=n.n(r);const a=o.a.memo(()=>o.a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1016 0A8 8 0 000 8zm5.7 3.7L8 9.4l2.3 2.3 1.4-1.4L9.4 8l2.3-2.3-1.4-1.4L8 6.6 5.7 4.3 4.3 5.7 6.6 8l-2.3 2.3 1.4 1.4z"})))},dcSr:function(e,t,n){e.exports={content:"_13pTf7BcR4_header-footer","full-screen":"_2MAaPBMRhs_header-footer",curtain:"_1O0Hm3nluv_header-footer",container:"_1KSBe2SMHV_header-footer",sticky:"_1_OZT72kdG_header-footer"}},e4yP:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return i}));const r=e=>"string"==typeof e||"number"==typeof e,o=e=>parseFloat(e.replace(/\s/g,"").replace(/,/g,".")),a=(...e)=>e.every(e=>"number"==typeof e),s=(...e)=>e.every(e=>"string"==typeof e),i=()=>{let e,t=1;return new Promise((n,r)=>{e=setInterval(()=>{"DY"in window?(clearInterval(e),n(!0)):10===t&&(clearInterval(e),r(new Error("DY not loaded"))),t+=1},1e3)})}},"edA+":function(e,t,n){},fDmc:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("cDcd"),o=n.n(r),a=n("iuhU"),s=n("D7Kd"),i=n.n(s),c=n("Duuu"),l=n("zSPp");const u=/^(-?\d+|%|px|em|rem|vw|vh|cm|mm|in|pt|pc|ex|ch|vmin|vmax|fr)|auto$/;function d(e){return"number"==typeof e?e+"px":u.test(e)?e:`var(--${e})`}const h=Object(r.forwardRef)((function({children:e,className:t,size:n=null,height:r=null,width:s=null,color:u,"data-testid":h="icon"},p){const f=Object(c.a)({color:u,height:r,width:s,size:n},{color:["--icon-color",l.a],width:["width",d],height:["height",d],size:[["width","height"],d]});return o.a.createElement("div",Object.assign({ref:p,className:Object(a.a)(i.a.icon,t),role:"presentation","data-testid":h},f),e)}))},faye:function(e,t){e.exports=ReactDOM},fmJQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd");const o=(e,t)=>{const n=Object(r.useRef)(!0);Object(r.useEffect)(()=>{n.current||e(),n.current=!1},t)}},glgz:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("cDcd"),o=n.n(r),a=n("faye"),s=n.n(a),i=n("9R94"),c=n("HLvI");function l(e){const{children:t,disabled:n=!1,root:o=null,onMount:a}=e,s=function(e){const t=Object(r.useRef)(e);return t.current=e,t}(a),l=Object(c.b)(),[u,d]=Object(r.useState)(null);return Object(r.useEffect)(()=>{if(!n){var e;const t=l.root.current,n=null!=(e=null==o?void 0:o.current)?e:null;null===t&&null===n&&Object(i.a)(!1),d(null!=n?n:t)}},[o,l.root,n]),Object(r.useEffect)(()=>{(n||u)&&(null==s.current||s.current())},[n,u,s]),{disabled:n,children:t,mountRoot:u}}function u(e){const{children:t,mountRoot:n,disabled:r}=l(e);return r?o.a.createElement(o.a.Fragment,null,t):n?s.a.createPortal(t,n):null}},"iVi/":function(e,t,n){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},s=e.split(a),c=o.decode||r,l=0;l<s.length;l++){var u=s[l],d=u.indexOf("=");if(!(d<0)){var h=u.substr(0,d).trim(),p=u.substr(++d,u.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),null==n[h]&&(n[h]=i(p,c))}}return n},t.serialize=function(e,t,n){var r=n||{},a=r.encode||o;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var i=a(t);if(i&&!s.test(i))throw new TypeError("argument val is invalid");var c=e+"="+i;if(null!=r.maxAge){var l=r.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(r.domain){if(!s.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!s.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(c+="; HttpOnly");r.secure&&(c+="; Secure");if(r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,o=encodeURIComponent,a=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,t){try{return t(e)}catch(t){return e}}},iuhU:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},j03d:function(e,t,n){},jgVx:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("cDcd"),o=n("JZOa"),a=n("sQQ1"),s=n("ZXs1"),i=n("M8Ev");function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(){const[e,t]=Object(r.useState)(Object(o.a)()?d().reduce((e,{key:t,query:n})=>c({},e,{[t]:n.matches}),{}):null);return Object(a.a)(()=>{const e=d().map(({key:e,subscribe:n})=>n(({matches:n})=>t(t=>c({},null!=t?t:h,{[e]:n}))));return()=>e.forEach(e=>e())},[]),e}let u=null;const d=()=>(null===u&&(u=Object.entries(s.strictBreakpoints).map(([e,t])=>{const n=window.matchMedia(t);return{key:p(e),query:n,subscribe:e=>{let t;try{t="addEventListener"in MediaQueryList.prototype}catch(e){t=!1}return t?(n.addEventListener("change",e,{passive:!0}),()=>n.removeEventListener("change",e)):(n.addListener(e),()=>n.removeListener(e))}}})),u),h={mobile:!1,tablet:!1,desktop:!1,largeDesktop:!1};function p(e){const t=e.replace("--only-","").split("-").map((e,t)=>t>0?Object(i.a)(e):e).join("");if(f(t))return t;throw new Error(`Invalid parsing: ${e} -> ${t}. ${t} doesn't exists in ${JSON.stringify(h)}`)}const f=e=>e in h},jogK:function(e,t,n){"use strict";n.d(t,"j",(function(){return p})),n.d(t,"i",(function(){return y})),n.d(t,"l",(function(){return w})),n.d(t,"e",(function(){return O})),n.d(t,"h",(function(){return E})),n.d(t,"m",(function(){return _})),n.d(t,"k",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return C})),n.d(t,"g",(function(){return S})),n.d(t,"f",(function(){return N})),n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return r}));var r={};n.r(r),n.d(r,"atMobile",(function(){return a})),n.d(r,"atXs",(function(){return s})),n.d(r,"notXs",(function(){return i})),n.d(r,"atDesktop",(function(){return c})),n.d(r,"notDesktop",(function(){return l})),n.d(r,"atTablet",(function(){return u}));var o=n("0RBU");const a=d(o.c),s=d(o.d),i=d(()=>!Object(o.d)()),c=d(()=>Object(o.a)()||Object(o.b)()),l=d(()=>!Object(o.a)()&&!Object(o.b)()),u=d(o.b);function d(e){return(t,n=null)=>e()?t:n}var h=n("CQbg");const p=(e,t=14)=>Object(h.e)(e/t+"rem");let f,m,g,b,v=e=>e;function y(e){return Object(h.b)(f||(f=v`
    @media screen and (max-width: ${0}px) {
      ${0}
    }
  `),o.i,e)}function w(e){return Object(h.b)(m||(m=v`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),o.h,e)}function O(e){return Object(h.b)(g||(g=v`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),o.f,e)}function E(e){return Object(h.b)(b||(b=v`
    @media screen and (min-width: ${0}px) {
      ${0}
    }
  `),o.e,e)}function _(e,t,n=""){const r=("function"==typeof e?e():!!e)?t:n;return"function"==typeof r?r():r}function j(e,t){return fetch(e,t).then(e=>200===e.status?e:Promise.reject(e)).then(e=>e.json())}function x(e,t){if(document.head.querySelector("#"+e))return;const n=document.createElement("style");n.id=e,n.textContent=t.toString(),document.head.appendChild(n)}const k=10,C=(e=":host",t=!0)=>{const n=1180+t*(2*k);return Object(h.e)(`\n    ${e} {\n        box-sizing: border-box;\n        min-width: var(--layout-min-width);\n        width: 100%;\n        max-width: ${n}px;\n        ${t?Object(h.e)("padding-left: var(--layout-gap); padding-right: var(--layout-gap);"):""}\n      }\n      \n      \n\n      ${w(Object(h.e)(`\n        ${e} {\n          width: calc(var(--layout-width) + 2 * var(--layout-gap));\n          margin-left: auto;\n          margin-right: auto;\n        }\n      `))}`)},S=1100;function N(){let e=null,t=document.activeElement;if(!t)return null;for(;e!==t;)e=t,t=(n=e)&&n.shadowRoot?n.shadowRoot.activeElement:n;var n;return t}class L{constructor(){this._collectors=[],this._collectors=[]}add(e){this._collectors.push(e)}addMany(e){e.forEach(e=>this.add(e))}release(){this._collectors.forEach(e=>e())}}new class{constructor(){this.hasFlagLogAnalytics=localStorage.getItem("enabledLogAnalytics"),this.hasFlagLogAnalytics||localStorage.setItem("enabledLogAnalytics","")}sendButtonImpression(e){this._sendEvent("GA:buttonImpression",e)}sendBlockImpression(e){this._sendEvent("GA:blockImpression",e)}sendView(e){this._sendEvent("GA:view",e)}sendClick(e){this._sendEvent("GA:click",e)}sendImpressions(e){this._sendEvent("GA:impressions",e)}sendClickProduct(e){this._sendEvent("GA:clickProduct",e)}sendAddToCard(e){this._sendEvent("GA:addToCart",e)}sendRemoveFromCart(e){this._sendEvent("GA:removeFromCart",e)}sendException(e){this._sendEvent("GA:exception",e)}sendPageView(e){this._sendEvent("GA:pageview",e)}sendPromoView(e){this._sendEvent("GA:promoView",e)}sendPromoClick(e){this._sendEvent("GA:promoClick",e)}sendCheckout(e){this._sendEvent("GA:checkout",e)}sendPurchase(e){this._sendEvent("GA:purchase",e)}sendClickButton(e){this._sendEvent("GA:clickButton",e)}sendFocus(e){this._sendEvent("GA:focus",e)}sendUnFocus(e){this._sendEvent("GA:unfocus",e)}sendRemoveFromCard(e){this._sendEvent("GA:removeFromCart",e)}sendShow(e){this._sendEvent("GA:show",e)}sendAddToCompare(e){this._sendEvent("GA:addToComparisonList",e)}sendRemoveFromCompare(e){this._sendEvent("GA:removeFromComparisonList",e)}sendAddToShopList(e){this._sendEvent("GA:addToShoppingList",e)}sendRemoveFromShopList(e){this._sendEvent("GA:removeFromShoppingList",e)}sendGAABTest(e){this._sendEvent("GA:AB_TEST",e)}_sendEvent(e,t){this.hasFlagLogAnalytics&&console.info(e,t),document.dispatchEvent(new CustomEvent(e,{detail:t}))}};function P(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function T(e){return function t(n){return 0===arguments.length||P(n)?t:e.apply(this,arguments)}}Array.isArray;"undefined"!=typeof Symbol&&Symbol.iterator;function $(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var A=Object.prototype.toString,R=function(){return"[object Arguments]"===A.call(arguments)?function(e){return"[object Arguments]"===A.call(e)}:function(e){return $("callee",e)}}(),M=!{toString:null}.propertyIsEnumerable("toString"),I=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(){return arguments.propertyIsEnumerable("length")}(),D=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1};Object.keys,Number.isInteger;"function"==typeof Object.is&&Object.is;var q=function(e){return(e<10?"0":"")+e};Date.prototype.toISOString;"function"==typeof Object.assign&&Object.assign;var z="\t\n\v\f\r                　\u2028\u2029\ufeff";String.prototype.trim},kjdh:function(e,t,n){},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function i(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerdown",i,!0),document.addEventListener("touchstart",i,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,r,i;a(e.target)&&(t||(n=e.target,r=n.type,"INPUT"===(i=n.tagName)&&o[r]&&!n.readOnly||"TEXTAREA"===i&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},ltqI:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("GB9r"),o=n("cDcd"),a=n.n(o),s=n("iuhU");const i=["className"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=e=>{let{className:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);return a.a.createElement(r.a,null,a.a.createElement("header",c({className:Object(s.a)(u,t)},n)))},u="h1di0agl_header-footer";n("3MeJ")},mrSG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}},mwXK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("9ONQ"),o=n("e4yP"),a=n("IcJs");function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i=(e,t,n)=>!(!Object(o.b)(e)||!Object(o.c)(t,n))&&{productId:e,quantity:t,value:Number(t)*Number(n),currency:a.c},c=new r.a;const l=new class{constructor(){this.dispatchEvent=e=>{var t,n;e&&"DY"in window&&null!==(t=window.DY)&&void 0!==t&&t.API&&(null===(n=window.DY)||void 0===n||n.API("event",e))},this.search=e=>{const t=(e=>{if(a.e in a.l){const{dyType:t,name:n}=a.l[a.e];return{name:n,properties:{dyType:t,keywords:e}}}return!1})(e);this.dispatchEvent(t)},this.handleAddToCart=e=>{const{id:t,quantity:n,productPrice:r}=e.detail,c=((e,t,n)=>{const r=i(e,t,n);if(r&&a.a in a.l){const{dyType:e,name:t}=a.l[a.a];return{name:t,properties:s({dyType:e},r)}}return!1})(t,n,"string"==typeof r?Object(o.e)(r):r);this.dispatchEvent(c)},this.handleRemoveFromCart=e=>{const{id:t,quantity:n,productPrice:r}=e.detail,c=((e,t,n)=>{const r=i(e,t,n);if(r&&a.g in a.l){const{dyType:e,name:t}=a.l[a.g];return{name:t,properties:s({dyType:e},r)}}return!1})(t,n,"string"==typeof r?Object(o.e)(r):r);this.dispatchEvent(c)},this.handleSortItems=e=>{const{sortBy:t,sortOrder:n}=e.detail,r=((e,t)=>{if(Object(o.d)(e,t)&&a.h in a.l){const{dyType:n,name:r}=a.l[a.h];return{name:r,properties:{dyType:n,sortBy:e,sortOrder:t}}}return!1})(t,n);this.dispatchEvent(r)},this.handleFilterItems=e=>{const{filterNumericValue:t,filterType:n}=e.detail,r=((e,t)=>{if(Object(o.b)(t)&&Object(o.d)(e)&&a.d in a.l){const{dyType:n,name:r}=a.l[a.d];return{name:r,properties:s({dyType:n,filterType:e},"number"==typeof t?{filterNumericValue:t}:{filterStringValue:t})}}return!1})(n,t);this.dispatchEvent(r)},this.handleAddToWishList=e=>{const{id:t}=e.detail,n=(e=>{if(Object(o.b)(e)&&a.b in a.l){const{dyType:t,name:n}=a.l[a.b];return{name:n,properties:{dyType:t,productId:e}}}return!1})(t);this.dispatchEvent(n)},this.login=e=>{if("true"===c.get(a.j)){const t=(e=>{if("string"==typeof e&&a.f in a.l){const{dyType:t,name:n}=a.l[a.f];return{name:n,properties:{dyType:t,hashedEmail:e}}}return!1})(e);this.dispatchEvent(t),c.set(a.j,"false")}},this.setDYSSVars=()=>{const e=c.get(a.i),t=c.get(a.j);e||c.set(a.i,"true"),t&&"false"===t||c.set(a.j,"true")},this.getCookieItemObject=e=>{const t=decodeURIComponent(e).replace(/(\\n)/g,"").replace(/\+/g,"").replace(/(\\r)/g,"").replace(/(\\t)/g,"").replace(/(\\f)/g,"").replace(/(\\b)/g,"").replace(/(")/g,'"').replace(/("{)/g,"{").replace(/(}")/g,"}").replace(/(\\)/g,"").replace(/(\/)/g,"/");return JSON.parse(t)},this.isNeedCartSync=()=>"true"===c.get(a.i),this.syncCart=e=>{const t=(e=>{if(a.k in a.l){const{dyType:t,name:n}=a.l[a.k];return{name:n,properties:{dyType:t,currency:a.c,cart:e}}}return!1})(e);this.dispatchEvent(t),c.set(a.i,"false")}}}},"s+gf":function(e,t,n){},"sBL/":function(e,t){function n(e,t,n){var r,o,a,s,i;function c(){var l=Date.now()-s;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(i=e.apply(a,o),a=o=null))}null==t&&(t=100);var l=function(){a=this,o=arguments,s=Date.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(i=e.apply(a,o),a=o=null),i};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(i=e.apply(a,o),a=o=null,clearTimeout(r),r=null)},l}n.debounce=n,e.exports=n},sMGQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("cDcd"),o=n("4YED"),a=n("wHal");function s(e){const{ref:t,locked:n,allowTouchMove:a,reserveScrollBarGap:s=!0}=e,u=Object(r.useRef)([]),d=Object(r.useCallback)(e=>{u.current.push(e),function(e,t){if(Object(o.a)(e,t),0===c){if(document.scrollingElement){const{scrollTop:e}=document.scrollingElement;i=e}c+=1,setTimeout(()=>{c>0&&(document.scrollingElement&&(document.scrollingElement.scrollTop=0),i&&(document.documentElement.style.top=-i+"px"),document.documentElement.style.position="fixed",document.documentElement.style.left="0",document.documentElement.style.right="0")},0)}}(e,{allowTouchMove:a,reserveScrollBarGap:s})},[a,s]),h=Object(r.useCallback)(e=>{u.current=u.current.filter(t=>t!==e),l(e)},[]);Object(r.useEffect)(()=>{const{current:e}=t;return e&&void 0!==n&&n?(d(e),()=>{h(e)}):()=>{}},[n,t,d,h]),Object(r.useEffect)(()=>{const{current:e}=t;return e&&void 0===n?(d(e),()=>{h(e)}):()=>{}},[t,n,d,h]),Object(r.useEffect)(()=>()=>u.current.forEach(l),[])}let i=null,c=0;function l(e){Object(o.b)(e),c=Object(a.a)(0,c-1,1/0),0===c&&(document.documentElement.style.position="",document.documentElement.style.top="",document.documentElement.style.left="",document.documentElement.style.right="",document.scrollingElement&&i&&(document.scrollingElement.scrollTop=i),i=null)}},sQQ1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("cDcd"),o=n("JZOa");const a=Object(o.a)()?r.useLayoutEffect:r.useEffect},svax:function(e,t,n){e.exports={button:"obVMv89qzn_header-footer",extraClickZone:"_1NNsk5xUZ-_header-footer",linkButton:"_2wi_8FqPmZ_header-footer",normal:"_3dXPX1dyIc_header-footer",s:"_1lxJJYvGr0_header-footer",m:"_1_HVJpYI3V_header-footer",accent:"_3JnPLvTVf__header-footer",underline:"e3XzMR5uvy_header-footer",iconLeft:"_2F4YUk_n_7_header-footer",iconRight:"_1R-YltLyll_header-footer"}},t1Rk:function(e,t,n){"use strict";n.r(t);var r=n("cDcd"),o=n.n(r),a=n("XhBU"),s=n("6MWF"),i=n("uFCc"),c=n("0Phq"),l=n("vB/t"),u=n("2FAm"),d=n("YIKF"),h=n("7raJ"),p=n("wfSj"),f=n("abLE"),m=n("IcJs"),g=n("mwXK");const b=()=>{window.lmdy=window.lmdy||{},window.lmdy.toggleBasketItem=e=>{window.layers.basket.getBasket().filter(({code:t})=>t===e).length?document.body.dispatchEvent(new CustomEvent("basket:delete:element",{detail:{id:e}})):document.body.dispatchEvent(new CustomEvent("basket:add",{detail:{id:e,quantity:1}}))}};var v=n("NiPq"),y=n("wVn1"),w=n("ZFBY"),O=n("MZ1S"),E=n("Tn0p");const _=e=>e?/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)?"ios":null:null;var j=n("Hz6d");var x=n("1yRy");var k=n("glgz"),C=n("iuhU"),S=n("mrSG"),N=n("+8i8"),L=Object(N.b)(),P=n("BsTD"),T=function(){},$=r.forwardRef((function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:T,onWheelCapture:T,onTouchMoveCapture:T}),a=o[0],s=o[1],i=e.forwardProps,c=e.children,l=e.className,u=e.removeScrollBar,d=e.enabled,h=e.shards,p=e.sideCar,f=e.noIsolation,m=e.inert,g=e.allowPinchZoom,b=e.as,v=void 0===b?"div":b,y=S.b(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=p,O=Object(P.a)([n,t]),E=S.a({},y,a);return r.createElement(r.Fragment,null,d&&r.createElement(w,{sideCar:L,removeScrollBar:u,shards:h,noIsolation:f,inert:m,setCallbacks:s,allowPinchZoom:!!g,lockRef:n}),i?r.cloneElement(r.Children.only(c),S.a({},E,{ref:O})):r.createElement(v,S.a({},E,{className:l,ref:O}),c))}));$.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},$.classNames={fullWidth:"width-before-scroll-bar",zeroRight:"right-scroll-bar-position"};var A=n("Fyhp"),R=Object(N.b)(),M=r.forwardRef((function(e,t){var n=r.useState(!1),o=n[0],a=n[1],s=e.children,i=e.autoFocus,c=e.shards,l=e.enabled,u=void 0===l||l,d=e.scrollLock,h=void 0===d||d,p=e.focusLock,f=void 0===p||p,m=e.returnFocus,g=void 0===m||m,b=e.inert,v=e.allowPinchZoom,y=e.sideCar,w=e.className,O=e.shouldIgnore,E=e.style,_=e.as,j=S.b(e,["children","autoFocus","shards","enabled","scrollLock","focusLock","returnFocus","inert","allowPinchZoom","sideCar","className","shouldIgnore","style","as"]),x=y,k=o.onActivation,C=o.onDeactivation,N=S.b(o,["onActivation","onDeactivation"]);return r.createElement(r.Fragment,null,r.createElement(A.a,{ref:t,sideCar:y,disabled:!(o&&u&&f),returnFocus:g,autoFocus:i,shards:c,onActivation:k,onDeactivation:C,className:w,as:$,whiteList:O,lockProps:S.a({},N,{sideCar:y,shards:c,allowPinchZoom:v,as:_,inert:b,style:E,enabled:u&&h})},s),u&&r.createElement(x,S.a({},j,{sideCar:R,setLockProps:a,shards:c})))})),I=function(e){var t=e.sideCar,n=S.b(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return r.createElement(o,S.a({},n))};function B(e,t){return e.useMedium(t),I}I.isSideCarExport=!0;var D,q=n("SNmK");B(n("yRvu").d,q.a);function z(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=D||n.nc;return t&&e.setAttribute("nonce",t),e}var U=function(){var e=0,t=null;return{add:function(n){var r,o;0==e&&(t=z())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){!--e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},F=function(){var e,t=(e=U(),function(t){r.useEffect((function(){return e.add(t),function(){e.remove()}}),[])});return function(e){var n=e.styles;return t(n),null}},H={left:0,top:0,right:0,gap:0},V=function(e){return parseInt(e||"",10)||0},G=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return H;var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[V(n),V(r),V(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},W=F(),K=function(e,t,n,r){var o=e.left,a=e.top,s=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .with-scroll-bars-hidden {\n   overflow: hidden "+r+";\n   padding-right: "+i+"px "+r+";\n  }\n  body {\n    overflow: hidden "+r+";\n    "+[t&&"position: relative "+r+";","margin"===n&&"\n    padding-left: "+o+"px;\n    padding-top: "+a+"px;\n    padding-right: "+s+"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "+i+"px "+r+";\n    ","padding"===n&&"padding-right: "+i+"px "+r+";"].filter(Boolean).join("")+"\n  }\n  \n  .right-scroll-bar-position {\n    right: "+i+"px "+r+";\n  }\n  \n  .width-before-scroll-bar {\n    margin-right: "+i+"px "+r+";\n  }\n  \n  .right-scroll-bar-position .right-scroll-bar-position {\n    right: 0 "+r+";\n  }\n  \n  .width-before-scroll-bar .width-before-scroll-bar {\n    margin-right: 0 "+r+";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: "+i+"px;\n  }\n"},Y=function(e){var t=r.useState(G(e.gapMode)),n=t[0],o=t[1];r.useEffect((function(){o(G(e.gapMode))}),[e.gapMode]);var a=e.noRelative,s=e.noImportant,i=e.gapMode,c=void 0===i?"margin":i;return r.createElement(W,{styles:K(n,!a,c,s?"":"!important")})},Z=function(e,t){var n=t;do{if(J(e,n)){var r=X(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},J=function(e,t){return"v"===e?function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)}(t):function(e){var t=window.getComputedStyle(e);return"range"===e.type||"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)}(t)},X=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t);var n},Q=!1;if("undefined"!=typeof window)try{var ee=Object.defineProperty({},"passive",{get:function(){return Q=!0,!0}});window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,ee)}catch(e){Q=!1}var te=!!Q&&{passive:!1},ne=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},re=function(e){return[e.deltaX,e.deltaY]},oe=function(e){return e&&"current"in e?e.current:e},ae=function(e){return"\n  .block-interactivity-"+e+" {pointer-events: none;}\n  .allow-interactivity-"+e+" {pointer-events: all;}\n"},se=0,ie=[];B(L,(function(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),a=r.useState(se++)[0],s=r.useState((function(){return F()}))[0],i=r.useRef(e);r.useEffect((function(){i.current=e}),[e]),r.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-"+a);var t=[e.lockRef.current].concat((e.shards||[]).map(oe)).filter(Boolean);return t.forEach((function(e){return e.classList.add("allow-interactivity-"+a)})),function(){document.body.classList.remove("block-interactivity-"+a),t.forEach((function(e){return e.classList.remove("allow-interactivity-"+a)}))}}}),[e.inert,e.lockRef.current,e.shards]);var c=r.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,a=ne(e),s=n.current,c="deltaX"in e?e.deltaX:s[0]-a[0],l="deltaY"in e?e.deltaY:s[1]-a[1],u=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v",h=Z(d,u);if(!h)return!0;if(h?r=d:(r="v"===d?"h":"v",h=Z(d,u)),!h)return!1;if(!o.current&&"changedTouches"in e&&(c||l)&&(o.current=r),!r)return!0;var p=o.current||r;return function(e,t,n,r,o){var a=r,s=n.target,i=t.contains(s),c=!1,l=a>0,u=0,d=0;do{var h=X(e,s),p=h[0],f=h[1]-h[2]-p;(p||f)&&J(e,s)&&(u+=f,d+=p),s=s.parentNode}while(!i&&s!==document.body||i&&(t.contains(s)||t===s));return(l&&(o&&0===u||!o&&a>u)||!l&&(o&&0===d||!o&&-a>d))&&(c=!0),c}(p,t,e,"h"===p?c:l,!0)}),[]),l=r.useCallback((function(e){var n=e;if(ie.length&&ie[ie.length-1]===s){var r="deltaY"in n?re(n):ne(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&(t=e.delta,o=r,t[0]===o[0]&&t[1]===o[1]);var t,o}))[0];if(o&&o.should)n.preventDefault();else if(!o){var a=(i.current.shards||[]).map(oe).filter(Boolean).filter((function(e){return e.contains(n.target)}));(a.length>0?c(n,a[0]):!i.current.noIsolation)&&n.preventDefault()}}}),[]),u=r.useCallback((function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout((function(){t.current=t.current.filter((function(e){return e!==a}))}),1)}),[]),d=r.useCallback((function(e){n.current=ne(e),o.current=void 0}),[]),h=r.useCallback((function(t){u(t.type,re(t),t.target,c(t,e.lockRef.current))}),[]),p=r.useCallback((function(t){u(t.type,ne(t),t.target,c(t,e.lockRef.current))}),[]);r.useEffect((function(){return ie.push(s),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",l,te),document.addEventListener("touchmove",l,te),document.addEventListener("touchstart",d,te),function(){ie=ie.filter((function(e){return e!==s})),document.removeEventListener("wheel",l,te),document.removeEventListener("touchmove",l,te),document.removeEventListener("touchstart",d,te)}}),[]);var f=e.removeScrollBar,m=e.inert;return r.createElement(r.Fragment,null,m?r.createElement(s,{styles:ae(a)}):null,f?r.createElement(Y,{gapMode:"margin"}):null)}));var ce=new WeakMap,le=new WeakMap,ue={},de=0,he=function(e,t,n){void 0===t&&(t=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body}(e)),void 0===n&&(n="data-aria-hidden");var r=Array.isArray(e)?e:[e];ue[n]||(ue[n]=new WeakMap);var o=ue[n],a=[],s=new Set,i=function(e){e&&!s.has(e)&&(s.add(e),i(e.parentNode))};r.forEach(i);var c=function(e){!e||r.indexOf(e)>=0||Array.prototype.forEach.call(e.children,(function(e){if(s.has(e))c(e);else{var t=e.getAttribute("aria-hidden"),r=null!==t&&"false"!==t,i=(ce.get(e)||0)+1,l=(o.get(e)||0)+1;ce.set(e,i),o.set(e,l),a.push(e),1===i&&r&&le.set(e,!0),1===l&&e.setAttribute(n,"true"),r||e.setAttribute("aria-hidden","true")}}))};return c(t),s.clear(),de++,function(){a.forEach((function(e){var t=ce.get(e)-1,r=o.get(e)-1;ce.set(e,t),o.set(e,r),t||(le.has(e)||e.removeAttribute("aria-hidden"),le.delete(e)),r||e.removeAttribute(n)})),--de||(ce=new WeakMap,ce=new WeakMap,le=new WeakMap,ue={})}},pe=F(),fe=function(){return r.createElement(pe,{styles:"\n [data-focus-on-hidden] {\n   pointer-events: none !important;\n }\n"})},me=function(e){return"current"in e?e.current:e};var ge=B(R,(function(e){var t=e.setLockProps,n=e.onEscapeKey,o=e.onClickOutside,a=e.shards,s=e.onActivation,i=e.onDeactivation,c=e.noIsolation,l=Object(r.useState)(void 0),u=l[0],d=l[1],h=Object(r.useRef)(null),p=Object(r.useRef)(0);return r.useEffect((function(){var e=function(e){e.defaultPrevented||"Escape"!==e.code&&"Escape"!==e.key&&27!==e.keyCode||!n||n(e)},t=function(e){e.defaultPrevented||e.target===h.current||e instanceof MouseEvent&&0!==e.button||a&&a.map(me).some((function(t){return t&&t.contains(e.target)||t===e.target}))||o&&o(e)},r=function(e){t(e),p.current=e.touches.length},s=function(e){p.current=e.touches.length};if(u)return document.addEventListener("keydown",e),document.addEventListener("mousedown",t),document.addEventListener("touchstart",r),document.addEventListener("touchend",s),function(){document.removeEventListener("keydown",e),document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",s)}}),[u,o,n]),Object(r.useEffect)((function(){if(u)return s&&s(u),function(){i&&i()}}),[!!u]),Object(r.useEffect)((function(){var e=function(){return null},n=!1;return t({onMouseDown:function(e){h.current=e.target},onTouchStart:function(e){h.current=e.target},onActivation:function(t){e=he([t].concat((a||[]).map(me)),document.body,c?void 0:"data-focus-on-hidden"),d((function(){return t}))},onDeactivation:function(){e(),n||d(null)}}),function(){n=!0,t(!1)}}),[]),r.createElement(fe,null)})),be=function(e){return r.createElement(ge,S.a({},e))},ve=r.forwardRef((function(e,t){return r.createElement(M,S.a({},e,{ref:t,sideCar:be}))})),ye=n("wx14"),we=n("zLVn"),Oe=n("dI71");n("17x9");function Ee(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var _e=n("faye"),je=n.n(_e),xe=!1,ke=o.a.createContext(null),Ce=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o="exited",r.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:o},r.nextCallback=null,r}Object(Oe.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[je.a.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),c=r?i.appear:i.enter;!e&&!n||xe?this.safeSetState({status:"entered"},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:"entering"},(function(){t.props.onEntering(a,s),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(a,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:je.a.findDOMNode(this);t&&!xe?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:je.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(we.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(ke.Provider,{value:null},"function"==typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function Se(){}Ce.contextType=ke,Ce.propTypes={},Ce.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Se,onEntering:Se,onEntered:Se,onExit:Se,onExiting:Se,onExited:Se},Ce.UNMOUNTED="unmounted",Ce.EXITED="exited",Ce.ENTERING="entering",Ce.ENTERED="entered",Ce.EXITING="exiting";var Ne=Ce,Le=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=Ee(n.className,r):n.setAttribute("class",Ee(n.className&&n.className.baseVal||"",r)));var n,r}))},Pe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1];t.removeClasses(o,"exit"),t.addClass(o,a?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1]?"appear":"enter";t.addClass(o,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],a=r[1]?"appear":"enter";t.removeClasses(o,a),t.addClass(o,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}Object(Oe.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,a=n.done;this.appliedClasses[t]={},r&&Le(e,r),o&&Le(e,o),a&&Le(e,a)},n.render=function(){var e=this.props,t=(e.classNames,Object(we.a)(e,["classNames"]));return o.a.createElement(Ne,Object(ye.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);Pe.defaultProps={classNames:""},Pe.propTypes={};var Te=Pe,$e=n("DsmL"),Ae=n.n($e);const Re=Object(r.createContext)({variant:"simple",changeContextTitleType:()=>{}}),Me=Object(r.createContext)({changeContentOnScroll:()=>({}),scrollTop:!1});var Ie=n("wnWD");const Be=()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M19 6.415L17.585 5 12 10.585 6.415 5 5 6.415 10.585 12 5 17.585 6.415 19 12 13.415 17.585 19 19 17.585 13.415 12 19 6.415z"})),De=({onClick:e,...t})=>o.a.createElement(Ie.a,Object.assign({kind:"regular",variant:"pseudo","aria-label":"Close modal",onClick:e,rounded:!0,iconOnly:!0},t),o.a.createElement(Be,null)),qe=({onClose:e})=>o.a.createElement("div",{className:Ae.a.closeButtonWrapper},o.a.createElement(De,{className:Ae.a.closeButtonDesktop,onClick:e,size:"l"}),o.a.createElement(De,{className:Ae.a.closeButtonMobile,onClick:e,size:"s"})),ze=()=>{const{innerWidth:e,outerWidth:t}=window;return{innerWidth:e,outerWidth:t}},Ue=(e,t)=>{const n=(()=>{const[e,t]=Object(r.useState)(ze());return Object(r.useEffect)(()=>{const e=()=>{t(ze())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e})(),o=Object.keys(e).map(t=>[t,e[t]]).sort((e,t)=>e[1]-t[1]);return(()=>{let e=t||null;for(let t=0;t<o.length;t+=1){const[r,a]=o[t];n.innerWidth<=a&&(e=r)}return e})()},Fe={mobile:375},He=Object(r.forwardRef)((function({children:e,modalID:t,className:n="",onClose:a,size:s="m",variant:i="simple",show:c,toTop:l=!1,sticky:u,overlayClose:d=!0,closeButton:h=!0,overlayType:p="dark"},f){const[m,g]=Object(r.useState)(null),[b,v]=Object(r.useState)(0),[y,w]=Object(r.useState)("title"),[O,E]=Object(r.useState)(!1),[_,j]=Object(r.useState)(!1),x=Object(r.useRef)(null),k=Object(r.useRef)(null),S=Object(r.useMemo)(()=>Object(C.a)(Ae.a.overlay,Ae.a[i],Ae.a["overlay-type-"+p]),[i,p]),N=Object(r.useMemo)(()=>Object(C.a)(Ae.a.modal,Ae.a[i],Ae.a[s],n,u&&Ae.a.sticky),[s,i,u,n]),L=Object(r.useMemo)(()=>Object(C.a)(Ae.a.wrapper,Ae.a[s],Ae.a[i],l&&Ae.a.toTop),[s,i,l]),P=Ue(Fe),T=Object(r.useMemo)(()=>"mobile"===P?{enter:200,exit:400}:{enter:150,exit:350},[P]),$=Object(r.useMemo)(()=>{switch(i){case"full-screen":return{enter:100,exit:150};case"curtain":return T;default:return{enter:150,exit:350}}},[i,T]),A=Object(r.useMemo)(()=>{let e={"--modalPosition":b};if(m&&0!==b&&(e={...e,"--firstModalHeight":m+"px"}),y){const t="title"===y?48:40;e={...e,"--gapBetweenModals":t+"px"}}return e},[b,m,y]);Object(r.useEffect)(()=>{if(c){const e=document.querySelectorAll('[data-element-role="modal"]');if(e&&e.length&&x&&x.current){const t=Array.from(e),n=t.indexOf(x.current),r=t[0];v(n),r&&g(r.getBoundingClientRect().height)}else v(0)}},[c,e]);const R=Object(r.useCallback)(e=>{w(e)},[]),M=Object(r.useCallback)(e=>{E(e.top),j(e.bottom)},[]),I=Object(r.useCallback)(e=>{var t,n;c&&(null==(t=x.current)||!t.contains(e.target))&&k&&null!=(n=k.current)&&n.contains(e.target)&&a()},[c,a]);return Object(r.useEffect)(()=>(d&&c&&document.addEventListener("click",I),()=>{document.removeEventListener("click",I)}),[d,c,I]),o.a.createElement(Te,{timeout:$,in:c,classNames:{enter:Ae.a.modalTransitionEnter,enterActive:Ae.a.modalTransitionEnterActive,exit:Ae.a.modalTransitionExit,exitActive:Ae.a.modalTransitionExitActive},unmountOnExit:!0},o.a.createElement("div",{className:Ae.a.animationWrapper},o.a.createElement(ve,{onClickOutside:a,onEscapeKey:a},o.a.createElement("div",{ref:k,className:S,style:A,"data-testid":"modal-overlay"},o.a.createElement("div",{className:L,ref:f},o.a.createElement("div",{className:N,role:"dialog","aria-modal":"true","aria-labelledby":t&&t+"_label","aria-describedby":t&&t+"_desc","data-element-role":"modal",ref:x,"data-testid":"modal-window"},h&&o.a.createElement(qe,{onClose:a}),o.a.createElement(Me.Provider,{value:{changeContentOnScroll:M,scrollTop:O,scrollBottom:_}},o.a.createElement(Re.Provider,{value:{variant:i,changeContextTitleType:R,sticky:u}},o.a.createElement("div",{className:Ae.a.contentWrapper},e)))))))))}));var Ve=n("dcSr"),Ge=n.n(Ve);const We=Object(r.forwardRef)((function({children:e,className:t="",...n},a){const s=Object(r.useRef)(null),{variant:i="simple",sticky:c}=Object(r.useContext)(Re),{changeContentOnScroll:l,scrollTop:u,scrollBottom:d}=Object(r.useContext)(Me),h=Ue(Fe),p=Object(r.useMemo)(()=>Object(C.a)(Ge.a.content,Ge.a[i],t,c&&Ge.a.sticky),[i,c,t]),f=Object(r.useCallback)(()=>{if(l&&s.current&&s.current.parentElement){const{parentElement:e}=s.current,t={top:e.scrollTop>0,bottom:e.offsetHeight+e.scrollTop<e.scrollHeight};((e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(e[r]!==t[r])return!1;return!0})(t,{top:u,bottom:d})||l(t)}},[l,u,d]);return Object(r.useEffect)(()=>{f()},[f,h]),o.a.createElement("div",Object.assign({className:p,onScroll:f,ref:a,"data-testid":"modal-content"},n),o.a.createElement("div",{ref:s,className:Ge.a.container},e))}));var Ke=n("GB9r"),Ye=n("aUsF"),Ze=n.n(Ye);function Je(e){const t=Object(r.useRef)(e);return Ze()(t.current,e)||(t.current=e),t.current}n("z6GK");var Xe=n("9R94"),Qe=n("FgJ6"),et=n.n(Qe);const tt=o.a.forwardRef((function({as:e="div",children:t,className:n,only:a,from:s,to:i,...c},l){const u=Object(r.useMemo)(()=>Object(C.a)(n,a&&nt(a,"only"),s&&nt(s,"from"),i&&nt(i,"to")),[a,s,i,n]);return o.a.createElement(e,{...c,className:u,ref:l},t)}));function nt(e,t){const n=et.a[`${t}-${e}`];return n||Object(Xe.a)(!1),n}n("ZMmm");const rt=Object(r.memo)(({children:e,isShadow:t,showBackButton:n,onBackButtonClick:r,onCloseButtonClick:a})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(tt,{only:"mobile"},o.a.createElement("div",{className:Object(C.a)("h6fli88_header-footer",{shadow:t})},o.a.createElement(ot,{showBackButton:n,onBackButtonClick:r,type:"mobile"}))),o.a.createElement(Ie.a,{rounded:!0,size:"l",kind:"regular",variant:"pseudo",iconOnly:!0,"aria-label":"Закрыть",onClick:a,className:"cs1zupn_header-footer"},o.a.createElement(at,null)),o.a.createElement("div",{className:"n3ieit0_header-footer"},o.a.createElement(tt,{from:"tablet"},o.a.createElement(ot,{showBackButton:n,onBackButtonClick:r,type:"desktop"})),e))),ot=Object(r.memo)(({showBackButton:e,onBackButtonClick:t,type:n})=>e?o.a.createElement(Ie.a,{rounded:!0,size:"mobile"===n?"l":"m",kind:"regular",variant:"mobile"===n?"pseudo":"outline",iconOnly:!0,"aria-label":"Назад",onClick:t,className:"b1rm9s2w_header-footer"},o.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 11H7.4125L12.2925 6.11997C12.6825 5.72997 12.6825 5.08997 12.2925 4.69997C11.9025 4.30997 11.2725 4.30997 10.8825 4.69997L4.2925 11.29C3.9025 11.68 3.9025 12.31 4.2925 12.7L10.8825 19.29C11.2725 19.68 11.9025 19.68 12.2925 19.29C12.6825 18.9 12.6825 18.27 12.2925 17.88L7.4125 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z",fill:"#333333"}))):null),at=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M19 6.41474L17.5853 5L12 10.5853L6.41474 5L5 6.41474L10.5853 12L5 17.5853L6.41474 19L12 13.4147L17.5853 19L19 17.5853L13.4147 12L19 6.41474Z",fill:"#464C5C"})));var st=n("SlpU");function it(){return(it=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n("Cft0");const ct=o.a.forwardRef(({type:e,isButton:t,onClick:n,link:a,className:s,classNameTypography:i,dataQa:c,children:l},u)=>{const d=t?{as:"button",onClick:n}:{href:a},h=Object(r.useMemo)(()=>e&&{nodeTitle:{variant:"h1"},title:t?{variant:"h3"}:{variant:"16",size:"body_long"},description:{variant:"s",size:"body_long"}},[e,t]),p={nodeTitle:"n1cjx3d0_header-footer",title:t?"t1qga5f9_header-footer":"t1rutuvd_header-footer",description:"d102euqf_header-footer"};return o.a.createElement(Ie.a,it({ref:u,kind:"link",className:Object(C.a)(s,"bfdo1x0_header-footer")},c?{"data-qa":c}:{},d),e&&h?o.a.createElement(st.a,it({className:Object(C.a)(i,p[e])},h[e]),l):o.a.createElement(o.a.Fragment,null,l))});n("j03d");var lt=n("jgVx");n("6PdD");const ut=(e,t,n)=>null!=t&&t.mobile?1:null!=t&&t.tablet?2-+n:null!=t&&t.desktop?3-+e-+n:4-+e-+n,dt=Object(r.memo)(({isBanner:e,children:t,isLevelLast:n,className:r})=>{const a=Object(lt.a)(),s=ut(e,a,n);return o.a.createElement("div",{"data-qa":"catalogue-grid",className:Object(C.a)(r,"g1qs2bmd_header-footer",{["column-"+s]:s,"last-level":n})},n?o.a.createElement(ht,{count:s},t):o.a.Children.map(t,e=>e))}),ht=Object(r.memo)(({count:e,children:t})=>{const n=Object(r.useMemo)(()=>o.a.Children.toArray(t).reduce((t,n,r)=>(t[r%e].push(n),t),(e=>[...Array(e)].map(()=>Array(0)))(e)),[t,e]);return o.a.createElement(o.a.Fragment,null,n.map((e,t)=>o.a.createElement("div",{key:"column-"+t,className:"c15ct0a5_header-footer"},o.a.Children.map(e,e=>e))))});n("MZmn");const pt=()=>{const[e,t]=Object(r.useState)({width:window.innerWidth,height:window.innerHeight});return Object(r.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e};function ft(){return(ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function mt(){mt=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var a=new RegExp(e,r);return t.set(a,o||t.get(e)),bt(a,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var o=r[n];if("number"==typeof o)t[n]=e[o];else{for(var a=0;void 0===e[o[a]]&&a+1<o.length;)a++;t[n]=e[o[a]]}return t}),Object.create(null))}return gt(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=r(n,this);var o=n.indices;o&&(o.groups=r(o,this))}return n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var a=t.get(this);return e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(e,t){var n=a[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof o){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(r(e,s)),o.apply(this,e)}))}return e[Symbol.replace].call(this,n,o)},mt.apply(this,arguments)}function gt(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&bt(e,t)}function bt(e,t){return(bt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}const vt={width:"w",height:"h",dpr:"dpr",placeholder:"d",quality:"q",format:"f"},yt={placeholder:"placeholder.jpg",format:"auto",quality:"90"},wt=e=>{const t=(e=>{var t;const n=null===(t=e.match(mt(/(?:.+)(?:catalogue\/)([\x2D0-9A-Z_a-z]*)(?:\.?)(?:html)?/,{name:1})))||void 0===t?void 0:t.groups;return(null==n?void 0:n.name)||null})(e);return t?`https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto/elbrus/images/catalog-popup-images/version6/${t}.jpg`:null},Ot=(e,t,n="")=>{t||(t=wt(n)||"https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto/placeholder.jpg");const r=Math.round(100*window.devicePixelRatio)/100;return((e,t)=>{const n=Object.entries(t).map(([e,t])=>`${vt[e]}_${t}`).join(",");return e.includes("f_auto,q_auto")?e.split("f_auto,q_auto").join(n):e})(t,ft({},yt,e,{dpr:r}))},Et=(e,t)=>{const n=pt(),o=Object(r.useMemo)(()=>n.width,[n]),a=Object(lt.a)(),s=Object(r.useMemo)(()=>null!=a&&a.mobile&&o?window.matchMedia("(orientation: landscape)").matches?Math.ceil(.1044*(o-32)):Math.floor((o-96)/5):40,[a,o]),[i,c]=Object(r.useState)(Ot({width:s,height:s},e,t)),l=((e,t=0)=>{const[n,o]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const n=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(n)}},[e,t]),n})(i,300);return Object(r.useEffect)(()=>{null!=a&&a.mobile&&c(Ot({width:s,height:s},e,t))},[a,c,s,e,t]),l},_t=Object(r.memo)(({item:e,onItemClick:t})=>{const{name:n,sitePath:r,children:a,titleImageRef:s}=e,i=Et(s,r),c=a?a.length-3:0,l=null==a?void 0:a.slice(0,3);return o.a.createElement("div",{className:Object(C.a)("cn1rss5_header-footer",{"last-level":!a}),"data-qa":"catalogue-item"},a&&o.a.createElement(ct,{isButton:!!a,className:"ihw1qlz_header-footer",onClick:()=>t(e),dataQa:"catalogue-item-image"},o.a.createElement("img",{src:i,alt:n,className:"i18yoeko_header-footer"})),o.a.createElement(ct,{type:"title",isButton:!!a,onClick:()=>t(e),link:e.sitePath,className:Object(C.a)("njbcwzh_header-footer",{"last-level":!a}),dataQa:"catalogue-item-name"},n),a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(tt,{to:"desktop"},o.a.createElement(ct,{onClick:()=>t(e),link:r,type:"description",isButton:!0,classNameTypography:"m1pwuufp_header-footer",className:"d1vvbdzp_header-footer",dataQa:"catalogue-item-child"},null==a?void 0:a.map((e,t)=>t?e.name.toLowerCase():e.name).join(", "))),o.a.createElement(tt,{from:"desktop"},o.a.createElement("div",{className:"d1vvbdzp_header-footer"},null==l?void 0:l.map(e=>o.a.createElement(ct,{onClick:()=>t(e),type:"description",isButton:!!e.children,link:e.sitePath,key:e.name,className:"il78u2v_header-footer",dataQa:"catalogue-item-child"},e.name)),c>0&&o.a.createElement(ct,{type:"description",isButton:!0,onClick:()=>t(e),link:r,className:"il78u2v_header-footer",dataQa:"catalogue-item-else"},"Ещё ",c)))))});n("3G09");var jt=n("sBL/");const xt=(e,t={immediate:!1,interval:0})=>Object(r.useMemo)(()=>Object(jt.debounce)(e,t.interval,t.immediate),[t.interval,t.immediate,e]);function kt(){return(kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Ct=e=>({elementType:"banner",elementBlock:"catalogue-popup",promotions:[{name:"catalogue-modal",creative:e,position:"catalogue-modal-"+e}]}),St=["bannerUrl","creative"];const Nt=Object(r.memo)(({className:e,banner:t})=>{const{bannerUrl:n,creative:a}=t,s=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,St),i=Je((e=>{const t=pt(),n=Object(lt.a)(),o=Je(e),a=Object(r.useMemo)(()=>t.width,[t]),s=Object(r.useMemo)(()=>({mobile:a?a-32:void 0,tablet:660,desktop:251,largeDesktop:220}),[a]),i=Object(r.useCallback)(()=>Object.entries(o).reduce((e,[t,n])=>kt({},e,{[t]:Ot({width:s[t]},n)}),{}),[o,s]),[c,l]=Object(r.useState)(i()),u=xt(l,{interval:300});return Object(r.useEffect)(()=>{null!=n&&n.mobile&&u(i())},[n,u,i]),c})(s));Object(r.useEffect)(()=>{(e=>{v.a.sendEvent("GA:promoView",Ct(e))})(a)},[a]);const c=Object(r.useCallback)(()=>{(e=>{v.a.sendEvent("GA:promoClick",Ct(e))})(a)},[a]);return null!=s&&s.mobile&&null!=s&&s.tablet&&null!=s&&s.desktop&&null!=s&&s.largeDesktop?i&&o.a.createElement(Ie.a,{className:Object(C.a)(e,"bcwe6q_header-footer"),href:n,onClick:c,"data-qa":"catalogue-banner"},o.a.createElement("picture",{className:"pxtl9gu_header-footer"},o.a.createElement("source",{srcSet:i.mobile,media:"(max-width: 767px) and (orientation: portrait)"}),o.a.createElement("source",{srcSet:i.tablet,media:"(max-width: 767px) and (orientation: landscape)"}),o.a.createElement("source",{srcSet:i.tablet,media:"(max-width: 1023px)"}),o.a.createElement("source",{srcSet:i.desktop,media:"(max-width: 1199px)"}),o.a.createElement("img",{alt:a,src:i.largeDesktop,className:"ii3ybv0_header-footer"}))):null}),Lt=["banner"];const Pt=Object(r.memo)(({node:e,onItemClick:t})=>{var n;const{banner:a}=e,s=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Lt),i=Object(r.useMemo)(()=>{var e;return!(null!==(e=s.children)&&void 0!==e&&e.some(e=>e.children))},[s]);return o.a.createElement("div",{className:Object(C.a)("g98c6gz_header-footer",{"with-banner":a}),"data-qa":"catalogue-content"},o.a.createElement(dt,{isBanner:!!a,isLevelLast:i,className:"g1dxssiw_header-footer"},null===(n=s.children)||void 0===n?void 0:n.map(e=>o.a.createElement(_t,{key:e.name,item:e,onItemClick:t}))),a&&o.a.createElement(Nt,{className:"b1efwwbx_header-footer",banner:a}))});n("Jt3X");var Tt=n("VG9E");const $t=Object(Tt.a)("span")({name:"DelayedContent",class:"d5x3ur3_header-footer",vars:{"d5x3ur3-0":[({deferTimeout:e=300})=>e+"ms"]}});n("s+gf");const At=["className","width","height","style","blink"];function Rt(){return(Rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Mt=Object(r.memo)(e=>{let{className:t="",width:n,height:a,style:s,blink:i=!0}=e,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,At);const l=Object(r.useMemo)(()=>Rt({},s,n&&{width:n},a&&{height:a}),[n,a,s]);return o.a.createElement($t,null,o.a.createElement(It,Rt({className:t,style:l,blink:i,"data-qa":"skeleton"},c)))}),It=Object(Tt.a)("div")({name:"SkeletonItem",class:"s1ayj6s6_header-footer",vars:{"s1ayj6s6-0":[({blink:e})=>e?"running":"paused"]}});n("bK66");const Bt=()=>{const e=Object(lt.a)(),t=ut(!1,e,!1),n=Object(r.useMemo)(()=>null!=e&&e.mobile&&window.matchMedia("(orientation: landscape)").matches?1:null!=e&&e.mobile||null!=e&&e.tablet?2:4,[e]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Mt,{className:"pm37aja_header-footer"}),o.a.createElement("div",{className:Object(C.a)("gzc2y13_header-footer",{["column-"+t]:t})},[...Array(16).keys()].map(e=>o.a.createElement("div",{className:"i13a5gsv_header-footer",key:e},o.a.createElement(Mt,{className:"p1872f4n_header-footer"}),o.a.createElement("div",{className:"t4f7dor_header-footer"},o.a.createElement(Mt,{className:"pml3iwg_header-footer"})),o.a.createElement("div",{className:"d9nyvg9_header-footer","data-qa":"catalogue-skeleton-rows"},[...Array(n).keys()].map(e=>o.a.createElement(Mt,{key:e,className:Object(C.a)("p9fay7r_header-footer","child-"+(e+1))})))))))};function Dt(){return(Dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const qt=Object(r.memo)(({catalogueChunks:e,getCatalogue:t,show:n,isLoading:a,isError:s})=>{const[i,c]=Object(r.useState)(null),[l,u]=Object(r.useState)({name:"Каталог",navigationChunk:"/catalogue.navigation.json"}),[d,h]=Object(r.useState)([]),f=Object(r.useRef)(null),[m,g]=Object(r.useState)(0);Object(p.a)(()=>{var t;e["/catalogue.navigation.json"]&&l&&(c(Dt({},l,{children:null!==(t=e["/catalogue.navigation.json"])&&void 0!==t?t:[]})),u(null))}),Object(r.useEffect)(()=>{var t;null!=l&&l.navigationChunk&&e[l.navigationChunk]&&(c(Dt({},l,{children:null!==(t=e[l.navigationChunk])&&void 0!==t?t:[]})),u(null))},[e,l]);const b=Object(r.useCallback)(n=>{if(n.navigationChunk){void 0===e[n.navigationChunk]&&(c(null),t(n.navigationChunk)),u(n)}},[e,t]),y=Object(r.useCallback)(()=>{document.dispatchEvent(new CustomEvent("catalog:overlay:close",{}))},[]),w=Object(r.useCallback)(()=>{f.current&&(f.current.scrollTop=0)},[f]),O=Object(r.useCallback)(()=>{var e;g(null==f||null===(e=f.current)||void 0===e?void 0:e.scrollTop)},[f]),E=Object(r.useCallback)(e=>{i&&(h(e=>[...e,i]),b(e),w())},[h,b,i,w]),_=Object(r.useCallback)(()=>{d.length>0&&(b(d[d.length-1]),h(e=>e.slice(0,d.length-1)),w())},[b,h,d,w]),j=Je(d);return Object(r.useEffect)(()=>{i&&n&&((e,t)=>{const n=(e=>0===e?"fullCatalog":1===e?"division":"subDivision")(e);v.a.sendEvent("GA:blockImpression",{elementType:"block",elementBlock:"catalogue-popup",elementName:n,elementText:t})})(j.length,i.name)},[j,i,n]),o.a.createElement(k.a,null,o.a.createElement(He,{show:n,onClose:()=>{},variant:"full-screen",modalID:"catalog-popup",closeButton:!1},o.a.createElement(We,{style:{padding:0},ref:f,onScroll:O,className:Object(C.a)("cs8n7cr_header-footer",{loading:a})},o.a.createElement(Ke.a,{className:"lg1m497_header-footer"},o.a.createElement(rt,{isShadow:(null!=m?m:0)>0,showBackButton:0!==d.length,onBackButtonClick:_,onCloseButtonClick:y},i&&o.a.createElement(ct,{isButton:!1,type:"nodeTitle",link:i.sitePath,className:"nwitror_header-footer",dataQa:"catalogue-title"},i.name||"Каталог")),i&&o.a.createElement(Pt,{node:i,onItemClick:E}),!i&&a&&o.a.createElement(Bt,null),!i&&s&&o.a.createElement(zt,{onRepeat:t})))))}),zt=Object(r.memo)(({onRepeat:e})=>o.a.createElement("div",{className:"e10q8i9s_header-footer","data-qa":"catalogue-popup-error"},o.a.createElement("p",{className:"ey4gy3x_header-footer"},"При отправке запроса произошла ошибка. ",o.a.createElement("br",null),"Попробуйте ещё раз."),o.a.createElement(Ie.a,{className:"eculhcj_header-footer",variant:"primary",kind:"regular",size:"m",onClick:()=>e()},"Повторить"))),Ut=o.a.createContext(null),Ft=Ut.Provider;var Ht=n("fDmc"),Vt=n("7JA9");const Gt=Object(r.memo)(()=>o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 61 61"},o.a.createElement("defs",null,o.a.createElement("filter",{id:"a",width:"126.4%",height:"126.4%",x:"-13.2%",y:"-9.4%",filterUnits:"objectBoundingBox"},o.a.createElement("feOffset",{dy:"2",in:"SourceAlpha",result:"shadowOffsetOuter1"}),o.a.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:"2"}),o.a.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"})),o.a.createElement("rect",{id:"b",width:"53",height:"53",rx:"8"})),o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("g",{transform:"translate(4 2)"},o.a.createElement("use",{fill:"#000",filter:"url(#a)",xlinkHref:"#b"}),o.a.createElement("use",{fill:"#FFF",xlinkHref:"#b"})),o.a.createElement("path",{fill:"#42AD58",d:"M13 41h34L30 24z"}),o.a.createElement("path",{fill:"#000",d:"M12.8 40l2.7-2.6-1-.8-1.6 1.6-3-3-.9 1 3.8 3.8zm1.1-7.1l.7.6 1.3-1.3.8.8-1.3 1.3.8.8 1.7-1.6.8.8-2.7 2.6-3.8-3.8 2.6-2.6.8.7-1.7 1.7zm8.6-2.4l-2.6-.7a1.6 1.6 0 00-.4-2 1.6 1.6 0 00-2.2.2l-2 2 4 3.7.9-1-3.1-3 .6-.6a.7.7 0 011 0 .7.7 0 010 1l-.6.5 3.3 1 1.1-1.1zm-1.8-6a2.7 2.7 0 012-.9 2.6 2.6 0 012 .9c.5.5.8 1.2.9 2a2.6 2.6 0 01-.9 1.9 2.7 2.7 0 01-2 .8 2.6 2.6 0 01-2-.9 2.6 2.6 0 01-.8-1.9 2.6 2.6 0 01.8-2zm.8.7c-.6.6-.4 1.3.3 2 .8.8 1.5 1 2.1.4.6-.6.4-1.3-.3-2-.7-.8-1.5-1-2.1-.4zm4.3-2.7l-.7-2.2 1.1-1.1 1 3.7 1.5 1.5-1 1-1.5-1.6-3.5-1 1-1.1 2.1.8zm17.8 13l3.9-3.7-1-1-3.9 3.7 1 1zM29 21l3-1.4-2.2 2.2.9.9 3.8-3.8-1.2-1.2-2.9 1.4 1.5-2.9-1.3-1.2-3.9 3.8 1 .9 2.1-2.2-1.4 3 .6.5zm6.7.6l-.7.6 1.5 1.5-.8.7-1.5-1.4-.8.8 1.8 1.8-.8.8-2.8-2.8 3.9-3.8 2.8 2.8-.8.7-1.8-1.7zm3.7 9.7l2.6 2.6.9-1-1.7-1.5 3-3-1-1-3.8 3.9zm10.4 2.6l-1.3 4 2.7-2.6.9 1-3.9 3.7-1.2-1.2 1-4.1h.1l-2.6 2.6-1-1 4-3.7 1.3 1.3zm-11.1-3.3l.7-2.6c.6.3 1.4.1 1.9-.4a1.5 1.5 0 00-.1-2.1l-2-2-4 3.7 1 1 3.2-3.1.7.7c.2.2.3.5.2.7a.7.7 0 01-.5.5.7.7 0 01-.7-.2l-.7-.7-.8 3.4 1 1z"})))),Wt=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 26 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M24.87 8.18l-7.16-.65a1.24 1.24 0 01-1.03-.74L14.12.75c-.41-1-1.87-1-2.28 0L9.3 6.79c-.17.42-.58.7-1.03.73l-7.16.66a1.2 1.2 0 00-.7 2.1l5.4 4.6c.35.3.5.74.39 1.18L4.58 22.5c-.25 1.02.88 1.86 1.82 1.32l5.97-3.41c.4-.22.87-.22 1.26 0l5.97 3.41c.94.54 2.07-.28 1.82-1.32l-1.6-6.45a1.17 1.17 0 01.4-1.18l5.39-4.6c.78-.7.33-2-.74-2.1z"})));function Kt(){return(Kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n("9wWz");const Yt=Object(r.memo)(({title:e,androidRating:t,androidLink:n,androidTitle:a,iosLink:s,hide:i,shouldDisplay:c,iosRating:l,iosTitle:u,os:d})=>{const h={android:{title:a,link:n,rating:Math.round(+t)},ios:{title:u,link:s,rating:Math.round(+l)}},f=Object(r.useMemo)(()=>({position:"not set",creative:null!=d?d:"not set"}),[d]);Object(p.a)(()=>{c&&v.a.sendEvent("GA:view",Kt({},f,{name:"go-to-mobile-app-sticker"}))});const m=Object(r.useCallback)(()=>{i(),v.a.sendEvent("GA:click",Kt({},f,{name:"close-mobile-app-sticker"}))},[i,f]),g=Object(r.useCallback)(()=>{i(),v.a.sendEvent("GA:click",Kt({},f,{name:"open-mobile-app-sticker"}))},[i,f]);return c&&d?o.a.createElement("div",{className:"mowk68k_header-footer","data-qa-header-mobile-app":""},o.a.createElement(Ie.a,{onClick:m,className:"c6do56z_header-footer","aria-label":"Закрыть","data-qa":"close-mobile-app","data-qa-header-mobile-app-close":""},o.a.createElement(Ht.a,{size:8},o.a.createElement(Vt.a,null))),o.a.createElement(Zt,null),o.a.createElement(st.a,{className:"t126ymu7_header-footer",size:"body_short",variant:"s","data-qa-header-mobile-app-title":""},e),o.a.createElement(Xt,{rating:h[d].rating}),o.a.createElement(st.a,{className:"dorgbtp_header-footer",variant:"caption","data-qa-header-mobile-app-caption":""},h[d].title),o.a.createElement(Ie.a,{onClick:g,href:h[d].link,className:Object(C.a)("i9w4p0j_header-footer",d),"data-qa-header-mobile-app-install":""},"Установить")):null}),Zt=Object(r.memo)(()=>o.a.createElement(Ht.a,{className:"ln95hl_header-footer","data-qa-header-mobile-app-logo":""},o.a.createElement(Gt,null))),Jt=new Array(5).fill(0).map((e,t)=>t),Xt=Object(r.memo)(({rating:e})=>o.a.createElement("div",{className:"r2yjymm_header-footer","data-qa-header-mobile-app-rating":""},Jt.map(t=>o.a.createElement(Ht.a,{"data-qa-header-mobile-app-rating-star":t+1,key:t,className:Object(C.a)("sd2j7u4_header-footer",t+1<=e?"a4fdf2y_header-footer":"u84y17k_header-footer"),size:14},o.a.createElement(Wt,null)))));var Qt=n("RFtk");const en=Object(r.memo)(({homePath:e,initUrl:t,show:n,onClose:r,logoUrl:a,recaptchaPubKey:s})=>o.a.createElement(Qt.a,{show:!1!==n,logoUrl:a,onClose:r,"data-qa-auth-modal":n},"auth"===n&&o.a.createElement("uc-form-login",{"data-qa":"uc-form-login",homePath:e,initUrl:t.replace(".model.json","/")}),"forgot"===n&&o.a.createElement("uc-form-forgot-password",{recaptchaSiteKey:s}),"recovery"===n&&o.a.createElement("uc-form-password-recovery",null),"express"===n&&o.a.createElement("uc-form-express-registration",null)));var tn=n("4rgk"),nn=n("YuFe"),rn=n("Qn3M"),on=n("ltqI");const an=Object(r.memo)(({onClick:e,className:t,label:n,tabbable:r=!0,cross:a=!1})=>o.a.createElement(Ie.a,{withExtraClickZone:!0,onClick:e,className:t,size:"m",kind:"icon",variant:"primary",label:n,tabIndex:r?0:-1,"data-qa-header-hamburger":a?"close":"open","data-qa":"hamburger-button"},o.a.createElement("div",{className:sn},o.a.createElement("div",{className:Object(C.a)(cn,{cross:a})})))),sn="henkuw2_header-footer",cn="h1slx5dq_header-footer";n("JU4c");const ln=(({displayName:e,ssrClassName:t})=>({children:e})=>o.a.createElement("div",{className:t},e))({displayName:"AtLargeDesktop",ssrClassName:"abnxu6_header-footer"});n("IXZf");const un=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.64 17.46a1.82 1.82 0 1 0 0 3.64 1.82 1.82 0 0 0 0-3.64zM17.45 17.46a1.82 1.82 0 1 0 0 3.63 1.82 1.82 0 0 0 0-3.63z"}),o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.32 6.99h13.05l-2.01 7.48H6.32V7zm11.89 9.33a.9.9 0 0 0 .85-.67l2.55-9.33a.94.94 0 0 0-.14-.8.86.86 0 0 0-.7-.37H6.31V3.4a.9.9 0 0 0-.88-.92H2v1.84h2.55V15.4c0 .5.4.92.89.92H18.2z"})));function dn(e,t,n,r){let o=Math.abs(e)%100;return o>=5&&o<=20?r:(o%=10,1===o?t:o>=2&&o<=4?n:r)}const hn=({children:e,badgeContent:t,className:n,badgeClassName:r,badgeStyle:a="primary",badgePosition:s="right",size:i="m"})=>o.a.createElement("div",{className:Object(C.a)(pn,n),"data-qa-badge":"","data-qa":"badge"},e,o.a.createElement("div",{className:Object(C.a)(fn,mn[s],gn[a],bn[i],r),"data-qa":"badge-content"},t)),pn="b1hkslz6_header-footer",fn="b1nnc0ug_header-footer",mn={left:"l1myc738_header-footer",right:"rurgeyv_header-footer",static:"s1fe9gyy_header-footer"},gn={primary:"p1s695u0_header-footer",secondary:"s1g6ldom_header-footer"},bn={m:"mjxuijg_header-footer",s:"sgpmvq0_header-footer"};n("xmLS");var vn=n("fmJQ");const yn=()=>{v.a.sendEvent("GA:click",{name:"basket",position:"header"})},wn=Object(r.memo)(({className:e,productsInBasket:t})=>{const[n,a]=Object(r.useState)(!1),s=Object(r.useRef)(!1),i=Object(r.useRef)(null),c=Object(r.useCallback)(e=>{a(e),s.current=e},[]);return Object(vn.a)(()=>{t>0&&!s.current&&c(!0)},[t,c]),Object(r.useEffect)(()=>{const{current:e}=i,t=()=>{c(!1)};return e&&e.addEventListener("transitionend",t,{passive:!0}),()=>null==e?void 0:e.removeEventListener("transitionend",t)},[c]),o.a.createElement("div",{className:Object(C.a)(On,e),"data-qa-header-basket":""},t?o.a.createElement(hn,{size:"s",className:jn,badgeContent:t>0&&t<99?t:"99+"}):null,o.a.createElement(Ie.a,{onClick:yn,ref:i,kind:"regular",href:"/basket/",className:Object(C.a)(En,{[_n]:n}),size:"m",rounded:!0,variant:t?"primary":"secondary",iconOnly:!0,"aria-live":"polite","data-qa-header-basket-button":"",label:"Корзина, "+dn(t,`добавлен ${t} товар`,`добавлено ${t} товара`,`добавлено ${t} товаров`)},o.a.createElement(un,null)),o.a.createElement(ln,null,o.a.createElement(st.a,{className:xn,size:"body_short",variant:"s","data-qa-header-basket-title":""},"Корзина")))}),On="b1dgx2qa_header-footer",En="bf0s4ay_header-footer",_n="bmj3sit_header-footer",jn="b1r6dmf3_header-footer",xn="b1sxlyz4_header-footer";n("edA+");const kn=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M15.3 9l-1-1-4 4-4-4-1 1 5 5 5-5z"}))),Cn=Object(r.memo)(({regionName:e,className:t,openRegionsPopup:n})=>o.a.createElement(Ie.a,{withExtraClickZone:!0,size:"s",className:t,kind:"link",variant:"normal",onClick:n,"aria-label":`Текущий регион: ${e}. Сменить регион?`,iconRight:o.a.createElement(kn,null),"data-qa":"header-regions-button","data-qa-header-regions-button":""},e)),Sn=()=>{v.a.sendEvent("GA:click",{name:"shops",position:"header"})},Nn=Object(r.memo)(({link:e,className:t})=>o.a.createElement(Ie.a,{withExtraClickZone:!0,className:t,onClick:Sn,href:e,kind:"link",variant:"normal",size:"s","data-qa":"header-shops-button","data-qa-header-shops-button":""},"Магазины")),Ln=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.819 9.169a1.75 1.75 0 112.475-2.475 1.75 1.75 0 01-2.475 2.475zm4.056 1.58a1.75 1.75 0 102.475 2.476 1.75 1.75 0 00-2.475-2.475zm-4.056 6.531a1.75 1.75 0 112.475-2.475 1.75 1.75 0 01-2.475 2.475zm-4.056 4.056a1.75 1.75 0 112.475-2.475 1.75 1.75 0 01-2.475 2.475zm-4.056-4.055a1.75 1.75 0 112.475-2.475 1.75 1.75 0 01-2.475 2.475zm4.056-6.532a1.75 1.75 0 102.475 2.475 1.75 1.75 0 00-2.475-2.475zm-8.112 0a1.75 1.75 0 102.475 2.475 1.75 1.75 0 00-2.475-2.475zm4.056-1.58a1.75 1.75 0 112.475-2.475 1.75 1.75 0 01-2.475 2.475zm4.056-6.531a1.75 1.75 0 102.475 2.475 1.75 1.75 0 00-2.475-2.475z"}))),Pn=Object(r.memo)(({className:e,openCatalog:t})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"visually-hidden",tabIndex:-1,href:"/catalogue/"},"Каталог"),o.a.createElement(Ie.a,{"data-qa-header-catalogue-button":"","data-qa":"header-catalogue-button",withExtraClickZone:!0,onClick:t,className:e,kind:"link",variant:"normal",size:"s",iconLeft:o.a.createElement(Ln,null)},"Каталог"))),Tn=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.9 5.51c.27-.48.68-.9 1.17-1.16a3.71 3.71 0 0 1 4.47.55 3.7 3.7 0 0 1 .55 4.46c-.27.49-.68.9-1.17 1.16a3.7 3.7 0 0 1-4.46-.54A3.7 3.7 0 0 1 8.9 5.5zM12 12.88c.97 0 1.97-.24 2.91-.75a4.45 4.45 0 0 0 1.8-1.78c1.26-2.34.93-5-.84-6.76a5.63 5.63 0 0 0-6.78-.82 4.42 4.42 0 0 0-1.79 1.78 5.6 5.6 0 0 0 .86 6.75 5.4 5.4 0 0 0 3.84 1.58zM3.9 19.14a4.94 4.94 0 0 1 4.88-3.8h6.44c1.22 0 2.38.41 3.29 1.17a4.65 4.65 0 0 1 1.59 2.63H3.9zm16.39-3.46a6.85 6.85 0 0 0-5.09-2.25H8.8c-1.94 0-3.8.82-5.09 2.25a6.66 6.66 0 0 0-1.66 5.26l.01.1h19.88l.01-.1a6.67 6.67 0 0 0-1.66-5.26z"})));var $n=n("DUc8"),An=n("39m2");function Rn(){return(Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Mn=Object(r.memo)(({userAuth:e,shoppingListCount:t,compareCount:n,login:a,onClose:s,logout:i,linkToCompare:c,shoppingList:l,loginPageUrl:u})=>{const d=Object(r.useRef)(null),h=[{hidden:!e,key:"purchase_history",props:{href:"/lk/purchase_history/",children:"Мои покупки","data-qa-header-user-purchase-history":""}},{hidden:!e,key:"projects",props:{href:"/lk/projects/",children:"Мои проекты","data-qa-header-user-projects":""}},{key:"shoppingList",props:{href:l,"data-qa-header-user-shopping-list":"","aria-label":"Список покупок"+(t?", товаров в списке покупок: "+t:""),children:o.a.createElement(o.a.Fragment,null,"Список покупок"," ",t?o.a.createElement(hn,{className:qn,size:"m",badgeStyle:"secondary",badgePosition:"static",badgeContent:t}):null)}},{key:"compare",props:{href:c,"aria-label":"Сравнение"+(n?", товаров в сравнении: "+n:""),"data-qa-header-user-compare":"",children:o.a.createElement(o.a.Fragment,null,"Сравнение"," ",n?o.a.createElement(hn,{className:qn,size:"m",badgeStyle:"secondary",badgePosition:"static",badgeContent:n}):null)}},{hidden:!e,key:"info",props:{href:"/lk/info/",children:"Личные данные","data-qa-header-user-lk-info":""}},{key:"logout/login",requireDelimiter:!0,props:Rn({onClick:e?i:a,children:e?"Выйти":"Войти","data-qa-header-user-auth":e?"logout":"login"},!e&&{href:u})}].filter(({hidden:e})=>!e);var p,f;return Object(An.a)(s),p=d,f=s,Object(r.useEffect)(()=>{const e=!!window.PointerEvent,t=e=>r(e,e.clientX,e.clientY),n=e=>{const{clientX:t,clientY:n}=e.touches[0];r(e,t,n)},r=(e,t,n)=>{if(p.current){const r=p.current.getBoundingClientRect();if(t>r.left&&t<r.right&&n>r.top&&n<r.bottom)return;e.stopPropagation(),f()}};return e?(document.addEventListener("pointerdown",t,{capture:!0}),()=>document.removeEventListener("pointerdown",t)):(document.addEventListener("mousedown",t,{capture:!0}),document.addEventListener("touchstart",n,{capture:!0}),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",n)})},[p,f]),o.a.createElement($n.a,null,o.a.createElement("div",{ref:d,className:In,role:"menu","data-qa-header-user-menu":""},h.map(e=>o.a.createElement(r.Fragment,{key:e.key},e.requireDelimiter&&o.a.createElement("div",{className:Bn}),o.a.createElement(Ie.a,Rn({role:"menuitem",className:Dn,kind:"link",variant:"normal",size:"s",onClick:()=>{var t;t=e.key,v.a.sendEvent("GA:click",{name:t,position:"header-account-popup"})}},e.props))))))}),In="a1wosi0w_header-footer",Bn="d17i4qx7_header-footer",Dn="bnfagl0_header-footer",qn="bhe9jj8_header-footer";n("K0og");const zn=Object(r.memo)(({className:e,isUserAuth:t,logout:n,login:a,compareCount:s=0,shoppingListCount:i=0,linkToCompare:c,shoppingList:l,loginPageUrl:u})=>{const[d,h]=Object(r.useState)(!1),p=t?Fn.auth:Fn.notAuth;return o.a.createElement("div",{className:Object(C.a)(Un,e),"data-qa-header-user":""},o.a.createElement(Ie.a,{kind:"regular",variant:t?"secondary":"pseudo",size:"m",iconOnly:!0,onClick:()=>{h(!d),v.a.sendEvent("GA:click",{name:"account",position:"header"})},rounded:!0,"aria-label":`${p.title}. Товаров в сравнении: ${s}. Товаров в списке покупок: ${i}. Вы ${t?"":"не"} авторизованы`,"data-qa-header-user-button":"","data-qa":"auth-button","aria-haspopup":"true","aria-expanded":d},o.a.createElement(Tn,null)),o.a.createElement("div",{className:"visually-hidden","aria-live":"polite","aria-atomic":"true"},"Товаров в сравнении: ",s),o.a.createElement("div",{className:"visually-hidden","aria-live":"polite","aria-atomic":"true"},"Товаров в списке покупок: ",i),d&&o.a.createElement(Mn,{logout:n,login:a,shoppingListCount:i,compareCount:s,onClose:()=>h(!1),userAuth:t,linkToCompare:c,shoppingList:l,loginPageUrl:u}))}),Un="a1slzklk_header-footer",Fn={auth:{title:"Профиль",dataName:"account"},notAuth:{title:"Авторизация",dataName:"authorization"}};n("b53Z");var Hn=n("6Sgj");n("FLU+");var Vn=n("sQQ1");const Gn=1091,Wn={_default:{start:"0px",end:"0px",top:"0px"},mobile:{start:"var(--layout-gap)",end:"var(--layout-gap)",top:"56px"},tablet:{start:"0px",end:"0px",top:"59px"},desktop:{start:"100px",end:"189px",top:"20px"},largeDesktop:{start:"140px",end:"189px",top:"20px"}};function Kn(e){const[t]=Object.entries(e||{}).find(([,e])=>e)||[];return t?Wn[t]:Wn._default}var Yn=n("JZOa");function Zn(e,t,n){const r=e.animate(t,n);return r.finished||(r.finished=new Promise(e=>{r.addEventListener("finish",e,{once:!0})})),r}Object(Yn.a)()&&"function"!=typeof Element.prototype.animate&&n.e(5).then(n.t.bind(null,"6dTf",7));const Jn=(e,t)=>(["both","resize"].includes(t)&&window.visualViewport.addEventListener("resize",e,{passive:!0}),["both","scroll"].includes(t)&&window.visualViewport.addEventListener("scroll",e,{passive:!0}),()=>{window.visualViewport.removeEventListener("resize",e),window.visualViewport.removeEventListener("scroll",e)}),Xn=e=>{const{suggestionsRef:t,focused:n,state:o}=e,[a,s]=(({handle:e="both"}={})=>{const t=Object(r.useRef)(Object(Yn.a)()&&"visualViewport"in window),[n,o]=Object(r.useState)(t.current?{height:window.visualViewport.height}:null);return Object(r.useEffect)(()=>t.current?Jn(({target:e})=>{o({height:e.height})},e):()=>{},[t,e]),[n,t.current]})({handle:"resize"}),i=Object(lt.a)();Object(r.useEffect)(()=>{if(s)return()=>{};const e=()=>{if("expanded"===o&&t.current){const e=window.innerHeight-(["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)&&n?270:0);t.current.style.height=Qn(e,i)}};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[i,n,t,o,s]),Object(r.useEffect)(()=>{if("expanded"===o&&t.current&&a){const{height:e}=a;t.current.style.height=Qn(e,i)}},[i,t,a,o])};function Qn(e,t){const{top:n}=Kn(t);return`calc(${e}px - 40px - ${n})`}function er(){return(er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var tr=n("dK5d"),nr=n("sMGQ"),rr=n("zxh6"),or=n("M8Ev");const ar=Object(r.memo)(({slicedSuggestions:e,suggestionsMap:t,suggestionSelector:n,title:r,"aria-label":a})=>0===t.length?null:e.length>0?o.a.createElement("div",{className:Object(C.a)("s3kv4ye_header-footer",n)},o.a.createElement("span",{className:Object(C.a)("s1j33334_header-footer",n)},r),o.a.createElement("div",{role:"listbox",id:"srp_search-listbox","aria-label":null!=a?a:r,className:Object(C.a)("s1iggbxk_header-footer",n),"data-qa-header-search-suggestions":""},t)):o.a.createElement("div",{role:"listbox",id:"srp_search-listbox","aria-label":"Поиск по услугам","data-qa-header-search-suggestions":""},t));function sr(){return(sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ir=Object(r.memo)(({searchQuery:e,suggestions:t,suggestionSelector:n,onMouseEnter:a,onMouseLeave:i,searchHref:c,index:l,isSrp:u,onSelectSuggestion:d,notFoundMessage:h})=>{const[p,f]=null!=t?t:[[],[]],{navigate:m}=Object(s.d)(),g=Object(r.useCallback)((t,n,r)=>{const o=()=>{v.a.sendEvent("GA:click",{name:"searchHint",position:"header",content:`${null==r?void 0:r.block}/${null==r?void 0:r.index}-${null==r?void 0:r.text}`,context:e}),null==d||d(),n&&m(n)};return Object(Yn.a)()&&("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)?{onTouchEnd:o}:{onMouseEnter:()=>a(t),onClick:o,onMouseLeave:i}},[a,i,d,m,e]),b=Object(r.useMemo)(()=>p.map(({id:e,phrase:t},r)=>{const a=`${c}?q=${t}&suggest=true`;return o.a.createElement("div",{key:e,role:"option",id:e,"aria-selected":r===l,"data-qa-header-search-suggestion":""},o.a.createElement(Ie.a,sr({tabIndex:-1,withExtraClickZone:!0,className:Object(C.a)(n,"s1mluqqi_header-footer",{active:r===l,"s1493zw3_header-footer":u}),key:e,"data-qa":"suggestion-button"},g(r,u?a:void 0,{block:"Товары",index:r,text:t}),!u&&{href:a}),o.a.createElement(st.a,{variant:"s",size:"body_short"},Object(or.a)(t))))}),[g,l,u,c,p,n]),y=Object(r.useMemo)(()=>f.map(({serviceId:e,serviceName:t,categoryUrl:r},a)=>{let s=p.length+a;return o.a.createElement("div",{key:e,role:"option",id:""+e,"aria-selected":s===l,"data-qa-header-search-suggestion":""},o.a.createElement(Ie.a,sr({tabIndex:-1,withExtraClickZone:!0,className:Object(C.a)(n,"s1mluqqi_header-footer",{active:s===l,"s1493zw3_header-footer":u}),key:e,"data-qa":"suggestion-button",href:r},g(s,void 0,{block:"Услуги",index:a,text:t})),o.a.createElement(st.a,{variant:"s",size:"body_short"},Object(or.a)(t))))}),[g,l,f,n,p.length,u]);return t?0===p.length&&0===f.length?!1===h?null:o.a.createElement(st.a,{className:Object(C.a)("n14e8j6c_header-footer",n),variant:"m",size:"body_short","data-qa-header-search-nothing-found":""},h):o.a.createElement(o.a.Fragment,null,o.a.createElement(ar,{suggestionSelector:n,slicedSuggestions:f,suggestionsMap:b,title:"Товары","aria-label":"Поиск по товарам"}),o.a.createElement(ar,{suggestionSelector:n,slicedSuggestions:p,suggestionsMap:y,title:"Услуги","aria-label":"Поиск по услугам"})):null}),cr=({fetchSuggestions:e})=>o.a.createElement("div",{className:"e1yg3uo3_header-footer","data-qa-header-search-error":""},o.a.createElement(st.a,{className:"ec1lhky_header-footer",variant:"s",size:"body_short","data-qa-header-search-error-title":""},"При отправке запроса произошла ошибка ",o.a.createElement("br",null)," Попробуйте еще раз."),o.a.createElement(Ie.a,{kind:"regular",variant:"primary",size:"s",onClick:e,"data-qa-header-search-error-retry":""},"Повторить")),lr=Object(r.forwardRef)(({searchQuery:e,suggestions:t,logoUrl:n,searchHref:r,onMouseEnter:a,fetchSuggestions:s,onMouseLeave:i,expanded:c,focusGroup:l,collapse:u,error:d,suggestionSelector:h,index:p,isSrp:f,onSelectSuggestion:m,notFoundMessage:g},b)=>{const v=t&&(t[0].length||t[1].length),y=!(d||!v&&!1===g);return o.a.createElement(Qt.a,{disableBodyLock:!0,logoUrl:n,focusGroup:l,show:c,onClose:u,"data-qa-header-search-modal":""},o.a.createElement(Ke.a,null,o.a.createElement("div",{ref:b,className:"snq5dcq_header-footer"},d&&o.a.createElement(cr,{fetchSuggestions:s}),y&&o.a.createElement(ir,{searchQuery:e,onSelectSuggestion:m,isSrp:f,suggestions:t,suggestionSelector:h,onMouseEnter:a,onMouseLeave:i,searchHref:r,index:p,notFoundMessage:g}))))});function ur(e){if(function(){if(null==dr){dr=!1;try{document.createElement("div").focus({get preventScroll(){return dr=!0,!0}})}catch(e){}}return dr}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let dr=null;var hr=n("R0ca");const pr=Object(r.memo)(({className:e,searchHref:t,getSuggestions:n,resetServices:a,loading:i,error:c,suggestions:l,logoUrl:u,notFoundMessage:d})=>{var h;const[f,m]=Object(r.useState)(!1),b=Object(r.useRef)(null),y=Object(r.useRef)(null),w=Object(r.useRef)(null),O=Object(r.useRef)(null),[E,_]=Object(r.useState)(!1),j=Object(Hn.a)(),x=Object(r.useCallback)(()=>m(!0),[]),S=Object(r.useCallback)(()=>{var e;m(!1),null===(e=w.current)||void 0===e||e.blur()},[w]),N=Object(r.useMemo)(()=>{return l?(e=l.products,[((t=l.services).length<=3?e.slice(0,6-t.length):e.slice(0,3))||[],(e.length<=3?t.slice(0,6-e.length):t.slice(0,3))||[]]):null;var e,t},[l]),L=Object(r.useMemo)(()=>N&&[...N[0],...N[1]],[N]),[P]=(e=>{const{containerRef:t,searchbarRef:n,suggestionsRef:o,expanded:a,suggestionSelector:s}=e,i=Object(r.useRef)(a),c=Object(r.useRef)(null),l=Object(r.useRef)(null),[u,d]=Object(r.useState)(a?"needsExpand":"collapsed"),h=Object(lt.a)();return Object(Vn.a)(()=>{i.current!==a&&d(a?"needsExpand":"needsCollapse")},[a]),Object(Vn.a)(()=>{a&&i.current===a&&d("needsReflow")},[h,a]),Object(Vn.a)(()=>{i.current=a},[a]),Object(Vn.a)(()=>{const e=n.current,r=t.current,a=o.current,i=c.current,p=l.current;if(!e||!r)return;const f={easing:"cubic-bezier(0.24, 0.81, 0.2, 0.96)",duration:"needsExpand"===u||"needsCollapse"===u?450:0},m=Kn(h);if(("needsExpand"===u||"needsReflow"===u)&&a){const t=r.getBoundingClientRect(),n=a.getBoundingClientRect();null==i||i.cancel(),null==p||p.cancel();const o=`calc(-1 * var(--layout-ears, 16px) + ${m.start})`,h=`calc(-1 * var(--layout-ears, 16px) + ${m.end})`,g=`calc(100vw - ${o} - ${h})`;if(e.style.position="fixed",e.style.zIndex=Gn.toString(),c.current=Zn(e,{left:[t.left+"px",o],top:[t.top+"px",m.top],width:[t.width+"px",g]},{duration:f.duration,easing:f.easing,fill:"forwards"}),d("expanding"),c.current.finished.then(()=>{var t;e.style.top=m.top,e.style.left=o,e.style.width=g,null===(t=c.current)||void 0===t||t.cancel()}).catch(()=>{}),"needsExpand"===u){Array.from(a.querySelectorAll("."+s)).forEach((e,t)=>Zn(e,[{opacity:"0",transform:"translateY(-8px)"},{opacity:"1",transform:"translateY(0px)"}],{duration:400,delay:f.duration+20*t,easing:"cubic-bezier(0.24, 0.81, 0.2, 0.96)",fill:"both"}))}l.current=Zn(a,{opacity:["0","1"],left:[n.left+"px",o],top:[n.top+"px",`calc(${m.top} + 40px)`],width:[n.width+"px",g]},{duration:0,delay:f.duration}),l.current.finished.then(()=>{var e;a.style.top=`calc(${m.top} + 40px)`,a.style.left=o,a.style.width=g,a.style.opacity="1",null===(e=l.current)||void 0===e||e.cancel()}).catch(()=>{})}if("needsCollapse"===u){const t=r.getBoundingClientRect(),n=e.getBoundingClientRect();null==i||i.cancel(),null==p||p.cancel(),c.current=Zn(e,{left:[n.x+"px",t.x+"px"],top:[n.y+"px",t.y+"px"],width:[n.width+"px",t.width+"px"]},{duration:f.duration,easing:f.easing,fill:"forwards"}),d("collapsing")}},[u,t,n,o,a,h,s]),Object(Vn.a)(()=>{"expanding"!==u&&"collapsing"!==u||!c.current||c.current.finished.then(()=>{d(e=>"expanding"===e?"expanded":"collapsing"===e?"collapsed":e)}).catch(()=>{})},[u]),Object(Vn.a)(()=>{const{current:e}=n;var t;"collapsed"===u&&e&&(e.style.position="",e.style.zIndex="",e.style.top="",e.style.left="",e.style.width="",null===(t=c.current)||void 0===t||t.cancel())},[n,u]),[u]})({expanded:f,searchbarRef:y,containerRef:b,suggestionsRef:O,suggestionSelector:j});Xn({suggestionsRef:O,focused:E,state:P});const{index:T,reset:$,selectedItem:A,onKeyDown:R,onMouseEnter:M,onMouseLeave:I}=Object(hr.a)(L,{canUnselectAllItems:!0}),{onSubmit:B,isSrp:D,value:q,updateValue:z}=(e=>{var t;const{getSuggestions:n,resetServices:o,selectedSuggestion:a,reset:i,transitionState:c,suggestions:l,loading:u,error:d,collapse:h}=e,[f,m]=Object(s.c)(),[b,y]=Object(s.e)(),[w,O]=Object(r.useState)(f.startsWith("/search")),[E,_]=Object(r.useState)(null!==(t=b.q)&&void 0!==t?t:""),[j,x]=Object(r.useState)(E),k=xt(n,{interval:300});Object(vn.a)(()=>{var e;_(null!==(e=b.q)&&void 0!==e?e:"")},[b]),Object(vn.a)(()=>{O(f.startsWith("/search"))},[f]);const C=Object(r.useCallback)(e=>{var t;const n=(null!==(t=null==a?void 0:a.phrase)&&void 0!==t?t:j).trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(n)return v.a.sendEvent("GA:click",{position:"search",name:j}),g.a.search(j),w&&null!=(null==a?void 0:a.phrase)&&(e.preventDefault(),y(er({q:n},a.phrase&&{q:a.phrase},a&&{suggest:"true"})),h()),void(null!=(null==a?void 0:a.categoryUrl)&&(e.preventDefault(),m(a.categoryUrl),h()));e.preventDefault()},[h,w,y,a,j,m]),S=Object(r.useCallback)(e=>{x(e.replace(/(<([^>]+)>)/gi,"")),i(),""===e&&o(),k(e),""!==e&&g.a.search(e)},[k,i,o]);return Object(p.a)(()=>{l||u||d||n(j)}),Object(vn.a)(()=>{"collapsed"===c&&(i(),S(E))},[E,S,c,i]),{isSrp:w,onSubmit:C,value:j,updateValue:S}})({loading:i,suggestions:l,collapse:S,transitionState:P,reset:$,selectedSuggestion:A,error:c,getSuggestions:n,resetServices:a});return Object(nr.a)({ref:O,locked:"expanded"===P}),o.a.createElement("div",{ref:b,className:Object(C.a)("s1kz9r9n_header-footer",e),onKeyDown:R,"data-qa-header-searchbar":""},o.a.createElement(Ie.a,{type:"button",className:"pros1bg_header-footer",kind:"regular",variant:"secondary",wide:!0,"aria-label":"Начать поиск по товарам","aria-hidden":f,hidden:"collapsed"!==P,"data-qa-header-open-search-button":"","data-qa":"search-button",onClick:()=>{x(),w.current&&ur(w.current),v.a.sendEvent("GA:click",{name:"search",position:"header"})}},o.a.createElement("span",{className:"p1sh6g2k_header-footer"},(null==A?void 0:A.phrase)||q||"Поиск товаров")),o.a.createElement("form",{id:"headersearchform",onSubmit:B,className:"s13opp2u_header-footer",method:"get",name:"search-form",role:"search",action:t},A&&o.a.createElement("input",{type:"hidden",name:"suggest",value:"true"})),o.a.createElement(k.a,null,o.a.createElement($n.a,{group:"searchfield",disabled:!f,autoFocus:!1,returnFocus:!0,lockProps:{role:"dialog","aria-modal":"true","aria-label":"Поиск по сайту"}},o.a.createElement("div",{role:"combobox","aria-controls":"srp_search-listbox","aria-expanded":!(!f||!l)&&(l.products.length>0||l.services.length>0),"aria-owns":"srp_search-listbox","aria-haspopup":"listbox",id:"srp_search-combobox",ref:y,"data-qa-header-search-combobox":"",className:"s3onpvx_header-footer"},o.a.createElement("input",{ref:w,form:"headersearchform",className:Object(C.a)("s1nubg81_header-footer",{expanded:f}),type:"search",name:"q",value:q,onChange:e=>z(e.target.value),onFocus:()=>_(!0),placeholder:"Поиск товаров","aria-hidden":!f,tabIndex:f?0:-1,"aria-label":"Поиск товаров","aria-autocomplete":"both","aria-controls":"srp_search-listbox",id:"srp_search-input","data-qa-header-search-input":"","aria-activedescendant":null!==(h=null==A?void 0:A.id)&&void 0!==h?h:"",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1}),o.a.createElement(Ie.a,{form:"headersearchform",onClick:()=>{z(""),w.current&&ur(w.current)},className:Object(C.a)("s1t8juh1_header-footer",{show:f&&(q||(null==A?void 0:A.phrase))}),kind:"icon",size:"s",variant:"secondary",label:"Удалить поисковый запрос","data-qa-header-search-clear":"","data-qa":"clear-button",withExtraClickZone:!0},o.a.createElement(tr.a,null)),i&&"expanded"===P?o.a.createElement(rr.a,{className:"l8ksc9f_header-footer"}):null))),o.a.createElement(lr,{searchQuery:q,onSelectSuggestion:D?S:void 0,isSrp:D,ref:O,suggestions:N,onMouseEnter:M,onMouseLeave:I,fetchSuggestions:()=>n(q),error:c,logoUrl:u,searchHref:t,expanded:f,focusGroup:"searchfield",collapse:S,suggestionSelector:j,index:T,notFoundMessage:null!=d?d:"Ничего не найдено"}))});n("VWYa");const fr=Object(r.memo)(({regionName:e,productsInBasket:t,userAuth:n,legacyOAuthProvider:r,compareCount:a,shoppingListCount:s,modelHeader:i,login:c,logout:l,openRegionsModal:u,openCatalog:d,logoUrl:h,suggestionsError:p,suggestionsLoading:f,suggestions:m,getSuggestions:g,resetServices:b,showCatalogButton:v,showSearchbar:y,sticky:w,toggleSidebar:O,searchOptions:E})=>{const _=r?void 0:i.initUrl;return o.a.createElement("div",{className:Object(C.a)("hhcpn4c_header-footer",w&&"sazja2r_header-footer"),"data-qa-header":w?"sticky":""},o.a.createElement(on.a,{className:"tpcfj2x_header-footer"},o.a.createElement(an,{className:"h57mdm_header-footer",label:"открыть боковое меню",onClick:O}),o.a.createElement(rn.a,{className:"l19fd2kq_header-footer",url:i.home,logoURL:h}),o.a.createElement(Cn,{openRegionsPopup:u,className:"r9e0n67_header-footer",regionName:e}),o.a.createElement(Nn,{link:i.shops,className:"s1l3y919_header-footer"}),v&&o.a.createElement(Pn,{className:"cd2yg71_header-footer",openCatalog:d}),y&&o.a.createElement(pr,{suggestions:m,loading:f,error:p,getSuggestions:g,resetServices:b,searchHref:i.linkToSearch,logoUrl:h,className:"s1pwmc8g_header-footer",notFoundMessage:null==E?void 0:E.notFoundMessage}),o.a.createElement(zn,{className:"adhv7fc_header-footer",isUserAuth:n,login:c,logout:l,compareCount:a,shoppingListCount:s,linkToCompare:i.linkToCompare,shoppingList:i.shoppingList,loginPageUrl:_}),o.a.createElement(wn,{productsInBasket:t,className:"b1nzosla_header-footer"})))}),mr=["children","corner","className","style"];function gr(){return(gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const br=o.a.forwardRef((e,t)=>{let{children:n,corner:a=1,className:s,style:i}=e,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,mr);const l=Object(r.useMemo)(()=>gr({},i,{[`border${["TopLeft","TopRight","BottomRight","BottomLeft"][a-1]}Radius`]:"var(--balloon-corner-radius)"}),[a,i]);return o.a.createElement("div",gr({ref:t,className:Object(C.a)(vr,s),style:l,"data-qa-ballon":""},c),n)}),vr="b1jotxbu_header-footer";n("5ofk");const yr=Object(r.memo)(({cookieUrl:e,cookieAccepted:t,acceptCookieNotification:n})=>{const a=Object(r.useRef)(null),[s,i]=Object(r.useState)(!1);Object(r.useEffect)(()=>{if(!t){const e=setTimeout(()=>i(!0),500);return()=>clearTimeout(e)}return()=>{}},[t]),Object(r.useEffect)(()=>{t&&s&&i(!1)},[t,s]);const c=Object(r.useCallback)(()=>{var e;i(!1),null===(e=a.current)||void 0===e||e.addEventListener("transitionend",n,{passive:!0,once:!0})},[n]);return t?null:o.a.createElement(br,{ref:a,corner:2,className:Object(C.a)(wr,{hidden:!s}),"data-qa":"cookies-balloon","data-qa-cookie-notification":""},o.a.createElement(st.a,{className:Or,variant:"s",size:"body_short",as:"p","data-qa-cookie-notification-title":""},"Мы используем"," ",o.a.createElement(Ie.a,{href:e,className:Er,kind:"link",variant:"underline",size:"s","data-qa-cookie-notification-cookie-link":""},"файлы cookie")," ",", чтобы улучшить сайт для Вас"),o.a.createElement(Ie.a,{onClick:c,className:_r,kind:"regular",variant:"secondary",size:"m","data-qa-cookie-notification-accept":""},"Согласен"))}),wr="ctm79aj_header-footer",Or="mpkuv6_header-footer",Er="c1ypq4sz_header-footer",_r="svhl415_header-footer";n("N19E");const jr=Object(r.memo)(({regionName:e="",shouldDisplay:t,onChangeClick:n,onSubmit:a})=>{const s=Object(r.useRef)(null),[i,c]=Object(r.useState)(!1),l=Object(r.useCallback)(()=>{var e;c(!0),null===(e=s.current)||void 0===e||e.addEventListener("transitionend",a,{passive:!0,once:!0})},[a]);return t?o.a.createElement(Ke.a,null,o.a.createElement(br,{ref:s,className:Object(C.a)(xr,{hidding:i}),"data-qa-region-notification":""},o.a.createElement(st.a,{className:kr,variant:"s",size:"body_short","data-qa-region-title":""},"Ваш регион ",e,"?"),o.a.createElement(Ie.a,{onClick:l,className:Cr,kind:"regular",variant:"secondary",size:"m","data-qa-region-accept":""},"Да"),o.a.createElement(Ie.a,{onClick:()=>{n(),l()},className:Sr,kind:"regular",variant:"outline",size:"m","data-qa-region-change":""},"Изменить"))):null}),xr="r17hqh3u_header-footer",kr="t1wnihiw_header-footer",Cr="s3zmiec_header-footer",Sr="c1utt3em_header-footer";n("wB4c");const Nr=["children","icon","count"];function Lr(){return(Lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Pr=Object(r.memo)(e=>{let{children:t,icon:n,count:r}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Nr);return o.a.createElement(Ie.a,Lr({kind:"link",variant:"normal",size:"m",className:Tr},a),o.a.createElement(Ht.a,{className:$r,size:24},n),t,r?o.a.createElement(hn,{className:Ar,badgeContent:r,size:"m",badgeStyle:"secondary",badgePosition:"static"}):null)}),Tr="mil4aoi_header-footer",$r="i81nv25_header-footer",Ar="b1shp9d0_header-footer";n("SyjR");const Rr="sdup50y_header-footer";n("2D9j");const Mr=o.a.memo(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M17.7 6.3l-5.2 12-1.6-4.2-.3-.7-.7-.3-4.3-1.6 12-5.2zM20 3.5h-.2L2.1 11a.5.5 0 000 1l7.1 2.7 2.8 7a.5.5 0 00.5.4.5.5 0 00.4-.3l7.6-17.7a.5.5 0 00-.4-.7z"}))),Ir=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M21 19.21H3a1.38 1.38 0 01-1.24-.76A1.36 1.36 0 011.93 17l9-11.68a1.42 1.42 0 012.18 0l9 11.68a1.36 1.36 0 01-.37 2.01c-.22.14-.48.2-.74.2zM3.78 17.46h16.44L12 6.77 3.78 17.46z"}))),Br=o.a.memo(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M19.69 13.45v2.01a.2.2 0 010 .14H4.31v-2.04-.08h15.38v-.03zm.07-1.72H4.24a1.7 1.7 0 00-1.24.56 2 2 0 00-.45 1.3v1.9a2 2 0 00.46 1.3 1.7 1.7 0 001.26.59h15.49a1.7 1.7 0 001.24-.59c.3-.37.46-.83.46-1.3v-1.9a2 2 0 00-.46-1.3 1.7 1.7 0 00-1.26-.59l.02.03zM19.7 5.86v2.19H4.3V6v-.15h15.4v.01zm.06-1.76H4.24A1.82 1.82 0 002.52 6v1.9a1.82 1.82 0 001.72 1.9h15.52a1.82 1.82 0 001.72-1.9V6a1.82 1.82 0 00-1.72-1.9zM21.18 19.35H10.4a.3.3 0 00-.3.3v1.15c0 .17.13.3.3.3h10.78a.3.3 0 00.3-.3v-1.15a.3.3 0 00-.3-.3z"}))),Dr=o.a.memo(()=>o.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M20.0297 6.76406L14.9859 1.72031C14.8453 1.57969 14.6555 1.5 14.4562 1.5H4.5C4.08516 1.5 3.75 1.83516 3.75 2.25V21.75C3.75 22.1648 4.08516 22.5 4.5 22.5H19.5C19.9148 22.5 20.25 22.1648 20.25 21.75V7.29609C20.25 7.09687 20.1703 6.90469 20.0297 6.76406ZM18.5203 7.64062H14.1094V3.22969L18.5203 7.64062ZM18.5625 20.8125H5.4375V3.1875H12.5156V8.25C12.5156 8.51107 12.6193 8.76145 12.8039 8.94606C12.9885 9.13066 13.2389 9.23438 13.5 9.23438H18.5625V20.8125Z",fill:"#A9ACB1"}))),qr=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M20.03 6.76l-5.04-5.04a.75.75 0 00-.53-.22H4.5a.75.75 0 00-.75.75v19.5c0 .41.34.75.75.75h15c.41 0 .75-.34.75-.75V7.3c0-.2-.08-.4-.22-.54zm-1.51.88h-4.41V3.23l4.41 4.41zm.04 13.17H5.44V3.2h7.08v5.06a.98.98 0 00.98.98h5.06v11.58zm-6.75-6.33H7.5c-.1 0-.19.09-.19.2v1.12c0 .1.09.18.19.18h4.31c.1 0 .19-.08.19-.18v-1.13c0-.1-.08-.19-.19-.19zm-4.5-3v1.13c0 .1.09.19.19.19h9c.1 0 .19-.09.19-.2v-1.12c0-.1-.09-.18-.19-.18h-9c-.1 0-.19.08-.19.18z"}))),zr=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M21.18 5.1201H2.81a.3.3 0 00-.3.3v1.15a.3.3 0 00.3.3h18.37a.3.3 0 00.3-.3v-1.15a.3.3 0 00-.3-.3zM15.52 9.1201H2.81a.3.3 0 00-.3.3v1.15a.3.3 0 00.3.3h12.71a.3.3 0 00.3-.3v-1.15a.3.3 0 00-.3-.3zM21.18 13.1201H2.81a.3.3 0 00-.3.3v1.15a.3.3 0 00.3.3h18.37a.3.3 0 00.3-.3v-1.15a.3.3 0 00-.3-.3zM11.86 17.1201H2.81a.3.3 0 00-.3.3v1.15a.3.3 0 00.3.3h9.05a.3.3 0 00.3-.3v-1.15a.3.3 0 00-.3-.3z"}))),Ur=Object(r.memo)(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M18.63 20h-7.55a.31.31 0 01-.3-.3v-1.17a.3.3 0 01.3-.3h7.55a.13.13 0 00.13-.14V5.91a.13.13 0 00-.13-.14h-7.38a.29.29 0 01-.3-.3V4.32a.3.3 0 01.3-.3h7.38a1.89 1.89 0 011.88 1.89v12.18A1.89 1.89 0 0118.63 20z"}),o.a.createElement("path",{d:"M14.88 12.88H4.32v-1.76h10.56a.31.31 0 01.3.3v1.16a.31.31 0 01-.3.3z"}),o.a.createElement("path",{d:"M7.25 17l-4.54-4.75a.3.3 0 010-.41l4.54-4.73a.31.31 0 01.43 0l.83.8a.29.29 0 010 .42L4.94 12l3.57 3.72a.3.3 0 010 .43l-.83.8a.31.31 0 01-.43.05z"}))),Fr=o.a.memo(()=>o.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.37 20h7.55a.31.31 0 00.3-.3v-1.17a.3.3 0 00-.3-.3H5.37a.13.13 0 01-.13-.14V5.91a.13.13 0 01.13-.14h7.38a.29.29 0 00.3-.3V4.32a.3.3 0 00-.3-.3H5.37a1.89 1.89 0 00-1.88 1.89v12.18A1.89 1.89 0 005.37 20z"}),o.a.createElement("path",{d:"M9.12 12.88h10.56v-1.76H9.12a.31.31 0 00-.3.3v1.16a.31.31 0 00.3.3z"}),o.a.createElement("path",{d:"M16.75 17l4.54-4.75a.3.3 0 000-.41l-4.54-4.73a.31.31 0 00-.43 0l-.83.8a.29.29 0 000 .42L19.06 12l-3.57 3.72a.3.3 0 000 .43l.83.8a.31.31 0 00.43.05z"})));var Hr=n("wHal");const Vr=({region:e="",opened:t=!1,onClose:n,userAuth:a,modelHeader:s,openCatalog:i,openRegionsModal:c,compareCount:l,shoppingListCount:u,login:d,logout:h,legacyOAuthProvider:p=!1})=>{const f=Object(r.useRef)(null),m=Object(r.useRef)(0),g=o.a.useContext(Ut),b=p||a?void 0:s.initUrl;return Object(r.useEffect)(()=>{if(t)return()=>{};m.current=window.scrollY;const e=Object(jt.debounce)(()=>{m.current=window.scrollY},100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[t]),e?o.a.createElement("div",{ref:f,className:Object(C.a)("shnh5zm_header-footer",{opened:t}),"data-qa-header-mobile-menu":""},o.a.createElement(ve,{enabled:t,onEscapeKey:n},o.a.createElement("div",{"aria-label":"Закрыть",className:"o1lu9990_header-footer",onClick:n}),o.a.createElement("div",{className:"c1u7e8e_header-footer",style:{paddingTop:null!=g&&g.mobileAppBannerDisplayed?Object(Hr.a)(0,89-m.current,89)+"px":""}},o.a.createElement(an,{tabbable:t,className:"ckftjp8_header-footer",onClick:n,cross:!0,label:"Закрыть боковое меню"}),o.a.createElement("div",{className:"l1fa6uai_header-footer","data-qa-header-mobile-menu-list":""},o.a.createElement("div",{className:Rr,"data-qa-header-mobile-menu-section":""},o.a.createElement(Pr,{"data-qa-header-mobile-menu-catalogue":"",onClick:()=>{i(),n()},icon:o.a.createElement(Ln,null)},"Каталог")),o.a.createElement("div",{className:Rr,"data-qa-header-mobile-menu-section":""},o.a.createElement(Pr,{"data-qa-header-mobile-menu-regions":"",onClick:()=>{c(),n()},icon:o.a.createElement(Mr,null)},e),o.a.createElement(Pr,{href:s.shops,icon:o.a.createElement(Ir,null),"data-qa-header-mobile-menu-shops":""},"Магазины")),o.a.createElement("div",{className:Rr,"data-qa-header-mobile-menu-section":""},a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Pr,{onClick:n,href:"/lk/purchase_history/",icon:o.a.createElement(Br,null),"data-qa-header-mobile-menu-purchase-history":""},"Мои покупки"),o.a.createElement(Pr,{onClick:n,href:"/lk/projects/",icon:o.a.createElement(Dr,null),"data-qa-header-mobile-menu-projects":""},"Мои проекты")),o.a.createElement(Pr,{"data-qa-header-mobile-menu-shopping-list":"",onClick:n,href:s.shoppingList,icon:o.a.createElement(qr,null),count:u},"Список покупок"),o.a.createElement(Pr,{"data-qa-header-mobile-menu-compare":"",onClick:n,href:s.linkToCompare,icon:o.a.createElement(zr,null),count:l},"Сравнение"),a&&o.a.createElement(Pr,{onClick:n,href:"/lk/info/",icon:o.a.createElement(Tn,null),"data-qa-header-mobile-menu-lk-info":""},"Личные данные")),o.a.createElement("div",{className:Rr,"data-qa-header-mobile-menu-section":""},o.a.createElement(Pr,{"data-qa-header-mobile-menu-auth":a?"logout":"login",onClick:()=>{(a?h:d)(),n()},href:b,icon:a?o.a.createElement(Ur,null):o.a.createElement(Fr,null)},a?"Выйти":"Войти")))))):null};var Gr=n("Z0/C");const Wr="https://res.cloudinary.com/aem/raw/upload/auth/refreshAuth.min.js";let Kr;!function(e){e.LOGOUT_ACTION="lk:auth:logout",e.FORM_AUTH_OPEN="form:auth:open",e.FORM_FORGOT_PASS_OPEN="form:forgotPass:open",e.FORM_FORGOT_PASS_CLOSE="form:forgotPass:close",e.FORM_REVERSE_PASSWORD_OPEN="form:reversePass:open",e.FORM_EXPRESS_REGISTRATION_OPEN="form:expressRegistration:open"}(Kr||(Kr={}));const Yr=()=>{const{dispatch:e,model:t}=Object(h.b)("model"),n=Object(r.useCallback)(()=>{var e;t&&(window.location.href=(null==t||null===(e=t.header)||void 0===e?void 0:e.initUrl)||"")},[t]),o=Object(r.useCallback)(()=>{v.a.sendEvent("GA:click",{name:"login",position:"header-account-popup"})},[]),a=Object(r.useCallback)(()=>{t&&(v.a.sendEvent("GA:click",{name:"logout",position:"header-account-popup"}),e(Gr.a.request))},[t,e]);return Object(r.useEffect)(()=>{const{hash:e}=window.location;"#auth"===e&&n()},[n]),Object(r.useEffect)(()=>{const e=()=>n();return document.addEventListener(Kr.FORM_AUTH_OPEN,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_AUTH_OPEN,e)},[n]),Object(r.useEffect)(()=>{var e;return(e=>{if(e){window.authConfig={endpointUrl:e};const{head:t}=document;if(t){if(!t.querySelector(`script[src='${Wr}']`)){let e=document.createElement("script");e.async=!0,e.src=Wr,t.appendChild(e)}}}})(null==t||null===(e=t.header)||void 0===e?void 0:e.refreshUrl)},[t]),{authPopup:!1,login:o,logout:a}};function Zr(){return(Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Jr(e,{useLegacyAuth:t}){e.displayName||e.name;return t?t=>{var n,a;const{model:s}=Object(h.b)("model"),i=((e,t)=>{const[n,o]=Object(r.useState)(!1),a=Object(r.useCallback)(()=>{v.a.sendEvent("GA:click",{name:"login",position:"header-account-popup"}),o("auth")},[]),s=Object(r.useCallback)(()=>{e&&t&&(v.a.sendEvent("GA:click",{name:"logout",position:"header-account-popup"}),document.dispatchEvent(new CustomEvent(Kr.LOGOUT_ACTION,{detail:{logoutUrl:e,logoutResource:t}})))},[e,t]),i=Object(r.useCallback)(()=>o(!1),[]);return Object(r.useEffect)(()=>{const{hash:e,href:t}=window.location;"#auth"===e&&o("auth");const n=t.replace(/\?/,"");n.match("auth_popup=yes")?o("recovery"):n.match("password_popup=yes")?o("forgot"):n.match("pre_creation_popup=yes")&&o("express")},[]),Object(r.useEffect)(()=>{const e=()=>o("auth");return document.addEventListener(Kr.FORM_AUTH_OPEN,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_AUTH_OPEN,e)},[]),Object(r.useEffect)(()=>{const e=()=>o("forgot");return document.addEventListener(Kr.FORM_FORGOT_PASS_OPEN,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_FORGOT_PASS_OPEN,e)},[]),Object(r.useEffect)(()=>{const e=()=>o("auth");return document.addEventListener(Kr.FORM_FORGOT_PASS_CLOSE,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_FORGOT_PASS_CLOSE,e)},[]),Object(r.useEffect)(()=>{const e=()=>o("recovery");return document.addEventListener(Kr.FORM_REVERSE_PASSWORD_OPEN,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_REVERSE_PASSWORD_OPEN,e)},[]),Object(r.useEffect)(()=>{const e=()=>o("express");return document.addEventListener(Kr.FORM_EXPRESS_REGISTRATION_OPEN,e,{passive:!0}),()=>document.removeEventListener(Kr.FORM_EXPRESS_REGISTRATION_OPEN,e)},[]),{authPopup:n,login:a,logout:s,closeAuthPopup:i,legacyOAuthProvider:!0}})(null==s||null===(n=s.header)||void 0===n?void 0:n.logoutUrl,null==s||null===(a=s.header)||void 0===a?void 0:a.logoutResource);return o.a.createElement(e,Zr({},i,t))}:t=>{const n=Yr();return o.a.createElement(e,Zr({},n,t))}}function Xr(){return(Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Qr=Object(r.memo)(e=>{var t,n,r,a,s,i;const c=Object(nn.a)(null===(t=e.model)||void 0===t?void 0:t.regions,null===(n=e.model.properties)||void 0===n?void 0:n.regionId),l="https://leroymerlin.ru"+e.model.header.logoImage;return o.a.createElement(Ft,{value:{mobileAppBannerDisplayed:e.showMobileBanner&&null!==e.os}},e.model.mobileApp&&o.a.createElement(Yt,Xr({shouldDisplay:e.showMobileBanner,os:e.os,hide:e.hideMobileBanner},e.model.mobileApp)),o.a.createElement(qt,{show:e.catalogueOpened,catalogueChunks:e.catalogueChunks,isError:e.catalogueError,isLoading:e.catalogueLoading,getCatalogue:e.getCatalogue}),o.a.createElement(en,{show:e.authPopup,logoUrl:l,onClose:e.closeAuthPopup,homePath:null===(r=e.model.header)||void 0===r?void 0:r.home,initUrl:null===(a=e.model.header)||void 0===a?void 0:a.initUrl,recaptchaPubKey:null===(s=e.model.header)||void 0===s?void 0:s.recaptchaPublicKey}),o.a.createElement(tn.a,{isBot:e.isBot,logoUrl:l,onClose:e.closeRegionsModal,show:e.regionsModalOpened,cities:e.model.regions,currentRegionId:null==c?void 0:c.regionId}),o.a.createElement(fr,{toggleSidebar:e.toggleSidebar,showSearchbar:!e.withoutSearchbar,showCatalogButton:!e.withoutCatalogButton,sticky:!e.disableSticky,suggestions:e.suggestions,suggestionsLoading:e.suggestionsLoading,suggestionsError:e.suggestionsError,getSuggestions:e.getSuggestions,resetServices:e.resetServices,openRegionsModal:e.openRegionsModal,openCatalog:e.openCatalog,logoUrl:l,login:e.login,logout:e.logout,legacyOAuthProvider:e.legacyOAuthProvider,userAuth:e.isUserAuth,productsInBasket:e.basketCount,modelHeader:e.model.header,shoppingListCount:e.shoppingListCount,compareCount:e.compareCount,regionName:null!==(i=null==c?void 0:c.regionName)&&void 0!==i?i:"",searchOptions:e.searchOptions}),o.a.createElement(yr,{cookieAccepted:e.cookieAccepted,acceptCookieNotification:e.acceptCookie,cookieUrl:e.model.header.cookieLink}),c&&o.a.createElement(jr,{onChangeClick:e.openRegionsModal,onSubmit:e.submitRegion,shouldDisplay:e.showSubmitNotification,regionName:c.regionName}),o.a.createElement(Vr,{logout:e.logout,login:e.login,legacyOAuthProvider:e.legacyOAuthProvider,openCatalog:e.openCatalog,openRegionsModal:e.openRegionsModal,compareCount:e.compareCount,shoppingListCount:e.shoppingListCount,userAuth:e.isUserAuth,opened:e.sidebarOpened,onClose:e.closeSidebar,modelHeader:e.model.header,region:null==c?void 0:c.regionName}))}),eo=Jr(Qr,{useLegacyAuth:!1}),to=Jr(Qr,{useLegacyAuth:!0}),no=({withoutSearchbar:e=!1,withoutCatalogButton:t=!1,disableSticky:n=!1,searchOptions:a})=>{var i;const{model:c,cookies:u,isBot:d,dispatch:k,userAgent:C,suggestions:S,catalogue:N}=Object(h.b)("model","useCredentials","apiKey","requestID","cookies","isBot","userAgent","suggestions","catalogue");(()=>{const{dispatch:e}=Object(h.b)();Object(p.a)(()=>(document.body.addEventListener(m.a,g.a.handleAddToCart),document.body.addEventListener(m.g,g.a.handleRemoveFromCart),document.body.addEventListener(m.h,g.a.handleSortItems),document.body.addEventListener(m.d,g.a.handleFilterItems),document.body.addEventListener("wishlist:add",g.a.handleAddToWishList),e(f.a.init),b(),()=>{document.body.removeEventListener(m.a,g.a.handleAddToCart),document.body.removeEventListener(m.g,g.a.handleRemoveFromCart),document.body.removeEventListener(m.h,g.a.handleSortItems),document.body.removeEventListener(m.d,g.a.handleFilterItems),document.body.removeEventListener("wishlist:add",g.a.handleAddToWishList)}))})();const L=Object(s.d)(),{basketCount:P}=(()=>{const[e,t]=Object(r.useState)([]);return Object(r.useEffect)(()=>{t(window.layers.basket.getBasket());const e=e=>{t(e.detail)};return document.body.addEventListener("basket:update",e,{passive:!0}),()=>{document.body.removeEventListener("basket:update",e)}},[]),{basket:e,basketCount:e.length}})(),{compareCount:T}=(()=>{const[e,t]=Object(r.useState)([]);return Object(r.useEffect)(()=>{t(window.layers.compare.getCompareItems());const e=e=>{t(e.detail)};return document.body.addEventListener("comparisonUpdate",e,{passive:!0}),()=>document.body.removeEventListener("comparisonUpdate",e)},[]),{compare:e,compareCount:e.length}})(),{shoppingListCount:$}=(()=>{const[e,t]=Object(r.useState)([]);return Object(r.useEffect)(()=>{t(window.layers.shoppingList.getShoppingList());const e=()=>{t(window.layers.shoppingList.getShoppingList())};return document.body.addEventListener("wishlist:update",e,{passive:!0}),()=>{document.body.removeEventListener("wishlist:update",e)}},[]),{shoppingList:e,shoppingListCount:e.length}})(),{catalogueOpened:A,openCatalog:R,getCatalogue:M}=(()=>{const{dispatch:e}=Object(h.b)("catalogue"),[t,n]=Object(r.useState)(!1),o=Object(r.useCallback)((t="/catalogue.navigation.json")=>{const n=Object(w.a)(window.location.host),r=Object(O.a)(n,Object(E.a)(n));e(y.a.request,{region:r,path:t})},[e]),a=Object(r.useCallback)(()=>{n(!0),v.a.sendEvent("GA:click",{name:"catalogue",position:"header"}),o()},[o]),s=Object(r.useCallback)(()=>{n(!1)},[]),i=Object(r.useCallback)(()=>{n(e=>!e)},[]);return Object(r.useEffect)(()=>(document.addEventListener("catalog:overlay:open",a,{passive:!0}),document.addEventListener("catalog:overlay:close",s,{passive:!0}),document.addEventListener("catalog:overlay:toggle",i,{passive:!0}),()=>{document.removeEventListener("catalog:overlay:open",a),document.removeEventListener("catalog:overlay:close",s),document.removeEventListener("catalog:overlay:toggle",i)}),[a,s,i]),{catalogueOpened:t,openCatalog:a,getCatalogue:o}})(),{showMobileBanner:I,hideMobileBanner:B,os:D}=((e,t,n,o)=>{const[a,s]=Object(r.useState)(!n.daysToHide);return{showMobileBanner:a,hideMobileBanner:Object(r.useCallback)(()=>{t&&(s(!1),o(l.a.update,{key:"daysToHide",value:t,params:{expires:new Date(Date.now()+1e3*Number(t)*60*60*24),sameSite:!0}}))},[t,o]),os:_(e)}})(C,null==c?void 0:c.mobileApp.daysToHide,u,k),{showSubmitNotification:q,submitRegion:z}=((e,t,n)=>{const o=Object(r.useRef)(n),[a,s]=Object(r.useState)(!!n&&Object(j.e)(e,n,t));Object(r.useEffect)(()=>{document.body.dispatchEvent(new CustomEvent("region:set",{detail:o.current}))},[]);return{showSubmitNotification:a,submitRegion:Object(r.useCallback)(()=>{s(!1)},[])}})(u,L.getSearch(),null==c?void 0:c.properties.regionId),{acceptCookie:U,cookieAccepted:F}=((e,t)=>{const[n,o]=Object(r.useState)(()=>Object(j.a)(e));Object(r.useEffect)(()=>{n||t(l.a.update,{key:"cookie_accepted",value:"true",params:{path:"/",domain:Object(E.a)(window.location.hostname),expires:new Date(Date.now()+884736e5)}})},[n,t]);const a=Object(r.useCallback)(()=>o(!0),[]);return{cookieAccepted:n,acceptCookie:a}})(u,k),{getSuggestions:H,resetServices:V}=(e=>({getSuggestions:Object(r.useCallback)(t=>{e(x.a.init,t)},[e]),resetServices:Object(r.useCallback)(()=>{e(x.b)},[e])}))(k),[G,W]=Object(r.useState)(!1),[K,Y]=Object(r.useState)(!1),Z=Object(r.useMemo)(()=>(e=>{if(e){const{header:t}=e;return"ausweis"!==t.oauthProvider}return!0})(c),[c]),J=Object(r.useCallback)(e=>{var t;const{regionId:n}=null!==(t=null==c?void 0:c.properties)&&void 0!==t?t:{},r=Object(j.b)(u);n&&H({query:e,region:n,customerId:r})},[H,u,null==c?void 0:c.properties]),X=Object(r.useCallback)(()=>Y(e=>!e),[]),Q=Object(r.useCallback)(()=>Y(!1),[]),ee=null==c||null===(i=c.regions)||void 0===i?void 0:i.filter(e=>e.regionId===(null==c?void 0:c.properties.regionId))[0].regionName,te=Object(r.useCallback)(()=>{W(!0),v.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"header",elementName:"changeRegion",elementText:ee})},[ee]),ne=Object(r.useCallback)(()=>{W(!1),v.a.sendEvent("GA:clickButton",{elementType:"button",elementBlock:"regionPopup",elementName:"chooseRegionClosePopup"})},[]);if(null==c||!c.properties)return null;const re=Z?to:eo;return o.a.createElement(re,{closeSidebar:Q,sidebarOpened:K,acceptCookie:U,basketCount:P,catalogueOpened:A,openCatalog:R,getCatalogue:M,catalogueChunks:N.chunks,catalogueError:N.error,catalogueLoading:N.loading,closeRegionsModal:ne,compareCount:T,cookieAccepted:F,disableSticky:n,getSuggestions:J,resetServices:V,hideMobileBanner:B,isBot:d,isUserAuth:Object(j.d)(u),model:c,openRegionsModal:te,os:D,regionsModalOpened:G,shoppingListCount:$,showMobileBanner:I,showSubmitNotification:q,submitRegion:z,suggestions:S.suggestions,suggestionsError:S.error,suggestionsLoading:S.loading,toggleSidebar:X,withoutCatalogButton:t,withoutSearchbar:e,searchOptions:a})};var ro=n("0apH");const oo=["router","store"];const ao=e=>{let{router:t,store:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,oo);return o.a.createElement(s.a,{router:t},o.a.createElement(ro.a,null,o.a.createElement(d.a,null,o.a.createElement(h.a.Provider,{value:n},o.a.createElement(no,r)))))};var so=n("GE3P"),io=n("CQbg");var co=n("2POY");n("MC5f"),n("ECaf");var lo=n("jogK"),uo=n("Bavv");let ho,po,fo,mo,go,bo,vo,yo,wo,Oo,Eo,_o,jo=e=>e;const xo=Object(io.b)(ho||(ho=jo`
  :host {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  ${0}
  ${0}
  
  .container {
    position: relative;
  }
  ${0}
  ${0}
  
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    transform: translate(-50%, -50%);
    transition: opacity 0.1s ease-in-out 0s;
  }
  .preloader.ishide {
    opacity: 0;
  }

  .wrapper {
    opacity: 0;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: ${0};
    margin-top: ${0};
    transition: opacity 0.1s ease-in-out 0s;
  }
  .wrapper.isshow {
    opacity: 1;
  }
  ${0}
  ${0}

  .oauth-iframe {
    display: block;
    width: 100%;
    max-width: ${0};
    height: ${0};
    margin: 0 auto;
    border: none;
  }
  ${0}
  ${0}

  uc-button {
    position: absolute;
    top: ${0};
    font-size: ${0};
  }
  ${0}

  .forgot-password {
    left: 0;
  }
  ${0}

  .registration {
    right: 0;
  }
  ${0}
  .registration a {
    color: rgb(72, 78, 92);
    text-decoration: none;
    transition: color 0.2s ease-in-out 0s;
  }
  .registration a:hover {
    color: #e6615e;
  }
`),Object(lo.l)(Object(io.b)(po||(po=jo`
    :host {
      width: 100%;
    }
  `))),Object(lo.i)(Object(io.b)(fo||(fo=jo`
    :host {
      max-width: ${0};
    }
  `),Object(uo.a)(767))),Object(lo.l)(Object(io.b)(mo||(mo=jo`
    .container {
      height: ${0};
    }
  `),Object(uo.a)(328))),Object(lo.i)(Object(io.b)(go||(go=jo`
    .container {
      height: ${0};
    }
  `),Object(uo.a)(300))),Object(uo.a)(380),Object(uo.a)(40),Object(lo.l)(Object(io.b)(bo||(bo=jo`
    .wrapper {
      margin-top: ${0};
    }
  `),Object(uo.a)(80))),Object(lo.e)(Object(io.b)(vo||(vo=jo`
    .wrapper {
      margin-top: ${0};
    }
  `),Object(uo.a)(160))),Object(uo.a)(380),Object(uo.a)(245),Object(lo.l)(Object(io.b)(yo||(yo=jo`
    .oauth-iframe {
      height: ${0};
    }
  `),Object(uo.a)(334))),Object(lo.e)(Object(io.b)(wo||(wo=jo`
    .oauth-iframe {
      max-width: 100%;
    }
  `))),Object(uo.a)(268),Object(uo.a)(16),Object(lo.l)(Object(io.b)(Oo||(Oo=jo`
    uc-button {
      top: ${0};
    }
  `),Object(uo.a)(338))),Object(lo.e)(Object(io.b)(Eo||(Eo=jo`
    .forgot-password {
      top: ${0};
      right: 0;
      left: auto;
    }
  `),Object(uo.a)(260))),Object(lo.e)(Object(io.b)(_o||(_o=jo`
    .registration {
      right: 0;
      top: ${0};
    }
  `),Object(uo.a)(284))));n("09RC");let ko,Co,So,No,Lo=e=>e;const Po={title:{type:String}};class To extends io.a{static get properties(){return Po}render(){return Object(io.c)(ko||(ko=Lo`
      <h3 class="title">
        <slot class="title-content">${0}</slot>
      </h3>
    `),this.title)}}To.styles=Object(io.b)(Co||(Co=Lo`
    :host {
      display: block;
    }

    .title {
      width: 100%;
      margin: 0;
      text-align: left;
      color: #333333;
      font-weight: 500;
      line-height: normal;
    }

    ${0}
    ${0}

    .title-content {
      display: inline;
    }
  `),Object(lo.l)(Object(io.b)(So||(So=Lo`
      .title {
        font-size: ${0};
      }
    `),Object(uo.a)(24))),Object(lo.i)(Object(io.b)(No||(No=Lo`
      .title {
        font-size: ${0};
      }
    `),Object(uo.a)(22)))),Object(so.a)("uc-form-title",To);const $o=e=>{e.value||e.parentNode.classList.remove("active")};let Ao,Ro=e=>e;const Mo={homePath:{type:String},initUrl:{type:String}};class Io extends io.a{static get styles(){return xo}static get properties(){return Mo}constructor(){super(),this.init=e=>{const t=this.renderRoot.querySelector(".preloader"),n=this.renderRoot.querySelector(".wrapper");t.classList.add("ishide"),n.classList.add("isshow"),this.authIframe(e)}}authIframe(e){e.target.contentWindow.document.querySelectorAll("input").forEach(e=>{e.addEventListener("input",({target:e})=>$o(e)),e.addEventListener("change",({target:e})=>$o(e)),e.addEventListener("focus",({target:e})=>{e.parentNode.classList.add("active")}),e.addEventListener("blur",({target:e})=>$o(e))})}forgotPasswordClickHandler(){document.dispatchEvent(new CustomEvent("form:forgotPass:open"))}render(){return Object(io.c)(Ao||(Ao=Ro`
      <uc-page-content>
        <div class="container">
          <div class="preloader">
            <uc-circular-loader></uc-circular-loader>
          </div>
          <div class="wrapper">
            <uc-form-title title="Вход в личный кабинет"></uc-form-title>
            <uc-button class="forgot-password" buttonstyle="text">
              <button @click=${0}>Забыли пароль?</button>
            </uc-button>
            <uc-button class="registration" buttonstyle="text">
              <button>
                <a href="/lk/register/" rel="nofollow">Зарегистрироваться</a>
              </button>
            </uc-button>
          </div>
          <iframe
            @load="${0}"
            @submit="${0}"
            class="oauth-iframe"
            data-home-path="${0}"
            data-init-url="${0}"
            src="${0}"
          ></iframe>
        </div>
      </uc-page-content>
    `),()=>this.forgotPasswordClickHandler(),this.init,this.handleSubmit,this.homePath,this.initUrl,this.initUrl)}}Object(so.a)("uc-form-login",Io);let Bo,Do,qo,zo,Uo,Fo,Ho,Vo,Go,Wo,Ko,Yo,Zo,Jo,Xo=e=>e;const Qo=Object(io.b)(Bo||(Bo=Xo`
  :host {
    position: relative;
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .container {
    max-width: ${0};
    margin-right: auto;
    margin-left: auto;
  }

  .action-wrap {
    margin-top: ${0};
  }

  .preloader {
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    width: 64px;
    height: 64px;
    transition: opacity 0.1s ease-in-out 0s;
  }

  .back {
    position: absolute;
    top: -${0};
    left: var(--layout-gap);
    transform: translateY(-100%);
    z-index: 1;
    display: block;
    font-size: ${0};
    line-height: ${0};
    --button-color: #a9acb1;
    --button-hover-color: #e6615e;
  }
  ${0}
  ${0}
      .back button {
    margin: 0 -${0};
    padding: ${0};
    color: #a9acb1;
  }
  ${0}
  ${0}
      ${0}
      .back-icon {
    margin-top: -1px;
    margin-right: 3px;
  }
  .back-icon svg {
    fill: #a9acb1;
  }
  .back:hover svg {
    fill: #e6615e;
  }

  ${0}
  ${0}
      ${0}
      
      uc-form-subtitle {
    margin-top: ${0};
  }
  ${0}
  ${0}
      
      .form-btn {
    height: ${0};
    font-size: ${0};
    line-height: ${0};
  }
  ${0}
  ${0}
      ${0}
`),Object(uo.a)(380),Object(uo.a)(32),Object(uo.a)(12),Object(uo.a)(14),Object(uo.a)(16),Object(lo.l)(Object(io.b)(Do||(Do=Xo`
    .back {
      top: -${0};
      margin-top: 0;
    }
  `),Object(uo.a)(22))),Object(lo.e)(Object(io.b)(qo||(qo=Xo`
    .back {
      position: relative;
      top: 0;
      left: 0;
      transform: translateY(0);
      margin-top: ${0};
    }
  `),Object(uo.a)(116))),Object(uo.a)(12),Object(uo.a)(8),Object(lo.l)(Object(io.b)(zo||(zo=Xo`
    .back button {
      font-size: 0;
    }
  `))),Object(lo.e)(Object(io.b)(Uo||(Uo=Xo`
    .back button {
      font-size: ${0};
    }
  `),Object(uo.a)(14))),Object(lo.i)(Object(io.b)(Fo||(Fo=Xo`
    .back button {
      font-size: 0;
    }
  `))),Object(lo.l)(Object(io.b)(Ho||(Ho=Xo`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(80))),Object(lo.e)(Object(io.b)(Vo||(Vo=Xo`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(10))),Object(lo.i)(Object(io.b)(Go||(Go=Xo`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(40))),Object(uo.a)(12),Object(lo.l)(Object(io.b)(Wo||(Wo=Xo`
    uc-form-subtitle {
      margin-bottom: ${0};
    }
  `),Object(uo.a)(48))),Object(lo.i)(Object(io.b)(Ko||(Ko=Xo`
    uc-form-subtitle {
      margin-bottom: ${0};
    }
  `),Object(uo.a)(32))),Object(uo.a)(52),Object(uo.a)(16),Object(uo.a)(52),Object(lo.l)(Object(io.b)(Yo||(Yo=Xo`
    .form-btn {
      width: 100%;
    }
  `))),Object(lo.e)(Object(io.b)(Zo||(Zo=Xo`
    .form-btn {
      width: ${0};
    }
  `),Object(uo.a)(196))),Object(lo.i)(Object(io.b)(Jo||(Jo=Xo`
    .form-btn {
      width: 100%;
    }
  `))));let ea;const ta=Object(io.b)(ea||(ea=(e=>e)`
  :host {
    display: block;
  }

  .form-row {
    position: relative;
    transition: 1s;
  }

  label {
    position: absolute;
    color: var(--label-color, #a9acb1);
    font-size: ${0};
    -webkit-transform: translateY(24px);
    transform: translateY(${0});
    transform-origin: top left;
    cursor: text;
    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .filled {
    -webkit-transform: translateY(-${0}) scale(0.85);
    transform: translateY(-${0}) scale(0.8);
  }

  input {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0;
    padding-top: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
    height: ${0};
    color: var(--color, #484e5c);
    font-size: ${0};
    line-height: ${0};
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--border-bottom-color, #a9acb1);
    border-radius: 0;
    outline: none;
  }

  .input-clear {
    display: none;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -${0};
  }

  .input-clear.show {
    display: block;
  }

  .clear-icon {
    width: ${0};
    height: ${0};
    background-color: transparent;
    cursor: pointer;
  }

  .input-wrap {
    position: relative;
  }

  .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: ${0};
    background-color: #444b5b;
    transition: 0.3s;
  }

  input:focus ~ .focus-border {
    width: 100%;
  }

  .form__message {
    position: relative;
    display: none;
    width: 100%;
    color: #e6615e;
    text-align: left;
  }

  .error .form__input {
    --border-bottom-color: #e6615e;
  }
  .error .form__message {
    display: block;
  }

  .form__message {
    margin-top: ${0};
    font-size: ${0};
  }
`),Object(uo.a)(16),Object(uo.a)(24),Object(uo.a)(0),Object(uo.a)(0),Object(uo.a)(24),Object(uo.a)(20),Object(uo.a)(15),Object(uo.a)(60),Object(uo.a)(16),Object(uo.a)(16),Object(uo.a)(9),Object(uo.a)(18),Object(uo.a)(18),Object(uo.a)(2),Object(uo.a)(8),Object(uo.a)(11));let na;const ra=Object(io.d)(na||(na=(e=>e)`<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 12.418 3.58 16 8 16C12.42 16 16 12.418 16 8C16 3.582 12.42 0 8 0C3.58 0 0 3.582 0 8ZM5.5 12L8 9.5L10.5 12L12 10.5L9.5 8L12 5.5L10.5 4L8 6.5L5.5 4L4 5.5L6.5 8L4 10.5L5.5 12Z" fill="#D2D4D8"/></svg>`));let oa,aa,sa=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},ia=e=>e;class ca extends io.a{static get properties(){return{id:{type:String},label:{type:String},inputtype:{type:String},name:{type:String},message:{type:String},value:{type:String},maxlength:{type:Number},minlength:{type:Number},isfilled:{type:Boolean},haserror:{type:Boolean},show:{type:Boolean}}}constructor(){super(),this.id=sa(),this.inputtype="text",this.label="",this.name="",this.message="",this.isfilled=!1,this.haserror=!1,this.show=!1,this.input=null}firstUpdated(){this.input=this.renderRoot.querySelector("input"),this.input.addEventListener("focus",()=>{this.isfilled=!0}),this.input.addEventListener("blur",e=>{""===e.target.value&&(this.isfilled=!1,this.show=!1)}),this.input.addEventListener("input",e=>{e.target.value>"0"&&(this.show=!0)})}_inputClear(e){e.preventDefault(),e.stopPropagation(),this.input.value="",this.input.focus()}render(){return Object(io.c)(oa||(oa=ia`
      <div class="form-row${0}">
        <label class="form__label${0}" for="${0}">${0}</label>
        <div class="input-wrap">
          <input
            class="form__input"
            id=${0}
            type=${0}
            name=${0}
            autocomplete="off"
            @focus=${0}
            @input=${0}
            @blur=${0}
            @change=${0}
          />
          <span class="focus-border"></span>
          <uc-button
            class="input-clear${0}"
            buttonstyle="text"
            @mousedown=${0}
          >
            <button class="clear-icon"><uc-icon>${0}</uc-icon></button>
          </uc-button>
        </div>

        ${0}
      </div>
    `),this.haserror?" error":"",this.isfilled?" filled":"",this.id,this.label,this.id,this.inputtype,this.name,e=>{e.stopPropagation(),this.handlersInput("focus",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("input",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("blur",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("change",e.currentTarget.value)},this.show?" show":"",this._inputClear,ra,this.haserror?Object(io.c)(aa||(aa=ia` <span class="form__message">${0}</span> `),this.message):null)}handlersInput(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:t,name:this.name},bubbles:!0,composed:!0}))}}ca.styles=ta,Object(so.a)("uc-form-input",ca);let la,ua,da=e=>e;const ha={subtitle:{type:String}};class pa extends io.a{static get properties(){return ha}render(){return Object(io.c)(la||(la=da`
      <p class="subtitle">
        <slot class="subtitle-content">${0}</slot>
      </p>
    `),this.subtitle)}}pa.styles=Object(io.b)(ua||(ua=da`
    :host {
      display: block;
    }

    .subtitle {
      width: 100%;
      margin: 0;
      text-align: left;
      color: #333333;
      font-weight: 400;
      font-size: ${0};
      line-height: ${0};
    }

    .subtitle-content {
      display: inline;
    }
  `),Object(uo.a)(16),Object(uo.a)(20)),Object(so.a)("uc-form-subtitle",pa);let fa;const ma=Object(io.d)(fa||(fa=(e=>e)`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 6H42C44.2091 6 46 7.79086 46 10V38C46 40.2091 44.2091 42 42 42H6C3.79086 42 2 40.2091 2 38V10C2 7.79086 3.79086 6 6 6ZM6 19.2362V38H42V19.2371L23.9999 28.2371L6 19.2362ZM6 14.764L24 23.7649L42 14.7649V10H6V14.764Z" fill="#D2D4D8"/></svg>`));let ga;const ba=Object(io.d)(ga||(ga=(e=>e)`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46ZM24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM30.5857 16.5858L20 27.1716L15.4142 22.5858L12.5857 25.4142L20 32.8284L33.4142 19.4142L30.5857 16.5858Z" fill="#D2D4D8"/></svg>`));let va;const ya=Object(io.d)(va||(va=(e=>e)`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24ZM24.0007 35.9964C25.1056 35.9964 26.0013 35.101 26.0013 33.9964C26.0013 32.8918 25.1056 31.9964 24.0007 31.9964C22.8957 31.9964 22 32.8918 22 33.9964C22 35.101 22.8957 35.9964 24.0007 35.9964ZM26.0082 11.9964H22.0069V27.9964H26.0082V11.9964Z" fill="#D2D4D8"/></svg>`));let wa,Oa,Ea,_a,ja,xa,ka,Ca,Sa,Na=e=>e;const La={type:{type:String},message:{type:String}};class Pa extends io.a{static get properties(){return La}render(){return Object(io.c)(wa||(wa=Na`
      <div class="success">
        <span class="icon">${0}</span>
        <span class="message">${0}</span>
        <slot name="btn"></slot>
      </div>
    `),this.getIconByType(this.type),this.message)}getIconByType(e){let t;switch(e){case"forgot":t=ma;break;case"recovery":t=ba;break;case"error":t=ya;break;default:t=""}return t}}Pa.styles=Object(io.b)(Oa||(Oa=Na`
    :host {
      display: block;
      max-width: ${0};
    }
    ${0}
    ${0}
    ${0}
    
    .message {
      display: block;
      margin-bottom: ${0};
      font-weight: 500;
      color: #333333;
      text-align: center;
    }
    ${0}
    ${0}
    
    .icon {
      display: block;
      margin-bottom: ${0};
      text-align: center;
    }
    ${0}
    ${0}

    ::slotted(.actions-wrap) {
      display: flex;
      justify-content: center;
    }
  `),Object(uo.a)(580),Object(lo.l)(Object(io.b)(Ea||(Ea=Na`
      :host {
        margin-top: ${0};
      }
    `),Object(uo.a)(266))),Object(lo.e)(Object(io.b)(_a||(_a=Na`
      :host {
        margin-top: ${0};
      }
    `),Object(uo.a)(166))),Object(lo.i)(Object(io.b)(ja||(ja=Na`
      :host {
        margin-top: ${0};
      }
    `),Object(uo.a)(105))),Object(uo.a)(32),Object(lo.l)(Object(io.b)(xa||(xa=Na`
      .message {
        font-size: ${0};
        line-height: ${0};
      }
    `),Object(uo.a)(22),Object(uo.a)(28))),Object(lo.i)(Object(io.b)(ka||(ka=Na`
      .message {
        font-size: ${0};
        line-height: ${0};
      }
    `),Object(uo.a)(18),Object(uo.a)(24))),Object(uo.a)(30),Object(lo.l)(Object(io.b)(Ca||(Ca=Na`
      .icon svg {
        width: ${0};
        height: ${0};
      }
    `),Object(uo.a)(48),Object(uo.a)(48))),Object(lo.i)(Object(io.b)(Sa||(Sa=Na`
      .icon svg {
        width: ${0};
        height: ${0};
      }
    `),Object(uo.a)(32),Object(uo.a)(32)))),Object(so.a)("uc-form-success",Pa);let Ta,$a=e=>e;function Aa(){return(Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let Ra,Ma,Ia=e=>e;class Ba extends io.a{static get styles(){return Object(io.b)(Ra||(Ra=Ia`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        animation: rotate 2s linear infinite;
      }

      .circular {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        transform-origin: center center;
        animation: rotate 2s linear infinite;
      }

      .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
        stroke: #a9acb1;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
    `))}render(){return Object(io.d)(Ma||(Ma=Ia`
      <svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle></svg>
    `))}}const Da=((e,t={deferTimeout:500})=>{class n extends e{constructor(){super(),this.defer=!0,this.deferTimeout=t.deferTimeout,this.__resolved__=!1,this._timeoutID=null}connectedCallback(){super.connectedCallback(),this.__resolved__=!this.defer}firstUpdated(e){super.firstUpdated(e),this.defer&&(this._timeoutID=setTimeout(()=>this.__resolved__=!0,this.deferTimeout))}disconnectedCallback(){super.disconnectedCallback(),this._timeoutID&&clearTimeout(this._timeoutID)}render(){return this.__resolved__?super.render():Object(io.c)(Ta||(Ta=$a``))}}return n.properties=Aa({},e.properties,{defer:{type:Boolean},deferTimeout:{type:Number},__resolved__:{type:Boolean}}),n})(Ba);Object(so.a)("uc-circular-loader",Da);var qa=n("CO7v");const za={nameIsCorrect:{message:"Допустимы русские и английские буквы, пробел и дефис",pattern:/^[а-яА-ЯЁёa-zA-Z -]+$/},phoneIsCorrect:{message:"Номер телефона указан не верно",pattern:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{9,}$/},emailIsCorrect:{message:"Некорректный адрес электронной почты",pattern:/^([._-]*[A-Za-z0-9]+[._-]*){1,}@([A-Za-z0-9]+[._-]*[A-Za-z0-9]+){1,}([._-]*[A-Za-z0-9]+){0,}\.[A-Za-z]{2,4}$/},allCorrect:{message:"Все поля обязательны для заполнения"}};function Ua(e,t){return 0===e.length?"Это поле обязательно для заполнения":function(e,t){const{emailIsCorrect:n,nameIsCorrect:r,phoneIsCorrect:o}=za;switch(t){case"email":return!n.pattern.test(e)&&n.message;case"name":return!r.pattern.test(e)&&r.message;case"phone":return!o.pattern.test(e)&&o.message;default:return"Неизвестная ошибка"}}(e,t)}let Fa,Ha,Va,Ga,Wa,Ka,Ya,Za,Ja,Xa=e=>e;const Qa={sendLinkPassword:{type:Boolean},sendSuccessful:{type:Boolean},emailErr:{type:Boolean},_form:{type:Boolean},_loader:{type:Boolean},recaptchaSiteKey:{type:String}};class es extends io.a{static get properties(){return Qa}constructor(){super(),this.onSuccessRequest=e=>{e.data?this.sendLinkPassword=!this.sendLinkPassword:(this.emailErr="Email не найден. Проверьте правильность ввода email",this._inputValue="")},this._renderForm=()=>Object(io.c)(Fa||(Fa=Xa`
    <uc-form-subtitle
      subtitle="Укажите почту, чтобы получить ссылку для&nbsp;изменения пароля"
    ></uc-form-subtitle>

    <form class="form" @submit="${0}">
      <uc-form-input
        @input=${0}
        @focus=${0}
        @blur=${0}
        label="Почта"
        inputtype="email"
        name="email"
        message=${0}
        ?haserror=${0}
      ></uc-form-input>
      <div class="action-wrap">
        <uc-button buttonstyle="primary">
          <button class="form-btn">Получить ссылку</button>
        </uc-button>
      </div>
    </form>
  `),this.handleSubmit,this.handleChange,this.handleFocus,this.handleBlur,this.emailErr,this.emailErr),this._renderLoader=()=>Object(io.c)(Ha||(Ha=Xa`
    <div class="preloader">
      <uc-circular-loader></uc-circular-loader>
    </div>
  `)),this.sendLinkPassword=!0,this.sendSuccessful=!0,this.emailErr=!1,this._form=!0,this._loader=!1,this._inputName="email",this._inputValue="",this.captcha=null,this.recaptchaSiteKey=""}handleChange(e){this._inputValue=e.detail.value}handleBlur(){this._inputValidation()}handleFocus(){this.emailErr=!1,this.emailErr=""}async loadRecaptcha(){const{load:e}=await n.e(4).then(n.t.bind(null,"cg3e",7));return await e(this.recaptchaSiteKey)}firstUpdated(){this.captcha=this.loadRecaptcha()}handleSubmit(e){e.preventDefault(),this._inputValidation()||this.captcha.then(e=>{e.execute("check_email").then(e=>{Object(lo.k)("/_jcr_content/forgotPassword/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:`email=${this._inputValue}&g-recaptcha-response=${e}`}).then(this.onSuccessRequest).catch(()=>{this.sendLinkPassword=!this.sendLinkPassword,this.sendSuccessful=!1}).finally(()=>{this._loader=!1,this._form=!0}),this._form=!this._form,this._loader=!this._loader})})}_inputValidation(){return this.emailErr=Ua(this._inputValue,this._inputName),this.emailErr}render(){return Object(io.c)(Va||(Va=Xa`
      ${0}
    `),this.sendLinkPassword?Object(io.c)(Ga||(Ga=Xa`
            ${0}

            <uc-page-content>
              <div class="container">
                ${0}
                <uc-form-title title="Восстановление доступа"></uc-form-title>

                ${0} ${0}
              </div>
            </uc-page-content>
          `),lo.b.atMobile(Object(io.c)(Wa||(Wa=Xa` <div>${0}</div> `),this._renderBackButton(this.elem))),lo.b.atDesktop(this._renderBackButton(this.elem)),Object(lo.m)(this._form,this._renderForm),Object(lo.m)(this._loader,this._renderLoader)):Object(io.c)(Ka||(Ka=Xa`
            <uc-page-content>
              <div class="container">
                ${0}
              </div>
            </uc-page-content>
          `),this.sendSuccessful?Object(io.c)(Ya||(Ya=Xa`
                      <uc-form-success
                        type="forgot"
                        message="Ссылка для изменения пароля была отправлена вам на&nbsp;почту"
                      ></uc-form-success>
                    `)):Object(io.c)(Za||(Za=Xa`
                      <uc-form-success
                        type="error"
                        message="При отправке запроса произошла ошибка. Попробуйте ещё раз через несколько минут"
                      >
                        <div slot="btn" class="actions-wrap">
                          <uc-button buttonstyle="primary" buttonsize="m">
                            <button @click=${0}>Вернуться назад</button>
                          </uc-button>
                        </div>
                      </uc-form-success>
                    `),()=>this._errorSend())))}_renderBackButton(){return Object(io.c)(Ja||(Ja=Xa`
      <uc-button class="back" buttonstyle="text" buttonsize="m" @click=${0}>
        <button><uc-icon class="back-icon" size="s">${0}</uc-icon> Назад</button>
      </uc-button>
    `),()=>this._back(),qa.a)}_back(){document.dispatchEvent(new CustomEvent("form:forgotPass:close"))}_errorSend(){this.sendLinkPassword=!0}}es.styles=Qo,Object(so.a)("uc-form-forgot-password",es);let ts,ns,rs,os,as,ss,is,cs=e=>e;const ls=Object(io.b)(ts||(ts=cs`
  :host {
    position: relative;
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .container {
    max-width: ${0};
    margin-right: auto;
    margin-left: auto;
  }

  .preloader {
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    width: 64px;
    height: 64px;
    transition: opacity 0.1s ease-in-out 0s;
  }

  uc-form-password + uc-form-password {
    margin-top: ${0};
  }

  ${0}
  ${0}
      ${0}
      
      .action-wrap {
    margin-top: ${0};
  }

  .form-btn {
    height: ${0};
    font-size: ${0};
    line-height: ${0};
  }
  .form-btn[disabled] {
    cursor: default;
  }
  ${0}
  ${0}
      ${0}
`),Object(uo.a)(380),Object(uo.a)(24),Object(lo.l)(Object(io.b)(ns||(ns=cs`
    uc-form-title {
      margin-top: ${0};
      margin-bottom: ${0};
    }
  `),Object(uo.a)(80),Object(uo.a)(48))),Object(lo.h)(Object(io.b)(rs||(rs=cs`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(160))),Object(lo.i)(Object(io.b)(os||(os=cs`
    uc-form-title {
      margin-top: ${0};
      margin-bottom: ${0};
    }
  `),Object(uo.a)(40),Object(uo.a)(30))),Object(uo.a)(32),Object(uo.a)(52),Object(uo.a)(16),Object(uo.a)(52),Object(lo.l)(Object(io.b)(as||(as=cs`
    .form-btn {
      width: 100%;
    }
  `))),Object(lo.e)(Object(io.b)(ss||(ss=cs`
    .form-btn {
      width: ${0};
    }
  `),Object(uo.a)(196))),Object(lo.i)(Object(io.b)(is||(is=cs`
    .form-btn {
      width: 100%;
    }
  `))));let us;const ds=Object(io.b)(us||(us=(e=>e)`
  :host {
    display: block;
  }

  .form-row {
    position: relative;
    transition: 0.3s;
  }
  .iserror,
  .isunreliable,
  .isvalid {
    height: ${0};
  }

  .input-clear {
    display: none;
    position: absolute;
    top: 25px;
    right: 0;
  }

  .input-clear.show {
    display: block;
  }

  .clear-icon {
    width: ${0};
    height: ${0};
    background-color: transparent;
    cursor: pointer;
  }

  .input-eye-icon {
    position: absolute;
    top: 25px;
    right: ${0};
    display: block;
  }
  .hide-eye-icon {
    margin-top: -${0};
  }

  .eye-icon,
  .hide-eye-icon {
    width: ${0};
    background-color: transparent;
    cursor: pointer;
  }

  .eye-icon {
    height: ${0};
  }
  .hide-eye-icon {
    height: ${0};
  }

  .hasicon.show-password .eye-icon,
  .hasicon.show-password .hide-eye-icon {
    opacity: block;
  }

  label {
    position: absolute;
    color: var(--label-color, #a9acb1);
    font-size: ${0};
    -webkit-transform: translateY(24px);
    transform: translateY(${0});
    transform-origin: top left;
    cursor: text;
    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .filled {
    -webkit-transform: translateY(-${0}) scale(0.85);
    transform: translateY(-${0}) scale(0.8);
  }

  input {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0;
    padding-top: ${0};
    padding-right: ${0};
    padding-bottom: ${0};
    height: ${0};
    color: var(--color, #484e5c);
    font-size: ${0};
    line-height: ${0};
    background-color: transparent;
    -webkit-appearance: none;
    border: none;
    border-bottom: 1px solid var(--border-bottom-color, #a9acb1);
    border-radius: 0;
    outline: none;
  }

  .input-wrap {
    position: relative;
  }

  .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: ${0};
    background-color: #444b5b;
    transition: 0.3s;
  }

  input:focus ~ .focus-border {
    width: 100%;
  }

  .form__status {
    position: relative;
    display: none;
    width: 100%;
    text-align: left;
  }

  .iserror .form__input {
    --border-bottom-color: #e6615e;
  }
  .iserror .form__status,
  .isunreliable .form__status,
  .isvalid .form__status {
    display: block;
  }

  .form__status {
    margin-top: ${0};
    font-size: ${0};
  }

  .status-caption {
    margin-top: ${0};
    margin-bottom: ${0};
    font-size: ${0};
    line-height: ${0};
    color: #e6615e;
  }

  .status-message {
    margin: 0;
    font-size: ${0};
    line-height: ${0};
    color: #b0b0b0;
  }

  .iserror .focus-border {
    background-color: #e6615e;
  }
  .isvalid-yellow .focus-border {
    background-color: #f4be55;
  }
  .isvalid-yellow .status-caption {
    color: #f4be55;
  }
  .isvalid-yellow .form__input {
    --border-bottom-color: #f4be55;
  }
  .isvalid-green .focus-border {
    background-color: #78be20;
  }
  .isvalid-green .status-caption {
    color: #78be20;
  }
  .isvalid-green .form__input {
    --border-bottom-color: #78be20;
  }
`),Object(uo.a)(102),Object(uo.a)(18),Object(uo.a)(18),Object(uo.a)(31),Object(uo.a)(4),Object(uo.a)(26),Object(uo.a)(18),Object(uo.a)(24),Object(uo.a)(16),Object(uo.a)(24),Object(uo.a)(0),Object(uo.a)(0),Object(uo.a)(24),Object(uo.a)(60),Object(uo.a)(15),Object(uo.a)(60),Object(uo.a)(16),Object(uo.a)(16),Object(uo.a)(2),Object(uo.a)(8),Object(uo.a)(11),Object(uo.a)(8),Object(uo.a)(2),Object(uo.a)(12),Object(uo.a)(16),Object(uo.a)(12),Object(uo.a)(16));let hs;const ps=Object(io.d)(hs||(hs=(e=>e)`<svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C14.7276 0 17.3357 1.43062 19.7663 3.78115C20.5955 4.58305 21.3457 5.43916 22.0061 6.29562C22.4046 6.81244 22.6875 7.21899 22.8425 7.4612L23.1871 8L22.8425 8.5388C22.6875 8.781 22.4046 9.18756 22.0061 9.70438C21.3457 10.5608 20.5955 11.417 19.7663 12.2189C17.3357 14.5694 14.7276 16 12 16C9.27247 16 6.66434 14.5694 4.23373 12.2189C3.40451 11.417 2.65433 10.5608 1.99393 9.70438C1.59543 9.18756 1.3125 8.781 1.15759 8.5388L0.812988 8L1.15759 7.4612C1.3125 7.21899 1.59543 6.81244 1.99393 6.29562C2.65433 5.43916 3.40451 4.58305 4.23373 3.78115C6.66434 1.43062 9.27247 0 12 0ZM20.4223 7.51688C19.8176 6.73272 19.1302 5.9482 18.376 5.21885C16.2825 3.19438 14.1051 2 12 2C9.89495 2 7.71751 3.19438 5.62406 5.21885C4.86986 5.9482 4.18241 6.73272 3.57777 7.51688C3.44718 7.68624 3.32651 7.84782 3.21619 8C3.32651 8.15218 3.44718 8.31376 3.57777 8.48312C4.18241 9.26728 4.86986 10.0518 5.62406 10.7811C7.71751 12.8056 9.89495 14 12 14C14.1051 14 16.2825 12.8056 18.376 10.7811C19.1302 10.0518 19.8176 9.26728 20.4223 8.48312C20.5529 8.31376 20.6735 8.15218 20.7839 8C20.6735 7.84782 20.5529 7.68624 20.4223 7.51688ZM8.00002 8C8.00002 10.2091 9.79088 12 12 12C14.2092 12 16 10.2091 16 8C16 5.79086 14.2092 4 12 4C9.79088 4 8.00002 5.79086 8.00002 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8955 10 10 9.10457 10 8C10 6.89543 10.8955 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="#D2D4D8"/></svg>`));let fs;const ms=Object(io.d)(fs||(fs=(e=>e)`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill="#A9ACB1" d="M20.098 15.891l-1.414-1.414a21.594 21.594 0 0 0 2.1-2.477 21.328 21.328 0 0 0-2.408-2.781C16.283 7.194 14.106 6 12 6c-.522 0-1.05.074-1.578.215L8.84 4.633C9.873 4.221 10.927 4 12 4c2.728 0 5.336 1.43 7.766 3.781.83.802 1.58 1.658 2.24 2.515.399.516.682.923.836 1.165l.345.539-.345.539c-.154.242-.437.649-.836 1.165-.571.741-1.21 1.482-1.908 2.187zm-3.092 2.529C15.394 19.43 13.72 20 12 20c-2.728 0-5.336-1.43-7.766-3.781a23.305 23.305 0 0 1-2.24-2.515 17.484 17.484 0 0 1-.836-1.165L.813 12l.345-.539c.154-.242.437-.649.836-1.165.66-.857 1.41-1.713 2.24-2.515.37-.358.745-.695 1.124-1.01L1.293 2.708l1.414-1.414 20 20-1.414 1.414-4.287-4.287zM6.78 8.194c-.388.312-.773.655-1.156 1.025A21.328 21.328 0 0 0 3.216 12a21.328 21.328 0 0 0 2.408 2.781C7.717 16.806 9.894 18 12 18c1.168 0 2.359-.368 3.545-1.041l-1.513-1.513a4 4 0 0 1-5.478-5.478L6.78 8.194zm3.288 3.288a2.003 2.003 0 0 0 2.45 2.45l-2.45-2.45z"/></g></svg>`));let gs,bs,vs,ys=e=>e;class ws extends io.a{static get properties(){return{id:{type:String},label:{type:String},inputtype:{type:String},name:{type:String},value:{type:String},haserror:{type:Boolean},state:{type:String},caption:{type:String},message:{type:String},showpassword:{type:Boolean},isfilled:{type:Boolean},isPasswordDisplayed:{type:Boolean},showClearInput:{type:Boolean}}}constructor(){super(),this.id=sa(),this.inputtype="password",this.label="",this.name="",this.value="",this.haserror=!1,this.state="",this.caption="",this.message="",this.isfilled=!1,this.showClearInput=!1,this.showpassword=!1,this.isPasswordDisplayed=!1,this.input=null}firstUpdated(){this.input=this.renderRoot.querySelector("input"),this.input.addEventListener("focus",()=>{this.isfilled=!0}),this.input.addEventListener("blur",e=>{""===e.target.value&&(this.isfilled=!1,this.showClearInput=!1,this.showpassword=!1,this.haserror=!0,this.state="iserror",this.caption="Это поле обязательно для заполнения",this.message="")}),this.input.addEventListener("input",e=>{e.target.value>"0"&&(this.showClearInput=!0,this.hasicon&&(this.showpassword=!0),"password"===this.input.name&&(this.haserror=!0))})}_inputClear(e){e.preventDefault(),this.input.value="",this.value="",this.showClearInput=!1,this.showpassword=!1,this.haserror=!1,this.input.focus()}showEyeIcon(){return this.isPasswordDisplayed?Object(io.c)(gs||(gs=ys`
          <uc-button class="input-eye-icon" buttonstyle="text" @click=${0}>
            <button class="hide-eye-icon"><uc-icon>${0}</uc-icon></button>
          </uc-button>
        `),this.hidePassword,ms):Object(io.c)(bs||(bs=ys`
          <uc-button class="input-eye-icon" buttonstyle="text" @click=${0}>
            <button class="eye-icon"><uc-icon>${0}</uc-icon></button>
          </uc-button>
        `),this.showPassword,ps)}showPassword(){this.inputtype="text",this.isPasswordDisplayed=!0}hidePassword(){this.inputtype="password",this.isPasswordDisplayed=!1}render(){return Object(io.c)(vs||(vs=ys`
      <div
        class="form-row ${0}${0}${0}"
      >
        <label class="form__label${0}" for="${0}">${0}</label>
        <div class="input-wrap">
          <input
            class="form__input"
            id="${0}"
            type="${0}"
            name="${0}"
            autocomplete="off"
            value="${0}"
            @focus=${0}
            @input=${0}
            @blur=${0}
            @change=${0}
          />
          <span class="focus-border"></span>
          ${0}
          <uc-button
            class="input-clear${0}"
            buttonstyle="text"
            @mousedown=${0}
          >
            <button class="clear-icon"><uc-icon>${0}</uc-icon></button>
          </uc-button>
        </div>
        <div class="form__status">
          <p class="status-caption">${0}</p>
          <p class="status-message">${0}</p>
        </div>
      </div>
    `),this.haserror?this.state:"",this.hasicon?" hasicon":"",this.showpassword?" show-password":"",this.isfilled?" filled":"",this.id,this.label,this.id,this.inputtype,this.name,this.value,e=>{e.stopPropagation(),this.handlersInput("focus",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("input",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("blur",e.currentTarget.value)},e=>{e.stopPropagation(),this.handlersInput("change",e.currentTarget.value)},this.showpassword?this.showEyeIcon():"",this.showClearInput?" show":"",this._inputClear,ra,this.caption,this.message)}handlersInput(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:t,name:this.name},bubbles:!0,composed:!0}))}}ws.styles=ds,Object(so.a)("uc-form-password",ws);const Os=[{state:"iserror",caption:"Это поле обязательно для заполнения",message:"",pattern:/^(?=.{1,}$)/},{state:"iserror",caption:"Некорректные символы",message:"Используйте латинские буквы, цифры и символы ()@!#$%&?*",pattern:/^[A-Za-z\d!&<>!#$%()*+,\-.:;=?@[\]^_{|}~§]{1,}$/},{state:"iserror",caption:"Пароль слишком короткий",message:"Используйте минимум 6 символов",pattern:/^(?=.{6,}$)/},{state:"iserror",caption:"Пароль слишком простой",message:"Используйте также заглавные и строчные буквы",pattern:/(?=.*[a-zA-Z])/},{state:"isvalid isvalid-yellow",caption:"Ненадёжный пароль",message:"Добавьте заглавные буквы или символы ()@!#$%&?*",pattern:/(?=.*[&<>!#$%()*+,\-./:;=?@[\]^_{|}~§])|(?=.*[A-Z])|([a-z\d]{10,})/}];function Es(e){const t=Os.filter(({pattern:t})=>!t.test(e));return 0===t.length&&t.push({state:"isvalid isvalid-green",caption:"Надёжный пароль",message:"Подтвердите пароль в поле ниже"}),t}let _s,js,xs,ks,Cs,Ss,Ns=e=>e;const Ls={_form:{type:Boolean},_sendSuccess:{type:Boolean},_sendNoNameError:{type:Boolean},_sendError:{type:Boolean},_loader:{type:Boolean},passErr:{type:String},confErr:{type:String},state:{type:String},caption:{type:String},message:{type:String}};class Ps extends io.a{static get styles(){return ls}static get properties(){return Ls}constructor(){super(),this.onSuccessRequest=e=>{this._form=!1,this._loader=!1,e.errors.length>0?this._sendError=!this._sendError:e.data&&(this._sendSuccess=!this._sendSuccess)},this._renderLoader=()=>Object(io.c)(_s||(_s=Ns`
    <div class="preloader">
      <uc-circular-loader></uc-circular-loader>
    </div>
  `)),this._renderForm=()=>Object(io.c)(js||(js=Ns`
    <uc-form-title title="Новый пароль"></uc-form-title>
    <form class="form" @submit="${0}" method="post">
      <uc-form-password
        @input=${0}
        @blur=${0}
        label="Пароль"
        inputtype="password"
        name="password"
        state=${0}
        caption=${0}
        message=${0}
        ?haserror=${0}
        .hasicon=${0}
      ></uc-form-password>
      <uc-form-password
        @input=${0}
        @blur=${0}
        label="Подтверждение пароля"
        inputtype="password"
        name="confirm"
        state=${0}
        caption=${0}
        ?haserror=${0}
      ></uc-form-password>
      <div class="action-wrap">
        <uc-button buttonstyle="primary">
          <button class="form-btn">Сохранить</button>
        </uc-button>
      </div>
    </form>
  `),this.handleSubmit,this.handleChangePassword,this.handleBlurPassword,this.passState,this.passCaption,this.passMessage,this.passErr,this.hasicon,this.handleChangeConfirm,this.handleBlurConfirm,this.confState,this.confCaption,this.confErr),this._renderSuccessSend=()=>Object(io.c)(xs||(xs=Ns`
    <uc-form-success type="recovery" message="Пароль успешно изменён">
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button class="btn" @click=${0}>Войти в личный кабинет</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._goToAuth()),this._renderNoNameErrorSend=()=>Object(io.c)(ks||(ks=Ns`
    <uc-form-success
      type="error"
      message="При отправке запроса произошла ошибка. Попробуйте ещё раз через несколько минут"
    >
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button @click=${0}>Вернуться назад</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._errorSend()),this._renderErrorSend=()=>Object(io.c)(Cs||(Cs=Ns`
    <uc-form-success type="error" message="Ссылка для изменения пароля устарела, запросите новую ссылку">
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button @click=${0}>Восстановить пароль</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._goToForgotPassword()),this._form=!0,this._sendSuccess=!1,this._sendNoNameError=!1,this._sendError=!1,this._loader=!1,this.hasicon=!0,this.passErr=!1,this.confErr=!1,this.state="",this.message="",this._inputPasswordValue="",this._inputConfirmValue="",this.token=""}firstUpdated(){this.token=window.location.href.split("token")[1]}handleChangePassword(e){this._inputPasswordValue=e.detail.value,this._inputPasswordValid()}handleBlurPassword(){this._inputPasswordValid()}_inputPasswordValid(){this.passErr=Es(this._inputPasswordValue);const{state:e,caption:t,message:n}=this.passErr[0];this.passState=e,this.passCaption=t,this.passMessage=n}handleBlurConfirm(e){this._inputConfirmValue=e.detail.value,this._inputConfirmValid()}handleChangeConfirm(){this.confErr=!1}_inputConfirmValid(){switch(this._inputConfirmValue){case"":this.confErr=!0,this.confState="iserror",this.confCaption="Это поле обязательно для заполнения";break;case this._inputPasswordValue:this.confErr=!1,this.confState="",this.confCaption="";break;default:this.confErr=!0,this.confState="iserror",this.confCaption="Пароли не совпадают"}this._inputConfirmValue.length<6&&(this.confErr=!0)}handleSubmit(e){e.preventDefault(),this._inputPasswordValid(),this._inputConfirmValid(),this.confErr||"isvalid isvalid-yellow"!==this.passState&&"isvalid isvalid-green"!==this.passState||(Object(lo.k)("/_jcr_content/resetPassword/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:`password=${this._inputPasswordValue}&token${this.token}`}).then(this.onSuccessRequest).catch(()=>{this._form=!1,this._loader=!1,this._sendNoNameError=!this._sendNoNameError}),this._form=!1,this._loader=!0,this.passState=!1,this._inputPasswordValue="",this._inputConfirmValue="")}render(){return Object(io.c)(Ss||(Ss=Ns`
      <uc-page-content>
        <div class="container">
          ${0} ${0}
          ${0}
          ${0} ${0}
        </div>
      </uc-page-content>
    `),Object(lo.m)(this._form,this._renderForm),Object(lo.m)(this._sendSuccess,this._renderSuccessSend),Object(lo.m)(this._sendNoNameError,this._renderNoNameErrorSend),Object(lo.m)(this._sendError,this._renderErrorSend),Object(lo.m)(this._loader,this._renderLoader))}_goToAuth(){document.dispatchEvent(new CustomEvent("form:auth:open"))}_goToForgotPassword(){document.dispatchEvent(new CustomEvent("form:forgotPass:open"))}_errorSend(){this._form=!0,this._sendNoNameError=!this._sendNoNameError}}Object(so.a)("uc-form-password-recovery",Ps);let Ts,$s,As,Rs,Ms,Is,Bs,Ds,qs,zs=e=>e;const Us=Object(io.b)(Ts||(Ts=zs`
  :host {
    position: relative;
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .container {
    max-width: ${0};
    margin-right: auto;
    margin-left: auto;
  }

  .preloader {
    margin-top: 70px;
    margin-right: auto;
    margin-left: auto;
    width: 64px;
    height: 64px;
    transition: opacity 0.1s ease-in-out 0s;
  }

  uc-form-password + uc-form-password {
    margin-top: ${0};
  }

  ${0}
  ${0}
      ${0}
      
      uc-form-subtitle {
    margin-top: ${0};
  }
  ${0}
  ${0}
      
      .action-wrap {
    margin-top: ${0};
  }

  .form-btn {
    height: ${0};
    font-size: ${0};
    line-height: ${0};
  }
  .form-btn[disabled] {
    cursor: default;
  }
  ${0}
  ${0}
      ${0}
`),Object(uo.a)(380),Object(uo.a)(24),Object(lo.l)(Object(io.b)($s||($s=zs`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(80))),Object(lo.h)(Object(io.b)(As||(As=zs`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(160))),Object(lo.i)(Object(io.b)(Rs||(Rs=zs`
    uc-form-title {
      margin-top: ${0};
    }
  `),Object(uo.a)(40))),Object(uo.a)(12),Object(lo.l)(Object(io.b)(Ms||(Ms=zs`
    uc-form-subtitle {
      margin-bottom: ${0};
    }
  `),Object(uo.a)(48))),Object(lo.i)(Object(io.b)(Is||(Is=zs`
    uc-form-subtitle {
      margin-bottom: ${0};
    }
  `),Object(uo.a)(32))),Object(uo.a)(32),Object(uo.a)(52),Object(uo.a)(16),Object(uo.a)(52),Object(lo.l)(Object(io.b)(Bs||(Bs=zs`
    .form-btn {
      width: 100%;
    }
  `))),Object(lo.e)(Object(io.b)(Ds||(Ds=zs`
    .form-btn {
      width: ${0};
    }
  `),Object(uo.a)(196))),Object(lo.i)(Object(io.b)(qs||(qs=zs`
    .form-btn {
      width: 100%;
    }
  `))));let Fs,Hs,Vs,Gs,Ws,Ks,Ys=e=>e;const Zs={_sendSuccess:{type:Boolean},_sendNoNameError:{type:Boolean},_sendError:{type:Boolean},_loader:{type:Boolean},passErr:{type:String},confErr:{type:String},state:{type:String},caption:{type:String},message:{type:String}};class Js extends io.a{static get styles(){return Us}static get properties(){return Zs}constructor(){super(),this.onSuccessRequest=e=>{this._form=!1,this._loader=!1,e.errors.length>0?this._sendError=!this._sendError:e.data&&(this._sendSuccess=!this._sendSuccess)},this._renderLoader=()=>Object(io.c)(Fs||(Fs=Ys`
    <div class="preloader">
      <uc-circular-loader></uc-circular-loader>
    </div>
  `)),this._renderForm=()=>Object(io.c)(Hs||(Hs=Ys`
    <uc-form-title title="Завершение регистрации"></uc-form-title>
    <uc-form-subtitle subtitle="Придумайте пароль для входа в личный кабинет"></uc-form-subtitle>
    <form class="form" @submit="${0}" method="post">
      <uc-form-password
        @input=${0}
        @blur=${0}
        label="Пароль"
        inputtype="password"
        name="password"
        state=${0}
        caption=${0}
        message=${0}
        ?haserror=${0}
        .hasicon=${0}
      ></uc-form-password>
      <uc-form-password
        @input=${0}
        @blur=${0}
        label="Подтверждение пароля"
        inputtype="password"
        name="confirm"
        state=${0}
        caption=${0}
        ?haserror=${0}
      ></uc-form-password>
      <div class="action-wrap">
        <uc-button buttonstyle="primary">
          <button class="form-btn">Завершить</button>
        </uc-button>
      </div>
    </form>
  `),this.handleSubmit,this.handleChangePassword,this.handleBlurPassword,this.passState,this.passCaption,this.passMessage,this.passErr,this.hasicon,this.handleChangeConfirm,this.handleBlurConfirm,this.confState,this.confCaption,this.confErr),this._renderSuccessSend=()=>Object(io.c)(Vs||(Vs=Ys`
    <uc-form-success type="recovery" message="Вы успешно зарегистрировались">
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button class="btn" @click=${0}>Войти в личный кабинет</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._goToAuth()),this._renderNoNameErrorSend=()=>Object(io.c)(Gs||(Gs=Ys`
    <uc-form-success
      type="error"
      message="При отправке запроса произошла ошибка. Попробуйте ещё раз через несколько минут"
    >
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button @click=${0}>Вернуться назад</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._errorSend()),this._renderErrorSend=()=>Object(io.c)(Ws||(Ws=Ys`
    <uc-form-success type="error" message="Ссылка для создания пароля устарела, запросите новую ссылку">
      <div slot="btn" class="actions-wrap">
        <uc-button buttonstyle="primary" buttonsize="m">
          <button @click=${0}>Получить ссылку</button>
        </uc-button>
      </div>
    </uc-form-success>
  `),()=>this._goToForgotPassword()),this._form=!0,this._sendSuccess=!1,this._sendNoNameError=!1,this._sendError=!1,this._loader=!1,this.hasicon=!0,this.passErr=!1,this.confErr=!1,this.state="",this.message="",this._inputPasswordValue="",this._inputConfirmValue="",this.token=""}firstUpdated(){const e=window.location.href.split("token")[1];this.token=e}handleChangePassword(e){this._inputPasswordValue=e.detail.value,this._inputPasswordValid()}handleBlurPassword(){this._inputPasswordValid()}_inputPasswordValid(){this.passErr=Es(this._inputPasswordValue);const{state:e,caption:t,message:n}=this.passErr[0];this.passState=e,this.passCaption=t,this.passMessage=n}handleBlurConfirm(e){this._inputConfirmValue=e.detail.value,this._inputConfirmValid()}handleChangeConfirm(e){this._inputConfirmValue=e.detail.value,this.confErr=!1}_inputConfirmValid(){switch(this._inputConfirmValue){case"":this.confErr=!0,this.confState="iserror",this.confCaption="Это поле обязательно для заполнения";break;case this._inputPasswordValue:this.confErr=!1,this.confState="",this.confCaption="";break;default:this.confErr=!0,this.confState="iserror",this.confCaption="Пароли не совпадают"}this._inputConfirmValue.length<6&&(this.confErr=!0)}handleSubmit(e){e.preventDefault(),this._inputPasswordValid(),this._inputConfirmValid(),this.confErr||"isvalid isvalid-yellow"!==this.passState&&"isvalid isvalid-green"!==this.passState||(Object(lo.k)("/bin/api/ActivateAccountServlet",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:`password=${this._inputPasswordValue}&token${this.token}`}).then(this.onSuccessRequest).catch(()=>{this._form=!1,this._loader=!1,this._sendNoNameError=!this._sendNoNameError}),this._form=!1,this._loader=!0,this.passState=!1,this._inputPasswordValue="",this._inputConfirmValue="")}render(){return Object(io.c)(Ks||(Ks=Ys`
      <uc-page-content>
        <div class="container">
          ${0} ${0}
          ${0}
          ${0} ${0}
        </div>
      </uc-page-content>
    `),Object(lo.m)(this._form,this._renderForm),Object(lo.m)(this._sendSuccess,this._renderSuccessSend),Object(lo.m)(this._sendNoNameError,this._renderNoNameErrorSend),Object(lo.m)(this._sendError,this._renderErrorSend),Object(lo.m)(this._loader,this._renderLoader))}_goToAuth(){document.dispatchEvent(new CustomEvent("form:auth:open"))}_goToForgotPassword(){document.dispatchEvent(new CustomEvent("form:forgotPass:open"))}_errorSend(){this._form=!0,this._sendNoNameError=!this._sendNoNameError}}Object(so.a)("uc-form-express-registration",Js);let Xs,Qs,ei,ti,ni,ri=e=>e;const oi={_show:{type:Boolean},_auth:{type:Boolean},_forgot:{type:Boolean},_recovery:{type:Boolean},_express:{type:Boolean},homePath:{type:String},initUrl:{type:String},recaptchaSiteKey:{type:String}};class ai extends io.a{static get properties(){return oi}constructor(){super(),this._renderLogin=()=>Object(io.c)(Xs||(Xs=ri`
    <uc-form-login homePath="${0}" initUrl="${0}"></uc-form-login>
  `),this.homePath,this.initUrl),this._renderForgotPassword=()=>Object(io.c)(Qs||(Qs=ri`
    <uc-form-forgot-password recaptchaSiteKey=${0}></uc-form-forgot-password>
  `),this.recaptchaSiteKey),this._renderRecoveryPassword=()=>Object(io.c)(ei||(ei=ri` <uc-form-password-recovery></uc-form-password-recovery> `)),this._renderExpressRegistration=()=>Object(io.c)(ti||(ti=ri` <uc-form-express-registration></uc-form-express-registration> `)),this._onClose=()=>{this._show=!1,this._auth=!1,this._forgot=!1,this._recovery=!1,this._express=!1},this._auth=!1,this._forgot=!1,this._recovery=!1,this._express=!1}connectedCallback(e){super.connectedCallback();const{hash:t}=window.location;"#auth"===t&&(this._show=!0,this._auth=!0);window.location.href.replace(/\?/,"").match("auth_popup=yes")&&(this._show=!0,this._recovery=!0);window.location.href.replace(/\?/,"").match("password_popup=yes")&&(this._show=!0,this._forgot=!0);window.location.href.replace(/\?/,"").match("pre_creation_popup=yes")&&(this._show=!0,this._express=!0)}render(){return Object(io.c)(ni||(ni=ri`
      <uc-overlay ?show=${0} @close=${0}>
        ${0} ${0}
        ${0}
        ${0}
      </uc-overlay>
    `),this._show,this._onClose,Object(lo.m)(this._auth,this._renderLogin),Object(lo.m)(this._forgot,this._renderForgotPassword),Object(lo.m)(this._recovery,this._renderRecoveryPassword),Object(lo.m)(this._express,this._renderExpressRegistration))}}const si=((e,t,n)=>{const r=e=>document.dispatchEvent(new CustomEvent(t,{detail:e}));return class extends e{connectedCallback(){super.connectedCallback(),r(this[n])}updated(e){super.updated(e),e.has(n)&&r(this[n])}}})(Object(co.a)(ai,[{event:"form:auth:open",handler:(e,t)=>{t._show=!0,t._auth=!0,t._recovery=!1,t._express=!1}},{event:"form:forgotPass:open",handler:(e,t)=>{t._show=!0,t._forgot=!0,t._auth=!1,t._recovery=!1,t._express=!1}},{event:"form:forgotPass:close",handler:(e,t)=>{t._auth=!0,t._forgot=!1}},{event:"form:reversePass:open",handler:(e,t)=>{t._show=!0,t._recovery=!0}},{event:"form:expressRegistration:open",handler:(e,t)=>{t._show=!0,t._express=!0}}]));function ii(){return(ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object(so.a)("uc-form-authorization",si),Object(a.b)("header-footer/header",e=>{var t;const n=Object(s.b)(),r=Object(i.a)();return r.dispatch(c.a.setRequestParams,{orchestratorHost:e.orchestratorHost,useCredentials:e.useCredentials,apiKey:e.apiKey}),r.dispatch(c.a.setRequestID,{requestID:e.requestID}),r.dispatch(c.a.setIsBot,e.isBot),r.dispatch(c.a.setUserAgent,e.userAgent),r.dispatch(l.a.set,document.cookie),r.dispatch(u.a.success,null!==(t=e.model)&&void 0!==t?t:void 0),e=>o.a.createElement(ao,ii({router:n,store:r},e))})},uFCc:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));let r;r="undefined"!=typeof navigator&&"ReactNative"!==navigator.product?(e,t,n)=>{void 0!==n?console.log("%c"+e+" %c"+t,"color: #070","color: #070; font-weight: 700",n):console.log("%c"+e+" %c"+t,"color: #070","color: #070; font-weight: 700")}:(e,t,n)=>{void 0!==n?console.log(e,t,n):console.log(e,t)};var o=n("XH0y"),a=n.n(o),s=n("2FAm");const i={headers:{"Content-Type":"application/json"}};function c(e){return"string"==typeof e&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(e)?e:JSON.stringify(e)}function l(e){return"string"==typeof e&&e.includes("application/json")}class u{constructor(){this._source=new AbortController,this._token=this._source.signal}get token(){return this._token}cancel(){this._source.abort()}}const d=class{constructor(e=i){this.isCancel=e=>"AbortError"===e.name,this.defaultConfig={...i,...e},this.core="undefined"!=typeof window?window.fetch.bind(window):fetch}abortController(){return new u}request(e,t){const n=function e(t,n){const r=Object.keys(t),o=Object.keys(n),a=r.filter(e=>o.includes(e)&&"object"==typeof t[e]&&"object"==typeof n[e]),s={};return a.forEach(r=>{s[r]=e(t[r],n[r])}),{...t,...n,...s}}(this.defaultConfig,t),{baseURL:r="",params:o={}}=n,a=r+e+function(e){const t=e,n=new URLSearchParams;for(const[e,r]of Object.entries(t))n.set(e,String(r));return n.toString()}(o),s=this.convertServerConfigToClient(n);return this.core(a,s).then(t=>this.convertClientResponse(e,t,n)).catch(e=>this.throwError(e,n))}get(e,t){return this.request(e,{...t,method:"GET"})}delete(e,t){return this.request(e,{...t,method:"DELETE"})}post(e,t,n){return this.request(e,{...n,data:t,method:"POST"})}put(e,t,n){return this.request(e,{...n,data:t,method:"PUT"})}patch(e,t,n){return this.request(e,{...n,data:t,method:"PATCH"})}convertServerConfigToClient(e){const t=-1!==(e.headers&&e.headers["Content-Type"]||"").indexOf("application/json");return{method:e.method,body:t?c(e.data):e.data,headers:e.headers,signal:e.cancelToken,credentials:e.withCredentials?"include":"same-origin"}}async convertClientResponse(e,t,n){let r;if(t instanceof Error)this.throwError(t,n);else{r={data:await async function(e){let t=null,n=e.headers.get("Content-type");return l(n)?t=await e.json():function(e){return"string"==typeof e&&e.includes("text/plain")}(n)&&(t=await e.text()),t}(t),status:t.status,statusText:t.statusText,headers:t.headers,config:n,request:null}}return r}throwError(e,t){const n={config:t,request:void 0};let r;if("object"==typeof e&&"response"in e){const{response:t}=e;r={name:"",stack:"",message:"",response:t,...n}}else{const{message:t,stack:o,name:a}=e;r={message:t,stack:o,name:a,...n}}throw r}};class h extends Error{constructor(e="",t="other"){super(e),this.status=void 0,this.message=void 0,this.status=t,this.message=e}}const p=["useCredentials","requestID","apiKey"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const m=new d({headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json;charset=UTF-8"}}),g=new class{constructor(e){this.http=void 0,this.abortController=()=>this.http.abortController(),this.post=(e,t,n)=>this._doFetch(b(n.orchestratorHost,e),f({method:"POST",data:t,headers:null==n?void 0:n.headers},n)),this.get=(e,t,n)=>{const r=new URLSearchParams(t).toString(),o=`${b(n.orchestratorHost,e)}?${r}`;return this._doFetch(o,f({method:"GET"},n))},this.http=e}_doFetch(e,t){const n=/^\/\//.test(e)?"https:"+e:e,{useCredentials:r,requestID:o,apiKey:a}=t,s=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,p);return s.withCredentials=r,o&&(s.headers=f({},s.headers,{"x-request-id":o})),a&&(s.headers=f({},s.headers,{"x-api-key":a})),this.http.request(n,s).then(e=>200===e.status?e:Promise.reject(e)).then(e=>e.data).catch(e=>{var t;if(e.status>=400)throw new h(null===(t=e.data)||void 0===t?void 0:t.message,e.status);return Promise.reject(e.response)})}}(m);function b(e,t){return new URL(t,e).toString()}function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=n("ZFBY"),w=n("Tn0p"),O=n("MZ1S");const E=[e=>{e.on("@init",()=>({model:null})),e.on(s.a.init,(t,{host:n,url:r})=>{const{modelLoading:o,orchestratorHost:i,useCredentials:c,apiKey:l,requestID:u}=e.get();if(o)return Promise.resolve();e.dispatch(s.a.request);const d=Object(y.a)(n),h=Object(w.a)(d),p=Object(O.a)(d,h),f=r.indexOf("?"),m=-1===f?r:r.substring(0,f);return a.a.info("Fetch model initialised by HF","requestID: ",u,"dateNow: ",Date.now()),((e,t)=>{const n=e.pathname.includes("/checkout/success/")?v({},e,{pathname:"/checkout/success/"}):e,r=n.pathname.includes("/product/")?"v2/get-model":"getModel";return g.get(r,n,t)})({pathname:m,region:p},{orchestratorHost:i,useCredentials:c,apiKey:l,requestID:u}).then(t=>{a.a.info("Model successfully fetched by HF","requestID: ",u,"dateNow: ",Date.now());const{properties:n,regions:r,experiments:o,header:i,footer:c,mobileApp:l}=void 0!==t.modelJson?t.modelJson:t;e.dispatch(s.a.success,{properties:n,regions:r,experiments:o,header:i,footer:c,mobileApp:l})}).catch(t=>e.dispatch(s.a.failure,t))}),e.on(s.a.failure,e=>(a.a.error("Failed to fetch model for HF","requestID: ",e.requestID,"dateNow: ",Date.now()),{model:null})),e.on(s.b,()=>null),e.on(s.a.success,(e,t)=>({model:t}))},e=>{e.on("@init",()=>({modelLoading:!1})),e.on(s.a.success,()=>({modelLoading:!1})),e.on(s.a.failure,()=>({modelLoading:!1})),e.on(s.a.request,()=>({modelLoading:!0}))},e=>{e.on("@init",()=>({modelError:null})),e.on(s.a.request,()=>({modelError:null})),e.on(s.a.success,()=>({modelError:null})),e.on(s.a.failure,(e,t)=>({modelError:t}))}];var _=n("0Phq");function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const x=[e=>{e.on("@init",e=>j({},e,{orchestratorHost:"",useCredentials:!0,requestID:"",isBot:!1,userAgent:""})),e.on(_.a.setRequestParams,(e,{orchestratorHost:t,useCredentials:n,apiKey:r})=>j({},e,{orchestratorHost:t,useCredentials:n,apiKey:r})),e.on(_.a.setRequestID,(e,{requestID:t})=>j({},e,{requestID:t})),e.on(_.a.setIsBot,(e,t)=>j({},e,{isBot:t})),e.on(_.a.setUserAgent,(e,t)=>j({},e,{userAgent:t}))}];var k=n("1yRy");function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=n("7isM");function N(e=5){return Object(S.a)(e)}function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const P=e=>{e.on("@init",()=>({suggestions:{suggestions:null,error:!1,loading:!1}})),e.on(k.a.init,(t,n)=>{const{orchestratorHost:r,useCredentials:o,apiKey:a,requestID:s}=e.get();return e.dispatch(k.a.request,!0),((e,t)=>g.get("getSuggestions",C({},e),t))(n,{orchestratorHost:r,useCredentials:o,apiKey:a,requestID:s}).then(t=>e.dispatch(k.a.success,{products:t.products.map(e=>{var t;return L({},e,{id:null!==(t=e.id)&&void 0!==t?t:N()})}),services:t.services.map(e=>{var t;return L({},e,{serviceId:null!==(t=e.serviceId)&&void 0!==t?t:N()})})})).catch(()=>e.dispatch(k.a.failure,!0))}),e.on(k.a.request,e=>({suggestions:L({},e.suggestions,{loading:!0,error:!1})})),e.on(k.a.success,(e,t)=>{var n,r;const{products:o=[],services:a=[]}=t;return{suggestions:{suggestions:{products:o.length>0?o:(null===(n=e.suggestions.suggestions)||void 0===n?void 0:n.products)||[],services:a.length>0?a:(null===(r=e.suggestions.suggestions)||void 0===r?void 0:r.services)||[]},loading:!1,error:!1}}}),e.on(k.a.failure,()=>({suggestions:{suggestions:null,loading:!1,error:!0}})),e.on(k.b,e=>null!=e.suggestions.suggestions?{suggestions:{suggestions:{products:e.suggestions.suggestions.products,services:[]},loading:e.suggestions.loading,error:e.suggestions.error}}:e)};var T=n("9ONQ"),$=n("vB/t");function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const R=e=>{e.on("@init",e=>A({},e,{cookies:{}})),e.on($.a.set,(e,t)=>A({},e,{cookies:new T.a(t).getAll({doNotParse:!0})})),e.on($.a.update,(e,{key:t,value:n,params:r})=>{const o=new T.a(e.cookies);return o.set(t,n,r),A({},e,{cookies:o.getAll()})})};var M=n("Z0/C");const I=e=>{e.on(M.a.request,async()=>{const{requestID:t,model:n}=e.get();var r,o;n&&(await(o={orchestratorHost:(null==n||null===(r=n.header)||void 0===r?void 0:r.logoutUrl)||"",requestID:t,useCredentials:!0},g.get("/identity/logout",{},o)),e.dispatch(M.a.success))}),e.on(M.a.success,()=>{const{model:t}=e.get();var n;t&&(window.location.href=(null==t||null===(n=t.header)||void 0===n?void 0:n.home)||"")})};var B=n("wVn1");function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const q=e=>{e.on("@init",e=>D({},e,{catalogue:{chunks:{},error:!1,loading:!1}})),e.on(B.a.request,(t,{region:n,path:r})=>{const{orchestratorHost:o,useCredentials:a,apiKey:s,requestID:i}=e.get();return((e,t,n)=>g.get("get-flex-catalogue",{region:e,path:t},n))(n,r,{orchestratorHost:o,useCredentials:a,apiKey:s,requestID:i}).then(t=>e.dispatch(B.a.success,{data:t,path:r})).catch(()=>e.dispatch(B.a.failure,r)),D({},t,{catalogue:{chunks:D({},t.catalogue.chunks,{[r]:null}),loading:!0,error:!1}})}),e.on(B.a.success,(e,{data:t,path:n})=>D({},e,{catalogue:{chunks:D({},e.catalogue.chunks,{[n]:t}),loading:!1,error:!1}})),e.on(B.a.failure,(e,t)=>D({},e,{catalogue:{chunks:D({},e.catalogue.chunks,{[t]:null}),loading:!1,error:!0}}))};var z=n("abLE"),U=n("e4yP"),F=n("mwXK"),H=n("Hz6d");function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function G(){return(G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const W=e=>{e.on("@init",e=>G({},e,{dy:{isLoad:!1}})),e.on(z.a.init,t=>{const n={isLoad:!1};return Object(U.a)().then(()=>{n.isLoad=!0,F.a.setDYSSVars();const{cookies:t}=e.get();if(Object(H.d)(t)){const e=Object(H.c)(t),{userEmailHash:n}=F.a.getCookieItemObject(e);F.a.login(n)}const{orchestratorHost:r,useCredentials:o,apiKey:a,requestID:s,model:i,userAgent:c}=e.get(),l=null==i?void 0:i.properties.regionId;if(l&&c.length>0&&F.a.isNeedCartSync()){const e=window.layers.basket.getBasket(),t=e.map(({code:e})=>e);(u={products:t.join(","),regionId:String(l)},d={orchestratorHost:r,useCredentials:o,apiKey:a,requestID:s},g.get("get-products-price-by-id",V({},u),d)).then(t=>{const n=e.reduce((e,n)=>{const{code:r,quantity:o}=n;return r in t&&e.push({productId:r,quantity:o,itemPrice:t[r]}),e},[]);F.a.syncCart(n)})}var u,d}).catch(()=>{n.isLoad=!1}),G({},t,n)})},K=()=>(e=>{let t={},n={},r={dispatch(e,o){if("@dispatch"!==e&&r.dispatch("@dispatch",[e,o,t[e]]),t[e]){let a,s={};t[e].forEach(e=>{let t=e(n,o);t&&"function"!=typeof t.then&&(a=n={...n,...t},s={...s,...t})}),a&&r.dispatch("@changed",s)}},get:()=>n,on:(e,n)=>((t[e]||(t[e]=[])).push(n),()=>{t[e]=t[e].filter(e=>e!==n)})};return e.forEach(e=>{e&&e(r)}),r.dispatch("@init"),r})([...E,...x,P,R,I,q,W,!1,!1])},v3Fk:function(e,t,n){e.exports={"text-primary":"#333","text-secondary":"#666","text-minor":"#999","text-invert":"#fff","background-accent":"#2e323d","background-secondary":"#f2f3f5","background-primary":"#fff","control-primary":"#464c5c","control-secondary":"#ced0d6","control-minor":"#e8e9eb","control-invert":"#fff","control-secondary-invert":"#ffffff66","control-minor-invert":"#ffffff28","control_hover-primary":"#1c212e","control_hover-secondary":"#a9adb8","control_hover-minor":"#dcdde0","control_hover-primary-invert":"#ffffffea","control_hover-secondary-invert":"#ffffff7f","control_hover-minor-invert":"#ffffff3d","success-primary":"#5ab030","success-dark":"#488c26","success-light":"#deefd5","brand-primary":"#5ab030","brand-dark":"#488c26","brand-light":"#deefd5","brand-minor":"#000","brand-invert":"#fff","accent-primary":"#f4be55","accent-dark":"#c39844","accent-light":"#fcf2dd","attention-primary":"#e6615e","attention-dark":"#b84d4b","attention-light":"#fadfde","secondary-green_primary":"#00b2a9","secondary-green_dark":"#008e87","secondary-green_light":"#ccefed","secondary-blue_primary":"#3d6be3","secondary-blue_dark":"#3b59a4","secondary-blue_light":"#d1deff","secondary-orange_primary":"#d95e00","secondary-orange_dark":"#ad4b00","secondary-orange_light":"#f7decc","secondary-purple_primary":"#8961a5","secondary-purple_dark":"#6d4d84","secondary-purple_light":"#e7dfed","secondary-yellow_primary":"#ffe55a","secondary-yellow_dark":"#ccb748","secondary-yellow_light":"#fff9de"}},"vB/t":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={set:"cookiesEvents/set",update:"cookiesEvents/update"}},wB4c:function(e,t,n){},wHal:function(e,t,n){"use strict";function r(e,t,n){const r=e<n?e:n,o=e<n?n:e;return Math.max(r,Math.min(o,t))}n.d(t,"a",(function(){return r}))},wVn1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={request:"catalogue/FETCH_CATALOGUE/request",success:"catalogue/FETCH_CATALOGUE/success",failure:"catalogue/FETCH_CATALOGUE/failure",cancel:"catalogue/FETCH_CATALOGUE/cancel"}},wfSj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cDcd");const o=e=>Object(r.useEffect)(e,[])},wnWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n("cDcd"),o=n.n(r),a=n("iuhU"),s=n("PPLs"),i=n.n(s),c=(n("lfCk"),n("aCcD")),l=n.n(c);const u=Object(r.forwardRef)((function({className:e="",children:t,withExtraClickZone:n,as:s="button",rel:i="noopener noreferrer",disabled:c,...u},d){const h=Object(r.useMemo)(()=>Object(a.a)(l.a.button,e,n&&l.a.extraClickZone),[e,n]);let p=s,f={};var m;("button"===p&&u.href&&(p="a"),u.href&&(f.rel=i),"button"===p)?(f.type=null!=(m=u.type)?m:"button",f.disabled=c):("a"===p&&u.href||(f.role="button"),c&&(f["aria-disabled"]=c));return o.a.createElement(p,Object.assign({ref:d,className:h,"data-testid":"button"},f,u),t)}));var d=n("fDmc");const h=Object(r.forwardRef)((function({className:e="",variant:t="primary",children:n,size:s,label:c,"aria-label":l,...h},f){const m=Object(r.useMemo)(()=>Object(a.a)(i.a.iconButton,i.a[t],e),[t,e]),g=s?p[s]:0;return o.a.createElement(u,Object.assign({className:m,ref:f,withExtraClickZone:!0,"aria-label":null!=c?c:l},h),o.a.createElement(d.a,{size:g},n))})),p={s:16,m:20,l:24};var f=n("svax"),m=n.n(f);const g=Object(r.forwardRef)((function({className:e="",variant:t="normal",children:n,size:s,iconLeft:i,iconRight:c,...l},h){const p=Object(r.useMemo)(()=>Object(a.a)(m.a.linkButton,m.a[t],e,s&&m.a[s]),[s,t,e]),f=s?b[s]:0;return o.a.createElement(u,Object.assign({ref:h,className:p},l),i&&o.a.createElement(d.a,{size:f,className:m.a.iconLeft},i),n,c&&o.a.createElement(d.a,{size:f,className:m.a.iconRight},c))})),b={s:20,m:24};var v=n("/uc9"),y=n.n(v);const w=Object(r.forwardRef)((function({iconLeft:e,children:t,iconRight:n,wide:s,rounded:i,iconOnly:c,className:l,size:h,variant:p,label:f,"aria-label":m,...g},b){const v=Object(r.useMemo)(()=>Object(a.a)(y.a.regularButton,l,p&&y.a[p],h&&y.a[h],s&&y.a.wide,i&&y.a.rounded,c&&y.a.square),[h,p,l,i,c,s]),w=h?O[h]:0;return o.a.createElement(u,Object.assign({ref:b,className:v,"aria-label":null!=f?f:m},g),o.a.createElement("span",{className:y.a.contentWrap},e&&o.a.createElement(d.a,{size:w,className:y.a.iconLeft},e),c?o.a.createElement(d.a,{size:w},t):t,n&&o.a.createElement(d.a,{size:w,className:y.a.iconRight},n)))})),O={s:20,m:20,l:24},E=Object(r.forwardRef)((function({kind:e,...t},n){switch(e){case"regular":return o.a.createElement(w,Object.assign({ref:n},t));case"link":return o.a.createElement(g,Object.assign({ref:n},t));case"icon":return o.a.createElement(h,Object.assign({ref:n},t));default:return o.a.createElement(u,Object.assign({ref:n},t))}}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xCns:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var r="data-focus-lock",o="data-focus-lock-disabled",a="data-no-focus-lock",s="data-autofocus-inside"},xdBz:function(e,t,n){},xmLS:function(e,t,n){},y4Lc:function(e,t,n){},yNQq:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"i",(function(){return g}));const r=["body","frame","iframe","img","link","script","style"];function o(e){return new Promise(t=>{const n=e.toHTMLElement();r.indexOf(e.type)>-1?n.onload=()=>{t()}:t(),document.head.appendChild(n)})}async function a(e){const t=document.head||document.querySelector("head");if(void 0!==e.styles&&e.styles.forEach(n=>{let r=n.props.href;r.startsWith("http://")||r.startsWith("https://")||(r=e.cdnUrl+r,n.props.href=new URL(r).toString());return t.querySelectorAll(`link[src="${n.props.href}"]`).length?Promise.resolve():o(n)}),void 0!==e.scripts){const n=e.scripts.map(n=>{let r=n.props.src;r.startsWith("http://")||r.startsWith("https://")||(r=e.cdnUrl+r,n.props.src=new URL(r).toString());return t.querySelectorAll(`script[src="${n.props.src}"]`).length?Promise.resolve():o(n)});await Promise.all(n)}return e}const s=(e,t=!0)=>t?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):String(e);function i(e,t=" "){return Array.isArray(e)?e.join(t):e.toString()}function c(e){let t=0;if(0==e.length)return String(t);for(let n=0;n<e.length;n++){t=(t<<7)-t+e.charCodeAt(n),t&=t}return String(t)}class l{constructor(e,t,n){this.type=e,this.props=t,n&&(this.children=Array.isArray(n)?n.map(e=>"string"==typeof e||e instanceof l?e:l.fromJson(e)):"string"==typeof n||n instanceof l?n:l.fromJson(n))}static fromJson(e){return new l(e.type,e.props,e.children)}addProp(e,t){this.props[e]=t}removeProp(e){this.props[e]&&delete this.props[e]}mergeProps(e){this.props={...this.props,...e}}getHash(){let e=""+this.type;return Object.keys(this.props).sort().forEach(t=>{e+=`[${t.toLowerCase()}="${s(this.props[t].toString())}"]`}),this.children&&(e+=i(this.children)),c(e)}elementAttrToString(){return Object.entries(this.props).reduce((e,[t,n])=>e+(void 0!==n?` ${t}="${s(n.toString())}"`:" "+t),"")}toString(){const e=this.elementAttrToString();return this.children||"script"===this.type?`<${this.type}${e}>${i(this.children||"")}</${this.type}>`:`<${this.type}${e}/>`}toJSON(){let e=[];return this.children&&(e=Array.isArray(this.children)?this.children:[this.children]),{type:this.type,props:this.props,children:e.map(e=>e instanceof l?e.toJSON():e)}}toHTMLElement(){const e=document.createElement(this.type);return Object.entries(this.props).forEach(([t,n])=>{e.setAttribute(t,String(n)||"")}),this.children&&("style"===this.type?e.appendChild(document.createTextNode(i(this.children))):e.innerHTML=i(this.children)),e}}const u=()=>"undefined"!=typeof window,d=()=>"undefined"==typeof window,h=new Map;function p(e,t){d()?h.set(e,t):(window.widgets||(window.widgets={}),window.widgets[e]=t)}function f(e,t){u()&&(window.widgets_markup||(window.widgets_markup={}),window.widgets_markup[e]=t)}function m(e){var t;return u()&&(null===(t=window.apps)||void 0===t?void 0:t[e])||null}function g(e,t){u()&&(window.apps[e]=t)}},yRvu:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return i}));var r=n("+8i8"),o=Object(r.a)({},(function(e){return{target:e.target,currentTarget:e.currentTarget}})),a=Object(r.a)(),s=Object(r.a)(),i=Object(r.b)({async:!0})},z6GK:function(e,t,n){},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},zSPp:function(e,t,n){"use strict";function r(e){return`var(--${e})`}n.d(t,"a",(function(){return r}))},zxh6:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("cDcd"),o=n.n(r),a=n("iuhU");const s=({className:e})=>o.a.createElement("div",{className:Object(a.a)(i,e),"data-qa-linear-loader":""},o.a.createElement("div",{className:c}),o.a.createElement("div",{className:l})),i="l1ys97s9_header-footer",c="lk1bwtw_header-footer",l="l17ajbeg_header-footer";n("0Z6T")}});
//# sourceMappingURL=header.widget.header-footer.426009e0d37f56a53a27.js.map