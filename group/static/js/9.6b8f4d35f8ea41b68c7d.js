webpackJsonp([9],{"3oom":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("hO9y"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[s("div",{staticClass:"bounce1"}),e._v(" "),s("div",{staticClass:"bounce2"}),e._v(" "),s("div",{staticClass:"bounce3"})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[s("span",[e._v("没有更多")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[s("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:a("KrrY")}})]),e._v(" "),s("div",{attrs:{id:"indexdivs"},on:{scroll:e.getscroll}},[s("div",{attrs:{id:"indexDiv"}},[e._l(e.banners,function(e){return s("div",{key:e.id,staticClass:"banner"},[s("img",{attrs:{src:e.picture}})])}),e._v(" "),s("div",{staticClass:"mlr5"},[e._l(e.temais,function(t,a){return s("div",{key:t.id,staticStyle:{width:"50%",float:"left"}},[s("div",{staticClass:"product-item",class:{pleft:a%2==1,pright:a%2==0},on:{click:function(a){e.Href(t.ruleId)}}},[s("div",{staticClass:"pic_container"},[s("div",{staticClass:"pic_dummy"}),e._v(" "),s("img",{staticClass:"product-image pic_content",attrs:{alt:"",src:t.productPic}}),e._v(" "),null!=t.tagUrl&&""!=t.tagUrl?s("img",{staticClass:"product-tag",attrs:{src:t.tagUrl}}):e._e()]),e._v(" "),s("div",{staticClass:"product-name pl05"},[e._v(e._s(t.ruleName))]),e._v(" "),s("div",{staticClass:"mt1 pl05"},[s("span",{staticClass:"highlight fs20"},[e._v("¥ "+e._s(t.price)+" ")]),e._v(" "),s("span",{staticClass:"ori-price"},[s("del",[e._v("¥ "+e._s(t.oriPrice)+" ")])]),e._v(" "),s("span",{staticClass:"product-discount"},[e._v(e._s(t.discount))])])])])}),e._v(" "),s("div",{staticStyle:{clear:"both"}})],2)],2),e._v(" "),s("div",{staticStyle:{height:"60px",clear:"both"}})]),e._v(" "),s("Footer")],1)},staticRenderFns:[]};var r=function(e){a("HcaT")},n=a("VU/8")(s.a,i,!1,r,"data-v-63b4cf52",null);t.default=n.exports},HcaT:function(e,t){},hO9y:function(e,t,a){"use strict";(function(e){var s=a("2NXm"),i=a("lbHh"),r=a.n(i),n=void 0,c=!0,o=!1;t.a={data:function(){return{load:!0,hidden:!1,phoneErro:!1,temais:[],page:0,banners:[],titles:[],sectId:""}},created:function(){(n=this).flush()},mounted:function(){n.getBannerType(),n.query()},components:{Footer:s.a},methods:{flush:function(){1==this.$route.query.flush&&(c=!0,o=!1)},initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/79185","Data",function(){})},getBannerType:function(){n.receiveData.getData(n,"banner/6","res",function(){n.res.success&&(n.banners=n.res.result)})},query:function(){n.sectId=r.a.get("sectId"),n.receiveData.getData(n,"onsales/v2/1000/0/"+n.page,"res",function(){if(n.res.success)if(""==n.sectId||"null"==n.sectId||0==n.sectId||null==n.sectId)n.temais=n.res.result,n.load=!1,n.page++;else{if(0==n.res.result.length)return n.load=!1,alert("您所在小区暂未开通该功能，敬请期待"),void(window.location.href=n.basePageUrl+"wuye/index.html?"+n.common.getoriApp()+"#/");n.temais=n.res.result,n.load=!1,n.page++}else n.temais=[],n.load=!1,alert(n.res.messages)})},Href:function(e){n.$router.push({path:"/cardrolldetail",query:{ruleId:e}})},getscroll:function(t){var a=t.srcElement.scrollTop;e("#indexDiv").height()-a<800&&c&&!o&&(o=!0,n.hidden=!0,n.loadNextPage())},loadNextPage:function(){var e="onsales/v2/1000/0/"+n.page;n.receiveData.getData(n,e,"Data",function(){n.Data.success?null==n.Data.result||0==n.Data.result.length?(n.hidden=!1,c=!1,o=!1,n.phoneErro=!0,setTimeout(function(){n.phoneErro=!1},1e3)):(o=!1,n.hidden=!1,n.temais=n.temais.concat(n.Data.result),n.page++):(o=!1,alert(n.Data.message))})}},computed:{}}}).call(t,a("7t+N"))}});