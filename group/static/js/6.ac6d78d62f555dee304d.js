webpackJsonp([6],{MCa2:function(t,e){},e4EE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("fxnj"),a=i.n(s),r=i("7QTg"),l=void 0,c=i("PXCl").Base64,o={data:function(){return{finished:!1,showDetail:!1,product:{pictureList:[]},rule:{currentNum:0},serviceDesc1:"",serviceDescMore1:"",ruleId:this.$route.query.ruleId,swiperOption:{notNextTick:!0,autoplay:{disableOnInteraction:!1,delay:6e3},loop:!0,pagination:{el:".swiper-pagination"}}}},created:function(){(l=this).query()},mounted:function(){var t=location.href.split("#")[0];l.receiveData.wxconfig(l,a.a,["onMenuShareTimeline","onMenuShareAppMessage"],t)},updated:function(){},methods:{query:function(){var t="getOnSaleRule/"+l.ruleId;l.receiveData.getData(l,t,"Data",function(){l.Data.success?l.Data.result&&(l.rule=l.Data.result,l.productss(l.rule.productId)):alert(null==l.Data.message?"获取产品信息失败！":l.Data.message)})},productss:function(t){var e="getProduct/"+t;l.receiveData.getData(l,e,"res",function(){l.res.success?(l.product=l.res.result,l.serviceDesc1=c.decode(l.product.serviceDesc),l.serviceDescMore1=c.decode(l.product.serviceDescMore),l.common.initShareConfig(l.rule.name,l.basePageUrl+"group/onsales.html?"+l.common.getoriApp()+"#/onsaledetail?ruleId="+l.ruleId,l.product.smallPicture,"快来参加"+l.common.newname+"的优惠商品抢购吧",a.a)):alert(null==l.res.message?"获取产品信息失败！":l.res.message)})},toggleDetail:function(){l.showDetail=!l.showDetail},goclassify:function(){l.$router.push({path:"/cardrollindex",query:{flush:1}})},buy:function(){l.ruleId&&(location.href=l.basePageUrlpay+"hxgrouppay.html?"+l.common.getoriApp()+"#/cardrollbuy?type=12&ruleId="+l.ruleId)}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide},computed:{}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controller"},[i("div",[t.product.pictureList.length>0?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.product.pictureList,function(t,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"ban1"},[i("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),t._v(" "),i("div",{staticClass:"product-info p15"},[i("div",{staticClass:"product-detail-name fs16"},[t._v(t._s(t.rule.name))]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"30px","line-height":"30px"}},[i("div",{staticClass:"highlight fs22 fl three_div"},[t._v("¥ "+t._s(t.rule.price)+" ")]),t._v(" "),i("div",{staticClass:"ori-posi"},[i("div",{staticClass:" highlight fl fs20 three_div"},[t._v(t._s(t.rule.discount)+" ")]),t._v(" "),i("div",{staticClass:" fs20 ori-price2 fl  three_div"},[t._v("库存"),i("span",{staticClass:"highlight"},[t._v(t._s(t.product.canSaleNum))]),t._v("份")])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"20px"}},[i("div",{staticClass:"ori-price2 fl three_div ori-padd"},[t._v("市场价"),i("del",[t._v("¥ "+t._s(t.product.oriPrice))])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"1px"}},[t._v(" ")])]),t._v(" "),i("div",{staticClass:"p15 mb15"},[i("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"},on:{click:t.toggleDetail}},[t._v("\n                商品详情\n                "),i("i",{staticClass:"icon more-icon align-right fr",class:{topIcon:t.showDetail}})]),t._v(" "),i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.serviceDesc1)}})]),t._v(" "),t.showDetail?i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.serviceDescMore1)}})]):t._e()]),t._v(" "),i("div",{staticClass:"activityTitleLine",staticStyle:{"margin-bottom":"85px",display:"block"}},[i("span",{staticClass:"more_btn",on:{click:function(e){t.goclassify()}}},[t._v("点击查看更多商品")])]),t._v(" "),i("div",{staticClass:"btn-home-fixed",staticStyle:{color:"white",position:"fixed","z-index":"10000",width:"100%",bottom:"0px"}},[i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"36%","background-color":"#444","text-align":"center","font-size":"15px"},on:{click:function(e){t.goclassify()}}},[t._v("\n                更多优惠\n            ")]),t._v(" "),i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"64%","background-color":"#ff8a00","text-align":"center","font-size":"15px"},attrs:{"ms-class-useless":"rule.leftSeconds < 0"},on:{click:t.buy}},[t._v("\n                立即购买\n            ")])])])},staticRenderFns:[]};var d=i("VU/8")(o,n,!1,function(t){i("x2LF"),i("MCa2")},"data-v-3ba42abd",null);e.default=d.exports},x2LF:function(t,e){}});