webpackJsonp([4],{"2gA0":function(t,s){},nbMf:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Au9i"),n=e("fxnj"),r=e.n(n),o=void 0,i={data:function(){return{groupsNum:1,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",orders:[],dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){o=this;var t=location.href.split("#")[0];o.receiveData.wxconfig(o,r.a,["chooseWXPay"],t)},mounted:function(){this.firstALL()},components:{},methods:{firstALL:function(){o.receiveData.getData(o,"orders/status/"+o.currentStatus,"res",function(){o.res.success?(o.orders=o.res.result,"ALL"==o.currentStatus&&(o.groupsNum=o.res.result.length)):o.orders=[]})},toggleDropdown:function(){o.dropdownCollapsed=!o.dropdownCollapsed},selectDropdown:function(t){o.selectedName=o.dropdowns[t].name,o.currentStatus=o.dropdowns[t].value,o.firstALL(o.currentStatus)},gotoDetail:function(t){o.$router.push({path:"/orderdetail",query:{orderId:t}})},orderCancel:function(t){a.MessageBox.confirm("确定要取消订单?").then(function(s){"confirm"==s&&o.receiveData.getData(o,"/cancelOrder/"+t.id,"res",function(){o.res.success?(t.status=2,t.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(t){})},orderPay:function(t){o.receiveData.getData(o,"requestPay/"+t.id,"n",function(){o.n.success||alert(o.n.message),r.a.chooseWXPay({timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,package:o.n.result.pkgStr,signType:o.n.result.signType,paySign:o.n.result.signature,success:function(s){o.notifyPaySuccess(),t.status=1}})},function(){})},notifyPaySuccess:function(t){o.receiveData.getData(o,"/notifyPayed/"+t.id,"n",function(){})},orderConfirm:function(t){a.MessageBox.confirm("确定要已收货?").then(function(s){"confirm"==s&&o.receiveData.getData(o,"/signOrder/"+t.id,"n",function(){o.n.success?(t.status=6,t.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(t){})},comment:function(t){o.$router.push({path:"/comment",query:{orderId:t.id}})}},computed:{}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"orders"},[e("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:t.dropdownCollapsed},staticStyle:{margin:"0 15px"},on:{click:t.toggleDropdown}},[e("span",[t._v(t._s(t.selectedName))]),t._v(" "),t.dropdownCollapsed?e("div",{staticClass:"dropdown"},t._l(t.dropdowns,function(s,a){return e("div",{staticClass:"dropdown-item",class:{noborder:t.dropdowns.length-1==a},on:{click:function(s){t.selectDropdown(a)}}},[t._v(t._s(s.name))])})):t._e()]),t._v(" "),0==t.groupsNum?e("div",{staticClass:"avatar-wraps rels ovs"},[e("div",{staticClass:"filter-imgs avatar-wraps center-bgs"})]):t._e(),t._v(" "),t._l(t.orders,function(s){return e("div",{staticClass:"order-item p15 divider",on:{click:function(e){t.gotoDetail(s.id)}}},[e("img",{staticClass:"fl order-picture",attrs:{src:s.productThumbPic}}),t._v(" "),e("div",{staticClass:"ov pb10 fs14"},[t._v(t._s(s.productName))]),t._v(" "),e("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[e("span",{staticClass:"fl fs13"},[t._v(" ¥"+t._s(s.price)+" \n")]),t._v(" "),e("span",{staticClass:"fr fs13 highlight"},[t._v(t._s(s.statusStr))])]),t._v(" "),e("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"25px"}}),t._v(" "),e("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[t._v("\n\t\t\t\t"+t._s(s.createDateStr)+"\n\t\t\t\t"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),t.orderPay(s)}}},[t._v("付款")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==s.status,expression:"order.status==0"}],staticClass:"btn-plain  fr",on:{click:function(e){e.stopPropagation(),t.orderCancel(s)}}},[t._v("取消订单")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==s.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),t.orderConfirm(s)}}},[t._v("确认收货")]),t._v(" "),e("span",[e("div",{directives:[{name:"show",rawName:"v-show",value:6==s.status&&1!=s.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),t.comment(s)}}},[t._v("评价商品")])])])])})],2)},staticRenderFns:[]};var u=e("VU/8")(i,c,!1,function(t){e("2gA0")},"data-v-72beccfd",null);s.default=u.exports}});
//# sourceMappingURL=4.5484fffb5ad000b2a8c11564660366605.js.map