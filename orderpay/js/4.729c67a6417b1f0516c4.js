webpackJsonp([4,20],{"136Z":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=void 0,n={name:"coupon",data:function(){return{coupons:[],couponid:this.$route.query.couponid,single:this.$route.query.single,orderId:"",status:"",serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,service_id:this.$route.query.service_id,org_id:this.$route.query.org_id,amounts:this.$route.query.amounts}},created:function(){o=this},components:{},computed:{},mounted:function(){o.queryCoupon()},methods:{queryCoupon:function(){var s,t;1==o.single?(s=o.service_id,t=o.org_id):(s=o.serviceId,t=o.agentNo),o.receiveData.getData(o,"/coupon/valid4service/"+s+"/"+t,"res",function(){if(o.res.success){var s;s=o.res.result;for(var t=0;t<s.length;t++)s[t].usageCondition<o.amounts&&o.coupons.push(s[t])}else alert(o.res.message)})},apply:function(s){o.couponid!=s.id?o.couponid=s.id:o.couponid=""},determine:function(){1==o.single?o.$router.push({path:"/singlepage",name:"singlepage",query:{couponid:o.couponid,Mask:!0}}):(o.orderId=o.$route.query.orderId,o.status=o.$route.query.status,o.$router.push({path:"/payment",name:"payment",query:{orderId:o.orderId,status:o.status,serviceId:o.serviceId,agentNo:o.agentNo,amounts:o.amounts,single:o.single,Mask:!0,couponid:o.couponid}}))}}},a={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"coupons"},[e("div",{staticClass:"content"},[e("div",{staticClass:"head"},[s._v("\n            可有优惠券\n        ")]),s._v(" "),s._l(s.coupons,function(t){return e("div",{key:t.id,staticClass:"coupon ov",on:{click:function(e){s.apply(t)}}},[e("div",{staticClass:"fl coupon-right"},[e("div",{staticClass:"marspan"},[e("span",{staticClass:"f48"},[s._v(s._s(t.amount))]),e("br"),s._v(" "),e("span",{staticClass:"text3 mg1"},[s._v("满")]),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.usageCondition,expression:"item.usageCondition ==0"}],staticClass:"text3 mg1"},[s._v("任意金额可用")]),e("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.usageCondition,expression:"item.usageCondition !=0"}],staticClass:"text3 mg1"},[s._v(s._s(t.usageCondition)+"可用")])])]),s._v(" "),e("div",{staticClass:"fl coupon-left "},[e("i",{staticClass:"icon_se ",class:{icon_seactive:t.id==s.couponid}}),s._v(" "),e("div",{staticClass:"tSemicircle"}),s._v(" "),e("div",{staticClass:"ov describe"},[e("span",{staticClass:"text1"},[s._v(s._s(t.title))]),s._v(" "),e("span",{staticClass:"text3 describe-h ellipsis2"},[s._v(s._s(t.couponDesc))]),s._v(" "),e("span",{staticClass:"text3"},[s._v(s._s(t.useStartDateStr)+"-"+s._s(t.useEndDateStr))])]),s._v(" "),e("div",{staticClass:"bSemicircle"})])])})],2),s._v(" "),e("div",{staticClass:"btn_area",on:{click:function(t){s.determine()}}},[e("div",{staticClass:"more_btn"},[s._v("确定")])])])},staticRenderFns:[]};var i=e("VU/8")(n,a,!1,function(s){e("MgFy")},"data-v-1899bed7",null);t.default=i.exports},MgFy:function(s,t){},a9ow:function(s,t,e){"use strict";(function(s){var o=e("fxnj"),n=e.n(o),a=e("Au9i"),i=(e.n(a),e("136Z"),void 0);t.a={data:function(){return{Mask:this.$route.query.Mask||!1,amount:"|",amounts:0,orderId:this.$route.query.orderId,incolor:!1,status:this.$route.query.status,serviceId:this.$route.query.serviceId,agentNo:this.$route.query.agentNo,couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],totalAmount:0,couponid:this.$route.query.couponid}},created:function(){i=this},mounted:function(){i.getsingle()},components:{},methods:{getfocus:function(){"|"==i.amount&&(i.amount=""),i.incolor=!0},getblur:function(){""==i.amount&&(i.amount="|",i.incolor=!1)},getsingle:function(){2==i.$route.query.single&&(i.amount=i.$route.query.amounts,i.amounts=i.$route.query.amounts,i.getcoupons())},getcoupons:function(){i.receiveData.getData(i,"/coupon/valid4service/"+i.serviceId+"/"+i.agentNo,"res",function(){if(i.res.success){if(null!=i.res.result){var s;s=i.res.result;for(var t=0;t<s.length;t++)s[t].usageCondition<i.amounts&&i.coupons.push(s[t]);i.couponNum=i.coupons.length,2==i.$route.query.single?""==i.couponid&&(i.couponid=void 0):(i.coupon=i.coupons[0],i.couponid=i.coupon.id),i.computeAmount()}}else alert(i.res.message)})},computeAmount:function(){var s;if(void 0!=i.couponid)for(var t=0;t<i.coupons.length;t++)i.couponid==i.coupons[t].id&&(i.coupon=i.coupons[t]);null!=i.coupon&&(null==i.coupon.usageCondition||i.coupon.usageCondition>i.amounts?(alert("当前优惠券不可用"),i.coupon=null):i.couponDesc="¥ "+i.coupon.amount),null==i.coupon?s=i.amounts:i.coupon.amount>0&&(s=i.amounts-i.coupon.amount),i.totalAmount=s>0?Number(s).toFixed(2):.01},showCoupons:function(){0!=i.coupons.length&&null!=i.coupons&&i.$router.push({path:"/coupon",name:"coupon",query:{single:2,orderId:i.orderId,status:i.status,serviceId:i.serviceId,agentNo:i.agentNo,amounts:i.amounts,couponid:i.couponid}})},showclose:function(){var s=this;i.Mask=!1,setTimeout(function(){i.$router.push({path:"/payment",query:{orderId:i.orderId,status:i.status,serviceId:i.serviceId,agentNo:i.agentNo}}),s.$router.go(0)},150)},showpay:function(){var s=i.amount;""==s||isNaN(s)?alert("请输入正确金额"):(i.getcoupons(),i.amounts=i.amount,i.Mask=!0,i.computeAmount())},onlinePay:function(){if(!i.orderId||i.orderId<=0)alert("页面错误，请到订单详情页重新发起支付！");else{var s=i.amount;""==s||isNaN(s)?alert("请输入正确金额"):i.onlinePays()}},onlinePays:function(){var t="";null!=i.coupon&&(t=i.coupon.id),s("#zzmb").show(),i.receiveData.postData(i,"/customService/order/pay?orderId="+i.orderId+"&amount="+i.amount+"&couponId="+t,{},"res",function(){i.res.success?(n.a.config({debug:!1,appId:i.res.result.appid,timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,signature:i.res.result.paysign,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,package:i.res.result.package,signType:i.res.result.signtype,paySign:i.res.result.paysign,success:function(s){alert("支付成功！"),15==i.status?i.ChangeState():i.$router.push({path:"/appraise",query:{ordersID:i.orderId}})},fail:function(t){s("#zzmb").hide()},cancel:function(s){i.paycancel()}})):(alert(null==i.res.message?"支付请求失败，请稍后重试!":i.res.message),s("#zzmb").hide())})},paycancel:function(){i.receiveData.postData(i,"customService/order/cancelPay?orderId="+i.orderId,null,"res",function(){i.res.success?(alert("支付取消"),s("#zzmb").hide()):(s("#zzmb").hide(),alert(i.res.message))})},ChangeState:function(){i.receiveData.postData(i,"customService/order/notifyPay?orderId="+i.orderId,null,"res",function(){i.res.success?i.$router.push({path:"/appraise",query:{ordersID:i.orderId}}):(i.Mask=!1,alert(null==i.res.message?"系统异常，请稍后重试！":i.res.message),s("#zzmb").hide())})}},computed:{}}}).call(t,e("7t+N"))},aMnh:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("a9ow"),n={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"repay"},[e("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),s._v(" "),e("div",{staticClass:"title-top"},[s._v("服务已完工，请支付费用")]),s._v(" "),e("div",{staticClass:"title-mid lite-divider"},[e("div",{staticClass:"title-mid-top"},[s._v("请输入费用（元）")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.amount,expression:"amount"}],staticClass:"title-mid-bottom",class:{tcolor:s.incolor},attrs:{type:"text"},domProps:{value:s.amount},on:{focus:function(t){s.getfocus()},blur:function(t){s.getblur()},input:function(t){t.target.composing||(s.amount=t.target.value)}}})]),s._v(" "),e("div",{staticClass:"main_btn"},[e("div",{staticClass:"btn",on:{click:s.showpay}},[s._v("点击支付")])]),s._v(" "),e("div",{staticClass:"vue-popup"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"mask"}),s._v(" "),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"popup-content"},[e("span",{staticClass:"close",on:{click:function(t){s.showclose()}}},[s._v("×")]),s._v(" "),e("div",{staticClass:"proup"},[e("div",[e("span",{staticClass:"fs3"},[s._v("¥ ")]),e("span",{staticClass:"fs4 fs4w"},[s._v(s._s(s.totalAmount))])]),s._v(" "),e("div",{staticClass:"couponitem"},[e("span",{staticClass:"fl"},[s._v("订单金额")]),s._v(" "),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.amounts))])]),s._v(" "),e("div",{staticClass:"couponitem",on:{click:function(t){s.showCoupons()}}},[e("div",{staticClass:"fl"},[e("span",[s._v("优惠券")]),s._v(" "),e("span",{staticClass:" baoyou_desc"},[s._v("  "+s._s(s.couponNum)+"张可用")])]),s._v(" "),e("div",{staticClass:"fr"},[e("span",[s._v(s._s(s.couponDesc))])])]),s._v(" "),e("div",{staticClass:"btn1 btn",on:{click:s.onlinePay}},[s._v("立即支付")])])])])],1)])},staticRenderFns:[]};var a=function(s){e("yD+7")},i=e("VU/8")(o.a,n,!1,a,"data-v-2076bbb4",null);t.default=i.exports},"yD+7":function(s,t){}});