webpackJsonp([8],{"9+Bn":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=s("mvHQ"),a=s.n(c),i=void 0,r={data:function(){return{count:0,cartlist:[],ruleId:this.$route.query.ruleId,totalPrice:0,freePrice:0,quan:!1,xiangou:""}},created:function(){i=this},components:{},computed:{},watch:{},mounted:function(){i.getcart()},methods:{getcart:function(){i.receiveData.getData(i,"/cart/get","res",function(){i.res.success?null!=i.res.result&&(i.cartlist=i.res.result,i.cartlist.items.forEach(function(t){i.$set(t,"selected",!0)}),i.totalPrice=(parseFloat(i.res.result.totalPrice)-parseFloat(i.res.result.totalShipFee)).toFixed(2),0==i.cartlist.items.length?i.quan=!1:i.quan=!0):alert(i.res.message)})},reducee:function(t,e){t.count--,t.count<1?t.count=1:(i.delsetprice(t),i.delcount(t.ruleId,1))},delcount:function(t,e){var s={ruleId:t,count:e};i.receiveData.postData(i,"/cart/del",s,"res",function(){i.res.success||null!=i.res.message&&alert(i.res.message)})},add:function(t,e){i.addsetprice(t),i.addcount(t,e)},addcount:function(t,e){var s={ruleId:t.ruleId,count:1};i.receiveData.postData(i,"/cart/add",s,"res",function(){i.res.success?t.count++:null!=i.res.message&&(alert(i.res.message),"每人限购1件。"==i.res.message&&(i.xiangou=t.ruleId))})},deleteSection:function(t,e){i.cartlist.items.splice(e,1),i.totalPrice=(parseFloat(i.totalPrice)-t.price*t.count).toFixed(2),0==i.cartlist.items.length&&(i.quan=!1),i.delcount(t.ruleId,t.count)},checkeds:function(t,e){if(i.cartlist.items[e].selected)i.cartlist.items[e].selected=!1,i.quan=!1;else{i.cartlist.items[e].selected=!0;for(var s=!0,c=0;c<i.cartlist.items.length;c++)i.cartlist.items[c].selected||(s=!1);s&&(i.quan=!0)}i.selectprice(t)},Selectall:function(){var t=0;i.quan?(i.cartlist.items.forEach(function(t){t.selected=!1}),i.quan=!1,i.totalPrice=0):(i.cartlist.items.forEach(function(e){e.selected=!0,t+=e.price*e.count}),i.quan=!0,i.totalPrice=parseFloat(t).toFixed(2))},selectprice:function(t){t.selected?i.totalPrice=(parseFloat(i.totalPrice)+t.price*t.count).toFixed(2):i.totalPrice=(parseFloat(i.totalPrice)-t.price*t.count).toFixed(2)},addsetprice:function(t){t.selected&&(i.totalPrice=(parseFloat(i.totalPrice)+parseFloat(t.price)).toFixed(2))},delsetprice:function(t){t.selected&&(i.totalPrice=(parseFloat(i.totalPrice)-parseFloat(t.price)).toFixed(2))},settlement:function(){if(0!=i.totalPrice){for(var t=[],e=0;e<i.cartlist.items.length;e++)i.cartlist.items[e].selected&&i.cartlist.items[e].count>0&&t.push({ruleId:i.cartlist.items[e].ruleId,count:i.cartlist.items[e].count});var s={rderType:"3",payType:"2",itemList:t};i.receiveData.postData(i,"/order/check",s,"res",function(){i.res.success?(window.localStorage.setItem("itemList",a()(t)),window.location.href=i.basePageUrlpay+"hxgrouppay.html?"+i.common.getoriApp()+"#/confirmation?v=1"):null!=i.res.message&&alert(i.res.message)})}}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"carts"},[s("div",{staticClass:"cart"},t._l(t.cartlist.items,function(e,c){return s("mt-cell-swipe",{key:c,attrs:{right:[{content:"删除",style:{background:"red",color:"#fff"},handler:function(){return t.deleteSection(e,c)}}]}},[s("div",{staticClass:"head-border"},[s("div",{staticClass:"fl car-select",class:{actives:e.selected},on:{click:function(s){t.checkeds(e,c)}}}),t._v(" "),s("div",{staticClass:"ov"},[s("div",{staticClass:"fl "},[s("div",{staticClass:"cart-imgs"},[s("img",{attrs:{src:e.productThumbPic,alt:""}})])]),t._v(" "),s("div",{staticClass:"ov cart-content "},[s("span",{staticClass:"fname marb4 littleBit color0"},[t._v(t._s(e.ruleName))]),s("br"),t._v(" "),s("span",{staticClass:"marb4 free color"},[t._v("满"+t._s(e.freeShippingNum)+"件免运费")]),s("br"),t._v(" "),s("del",{staticClass:"marb4"},[t._v("¥"+t._s(e.oriPrice))]),s("br"),t._v(" "),s("span",{staticClass:"color1"},[t._v("¥"+t._s(e.price))]),s("span"),t._v(" "),s("div",{staticClass:"choose-num"},[s("span",{staticClass:"reducee",class:{reduceecolor:e.count>=2},on:{click:function(s){t.reducee(e,c)}}},[t._v("-")]),t._v(" "),s("span",{staticClass:"numberr color0"},[t._v(t._s(e.count))]),t._v(" "),s("span",{staticClass:"addd",class:{adddcolor:e.ruleId==t.xiangou},on:{click:function(s){t.add(e,c)}}},[t._v("+")])])])])])])}),1),t._v(" "),s("div",{staticStyle:{width:"100%",height:"50px"}}),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"fl btn-left"},[s("div",{staticClass:"fl",on:{click:function(e){t.Selectall()}}},[s("div",{staticClass:"btn-select",class:{active:t.quan}}),t._v("全选\r\n            ")]),t._v(" "),s("div",{staticClass:"fr total"},[s("span",[t._v("合计：")]),s("span",{staticClass:"color money"},[t._v("¥"+t._s(t.totalPrice))]),s("br"),t._v(" "),s("span",[t._v("不含运费")])])]),t._v(" "),s("div",{staticClass:"fr btn-right f14",on:{click:t.settlement}},[t._v("\r\n            结算\r\n        ")])])])])},staticRenderFns:[]};var n=s("VU/8")(r,l,!1,function(t){s("M1xO"),s("Fkkk")},"data-v-704df491",null);e.default=n.exports},Fkkk:function(t,e){},M1xO:function(t,e){}});