webpackJsonp([5],{YtaZ:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("fxnj"),i=a.n(e),l=void 0,n={data:function(){return{oId:this.$route.query.oId,bill:{}}},created:function(){l=this},mounted:function(){var s=location.href.split("#")[0];l.receiveData.wxconfig(l,i.a,["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage"],s),l.querydetail()},methods:{initSession4Test:function(){l.receiveData.getData(l,"/initSession4Test/105","Data",function(){})},querydetail:function(){l.receiveData.postData(l,"/yunxiyi/bill/"+l.oId,null,"res",function(){l.res.success&&(l.bill=l.res.result)})},cancelOrder:function(){l.receiveData.postData(l,"/yunxiyi/bill/"+l.oId+"/cancel",null,"res",function(){l.res.success?l.bill.status=8:alert("订单取消失败，请稍后重试！")})},sign:function(){l.receiveData.postData(l,"/yunxiyi/bill/"+l.oId+"/signed",null,"res",function(){l.res.success?l.bill.status=7:alert("订单签收失败，请稍后重试！")})},pay:function(){l.receiveData.postData(l,"/yunxiyi/pay/"+l.oId,null,"res",function(){l.res.success?i.a.chooseWXPay({timestamp:l.res.result.timestamp,nonceStr:l.res.result.nonceStr,package:l.res.result.pkgStr,signType:l.res.result.signType,paySign:l.res.result.signature,success:function(s){l.notifyPayed()}}):alert(null==l.res.message?"支付请求失败，请稍后重试！":l.res.message)})},notifyPayed:function(){var s="/yunxiyi/notifyPayed/"+l.oId;l.receiveData.getData(l,s,"Data",function(){alert("支付成功！"),l.bill.status=2})}},components:{},computed:{}},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"xiyidetail"},[a("div",{staticClass:"head_line block_area"},[a("img",{staticClass:"product_img",attrs:{src:s.bill.billLogo,alt:""}}),s._v(" "),a("div",{staticClass:"order_desc"},[a("div",{staticClass:"product_info"},[s._v("订单编号: "+s._s(s.bill.orderNo))]),s._v(" "),a("div",{staticClass:"product_info"},[s._v("取件日期: "+s._s(s.bill.serviceDateStr))]),s._v(" "),a("div",{staticClass:"product_info"},[s._v("下单日期: "+s._s(s.bill.createDateStr))])])]),s._v(" "),a("div",{staticClass:"step_area"},[a("p",{staticClass:"title_line"},[s._v("订单状态:")]),s._v(" "),a("div",{staticClass:"step"},[a("i",{staticClass:"step-icon step-pay-gray",class:{"step-pay":s.bill.status>=1}}),s._v(" "),a("div",{staticClass:"step_text"},[s._v("支付")])]),s._v(" "),a("div",{staticClass:"step"},[a("i",{staticClass:"step-icon step-get-gray",class:{"step-get":s.bill.status>=2}}),s._v(" "),a("div",{staticClass:"step_text"},[s._v("取件")])]),s._v(" "),a("div",{staticClass:"step"},[a("i",{staticClass:"step-icon step-wash-gray",class:{"step-wash":s.bill.status>=4}}),s._v(" "),a("div",{staticClass:"step_text"},[s._v("洗衣")])]),s._v(" "),a("div",{staticClass:"step"},[a("i",{staticClass:"step-icon step-send-gray",class:{"step-send":s.bill.status>=5}}),s._v(" "),a("div",{staticClass:"step_text"},[s._v("派送")])]),s._v(" "),a("div",{staticClass:"step"},[a("i",{staticClass:"step-icon step-finish-gray",class:{"step-finish":s.bill.status>=6}}),s._v(" "),a("div",{staticClass:"step_text"},[s._v("完成")])])]),s._v(" "),s.bill.receiveOperator&&!s.bill.sendOperatorName?a("div",{staticClass:"operator_area"},[a("div",{staticClass:"operator_name"},[a("div",[s._v("配送人员: "+s._s(s.bill.receiveOperator))]),s._v(" "),a("div",[s._v("联系方式: "+s._s(s.bill.receiveOperatorTel))])]),s._v(" "),a("div",{staticClass:"phone"},[a("a",{attrs:{href:"tel:"+s.bill.receiveOperatorTel}},[a("i",{staticClass:"phone_icon"})])])]):s._e(),s._v(" "),s.bill.sendOperatorName?a("div",{staticClass:"operator_area"},[a("div",{staticClass:"operator_name"},[a("div",[s._v("配送人员: "+s._s(s.bill.sendOperatorName))]),s._v(" "),a("div",[s._v("联系方式: "+s._s(s.bill.sendOperatorTel))])]),s._v(" "),a("div",{staticClass:"phone"},[a("a",{attrs:{href:"tel:"+s.bill.sendOperatorTel}},[a("i",{staticClass:"phone_icon"})])])]):s._e(),s._v(" "),a("div",{staticClass:"address_area"},[a("div",{staticClass:"batop"},[s._v(" ")]),s._v(" "),a("div",{staticClass:"address_info"},[a("span",{staticStyle:{color:"#3b3937"}},[s._v(s._s(s.bill.receiverName))]),s._v(" "),a("span",{staticStyle:{"margin-left":"20px",color:"#3b3937"}},[s._v(s._s(s.bill.tel))]),s._v(" "),a("div",{staticStyle:{color:"#666666","margin-top":"15px"}},[s._v(s._s(s.bill.address))])]),s._v(" "),a("div",{staticClass:"babot"},[s._v(" ")])]),s._v(" "),a("div",{staticClass:"memo_area"},[a("span",{staticClass:"memo_title"},[s._v("备注:")]),s._v(" "),a("span",{staticClass:"memo_content"},[s._v("\n\t\t\t\t"+s._s(s.bill.memo)+"\n\t\t\t")])]),s._v(" "),a("div",{staticClass:"order_area"},[s._l(s.bill.items,function(t){return a("div",{staticClass:"order_item"},[a("p",{staticClass:"fl w60"},[s._v(s._s(t.title))]),s._v(" "),a("p",{staticClass:"fl w20 fontr"},[s._v("×"+s._s(t.count))]),s._v(" "),a("p",{staticClass:"fl w20 fontr"},[s._v("￥"+s._s(t.price))])])}),s._v(" "),s.bill.shipFee?a("div",{staticClass:"order_item"},[s._v("运费:"),a("span",{staticClass:"fr w20"},[s._v("￥"+s._s(s.bill.shipFee))])]):s._e(),s._v(" "),s.bill.discountAmount?a("div",{staticClass:"order_item"},[s._v("优惠:"),a("span",{staticClass:"fr w20"},[s._v("￥"+s._s(s.bill.discountAmount))])]):s._e(),s._v(" "),a("div",{staticClass:"payinfo"},[s._v("实际支付: ￥"+s._s(s.bill.realAmount)+" ")])],2),s._v(" "),a("div",{attrs:{id:"foot","ms-visible":"bill.status==5||bill.status==6||bill.status==1"}},[1==s.bill.status?a("span",{on:{click:function(t){s.cancelOrder()}}},[s._v("取消订单")]):s._e(),s._v(" "),5==s.bill.status||6==s.bill.status?a("span",{on:{click:function(t){s.sign()}}},[s._v("确认完成")]):s._e(),s._v(" "),1==s.bill.status?a("span",{on:{click:function(t){s.pay()}}},[s._v("支付")]):s._e()])])},staticRenderFns:[]};var r=a("VU/8")(n,c,!1,function(s){a("v6zo")},"data-v-444fdab5",null);t.default=r.exports},v6zo:function(s,t){}});
//# sourceMappingURL=5.043538af8b882d6133f6.js.map