webpackJsonp([14],{"2YA1":function(t,e,s){"use strict";(function(t){var s=void 0,o=t("#notice_line").height();e.a={data:function(){return{collId:this.$route.query.collId,ruleId:this.$route.query.ruleId,collocation:{},mainItem:{},otherItems:[],disCountAmount:0,needPayPrice:0,totalCount:1,totalAmount:0,logisticeFee:0,showDiscountTitle:!1}},created:function(){s=this},mounted:function(){s.getCollocation(),window.addEventListener("scroll",s.getscroll)},components:{},methods:{getCollocation:function(){var t="collocation/"+s.collId;s.receiveData.getData(s,t,"Data",function(){s.Data.success?(s.collocation=s.Data.result,s.resetItems()):alert(null==s.Data.message?"获取优惠组合信息失败！":s.Data.message)})},resetItems:function(){s.mainItem={id:0},s.otherItems=[];for(var t=0;t<s.collocation.products.length;t++)if(s.collocation.products[t].salePlanId==s.ruleId)s.mainItem=s.collocation.products[t],s.mainItem.count=1;else{var e=s.collocation.products[t];e.count=0,e.select=!1,s.otherItems.push(e)}0==s.mainItem.id&&(s.mainItem=s.otherItems.pop()),s.refreshAmountCount()},getscroll:function(){o=t("#notice_line").height();var e=t(window).scrollTop();o-e>0&&s.showDiscountTitle?(s.showDiscountTitle=!1,t("#discount_title").animate({top:"-30px"})):o-e<0&&!s.showDiscountTitle&&(s.showDiscountTitle=!0,t("#discount_title").animate({top:"0"}))},getTotalCount:function(){for(var t=s.mainItem.count,e=0;e<s.otherItems.length;e++)null!=s.otherItems[e]&&s.otherItems[e].selected&&(t+=s.otherItems[e].count);return t},getAmount:function(){for(var t=s.mainItem.count*s.mainItem.price,e=0;e<s.otherItems.length;e++)null!=s.otherItems[e]&&s.otherItems[e].selected&&(t+=s.otherItems[e].count*s.otherItems[e].price);return t.toFixed(2)},refreshAmountCount:function(){s.totalCount=s.getTotalCount(),s.totalAmount=s.getAmount();var t=Math.floor(s.totalAmount/s.collocation.satisfyAmount);s.disCountAmount=(s.collocation.discountAmount*t).toFixed(2),isNaN(s.disCountAmount)&&(s.disCountAmount=0),s.collocation.freeShipAmount>0&&s.totalAmount-s.disCountAmount>=s.collocation.freeShipAmount?s.logisticeFee=0:s.logisticeFee=s.collocation.shipAmount,s.totalAmount-s.disCountAmount>0?s.needPayPrice=(s.totalAmount-s.disCountAmount).toFixed(2):s.needpayprice="0.01"},minusMainCount:function(){s.mainItem.count>1&&(s.mainItem.count--,s.refreshAmountCount())},addMainCount:function(){(null==s.mainItem.limitNumOnce||0==s.mainItem.limitNumOnce||s.mainItem.count<s.mainItem.limitNumOnce)&&(s.mainItem.count=s.mainItem.count+1,s.refreshAmountCount())},selectItem:function(t){s.otherItems[t].selected=!s.otherItems[t].selected,s.otherItems[t].selected?s.otherItems[t].count=1:s.otherItems[t].count=0,s.refreshAmountCount()},gotoDetail:function(t){s.$router.push({path:"/onsaledetail",query:{ruleId:s.otherItems[t].salePlanId}})},minusCount:function(t){s.otherItems[t].count>0&&(s.otherItems[t].count--,s.otherItems[t].selected=s.otherItems[t].count>0,s.refreshAmountCount())},addCount:function(t){null==s.mainItem.limitNumOnce||s.otherItems[t].count<s.otherItems[t].limitNumOnce?(s.otherItems[t].count++,s.otherItems[t].selected=!0,s.refreshAmountCount()):s.otherItems[t].count==s.otherItems[t].limitNumOnce&&(s.otherItems[t].selected?alert("该商品限购"+s.otherItems[t].limitNumOnce+"件"):(s.otherItems[t].selected=!0,s.refreshAmountCount()))},pay:function(){var t=[];s.mainItem.count,s.mainItem.price;t.push({collocationId:s.collId,ruleId:s.ruleId,orderType:s.collocation.salePlanType,count:s.mainItem.count});for(var e=0;e<s.otherItems.length;e++)null!=s.otherItems[e]&&s.otherItems[e].selected&&t.push({collocationId:s.collId,ruleId:s.otherItems[e].salePlanId,orderType:s.collocation.salePlanType,count:s.otherItems[e].count});s.receiveData.postData(s,"collocation/saveToCart",{items:t},"res",function(){s.res.success?location.href=s.basePageUrlpay+"hxgrouppay.html?"+s.common.getoriApp():alert(null==s.res.message?"下单失败，请稍后重试！":s.res.message)})}},computed:{}}}).call(e,s("7t+N"))},"7xWC":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("2YA1"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collocattion"},[s("div",{staticClass:"notice_line",attrs:{id:"notice_line"}},[t._v(t._s(t.collocation.title)+"}活动火热进行中")]),t._v(" "),s("div",{staticClass:"discount_title",attrs:{id:"discount_title"}},[t._v("满"+t._s(t.collocation.satisfyAmount)+"减"+t._s(t.collocation.discountAmount)+"   合计￥"+t._s(t.needPayPrice)),t.disCountAmount>0?s("span",[t._v("(已优惠"+t._s(t.disCountAmount)+"元)")]):t._e()]),t._v(" "),s("div",{staticClass:"product_detail"},[s("img",{staticClass:"product_picture",attrs:{src:t.mainItem.productPic}}),t._v(" "),s("div",{staticClass:"product_content"},[s("div",{staticClass:"product_name"},[t._v(t._s(t.mainItem.ruleName))]),t._v(" "),s("div",{staticClass:"product_pri_area"},[s("div",{staticClass:"fl fs14 highlight",staticStyle:{"margin-left":"10px","padding-top":"20px"}},[t._v(" ¥"+t._s(t.mainItem.price)+" ")]),t._v(" "),s("div",{staticClass:"fl fs14",staticStyle:{"margin-left":"10px","padding-top":"20px",color:"#888888"}},[s("del",[t._v("¥"+t._s(t.mainItem.oriPrice))])]),t._v(" "),s("div",{staticClass:"fr",staticStyle:{"margin-top":"8px"}},[s("span",{staticClass:"sbtn btn-minus minus-btn-size",class:{active:t.mainItem.count>1},on:{click:t.minusMainCount}}),t._v(" "),s("span",{staticClass:"number fs16"},[t._v(t._s(t.mainItem.count))]),t._v(" "),s("span",{staticClass:"sbtn btn-add active minus-btn-size",on:{click:t.addMainCount}})])])])]),t._v(" "),t._l(t.otherItems,function(e,o){return s("div",{key:e.id,staticClass:"coll_detail",staticStyle:{"margin-top":"5px"}},[s("i",{staticClass:"checkbox fl",class:{checked:e.selected},staticStyle:{"margin-top":"40px","margin-left":"15px"},on:{click:function(e){t.selectItem(o)}}}),t._v(" "),s("img",{staticClass:"coll_picture",attrs:{src:e.productPic},on:{click:function(e){t.gotoDetail(o)}}}),t._v(" "),s("div",{staticClass:"coll_content"},[s("div",{staticClass:"coll_name",on:{click:function(e){t.gotoDetail(o)}}},[t._v(t._s(e.ruleName))]),t._v(" "),s("div",{staticClass:"coll_pri_area"},[s("div",{staticClass:"fl fs14 highlight",staticStyle:{"margin-left":"10px","padding-top":"12px"}},[t._v(" ¥"+t._s(e.price)+" ")]),t._v(" "),s("div",{staticClass:"fl fs14",staticStyle:{"margin-left":"10px","padding-top":"12px",color:"#888888"}},[s("del",[t._v("¥"+t._s(e.oriPrice))])]),t._v(" "),s("div",{staticClass:"fr",staticStyle:{"margin-top":"8px"}},[s("span",{staticClass:"sbtn btn-minus minus-btn-size",class:{active:null!=t.otherItems[o]&&t.otherItems[o].count>1},on:{click:function(e){t.minusCount(o)}}}),t._v(" "),s("span",{staticClass:"number fs16"},[t._v(t._s(e.count))]),t._v(" "),s("span",{staticClass:"sbtn btn-add active minus-btn-size",on:{click:function(e){t.addCount(o)}}})])])])])}),t._v(" "),s("div",{staticClass:"line p15 fs15",staticStyle:{height:"30px"}},[s("span",{staticClass:"fr"},[s("span",{staticClass:"fs12"},[t._v("共"+t._s(t.totalCount)+"个商品")]),t._v(" "),s("span",{staticClass:"total fs15"},[t._v("合计")]),t._v(" "),s("span",{staticClass:"fs20",staticStyle:{"margin-right":"5px"}},[t._v("¥ "+t._s(t.totalAmount))])])]),t._v(" "),t.collocation.satisfyAmount>0?s("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px","text-align":"center"}},[s("span",{staticClass:"fl"},[t._v("活动优惠")]),t._v(" "),s("span",{staticClass:"baoyou_desc"},[t._v("满"+t._s(t.collocation.satisfyAmount)+"减"+t._s(t.collocation.discountAmount))]),t._v(" "),s("span",{staticClass:"fr highlight"},[t._v("  -¥"+t._s(t.disCountAmount)+"  ")])]):t._e(),t._v(" "),s("div",{staticClass:"p15  ",staticStyle:{height:"24px"}},[s("span",{staticClass:"fr"},[s("span",{staticClass:"highlight fs14 ml10"},[t._v("优惠后金额 ")]),t._v(" "),s("span",{staticClass:"fs10 mr10"},[t._v("（不含邮费）")]),t._v(" "),s("span",{staticClass:"highlight fs22"},[t._v("¥ "+t._s(t.needPayPrice)+"  ")])])]),t._v(" "),s("div",{staticClass:"p15  ",staticStyle:{height:"20px"}},[s("span",{staticClass:" fs15"},[s("span",{staticClass:" fs20 highlight"},[t._v("●")]),t._v("  快递费 "+t._s(t.collocation.shipAmount)+"元")]),t._v(" "),t.collocation.freeShipAmount>0&&t.collocation.shipAmount>0?s("span",{staticClass:"fs14"},[t._v("，"),s("span",{staticClass:"highlight"},[t._v("优惠后金额满"+t._s(t.collocation.freeShipAmount)+"元包邮")])]):t._e()]),t._v(" "),s("div",{staticStyle:{height:"80px",position:"relative"}},[t._v(" ")]),t._v(" "),s("div",{staticClass:"btn-fixed",staticStyle:{"z-index":"1003"}},[s("div",{staticClass:"btn",on:{click:t.pay}},[t._v("\n                立即购买\n            ")])])],2)},staticRenderFns:[]};var i=function(t){s("m1Wf")},a=s("VU/8")(o.a,n,!1,i,"data-v-8eaa99e6",null);e.default=a.exports},m1Wf:function(t,e){}});