webpackJsonp([9],{"4UCO":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA59YAAIElAACFAQAA6BMAADvtAAAYBnfKEhIAAAFsSURBVHja7NoxDsIwEERRjHJpGhA0HNu0CCnISbxgr94viUnBz2zsEaXWelrjcbu8Xywfl9e/aP3q+uv9Wb7d5HzCUCyN60rjZ1vvYb2EjA0hk42s4ieSkKzUhp0aIRKCQ0KaYgYJIQSEEILxD4boR5EQIwvRI0uXJSFp0WVJyOBPXwYhuiwJIQSEgJAkB0P0Q5dlZCF8ZOmyJCQtuiwJQbgQXZaEEAJCQEiSgyH6ocsyshA+snRZEpIWXZaEIFyILktCCAEh2HsO2bu9++fW8teU0YXggLhl9CdmYzKmbxa8QyZ7h+iyJCQtuiwJQbgQXZaEEAJCQEiSgyH64X9ZRhbCR5YuS0LSosuSEIQL0WVJCCEgBIQkORiiH7osIwvhI0uXJSFp0WXZZQ2+g8kwsnRZ3iGEgBAQYpeFPTtBCTGycGRk6bIkJC26LAlBuBBdloQQAkJASJKD4dqLfsth0noJmZcXAAAA//8DAIghOuIxjAeLAAAAAElFTkSuQmCC"},PXTb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=void 0,i={data:function(){return{flay:!1,means:"0",range:"0",content:"",image:"",avatar:a("4UCO"),sect_id:this.$route.query.sect_id,sect_addr:this.$route.query.sect_addr,isOriginHei:!0,screenHeight:document.documentElement.clientHeight,originHeight:document.documentElement.clientHeight}},created:function(){s=this},components:{},computed:{},mounted:function(){window.onresize=function(){s.screenHeight=document.documentElement.clientHeight}},watch:{screenHeight:function(e){this.originHeight>e+100?this.isOriginHei=!1:this.isOriginHei=!0}},methods:{setAvatar:function(){this.$refs.avatarInput.click()},changeImage:function(e){var t=e.target.files[0];if(t.size>5242880)return alert("图片大小超过5M"),void(e.target.value="");var a=new FileReader,i=this;a.readAsDataURL(t),a.onload=function(e){i.avatar=this.result,s.image=this.result},e.target.value=""},submit:function(){if(""!=s.content){s.flay=!0;var e={type:s.means,range:s.range,content:s.content,imgUrls:s.image,sect_id:s.sect_id};s.receiveData.postData(s,"/hexiemessage",e,"res",function(){s.res.success?(s.flay=!1,alert("发起成功，消息或短信将陆续送达"),s.$router.push({path:"/mass-record"})):alert(s.res.message)})}else alert("内容不能为空")}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notice"},[a("div",{staticClass:"formbox"},[a("div",{staticClass:"title"},[e._v("通知群发推送")]),e._v(" "),a("ul",{staticClass:"content"},[a("li",[a("div",{staticClass:"omit"},[e._v("\n              小区名称:  "+e._s(e.sect_addr)+"\n            ")])]),e._v(" "),a("li",[a("div",{staticClass:"choose"},[a("span",{staticClass:"mr15"},[e._v("推送方式:")]),e._v(" "),a("label",{staticClass:"radio",attrs:{for:"means1"}},[a("i",{class:{borerspot:0==e.means,circle:0==e.means}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.means,expression:"means"}],attrs:{type:"radio",name:"message",value:"0",id:"means1"},domProps:{checked:e._q(e.means,"0")},on:{change:function(t){e.means="0"}}}),e._v("\n               公众号\n            ")]),e._v(" "),a("label",{staticClass:"radio",attrs:{for:"means2"}},[a("i",{class:{borerspot:1==e.means,circle:1==e.means}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.means,expression:"means"}],attrs:{type:"radio",name:"message",value:"1",id:"means2"},domProps:{checked:e._q(e.means,"1")},on:{change:function(t){e.means="1"}}}),e._v("\n               短信\n              ")]),e._v(" "),a("label",{staticClass:"radio",attrs:{for:"means3"}},[a("i",{class:{borerspot:2==e.means,circle:2==e.means}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.means,expression:"means"}],attrs:{type:"radio",name:"message",value:"2",id:"means3"},domProps:{checked:e._q(e.means,"2")},on:{change:function(t){e.means="2"}}}),e._v("\n               全部\n            ")])])]),e._v(" "),a("li",[e._v("请输入推送内容:")]),e._v(" "),a("li",[a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.content,expression:"content",modifiers:{trim:!0}}],staticClass:"reply_content",attrs:{cols:"30",rows:"5",maxlength:"60"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),a("span",{staticClass:"grey"},[e._v("(60字)")])]),e._v(" "),a("li",[a("div",{staticClass:"avatar"},[e._m(0),e._v(" "),a("div",[a("img",{attrs:{src:e.avatar},on:{click:e.setAvatar}}),e._v(" "),a("input",{ref:"avatarInput",staticStyle:{display:"none"},attrs:{type:"file",name:"avatar",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(t){e.changeImage(t)}}})])]),e._v(" "),a("div",{staticStyle:{height:"1.3rem"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isOriginHei,expression:"isOriginHei"}],staticClass:"btn-fixed"},[a("div",{staticClass:"btn",on:{click:e.submit}},[e._v("确定")])])])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.flay,expression:"flay"}],staticClass:"gbcolor"},[e._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"imgtext"},[t("span",[this._v("上传照片")]),t("span",{staticStyle:{color:"red","font-size":"0.26rem"}},[this._v("(图片大小不大于5M)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"phoneAjax"}},[t("img",{staticStyle:{width:"40px","vertical-align":"middle"},attrs:{src:a("T1zF")}})])}]};var r=a("VU/8")(i,n,!1,function(e){a("VkeG")},"data-v-e1633652",null);t.default=r.exports},VkeG:function(e,t){}});