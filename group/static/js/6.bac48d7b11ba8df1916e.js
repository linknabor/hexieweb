webpackJsonp([6],{"3oom":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("hO9y"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[a("div",{staticClass:"bounce1"}),t._v(" "),a("div",{staticClass:"bounce2"}),t._v(" "),a("div",{staticClass:"bounce3"})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[a("span",[t._v("没有更多")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[a("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:s("KrrY")}})]),t._v(" "),a("div",{attrs:{id:"indexdivs"},on:{scroll:t.getscroll}},[a("div",{attrs:{id:"indexDiv"}},[t._l(t.banners,function(t){return a("div",{key:t.id,staticClass:"banner"},[a("img",{attrs:{src:t.picture}})])}),t._v(" "),a("div",{staticClass:"mlr5"},[t._l(t.temais,function(e,s){return a("div",{key:e.id,staticStyle:{width:"50%",float:"left"}},[a("div",{staticClass:"product-item",class:{pleft:s%2==1,pright:s%2==0},on:{click:function(s){t.Href(e.ruleId)}}},[a("div",{staticClass:"pic_container"},[a("div",{staticClass:"pic_dummy"}),t._v(" "),a("img",{staticClass:"product-image pic_content",attrs:{alt:"",src:e.productPic}}),t._v(" "),null!=e.tagUrl&&""!=e.tagUrl?a("img",{staticClass:"product-tag",attrs:{src:e.tagUrl}}):t._e()]),t._v(" "),a("div",{staticClass:"product-name pl05"},[t._v(t._s(e.ruleName))]),t._v(" "),a("div",{staticClass:"mt1 pl05"},[a("span",{staticClass:"highlight fs20"},[t._v("¥ "+t._s(e.price)+" ")]),t._v(" "),a("span",{staticClass:"ori-price"},[a("del",[t._v("¥ "+t._s(e.oriPrice)+" ")])]),t._v(" "),a("span",{staticClass:"product-discount"},[t._v(t._s(e.discount))])])])])}),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2)],2),t._v(" "),a("div",{staticStyle:{height:"60px",clear:"both"}})]),t._v(" "),a("Footer")],1)},staticRenderFns:[]};var r=function(t){s("rJsz")},n=s("VU/8")(a.a,i,!1,r,"data-v-3699587a",null);e.default=n.exports},hO9y:function(t,e,s){"use strict";(function(t){var a=s("2NXm"),i=s("lbHh"),r=s.n(i),n=void 0,c=!0,o=!1;e.a={data:function(){return{load:!0,hidden:!1,phoneErro:!1,temais:[],page:0,banners:[],titles:[],sectId:""}},created:function(){(n=this).flush()},mounted:function(){n.getBannerType(),n.query()},components:{Footer:a.a},methods:{flush:function(){1==this.$route.query.flush&&(c=!0,o=!1)},initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/79185","Data",function(){})},getBannerType:function(){n.receiveData.getData(n,"banner/6","res",function(){n.res.success&&(n.banners=n.res.result)})},query:function(){n.sectId=r.a.get("sectId"),n.receiveData.getData(n,"onsales/v2/1000/"+n.page,"res",function(){if(n.res.success)if(""==n.sectId||"null"==n.sectId||0==n.sectId||null==n.sectId)n.temais=n.res.result,n.load=!1;else{if(0==n.res.result.length)return n.load=!1,alert("您所在小区暂未开通该功能，敬请期待"),void(window.location.href=n.basePageUrl+"wuye/index.html?"+n.common.getoriApp()+"#/");n.temais=n.res.result,n.load=!1,n.page++}else n.temais=[],n.load=!1,alert(n.res.messages)})},Href:function(t){n.$router.push({path:"/cardrolldetail",query:{ruleId:t}})},getscroll:function(e){var s=e.srcElement.scrollTop;t("#indexDiv").height()-s<800&&c&&!o&&(o=!0,n.hidden=!0,n.loadNextPage())},loadNextPage:function(){var t="onsales/v2/1000/"+n.page;n.receiveData.getData(n,t,"Data",function(){n.Data.success?null==n.Data.result||0==n.Data.result.length?(n.hidden=!1,c=!1,o=!1,n.phoneErro=!0,setTimeout(function(){n.phoneErro=!1},1e3)):(o=!1,n.hidden=!1,n.temais=n.temais.concat(n.Data.result),n.page++):(o=!1,alert(n.Data.message))})}},computed:{}}}).call(e,s("7t+N"))},rJsz:function(t,e){}});