webpackJsonp([6],{a9ow:function(e,t,s){"use strict";(function(e){var r=s("fxnj"),a=s.n(r),n=s("Au9i"),o=(s.n(n),void 0);t.a={data:function(){return{amount:"|",orderId:this.$route.query.orderId,incolor:!1,showStatus:this.$route.query.showStatus}},created:function(){o=this},mounted:function(){},components:{},methods:{getfocus:function(){"|"==o.amount&&(o.amount=""),o.incolor=!0},getblur:function(){""==o.amount&&(o.amount="|",o.incolor=!1)},onlinePay:function(){if(!o.orderId||o.orderId<=0)alert("页面错误，请到订单详情页重新发起支付！");else{var e=o.amount;""==e||isNaN(e)?alert("请输入正确金额"):o.onlinePays()}},onlinePays:function(){o.orderId,o.amount;e("#zzmb").show(),o.receiveData.postData(o,"/customService/order/pay?orderId="+o.orderId+"&amount="+o.amount,{},"res",function(){o.res.success?(a.a.config({debug:!1,appId:o.res.result.appid,timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,signature:o.res.result.paysign,jsApiList:["chooseWXPay"]}),a.a.chooseWXPay({timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,package:o.res.result.package,signType:o.res.result.signtype,paySign:o.res.result.paysign,success:function(e){alert("支付成功！"),15==o.showStatus?o.ChangeState():o.$router.push({path:"/appraise",query:{ordersID:o.orderId}})},fail:function(t){e("#zzmb").hide()},cancel:function(e){o.paycancel()}})):(alert(null==o.res.message?"支付请求失败，请稍后重试!":o.res.message),e("#zzmb").hide())})},paycancel:function(){o.receiveData.postData(o,"customService/order/cancelPay?orderId="+o.orderId,null,"res",function(){o.res.success?(alert("支付取消"),e("#zzmb").hide()):(e("#zzmb").hide(),alert(o.res.message))})},ChangeState:function(){o.receiveData.postData(o,"customService/order/confirm?orderId="+o.orderId,null,"res",function(){o.res.success?o.$router.push({path:"/appraise",query:{ordersID:o.orderId}}):(alert(null==o.res.message?"系统异常，请稍后重试！":o.res.message),e("#zzmb").hide())})}},computed:{}}}).call(t,s("7t+N"))},aMnh:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("a9ow"),a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"repay"},[s("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),s("div",{staticClass:"title-top"},[e._v("服务已完工，请支付费用")]),e._v(" "),s("div",{staticClass:"title-mid lite-divider"},[s("div",{staticClass:"title-mid-top"},[e._v("请输入费用（元）")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"title-mid-bottom",class:{tcolor:e.incolor},attrs:{type:"text"},domProps:{value:e.amount},on:{focus:function(t){e.getfocus()},blur:function(t){e.getblur()},input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"main_btn"},[s("div",{staticClass:"btn",on:{click:e.onlinePay}},[e._v("立即微信支付")])])])},staticRenderFns:[]};var n=function(e){s("f6Bp")},o=s("VU/8")(r.a,a,!1,n,"data-v-c2cc12ec",null);t.default=o.exports},f6Bp:function(e,t){}});