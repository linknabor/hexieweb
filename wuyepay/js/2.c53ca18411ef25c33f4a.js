webpackJsonp([2],{"5GD1":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".blank[data-v-d054b1ea]{background:#fff;position:absolute;width:3rem;height:3rem;line-height:3rem;text-align:center;border-radius:3px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},"7acJ":function(e,t,n){var a=n("5GD1");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("abbf00fc",a,!0)},US0Y:function(e,t,n){"use strict";var a=void 0;t.a={data:function(){return{tiem:5,flay:0}},created:function(){a=this},mounted:function(){a.countDown()},watch:{tiem:function(e,t){0==e&&1==a.flay&&a.hrefp(),0==e&&2==a.flay&&(alert("交易失败"),a.hrefind()),0==e&&0==a.flay&&(alert("交易处理中"),a.hrefind())}},components:{},methods:{countDown:function(){a.query();var e=setInterval(function(){a.tiem--},1e3);setTimeout(function(){clearInterval(e)},5e3)},query:function(){a.receiveData.getData(a,"/getCouponsPayWuYe?payType=1","res",function(){a.res.success?a.flay=1:a.flay=2})},hrefind:function(){var e=a.common.getoriApp();window.location.href=a.basePageUrl+"wuye/index.html?"+e+"#/"},hrefp:function(){var e=a.common.getoriApp();window.location.href=a.basePageUrl+"wuye/index.html?"+e+"#/paymentquery"}},computed:{}}},fN3J:function(e,t,n){"use strict";function a(e){n("7acJ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("US0Y"),o=n("vOLo"),i=n("VU/8"),c=a,f=i(r.a,o.a,!1,c,"data-v-d054b1ea",null);t.default=f.exports},vOLo:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"blank"},[e._v("\n  "+e._s(e.tiem)+"秒后页面跳转\n")])},r=[],o={render:a,staticRenderFns:r};t.a=o}});