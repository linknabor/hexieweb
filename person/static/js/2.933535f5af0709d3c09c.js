webpackJsonp([2],{AlHz:function(t,s){},Qt9A:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("mvHQ");var e=i("a1VQ"),a=i.n(e),o=i("tXuv"),r=(i("lbHh"),void 0),n={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},login:!0,oriapp:"",qrCode:"",isMember:!1,user_info:{avatar:a.a,nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"}}},created:function(){r=this},mounted:function(){this.User(),this.updateCouponStatus(),r.oriApp()},components:{},methods:{panduan:function(){r.receiveData.getData(r,"/getMember","res",function(t){"0"==r.res[0].status&&(r.isMember=!0,r.enddate=r.res[0].enddate)})},initSession4Test:function(){r.receiveData.getData(r,"/initSession4Test/79187","Data",function(){})},User:function(){var t="userInfo?oriApp="+r.getUrlParam("oriApp");this.common.invokeApi("GET",t,null,function(){},function(t){t.success&&null==t.result&&reLogin(),r.user=t.result,r.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:r.user_info.avatar,r.user.name=""!=t.result.name?t.result.name:r.user_info.nickname,r.qrCode=t.result.qrCode,r.login=!1,o.a.$emit("sends",t.result.iconList);for(var s=(new Date).getTime()/1e3+2592e3,i=0;i<t.result.bgImageList.length;i++)r.common.localSet(t.result.bgImageList[i].type,t.result.bgImageList[i].imgUrl,s)},function(){r.login=!1,r.user={},r.user.headimgurl=r.user_info.avatar,r.user.name=r.user_info.nickname})},updateCouponStatus:function(){r.common.invokeApi("GET","updateCouponStatus",null,null,function(t){},function(){})},gotoEdit:function(){r.$router.push({path:"/bindphone"})},coupons:function(){r.$router.push({path:"/coupons"})},gotoAddress:function(){r.$router.push({path:"/addresses"})},Notice:function(){r.$router.push({path:"/notices"})},oriApp:function(){r.oriapp=r.common.getoriApp()}},computed:{}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ind"},[i("div",{staticClass:"avatar-wrap rel ov"},[i("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[i("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),i("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[i("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),i("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),i("div",{staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/orders"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),i("div",{attrs:{id:"module-list"}},[i("div",{staticClass:"module-item-wrap"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/onsaleorders"}},[i("div",{staticClass:"module-logo logo1"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("商品订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/grouporders"}},[i("div",{staticClass:"module-logo logo2"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("团购订单")])])]),t._v(" "),i("div",{staticClass:"module-item-wrap"},[i("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/homeorders"}},[i("div",{staticClass:"module-logo logo3"}),t._v(" "),i("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的维修单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),i("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[i("span",{attrs:{id:"mypublic"}}),t._v("查看发布    \n      ")])])],1),t._v(" "),i("div",{staticClass:"info-wrap"},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?"+t.oriapp+"#/Myhouse"}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[i("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:"+t.user.officeTel}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[i("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[t._v("长按关注公众号，尊享更多服务和商品")]),t._v(" "),i("img",{staticStyle:{width:"200px"},attrs:{src:t.qrCode}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],attrs:{id:"login"}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])}]};var c=i("VU/8")(n,l,!1,function(t){i("AlHz")},"data-v-42e14453",null);s.default=c.exports},a1VQ:function(t,s,i){t.exports=i.p+"static/img/logo.b56374a.jpg"},tXuv:function(t,s,i){"use strict";var e=new(i("7+uW").default);s.a=e}});