webpackJsonp([16],{"+ga/":function(e,t,n){"use strict";function i(e){n("z+Dq")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("fhb4"),r=n("2cQH"),a=n("VU/8"),c=i,s=a(o.a,r.a,!1,c,null,null);t.default=s.exports},"2cQH":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"location"},[n("div",{staticClass:"loccity"},[n("div",{staticClass:"loccity-t"},[n("div",{staticClass:"locity-t-t"},[e._v("定位城市")]),e._v(" "),n("div",{staticClass:"locity-t-b",attrs:{id:"btnd1"}},[e._v(e._s(e.value2))])]),e._v(" "),n("div",{staticClass:"hx"}),e._v(" "),n("div",{staticClass:"choosecity"},[n("div",{staticClass:"choose-t"},[e._v("可选城市")]),e._v(" "),n("div",{staticClass:"choose-b"},e._l(e.citys,function(t){return n("div",{staticClass:"choose-ct"},[n("div",{staticClass:"choose-ct-1",on:{click:function(n){e.dj(t)}}},[e._v(e._s(t.regionname))])])}))])])])},o=[],r={render:i,staticRenderFns:o};t.a=r},bEJa:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".location{width:100%;height:100vh;background:#eee}.loccity{width:94%;height:7rem;background:#fff;margin:auto;top:.2rem;position:relative}.loccity-t{width:100%;height:2rem}.locity-t-t{width:92%;height:1rem;font-size:.4rem;position:relative;padding:.24rem .34rem;letter-spacing:2px;top:.22rem}.locity-t-b{width:1rem;height:.48rem;font-size:.3rem;color:#ff9800;border:1.5px solid #ff9800;text-indent:2px;line-height:.48rem;left:1rem;top:1.2rem;position:absolute}.hx{width:80%;background:#d2d2d2;height:.02rem;top:1rem;margin:auto;margin-top:.2em}.choosecity{width:100%;top:.5rem;position:relative}.choose-t{width:92%;height:1rem;font-size:.4rem;position:relative;letter-spacing:2px;top:.22rem;margin:auto}.choose-b{width:100%;top:.32rem;position:relative}.choose-ct{width:33.3%;float:left;height:1rem}.choose-ct-1{width:1.3rem;height:.48rem;font-size:.3rem;color:#686868;border:1.5px solid #c4c4c4;text-align:center;line-height:.48rem;position:relative;margin:0 auto}",""])},fhb4:function(e,t,n){"use strict";var i=n("fxnj"),o=n.n(i),r=void 0;t.a={data:function(){return{value2:"",citys:[]}},created:function(){r=this},mounted:function(){r.city();var e=location.href.split("#")[0];r.receiveData.wxconfig(r,o.a,["getLocation"],e)},methods:{dj:function(e){var t=e.regionname;r.$router.push({path:"/Fontunit",query:{citydata1:t}})},city:function(){o.a.ready(function(){o.a.checkJsApi({jsApiList:["getLocation"],success:function(e){if(0==e.checkResult.getLocation)return void alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}}),o.a.getLocation({type:"wgs84",success:function(e){var t=e.latitude,n=e.longitude;r.getRegionurl(n,t)},cancel:function(e){console.log("用户取消")}}),o.a.error(function(e){alert("获取位置失败")})})},getRegionurl:function(e,t){r.receiveData.getData(r,"/getRegionUrl?coordinate="+e+","+t,"res",function(){r.res.success?(r.value2=r.res.result.address,r.citys=r.res.result.regionurl):alert("获取数据失败")})}}}},fxnj:function(e,t){!function(t,n){e.exports=function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,o(n),function(e){c(t,e,i)}):u(t,i)}function i(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),c(t,e,n)}):i?u(t,i):u(t,n)}function o(e){return e=e||{},e.appId=V.appId,e.verifyAppId=V.appId,e.verifySignType="sha1",e.verifyTimestamp=V.timestamp+"",e.verifyNonceStr=V.nonceStr,e.verifySignature=V.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=s(e,i),t.errMsg=i),n=n||{},n._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",V.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function s(e,t){var n=e,i=h[n];i&&(n=i);var o="ok";if(t){var r=t.indexOf(":");o=t.substring(r+1),"confirm"==o&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),o=o.replace(/_/g," "),o=o.toLowerCase(),("access denied"==o||"no permission to execute"==o)&&(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t=n+":"+o}function d(e){if(e){for(var t=0,n=e.length;n>t;++t){var i=e[t],o=g[i];o&&(e[t]=o)}return e}}function u(e,t){if(!(!V.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(e){if(!(w||I||V.debug||"6.0.2">C||M.systemType<0)){var t=new Image;M.appId=V.appId,M.initTime=b.initEndTime-b.initStartTime,M.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;t.src=n}})}}function p(){return(new Date).getTime()}function f(t){k&&(e.WeixinJSBridge?t():v.addEventListener&&v.addEventListener("WeixinJSBridgeReady",t,!1))}function m(){B.invoke||(B.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,o(n),i)},B.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})}if(!e.jWeixin){var g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in g)e[g[t]]=t;return e}(),v=e.document,y=v.title,S=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),w=!(!_.match("mac")&&!_.match("win")),I=-1!=S.indexOf("wxdebugger"),k=-1!=S.indexOf("micromessenger"),T=-1!=S.indexOf("android"),x=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),C=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:T?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},V={},L={_completes:[]},A={state:0,data:{}};f(function(){b.initEndTime=p()});var P=!1,O=[],B={config:function(e){V=e,u("config",e);var t=!1!==V.check;f(function(){if(t)n(g.config,{verifyJsApiList:d(V.jsApiList)},function(){L._complete=function(e){b.preVerifyEndTime=p(),A.state=1,A.data=e},L.success=function(e){M.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):A.state=-1};var e=L._completes;return e.push(function(){l()}),L.complete=function(t){for(var n=0,i=e.length;i>n;++n)e[n]();L._completes=[]},L}()),b.preVerifyStartTime=p();else{A.state=1;for(var e=L._completes,i=0,o=e.length;o>i;++i)e[i]();L._completes=[]}}),V.beta&&m()},ready:function(e){0!=A.state?e():(L._completes.push(e),!k&&V.debug&&e())},error:function(e){"6.0.2">C||(-1==A.state?e(A.data):L._fail=e)},checkJsApi:function(e){var t=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e};n("checkJsApi",{jsApiList:d(e.jsApiList)},function(){return e._complete=function(e){if(T){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=t(e)},e}())},onMenuShareTimeline:function(e){i(g.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){i(g.onMenuShareAppMessage,{complete:function(){n("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){i(g.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){i(g.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){i(g.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){i("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){i("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var t=e.localIds;t&&(e.localIds=JSON.parse(t))}},e}())},getLocation:function(e){},previewImage:function(e){n(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===P?(P=!0,n("getLocalImgData",{localId:e.localId},function(){return e._complete=function(e){if(P=!1,O.length>0){var t=O.shift();wx.getLocalImgData(t)}},e}())):O.push(e)},getNetworkType:function(e){var t=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};n("getNetworkType",{},function(){return e._complete=function(e){e=t(e)},e}())},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},n(g.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){n("hideOptionMenu",{},e)},showOptionMenu:function(e){n("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},n("closeWindow",{},e)},hideMenuItems:function(e){n("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){n("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){n("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){n("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},n("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){if(x){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e}())},openAddress:function(e){n(g.openAddress,{},function(){return e._complete=function(e){e=a(e)},e}())},openProductSpecificView:function(e){n(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],o=0,r=t.length;r>o;++o){var a=t[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}n(g.addCard,{card_list:i},function(){return e._complete=function(e){var t=e.card_list;if(t){t=JSON.parse(t);for(var n=0,i=t.length;i>n;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e}())},chooseCard:function(e){n("chooseCard",{app_id:V.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){for(var t=e.cardList,i=[],o=0,r=t.length;r>o;++o){var a=t[o],c={card_id:a.cardId,code:a.code};i.push(c)}n(g.openCard,{card_list:i},e)},consumeAndShareCard:function(e){n(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){n(g.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){n(g.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){n(g.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){n(g.stopSearchBeacons,{},e)},onSearchBeacons:function(e){i(g.onSearchBeacons,e)},openEnterpriseChat:function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}},E=1,R={};return v.addEventListener("error",function(e){if(!T){var t=e.target,n=t.tagName,i=t.src;if("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){if(-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=E++,t["wx-id"]=o),R[o])return;R[o]=!0,wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}}}},!0),v.addEventListener("load",function(e){if(!T){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(R[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=B),B}}(t)}(window)},"z+Dq":function(e,t,n){var i=n("bEJa");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("3d777f9e",i,!0)}});