webpackJsonp([8],{"54wK":function(t,e){},l4mZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("bCVF"),a=s.n(r),i=s("6ZnO"),o=s.n(i),n=s("UOIW"),c=s.n(n),l=s("wrtZ"),d=s.n(l),p=s("gNY8"),f=s.n(p),u=s("Z6jr"),v=s.n(u),m=s("mqp8"),y=s.n(m),_=void 0,g={data:function(){return{orders:[],typeConfig:{1:["浴室维修",a.a],2:["厨房维修",o.a],3:["客厅卧室维修",c.a],4:["强弱电维修",d.a],5:["门窗维修",f.a],6:["其它维修",v.a],7:["家电",y.a]}}},created:function(){_=this},mounted:function(){this.add()},components:{},methods:{add:function(){_.receiveData.getData(_,"repair/query","res",function(){if(_.res.success)for(var t in _.orders=_.res.result,_.orders)_.orders[t].typeName=_.typeConfig[_.orders[t].repairType][0],_.orders[t].typeImg=_.typeConfig[_.orders[t].repairType][1]})},gotoDetail:function(t){this.$router.push({path:"/ordersDetail",query:{orderId:_.orders[t].id}})}},computed:{}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myrepair",class:{emptybg:0==t.orders.length}},t._l(t.orders,function(e,r){return s("div",{staticClass:"ov pr15 lite-divider",staticStyle:{color:"#3b3937"},on:{click:function(e){t.gotoDetail(r)}}},[s("img",{staticClass:"icon-repair fl",attrs:{src:e.typeImg}}),t._v(" "),s("div",{staticClass:"ov ptb15"},[s("span",{staticClass:"fl fs15",staticStyle:{color:"#000"}},[t._v(t._s(e.typeName))]),t._v(" "),s("span",{staticClass:"fr fs12",staticStyle:{color:"#999"}},[s("i",{staticClass:"icon time-icon"}),t._v(t._s(e.time))])]),t._v(" "),s("div",{staticClass:"comment ov  pb15"},[s("span",{staticClass:"fl fs15",staticStyle:{"font-size":"16px",color:"#666","max-width":"120px",height:"30px","line-height":"30px",overflow:"hidden"}},[t._v(t._s(e.projectName))]),t._v(" "),s("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(e.statusStr))])])])}))},staticRenderFns:[]};var C=s("VU/8")(g,h,!1,function(t){s("54wK")},"data-v-f3eaa332",null);e.default=C.exports}});
//# sourceMappingURL=8.5c9f3305e81d98c557f81563871794619.js.map