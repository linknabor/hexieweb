webpackJsonp([15],{"62zs":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),r=e.n(a),o=e("Au9i"),i=e("fxnj"),n=e.n(i),c=void 0,u={data:function(){return{Mask:!1,orders:[],groupsNum:1,shows:!0,type:this.$route.query.type,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"已取消订单",value:"CANCELD"}],bgImage:this.common.GetImages("1")}},created:function(){c=this},mounted:function(){c.grouprders()},methods:{grouprders:function(){c.receiveData.getData(c,"orders/status/group/"+c.currentStatus,"res",function(){c.res.success?(c.shows=!1,c.orders=c.res.result,"ALL"==c.currentStatus&&(c.groupsNum=c.res.result.length)):c.orders=[]})},toggleDropdown:function(){c.dropdownCollapsed=!c.dropdownCollapsed},selectDropdown:function(s){c.selectedName!=c.dropdowns[s].name&&(c.selectedName=c.dropdowns[s].name,c.currentStatus=c.dropdowns[s].value,c.grouprders(c.currentStatus))},goorder:function(s){1==s?c.$router.push({path:"/special",query:{type:s}}):2==s?c.$router.push({path:"/cardorder",query:{type:s}}):c.$router.push({path:"/grouporders",query:{type:s}})},gotoDetail:function(s){c.$router.push({path:"/orderdetail",query:{orderId:s}})},orderPay:function(s){c.Mask=!0,c.receiveData.getData(c,"requestPay/"+s.id,"n",function(){c.n.success?(n.a.config({debug:!1,appId:c.n.result.appId,timestamp:c.n.result.timestamp,nonceStr:c.n.result.nonceStr,signature:c.n.result.signature,jsApiList:["chooseWXPay"]}),n.a.chooseWXPay({timestamp:c.n.result.timestamp,nonceStr:c.n.result.nonceStr,package:c.n.result.pkgStr,signType:c.n.result.signType,paySign:c.n.result.signature,success:function(t){c.Mask=!1,c.notifyPaySuccess(s.id),s.status=1},fail:function(s){c.Mask=!1,console.log(r()(s))},cancel:function(s){alert("支付取消"),c.Mask=!1}})):(c.Mask=!1,alert(null==c.n.message?"下单失败，请稍后重试！":c.n.message))})},notifyPaySuccess:function(s){c.receiveData.getData(c,"/notifyPayed/"+s,"n",function(){})},orderCancel:function(s){o.MessageBox.confirm("确定要取消订单?").then(function(t){"confirm"==t&&c.receiveData.getData(c,"/cancelOrder/"+s.id,"res",function(){c.res.success?(s.status=2,s.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(s){})},orderConfirm:function(s){o.MessageBox.confirm("确定要已收货？").then(function(t){"confirm"==t&&c.receiveData.getData(c,"/signOrder/"+s.id,"res",function(){c.res.success?(s.status=6,s.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(s){})},checkLogisics:function(s){var t=escape(s.logisticName);c.$router.push({path:"/logistice",query:{com:t,nu:s.logisticNo}})},comment:function(s){c.$router.push({path:"/comment",query:{orderId:s.id}})}}},d={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"group"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[e("div",{staticClass:"bounce1"}),s._v(" "),e("div",{staticClass:"bounce2"}),s._v(" "),e("div",{staticClass:"bounce3"})]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"black_overlay",attrs:{id:"fade"}}),s._v(" "),e("div",{attrs:{id:"phoneErro"}}),s._v(" "),e("div",{staticClass:"headersp"},[e("div",{staticClass:"fl",class:{white:1==s.type},on:{click:function(t){s.goorder(1)}}},[e("span",{class:{spanborder:1==s.type}},[s._v("电商订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:2==s.type},on:{click:function(t){s.goorder(2)}}},[e("span",{class:{spanborder:2==s.type}},[s._v("优惠订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:3==s.type},on:{click:function(t){s.goorder(3)}}},[e("span",{class:{spanborder:3==s.type}},[s._v("团购订单")])])]),s._v(" "),e("div",{staticClass:"dropdown-wrap",class:{dropdownCollapsed:s.dropdownCollapsed},on:{click:s.toggleDropdown}},[e("span",[s._v(s._s(s.selectedName))]),s._v(" "),s.dropdownCollapsed?e("div",{staticClass:"dropdown"},s._l(s.dropdowns,function(t,a){return e("div",{key:a,staticClass:"dropdown-item",class:{noborder:s.dropdowns.length-1==a},on:{click:function(t){s.selectDropdown(a)}}},[s._v(s._s(t.name))])})):s._e()]),s._v(" "),0==s.groupsNum?e("div",{staticClass:"rels"},[e("img",{staticClass:"center-bgs",attrs:{src:s.bgImage,alt:""}})]):s._e(),s._v(" "),s._l(s.orders,function(t){return e("div",{key:t.id,staticClass:"order-item p15 divider",on:{click:function(e){e.stopPropagation(),s.gotoDetail(t.id)}}},[e("img",{staticClass:"fl order-picture",attrs:{src:t.productThumbPic}}),s._v(" "),e("div",[e("div",{staticClass:"ov pb10 fs14"},[s._v(s._s(t.productName))]),s._v(" "),e("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[e("span",{staticClass:"fl fs13"},[s._v("¥"+s._s(t.price))]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.orderStatus,expression:"order.orderStatus ==2"}],staticClass:"fr fs13 highlight"},[s._v("已取消支付")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&1==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==1"}],staticClass:"fr fs13 highlight"},[s._v("团购进行中")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&2==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==2"}],staticClass:"fr fs13 highlight"},[s._v("团购成功")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&3==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==3"}],staticClass:"fr fs13 highlight"},[s._v("团购失败")])])]),s._v(" "),e("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"30px","margin-bottom":"2px"}}),s._v(" "),e("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[s._v("\n      "+s._s(t.createDateStr)+"\n\n      "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"order.status==0"}],staticClass:"lite-btn fr",on:{click:function(e){e.stopPropagation(),s.orderCancel(t)}}},[s._v("取消")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",staticStyle:{"margin-right":"0.1rem"},on:{click:function(e){e.stopPropagation(),s.orderPay(t)}}},[s._v("付款")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.status,expression:"order.status==2"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),s.gotoDetail(t.id)}}},[s._v("查看订单")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==t.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),s.orderConfirm(t)}}},[s._v("确认收货")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:6==t.status&&1!=t.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}]},[e("div",{staticClass:"lite-btn fs13 fr",on:{click:function(e){e.stopPropagation(),s.comment(t)}}},[s._v("评价商品")])])])])}),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[]};var l=e("VU/8")(u,d,!1,function(s){e("yQ+6")},"data-v-391d362a",null);t.default=l.exports},"yQ+6":function(s,t){}});