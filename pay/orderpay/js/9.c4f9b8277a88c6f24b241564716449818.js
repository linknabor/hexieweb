webpackJsonp([9],{oGTh:function(t,s){},tWXo:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Au9i"),o=e("fxnj"),r=e.n(o),n=void 0,i={data:function(){return{groupsNum:1,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",orders:[],dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){n=this;var t=location.href.split("#")[0];n.receiveData.wxconfig(n,r.a,["chooseWXPay"],t)},mounted:function(){this.firstALL()},components:{},methods:{firstALL:function(){n.receiveData.getData(n,"orders/status/onsale/"+n.currentStatus,"res",function(){n.res.success?(n.orders=n.res.result,"ALL"==n.currentStatus&&(n.groupsNum=n.res.result.length)):n.orders=[]})},toggleDropdown:function(){n.dropdownCollapsed=!n.dropdownCollapsed},selectDropdown:function(t){n.selectedName=n.dropdowns[t].name,n.currentStatus=n.dropdowns[t].value,n.firstALL(n.currentStatus)},gotoDetail:function(t){n.$router.push({path:"/orderdetail",query:{orderId:t}})},orderCancel:function(t){a.MessageBox.confirm("确定要取消订单?").then(function(s){"confirm"==s&&n.receiveData.getData(n,"/cancelOrder/"+t.id,"res",function(){n.res.success?(t.status=2,t.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(t){})},orderPay:function(t){n.receiveData.getData(n,"requestPay/"+t.id,"n",function(){n.n.success||alert("支付请求失败，请稍后重试"),r.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(s){n.notifyPaySuccess(t),t.status=1}})})},notifyPaySuccess:function(t){n.receiveData.getData(n,"/notifyPayed/"+t.id,"n",function(){})},orderConfirm:function(t){a.MessageBox.confirm("确定要已收货?").then(function(s){"confirm"==s&&n.receiveData.getData(n,"/signOrder/"+t.id,"n",function(){n.n.success?(t.status=6,t.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(t){})},checkLogisics:function(t){var s=escape(t.logisticName);n.$router.push({path:"/logistice",query:{com:s,nu:t.logisticNo}})},comment:function(t){n.$router.push({path:"/comment",query:{orderId:t.id}})}},computed:{}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"orders"},[e("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:t.dropdownCollapsed},staticStyle:{margin:"0 15px"},on:{click:t.toggleDropdown}},[e("span",[t._v(t._s(t.selectedName))]),t._v(" "),t.dropdownCollapsed?e("div",{staticClass:"dropdown"},t._l(t.dropdowns,function(s,a){return e("div",{staticClass:"dropdown-item",class:{noborder:t.dropdowns.length-1==a},on:{click:function(s){t.selectDropdown(a)}}},[t._v(t._s(s.name))])})):t._e()]),t._v(" "),0==t.groupsNum?e("div",{staticClass:"avatar-wraps rels ovs"},[e("div",{staticClass:"filter-imgs avatar-wraps center-bgs"})]):t._e(),t._v(" "),t._l(t.orders,function(s){return e("div",{staticClass:"order-item p15 divider",on:{click:function(e){t.gotoDetail(s.id)}}},[e("img",{staticClass:"fl order-picture",attrs:{src:s.productThumbPic}}),t._v(" "),e("div",{staticClass:"ov pb10 fs14"},[t._v(t._s(s.productName))]),t._v(" "),e("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[e("span",{staticClass:"fl fs13"},[t._v(" ¥"+t._s(s.price)+" \n")]),t._v(" "),e("span",{staticClass:"fr fs13 highlight"},[t._v(t._s(s.statusStr))])]),t._v(" "),e("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"25px"}}),t._v(" "),e("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[t._v("\n\t\t\t\t"+t._s(s.createDateStr)+"\n\t\t\t\t"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),t.orderPay(s)}}},[t._v("付款")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"order.status==0"}],staticClass:"btn-plain  fr",on:{click:function(e){e.stopPropagation(),t.orderCancel(s)}}},[t._v("取消订单")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==s.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),t.orderConfirm(s)}}},[t._v("确认收货")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==s.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",staticStyle:{"margin-right":"5px"},on:{click:function(e){e.stopPropagation(),t.checkLogisics(s)}}},[t._v("查看物流")]),t._v(" "),e("span",[e("div",{directives:[{name:"show",rawName:"v-show",value:6==s.status&&1!=s.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}],staticClass:"lite-btn fs13 fr",attrs:{href:"#"},on:{click:function(e){e.stopPropagation(),t.comment(s)}}},[t._v("评价商品")])])])])})],2)},staticRenderFns:[]};var u=e("VU/8")(i,c,!1,function(t){e("oGTh")},"data-v-18f37682",null);s.default=u.exports}});
//# sourceMappingURL=9.c4f9b8277a88c6f24b241564716449818.js.map