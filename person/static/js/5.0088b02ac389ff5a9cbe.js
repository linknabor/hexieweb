webpackJsonp([5],{Qt9A:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("a1VQ"),a=e.n(i),r=e("tXuv"),o=(e("lbHh"),void 0),l={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},service_list:[],login:!1,cardService:"",point:0,cardStatus:"",serviceOperator:!1,evoucherOperator:!1,user_info:{avatar:a.a,nickname:"游客",levelname:"普通会员"}}},created:function(){o=this},mounted:function(){this.User(),o.qrCodePayService()},components:{},methods:{initSession4Test:function(){o.receiveData.getData(o,"/initSession4Test/8427","Data",function(){})},User:function(){var t="userInfo?oriApp="+o.getUrlParam("oriApp");this.common.invokeApi("GET",t,null,function(){},function(t){t.success&&null==t.result?reLogin():(o.user=t.result,o.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:o.user_info.avatar,o.user.name=""!=t.result.name?t.result.name:o.user_info.nickname,o.cardService=t.result.cardService,o.serviceOperator=t.result.serviceOperator,o.evoucherOperator=t.result.evoucherOperator,o.user.point<0?o.point=0:o.point=o.user.point,o.login=!1,r.a.$emit("sends",t.result.iconList),o.common.updatecookie(t.result.cardStatus,t.result.cardService,t.result.id,t.result.appid,t.result.cspId,t.result.sectId,t.result.cardPayService,t.result.bgImageList,t.result.wuyeTabsList,t.result.qrCode,t.result))},function(){o.login=!1,o.user={},o.user.headimgurl=o.user_info.avatar,o.user.name=o.user_info.nickname})},qrCodePayService:function(){o.receiveData.getData(o,"/qrCodePayService","res",function(){o.res.success&&(o.service_list=o.res.result.service_list)})},gotoEdit:function(){o.cardService?o.user.tel||"1"!=o.user.cardStatus&&null!=o.user.cardStatus&&"0"!=o.user.cardStatus?o.user.tel||"2"!=o.user.cardStatus?!o.user.tel||"3"!=o.user.cardStatus&&"4"!=o.user.cardStatus?!o.user.tel||"1"!=o.user.cardStatus&&null!=o.user.cardStatus&&"0"!=o.user.cardStatus?o.user.tel&&"2"==o.user.cardStatus&&o.receiveData.getData(o,"/card/activateUrlOnMenu?oriApp="+o.getUrlParam("oriApp"),"res",function(){o.res.success?location.href=o.res.result:alert(o.res.message)}):o.$router.push({path:"/welfare"}):o.receiveData.getData(o,"/card/activateUrlOnMenu?oriApp="+o.getUrlParam("oriApp"),"res",function(){o.res.success?location.href=o.res.result:alert(o.res.message)}):o.$router.push({path:"/register"}):o.$router.push({path:"/welfare"}):o.$router.push({path:"/bindphone"})},coupons:function(){o.$router.push({path:"/coupons"})},gotoAddress:function(){o.$router.push({path:"/addresses"})},oriApp:function(){o.oriapp=o.common.getoriApp()}},computed:{}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ind"},[i("div",{staticClass:"avatar-wrap rel ov"},[i("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[i("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),i("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[i("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),i("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.cardService,expression:"cardService==false"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.cardService,expression:"cardService==true"}],staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.point))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("积分")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap item-wraps"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("现金劵")])])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[i("a",{staticClass:"input-wrap  lite-divider disb",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/orders"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")])])]),t._v(" "),i("div",{attrs:{id:"module-list"}},[i("div",{staticClass:"module-item-wrap module-newwidth"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/special?type=1"}},[i("div",{staticClass:"module-logo logo6"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("商城订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap module-newwidth"},[i("router-link",{staticClass:"module-item",attrs:{to:{path:"/myservice"}}},[i("div",{staticClass:"module-logo logo3"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])],1),t._v(" "),i("div",{staticClass:"module-item-wrap module-newwidth"},[i("router-link",{staticClass:"module-item",attrs:{to:{path:"/myrepair"}}},[i("div",{staticClass:"module-logo logo7"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("维修订单")])])],1)]),t._v(" "),i("div",[i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是商家")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看记录    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.evoucherOperator,expression:"evoucherOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/cardrollrecords"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是核销人员")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看记录    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.serviceOperator||t.service_list.length>0,expression:"serviceOperator || service_list.length > 0"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/service"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是服务人员")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看订单    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticStyle:{background:"rgba(0,0,0,0.5)",display:"none",width:"100%",height:"100%",top:"0rem",position:"fixed","z-index":"999"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],attrs:{id:"login"}},[i("img",{staticStyle:{width:"100%","vertical-align":"middle"},attrs:{src:e("l3R5")}})])])},staticRenderFns:[]};var c=e("VU/8")(l,n,!1,function(t){e("aUep")},"data-v-7a9b680c",null);s.default=c.exports},a1VQ:function(t,s,e){t.exports=e.p+"static/img/logo.b56374a.jpg"},aUep:function(t,s){},tXuv:function(t,s,e){"use strict";var i=new(e("7+uW").default);s.a=i}});