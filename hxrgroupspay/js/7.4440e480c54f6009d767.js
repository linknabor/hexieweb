webpackJsonp([7],{L0VC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("fxnj"),r=i.n(s),a=void 0,n={data:function(){return{ruleId:this.$route.query.ruleId,share_page:this.$route.query.share,finished:!0,showDetail:!1,left:{days:"0",hours:"0",minitus:"0",seconds:"0"},product:{pictureList:[]},rule:{currentNum:0},swiperOption:{notNextTick:!0,autoplay:{disableOnInteraction:!1,delay:6e3},pagination:{el:".swiper-pagination"},loop:!0}}},created:function(){a=this},mounted:function(){var t=location.href.split("#")[0];a.receiveData.wxconfig(a,r.a,["onMenuShareTimeline","onMenuShareAppMessage"],t),a.query()},components:{},methods:{query:function(){var t="getRgroupRule/"+a.ruleId;a.receiveData.getData(a,t,"Data",function(){a.Data.success?a.Data.result&&(a.rule=a.Data.result,a.products(a.rule.productId),setInterval(a.updateLeftTime,1e3)):alert(null==a.Data.message?"获取团购信息失败！":a.Data.message)})},products:function(t){var e="getProduct/"+t;a.receiveData.getData(a,e,"res",function(){a.res.success?a.res.result&&(a.product=a.res.result,a.initShareSetting(a.product)):alert(null==a.res.message?"获取产品信息失败！":a.res.message)})},initShareSetting:function(t){var e=a.rule.name,i=a.basePageUrlpay+"hxrgroups.html?"+a.common.getoriApp()+"#/rgroupinvite?ruleId="+a.ruleId,s=t.smallPicture,n="我在"+a.common.newname+"参与了一个"+a.rule.name+"的团购，大家一起来参与吧";a.common.initShareConfig(e,i,s,n,r.a)},updateLeftTime:function(){if(a.rule.leftSeconds>0){a.finished=!1,a.rule.leftSeconds=a.rule.leftSeconds-1;var t=a.rule.leftSeconds,e=parseInt(t/86400);a.left.days=e<10?"0"+e:e,t%=86400;var i=parseInt(t/3600);a.left.hours=i<10?"0"+i:i,t%=3600;var s=parseInt(t/60);a.left.minitus=s<10?"0"+s:s,t%=60,a.left.seconds=t<10?"0"+t:t}else a.finished=!0},gotosgrouprulr:function(){a.$router.push({path:"/sgrouprule"})},golist:function(){location.href=a.basePageUrlpay+"hxrgroups.html?"+a.common.getoriApp()+"&type="+a.rule.productType},goGroupProduct:function(){a.$router.push({path:"/rgroupdetail",query:{ruleId:a.ruleId}})}},computed:{}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"invite"},[s("div",{staticStyle:{"background-color":"#fff"}},[s("div",{staticStyle:{width:"100%"},on:{click:t.gotosgrouprulr}},[s("img",{staticStyle:{width:"100%"},attrs:{alt:"",src:i("S8T/")}})]),t._v(" "),s("div",{staticClass:"rule_intro",staticStyle:{width:"100%"},on:{click:t.gotosgrouprulr}},[s("img",{staticStyle:{width:"100%"},attrs:{alt:"",src:i("S8T/")}})]),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),s("div",{staticClass:"mt2 bb3"},[t.rule.leftSeconds>=0?s("div",[s("div",{staticClass:"time-wrap"},[s("span",{staticClass:"time-text"},[t._v("剩余")]),t._v(" "),"00"!=t.left.days?s("span",[s("span",{staticClass:"time-number"},[t._v(t._s(t.left.days))]),t._v("天")]):t._e(),t._v(" "),s("span",{staticClass:"time-number"},[t._v(t._s(t.left.hours))]),s("span",[t._v("时")]),t._v(" "),s("span",{staticClass:"time-number"},[t._v(t._s(t.left.minitus))]),s("span",[t._v("分")]),t._v(" "),s("span",[s("span",{staticClass:"time-number"},[t._v(t._s(t.left.seconds))]),t._v("秒")]),t._v(" "),s("span",{staticClass:"time-text"},[t._v("结束")])]),t._v(" "),s("div",{staticClass:"mt1 fs15 mb25",staticStyle:{"text-align":"center"}},[t.rule.groupMinNum-t.rule.currentNum<=0?s("span",[t._v("\n                        成功啦，还没加入的小伙伴抓紧啦！马上要发货咯！\n                    ")]):t._e(),t._v(" "),t.rule.groupMinNum-t.rule.currentNum>0?s("span",[t._v("\n                        还差"),s("span",{staticClass:"highlight"},[t._v(t._s(t.rule.groupMinNum-t.rule.currentNum))]),t._v("份就可以成团发货啦\n                    ")]):t._e()])]):t._e(),t._v(" "),t.rule.leftSeconds<0?s("div",[s("div",{staticClass:"mt1 fs15 mb25",staticStyle:{"text-align":"center"}},[t.rule.groupMinNum-t.rule.currentNum<=0?s("span",[t._v("\n                        团购成功！错过的小伙伴可以逛逛其他商品\n                    ")]):t._e(),t._v(" "),t.rule.groupMinNum-t.rule.currentNum>0?s("span",[t._v("\n                        很遗憾，没达到目标人数哦，再去逛逛其他商品吧！\n                    ")]):t._e()])]):t._e()]),t._v(" "),s("div",[t.product.pictureList.length>0?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.product.pictureList,function(t,e){return s("swiper-slide",{key:e},[s("div",{staticClass:"ban1"},[s("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),t._v(" "),s("div",{staticClass:"product-info p15"},[s("div",{staticClass:"product-detail-name fs16"},[t._v(t._s(t.rule.name))]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"30px"}},[s("div",{staticClass:"highlight fs22 fl three_div"},[t._v("¥ "+t._s(t.rule.price)+" ")]),t._v(" "),s("div",{staticClass:"highlight fl fs14 three_div",staticStyle:{"padding-top":"8px"}},[t._v(t._s(t.rule.discount)+" ")]),t._v(" "),s("div",{staticClass:"ori-price2 three_div",staticStyle:{"padding-top":"8px"}},[t._v("运费  "),s("span",{staticClass:"highlight"},[t._v("¥"+t._s(t.rule.postageFee))])])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"20px"}},[s("div",{staticClass:"ori-price2 fl three_div"},[t._v("市场价"),s("del",[t._v("¥ "+t._s(t.product.oriPrice))])]),t._v(" "),s("div",{staticClass:"ori-price2 fl three_div"},[t._v("目标份数"),s("span",{staticClass:"highlight"},[t._v(t._s(t.rule.groupMinNum))]),t._v("份")]),t._v(" "),t.rule.freeShippingNum<999?s("div",{staticClass:"ori-price2 three_div"},[s("span",{staticClass:"highlight"},[t._v(t._s(t.rule.freeShippingNum))]),t._v("件包邮")]):t._e()]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"1px"}},[t._v(" ")])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"80px"}},[t._v(" ")]),t._v(" "),"1"!=t.share_page?s("div",{staticClass:"btn-fixed"},[s("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",color:"#fff",width:"36%","background-color":"#444","text-align":"center","font-size":"20px"},on:{click:function(e){t.golist()}}},[t._v("\n                更多团购\n            ")]),t._v(" "),s("span",{staticClass:"fl",class:{useless:t.rule.leftSeconds<0},staticStyle:{height:"40px","line-height":"40px",color:"#fff",width:"64%","background-color":"#ff8a00","text-align":"center","font-size":"20px"},on:{click:function(e){t.goGroupProduct()}}},[t._v("\n                马上参团\n            ")])]):t._e(),t._v(" "),"1"==t.share_page?s("div",[s("div",{staticStyle:{position:"fixed",bottom:"5px",left:"5px",right:"5px","text-align":"center","background-color":"#ff8600",height:"40px",color:"#ffffff","font-size":"16px","line-height":"40px","z-index":"10000"}},[t._v("\n                点击右上方分享，邀请好友一起参与\n            ")])]):t._e()])])},staticRenderFns:[]};var u=i("VU/8")(n,l,!1,function(t){i("ZlyY")},"data-v-52e8ef18",null);e.default=u.exports},ZlyY:function(t,e){}});