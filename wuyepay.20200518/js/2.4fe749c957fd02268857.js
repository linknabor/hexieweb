webpackJsonp([2],{"89h7":function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".addbk[data-v-0ceb790c]{position:absolute;width:100%;height:100%;background:#e6eaeb;font-family:Arial,\\\\5FAE\\8F6F\\96C5\\9ED1,\\\\5B8B\\4F53,sans-serif}.alert-circle[data-v-0ceb790c]{position:absolute;top:30%;left:50%;-webkit-transform:translate(-50%,-30%);transform:translate(-50%,-30%)}.alert-sec-circle[data-v-0ceb790c]{stroke-dashoffset:0;stroke-dasharray:735;-webkit-transition:stroke-dashoffset 1s linear;transition:stroke-dashoffset 1s linear}.alert-sec-text[data-v-0ceb790c]{position:absolute;top:37%;left:50%;-webkit-transform:translate(-50%,-37%);transform:translate(-50%,-37%);text-align:center;width:76px;color:#000;font-size:68px}.alert-sec-unit[data-v-0ceb790c]{font-size:34px}",""])},US0Y:function(t,e,r){"use strict";var a=void 0;e.a={data:function(){return{time:5,flay:0,tradeWaterId:this.$route.query.tradeWaterId}},created:function(){a=this},mounted:function(){a.alertSet()},watch:{time:function(t,e){}},components:{},methods:{alertSet:function(){a.query(),document.getElementById("js-alert-box").style.display="block";var t=document.getElementById("js-sec-circle"),e=setInterval(function(){if(0==a.time)return 1==a.flay&&a.hrefp(),2==a.flay&&(alert("交易失败"),a.hrefind()),void(0==a.flay&&(alert("交易处理中"),a.hrefind()));a.time--;var e=Math.round(a.time/5*735);t.style.strokeDashoffset=e-735},970);setTimeout(function(){clearInterval(e)},6e3)},query:function(){if(a.tradeWaterId){var t=decodeURI(a.tradeWaterId),e=t.indexOf("?"),r=t.substring(0,e),s="/queryOrder/"+r;a.receiveData.getData(a,s,"res",function(){a.res.success?a.flay=1:a.flay=2})}},hrefind:function(){var t=a.common.getoriApp();window.location.href=a.basePageUrl+"wuye/index.html?"+t+"#/"},hrefp:function(){var t=a.common.getoriApp();window.location.href=a.basePageUrl+"wuye/index.html?"+t+"#/paymentquery"}},computed:{}}},fN3J:function(t,e,r){"use strict";function a(t){r("r67G")}Object.defineProperty(e,"__esModule",{value:!0});var s=r("US0Y"),i=r("fTMz"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-0ceb790c",null);e.default=c.exports},fTMz:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addbk"},[r("div",{attrs:{id:"js-alert-box"}},[r("svg",{staticClass:"alert-circle",attrs:{width:"234",height:"234"}},[r("circle",{attrs:{cx:"117",cy:"117",r:"108",fill:"#FFF",stroke:"#43AEFA","stroke-width":"17"}}),t._v(" "),r("circle",{staticClass:"alert-sec-circle",attrs:{id:"js-sec-circle",cx:"117",cy:"117",r:"108",fill:"transparent",stroke:"#F4F1F1","stroke-width":"18",transform:"rotate(-90 117 117)"}})]),t._v(" "),r("div",{staticClass:"alert-sec-text",attrs:{id:"js-sec-text"}},[t._v(t._s(t.time))])])])},s=[],i={render:a,staticRenderFns:s};e.a=i},r67G:function(t,e,r){var a=r("89h7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("8505935a",a,!0)}});