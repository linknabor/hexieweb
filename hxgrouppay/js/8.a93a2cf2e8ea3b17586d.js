webpackJsonp([8],{IVBI:function(s,t){},LVZS:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),o=e.n(a),r=e("fxnj"),n=e.n(r),c=e("lbHh"),i=e.n(c),l=void 0,u={data:function(){return{address:{},cartlist:[],totalShipFee:0,totalPrice:0,totalAmount:0,Mask:!1,orderId:"",itemList:JSON.parse(window.localStorage.getItem("itemList")),couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],couponid:this.$route.query.couponid,salePlanId:""}},created:function(){l=this},components:{},computed:{},mounted:function(){l.getaddr(),l.ordercheck()},methods:{getaddr:function(){l.receiveData.getData(l,"repair/project/1","res",function(){l.res.success?l.res.result.address&&(l.address=l.res.result.address):alert(null==l.res.message?"请稍后重试！":l.res.message)})},ordercheck:function(){var s={rderType:"3",payType:"2",itemList:l.itemList};l.receiveData.postData(l,"/order/check",s,"res",function(){l.res.success?(l.cartlist=l.res.result.orderItems,l.totalAmount=l.res.result.totalAmount,l.totalShipFee=l.res.result.shipFee,l.totalPrice=l.res.result.price,l.queryCoupon()):alert(l.res.message)})},queryCoupon:function(){for(var s=0;s<l.itemList.length;s++)l.salePlanId+=l.itemList[s].ruleId+",";l.salePlanId=l.salePlanId.substr(0,l.salePlanId.length-1),l.receiveData.getData(l,"/coupon/valid/3/"+l.salePlanId,"res",function(){l.res.success?(l.coupons=l.res.result,l.couponNum=l.coupons.length,l.computeAmount()):alert(l.res.message)})},computeAmount:function(){var s;if(void 0!=l.couponid)for(var t=0;t<l.coupons.length;t++)l.couponid==l.coupons[t].id&&(l.coupon=l.coupons[t]);null!=l.coupon&&(l.couponDesc="¥"+l.coupon.amount),null==l.coupon?s=l.totalPrice:l.coupon.usageCondition>l.totalPrice?l.coupon=null:l.coupon.amount>0&&(s=l.totalPrice-l.coupon.amount),l.totalPrice=s>0?s.toFixed(2):"0.01"},showCoupons:function(){0!=l.coupons.length&&null!=l.coupons?l.$router.push({path:"/coupon",name:"coupon",query:{type:"3",couponid:l.couponid,salePlanId:l.salePlanId}}):window.location.href=l.basePageUrl+"/person/index.html?"+l.common.getoriApp()},pay:function(){var s=i.a.get("sectId");if(""==s||"null"==s||0==s||null==s)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=l.basePageUrl+"wuye/index.html?"+l.common.getoriApp()+"#/myhouse",!1;l.Mask=!0;var t={serviceAddressId:l.address.id,payType:2,orderType:3,itemList:[]};null!=l.coupon&&(t.couponId=l.coupon.id);for(var e=0;e<l.cartlist.length;e++)t.itemList.push({ruleId:l.cartlist[e].ruleId,count:l.cartlist[e].count,orderType:l.cartlist[e].orderType,productId:l.cartlist[e].productId});l.receiveData.postData(l,"/createOrderFromCart",t,"res",function(){l.res.success?(l.orderId=l.res.result.id,l.requestPay()):(alert(l.res.message),l.Mask=!1)})},requestPay:function(){var s="/requestPay/"+l.orderId;l.receiveData.postData(l,s,{},"n",function(){l.n.success?(n.a.config({debug:!1,appId:l.n.result.appId,timestamp:l.n.result.timestamp,nonceStr:l.n.result.nonceStr,signature:l.n.result.signature,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:l.n.result.timestamp,nonceStr:l.n.result.nonceStr,package:l.n.result.pkgStr,signType:l.n.result.signType,paySign:l.n.result.signature,success:function(s){alert("下单成功！"),l.Mask=!1},fail:function(s){l.Mask=!1,console.log(o()(s))},cancel:function(s){alert("支付取消"),l.Mask=!1}})):(l.Mask=!1,alert(null==l.n.message?"下单失败，请稍后重试！":l.n.message))})}}},d={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"confirmation"},[e("div",{staticClass:"addr"},[e("div",{staticClass:"ov heig37 "},[e("span",{staticClass:"fl"},[e("i",{staticClass:"iconfont icon-loc-s"}),s._v("收货人："+s._s(s.address.receiveName))]),s._v(" "),e("span",{staticClass:"fr"},[s._v(s._s(s.address.tel))])]),s._v(" "),e("div",[e("span",{staticClass:"cor99"},[s._v("收货地址   "+s._s(s.address.province)+s._s(s.address.city)+s._s(s.address.county)+s._s(s.address.xiaoquName)+s._s(s.address.detailAddress))])])]),s._v(" "),s._l(s.cartlist,function(t,a){return e("div",{key:a,staticClass:"cart-contents"},[e("div",{staticStyle:{height:"2.23rem"}},[e("div",{staticClass:"ov"},[e("div",{staticClass:"fl "},[e("div",{staticClass:"cart-imgs"},[e("img",{attrs:{src:t.productThumbPic,alt:""}})])]),s._v(" "),e("div",{staticClass:"ov cart-content "},[e("span",{staticClass:"f14 marb4 namecolor"},[s._v(s._s(t.ruleName))]),e("br"),s._v(" "),e("span",{staticClass:"marb4 free color"},[s._v("满"+s._s(t.freeShippingNum)+"件免运费")]),e("br"),s._v(" "),e("del",{staticClass:"marb4"},[s._v("¥"+s._s(t.oriPrice))]),e("br"),s._v(" "),e("span",{staticClass:"color1"},[s._v("¥"+s._s(t.price))]),e("span"),s._v(" "),e("div",{staticClass:"choose-num"},[e("span",[s._v("×"+s._s(t.count))])])])])])])}),s._v(" "),e("div",{staticClass:"mian ov fs14"},[e("div",{staticClass:"p15"},[e("span",{staticClass:"fl "},[s._v("商品金额")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalAmount))])]),s._v(" "),e("div",{staticClass:"p15"},[e("span",{staticClass:"fl "},[s._v("运费")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalShipFee))])]),s._v(" "),e("div",{staticClass:"p15",on:{click:s.showCoupons}},[e("span",{staticClass:"fl fs15"},[s._v("优惠券")]),s._v(" "),e("span",{staticClass:"fl fs15 baoyou_desc"},[s._v(s._s(s.couponNum)+"张可用")]),s._v(" "),e("span",{staticClass:"fr fs15 mlr10"},[s._v(s._s(s.couponDesc))])])]),s._v(" "),e("div",{staticStyle:{width:"100%",height:"70px"}}),s._v(" "),e("div",{staticClass:"foter fs14"},[e("div",{staticClass:"fl foter-left"},[e("span",[s._v("合计：")]),e("span",{staticClass:"color fs18"},[s._v("¥ "+s._s(s.totalPrice))])]),s._v(" "),e("div",{staticClass:"fr foter-right",on:{click:s.pay}},[e("span",[s._v("立即支付")])])]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)])},staticRenderFns:[]};var p=e("VU/8")(u,d,!1,function(s){e("IVBI")},"data-v-6862ce73",null);t.default=p.exports}});