webpackJsonp([3],{"6huX":function(t,s,i){t.exports=i.p+"static/img/VIP已开通.7ad1b44.png"},BP9J:function(t,s,i){t.exports=i.p+"static/img/VIP未开通(4).ed8bfaf.png"},Qt9A:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("mvHQ"),e=i.n(a),n=i("a1VQ"),r=i.n(n),o=void 0,l={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},isMember:!1,enddate:"",user_info:{avatar:r.a,nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"}}},created:function(){o=this},mounted:function(){this.User(),this.updateCouponStatus(),this.panduan()},components:{},methods:{panduan:function(){o.receiveData.getData(o,"/getMember","res",function(t){"0"==o.res[0].status&&(o.isMember=!0,o.enddate=o.res[0].enddate)})},initSession4Test:function(){o.receiveData.getData(o,"/initSession4Test/15184","Data",function(){})},User:function(){this.common.invokeApi("GET","userInfo",null,function(){},function(t){o.user=t.result,o.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:o.user_info.avatar,o.user.name=""!=t.result.name?t.result.name:o.user_info.nickname},function(){o.user={},o.user.headimgurl=o.user_info.avatar,o.user.name=o.user_info.nickname})},updateCouponStatus:function(){o.common.invokeApi("GET","updateCouponStatus",null,null,function(t){console.log(e()(t))},function(){})},gotoEdit:function(){this.common.hasRegister()?this.$router.push({path:"/bindphone"}):this.$router.push({path:"/register"})},huiyuan:function(){o.$router.push({path:"/kaitong"})},coupons:function(){o.$router.push({path:"/coupons"})},gotoAddress:function(){o.common.hasRegister()?o.$router.push({path:"/addresses"}):this.$router.push({path:"/register"})},Notice:function(){window.location.href=o.basePageUrl+"person/index.html?v=20160229#/notices"}},computed:{}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ind"},[a("div",{staticClass:"avatar-wrap rel ov"},[a("div",{staticClass:" menu-person-link-white",on:{click:t.gotoEdit}},[a("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),a("span",{staticClass:" avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[a("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),a("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName)+" ")])])]),t._v(" "),a("div",{staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item"},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item"},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item",on:{click:t.coupons}},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),a("div",{staticClass:"huiyuan"},[a("div",{staticClass:"huiyuan-1"},[a("router-link",{attrs:{to:{path:"/kaitong",query:{enddate:this.enddate}}}},[t.isMember?a("img",{attrs:{src:i("6huX")}}):a("img",{attrs:{src:i("BP9J"),alt:""}})])],1)])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[a("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"orderpay.html?start=123#/orders"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),a("div",{attrs:{id:"module-list"}},[a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrl+"orderpay.html?start=123#/onsaleorders"}},[a("div",{staticClass:"module-logo logo1"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("商品订单")])])]),t._v(" "),a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrl+"orderpay.html?start=123#/grouporders"}},[a("div",{staticClass:"module-logo logo2"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("团购订单")])])]),t._v(" "),a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrl+"orderpay.html?start=123#/homeorders"}},[a("div",{staticClass:"module-logo logo3"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[a("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的维修单")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),a("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),a("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[a("span",{attrs:{id:"mypublic"}}),t._v("查看发布    ")])])],1),t._v(" "),a("div",{staticClass:"info-wrap"},[a("a",{staticClass:"input-wrap menu-person-link lite-divider ",attrs:{href:this.basePageUrl+"wuye/index.html?#/Myhouse"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),a("a",{staticClass:"input-wrap menu-person-link lite-divider ",on:{click:t.gotoAddress}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[a("router-link",{staticClass:"input-wrap menu-person-link  lite-divider",attrs:{to:{path:"/abort"},href:"#"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("关注我们")])]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link ",attrs:{href:"tel:"+t.user.officeTel}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link ",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[s("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[this._v("长按关注合协社区，尊享更多服务和商品")]),this._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://img.e-shequ.com/FrNERaxTnTNFrFO-iYMY6vx2kRe6"}})])}]};var c=i("VU/8")(l,u,!1,function(t){i("VJOT")},"data-v-46ee09f8",null);s.default=c.exports},VJOT:function(t,s){},a1VQ:function(t,s,i){t.exports=i.p+"static/img/logo.b56374a.jpg"}});
//# sourceMappingURL=3.775f13c0a182435a49d4.js.map