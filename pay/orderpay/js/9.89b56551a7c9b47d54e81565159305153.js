webpackJsonp([9],{"1XQP":function(e,t){},jowg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("fxnj"),s=r.n(a),n=r("Au9i"),i=void 0,o={data:function(){return{amount:"",paying:!1,repairOrderId:""}},created:function(){i=this},mounted:function(){i.repairOrderId=this.$route.query.orderId},components:{},methods:{getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?unescape(r[2]):null},storeMemo:function(e){i.amount=e.srcElement.innerText},onlinePay:function(){if(!i.repairOrderId||i.repairOrderId<=0)alert("页面错误，请到详情页重新发起支付！");else{var e=i.amount;""==e||isNaN(e)?alert("请输入正确金额"):i.onlinePays()}},onlinePays:function(){i.paying=!0;var e={orderId:i.repairOrderId,amount:i.amount};i.receiveData.postData(i,"/repair/pay",e,"res",function(){i.res.success?(s.a.config({debug:!1,appId:i.res.result.appId,timestamp:i.res.result.timestamp,nonceStr:i.res.result.nonceStr,signature:i.res.result.signature,jsApiList:["chooseWXPay"]}),s.a.chooseWXPay({timestamp:i.res.result.timestamp,nonceStr:i.res.result.nonceStr,package:i.res.result.pkgStr,signType:i.res.result.signType,paySign:i.res.result.signature,success:function(e){alert("维修单支付成功！"),i.$router.push({path:"/commentxiu",query:{ordersID:i.$route.query.orderId}})}})):(alert("支付请求失败，请稍后重试!"),i.payingk=!1)})},offlinePay:function(){""!=i.amount?isNaN(i.amount)?alert("请填写正确的维修费用"):n.MessageBox.confirm("确定已现金支付给维修人员!").then(function(e){if("confirm"==e){var t={orderId:i.repairOrderId,amount:i.amount.trim()};i.receiveData.postData(i,"/repair/payOffline",t,"res",function(){i.res.success?(alert("维修单已确定"),i.$router.push({path:"/commentxiu",query:{ordersID:i.repairOrderId}})):alert("信息提交异常，请稍后重试！")})}}).catch(function(e){}):alert("请填写维修费用")}},computed:{}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"repay"},[r("div",{staticClass:"title-top"},[e._v("维修已完工，请支付费用")]),e._v(" "),r("div",{staticClass:"title-mid lite-divider"},[r("div",{staticClass:"title-mid-top"},[e._v("请输入维修费用（元）")]),e._v(" "),r("div",{staticClass:"title-mid-bottom",class:{hasvalue:""!=e.amount},attrs:{contenteditable:"true"},on:{blur:e.storeMemo}})]),e._v(" "),r("div",{staticClass:"main_btn"},[r("div",{staticClass:"btn",class:{useless:e.paying},on:{click:e.onlinePay}},[e._v("立即微信支付")]),e._v(" "),r("div",{staticClass:"btn",class:{useless:e.paying},on:{click:e.offlinePay}},[e._v("我已现金支付")])])])},staticRenderFns:[]};var c=r("VU/8")(o,u,!1,function(e){r("1XQP")},"data-v-3f31d57c",null);t.default=c.exports}});
//# sourceMappingURL=9.89b56551a7c9b47d54e81565159305153.js.map