webpackJsonp([3],{Qt9A:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("a1VQ"),a=e.n(i),r=e("tXuv"),o=e("lbHh"),l=e.n(o),n=void 0,c={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},service_list:[],login:!0,oriapp:"",cardService:"",qrCode:"",point:0,cardStatus:"",donghu:!1,serviceOperator:!1,user_info:{avatar:a.a,nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"}}},created:function(){n=this},mounted:function(){this.User(),n.oriApp(),n.qrCodePayService()},components:{},methods:{initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/8424","Data",function(){})},User:function(){var t="userInfo?oriApp="+n.getUrlParam("oriApp");this.common.invokeApi("GET",t,null,function(){},function(t){if(t.success&&null==t.result)reLogin();else{n.donghu=t.result.donghu,n.user=t.result,n.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:n.user_info.avatar,n.user.name=""!=t.result.name?t.result.name:n.user_info.nickname,n.qrCode=t.result.qrCode,n.cardService=t.result.cardService,n.serviceOperator=t.result.serviceOperator,n.user.point<0?n.point=0:n.point=n.user.point,n.login=!1,r.a.$emit("sends",t.result.iconList),n.common.updatecookie(t.result.cardStatus,t.result.cardService,t.result.id,t.result.appid,t.result.cspId,t.result.sectId,t.result.cardPayService,t.result.bgImageList,t.result.wuyeTabsList);var s=l.a.get("cardStatus");alert(s),console.log("2222")}},function(){n.login=!1,n.user={},n.user.headimgurl=n.user_info.avatar,n.user.name=n.user_info.nickname})},qrCodePayService:function(){n.receiveData.getData(n,"/qrCodePayService","res",function(){n.res.success&&(n.service_list=n.res.result.service_list)})},gotoEdit:function(){n.cardService?n.user.tel||"1"!=n.user.cardStatus&&null!=n.user.cardStatus&&"0"!=n.user.cardStatus?n.user.tel||"2"!=n.user.cardStatus?!n.user.tel||"3"!=n.user.cardStatus&&"4"!=n.user.cardStatus?!n.user.tel||"1"!=n.user.cardStatus&&null!=n.user.cardStatus&&"0"!=n.user.cardStatus?n.user.tel&&"2"==n.user.cardStatus&&n.receiveData.getData(n,"/card/activateUrlOnMenu?oriApp="+n.getUrlParam("oriApp"),"res",function(){n.res.success?location.href=n.res.result:alert(n.res.message)}):n.$router.push({path:"/welfare"}):n.receiveData.getData(n,"/card/activateUrlOnMenu?oriApp="+n.getUrlParam("oriApp"),"res",function(){n.res.success?location.href=n.res.result:alert(n.res.message)}):n.$router.push({path:"/register"}):n.$router.push({path:"/welfare"}):n.$router.push({path:"/bindphone"})},coupons:function(){n.$router.push({path:"/coupons"})},gotoAddress:function(){n.$router.push({path:"/addresses"})},Notice:function(){n.$router.push({path:"/notices"})},oriApp:function(){n.oriapp=n.common.getoriApp()}},computed:{}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ind"},[i("div",{staticClass:"avatar-wrap rel ov"},[i("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[i("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),i("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[i("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),i("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.cardService,expression:"cardService==false"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.cardService,expression:"cardService==true"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.point))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("积分")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("现金劵")])])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/orders"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),i("div",{attrs:{id:"module-list"}},[t.donghu?t._e():i("div",{staticClass:"module-item-wrap"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/onsaleorders"}},[i("div",{staticClass:"module-logo logo1"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("商品订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap",class:{moduledh:t.donghu}},[t.donghu?i("a",{staticClass:"module-itemdh",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/grouporders"}},[t._m(0),t._v(" "),i("div")]):i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/grouporders"}},[i("div",{staticClass:"module-logo logo2"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("团购订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap",class:{moduledh:t.donghu}},[t.donghu?i("a",{staticClass:"module-itemdh",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/homeorders"}},[t._m(1)]):i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/homeorders"}},[i("div",{staticClass:"module-logo logo3"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])])]),t._v(" "),t.donghu?i("div",{staticClass:"info-wrap"},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+this.common.getoriApp()+"#/mysteward?n=2"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("报修")]),t._v(" "),t._m(2)]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+this.common.getoriApp()+"#/mysteward?n=0"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("服务需求")]),t._v(" "),t._m(3)]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+this.common.getoriApp()+"#/mysteward?n=1"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("意见建议")]),t._v(" "),t._m(4)])]):i("div",[i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myservice"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的服务单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看订单    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.serviceOperator||t.service_list.length>0,expression:"serviceOperator || service_list.length > 0"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/service"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是服务人员")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看订单    ")])]),t._v(" "),i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的维修单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),i("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[i("span",{attrs:{id:"mypublic"}}),t._v("查看发布    \n        ")])])],1),t._v(" "),i("div",{staticClass:"info-wrap"},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+t.oriapp+"#/Myhouse"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[i("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:"+t.user.officeTel}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(5)]),t._v(" "),i("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[i("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[t._v("长按关注公众号，尊享更多服务和商品")]),t._v(" "),i("img",{staticStyle:{width:"200px"},attrs:{src:t.qrCode}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticStyle:{background:"rgba(0,0,0,0.5)",display:"none",width:"100%",height:"100%",top:"0rem",position:"fixed","z-index":"999"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],attrs:{id:"login"}},[i("img",{staticStyle:{width:"100%","vertical-align":"middle"},attrs:{src:e("l3R5")}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"module-logodh logo4"},[s("div",{staticClass:"module-titledh fs14"},[this._v("团购订单")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"module-logodh logo5"},[s("div",{staticClass:"module-titledh fs14"},[this._v("服务订单")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"fr fs14 left_color"},[s("span",{attrs:{id:"mypublic"}}),this._v("查看消息    \n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"fr fs14 left_color"},[s("span",{attrs:{id:"mypublic"}}),this._v("查看消息    \n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"fr fs14 left_color"},[s("span",{attrs:{id:"mypublic"}}),this._v("查看消息    \n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])}]};var p=e("VU/8")(c,u,!1,function(t){e("gIif")},"data-v-4368ace7",null);s.default=p.exports},a1VQ:function(t,s,e){t.exports=e.p+"static/img/logo.b56374a.jpg"},gIif:function(t,s){},tXuv:function(t,s,e){"use strict";var i=new(e("7+uW").default);s.a=i}});