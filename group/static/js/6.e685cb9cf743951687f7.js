webpackJsonp([6],{fA8u:function(e,t,r){e.exports=r.p+"static/img/tapd_22553051_base64_1599792874_28.babd840.png"},tZMw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,o=r("Au9i"),n={data:function(){return{ruleId:"",productType:"",coverup:!1}},created:function(){s=this},components:{},computed:{},mounted:function(){s.query()},methods:{query:function(){s.receiveData.getData(s,"/promotion/partner/checkValidation","res",function(){s.res.success?"success"==s.res.result&&(s.coverup=!0):40001!=s.res.errorCode&&s.getdetail()})},getdetail:function(){s.receiveData.getData(s,"/onsales/getPromotion?prodcutType=1003","res",function(){s.res.success?(s.ruleId=s.res.result[0].ruleId,s.productType=s.res.result[0].productType,o.MessageBox.alert("请先成为社区合伙人").then(function(e){window.location.href=s.basePageUrl+"group/onsales.html?"+s.common.getoriApp()+"#/salesdetail?ruleId="+s.ruleId+"&productType="+s.productType})):null!=s.res.message&&alert(s.res.message)})}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cust"},[t("img",{directives:[{name:"show",rawName:"v-show",value:this.coverup,expression:"coverup"}],attrs:{src:r("fA8u"),alt:""}})])},staticRenderFns:[]};var a=r("VU/8")(n,u,!1,function(e){r("vB+v")},"data-v-68fd8566",null);t.default=a.exports},"vB+v":function(e,t){}});