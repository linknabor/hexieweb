webpackJsonp([6],{"X+Tq":function(t,e,i){"use strict";(function(t){var a=i("fxnj"),s=i.n(a),n=void 0;e.a={data:function(){return{commentQuality:5,commentAttitude:5,commentService:5,comment:"",uploadImgMap:{},zzmb:!1,localIdsid:"",uploadPicId:"",pic_length:0}},created:function(){n=this;var t=location.href.split("#")[0];n.receiveData.wxconfig(n,s.a,["chooseImage","previewImage","uploadImage","downloadImage"],t)},mounted:function(){},computed:{itemClasses:function(){for(var t=[],e=Math.floor(2*this.commentQuality)/2,i=Math.floor(e),a=0;a<i;a++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses1:function(){for(var t=[],e=Math.floor(2*this.commentAttitude)/2,i=Math.floor(e),a=0;a<i;a++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses2:function(){for(var t=[],e=Math.floor(2*this.commentService)/2,i=Math.floor(e),a=0;a<i;a++)t.push("on");for(;t.length<5;)t.push("off");return t}},methods:{getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):null},serverClick:function(t){n.commentQuality=t+1},serverClick1:function(t){n.commentAttitude=t+1},serverClick2:function(t){n.commentService=t+1},focus:function(){},storeComment:function(t){n.comment=t.srcElement.innerText,!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)},addPic:function(){s.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var i=e.localIds;n.localIdsid=e.localIds;var a="",c=t("[name='pics']").length;if(c+i.length>6)return alert("所选图片超过6张。"),!1;n.pic_length+=i.length;var o=0;if(window.__wxjs_is_wkwebview){!function e(c){s.a.getLocalImgData({localId:i[c],success:function(s){var o=s.localData;o=o.replace("jgp","jpeg"),a='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+o+'" id="'+n.localIdsid[c]+'"  style="height:100px;width:90px;"/></div>',t("#pic").append(a),++c<i.length&&e(c)},fail:function(t){alert(t)}})}(o)}else for(o=0;o<i.length;o++)a='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+i[o]+'"  id="'+i[o]+'" style="height:100px;width:90px;"/></div>',t("#pic").append(a);c+i.length>=6&&t("#add").hide()},fail:function(t){alert(t)}})},uploadToWechat:function(){var e=0,i=t("[name='pics']");!function t(){var a=i.eq(e).find("img").attr("id");setTimeout(function(){s.a.uploadImage({localId:a,isShowProgressTips:1,success:function(a){var s=a.serverId;n.uploadPicId+=s+",",++e<i.length?t():e==i.length&&n.sendComment()}})},50)}()},submit:function(){if(""==n.comment||n.comment.length<5)alert("评论字数不能小于5个！");else if(n.comment.length>400)alert("评论字数不能大于400！");else{var e=t("[name='pics']").length;t("#zzmb").show(),e>0?n.uploadToWechat():n.sendComment()}},sendComment:function(){var e={orderId:n.$route.query.ordersID,commentQuality:n.commentQuality,commentAttitude:n.commentAttitude,commentService:n.commentService,comment:n.comment,commentImgUrls:n.uploadPicId};n.receiveData.postData(n,"/customService/order/comment",e,"res",function(){n.res.success?(t("#zzmb").hide(),window.location.href=n.basePageUrl+"person/index.html?"+n.common.getoriApp()+"#/myserviceDetail?orderId="+n.$route.query.ordersID):(t("#zzmb").hide(),alert(null==n.res.message?"评论失败，请稍后重试":n.res.message))})}}}}).call(e,i("7t+N"))},uoWU:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("X+Tq"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.zzmb,expression:"zzmb"}],staticClass:"zzmb",attrs:{id:"zzmb"}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务质量：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses,function(e,a){return i("div",{key:a,staticClass:"star",class:e,on:{click:function(e){t.serverClick(a)}}})}))]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务态度：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses1,function(e,a){return i("div",{key:a,staticClass:"star",class:e,on:{click:function(e){t.serverClick1(a)}}})}))]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务效率：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses2,function(e,a){return i("div",{key:a,staticClass:"star",class:e,on:{click:function(e){t.serverClick2(a)}}})}))]),t._v(" "),i("div",{staticClass:"content p15 fs15",class:{hasvalue:t.comment},staticStyle:{"line-height":"20px"},attrs:{contenteditable:""},on:{click:t.focus,blur:t.storeComment}}),t._v(" "),i("div",{staticClass:"photo_area"},[i("div",{staticStyle:{"margin-top":"15px",width:"100%",height:"35px"}},[i("div",{staticStyle:{float:"left","padding-left":"5px"}},[t._v("上传照片")]),t._v(" "),i("div",{staticStyle:{float:"right","padding-right":"15px",color:"#999"}},[t._v(t._s(t.pic_length)+"/6")])]),t._v(" "),i("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),t._v(" "),i("div",{staticClass:"pl15 pr15"},[i("div",{staticClass:"add-pic-bg fl",attrs:{id:"add"},on:{click:t.addPic}})])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"60px"}},[t._v(" ")]),t._v(" "),i("div",{staticClass:"btn-fixed"},[i("div",{staticClass:"btn",on:{click:t.submit}},[t._v("发表评论")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_area"},[e("div",{staticClass:"brand-tip-1"},[this._v("支付成功")]),this._v(" "),e("div",{staticClass:"brand-tip-2"},[this._v("对本次服务进行评价")])])}]};var n=function(t){i("yXxN")},c=i("VU/8")(a.a,s,!1,n,"data-v-69f8aefd",null);e.default=c.exports},yXxN:function(t,e){}});