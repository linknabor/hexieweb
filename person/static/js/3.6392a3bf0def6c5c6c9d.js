webpackJsonp([3],{"4PMs":function(t,s){},Qt9A:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("mvHQ");var i=e("a1VQ"),a=e.n(i),r=e("tXuv"),o=e("lbHh"),n=e.n(o),l=void 0,c={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},login:!0,oriapp:"",cardService:"",qrCode:"",point:0,cardStatus:"",isMember:!1,user_info:{avatar:a.a,nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"}}},created:function(){l=this},mounted:function(){this.User(),this.updateCouponStatus(),l.oriApp()},components:{},methods:{panduan:function(){l.receiveData.getData(l,"/getMember","res",function(t){"0"==l.res[0].status&&(l.isMember=!0,l.enddate=l.res[0].enddate)})},initSession4Test:function(){l.receiveData.getData(l,"/initSession4Test/46","Data",function(){})},User:function(){var t="userInfo?oriApp="+l.getUrlParam("oriApp");this.common.invokeApi("GET",t,null,function(){},function(t){t.success&&null==t.result&&reLogin(),l.user=t.result,l.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:l.user_info.avatar,l.user.name=""!=t.result.name?t.result.name:l.user_info.nickname,l.qrCode=t.result.qrCode,l.cardService=t.result.cardService,l.user.point<0?l.point=0:l.point=l.user.point,l.login=!1,r.a.$emit("sends",t.result.iconList),n.a.set("cardStatus",t.result.cardStatus,s);for(var s=(new Date).getTime()/1e3+2592e3,e=0;e<t.result.bgImageList.length;e++)l.common.localSet(t.result.bgImageList[e].type,t.result.bgImageList[e].imgUrl,s)},function(){l.login=!1,l.user={},l.user.headimgurl=l.user_info.avatar,l.user.name=l.user_info.nickname})},updateCouponStatus:function(){l.common.invokeApi("GET","updateCouponStatus",null,null,function(t){},function(){})},gotoEdit:function(){l.cardService?l.user.tel||"1"!=l.user.cardStatus&&null!=l.user.cardStatus?l.user.tel||"2"!=l.user.cardStatus?!l.user.tel||"3"!=l.user.cardStatus&&"4"!=l.user.cardStatus?!l.user.tel||"1"!=l.user.cardStatus&&null!=l.user.cardStatus?l.user.tel&&"2"==l.user.cardStatus&&l.receiveData.getData(l,"/card/activateUrl","res",function(){l.res.success?location.href=l.res.result:alert(l.res.message)}):l.$router.push({path:"/welfare"}):l.receiveData.getData(l,"/card/activateUrl","res",function(){l.res.success?location.href=l.res.result:alert(l.res.message)}):l.$router.push({path:"/register"}):l.$router.push({path:"/welfare"}):l.$router.push({path:"/bindphone"})},coupons:function(){l.$router.push({path:"/coupons"})},gotoAddress:function(){l.$router.push({path:"/addresses"})},Notice:function(){l.$router.push({path:"/notices"})},oriApp:function(){l.oriapp=l.common.getoriApp()}},computed:{}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ind"},[e("div",{staticClass:"avatar-wrap rel ov"},[e("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[e("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),e("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[e("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),e("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.cardService,expression:"cardService==false"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[e("div",{staticClass:"point-item-wrap"},[e("div",{staticClass:"point-item"},[e("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),e("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),e("div",{staticClass:"point-item-wrap"},[e("div",{staticClass:"point-item"},[e("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),e("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),e("div",{staticClass:"point-item-wrap"},[e("div",{staticClass:"point-item",on:{click:t.coupons}},[e("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),e("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.cardService,expression:"cardService==true"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[e("div",{staticClass:"point-item-wrap item-wraps"},[e("div",{staticClass:"point-item"},[e("div",{staticClass:"point-info fs16"},[t._v(t._s(t.vm.point))]),t._v(" "),e("div",{staticClass:"point-title fs14"},[t._v("积分")])])]),t._v(" "),e("div",{staticClass:"point-item-wrap item-wraps"},[e("div",{staticClass:"point-item",on:{click:t.coupons}},[e("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),e("div",{staticClass:"point-title fs14"},[t._v("现金劵")])])])])]),t._v(" "),e("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[e("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/orders"}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),e("div",{attrs:{id:"module-list"}},[e("div",{staticClass:"module-item-wrap"},[e("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/onsaleorders"}},[e("div",{staticClass:"module-logo logo1"}),t._v(" "),e("div",{staticClass:"module-title fs14"},[t._v("商品订单")])])]),t._v(" "),e("div",{staticClass:"module-item-wrap"},[e("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/grouporders"}},[e("div",{staticClass:"module-logo logo2"}),t._v(" "),e("div",{staticClass:"module-title fs14"},[t._v("团购订单")])])]),t._v(" "),e("div",{staticClass:"module-item-wrap"},[e("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/homeorders"}},[e("div",{staticClass:"module-logo logo3"}),t._v(" "),e("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])])]),t._v(" "),e("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[e("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("我的维修单")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),e("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),e("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[e("span",{attrs:{id:"mypublic"}}),t._v("查看发布    \n      ")])])],1),t._v(" "),e("div",{staticClass:"info-wrap"},[e("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+t.oriapp+"#/Myhouse"}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),e("a",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])]),t._v(" "),e("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[e("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:"+t.user.officeTel}},[e("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),e("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[e("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[t._v("长按关注公众号，尊享更多服务和商品")]),t._v(" "),e("img",{staticStyle:{width:"200px"},attrs:{src:t.qrCode}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],attrs:{id:"login"}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])}]};var p=e("VU/8")(c,u,!1,function(t){e("4PMs")},"data-v-1a84c95b",null);s.default=p.exports},a1VQ:function(t,s,e){t.exports=e.p+"static/img/logo.b56374a.jpg"},tXuv:function(t,s,e){"use strict";var i=new(e("7+uW").default);s.a=i}});