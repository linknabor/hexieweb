webpackJsonp([7],{CPVf:function(e,t,i){"use strict";(function(e){var a=i("mvHQ"),n=i.n(a),o=i("fxnj"),r=i.n(o),s=void 0;t.a={data:function(){return{threadId:this.$route.query.threadId,thread:{},comments:[],uploadPicId:"",thumbnailurls:[],commentContent:"",localIdsid:""}},created:function(){s=this},mounted:function(){this.wxdata(),this.getThread()},methods:{getThread:function(){s.receiveData.postData(s,"thread/getThreadByThreadId",{threadId:s.threadId},"data",function(){s.data.success?(s.thread=s.data.result,s.comments=s.thread.comments,s.thumbnailurls=s.thread.thumbnailLink,s.updateUnreadComments()):alert(null==s.data.message?"获取信息失败，请重试！":s.data.message)})},updateUnreadComments:function(){var e="thread/updateUnreadComment/"+s.thread.userId+"/"+s.thread.threadId;s.receiveData.postData(s,e,{},"data",function(){console.log(n()(s.data))})},viewSrcImg:function(e,t,i){s.refreshImages(e,t,i)},refreshImages:function(t,i,a){var n="thread/getImgDetail/"+t+"/"+i+"/"+a;s.receiveData.getData(s,n,"data",function(){var t=s.data.result,i=t.imgUrl,a=t.width,n=t.height,o=0,r=0;""!=a&&"undefined"!=a?o=parseInt(a):alert("请检查图片是否上传成功。"),""!=n&&"undefined"!=n?r=parseInt(n):alert("请检查图片是否上传成功。");var c='<div id="imgDetail" style="align:center"><img src="'+i+'"/></div>';e("#zzmb").show("slow"),e("#divconf").html(c),e("#divconf").show("slow"),e(window).height()>e(document).height()?e(".zzmb").height(e(window).height()):e(".zzmb").height(e(document).height());var d=e(window).height(),l=e(window).width(),p=0,u=0,m=0,f=!1;o>r?o>l?(p=l/o*r,u=l):(f=!0,p=r,u=o):o<=r&&(o>l?(p=l/o*r,p>d?(u=d/r*o,p=d):u=l):r>d&&(u=d/r*o,p=d));var m=d/2-p/2,h=0;f&&(h=l/2-u/2),e("#divconf").css("top",m),e("#divconf").css("left",h),e("#divconf img").css({width:"100%",height:"auto"})})},hideImg:function(){e("#zzmb").hide("slow"),e("#divconf").hide("slow")},delThread:function(){s.receiveData.postData(s,"thread/deleteThread",{threadId:s.threadId},"data",function(){s.data.success?(alert("删除成功"),s.$router.push({path:"/mysteward"})):alert(null==s.data.message?"发布信息保存失败，请重试！":s.data.message)})},delComment:function(e,t){s.receiveData.postData(s,"thread/deleteComment",{commentId:e.commentId,threadId:e.threadId},"data",function(){s.data.success?s.comments.splice(t,1):alert(null==s.data.message?"发布信息保存失败，请重试！":s.data.message)})},saveComment:function(){if(""==s.commentContent)return alert("回复内容不为空。"),!1;e("[name='pics']").length>0?this.uploadToWechat():s.addComment()},addComment:function(){s.receiveData.postData(s,"thread/addComment",{commentContent:s.commentContent,threadId:s.threadId,uploadPicId:s.uploadPicId},"data",function(){if(s.data.success){s.comments.push(s.data.result),s.commentContent="",e("#pic").empty();e("[name='pics']").length>2&&e("#add").show()}else alert(null==s.data.message?"发布信息保存失败，请重试！":s.data.message)})},wxdata:function(){s.receiveData.postData(s,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var e=s.heheData.result;r.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})})},addPic:function(){r.a.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var i=t.localIds;s.localIdsid=t.localIds,alert("已选择"+i.length+"张图片");var a="",n=e("[name='pics']").length;if(n+i.length>3)return alert("所选图片超过3张。"),!1;var o=0;if(window.__wxjs_is_wkwebview){!function t(n){r.a.getLocalImgData({localId:i[n],success:function(o){var r=o.localData;r=r.replace("jgp","jpeg"),a='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+r+'"  id="'+s.localIdsid[n]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(a),++n<i.length&&t(n)},fail:function(e){alert(e)}})}(o)}else for(var o=0;o<i.length;o++)a='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+i[o]+'" id="'+i[o]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(a);n+i.length>=3&&e("#add").hide()},fail:function(e){alert(e)}})},uploadToWechat:function(){function t(){var e=a.eq(i).find("img"),n=e.attr("id");setTimeout(function(){r.a.uploadImage({localId:n,isShowProgressTips:1,success:function(e){var n=e.serverId;s.uploadPicId+=n+",",i++,i<a.length?t():i==a.length&&s.addComment()}})},50)}var i=0,a=e("[name='pics']");t()}},computed:{}}}).call(t,i("7t+N"))},Eoeo:function(e,t,i){var a=i("vaq0");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("c42d3756",a,!0)},EzXt:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA59YAAIElAACFAQAA6BMAADvtAAAYBnfKEhIAAAFsSURBVHja7NoxDsIwEERRjHJpGhA0HNu0CCnISbxgr94viUnBz2zsEaXWelrjcbu8Xywfl9e/aP3q+uv9Wb7d5HzCUCyN60rjZ1vvYb2EjA0hk42s4ieSkKzUhp0aIRKCQ0KaYgYJIQSEEILxD4boR5EQIwvRI0uXJSFp0WVJyOBPXwYhuiwJIQSEgJAkB0P0Q5dlZCF8ZOmyJCQtuiwJQbgQXZaEEAJCQEiSgyH6ocsyshA+snRZEpIWXZaEIFyILktCCAEh2HsO2bu9++fW8teU0YXggLhl9CdmYzKmbxa8QyZ7h+iyJCQtuiwJQbgQXZaEEAJCQEiSgyH64X9ZRhbCR5YuS0LSosuSEIQL0WVJCCEgBIQkORiiH7osIwvhI0uXJSFp0WXZZQ2+g8kwsnRZ3iGEgBAQYpeFPTtBCTGycGRk6bIkJC26LAlBuBBdloQQAkJASJKD4dqLfsth0noJmZcXAAAA//8DAIghOuIxjAeLAAAAAElFTkSuQmCC"},L0LT:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFBNDI4RUQ1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFBNDI4RUM1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MzZFOEVFNDcyMDY4MTE4MjJBQ0UwNEM1NUNCQjZBIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQzMzM1OTgtMjM4MC0xMWU1LThjMTAtYmU2YTYwOGU2OGQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UqIDaQAAAk1JREFUeNqslluITVEcxtdswovGg/AyD5rIuJQ5aCYSMw8iSUoZtxdywjwyLyMRuZS8mJichocpl6HGg0JRE0WY8KLj/uqS23iX4/fpG22nfebsM86/fq1ae63vW3v9/3utXVMoFIIil8uFhKiHjdACDTDF/Z8hDwNwGd5ms9mk+SEKySHhfngDh6ERXkGfeek+PXsN11hgfVqDbfAc1sFVWA6T/RabTYv7lsEVWKs5mGwvZ9AJ5+A9LIENcBd+JSxEffegDRZ7Tg8m+0sZaOVH4DEsggchfTyEhZ57CJMd/xjQMYPmNLyDVfCthNB9b9+Y4gck+TvNSiUcuqz59w1OwHjYMoJ48FbMgYlJD22yCcbByT8GOM1ykvr8qv8VmAy6dNeg3RC5zhWnQvWiy21b5JL7Uo3VFyVdmq0ymAdPoVAtdbZJWk9grgwmwYdQ/fgo7WiUkxekHSiDIZiWcny/2ztwCepGGCvNIRm8gPkpDdaDzpuvPiJ0AB6ACQljpZmPfOROhaYUBkreeZgJZy18EHrjg6j/ZmsOyOCC+9sryIG+9p1e1G1XYTx2u70YUVK6OG75GM5UmGx9tSvgeGz1GWvdlPZwFe2Bn3KE2tHWJeK11pDWXvXVxK7MXTRnfGKuhh8V6kv8OizVFrH67uL7QB1HfdE8qnC7Mp4j8WPD4kk32j4naLr3t7dMdTV5zKDnaOWd8QFjEyZ1u3R1nm81n+CZ2+ASbHSruAEdLphQziD4r0F5mO0LpBWafW4Ff/36QHuc1Hyp35bfAgwA6aSjO5PCY2YAAAAASUVORK5CYII="},"Mku+":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"10px"}},[a("div",{staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"},on:{click:e.hideImg}}),e._v(" "),a("div",{staticClass:"divconf",staticStyle:{display:"block",position:"fixed","z-index":"2147483647"},attrs:{id:"divconf"},on:{click:e.hideImg}}),e._v(" "),a("div",{staticClass:"ov pl15 pb15 fs14",staticStyle:{"padding-top":"15px"}},[a("div",{staticClass:"fl"},[a("img",{staticClass:"fl comment-post-picture",attrs:{src:e.thread.userHead}})]),e._v(" "),a("div",{staticClass:"thread_user_head"},[e._v(e._s(e.thread.userName))])]),e._v(" "),a("div",{staticClass:"ov pl15 pr15"},e._l(e.thumbnailurls,function(t,i){return a("div",{},[a("div",{staticClass:"ov pb15 fs14",on:{click:function(t){e.viewSrcImg(e.thread.threadId,i,0)}}},[a("img",{staticClass:"fl attach-picture",attrs:{src:t}})])])})),e._v(" "),a("div",{staticClass:"ov pl15 pb15 fs13",staticStyle:{color:"#3b3937"}},[e._v(e._s(e.thread.threadContent))]),e._v(" "),a("div",{staticClass:"ov pl15 pb15 fs13 fl",staticStyle:{color:"#a6937c","line-height":"23px"}},[a("img",{staticStyle:{width:"13px",height:"13px"},attrs:{src:i("L0LT")}}),e._v(" "+e._s(e.thread.formattedDateTime)+"\n        ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"true"==e.thread.isThreadOwner,expression:"thread.isThreadOwner == 'true'"}],staticClass:"avatar-wrap rel ov fr"},[a("div",{staticClass:"fs13 pr15",staticStyle:{color:"#a6937c","text-align":"right","line-height":"23px"},on:{click:e.delThread}},[e._v("删除")])]),e._v(" "),a("div",{staticClass:"pt15 divider"},[e._v(" ")]),e._v(" "),e._m(0),e._v(" "),e._l(e.comments,function(t,n){return a("div",{staticClass:"comment-item p15"},[a("div",{staticClass:"pt15",staticStyle:{width:"100%","min-height":"100px",float:"left","padding-left":"15px",overflow:"hidden"}},[a("div",{staticClass:"pb15 fs14 fl",staticStyle:{width:"15%"}},[a("img",{staticClass:"fl comment-reply-picture",attrs:{src:t.commentUserHead}})]),e._v(" "),a("div",{staticClass:"fl",staticStyle:{width:"79%"}},[a("div",{staticClass:"comments_user_name"},[e._v(e._s(t.commentUserName))]),e._v(" "),a("div",{staticClass:"fs13",staticStyle:{color:"#3b3937","word-wrap":"break-word",overflow:"hidden"}},[e._v(e._s(t.commentContent))]),e._v(" "),a("div",{staticClass:"preview_img_layer"},e._l(t.previewLink,function(i,n){return a("div",[a("div",{staticClass:"sub_img_layer",on:{click:function(i){e.viewSrcImg(t.commentId,n,1)}}},[a("img",{staticClass:"preview_img",attrs:{src:i}})])])})),e._v(" "),a("div",{staticClass:"fl15 fs12 pt15 fl",staticStyle:{color:"#888"}},[a("img",{staticStyle:{width:"12px"},attrs:{src:i("L0LT")}}),e._v(" \n                        "+e._s(t.fmtCommentDateTime)+"\n                    ")]),e._v(" "),a("div",{staticClass:"pt15 fs12",staticStyle:{color:"#a6937c",float:"right"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"true"==t.isCommentOwner,expression:"comment.isCommentOwner == 'true'"}],staticClass:"fr"},[a("div",{staticClass:"fs12 pr15",staticStyle:{color:"grey","text-align":"right"},on:{click:function(i){e.delComment(t,n)}}},[e._v("删除")])])]),e._v(" "),a("div",{staticClass:"fl"},[e._v(" ")])]),e._v(" "),a("div",{staticClass:"comment-lite-divider fl",staticStyle:{width:"100%"}},[e._v(" ")])])])}),e._v(" "),a("div",{staticClass:"butt"},[a("div",{staticClass:"fl",staticStyle:{top:"10px","background-color":"white",width:"98%","text-align":"center",border:"1px","margin-left":"2%"},attrs:{id:"input"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.commentContent,expression:"commentContent"}],staticClass:"comment_input inner-input ",attrs:{name:"comment_content",placeholder:"回复"},domProps:{value:e.commentContent},on:{input:function(t){t.target.composing||(e.commentContent=t.target.value)}}}),e._v(" "),a("div",{staticClass:"submit-btn ov fs14 fl",staticStyle:{width:"20%",color:"white"},on:{click:e.saveComment}},[e._v("发送")])])]),e._v(" "),a("div",{staticStyle:{overflow:"hidden","margin-top":"10px"},attrs:{id:"imgdis"}},[a("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),e._v(" "),a("div",{staticClass:"pl15 pr15"},[a("div",{staticClass:"add-pic-bg fl pl5",attrs:{id:"add"},on:{click:e.addPic}})])])],2)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"comments_title comment-lite-divider",staticStyle:{"padding-bottom":"5px"},attrs:{id:"total_comments"}},[i("div",{staticClass:"fl",staticStyle:{"line-height":"15px",color:"#888"}},[e._v("评论")])])}],o={render:a,staticRenderFns:n};t.a=o},fxnj:function(e,t){!function(t,i){e.exports=function(e,t){function i(t,i,a){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){s(t,e,a)}):l(t,a)}function a(t,i,a){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){a&&a.trigger&&a.trigger(e),s(t,e,i)}):a?l(t,a):l(t,i)}function n(e){return e=e||{},e.appId=E.appId,e.verifyAppId=E.appId,e.verifySignType="sha1",e.verifyTimestamp=E.timestamp+"",e.verifyNonceStr=E.nonceStr,e.verifySignature=E.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function s(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var a=t.errMsg;a||(a=t.err_msg,delete t.err_msg,a=c(e,a),t.errMsg=a),i=i||{},i._complete&&(i._complete(t),delete i._complete),a=t.errMsg||"",E.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=a.indexOf(":");switch(a.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function c(e,t){var i=e,a=g[i];a&&(i=a);var n="ok";if(t){var o=t.indexOf(":");n=t.substring(o+1),"confirm"==n&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),n=n.replace(/_/g," "),n=n.toLowerCase(),("access denied"==n||"no permission to execute"==n)&&(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}function d(e){if(e){for(var t=0,i=e.length;i>t;++t){var a=e[t],n=h[a];n&&(e[t]=n)}return e}}function l(e,t){if(!(!E.debug||t&&t.isInnerInvoke)){var i=g[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function p(e){if(!(A||b||E.debug||"6.0.2">_||T.systemType<0)){var t=new Image;T.appId=E.appId,T.initTime=k.initEndTime-k.initStartTime,T.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,W.getNetworkType({isInnerInvoke:!0,success:function(e){T.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+T.version+"&o="+T.isPreVerifyOk+"&s="+T.systemType+"&c="+T.clientVersion+"&a="+T.appId+"&n="+T.networkType+"&i="+T.initTime+"&p="+T.preVerifyTime+"&u="+T.url;t.src=i}})}}function u(){return(new Date).getTime()}function m(t){S&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function f(){W.invoke||(W.invoke=function(t,i,a){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),a)},W.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},g=function(){var e={};for(var t in h)e[h[t]]=t;return e}(),v=e.document,w=v.title,I=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),A=!(!y.match("mac")&&!y.match("win")),b=-1!=I.indexOf("wxdebugger"),S=-1!=I.indexOf("micromessenger"),C=-1!=I.indexOf("android"),x=-1!=I.indexOf("iphone")||-1!=I.indexOf("ipad"),_=function(){var e=I.match(/micromessenger\/(\d+\.\d+\.\d+)/)||I.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},T={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:C?2:-1,clientVersion:_,url:encodeURIComponent(location.href)},E={},M={_completes:[]},N={state:0,data:{}};m(function(){k.initEndTime=u()});var D=!1,V=[],W={config:function(e){E=e,l("config",e);var t=!1!==E.check;m(function(){if(t)i(h.config,{verifyJsApiList:d(E.jsApiList)},function(){M._complete=function(e){k.preVerifyEndTime=u(),N.state=1,N.data=e},M.success=function(e){T.isPreVerifyOk=0},M.fail=function(e){M._fail?M._fail(e):N.state=-1};var e=M._completes;return e.push(function(){p()}),M.complete=function(t){for(var i=0,a=e.length;a>i;++i)e[i]();M._completes=[]},M}()),k.preVerifyStartTime=u();else{N.state=1;for(var e=M._completes,a=0,n=e.length;n>a;++a)e[a]();M._completes=[]}}),E.beta&&f()},ready:function(e){0!=N.state?e():(M._completes.push(e),!S&&E.debug&&e())},error:function(e){"6.0.2">_||(-1==N.state?e(N.data):M._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var i in t){var a=g[i];a&&(t[a]=t[i],delete t[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(C){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=t(e)},e}())},onMenuShareTimeline:function(e){a(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(h.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(C){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===D?(D=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(D=!1,V.length>0){var t=V.shift();wx.getLocalImgData(t)}},e}())):V.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var a=t.indexOf(":"),n=t.substring(a+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(h.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,card_ext:r.cardExt};a.push(s)}i(h.addCard,{card_list:a},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var i=0,a=t.length;a>i;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:E.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,a=[],n=0,o=t.length;o>n;++n){var r=t[n],s={card_id:r.cardId,code:r.code};a.push(s)}i(h.openCard,{card_list:a},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){a(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},B=1,L={};return v.addEventListener("error",function(e){if(!C){var t=e.target,i=t.tagName,a=t.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=a.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=B++,t["wx-id"]=n),L[n])return;L[n]=!0,wx.getLocalImgData({localId:a,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!C){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var a=t["wx-id"];a&&(L[a]=!1)}}},!0),t&&(e.wx=e.jWeixin=W),W}}(t)}(window)},"s7+i":function(e,t,i){"use strict";function a(e){i("Eoeo")}Object.defineProperty(t,"__esModule",{value:!0});var n=i("CPVf"),o=i("Mku+"),r=i("VU/8"),s=a,c=r(n.a,o.a,!1,s,"data-v-69f896b8",null);t.default=c.exports},vaq0:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"#divconf img[data-v-69f896b8]{width:100%;height:auto}.ov[data-v-69f896b8]{overflow:hidden;padding:1px}.fs14[data-v-69f896b8]{font-size:14px}.pl15[data-v-69f896b8]{padding-left:15px}.pb15[data-v-69f896b8]{padding-bottom:15px}.comment-post-picture[data-v-69f896b8]{width:42px;height:42px;margin-right:15px;border:1px solid #d4cfc8;border-radius:42px}.thread_user_head[data-v-69f896b8]{float:left;margin-top:10.5px;font-size:14px;color:#393b37}.fs13[data-v-69f896b8]{font-size:13px}.fs12[data-v-69f896b8]{font-size:12px}.rel[data-v-69f896b8]{position:relative}.pr15[data-v-69f896b8]{padding-right:25px}.pt15[data-v-69f896b8]{padding-top:15px}.divider[data-v-69f896b8]{border-bottom:5px solid #f9f9e9}.comments_title[data-v-69f896b8]{margin:15px 4% 0;height:15px}.comment-lite-divider[data-v-69f896b8]{border-bottom:1px solid #d4cfc8}p15[data-v-69f896b8]{padding:15px;font-size:13px}.comment-reply-picture[data-v-69f896b8]{width:35px;height:35px;margin-right:15px;border:1px solid #d4cfc8;border-radius:35px}.comments_user_name[data-v-69f896b8]{font-size:14px;color:#3b3937;margin:5px 0 15px}.comment_input[data-v-69f896b8]{text-align:left;float:left;overflow:hidden;width:70%}.inner-input[data-v-69f896b8]{display:block;height:35px;line-height:35px;outline:none;border:1px solid #d4cfc8;border-radius:4px;padding:0 10px;vertical-align:middle;font-size:15px}.submit-btn[data-v-69f896b8]{height:35px;margin-left:1%;line-height:35px;background:#ff8a00;text-align:center}.zzmb[data-v-69f896b8]{z-index:100000;position:absolute;top:0;left:0;-moz-opacity:.65;opacity:.65;filter:alpha(opacity=65);background:#000;width:100%;height:100%;display:block}.comment-item[data-v-69f896b8]{overflow:hidden}.butt[data-v-69f896b8]{overflow:hidden;margin-top:10px}.add-pic-bg[data-v-69f896b8]{background-image:url("+i("EzXt")+");height:100px;width:95px}.pic_frame[data-v-69f896b8]{width:94%;margin:0 0 0 6%}.preview_img_layer[data-v-69f896b8]{float:left;width:100%}.sub_img_layer[data-v-69f896b8]{float:left;padding-bottom:15px;width:32%;margin-right:1%}.preview_img[data-v-69f896b8]{width:100%;height:94px}",""])}});