webpackJsonp([5],{SYt8:function(e,s){},ZUPx:function(e,s,a){"use strict";(function(e){var t=a("fxnj"),i=a.n(t),r=a("lbHh"),c=a.n(r),o=void 0;s.a={data:function(){return{memo:"",localIdsid:"",uploadPicId:"",pic_length:0,service_order:JSON.parse(window.localStorage.getItem("service_order")),address:{},addrd:"",addresses:[],page:"main",couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],totalAmount:0,couponid:this.$route.query.couponid}},created:function(){o=this},components:{},computed:{},mounted:function(){o.receiveData.postData(o,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var e=o.heheData.result;i.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})}),o.initInfo(),o.computeAmount(),o.getcoupons()},methods:{getcoupons:function(){o.receiveData.getData(o,"/coupon/valid4service/"+o.service_order.service_id+"/"+o.service_order.org_id,"res",function(){o.res.success?null!=o.res.result&&(o.coupons=o.res.result,o.couponNum=o.coupons.length,o.computeAmount()):alert(o.res.message)})},computeAmount:function(){var e;if(void 0!=o.couponid)for(var s=0;s<o.coupons.length;s++)o.couponid==o.coupons[s].id&&(o.coupon=o.coupons[s]);null!=o.coupon&&(null==o.coupon.usageCondition||o.coupon.usageCondition>o.service_order.price?(alert("当前优惠券不可用"),o.coupon=null):o.couponDesc="¥ "+o.coupon.amount),null==o.coupon?e=o.service_order.price:o.coupon.amount>0&&(e=o.service_order.price-o.coupon.amount),o.totalAmount=e>0?Number(e).toFixed(2):.01},showCoupons:function(){0!=o.coupons.length&&null!=o.coupons&&o.$router.push({path:"/coupon",name:"coupon",query:{single:1,service_id:o.service_order.service_id,org_id:o.service_order.org_id,couponid:o.couponid}})},initInfo:function(){o.receiveData.getData(o,"repair/project/1","res",function(){o.res.success?o.res.result.address&&(o.address=o.res.result.address):alert(null==o.res.message?"请稍后重试！":o.res.message)})},choseAddress:function(){o.page="list",o.dataAddress()},dataAddress:function(){o.receiveData.getData(o,"/addresses?module=repair","data",function(){o.data.success?o.addresses=o.data.result:o.addresses=[]})},checks:function(e){o.address=e,o.page="main"},fixScroll:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)},addPic:function(){i.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(s){var a=s.localIds;o.localIdsid=s.localIds;var t="",r=e("[name='pics']").length;if(r+a.length>6)return alert("所选图片超过6张。"),!1;o.pic_length+=a.length;var c=0;if(window.__wxjs_is_wkwebview){!function s(r){i.a.getLocalImgData({localId:a[r],success:function(i){var c=i.localData;c=c.replace("jgp","jpeg"),t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+c+'" id="'+o.localIdsid[r]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(t),++r<a.length&&s(r)},fail:function(e){alert(e)}})}(c)}else for(c=0;c<a.length;c++)t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+a[c]+'"  id="'+a[c]+'" style="height:100px;width:90px;"/></div>',e("#pic").append(t);r+a.length>=6&&e("#add").hide()},fail:function(e){alert(e)}})},uploadToWechat:function(){var s=0,a=e("[name='pics']");!function e(){var t=a.eq(s).find("img").attr("id");setTimeout(function(){i.a.uploadImage({localId:t,isShowProgressTips:1,success:function(t){var i=t.serverId;o.uploadPicId+=i+",",++s<a.length?e():s==a.length&&o.payMent()}})},50)}()},determine:function(){var s=e("[name='pics']").length;e("#zzmb").show();var a=c.a.get("sectId");if(""==a||"null"==a||0==a||null==a)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=o.basePageUrl+"wuye/index.html?"+o.common.getoriApp()+"#/myhouse",!1;s>0?o.uploadToWechat():o.payMent()},payMent:function(){o.addrd=o.address.province+""+o.address.city+o.address.county+o.address.xiaoquName+o.address.detailAddress;var s={service_id:o.service_order.service_id,service_title:o.service_order.service_title,image:o.service_order.image,link_man:o.address.receiveName,link_tel:o.address.tel,service_addr:o.addrd,tran_amt:o.service_order.price,memo:o.memo,sect_name:o.address.xiaoquName,sect_id:o.address.xiaoquId,imgUrls:o.uploadPicId,org_id:o.service_order.org_id,org_name:o.service_order.org_name};null!=o.coupon&&(s.couponId=o.coupon.id),o.receiveData.postData(o,"/customService/order",s,"res",function(){o.res.success?null==o.res.result.package?o.$router.push({path:"/checkoutsuccess",query:{address:o.addrd,orderId:o.res.result.orderId}}):(i.a.config({debug:!1,appId:o.res.result.appid,timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,signature:o.res.result.paysign,jsApiList:["chooseWXPay"]}),i.a.chooseWXPay({timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,package:o.res.result.package,signType:o.res.result.signtype,paySign:o.res.result.paysign,success:function(e){alert("支付成功！"),o.ChangeState(o.res.result.orderId)},fail:function(){e("#zzmb").hide()},cancel:function(){o.paycancel(o.res.result.orderId)}})):(alert(null==o.res.message?"支付请求失败，请稍后重试!":o.res.message),e("#zzmb").hide())})},paycancel:function(s){o.receiveData.postData(o,"customService/order/cancelPay?orderId="+s,null,"res",function(){o.res.success?(alert("支付取消"),e("#zzmb").hide()):(alert(o.res.message),e("#zzmb").hide())})},ChangeState:function(s){o.receiveData.postData(o,"customService/order/notifyPay?orderId="+s,null,"res",function(){o.res.success?(e("#zzmb").hide(),o.$router.push({path:"/checkoutsuccess",query:{address:o.addrd,orderId:s}})):(alert(null==o.res.message?"系统异常，请稍后重试！":o.res.message),e("#zzmb").hide())})}}}}).call(s,a("7t+N"))},"qe+e":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("ZUPx"),i={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"singlepage"},[a("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"main"==e.page,expression:"page =='main'"}]},[a("div",{staticClass:"topLine"},[e._m(0),e._v(" "),a("div",{staticClass:"fl"},[a("span",[e._v(e._s(e.service_order.service_title))])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!(0==e.service_order.price),expression:"!(service_order.price == 0)"}],staticClass:"fr"},[a("span",[e._v("¥"+e._s(e.service_order.price))])])]),e._v(" "),a("div",{staticClass:"addr_area"},[a("div",{staticClass:"addrtop"},[e._v(" ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.address.receiveName,expression:"address.receiveName"}],staticClass:"custom-menu-link"},[a("div",{staticClass:"sustoma"},[a("span",[e._v(e._s(e.address.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.address.tel))]),e._v(" "),a("div",{staticClass:"addr_location"},[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.county)+e._s(e.address.xiaoquName)+e._s(e.address.detailAddress))])])]),e._v(" "),a("div",{staticClass:"addrbottom"},[e._v(" ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!(0==e.service_order.price),expression:"!(service_order.price == 0)"}],staticClass:"getcoupon",on:{click:e.showCoupons}},[a("div",{staticClass:"couponitem"},[a("div",{staticClass:"fl"},[a("span",[e._v("优惠券")]),e._v(" "),a("span",{staticClass:" baoyou_desc"},[e._v("  "+e._s(e.couponNum)+"张可用")])]),e._v(" "),a("div",{staticClass:"fr"},[a("span",[e._v(e._s(e.couponDesc))])])])]),e._v(" "),a("div",[a("div",{staticClass:"single-wt"},[e._v("请具体描述服务需求")]),e._v(" "),a("div",{staticClass:"single-content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],staticClass:"single-text",attrs:{placeholder:"输入具体内容..."},domProps:{value:e.memo},on:{blur:e.fixScroll,input:function(s){s.target.composing||(e.memo=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"single-wt"},[e._v("上传图片")]),e._v(" "),a("div",{staticClass:"pdr2"},[a("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),e._v(" "),a("div",{staticClass:"pl15 pr15"},[a("div",{staticClass:"add-pic-bg fl",attrs:{id:"add"},on:{click:e.addPic}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}}),e._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"btn",on:{click:function(s){e.determine()}}},[e._v("立即下单")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"list"==e.page,expression:"page == 'list'"}],staticClass:"addrlist"},e._l(e.addresses,function(s,t){return a("div",{key:t,staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(a){e.checks(s)}}},[a("i",{staticClass:"checkboxs",class:{checkeds:e.address&&e.address.id===s.id}}),e._v(" "),a("div",[a("span",{staticStyle:{"margin-left":"20px"}},[e._v(e._s(s.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(s.tel))]),e._v(" "),s.main?a("span",{staticClass:"mainlian",staticStyle:{"margin-left":"15px"}},[e._v("默认")]):e._e()]),e._v(" "),a("div",{staticClass:"locations",staticStyle:{"margin-left":"35px"}},[e._v(e._s(s.province)+e._s(s.city)+e._s(s.county)+e._s(s.xiaoquName)+")"+e._s(s.detailAddress))])])}))])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"fl single-img"},[s("img",{attrs:{src:a("uSyS"),alt:""}})])}]};var r=function(e){a("SYt8")},c=a("VU/8")(t.a,i,!1,r,"data-v-28c640e7",null);s.default=c.exports},uSyS:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACAElEQVRIS+WW31EbMRCHPzFDkJ8wHTgV4A4CFVglkAoIFUA6MBWEVJBNBUAFSTqADvzmMw9WRncS0Z3lO8nODJnJvd3sn0/702olxRt96o24/HtgaxhXitmBZWJhrGCxhseR8LBNpaXhDIWt7ZbnkfC0zXejYgdcwTXwKRWkpa2S83+BS9v4jzsxDwpujwTp5mqBPfQemALPwNzCzyhoMhLuwv+LYbqGL5G/WFg4u2pyzLzvXAtXMbwFrky9spmCr0fCRV/jeahb5NjC55Fw0/VfGiaKOucpcKvlj4qvYLc/Clyi71owBdCPsQrdOK+i64tTC+/Dvr+CQ7WxMQXvVNoLDfGhqFjJGOy68ZeWem+Sn5fuh5c3CxoSVabu8GMtnPgeaEyVqY/BoxbO+o6L2w4LRVCf38n9IZyKbsW94H2mXGXq858Et6TYB5KK9VKjhUlL6qXhRsH1LjIOLbK3uXzbu6rtAZy/k9bgGMq91e7zuoZ0o3fzOLnIlcFY+AYs/ga8MwmvtDAPK9yY1UvDhWrG4F7wGJqahMlrcV/4ELTVXIk5u1PlOdBesDOWVp4LHQSXwEugWeAceCk0G9wH3wVaBE7BD+Fp1dzh05zHQ9zAxa/MuOGgvuqKocUVhxVHcPe2GnwmpeZpccUhiRuva5im3lo5g31ncE7yPp//D/wbNmD5H1/fFRUAAAAASUVORK5CYII="}});