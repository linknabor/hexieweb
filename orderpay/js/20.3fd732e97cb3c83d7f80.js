webpackJsonp([20],{"2YIw":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),n=e.n(a),o=e("fxnj"),r=e.n(o),i=void 0,c={data:function(){return{Mask:!1,type:this.$route.query.type,orders:[],currentStatus:"ALL",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){i=this},components:{},computed:{},mounted:function(){i.query()},methods:{initSession4Test:function(){i.receiveData.getData(i,"/initSession4Test/8427","Data",function(){})},query:function(){i.receiveData.getData(i,"orders/status/"+i.currentStatus,"res",function(){i.res.success?i.orders=i.res.result:alert(i.res.messages)})},toggleDropdown:function(){i.dropdownCollapsed=!i.dropdownCollapsed},selectDropdown:function(s){i.selectedName=i.dropdowns[s].name,i.currentStatus=i.dropdowns[s].value,i.query()},goorder:function(s){1==s?i.$router.push({path:"/special",query:{type:s}}):2==s?i.$router.push({path:"/cardorder",query:{type:s}}):i.$router.push({path:"/grouporders",query:{type:s}})},detail:function(s){i.$router.push({path:"/clientdetail",query:{orderId:s.id}})},pay:function(s){var t="/requestPay/"+s.id;i.receiveData.postData(i,t,{},"n",function(){i.n.success?(r.a.config({debug:!1,appId:i.n.result.appId,timestamp:i.n.result.timestamp,nonceStr:i.n.result.nonceStr,signature:i.n.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({timestamp:i.n.result.timestamp,nonceStr:i.n.result.nonceStr,package:i.n.result.pkgStr,signType:i.n.result.signType,paySign:i.n.result.signature,success:function(s){alert("下单成功！"),i.Mask=!1},fail:function(s){i.Mask=!1,console.log(n()(s))},cancel:function(s){alert("支付取消"),i.Mask=!1}})):(i.Mask=!1,alert(null==i.n.message?"下单失败，请稍后重试！":i.n.message))})}}},d={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"wapr"},[e("div",{staticClass:"headersp ov"},[e("div",{staticClass:"fl",class:{white:1==s.type},on:{click:function(t){s.goorder(1)}}},[e("span",{class:{spanborder:1==s.type}},[s._v("特卖订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:2==s.type},on:{click:function(t){s.goorder(2)}}},[e("span",{class:{spanborder:2==s.type}},[s._v("优惠订单")])]),s._v(" "),e("div",{staticClass:"fl",class:{white:3==s.type},on:{click:function(t){s.goorder(3)}}},[e("span",{class:{spanborder:3==s.type}},[s._v("团购订单")])])]),s._v(" "),e("div",[e("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:s.dropdownCollapsed},on:{click:s.toggleDropdown}},[e("span",[s._v(s._s(s.selectedName))]),s._v(" "),s.dropdownCollapsed?e("div",{staticClass:"dropdown"},s._l(s.dropdowns,function(t,a){return e("div",{key:a,staticClass:"dropdown-item",class:{noborder:s.dropdowns.length-1==a},on:{click:function(t){s.selectDropdown(a)}}},[s._v(s._s(t.name))])})):s._e()])]),s._v(" "),s._l(s.orders,function(t){return e("div",{key:t.id,staticClass:"ov lite-divider pd10 ",staticStyle:{color:"#3b3937"}},[e("div",{staticClass:"marg-bottom"},[e("img",{staticClass:"icon-repair fl",attrs:{src:t.productThumbPic}}),s._v(" "),e("div",{staticClass:"ov right-text not-used"},[e("div",{staticClass:"spot pbottom"},[s._v(s._s(t.productName))]),s._v(" "),e("div",{staticClass:"pbottom"},[s._v("¥"+s._s(t.price))]),s._v(" "),e("div",{staticClass:"ptop ov "},[e("span",{staticClass:"fl "},[s._v("数量: "+s._s(t.count))]),s._v(" "),e("span",{staticClass:"p15 right-color used-r"},[s._v(s._s(t.statusStr))])])])]),s._v(" "),e("div",{staticClass:"mrg5"},[e("span",{staticClass:"fl"},[s._v(s._s(t.createDateStr))]),s._v(" "),e("span",{staticClass:"fr crrd-color card-jm",on:{click:function(e){s.detail(t)}}},[s._v("查看订单")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"item.status==0"}],staticClass:"fr crrd-color card-jm",on:{click:function(e){s.pay(t)}}},[s._v("付款")])])])}),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[]};var l=e("VU/8")(c,d,!1,function(s){e("hQDo")},"data-v-25795050",null);t.default=l.exports},hQDo:function(s,t){}});