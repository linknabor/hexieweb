webpackJsonp([13],{BD5V:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("fxnj"),n=t.n(a),o=void 0,r={data:function(){return{zzshow:!1,orders:[],currentStatus:"ALL",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){o=this},components:{},computed:{},mounted:function(){o.query()},methods:{query:function(){o.receiveData.getData(o,"evoucher/orders/"+o.currentStatus,"res",function(){o.res.success?o.orders=o.res.result:alert(o.messages)})},toggleDropdown:function(){o.dropdownCollapsed=!o.dropdownCollapsed},selectDropdown:function(e){o.selectedName=o.dropdowns[e].name,o.currentStatus=o.dropdowns[e].value,o.query()},orderPay:function(e){o.zzshow=!0,o.receiveData.getData(o,"requestPay/"+e.id,"n",function(){o.n.success||(alert(o.n.message),o.zzshow=!1),n.a.config({debug:!1,appId:o.n.result.appId,timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,signature:o.n.result.signature,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,package:o.n.result.pkgStr,signType:o.n.result.signType,paySign:o.n.result.signature,success:function(s){o.notifyPaySuccess(e)},cancel:function(e){o.zzshow=!1}})})},notifyPaySuccess:function(e){o.receiveData.getData(o,"/notifyPayed/"+e.id,"res",function(){o.res.success&&(e.status=1,o.zzshow=!1)})},orderCancel:function(e){o.receiveData.getData(o,"/cancelOrder/"+e.id,"res",function(){o.res.success?o.cancelPay(e):alert("取消失败，请稍后重试！")})},cancelPay:function(e){o.receiveData.getData(o,"/order/cancelRequestPay/"+e.id,"res",function(){o.res.success?(e.status=2,e.statusStr="已取消",alert("订单已取消")):alert(o.message)})},VolumeCode:function(e){window.location.href=o.basePageUrl+"person/index.html?"+o.common.getoriApp()+"#/cardrolldetail?orderId="+e.id}}},c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cardorder"},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:e.dropdownCollapsed},on:{click:e.toggleDropdown}},[t("span",[e._v(e._s(e.selectedName))]),e._v(" "),e.dropdownCollapsed?t("div",{staticClass:"dropdown"},e._l(e.dropdowns,function(s,a){return t("div",{key:a,staticClass:"dropdown-item",class:{noborder:e.dropdowns.length-1==a},on:{click:function(s){e.selectDropdown(a)}}},[e._v(e._s(s.name))])})):e._e()]),e._v(" "),e._l(e.orders,function(s){return t("div",{key:s.id,staticClass:"ov lite-divider pd10 ",staticStyle:{color:"#3b3937"}},[t("div",{staticClass:"marg-bottom"},[t("img",{staticClass:"icon-repair fl",attrs:{src:s.productThumbPic}}),e._v(" "),t("div",{staticClass:"ov right-text not-used"},[t("div",{staticClass:"spot pbottom"},[e._v(e._s(s.productName))]),e._v(" "),t("div",{staticClass:"pbottom"},[e._v("¥"+e._s(s.price))]),e._v(" "),t("div",{staticClass:"ptop ov "},[t("span",{staticClass:"fl "},[e._v("数量: "+e._s(s.count))]),e._v(" "),t("span",{staticClass:"p15 right-color used-r"},[e._v(e._s(s.statusStr))])])])]),e._v(" "),t("div",{staticClass:"mrg5"},[t("span",{staticClass:"fl"},[e._v(e._s(s.createDateStr))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"item.status == 0"}],staticClass:"fr crrd-dispay",on:{click:function(t){t.stopPropagation(),e.orderPay(s)}}},[e._v("付款")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"item.status == 0"}],staticClass:"fr card-jm",on:{click:function(t){t.stopPropagation(),e.orderCancel(s)}}},[e._v("取消订单")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==s.status,expression:"item.status == 1"}],staticClass:"fr card-jm",on:{click:function(t){e.VolumeCode(s)}}},[e._v("查看卷码")])])])}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.zzshow,expression:"zzshow"}],staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"}})],2)])},staticRenderFns:[]};var i=t("VU/8")(r,c,!1,function(e){t("jtGD")},"data-v-3e287997",null);s.default=i.exports},jtGD:function(e,s){}});