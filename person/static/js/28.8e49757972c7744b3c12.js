webpackJsonp([28],{G2Ae:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("bCVF"),i=e.n(a),r=e("6ZnO"),n=e.n(r),c=e("UOIW"),o=e.n(c),l=e("wrtZ"),u=e.n(l),v=e("gNY8"),d=e.n(v),p=e("Z6jr"),f=e.n(p),g=e("mqp8"),h=e.n(g),m=void 0,_={data:function(){return{orders:[],status:1,typeConfig:{1:["浴室维修",i.a],2:["厨房维修",n.a],3:["客厅卧室维修",o.a],4:["强弱电维修",u.a],5:["门窗维修",d.a],6:["其它维修",f.a],7:["家电",h.a]},bgImage:this.common.GetImages("3")}},created:function(){m=this},mounted:function(){m.query()},methods:{query:function(){m.receiveData.getData(m,"operator/repair/query/"+m.status,"res",function(){if(m.res.success)for(var t in m.orders=m.res.result,m.orders)m.orders[t].typeImg=m.typeConfig[m.orders[t].repairType][1];else alert("查询维修记录异常，请稍后重试")})},changeStatus:function(t){m.status!=t&&(m.status=t,m.query())},gotoDetail:function(t){m.$router.push({path:"/operatorOrdersDetail",query:{ordersID:m.orders[t].id}})}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"oper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.orders.length,expression:"orders.length==0"}],staticClass:"emptybg"},[e("img",{staticClass:"adimg",attrs:{src:t.bgImage,alt:""}})]),t._v(" "),e("div",{staticClass:"statusBar"},[e("div",{staticClass:"statusTitle",class:{current:1==t.status},on:{click:function(s){t.changeStatus(1)}}},[t._v("可接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:2==t.status},on:{click:function(s){t.changeStatus(2)}}},[t._v("已接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:3==t.status},on:{click:function(s){t.changeStatus(3)}}},[t._v("已完成")])]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"40px"}},[t._v(" ")]),t._v(" "),t._l(t.orders,function(s,a){return e("div",{staticClass:"ov pr15 lite-divider",staticStyle:{color:"#3b3937"},on:{click:function(s){t.gotoDetail(a)}}},[e("img",{staticClass:"icon-repair fl",attrs:{src:s.typeImg}}),t._v(" "),e("div",{staticClass:"ov ptb15"},[e("span",{staticClass:"fr fs12",staticStyle:{color:"#999"}},[e("i",{staticClass:"icon time-icon"}),t._v(t._s(s.time))])]),t._v(" "),e("div",{staticClass:"comment ov  pb15"},[e("span",{staticClass:"fl fs15",staticStyle:{"font-size":"16px",color:"#666","max-width":"120px",height:"30px","line-height":"30px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[t._v(t._s(s.projectName))]),t._v(" "),e("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(s.statusStr))])])])})],2)},staticRenderFns:[]};var y=e("VU/8")(_,C,!1,function(t){e("VN2G")},"data-v-48a3135c",null);s.default=y.exports},VN2G:function(t,s){}});