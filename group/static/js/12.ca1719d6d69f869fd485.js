webpackJsonp([12],{"/Pxj":function(t,e){},"3I6E":function(t,e){},"9+Bn":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=s("mvHQ"),a=s.n(c),r=void 0,i={data:function(){return{count:0,cartlist:[],ruleId:this.$route.query.ruleId,totalPrice:0,freePrice:0,quan:!1,xiangou:""}},created:function(){r=this},components:{},computed:{},watch:{},mounted:function(){r.getcart()},methods:{getcart:function(){r.receiveData.getData(r,"/cart/get","res",function(){r.res.success?null!=r.res.result&&(r.cartlist=r.res.result,r.cartlist.items.forEach(function(t){r.$set(t,"selected",!0)}),r.totalPrice=(parseFloat(r.res.result.totalPrice)-parseFloat(r.res.result.totalShipFee)).toFixed(2),0==r.cartlist.items.length?r.quan=!1:r.quan=!0):alert(r.res.message)})},reducee:function(t,e){t.count--,t.count<1?t.count=1:(r.delsetprice(t),r.delcount(t.ruleId,1))},delcount:function(t,e){var s={ruleId:t,count:e};r.receiveData.postData(r,"/cart/del",s,"res",function(){r.res.success||null!=r.res.message&&alert(r.res.message)})},add:function(t,e){r.addsetprice(t),r.addcount(t)},addcount:function(t){var e={ruleId:t.ruleId,count:1};r.receiveData.postData(r,"/cart/add",e,"res",function(){r.res.success?t.count++:null!=r.res.message&&(alert(r.res.message),"每人限购1件。"==r.res.message&&(r.xiangou=t.ruleId))})},deleteSection:function(t,e){r.cartlist.items.splice(e,1),r.totalPrice=(parseFloat(r.totalPrice)-t.price*t.count).toFixed(2),0==r.cartlist.items.length&&(r.quan=!1),r.delcount(t.ruleId,t.count)},checkeds:function(t,e){if(r.cartlist.items[e].selected)r.cartlist.items[e].selected=!1,r.quan=!1;else{r.cartlist.items[e].selected=!0;for(var s=!0,c=0;c<r.cartlist.items.length;c++)r.cartlist.items[c].selected||(s=!1);s&&(r.quan=!0)}r.selectprice(t)},Selectall:function(){var t=0;r.quan?(r.cartlist.items.forEach(function(t){t.selected=!1}),r.quan=!1,r.totalPrice=0):(r.cartlist.items.forEach(function(e){e.selected=!0,t+=e.price*e.count}),r.quan=!0,r.totalPrice=parseFloat(t).toFixed(2))},selectprice:function(t){t.selected?r.totalPrice=(parseFloat(r.totalPrice)+t.price*t.count).toFixed(2):r.totalPrice=(parseFloat(r.totalPrice)-t.price*t.count).toFixed(2)},addsetprice:function(t){t.selected&&(r.totalPrice=(parseFloat(r.totalPrice)+parseFloat(t.price)).toFixed(2))},delsetprice:function(t){t.selected&&(r.totalPrice=(parseFloat(r.totalPrice)-parseFloat(t.price)).toFixed(2))},settlement:function(){if(0!=r.totalPrice){for(var t=[],e=0;e<r.cartlist.items.length;e++)r.cartlist.items[e].selected&&r.cartlist.items[e].count>0&&t.push({ruleId:r.cartlist.items[e].ruleId,count:r.cartlist.items[e].count});var s={rderType:"3",payType:"2",itemList:t};r.receiveData.postData(r,"/order/check",s,"res",function(){r.res.success?(window.localStorage.setItem("itemList",a()(t)),window.location.href=r.basePageUrlpay+"hxgrouppay.html?"+r.common.getoriApp()+"#/confirmation?v=1"):null!=r.res.message&&alert(r.res.message)})}}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"carts"},[s("div",{staticClass:"cart"},t._l(t.cartlist.items,function(e,c){return s("mt-cell-swipe",{key:c,attrs:{right:[{content:"删除",style:{background:"red",color:"#fff"},handler:function(){return t.deleteSection(e,c)}}]}},[s("div",{staticClass:"head-border"},[s("div",{staticClass:"fl car-select",class:{actives:e.selected},on:{click:function(s){t.checkeds(e,c)}}}),t._v(" "),s("div",{staticClass:"ov"},[s("div",{staticClass:"fl "},[s("div",{staticClass:"cart-imgs"},[s("img",{attrs:{src:e.productThumbPic,alt:""}})])]),t._v(" "),s("div",{staticClass:"ov cart-content "},[s("span",{staticClass:"f14 marb4 littleBit"},[t._v(t._s(e.ruleName))]),s("br"),t._v(" "),s("span",{staticClass:"marb4 free color"},[t._v("满"+t._s(e.freeShippingNum)+"件免运费")]),s("br"),t._v(" "),s("del",{staticClass:"marb4"},[t._v("¥"+t._s(e.oriPrice))]),s("br"),t._v(" "),s("span",{staticClass:"color"},[t._v("¥"+t._s(e.price))]),s("span"),t._v(" "),s("div",{staticClass:"choose-num"},[s("span",{staticClass:"reducee",class:{reduceecolor:e.count>=2},on:{click:function(s){t.reducee(e,c)}}},[t._v("-")]),t._v(" "),s("input",{staticClass:"numberr",attrs:{type:"number",readonly:""},domProps:{value:e.count}}),t._v(" "),s("span",{staticClass:"addd",class:{adddcolor:e.ruleId==t.xiangou},on:{click:function(s){t.add(e,c)}}},[t._v("+")])])])])])])}),1),t._v(" "),s("div",{staticStyle:{width:"100%",height:"50px"}}),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"fl btn-left"},[s("div",{staticClass:"fl",on:{click:function(e){t.Selectall()}}},[s("div",{staticClass:"btn-select",class:{active:t.quan}}),t._v("全选\r\n            ")]),t._v(" "),s("div",{staticClass:"fr total"},[s("span",[t._v("合计：")]),s("span",{staticClass:"color money"},[t._v("¥"+t._s(t.totalPrice))]),s("br"),t._v(" "),s("span",[t._v("不含运费")])])]),t._v(" "),s("div",{staticClass:"fr btn-right f14",on:{click:t.settlement}},[t._v("\r\n            结算\r\n        ")])])])])},staticRenderFns:[]};var n=s("VU/8")(i,l,!1,function(t){s("/Pxj"),s("3I6E")},"data-v-06b9b9c3",null);e.default=n.exports}});