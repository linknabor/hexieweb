webpackJsonp([6],{"7mnT":function(s,e,t){"use strict";(function(s){var i,a=t("bOdI"),o=t.n(a),n=t("mvHQ"),c=t.n(n),d=t("fxnj"),r=t.n(d),u=t("lbHh"),l=t.n(u),v=void 0;e.a={data:function(){return{searchBarFixed:!1,currentPage:"xinzen",zzshow:!1,shouyin:!0,showxian:!1,ruleId:this.$route.query.ruleId,type:this.$route.query.type,product:{},rule:{limitNumOnce:10,price:0},address:{},checkedAddress:{},count:1,productAmount:0,postFee:0,amount:0,coupons:[],allCoupons:[],couponNum:0,coupon:null,couponDesc:"未使用",selectedIndex:-1,totalAmount:0,order:{},receiveTimeType:2,comment:"",datechoooser:{time:"任何时间",comment:"",timePicker:[{name:"工作日",value:0,checked:!1},{name:"节假日",value:1,checked:!1},{name:"任何时间",value:2,checked:!0}],modalShown:!1},showd:!1,addresses:[],showm:!1,regions:[],provinces:[],citys:[],countys:[],submitAddress:{receiveName:"",tel:"",provinceId:0,province:"",cityId:0,city:"",countyId:0,county:"",xiaoquName:"",amapId:0,amapDetailAddr:"",homeAddress:""},selectRegion:!1,currentRegionType:1,distinct:"",showz:!1,suggestLocation:"",suggestion:{},suggestions:[],paying:!1}},watch:{suggestLocation:function(s,e){v.suggestLocation!=v.suggestion._name&&v.suggestLocation.length>=2&&v.getSuggestion()}},created:function(){v=this},mounted:function(){v.roady(),this.dataAddress(),window.addEventListener("scroll",this.handleScroll)},components:{},methods:(i={handleScroll:function(){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector("#searchBar").offsetTop;v.searchBarFixed=s>e},roady:function(){v.ruleId&&v.type&&(v.queryBuyInfo(),v.queryCoupon())},gotosgrouprulr:function(){v.$router.push({path:"/sgrouprule"})},initSession4Test:function(){v.receiveData.getData(v,"/initSession4Test/105","Data",function(){})},queryBuyInfo:function(){v.receiveData.getData(v,"/queryBuyInfo/"+v.type+"/"+v.ruleId,"res",function(){v.res.success?(v.product=v.res.result.product,v.rule=v.res.result.rule,v.res.result.address&&(v.checkedAddress=v.res.result.address),v.computeAmount()):alert("订单处理中，请稍后再试！")})},queryCoupon:function(){v.receiveData.getData(v,"/coupon/valid/"+v.type+"/"+v.ruleId,"res",function(){v.res.success?(v.coupons=v.res.result,v.allCoupons=v.res.result,v.couponNum=v.coupons.length,v.computeAmount()):alert("获取现金券信息失败！")})},minusCount:function(){v.count>1&&--v.count&&v.computeAmount()},addCount:function(){v.count<v.rule.limitNumOnce?(v.count++,v.computeAmount()):alert("数量限购"+v.rule.limitNumOnce+"件")},computeAmount:function(){var s,e,t,i;t=(s=v.rule.price*v.count)+(e=v.count<v.rule.freeShippingNum?v.rule.postageFee:0),v.filterCouponByAmount(t),v.couponNum=v.coupons.length,null==v.coupon?i=t:v.coupon.usageCondition>t?v.coupon=null:v.coupon.amount>0&&(i=t-v.coupon.amount),v.productAmount=s.toFixed(2),v.postFee=e.toFixed(2),v.amount=t.toFixed(2),v.totalAmount=i>0?i.toFixed(2):"0.01"},filterCouponByAmount:function(s){for(var e=[],t=0;t<v.allCoupons.length;t++)v.allCoupons[t].usageCondition<=s&&e.push(v.allCoupons[t]);v.coupons=e},showCoupons:function(){v.shouyin=!1,v.showxian=!0},focus:function(){},storeMemo:function(){v.comment=v.$refs.bgbei.innerHTML},showModal:function(){v.datechoooser.modalShown=!0},hideModal:function(s){"ptb15 lite-divider"===s.target.className&&(v.datechoooser.modalShown=!1)},selectTime:function(s){for(var e=0;e<v.datechoooser.timePicker.length;e++)v.datechoooser.timePicker[e].checked=!1;v.datechoooser.timePicker[s].checked=!0,v.datechoooser.time=v.datechoooser.timePicker[s].name,v.receiveTimeType=v.datechoooser.timePicker[s].value,v.datechoooser.modalShown=!1},chooseCoupon:function(s){this.selectedIndex!=s?this.selectedIndex=s:this.selectedIndex=-1},confirm:function(){this.selectedIndex<0||this.selectedIndex>=this.coupons.length?this.chooseCoupons(null):this.chooseCoupons(this.coupons[this.selectedIndex])},chooseCoupons:function(s){null==s?(v.coupon=null,v.couponDesc="未使用"):(v.coupon=s,v.couponDesc="￥"+s.amount+"元"),v.computeAmount(),v.shouyin=!0,v.showxian=!1},dataAddress:function(){v.receiveData.getData(v,"/addresses","data",function(){v.data.success?(v.addresses=v.data.result,v.showm=!0):(alert("获取地址信息失败！"),v.addresses=[],v.showm=!1)})},showRegion:function(){v.selectRegion=!v.selectRegion,v.selectRegion&&v.changeRegionView()},backRegion:function(s){v.getRegions(s,1)}},o()(i,"backRegion",function(s){v.getRegions(s,v.submitAddress.provinceId)}),o()(i,"updateRegion",function(s){v.changeRegionView(s.regionType,s.id,s.name)}),o()(i,"changeRegionView",function(s,e,t){s?1==s?(v.submitAddress.provinceId!=e||0==v.citys.length?v.getRegions(2,e):v.regions=v.citys,v.submitAddress.province=t,v.submitAddress.provinceId=e,v.currentRegionType=2):2==s?(v.submitAddress.cityId!=e||0==v.countys.length?v.getRegions(3,e):v.regions=v.countys,v.submitAddress.city=t,v.submitAddress.cityId=e,v.currentRegionType=3):3==s&&(v.submitAddress.county=t,v.submitAddress.countyId=e,v.distinct=v.submitAddress.province+v.submitAddress.city+v.submitAddress.county,v.selectRegion=!1):0==v.provinces.length?v.getRegions(1,1):v.regions=v.provinces}),o()(i,"getRegions",function(s,e){v.currentRegionType=s,v.receiveData.getData(v,"/regions/"+s+"/"+e,"data",function(){v.data.success?v.regions=v.data.result:alert("获取区域信息失败，请稍后重试！")})}),o()(i,"showLocation",function(){""==v.submitAddress.city||""==v.submitAddress.county||""==v.submitAddress.province?alert("请先选择你所在的区域"):(v.suggestions=[],v.currentPage="location")}),o()(i,"getSuggestion",function(){v.receiveData.getData(v,"amap/"+v.submitAddress.city+"/"+v.suggestLocation,"data",function(){v.data.success?v.suggestions=v.data.result:v.suggestions=[]})}),o()(i,"cancelLocation",function(){v.suggestLocation="",v.currentPage="xinzen"}),o()(i,"submitLocation",function(){v.submitAddress.xiaoquName=v.suggestLocation,v.submitAddress.amapId=v.suggestion._id,v.submitAddress.amapDetailAddr=v.suggestion.detailaddress,v.currentPage="xinzen"}),o()(i,"chooseLocation",function(s){v.suggestion=s,v.suggestLocation=s._name,v.suggestions=[]}),o()(i,"showAddress",function(){v.shouyin=!1,v.showd=!0,v.showm=!0}),o()(i,"checks",function(s){v.checkedAddress=s,v.shouyin=!0,v.showd=!1}),o()(i,"toAddAddress",function(){v.showm=!1,v.showz=!0,v.submitAddress={receiveName:"",tel:"",provinceId:0,province:"",cityId:0,city:"",countyId:0,county:"",xiaoquName:"",amapId:0,amapDetailAddr:"",homeAddress:""},v.distinct="",v.suggestLocation=""}),o()(i,"saveAddress",function(){var e={};e.receiveName=v.submitAddress.receiveName,e.tel=v.submitAddress.tel,e.provinceId=v.submitAddress.provinceId,e.province=v.submitAddress.province,e.cityId=v.submitAddress.cityId,e.city=v.submitAddress.city,e.countyId=v.submitAddress.countyId,e.county=v.submitAddress.county,e.xiaoquName=v.submitAddress.xiaoquName,e.detailAddress=v.submitAddress.amapDetailAddr+v.submitAddress.homeAddress,e.amapDetailAddr=v.submitAddress.amapDetailAddr,e.amapId=v.submitAddress.amapId,e.main=v.isDefault,v.zzshow=!0,v.receiveData.postData(v,"/addAddress",e,"n",function(){v.n.success?(v.addresses.push(v.n.result),v.checkedAddress=v.n.result,v.zzshow=!1,v.showz=!1,v.showz||(v.shouyin=!0)):alert(null==v.n.message?"地址保存失败，请重试！":v.n.message),s("#zzmb").hide()})}),o()(i,"addAddressa",function(){""!=v.submitAddress.province&&""!=v.submitAddress.city&&""!=v.submitAddress.county?""!=v.submitAddress.amapDetailAddr&&""!=v.submitAddress.receiveName&&""!=v.submitAddress.tel&&""!=v.submitAddress.homeAddress?/^1[3-9][0-9]\d{8}$/.test(v.submitAddress.tel)?v.saveAddress():alert("请填写正确的手机号！"):alert("请填写完整相关信息！"):alert("请选择地址！")}),o()(i,"showpage",function(){v.showm=!0,v.showz=!1}),o()(i,"pay",function(){var s=l.a.get("sectId");if(""==s||"null"==s||0==s||null==s)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=v.basePageUrl+"wuye/index.html?"+v.common.getoriApp()+"#/myhouse",!1;if(v.paying)alert("订单处理中，请勿重复提交！");else{v.paying=!0,v.zzshow=!0;var e={orderType:"4",productId:v.product.id,ruleId:v.rule.id,count:v.count,serviceAddressId:v.checkedAddress.id,memo:v.comment,receiveTimeType:v.receiveTimeType,payType:2};null!=v.coupon&&(e.couponId=v.coupon.id),void 0!=v.checkedAddress.id&&0!=v.checkedAddress.id?v.createOrder(e):alert("请选择地址！")}}),o()(i,"createOrder",function(s){v.order!={}&&v.order.id>0?v.requestPay():v.receiveData.postData(v,"/createOrder",s,"n",function(){v.n.success?(v.order=v.n.result,v.requestPay()):(alert(null==v.n.message?"订单创建失败，请稍后重试！":v.n.message),v.paying=!1)})}),o()(i,"requestPay",function(){v.receiveData.getData(v,"/requestPay/"+v.order.id,"n",function(){v.n.success?(r.a.config({debug:!1,appId:v.n.result.appId,timestamp:v.n.result.timestamp,nonceStr:v.n.result.nonceStr,signature:v.n.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({appId:v.n.result.appId,timestamp:v.n.result.timestamp,nonceStr:v.n.result.nonceStr,package:v.n.result.pkgStr,signType:v.n.result.signType,paySign:v.n.result.signature,success:function(s){v.zzshow=!1,alert("下单成功！"),v.$router.push({path:"/success",query:{orderId:v.order.id,type:v.type}})},fail:function(s){v.zzshow=!1,alert(c()(s))},cancel:function(s){alert("支付取消"),v.zzshow=!1,v.paying=!1}})):null!=v.n.message&&(alert(v.n.message),v.zzshow=!1,v.paying=!1)})}),i),computed:{}}}).call(e,t("7t+N"))},agXU:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("7mnT"),a={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",[i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:s.showxian,expression:"showxian"}]},[i("div",{staticClass:"title-line"},[i("div",{staticClass:"title_text"},[s._v("可用现金券")]),s._v(" "),i("div",{staticClass:"title_count"},[s._v("共"+s._s(s.coupons.length)+"个")])]),s._v(" "),i("div",s._l(s.coupons,function(e,t){return i("div",{key:e.id,staticClass:"coupon_item ",class:{selected:t==s.selectedIndex},on:{click:function(e){s.chooseCoupon(t)}}},[i("div",{staticClass:"outter_bg "},[i("i",{staticClass:"icon_se "}),s._v(" "),i("div",{staticClass:"coupon_desc"},[i("div",{staticClass:"coupon_line_1"},[i("span",{staticClass:"coupon-name"},[s._v(s._s(e.title))]),s._v(" "),i("span",{staticClass:"coupon-time"},[s._v(s._s(e.leftDayDes))])]),s._v(" "),i("div",{staticClass:"coupon-limit"},[s._v("使用期限"+s._s(e.useStartDateStr)+"至"+s._s(e.useEndDateStr))])]),s._v(" "),i("div",{staticClass:"coupon_value"},[i("div",{staticClass:"coupon-amount"},[s._v("￥"+s._s(e.amount))]),s._v(" "),i("div",{staticClass:"coupon-dyq"},[s._v("现金券")])])]),s._v(" "),i("div",[s._v(" ")])])}),0),s._v(" "),i("div",{staticStyle:{height:"15px",width:"100%"}},[s._v(" \r\n            ")]),s._v(" "),i("div",{staticClass:"btn_area",staticStyle:{"margin-bottom":"15px"}},[i("div",{staticClass:"more_btn",on:{click:s.confirm}},[s._v("确定")])])]),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.zzshow,expression:"zzshow"}],staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"}}),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.showd,expression:"showd"}],staticClass:"diz"},[i("div",{directives:[{name:"show",rawName:"v-show",value:s.showm,expression:"showm"}]},[s._l(s.addresses,function(e){return i("div",{staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(t){s.checks(e)}}},[i("i",{staticClass:"checkboxs fl",class:{checkeds:s.checkedAddress&&s.checkedAddress.id===e.id}}),s._v(" "),i("div",{staticStyle:{margin:"10px 0 10px 30px"}},[i("span",[s._v(s._s(e.receiveName))]),s._v(" "),i("span",{staticStyle:{"margin-left":"15px"}},[s._v(s._s(e.tel))]),s._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.main,expression:"item.main"}],staticClass:"default_item",staticStyle:{"margin-left":"15px"}},[s._v("默认")])]),s._v(" "),i("div",{staticClass:"locations"},[s._v(s._s(e.province)+s._s(e.city)+s._s(e.county)+s._s(e.locationAddr)+"("+s._s(e.xiaoquName)+")"+s._s(e.detailAddress))])])}),s._v(" "),i("div",{staticClass:"tc mt2"},[i("div",{staticClass:"addr_btn_plain",on:{click:s.toAddAddress}},[s._v("新增收货地址")]),i("br")])],2),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.showz,expression:"showz"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:"xinzen"==s.currentPage,expression:"currentPage=='xinzen'"}]},[i("div",{staticClass:"input-wrap lite-divider"},[i("span",{staticClass:"fl fs15"},[s._v("联系人")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.receiveName,expression:"submitAddress.receiveName"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入联系人姓名"},domProps:{value:s.submitAddress.receiveName},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"receiveName",e.target.value)}}})]),s._v(" "),i("div",{staticClass:"input-wrap lite-divider"},[i("span",{staticClass:"fl fs15"},[s._v("手机号")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.tel,expression:"submitAddress.tel"}],staticClass:"fr fs14 hidden-input",attrs:{type:"tel",placeholder:"请输入手机号码"},domProps:{value:s.submitAddress.tel},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"tel",e.target.value)}}})]),s._v(" "),i("div",{staticClass:"input-wrap lite-divider menu-link",on:{click:s.showRegion}},[i("span",{staticClass:"fl fs15",staticStyle:{color:"#3b3937"}},[s._v("所在地区")]),s._v(" "),s.distinct?s._e():i("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请选择所在地区")]),s._v(" "),s.distinct?i("span",{staticClass:"fr fs14"},[s._v(s._s(s.distinct))]):s._e()]),s._v(" "),1==s.selectRegion?i("div",[i("div",{staticClass:"tc"},[i("div",{staticClass:"region  fl",class:{check:1==s.currentRegionType},on:{click:function(e){s.backRegion(1)}}},[s._v("选择省")]),s._v(" "),i("div",{staticClass:"region fl",class:{check:2==s.currentRegionType},on:{click:function(e){s.backRegion(2)}}},[s._v("市")]),s._v(" "),i("div",{staticClass:"region fl",class:{check:3==s.currentRegionType}},[s._v("区县")])]),s._v(" "),i("div",{staticStyle:{width:"100%",clear:"both","background-color":"#e0dede",overflow:"hidden"}},s._l(s.regions,function(e,t){return i("div",{staticClass:"fs14 fl",class:{city:0==Math.floor(t/4%2),city2:1==Math.floor(t/4%2)},on:{click:function(t){s.updateRegion(e)}}},[s._v(s._s(e.name))])}),0),s._v(" "),i("div",[s._v("  ")])]):s._e(),s._v(" "),0==s.selectRegion?i("div",{staticStyle:{clear:"both"}},[i("div",{staticClass:"input-wrap lite-divider  menu-link",on:{click:s.showLocation}},[i("span",{staticClass:"fl fs15"},[s._v("小区或大厦")]),s._v(" "),""==s.submitAddress.xiaoquName?i("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请输入小区或大厦")]):s._e(),s._v(" "),s.submitAddress.xiaoquName?i("span",{staticClass:"fr fs14"},[s._v(s._s(s.submitAddress.xiaoquName))]):s._e()]),s._v(" "),i("div",{staticClass:"input-wrap lite-divider"},[i("span",{staticClass:"fl fs15"},[s._v("小区地址")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.amapDetailAddr,expression:"submitAddress.amapDetailAddr"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：三林路128弄"},domProps:{value:s.submitAddress.amapDetailAddr},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"amapDetailAddr",e.target.value)}}})]),s._v(" "),i("div",{staticClass:"input-wrap lite-divider"},[i("span",{staticClass:"fl fs15"},[s._v("楼栋门牌号")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.homeAddress,expression:"submitAddress.homeAddress"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：1号楼402室"},domProps:{value:s.submitAddress.homeAddress},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"homeAddress",e.target.value)}}})]),s._v(" "),i("div",{staticClass:"addr_btn",on:{click:function(e){s.addAddressa()}}},[s._v("保存")]),s._v(" "),i("div",{staticClass:"addr_btn",on:{click:function(e){s.showpage()}}},[s._v("返回列表")])]):s._e()])]),s._v(" "),"location"==s.currentPage?i("div",{staticStyle:{"background-color":"#fffff8"}},[i("div",{staticClass:"location-wrap"},[i("div",{staticClass:"location-input-wrap"},[i("div",{staticClass:"location-i"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.suggestLocation,expression:"suggestLocation"}],staticClass:"location-input",attrs:{placeholder:"请输入小区名称"},domProps:{value:s.suggestLocation},on:{input:function(e){e.target.composing||(s.suggestLocation=e.target.value)}}})]),s._v(" "),s.suggestLocation?i("i",{staticClass:"location-btn-cancel",on:{click:s.cancelLocation}}):s._e()]),s._v(" "),i("span",{staticClass:"location-btn-ensure",on:{click:s.submitLocation}},[s._v("确定")])]),s._v(" "),s.suggestions.length?s._e():i("div",{staticClass:"location-empty-tip"},[s._v("\r\n                        准确的小区、街道或大厦名称能加快送货速度\r\n                    ")]),s._v(" "),s._l(s.suggestions,function(e){return s.suggestions.length?i("div",{staticClass:"location-location",on:{click:function(t){s.chooseLocation(e)}}},[i("span",{staticStyle:{position:"relative","font-color":"#cccccc","font-size":"16px"}},[s._v(s._s(e._name)+" - "+s._s(e._address))])]):s._e()})],2):s._e()]),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.shouyin,expression:"shouyin"}],staticClass:"zhi"},[i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:4==s.type,expression:"type==4"}],class:{rule_intro:s.searchBarFixed},staticStyle:{width:"100%"},attrs:{id:"searchBar"},on:{click:s.gotosgrouprulr}},[i("img",{staticStyle:{},attrs:{alt:"",src:t("S8T/")}})])]),s._v(" "),i("div",{staticStyle:{background:"white",height:"15px",width:"100%"}},[s._v(" ")]),s._v(" "),i("div",{staticClass:"addr_area",on:{click:s.showAddress}},[i("div",{staticClass:"addr-top"},[s._v(" ")]),s._v(" "),i("div",{staticStyle:{"text-align":"center","background-color":"#f7f7f1"}},[i("a",{directives:[{name:"show",rawName:"v-show",value:!s.checkedAddress.receiveName,expression:"!checkedAddress.receiveName"}],staticClass:"btn-plain add_btn_style",attrs:{href:"javascript:void(0);"}},[s._v("选择收货地址")])]),s._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:s.checkedAddress.receiveName,expression:"checkedAddress.receiveName"}],staticClass:"menu-link fs14 addr_detail",attrs:{href:"javascript:void(0);"}},[i("span",{staticStyle:{color:"#3b3937"},attrs:{id:"infoname"}},[s._v(s._s(s.checkedAddress.receiveName))]),s._v(" "),i("span",{staticStyle:{"margin-left":"15px",color:"#3b3937"},attrs:{id:"infotel"}},[s._v(s._s(s.checkedAddress.tel))]),s._v(" "),i("div",{staticClass:"addr_location",attrs:{id:"infoaddr"}},[s._v(s._s(s.checkedAddress.province)+s._s(s.checkedAddress.city)+s._s(s.checkedAddress.county)+"（"+s._s(s.checkedAddress.xiaoquName)+"）"+s._s(s.checkedAddress.detailAddress))])]),s._v(" "),i("div",{staticClass:"addr-f"},[s._v(" ")])]),s._v(" "),i("div",{staticClass:"product_detail"},[i("img",{staticClass:"product_picture",attrs:{src:s.product.smallPicture}}),s._v(" "),i("div",{staticClass:"product_content"},[i("div",{staticClass:"product_name"},[s._v(s._s(s.product.name))]),s._v(" "),i("div",{staticClass:"product_pri_area"},[i("div",{staticClass:"fl fs16 highlight pt5"},[s._v(" ¥"+s._s(s.rule.price)+" ")]),s._v(" "),i("div",{staticClass:"fl fs13",staticStyle:{"margin-left":"10px","padding-top":"7px",color:"#888888"}},[i("del",[s._v("¥"+s._s(s.product.oriPrice))])]),s._v(" "),i("div",{staticClass:"fr fs13",staticStyle:{"padding-top":"7px",color:"#888888"}},[s._v("X "+s._s(s.count))])])])]),s._v(" "),i("div",{staticClass:"line p15 fs15"},[i("span",[s._v("商品价格")]),s._v(" "),i("span",{staticClass:"fr highlight"},[s._v("¥ "+s._s(s.productAmount))])]),s._v(" "),i("div",{staticClass:"line fs15",staticStyle:{height:"50px","line-height":"50px"}},[i("span",[s._v("购买数量")]),s._v(" "),i("span",{staticClass:"fr"},[i("span",{staticClass:"sbtn btn-minus minus-btn-size",class:{active:s.count>1},on:{click:s.minusCount}}),s._v(" "),i("span",{staticClass:"number fs16"},[s._v(s._s(s.count))]),s._v(" "),i("span",{staticClass:"sbtn btn-add active minus-btn-size",on:{click:s.addCount}})])]),s._v(" "),i("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"}},[i("span",{staticClass:"fl"},[s._v("快递费")]),s._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:s.rule.freeShippingNum<999,expression:"rule.freeShippingNum<999"}],staticClass:"fl baoyou_desc"},[s._v("  "+s._s(s.rule.freeShippingNum)+"件包邮")]),s._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:0!=s.postFee,expression:"postFee!=0"}],staticClass:"fr"},[s._v(" ¥ "+s._s(s.rule.postageFee))]),s._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:0==s.postFee,expression:"postFee==0"}],staticClass:"fr"},[i("del",[s._v(" ¥ "+s._s(s.rule.postageFee))])])]),s._v(" "),i("div",{staticClass:"line",staticStyle:{height:"30px"}},[i("span",{staticClass:"fl"},[i("span",{staticClass:"total fs15"},[s._v("商品总额")]),s._v(" "),i("span",{staticClass:"fs10"},[s._v("共"+s._s(s.count)+"个商品")])]),s._v(" "),i("span",{staticClass:"fs20 fr",staticStyle:{"margin-right":"5px"}},[s._v("¥ "+s._s(s.amount))])]),s._v(" "),i("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"},on:{click:s.showCoupons}},[i("span",{staticClass:"fl"},[s._v("现金券")]),s._v(" "),i("span",{staticClass:"fl baoyou_desc"},[s._v("  "+s._s(s.couponNum)+"张可用")]),s._v(" "),i("div",{staticClass:"fr right_menu"},[s._v(s._s(s.couponDesc)+"  ")])]),s._v(" "),i("div",{staticClass:"p15  highlight",staticStyle:{height:"36px"}},[i("span",{staticClass:"fl fs15"},[s._v("支付金额")]),s._v(" "),i("span",{staticClass:"fr fs20 mlr10"},[s._v(" ¥ "+s._s(s.totalAmount)+"  ")])]),s._v(" "),i("div",{staticClass:"info-wrap bgwhite"},[i("div",{staticClass:"section-title"},[s._v("收货时间")]),s._v(" "),i("a",{staticClass:"menu-link custom-menu-link fs14",staticStyle:{height:"30px"},attrs:{href:"javascript:void(0)"},on:{click:s.showModal}},[i("i",{staticClass:"address_icon time-icon fl"}),s._v(s._s(s.datechoooser.time))])]),s._v(" "),i("div",{staticClass:" bgwhite"},[i("div",{staticClass:"fs15",staticStyle:{height:"30px",padding:"15px 0 5px 15px"}},[s._v("备注")]),s._v(" "),i("div",{ref:"bgbei",staticClass:"content p15",staticStyle:{"font-size":"15px"},attrs:{contenteditable:""},on:{click:s.focus,blur:s.storeMemo}}),s._v(" "),i("div",{staticStyle:{height:"80px",position:"relative"}},[s._v(" ")])]),s._v(" "),i("div",{staticClass:"btn-fixed"},[i("div",{staticClass:"btn",on:{click:s.pay}},[s._v("立即微信支付")])]),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:s.datechoooser.modalShown,expression:"datechoooser.modalShown"}],staticClass:"modal-mask",on:{click:s.hideModal}},[i("div",{staticClass:"modal"},s._l(s.datechoooser.timePicker,function(e,t){return i("div",{staticClass:"ptb15 lite-divider",class:{checkedItem:e.checked},on:{click:function(e){s.selectTime(t)}}},[s._v(s._s(e.name))])}),0)])])])])},staticRenderFns:[]};var o=function(s){t("tCBl")},n=t("VU/8")(i.a,a,!1,o,"data-v-24ff579c",null);e.default=n.exports},tCBl:function(s,e){}});