webpackJsonp([12],{"9+Bn":function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c("mvHQ"),a=c.n(s),i=void 0,r={data:function(){return{count:0,cartlist:[],ruleId:this.$route.query.ruleId,totalPrice:0,freePrice:0,quan:!1}},created:function(){i=this},components:{},computed:{},watch:{},mounted:function(){i.getcart()},methods:{getcart:function(){i.receiveData.getData(i,"/cart/get","res",function(){i.res.success?null!=i.res.result&&(i.cartlist=i.res.result,i.cartlist.items.forEach(function(t){i.$set(t,"selected",!0)}),i.totalPrice=(parseFloat(i.res.result.totalPrice)-parseFloat(i.res.result.totalShipFee)).toFixed(2),0==i.cartlist.items.length?i.quan=!1:i.quan=!0):alert(i.res.message)})},reducee:function(t,e){t.count--,t.count<1?t.count=1:(i.delsetprice(t),i.delcount(t.ruleId,1))},delcount:function(t,e){var c={ruleId:t,count:e};i.receiveData.postData(i,"/cart/del",c,"res",function(){i.res.success})},add:function(t,e){t.count++,i.addsetprice(t),i.addcount(t.ruleId)},addcount:function(t){var e={ruleId:t,count:1};i.receiveData.postData(i,"/cart/add",e,"res",function(){i.res.success})},deleteSection:function(t,e){i.cartlist.items.splice(e,1),i.totalPrice=(parseFloat(i.totalPrice)-t.price*t.count).toFixed(2),0==i.cartlist.items.length&&(i.quan=!1),i.delcount(t.ruleId,t.count)},checkeds:function(t,e){if(i.cartlist.items[e].selected)i.cartlist.items[e].selected=!1,i.quan=!1;else{i.cartlist.items[e].selected=!0;for(var c=!0,s=0;s<i.cartlist.items.length;s++)i.cartlist.items[s].selected||(c=!1);c&&(i.quan=!0)}i.selectprice(t)},Selectall:function(){var t=0;i.quan?(i.cartlist.items.forEach(function(t){t.selected=!1}),i.quan=!1,i.totalPrice=0):(i.cartlist.items.forEach(function(e){e.selected=!0,t+=e.price*e.count}),i.quan=!0,i.totalPrice=parseFloat(t).toFixed(2))},selectprice:function(t){t.selected?i.totalPrice=(parseFloat(i.totalPrice)+t.price*t.count).toFixed(2):i.totalPrice=(parseFloat(i.totalPrice)-t.price*t.count).toFixed(2)},addsetprice:function(t){t.selected&&(i.totalPrice=(parseFloat(i.totalPrice)+parseFloat(t.price)).toFixed(2))},delsetprice:function(t){t.selected&&(i.totalPrice=(parseFloat(i.totalPrice)-parseFloat(t.price)).toFixed(2))},settlement:function(){if(0!=i.totalPrice){for(var t=[],e=0;e<i.cartlist.items.length;e++)i.cartlist.items[e].selected&&i.cartlist.items[e].count>0&&t.push({ruleId:i.cartlist.items[e].ruleId,count:i.cartlist.items[e].count});window.localStorage.setItem("itemList",a()(t)),window.location.href=i.basePageUrlpay+"hxgrouppay.html?"+i.common.getoriApp()+"#/confirmation?v=1"}}}},l={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"carts"},[c("div",{staticClass:"cart"},t._l(t.cartlist.items,function(e,s){return c("mt-cell-swipe",{key:s,staticStyle:{"touch-action":"none"},attrs:{right:[{content:"删除",style:{background:"red",color:"#fff"},handler:function(){return t.deleteSection(e,s)}}]}},[c("div",{staticClass:"head-border"},[c("div",{staticClass:"fl car-select",class:{actives:e.selected},on:{click:function(c){t.checkeds(e,s)}}}),t._v(" "),c("div",{staticClass:"ov"},[c("div",{staticClass:"fl "},[c("div",{staticClass:"cart-imgs"},[c("img",{attrs:{src:e.productThumbPic,alt:""}})])]),t._v(" "),c("div",{staticClass:"ov cart-content "},[c("span",{staticClass:"f14 marb4"},[t._v(t._s(e.ruleName))]),c("br"),t._v(" "),c("span",{staticClass:"marb4 free color"},[t._v("满"+t._s(e.freeShippingNum)+"件免运费")]),c("br"),t._v(" "),c("del",{staticClass:"marb4"},[t._v("¥"+t._s(e.oriPrice))]),c("br"),t._v(" "),c("span",{staticClass:"color"},[t._v("¥"+t._s(e.price))]),c("span",[t._v("/箱")]),t._v(" "),c("div",{staticClass:"choose-num"},[c("span",{staticClass:"reducee",on:{click:function(c){t.reducee(e,s)}}},[t._v("-")]),t._v(" "),c("input",{staticClass:"numberr",attrs:{type:"number",readonly:""},domProps:{value:e.count}}),t._v(" "),c("span",{staticClass:"addd",on:{click:function(c){t.add(e,s)}}},[t._v("+")])])])])])])}),1),t._v(" "),c("div",{staticClass:"btn"},[c("div",{staticClass:"fl btn-left"},[c("div",{staticClass:"fl",on:{click:function(e){t.Selectall()}}},[c("div",{staticClass:"btn-select",class:{active:t.quan}}),t._v("全选\r\n            ")]),t._v(" "),c("div",{staticClass:"fr total"},[c("span",[t._v("合计：")]),c("span",{staticClass:"color money"},[t._v("¥"+t._s(t.totalPrice))]),c("br"),t._v(" "),c("span",[t._v("不含运费")])])]),t._v(" "),c("div",{staticClass:"fr btn-right f14",on:{click:t.settlement}},[t._v("\r\n            结算\r\n        ")])])])])},staticRenderFns:[]};var n=c("VU/8")(r,l,!1,function(t){c("p6GB"),c("CmSP")},"data-v-372d9c70",null);e.default=n.exports},CmSP:function(t,e){},p6GB:function(t,e){}});