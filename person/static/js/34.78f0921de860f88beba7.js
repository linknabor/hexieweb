webpackJsonp([34],{Qb9v:function(e,s){},ebUS:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=void 0,r={data:function(){return{oriPhone:"",yzmtime:60,yzmstr:"获取验证码",captcha:"",user:{},sex:"",xin:!0,genderPicker:[{name:"男",sex:1,checked:!1},{name:"女",sex:2,checked:!1}],modalShown:!1}},created:function(){a=this},mounted:function(){this.getUserInfo()},components:{},methods:{getUserInfo:function(){var e="userInfo?oriApp="+a.getUrlParam("oriApp");a.common.invokeApi("GET",e,null,null,function(e){e.success&&null==e.result&&reLogin(),a.user=e.result,a.oriPhone=a.user.tel},function(){})},showModal:function(){a.modalShown=!0;for(var e=0;e<a.genderPicker.length;e++)a.genderPicker[e].checked=!1},hideModal:function(e){"modal-mask"===e.target.className&&(a.modalShown=!1,a.getGender())},selectGender:function(e){for(var s=0;s<a.genderPicker.length;s++)a.genderPicker[s].checked=!1;a.genderPicker[e].checked=!0,a.user.sex=a.genderPicker[e].sex,a.getGender(a.user.sex),a.modalShown=!1,a.xin=!1},getGender:function(e){2==e?a.sex="女":1==e?a.sex="男":(a.sex="未知",a.xin=!1)},getCaptcha:function(){/^0?1[3|4|5|8][0-9]\d{8}$/.test(a.user.tel)?"获取验证码"!=a.yzmstr&&"重新获取"!=a.yzmstr||a.yzmreq():alert("请输入正确的手机号")},yzmreq:function(){a.receiveData.postData(a,"/getyzm",{mobile:a.user.tel},"n",function(){a.yzmtime=60;var e=setInterval(function(){a.yzmstr=a.yzmtime+"秒后重新获取",a.yzmtime--,a.yzmtime<=0&&(a.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(e)},61e3);a.res.success||(alert("验证码已下发，请查收短信"),a.yzmtime=60,a.yzmstr="重新获取")})},save:function(){""!=a.user.name&&""!=a.user.realName&&""!=a.user.tel?a.oriPhone==a.user.tel||""!=a.captcha?a.saveInfo():alert("请输入验证码"):alert("请完善个人信息")},saveInfo:function(){if(a.user.tel==a.oriPhone&&(a.captcha="00000"),""!=a.captcha&&""!=a.user.tel){var e={name:a.user.name,realName:a.user.realName,tel:a.user.tel,sex:a.user.sex};a.receiveData.postData(a,"/savePersonInfo/"+a.captcha,e,"n",function(){if(a.n.success){var e=a.n.result;a.common.updateUserStatus(e),a.$router.push({path:"/"})}else alert(""==n.message?"验证码校验失败！":n.message)})}else alert("请完善输入信息")}},computed:{}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"bind"},[t("div",{staticClass:"divider"}),e._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("微信名")]),e._v(" "),t("span",{staticClass:"fr fs14 value"},[e._v(" "+e._s(e.user.nickname))])]),e._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("用户名")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入用户名"},domProps:{value:e.user.name},on:{input:function(s){s.target.composing||e.$set(e.user,"name",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("姓名")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.realName,expression:"user.realName"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入真实姓名"},domProps:{value:e.user.realName},on:{input:function(s){s.target.composing||e.$set(e.user,"realName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("性别")]),e._v(" "),e.xin?t("span",{staticClass:"fr fs14 value placeholder",on:{click:e.showModal}},[e._v("请选择性别")]):e._e(),e._v(" "),""!=e.user.sex?t("span",{staticClass:"fr fs14 value",staticStyle:{width:"40px"},on:{click:e.showModal}},[e._v(e._s(e.sex))]):e._e()]),e._v(" "),e.modalShown?t("div",{staticClass:"modal-mask",on:{click:e.hideModal}},[t("div",{staticClass:"modal"},e._l(e.genderPicker,function(s,a){return t("div",{staticClass:"ptb15 lite-divider fs14",class:{checkedItem:s.checked},on:{click:function(s){e.selectGender(a)}}},[e._v(e._s(s.name))])}))]):e._e(),e._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("手机号")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel,expression:"user.tel"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"输入11位手机号",maxlength:"11"},domProps:{value:e.user.tel},on:{input:function(s){s.target.composing||e.$set(e.user,"tel",s.target.value)}}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.oriPhone!=e.user.tel,expression:"oriPhone!=user.tel"}],staticClass:"input-wrap lite-divider"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha,expression:"captcha"}],staticClass:"fs14 hidden-input",attrs:{placeholder:"输入验证码"},domProps:{value:e.captcha},on:{input:function(s){s.target.composing||(e.captcha=s.target.value)}}}),e._v(" "),t("span",{staticClass:"fr btn-plain fs14",class:{useless:"获取验证码"!=e.yzmstr&&"重新获取"!=e.yzmstr},on:{click:e.getCaptcha}},[e._v(e._s(e.yzmstr))])]),e._v(" "),t("div",{staticClass:"btn-fixed"},[t("div",{staticClass:"submit-btn ov fs16",on:{click:e.save}},[e._v("保存")])])])},staticRenderFns:[]};var l=t("VU/8")(r,i,!1,function(e){t("Qb9v")},"data-v-2a8ac0cc",null);s.default=l.exports}});