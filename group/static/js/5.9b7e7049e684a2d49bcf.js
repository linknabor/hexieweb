webpackJsonp([5],{S2K3:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("bOdI"),i=e.n(s),n=e("7QTg"),r=e("fxnj"),o=e.n(r),l=e("2NXm"),c=void 0,d={data:function(){var t;return{load:!0,hidden:!1,phoneErro:!1,swiperOption:(t={notNextTick:!0,autoplay:!1},i()(t,"autoplay",{disableOnInteraction:!1,delay:3e3}),i()(t,"pagination",{el:".swiper-pagination"}),i()(t,"loop",!0),t),productbanner:[],brand_icon:[],banners:[],activebanner:[]}},created:function(){c=this},mounted:function(){var t=location.href.split("#")[0];c.receiveData.wxconfig(c,o.a,["onMenuShareTimeline","onMenuShareAppMessage"],t),c.initShareSetting(),c.getBannerType()},components:{swiper:n.swiper,swiperSlide:n.swiperSlide,Footer:l.a},methods:{initSession4Test:function(){c.receiveData.getData(c,"/initSession4Test/79187","Data",function(){})},getBannerType:function(){c.receiveData.getData(c,"banners","res",function(){c.res.success?(c.banners=c.res.result.titles,c.activebanner=c.res.result.activities,c.brand_icon=c.res.result.brands,c.productbanner=c.res.result.product,c.load=!1):alert("获取banner异常")})},gotoPage:function(t){location.href=c.productbanner[t].bannerUrl},initShareSetting:function(){var t="生鲜、水果、美食、零食、红酒、蛋糕...每周惊喜，尽在"+c.common.newname+"社区集市！",a=c.basePageUrl+"group/onsales.html?state=123#/onsalesindex",e=c.basePageUrl+"group/static/share_logo2.png";c.common.initShareConfig(t,a,e,"原产地直供，订单采摘，享更多优惠，体验品质生活",o.a)}},computed:{}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[s("div",{staticClass:"bounce1"}),t._v(" "),s("div",{staticClass:"bounce2"}),t._v(" "),s("div",{staticClass:"bounce3"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneErro,expression:"phoneErro"}],attrs:{id:"phoneErro"}},[s("span",[t._v("没有更多")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hidden,expression:"hidden"}],staticClass:"hidden",attrs:{id:"phoneAjax"}},[s("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:e("KrrY")}})]),t._v(" "),s("div",[t.banners.length>0?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.banners,function(t){return s("swiper-slide",{key:t.id},[s("div",{staticClass:"ban1"},[s("a",{attrs:{href:t.bannerUrl}},[s("img",{attrs:{src:t.picture,alt:""}})])])])}),1):t._e()],1),t._v(" "),s("div",{staticClass:"onsale_nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"1"}}}},[s("i",{staticClass:"nav_logo nav_life"}),t._v("土特产")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"2"}}}},[s("i",{staticClass:"nav_logo nav_food"}),t._v("美食店")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"4"}}}},[s("i",{staticClass:"nav_logo nav_apple"}),t._v("水果摊")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{path:"/onsales",query:{type:"3"}}}},[s("i",{staticClass:"nav_logo nav_fruit"}),t._v("进口馆")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"last",attrs:{to:{path:"/onsales",query:{type:"5"}}}},[s("i",{staticClass:"nav_logo nav_carstact"}),t._v("粮食铺")])],1)])]),t._v(" "),s("div",{staticStyle:{padding:"10px 16px"}},t._l(t.activebanner,function(t){return s("div",{key:t.id},[s("a",{attrs:{href:t.bannerUrl}},[s("img",{attrs:{src:t.picture}})])])}),0),t._v(" "),s("div",{staticStyle:{width:"100%",overflow:"hidden"}},t._l(t.productbanner,function(a,e){return s("div",{key:a.id,staticStyle:{width:"33.3%",float:"left",display:"inline-block","text-align":"center"},on:{click:function(a){t.gotoPage(e)}}},[s("img",{staticClass:"pic_circle",staticStyle:{border:"1px solid #d6d6d6","border-radius":"4px",width:"96%","margin-top":"1px"},attrs:{src:a.picture}})])}),0),t._v(" "),s("div",{staticClass:"store-div"},[t._m(0),t._v(" "),t._l(t.brand_icon,function(a){return s("div",{directives:[{name:"show",rawName:"v-show",value:a.onSaleType>=21,expression:"good.onSaleType >=21"}],key:a.id,staticStyle:{width:"100%",clear:"both"}},[s("router-link",{staticStyle:{width:"100%",display:"inline-block"},attrs:{to:{path:"/onsalesitem",query:{type:a.onSaleType}}}},[s("div",{staticClass:"product-l"}),t._v(" "),s("div",{staticClass:"product-d"},[s("div",{staticClass:"product-d-d"},[s("span",{staticClass:"product-d-d-s"},[s("img",{staticClass:"store-icon",attrs:{src:a.picture}}),t._v(" "),s("span",{staticClass:"fs17",staticStyle:{color:"#FF8A00"}},[t._v(t._s(a.brandName))])]),t._v(" "),s("span",{staticClass:"fs13 menu-onsalse-link",staticStyle:{color:"#6F6E6B",float:"right","padding-right":"15px","padding-top":"4px"}},[t._v("更多")])])])]),t._v(" "),s("div",{staticStyle:{margin:"0 5px 0 5px",overflow:"hidden"}},t._l(a.icons,function(a){return s("div",{key:a.id,staticClass:"nav_good",staticStyle:{"margin-bottom":"5px"}},[s("router-link",{staticClass:"products-item",attrs:{to:{path:"/onsaledetail",query:{ruleId:a.ruleId}}}},[s("div",{staticClass:"pic_container"},[s("img",{staticClass:"product-image pic_content product_circle",attrs:{alt:"",src:a.productPic}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:null!=a.tagUrl&&""!=a.tagUrl,expression:"product.tagUrl!=null&&product.tagUrl!=''"}],staticClass:"product-tag",attrs:{src:a.tagUrl}})]),t._v(" "),s("div",{staticClass:"pic_container",staticStyle:{float:"left",padding:"5px 0 0px 5px"}},[s("div",{staticClass:"products-name",staticStyle:{width:"90%","font-size":"12px"}},[t._v(t._s(a.ruleName))]),t._v(" "),s("span",{staticClass:"highlight fs17",staticStyle:{"margin-top":"10px"}},[s("span",{staticStyle:{"font-size":"12px"}},[t._v("¥")]),t._v(" "+t._s(a.price)+" ")]),t._v(" "),s("span",{staticClass:"ori-price fs12"},[s("del",[t._v("¥ "+t._s(a.oriPrice)+" ")])])])])],1)}),0)],1)})],2),t._v(" "),s("div",{staticStyle:{height:"60px",clear:"both"}},[t._v(" ")]),t._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"fs22"},[this._v("品牌旗舰 为您推荐")])])}]};var v=e("VU/8")(d,p,!1,function(t){e("unoj")},"data-v-0f3cf752",null);a.default=v.exports},unoj:function(t,a){}});