webpackJsonp([1],{PXCl:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"VERSION",function(){return n}),i.d(e,"atob",function(){return h}),i.d(e,"btoa",function(){return l}),i.d(e,"fromBase64",function(){return _}),i.d(e,"toBase64",function(){return d}),i.d(e,"utob",function(){return u}),i.d(e,"encode",function(){return d}),i.d(e,"encodeURI",function(){return p}),i.d(e,"encodeURL",function(){return p}),i.d(e,"btou",function(){return f}),i.d(e,"decode",function(){return _}),i.d(e,"fromUint8Array",function(){return c}),i.d(e,"toUint8Array",function(){return m}),i.d(e,"extendString",function(){return b}),i.d(e,"extendUint8Array",function(){return x}),i.d(e,"extendBuiltins",function(){return C}),i.d(e,"Base64",function(){return w});const n="3.3.1",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=(t=>{let e={},i=0;for(const t of"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")e[t]=i++;return e})(),a=String.fromCharCode,o=t=>t.replace(/[+\/]/g,t=>"+"==t?"-":"_").replace(/=/g,""),c=(t,e=!1)=>{let i="";for(let e=0,n=t.length;e<n;e+=3){const n=t[e],r=t[e+1],a=t[e+2],o=n<<16|r<<8|a;i+=s.charAt(o>>>18)+s.charAt(o>>>12&63)+(void 0!==r?s.charAt(o>>>6&63):"=")+(void 0!==a?s.charAt(63&o):"=")}return e?o(i):i},l="function"==typeof btoa?t=>btoa(t):t=>{if(t.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return c(Uint8Array.from(t,t=>t.charCodeAt(0)))},u=t=>unescape(encodeURIComponent(t)),d=(t,e=!1)=>{const i=l(u(t));return e?o(i):i},p=t=>d(t,!0),f=t=>decodeURIComponent(escape(t)),v=t=>{let e=t.length,i=e%4,n=(e>0?r[t.charAt(0)]<<18:0)|(e>1?r[t.charAt(1)]<<12:0)|(e>2?r[t.charAt(2)]<<6:0)|(e>3?r[t.charAt(3)]:0),s=[a(n>>>16),a(n>>>8&255),a(255&n)];return s.length-=[0,0,2,1][i],s.join("")},h="function"==typeof atob?t=>atob(t):t=>String(t).replace(/[^A-Za-z0-9\+\/]/g,"").replace(/\S{1,4}/g,v),g=t=>t.replace(/[-_]/g,t=>"-"==t?"+":"/").replace(/[^A-Za-z0-9\+\/]/g,""),_=t=>(t=>f(h(t)))(g(t)),m=t=>Uint8Array.from(h(g(t)),t=>t.charCodeAt(0)),y=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),b=function(){const t=(t,e)=>Object.defineProperty(String.prototype,t,y(e));t("fromBase64",function(){return _(this)}),t("toBase64",function(t){return d(this,t)}),t("toBase64URI",function(){return d(this,!0)}),t("toBase64URL",function(){return d(this,!0)}),t("toUint8Array",function(){return m(this)})},x=function(){const t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,y(e));t("toBase64",function(t){return c(this,t)}),t("toBase64URI",function(){return c(this,!0)}),t("toBase64URL",function(){return c(this,!0)})},C=()=>{b(),x()},w={VERSION:n,atob:h,btoa:l,fromBase64:_,toBase64:d,encode:d,encodeURI:p,encodeURL:p,utob:u,btou:f,decode:_,fromUint8Array:c,toUint8Array:m,extendString:b,extendUint8Array:x,extendBuiltins:C}},cBco:function(t,e){},e4EE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("fxnj"),s=i.n(n),r=i("7QTg"),a=void 0,o=i("PXCl").Base64,c={data:function(){return{finished:!1,showDetail:!1,left:{days:"0",hours:"0",minitus:"0",seconds:"0"},product:{pictureList:[]},rule:{currentNum:0},serviceDesc1:"",serviceDescMore1:"",ruleId:this.$route.query.ruleId,swiperOption:{notNextTick:!0,autoplay:{disableOnInteraction:!1,delay:6e3},loop:!0,pagination:{el:".swiper-pagination"}}}},created:function(){(a=this).query()},mounted:function(){var t=location.href.split("#")[0];a.receiveData.wxconfig(a,s.a,["onMenuShareTimeline","onMenuShareAppMessage"],t)},updated:function(){},methods:{query:function(){var t="getOnSaleRule/"+a.ruleId;a.receiveData.getData(a,t,"Data",function(){a.Data.success?a.Data.result&&(a.rule=a.Data.result,a.productss(a.rule.productId),setInterval(a.updateLeftTime,1e3)):alert(null==a.Data.message?"获取产品信息失败！":a.Data.message)})},productss:function(t){var e="getProduct/"+t;a.receiveData.getData(a,e,"res",function(){a.res.success?(a.product=a.res.result,a.serviceDesc1=o.decode(a.product.serviceDesc),a.serviceDescMore1=o.decode(a.product.serviceDescMore),a.common.initShareConfig(a.rule.name,a.basePageUrl+"group/onsales.html?"+a.common.getoriApp()+"#/onsaledetail?ruleId="+a.ruleId,a.product.smallPicture,"快来参加"+a.common.newname+"的优惠商品抢购吧",s.a)):alert(null==a.res.message?"获取产品信息失败！":a.res.message)})},updateLeftTime:function(){if(a.rule.leftSeconds>0){a.finished=!1,a.rule.leftSeconds=a.rule.leftSeconds-1;var t=a.rule.leftSeconds,e=parseInt(t/86400);a.left.days=e<10?"0"+e:e,t%=86400;var i=parseInt(t/3600);a.left.hours=i<10?"0"+i:i,t%=3600;var n=parseInt(t/60);a.left.minitus=n<10?"0"+n:n,t%=60,a.left.seconds=t<10?"0"+t:t}else a.finished=!0},toggleDetail:function(){a.showDetail=!a.showDetail},goclassify:function(){a.$router.push({path:"/cardrollindex",query:{flush:1}})},buy:function(){a.ruleId&&(location.href=a.basePageUrlpay+"hxgrouppay.html?"+a.common.getoriApp()+"#/cardrollbuy?type=12&ruleId="+a.ruleId)}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide},computed:{}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controller"},[i("div",[t.product.pictureList.length>0?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.product.pictureList,function(t,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"ban1"},[i("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),t._v(" "),i("div",{staticClass:"product-info p15"},[i("div",{staticClass:"product-detail-name fs16"},[t._v(t._s(t.rule.name))]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"30px"}},[i("div",{staticClass:"highlight fs22 fl three_div"},[t._v("¥ "+t._s(t.rule.price)+" ")]),t._v(" "),i("div",{staticClass:"ori-posi"},[i("div",{staticClass:" highlight fl fs20 three_div"},[t._v(t._s(t.rule.discount)+" ")]),t._v(" "),i("div",{staticClass:" fs20 ori-price2 fl  three_div"},[t._v("库存"),i("span",{staticClass:"highlight"},[t._v(t._s(t.product.canSaleNum))]),t._v("份")])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"20px"}},[i("div",{staticClass:"ori-price2 fl three_div ori-padd"},[t._v("市场价"),i("del",[t._v("¥ "+t._s(t.product.oriPrice))])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"1px"}},[t._v(" ")])]),t._v(" "),6==t.rule.productType?i("div",[t.finished?t._e():i("div",{staticClass:"mt2 time-wrap bb3"},[i("span",{staticClass:"time-text"},[t._v("剩余")]),t._v(" "),"00"!=t.left.days?i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.days))]),t._v("天")]):t._e(),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.hours))]),i("span",[t._v("时")]),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.minitus))]),i("span",[t._v("分")]),t._v(" "),i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.seconds))]),t._v("秒")]),t._v(" "),i("span",{staticClass:"time-text"},[t._v("结束")])]),t._v(" "),t.finished?i("div",{staticClass:"mt2 time-wrap bb3  fs18"},[t._v("\n                已结束\n            ")]):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"p15 mb15"},[i("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"},on:{click:t.toggleDetail}},[t._v("\n                商品详情\n                "),i("i",{staticClass:"icon more-icon align-right fr",class:{topIcon:t.showDetail}})]),t._v(" "),i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.serviceDesc1)}})]),t._v(" "),t.showDetail?i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.serviceDescMore1)}})]):t._e()]),t._v(" "),i("div",{staticClass:"activityTitleLine",staticStyle:{"margin-bottom":"85px",display:"block"}},[i("span",{staticClass:"more_btn",on:{click:function(e){t.goclassify()}}},[t._v("点击查看更多商品")])]),t._v(" "),i("div",{staticClass:"btn-home-fixed",staticStyle:{color:"white",position:"fixed","z-index":"10000",width:"100%",bottom:"0px"}},[i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"36%","background-color":"#444","text-align":"center","font-size":"15px"},on:{click:function(e){t.goclassify()}}},[t._v("\n                更多优惠\n            ")]),t._v(" "),i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"64%","background-color":"#ff8a00","text-align":"center","font-size":"15px"},attrs:{"ms-class-useless":"rule.leftSeconds < 0"},on:{click:t.buy}},[t._v("\n                立即购买\n            ")])])])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("xT7D"),i("cBco")},"data-v-3c695914",null);e.default=u.exports},xT7D:function(t,e){}});