webpackJsonp([4,10],{"136Z":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=void 0,n={name:"coupon",data:function(){return{coupons:[],couponid:this.$route.query.couponid,single:this.$route.query.single,orderId:"",status:"",serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,service_id:this.$route.query.service_id,org_id:this.$route.query.org_id}},created:function(){o=this},components:{},computed:{},mounted:function(){o.queryCoupon()},methods:{queryCoupon:function(){var t,e;1==o.single?(t=o.service_id,e=o.org_id):(t=o.serviceId,e=o.agentNo),o.receiveData.getData(o,"/coupon/valid4service/"+t+"/"+e,"res",function(){o.res.success?o.coupons=o.res.result:alert(o.res.message)})},apply:function(t){o.couponid!=t.id?o.couponid=t.id:o.couponid=""},determine:function(){1==o.single?o.$router.push({path:"/singlepage",name:"singlepage",query:{couponid:o.couponid}}):(o.orderId=o.$route.query.orderId,o.status=o.$route.query.status,o.amounts=o.$route.query.amounts,o.$router.push({path:"/payment",name:"payment",query:{orderId:o.orderId,status:o.status,serviceId:o.serviceId,agentNo:o.agentNo,amounts:o.amounts,single:o.single,Mask:!0,couponid:o.couponid}}))}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"coupons"},[s("div",{staticClass:"content"},[s("div",{staticClass:"head"},[t._v("\n            可有优惠券\n        ")]),t._v(" "),t._l(t.coupons,function(e){return s("div",{key:e.id,staticClass:"coupon ov",on:{click:function(s){t.apply(e)}}},[s("div",{staticClass:"fl coupon-right"},[s("span",{staticClass:"f48"},[t._v(t._s(e.amount))]),s("br"),t._v(" "),s("span",{staticClass:"text3 mg1"},[t._v("满任意金额可用")])]),t._v(" "),s("div",{staticClass:"fl coupon-left "},[s("i",{staticClass:"icon_se ",class:{icon_seactive:e.id==t.couponid}}),t._v(" "),s("div",{staticClass:"tSemicircle"}),t._v(" "),s("div",{staticClass:"ov describe"},[s("span",{staticClass:"text1"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"text3 describe-h ellipsis2"},[t._v(t._s(e.couponDesc))]),t._v(" "),s("span",{staticClass:"text3"},[t._v(t._s(e.useStartDateStr)+"-"+t._s(e.useEndDateStr))])]),t._v(" "),s("div",{staticClass:"bSemicircle"})])])})],2),t._v(" "),s("div",{staticStyle:{height:"60px"}}),t._v(" "),s("div",{staticClass:"btn_area",staticStyle:{"margin-bottom":"15px"},on:{click:function(e){t.determine()}}},[s("div",{staticClass:"more_btn"},[t._v("确定")])])])},staticRenderFns:[]};var i=s("VU/8")(n,a,!1,function(t){s("4eWk")},"data-v-a7d552be",null);e.default=i.exports},"4eWk":function(t,e){},YCOr:function(t,e){},a9ow:function(t,e,s){"use strict";(function(t){var o=s("fxnj"),n=s.n(o),a=s("Au9i"),i=(s.n(a),s("136Z"),void 0);e.a={data:function(){return{Mask:this.$route.query.Mask||!1,amount:"|",amounts:0,orderId:this.$route.query.orderId,incolor:!1,status:this.$route.query.status,serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],totalAmount:0,couponid:this.$route.query.couponid}},created:function(){i=this},mounted:function(){i.getcoupons()},components:{},methods:{getfocus:function(){"|"==i.amount&&(i.amount=""),i.incolor=!0},getblur:function(){""==i.amount&&(i.amount="|",i.incolor=!1)},getcoupons:function(){i.receiveData.getData(i,"/coupon/valid4service/"+i.serviceId+"/"+i.agentNo,"res",function(){i.res.success?(i.coupons=i.res.result,i.couponNum=i.coupons.length,i.computeAmount()):alert(i.res.message)})},computeAmount:function(){var t;if(2==i.$route.query.single&&(i.amount=i.$route.query.amounts,i.amounts=i.$route.query.amounts),void 0!=i.couponid)for(var e=0;e<i.coupons.length;e++)i.couponid==i.coupons[e].id&&(i.coupon=i.coupons[e]);null!=i.coupon&&(i.couponDesc="¥"+i.coupon.amount),null==i.coupon?t=i.amounts:i.coupon.usageCondition>i.amounts?i.coupon=null:i.coupon.amount>0&&(t=i.amounts-i.coupon.amount),i.totalAmount=t>0?Number(t).toFixed(2):.01},showCoupons:function(){i.$router.push({path:"/coupon",name:"coupon",query:{single:2,orderId:i.orderId,status:i.status,serviceId:i.serviceId,agentNo:i.agentNo,amounts:i.amounts,couponid:i.couponid}})},showpay:function(){var t=i.amount;""==t||isNaN(t)?alert("请输入正确金额"):(i.amounts=i.amount,i.Mask=!0,i.computeAmount())},onlinePay:function(){if(!i.orderId||i.orderId<=0)alert("页面错误，请到订单详情页重新发起支付！");else{var t=i.amount;""==t||isNaN(t)?alert("请输入正确金额"):i.onlinePays()}},onlinePays:function(){var e="";null!=i.coupon&&(e=i.coupon.id),t("#zzmb").show(),i.receiveData.postData(i,"/customService/order/pay?orderId="+i.orderId+"&amount="+i.amount+"&couponId="+e,{},"res",function(){i.res.success?(n.a.config({debug:!1,appId:i.res.result.appid,timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,signature:i.res.result.paysign,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,package:i.res.result.package,signType:i.res.result.signtype,paySign:i.res.result.paysign,success:function(t){alert("支付成功！"),15==i.status?i.ChangeState():i.$router.push({path:"/appraise",query:{ordersID:i.orderId}})},fail:function(e){t("#zzmb").hide()},cancel:function(t){i.paycancel()}})):(alert(null==i.res.message?"支付请求失败，请稍后重试!":i.res.message),t("#zzmb").hide())})},paycancel:function(){i.receiveData.postData(i,"customService/order/cancelPay?orderId="+i.orderId,null,"res",function(){i.res.success?(alert("支付取消"),t("#zzmb").hide()):(t("#zzmb").hide(),alert(i.res.message))})},ChangeState:function(){i.receiveData.postData(i,"customService/order/notifyPay?orderId="+i.orderId,null,"res",function(){i.res.success?i.$router.push({path:"/appraise",query:{ordersID:i.orderId}}):(i.Mask=!1,alert(null==i.res.message?"系统异常，请稍后重试！":i.res.message),t("#zzmb").hide())})}},computed:{}}}).call(e,s("7t+N"))},aMnh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("a9ow"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"repay"},[s("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),t._v(" "),s("div",{staticClass:"title-top"},[t._v("服务已完工，请支付费用")]),t._v(" "),s("div",{staticClass:"title-mid lite-divider"},[s("div",{staticClass:"title-mid-top"},[t._v("请输入费用（元）")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"title-mid-bottom",class:{tcolor:t.incolor},attrs:{type:"text"},domProps:{value:t.amount},on:{focus:function(e){t.getfocus()},blur:function(e){t.getblur()},input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"main_btn"},[s("div",{staticClass:"btn",on:{click:t.showpay}},[t._v("点击支付")])]),t._v(" "),s("div",{staticClass:"vue-popup"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.Mask,expression:"Mask"}],staticClass:"mask"}),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.Mask,expression:"Mask"}],staticClass:"popup-content"},[s("div",{staticClass:"proup"},[s("div",[s("span",{staticClass:"fs3"},[t._v("¥ ")]),s("span",{staticClass:"fs4 fs4w"},[t._v(t._s(t.totalAmount))])]),t._v(" "),s("div",{staticClass:"couponitem"},[s("span",{staticClass:"fl"},[t._v("订单金额")]),t._v(" "),s("span",{staticClass:"fr"},[t._v("¥"+t._s(t.amounts))])]),t._v(" "),s("div",{staticClass:"couponitem",on:{click:t.showCoupons}},[s("div",{staticClass:"fl"},[s("span",[t._v("优惠券")]),t._v(" "),s("span",{staticClass:" baoyou_desc"},[t._v("  "+t._s(t.couponNum)+"张可用")])]),t._v(" "),s("div",{staticClass:"fr"},[s("span",[t._v(t._s(t.couponDesc))])])]),t._v(" "),s("div",{staticClass:"btn1 btn",on:{click:t.onlinePay}},[t._v("立即支付")])])])])],1)])},staticRenderFns:[]};var a=function(t){s("YCOr")},i=s("VU/8")(o.a,n,!1,a,"data-v-6af5854d",null);e.default=i.exports}});