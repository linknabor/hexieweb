webpackJsonp([12],{"0AzE":function(e,t){},EDgR:function(e,t){function n(e,t){var n=document.getElementsByTagName("html")[0],a=document.body.clientWidth||document.documentElement.clientWidth;n.style.fontSize=a/e*t+"px",console.log("屏幕宽度= "+a)}window.onload=function(){n(750,100)},window.onresize=function(){n(750,100)}},F2mW:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("//Fk"),o=n.n(a),i=n("bOdI"),c=n.n(i),r=n("mvHQ"),u=n.n(r),l=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")({name:"App"},s,!1,function(e){n("F2mW")},null,null).exports,f=n("/ocq");l.default.use(f.a);var m=new f.a({routes:[{path:"/buy",name:"buy",component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("cxV5")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/",name:"mulybuy",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("Srib")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/sgrouprule",name:"sgrouprule",component:function(e){return n.e(2).then(function(){var t=[n("Srgk")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"团购规则"}},{path:"/success",name:"success",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("eDZJ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:""}},{path:"/cardrollbuy",name:"cardrollbuy",component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("dGfM")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"优惠"}},{path:"/cardrollsuccess",name:"cardrollsuccess",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("9he0")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"优惠"}},{path:"/salespage",name:"salespage",component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("6UMn")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"招募社区合伙人"}},{path:"/salessuccess",name:"salessuccess",component:function(e){return n.e(6).then(function(){var t=[n("PKPq")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"欢迎加入"}},{path:"/confirmation",name:"confirmation",component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("LVZS")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"确定订单"}},{path:"/coupon",name:"coupon",component:function(e){return n.e(9).then(function(){var t=[n("baKV")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"优惠券"}}]});m.beforeEach(function(e,t,n){var a;("index"==e.matched[0].name||"register"==e.matched[0].name||"salespage"==e.matched[0].name||"salessuccess"==e.matched[0].name||"conventions"==e.matched[0].name||common.checkRegisterStatus())&&(a=(a=e.meta.title)||l.default.prototype.common.newname,window.document.title=a,n())});var d,h=m,g=n("mtWM"),y=n.n(g),b=n("Rf8U"),v=n.n(b),w=(n("Qbok"),n("0AzE"),n("EDgR"),n("XWJI"),n("Au9i")),P=n.n(w),S=(n("d8/S"),n("lbHh")),U=n.n(S),x=n("pFYg"),A=n.n(x),W={wxconfig:function(e,t,n,a){e.axios.post("/getUrlJsSign",{url:a}).then(function(e){var a=JSON.parse(e.data).result;t.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:n})}).catch(function(e){console.log("fail",e)})},getData:function(e,t,n,a,o){void 0!==o&&"object"==(void 0===o?"undefined":A()(o))||(o={}),""!=n&&"string"==typeof n||(n="data"),e.axios.get(t,{params:o}).then(function(t){var o=JSON.parse(t.data);l.default.prototype.dealWithAjaxData(null,o,function(){},function(){}),e[n]=o,"function"==typeof a&&a()}).catch(function(e){})},postData:function(e,t,n,a,o){void 0!==n&&"object"==(void 0===n?"undefined":A()(n))||(n={}),e.axios.post(t,n).then(function(t){var n=t.data;l.default.prototype.dealWithAjaxData(null,n,function(){},function(){}),e[a]=JSON.parse(n),"function"==typeof o&&o()}).catch(function(t){e.loadingShow&&(e.loadingShow=!1),t.message,console.log("fail",t)})}};l.default.use(P.a),l.default.prototype.common=common,l.default.prototype.getUrlParam=getUrlParam,l.default.prototype.baseUrl=MasterConfig.C("baseUrl"),l.default.prototype.basePageUrl=MasterConfig.C("basePageUrl"),l.default.prototype.basePageUrlpay=MasterConfig.C("basePageUrlpay"),l.default.prototype.dealWithAjaxData=dealWithAjaxData,l.default.prototype.receiveData=W;var j=y.a.create({transformRequest:[function(e){return e=u()(e)}],headers:(d={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},c()(d,"Content-Type","application/json"),c()(d,"Accept","application/json;"),d),baseURL:l.default.prototype.baseUrl,withCredentials:!0,transformResponse:[function(e){return e}]});j.interceptors.request.use(function(e){return U.a.get("session")&&(e.headers.Cookie=""+U.a.get("Cookie")),e},function(e){return o.a.reject(e)}),l.default.use(v.a,j),l.default.config.productionTip=!1,l.default.config.debug=!0,new l.default({el:"#app",router:h,components:{App:p},template:"<App/>"})},Qbok:function(e,t){},XWJI:function(e,t){},"d8/S":function(e,t){}},["NHnr"]);