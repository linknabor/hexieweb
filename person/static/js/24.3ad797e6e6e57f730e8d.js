webpackJsonp([24],{"39wv":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=void 0,o={data:function(){return{summary:{validCount:0,validCoupons:[],invalidCoupons:[],invalidCount:0},coupon:{},invalidPage:0,moreInvalid:!0,showdetail:!1}},created:function(){i=this},mounted:function(){this.validCoupons()},components:{},methods:{validCoupons:function(){i.receiveData.getData(i,"/couponSummary","Data",function(){i.Data.success?i.summary=i.Data.result:alert("获取现金券信息失败！")})},hideDetail:function(){i.showdetail=!1},showDetailCoupon:function(t){i.coupon=i.summary.validCoupons[t],i.showdetail=!0},gotoSales:function(){null!=i.coupon.suggestUrl&&""!=i.coupon.suggestUrl?window.location=i.coupon.suggestUrl:location.href=i.basePageUrl+"group/onsales.html?"+i.common.getoriApp()+"&type=3"},moreCoupon:function(){i.receiveData.getData(i,"/invalidCoupons/"+i.invalidPage,"data",function(){i.data.success?i.data.result&&i.data.result.length>0?(i.summary.invalidCoupons=i.data.result,i.invalidPage++):(i.moreInvalid=!1,alert("已显示全部现金券！")):alert("获取现金券信息失败！")})}},computed:{}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"coupons"},[s("div",{staticClass:"addconpons"},[t.summary.validCount>0?s("div",{staticClass:"title-line"},[s("div",{staticClass:"title_text"},[t._v("可用现金券")]),t._v(" "),s("div",{staticClass:"title_count"},[t._v("共"+t._s(t.summary.validCount)+"个")])]):t._e(),t._v(" "),s("div",t._l(t.summary.validCoupons,function(a,i){return s("div",{staticClass:"coupon_item",on:{click:function(a){t.showDetailCoupon(i)}}},[s("div",{staticClass:"outter_bg"},[s("div",{staticClass:"coupon_desc"},[s("div",{staticClass:"coupon_line_1"},[s("span",{staticClass:"coupon-name"},[t._v(t._s(a.title))]),t._v(" "),s("span",{staticClass:"coupon-time"},[t._v(t._s(a.leftDayDes))])]),t._v(" "),s("div",{staticClass:"coupon-limit"},[t._v("使用期限"+t._s(a.useStartDateStr)+"至"+t._s(a.useEndDateStr))])]),t._v(" "),s("div",{staticClass:"coupon_value"},[s("div",{staticClass:"coupon-amount"},[t._v(t._s(a.amount)+"元")]),t._v(" "),s("div",{staticClass:"coupon-dyq"},[t._v("现金券")])])])])})),t._v(" "),t.summary.invalidCount>0?s("div",{staticClass:"title-line"},[s("div",{staticClass:"title_text"},[t._v("历史现金券")]),t._v(" "),s("div",{staticClass:"title_count"},[t._v("共"+t._s(t.summary.invalidCount)+"个")])]):t._e(),t._v(" "),s("div",t._l(t.summary.invalidCoupons,function(a){return s("div",{staticClass:"coupon_item disabled"},[s("div",{staticClass:"outter_bg"},[s("div",{staticClass:"coupon_desc"},[s("div",{staticClass:"coupon_line_1"},[s("span",{staticClass:"coupon-name"},[t._v(t._s(a.title))]),t._v(" "),s("span",{staticClass:"coupon-time"},[t._v(t._s(a.leftDayDes))])]),t._v(" "),s("div",{staticClass:"coupon-limit"},[t._v("使用期限"+t._s(a.useStartDateStr)+"至"+t._s(a.useEndDateStr))])]),t._v(" "),s("div",{staticClass:"coupon_value"},[s("div",{staticClass:"coupon-amount"},[t._v(t._s(a.amount)+"元")]),t._v(" "),s("div",{staticClass:"coupon-dyq"},[t._v("现金券")])])]),t._v(" "),s("div",[t._v(" ")])])})),t._v(" "),t.showdetail?s("div",{staticClass:"coupon-overlay",on:{click:t.hideDetail}}):t._e(),t._v(" "),t.showdetail?s("div",{staticClass:"coupon_detail"},[s("div",{staticClass:"coupon_detail_title"},[s("div",{staticClass:"coupon_detail_name"},[t._v(t._s(t.coupon.title))]),t._v(" "),s("div",{staticClass:"coupon_detail_amount"},[t._v("￥"+t._s(t.coupon.amount)),s("span",{staticStyle:{"margin-left":"15px"}},[t._v("现金券")])])]),t._v(" "),s("div",{staticClass:"coupon_detail_timeout"},[s("span",{staticClass:"coupon_detail_timeout_title"},[t._v(t._s(t.coupon.leftDayDes))])]),t._v(" "),s("div",{staticClass:"coupon_detail_limit"},[t._v("使用期限"),s("span",{staticStyle:{"margin-left":"19px"}},[t._v(t._s(t.coupon.useStartDateStr)+"-"+t._s(t.coupon.useEndDateStr))])]),t._v(" "),s("div",{staticClass:"coupon_detail_rule"},[t._v("\n                使用规则\n                "),s("div",{staticClass:"coupon_detail_rule_detail",domProps:{innerHTML:t._s(t.coupon.couponDesc)}})]),t._v(" "),s("div",{staticClass:"coupon_detail_btn_area"},[s("div",{staticClass:"coupon_detail_btn_1",on:{click:t.hideDetail}},[t._v("下次使用")]),t._v(" "),s("div",{staticClass:"coupon_detail_btn_2",on:{click:t.gotoSales}},[t._v("现在使用")])])]):t._e(),t._v(" "),s("div",{staticClass:"btn_area",staticStyle:{margin:"45px 0"}},[t.moreInvalid?s("span",{staticClass:"more_btn",on:{click:t.moreCoupon}},[t._v("查看全部历史现金券")]):t._e()])])])},staticRenderFns:[]};var e=s("VU/8")(o,n,!1,function(t){s("Y2d6")},"data-v-06efbcf9",null);a.default=e.exports},Y2d6:function(t,a){}});