webpackJsonp([17],{MDye:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("fxnj"),a=s.n(i),r=s("Au9i"),o=s("lbHh"),c=s.n(o),n=void 0,l={data:function(){return{item:{},imgUrlList:[],orderId:this.$route.query.ordersID,zzmb:""}},created:function(){n=this},mounted:function(){var t=location.href.split("#")[0];n.receiveData.wxconfig(n,a.a,["previewImage"],t),n.queryOrder()},methods:{queryOrder:function(){n.receiveData.getData(n,"customService/order?orderId="+n.orderId,"res",function(){if(n.res.success){var t=n.res.result;n.item=t,t.imgUrls&&(n.imgUrlList=t.imgUrls.split(",")),c.a.set("service_id",n.item.productId)}else alert(null==n.res.message?"获取信息失败，请去服务记录中查看！":n.res.message)})},showPhoto:function(t){a.a.previewImage({current:n.imgUrlList[t],urls:n.imgUrlList})},accept:function(){r.MessageBox.confirm("确定要抢下该单吗？").then(function(t){"confirm"==t&&(n.zzmb=!0,n.receiveData.postData(n,"/customService/order/accept?orderId="+n.orderId,null,"res",function(){n.res.success?n.$router.push({path:"/openServicesuccess",query:{ordersID:n.orderId}}):(n.zzmb=!1,alert(null==n.res.message?"系统异常，请稍后重试！":n.res.message))}))}).catch(function(t){})},finish:function(){n.zzmb=!0,n.receiveData.postData(n,"customService/order/confirmByOper?orderId="+n.item.id,null,"res",function(){n.res.success?n.$router.push({path:"/openServicesuccess",query:{ordersID:n.orderId}}):(n.zzmb=!1,alert(null==n.res.message?"系统异常，请稍后重试！":n.res.message))})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operorder"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.zzmb,expression:"zzmb"}],staticClass:"zzmb",attrs:{id:"zzmb"}}),t._v(" "),s("div",{staticClass:"opers"},[s("div",{staticClass:"ov top-title pr15",staticStyle:{"padding-left":"15px"}},[s("div",{staticClass:"ov ptb15"},[s("span",{staticClass:"fl fs15",staticStyle:{color:"#FF8A00"}},[t._v(t._s(t.item.productName))]),t._v(" "),s("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(t.item.statusStr))])])]),t._v(" "),s("div",{staticStyle:{background:"white"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.imgUrlList.length>0,expression:"imgUrlList.length>0"}],staticClass:"photo_area"},t._l(t.imgUrlList,function(e,i){return s("div",{key:i,staticClass:"photo_wrap a_third_m20_height",on:{click:function(e){t.showPhoto(i)}}},[s("img",{staticClass:"photo a_third_m22_height",attrs:{src:e}})])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.item.memo,expression:"item.memo!=''"}],staticClass:"top-info"},[s("div",{staticClass:"item",staticStyle:{"padding-left":"15px"}},[s("span",{staticClass:"value",domProps:{innerHTML:t._s(t.item.memo)}})])])]),t._v(" "),s("div",{staticStyle:{background:"white",padding:"0 15px",margin:"15px 0"}},[s("div",{staticClass:"lite-divider detail-title fs14"},[t._v("\n                        客户信息\n                    ")]),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"custom-menu-link lite-dividers"},[s("p",{staticClass:"value2"},[t._v(t._s(t.item.receiverName)+"\n                                    "),s("a",{staticStyle:{float:"right","padding-right":"10px",color:"#3b3937"},attrs:{href:"tel:"+t.item.tel}},[t._v(t._s(t.item.tel))])])])]),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"custom-menu-link lite-dividers"},[s("p",{staticClass:"value2"},[t._v("所在小区"),s("span",{staticStyle:{float:"right","padding-right":"10px"}},[t._v(t._s(t.item.xiaoquName))])])])]),t._v(" "),s("div",{staticClass:"top-info"},[s("div",{staticClass:"item lite-divider pl0",staticStyle:{"padding-bottom":"15px"}},[s("p",{staticClass:"value",staticStyle:{"padding-top":"5px"}},[t._v(t._s(t.item.address))])])])]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),s("div",{staticClass:"btn-fixed"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.item.status,expression:"item.status==0"}],staticClass:"btn",on:{click:t.accept}},[t._v("我要抢单")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:15==t.item.status,expression:"item.status==15"}],staticClass:"btn",on:{click:t.finish}},[t._v("我已完工")])])])])},staticRenderFns:[]};var v=s("VU/8")(l,d,!1,function(t){s("iF8P")},"data-v-6be09ee6",null);e.default=v.exports},iF8P:function(t,e){}});