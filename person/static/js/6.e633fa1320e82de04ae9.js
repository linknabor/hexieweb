webpackJsonp([6],{Qt9A:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("a1VQ"),a=e.n(i),r=e("tXuv"),o=(e("lbHh"),void 0),l={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},service_list:[],login:!1,cardService:"",qrCode:"",point:0,cardStatus:"",serviceOperator:!1,evoucherOperator:"",merchant:!1,user_info:{avatar:a.a,nickname:"游客",levelname:"普通会员"}}},created:function(){o=this},mounted:function(){this.User(),o.qrCodePayService()},methods:{initSession4Test:function(){o.receiveData.getData(o,"/initSession4Test/8427","Data",function(){})},User:function(){var t="userInfo?oriApp="+o.getUrlParam("oriApp");this.common.invokeApi("GET",t,null,function(){},function(t){t.success&&null==t.result?reLogin():(o.user=t.result,o.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:o.user_info.avatar,o.user.name=""!=t.result.name?t.result.name:o.user_info.nickname,o.qrCode=t.result.qrCode,o.cardService=t.result.cardService,o.serviceOperator=t.result.serviceOperator,o.evoucherOperator=t.result.evoucherOperator,o.merchant=t.result.merchant,o.user.point<0?o.point=0:o.point=o.user.point,o.login=!1,r.a.$emit("sends",t.result.iconList),o.common.updatecookie(t.result.cardStatus,t.result.cardService,t.result.id,t.result.appid,t.result.cspId,t.result.sectId,t.result.cardPayService,t.result.bgImageList,t.result.wuyeTabsList,t.result.qrCode,t.result))},function(){o.login=!1,o.user={},o.user.headimgurl=o.user_info.avatar,o.user.name=o.user_info.nickname})},qrCodePayService:function(){o.receiveData.getData(o,"/qrCodePayService","res",function(){o.res.success?o.service_list=o.res.result.service_list:null!=o.res.message&&40001!=o.res.errorCode&&alert(o.res.message)})},gotoEdit:function(){o.cardService?o.user.tel||"1"!=o.user.cardStatus&&null!=o.user.cardStatus&&"0"!=o.user.cardStatus?o.user.tel||"2"!=o.user.cardStatus?!o.user.tel||"3"!=o.user.cardStatus&&"4"!=o.user.cardStatus?!o.user.tel||"1"!=o.user.cardStatus&&null!=o.user.cardStatus&&"0"!=o.user.cardStatus?o.user.tel&&"2"==o.user.cardStatus&&o.receiveData.getData(o,"/card/activateUrlOnMenu?oriApp="+o.getUrlParam("oriApp"),"res",function(){o.res.success?location.href=o.res.result:alert(o.res.message)}):o.$router.push({path:"/welfare"}):o.receiveData.getData(o,"/card/activateUrlOnMenu?oriApp="+o.getUrlParam("oriApp"),"res",function(){o.res.success?location.href=o.res.result:alert(o.res.message)}):o.$router.push({path:"/register"}):o.$router.push({path:"/welfare"}):o.$router.push({path:"/bindphone"})},coupons:function(){o.$router.push({path:"/getcoupons"})},gotoAddress:function(){o.$router.push({path:"/addresses"})},Notice:function(){o.$router.push({path:"/notices"})},business:function(){var t="";t=this.evoucherOperator?"true":"false",o.$router.push({path:"/specialorders",query:{evoucherOperator:t,type:"1"}})}},computed:{},components:{}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ind"},[i("div",{staticClass:"avatar-wrap rel ov"},[i("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[i("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),i("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[i("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),i("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.cardService,expression:"cardService==false"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.cardService,expression:"cardService==true"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.point))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("积分")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("领卷中心")])])])])]),t._v(" "),t._m(0),t._v(" "),i("div",{attrs:{id:"module-list"}},[i("div",{staticClass:"module-item-wrap module-newwidth"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/special?type=1"}},[i("div",{staticClass:"module-logo logo6"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("商城订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap module-newwidth"},[i("router-link",{staticClass:"module-item",attrs:{to:{path:"/myservice"}}},[i("div",{staticClass:"module-logo logo3"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])],1),t._v(" "),i("div",{staticClass:"module-item-wrap module-newwidth"},[i("router-link",{staticClass:"module-item",attrs:{to:{path:"/myrepair"}}},[i("div",{staticClass:"module-logo logo7"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("维修订单")])])],1)]),t._v(" "),i("div",[i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.merchant,expression:"merchant"}],staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.business}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是商家")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看记录    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.serviceOperator||t.service_list.length>0,expression:"serviceOperator || service_list.length > 0"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/service"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是服务人员")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看订单    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),i("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[i("span",{attrs:{id:"mypublic"}}),t._v("查看发布    \n        ")])])],1),t._v(" "),i("div",{staticClass:"info-wrap"},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+this.common.getoriApp()+"#/Myhouse"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[i("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:"+t.user.officeTel}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[i("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[t._v("长按关注公众号，尊享更多服务和商品")]),t._v(" "),i("img",{staticStyle:{width:"200px"},attrs:{src:t.qrCode}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticStyle:{background:"rgba(0,0,0,0.5)",display:"none",width:"100%",height:"100%",top:"0rem",position:"fixed","z-index":"999"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],attrs:{id:"login"}},[i("img",{staticStyle:{width:"100%","vertical-align":"middle"},attrs:{src:e("l3R5")}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[s("a",{staticClass:"input-wrap  lite-divider disb",attrs:{href:"javascript:void(0);"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("全部订单")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])}]};var c=e("VU/8")(l,n,!1,function(t){e("d5UI")},"data-v-22e40db1",null);s.default=c.exports},a1VQ:function(t,s,e){t.exports=e.p+"static/img/logo.b56374a.jpg"},d5UI:function(t,s){},tXuv:function(t,s,e){"use strict";var i=new(e("7+uW").default);s.a=i}});