webpackJsonp([30],{A2cI:function(e,t){},VtNf:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("Au9i"),s("fxnj");var r=void 0,o={data:function(){return{Mask:!1,type:this.$route.query.type,evoucherOperator:this.$route.query.evoucherOperator,orders:[],currentStatus:"PREPARE",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"配货中",value:"PREPARE"}],groupsNum:1,bgImage:this.common.GetImages("1")}},created:function(){r=this},components:{},computed:{},mounted:function(){r.query()},methods:{initSession4Test:function(){r.receiveData.getData(r,"/initSession4Test/8427","Data",function(){})},query:function(){r.receiveData.getData(r,"orders/status/group/"+r.currentStatus,"res",function(){r.res.success?(r.orders=r.res.result,"ALL"==r.currentStatus&&(r.groupsNum=r.res.result.length)):null!=r.res.message&&40001!=r.res.errorCode&&alert(r.res.message)})},toggleDropdown:function(){r.dropdownCollapsed=!r.dropdownCollapsed},selectDropdown:function(e){r.selectedName=r.dropdowns[e].name,r.currentStatus=r.dropdowns[e].value,r.query()},goorder:function(e){1==e?r.$router.push({path:"/specialorders",query:{evoucherOperator:r.evoucherOperator,type:e}}):2==e?r.$router.push({path:"/cardrollrecords",query:{evoucherOperator:r.evoucherOperator,type:e}}):r.$router.push({path:"/grouporders",query:{evoucherOperator:r.evoucherOperator,type:e}})},detail:function(e){location.href=this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/orderdetail?orderId="+e.id},orderConfirm:function(e){location.href=this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/specialdetail?orderId="+e.id}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wapr"},[s("div",{staticClass:"header ov",class:{"header-width":"true"==e.evoucherOperator}},[s("div",{staticClass:"fl",class:{white:1==e.type},on:{click:function(t){e.goorder(1)}}},[s("span",{class:{spanborder:1==e.type}},[e._v("电商订单")])]),e._v(" "),s("div",{staticClass:"fl writeshow ",class:{white:2==e.type,writeoff:"true"==e.evoucherOperator},on:{click:function(t){e.goorder(2)}}},[s("span",{class:{spanborder:2==e.type}},[e._v("核销记录")])]),e._v(" "),s("div",{staticClass:"fl",class:{white:3==e.type},on:{click:function(t){e.goorder(3)}}},[s("span",{class:{spanborder:3==e.type}},[e._v("团购订单")])])]),e._v(" "),s("div",[s("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:e.dropdownCollapsed},on:{click:e.toggleDropdown}},[s("span",[e._v(e._s(e.selectedName))]),e._v(" "),e.dropdownCollapsed?s("div",{staticClass:"dropdown"},e._l(e.dropdowns,function(t,r){return s("div",{key:r,staticClass:"dropdown-item",class:{noborder:e.dropdowns.length-1==r},on:{click:function(t){e.selectDropdown(r)}}},[e._v(e._s(t.name))])})):e._e()])]),e._v(" "),0==e.groupsNum?s("div",{staticClass:"rels"},[s("img",{staticClass:"center-bgs",attrs:{src:e.bgImage,alt:""}})]):e._e(),e._v(" "),e._l(e.orders,function(t){return s("div",{key:t.id,staticClass:"ov lite-order pd10 ",staticStyle:{color:"#3b3937"},on:{click:function(s){s.stopPropagation(),e.detail(t)}}},[s("div",{staticClass:"marg-bottom"},[s("img",{staticClass:"icon-repair fl",attrs:{src:t.productThumbPic}}),e._v(" "),s("div",{staticClass:"ov right-text not-used"},[s("div",{staticClass:"spot pbottom"},[e._v(e._s(t.productName))]),e._v(" "),s("div",{staticClass:"pbottom ov"},[s("span",{staticClass:"fl"},[e._v("¥"+e._s(t.price))]),e._v(" "),s("span",{staticClass:"p15 right-color fr"},[e._v(e._s(t.statusStr))])]),e._v(" "),s("div",{staticClass:"ptop ov"},[s("span",{staticClass:"fl"},[e._v("数量: "+e._s(t.count))])])])]),e._v(" "),s("div",{staticClass:"mrg5"},[s("span",{staticClass:"fl marbottom"},[e._v(e._s(t.createDateStr))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:9==t.status,expression:"item.status==9"}],staticClass:"fr crrd-color card-jm",on:{click:function(s){s.stopPropagation(),e.orderConfirm(t)}}},[e._v("点击发货")])])])}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[]};var i=s("VU/8")(o,a,!1,function(e){s("A2cI")},"data-v-4115d8f3",null);t.default=i.exports}});