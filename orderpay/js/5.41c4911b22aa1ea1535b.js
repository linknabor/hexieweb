webpackJsonp([5],{EI2o:function(t,e){},YybW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("lbHh");var a=void 0,i={data:function(){return{orderId:this.$route.query.orderId,order:{}}},beforeCreate:function(){},created:function(){a=this},watch:{},mounted:function(){a.init()},methods:{init:function(){var t="customService/order?orderId="+a.orderId;a.receiveData.getData(a,t,"res",function(){a.res.success?a.order=a.res.result:alert(null==a.res.message?"请稍后重试！":a.res.message)})},goback:function(){window.location.href=a.basePageUrlpay+"home/index.html?"+a.common.getoriApp()+"#/"}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"top-info bottom-line"},[s("div",{staticClass:"item"},[s("label",[t._v("服务内容")]),s("span",{staticClass:"value wbord"},[t._v(t._s(t.order.memo))])])]),t._v(" "),s("div",{staticClass:"top-info",staticStyle:{"margin-top":"15px"}},[s("div",{staticClass:"item"},[s("label",[t._v("联系地址")]),s("span",{staticClass:"value"},[t._v(t._s(t.order.address))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("联系人")]),s("span",{staticClass:"value"},[t._v(t._s(t.order.receiverName))])]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("手机号")]),s("span",{staticClass:"value"},[t._v(t._s(t.order.tel))])])]),t._v(" "),s("div",{staticClass:"main_btn"},[s("div",{staticClass:"btn",on:{click:t.goback}},[t._v("返回")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_area"},[e("div",{staticClass:"brand-tip-1"},[this._v("下单成功")])])}]};var n=s("VU/8")(i,r,!1,function(t){s("EI2o")},"data-v-df10265c",null);e.default=n.exports}});