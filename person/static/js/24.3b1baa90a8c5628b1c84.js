webpackJsonp([24],{"+xQU":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=void 0,i={data:function(){return{Received:!1,coupons:[],couponList:[]}},created:function(){a=this},components:{},computed:{},mounted:function(){a.getcoupon()},methods:{getcoupon:function(){a.receiveData.getData(a,"/coupon/v2/seedList","res",function(){a.res.success?a.coupons=a.res.result:alert(a.res.message)})},getreceive:function(e,s){e.gained||(a.$set(a.coupons[s],"gained",!0),a.receiveData.getData(a,"/coupon/v2/gain/"+e.seedStr,"res",function(){a.res.success?(a.couponList.push(e),a.$router.push({path:"/coupon",name:"coupon",params:{couponList:a.couponList}})):alert(a.res.message)}))}}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"getcoupons"},[t("div",{staticClass:"getcolor"},[e._m(0),e._v(" "),t("div",{staticClass:"content"},e._l(e.coupons,function(s,a){return t("div",{directives:[{name:"show",rawName:"v-show",value:!s.usedup,expression:"!item.usedup"}],key:s.id,staticClass:"coupon ov"},[t("div",{staticClass:"fl coupon-left "},[t("div",{staticClass:"tSemicircle"}),e._v(" "),t("div",{staticClass:"fl number",class:{"Received-l":s.gained}},[t("span",{staticClass:"rmb"},[e._v("¥")]),e._v(" "),t("span",{staticClass:"f48"},[e._v(e._s(s.amount))])]),e._v(" "),t("div",{staticClass:"ov describe",class:{"Received-l":s.gained}},[t("span",{staticClass:"text1",class:{"Received-l":s.gained}},[e._v(e._s(s.title))]),e._v(" "),t("span",{staticClass:"text3 ellipsis2"},[e._v(e._s(s.couponDesc))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:null!=s.useEndDate,expression:"item.useEndDate !=null"}],staticClass:"text3"},[e._v(e._s(s.useStartDateStr)+"-"+e._s(s.useEndDateStr))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:null==s.useEndDate,expression:"item.useEndDate ==null"}],staticClass:"text3"},[e._v("领取后"+e._s(s.expiredDays)+"天有效")])]),e._v(" "),t("div",{staticClass:"bSemicircle"})]),e._v(" "),t("div",{staticClass:"fl coupon-right",class:{"Received-r":s.gained},on:{click:function(t){e.getreceive(s,a)}}},[e._m(1,!0),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.gained,expression:"item.gained"}],staticClass:"iconimg"},[t("span",[e._v("已领取")])])])])}))])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("img",{staticStyle:{width:"100%"},attrs:{alt:"",src:"http://img.e-shequ.com/Frjki5qYnDFQ3SxPoPKMJvWb36g8"}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"receive"},[s("span",[this._v("立即")]),s("br"),this._v(" "),s("span",[this._v("领取")])])}]};var c=t("VU/8")(i,n,!1,function(e){t("wTNR")},"data-v-6836c16e",null);s.default=c.exports},wTNR:function(e,s){}});