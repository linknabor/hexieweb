webpackJsonp([8],{CNAX:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Au9i"),i=s("fxnj"),a=s.n(i),o=void 0,n={data:function(){return{order:{},orderId:"",timeStr:""}},created:function(){o=this;var t=location.href.split("#")[0];o.receiveData.wxconfig(o,a.a,["chooseWXPay"],t)},mounted:function(){o.$route.query.orderId&&(o.orderId=o.$route.query.orderId),o.getUrlParam("orderId")&&(o.orderId=o.getUrlParam("orderId"));var t=location.href.split("#")[0];o.receiveData.wxconfig(o,a.a,["onMenuShareTimeline","onMenuShareAppMessage"],t),o.orders()},components:{},methods:{getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null},orders:function(){o.receiveData.getData(o,"/getOrder/"+o.orderId,"n",function(){o.n.success?(o.order=o.n.result,o.timeStr=o.getTimeStr(),o.common.initShareConfig("代扔垃圾服务报名，限时优惠中！",o.basePageUrl+"pay/rgroups.html?state=123#/rgroupdetail?ruleId="+o.order.groupRuleId,o.order.productThumbPic,"小区报名满50人开通",a.a)):(alert("获取订单信息失败"),o.$router.push({path:"/orders"}))})},getTimeStr:function(){return 0==o.order.receiveTimeType?"工作日":1==o.order.receiveTimeType?"节假日":2==o.order.receiveTimeType?"任何时间":void 0},orderPay:function(t){o.receiveData.getData(o,"requestPay/"+t.id,"n",function(){o.n.success?a.a.chooseWXPay({timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,package:o.n.result.pkgStr,signType:o.n.result.signType,paySign:o.n.result.signature,success:function(e){o.notifyPaySuccess(t),t.status=1}}):alert("支付请求失败，请稍后重试！")})},notifyPaySuccess:function(t){o.receiveData.getData(o,"/notifyPayed/"+t.id,"n",function(){})},orderCancel:function(t){r.MessageBox.confirm("确定要取消订单?").then(function(e){"confirm"==e&&o.receiveData.getData(o,"/cancelOrder/"+t.id,"res",function(){o.res.success?(t.status=2,t.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(t){})},orderConfirm:function(t){r.MessageBox.confirm("确定要已收货?").then(function(e){"confirm"==e&&o.receiveData.getData(o,"/signOrder/"+t.id,"n",function(){o.n.success?(t.status=6,t.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(t){})},checkLogisics:function(t){var e=escape(t.logisticName);o.$router.push({path:"/logistice",query:{com:e,nu:t.logisticNo}})},comment:function(t){o.$router.push({path:"/comment",query:{orderId:t.id}})},gotoGroupDetail:function(t){window.location.href=o.basePageUrl+"pay/rgroups.html?#/rgroupinvite?ruleId="+t.groupRuleId+"&share=1"}},computed:{}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"adorder"},[s("div",{staticClass:"order-number fs13 plr15"},[t._v("订单编号 "+t._s(t.order.orderNo))]),t._v(" "),s("div",{staticClass:"p15"},[s("img",{staticClass:"fl order-picture",attrs:{src:t.order.productThumbPic}}),t._v(" "),s("div",{staticClass:"ov pb15 fs14"},[t._v(t._s(t.order.productName))]),t._v(" "),s("div",{staticClass:"ov pb15 lite-divider",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"fl fs13"},[t._v("\n                     总计 ¥"+t._s(t.order.price)+"\n                 ")]),t._v(" "),s("span",{staticClass:"fr fs13 highlight"},[t._v("共"+t._s(t.order.count)+"个商品")])])]),t._v(" "),s("div",{staticClass:"plr15 divider"},[s("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px"}},[t._v("收货信息")]),t._v(" "),s("div",{staticClass:"item pt15"},[s("label",[t._v("收货地址")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.order.address))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("收货时间")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.timeStr))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("备注")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.order.memo))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("联系人")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.order.receiverName))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("手机号")]),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(t.order.tel))])])]),t._v(" "),s("div",{staticClass:"p15 order-item divider"},[s("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px"}},[t._v("订单状态")]),t._v(" "),s("div",{staticClass:"pt15 fs13",staticStyle:{"line-height":"23px"}},[s("span",{staticClass:"highlight fs14"},[t._v(t._s(t.order.statusStr))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.order.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){t.orderPay(t.order)}}},[t._v("付款")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.order.status,expression:"order.status==0"}],staticClass:"btn-plain fr",on:{click:function(e){t.orderCancel(t.order)}}},[t._v("取消订单")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:5==t.order.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){t.orderConfirm(t.order)}}},[t._v("确认收货")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:5==t.order.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",staticStyle:{"margin-right":"5px"},on:{click:function(e){t.checkLogisics(t.order)}}},[t._v("查看物流")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:6==t.order.status&&1!=t.order.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}]},[s("div",{staticClass:"lite-btn fs13 fr",on:{click:function(e){t.comment(t.order)}}},[t._v("评价商品")])])])]),t._v(" "),null!=t.order.logisticName&&""!=t.order.logisticName?s("div",{staticClass:"p15 order-item"},[s("div",{staticClass:"section-title"},[t._v("物流信息")]),t._v(" "),s("div",{staticClass:"ov fs14 ptb15"},[s("div",{staticClass:"ov fs14"},[t._v(" 快递公司："+t._s(t.order.logisticName))]),t._v(" "),s("div",{staticClass:"ov fs14"},[t._v(" 快递单号："+t._s(t.order.logisticNo))])])]):t._e(),t._v(" "),4==t.order.orderType?s("div",{staticClass:"p15 order-item divider",staticStyle:{height:"60px"}},[s("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"}},[t._v("团购详情")]),t._v(" "),s("div",{staticClass:"pt15 fs13",staticStyle:{"line-height":"23px","padding-top":"5px"}},[s("div",{staticClass:"lite-btn fs13 fr",on:{click:function(e){t.gotoGroupDetail(t.order)}}},[t._v("团购详情")])])]):t._e(),t._v(" "),s("div",{staticStyle:{"margin-bottom":"2rem"}})])])},staticRenderFns:[]};var d=s("VU/8")(n,c,!1,function(t){s("iN7m")},"data-v-27bcdc78",null);e.default=d.exports},iN7m:function(t,e){}});
//# sourceMappingURL=8.bc879f950253de4232de1564644633010.js.map