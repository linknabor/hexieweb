webpackJsonp([4,17],{"136Z":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=void 0,n={name:"coupon",data:function(){return{coupons:[],couponid:this.$route.query.couponid,single:this.$route.query.single,orderId:"",status:"",serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,service_id:this.$route.query.service_id,org_id:this.$route.query.org_id}},created:function(){o=this},components:{},computed:{},mounted:function(){o.queryCoupon()},methods:{queryCoupon:function(){var t,s;1==o.single?(t=o.service_id,s=o.org_id):(t=o.serviceId,s=o.agentNo),o.receiveData.getData(o,"/coupon/valid4service/"+t+"/"+s,"res",function(){o.res.success?o.coupons=o.res.result:alert(o.res.message)})},apply:function(t){o.couponid!=t.id?o.couponid=t.id:o.couponid=""},determine:function(){1==o.single?o.$router.push({path:"/singlepage",name:"singlepage",query:{couponid:o.couponid}}):(o.orderId=o.$route.query.orderId,o.status=o.$route.query.status,o.amounts=o.$route.query.amounts,o.$router.push({path:"/payment",name:"payment",query:{orderId:o.orderId,status:o.status,serviceId:o.serviceId,agentNo:o.agentNo,amounts:o.amounts,single:o.single,Mask:!0,couponid:o.couponid}}))}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"coupons"},[e("div",{staticClass:"content"},[e("div",{staticClass:"head"},[t._v("\n            可有优惠券\n        ")]),t._v(" "),t._l(t.coupons,function(s){return e("div",{key:s.id,staticClass:"coupon ov",on:{click:function(e){t.apply(s)}}},[e("div",{staticClass:"fl coupon-right"},[e("span",{staticClass:"f48"},[t._v(t._s(s.amount))]),e("br"),t._v(" "),e("span",{staticClass:"text3 mg1"},[t._v("满"+t._s(s.usageCondition)+"金额可用")])]),t._v(" "),e("div",{staticClass:"fl coupon-left "},[e("i",{staticClass:"icon_se ",class:{icon_seactive:s.id==t.couponid}}),t._v(" "),e("div",{staticClass:"tSemicircle"}),t._v(" "),e("div",{staticClass:"ov describe"},[e("span",{staticClass:"text1"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"text3 describe-h ellipsis2"},[t._v(t._s(s.couponDesc))]),t._v(" "),e("span",{staticClass:"text3"},[t._v(t._s(s.useStartDateStr)+"-"+t._s(s.useEndDateStr))])]),t._v(" "),e("div",{staticClass:"bSemicircle"})])])})],2),t._v(" "),e("div",{staticClass:"btn_area",on:{click:function(s){t.determine()}}},[e("div",{staticClass:"more_btn"},[t._v("确定")])])])},staticRenderFns:[]};var u=e("VU/8")(n,a,!1,function(t){e("LImR")},"data-v-215b5030",null);s.default=u.exports},GL6O:function(t,s){},LImR:function(t,s){},a9ow:function(t,s,e){"use strict";(function(t){var o=e("fxnj"),n=e.n(o),a=e("Au9i"),u=(e.n(a),e("136Z"),void 0);s.a={data:function(){return{Mask:this.$route.query.Mask||!1,amount:"|",amounts:0,orderId:this.$route.query.orderId,incolor:!1,status:this.$route.query.status,serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],totalAmount:0,couponid:this.$route.query.couponid}},created:function(){u=this},mounted:function(){u.getcoupons()},components:{},methods:{getfocus:function(){"|"==u.amount&&(u.amount=""),u.incolor=!0},getblur:function(){""==u.amount&&(u.amount="|",u.incolor=!1)},getcoupons:function(){u.receiveData.getData(u,"/coupon/valid4service/"+u.serviceId+"/"+u.agentNo,"res",function(){u.res.success?null!=u.res.result&&(u.coupons=u.res.result,u.couponNum=u.coupons.length,u.computeAmount()):alert(u.res.message)})},computeAmount:function(){var t;if(2==u.$route.query.single&&(u.amount=u.$route.query.amounts,u.amounts=u.$route.query.amounts),void 0!=u.couponid)for(var s=0;s<u.coupons.length;s++)u.couponid==u.coupons[s].id&&(u.coupon=u.coupons[s]);null!=u.coupon&&(null==u.coupon.usageCondition||u.coupon.usageCondition>u.amounts?(alert("当前优惠券不可用"),u.coupon=null):u.couponDesc="¥ "+u.coupon.amount),null==u.coupon?t=u.amounts:u.coupon.amount>0&&(t=u.amounts-u.coupon.amount),u.totalAmount=t>0?Number(t).toFixed(2):.01},showCoupons:function(){0!=u.coupons.length&&null!=u.coupons&&u.$router.push({path:"/coupon",name:"coupon",query:{single:2,orderId:u.orderId,status:u.status,serviceId:u.serviceId,agentNo:u.agentNo,amounts:u.amounts,couponid:u.couponid}})},showclose:function(){var t=this;u.Mask=!1,setTimeout(function(){u.$router.push({path:"/payment",query:{orderId:u.orderId,status:u.status,serviceId:u.serviceId,agentNo:u.agentNo}}),t.$router.go(0)},150)},showpay:function(){var t=u.amount;""==t||isNaN(t)?alert("请输入正确金额"):(u.amounts=u.amount,u.Mask=!0,u.computeAmount())},onlinePay:function(){if(!u.orderId||u.orderId<=0)alert("页面错误，请到订单详情页重新发起支付！");else{var t=u.amount;""==t||isNaN(t)?alert("请输入正确金额"):u.onlinePays()}},onlinePays:function(){var s="";null!=u.coupon&&(s=u.coupon.id),t("#zzmb").show(),u.receiveData.postData(u,"/customService/order/pay?orderId="+u.orderId+"&amount="+u.amount+"&couponId="+s,{},"res",function(){u.res.success?(n.a.config({debug:!1,appId:u.res.result.appid,timestamp:u.res.result.timestamp,nonceStr:u.res.result.noncestr,signature:u.res.result.paysign,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:u.res.result.timestamp,nonceStr:u.res.result.noncestr,package:u.res.result.package,signType:u.res.result.signtype,paySign:u.res.result.paysign,success:function(t){alert("支付成功！"),15==u.status?u.ChangeState():u.$router.push({path:"/appraise",query:{ordersID:u.orderId}})},fail:function(s){t("#zzmb").hide()},cancel:function(t){u.paycancel()}})):(alert(null==u.res.message?"支付请求失败，请稍后重试!":u.res.message),t("#zzmb").hide())})},paycancel:function(){u.receiveData.postData(u,"customService/order/cancelPay?orderId="+u.orderId,null,"res",function(){u.res.success?(alert("支付取消"),t("#zzmb").hide()):(t("#zzmb").hide(),alert(u.res.message))})},ChangeState:function(){u.receiveData.postData(u,"customService/order/notifyPay?orderId="+u.orderId,null,"res",function(){u.res.success?u.$router.push({path:"/appraise",query:{ordersID:u.orderId}}):(u.Mask=!1,alert(null==u.res.message?"系统异常，请稍后重试！":u.res.message),t("#zzmb").hide())})}},computed:{}}}).call(s,e("7t+N"))},aMnh:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("a9ow"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"repay"},[e("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),t._v(" "),e("div",{staticClass:"title-top"},[t._v("服务已完工，请支付费用")]),t._v(" "),e("div",{staticClass:"title-mid lite-divider"},[e("div",{staticClass:"title-mid-top"},[t._v("请输入费用（元）")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"title-mid-bottom",class:{tcolor:t.incolor},attrs:{type:"text"},domProps:{value:t.amount},on:{focus:function(s){t.getfocus()},blur:function(s){t.getblur()},input:function(s){s.target.composing||(t.amount=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"main_btn"},[e("div",{staticClass:"btn",on:{click:t.showpay}},[t._v("点击支付")])]),t._v(" "),e("div",{staticClass:"vue-popup"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.Mask,expression:"Mask"}],staticClass:"mask"}),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.Mask,expression:"Mask"}],staticClass:"popup-content"},[e("span",{staticClass:"close",on:{click:function(s){t.showclose()}}},[t._v("×")]),t._v(" "),e("div",{staticClass:"proup"},[e("div",[e("span",{staticClass:"fs3"},[t._v("¥ ")]),e("span",{staticClass:"fs4 fs4w"},[t._v(t._s(t.totalAmount))])]),t._v(" "),e("div",{staticClass:"couponitem"},[e("span",{staticClass:"fl"},[t._v("订单金额")]),t._v(" "),e("span",{staticClass:"fr"},[t._v("¥"+t._s(t.amounts))])]),t._v(" "),e("div",{staticClass:"couponitem",on:{click:function(s){t.showCoupons()}}},[e("div",{staticClass:"fl"},[e("span",[t._v("优惠券")]),t._v(" "),e("span",{staticClass:" baoyou_desc"},[t._v("  "+t._s(t.couponNum)+"张可用")])]),t._v(" "),e("div",{staticClass:"fr"},[e("span",[t._v(t._s(t.couponDesc))])])]),t._v(" "),e("div",{staticClass:"btn1 btn",on:{click:t.onlinePay}},[t._v("立即支付")])])])])],1)])},staticRenderFns:[]};var a=function(t){e("GL6O")},u=e("VU/8")(o.a,n,!1,a,"data-v-aba92bde",null);s.default=u.exports}});