webpackJsonp([12],{IIlm:function(t,e){},YOV7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),r=s.n(a),i=void 0,o={data:function(){return{zzshow:!1,ruleId:this.$route.query.ruleId,productType:this.$route.query.productType,name:this.$route.query.name,price:this.$route.query.price,oriPrice:this.$route.query.oriPrice,pictures:this.$route.query.pictures,tel:"",yzm:"",yzmtime:60,yzmstr:"获取验证码"}},created:function(){i=this},components:{},computed:{},mounted:function(){},methods:{getCaptcha:function(){/^1[3-9][0-9]\d{8}$/.test(i.tel)?"获取验证码"!=i.yzmstr&&"重新获取"!=i.yzmstr||(i.yzmstr="获取中",i.yzmreq()):alert("请输入正确的手机号")},yzmreq:function(){var t={mobile:i.tel,type:"103"};i.common.invokeApi("POST","getyzm",t,function(t){t.setRequestHeader("Access-Control-Allow-Token",void 0)},function(t){i.yzmtime=60,alert(t.result);var e=setInterval(function(){i.yzmstr=i.yzmtime+"秒后重新获取",i.yzmtime--,i.yzmtime<=0&&(i.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(e)},61e3)},function(t){alert(null==t.message?"获取验证码失败":t.message)})},btnpay:function(){i.zzshow=!0;var t={ruleId:i.ruleId,productType:i.productType,mobile:i.tel,code:i.yzm};i.receiveData.postData(i,"/promotionPay",t,"res",function(){if(i.res.success){var t=i.res;wx.config({debug:!1,appId:t.result.appId,timestamp:t.result.timestamp,nonceStr:t.result.nonceStr,signature:t.result.signature,jsApiList:["chooseWXPay"]}),wx.chooseWXPay({appId:t.result.appId,timestamp:t.result.timestamp,nonceStr:t.result.nonceStr,package:t.result.pkgStr,signType:t.result.signType,paySign:t.result.signature,success:function(t){i.zzshow=!1,i.$router.push({patj:"/sassccess"})},fail:function(t){i.zzshow=!1,console.log(r()(t))},cancel:function(t){i.zzshow=!1,alert("支付取消")}})}else i.zzshow=!1,alert(i.res.message)})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cardrollgoods"},[s("div",{staticStyle:{background:"white",height:"15px",width:"100%"}},[t._v(" ")]),t._v(" "),s("div",{staticClass:"addr-top"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"goods-warp"},[s("div",{staticClass:"centrent"},[s("div",{staticClass:"ov"},[s("img",{staticClass:"icon-goods fl",attrs:{src:t.pictures}}),t._v(" "),s("div",{staticClass:"ov sale-name"},[s("span",{staticClass:"nowrap"},[t._v(t._s(t.name))]),s("br"),t._v(" "),s("span",{staticClass:"color"},[t._v("¥"+t._s(t.price))]),t._v(" "),s("del",[t._v(t._s(t.oriPrice))])])])]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"region"},[s("span",{staticClass:" szym "},[t._v("手机号")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",placeholder:"请输入您的联系电话"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),t._v(" "),s("span",{staticClass:"yzz",on:{click:t.getCaptcha}},[t._v(t._s(t.yzmstr))])]),t._v(" "),s("div",{staticClass:"region"},[s("span",{staticClass:"szym"},[t._v("验证码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],staticClass:"yzm",attrs:{type:"number",oninput:"if(value.length>6)value=value.slice(0,6)",placeholder:"请输入验证码"},domProps:{value:t.yzm},on:{input:function(e){e.target.composing||(t.yzm=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.btnpay}},[t._v("\n        立即支付\n    ")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.zzshow,expression:"zzshow"}],staticClass:"zzmb",attrs:{id:"zzmb"}})])},staticRenderFns:[]};var c=s("VU/8")(o,n,!1,function(t){s("IIlm")},"data-v-0cc70e2d",null);e.default=c.exports}});