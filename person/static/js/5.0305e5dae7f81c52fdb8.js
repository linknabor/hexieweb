webpackJsonp([5],{"+yIy":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=void 0,s={data:function(){return{}},beforeCreate:function(){window.document.body.style.background="#fff"},created:function(){n=this},mounted:function(){},beforeDestroy:function(){window.document.body.style.background="#fffff8"},methods:{pays:function(){n.receiveData.getData(n,"/card/activateUrlOnMenu?oriApp="+n.getUrlParam("oriApp"),"res",function(){n.res.success?location.href=n.res.result:alert(n.res.message)})}},computed:{}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"btn-fixed"},[i("div",{staticClass:"pay",on:{click:function(e){t.pays()}}},[t._v("\n              立即领取\n          ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",[n("img",{attrs:{src:i("gtAV"),alt:""}})]),t._v(" "),n("div",{staticClass:"mint"},[n("span",[t._v("会员特权")])]),t._v(" "),n("div",[n("ul",[n("li",{staticStyle:{"margin-bottom":"0.15rem"}},[t._v("业主缴费送积分，在线支付物业费1元\n                 "),n("i",{staticClass:"mint-i1 mint-i"})]),t._v(" "),n("li",[t._v("即可获得1积分\n             ")]),t._v(" "),n("li",[t._v("积分获取仅支持公众号内缴费\n                 "),n("i",{staticClass:"mint-i"})]),t._v(" "),n("li",[t._v("现金缴费暂不支持\n                 "),n("i",{staticClass:"mint-i"})])])])])}]};var c=i("VU/8")(s,a,!1,function(t){i("4zuI")},"data-v-1d22bd34",null);e.default=c.exports},"4zuI":function(t,e){},gtAV:function(t,e,i){t.exports=i.p+"static/img/组3.4b147e5.png"}});