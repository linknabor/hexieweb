webpackJsonp([21],{PNMz:function(s,t){},xKMo:function(s,t,e){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{code:this.$route.query.code,item:{},fork:""}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},methods:{query:function(){var s="/evoucher/getByCode/"+a.code;a.receiveData.getData(a,s,"res",function(){a.res.success&&(a.item=a.res.result,a.fork=a.item.tel.slice(0,3)+"××××××××")})},btn:function(){var s="/evoucher/consume/"+a.code+"?evouchers=1";a.receiveData.postData(a,s,{},"res",function(){a.res.success&&alert("核销成功")})}}},c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"cardrollgoods"},[e("div",{staticClass:"centrent"},[e("div",{staticClass:"ov"},[e("img",{staticClass:"icon-goods fl",attrs:{src:s.item.smallPicture}}),s._v(" "),e("div",{staticClass:"fr goods-r"},[e("span",[s._v(s._s(s.item.name))]),e("br"),s._v(" "),e("span",[s._v("¥"+s._s(s.item.actualPrice))])])])]),s._v(" "),e("div",{staticClass:"goods-hr"}),s._v(" "),e("div",{staticClass:"goods-message"},[e("div",[e("span",{staticClass:"goods-marg15"},[s._v("数量    ")]),e("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.item.count))])]),s._v(" "),e("div",[e("span",{staticClass:"goods-marg15"},[s._v("电话号")]),e("span",{staticClass:"goods-color"},[s._v(" "+s._s(s.fork))])])]),s._v(" "),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn-top",on:{click:function(t){s.btn()}}},[s._v("确认核销")]),s._v(" "),e("div",{staticClass:"btn-bott"},[s._v("核销后不可撤回")])])])},staticRenderFns:[]};var i=e("VU/8")(o,c,!1,function(s){e("PNMz")},"data-v-54c499a1",null);t.default=i.exports}});