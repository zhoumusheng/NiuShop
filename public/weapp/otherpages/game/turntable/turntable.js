(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/game/turntable/turntable"],{"2c97":function(t,e,n){"use strict";(function(t){n("6b76");i(n("66fd"));var e=i(n("6850"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},3954:function(t,e,n){"use strict";var i=n("57d1"),o=n.n(i);o.a},"3dc3":function(t,e,n){},"4c29":function(t,e,n){"use strict";n.r(e);var i=n("74f1"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"57d1":function(t,e,n){},6004:function(t,e,n){"use strict";var i={lTime:function(){return Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(n.bind(null,"9657"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d380"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.img("upload/uniapp/game/turntable_head.png")),i=t.__map(t.gameInfo.award,(function(e,n){var i=t.$util.img(e.award_img);return{$orig:t.__get_orig(e),g1:i}})),o=t.__map(t.gameInfo.draw_record,(function(e,n){var i=t._f("cover")(e.member_nick_name);return{$orig:t.__get_orig(e),f0:i}})),r=t.$util.img(t.gameInfo.award[t.resultIndex].award_img),a=t.$util.img("upload/uniapp/game/result_yes.png"),u=t.$util.img("upload/uniapp/game/result_look.png"),s=t.$util.img("upload/uniapp/game/result_no.png"),l=t.$util.img("upload/uniapp/game/rule_head.png"),c=t.$util.timeStampTurnTime(t.gameInfo.start_time),d=t.$util.timeStampTurnTime(t.gameInfo.end_time);t._isMounted||(t.e0=function(e){return t.$util.redirectTo("/otherpages/game/record/record",{id:t.id})}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,l1:o,g2:r,g3:a,g4:u,g5:s,g6:l,g7:c,g8:d}})},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},6850:function(t,e,n){"use strict";n.r(e);var i=n("6004"),o=n("4c29");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("3954"),n("b1e4");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"32c34ab0",null,!1,i["a"],a);e["default"]=s.exports},"74f1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("d380"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(function(){return resolve(n("9657"))}.bind(null,n)).catch(n.oe)},a={components:{nsShowToast:i,uniPopup:o,LTime:r},data:function(){return{token:null,isClick:!1,currentIndex:-1,maxRing:6,currentRing:1,speed:300,timer:null,id:0,gameInfo:{award:[{award_img:"",award_name:""}],surplus_num:""},award:[],resultIndex:0,result:{is_winning:1},point:0,animate:!1,scrollTimer:null}},onLoad:function(t){t.id&&(this.id=t.id),this.getGameInfo()},onShow:function(){this.$langConfig.refresh(),t.getStorageSync("token")&&(this.getMemberPointInfo(),this.token=t.getStorageSync("token"))},methods:{getMemberPointInfo:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(e){e.data&&(t.point=parseInt(e.data.point))}})},lottery:function(){var e=this;t.getStorageSync("token")?1==this.gameInfo.status&&(this.gameInfo.surplus_num<=0?this.$util.showToast({title:"您的抽奖次数已用完"}):this.gameInfo.points>0&&this.point<this.gameInfo.points?this.$util.showToast({title:"积分不足"}):this.isClick||(this.isClick=!0,this.currentIndex=0,this.currentRing=1,this.speed=300,this.timer=setInterval(this.startRoll,this.speed),this.$api.sendRequest({url:"/turntable/api/turntable/lottery\t",data:{id:this.id},success:function(t){t.code>=0?(e.result=t.data,t.data.is_winning?e.resultIndex=e.$util.inArray(t.data.award_id,e.award):e.resultIndex=e.$util.inArray(-1,e.award),e.point-=e.gameInfo.points,e.gameInfo.surplus_num-=1):e.$util.showToast({title:t.message})},fail:function(t){e.resultIndex=e.$util.inArray(-1,e.award)}}))):this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/game/turntable/turntable?id="+this.id})},getGameInfo:function(){var t=this;this.$api.sendRequest({url:"/turntable/api/turntable/info",data:{id:this.id},success:function(e){e.code>=0&&e.data?(t.gameInfo=e.data,e.data.award.forEach((function(e){t.award.push(e.award_id)})),t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.gameInfo.is_show_winner&&t.gameInfo.draw_record.length>6&&(t.scrollTimer=setInterval(t.scrollRecord,2e3))):(t.$util.showToast({title:"未获取到活动信息!！"}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500))},fail:function(e){t.$util.showToast({title:"未获取到活动信息!！"}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500)}})},startRoll:function(){if(this.speed>50&&(this.speed-=50),this.currentRing>=this.maxRing-1&&this.speed<700&&(this.speed+=100),this.currentRing==this.maxRing&&this.currentIndex==this.resultIndex)return clearInterval(this.timer),void this.showResult();7==this.currentIndex?(this.currentRing+=1,this.currentIndex=0):this.currentIndex+=1,clearInterval(this.timer),this.timer=setTimeout(this.startRoll,this.speed)},showResult:function(){this.$refs.resultPopup.open()},closePopup:function(){this.isClick=!1,this.currentIndex=-1,this.$refs.resultPopup.close()},openRulePopup:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},scrollRecord:function(){var t=this;this.animate=!0,setTimeout((function(){t.gameInfo.draw_record.push(t.gameInfo.draw_record[0]),t.gameInfo.draw_record.shift(),t.animate=!1}),1e3)}},filters:{cover:function(t){return t.substr(0,1)+"******"+t.substr(-1)}},onHide:function(){clearInterval(this.scrollTimer)}};e.default=a}).call(this,n("543d")["default"])},b1e4:function(t,e,n){"use strict";var i=n("3dc3"),o=n.n(i);o.a}},[["2c97","common/runtime","common/vendor"]]]);