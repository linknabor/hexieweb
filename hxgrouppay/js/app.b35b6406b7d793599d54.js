webpackJsonp([8],{0:function(t,e){},"0AzE":function(t,e){},1:function(t,e){},EDgR:function(t,e){function n(t,e){var n=document.getElementsByTagName("html")[0],a=document.body.clientWidth||document.documentElement.clientWidth;n.style.fontSize=a/t*e+"px"}window.onload=function(){n(750,100)},window.onresize=function(){n(750,100)}},F2mW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),o=n.n(a),r=n("bOdI"),i=n.n(r),c=n("mvHQ"),u=n.n(c),p=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")({name:"App"},s,!1,function(t){n("F2mW")},null,null).exports,f=n("/ocq");p.default.use(f.a);var d=new f.a({routes:[{path:"/buy",name:"buy",component:function(t){return n.e(5).then(function(){var e=[n("cxV5")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/",name:"mulybuy",component:function(t){return n.e(3).then(function(){var e=[n("Srib")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/sgrouprule",name:"sgrouprule",component:function(t){return n.e(0).then(function(){var e=[n("Srgk")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"团购规则"}},{path:"/success",name:"success",component:function(t){return n.e(2).then(function(){var e=[n("eDZJ")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/cardrollbuy",name:"cardrollbuy",component:function(t){return n.e(4).then(function(){var e=[n("dGfM")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"优惠"}},{path:"/cardrollsuccess",name:"cardrollsuccess",component:function(t){return n.e(1).then(function(){var e=[n("9he0")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"优惠"}},{path:"/salespage",name:"salespage",component:function(t){return n.e(6).then(function(){var e=[n("6UMn")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"售卖"}}]});d.beforeEach(function(t,e,n){var a;("index"==t.matched[0].name||"register"==t.matched[0].name||common.checkRegisterStatus())&&(a=(a=t.meta.title)||p.default.prototype.common.newname,window.document.title=a,n())});var m,h=d,g=n("mtWM"),b=n.n(g),y=n("Rf8U"),v=n.n(y),w=(n("Qbok"),n("0AzE"),n("EDgR"),n("Au9i")),S=n.n(w),U=(n("d8/S"),n("lbHh")),x=n.n(U),C=n("pFYg"),A=n.n(C),j=n("XWX1"),k=n.n(j),E=(n("fxnj"),new k.a.Parser({explicitArray:!1,ignoreAttrs:!0}),{wxconfig:function(t,e,n,a){t.axios.post("/getUrlJsSign",{url:a}).then(function(t){var a=JSON.parse(t.data).result;e.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:n})}).catch(function(t){})},getData:function(t,e,n,a,o){void 0!==o&&"object"==(void 0===o?"undefined":A()(o))||(o={}),""!=n&&"string"==typeof n||(n="data"),t.axios.get(e,{params:o}).then(function(e){var o=JSON.parse(e.data);t[n]=o,"function"==typeof a&&a()}).catch(function(t){})},postData:function(t,e,n,a,o){void 0!==n&&"object"==(void 0===n?"undefined":A()(n))||(n={}),t.axios.post(e,n).then(function(e){var n=e.data;t[a]=JSON.parse(n),"function"==typeof o&&o()}).catch(function(e){t.loadingShow&&(t.loadingShow=!1),e.message})}});p.default.use(S.a),p.default.prototype.common=common,p.default.prototype.getUrlParam=getUrlParam,p.default.prototype.baseUrl=MasterConfig.C("baseUrl"),p.default.prototype.basePageUrl=MasterConfig.C("basePageUrl"),p.default.prototype.basePageUrlpay=MasterConfig.C("basePageUrlpay"),p.default.prototype.receiveData=E;var P=b.a.create({transformRequest:[function(t){return t=u()(t)}],headers:(m={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},i()(m,"Content-Type","application/json"),i()(m,"Accept","application/json"),m),baseURL:p.default.prototype.baseUrl,withCredentials:!0,transformResponse:[function(t){return t}]});P.interceptors.request.use(function(t){return x.a.get("session")&&(t.headers.Cookie=""+x.a.get("Cookie")),t},function(t){return o.a.reject(t)}),p.default.use(v.a,P),p.default.config.productionTip=!1,p.default.config.debug=!0,new p.default({el:"#app",router:h,components:{App:l},template:"<App/>"})},Qbok:function(t,e){},"d8/S":function(t,e){}},["NHnr"]);