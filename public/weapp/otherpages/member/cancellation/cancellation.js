(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/cancellation/cancellation"],{"09a8":function(e,t,n){},"3e82":function(e,t,n){"use strict";(function(e){n("5558");o(n("66fd"));var t=o(n("cf7f"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c6e7:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"691c"))}},c=function(){var e=this,t=e.$createElement;e._self._c},a=[]},cdb4:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("ccd8"));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("691c"))}.bind(null,n)).catch(n.oe)},s={components:{nsShowToast:a},data:function(){return{agreement:{},isSelect:!1}},mixins:[o.default],onLoad:function(t){this.$langConfig.refresh(),t.back&&(this.back=t.back),e.getStorageSync("token")?this.getCancelAgreement():this.$util.redirectTo("/pages/login/login/login")},methods:{getCancelAgreement:function(){var e=this;this.$api.sendRequest({url:"/membercancel/api/membercancel/agreement",success:function(t){t.code>=0&&(e.agreement=t.data)}})},changeSelect:function(){this.isSelect=1!=this.isSelect},next:function(){this.isSelect?this.$util.redirectTo("/otherpages/member/assets/assets"):e.showToast({title:"请先勾选同意协议",icon:"none",duration:2e3})}}};t.default=s}).call(this,n("543d")["default"])},cf7f:function(e,t,n){"use strict";n.r(t);var o=n("c6e7"),c=n("f01b");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("da4d");var s,i=n("f0c5"),r=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"4cafe230",null,!1,o["a"],s);t["default"]=r.exports},da4d:function(e,t,n){"use strict";var o=n("09a8"),c=n.n(o);c.a},f01b:function(e,t,n){"use strict";n.r(t);var o=n("cdb4"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=c.a}},[["3e82","common/runtime","common/vendor"]]]);