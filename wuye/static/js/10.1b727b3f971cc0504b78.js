webpackJsonp([10],{"2bKI":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".addt[data-v-c235c178]{background-color:#fffff8;padding-bottom:1px;height:100%;width:100%;position:absolute}.category[data-v-c235c178]{background-color:#f7f7f1;height:90px;overflow-x:hidden}.lite-divider[data-v-c235c178]{border-bottom:1px solid #d4cfc8}.category_main[data-v-c235c178]{width:92%;margin:0 0 0 4%;overflow-x:hidden}.category_sub_main[data-v-c235c178]{margin:15px 0 15px 15%;text-align:center;width:25%}.category_img[data-v-c235c178],.category_img_hide[data-v-c235c178]{width:50%;height:30px}.category_txt[data-v-c235c178]{padding:7px 0 0;font-size:12px;color:#999}.content_main[data-v-c235c178]{width:94%;margin:5% 0 5% 6%}.zzmb[data-v-c235c178]{z-index:100000;position:fixed;top:0;left:0;-moz-opacity:.65;opacity:.65;filter:alpha(opacity=65);background:#000;width:100%;height:100%;display:none}.content_info[data-v-c235c178]{width:98%;margin:30px 0 0}.inner-input-wrap[data-v-c235c178]{position:relative;padding:6px 0}.inner-input[data-v-c235c178]{display:block;height:120px;width:90%;outline:none;border:1px solid #d4cfc8;border-radius:4px;padding:0 10px;vertical-align:middle;font-size:15px;padding-top:10px}.content_limmit[data-v-c235c178]{width:89%;margin:0 0 0 5%;text-align:right;color:gray}.pic_frame[data-v-c235c178]{width:94%;margin:0 0 0 6%}.pl15[data-v-c235c178]{padding-left:15px}.pr15[data-v-c235c178]{padding-right:15px}.add-pic-bg[data-v-c235c178]{background-image:url("+n("EzXt")+");height:100px;width:95px}.btn-fabu[data-v-c235c178]{position:fixed;width:90%;height:50px;bottom:0;left:5%;right:5%;background-color:#ff8a00;line-height:50px;color:#fff}h2[data-v-c235c178]{text-align:center;letter-spacing:.05rem;font-size:15px}.categorya[data-v-c235c178]{text-decoration:none;color:#333;font-size:14px;display:inline-block}",""])},"8VBz":function(e,t,n){"use strict";(function(e){var i=n("Au9i"),a=(n.n(i),n("fxnj")),o=n.n(a),r=void 0;t.a={data:function(){return{threadContent:"",threadTitle:"",uploadPicId:"",localIdsid:""}},created:function(){r=this},watch:{},mounted:function(){this.wxdata()},components:{},methods:{wxdata:function(){r.receiveData.postData(r,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var e=r.heheData.result;o.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})})},addPic:function(){o.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var n=t.localIds;r.localIdsid=t.localIds,alert("已选择"+n.length+"张图片");var i="",a=e("[name='pics']").length;if(a+n.length>6)return alert("所选图片超过6张。"),!1;var c=0;if(window.__wxjs_is_wkwebview){!function t(a){o.a.getLocalImgData({localId:n[a],success:function(o){var c=o.localData;c=c.replace("jgp","jpeg"),i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+c+'" id="'+r.localIdsid[a]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(i),++a<n.length&&t(a)},fail:function(e){alert(e)}})}(c)}else for(var c=0;c<n.length;c++)i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+n[c]+'"  id="'+n[c]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(i);a+n.length>=6&&e("#add").hide()},fail:function(e){alert(e)}})},uploadToWechat:function(){function t(){var e=i.eq(n).find("img"),a=e.attr("id");setTimeout(function(){o.a.uploadImage({localId:a,isShowProgressTips:1,success:function(e){var a=e.serverId;r.uploadPicId+=a+",",n++,n<i.length?t():n==i.length&&r.saveThread()}})},50)}var n=0,i=e("[name='pics']");t()},saveThread:function(){i.MessageBox.confirm("您的意见将会被提交到所在物业，确定要提交吗？").then(function(e){if("confirm"==e){var t=void 0;t="9"==r.$route.query.n?"thread/addThread":"/health/serviceResv",r.receiveData.postData(r,t,{threadTitle:r.threadTitle,threadContent:r.threadContent,uploadPicId:r.uploadPicId},"postData",function(){r.postData.success?(alert("发布成功"),"9"==r.$route.query.n?r.$router.push({path:"/mysteward",query:{n:9}}):r.$router.push({path:"/mysteward",query:{n:12}})):alert(r.postData.message)})}}).catch(function(e){})},addThread:function(){return""==r.threadContent?(alert("请填写内容！"),!1):r.threadContent.length>200?(alert("发布字数不能超过200字节!"),!1):void(e("[name='pics']").length>0?r.uploadToWechat():r.saveThread())}},computed:{}}}).call(t,n("7t+N"))},"D5s+":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addt"},[n("div",{staticClass:"content_main"},[n("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),n("div",{staticClass:"inner-input-wrap content_info"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.threadContent,expression:"threadContent"}],staticClass:"inner-input content_input",attrs:{placeholder:"填写发布信息..."},domProps:{value:e.threadContent},on:{input:function(t){t.target.composing||(e.threadContent=t.target.value)}}})]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),e._v(" "),n("div",{staticClass:"pl15 pr15"},[n("div",{staticClass:"add-pic-bg fl pl5",attrs:{id:"add"},on:{click:e.addPic}})]),e._v(" "),n("div",{staticClass:"btn-fabu",on:{click:e.addThread}},[n("h2",[e._v("提交")])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"content_limmit"},[e._v("（限200字）")])])}],o={render:i,staticRenderFns:a};t.a=o},EzXt:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA59YAAIElAACFAQAA6BMAADvtAAAYBnfKEhIAAAFsSURBVHja7NoxDsIwEERRjHJpGhA0HNu0CCnISbxgr94viUnBz2zsEaXWelrjcbu8Xywfl9e/aP3q+uv9Wb7d5HzCUCyN60rjZ1vvYb2EjA0hk42s4ieSkKzUhp0aIRKCQ0KaYgYJIQSEEILxD4boR5EQIwvRI0uXJSFp0WVJyOBPXwYhuiwJIQSEgJAkB0P0Q5dlZCF8ZOmyJCQtuiwJQbgQXZaEEAJCQEiSgyH6ocsyshA+snRZEpIWXZaEIFyILktCCAEh2HsO2bu9++fW8teU0YXggLhl9CdmYzKmbxa8QyZ7h+iyJCQtuiwJQbgQXZaEEAJCQEiSgyH64X9ZRhbCR5YuS0LSosuSEIQL0WVJCCEgBIQkORiiH7osIwvhI0uXJSFp0WXZZQ2+g8kwsnRZ3iGEgBAQYpeFPTtBCTGycGRk6bIkJC26LAlBuBBdloQQAkJASJKD4dqLfsth0noJmZcXAAAA//8DAIghOuIxjAeLAAAAAElFTkSuQmCC"},PBIh:function(e,t,n){var i=n("2bKI");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("49f4ce9d",i,!0)},fxnj:function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,a(n),function(e){c(t,e,i)}):l(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),c(t,e,n)}):i?l(t,i):l(t,n)}function a(e){return e=e||{},e.appId=E.appId,e.verifyAppId=E.appId,e.verifySignType="sha1",e.verifyTimestamp=E.timestamp+"",e.verifyNonceStr=E.nonceStr,e.verifySignature=E.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=s(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",E.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function s(e,t){var n=e,i=h[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");a=t.substring(o+1),"confirm"==a&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),a=a.replace(/_/g," "),a=a.toLowerCase(),("access denied"==a||"no permission to execute"==a)&&(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t=n+":"+a}function d(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],a=m[i];a&&(e[t]=a)}return e}}function l(e,t){if(!(!E.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function u(e){if(!(S||A||E.debug||"6.0.2">T||b.systemType<0)){var t=new Image;b.appId=E.appId,b.initTime=k.initEndTime-k.initStartTime,b.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){b.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+b.version+"&o="+b.isPreVerifyOk+"&s="+b.systemType+"&c="+b.clientVersion+"&a="+b.appId+"&n="+b.networkType+"&i="+b.initTime+"&p="+b.preVerifyTime+"&u="+b.url;t.src=n}})}}function p(){return(new Date).getTime()}function f(t){_&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function g(){L.invoke||(L.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,a(n),i)},L.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),v=e.document,I=v.title,w=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),S=!(!y.match("mac")&&!y.match("win")),A=-1!=w.indexOf("wxdebugger"),_=-1!=w.indexOf("micromessenger"),x=-1!=w.indexOf("android"),C=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),T=function(){var e=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},b={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:C?1:x?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},E={},B={_completes:[]},P={state:0,data:{}};f(function(){k.initEndTime=p()});var V=!1,M=[],L={config:function(e){E=e,l("config",e);var t=!1!==E.check;f(function(){if(t)n(m.config,{verifyJsApiList:d(E.jsApiList)},function(){B._complete=function(e){k.preVerifyEndTime=p(),P.state=1,P.data=e},B.success=function(e){b.isPreVerifyOk=0},B.fail=function(e){B._fail?B._fail(e):P.state=-1};var e=B._completes;return e.push(function(){u()}),B.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();B._completes=[]},B}()),k.preVerifyStartTime=p();else{P.state=1;for(var e=B._completes,i=0,a=e.length;a>i;++i)e[i]();B._completes=[]}}),E.beta&&g()},ready:function(e){0!=P.state?e():(B._completes.push(e),!_&&E.debug&&e())},error:function(e){"6.0.2">T||(-1==P.state?e(P.data):B._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(x){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(m.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(m.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(m.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(m.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(m.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(x){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(V=!1,M.length>0){var t=M.shift();wx.getLocalImgData(t)}},e}())):M.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(C){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(m.openAddress,{},function(){return e._complete=function(e){e=r(e)},e}())},openProductSpecificView:function(e){n(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}n(m.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:E.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;o>a;++a){var r=t[a],c={card_id:r.cardId,code:r.code};i.push(c)}n(m.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(m.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){n(m.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){n(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(m.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},J=1,R={};return v.addEventListener("error",function(e){if(!x){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=J++,t["wx-id"]=a),R[a])return;R[a]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!x){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(R[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=L),L}}(t)}(window)},pZYX:function(e,t,n){"use strict";function i(e){n("PBIh")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("8VBz"),o=n("D5s+"),r=n("VU/8"),c=i,s=r(a.a,o.a,!1,c,"data-v-c235c178",null);t.default=s.exports}});