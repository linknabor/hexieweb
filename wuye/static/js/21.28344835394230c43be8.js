webpackJsonp([21],{"6m+h":function(e,t,i){"use strict";var n=(i("t40W"),void 0),a=void 0;t.a={data:function(){return{name:"",select:"",hao:"",isOriginHei:!0,screenHeight:document.documentElement.clientHeight,originHeight:document.documentElement.clientHeight,sectList:[],buildList:[],unitList:[],houseList:[],query:{sect:"",sectID:"",buildname:"",build:"",unitname:"",unit:"",housename:"",house:""},shows:!1,showi:!1,flay:!0}},created:function(){n=this},mounted:function(){var e=this;window.onresize=function(){return function(){e.screenHeight=document.documentElement.clientHeight}()}},watch:{screenHeight:function(e){this.originHeight>e+100?this.isOriginHei=!1:this.isOriginHei=!0}},components:{},methods:{sousuo:function(e){var t=this;a&&clearTimeout(a),a=setTimeout(function(){""!=e?t.getHousin(e):n.shows=!1},500)},getHousin:function(e){var t="/getVagueSectByName?sect_name="+e;n.receiveData.getData(n,t,"res",function(){null!=n.res.result?(n.sectList=n.res.result.sect_info,n.sectList.length>0&&(n.shows=!0),n.showi=!0):(n.shows=!1,n.showi=!0)})},clicki:function(){if(n.sectList.length<=0){n.query.sect="",n.query.build="",n.query.unit="",n.query.house="";var e=document.getElementById("btnd");e.value=""}n.query.sect="",n.query.build="",n.query.unit="",n.query.house="",n.buildList=[],n.unitList=[],n.houseList=[];var e=document.getElementById("btnd");e.value="",n.shows=!1,n.showi=!1},alertFN:function(e){n.$nextTick(function(){document.getElementById("btnd").value=e.name,n.query.sect=e.name,n.query.sectID=e.id;var t=e.params.CORONA_PREVENTION_MODE;"0"!=t&&void 0!=t&&""!=t||alert("您选择的小区没有开放该功能，您的登记可能无效"),n.shows=!1,n.add()})},add:function(){n.getCellMng(n.query.sectID,"","","03"),n.getCellMng(n.query.sectID,"0","","02"),n.getCellMng(n.query.sectID,"0","0","01")},getCouponSelected:function(){for(var e=0;e<n.buildList.length;e++)n.query.build==n.buildList[e].id&&(n.query.buildname=n.buildList[e].name);n.getCellMng(n.query.sectID,n.query.build,"","02"),n.getCellMng(n.query.sectID,n.query.build,"0","01")},getCoupon:function(){for(var e=0;e<n.unitList.length;e++)n.query.unit==n.unitList[e].id&&(n.query.unitname=n.unitList[e].name);n.getCellMng(n.query.sectID,n.query.build,n.query.unit,"01")},getCoupons:function(){for(var e=0;e<n.houseList.length;e++)n.query.house==n.houseList[e].id&&(n.query.housename=n.houseList[e].name)},getCellMng:function(e,t,i,a){var s={sect_id:e,build_id:t,unit_id:i,data_type:a};n.receiveData.getData(n,"/getHeXieCellById","queryInfo",function(){var e=n.queryInfo.result;n.queryBillInfo=[],"03"==a?n.buildList=e.build_info:"02"==a?(n.unitList=e.unit_info,1==n.unitList.length&&n.getCellMng(n.query.sectID,n.query.build,n.query.unit,"01")):"01"==a&&(n.houseList=e.house_info)},s)},fixScroll:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)},ben:function(){if(n.flay)if(n.flay=!1,""==n.query.sect){var e=confirm("你未选择所在小区和具体住址，确定要提交吗？预约的申请可能不会被所在小区收到");1==e?n.content():n.flay=!0}else if(""==n.name||""==n.select||""==n.hao){confirm("请填写预约人信息");n.flay=!0}else n.content()},content:function(){n.receiveData.postData(n,"/health/maskResv",{threadContent:n.name+","+n.select+","+n.hao,userSectId:n.query.sectID,userSectName:n.query.sect,UserAddress:n.query.buildname+""+n.query.unitname+n.query.housename},"res",function(){n.res.success?(alert("提交成功"),n.$router.push({path:"/catalog"})):(n.flay=!0,alert(null==n.res.message?"提交失败，请重试":n.res.message))})}},computed:{}}},GHY5:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mask"},[i("div",[i("div",{staticClass:"main"},[i("div",{staticClass:"mint-tab-container-item"},[i("div",{staticClass:"query-data"},[i("div",{staticClass:"input-row"},[e._v("\n\t\t\t  \t\t小区：\n\t\t\t\t\t  "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.query.sect,expression:"query.sect"}],staticClass:"virtual-input classinput",attrs:{type:"text",id:"btnd",value:"",placeholder:"请输入小区"},domProps:{value:e.query.sect},on:{input:[function(t){t.target.composing||e.$set(e.query,"sect",t.target.value)},function(t){e.sousuo(e.query.sect)}]}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.showi,expression:"showi"}],staticClass:"iconfont icon-chacha  classc",on:{click:e.clicki}}),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.shows,expression:"shows"}],staticClass:"input-uis test"},e._l(e.sectList,function(t){return i("li",{directives:[{name:"tap",rawName:"v-tap",value:{fn:e.alertFN,name:t.name,id:t.id,params:t.params},expression:"{fn:alertFN,name:item.name,id:item.id,params:item.params}"}],key:t.id,attrs:{"data-idd":t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),i("div",{staticClass:"input-row"},[e._v("\n                        楼宇：\n                        "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.query.build,expression:"query.build"}],staticClass:"virtual-input",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"build",t.target.multiple?i:i[0])},function(t){e.getCouponSelected()}]}},e._l(e.buildList,function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),i("div",{staticClass:"input-row"},[e._v("\n                        门牌：\n                        "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.query.unit,expression:"query.unit"}],staticClass:"virtual-input",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"unit",t.target.multiple?i:i[0])},function(t){e.getCoupon()}]}},e._l(e.unitList,function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),i("div",{staticClass:"input-row"},[e._v("\n                        室号：\n                        "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.query.house,expression:"query.house"}],staticClass:"virtual-input",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"house",t.target.multiple?i:i[0])},function(t){e.getCoupons()}]}},e._l(e.houseList,function(t,n){return i("option",{key:n,domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])])]),e._v(" "),i("div",{staticClass:"hand"},[i("div",{staticClass:"handtest"},[i("em",[e._v("*")]),e._v("请填写预约人姓名:"),i("br"),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"topt",attrs:{type:"text",placeholder:"请填写预约人的姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"handtest"},[i("em",[e._v("*")]),e._v("请选择预约人证件类型:"),i("br"),e._v(" "),i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"select"}],staticClass:"handselect",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.select=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[e._v("身份证")]),e._v(" "),i("option",{attrs:{value:"1"}},[e._v("港澳台通行证")]),e._v(" "),i("option",{attrs:{value:"2"}},[e._v("护照")])])])]),e._v(" "),i("div",{staticClass:"handtest",staticStyle:{"margin-left":"0.25rem"}},[i("em",[e._v("*")]),e._v("请填写预约人证件号:"),i("br"),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.hao,expression:"hao"}],staticClass:"topt",attrs:{type:"text",placeholder:"请输入预约人证件号:"},domProps:{value:e.hao},on:{blur:e.fixScroll,input:function(t){t.target.composing||(e.hao=t.target.value)}}})])]),e._v(" "),i("div",{staticStyle:{height:"1rem"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOriginHei,expression:"isOriginHei"}],staticClass:"btn-fabu",on:{click:function(t){e.ben()}}},[e._v("\n            提交\n        ")])])])},a=[],s={render:n,staticRenderFns:a};t.a=s},LQ50:function(e,t,i){var n=i("pMiq");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("ffc518f6",n,!0)},"Rc5/":function(e,t,i){"use strict";function n(e){i("LQ50")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("6m+h"),s=i("GHY5"),o=i("VU/8"),u=n,r=o(a.a,s.a,!1,u,"data-v-06c7940d",null);t.default=r.exports},pMiq:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,".mask[data-v-06c7940d]{position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;overflow:auto}.main[data-v-06c7940d]{padding:0 .3rem}.mint-tab-container-item[data-v-06c7940d]{-ms-flex-negative:0;flex-shrink:0;width:100%}.query-data[data-v-06c7940d]{padding:.25rem 1rem}.virtual-input[data-v-06c7940d]{width:3.4rem;border:1px solid #4c4c4c;border-radius:5px;padding-left:.2rem;display:inline-block;height:.6rem;background-color:#fff;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.input-row[data-v-06c7940d]{padding-bottom:.3rem;font:.26rem/.5rem ;color:#a6937c;height:.6rem;position:relative}.input-row .input-uis[data-v-06c7940d]{width:3.5rem;position:absolute;top:32px;left:39px;height:184px;z-index:666;background-color:#f5f4f3;overflow:hidden;color:#000;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto}.input-row .input-uis li[data-v-06c7940d]{overflow:hidden;font-size:16px;height:30px;line-height:30px;border-bottom:1px solid #ccc;letter-spacing:.08rem;color:#707070;padding-left:.2rem;background-color:#fff}.hand[data-v-06c7940d]{padding:.5rem .3rem 0}.handtest[data-v-06c7940d]{font-size:.4rem;color:#2b2b2b;letter-spacing:.02rem;margin-bottom:.2rem}em[data-v-06c7940d]{font-size:.5rem;position:relative;top:.08rem;color:#fe161d;margin-right:.02rem;width:.25rem;display:inline-block}.topt[data-v-06c7940d]{width:100%;height:.3rem;padding:.1rem 0}.handselect[data-v-06c7940d],.topt[data-v-06c7940d]{line-height:.3rem;text-indent:.25rem;font-size:.28rem;margin:.2rem 0;border:1px solid #d5d5d5;outline:none}.handselect[data-v-06c7940d]{width:97%;padding:.054rem 0;margin-left:.25rem;color:#747474;background:#fff}.btn-fabu[data-v-06c7940d]{position:absolute;width:70%;height:.76rem;bottom:.3rem;left:15%;right:15%;border-radius:5px;background-color:#ff7f00;line-height:.76rem;color:#fff;text-align:center;letter-spacing:.05rem;font-size:.45rem;font-family:PingFangSC-Semibold,sans-serif;z-index:999}",""])},t40W:function(e,t,i){"use strict";function n(e,t,i){var n=this;this.obj=e,this.binding=t,this.touchType=i,this.vueTouches={x:0,y:0},this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueCallBack="object"==s()(t.value)?t.value.fn:t.value,this.obj.addEventListener("touchstart",function(e){n.start(e)},!1),this.obj.addEventListener("touchend",function(e){e.preventDefault(),n.end(e)},!1),this.obj.addEventListener("touchmove",function(e){n.move(e)},!1)}var a=i("pFYg"),s=i.n(a),o=i("7+uW");n.prototype={start:function(e){this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},this.time=setTimeout(function(){this.vueLeave&&this.vueMoves&&("longtap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.longTouch=!1)}.bind(this),1e3)},end:function(e){var t=e.changedTouches[0].pageX-this.vueTouches.x,i=e.changedTouches[0].pageY-this.vueTouches.y;clearTimeout(this.time),Math.abs(t)>10||Math.abs(i)>100?("swipe"==this.touchType&&this.vueCallBack(this.binding.value,e),Math.abs(t)>Math.abs(i)?(t>10&&"swiperight"==this.touchType&&this.vueCallBack(this.binding.value,e),t<-10&&"swipeleft"==this.touchType&&this.vueCallBack(this.binding.value,e)):(i>10&&"swipedown"==this.touchType&&this.vueCallBack(this.binding.value,e),i<-10&&"swipeup"==this.touchType&&this.vueCallBack(this.binding.value,e))):this.longTouch&&this.vueMoves&&("tap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.vueLeave=!1)},move:function(e){this.vueMoves=!1}},o.default.directive("tap",{bind:function(e,t){new n(e,t,"tap")}})}});