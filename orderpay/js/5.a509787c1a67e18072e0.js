webpackJsonp([5],{ZUPx:function(e,s,a){"use strict";(function(e){var t=a("fxnj"),i=a.n(t),r=a("lbHh"),o=a.n(r),c=void 0;s.a={data:function(){return{Mask:this.$route.query.Mask||!1,memo:"",localIdsid:"",uploadPicId:"",pic_length:0,service_order:JSON.parse(window.localStorage.getItem("service_order")),address:{},addrd:"",addresses:[],page:"main",couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],totalAmount:0,couponid:this.$route.query.couponid}},created:function(){c=this},components:{},computed:{},mounted:function(){c.receiveData.postData(c,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var e=c.heheData.result;i.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})}),c.initInfo(),c.computeAmount(),c.getcoupons()},methods:{getcoupons:function(){c.receiveData.getData(c,"/coupon/valid4service/"+c.service_order.service_id+"/"+c.service_order.org_id,"res",function(){c.res.success?null!=c.res.result&&(c.coupons=c.res.result,c.couponNum=c.coupons.length,c.computeAmount()):alert(c.res.message)})},computeAmount:function(){var e;if(void 0!=c.couponid)for(var s=0;s<c.coupons.length;s++)c.couponid==c.coupons[s].id&&(c.coupon=c.coupons[s]);null!=c.coupon&&(null==c.coupon.usageCondition||c.coupon.usageCondition>c.service_order.price?(alert("当前优惠券不可用"),c.coupon=null):c.couponDesc="¥ "+c.coupon.amount),null==c.coupon?e=c.service_order.price:c.coupon.amount>0&&(e=c.service_order.price-c.coupon.amount),c.totalAmount=e>0?Number(e).toFixed(2):.01},showclose:function(){var e=this;c.Mask=!1,setTimeout(function(){c.$router.push({path:"/singlepage"}),e.$router.go(0)},150)},showCoupons:function(){0!=c.coupons.length&&null!=c.coupons&&c.$router.push({path:"/coupon",name:"coupon",query:{single:1,service_id:c.service_order.service_id,org_id:c.service_order.org_id,couponid:c.couponid}})},initInfo:function(){c.receiveData.getData(c,"repair/project/1","res",function(){c.res.success?c.res.result.address&&(c.address=c.res.result.address):alert(null==c.res.message?"请稍后重试！":c.res.message)})},choseAddress:function(){c.page="list",c.dataAddress()},dataAddress:function(){c.receiveData.getData(c,"/addresses?module=repair","data",function(){c.data.success?c.addresses=c.data.result:c.addresses=[]})},checks:function(e){c.address=e,c.page="main"},fixScroll:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)},addPic:function(){i.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(s){var a=s.localIds;c.localIdsid=s.localIds;var t="",r=e("[name='pics']").length;if(r+a.length>6)return alert("所选图片超过6张。"),!1;c.pic_length+=a.length;var o=0;if(window.__wxjs_is_wkwebview){!function s(r){i.a.getLocalImgData({localId:a[r],success:function(i){var o=i.localData;o=o.replace("jgp","jpeg"),t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+o+'" id="'+c.localIdsid[r]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(t),++r<a.length&&s(r)},fail:function(e){alert(e)}})}(o)}else for(o=0;o<a.length;o++)t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+a[o]+'"  id="'+a[o]+'" style="height:100px;width:90px;"/></div>',e("#pic").append(t);r+a.length>=6&&e("#add").hide()},fail:function(e){alert(e)}})},uploadToWechat:function(){var s=0,a=e("[name='pics']");!function e(){var t=a.eq(s).find("img").attr("id");setTimeout(function(){i.a.uploadImage({localId:t,isShowProgressTips:1,success:function(t){var i=t.serverId;c.uploadPicId+=i+",",++s<a.length?e():s==a.length&&c.payMent()}})},50)}()},determine:function(){c.Mask=!0},onlinePay:function(){var s=e("[name='pics']").length;e("#zzmb").show();var a=o.a.get("sectId");if(""==a||"null"==a||0==a||null==a)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=c.basePageUrl+"wuye/index.html?"+c.common.getoriApp()+"#/myhouse",!1;s>0?c.uploadToWechat():c.payMent()},payMent:function(){c.addrd=c.address.province+""+c.address.city+c.address.county+c.address.xiaoquName+c.address.detailAddress;var s={service_id:c.service_order.service_id,service_title:c.service_order.service_title,image:c.service_order.image,link_man:c.address.receiveName,link_tel:c.address.tel,service_addr:c.addrd,tran_amt:c.service_order.price,memo:c.memo,sect_name:c.address.xiaoquName,sect_id:c.address.xiaoquId,imgUrls:c.uploadPicId,org_id:c.service_order.org_id,org_name:c.service_order.org_name};null!=c.coupon&&(s.couponId=c.coupon.id),c.receiveData.postData(c,"/customService/order",s,"res",function(){c.res.success?null==c.res.result.package?c.$router.push({path:"/checkoutsuccess",query:{address:c.addrd,orderId:c.res.result.orderId}}):(i.a.config({debug:!1,appId:c.res.result.appid,timestamp:c.res.result.timestamp,nonceStr:c.res.result.noncestr,signature:c.res.result.paysign,jsApiList:["chooseWXPay"]}),i.a.chooseWXPay({timestamp:c.res.result.timestamp,nonceStr:c.res.result.noncestr,package:c.res.result.package,signType:c.res.result.signtype,paySign:c.res.result.paysign,success:function(e){alert("支付成功！"),c.ChangeState(c.res.result.orderId)},fail:function(){e("#zzmb").hide()},cancel:function(){c.paycancel(c.res.result.orderId)}})):(alert(null==c.res.message?"支付请求失败，请稍后重试!":c.res.message),e("#zzmb").hide())})},paycancel:function(s){c.receiveData.postData(c,"customService/order/cancelPay?orderId="+s,null,"res",function(){c.res.success?(alert("支付取消"),e("#zzmb").hide()):(alert(c.res.message),e("#zzmb").hide())})},ChangeState:function(s){c.receiveData.postData(c,"customService/order/notifyPay?orderId="+s,null,"res",function(){c.res.success?(e("#zzmb").hide(),c.$router.push({path:"/checkoutsuccess",query:{address:c.addrd,orderId:s}})):(alert(null==c.res.message?"系统异常，请稍后重试！":c.res.message),e("#zzmb").hide())})}}}}).call(s,a("7t+N"))},pHiX:function(e,s){},"qe+e":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("ZUPx"),i={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"singlepage"},[a("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"main"==e.page,expression:"page =='main'"}]},[a("div",{staticClass:"topLine"},[e._m(0),e._v(" "),a("div",{staticClass:"fl"},[a("span",[e._v(e._s(e.service_order.service_title))])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!(0==e.service_order.price),expression:"!(service_order.price == 0)"}],staticClass:"fr"},[a("span",[e._v("¥"+e._s(e.service_order.price))])])]),e._v(" "),a("div",{staticClass:"addr_area"},[a("div",{staticClass:"addrtop"},[e._v(" ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.address.receiveName,expression:"address.receiveName"}],staticClass:"custom-menu-link"},[a("div",{staticClass:"sustoma"},[a("span",[e._v(e._s(e.address.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.address.tel))]),e._v(" "),a("div",{staticClass:"addr_location"},[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.county)+e._s(e.address.xiaoquName)+e._s(e.address.detailAddress))])])]),e._v(" "),a("div",{staticClass:"addrbottom"},[e._v(" ")])]),e._v(" "),a("div",[a("div",{staticClass:"single-wt"},[e._v("请具体描述服务需求")]),e._v(" "),a("div",{staticClass:"single-content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],staticClass:"single-text",attrs:{placeholder:"输入具体内容..."},domProps:{value:e.memo},on:{blur:e.fixScroll,input:function(s){s.target.composing||(e.memo=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"single-wt"},[e._v("上传图片")]),e._v(" "),a("div",{staticClass:"pdr2"},[a("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),e._v(" "),a("div",{staticClass:"pl15 pr15"},[a("div",{staticClass:"add-pic-bg fl",attrs:{id:"add"},on:{click:e.addPic}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}}),e._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"btn",on:{click:function(s){e.determine()}}},[e._v("立即下单")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"list"==e.page,expression:"page == 'list'"}],staticClass:"addrlist"},e._l(e.addresses,function(s,t){return a("div",{key:t,staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(a){e.checks(s)}}},[a("i",{staticClass:"checkboxs",class:{checkeds:e.address&&e.address.id===s.id}}),e._v(" "),a("div",[a("span",{staticStyle:{"margin-left":"20px"}},[e._v(e._s(s.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(s.tel))]),e._v(" "),s.main?a("span",{staticClass:"mainlian",staticStyle:{"margin-left":"15px"}},[e._v("默认")]):e._e()]),e._v(" "),a("div",{staticClass:"locations",staticStyle:{"margin-left":"35px"}},[e._v(e._s(s.province)+e._s(s.city)+e._s(s.county)+e._s(s.xiaoquName)+")"+e._s(s.detailAddress))])])})),e._v(" "),a("div",{staticClass:"vue-popup"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.Mask,expression:"Mask"}],staticClass:"mask"}),e._v(" "),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.Mask,expression:"Mask"}],staticClass:"popup-content"},[a("span",{staticClass:"close",on:{click:function(s){e.showclose()}}},[e._v("×")]),e._v(" "),a("div",{staticClass:"proup"},[a("div",[a("span",{staticClass:"fs3"},[e._v("¥ ")]),a("span",{staticClass:"fs4 fs4w"},[e._v(e._s(e.totalAmount))])]),e._v(" "),a("div",{staticClass:"couponitem"},[a("span",{staticClass:"fl"},[e._v("订单金额")]),e._v(" "),a("span",{staticClass:"fr"},[e._v("¥"+e._s(e.service_order.price))])]),e._v(" "),a("div",{staticClass:"couponitem",on:{click:function(s){e.showCoupons()}}},[a("div",{staticClass:"fl"},[a("span",[e._v("优惠券")]),e._v(" "),a("span",{staticClass:" baoyou_desc"},[e._v("  "+e._s(e.couponNum)+"张可用")])]),e._v(" "),a("div",{staticClass:"fr"},[a("span",[e._v(e._s(e.couponDesc))])])]),e._v(" "),a("div",{staticClass:"btn1 btn2",on:{click:e.onlinePay}},[e._v("立即支付")])])])])],1)])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"fl single-img"},[s("img",{attrs:{src:a("uSyS"),alt:""}})])}]};var r=function(e){a("pHiX")},o=a("VU/8")(t.a,i,!1,r,"data-v-3d726790",null);s.default=o.exports},uSyS:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACAElEQVRIS+WW31EbMRCHPzFDkJ8wHTgV4A4CFVglkAoIFUA6MBWEVJBNBUAFSTqADvzmMw9WRncS0Z3lO8nODJnJvd3sn0/702olxRt96o24/HtgaxhXitmBZWJhrGCxhseR8LBNpaXhDIWt7ZbnkfC0zXejYgdcwTXwKRWkpa2S83+BS9v4jzsxDwpujwTp5mqBPfQemALPwNzCzyhoMhLuwv+LYbqGL5G/WFg4u2pyzLzvXAtXMbwFrky9spmCr0fCRV/jeahb5NjC55Fw0/VfGiaKOucpcKvlj4qvYLc/Clyi71owBdCPsQrdOK+i64tTC+/Dvr+CQ7WxMQXvVNoLDfGhqFjJGOy68ZeWem+Sn5fuh5c3CxoSVabu8GMtnPgeaEyVqY/BoxbO+o6L2w4LRVCf38n9IZyKbsW94H2mXGXq858Et6TYB5KK9VKjhUlL6qXhRsH1LjIOLbK3uXzbu6rtAZy/k9bgGMq91e7zuoZ0o3fzOLnIlcFY+AYs/ga8MwmvtDAPK9yY1UvDhWrG4F7wGJqahMlrcV/4ELTVXIk5u1PlOdBesDOWVp4LHQSXwEugWeAceCk0G9wH3wVaBE7BD+Fp1dzh05zHQ9zAxa/MuOGgvuqKocUVhxVHcPe2GnwmpeZpccUhiRuva5im3lo5g31ncE7yPp//D/wbNmD5H1/fFRUAAAAASUVORK5CYII="}});