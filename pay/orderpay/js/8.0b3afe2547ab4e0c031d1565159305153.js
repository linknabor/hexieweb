webpackJsonp([8],{dfC0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("fxnj"),a=i.n(s),n=void 0,o={data:function(){return{commentQuality:5,commentAttitude:5,commentService:5,comment:"",photos:[],uploadImgMap:{}}},created:function(){n=this;var t=location.href.split("#")[0];n.receiveData.wxconfig(n,a.a,["chooseImage","previewImage","uploadImage","downloadImage"],t)},mounted:function(){},computed:{itemClasses:function(){for(var t=[],e=Math.floor(2*this.commentQuality)/2,i=Math.floor(e),s=0;s<i;s++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses1:function(){for(var t=[],e=Math.floor(2*this.commentAttitude)/2,i=Math.floor(e),s=0;s<i;s++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses2:function(){for(var t=[],e=Math.floor(2*this.commentService)/2,i=Math.floor(e),s=0;s<i;s++)t.push("on");for(;t.length<5;)t.push("off");return t}},methods:{getUrlParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):null},serverClick:function(t){n.commentQuality=t+1},serverClick1:function(t){n.commentAttitude=t+1},serverClick2:function(t){n.commentService=t+1},focus:function(){},storeComment:function(t){n.comment=t.srcElement.innerText},addPic:function(){a.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e=t.localIds;if(0==e.length)return alert("未获取图片，请刷新后重新选择图片。"),!1;for(var i=0;i<e.length;i++){if(6==n.photos.length){alert("最多只能上传6张图片");break}var s={imgUrl:e[i]};n.photos.push(s),n.uploadImg(e[i])}}})},uploadImg:function(t){a.a.uploadImage({localId:t,isShowProgressTips:1,success:function(e){n.uploadImgMap[t]=e.serverId}})},submit:function(){""==n.comment||n.comment.length<5?alert("评论字数不能小于5个！"):n.comment.length>400?alert("评论字数不能大于400！"):n.sendComment()},sendComment:function(){var t="";for(var e in n.uploadImgMap)t+=n.uploadImgMap[e]+",";var i={repairId:n.$route.query.ordersID,commentQuality:n.commentQuality,commentAttitude:n.commentAttitude,commentService:n.commentService,comment:n.comment,commentImgUrls:t};n.receiveData.postData(n,"/repair/comment",i,"res",function(){n.res.success?window.location.href=n.basePageUrl+"person/index.html?state=123#/ordersDetail?orderId="+n.$route.query.ordersID:alert("评论失败，请稍后重试！")})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("维修质量：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses,function(e,s){return i("div",{staticClass:"star",class:e,on:{click:function(e){t.serverClick(s)}}})}))]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务态度：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses1,function(e,s){return i("div",{staticClass:"star",class:e,on:{click:function(e){t.serverClick1(s)}}})}))]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务效率：")]),t._v(" "),i("span",{staticStyle:{float:"right","margin-right":"10px"}},t._l(t.itemClasses2,function(e,s){return i("div",{staticClass:"star",class:e,on:{click:function(e){t.serverClick2(s)}}})}))]),t._v(" "),i("div",{staticClass:"content p15 fs15",class:{hasvalue:t.comment},staticStyle:{"line-height":"20px"},attrs:{contenteditable:""},on:{click:t.focus,blur:t.storeComment}}),t._v(" "),i("div",{staticClass:"photo_area"},[i("div",{staticStyle:{"margin-top":"15px",width:"100%",height:"35px"}},[i("div",{staticStyle:{float:"left","padding-left":"5px"}},[t._v("上传照片")]),t._v(" "),i("div",{staticStyle:{float:"right","padding-right":"15px",color:"#999"}},[t._v(t._s(t.photos.length)+"/6")])]),t._v(" "),t._l(t.photos,function(t){return i("div",{staticClass:"photo_wrap a_third_m20_height"},[i("img",{staticClass:"photo a_third_m22_height",attrs:{src:t.imgUrl}})])}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.photos.length<6,expression:"photos.length<6"}],staticClass:"photo_wrap a_third_m20_height",on:{click:t.addPic}},[i("div",{staticClass:"photo addicon a_third_m22_height",staticStyle:{"margin-left":"4px","margin-right":"2px",outline:"#e5e2dd solid 1px"}})])],2),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticStyle:{width:"100%",height:"60px"}},[t._v(" ")]),t._v(" "),i("div",{staticClass:"btn-fixed"},[i("div",{staticClass:"btn",on:{click:t.submit}},[t._v("发表评论")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_area"},[e("div",{staticClass:"brand-tip-1"},[this._v("支付成功")]),this._v(" "),e("div",{staticClass:"brand-tip-2"},[this._v("维修工师傅很辛苦，给个好评呗")])])}]};var c=i("VU/8")(o,r,!1,function(t){i("yQ7c")},"data-v-4f3217b2",null);e.default=c.exports},yQ7c:function(t,e){}});
//# sourceMappingURL=8.0b3afe2547ab4e0c031d1565159305153.js.map