webpackJsonp([9],{LVZS:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),r=e.n(a),i=e("fxnj"),c=e.n(i),n=void 0,o={data:function(){return{address:{},cartlist:[],totalShipFee:0,totalPrice:0,totalamount:0,Mask:!1,orderId:"",itemList:[{ruleId:395,count:3},{ruleId:396,count:10},{ruleId:397,count:1},{ruleId:395,count:3},{ruleId:396,count:10},{ruleId:397,count:1}]}},created:function(){n=this},components:{},computed:{},mounted:function(){n.getaddr(),n.ordercheck()},methods:{getaddr:function(){n.receiveData.getData(n,"repair/project/1","res",function(){n.res.success?n.res.result.address&&(n.address=n.res.result.address):alert(null==n.res.message?"请稍后重试！":n.res.message)})},ordercheck:function(){var s={rderType:"3",payType:"2",itemList:n.itemList};n.receiveData.postData(n,"/order/check",s,"res",function(){n.res.success?(n.cartlist=n.res.result.orderItems,n.totalamount=n.res.result.totalAmount,n.totalShipFee=n.res.result.shipFee,n.totalPrice=n.res.result.price):alert(n.res.message)})},pay:function(){n.Mask=!0;for(var s={serviceAddressId:n.address.id,payType:2,orderType:3,itemList:[]},t=0;t<n.cartlist.length;t++)s.itemList.push({ruleId:n.cartlist[t].ruleId,count:n.cartlist[t].count,orderType:n.cartlist[t].orderType,productId:n.cartlist[t].productId});n.receiveData.postData(n,"/createOrderFromCart",s,"res",function(){n.res.success?(n.orderId=n.res.result.id,n.requestPay()):alert(n.res.message)})},requestPay:function(){var s="/requestPay/"+n.orderId;n.receiveData.postData(n,s,{},"n",function(){n.n.success?(c.a.config({debug:!1,appId:n.n.result.appId,timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,signature:n.n.result.signature,jsApiList:["chooseWXPay"]}),c.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(s){alert("下单成功！"),n.Mask=!1},fail:function(s){n.Mask=!1,console.log(r()(s))},cancel:function(s){alert("支付取消"),n.Mask=!1}})):(n.Mask=!1,alert(null==n.res.message?"下单失败，请稍后重试！":n.res.message))})}}},l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"confirmation"},[e("div",{staticClass:"addr"},[e("div",{staticClass:"ov heig37 "},[e("span",{staticClass:"fl"},[e("i",{staticClass:"iconfont icon-loc-s"}),s._v("收货人："+s._s(s.address.receiveName))]),s._v(" "),e("span",{staticClass:"fr"},[s._v(s._s(s.address.tel))])]),s._v(" "),e("div",[e("span",{staticClass:"cor99"},[s._v("收货地址   "+s._s(s.address.province)+s._s(s.address.city)+s._s(s.address.county)+s._s(s.address.xiaoquName)+s._s(s.address.detailAddress))])])]),s._v(" "),s._l(s.cartlist,function(t,a){return e("div",{key:a,staticClass:"cart-contents"},[e("div",{staticStyle:{height:"2.23rem"}},[e("div",{staticClass:"ov"},[e("div",{staticClass:"fl "},[e("div",{staticClass:"cart-imgs"},[e("img",{attrs:{src:t.productThumbPic,alt:""}})])]),s._v(" "),e("div",{staticClass:"ov cart-content "},[e("span",{staticClass:"f14 marb4"},[s._v(s._s(t.ruleName))]),e("br"),s._v(" "),e("span",{staticClass:"marb4 free color"},[s._v("满"+s._s(t.freeShippingNum)+"件免运费")]),e("br"),s._v(" "),e("del",{staticClass:"marb4"},[s._v("¥"+s._s(t.oriPrice))]),e("br"),s._v(" "),e("span",{staticClass:"color"},[s._v("¥"+s._s(t.price))]),e("span",[s._v("/箱")]),s._v(" "),e("div",{staticClass:"choose-num"},[e("span",[s._v("×"+s._s(t.count))])])])])])])}),s._v(" "),e("div",{staticClass:"mian ov fs14"},[e("div",[e("span",{staticClass:"fl"},[s._v("商品金额")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalamount))])]),s._v(" "),e("div",[e("span",{staticClass:"fl"},[s._v("运费")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalShipFee))])])]),s._v(" "),e("div",{staticStyle:{height:"2rem"}}),s._v(" "),e("div",{staticClass:"foter fs14",on:{click:s.pay}},[e("div",{staticClass:"fl foter-left"},[e("span",[s._v("合计：")]),e("span",{staticClass:"color fs18"},[s._v("¥ "+s._s(s.totalPrice))])]),s._v(" "),s._m(0)]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"fr foter-right"},[t("span",[this._v("立即支付")])])}]};var d=e("VU/8")(o,l,!1,function(s){e("Ujj0")},"data-v-11eb5272",null);t.default=d.exports},Ujj0:function(s,t){}});