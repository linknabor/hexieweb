webpackJsonp([9],{"+yIy":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=void 0,s={data:function(){return{}},beforeCreate:function(){window.document.body.style.background="#fff"},created:function(){n=this},mounted:function(){},beforeDestroy:function(){window.document.body.style.background="#fffff8"},methods:{pays:function(){n.receiveData.getData(n,"/card/activateUrlOnMenu?oriApp="+n.getUrlParam("oriApp"),"res",function(){n.res.success?location.href=n.res.result:alert(n.res.message)})}},computed:{}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"btn-fixed"},[i("div",{staticClass:"pay",on:{click:function(e){t.pays()}}},[t._v("\n              立即领取\n          ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("div",[e("img",{attrs:{src:i("pTCA"),alt:""}})]),this._v(" "),e("div",{staticClass:"mint"},[e("span",[this._v("会员特权")])]),this._v(" "),e("div",[e("ul",[e("li",[this._v("积分获取仅支持公众号内缴费\n                 "),e("i",{staticClass:"mint-i"})]),this._v(" "),e("li",[this._v("现金缴费暂不支持\n                 "),e("i",{staticClass:"mint-i"})])])])])}]};var c=i("VU/8")(s,a,!1,function(t){i("xm+P")},"data-v-71f501b9",null);e.default=c.exports},pTCA:function(t,e,i){t.exports=i.p+"static/img/hui.d6d49d8.png"},"xm+P":function(t,e){}});