webpackJsonp([21],{"7Tuq":function(t,e){},DTTG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("fxnj"),a=s.n(i),r=s("Au9i"),o=void 0,c={data:function(){return{item:{},typeName:"",typeImg:"",imgUrlList:[],commentImgUrlList:[],payTypeName:"现金支付",oTel:"#"}},created:function(){o=this},mounted:function(){var t=location.href.split("#")[0];o.receiveData.wxconfig(o,a.a,["previewImage"],t),o.queryOrder()},methods:{queryOrder:function(){o.receiveData.getData(o,"operator/repair/query/repairId/"+o.$route.query.ordersID,"res",function(){if(o.res.success){var t=o.res.result;o.imgUrlList=t.imgUrlList,o.commentImgUrlList=t.commentImgUrlList,o.item=t}else 9999==o.res.errorCode?(alert(o.res.message),o.$router.push({path:"/operatorOrders"})):alert("获取维修信息失败，请去维修记录中查看！")})},showPhoto:function(t){a.a.previewImage({current:o.imgUrlList[t],urls:o.imgUrlList})},accept:function(){r.MessageBox.confirm("确定要抢下该单吗？").then(function(t){"confirm"==t&&o.receiveData.getData(o,"operator/accept/"+o.item.id,"res",function(){o.res.success?o.$router.push({path:"/operatorRepairSuccess",query:{ordersID:o.$route.query.ordersID}}):alert("系统异常，请稍后重试！")})}).catch(function(t){})},finish:function(){o.receiveData.getData(o,"operator/repair/finish/"+o.item.id,"res",function(){o.res.success?o.$router.push({path:"/operatorRepairSuccess",query:{ordersID:o.$route.query.ordersID}}):alert("系统异常，请稍后重试！")})},deleteOrder:function(){r.MessageBox.confirm("确定要删除该订单吗？").then(function(t){"confirm"==t&&o.receiveData.getData(o,"operator/repair/delete/"+o.item.id,"res",function(){o.res.success?o.$router.push({path:"/operatorOrders"}):alert("系统异常，请稍后重试！")})}).catch(function(t){})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operorder"},[s("div",{staticClass:"opers"},[s("div",{staticClass:"ov top-title pr15",staticStyle:{"padding-left":"15px"}},[s("div",{staticClass:"ov ptb15"},[s("span",{staticClass:"fl fs15",staticStyle:{color:"#FF8A00"}},[t._v("便民维修")]),t._v(" "),s("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(t.item.statusStr))])])]),t._v(" "),s("div",{staticStyle:{background:"white"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.imgUrlList.length>0,expression:"imgUrlList.length>0"}],staticClass:"photo_area"},t._l(t.imgUrlList,function(e,i){return s("div",{staticClass:"photo_wrap a_third_m20_height",on:{click:function(e){t.showPhoto(i)}}},[s("img",{staticClass:"photo a_third_m22_height",attrs:{src:e}})])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.item.memo,expression:"item.memo!=''"}],staticClass:"top-info"},[s("div",{staticClass:"item",staticStyle:{"padding-left":"15px"}},[s("span",{staticClass:"value",domProps:{innerHTML:t._s(t.item.memo)}})])])]),t._v(" "),s("div",{staticStyle:{background:"white",padding:"0 15px",margin:"15px 0"}},[s("div",{staticClass:"lite-divider detail-title fs14"},[t._v("\n                        报修人信息\n                    ")]),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"custom-menu-link lite-dividers"},[s("p",{staticClass:"value2"},[t._v(t._s(t.item.receiverName)+"\n                                    "),s("a",{staticStyle:{float:"right","padding-right":"10px",color:"#3b3937"},attrs:{href:"tel:"+t.item.tel}},[t._v(t._s(t.item.tel))])])])]),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"custom-menu-link lite-dividers"},[s("p",{staticClass:"value2"},[t._v("所在小区"),s("span",{staticStyle:{float:"right","padding-right":"10px"}},[t._v(t._s(t.item.xiaoquName))])])])]),t._v(" "),s("div",{staticClass:"top-info"},[s("div",{staticClass:"item lite-divider pl0",staticStyle:{"padding-bottom":"15px"}},[s("p",{staticClass:"value",staticStyle:{"padding-top":"5px"}},[t._v(t._s(t.item.address))])])])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),s("div",{staticClass:"btn-fixed"},[s("a",{directives:[{name:"show",rawName:"v-show",value:1==t.item.opStatus,expression:"item.opStatus==1"}],staticClass:"btn",attrs:{href:"#"},on:{click:t.accept}},[t._v("我要抢单")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:2==t.item.opStatus,expression:"item.opStatus==2"}],staticClass:"btn",attrs:{href:"#"},on:{click:t.finish}},[t._v("我已完工")]),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:3==t.item.opStatus,expression:"item.opStatus==3"}],staticClass:"btn",attrs:{href:"#"},on:{click:t.deleteOrder}},[t._v("删除")])])])])},staticRenderFns:[]};var l=s("VU/8")(c,n,!1,function(t){s("7Tuq")},"data-v-da1f1d32",null);e.default=l.exports}});