webpackJsonp([6],{"6UMn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),s=a("lbHh"),r=a.n(s),o=void 0,c=void 0,l={data:function(){return{zzshow:!1,province:"",city:"",area:"",provincelist:[],citylist:[],arealist:[],residential:"",resname:"",tel:"",yzm:"",yzmtime:60,yzmstr:"获取验证码",agree:!1,ruleId:this.$route.query.ruleId,productType:this.$route.query.productType,isOriginHei:!0,screenHeight:document.documentElement.clientHeight,originHeight:document.documentElement.clientHeight}},created:function(){o=this},components:{},computed:{},mounted:function(){window.onresize=function(){o.screenHeight=document.documentElement.clientHeight},o.getprovince()},watch:{screenHeight:function(e){this.originHeight>e+100?this.isOriginHei=!1:this.isOriginHei=!0}},methods:{getprovince:function(){o.common.invokeApi("get","regions/1/0",null,function(e,t){c=e.getResponseHeader("Access-Control-Allow-Token")},function(e){e.success?o.provincelist=e.result:alert(e.message)},function(e){alert(e.message)})},setprovince:function(){""!=o.province?o.getcity():(o.citylist=[],o.arealist=[],o.city="",o.area="")},getcity:function(){o.receiveData.getData(o,"/regions/2/"+o.province,"res",function(){o.res.success?o.citylist=o.res.result:alert(o.res.message)})},setcity:function(){""!=o.city?o.getarea():(o.arealist=[],o.area="")},getarea:function(){o.receiveData.getData(o,"/regions/3/"+o.city,"res",function(){o.res.success?o.arealist=o.res.result:alert(o.res.message)})},getCaptcha:function(){/^1[3-9][0-9]\d{8}$/.test(o.tel)?"获取验证码"!=o.yzmstr&&"重新获取"!=o.yzmstr||(o.yzmstr="获取中",o.yzmreq()):alert("请输入正确的手机号")},yzmreq:function(){var e={mobile:o.tel};o.common.invokeApi("POST","getyzm",e,function(e){e.setRequestHeader("Access-Control-Allow-Token",c)},function(e){o.yzmtime=60,alert("验证码已下发，请查收短信");var t=setInterval(function(){o.yzmstr=o.yzmtime+"秒后重新获取",o.yzmtime--,o.yzmtime<=0&&(o.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(t)},61e3)},function(e){})},demm:function(){},pay:function(){if(o.agree)if(""!=o.province&&""!=o.city&&""!=o.area&&""!=o.residential&&""!=o.resname&&""!=o.tel&&""!=o.zym){o.zzshow=!0;var e={province:o.province,city:o.city,county:o.area,sectName:o.residential,name:o.resname,mobile:o.tel,code:o.yzm,ruleId:o.ruleId,productType:o.productType,shareCode:r.a.get("userId")};o.receiveData.postData(o,"/promotionPay",e,"res",function(){if(o.success){var e=o.res;wx.config({debug:!1,appId:e.result.appid,timestamp:e.result.timestamp,nonceStr:e.result.noncestr,signature:e.result.paysign,jsApiList:["chooseWXPay"]}),wx.chooseWXPay({appId:e.result.appid,timestamp:e.result.timestamp,nonceStr:e.result.noncestr,package:e.result.package,signType:e.result.signtype,paySign:e.result.paysign,success:function(e){},fail:function(e){console.log(n()(e))},cancel:function(e){o.zzshow=!1,alert("支付取消")}})}else o.zzshow=!1,alert(o.message)})}else alert("请填写完整信息")}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wapr"},[a("div",[a("div",{staticClass:"region"},[a("span",[e._v("运营区域")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.province,expression:"province"}],staticClass:"mg20",class:{scolor:""!=e.province},attrs:{name:"province",id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.province=t.target.multiple?a:a[0]},function(t){return e.setprovince()}]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("省")]),e._v(" "),e._l(e.provincelist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),a("span"),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"mg20",class:{scolor:""!=e.city},attrs:{name:"city",id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.city=t.target.multiple?a:a[0]},e.setcity]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("市")]),e._v(" "),e._l(e.citylist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.area,expression:"area"}],class:{scolor:""!=e.area},attrs:{name:"area",id:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.area=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("区")]),e._v(" "),e._l(e.arealist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                    运营小区\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.residential,expression:"residential"}],attrs:{type:"text",placeholder:"请输入您想要运营的小区名"},domProps:{value:e.residential},on:{input:function(t){t.target.composing||(e.residential=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                   您的姓名\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.resname,expression:"resname"}],attrs:{type:"text",placeholder:"请输入您想要运营的小区名"},domProps:{value:e.resname},on:{input:function(t){t.target.composing||(e.resname=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                    联系电话\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],staticClass:"tel",attrs:{type:"tel",placeholder:"请输入您的联系电话"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}}),e._v(" "),a("span",{staticClass:"yzz",on:{click:e.getCaptcha}},[e._v(e._s(e.yzmstr))])]),e._v(" "),a("div",{staticClass:"region"},[a("span",{staticClass:"szym"},[e._v("\n                    验证码  \n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.yzm,expression:"yzm"}],staticClass:"yzm",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.yzm},on:{input:function(t){t.target.composing||(e.yzm=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"btn"},[a("div",{staticClass:"btn-agree"},[a("label",{staticClass:"chendad",class:{"addse adds":1==e.agree},attrs:{for:"checkbox_a6"}}),e._v(" "),a("span",{on:{click:e.demm}},[e._v("已阅读并同意《协议》")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{type:"checkbox",id:"checkbox_a6"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,i=t.target,n=!!i.checked;if(Array.isArray(a)){var s=e._i(a,null);i.checked?s<0&&(e.agree=a.concat([null])):s>-1&&(e.agree=a.slice(0,s).concat(a.slice(s+1)))}else e.agree=n}}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isOriginHei,expression:"isOriginHei"}],staticClass:"pay",on:{click:e.pay}},[a("span",[e._v("立即支付")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.zzshow,expression:"zzshow"}],staticClass:"zzmb",attrs:{id:"zzmb"}})])},staticRenderFns:[]};var m=a("VU/8")(l,u,!1,function(e){a("K76b")},"data-v-17a1f626",null);t.default=m.exports},K76b:function(e,t){}});