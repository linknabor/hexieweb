webpackJsonp([28],{msZ7:function(s,e){},xKMo:function(s,e,t){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{code:this.$route.query.code,item:{},evoucherOperator:""}},created:function(){a=this},components:{},computed:{},mounted:function(){a.info()},methods:{query:function(){var s="/evoucher/getByCode/"+a.code;a.receiveData.getData(a,s,"res",function(){a.res.success?a.item=a.res.result:alert(null==a.res.message?"该券码不存在":a.res.message)})},info:function(){var s="userInfo?oriApp="+a.getUrlParam("oriApp");a.common.invokeApi("GET",s,null,function(){},function(s){s.success&&null==s.result?reLogin():(a.evoucherOperator=s.result.evoucherOperator,a.query())},function(s){alert(a.n.message)})},btn:function(){var s="/evoucher/consume/"+a.code+"?evouchers=1";a.receiveData.postData(a,s,{},"res",function(){a.res.success?(alert("核销成功"),a.$router.push({path:"/cardrollrecords"})):alert(null==a.res.message?"核销失败":a.res.message)})}}},r={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"cardrollgoods"},[t("div",{staticClass:"goods-warp"},[t("div",{staticClass:"centrent"},[t("div",{staticClass:"ov"},[t("img",{staticClass:"icon-goods fl",attrs:{src:s.item.smallPicture}}),s._v(" "),t("div",{staticClass:"fr goods-r"},[t("span",[s._v(s._s(s.item.name))]),t("br"),s._v(" "),t("span",[s._v("¥"+s._s(s.item.actualPrice))])])])]),s._v(" "),t("div",{staticClass:"goods-hr"}),s._v(" "),t("div",{staticClass:"goods-message"},[t("div",[t("span",{staticClass:"goods-marg15"},[s._v("数量   ")]),t("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.item.count))])]),s._v(" "),t("div",[t("span",{staticClass:"goods-marg15"},[s._v("手机号")]),t("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.item.tel))])])])]),s._v(" "),t("div",{staticClass:"goods-hr3"}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.evoucherOperator,expression:"evoucherOperator"}],staticClass:"btn"},[t("div",{staticClass:"btn-top",on:{click:function(e){s.btn()}}},[s._v("确认核销")]),s._v(" "),t("div",{staticClass:"btn-bott"},[s._v("核销后不可撤回")])])])},staticRenderFns:[]};var c=t("VU/8")(o,r,!1,function(s){t("msZ7")},"data-v-17d1faf8",null);e.default=c.exports}});