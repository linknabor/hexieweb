webpackJsonp([21],{"2mFR":function(e,t){},XqtS:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,s={data:function(){return{code:"",Operator:[],andios:""}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query(),a.Compatibility()},methods:{query:function(){a.receiveData.getData(a,"/evoucher/getByOperator","res",function(){a.res.success&&(a.Operator=a.res.result)})},bycode:function(){var e="/evoucher/getByCode/"+a.code;a.receiveData.getData(a,e,"res",function(){a.res.success?null==a.res.result.qrcode?alert("劵码错误"):a.$router.push({path:"/cardrollgoods",query:{code:a.code}}):alert(a.res.message)})},search:function(){""!=a.code&&17==a.code.length&&a.bycode()},tapToSearch:function(e){""!=a.code&&17==a.code.length&&a.bycode()},blursearch:function(){"ios"==a.andios&&""!=a.code&&17==a.code.length&&a.bycode()},Compatibility:function(){var e=navigator.userAgent;navigator.appVersion;!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(a.andios="ios")}}},r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"records"},[o("div",[o("div",{staticClass:"search"},[o("form",{attrs:{action:"javascript:void 0"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",pattern:"[0-9]*",oninput:"this.value=this.value.replace(/\\D/g,'');",placeholder:"请输入核销劵码"},domProps:{value:e.code},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.tapToSearch(t):null},blur:e.blursearch,input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),o("em",{staticClass:"iconfont icon-sousuo",on:{click:function(t){e.search()}}})])]),e._v(" "),e._l(e.Operator,function(t){return o("div",{key:t.orderId},[o("div",{staticClass:"ov right-text"},[o("div",{staticClass:"title"},[e._v(e._s(t.productName))]),e._v(" "),o("div",{staticClass:"mar-top ov"},[o("span",{staticClass:"fl"},[e._v("数量:"+e._s(t.counts))]),o("span",{staticClass:"fr money"},[e._v("¥"+e._s(t.acturalPrice))])]),e._v(" "),o("div",{staticClass:"mar-top"},[e._v(e._s("下单手机号:"+t.tel))]),e._v(" "),o("div",{staticClass:"mar-top"},[e._v(e._s("核销时间："+t.consumeDate))])])])})],2)])},staticRenderFns:[]};var c=o("VU/8")(s,r,!1,function(e){o("2mFR")},"data-v-60393250",null);t.default=c.exports}});