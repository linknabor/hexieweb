webpackJsonp([13],{"/sb/":function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var t=void 0,n={data:function(){return{cancelReasonType:1,cancelReason:"",reasonPicker:[{name:"我临时有事",value:1,checked:!0},{name:"师傅无法上门",value:2,checked:!1},{name:"其他",value:3,checked:!1}]}},created:function(){t=this},mounted:function(){},methods:{selectTeam:function(e){for(var c=0;c<t.reasonPicker.length;c++)t.reasonPicker[c].checked=!1;t.reasonPicker[e].checked=!0,t.cancelReasonType=t.reasonPicker[e].value},focus:function(){},storeMemo:function(e){t.cancelReason=e.srcElement.innerText},backPage:function(){t.$router.push({path:"/ordersDetail",query:{orderId:t.$route.query.orderId}})},confirm:function(){var e={orderId:t.$route.query.orderId,cancelReasonType:t.cancelReasonType,cancelReason:t.cancelReason};t.receiveData.postData(t,"repair/cancel",e,"res",function(){t.res.success?(alert("维修单已取消"),t.$router.push({path:"/ordersDetail",query:{orderId:t.$route.query.orderId}})):alert("维修单取消失败，请稍后重试！")})}}},s={render:function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("div",{staticClass:"cancelo"},[a("div",{staticClass:"modal"},e._l(e.reasonPicker,function(c,t){return a("div",{staticClass:"modal-select ptb15 line-divider",class:{checked:c.checked},on:{click:function(c){e.selectTeam(t)}}},[e._v(e._s(c.name))])})),e._v(" "),a("div",{staticClass:"block-divider"}),e._v(" "),a("div",{staticClass:"memo_area"},[a("div",{staticStyle:{padding:"15px"}},[e._v("具体原因")]),e._v(" "),a("div",{staticClass:"content",class:{hasValue:e.cancelReason},attrs:{contenteditable:"true"},on:{click:e.focus,blur:e.storeMemo}})]),e._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"btn2",staticStyle:{float:"left"},on:{click:e.backPage}},[e._v("取消")]),e._v(" "),a("div",{staticClass:"btn",staticStyle:{float:"left"},on:{click:e.confirm}},[e._v("确定")])])])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(e){a("WjY+")},"data-v-c80c76bc",null);c.default=r.exports},"WjY+":function(e,c){}});