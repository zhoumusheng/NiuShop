(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/topics/detail/detail"],{1184:function(t,n,o){},"1d8d":function(t,n,o){"use strict";(function(t){o("6b76");e(o("66fd"));var n=e(o("2b84"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"2b84":function(t,n,o){"use strict";o.r(n);var e=o("e931"),i=o("6809");for(var a in i)"default"!==a&&function(t){o.d(n,t,(function(){return i[t]}))}(a);o("3b8a");var s,c=o("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);n["default"]=r.exports},"3b8a":function(t,n,o){"use strict";var e=o("1184"),i=o.n(e);i.a},6809:function(t,n,o){"use strict";o.r(n);var e=o("9391"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},9391:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("4c22"));function i(t){return t&&t.__esModule?t:{default:t}}var a=function(){Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(o("f505"))}.bind(null,o)).catch(o.oe)},s=function(){Promise.all([o.e("common/vendor"),o.e("components/ns-goods-item/ns-goods-item-row")]).then(function(){return resolve(o("7c7c"))}.bind(null,o)).catch(o.oe)},c={data:function(){return{dataList:[],topicId:0,bgColor:"#f7f7f7",topicAdv:""}},components:{nsShowToast:a,nsGoodsItemRow:s},onLoad:function(n){n.topic_id?this.topicId=n.topic_id:t.navigateBack({delta:1})},onShow:function(){this.$langConfig.refresh()},mixins:[e.default],methods:{getData:function(t){var n=this;this.$api.sendRequest({url:"/topic/api/topicgoods/page",data:{topic_id:this.topicId,page_size:t.size,page:t.num},success:function(o){var e=[],i=o.message;0==o.code&&o.data?(n.topicAdv=o.data.topic_adv,n.bgColor=o.data.bg_color,e=o.data.list):n.$util.showToast({title:i}),t.endSuccess(e.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(e),n.$refs.loadingCover&&n.$refs.loadingCover.hide()},fail:function(o){t.endErr(),n.$refs.loadingCover&&n.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/topics/goods_detail/goods_detail",{id:t.id})}},onShareAppMessage:function(t){var n="活动多多，优惠多多哦",o="/promotionpages/topics/detail/detail?topic_id="+this.topicId;return{title:n,path:o,success:function(t){},fail:function(t){}}}};n.default=c}).call(this,o("543d")["default"])},e931:function(t,n,o){"use strict";var e={nsEmpty:function(){return o.e("components/ns-empty/ns-empty").then(o.bind(null,"211f"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(o.bind(null,"f505"))}},i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.$util.img(t.topicAdv));t.$mp.data=Object.assign({},{$root:{g0:o}})},a=[];o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}))}},[["1d8d","common/runtime","common/vendor"]]]);