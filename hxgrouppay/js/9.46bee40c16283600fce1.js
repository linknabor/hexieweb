webpackJsonp([9],{baKV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=void 0,n={name:"coupon",data:function(){return{coupons:[],type:this.$route.query.type,ruleId:this.$route.query.ruleId,couponid:this.$route.query.couponid,salePlanId:this.$route.query.salePlanId}},created:function(){i=this},components:{},computed:{},mounted:function(){i.queryCoupon()},methods:{queryCoupon:function(){var t;t=12==i.type?i.ruleId:i.salePlanId,i.receiveData.getData(i,"/coupon/valid/"+i.type+"/"+t,"res",function(){i.res.success?i.coupons=i.res.result:alert(i.res.message)})},apply:function(t){i.couponid!=t.id?i.couponid=t.id:i.couponid=""},determine:function(){12==i.type?i.$router.push({path:"/cardrollbuy",name:"cardrollbuy",query:{type:i.type,ruleId:i.ruleId,couponid:i.couponid}}):i.$router.push({path:"/confirmation",name:"confirmation",query:{type:i.type,couponid:i.couponid}})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"coupons"},[s("div",{staticClass:"content"},[s("div",{staticClass:"head"},[t._v("\n            可有优惠券\n        ")]),t._v(" "),t._l(t.coupons,function(e){return s("div",{key:e.id,staticClass:"coupon ov",on:{click:function(s){return t.apply(e)}}},[s("div",{staticClass:"fl coupon-right"},[s("span",{staticClass:"f48"},[t._v(t._s(e.amount))]),s("br"),t._v(" "),s("span",{staticClass:"text3 mg1"},[t._v("满任意金额可用")])]),t._v(" "),s("div",{staticClass:"fl coupon-left "},[s("i",{staticClass:"icon_se ",class:{icon_seactive:e.id==t.couponid}}),t._v(" "),s("div",{staticClass:"tSemicircle"}),t._v(" "),s("div",{staticClass:"ov describe"},[s("span",{staticClass:"text1"},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"text3 describe-h ellipsis2"},[t._v(t._s(e.couponDesc))]),t._v(" "),s("span",{staticClass:"text3"},[t._v(t._s(e.useStartDateStr)+"-"+t._s(e.useEndDateStr))])]),t._v(" "),s("div",{staticClass:"bSemicircle"})])])})],2),t._v(" "),s("div",{staticStyle:{height:"60px"}}),t._v(" "),s("div",{staticClass:"btn_area",staticStyle:{"margin-bottom":"15px"},on:{click:function(e){return t.determine()}}},[s("div",{staticClass:"more_btn"},[t._v("确定")])])])},staticRenderFns:[]};var o=s("VU/8")(n,a,!1,function(t){s("xDBs")},"data-v-3ebdfaf3",null);e.default=o.exports},xDBs:function(t,e){}});