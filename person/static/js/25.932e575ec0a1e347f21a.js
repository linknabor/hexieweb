webpackJsonp([25],{XqtS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=void 0,a={data:function(){return{code:"",Operator:[],andios:"",faly:!0,type:this.$route.query.type,evoucherOperator:this.$route.query.evoucherOperator}},created:function(){s=this},components:{},computed:{},mounted:function(){s.query()},methods:{query:function(){s.receiveData.getData(s,"/evoucher/getByOperator","res",function(){s.res.success?s.Operator=s.res.result:alert(s.res.message)})},bycode:function(){if(s.faly){s.faly=!1;var e="/evoucher/getByCode/"+s.code;s.receiveData.getData(s,e,"res",function(){s.res.success?null==s.res.result.code?alert("核销失败！该券码不存在"):2==s.res.result.status?alert("核销失败：券码已核销"):3==s.res.result.status?alert("核销失败：券码已过期"):4==s.res.result.status?alert("核销失败：券码已退款"):s.$router.push({path:"/cardrollgoods",query:{code:s.code}}):alert(null==s.res.message?"核销失败！该券码不存在":s.res.message),s.faly=!0})}},search:function(){""!=s.code&&s.bycode()},tapToSearch:function(){""!=s.code&&s.bycode()},goorder:function(e){1==e?s.$router.push({path:"/specialorders",query:{evoucherOperator:s.evoucherOperator,type:e}}):2==e?s.$router.push({path:"/cardrollrecords",query:{evoucherOperator:s.evoucherOperator,type:e}}):s.$router.push({path:"/grouporders",query:{evoucherOperator:s.evoucherOperator,type:e}})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"records"},[r("div",{staticClass:"header ov",class:{"header-width":"true"==e.evoucherOperator}},[r("div",{staticClass:"fl",class:{white:1==e.type},on:{click:function(t){e.goorder(1)}}},[r("span",{class:{spanborder:1==e.type}},[e._v("电商订单")])]),e._v(" "),r("div",{staticClass:"fl writeshow ",class:{white:2==e.type,writeoff:"true"==e.evoucherOperator},on:{click:function(t){e.goorder(2)}}},[r("span",{class:{spanborder:2==e.type}},[e._v("核销记录")])]),e._v(" "),r("div",{staticClass:"fl",class:{white:3==e.type},on:{click:function(t){e.goorder(3)}}},[r("span",{class:{spanborder:3==e.type}},[e._v("团购订单")])])]),e._v(" "),r("div",[r("div",{staticClass:"search"},[r("form",{staticClass:"fl",attrs:{action:"javascript:javascript:viod 0"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",pattern:"[0-9]*",oninput:"this.value=this.value.replace(/\\D/g,'');",placeholder:"请输入核销劵码"},domProps:{value:e.code},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.tapToSearch(t):null},input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),r("em",{staticClass:"iconfont icon-sousuo"})]),e._v(" "),r("div",{staticClass:"fr search-sub",class:{scolor:""!=e.code},on:{click:function(t){return t.stopPropagation(),e.search(t)}}},[e._v("核销")])]),e._v(" "),e._l(e.Operator,function(t){return r("div",{key:t.orderId},[r("div",{staticClass:"ov right-text"},[r("div",{staticClass:"title"},[e._v(e._s(t.productName))]),e._v(" "),r("div",{staticClass:"mar-top ov"},[r("span",{staticClass:"fl"},[e._v("数量:"+e._s(t.counts))]),r("span",{staticClass:"fr money"},[e._v("¥"+e._s(t.acturalPrice))])]),e._v(" "),r("div",{staticClass:"mar-top"},[e._v(e._s("下单手机号:"+t.tel))]),e._v(" "),r("div",{staticClass:"mar-top"},[e._v(e._s("核销时间："+t.consumeDate))])])])})],2)])},staticRenderFns:[]};var c=r("VU/8")(a,o,!1,function(e){r("wrB8")},"data-v-53d55afa",null);t.default=c.exports},wrB8:function(e,t){}});