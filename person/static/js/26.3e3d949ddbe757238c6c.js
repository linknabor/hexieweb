webpackJsonp([26],{xKMo:function(s,e,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{code:this.$route.query.code,item:{},evoucherOperator:""}},created:function(){r=this},components:{},computed:{},mounted:function(){r.info()},methods:{query:function(){var s="/evoucher/getByCode/"+r.code;r.receiveData.getData(r,s,"res",function(){r.res.success?r.item=r.res.result:alert(null==r.res.message?"劵码错误":r.res.message)})},info:function(){var s="/userInfo?oriApp="+r.getUrlParam("oriApp");r.receiveData.getData(r,s,"res",function(){r.res.success?(r.evoucherOperator=r.res.result.evoucherOperator,r.common.updatecookie(r.res.result.cardStatus,r.res.result.cardService,r.res.result.id,r.res.result.appid,r.res.result.cspId,r.res.result.sectId,r.res.result.cardPayService,r.res.result.bgImageList,r.res.result.wuyeTabsList,r.res.result.qrCode,r.res.result),r.query()):alert(r.res.message)})},btn:function(){var s="/evoucher/consume/"+r.code+"?evouchers=1";r.receiveData.postData(r,s,{},"res",function(){r.res.success?(alert("核销成功"),r.$router.push({path:"/cardrollrecords"})):alert(r.res.message)})}}},o={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"cardrollgoods"},[t("div",{staticClass:"goods-warp"},[t("div",{staticClass:"centrent"},[t("div",{staticClass:"ov"},[t("img",{staticClass:"icon-goods fl",attrs:{src:s.item.smallPicture}}),s._v(" "),t("div",{staticClass:"fr goods-r"},[t("span",[s._v(s._s(s.item.name))]),t("br"),s._v(" "),t("span",[s._v("¥"+s._s(s.item.actualPrice))])])])]),s._v(" "),t("div",{staticClass:"goods-hr"}),s._v(" "),t("div",{staticClass:"goods-message"},[t("div",[t("span",{staticClass:"goods-marg15"},[s._v("数量   ")]),t("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.item.count))])]),s._v(" "),t("div",[t("span",{staticClass:"goods-marg15"},[s._v("手机号")]),t("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.item.tel))])])])]),s._v(" "),t("div",{staticClass:"goods-hr3"}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.evoucherOperator,expression:"evoucherOperator"}],staticClass:"btn"},[t("div",{staticClass:"btn-top",on:{click:function(e){s.btn()}}},[s._v("确认核销")]),s._v(" "),t("div",{staticClass:"btn-bott"},[s._v("核销后不可撤回")])])])},staticRenderFns:[]};var c=t("VU/8")(a,o,!1,function(s){t("xVsU")},"data-v-2a2c392b",null);e.default=c.exports},xVsU:function(s,e){}});