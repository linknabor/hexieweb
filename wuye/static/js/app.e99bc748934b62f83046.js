webpackJsonp([25],{"/k1C":function(t,e){},0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"0AzE":function(t,e){},"2Uyi":function(t,e,n){"use strict";(function(t){function o(t,e,n,o){if(common.log(t,e),e.success)return void n(e);switch(""+e.errorCode){case"40001":a();break;case"40002":alert("40002");break;case"42032":common.wechatAuthorize();break;default:o(e)}}function a(){setTimeout(function(){console.log("waiting 1s for relogin.")},1e3),r("UID","",0),common.login(!0)}function i(t){var e,n;return document.cookie.length>0&&-1!=(e=document.cookie.indexOf(t+"="))?(e=e+t.length+1,n=document.cookie.indexOf(";",e),-1==n&&(n=document.cookie.length),unescape(document.cookie.substring(e,n))):""}function r(t,e,n){var o=t+"="+e+"; ",a="";null!==n&&void 0!==n&&(a="expires="+new Date(1e3*n)+"; "),document.cookie=o+a+"path=/"}function c(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):""}function u(){var t=i("tel");return t&&"null"!=t}function s(){var t=location.origin+common.removeParamFromUrl(["from","bind","code","share_id","isappinstalled","state","m","c","a"]),e="";e=c("oriApp")?"oriApp="+c("oriApp"):"",location.href=m.C("basePageUrl")+"person/index.html?"+e+"#/register?comeFrom="+encodeURIComponent(t)}n.d(e,"b",function(){return common}),n.d(e,"a",function(){return m}),n.d(e,"c",function(){return c});var l=n("mvHQ"),p=n.n(l),m=function(){var t={baseUrl:/127|test/.test(location.origin)?"https://test.e-shequ.com/wechat/hexie/wechat/":/uat/.test(location.origin)?"https://uat.e-shequ.com/wechat/hexie/wechat/":"https://www.e-shequ.cn/wechat/hexie/wechat/",basePageUrl:/127|test/.test(location.origin)?"https://test.e-shequ.com/weixin/":/uat/.test(location.origin)?"https://uat.e-shequ.com/hexie/weixin/":"https://www.e-shequ.cn/weixin/",basePageUrlpay:/127|test/.test(location.origin)?"https://test.e-shequ.com/weixin/pay/":/uat/.test(location.origin)?"https://uat.e-shequ.com/pay/":"https://www.e-shequ.cn/weixin/",payPageFolder:/127|test/.test(location.origin)?"https://test.e-shequ.com/pay/":/uat/.test(location.origin)?"https://uat.e-shequ.com/pay/":"https://www.e-shequ.cn/pay/",appId:/127|test/.test(location.origin)?"wx95f46f41ca5e570e":/uat/.test(location.origin)?"wx9ffe0a2b5a64a285":"wxbd214f5765f346c1",componentAppId:/127|test/.test(location.origin)?"wx4d706a1a7a139d1f":/uat/.test(location.origin)?"wx4d706a1a7a139d1f":"wx0d408844b35d85e2",oauthUrl:"https://open.weixin.qq.com/connect/oauth2/authorize?",oauthUrlPostFix:"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect",oauthUrlPostSilent:"&response_type=code&scope=snsapi_base&state=123#wechat_redirect",baidu_map_key:"RUWUgrEEF5VjoaWsstMMZwOD",is_debug:!0},e={};return e.C=function(e){return t[e]},e}(),d=(function(){var t={download:{},pullload_text:{load_text:"正在玩命的加载...",no_orders:"没有更多的订单了...",no_tuan_orders:"没有更多的团订单了...",no_goods:"更多新品正在陆续推出..."},user_info:{avatar:"https://www.e-shequ.cn/weixin/static/images/logo.jpg",nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"},coupon:{seedImg:"https://www.e-shequ.cn/weixin/static/img/banner/banner_market_shuiguo.jpg"}},e={};e.C=function(e){return t[e]}}(),!0);window.common={newname:"社区",isDebug:!1,getApi:function(t){var e=parseInt(i("BackendPort"));return m.C("baseUrl")+(e?":"+e:"")+"/"+t},invokeApi:function(e,n,a,i,r,c){if(common.alert("url: "+n),d){(null===i||void 0===i)&&(i=function(){}),(null===r||void 0===r)&&(r=function(){}),(null===c||void 0===c)&&(c=function(){});var u={url:this.getApi(n),type:e,xhrFields:{withCredentials:!0},dataType:"json",beforeSend:i,success:function(t){common.alert("success data: "+p()(t)),o(n,t,r,c)},error:function(t){common.alert("error data: "+p()(t))}};null!==a&&void 0!==a&&(u.data=p()(a),("PUT"==e||"POST"==e)&&(u.contentType="application/json; charset=UTF-8")),t.ajax(u)}},initWechat:function(t){var e={url:window.location.href.split("#")[0]},n=function(e){wx.config({appId:e.result.appId,timestamp:e.result.timestamp,nonceStr:e.result.nonceStr,signature:e.result.signature,jsApiList:t})},o=function(t){alert(""==t.message?"获取支付权限失败！":t.message)};common.invokeApi("POST","getUrlJsSign",e,null,n,o)},localSet:function(t,e){window.localStorage.setItem(t,e)},GetImages:function(t){var e=window.localStorage.getItem(t);if(void 0==e||""==e){var n="userInfo?oriApp="+c("oriApp"),o=function(t){for(var e=(new Date).getTime()/1e3+2592e3,n=0;n<t.result.bgImageList.length;n++)window.localStorage.setItem(t.result.bgImageList[n].type,t.result.bgImageList[n].imgUrl,e);location.reload()},a=function(){};common.invokeApi("GET",n,null,null,o,a)}else e=window.localStorage.getItem(t);return e},getoriApp:function(){return c("oriApps")?"oriApp="+c("oriApps"):""},login:function(){var t="",e=this._GET().code,n=c("oriApp"),o={oriApp:n};if(common.alert("code: "+e),void 0===e){var a=location.origin+common.removeParamFromUrl(["from","bind","code","share_id","isappinstalled","state","m","c","a"])+common.addParamHsah(),i=m.C("oauthUrl"),r=m.C("oauthUrlPostFix"),u=i+"appid=",s=m.C("appId");u+=n&&n!=s?n+"&component_appid="+m.C("componentAppId"):s,u+="&redirect_uri="+encodeURIComponent(a)+r+"#wechat_redirect",console.log("url:"+u),location.href=u}else common.alert("start api login"),this.invokeApi("POST","login/"+e,o,function(){d=!1},function(e){common.updateUserStatus(e.result),d=!0,document.URL.indexOf(".html?t=")<0&&(t=(new Date).valueOf());var n=location.origin+common.removeParamFromUrl(["code"]);n.indexOf("?")<0?n+="?":n+="&",""!=t?n+="t="+t:n=n.substring(0,n.length-1),n+=common.addParamHsah(),location.href=n})},updateUserStatus:function(t){var e=(new Date).getTime()/1e3+2592e3;r("UID",t.uid,e),r("currentAddrId",t.currentAddrId,e),r("tel",t.tel,e),r("shareCode",t.shareCode,e),r("appId",t.appId)},checkRegisterStatus:function(){return i("UID")?!!u()||(alert("请先完成注册！"),s(),!1):(common.login(),!1)},hasRegister:function(){return i("UID")&&u()},_GET:function(){var t=location.search,e={};if(""===t||void 0===t)return e;t=t.substr(1).split("&");for(var n in t){var o=t[n].split("=");e[o[0]]=o[1]}return e.from&&delete e.code,e},log:function(){for(var t=arguments.length,e=0;t>e;e++)console.log(arguments[e])},alert:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){""===i("DevDebug")?console.log(t):alert(t)}),addParamObject:function(t,e,n){return t[e]=n,t},removeParamObject:function(t){var e=common._GET();common.log(e);for(var n in t)delete e[t[n]];return e},addParamHsah:function(){return location.hash},removeParamFromUrl:function(t){return location.pathname+common.buildUrlParamString(common.removeParamObject(t))},buildUrlParamString:function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e=e.slice(0,e.length-1),""===e||void 0===e?"":"?"+e},wechatAuthorize:function(){var t=m.C("appId"),e=location.origin+common.removeParamFromUrl(["from","code","share_id","isappinstalled","state","m","c","a"]),n=m.C("oauthUrl");end=m.C("oauthUrlPostFix"),location.href=n+"appid="+t+"&redirect_uri="+encodeURIComponent(e)+end+"#wechat_redirect"},initShareConfig:function(t,e,n,o,a){if(e.indexOf(m.C("basePageUrl"))>=0&&e.indexOf("shareCode")<0&&null!=i("shareCode")&&""!=i("shareCode")){e.indexOf("?")<0&&(e+="?"),e.indexOf("?")<e.length-1&&(e+="&"),e=e+"shareCode="+i("shareCode");var r=i("appId");e+="&oriApp="+r}a.ready(function(){a.onMenuShareTimeline({title:t,link:e,imgUrl:n}),a.onMenuShareAppMessage({title:t,desc:o,link:e,imgUrl:n})})}},function(){"undefined"==i("appId")&&(common.newname="社区")}(),function(){var t=common._GET(),e=t.bind,n=t.code;!e&&n&&common.login()}()}).call(e,n("7t+N"))},CJq4:function(t,e){},EDgR:function(t,e){function n(t,e){var n=document.getElementsByTagName("html")[0],o=document.body.clientWidth||document.documentElement.clientWidth;n.style.fontSize=o/t*e+"px"}window.onload=function(){n(750,100)},window.onresize=function(){n(750,100)}},M93x:function(t,e,n){"use strict";function o(t){n("QsXp")}var a=n("xJD8"),i=n("hv+w"),r=n("VU/8"),c=o,u=r(a.a,i.a,!1,c,null,null);e.a=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("//Fk"),a=n.n(o),i=n("mvHQ"),r=n.n(i),c=n("7+uW"),u=n("M93x"),s=n("YaEn"),l=n("j1ja"),p=(n.n(l),n("Au9i")),m=n.n(p),d=n("d8/S"),f=(n.n(d),n("7t+N")),h=(n.n(f),n("mtWM")),g=n.n(h),v=n("lbHh"),w=n.n(v),b=n("Rf8U"),y=n.n(b),U=n("Qbok"),x=(n.n(U),n("0AzE")),P=(n.n(x),n("EDgR")),C=(n.n(P),n("CJq4")),S=(n.n(C),n("/k1C")),I=(n.n(S),n("NHyc")),A=n("2Uyi");n("hKoQ").polyfill(),n("MU8w"),c.default.use(m.a),c.default.prototype.receiveData=I.a,c.default.prototype.common=A.b,c.default.prototype.getUrlParam=A.c,c.default.prototype.baseUrl=A.a.C("baseUrl"),c.default.prototype.basePageUrl=A.a.C("basePageUrl"),c.default.prototype.basePageUrlpay=A.a.C("basePageUrlpay"),c.default.prototype.$axios=g.a;var _=g.a.create({transformRequest:[function(t){return t=r()(t)}],headers:{"Content-Type":"application/json",Accept:"application/json"},baseURL:c.default.prototype.baseUrl,withCredentials:!0,transformResponse:[function(t){return t}]});_.interceptors.request.use(function(t){return w.a.get("session")&&(t.headers.Cookie=""+w.a.get("Cookie")),t},function(t){return a.a.reject(t)}),c.default.use(y.a,_),c.default.config.productionTip=!1,c.default.config.debug=!0,new c.default({el:"#app",router:s.a,template:"<App/>",components:{App:u.a}})},NHyc:function(t,e,n){"use strict";var o=n("pFYg"),a=n.n(o),i={wxconfig:function(t,e,n,o){t.axios.post("/getUrlJsSign",{url:o}).then(function(t){var o=JSON.parse(t.data),a=o.result;e.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:n})}).catch(function(t){console.log("fail",t)})},chooseImage:function(t,e,n){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){t.localIds},fail:function(t){console.log("网络不稳定 ，请刷新重试！")}})},scan:function(t,e,n){e.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){var o=e.resultStr;o.indexOf("CODE")>=0&&(o=o.split(",")[1]),t[n]=o},fail:function(t){console.log("网络不稳定 ，请刷新重试！")}})},getData:function(t,e,n,o,i){void 0!==i&&"object"==(void 0===i?"undefined":a()(i))||(i={}),""!=n&&"string"==typeof n||(n="data"),t.axios.get(e,{params:i}).then(function(e){var a=JSON.parse(e.data);t[n]=a,"function"==typeof o&&o()}).catch(function(t){console.log(t)})},postData:function(t,e,n,o,i){void 0!==n&&"object"==(void 0===n?"undefined":a()(n))||(n={}),t.axios.post(e,n).then(function(e){var n=e.data;t[o]=JSON.parse(n),"function"==typeof i&&i()}).catch(function(e){t.loadingShow&&(t.loadingShow=!1),e.message,console.log("fail",e)})}};e.a=i},Qbok:function(t,e){},QsXp:function(t,e){},YaEn:function(t,e,n){"use strict";function o(t){t=t||a.default.prototype.common.newname,window.document.title=t}var a=n("7+uW"),i=n("/ocq"),r=new i.a({routes:[{path:"/",name:"index",component:function(t){return n.e(3).then(function(){var e=[n("2NXm")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/message",name:"message",component:function(t){return n.e(18).then(function(){var e=[n("vrdR")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/Myhouse",name:"Myhouse",component:function(t){return n.e(19).then(function(){var e=[n("P7nz")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"我的房子"}},{path:"/identHouse",name:"IdentHouse",component:function(t){return n.e(6).then(function(){var e=[n("Xb2P")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"绑定房子"}},{path:"/addHouse",name:"AddHouse",component:function(t){return n.e(13).then(function(){var e=[n("VNUM")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"添加房子"}},{path:"/bindHouse/:number",name:"BindHouse",component:function(t){return n.e(20).then(function(){var e=[n("Wqrx")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"绑定房子"}},{path:"/Pay",name:"Pay",component:function(t){return n.e(0).then(function(){var e=[n("DC+l")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"缴费页面"}},{path:"/payStop",name:"payStop",component:function(t){return n.e(1).then(function(){var e=[n("0WKl")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"停车缴费"}},{path:"/fontUnit",name:"fontUnit",component:function(t){return n.e(7).then(function(){var e=[n("0zgW")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"查询缴费"}},{path:"/location",name:"location",component:function(t){return n.e(17).then(function(){var e=[n("+ga/")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"查询缴费"}},{path:"/paymentquery",name:"paymentquery",component:function(t){return n.e(12).then(function(){var e=[n("uX9+")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"缴费查询"}},{path:"/checkPay",name:"checkPay",component:function(t){return n.e(2).then(function(){var e=[n("sAve")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"绑定房子"}},{path:"/repair",name:"repair",component:function(t){return n.e(5).then(function(){var e=[n("a1UO")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/submitSuccess",name:"submitSuccess",component:function(t){return n.e(16).then(function(){var e=[n("X3s/")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/mysteward",name:"mysteward",component:function(t){return n.e(10).then(function(){var e=[n("5yvG")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/threadDetail",name:"threadDetail",component:function(t){return n.e(8).then(function(){var e=[n("s7+i")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/maintain",name:"maintain",component:function(t){return n.e(11).then(function(){var e=[n("pZYX")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/catalog",name:"catalogs",component:function(t){return n.e(4).then(function(){var e=[n("kYtN")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/registration",name:"registrations",component:function(t){return n.e(21).then(function(){var e=[n("/DPE")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/mask",name:"masks",component:function(t){return n.e(22).then(function(){var e=[n("Rc5/")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"口罩登记预约"}},{path:"/delivery",name:"deliverys",component:function(t){return n.e(23).then(function(){var e=[n("vaBn")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"到货通知"}},{path:"/resSubmit",name:"resSubmits",component:function(t){return n.e(15).then(function(){var e=[n("PYHj")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/reservation",name:"reservations",component:function(t){return n.e(14).then(function(){var e=[n("+YMG")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"预约服务"}},{path:"/resReply",name:"resReplys",component:function(t){return n.e(9).then(function(){var e=[n("M6AR")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}}]});r.beforeEach(function(t,e,n){"index"!=t.matched[0].name&&t.matched[0].name,o(t.meta.title),n()}),a.default.use(i.a),e.a=r},"d8/S":function(t,e){},"hv+w":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{}},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{}}}},[0]);