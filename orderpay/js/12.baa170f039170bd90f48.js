webpackJsonp([12],{"2rQz":function(s,a){},UNAe:function(s,a,t){"use strict";var i;Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{shows:!0,com:"",nu:"",logisticsinfo:{}}},created:function(){i=this},mounted:function(){i.getLogisticsParams()},methods:{getUrlParam:function(s){var a=new RegExp("(^|&)"+s+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(a);return null!=t?unescape(t[2]):""},getLogisticsParams:function(){i.com=this.$route.query.com,i.com=unescape(i.com),i.nu=this.$route.query.nu,""!=i.nu?i.queryLogisticsInfo():(i.logisticsinfo.hasInfo="0",i.shows=!1)},queryLogisticsInfo:function(){i.receiveData.getData(i,"logistics/"+i.nu+"/"+i.com,"res",function(){i.res.success?(i.logisticsinfo=i.res.result,i.logisticsinfo.hasInfo="1",i.shows=!1):(i.shows=!1,null==i.res.result||null==i.res.message?alert("查询快递异常，请稍后再试！"):alert(i.res.message))})}},computed:{}},o={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"log"},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[t("div",{staticClass:"bounce1"}),s._v(" "),t("div",{staticClass:"bounce2"}),s._v(" "),t("div",{staticClass:"bounce3"})]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"black_overlay",attrs:{id:"fade"}}),s._v(" "),t("div",{attrs:{id:"phoneErro"}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==s.logisticsinfo.hasInfo,expression:"logisticsinfo.hasInfo==0"}],staticClass:"order-item p15 divider fs14"},[s._v("订单正在处理中，暂时没有物流信息!")]),s._v(" "),s._l(s.logisticsinfo,function(a){return t("div",{directives:[{name:"show",rawName:"v-show",value:1==s.logisticsinfo.hasInfo,expression:"logisticsinfo.hasInfo==1"}]},[t("div",{staticClass:"order-item p15 divider"},[t("div",{staticClass:"ov pb10 fs14"},[s._v("物流公司："+s._s(a.logisticsname))]),s._v(" "),t("div",{staticClass:"ov pb10 fs14"},[s._v("快递单号："+s._s(a.logisticsno))]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==a.signstatus,expression:"data.signstatus ==0"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：在途")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==a.signstatus,expression:"data.signstatus ==1"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：揽件")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==a.signstatus,expression:"data.signstatus ==2"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：疑难")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:3==a.signstatus,expression:"data.signstatus ==3"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：签收")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:4==a.signstatus,expression:"data.signstatus ==4"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：退签")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:5==a.signstatus,expression:"data.signstatus ==5"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：派件")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:6==a.signstatus,expression:"data.signstatus ==6"}],staticClass:"ov pb10 fs14"},[s._v("物流状态：退回")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:7==a.signstatus,expression:"data.signstatus ==7"}],staticClass:"ov pb10 fs14"},[s._v("物流信息尚未同步到合协社区，请稍后再试试!")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:8==a.signstatus,expression:"data.signstatus ==8"}],staticClass:"ov pb10 fs14"})]),s._v(" "),t("div",{staticClass:"desc-wrap fs13  divider"},[t("div",{directives:[{name:"show",rawName:"v-show",value:a.signstatus<7,expression:"data.signstatus<7"}],staticClass:"fs15"},[s._v("物流信息")]),s._v(" "),s._l(a.description_array,function(a){return t("ul",{staticClass:"desc-items"},[t("li",[s._v(s._s(a.time))]),s._v(" "),t("li",[s._v(s._s(a.context))])])})],2)])})],2)},staticRenderFns:[]};var n=t("VU/8")(e,o,!1,function(s){t("2rQz")},"data-v-14fda833",null);a.default=n.exports}});