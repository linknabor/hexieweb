webpackJsonp([18],{T2gl:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=void 0,r={data:function(){return{orderId:this.$route.query.orderId,order:{},address:{},cartlist:[],totalCount:0,totalAmount:0,price:0,shipFee:0}},created:function(){e=this},components:{},computed:{},mounted:function(){e.getaddr(),e.getcart(),e.orders()},methods:{getaddr:function(){e.receiveData.getData(e,"repair/project/1","res",function(){e.res.success?e.res.result.address&&(e.address=e.res.result.address):alert(null==e.res.message?"请稍后重试！":e.res.message)})},getcart:function(){e.receiveData.getData(e,"/getOrderDetail/"+e.orderId,"res",function(){e.res.success?e.res.result&&(e.cartlist=e.res.result):alert(e.res.message)})},orders:function(){e.receiveData.getData(e,"/getOrder/"+e.orderId,"res",function(){e.res.success?(e.order=e.res.result,e.totalAmount=e.res.result.totalAmount,e.shipFee=e.res.result.shipFee,e.price=e.res.result.price,e.totalCount=e.res.result.count):alert(e.res.message)})}}},i={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"specialdetail"},[a("div",[a("div",{staticClass:"addr"},[a("div",{staticClass:"ov heig37"},[a("span",{staticClass:"fl"},[a("i",{staticClass:"iconfont icon-loc-s"}),s._v("收货人："+s._s(s.address.receiveName))]),s._v(" "),a("span",{staticClass:"fr"},[s._v(s._s(s.address.tel))])]),s._v(" "),a("div",[a("span",{staticClass:"cor99"},[s._v("收货地址   "+s._s(s.address.province)+s._s(s.address.city)+s._s(s.address.county)+s._s(s.address.xiaoquName)+s._s(s.address.detailAddress))])])]),s._v(" "),a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("div",{staticClass:"wares"},s._l(s.cartlist,function(t,e){return a("div",{key:e,staticClass:"padd15"},[a("span",[s._v(s._s(t.ruleName))]),a("br"),s._v(" "),a("span",{staticClass:"color"},[s._v("¥ "+s._s(t.price))]),a("span",{staticClass:"fs12"},[s._v("/箱")]),s._v(" "),a("span",{staticClass:"counts fr"},[s._v("×"+s._s(t.count))])])})),s._v(" "),a("div",{staticClass:"Statistics"},[a("div",[a("span",[s._v("共计"+s._s(s.totalCount)+"件商品")])])]),s._v(" "),a("div",{staticClass:"money"},[a("div",{staticClass:"ov"},[a("span",{staticClass:"fl"},[s._v("商品总价")]),a("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalAmount))])]),s._v(" "),a("div",{staticClass:"ov"},[a("span",{staticClass:"fl"},[s._v("运费")]),a("span",{staticClass:"fr"},[s._v("¥"+s._s(s.shipFee))])]),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"ov fs18"},[a("span",{staticClass:"fl"},[s._v("实付金额")]),a("span",{staticClass:"fr color2"},[s._v("¥"+s._s(s.price))])])]),s._v(" "),a("div",{staticClass:"status"},[a("span",{staticClass:"fl"},[s._v("订单状态")]),a("span",{staticClass:"fr color2"},[s._v(s._s(s.order.statusStr))])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==s.order.status,expression:"order.status == 5"}],staticClass:"foter"},[s._m(2),s._v(" "),a("div",{staticClass:"express "},[a("div",{staticClass:"ov"},[a("span",{staticClass:"fl"},[s._v("快递公司")]),a("span",{staticClass:"fr"},[s._v(s._s(s.order.logisticName))])]),s._v(" "),a("div",{staticClass:"ov"},[a("span",{staticClass:"fl"},[s._v("快递单号")]),a("span",{staticClass:"fr"},[s._v(s._s(s.order.logisticNo))])])])])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"list"},[t("div",[t("span",[this._v("商品列表")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"ov"},[t("span",{staticClass:"fl"},[this._v("现金券")]),t("span",{staticClass:"fr"},[this._v("¥0")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"title"},[t("span",[this._v("物流信息")])])}]};var c=a("VU/8")(r,i,!1,function(s){a("c/R4")},"data-v-2b8c4f0e",null);t.default=c.exports},"c/R4":function(s,t){}});