webpackJsonp([6],{"3oom":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("hO9y"),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[a("div",{staticClass:"bounce1"}),e._v(" "),a("div",{staticClass:"bounce2"}),e._v(" "),a("div",{staticClass:"bounce3"})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[a("span",[e._v("没有更多")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[a("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:s("KrrY")}})]),e._v(" "),a("div",{attrs:{id:"indexdivs"},on:{scroll:e.getscroll}},[a("div",{attrs:{id:"indexDiv"}},[e._l(e.banners,function(e){return a("div",{key:e.id,staticClass:"banner"},[a("img",{attrs:{src:e.picture}})])}),e._v(" "),a("div",{staticClass:"mlr5"},[e._l(e.temais,function(t,s){return a("div",{key:t.id,staticStyle:{width:"50%",float:"left"}},[a("div",{staticClass:"product-item",class:{pleft:s%2==1,pright:s%2==0},on:{click:function(s){e.Href(t.ruleId)}}},[a("div",{staticClass:"pic_container"},[a("div",{staticClass:"pic_dummy"}),e._v(" "),a("img",{staticClass:"product-image pic_content",attrs:{alt:"",src:t.productPic}}),e._v(" "),null!=t.tagUrl&&""!=t.tagUrl?a("img",{staticClass:"product-tag",attrs:{src:t.tagUrl}}):e._e()]),e._v(" "),a("div",{staticClass:"product-name pl05"},[e._v(e._s(t.ruleName))]),e._v(" "),a("div",{staticClass:"mt1 pl05"},[a("span",{staticClass:"highlight fs20"},[e._v("¥ "+e._s(t.price)+" ")]),e._v(" "),a("span",{staticClass:"ori-price"},[a("del",[e._v("¥ "+e._s(t.oriPrice)+" ")])]),e._v(" "),a("span",{staticClass:"product-discount"},[e._v(e._s(t.discount))])])])])}),e._v(" "),a("div",{staticStyle:{clear:"both"}})],2)],2),e._v(" "),a("div",{staticStyle:{height:"60px",clear:"both"}})]),e._v(" "),a("Footer")],1)},staticRenderFns:[]};var r=function(e){s("lSfS")},n=s("VU/8")(a.a,i,!1,r,"data-v-20b3c5b0",null);t.default=n.exports},hO9y:function(e,t,s){"use strict";(function(e){var a=s("2NXm"),i=s("lbHh"),r=s.n(i),n=void 0,c=!0,o=!1;t.a={data:function(){return{load:!0,hidden:!1,phoneErro:!1,temais:[],page:0,banners:[],titles:[],sectId:""}},created:function(){(n=this).flush()},mounted:function(){n.getBannerType(),n.query()},components:{Footer:a.a},methods:{flush:function(){1==this.$route.query.flush&&(c=!0,o=!1)},initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/79185","Data",function(){})},getBannerType:function(){n.receiveData.getData(n,"banner/6","res",function(){n.res.success&&(n.banners=n.res.result)})},query:function(){n.sectId=r.a.get("sectId"),n.receiveData.getData(n,"onsales/v2/1000/"+n.page,"res",function(){if(n.res.success)if(""==n.sectId||"null"==n.sectId||0==n.sectId||null==n.sectId)n.temais=n.res.result,n.load=!1,n.page++;else{if(0==n.res.result.length)return n.load=!1,alert("您所在小区暂未开通该功能，敬请期待"),void(window.location.href=n.basePageUrl+"wuye/index.html?"+n.common.getoriApp()+"#/");n.temais=n.res.result,n.load=!1,n.page++}else n.temais=[],n.load=!1,alert(n.res.messages)})},Href:function(e){n.$router.push({path:"/cardrolldetail",query:{ruleId:e}})},getscroll:function(t){var s=t.srcElement.scrollTop;e("#indexDiv").height()-s<800&&c&&!o&&(o=!0,n.hidden=!0,n.loadNextPage())},loadNextPage:function(){var e="onsales/v2/1000/"+n.page;n.receiveData.getData(n,e,"Data",function(){n.Data.success?null==n.Data.result||0==n.Data.result.length?(n.hidden=!1,c=!1,o=!1,n.phoneErro=!0,setTimeout(function(){n.phoneErro=!1},1e3)):(o=!1,n.hidden=!1,n.temais=n.temais.concat(n.Data.result),n.page++):(o=!1,alert(n.Data.message))})}},computed:{}}}).call(t,s("7t+N"))},lSfS:function(e,t){}});