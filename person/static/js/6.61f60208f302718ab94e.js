webpackJsonp([6],{"3dmB":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("fxnj"),a=e.n(i),c=e("Au9i"),l=void 0,r={data:function(){return{item:{},imgUrlList:[],commentImgUrlList:[],payTypeName:"微信支付",oTel:"#"}},created:function(){l=this},mounted:function(){var t=location.href.split("#")[0];l.receiveData.wxconfig(l,a.a,["previewImage"],t),l.querys()},methods:{querys:function(){l.receiveData.getData(l,"customService/order?orderId="+l.$route.query.orderId,"res",function(){if(l.res.success){var t=l.res.result;t.imgUrls&&(l.imgUrlList=t.imgUrls.split(",")),t.commentImgUrls&&(l.commentImgUrlList=t.commentImgUrls.split(",")),null!=t.operatorTel&&""!=t.operatorTel&&(l.oTel="tel:"+t.operatorTel),l.item=t}else alert(null==l.res.message?"获取服务信息失败，请去服务记录中查看！":l.res.message)})},showPhoto:function(t){a.a.previewImage({current:l.imgUrlList[t],urls:l.imgUrlList})},showCommentPhoto:function(t){a.a.previewImage({current:l.commentImgUrlList[t],urls:l.commentImgUrlList})},cancel:function(){l.$router.push({path:"/cancelservice",query:{orderId:l.$route.query.orderId}})},finish:function(){null==l.item.payDate?c.MessageBox.confirm("确认完工后，进入付费操作").then(function(t){"confirm"==t&&(window.location.href=l.basePageUrlpay+"orderpay.html?"+l.common.getoriApp()+"#/payment?orderId="+l.item.id+"showstatus="+l.item.showStatus)}).catch(function(t){}):15==l.item.showStatus?l.receiveData.postData(l,"customService/order/confirm?orderId="+l.item.id,null,"res",function(){l.res.success?window.location.href=l.basePageUrlpay+"orderpay.html?"+l.common.getoriApp()+"#/appraise?ordersID="+l.item.id:alert(null==l.res.message?"系统异常，请稍后重试！":l.res.message)}):window.location.href=l.basePageUrlpay+"orderpay.html?"+l.common.getoriApp()+"#/appraise?ordersID="+l.item.id},comment:function(){window.location.href=l.basePageUrlpay+"orderpay.html?"+l.common.getoriApp()+"#/appraise?ordersID="+l.item.id},back:function(){l.$router.push({path:"/myservice"})}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"whd"},[i("div",{staticClass:"myrepair"},[i("div",{staticClass:"ov top-title pr15",staticStyle:{"padding-left":"15px"}},[i("div",{staticClass:"ov ptb15"},[i("span",{staticClass:"fl fs15",staticStyle:{color:"#FF8A00"}},[t._v(t._s(t.item.productName))]),t._v(" "),i("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(t.item.statusStr))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.item.operatorUserId&&t.item.operatorUserId>0,expression:"item.operatorUserId&&item.operatorUserId>0"}],staticClass:"lite-divider fs14"},[i("div",{staticClass:"lite-divider detail-title "},[t._v("\r\n                        服务人员信息\r\n                    ")]),t._v(" "),i("div",{staticClass:"lite-divider top-info ",staticStyle:{"min-height":"60px",width:"100%"}},[i("div",{staticClass:"item fl",staticStyle:{"padding-bottom":"15px"}},[i("p",{staticClass:"value2",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.item.operatorCompanyName))]),t._v(" "),i("p",{staticClass:"value2",staticStyle:{"font-size":"16px","padding-top":"5px"}},[t._v(t._s(t.item.operatorName)),i("span",{staticStyle:{"padding-left":"20px"}},[t._v(t._s(t.item.operatorTel))])])]),t._v(" "),i("div",{staticClass:"fr"},[i("a",{staticClass:"weia",attrs:{href:t.oTel}},[i("img",{staticClass:"phone_icon",attrs:{src:e("TveF")}})])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.item.payDate,expression:"item.payDate != null"}],staticClass:"detail-title",staticStyle:{height:"20px"}},[i("div",{staticClass:"fl"},[t._v("服务费用")]),t._v(" "),i("div",{staticClass:"fr highlight"},[t._v("￥"+t._s(t.item.price))]),t._v(" "),i("div",{staticClass:"fr highlight mr10"},[t._v(t._s(t.payTypeName)+" ● ")])])]),t._v(" "),i("div",{staticStyle:{background:"white"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgUrlList.length>0,expression:"imgUrlList.length>0"}],staticClass:"photo_area"},t._l(t.imgUrlList,function(s,e){return i("div",{key:e,staticClass:"photo_wrap a_third_m20_height",on:{click:function(s){t.showPhoto(e)}}},[i("img",{staticClass:"photo a_third_m22_height",attrs:{src:s}})])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.item.memo,expression:"item.memo!=''"}],staticClass:"top-info"},[i("div",{staticClass:"item",staticStyle:{"padding-left":"15px"}},[i("span",{staticClass:"value",domProps:{innerHTML:t._s(t.item.memo)}})])])]),t._v(" "),i("div",{staticStyle:{background:"white",padding:"0 15px",margin:"15px 0"}},[i("div",{staticClass:"lite-divider detail-title fs14"},[t._v("\r\n                    客户信息\r\n                ")]),t._v(" "),i("div",{staticClass:"top-info"},[i("div",{staticClass:"item lite-divider pl0",staticStyle:{"padding-bottom":"15px"}},[i("p",{staticClass:"value2",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.item.receiverName)),i("span",{staticStyle:{"padding-left":"20px"}},[t._v(t._s(t.item.tel))])]),t._v(" "),i("p",{staticClass:"value",staticStyle:{"padding-top":"5px"}},[t._v(t._s(t.item.address))])]),t._v(" "),i("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[i("div",{staticClass:"menu-link lite-divider"},[i("p",{staticClass:"value2"},[t._v("所在小区"),i("span",{staticStyle:{float:"right","padding-right":"10px"}},[t._v(t._s(t.item.xiaoquName))])])])])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.item.pingjiaStatus,expression:"1 == item.pingjiaStatus"}],staticStyle:{background:"white",padding:"0 15px","margin-top":"15px"}},[i("div",{staticClass:"lite-divider detail-title fs14"},[t._v("\r\n                        我的评价\r\n                    ")]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务质量：")]),t._v(" "),i("span",{staticClass:"margint",staticStyle:{float:"right","margin-right":"10px"}},[i("div",{staticClass:"star",class:{checked:t.item.commentQuality>0}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentQuality>1}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentQuality>2}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentQuality>3}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentQuality>4}})])]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务态度：")]),t._v(" "),i("span",{staticClass:"margint",staticStyle:{float:"right","margin-right":"10px"}},[i("div",{staticClass:"star",class:{checked:t.item.commentAttitude>0}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentAttitude>1}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentAttitude>2}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentAttitude>3}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentAttitude>4}})])]),t._v(" "),i("div",{staticStyle:{"line-height":"35px"}},[i("span",{staticClass:"grade fs15"},[t._v("服务效率：")]),t._v(" "),i("span",{staticClass:"margint",staticStyle:{float:"right","margin-right":"10px"}},[i("div",{staticClass:"star",class:{checked:t.item.commentService>0}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentService>1}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentService>2}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentService>3}}),t._v(" "),i("div",{staticClass:"star",class:{checked:t.item.commentService>4}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.item.comment,expression:"item.comment!=''"}],staticClass:"top-info"},[i("div",{staticClass:"item"},[i("span",{staticClass:"value",domProps:{innerHTML:t._s(t.item.comment)}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.commentImgUrlList.length>0,expression:"commentImgUrlList.length>0"}],staticClass:"photo_area"},t._l(t.commentImgUrlList,function(s,e){return i("div",{key:e,staticClass:"photo_wrap a_third_m20_height",on:{click:function(s){t.showCommentPhoto(e)}}},[i("img",{staticClass:"photo a_third_m22_height",attrs:{src:s}})])}))]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"15px"}}),t._v(" "),i("div",{staticClass:"cbtn-fixed"},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.item.showStatus,expression:"item.showStatus==1"}],staticClass:"cbtn",on:{click:t.cancel}},[t._v("取消订单")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.item.showStatus&&null==t.item.payDate,expression:"item.showStatus == 2 && item.payDate == null"}],staticClass:"tow_btn"},[i("span",{staticClass:"fl tow_btn_l",on:{click:t.cancel}},[t._v("\r\n                        取消\r\n                    ")]),t._v(" "),i("span",{staticClass:"fl tow_btn_r",on:{click:t.finish}},[t._v("\r\n                        完成并支付\r\n                    ")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.item.showStatus&&null!=t.item.payDate,expression:"item.showStatus == 2 && item.payDate != null"}],staticClass:"cbtn",on:{click:t.finish}},[t._v("完成")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:3==t.item.showStatus,expression:"item.showStatus == 3 "}],staticClass:"cbtn",on:{click:t.finish}},[t._v("完成并支付")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:4==t.item.showStatus,expression:"item.showStatus == 4"}],staticClass:"cbtn",on:{click:t.comment}},[t._v("去评价")])])])])},staticRenderFns:[]};var m=e("VU/8")(r,o,!1,function(t){e("9mF9")},"data-v-c6b441ce",null);s.default=m.exports},"9mF9":function(t,s){},TveF:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDYzQUQzNEVBMkNGMTFFNUEyMzJFOTc2MzZGRDRFNzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDYzQUQzNERBMkNGMTFFNUEyMzJFOTc2MzZGRDRFNzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEMjZGOEE1RTcyMjY4MTE4MjJBQjNGRkIxNzlFNzZGIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQzMzM1OTgtMjM4MC0xMWU1LThjMTAtYmU2YTYw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"}});