webpackJsonp([6],{ET3F:function(e,n){},R4yB:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("mvHQ"),a=t.n(i),o=t("fxnj"),r=t.n(o),s=void 0,c={data:function(){return{bills:[],page:0,bgImage:this.common.GetImages("1")}},created:function(){s=this},mounted:function(){s.query()},components:{},methods:{query:function(){var e="/baojie/query/"+s.page;s.receiveData.getData(s,e,"res",function(){s.res.result&&(s.bills=s.res.result,s.page++)})},gotoDetail:function(e){var n=s.bills[e];s.$router.push({path:"/borderdetail",query:{billId:n.id}})},gotoPay:function(e){s.requestPay(e)},requestPay:function(e){var n="/baojie/pay/"+s.bills[e].id;this.axios.post(n,{}).then(function(n){var t=JSON.parse(n.data);0!=t.success?(r.a.config({debug:!1,appId:t.result.appId,timestamp:t.result.timestamp,nonceStr:t.result.nonceStr,signature:t.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({timestamp:t.result.timestamp,nonceStr:t.result.nonceStr,package:t.result.pkgStr,signType:t.result.signType,paySign:t.result.signature,success:function(n){s.notifyPayed(e),s.bills[e].statusStr="已支付",s.bills[e].status=2},fail:function(e){alert(a()(e))},cancel:function(e){alert("支付取消")}})):alert(t.message)}).catch(function(e){console.log(e)})},notifyPayed:function(e){var n="baojie/notifyPayed/"+s.bills[e].id;s.receiveData.postData(s,n,{},"res",function(){})},cancels:function(e){var n="/baojie/cancel/"+s.bills[e].id;s.receiveData.postData(s,n,{},"res",function(){s.res.success?(s.bills[e].statusStr="已取消",s.bills[e].status=8):alert(null==s.res.message?"订单取消失败，请稍后重试！":s.res.message)})},contact:function(){localtion.href="tel:021-50876295"}},computed:{}},l={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{addborder:0==e.bills.length}},[t("div",{staticClass:"orders"},[t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.bills.length,expression:"bills.length == 0"}],staticClass:"avatar-wrap rel ov"},[t("div",{staticClass:"filter-img avatar-wrap center-bg"},[t("img",{attrs:{src:e.bgImage,alt:""}})])]),e._v(" "),e._l(e.bills,function(n,i){return t("div",{key:n.id,on:{click:function(n){n.stopPropagation(),e.gotoDetail(i)}}},[t("div",{staticClass:"background_picture"}),e._v(" "),t("div",{staticClass:"order_num"},[t("span",{staticClass:"span1"},[e._v("订单编号："+e._s(n.orderNo))]),e._v(" "),t("span",{staticClass:"span2"},[e._v(e._s(n.statusStr))])]),e._v(" "),t("div",{staticClass:"product"},[t("img",{staticClass:"icon1",attrs:{src:n.billLogo}}),e._v(" "),t("p",{staticClass:"item"},[e._v("项目："+e._s(n.typeName))]),e._v(" "),t("p",{staticClass:"time_long"},[e._v("时长："+e._s(n.itemCount)+"小时")]),e._v(" "),t("p",{staticClass:"time"},[e._v("预约时间："+e._s(n.requireDateStr))])]),e._v(" "),t("div",{staticClass:"order_time"},[t("span",{staticClass:"span3"},[e._v("下单时间："+e._s(n.createDateStr))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==n.status,expression:"bill.status==1"}],staticClass:"span4 yellow_btn",on:{click:function(n){n.stopPropagation(),e.gotoPay(i)}}},[e._v("支付")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==n.status,expression:"bill.status==1"}],staticClass:"span4 mr10",on:{click:function(n){n.stopPropagation(),e.cancels(i)}}},[e._v("取消")]),e._v(" "),t("a",{attrs:{href:"tel:021-50876295"}},[t("span",{directives:[{name:"show",rawName:"v-show",value:2==n.status,expression:"bill.status==2"}],staticClass:"span4",on:{click:function(n){n.stopPropagation(),e.contact()}}},[e._v("联系客服")])])])])})],2)])},staticRenderFns:[]};var d=t("VU/8")(c,l,!1,function(e){t("ET3F")},"data-v-1ed1f0f9",null);n.default=d.exports},fxnj:function(e,n){var t;t=window,e.exports=function(e,n){function t(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,a(t),function(e){r(n,e,i)}):c(n,i)}function i(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),r(n,e,t)}):c(n,i||t)}function a(e){return(e=e||{}).appId=b.appId,e.verifyAppId=b.appId,e.verifySignType="sha1",e.verifyTimestamp=b.timestamp+"",e.verifyNonceStr=b.nonceStr,e.verifySignature=b.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=f[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n=t+":"+a}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",b.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function s(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=p[i];a&&(e[n]=a)}return e}}function c(e,n){if(!(!b.debug||n&&n.isInnerInvoke)){var t=f[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(){return(new Date).getTime()}function d(n){S&&(e.WeixinJSBridge?n():m.addEventListener&&m.addEventListener("WeixinJSBridgeReady",n,!1))}function u(){V.invoke||(V.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,a(t),i)},V.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}if(!e.jWeixin){var p={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},f=function(){var e={};for(var n in p)e[p[n]]=n;return e}(),m=e.document,g=m.title,v=navigator.userAgent.toLowerCase(),h=navigator.platform.toLowerCase(),_=!(!h.match("mac")&&!h.match("win")),y=-1!=v.indexOf("wxdebugger"),S=-1!=v.indexOf("micromessenger"),I=-1!=v.indexOf("android"),w=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),k=function(){var e=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),T={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:w?1:I?2:-1,clientVersion:k,url:encodeURIComponent(location.href)},b={},C={_completes:[]},M={state:0,data:{}};d(function(){T.initEndTime=l()});var x=!1,A=[],V={config:function(e){b=e,c("config",e);var n=!1!==b.check;d(function(){if(n)t(p.config,{verifyJsApiList:s(b.jsApiList)},function(){C._complete=function(e){T.preVerifyEndTime=l(),M.state=1,M.data=e},C.success=function(e){P.isPreVerifyOk=0},C.fail=function(e){C._fail?C._fail(e):M.state=-1};var e=C._completes;return e.push(function(){!function(e){if(!(_||y||b.debug||k<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=b.appId,P.initTime=T.initEndTime-T.initStartTime,P.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=t}})}}()}),C.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();C._completes=[]},C}()),T.preVerifyStartTime=l();else{M.state=1;for(var e=C._completes,i=0,a=e.length;i<a;++i)e[i]();C._completes=[]}}),u()},ready:function(e){0!=M.state?e():(C._completes.push(e),!S&&b.debug&&e())},error:function(e){k<"6.0.2"||(-1==M.state?e(M.data):C._fail=e)},checkJsApi:function(e){t("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(I){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=f[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){i(p.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||g,desc:e.title||g,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(p.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||g,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(p.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(p.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(p.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||g,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(I){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(p.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,A.length>0){var n=A.shift();wx.getLocalImgData(n)}},e))):A.push(e)},getNetworkType:function(e){t("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(p.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(w){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(p.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){t(p.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,card_ext:r.cardExt};i.push(s)}t(p.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:b.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,code:r.code};i.push(s)}t(p.openCard,{card_list:i},e)},consumeAndShareCard:function(e){t(p.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(p.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){t(p.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){t(p.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(p.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(p.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){d(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},L=1,N={};return m.addEventListener("error",function(e){if(!I){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=L++,n["wx-id"]=a),N[a])return;N[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})})}}},!0),m.addEventListener("load",function(e){if(!I){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(N[i]=!1)}}},!0),n&&(e.wx=e.jWeixin=V),V}}(t)}});