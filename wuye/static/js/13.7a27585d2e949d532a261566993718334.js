webpackJsonp([13],{D1vH:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENBREUyRjIzNkI1MTFFNTg4RUNGMkY5NzI5NkIxMUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENBREUyRjEzNkI1MTFFNTg4RUNGMkY5NzI5NkIxMUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxREExNjkwRjEyMzZFNTExQjA2M0QwQjZGNkFBQTE3MiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA0MzMzNTk4LTIzODAtMTFlNS04YzEwLWJlNmE2MDhlNjhkMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptjfb6AAAAFJSURBVHja7JixbsIwEIYvVjp14hUYwtippGIAofIidOIJmoG5Q9TuCF4GRhBQMQASSyUG9mRgxf2tRsjKYCQSxKm6k/7Ijm3l0/lyOcfTWlMcxyERfUAv0CO5rQIldL3pC+NHaAr1oZkPuAYaE+iBeJhx0CvUhNoKly9GcLYZpk8fl9C6OYd60I9jYVrwwRXHWBUaQPWsHxpAZU3oRlG0sVcgBMr2jCt+v6E3aJ31lcpNODDY2q3dUQxjT3MHJAEUQE7m5xJnyoTrzOQjMScMHZdIDAogm7cY1cqKe5p5ki0u6ME9Z0DPnOpcdoOKWtKMAApg2V+S82uM0svjdrKTLRZAAfxXgEg5NQZMQR7QLmeGgAzuDDey86GpBxfQc3ajBe0ulFi3/olu29J4MIJODMPPML0rfN7GaHTo7/80B1CdsRim8a8AAwBVskatMSamewAAAABJRU5ErkJggg=="},H3il:function(e,n,i){"use strict";var t=i("fxnj"),o=i.n(t),r=i("Au9i"),a=(i.n(r),void 0);n.a={created:function(){a=this;var e=location.href.split("#")[0];a.receiveData.wxconfig(a,o.a,["scanQRCode"],e)},data:function(){return{number:""}},mounted:function(){},methods:{show:function(){a.receiveData.scan(a,o.a,"number")},submit:function(){var e={url:/127|test/.test(location.origin)?"test.e-shequ.com":/uat/.test(location.origin)?"uat.e-shequ.com":"www.e-shequ.com"};/^\d{18}$/.test(this.number)?a.house():r.MessageBox.alert("请输入正确账单号",e.url)},house:function(){var e="/hexiehouse?stmtId="+a.number;this.receiveData.getData(a,e,"response",function(){a.response.success?null==a.response.result?alert("未查询到该房屋"):a.$router.push("/bindHouse/"+a.number):alert(null==a.response.message?"未查询到该房屋":a.response.message)})}}}},VNUM:function(e,n,i){"use strict";function t(e){i("ec/T")}Object.defineProperty(n,"__esModule",{value:!0});var o=i("H3il"),r=i("pWex"),a=i("VU/8"),c=t,s=a(o.a,r.a,!1,c,"data-v-79d5880e",null);n.default=s.exports},"ec/T":function(e,n,i){var t=i("nBl+");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);i("rjj0")("54629b90",t,!0)},fxnj:function(e,n){!function(n,i){e.exports=function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):u(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):t?u(n,t):u(n,i)}function o(e){return e=e||{},e.appId=N.appId,e.verifyAppId=N.appId,e.verifySignType="sha1",e.verifyTimestamp=N.timestamp+"",e.verifyNonceStr=N.nonceStr,e.verifySignature=N.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=s(e,t),n.errMsg=t),i=i||{},i._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",N.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e,n){var i=e,t=h[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");o=n.substring(r+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}function d(e){if(e){for(var n=0,i=e.length;i>n;++n){var t=e[n],o=g[t];o&&(e[n]=o)}return e}}function u(e,n){if(!(!N.debug||n&&n.isInnerInvoke)){var i=h[e];i&&(e=i),n&&n._complete&&delete n._complete}}function l(e){if(!(w||A||N.debug||"6.0.2">b||_.systemType<0)){var n=new Image;_.appId=N.appId,_.initTime=x.initEndTime-x.initStartTime,_.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,G.getNetworkType({isInnerInvoke:!0,success:function(e){_.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+_.version+"&o="+_.isPreVerifyOk+"&s="+_.systemType+"&c="+_.clientVersion+"&a="+_.appId+"&n="+_.networkType+"&i="+_.initTime+"&p="+_.preVerifyTime+"&u="+_.url;n.src=i}})}}function p(){return(new Date).getTime()}function f(n){k&&(e.WeixinJSBridge?n():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){G.invoke||(G.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},G.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),v=e.document,I=v.title,S=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),w=!(!y.match("mac")&&!y.match("win")),A=-1!=S.indexOf("wxdebugger"),k=-1!=S.indexOf("micromessenger"),M=-1!=S.indexOf("android"),T=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),b=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),x={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},_={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:M?2:-1,clientVersion:b,url:encodeURIComponent(location.href)},N={},R={_completes:[]},V={state:0,data:{}};f(function(){x.initEndTime=p()});var E=!1,C=[],G={config:function(e){N=e,u("config",e);var n=!1!==N.check;f(function(){if(n)i(g.config,{verifyJsApiList:d(N.jsApiList)},function(){R._complete=function(e){x.preVerifyEndTime=p(),V.state=1,V.data=e},R.success=function(e){_.isPreVerifyOk=0},R.fail=function(e){R._fail?R._fail(e):V.state=-1};var e=R._completes;return e.push(function(){l()}),R.complete=function(n){for(var i=0,t=e.length;t>i;++i)e[i]();R._completes=[]},R}()),x.preVerifyStartTime=p();else{V.state=1;for(var e=R._completes,t=0,o=e.length;o>t;++t)e[t]();R._completes=[]}}),N.beta&&m()},ready:function(e){0!=V.state?e():(R._completes.push(e),!k&&N.debug&&e())},error:function(e){"6.0.2">b||(-1==V.state?e(V.data):R._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var i in n){var t=h[i];t&&(n[t]=n[i],delete n[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(M){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e}())},onMenuShareTimeline:function(e){t(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||I,desc:e.title||I,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(g.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||I,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(g.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||I,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(M){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},getLocation:function(e){},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,i("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(E=!1,C.length>0){var n=C.shift();wx.getLocalImgData(n)}},e}())):C.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(T){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e}())},openAddress:function(e){i(g.openAddress,{},function(){return e._complete=function(e){e=a(e)},e}())},openProductSpecificView:function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;r>o;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(g.addCard,{card_list:t},function(){return e._complete=function(e){var n=e.card_list;if(n){n=JSON.parse(n);for(var i=0,t=n.length;t>i;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:N.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;r>o;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(g.openCard,{card_list:t},e)},consumeAndShareCard:function(e){i(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(g.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){i(g.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){i(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){t(g.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},B=1,O={};return v.addEventListener("error",function(e){if(!M){var n=e.target,i=n.tagName,t=n.src;if("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){if(-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=B++,n["wx-id"]=o),O[o])return;O[o]=!0,wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!M){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(O[t]=!1)}}},!0),n&&(e.wx=e.jWeixin=G),G}}(n)}(window)},"nBl+":function(e,n,i){n=e.exports=i("FZ+f")(!1),n.push([e.i,".lite-divider[data-v-79d5880e]{border-bottom:1px solid #d4cfc8;padding-left:.15rem;overflow:hidden;padding:1px}.hidden-input[data-v-79d5880e]{height:.4rem;margin-top:.4rem;width:4rem;-background:#000;border:none;outline:none;background-color:transparent;font-size:.28rem;padding:0 .15rem .15rem}.scan-icon[data-v-79d5880e]{float:right;display:inline-block;height:.4rem;width:.4rem;background:url("+i("D1vH")+") no-repeat 50%;background-size:cover;margin-top:10px}.subBtn[data-v-79d5880e]{height:.88rem;line-height:.88rem;background-color:#ff8a00;font-size:.3rem;color:#fff;width:6.9rem;margin:.6rem auto 0}",""])},pWex:function(e,n,i){"use strict";var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"35px","margin-left":"15px","margin-right":"15px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"hidden-input",staticStyle:{"text-align":"left"},attrs:{placeholder:"请输入账单号"},domProps:{value:e.number},on:{input:function(n){n.target.composing||(e.number=n.target.value)}}}),e._v(" "),i("div",{staticClass:"scan-icon",on:{click:e.show}})]),e._v(" "),i("mt-button",{staticClass:"subBtn",attrs:{size:"large"},nativeOn:{click:function(n){e.submit(n)}}},[e._v("提交")])],1)},o=[],r={render:t,staticRenderFns:o};n.a=r}});