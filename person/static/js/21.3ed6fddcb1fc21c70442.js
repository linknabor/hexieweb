webpackJsonp([21],{XqtS:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,r={data:function(){return{code:"",Operator:[]}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},methods:{query:function(){a.receiveData.getData(a,"/evoucher/getByOperator","res",function(){a.res.success&&(a.Operator=a.res.result)})},search:function(){""!=a.code&&17==a.code.length?a.$router.push({path:"/cardrollgoods",query:{code:a.code}}):alert("劵码错误")},tapToSearch:function(){""!=a.code&&17==a.code.length?a.$router.push({path:"/cardrollgoods",query:{code:a.code}}):alert("劵码错误")}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"records"},[o("div",[o("div",{staticClass:"search"},[o("form",{attrs:{action:"javascript:void 0"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",pattern:"[0-9]*",oninput:"this.value=this.value.replace(/\\D/g,'');",placeholder:"请输入核销劵码"},domProps:{value:e.code},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.tapToSearch(t):null},input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),o("em",{staticClass:"iconfont icon-sousuo",on:{click:function(t){e.search()}}})])]),e._v(" "),e._l(e.Operator,function(t){return o("div",{key:t.orderId},[o("div",{staticClass:"ov right-text"},[o("div",{staticClass:"title"},[e._v(e._s(t.productName))]),e._v(" "),o("div",{staticClass:"mar-top ov"},[o("span",{staticClass:"fl"},[e._v("数量:"+e._s(t.counts))]),o("span",{staticClass:"fr money"},[e._v("¥"+e._s(t.acturalPrice))])]),e._v(" "),o("div",{staticClass:"mar-top"},[e._v(e._s("下单手机号:"+t.tel.slice(0,3)+"××××××××"))]),e._v(" "),o("div",{staticClass:"mar-top"},[e._v(e._s("核销时间："+t.consumeDate))])])])})],2)])},staticRenderFns:[]};var c=o("VU/8")(r,s,!1,function(e){o("ayTF")},"data-v-6464167e",null);t.default=c.exports},ayTF:function(e,t){}});