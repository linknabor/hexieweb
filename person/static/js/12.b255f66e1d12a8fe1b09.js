webpackJsonp([12],{"9I/W":function(e,t){},GOsV:function(e,t){},boT6:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=s("fxnj"),r=s.n(a),i=s("Au9i"),o={data:function(){return{name:"",tel:"",flag:!1,yzm:"",yzmtime:60,yzmstr:"获取验证码"}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},methods:{initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/8427","Data",function(){})},query:function(){n.receiveData.getData(n,"/queryPromotionOrder","res",function(){if(n.res.success)if(0==n.res.result){if(null!==n.res.result){i.MessageBox.alert("未查询到您的用户名</br>请先成为社区合伙人后进行重置密码操作").then(function(e){n.getdetail()})}}else n.info()})},getdetail:function(){n.receiveData.getData(n,"/onsales/getPromotion","res",function(){n.res.success?window.location.href=n.basePageUrl+"group/onsales.html?"+n.common.getoriApp()+"#/salesdetail?ruleId="+n.res.result[0].ruleId+"&productType="+n.res.result[0].productType:null!=n.res.message&&alert(n.res.message)})},info:function(){n.receiveData.getData(n,"userInfo?oriApp="+n.getUrlParam("oriApp"),"res",function(){n.res.success&&(n.name=n.res.result.name,n.tel=n.res.result.tel,n.flag=!0)})},reset:function(){if(""!=n.yzm){var e="/promotion/password/reset?vericode="+n.yzm;n.receiveData.getData(n,e,"res",function(){n.res.success?(alert("重置成功"),r.a.closeWindow()):alert(n.res.message)})}else alert("请输入验证码")},yzms:function(){var e={mobile:n.tel};n.common.invokeApi("POST","getyzm",e,function(e){e.setRequestHeader("Access-Control-Allow-Token",void 0)},function(e){if(e.success){n.yzmtime=60,alert("验证码已下发，请查收短信");var t=setInterval(function(){n.yzmstr=n.yzmtime+"秒后重新获取",n.yzmtime--,n.yzmtime<=0&&(n.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(t)},61e3)}else alert(e.message)},function(e){})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ress"},[s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[s("div",{staticClass:"title"},[s("div",{staticClass:"top"},[e._v("您的用户名为")]),e._v(" "),s("div",[e._v(e._s(e.tel))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.yzm,expression:"yzm"}],attrs:{type:"number",oninput:"if(value.length>6)value=value.slice(0,6)",placeholder:"请输入验证码"},domProps:{value:e.yzm},on:{input:function(t){t.target.composing||(e.yzm=t.target.value)}}}),e._v(" "),s("span",{staticClass:"szym",on:{click:e.yzms}},[e._v(e._s(e.yzmstr))])]),e._v(" "),s("div",{staticClass:"reset",on:{click:e.reset}},[e._v("\n                查看/重置密码\n            ")])])])])},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(e){s("GOsV"),s("9I/W")},"data-v-166d872a",null);t.default=c.exports}});