webpackJsonp([6],{Gk16:function(e,t){},ihjG:function(e,t){},j2xg:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("mvHQ"),a=s.n(r),i=s("fxnj"),c=s.n(i),o=(s("lbHh"),void 0),n=s("PXCl").Base64,u={data:function(){return{zzshow:!1,product:{pictureList:[]},rule:{currentNum:0},serviceDesc1:"",ruleId:this.$route.query.ruleId,productType:this.$route.query.productType,shareCode:this.$route.query.shareCode,orderid:""}},created:function(){(o=this).query(),o.queryorderid()},mounted:function(){var e=location.href.split("#")[0];o.receiveData.wxconfig(o,c.a,["onMenuShareTimeline","onMenuShareAppMessage"],e)},updated:function(){},methods:{query:function(){var e="getOnSaleRule/"+o.ruleId;o.receiveData.getData(o,e,"Data",function(){o.Data.success?o.Data.result&&(o.rule=o.Data.result,o.productss(o.rule.productId)):"40001"!=o.Data.errorCode&&alert(o.Data.message)})},productss:function(e){var t="getProduct/"+e;o.receiveData.getData(o,t,"res",function(){o.res.success?(o.product=o.res.result,o.serviceDesc1=n.decode(o.product.serviceDesc),o.initShareSetting()):alert(null==o.res.message?"获取产品信息失败！":o.res.message)})},initShareSetting:function(){var e=location.href,t=o.product.smallPicture;o.common.initShareConfig("招募社区合伙人",e,t,"加入社区合伙人，挑战副业月入过万",c.a)},queryorderid:function(){o.receiveData.getData(o,"/queryPromotionOrder?orderType=13","res",function(){o.res.success?o.orderid=o.res.result:null!=o.res.message&&alert(o.res.message)})},buy:function(){"0"!=o.orderid?o.PayV2():location.href=o.basePageUrlpay+"hxgrouppay.html?"+o.common.getoriApp()+"#/salespage?ruleId="+o.ruleId+"&productType="+o.productType+"&shareCode="+o.shareCode},PayV2:function(){o.zzshow=!0;var e={ruleId:o.ruleId,productType:o.productType,shareCode:o.shareCode};o.receiveData.postData(o,"/promotionPayV2",e,"res",function(){if(o.res.success){var e=o.res;c.a.config({debug:!1,appId:e.result.appId,timestamp:e.result.timestamp,nonceStr:e.result.nonceStr,signature:e.result.signature,jsApiList:["chooseWXPay"]}),c.a.chooseWXPay({appId:e.result.appId,timestamp:e.result.timestamp,nonceStr:e.result.nonceStr,package:e.result.pkgStr,signType:e.result.signType,paySign:e.result.signature,success:function(e){o.zzshow=!1,location.href=o.basePageUrlpay+"hxgrouppay.html?"+o.common.getoriApp()+"#/salessuccess"},fail:function(e){console.log(a()(e))},cancel:function(e){o.zzshow=!1,alert("支付取消")}})}else o.zzshow=!1,alert(o.res.message)})}},components:{},computed:{}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"controller"},[s("div",[s("div",{staticClass:"ban1"},[s("img",{attrs:{src:e.product.pictures,alt:""}})])]),e._v(" "),s("div",{staticClass:"product-info p15"},[s("div",{staticClass:"product-detail-name fs16"},[e._v(e._s(e.rule.name))]),e._v(" "),s("div",{staticStyle:{width:"100%",height:"30px","line-height":"30px"}},[s("div",{staticClass:"highlight fs22 fl three_div1"},[e._v("¥ "+e._s(e.rule.price)+" ")]),e._v(" "),s("div",{staticClass:"ori-posi"},[s("div",{staticClass:" fs20 ori-price2 fl  three_div2"},[e._v("市场价"),s("del",[e._v("¥ "+e._s(e.product.oriPrice))])]),e._v(" "),s("div",{staticClass:" highlight fs22 fl three_div3"},[e._v(e._s(e.rule.discount)+" ")])])]),e._v(" "),s("div",{staticStyle:{width:"100%",height:"1px"}},[e._v(" ")])]),e._v(" "),s("div",{staticClass:"p15 mb15"},[s("ul",{staticStyle:{"padding-top":"3px"}},[s("li",{staticClass:"detail-item",domProps:{innerHTML:e._s(e.serviceDesc1)}})])]),e._v(" "),s("div",{staticStyle:{height:"80px"}})]),e._v(" "),s("div",{staticClass:"btn-fixed"},[s("div",{staticClass:"fl btn-lt"},[s("span",{staticClass:"price fl"},[e._v("¥"+e._s(e.rule.price))]),e._v(" "),s("div",{staticClass:"fl btn-txt"},[s("span",{staticClass:"highlight tehui"},[e._v("限时特惠")]),e._v(" "),s("br"),e._v(" "),s("span",{staticClass:"dels shic"},[e._v("市场价: "),s("del",[e._v("¥ "+e._s(e.product.oriPrice))])])])]),e._v(" "),s("div",{staticClass:"fr btn-rg"},[s("span",{attrs:{"ms-class-useless":"rule.leftSeconds < 0"},on:{click:e.buy}},[e._v("\r\n                立即购买\r\n            ")])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.zzshow,expression:"zzshow"}],staticClass:"zzmb",attrs:{id:"zzmb"}})])},staticRenderFns:[]};var d=s("VU/8")(u,l,!1,function(e){s("ihjG"),s("Gk16")},"data-v-0ddc7773",null);t.default=d.exports}});