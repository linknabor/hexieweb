webpackJsonp([2],{"6jYJ":function(t,s,i){t.exports=i.p+"static/img/VIP未开通(4).ed8bfaf.png"},F7cj:function(t,s,i){t.exports=i.p+"static/img/VIP已开通.7ad1b44.png"},Qt9A:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("mvHQ");var a=i("a1VQ"),e=i.n(a),r=void 0,n={data:function(){return{user:{headimgurl:"",nam:"",level:"",zhima:"0",lvdou:"0",couponCount:0},isMember:!1,user_info:{avatar:e.a,nickname:"游客",levelname:"普通会员"},user_level:{0:"普通会员",1:"钻石会员",2:"大楼VIP"}}},created:function(){r=this},mounted:function(){this.User(),this.updateCouponStatus(),this.panduan()},components:{},methods:{panduan:function(){r.receiveData.getData(r,"/getMember","res",function(t){"0"==r.res[0].status&&(r.isMember=!0,r.enddate=r.res[0].enddate)})},initSession4Test:function(){r.receiveData.getData(r,"/initSession4Test/79081","Data",function(){})},User:function(){this.common.invokeApi("GET","userInfo",null,function(){},function(t){r.user=t.result,r.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:r.user_info.avatar,r.user.name=""!=t.result.name?t.result.name:r.user_info.nickname},function(){r.user={},r.user.headimgurl=r.user_info.avatar,r.user.name=r.user_info.nickname})},updateCouponStatus:function(){r.common.invokeApi("GET","updateCouponStatus",null,null,function(t){},function(){})},gotoEdit:function(){this.common.hasRegister()?this.$router.push({path:"/bindphone"}):this.$router.push({path:"/register"})},huiyuan:function(){r.$router.push({path:"/kaitong"})},coupons:function(){r.$router.push({path:"/coupons"})},gotoAddress:function(){r.common.hasRegister()?r.$router.push({path:"/addresses"}):this.$router.push({path:"/register"})},Notice:function(){r.$router.push({path:"/notices"})}},computed:{}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ind"},[a("div",{staticClass:"avatar-wrap rel ov"},[a("div",{staticClass:"menu-person-link-white",on:{click:t.gotoEdit}},[a("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),a("span",{staticClass:"avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[a("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),a("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoquName))])])]),t._v(" "),a("div",{staticClass:"div_bottom",staticStyle:{"border-bottom":"none"},attrs:{id:"point-list"}},[a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item"},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item"},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),a("div",{staticClass:"point-item-wrap"},[a("div",{staticClass:"point-item",on:{click:t.coupons}},[a("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),a("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),a("div",{staticClass:"huiyuan"},[a("div",{staticClass:"huiyuan-1"},[a("a",{attrs:{href:this.basePageUrlpay+"orderpay.html?start=123#/kaitong"}},[t.isMember?a("img",{attrs:{src:i("F7cj")}}):a("img",{attrs:{src:i("6jYJ"),alt:""}})])])])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[a("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrlpay+"orderpay.html?start=123#/orders"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),a("div",{attrs:{id:"module-list"}},[a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?start=123#/onsaleorders"}},[a("div",{staticClass:"module-logo logo1"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("商品订单")])])]),t._v(" "),a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?start=123#/grouporders"}},[a("div",{staticClass:"module-logo logo2"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("团购订单")])])]),t._v(" "),a("div",{staticClass:"module-item-wrap"},[a("a",{staticClass:"module-item",attrs:{href:this.basePageUrlpay+"orderpay.html?start=123#/homeorders"}},[a("div",{staticClass:"module-logo logo3"}),t._v(" "),a("div",{staticClass:"module-title fs14"},[t._v("服务订单")])])])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[a("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的维修单")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.user.repairOperator,expression:"user.repairOperator"}],staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]),t._v(" "),a("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.Notice}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的消息")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),a("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myPublish"}}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我的发布")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[a("span",{attrs:{id:"mypublic"}}),t._v("查看发布    \n      ")])])],1),t._v(" "),a("div",{staticClass:"info-wrap"},[a("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.basePageUrl+"wuye/index.html?#/Myhouse"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("我是业主")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("绑定房屋    ")])]),t._v(" "),a("a",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])]),t._v(" "),a("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[a("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/abort"},href:"#"}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("关注我们")])]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!=t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!=''"}],staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:"+t.user.officeTel}},[a("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),a("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("客服电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[s("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"16px"}},[this._v("长按关注合协社区，尊享更多服务和商品")]),this._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:"http://img.e-shequ.com/FrNERaxTnTNFrFO-iYMY6vx2kRe6"}})])}]};var l=i("VU/8")(n,o,!1,function(t){i("RYj4")},"data-v-341bba5a",null);s.default=l.exports},RYj4:function(t,s){},a1VQ:function(t,s,i){t.exports=i.p+"static/img/logo.b56374a.jpg"}});