webpackJsonp([2],{EIMD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("fxnj"),a=i.n(s),l=i("7QTg"),n=void 0,o={data:function(){return{finished:!1,showDetail:!1,left:{days:"0",hours:"0",minitus:"0",seconds:"0"},product:{pictureList:[]},rule:{currentNum:0},collocation:{},collproducts:[],ruleId:this.$route.query.ruleId,swiperOption:{notNextTick:!0,autoplay:{disableOnInteraction:!1,delay:6e3},loop:!0,pagination:{el:".swiper-pagination"}},swiperOption1:{slidesPerView:3,notNextTick:!0,loop:!0,autoplay:{disableOnInteraction:!1,delay:8e3},pagination:{el:".swiper-pagination"}}}},created:function(){(n=this).query(),n.collocations()},mounted:function(){var t=location.href.split("#")[0];n.receiveData.wxconfig(n,a.a,["onMenuShareTimeline","onMenuShareAppMessage"],t)},updated:function(){},methods:{query:function(){var t="getOnSaleRule/"+n.ruleId;n.receiveData.getData(n,t,"Data",function(){n.Data.success?n.Data.result&&(n.rule=n.Data.result,n.productss(n.rule.productId),setInterval(n.updateLeftTime,1e3)):alert(null==n.Data.message?"获取团购信息失败！":n.Data.message)})},productss:function(t){var e="getProduct/"+t;n.receiveData.getData(n,e,"res",function(){n.res.success?(n.product=n.res.result,n.common.initShareConfig(n.rule.name,n.basePageUrl+"group/onsales.html?trpe=3#/onsaledetail?ruleId="+n.ruleId,n.product.smallPicture,"快来参加"+n.commom.newname+"区的优惠商品抢购吧",a.a)):alert(null==n.res.message?"获取产品信息失败！":n.res.message)})},collocations:function(){var t="collocation/3/"+n.ruleId;n.receiveData.getData(n,t,"res",function(){n.res.success&&null!=n.res.result&&(n.collocation=n.res.result,n.collproducts=n.res.result.products)})},updateLeftTime:function(){if(n.rule.leftSeconds>0){n.finished=!1,n.rule.leftSeconds=n.rule.leftSeconds-1;var t=n.rule.leftSeconds,e=parseInt(t/86400);n.left.days=e<10?"0"+e:e,t%=86400;var i=parseInt(t/3600);n.left.hours=i<10?"0"+i:i,t%=3600;var s=parseInt(t/60);n.left.minitus=s<10?"0"+s:s,t%=60,n.left.seconds=t<10?"0"+t:t}else n.finished=!0},toggleDetail:function(){n.showDetail=!n.showDetail},gotoCollocation:function(){n.$router.push({path:"/collocation",query:{collId:n.collocation.id,ruleId:n.ruleId}})},gotoDetail:function(t){n.$router.push({path:"/onsaledetail",query:{ruleId:t}}),location.reload()},goclassify:function(){n.$router.push({path:"/onsalesitem",query:{type:n.rule.productType,flush:1}})},buy:function(){n.rule.id&&(location.href=n.basePageUrlpay+"hxgrouppay.html?state=123/#/buy?type=3&ruleId="+n.rule.id)}},components:{swiper:l.swiper,swiperSlide:l.swiperSlide},computed:{}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controller"},[i("div",[t.product.pictureList.length>0?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.product.pictureList,function(t,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"ban1"},[i("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),t._v(" "),i("div",{staticClass:"product-info p15"},[i("div",{staticClass:"product-detail-name fs16"},[t._v(t._s(t.rule.name))]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"30px"}},[i("div",{staticClass:"highlight fs22 fl three_div"},[t._v("¥ "+t._s(t.rule.price)+" ")]),t._v(" "),i("div",{staticClass:"highlight fl fs14 three_div",staticStyle:{"padding-top":"8px"}},[t._v(t._s(t.rule.discount)+" ")]),t._v(" "),i("div",{staticClass:"ori-price2 three_div",staticStyle:{"padding-top":"8px"}},[t._v("运费  "),i("span",{staticClass:"highlight"},[t._v("¥"+t._s(t.rule.postageFee))])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"20px"}},[i("div",{staticClass:"ori-price2 fl three_div"},[t._v("市场价"),i("del",[t._v("¥ "+t._s(t.product.oriPrice))])]),t._v(" "),i("div",{staticClass:"ori-price2 fl three_div"},[t._v("库存"),i("span",{staticClass:"highlight"},[t._v(t._s(t.product.canSaleNum))]),t._v("份")]),t._v(" "),t.rule.freeShippingNum<999?i("div",{staticClass:"ori-price2 three_div"},[i("span",{staticClass:"highlight"},[t._v(t._s(t.rule.freeShippingNum))]),t._v("件包邮")]):t._e()]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"1px"}},[t._v(" ")])]),t._v(" "),6==t.rule.productType?i("div",[t.finished?t._e():i("div",{staticClass:"mt2 time-wrap bb3"},[i("span",{staticClass:"time-text"},[t._v("剩余")]),t._v(" "),"00"!=t.left.days?i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.days))]),t._v("天")]):t._e(),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.hours))]),i("span",[t._v("时")]),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.minitus))]),i("span",[t._v("分")]),t._v(" "),i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.seconds))]),t._v("秒")]),t._v(" "),i("span",{staticClass:"time-text"},[t._v("结束")])]),t._v(" "),t.finished?i("div",{staticClass:"mt2 time-wrap bb3  fs18"},[t._v("\n                已结束\n            ")]):t._e()]):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:void 0!=t.collocation.id||null!=t.collocation.id,expression:"collocation.id!=undefined||collocation.id!=null"}],staticClass:"p15 bb3 fs18 coll"},[i("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"},on:{click:function(e){t.gotoCollocation()}}},[t._v("\n            优惠搭配"),i("span",{staticClass:"collocation_desc"},[t._v(t._s(t.collocation.title))]),t._v(" "),i("i",{staticClass:"icon menu-link align-right fr",staticStyle:{"margin-top":"-3px"}}),t._v(" "),i("span",{staticClass:"fr"},[t._v("点击这里")])]),t._v(" "),i("div",[t.collproducts.length>0?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption1}},t._l(t.collproducts,function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"ban2",on:{click:function(i){t.gotoDetail(e.salePlanId)}}},[i("img",{attrs:{src:e.productPic,alt:""}}),t._v(" "),i("div",{staticClass:"title"},[t._v("￥"+t._s(e.price)+"元")])])])}),1):t._e()],1)]),t._v(" "),i("div",{staticClass:"p15 mb15"},[i("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"},on:{click:t.toggleDetail}},[t._v("\n                商品详情\n                "),i("i",{staticClass:"icon more-icon align-right fr",class:{topIcon:t.showDetail}})]),t._v(" "),i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.product.serviceDesc)}})]),t._v(" "),t.showDetail?i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.product.serviceDescMore)}})]):t._e()]),t._v(" "),i("div",{staticClass:"activityTitleLine",staticStyle:{"margin-bottom":"85px",display:"block"}},[i("span",{staticClass:"more_btn",on:{click:function(e){t.goclassify()}}},[t._v("点击查看更多商品")])]),t._v(" "),i("div",{staticClass:"btn-home-fixed",staticStyle:{color:"white",position:"fixed","z-index":"10000",width:"100%",bottom:"0px"}},[i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"36%","background-color":"#444","text-align":"center","font-size":"15px"},on:{click:function(e){t.goclassify()}}},[t._v("\n                更多商品\n            ")]),t._v(" "),i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"64%","background-color":"#ff8a00","text-align":"center","font-size":"15px"},attrs:{"ms-class-useless":"rule.leftSeconds < 0"},on:{click:t.buy}},[t._v("\n                立即购买\n            ")])])])},staticRenderFns:[]};var r=i("VU/8")(o,c,!1,function(t){i("OAMw"),i("xWvd")},"data-v-6153156c",null);e.default=r.exports},OAMw:function(t,e){},xWvd:function(t,e){}});