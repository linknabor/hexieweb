webpackJsonp([4],{"6UMn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),i=a.n(s),r=a("lbHh"),n=a.n(r),o=a("fxnj"),c=a.n(o),l=void 0,u={data:function(){return{zzshow:!1,province:"",city:"",area:"",provincelist:[],citylist:[],arealist:[],residential:"",resname:"",tel:"",yzm:"",yzmtime:60,yzmstr:"获取验证码",agree:!1,ruleId:this.$route.query.ruleId,productType:this.$route.query.productType,isOriginHei:!0,screenHeight:document.documentElement.clientHeight,originHeight:document.documentElement.clientHeight}},created:function(){l=this},components:{},computed:{},mounted:function(){window.onresize=function(){l.screenHeight=document.documentElement.clientHeight},l.getprovince()},watch:{screenHeight:function(e){this.originHeight>e+100?this.isOriginHei=!1:this.isOriginHei=!0}},methods:{getprovince:function(){l.receiveData.getData(l,"/regions/1/0","res",function(){l.res.success?l.provincelist=l.res.result:alert(l.res.message)})},setprovince:function(){""!=l.province&&l.getcity(),l.citylist=[],l.arealist=[],l.city="",l.area=""},getcity:function(){l.receiveData.getData(l,"/regions/2/"+l.province,"res",function(){l.res.success?l.citylist=l.res.result:alert(l.res.message)})},setcity:function(){""!=l.city?l.getarea():(l.arealist=[],l.area="")},getarea:function(){l.receiveData.getData(l,"/regions/3/"+l.city,"res",function(){l.res.success?l.arealist=l.res.result:alert(l.res.message)})},getCaptcha:function(){/^1[3-9][0-9]\d{8}$/.test(l.tel)?"获取验证码"!=l.yzmstr&&"重新获取"!=l.yzmstr||(l.yzmstr="获取中",l.yzmreq()):alert("请输入正确的手机号")},yzmreq:function(){l.receiveData.postData(l,"/getyzm",{mobile:l.tel},"res",function(){if(l.res.success){alert("验证码已下发，请查收短信"),l.yzmtime=60;var e=setInterval(function(){l.yzmstr=l.yzmtime+"秒后重新获取",l.yzmtime--,l.yzmtime<=0&&(l.yzmstr="重新获取")},1e3);setTimeout(function(){clearInterval(e)},61e3)}else alert(l.res.messages)})},demm:function(){},pay:function(){if(l.agree)if(""!=l.province&&""!=l.city&&""!=l.area&&""!=l.residential&&""!=l.resname&&""!=l.tel&&""!=l.zym){l.zzshow=!0;var e={province:l.province,city:l.city,county:l.area,sectName:l.residential,name:l.resname,mobile:l.tel,code:l.yzm,ruleId:l.ruleId,productType:l.productType,shareCode:n.a.get("userId")};l.receiveData.postData(l,"/promotionPay",e,"res",function(){if(console.log(l.res),l.res.success){var e=l.res;c.a.config({debug:!1,appId:e.result.appId,timestamp:e.result.timestamp,nonceStr:e.result.noncestr,signature:e.result.signature,jsApiList:["chooseWXPay"]}),c.a.chooseWXPay({appId:e.result.appId,timestamp:e.result.timestamp,nonceStr:e.result.noncestr,package:e.result.pkgStr,signType:e.result.signType,paySign:e.result.signature,success:function(e){},fail:function(e){console.log(i()(e))},cancel:function(e){l.zzshow=!1,alert("支付取消")}})}else l.zzshow=!1,alert(l.res.message)})}else alert("请填写完整信息")}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wapr"},[a("div",{staticClass:"salepas"},[a("div",{staticClass:"region"},[a("span",[e._v("运营区域")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.province,expression:"province"}],staticClass:"mg20",class:{scolor:""!=e.province},attrs:{name:"province",id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.province=t.target.multiple?a:a[0]},function(t){return e.setprovince()}]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("省")]),e._v(" "),e._l(e.provincelist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),a("span"),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"mg20",class:{scolor:""!=e.city},attrs:{name:"city",id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.city=t.target.multiple?a:a[0]},e.setcity]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("市")]),e._v(" "),e._l(e.citylist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.area,expression:"area"}],class:{scolor:""!=e.area},attrs:{name:"area",id:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.area=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("区")]),e._v(" "),e._l(e.arealist,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                    运营小区\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.residential,expression:"residential"}],attrs:{type:"text",placeholder:"请输入您想要运营的小区名"},domProps:{value:e.residential},on:{input:function(t){t.target.composing||(e.residential=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                   您的姓名\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.resname,expression:"resname"}],attrs:{type:"text",placeholder:"请输入您想要运营的小区名"},domProps:{value:e.resname},on:{input:function(t){t.target.composing||(e.resname=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"region"},[a("span",[e._v("\n                    联系电话\n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],staticClass:"tel",attrs:{type:"tel",placeholder:"请输入您的联系电话"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value)}}}),e._v(" "),a("span",{staticClass:"yzz",on:{click:e.getCaptcha}},[e._v(e._s(e.yzmstr))])]),e._v(" "),a("div",{staticClass:"region mgnone"},[a("span",{staticClass:"szym"},[e._v("\n                    验证码  \n                ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.yzm,expression:"yzm"}],staticClass:"yzm",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.yzm},on:{input:function(t){t.target.composing||(e.yzm=t.target.value)}}})]),e._v(" "),a("div",{staticStyle:{height:"0.4rem",width:"100%"}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isOriginHei,expression:"isOriginHei"}],staticClass:"btn"},[a("div",{staticClass:"btn-agree"},[a("label",{staticClass:"chendad",class:{"addse adds":1==e.agree},attrs:{for:"checkbox_a6"}}),e._v(" "),a("span",{on:{click:e.demm}},[e._v("已阅读并同意《协议》")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{type:"checkbox",id:"checkbox_a6"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=e._i(a,null);s.checked?r<0&&(e.agree=a.concat([null])):r>-1&&(e.agree=a.slice(0,r).concat(a.slice(r+1)))}else e.agree=i}}})]),e._v(" "),a("div",{staticClass:"pay",on:{click:e.pay}},[a("span",[e._v("立即支付")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.zzshow,expression:"zzshow"}],staticClass:"zzmb",attrs:{id:"zzmb"}})])},staticRenderFns:[]};var m=a("VU/8")(u,v,!1,function(e){a("LMNu")},"data-v-647617a1",null);t.default=m.exports},LMNu:function(e,t){}});