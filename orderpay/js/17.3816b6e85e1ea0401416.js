webpackJsonp([17],{BD5V:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("fxnj"),o=t.n(a),n=void 0,r={data:function(){return{zzshow:!1,orders:[],currentStatus:"ALL",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},methods:{query:function(){n.receiveData.getData(n,"evoucher/orders/"+n.currentStatus,"res",function(){n.res.success?n.orders=n.res.result:alert(n.res.messages)})},toggleDropdown:function(){n.dropdownCollapsed=!n.dropdownCollapsed},selectDropdown:function(e){n.selectedName=n.dropdowns[e].name,n.currentStatus=n.dropdowns[e].value,n.query()},orderPay:function(e){n.zzshow=!0,n.receiveData.getData(n,"requestPay/"+e.id,"n",function(){n.n.success||(alert(n.n.message),n.zzshow=!1),o.a.config({debug:!1,appId:n.n.result.appId,timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,signature:n.n.result.signature,jsApiList:["chooseWXPay"]}),o.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(s){n.notifyPaySuccess(e)},cancel:function(e){n.zzshow=!1}})})},notifyPaySuccess:function(e){n.receiveData.getData(n,"/notifyPayed/"+e.id,"res",function(){n.res.success&&(e.status=1,n.zzshow=!1)})},orderCancel:function(e){n.receiveData.getData(n,"/cancelOrder/"+e.id,"res",function(){n.res.success?n.cancelPay(e):alert("取消失败，请稍后重试！")})},cancelPay:function(e){n.receiveData.getData(n,"/order/cancelRequestPay/"+e.id,"res",function(){n.res.success?(e.status=2,e.statusStr="已取消",alert("订单已取消")):alert(n.res.message)})},VolumeCode:function(e){window.location.href=n.basePageUrl+"person/index.html?"+n.common.getoriApp()+"#/cardrolldetail?orderId="+e.id}}},c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cardorder"},[t("div",{staticClass:"card-content"},[t("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:e.dropdownCollapsed},on:{click:e.toggleDropdown}},[t("span",[e._v(e._s(e.selectedName))]),e._v(" "),e.dropdownCollapsed?t("div",{staticClass:"dropdown"},e._l(e.dropdowns,function(s,a){return t("div",{key:a,staticClass:"dropdown-item",class:{noborder:e.dropdowns.length-1==a},on:{click:function(s){e.selectDropdown(a)}}},[e._v(e._s(s.name))])})):e._e()]),e._v(" "),e._l(e.orders,function(s){return t("div",{key:s.id,staticClass:"ov lite-divider pd10 ",staticStyle:{color:"#3b3937"}},[t("div",{staticClass:"marg-bottom"},[t("img",{staticClass:"icon-repair fl",attrs:{src:s.productThumbPic}}),e._v(" "),t("div",{staticClass:"ov right-text not-used"},[t("div",{staticClass:"spot pbottom"},[e._v(e._s(s.productName))]),e._v(" "),t("div",{staticClass:"pbottom"},[e._v("¥"+e._s(s.price))]),e._v(" "),t("div",{staticClass:"ptop ov "},[t("span",{staticClass:"fl "},[e._v("数量: "+e._s(s.count))]),e._v(" "),t("span",{staticClass:"p15 right-color used-r"},[e._v(e._s(s.statusStr))])])])]),e._v(" "),t("div",{staticClass:"mrg5"},[t("span",{staticClass:"fl"},[e._v(e._s(s.createDateStr))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"item.status == 0"}],staticClass:"fr crrd-color card-jm",on:{click:function(t){t.stopPropagation(),e.orderPay(s)}}},[e._v("付款")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"item.status == 0"}],staticClass:"fr card-jm",on:{click:function(t){t.stopPropagation(),e.orderCancel(s)}}},[e._v("取消订单")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==s.status,expression:"item.status == 1"}],staticClass:"fr card-jm",on:{click:function(t){e.VolumeCode(s)}}},[e._v("查看卷码")])])])}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.zzshow,expression:"zzshow"}],staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"}})],2)])},staticRenderFns:[]};var i=t("VU/8")(r,c,!1,function(e){t("yl6+")},"data-v-01c0c5e1",null);s.default=i.exports},"yl6+":function(e,s){}});