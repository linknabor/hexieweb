webpackJsonp([10],{"/9o7":function(e,t,s){"use strict";(function(e){var s,i=!0,a=!1;t.a={data:function(){return{shows:!0,notices:[],phoneErro:!1,hidden:!1,page:1}},created:function(){s=this},mounted:function(){s.query()},methods:{query:function(){s.receiveData.getData(s,"notices/"+s.page,"res",function(){s.res.success?(s.notices=s.res.result,s.page++,s.shows=!1):(s.notices=[],s.shows=!1)})},gotoDetail:function(e){s.read(e),1==e.noticeType?location.href=s.basePageUrlpay+"orderpay.html?"+s.common.getoriApp()+"#/orderdetail?orderId="+e.bizId:2==e.noticeType||(3==e.noticeType?location.href=s.basePageUrlpay+"hxrgroups.html?"+s.common.getoriApp()+"#/rgroupdetail?groupId="+e.bizId:4==e.noticeType||e.noticeType)},addScroll:function(t){var o=t.srcElement.scrollTop;e("#adddiv").height()-o<800&&i&&!a&&(a=!0,s.hidden=!0,s.loadNextPage())},loadNextPage:function(){var e="notices/"+s.page;s.receiveData.getData(s,e,"res",function(){s.res.success?(0==s.res.result.length?(s.hidden=!1,i=!1,s.phoneErro=!0,setTimeout(function(){s.phoneErro=!1},1e3)):(s.notices=s.notices.concat(s.res.result),a=!1,s.hidden=!1),s.page++):(a=!1,s.hidden=!1,alert("加载信息失败"))})},read:function(e){s.receiveData.getData(s,"notices/read/"+e.id,"res",function(){},function(){}),e.readed=!0}},computed:{}}}).call(t,s("7t+N"))},"7Ge4":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("/9o7"),a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"not"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.shows,expression:"shows"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[i("div",{staticClass:"bounce1"}),e._v(" "),i("div",{staticClass:"bounce2"}),e._v(" "),i("div",{staticClass:"bounce3"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.shows,expression:"shows"}],staticClass:"black_overlay",attrs:{id:"fade"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[e._v("没有更多")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hidden,expression:"hidden"}],staticClass:"black_overlay",attrs:{id:"fades"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:s("l3R5")}})]),e._v(" "),i("div",{attrs:{id:"indexDiv"},on:{scroll:e.addScroll}},e._l(e.notices,function(t){return i("div",{staticClass:"mlr15 ptb15 item",attrs:{id:"adddiv"},on:{click:function(s){e.gotoDetail(t)}}},[i("div",{staticStyle:{height:"35px"}},[i("div",{staticClass:"fl fs15 notice-type"},[e._v(e._s(t.noticeTypeStr))]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.readed,expression:"!notice.readed"}],staticClass:"fl unread mlr10 plr10"},[e._v("未读")]),e._v(" "),i("span",{staticClass:"fr fs12",staticStyle:{color:"#888888"}},[i("i",{staticClass:"icon time-icon"}),e._v(e._s(t.timeStr))])]),e._v(" "),i("div",[i("div",{staticClass:"menu-link-arrow fs14 notice-content"},[e._v(e._s(t.title))])])])}))])},staticRenderFns:[]};var o=function(e){s("rGDD")},n=s("VU/8")(i.a,a,!1,o,"data-v-e975f77e",null);t.default=n.exports},rGDD:function(e,t){}});