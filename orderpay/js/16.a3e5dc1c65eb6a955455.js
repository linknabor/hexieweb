webpackJsonp([16],{Vpf0:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,r={data:function(){return{order:{},orderId:this.$route.query.orderId,address:{},cartlist:[],totalCount:0,totalAmount:0,price:0,shipFee:0}},created:function(){a=this},components:{},computed:{},mounted:function(){a.getaddr(),a.getcart(),a.orders()},methods:{getaddr:function(){a.receiveData.getData(a,"repair/project/1","res",function(){a.res.success?a.res.result.address&&(a.address=a.res.result.address):null!=a.res.messages&&40001!=a.res.errorCode&&alert(a.res.messages)})},getcart:function(){a.receiveData.getData(a,"/getOrderDetail/"+a.orderId,"res",function(){a.res.success?a.res.result&&(a.cartlist=a.res.result):null!=a.res.messages&&40001!=a.res.errorCode&&alert(a.res.messages)})},orders:function(){a.receiveData.getData(a,"/getOrder/"+a.orderId,"res",function(){a.res.success?(a.order=a.res.result,a.totalAmount=a.res.result.totalAmount,a.shipFee=a.res.result.shipFee,a.price=a.res.result.price,a.totalCount=a.res.result.count):null!=a.res.messages&&40001!=a.res.errorCode&&alert(a.res.messages)})},btn:function(){5!=a.order.status&&2!=a.order.status&&a.$router.push({path:"/delivery",query:{orderId:a.orderId}})}}},i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"specialdetail"},[e("div",[e("div",{staticClass:"addr"},[e("div",{staticClass:"ov heig37"},[e("span",{staticClass:"fl"},[e("i",{staticClass:"iconfont icon-loc-s"}),s._v("收货人："+s._s(s.address.receiveName))]),s._v(" "),e("span",{staticClass:"fr"},[s._v(s._s(s.address.tel))])]),s._v(" "),e("div",[e("span",{staticClass:"cor99"},[s._v("收货地址   "+s._s(s.address.province)+s._s(s.address.city)+s._s(s.address.county)+s._s(s.address.xiaoquName)+s._s(s.address.detailAddress))])])]),s._v(" "),e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("div",{staticClass:"wares"},s._l(s.cartlist,function(t,a){return e("div",{key:a,staticClass:"padd15"},[e("span",[s._v(s._s(t.ruleName))]),e("br"),s._v(" "),e("span",{staticClass:"color"},[s._v("¥ "+s._s(t.price))]),e("span",{staticClass:"fs12"},[s._v("/箱")]),s._v(" "),e("span",{staticClass:"counts fr"},[s._v("×"+s._s(t.count))])])})),s._v(" "),e("div",{staticClass:"Statistics"},[e("div",[e("span",[s._v("共计"+s._s(s.totalCount)+"件商品")])])]),s._v(" "),e("div",{staticClass:"money"},[e("div",{staticClass:"ov"},[e("span",{staticClass:"fl"},[s._v("商品总价")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalAmount))])]),s._v(" "),e("div",{staticClass:"ov"},[e("span",{staticClass:"fl"},[s._v("运费")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.shipFee))])]),s._v(" "),e("div",{staticClass:"ov fs18"},[e("span",{staticClass:"fl"},[s._v("实付金额")]),e("span",{staticClass:"fr color2"},[s._v("¥"+s._s(s.price))])])]),s._v(" "),e("div",{staticClass:"status"},[e("span",{staticClass:"fl"},[s._v("订单状态")]),e("span",{staticClass:"fr color2"},[s._v(s._s(s.order.statusStr))])]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==s.order.status,expression:"order.status == 5"}],staticClass:"foter"},[s._m(1),s._v(" "),e("div",{staticClass:"express "},[e("div",{staticClass:"ov"},[e("span",{staticClass:"fl"},[s._v("快递公司")]),e("span",{staticClass:"fr"},[s._v(s._s(s.order.logisticName))])]),s._v(" "),e("div",{staticClass:"ov"},[e("span",{staticClass:"fl"},[s._v("快递单号")]),e("span",{staticClass:"fr"},[s._v(s._s(s.order.logisticNo))])])])])])]),s._v(" "),e("div",{staticStyle:{height:"2rem"}}),s._v(" "),e("div",{staticClass:"btn",on:{click:s.btn}},[e("span",[s._v("确定发货")])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"list"},[t("div",[t("span",[this._v("商品列表")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"title"},[t("span",[this._v("物流信息")])])}]};var c=e("VU/8")(r,i,!1,function(s){e("s8x3")},"data-v-5ab8b13d",null);t.default=c.exports},s8x3:function(s,t){}});