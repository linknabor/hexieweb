webpackJsonp([6],{"2NXm":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("tXuv"),s=void 0,a={data:function(){return{list:[],link:""}},created:function(){s=this},mounted:function(){e.a.$on("sends",this.getMsgFromZha),s.geturl()},updated:function(){s.getclass()},methods:{getMsgFromZha:function(t){s.list=t},getclass:function(){for(var t=0;t<s.$refs.listli.length;t++)s.$refs.listli[t].style.width=100/s.$refs.listli.length+"%"},geturl:function(){var t=s.getUrlParam("oriApp");s.link=t?location.origin+location.pathname+"?oriApp="+t:location.origin+location.pathname}}},o={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"index"},[i("router-view",{staticClass:"contetn"}),t._v(" "),i("footer",{staticClass:"footer"},[i("nav",[i("ul",t._l(t.list,function(n){return i("li",{key:n.id,ref:"listli",refInFor:!0},[i("a",{ref:"lista",refInFor:!0,staticClass:"nav-controller",class:n.iconLink==t.link?"active":"",attrs:{href:n.iconLink}},[i("i",{class:n.iconClass}),t._v("\n              "+t._s(n.iconName)+"\n            ")])])}))])])],1)},staticRenderFns:[]};var r=i("VU/8")(a,o,!1,function(t){i("9zXo"),i("p6t4")},"data-v-2ba8418b",null);n.default=r.exports},"9zXo":function(t,n){},p6t4:function(t,n){},tXuv:function(t,n,i){"use strict";var e=new(i("7+uW").default);n.a=e}});