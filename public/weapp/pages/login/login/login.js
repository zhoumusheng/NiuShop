(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login/login"],{1628:function(e,t,a){"use strict";(function(e){a("6b76");i(a("66fd"));var t=i(a("c97b"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"4ec1":function(e,t,a){"use strict";a.r(t);var i=a("ff55"),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=o.a},"5a02":function(e,t,a){"use strict";var i=a("7897"),o=a.n(i);o.a},"5a24":function(e,t,a){"use strict";var i={nsShowToast:function(){return Promise.all([a.e("common/vendor"),a.e("components/ns-show-toast/ns-show-toast")]).then(a.bind(null,"f505"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/pages/member/index/index")})},n=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}))},7897:function(e,t,a){},c97b:function(e,t,a){"use strict";a.r(t);var i=a("5a24"),o=a("4ec1");for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("5a02"),a("d917");var s,c=a("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=r.exports},d917:function(e,t,a){"use strict";var i=a("e84b"),o=a.n(i);o.a},e84b:function(e,t,a){},ff55:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("18e3")),o=s(a("362a")),n=s(a("4c22"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(){Promise.all([a.e("common/vendor"),a.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(a("f505"))}.bind(null,a)).catch(a.oe)},r={data:function(){return{loginMode:"mobile",formData:{mobile:"",account:"",password:"",vercode:"",dynacode:"",key:""},captcha:{id:"",img:""},isSub:!1,back:"",redirect:"redirectTo",openidIsExits:!1,isBind:!1,dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},registerConfig:{is_enable:1},title:""}},components:{nsShowToast:c},mixins:[o.default,n.default],onLoad:function(t){if(t.back&&(this.back=t.back),this.getCaptcha(),this.getRegisterConfig(),e.getStorageSync("authInfo")){var a=e.getStorageSync("authInfo");a.authInfo&&(this.authInfo=a.authInfo),a.userInfo&&(this.userInfo=a.userInfo),this.checkOpenidIsExits()}},onShow:function(){var e=this;this.$langConfig.refresh(),this.getCode((function(){Object.keys(e.authInfo).length&&e.$api.sendRequest({url:"/api/login/openidisexits",data:e.authInfo,success:function(t){t.code>=0&&t.data>0&&(e.isBind=!0)}})})),this.getUserInfo()},methods:{getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(t){t.code>=0&&(e.registerConfig=t.data.value,1==e.registerConfig.dynamic_code_login?e.loginMode="mobile":e.loginMode="account")}})},switchLoginMode:function(){this.loginMode="mobile"==this.loginMode?"account":"mobile"},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},toRegister:function(){this.back?this.$util.redirectTo("/pages/login/register/register",{back:this.back}):this.$util.redirectTo("/pages/login/register/register")},forgetPassword:function(){this.back?this.$util.redirectTo("/otherpages/login/find/find",{back:this.back}):this.$util.redirectTo("/otherpages/login/find/find")},login:function(){var t=this;if("account"==this.loginMode){var a="/api/login/login";i={username:this.formData.account,password:this.formData.password}}else{a="/api/login/mobile";var i={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode}}if(""!=this.captcha.id&&(i.captcha_id=this.captcha.id,i.captcha_code=this.formData.vercode),Object.keys(this.authInfo).length&&(i[this.authInfo.auth_tag]=this.authInfo.auth_openid),""!=this.userInfo.avatarUrl&&(i.headimg=this.userInfo.avatarUrl),e.getStorageSync("source_member")&&(i.source_member=e.getStorageSync("source_member")),this.verify(i)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:a,data:i,success:function(a){a.code>=0?e.setStorage({key:"token",data:a.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),""!=t.back?t.$util.redirectTo(t.back,{},t.redirect):t.$util.redirectTo("/pages/member/index/index",{},t.redirect)}}):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:a.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[];"mobile"==this.loginMode&&(t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}],""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")})),"account"==this.loginMode&&(t=[{name:"username",checkType:"required",errorMsg:this.$lang("accountPlaceholder")},{name:"password",checkType:"required",errorMsg:this.$lang("passwordPlaceholder")}],""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}));var a=i.default.check(e,t);return!!a||(this.$util.showToast({title:i.default.error}),!1)},authLogin:function(){var t=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/login/auth",data:this.authInfo,success:function(a){a.code>=0?e.setStorage({key:"token",data:a.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),""!=t.back?t.$util.redirectTo(t.back,{},t.redirect):t.$util.redirectTo("/pages/member/index/index",{},t.redirect)}}):(t.isSub=!1,t.$util.showToast({title:a.message}))},fail:function(e){t.isSub=!1,t.$util.showToast({title:"request:fail"})}}))},mobileAuthLogin:function(t){var a=this;if("getPhoneNumber:ok"==t.detail.errMsg){var i={iv:t.detail.iv,encryptedData:t.detail.encryptedData};if(Object.keys(this.authInfo).length&&(i[this.authInfo.auth_tag]=this.authInfo.auth_openid),""!=this.userInfo.avatarUrl&&(i.headimg=this.userInfo.avatarUrl),e.getStorageSync("source_member")&&(i.source_member=e.getStorageSync("source_member")),this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/login/mobileauth",data:i,success:function(t){t.code>=0?e.setStorage({key:"token",data:t.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),""!=a.back?a.$util.redirectTo(a.back,{},a.redirect):a.$util.redirectTo("/pages/member/index/index",{},a.redirect)}}):(a.isSub=!1,a.$util.showToast({title:t.message}))},fail:function(e){a.isSub=!1,a.$util.showToast({title:"request:fail"})}})}},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},a=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"}],o=i.default.check(t,a);o?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,this.$api.sendRequest({url:"/api/login/mobileCode",data:t,success:function(t){e.dynacodeData.isSend=!1,t.code>=0?(e.formData.key=t.data.key,120==e.dynacodeData.seconds&&null==e.dynacodeData.timer&&(e.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3))):e.$util.showToast({title:t.message})},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:i.default.error})}},checkOpenidIsExits:function(){var t=this;Object.keys(this.authInfo).length&&(e.setStorage({key:"authInfo",data:{authInfo:this.authInfo,userInfo:this.userInfo}}),this.$api.sendRequest({url:"/api/login/openidisexits",data:this.authInfo,success:function(e){e.code>=0&&e.data>0&&(t.isBind=!0)}}))}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&(clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1})},immediate:!0,deep:!0}}};t.default=r}).call(this,a("543d")["default"])}},[["1628","common/runtime","common/vendor"]]]);