webpackJsonp([12],{G2Ae:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("bCVF"),i=e.n(a),r=e("6ZnO"),n=e.n(r),c=e("UOIW"),o=e.n(c),l=e("wrtZ"),u=e.n(l),d=e("gNY8"),v=e.n(d),f=e("Z6jr"),p=e.n(f),_=e("mqp8"),g=e.n(_),h=void 0,y={data:function(){return{orders:[],status:1,typeConfig:{1:["浴室维修",i.a],2:["厨房维修",n.a],3:["客厅卧室维修",o.a],4:["强弱电维修",u.a],5:["门窗维修",v.a],6:["其它维修",p.a],7:["家电",g.a]}}},created:function(){h=this},mounted:function(){h.query()},methods:{query:function(){h.receiveData.getData(h,"operator/repair/query/"+h.status,"res",function(){if(h.res.success)for(var t in h.orders=h.res.result,h.orders)h.orders[t].typeImg=h.typeConfig[h.orders[t].repairType][1];else alert("查询维修记录异常，请稍后重试")})},changeStatus:function(t){h.status!=t&&(h.status=t,h.query())},gotoDetail:function(t){h.$router.push({path:"/operatorOrdersDetail",query:{ordersID:h.orders[t].id}})}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"oper"},[e("div",{class:{emptybg:0==t.orders.length}}),t._v(" "),e("div",{staticClass:"statusBar"},[e("div",{staticClass:"statusTitle",class:{current:1==t.status},on:{click:function(s){t.changeStatus(1)}}},[t._v("可接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:2==t.status},on:{click:function(s){t.changeStatus(2)}}},[t._v("已接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:3==t.status},on:{click:function(s){t.changeStatus(3)}}},[t._v("已完成")])]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"40px"}},[t._v(" ")]),t._v(" "),t._l(t.orders,function(s,a){return e("div",{staticClass:"ov pr15 lite-divider",staticStyle:{color:"#3b3937"},on:{click:function(s){t.gotoDetail(a)}}},[e("img",{staticClass:"icon-repair fl",attrs:{src:s.typeImg}}),t._v(" "),e("div",{staticClass:"ov ptb15"},[e("span",{staticClass:"fr fs12",staticStyle:{color:"#999"}},[e("i",{staticClass:"icon time-icon"}),t._v(t._s(s.time))])]),t._v(" "),e("div",{staticClass:"comment ov  pb15"},[e("span",{staticClass:"fl fs15",staticStyle:{"font-size":"16px",color:"#666","max-width":"120px",height:"30px","line-height":"30px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[t._v(t._s(s.projectName))]),t._v(" "),e("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(s.statusStr))])])])})],2)},staticRenderFns:[]};var m=e("VU/8")(y,C,!1,function(t){e("sgZd")},"data-v-41f0a837",null);s.default=m.exports},sgZd:function(t,s){}});