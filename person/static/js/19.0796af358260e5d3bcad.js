webpackJsonp([19],{"+krH":function(e,t){},XqtS:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,r={data:function(){return{code:"",Operator:[],andios:"",faly:!0}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},methods:{query:function(){a.receiveData.getData(a,"/evoucher/getByOperator","res",function(){a.res.success?a.Operator=a.res.result:alert(a.res.message)})},bycode:function(){if(a.faly){a.faly=!1;var e="/evoucher/getByCode/"+a.code;a.receiveData.getData(a,e,"res",function(){a.res.success?null==a.res.result.code?alert("核销失败！该券码不存在"):2==a.res.result.status?alert("核销失败：券码已核销"):3==a.res.result.status?alert("核销失败：券码已过期"):4==a.res.result.status?alert("核销失败：券码已退款"):a.$router.push({path:"/cardrollgoods",query:{code:a.code}}):alert(null==a.res.message?"核销失败！该券码不存在":a.res.message),a.faly=!0})}},search:function(){""!=a.code&&a.bycode()},tapToSearch:function(){""!=a.code&&a.bycode()}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"records"},[s("div",[s("div",{staticClass:"search"},[s("form",{staticClass:"fl",attrs:{action:"javascript:javascript:viod 0"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",pattern:"[0-9]*",oninput:"this.value=this.value.replace(/\\D/g,'');",placeholder:"请输入核销劵码"},domProps:{value:e.code},on:{keyup:function(t){return"button"in t||13===t.keyCode?e.tapToSearch(t):null},input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),s("em",{staticClass:"iconfont icon-sousuo"})]),e._v(" "),s("div",{staticClass:"fr search-sub",class:{scolor:""!=e.code},on:{click:function(t){return t.stopPropagation(),e.search(t)}}},[e._v("核销")])]),e._v(" "),e._l(e.Operator,function(t){return s("div",{key:t.orderId},[s("div",{staticClass:"ov right-text"},[s("div",{staticClass:"title"},[e._v(e._s(t.productName))]),e._v(" "),s("div",{staticClass:"mar-top ov"},[s("span",{staticClass:"fl"},[e._v("数量:"+e._s(t.counts))]),s("span",{staticClass:"fr money"},[e._v("¥"+e._s(t.acturalPrice))])]),e._v(" "),s("div",{staticClass:"mar-top"},[e._v(e._s("下单手机号:"+t.tel))]),e._v(" "),s("div",{staticClass:"mar-top"},[e._v(e._s("核销时间："+t.consumeDate))])])])})],2)])},staticRenderFns:[]};var c=s("VU/8")(r,o,!1,function(e){s("+krH")},"data-v-beae55bc",null);t.default=c.exports}});