webpackJsonp([20],{"1cHr":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("mtWM");var a=void 0,i=void 0,r={data:function(){return{omeFrom:"",user:{},yzmtime:60,yzmstr:"获取验证码",captcha:"",zzmb:!1,isClick:!1,comeFrom:"",message:""}},created:function(){a=this},mounted:function(){a.getUserInfo(),a.getComeFrom()},methods:{getUserInfo:function(){var e="userInfo?oriApp="+a.getUrlParam("oriApp");a.common.invokeApi("GET",e,null,null,function(e){e.success&&null==e.result&&reLogin(),a.user=e.result,a.common.hasRegister()&&a.$router.push({path:"/"})},function(){},function(e,t){i=e.getResponseHeader("Access-Control-Allow-Token")})},getCaptcha:function(){/^1[3-9][0-9]\d{8}$/.test(a.user.tel)?"获取验证码"!=a.yzmstr&&"重新获取"!=a.yzmstr||(a.yzmstr="获取中",a.yzmreq()):alert("请输入正确的手机号")},yzmreq:function(){var e={mobile:a.user.tel};a.common.invokeApi("POST","getyzm",e,function(e){e.setRequestHeader("Access-Control-Allow-Token",i)},function(e){a.yzmtime=60,alert("验证码已下发，请查收短信");var t=setInterval(function(){a.yzmstr=a.yzmtime+"秒后重新获取",a.yzmtime--,a.yzmtime<=0&&(a.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(t)},61e3)},function(e){a.yzmtime=60,a.message=e.message;var t=setInterval(function(){a.yzmstr=a.yzmtime+"秒后重新获取",a.yzmtime--,a.yzmtime<=0&&(a.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(t)},61e3)})},save:function(){/^1[3-9][0-9]\d{8}$/.test(a.user.tel)?""!=a.captcha?(a.zzmb=!0,1==a.isClick&&alert("请勿重复提交"),a.isClick=!0,a.simpleRegister()):alert("请输入验证码！"):alert("请填写正确的手机号！")},simpleRegister:function(){a.receiveData.postData(a,"simpleRegister",{mobile:a.user.tel,name:a.user.name,yzm:a.captcha},"res",function(){if(a.res.success){a.common.updateUserStatus(a.res.result);var e="";e=a.comeFrom?a.comeFrom:a.basePageUrl+"person/index.html?"+a.common.getoriApp(),alert("注册成功。"),location.href=e}else a.zzmb=!1,a.isClick=!1,alert(null==a.res.message?"验证码不正确或信息保存失败，请重试！":a.res.message)})},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):""},getComeFrom:function(){a.comeFrom=a.getUrlParam("comeFrom")||a.$route.query.comeFrom;var e=location.href,t=e.lastIndexOf("#"),s=e.substring(t);a.comeFrom=comeFrom+""+s}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reg"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.zzmb,expression:"zzmb"}],staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.zzmb,expression:"zzmb"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[a("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:s("l3R5")}})]),e._v(" "),a("div",{staticClass:"divider"}),e._v(" "),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"input-wrap lite-divider"},[a("span",{staticClass:"fl fs15"},[e._v("用户名")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"fr fs14 hidden-input pr15",attrs:{placeholder:"请输入用户名"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-wrap lite-divider"},[a("span",{staticClass:"fl fs15"},[e._v("手机号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel,expression:"user.tel"}],staticClass:"fr fs14 hidden-input pr15",attrs:{type:"tel",placeholder:"请输入手机号码"},domProps:{value:e.user.tel},on:{input:function(t){t.target.composing||e.$set(e.user,"tel",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-wrap lite-divider"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha,expression:"captcha"}],staticClass:"fl fs14 hidden-input",staticStyle:{"padding-bottom":"15px","text-align":"left","margin-bottom":"6px"},attrs:{placeholder:"输入验证码"},domProps:{value:e.captcha},on:{input:function(t){t.target.composing||(e.captcha=t.target.value)}}}),e._v(" "),a("span",{staticClass:"fr btn-plain",class:{useless:"获取验证码"!=e.yzmstr&&"重新获取"!=e.yzmstr},staticStyle:{"margin-top":"10px"},on:{click:e.getCaptcha}},[e._v(e._s(e.yzmstr))])]),e._v(" "),a("div",{staticClass:"messages"},[e._v(e._s(e.message))]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"90px",clear:"both"}},[e._v("\n                             \n                    ")]),e._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"submit-btn ov fs16",on:{click:e.save}},[e._v("保存")])])])])},staticRenderFns:[]};var o=s("VU/8")(r,n,!1,function(e){s("NDw8")},"data-v-6a7059a2",null);t.default=o.exports},NDw8:function(e,t){}});