webpackJsonp([12],{"UU+6":function(e,t){},boT6:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=s("fxnj"),n=s.n(a),i=s("Au9i"),o=s("lbHh"),l=s.n(o),u={data:function(){return{name:"",tel:"",flag:!1,yzm:"",yzmtime:60,yzmstr:"获取验证码",ruleId:"",productType:""}},created:function(){r=this},components:{},computed:{},mounted:function(){r.info()},methods:{initSession4Test:function(){r.receiveData.getData(r,"/initSession4Test/8427","Data",function(){})},query:function(){r.receiveData.getData(r,"/queryPromotionOrder","res",function(){if(r.res.success)if(0==r.res.result){i.MessageBox.alert("未查询到您的用户名</br>请先成为社区合伙人后进行重置密码操作").then(function(e){r.getdetail()})}else r.flag=!0;else null!=r.res.message&&alert(r.res.message)})},getdetail:function(){r.receiveData.getData(r,"/onsales/getPromotion","res",function(){r.res.success?(r.ruleId=r.res.result[0].ruleId,r.productType=r.res.result[0].productType,window.location.href=r.basePageUrl+"group/onsales.html?"+r.common.getoriApp()+"#/salesdetail?ruleId="+r.res.result[0].ruleId+"&productType="+r.res.result[0].productType):null!=r.res.message&&alert(r.res.message)})},info:function(){r.receiveData.getData(r,"userInfo?oriApp="+r.getUrlParam("oriApp"),"res",function(){if(r.res.success)if(r.name=r.res.result.name,r.tel=r.res.result.tel,r.tel)r.query();else{l.a.set("tel","");i.MessageBox.alert("未查询到您的用户名</br>请先成为社区合伙人后进行重置密码操作").then(function(e){location.href=r.basePageUrlpay+"hxgrouppay.html?"+r.common.getoriApp()+"#/salesdetail?ruleId="+r.ruleId+"&productType="+r.productType})}else null!=r.res.message&&alert(r.res.message)})},reset:function(){if(""!=r.yzm){var e="/promotion/password/reset?vericode="+r.yzm;r.receiveData.getData(r,e,"res",function(){r.res.success?(alert("重置成功"),n.a.closeWindow()):alert(r.res.message)})}else alert("请输入验证码")},yzms:function(){var e={mobile:r.tel,type:"104"};r.common.invokeApi("POST","getyzm",e,function(e){e.setRequestHeader("Access-Control-Allow-Token",void 0)},function(e){if(e.success){r.yzmtime=60,alert("验证码已下发，请查收短信");var t=setInterval(function(){r.yzmstr=r.yzmtime+"秒后重新获取",r.yzmtime--,r.yzmtime<=0&&(r.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(t)},61e3)}else alert(e.message)},function(e){})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ress"},[s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[s("div",{staticClass:"title"},[s("div",{staticClass:"top"},[e._v("您的用户名为")]),e._v(" "),s("div",[e._v(e._s(e.tel))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.yzm,expression:"yzm"}],attrs:{type:"number",oninput:"if(value.length>6)value=value.slice(0,6)",placeholder:"请输入验证码"},domProps:{value:e.yzm},on:{input:function(t){t.target.composing||(e.yzm=t.target.value)}}}),e._v(" "),s("span",{staticClass:"szym",on:{click:e.yzms}},[e._v(e._s(e.yzmstr))])]),e._v(" "),s("div",{staticClass:"reset",on:{click:e.reset}},[e._v("\n                查看/重置密码\n            ")])])])])},staticRenderFns:[]};var m=s("VU/8")(u,c,!1,function(e){s("UU+6"),s("xhgZ")},"data-v-0c949d50",null);t.default=m.exports},xhgZ:function(e,t){}});