webpackJsonp([4],{DTAB:function(t,e,a){t.exports=a.p+"static/img/img_shopping_banner.0f6e2ea.png"},Fbw9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("gqsW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[s("div",{staticClass:"bounce1"}),t._v(" "),s("div",{staticClass:"bounce2"}),t._v(" "),s("div",{staticClass:"bounce3"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[s("span",[t._v("没有更多")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[s("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:a("KrrY")}})]),t._v(" "),s("div",{attrs:{id:"indexdivs"},on:{scroll:t.getscroll}},[s("div",{attrs:{id:"indexDiv"}},[s("div",[t.banners.length>0?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.banners,function(t){return s("swiper-slide",{key:t.id},[s("div",{staticClass:"ban1"},[s("a",{attrs:{href:t.bannerUrl}},[s("img",{attrs:{src:t.picture,alt:""}})])])])}),1):t._e()],1),t._v(" "),s("div",{staticClass:"banner"},[s("router-link",{attrs:{to:{path:"/"}}},[s("img",{staticStyle:{width:"100%"},attrs:{alt:"",src:a("DTAB")}})])],1),t._v(" "),s("div",{staticClass:"onsale_nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"1"}}}},[s("i",{staticClass:"nav_logo nav_life"}),t._v("土特产")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"2"}}}},[s("i",{staticClass:"nav_logo nav_food"}),t._v("美食店")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"4"}}}},[s("i",{staticClass:"nav_logo nav_apple"}),t._v("水果摊")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"3"}}}},[s("i",{staticClass:"nav_logo nav_fruit"}),t._v("进口馆")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"last",attrs:{to:{path:"/onsales",query:{type:"5"}}}},[s("i",{staticClass:"nav_logo nav_carstact"}),t._v("粮食铺")])],1)])]),t._v(" "),s("div",{staticClass:"mlr5 "},[t._l(t.temais,function(e,a){return s("div",{key:e.id,staticStyle:{width:"50%",float:"left"}},[s("div",{staticClass:"product-item",class:{pleft:a%2==1,pright:a%2==0},on:{click:function(a){t.Href(e.ruleId)}}},[s("div",{staticClass:"pic_container"},[s("div",{staticClass:"pic_dummy"}),t._v(" "),s("img",{staticClass:"product-image pic_content",attrs:{alt:"",src:e.productPic}}),t._v(" "),null!=e.tagUrl&&""!=e.tagUrl?s("img",{staticClass:"product-tag",attrs:{src:e.tagUrl}}):t._e()]),t._v(" "),s("div",{staticClass:"product-name pl05"},[t._v(t._s(e.ruleName))]),t._v(" "),s("div",{staticClass:"mt1 pl05"},[s("span",{staticClass:"highlight fs20"},[t._v("¥ "+t._s(e.price)+" ")]),t._v(" "),s("span",{staticClass:"ori-price"},[s("del",[t._v("¥ "+t._s(e.oriPrice)+" ")])]),t._v(" "),s("span",{staticClass:"product-discount"},[t._v(t._s(e.discount))])])])])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),s("div",{staticStyle:{height:"60px",clear:"both"}})]),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var r=function(t){a("Fig6")},n=a("VU/8")(s.a,i,!1,r,"data-v-acd5615e",null);e.default=n.exports},Fig6:function(t,e){},gqsW:function(t,e,a){"use strict";(function(t){var s=a("mvHQ"),i=(a.n(s),a("bOdI")),r=a.n(i),n=a("7QTg"),o=(a.n(n),a("2NXm")),l=void 0,c=!0,u=!1;e.a={data:function(){var t;return{load:!0,hidden:!1,phoneErro:!1,temais:[],currentType:100,type:this.$route.query.type,page:0,banners:[],bannerType:1,swiperOption:(t={notNextTick:!0,autoplay:!1},r()(t,"autoplay",{disableOnInteraction:!1,delay:3e3}),r()(t,"pagination",{el:".swiper-pagination"}),r()(t,"loop",!0),t)}},created:function(){l=this},mounted:function(){l.getBannerType(),l.queryProducts()},watch:{$route:function(t,e){t.query.type!=e.query.type&&(l.currentType=t.query.type,c=!0,u=!1),l.query()}},components:{swiper:n.swiper,swiperSlide:n.swiperSlide,Footer:o.a},methods:{initSession4Test:function(){l.receiveData.getData(l,url,"Data",function(){})},getBannerType:function(){l.receiveData.getData(l,"banner/"+l.bannerType,"res",function(){l.res.success?l.banners=l.res.result:alert("获取banner异常")})},queryProducts:function(){l.currentType!=l.type&&(l.currentType=l.type,l.query())},query:function(){null==l.currentType&&(l.currentType=100),l.page=0;var t="onsales/"+l.currentType+"/"+l.page;this.common.invokeApi("GET",t,null,null,function(t){l.temais=t.result,l.load=!1,l.page++},function(){l.load=!1,l.temais=[]})},Href:function(t){l.$router.push({path:"/onsaledetail",query:{ruleId:t,type:l.currentType}})},getscroll:function(e){var a=e.srcElement.scrollTop;t("#indexDiv").height()-a<800&&c&&!u&&(u=!0,l.hidden=!0,l.loadNextPage())},loadNextPage:function(){var t="onsales/"+l.currentType+"/"+l.page;l.receiveData.getData(l,t,"Data",function(){l.Data.success?null==l.Data.result||0==l.Data.result.length?(l.hidden=!1,c=!1,u=!1,l.phoneErro=!0,setTimeout(function(){l.phoneErro=!1},1e3)):(u=!1,l.hidden=!1,l.temais=l.temais.concat(l.Data.result),l.page++):(u=!1,alert("加载特卖信息失败"))})}},computed:{}}}).call(e,a("7t+N"))}});