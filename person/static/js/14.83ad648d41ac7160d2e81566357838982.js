webpackJsonp([14],{"39wv":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=void 0,o={data:function(){return{summary:{validCount:0,validCoupons:[],invalidCoupons:[],invalidCount:0},coupon:{},invalidPage:0,moreInvalid:!0,showdetail:!1}},created:function(){i=this},mounted:function(){this.validCoupons()},components:{},methods:{validCoupons:function(){i.receiveData.getData(i,"/couponSummary","Data",function(){i.Data.success&&i.Data.success?i.summary=i.Data.result:alert("获取现金券信息失败！")})},hideDetail:function(){i.showdetail=!1},showDetailCoupon:function(t){i.coupon=i.summary.validCoupons[t],i.showdetail=!0},gotoSales:function(){null!=i.coupon.suggestUrl&&""!=i.coupon.suggestUrl?window.location=i.coupon.suggestUrl:location.href=i.basePageUrl+"group/onsales.html?v=20160229?type=3"},moreCoupon:function(){i.receiveData.getData(i,"/invalidCoupons/"+i.invalidPage,"data",function(){i.data.success?i.data.result&&i.data.result.length>0?(i.summary.invalidCoupons=i.data.result,i.invalidPage++):(i.moreInvalid=!1,alert("已显示全部现金券！")):alert("获取现金券信息失败！")})}},computed:{}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"coupons"},[a("div",{staticClass:"addconpons"},[t.summary.validCount>0?a("div",{staticClass:"title-line"},[a("div",{staticClass:"title_text"},[t._v("可用现金券")]),t._v(" "),a("div",{staticClass:"title_count"},[t._v("共"+t._s(t.summary.validCount)+"个")])]):t._e(),t._v(" "),a("div",t._l(t.summary.validCoupons,function(s,i){return a("div",{staticClass:"coupon_item",on:{click:function(s){t.showDetailCoupon(i)}}},[a("div",{staticClass:"outter_bg"},[a("div",{staticClass:"coupon_desc"},[a("div",{staticClass:"coupon_line_1"},[a("span",{staticClass:"coupon-name"},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"coupon-time"},[t._v(t._s(s.leftDayDes))])]),t._v(" "),a("div",{staticClass:"coupon-limit"},[t._v("使用期限"+t._s(s.useStartDateStr)+"至"+t._s(s.useEndDateStr))])]),t._v(" "),a("div",{staticClass:"coupon_value"},[a("div",{staticClass:"coupon-amount"},[t._v(t._s(s.amount)+"元")]),t._v(" "),a("div",{staticClass:"coupon-dyq"},[t._v("现金券")])])])])})),t._v(" "),t.summary.invalidCount>0?a("div",{staticClass:"title-line"},[a("div",{staticClass:"title_text"},[t._v("历史现金券")]),t._v(" "),a("div",{staticClass:"title_count"},[t._v("共"+t._s(t.summary.invalidCount)+"个")])]):t._e(),t._v(" "),a("div",t._l(t.summary.invalidCoupons,function(s){return a("div",{staticClass:"coupon_item disabled"},[a("div",{staticClass:"outter_bg"},[a("div",{staticClass:"coupon_desc"},[a("div",{staticClass:"coupon_line_1"},[a("span",{staticClass:"coupon-name"},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"coupon-time"},[t._v(t._s(s.leftDayDes))])]),t._v(" "),a("div",{staticClass:"coupon-limit"},[t._v("使用期限"+t._s(s.useStartDateStr)+"至"+t._s(s.useEndDateStr))])]),t._v(" "),a("div",{staticClass:"coupon_value"},[a("div",{staticClass:"coupon-amount"},[t._v(t._s(s.amount)+"元")]),t._v(" "),a("div",{staticClass:"coupon-dyq"},[t._v("现金券")])])]),t._v(" "),a("div",[t._v(" ")])])})),t._v(" "),t.showdetail?a("div",{staticClass:"coupon-overlay",on:{click:t.hideDetail}}):t._e(),t._v(" "),t.showdetail?a("div",{staticClass:"coupon_detail"},[a("div",{staticClass:"coupon_detail_title"},[a("div",{staticClass:"coupon_detail_name"},[t._v(t._s(t.coupon.title))]),t._v(" "),a("div",{staticClass:"coupon_detail_amount"},[t._v("￥"+t._s(t.coupon.amount)),a("span",{staticStyle:{"margin-left":"15px"}},[t._v("现金券")])])]),t._v(" "),a("div",{staticClass:"coupon_detail_timeout"},[a("span",{staticClass:"coupon_detail_timeout_title"},[t._v(t._s(t.coupon.leftDayDes))])]),t._v(" "),a("div",{staticClass:"coupon_detail_limit"},[t._v("使用期限"),a("span",{staticStyle:{"margin-left":"19px"}},[t._v(t._s(t.coupon.useStartDateStr)+"-"+t._s(t.coupon.useEndDateStr))])]),t._v(" "),a("div",{staticClass:"coupon_detail_rule"},[t._v("\n                使用规则\n                "),a("div",{staticClass:"coupon_detail_rule_detail",domProps:{innerHTML:t._s(t.coupon.couponDesc)}})]),t._v(" "),a("div",{staticClass:"coupon_detail_btn_area"},[a("div",{staticClass:"coupon_detail_btn_1",on:{click:t.hideDetail}},[t._v("下次使用")]),t._v(" "),a("div",{staticClass:"coupon_detail_btn_2",on:{click:t.gotoSales}},[t._v("现在使用")])])]):t._e(),t._v(" "),a("div",{staticClass:"btn_area",staticStyle:{margin:"45px 0"}},[t.moreInvalid?a("span",{staticClass:"more_btn",on:{click:t.moreCoupon}},[t._v("查看全部历史现金券")]):t._e()])])])},staticRenderFns:[]};var e=a("VU/8")(o,n,!1,function(t){a("sM1t")},"data-v-1f9ba22d",null);s.default=e.exports},sM1t:function(t,s){}});