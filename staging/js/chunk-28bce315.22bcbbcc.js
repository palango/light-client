(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28bce315"],{"03af":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"amount-display--inline":t.inline},on:{mouseover:function(e){t.exactAmount&&(t.displayExactAmount=!0)},mouseleave:function(e){t.exactAmount&&(t.displayExactAmount=!1)}}},[t.displayExactAmount?r("span",[t._v(" "+t._s(t._f("toUnits")(t.amount,t.token.decimals))+" "+t._s(t.token.symbol||"")+" ")]):r("span",[t._v(" "+t._s(t._f("displayFormat")(t.amount,t.token.decimals))+" "+t._s(t.token.symbol||"")+" ")])])},o=[],c=r("60a3");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t){var e=p();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}var b=function(t,e,r,n){var o,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"===typeof Reflect?"undefined":y(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,r,i):o(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i},v=function(){var t=function(t){a(r,t);var e=u(r);function r(){var t;return i(this,r),t=e.apply(this,arguments),t.displayExactAmount=!1,t}return r}(c["e"]);return b([Object(c["d"])({required:!1,default:!1,type:Boolean})],t.prototype,"exactAmount",void 0),b([Object(c["d"])({required:!0})],t.prototype,"amount",void 0),b([Object(c["d"])({required:!0})],t.prototype,"token",void 0),b([Object(c["d"])({required:!1,default:!1,type:Boolean})],t.prototype,"inline",void 0),t=b([Object(c["a"])({})],t),t}(),h=v,m=h,g=(r("e83f"),r("2877")),w=Object(g["a"])(m,n,o,!1,null,"b1b477aa",null);e["a"]=w.exports},"1fe8":function(t,e){t.exports="data:image/png;base64,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"},"2e3a":function(t,e,r){},"32eb":function(t,e,r){},"3faa":function(t,e,r){"use strict";var n=r("2e3a"),o=r.n(n);o.a},"45f0":function(t,e,r){t.exports=r.p+"img/withdrawal.c80c3337.svg"},"4c07":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"udc__description",attrs:{justify:"center","no-gutters":""}},[n("p",[t._v(" "+t._s(t.$t("udc.description"))+" ")])]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("h3",{staticClass:"udc__sub-head"},[t._v(" "+t._s(t.$t(t.mainnet?"udc.deposit":"udc.mint-deposit"))+" ")])])],1),t.loading||t.error?t.error?n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("error-message",{attrs:{error:t.error}})],1)],1):n("v-row",{staticClass:"udc__progress",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{size:125,width:4,color:"primary",indeterminate:""}})],1),n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},["mint"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.mint",{currency:t.serviceToken}))+" ")]):"approve"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.approve",{currency:t.serviceToken}))+" ")]):"deposit"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.deposit",{currency:t.serviceToken}))+" ")]):t._e()])],1)],1):n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{staticClass:"udc__mint-deposit--amount",attrs:{autofocus:"",type:"text",suffix:t.serviceToken},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),t.loading||t.error?t._e():n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"10"}},[n("p",[t._v(" "+t._s(t.$t("udc-deposit-dialog.available",{balance:t.accountBalance,currency:t.$t("app-header.currency")}))+" ")])])],1),t.loading||t.error?t._e():n("v-row",{attrs:{justify:"center"}},[n("action-button",{staticClass:"udc__action",attrs:{arrow:"",enabled:t.valid&&!t.loading,text:t.$t(t.mainnet?"udc-deposit-dialog.button-main":"udc-deposit-dialog.button")},on:{click:function(e){return t.udcDeposit()}}})],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("hr")])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("p",{class:{"udc__low-balance":!t.hasEnoughServiceTokens}},[t._v(" "+t._s(t.$t("udc.balance"))+" "),n("amount-display",{attrs:{inline:"",amount:t.udcCapacity,token:t.udcToken}}),t.hasEnoughServiceTokens?n("v-btn",{staticClass:"udc__withdrawal-button",attrs:{height:"20px",width:"22px",icon:""},on:{click:function(e){t.withdrawFromUdc=!0}}},[n("v-img",{attrs:{height:"20px",width:"20px",src:r("45f0")}})],1):t._e()],1),t.hasEnoughServiceTokens?t._e():n("p",{class:{"udc__low-balance":!t.hasEnoughServiceTokens}},[t._v(" "+t._s(t.$t("udc.balance-too-low",{symbol:t.serviceToken}))+" ")])])],1),n("udc-withdrawal-dialog",{attrs:{visible:t.withdrawFromUdc,"account-balance":t.accountBalance,"service-token":t.serviceToken},on:{cancel:function(e){t.withdrawFromUdc=!1}}})],1)},o=[],c=r("4795"),i=r.n(c),a=r("9ab4"),s=r("60a3"),u=r("2f62"),l=r("8404"),f=r("a3d5"),p=r("750b"),d=r("03af"),y=r("8e27"),b=r("7688"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("raiden-dialog",{attrs:{visible:t.visible},on:{close:t.cancel}},[r("v-card-title",[t._v(t._s(t.$t("udc.withdrawal")))]),r("v-card-text",[r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{staticClass:"udc-withdrawal-dialog__amount",attrs:{autofocus:"",type:"text",suffix:t.serviceToken},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),r("v-col",{staticClass:"udc-withdrawal-dialog__asterisk",attrs:{cols:"1"}},[r("sup",[t._v(" "+t._s(t.$t("udc.asterisk"))+" ")])])],1),r("v-row",{staticClass:"udc-withdrawal-dialog__available",attrs:{"no-gutters":"",justify:"center"}},[t._v(" "+t._s(t.$t("udc-deposit-dialog.available",{balance:t.accountBalance,currency:t.$t("app-header.currency")}))+" ")])],1),r("v-card-actions",[r("action-button",{attrs:{enabled:Number(t.amount)>0,text:t.$t("general.buttons.confirm")}})],1),r("v-card-text",[r("v-row",{staticClass:"udc-withdrawal-dialog__footnote",attrs:{"no-gutters":""}},[r("span",[r("sup",[t._v(t._s(t.$t("udc.asterisk")))]),t._v(" "+t._s(t.$t("udc.withdrawal-footnote"))+" ")])])],1)],1)},h=[],m=r("66bc");function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e,r){return e&&O(t.prototype,e),r&&O(t,r),t}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function P(t){var e=A();return function(){var r,n=R(t);if(e){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}function x(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var T=function(){var t=function(t){_(r,t);var e=P(r);function r(){var t;return w(this,r),t=e.apply(this,arguments),t.amount="0",t}return j(r,[{key:"cancel",value:function(){}}]),r}(s["e"]);return Object(a["b"])([Object(s["d"])({required:!0,type:Boolean})],t.prototype,"visible",void 0),Object(a["b"])([Object(s["d"])({required:!0,type:String})],t.prototype,"accountBalance",void 0),Object(a["b"])([Object(s["d"])({required:!0,type:String})],t.prototype,"serviceToken",void 0),Object(a["b"])([Object(s["b"])()],t.prototype,"cancel",null),t=Object(a["b"])([Object(s["a"])({components:{RaidenDialog:m["a"],ActionButton:p["a"]}})],t),t}(),V=T,D=V,C=(r("3faa"),r("2877")),B=r("6544"),G=r.n(B),E=r("99d9"),q=r("62ad"),N=r("0fd9"),L=r("8654"),U=Object(C["a"])(D,v,h,!1,null,"6ecbd07d",null),Z=U.exports;function F(t){return F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Y(t,e,r,n,o,c,i){try{var a=t[c](i),s=a.value}catch(u){return void r(u)}a.done?e(s):Promise.resolve(s).then(n,o)}function M(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function i(t){Y(c,n,o,i,a,"next",t)}function a(t){Y(c,n,o,i,a,"throw",t)}i(void 0)}))}}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e,r){return e&&K(t.prototype,e),r&&K(t,r),t}function Q(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}function $(t,e){return $=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},$(t,e)}function I(t){var e=rt();return function(){var r,n=nt(t);if(e){var o=nt(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return tt(this,r)}}function tt(t,e){return!e||"object"!==F(e)&&"function"!==typeof e?et(t):e}function et(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function nt(t){return nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},nt(t)}G()(U,{VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VCol:q["a"],VRow:N["a"],VTextField:L["a"]});var ot=function(){var t=function(t){Q(r,t);var e=I(r);function r(){var t;return z(this,r),t=e.apply(this,arguments),t.amount="10",t.loading=!1,t.error=null,t.step="",t.udcCapacity=l["Zero"],t.hasEnoughServiceTokens=!1,t.withdrawFromUdc=!1,t}return X(r,[{key:"mounted",value:function(){var t=M(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateUDCCapacity();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"udcDeposit",value:function(){var t=M(i.a.mark((function t(){var e,r,n,o=this;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.error=null,this.loading=!0,e=this.$raiden.userDepositTokenAddress,r=this.$store.state.tokens[e],n=f["a"].parse(this.amount,r.decimals),t.prev=5,this.mainnet||!n.gt(r.balance)){t.next=10;break}return this.step="mint",t.next=10,this.$raiden.mint(e,n);case 10:return this.step="approve",t.next=13,this.$raiden.depositToUDC(n,(function(){o.step="deposit"}));case 13:return t.next=15,this.updateUDCCapacity();case 15:this.$emit("done"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](5),this.error=t.t0;case 21:this.step="",this.loading=!1;case 23:case"end":return t.stop()}}),t,this,[[5,18]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateUDCCapacity",value:function(){var t=M(i.a.mark((function t(){var e,r,n;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$raiden,r=e.userDepositTokenAddress,n=e.monitoringReward,t.next=3,this.$raiden.fetchTokenData([r]);case 3:return t.next=5,this.$raiden.getUDCCapacity();case 5:this.udcCapacity=t.sent,this.hasEnoughServiceTokens=!(!n||!this.udcCapacity.gte(n));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"serviceToken",get:function(){return this.udcToken.symbol||this.mainnet?"RDN":"SVT"}},{key:"udcToken",get:function(){var t=this.$raiden.userDepositTokenAddress;return this.$store.state.tokens[t]||{address:t}}},{key:"valid",get:function(){return/^[1-9]\d*$/.test(this.amount)}}]),r}(s["e"]);return t=Object(a["b"])([Object(s["a"])({components:{ActionButton:p["a"],UdcDepositDialog:b["a"],UdcWithdrawalDialog:Z,AmountDisplay:d["a"],ErrorMessage:y["a"]},computed:W(W({},Object(u["c"])(["accountBalance"])),Object(u["b"])(["mainnet"]))})],t),t}(),ct=ot,it=ct,at=(r("eff3"),r("8336")),st=r("adda"),ut=r("490a"),lt=Object(C["a"])(it,n,o,!1,null,"6286e7af",null);e["default"]=lt.exports;G()(lt,{VBtn:at["a"],VCol:q["a"],VImg:st["a"],VProgressCircular:ut["a"],VRow:N["a"],VTextField:L["a"]})},6141:function(t,e,r){},"6da4":function(t,e,r){},7688:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("raiden-dialog",{attrs:{visible:t.visible},on:{close:t.cancel}},[t.error?t._e():r("v-card-title",[t._v(" "+t._s(t.$t(t.mainnet?"udc-deposit-dialog.button-main":"udc-deposit-dialog.button"))+" ")]),r("v-card-text",[t.loading||t.error?t.error?r("v-row",[r("error-message",{attrs:{error:t.error}})],1):r("v-row",{staticClass:"udc-deposit-dialog--progress"},[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{size:125,width:4,color:"primary",indeterminate:""}})],1),r("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},["mint"===t.step?r("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.mint",{currency:t.serviceToken}))+" ")]):"approve"===t.step?r("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.approve",{currency:t.serviceToken}))+" ")]):"deposit"===t.step?r("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.deposit",{currency:t.serviceToken}))+" ")]):t._e()])],1)],1):r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{staticClass:"udc-deposit-dialog__amount",attrs:{autofocus:"",type:"text",suffix:t.serviceToken},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1),t.loading||t.error?t._e():r("v-row",{staticClass:"udc-deposit-dialog__available"},[t._v(" "+t._s(t.$t("udc-deposit-dialog.available",{balance:t.accountBalance,currency:t.$t("app-header.currency")}))+" ")])],1),t.error?t._e():r("v-card-actions",[r("action-button",{staticClass:"udc-deposit-dialog__action",attrs:{arrow:"","full-width":"",enabled:t.valid&&!t.loading,text:t.$t(t.mainnet?"udc-deposit-dialog.button-main":"udc-deposit-dialog.button")},on:{click:function(e){return t.udcDeposit()}}})],1)],1)},o=[],c=r("4795"),i=r.n(c),a=r("60a3"),s=r("2f62"),u=r("750b"),l=r("a3d5"),f=r("66bc"),p=r("8e27");function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){var e=O();return function(){var r,n=j(t);if(e){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function _(t){return _="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}var k=function(t,e,r,n){var o,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"===typeof Reflect?"undefined":_(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,r,i):o(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i},P=function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,c){function i(t){try{s(n.next(t))}catch(e){c(e)}}function a(t){try{s(n["throw"](t))}catch(e){c(e)}}function s(t){t.done?r(t.value):o(t.value).then(i,a)}s((n=n.apply(t,e||[])).next())}))},x=function(){var t=function(t){v(r,t);var e=m(r);function r(){var t;return d(this,r),t=e.apply(this,arguments),t.amount="10",t.loading=!1,t.error=null,t.step="",t}return b(r,[{key:"cancel",value:function(){this.error=null}},{key:"udcDeposit",value:function(){return P(this,void 0,void 0,i.a.mark((function t(){var e,r,n,o=this;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.error=null,this.loading=!0,e=this.$raiden.userDepositTokenAddress,r=this.$store.state.tokens[e],n=l["a"].parse(this.amount,r.decimals),t.prev=5,this.mainnet||!n.gt(r.balance)){t.next=10;break}return this.step="mint",t.next=10,this.$raiden.mint(e,n);case 10:return this.step="approve",t.next=13,this.$raiden.depositToUDC(n,(function(){o.step="deposit"}));case 13:this.$emit("done"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),this.error=t.t0;case 19:this.step="",this.loading=!1;case 21:case"end":return t.stop()}}),t,this,[[5,16]])})))}},{key:"serviceToken",get:function(){return this.udcToken.symbol||this.mainnet?"RDN":"SVT"}},{key:"udcToken",get:function(){var t=this.$raiden.userDepositTokenAddress;return this.$store.state.tokens[t]||{address:t}}},{key:"valid",get:function(){return/^[1-9]\d*$/.test(this.amount)}}]),r}(a["e"]);return k([Object(a["d"])({required:!0,type:Boolean})],t.prototype,"visible",void 0),k([Object(a["b"])()],t.prototype,"cancel",null),t=k([Object(a["a"])({components:{ActionButton:u["a"],RaidenDialog:f["a"],ErrorMessage:p["a"]},computed:Object.assign(Object.assign({},Object(s["c"])(["accountBalance"])),Object(s["b"])(["mainnet"]))})],t),t}(),S=x,A=S,R=(r("7bb0"),r("2877")),T=r("6544"),V=r.n(T),D=r("99d9"),C=r("62ad"),B=r("490a"),G=r("0fd9"),E=r("8654"),q=Object(R["a"])(A,n,o,!1,null,"02c91906",null);e["a"]=q.exports;V()(q,{VCardActions:D["a"],VCardText:D["c"],VCardTitle:D["d"],VCol:C["a"],VProgressCircular:B["a"],VRow:G["a"],VTextField:E["a"]})},"7bb0":function(t,e,r){"use strict";var n=r("32eb"),o=r.n(n);o.a},"8e27":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"error-message"},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"error-message__image"},[n("v-img",{attrs:{src:r("1fe8")}})],1),n("h2",{staticClass:"error-message__title"},[t._v(t._s(t.title))]),n("label",{staticClass:"error-message__label"},[t._v(" "+t._s(t.$t("error-message.problem"))+" ")]),n("p",[t._v(t._s(t.problem))]),n("label",{staticClass:"error-message__label"},[t._v(" "+t._s(t.$t("error-message.solution"))+" ")]),Array.isArray(t.solution)?n("ol",t._l(t.solution,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0):n("p",[t._v(t._s(t.solution))])])],1)},o=[],c=r("60a3");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t){var e=y();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}var h=function(t,e,r,n){var o,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===("undefined"===typeof Reflect?"undefined":v(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(c<3?o(i):c>3?o(e,r,i):o(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i},m=function(){var t=function(t){u(r,t);var e=f(r);function r(){return i(this,r),e.apply(this,arguments)}return s(r,[{key:"code",get:function(){return this.error&&"code"in this.error&&this.$te("errors.".concat(this.error.code,".title"))?this.error.code:"RDN_GENERAL_ERROR"}},{key:"title",get:function(){return this.$t("errors.".concat(this.code,".title"))}},{key:"problem",get:function(){return this.$t("errors.".concat(this.code,".problem"))}},{key:"solution",get:function(){return this.$t("errors.".concat(this.code,".solution"))}}]),r}(c["e"]);return h([Object(c["d"])({required:!0})],t.prototype,"error",void 0),t=h([Object(c["a"])({})],t),t}(),g=m,w=g,O=(r("fb2b"),r("2877")),j=r("6544"),_=r.n(j),k=r("62ad"),P=r("adda"),x=r("0fd9"),S=Object(O["a"])(w,n,o,!1,null,"4fb2bb50",null);e["a"]=S.exports;_()(S,{VCol:k["a"],VImg:P["a"],VRow:x["a"]})},c56e:function(t,e,r){},e83f:function(t,e,r){"use strict";var n=r("c56e"),o=r.n(n);o.a},eff3:function(t,e,r){"use strict";var n=r("6da4"),o=r.n(n);o.a},fb2b:function(t,e,r){"use strict";var n=r("6141"),o=r.n(n);o.a}}]);