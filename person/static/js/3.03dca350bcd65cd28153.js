webpackJsonp([3],{"2n3H":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("R4nm"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"},on:{click:t.hideImg}}),t._v(" "),i("div",{staticClass:"divconf",staticStyle:{display:"block",position:"fixed","z-index":"2147483647"},attrs:{id:"divconf"},on:{click:t.hideImg}}),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs14",staticStyle:{"padding-top":"15px"}},[i("div",{staticClass:"fl"},[i("img",{staticClass:"fl comment-post-picture",attrs:{src:t.thread.userHead}})]),t._v(" "),i("div",{staticClass:"thread_user_head"},[t._v(t._s(t.thread.userName))])]),t._v(" "),i("div",{staticClass:"ov pl15 pr15"},t._l(t.thumbnailurls,function(e,a){return i("div",{},[i("div",{staticClass:"ov pb15 fs14",on:{click:function(e){t.viewSrcImg(t.thread.threadId,a,0)}}},[i("img",{staticClass:"fl attach-picture",attrs:{src:e}})])])})),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs13",staticStyle:{color:"#3b3937"}},[t._v(t._s(t.thread.threadContent))]),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs13 fl",staticStyle:{color:"#a6937c","line-height":"23px"}},[i("img",{staticStyle:{width:"13px",height:"13px"},attrs:{src:a("L0LT")}}),t._v(" "+t._s(t.thread.formattedDateTime)+"\n        ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"true"==t.thread.isThreadOwner,expression:"thread.isThreadOwner == 'true'"}],staticClass:"avatar-wrap rel ov fr"},[i("div",{staticClass:"fs13 pr15",staticStyle:{color:"#a6937c","text-align":"right","line-height":"23px"},on:{click:t.delThread}},[t._v("删除")])]),t._v(" "),i("div",{staticClass:"pt15 divider"},[t._v(" ")]),t._v(" "),t._m(0),t._v(" "),t._l(t.comments,function(e,s){return i("div",{staticClass:"comment-item p15"},[i("div",{staticClass:"pt15",staticStyle:{width:"100%","min-height":"100px",float:"left","padding-left":"15px",overflow:"hidden"}},[i("div",{staticClass:"pb15 fs14 fl",staticStyle:{width:"15%"}},[i("img",{staticClass:"fl comment-reply-picture",attrs:{src:e.commentUserHead}})]),t._v(" "),i("div",{staticClass:"fl",staticStyle:{width:"79%"}},[i("div",{staticClass:"comments_user_name"},[t._v(t._s(e.commentUserName))]),t._v(" "),i("div",{staticClass:"fs13",staticStyle:{color:"#3b3937","word-wrap":"break-word",overflow:"hidden"}},[t._v(t._s(e.commentContent))]),t._v(" "),i("div",{staticClass:"preview_img_layer"},t._l(e.previewLink,function(a,s){return i("div",[i("div",{staticClass:"sub_img_layer",on:{click:function(a){t.viewSrcImg(e.commentId,s,1)}}},[i("img",{staticClass:"preview_img",attrs:{src:a}})])])})),t._v(" "),i("div",{staticClass:"fl15 fs12 pt15 fl",staticStyle:{color:"#888"}},[i("img",{staticStyle:{width:"12px"},attrs:{src:a("L0LT")}}),t._v(" \n                        "+t._s(e.fmtCommentDateTime)+"\n                    ")]),t._v(" "),i("div",{staticClass:"pt15 fs12",staticStyle:{color:"#a6937c",float:"right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"true"==e.isCommentOwner,expression:"comment.isCommentOwner == 'true'"}],staticClass:"fr"},[i("div",{staticClass:"fs12 pr15",staticStyle:{color:"grey","text-align":"right"},on:{click:function(a){t.delComment(e,s)}}},[t._v("删除")])])]),t._v(" "),i("div",{staticClass:"fl"},[t._v(" ")])]),t._v(" "),i("div",{staticClass:"comment-lite-divider fl",staticStyle:{width:"100%"}},[t._v(" ")])])])}),t._v(" "),i("div",{staticClass:"butt"},[i("div",{staticClass:"fl",staticStyle:{top:"10px","background-color":"white",width:"98%","text-align":"center",border:"1px","margin-left":"2%"},attrs:{id:"input"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"comment_input inner-input ",attrs:{name:"comment_content",placeholder:"回复"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}}),t._v(" "),i("div",{staticClass:"submit-btn ov fs14 fl",staticStyle:{width:"20%",color:"white"},on:{click:t.saveComment}},[t._v("发送")])])]),t._v(" "),i("div",{staticStyle:{overflow:"hidden","margin-top":"10px"},attrs:{id:"imgdis"}},[i("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),t._v(" "),i("div",{staticClass:"pl15 pr15"},[i("div",{staticClass:"add-pic-bg fl pl5",attrs:{id:"add"},on:{click:t.addPic}})])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comments_title comment-lite-divider",staticStyle:{"padding-bottom":"5px"},attrs:{id:"total_comments"}},[e("div",{staticClass:"fl",staticStyle:{"line-height":"15px",color:"#888"}},[this._v("评论")])])}]};var n=function(t){a("weVo")},d=a("VU/8")(i.a,s,!1,n,"data-v-db6689ee",null);e.default=d.exports},L0LT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFBNDI4RUQ1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFBNDI4RUM1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MzZFOEVFNDcyMDY4MTE4MjJBQ0UwNEM1NUNCQjZBIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQzMzM1OTgtMjM4MC0xMWU1LThjMTAtYmU2YTYwOGU2OGQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UqIDaQAAAk1JREFUeNqslluITVEcxtdswovGg/AyD5rIuJQ5aCYSMw8iSUoZtxdywjwyLyMRuZS8mJichocpl6HGg0JRE0WY8KLj/uqS23iX4/fpG22nfebsM86/fq1ae63vW3v9/3utXVMoFIIil8uFhKiHjdACDTDF/Z8hDwNwGd5ms9mk+SEKySHhfngDh6ERXkGfeek+PXsN11hgfVqDbfAc1sFVWA6T/RabTYv7lsEVWKs5mGwvZ9AJ5+A9LIENcBd+JSxEffegDRZ7Tg8m+0sZaOVH4DEsggchfTyEhZ57CJMd/xjQMYPmNLyDVfCthNB9b9+Y4gck+TvNSiUcuqz59w1OwHjYMoJ48FbMgYlJD22yCcbByT8GOM1ykvr8qv8VmAy6dNeg3RC5zhWnQvWiy21b5JL7Uo3VFyVdmq0ymAdPoVAtdbZJWk9grgwmwYdQ/fgo7WiUkxekHSiDIZiWcny/2ztwCepGGCvNIRm8gPkpDdaDzpuvPiJ0AB6ACQljpZmPfOROhaYUBkreeZgJZy18EHrjg6j/ZmsOyOCC+9sryIG+9p1e1G1XYTx2u70YUVK6OG75GM5UmGx9tSvgeGz1GWvdlPZwFe2Bn3KE2tHWJeK11pDWXvXVxK7MXTRnfGKuhh8V6kv8OizVFrH67uL7QB1HfdE8qnC7Mp4j8WPD4kk32j4naLr3t7dMdTV5zKDnaOWd8QFjEyZ1u3R1nm81n+CZ2+ASbHSruAEdLphQziD4r0F5mO0LpBWafW4Ff/36QHuc1Hyp35bfAgwA6aSjO5PCY2YAAAAASUVORK5CYII="},R4nm:function(t,e,a){"use strict";(function(t){var i=a("mvHQ"),s=(a.n(i),a("fxnj")),n=a.n(s),d=void 0;e.a={data:function(){return{threadId:this.$route.query.threadId,thread:{},comments:[],uploadPicId:"",thumbnailurls:[],commentContent:"",localIdsid:""}},created:function(){d=this},mounted:function(){this.wxdata(),this.getThread()},methods:{getThread:function(){d.receiveData.postData(d,"thread/getThreadByThreadId",{threadId:d.threadId},"data",function(){d.data.success&&(d.thread=d.data.result,d.comments=d.thread.comments,d.thumbnailurls=d.thread.thumbnailLink,d.updateUnreadComments())})},updateUnreadComments:function(){var t="thread/updateUnreadComment/"+d.thread.userId+"/"+d.thread.threadId;d.receiveData.postData(d,t,{},"data",function(){})},viewSrcImg:function(t,e,a){d.refreshImages(t,e,a)},refreshImages:function(e,a,i){var s="thread/getImgDetail/"+e+"/"+a+"/"+i;d.receiveData.getData(d,s,"data",function(){var e=d.data.result,a=e.imgUrl,i=e.width,s=e.height,n=0,c=0;""!=i&&"undefined"!=i?n=parseInt(i):alert("请检查图片是否上传成功。"),""!=s&&"undefined"!=s?c=parseInt(s):alert("请检查图片是否上传成功。");var o='<div id="imgDetail" style="align:center"><img src="'+a+'"/></div>';t("#zzmb").show("slow"),t("#divconf").html(o),t("#divconf").show("slow"),t(window).height()>t(document).height()?t(".zzmb").height(t(window).height()):t(".zzmb").height(t(document).height());var l=t(window).height(),r=t(window).width(),m=0,h=0,v=!1;n>c?n>r?(m=r/n*c,h=r):(v=!0,m=c,h=n):n<=c&&(n>r?(m=r/n*c)>l?(h=l/c*n,m=l):h=r:c>l&&(h=l/c*n,m=l));var p=l/2-m/2,u=0;v&&(u=r/2-h/2),t("#divconf").css("top",p),t("#divconf").css("left",u),t("#divconf img").css({width:"100%",height:"auto"})})},hideImg:function(){t("#zzmb").hide("slow"),t("#divconf").hide("slow")},delThread:function(){d.receiveData.postData(d,"thread/deleteThread",{threadId:d.threadId},"data",function(){d.data.success?(alert("删除成功"),d.$router.push({path:"/myPublish"})):alert(null==d.data.message?"发布信息保存失败，请重试！":d.data.message)})},delComment:function(t,e){d.receiveData.postData(d,"thread/deleteComment",{commentId:t.commentId,threadId:t.threadId},"data",function(){d.data.success?d.comments.splice(e,1):alert(null==d.data.message?"发布信息保存失败，请重试！":d.data.message)})},saveComment:function(){if(""==d.commentContent)return alert("回复内容不为空。"),!1;t("[name='pics']").length>0?this.uploadToWechat():d.addComment()},addComment:function(){d.receiveData.postData(d,"thread/addComment",{commentContent:d.commentContent,threadId:d.threadId,uploadPicId:d.uploadPicId},"data",function(){d.data.success?(d.comments.push(d.data.result),d.commentContent="",t("[name='pics']").length>2&&t("#add").show(),t("#pic").empty()):alert(null==d.data.message?"发布信息保存失败，请重试！":d.data.message)})},wxdata:function(){d.receiveData.postData(d,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var t=d.heheData.result;n.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})})},addPic:function(){n.a.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var a=e.localIds;d.localIdsid=e.localIds,alert("已选择"+a.length+"张图片");var i="",s=t("[name='pics']").length;if(s+a.length>3)return alert("所选图片超过3张。"),!1;var c=0;if(window.__wxjs_is_wkwebview){!function e(s){n.a.getLocalImgData({localId:a[s],success:function(n){var c=n.localData;c=c.replace("jgp","jpeg"),i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+c+'"  id="'+d.localIdsid[s]+'"  style="height:100px;width:90px;"/></div>',t("#pic").append(i),++s<a.length&&e(s)},fail:function(t){alert(t)}})}(c)}else for(c=0;c<a.length;c++)i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+a[c]+'" id="'+a[c]+'"  style="height:100px;width:90px;"/></div>',t("#pic").append(i);s+a.length>=3&&t("#add").hide()},fail:function(t){alert(t)}})},uploadToWechat:function(){var e=0,a=t("[name='pics']");!function t(){var i=a.eq(e).find("img").attr("id");setTimeout(function(){n.a.uploadImage({localId:i,isShowProgressTips:1,success:function(i){var s=i.serverId;d.uploadPicId+=s+",",++e<a.length?t():e==a.length&&d.addComment()}})},50)}()}},computed:{}}}).call(e,a("7t+N"))},weVo:function(t,e){}});