webpackJsonp([19],{WFMS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=void 0,c={data:function(){return{code:""}},created:function(){i=this},components:{},computed:{},mounted:function(){},methods:{showcountF:function(){document.activeElement.blur()},getnum:function(t){i.code+=t.target.innerText},getkey:function(){""!=i.code&&17==i.code.length&&i.$router.push({path:"/cardrollgoods",query:{code:i.code}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wapkey"},[a("div",{staticClass:"context"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"address",staticClass:"key-text",attrs:{type:"text",pattern:"[0-9]*",maxlength:"17",oninput:"this.value=this.value.replace(/\\D/g,'');",placeholder:"请输入核销劵码"},domProps:{value:t.code},on:{focus:t.showcountF,input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"mian"},[a("div",{staticClass:"num"},[a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("1")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("2")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("3")])])]),t._v(" "),a("div",{staticClass:"num"},[a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("4")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("5")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("6")])])]),t._v(" "),a("div",{staticClass:"num"},[a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("7")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("8")])]),t._v(" "),a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("9")])])]),t._v(" "),a("div",{staticClass:"num"},[a("div",{on:{click:t.getnum}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("0")])]),t._v(" "),a("div",{staticClass:"num-yan"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:t.getkey}},[t._v("验证")])])])])])},staticRenderFns:[]};var s=a("VU/8")(c,n,!1,function(t){a("exMO")},"data-v-6f7f8326",null);e.default=s.exports},exMO:function(t,e){}});