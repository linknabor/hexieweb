webpackJsonp([30],{"8clJ":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("Au9i"),s("fxnj");var o=void 0,r={data:function(){return{Mask:!1,type:this.$route.query.type,evoucherOperator:this.$route.query.evoucherOperator,orders:[],currentStatus:"PREPARE",dropdownCollapsed:!1,selectedName:"订单筛选",dropdowns:[{name:"全部订单",value:"ALL"},{name:"配货中",value:"PREPARE"}]}},created:function(){o=this},components:{},computed:{},mounted:function(){o.query()},methods:{initSession4Test:function(){o.receiveData.getData(o,"/initSession4Test/8427","Data",function(){})},query:function(){o.receiveData.getData(o,"orders/status/onsale/"+o.currentStatus,"res",function(){o.res.success?o.orders=o.res.result:null!=o.res.message&&40001!=o.res.errorCode&&alert(o.res.message)})},toggleDropdown:function(){o.dropdownCollapsed=!o.dropdownCollapsed},selectDropdown:function(e){o.selectedName=o.dropdowns[e].name,o.currentStatus=o.dropdowns[e].value,o.query()},goorder:function(e){1==e?o.$router.push({path:"/specialorders",query:{evoucherOperator:o.evoucherOperator,type:e}}):2==e?o.$router.push({path:"/cardrollrecords",query:{evoucherOperator:o.evoucherOperator,type:e}}):o.$router.push({path:"/grouporders",query:{evoucherOperator:o.evoucherOperator,type:e}})},detail:function(e){location.href=this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/clientdetail?orderId="+e.id},orderConfirm:function(e){location.href=this.basePageUrlpay+"orderpay.html?"+this.common.getoriApp()+"#/specialdetail?orderId="+e.id}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wapr"},[s("div",{staticClass:"header ov",class:{"header-width":"true"==e.evoucherOperator}},[s("div",{staticClass:"fl",class:{white:1==e.type},on:{click:function(t){e.goorder(1)}}},[s("span",{class:{spanborder:1==e.type}},[e._v("电商订单")])]),e._v(" "),s("div",{staticClass:"fl writeshow ",class:{white:2==e.type,writeoff:"true"==e.evoucherOperator},on:{click:function(t){e.goorder(2)}}},[s("span",{class:{spanborder:2==e.type}},[e._v("核销记录")])]),e._v(" "),s("div",{staticClass:"fl",class:{white:3==e.type},on:{click:function(t){e.goorder(3)}}},[s("span",{class:{spanborder:3==e.type}},[e._v("团购订单")])])]),e._v(" "),s("div",[s("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:e.dropdownCollapsed},on:{click:e.toggleDropdown}},[s("span",[e._v(e._s(e.selectedName))]),e._v(" "),e.dropdownCollapsed?s("div",{staticClass:"dropdown"},e._l(e.dropdowns,function(t,o){return s("div",{key:o,staticClass:"dropdown-item",class:{noborder:e.dropdowns.length-1==o},on:{click:function(t){e.selectDropdown(o)}}},[e._v(e._s(t.name))])})):e._e()])]),e._v(" "),e._l(e.orders,function(t){return s("div",{key:t.id,staticClass:"ov lite-order pd10 ",staticStyle:{color:"#3b3937"},on:{click:function(s){s.stopPropagation(),e.detail(t)}}},[s("div",{staticClass:"marg-bottom"},[s("img",{staticClass:"icon-repair fl",attrs:{src:t.productThumbPic}}),e._v(" "),s("div",{staticClass:"ov right-text not-used"},[s("div",{staticClass:"spot pbottom"},[e._v(e._s(t.productName))]),e._v(" "),s("div",{staticClass:"pbottom ov"},[s("span",{staticClass:"fl"},[e._v("¥"+e._s(t.price))]),e._v(" "),s("span",{staticClass:"p15 right-color fr"},[e._v(e._s(t.statusStr))])]),e._v(" "),s("div",{staticClass:"ptop ov "},[s("span",{staticClass:"fl "},[e._v("数量: "+e._s(t.count))])])])]),e._v(" "),s("div",{staticClass:"mrg5"},[s("span",{staticClass:"fl marbottom"},[e._v(e._s(t.createDateStr))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:9==t.status,expression:"item.status==9"}],staticClass:"fr crrd-color card-jm",on:{click:function(s){s.stopPropagation(),e.orderConfirm(t)}}},[e._v("点击发货")])])])}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)},staticRenderFns:[]};var i=s("VU/8")(r,a,!1,function(e){s("iPsN")},"data-v-34d5adb2",null);t.default=i.exports},iPsN:function(e,t){}});