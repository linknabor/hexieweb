webpackJsonp([3],{Fb5w:function(e,s){},cxV5:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i,a=t("bOdI"),n=t.n(a),o=t("fxnj"),c=t.n(o),d=void 0,r=(i={data:function(){return{zzshow:!1,currentPage:"main",selectRegion:"false",ruleId:this.$route.query.ruleId,type:this.$route.query.type,product:{},rule:{limitNumOnce:10,price:0},address:{},checkedAddress:{},count:1,productAmount:0,postFee:0,amount:0,coupons:[],allCoupons:[],couponNum:0,coupon:null,couponDesc:"未使用",selectedIndex:-1,totalAmount:0,paying:!1,order:{},receiveTimeType:2,comment:"",datechoooser:{time:"任何时间",comment:"",timePicker:[{name:"工作日",value:0,checked:!1},{name:"节假日",value:1,checked:!1},{name:"任何时间",value:2,checked:!0}],modalShown:!1},addresses:[],submitAddress:{xiaoquEntId:0,receiveName:"",province:"",city:"",county:"",tel:"",xiaoquAddr:"",xiaoquName:"",id:0,detailAddress:""},currentRegionType:1,regions:[],provinces:[],citys:[],countys:[],distinct:"",suggestLocation:"",suggestion:{},suggestions:[]}},watch:{},created:function(){d=this},mounted:function(){d.common.checkRegisterStatus(),d.roady(),d.dataAddress()},components:{}},n()(i,"watch",{suggestLocation:{handler:function(e,s){d.suggestLocation.length>=2&&d.suggestLocation!=d.suggestion._name&&d.getSuggestion()},deep:!0}}),n()(i,"methods",{roady:function(){d.ruleId&&d.type&&(d.queryBuyInfo(),d.queryCoupon())},initSession4Test:function(){d.receiveData.getData(d,"/initSession4Test/79137","Data",function(){})},queryBuyInfo:function(){d.receiveData.getData(d,"/queryBuyInfo/"+d.type+"/"+d.ruleId,"res",function(){d.res.success?(d.product=d.res.result.product,d.rule=d.res.result.rule,d.res.result.address&&(d.checkedAddress=d.res.result.address),d.computeAmount()):alert("订单处理中，请稍后再试！")})},queryCoupon:function(){d.receiveData.getData(d,"/coupon/valid/"+d.type+"/"+d.ruleId,"res",function(){d.res.success?(d.coupons=d.res.result,d.allCoupons=d.res.result,d.computeAmount(),d.filterCouponByAmount()):alert("获取现金券信息失败！")})},filterCouponByAmount:function(){for(var e=[],s=0;s<d.allCoupons.length;s++)d.allCoupons[s].usageCondition<=d.amount&&e.push(d.allCoupons[s]);d.coupons=e},getRegions:function(e,s){var t="regions/"+e+"/"+s;d.receiveData.getData(d,t,"res",function(){d.res.success?d.regions=d.res.result:alert("获取区域信息失败，请稍后重试！")})},showLocation:function(){""!=d.submitAddress.city&&""!=d.submitAddress.county&&""!=d.submitAddress.province?(d.suggestions=[],d.currentPage="xiaoquForm"):alert("请先选择你所在的区域！")},cancelLocation:function(){d.suggestLocation="",d.currentPage="addAddressForm"},submitLocation:function(){d.submitAddress.xiaoquName=d.suggestLocation,d.submitAddress.amapId=d.suggestion._id,d.submitAddress.amapDetailAddr=d.suggestion.detailaddress,d.currentPage="addAddressForm"},chooseLocation:function(e){d.suggestion=e,d.suggestions=[],d.suggestLocation=e._name},showRegion:function(){"true"!=d.selectRegion?(d.selectRegion="true",d.changeRegionView()):d.selectRegion="false"},backRegion:function(e){1==e?(d.currentRegionType=e,d.provinces.length<=0?d.getRegions(1,1):d.regions=d.provinces):2==e&&(d.currentRegionType=e,d.getRegions(2,d.submitAddress.provinceId))},updateRegion:function(e){d.changeRegionView(e.regionType,e.id,e.name)},changeRegionView:function(e,s,t){e?1==e?(d.submitAddress.provinceId!=s||0==city.length?d.getRegions(2,s):d.regions=d.citys,d.submitAddress.province=t,d.submitAddress.provinceId=s,d.currentRegionType=2):2==e?(d.submitAddress.cityId!=s||0==countys.length?d.getRegions(3,s):d.region=d.countys,d.submitAddress.city=t,d.submitAddress.cityId=s,d.currentRegionType=3):3==e&&(d.submitAddress.county=t,d.submitAddress.countyId=s,d.distinct=d.submitAddress.province+d.submitAddress.city+d.submitAddress.county,d.currentRegionType=1,d.selectRegion="false"):0==d.provinces.length?d.getRegions(1,1):d.regions=d.provinces},minusCount:function(){d.count>1&&--d.count&&d.computeAmount()},addCount:function(){d.count<d.rule.limitNumOnce?(d.count++,d.computeAmount()):alert("最多能购买"+d.rule.limitNumOnce+"个")},computeAmount:function(){var e,s,t,i;t=(e=d.rule.price*d.count)+(s=d.count<d.rule.freeShippingNum?d.rule.postageFee:0),null==d.coupon?i=t:d.coupon.usageCondition>t?d.coupon=null:d.coupon.amount>0&&(i=t-d.coupon.amount),d.productAmount=e.toFixed(2),d.postFee=s.toFixed(2),d.amount=t.toFixed(2),d.totalAmount=i>0?i.toFixed(2):"0.01"},showCoupons:function(){d.currentPage="coupons"},focus:function(){},storeMemo:function(){d.comment=d.$refs.bgbei.innerHTML},showModal:function(){d.datechoooser.modalShown=!0},hideModal:function(e){"ptb15 lite-divider"===e.target.className&&(d.datechoooser.modalShown=!1)},selectTime:function(e){for(var s=0;s<d.datechoooser.timePicker.length;s++)d.datechoooser.timePicker[s].checked=!1;d.datechoooser.timePicker[e].checked=!0,d.datechoooser.time=d.datechoooser.timePicker[e].name,d.receiveTimeType=d.datechoooser.timePicker[e].value,d.datechoooser.modalShown=!1},chooseCoupon:function(e){this.selectedIndex!=e?this.selectedIndex=e:this.selectedIndex=-1},confirm:function(){this.selectedIndex<0||this.selectedIndex>=this.coupons.length?this.chooseCoupons(null):this.chooseCoupons(this.coupons[this.selectedIndex])},chooseCoupons:function(e){null==e?(d.coupon=null,d.couponDesc="未使用"):(d.coupon=e,d.couponDesc="￥"+e.amount+"元"),d.computeAmount(),d.currentPage="main"},dataAddress:function(){d.receiveData.getData(d,"/addresses","data",function(){d.data.success?d.addresses=d.data.result:(alert("获取地址信息失败！"),d.addresses=[])})},getSuggestion:function(){var e="amap/"+d.submitAddress.city+"/"+d.suggestLocation;d.receiveData.getData(d,e,"res",function(){d.res.success?d.suggestions=d.res.result:d.suggestions=[]})},aShowAddress:function(){d.currentPage="addrlists"},checks:function(e){d.checkedAddress=e,d.currentPage="main"},toAddAddress:function(){d.currentPage="addAddressForm",d.submitAddress={xiaoquEntId:0,receiveName:"",province:"",city:"",county:"",tel:"",xiaoquAddr:"",xiaoquName:"",id:0,detailAddress:""},d.distinct=""},addAddress:function(){""!=d.submitAddress.province&&""!=d.submitAddress.city&&""!=d.submitAddress.county?""!=d.submitAddress.amapDetailAddr&&""!=d.submitAddress.receiveName&&""!=d.submitAddress.tel&&""!=d.submitAddress.homeAddress?/^1[3-9][0-9]\d{4,8}$/.test(d.submitAddress.tel)?d.saveAddress():alert("请填写正确的手机号！"):alert("请填写完整相关信息！"):alert("请选择地址！")},saveAddress:function(){var e={};e.receiveName=d.submitAddress.receiveName,e.tel=d.submitAddress.tel,e.provinceId=d.submitAddress.provinceId,e.province=d.submitAddress.province,e.cityId=d.submitAddress.cityId,e.city=d.submitAddress.city,e.countyId=d.submitAddress.countyId,e.county=d.submitAddress.county,e.xiaoquName=d.submitAddress.xiaoquName,e.detailAddress=d.submitAddress.amapDetailAddr+d.submitAddress.homeAddress,e.amapDetailAddr=d.submitAddress.amapDetailAddr,e.amapId=d.submitAddress.amapId;d.receiveData.postData(d,"addAddress",e,"res",function(){d.res.success?(d.addresses.push(d.res.result),d.checkedAddress=d.res.result,d.currentPage="addrlists"):alert(null==d.res.message?"地址保存失败，请重试！":d.res.message)})},pay:function(){if(d.paying)alert("订单处理中，请勿重复提交！");else{var e={orderType:d.type,productId:d.product.id,ruleId:d.rule.id,count:d.count,serviceAddressId:d.checkedAddress.id,memo:d.comment,receiveTimeType:d.receiveTimeType};null!=d.coupon&&(e.couponId=d.coupon.id),void 0!=d.checkedAddress.id&&0!=d.checkedAddress.id?d.createOrder(e):alert("请选择地址！")}},createOrder:function(e){d.paying=!0,d.order!={}&&d.order.id>0?d.requestPay():d.receiveData.postData(d,"/createOrder",e,"n",function(){d.n.success?(d.order=d.n.result,d.requestPay()):(alert(null==d.n.message?"订单创建失败，请稍后重试！":d.n.message),d.paying=!1)})},requestPay:function(){d.receiveData.getData(d,"/requestPay/"+d.order.id,"n",function(){d.n.success?(c.a.config({debug:!1,appId:d.n.result.appId,timestamp:d.n.result.timestamp,nonceStr:d.n.result.nonceStr,signature:d.n.result.signature,jsApiList:["chooseWXPay"]}),c.a.chooseWXPay({timestamp:d.n.result.timestamp,nonceStr:d.n.result.nonceStr,package:d.n.result.pkgStr,signType:d.n.result.signType,paySign:d.n.result.signature,success:function(e){alert("下单成功！"),d.$router.push({path:"/success",query:{orderId:d.order.id,type:d.type}})}})):(alert(null==d.n.message?"支付请求失败，请稍后重试！":d.n.message),d.paying=!1)})}}),n()(i,"computed",{}),i),u={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"buy"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[t("div",{staticClass:"bounce1"}),e._v(" "),t("div",{staticClass:"bounce2"}),e._v(" "),t("div",{staticClass:"bounce3"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"black_overlay",attrs:{id:"fade"}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"main"==e.currentPage,expression:"currentPage=='main'"}],staticClass:"zhi"},[t("div",{staticStyle:{background:"white",height:"15px",width:"100%"}},[e._v(" ")]),e._v(" "),t("div",{staticClass:"addr_area",on:{click:e.aShowAddress}},[t("div",{staticClass:"addr-top"},[e._v(" ")]),e._v(" "),t("div",{staticStyle:{"text-align":"center","background-color":"#f7f7f1"}},[e.checkedAddress.receiveName?e._e():t("a",{staticClass:"btn-plain add_btn_style",attrs:{href:"javascript:void(0)"}},[e._v("选择收货地址")])]),e._v(" "),e.checkedAddress.receiveName?t("div",{staticClass:"menu-link fs14 addr_detail"},[t("span",{staticStyle:{color:"#3b3937"},attrs:{id:"infoname"}},[e._v(e._s(e.checkedAddress.receiveName))]),e._v(" "),t("span",{staticStyle:{"margin-left":"15px",color:"#3b3937"},attrs:{id:"infotel"}},[e._v(e._s(e.checkedAddress.tel))]),e._v(" "),t("div",{staticClass:"addr_location",attrs:{id:"infoaddr"}},[e._v(e._s(e.checkedAddress.province)+e._s(e.checkedAddress.city)+e._s(e.checkedAddress.county)+"（"+e._s(e.checkedAddress.xiaoquName)+"）"+e._s(e.checkedAddress.detailAddress))])]):e._e(),e._v(" "),t("div",{staticClass:"addr-f"},[e._v(" ")])]),e._v(" "),t("div",{staticClass:"product_detail"},[t("img",{staticClass:"product_picture",attrs:{src:e.product.smallPicture}}),e._v(" "),t("div",{staticClass:"product_content"},[t("div",{staticClass:"product_name"},[e._v(e._s(e.product.name))]),e._v(" "),t("div",{staticClass:"product_pri_area"},[t("div",{staticClass:"fl fs16 highlight pt5"},[e._v(" ¥"+e._s(e.rule.price)+" ")]),e._v(" "),t("div",{staticClass:"fl fs13",staticStyle:{"margin-left":"10px","padding-top":"7px",color:"#888888"}},[t("del",[e._v("¥"+e._s(e.product.oriPrice))])]),e._v(" "),t("div",{staticClass:"fr fs13",staticStyle:{"padding-top":"7px",color:"#888888"}},[e._v("X "+e._s(e.count))])])])]),e._v(" "),t("div",{staticClass:"line p15 fs15"},[t("span",[e._v("商品价格")]),e._v(" "),t("span",{staticClass:"fr highlight"},[e._v("¥ "+e._s(e.productAmount))])]),e._v(" "),t("div",{staticClass:"line fs15",staticStyle:{height:"50px","line-height":"50px"}},[t("span",[e._v("购买数量")]),e._v(" "),t("span",{staticClass:"fr"},[t("span",{staticClass:"sbtn btn-minus minus-btn-size",class:{active:e.count>1},on:{click:e.minusCount}}),e._v(" "),t("span",{staticClass:"number fs16"},[e._v(e._s(e.count))]),e._v(" "),t("span",{staticClass:"sbtn btn-add active minus-btn-size",on:{click:e.addCount}})])]),e._v(" "),t("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"}},[t("span",{staticClass:"fl"},[e._v("快递费")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.rule.freeShippingNum<999,expression:"rule.freeShippingNum<999"}],staticClass:"fl baoyou_desc"},[e._v("  "+e._s(e.rule.freeShippingNum)+"件包邮")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.postFee,expression:"postFee!=0"}],staticClass:"fr"},[e._v(" ¥ "+e._s(e.rule.postageFee))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==e.postFee,expression:"postFee==0"}],staticClass:"fr"},[t("del",[e._v(" ¥ "+e._s(e.rule.postageFee))])])]),e._v(" "),t("div",{staticClass:"line",staticStyle:{height:"30px"}},[t("span",{staticClass:"fl"},[t("span",{staticClass:"total fs15"},[e._v("商品总额")]),e._v(" "),t("span",{staticClass:"fs10"},[e._v("共"+e._s(e.count)+"个商品")])]),e._v(" "),t("span",{staticClass:"fs20 fr",staticStyle:{"margin-right":"5px"}},[e._v("¥ "+e._s(e.amount))])]),e._v(" "),t("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"},on:{click:e.showCoupons}},[t("span",{staticClass:"fl"},[e._v("现金券")]),e._v(" "),t("span",{staticClass:"fl baoyou_desc"},[e._v("  "+e._s(e.coupons.length)+"张可用")]),e._v(" "),t("div",{staticClass:"fr right_menu"},[e._v(e._s(e.couponDesc)+"  ")])]),e._v(" "),t("div",{staticClass:"p15  highlight",staticStyle:{height:"36px"}},[t("span",{staticClass:"fl fs15"},[e._v("支付金额")]),e._v(" "),t("span",{staticClass:"fr fs20 mlr10"},[e._v(" ¥ "+e._s(e.totalAmount)+"  ")])]),e._v(" "),t("div",{staticClass:"info-wrap bgwhite"},[t("div",{staticClass:"section-title"},[e._v("收货时间")]),e._v(" "),t("a",{staticClass:"menu-link custom-menu-link fs14",staticStyle:{height:"30px"},attrs:{href:"#"},on:{click:e.showModal}},[t("i",{staticClass:"address_icon time-icon fl"}),e._v(e._s(e.datechoooser.time))])]),e._v(" "),t("div",{staticClass:" bgwhite"},[t("div",{staticClass:"fs15",staticStyle:{height:"30px",padding:"15px 0 5px 15px"}},[e._v("备注")]),e._v(" "),t("div",{ref:"bgbei",staticClass:"content p15",staticStyle:{"font-size":"15px"},attrs:{contenteditable:""},on:{click:e.focus,blur:e.storeMemo}}),e._v(" "),t("div",{staticStyle:{height:"80px",position:"relative"}},[e._v(" ")])]),e._v(" "),t("div",{staticClass:"btn-fixed"},[t("div",{staticClass:"btn",class:{useless:e.paying},on:{click:e.pay}},[e._v("立即微信支付")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.datechoooser.modalShown,expression:"datechoooser.modalShown"}],staticClass:"modal-mask",on:{click:e.hideModal}},[t("div",{staticClass:"modal"},e._l(e.datechoooser.timePicker,function(s,i){return t("div",{staticClass:"ptb15 lite-divider",class:{checkedItem:s.checked},on:{click:function(s){return e.selectTime(i)}}},[e._v(e._s(s.name))])}),0)])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"coupons"==e.currentPage,expression:"currentPage=='coupons'"}]},[t("div",{staticClass:"title-line"},[t("div",{staticClass:"title_text"},[e._v("可用现金券")]),e._v(" "),t("div",{staticClass:"title_count"},[e._v("共"+e._s(e.coupons.length)+"个")])]),e._v(" "),t("div",e._l(e.coupons,function(s,i){return t("div",{key:s.id,staticClass:"coupon_item ",class:{selected:i==e.selectedIndex},on:{click:function(s){return e.chooseCoupon(i)}}},[t("div",{staticClass:"outter_bg "},[t("i",{staticClass:"icon_se "}),e._v(" "),t("div",{staticClass:"coupon_desc"},[t("div",{staticClass:"coupon_line_1"},[t("span",{staticClass:"coupon-name"},[e._v(e._s(s.title))]),e._v(" "),t("span",{staticClass:"coupon-time"},[e._v(e._s(s.leftDayDes))])]),e._v(" "),t("div",{staticClass:"coupon-limit"},[e._v("使用期限"+e._s(s.useStartDateStr)+"至"+e._s(s.useEndDateStr))])]),e._v(" "),t("div",{staticClass:"coupon_value"},[t("div",{staticClass:"coupon-amount"},[e._v("￥"+e._s(s.amount))]),e._v(" "),t("div",{staticClass:"coupon-dyq"},[e._v("现金券")])])]),e._v(" "),t("div",[e._v(" ")])])}),0),e._v(" "),t("div",{staticStyle:{height:"15px",width:"100%"}},[e._v(" \n      ")]),e._v(" "),t("div",{staticClass:"btn_area",staticStyle:{"margin-bottom":"15px"}},[t("div",{staticClass:"more_btn",on:{click:e.confirm}},[e._v("确定")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"addrlists"==e.currentPage,expression:"currentPage=='addrlists'"}],staticClass:"diz"},[t("div",{staticClass:"dividers"}),e._v(" "),e._l(e.addresses,function(s){return t("div",{key:s.id,staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(t){return e.checks(s)}}},[t("i",{staticClass:"checkboxs fl",class:{checkeds:e.checkedAddress&&e.checkedAddress.id===s.id}}),e._v(" "),t("div",{staticStyle:{margin:"10px 0 10px 30px"}},[t("span",[e._v(e._s(s.receiveName))]),e._v(" "),t("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(s.tel))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:s.main,expression:"item.main"}],staticClass:"default_item",staticStyle:{"margin-left":"15px"}},[e._v("默认")])]),e._v(" "),t("div",{staticClass:"locations"},[e._v(e._s(s.province)+e._s(s.city)+e._s(s.county)+e._s(s.locationAddr)+"("+e._s(s.xiaoquName)+")"+e._s(s.detailAddress))])])}),e._v(" "),t("div",{staticClass:"tc mt2"},[t("a",{staticClass:"addr_btn_plain",on:{click:e.toAddAddress}},[e._v("新增收货地址")]),t("br")])],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"addAddressForm"==e.currentPage,expression:"currentPage=='addAddressForm'"}],staticStyle:{padding:"0 15px"}},[t("div",{staticClass:"input-wrap lite-dividers lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("联系人")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.submitAddress.receiveName,expression:"submitAddress.receiveName"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入联系人姓名"},domProps:{value:e.submitAddress.receiveName},on:{input:function(s){s.target.composing||e.$set(e.submitAddress,"receiveName",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider"},[t("span",{staticClass:"fl fs15"},[e._v("手机号")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.submitAddress.tel,expression:"submitAddress.tel"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入手机号码"},domProps:{value:e.submitAddress.tel},on:{input:function(s){s.target.composing||e.$set(e.submitAddress,"tel",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link",on:{click:e.showRegion}},[t("span",{staticClass:"fl fs15",staticStyle:{color:"#3b3937"}},[e._v("所在地区")]),e._v(" "),e.distinct?e._e():t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[e._v("请选择所在地区")]),e._v(" "),e.distinct?t("span",{staticClass:"fr fs14"},[e._v(e._s(e.distinct))]):e._e()]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"true"==e.selectRegion,expression:"selectRegion=='true'"}]},[t("div",{staticClass:"tc"},[t("div",{staticClass:"region fl",class:{check:1==e.currentRegionType},on:{click:function(s){return e.backRegion(1)}}},[e._v("选择省")]),e._v(" "),t("div",{staticClass:"region fl",class:{check:2==e.currentRegionType},on:{click:function(s){return e.backRegion(2)}}},[e._v("市")]),e._v(" "),t("div",{staticClass:"region fl",class:{check:3==e.currentRegionType}},[e._v("区县")])]),e._v(" "),t("div",{staticStyle:{width:"100%",overflow:"hidden","background-color":"#e0dede"}},e._l(e.regions,function(s,i){return t("div",{key:s.id,staticClass:"fs14 fl",class:{city:0==Math.floor(i/4%2),city2:1==Math.floor(i/4%2)},on:{click:function(t){return e.updateRegion(s)}}},[e._v(e._s(s.name))])}),0),e._v(" "),t("div",[e._v("  ")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"false"==e.selectRegion,expression:"selectRegion=='false'"}]},[t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link",on:{click:e.showLocation}},[t("span",{staticClass:"fl fs15"},[e._v("小区或大厦")]),e._v(" "),""==e.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[e._v("请输入小区或大厦")]):e._e(),e._v(" "),e.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14"},[e._v(e._s(e.submitAddress.xiaoquName))]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15"},[e._v("小区地址")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.submitAddress.amapDetailAddr,expression:"submitAddress.amapDetailAddr"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：三林路128弄"},domProps:{value:e.submitAddress.amapDetailAddr},on:{input:function(s){s.target.composing||e.$set(e.submitAddress,"amapDetailAddr",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15"},[e._v("楼栋门牌号")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.submitAddress.homeAddress,expression:"submitAddress.homeAddress"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：1号楼402室"},domProps:{value:e.submitAddress.homeAddress},on:{input:function(s){s.target.composing||e.$set(e.submitAddress,"homeAddress",s.target.value)}}})]),e._v(" "),t("div",{staticClass:"btn",on:{click:e.addAddress}},[e._v("保存")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"xiaoquForm"==e.currentPage,expression:"currentPage=='xiaoquForm'"}]},[t("div",{staticStyle:{"background-color":"#fffff8"}},[t("div",{staticClass:"location-wrap"},[t("div",{staticClass:"location-input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.suggestLocation,expression:"suggestLocation"}],staticClass:"location-input",attrs:{placeholder:"请输入小区名称"},domProps:{value:e.suggestLocation},on:{input:function(s){s.target.composing||(e.suggestLocation=s.target.value)}}}),e._v(" "),e.suggestion?t("i",{staticClass:"location-btn-cancel",on:{click:e.cancelLocation}}):e._e()]),e._v(" "),t("span",{staticClass:"location-btn-ensure",on:{click:e.submitLocation}},[e._v("确定")])]),e._v(" "),e.suggestions.length?e._e():t("div",{staticClass:"location-empty-tip"},[e._v("\n                  准确的小区、街道或大厦名称能加快送货速度\n              ")]),e._v(" "),e._l(e.suggestions,function(s){return e.suggestions.length?t("div",{key:s.id,staticClass:"location-location",on:{click:function(t){return e.chooseLocation(s)}}},[t("span",{staticStyle:{position:"relative","font-color":"#cccccc"}},[e._v(e._s(s._name)+" - "+e._s(s._address))])]):e._e()})],2)])])},staticRenderFns:[]};var l=t("VU/8")(r,u,!1,function(e){t("Fb5w")},"data-v-2493e6d2",null);s.default=l.exports}});