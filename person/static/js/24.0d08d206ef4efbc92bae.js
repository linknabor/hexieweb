webpackJsonp([24],{Fv2p:function(e,s){},xKMo:function(e,s,t){"use strict";var o;Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{code:this.$route.query.code,item:{},fork:"",evoucherOperator:""}},created:function(){o=this},components:{},computed:{},mounted:function(){o.query(),o.info()},methods:{query:function(){var e="/evoucher/getByCode/"+o.code;o.receiveData.getData(o,e,"res",function(){o.res.success&&(o.item=o.res.result,o.fork=o.item.tel.slice(0,3)+"××××××××")})},info:function(){var e="/userInfo?oriApp="+o.getUrlParam("oriApp");o.receiveData.getData(o,e,"res",function(){o.res.success&&(o.evoucherOperator=o.res.result.evoucherOperator)})},btn:function(){var e="/evoucher/consume/"+o.code+"?evouchers=1";o.receiveData.postData(o,e,{},"res",function(){o.res.success&&alert("核销成功")})}}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cardrollgoods"},[t("div",{staticClass:"centrent"},[t("div",{staticClass:"ov"},[t("img",{staticClass:"icon-goods fl",attrs:{src:e.item.smallPicture}}),e._v(" "),t("div",{staticClass:"fr goods-r"},[t("span",[e._v(e._s(e.item.name))]),t("br"),e._v(" "),t("span",[e._v("¥"+e._s(e.item.actualPrice))])])])]),e._v(" "),t("div",{staticClass:"goods-hr"}),e._v(" "),t("div",{staticClass:"goods-message"},[t("div",[t("span",{staticClass:"goods-marg15"},[e._v("数量    ")]),t("span",{staticClass:"goods-color"},[e._v(" "+e._s(e.item.count))])]),e._v(" "),t("div",[t("span",{staticClass:"goods-marg15"},[e._v("电话号")]),t("span",{staticClass:"goods-color"},[e._v(" "+e._s(e.fork))])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.evoucherOperator,expression:"evoucherOperator"}],staticClass:"btn"},[t("div",{staticClass:"btn-top",on:{click:function(s){e.btn()}}},[e._v("确认核销")]),e._v(" "),t("div",{staticClass:"btn-bott"},[e._v("核销后不可撤回")])])])},staticRenderFns:[]};var c=t("VU/8")(a,r,!1,function(e){t("Fv2p")},"data-v-17f0dc26",null);s.default=c.exports}});