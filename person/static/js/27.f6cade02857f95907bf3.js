webpackJsonp([27],{"0bdg":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,s={data:function(){return{cancelReasonType:1,cancelReason:"",reasonPicker:[{name:"我临时有事",value:1,checked:!0},{name:"师傅无法上门",value:2,checked:!1},{name:"其他",value:3,checked:!1}]}},created:function(){a=this},mounted:function(){},methods:{selectTeam:function(e){for(var t=0;t<a.reasonPicker.length;t++)a.reasonPicker[t].checked=!1;a.reasonPicker[e].checked=!0,a.cancelReasonType=a.reasonPicker[e].value},focus:function(){},storeMemo:function(e){a.cancelReason=e.srcElement.innerText},backPage:function(){a.$router.push({path:"/myserviceDetail",query:{orderId:a.$route.query.orderId}})},confirm:function(){a.receiveData.postData(a,"/customService/order/reverse?orderId="+a.$route.query.orderId,null,"res",function(){a.res.success?(alert("订单已取消"),a.$router.push({path:"/myserviceDetail",query:{orderId:a.$route.query.orderId}})):alert(null==a.res.message?"订单取消失败，请稍后重试！":a.res.message)})}}},n={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"cancelo"},[c("div",{staticClass:"modal"},e._l(e.reasonPicker,function(t,a){return c("div",{key:a,staticClass:"modal-select ptb15 line-divider",class:{checked:t.checked},on:{click:function(t){e.selectTeam(a)}}},[e._v(e._s(t.name))])})),e._v(" "),c("div",{staticClass:"block-divider"}),e._v(" "),c("div",{staticClass:"memo_area"},[c("div",{staticStyle:{padding:"15px"}},[e._v("具体原因")]),e._v(" "),c("div",{staticClass:"content",class:{hasValue:e.cancelReason},attrs:{contenteditable:"true"},on:{click:e.focus,blur:e.storeMemo}})]),e._v(" "),c("div",{staticClass:"btn-fixed"},[c("div",{staticClass:"btn2",staticStyle:{float:"left"},on:{click:e.backPage}},[e._v("取消")]),e._v(" "),c("div",{staticClass:"btn",staticStyle:{float:"left"},on:{click:e.confirm}},[e._v("确定")])])])},staticRenderFns:[]};var r=c("VU/8")(s,n,!1,function(e){c("Qp93")},"data-v-3891c19c",null);t.default=r.exports},Qp93:function(e,t){}});