webpackJsonp([22],{"2YIw":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),o=e.n(a),r=e("Au9i"),n=e("fxnj"),i=e.n(n),c=void 0,u={data:function(){return{Mask:!1,type:this.$route.query.type,orders:[],currentStatus:"ALL",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){c=this},components:{},computed:{},mounted:function(){c.query()},methods:{initSession4Test:function(){c.receiveData.getData(c,"/initSession4Test/8427","Data",function(){})},query:function(){c.receiveData.getData(c,"orders/status/onsale/"+c.currentStatus,"res",function(){c.res.success?c.orders=c.res.result:null!=c.res.messages&&40001!=c.res.errorCode&&alert(c.res.messages)})},toggleDropdown:function(){c.dropdownCollapsed=!c.dropdownCollapsed},selectDropdown:function(s){c.selectedName=c.dropdowns[s].name,c.currentStatus=c.dropdowns[s].value,c.query()},goorder:function(s){1==s?c.$router.push({path:"/special",query:{type:s}}):2==s?c.$router.push({path:"/cardorder",query:{type:s}}):c.$router.push({path:"/grouporders",query:{type:s}})},detail:function(s){c.$router.push({path:"/clientdetail",query:{orderId:s.id}})},orderCancel:function(s){r.MessageBox.confirm("确定要取消订单?").then(function(t){"confirm"==t&&c.receiveData.getData(c,"/cancelOrder/"+s.id,"res",function(){c.res.success?(s.status=2,s.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(s){})},pay:function(s){c.Mask=!0;var t="/requestPay/"+s.id;c.receiveData.postData(c,t,{},"n",function(){c.n.success?(i.a.config({debug:!1,appId:c.n.result.appId,timestamp:c.n.result.timestamp,nonceStr:c.n.result.nonceStr,signature:c.n.result.signature,jsApiList:["chooseWXPay"]}),i.a.chooseWXPay({timestamp:c.n.result.timestamp,nonceStr:c.n.result.nonceStr,package:c.n.result.pkgStr,signType:c.n.result.signType,paySign:c.n.result.signature,success:function(s){alert("下单成功！"),c.Mask=!1},fail:function(s){c.Mask=!1,console.log(o()(s))},cancel:function(s){alert("支付取消"),c.Mask=!1}})):(c.Mask=!1,alert(null==c.n.message?"下单失败，请稍后重试！":c.n.message))})},orderConfirm:function(s){r.MessageBox.confirm("确定要已收货?").then(function(t){"confirm"==t&&c.receiveData.getData(c,"/signOrder/"+s.id,"n",function(){c.n.success?(s.status=6,s.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(s){})},checkLogisics:function(s){var t=escape(s.logisticName);c.$router.push({path:"/logistice",query:{com:t,nu:s.logisticNo}})},comment:function(s){c.$router.push({path:"/comment",query:{orderId:s.id}})}}},l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"wapr"},[e("div",{staticClass:"headersp ov"},[e("div",{staticClass:"fl",class:{white:1==s.type},on:{click:function(t){s.goorder(1)}}},[e("span",{class:{spanborder:1==s.type}},[s._v("特卖订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:2==s.type},on:{click:function(t){s.goorder(2)}}},[e("span",{class:{spanborder:2==s.type}},[s._v("优惠订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:3==s.type},on:{click:function(t){s.goorder(3)}}},[e("span",{class:{spanborder:3==s.type}},[s._v("团购订单")])])]),s._v(" "),e("div",[e("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:s.dropdownCollapsed},on:{click:s.toggleDropdown}},[e("span",[s._v(s._s(s.selectedName))]),s._v(" "),s.dropdownCollapsed?e("div",{staticClass:"dropdown"},s._l(s.dropdowns,function(t,a){return e("div",{key:a,staticClass:"dropdown-item",class:{noborder:s.dropdowns.length-1==a},on:{click:function(t){s.selectDropdown(a)}}},[s._v(s._s(t.name))])})):s._e()])]),s._v(" "),s._l(s.orders,function(t){return e("div",{key:t.id,staticClass:"ov lite-divider pd10 ",staticStyle:{color:"#3b3937"},on:{click:function(e){e.stopPropagation(),s.detail(t)}}},[e("div",{staticClass:"marg-bottom"},[e("img",{staticClass:"icon-repair fl",attrs:{src:t.productThumbPic}}),s._v(" "),e("div",{staticClass:"ov right-text not-used"},[e("div",{staticClass:"spot pbottom"},[s._v(s._s(t.productName))]),s._v(" "),e("div",{staticClass:"pbottom"},[s._v("¥"+s._s(t.price))]),s._v(" "),e("div",{staticClass:"ptop ov "},[e("span",{staticClass:"fl "},[s._v("数量: "+s._s(t.count))]),s._v(" "),e("span",{staticClass:"p15 right-color used-r"},[s._v(s._s(t.statusStr))])])])]),s._v(" "),e("div",{staticClass:"mrg5"},[e("span",{staticClass:"fl"},[s._v(s._s(t.createDateStr))]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"item.status==0"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.orderCancel(t)}}},[s._v("取消")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"item.status==0"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.pay(t)}}},[s._v("付款")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.status,expression:"item.status==2"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.detail(t)}}},[s._v("查看订单")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:5==t.status,expression:"item.status==5"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.orderConfirm(t)}}},[s._v("确认收货")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:5==t.status,expression:"item.status==5"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.checkLogisics(t)}}},[s._v("查看物流")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:6==t.status&&1!=t.pingjiaStatus,expression:"item.status==6&&item.pingjiaStatus!=1"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){e.stopPropagation(),s.comment(t)}}},[s._v("评价商品")])])])}),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[]};var d=e("VU/8")(u,l,!1,function(s){e("MHZw")},"data-v-0ca0cbe8",null);t.default=d.exports},MHZw:function(s,t){}});