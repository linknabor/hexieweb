webpackJsonp([17],{"/DPE":function(e,t,a){"use strict";function i(e){a("OCUc")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("6UVv"),s=a("jRAq"),o=a("VU/8"),u=i,r=o(n.a,s.a,!1,u,"data-v-60ff6a65",null);t.default=r.exports},"6UVv":function(e,t,a){"use strict";var i=(a("t40W"),void 0),n=void 0;t.a={data:function(){return{xuan1:"",xuan2:"",xuan3:"",content:"",back:!1,sectList:[],buildList:[],unitList:[],houseList:[],query:{sect:"",sectID:"",buildname:"",build:"",unitname:"",unit:"",housename:"",house:""},shows:!1,showi:!1,faly:!0}},created:function(){i=this},mounted:function(){},watch:{xuan1:function(e,t){""!=e&&""!=i.xuan2&&""!=i.xuan3&&(i.back=!0)},xuan2:function(e,t){""!=e&&""!=i.xuan1&&""!=i.xuan3&&(i.back=!0)},xuan3:function(e,t){""!=e&&""!=i.xuan1&&""!=i.xuan2&&(i.back=!0)}},components:{},methods:{sousuo:function(e){var t=this;n&&clearTimeout(n),n=setTimeout(function(){""!=e?t.getHousin(e):i.shows=!1},500)},getHousin:function(e){var t="/getVagueSectByName?sect_name="+e;i.receiveData.getData(i,t,"res",function(){null!=i.res.result?(i.sectList=i.res.result.sect_info,i.sectList.length>0&&(i.shows=!0),i.showi=!0):(i.shows=!1,i.showi=!0)})},clicki:function(){if(i.sectList.length<=0){i.query.sect="",i.query.build="",i.query.unit="",i.query.house="";var e=document.getElementById("btnd");e.value=""}i.query.sect="",i.query.build="",i.query.unit="",i.query.house="",i.buildList=[],i.unitList=[],i.houseList=[];var e=document.getElementById("btnd");e.value="",i.shows=!1,i.showi=!1},alertFN:function(e){i.$nextTick(function(){document.getElementById("btnd").value=e.name,i.query.sect=e.name,i.query.sectID=e.id;var t=e.params.CORONA_PREVENTION_MODE;"0"!=t&&void 0!=t&&""!=t||alert("您选择的小区没有开放该功能，您的登记可能无效"),i.shows=!1,i.add()})},add:function(){i.getCellMng(i.query.sectID,"","","03"),i.getCellMng(i.query.sectID,"0","","02"),i.getCellMng(i.query.sectID,"0","0","01")},getCouponSelected:function(){for(var e=0;e<i.buildList.length;e++)i.query.build==i.buildList[e].id&&(i.query.buildname=i.buildList[e].name);i.getCellMng(i.query.sectID,i.query.build,"","02"),i.getCellMng(i.query.sectID,i.query.build,"0","01")},getCoupon:function(){for(var e=0;e<i.unitList.length;e++)i.query.unit==i.unitList[e].id&&(i.query.unitname=i.unitList[e].name);i.getCellMng(i.query.sectID,i.query.build,i.query.unit,"01")},getCoupons:function(){for(var e=0;e<i.houseList.length;e++)i.query.house==i.houseList[e].id&&(i.query.housename=i.houseList[e].name)},getCellMng:function(e,t,a,n){var s={sect_id:e,build_id:t,unit_id:a,data_type:n};i.receiveData.getData(i,"/getHeXieCellById","queryInfo",function(){if(i.queryInfo.success){var e=i.queryInfo.result;"03"==n?(i.buildList=e.build_info,i.buildList.unshift({id:"0",name:"请选择"})):"02"==n?(i.unitList=e.unit_info,i.unitList.unshift({id:"0",name:"请选择"})):"01"==n&&(i.houseList=e.house_info,i.houseList.unshift({id:"0",name:"请选择"}))}else"03"==n?(i.buildList=[],i.unitList=[],i.houseList=[]):"02"==n?(i.unitList=[],i.houseList=[]):"01"==n&&(i.houseList=[])},s)},btnn:function(){if(i.faly)if(i.faly=!1,""!=i.xuan1&&""!=i.xuan2&&""!=i.xuan3)if("请选择"==i.query.housename||""==i.query.housename){confirm("请选择您所在小区地址");i.faly=!0}else i.contents();else i.faly=!0},contents:function(){i.receiveData.postData(i,"/health/report",{threadContent:i.xuan1+","+i.xuan2+","+i.xuan3+","+i.content,userSectId:i.query.sectID,userSectName:i.query.sect,userAddress:i.query.buildname+""+i.query.unitname+i.query.housename},"res",function(){i.res.success?(alert("提交成功"),i.$router.push({path:"/catalog"})):(i.faly=!0,alert(null==i.res.message?"提交失败，请重试":i.res.message))})},fixScroll:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)}},computed:{}}},OCUc:function(e,t,a){var i=a("teei");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("7df7599a",i,!0)},jRAq:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"regs"},[a("div",{staticClass:"main"},[a("div",{staticClass:"mint-tab-container-item"},[a("div",{staticClass:"query-data"},[a("div",{staticClass:"input-row"},[e._v("\n\t\t\t  \t\t小区：\n\t\t\t\t\t  "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.sect,expression:"query.sect"}],staticClass:"virtual-input classinput",attrs:{type:"text",id:"btnd",value:"",placeholder:"请输入小区"},domProps:{value:e.query.sect},on:{input:[function(t){t.target.composing||e.$set(e.query,"sect",t.target.value)},function(t){e.sousuo(e.query.sect)}]}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:e.showi,expression:"showi"}],staticClass:"iconfont icon-chacha  classc",on:{click:e.clicki}}),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.shows,expression:"shows"}],staticClass:"input-uis test"},e._l(e.sectList,function(t){return a("li",{directives:[{name:"tap",rawName:"v-tap",value:{fn:e.alertFN,name:t.name,id:t.id,params:t.params},expression:"{fn:alertFN,name:item.name,id:item.id,params:item.params}"}],key:t.id,attrs:{"data-idd":t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),a("div",{staticClass:"input-row"},[e._v("\n                        楼宇：\n                        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.build,expression:"query.build"}],staticClass:"virtual-input",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"build",t.target.multiple?a:a[0])},function(t){e.getCouponSelected()}]}},e._l(e.buildList,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),a("div",{staticClass:"input-row"},[e._v("\n                        门牌：\n                        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.unit,expression:"query.unit"}],staticClass:"virtual-input",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"unit",t.target.multiple?a:a[0])},function(t){e.getCoupon()}]}},e._l(e.unitList,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),a("div",{staticClass:"input-row"},[e._v("\n                        室号：\n                        "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.house,expression:"query.house"}],staticClass:"virtual-input",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"house",t.target.multiple?a:a[0])},function(t){e.getCoupons()}]}},e._l(e.houseList,function(t,i){return a("option",{key:i,domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"toptest test1"},[e._m(1),e._v(" "),a("div",{staticClass:"test2"},[a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan1,expression:"xuan1"}],attrs:{type:"radio",id:"wushi",value:"1"},domProps:{checked:e._q(e.xuan1,"1")},on:{change:function(t){e.xuan1="1"}}}),e._v(" "),a("label",{attrs:{for:"wushi"}},[e._v("无身体不适")])]),e._v(" "),a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan1,expression:"xuan1"}],attrs:{type:"radio",id:"wushi1",value:"2"},domProps:{checked:e._q(e.xuan1,"2")},on:{change:function(t){e.xuan1="2"}}}),e._v(" "),a("label",{attrs:{for:"wushi1"}},[e._v("有其中一项或多项症状")])])])]),e._v(" "),a("div",{staticClass:"toptest test1"},[e._m(2),e._v(" "),a("div",{staticClass:"test2"},[a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan2,expression:"xuan2"}],attrs:{type:"radio",id:"kesao",value:"1"},domProps:{checked:e._q(e.xuan2,"1")},on:{change:function(t){e.xuan2="1"}}}),e._v(" "),a("label",{attrs:{for:"kesao"}},[e._v("无身体不适")])]),e._v(" "),a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan2,expression:"xuan2"}],attrs:{type:"radio",id:"kesao1",value:"2"},domProps:{checked:e._q(e.xuan2,"2")},on:{change:function(t){e.xuan2="2"}}}),e._v(" "),a("label",{attrs:{for:"kesao1"}},[e._v("有其中一项或多项症状")])])])]),e._v(" "),a("div",{staticClass:"toptest test1"},[e._m(3),e._v(" "),a("div",{staticClass:"test2"},[a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan3,expression:"xuan3"}],attrs:{type:"radio",id:"ran",value:"1"},domProps:{checked:e._q(e.xuan3,"1")},on:{change:function(t){e.xuan3="1"}}}),e._v(" "),a("label",{attrs:{for:"ran"}},[e._v("接触过从湖北地区回来的人员")])]),e._v(" "),a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan3,expression:"xuan3"}],attrs:{type:"radio",id:"ran1",value:"2"},domProps:{checked:e._q(e.xuan3,"2")},on:{change:function(t){e.xuan3="2"}}}),e._v(" "),a("label",{attrs:{for:"ran1"}},[e._v("接触过确诊或疑似的病患")])]),e._v(" "),a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan3,expression:"xuan3"}],attrs:{type:"radio",id:"ran2",value:"3"},domProps:{checked:e._q(e.xuan3,"3")},on:{change:function(t){e.xuan3="3"}}}),e._v(" "),a("label",{attrs:{for:"ran2"}},[e._v("在定点医院就医或定点医院的医生、病人接触过")])]),e._v(" "),a("div",{staticClass:"test2res"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.xuan3,expression:"xuan3"}],attrs:{type:"radio",id:"ran3",value:"4"},domProps:{checked:e._q(e.xuan3,"4")},on:{change:function(t){e.xuan3="4"}}}),e._v(" "),a("label",{attrs:{for:"ran3"}},[e._v("无相关接触史")])])])]),e._v(" "),a("div",{staticClass:"toptest test1 testb"},[e._m(4),e._v(" "),a("div",{staticClass:"test2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"botn",attrs:{type:"type",placeholder:"点击填写"},domProps:{value:e.content},on:{blur:e.fixScroll,input:function(t){t.target.composing||(e.content=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"btn",class:{btnback:e.back},on:{click:function(t){e.btnn()}}},[e._v("\n           提交\n          ")])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toptest",staticStyle:{"font-size":"0.375rem",padding:"0.3rem 0.6rem"}},[e._v("\n            为避免新型冠状病毒在小区内传播,"),a("br"),e._v("\n            请各位如实填写此收集表，祝各位"),a("br"),e._v("业主身体健康。\n       ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("01.")]),e._v("当日是否有咳嗽、胸闷、发热、乏力、干咳等症状? (必填)\n          ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("02.")]),e._v("当日接触的亲属及朋友,有无咳嗽、胸闷、发热、乏力、干咳等症状? (必填)\n          ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("03.")]),e._v("是否接触过以下人员？ (必填)\n          ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("04.")]),e._v("如果当日有就医或其他特殊情况，请说明\n          ")])}],s={render:i,staticRenderFns:n};t.a=s},t40W:function(e,t,a){"use strict";function i(e,t,a){var i=this;this.obj=e,this.binding=t,this.touchType=a,this.vueTouches={x:0,y:0},this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueCallBack="object"==s()(t.value)?t.value.fn:t.value,this.obj.addEventListener("touchstart",function(e){i.start(e)},!1),this.obj.addEventListener("touchend",function(e){e.preventDefault(),i.end(e)},!1),this.obj.addEventListener("touchmove",function(e){i.move(e)},!1)}var n=a("pFYg"),s=a.n(n),o=a("7+uW");i.prototype={start:function(e){this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},this.time=setTimeout(function(){this.vueLeave&&this.vueMoves&&("longtap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.longTouch=!1)}.bind(this),1e3)},end:function(e){var t=e.changedTouches[0].pageX-this.vueTouches.x,a=e.changedTouches[0].pageY-this.vueTouches.y;clearTimeout(this.time),Math.abs(t)>10||Math.abs(a)>100?("swipe"==this.touchType&&this.vueCallBack(this.binding.value,e),Math.abs(t)>Math.abs(a)?(t>10&&"swiperight"==this.touchType&&this.vueCallBack(this.binding.value,e),t<-10&&"swipeleft"==this.touchType&&this.vueCallBack(this.binding.value,e)):(a>10&&"swipedown"==this.touchType&&this.vueCallBack(this.binding.value,e),a<-10&&"swipeup"==this.touchType&&this.vueCallBack(this.binding.value,e))):this.longTouch&&this.vueMoves&&("tap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.vueLeave=!1)},move:function(e){this.vueMoves=!1}},o.default.directive("tap",{bind:function(e,t){new i(e,t,"tap")}})},teei:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,'.regs[data-v-60ff6a65]{position:absolute;top:0;left:0;right:0;bottom:0;background:#f5f5f5;overflow:auto}.main[data-v-60ff6a65]{padding:0 .3rem;background:#fff}.mint-tab-container-item[data-v-60ff6a65]{-ms-flex-negative:0;flex-shrink:0;width:100%}.query-data[data-v-60ff6a65]{padding:.25rem 1rem;margin-bottom:.2rem}.virtual-input[data-v-60ff6a65]{width:3.4rem;border:1px solid #4c4c4c;border-radius:5px;padding-left:.2rem;display:inline-block;height:.6rem;background-color:#fff;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.input-row[data-v-60ff6a65]{padding-bottom:.3rem;font:.26rem/.5rem ;color:#a6937c;height:.6rem;position:relative}.input-row .input-uis[data-v-60ff6a65]{width:3.5rem;position:absolute;top:32px;left:39px;height:184px;z-index:666;background-color:#f5f4f3;overflow:hidden;color:#000;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:auto}.input-row .input-uis li[data-v-60ff6a65]{overflow:hidden;font-size:16px;height:30px;line-height:30px;border-bottom:1px solid #ccc;letter-spacing:.08rem;color:#707070;padding-left:.2rem;background-color:#fff}.toptest[data-v-60ff6a65]{padding:.3rem .5rem;background:#fff;font-family:Microsoft YaHei;font-size:.39rem;letter-spacing:.03rem;line-height:.7rem;margin-bottom:.2rem;font-weight:500}span[data-v-60ff6a65]{color:#ff7809;font-family:400}.test1[data-v-60ff6a65]{padding:.25rem}.regs .testb[data-v-60ff6a65]{margin-bottom:0}.botn[data-v-60ff6a65]{border:none;width:100%;height:.6rem;line-height:.6rem;outline:none;overflow-wrap:break-word;overflow:hidden;border-bottom:2px solid #f5f7fa}p[data-v-60ff6a65]{margin-bottom:.2rem}.test2[data-v-60ff6a65]{font-size:.3rem;color:#878787}.test2res[data-v-60ff6a65]{position:relative;line-height:.5rem;text-indent:.36rem}input[type=radio][data-v-60ff6a65]{display:none}input[type=radio]+label[data-v-60ff6a65]:before{content:"";display:inline-block;width:.23rem;height:.23rem;border-radius:50%;border:1px solid #acacac;vertical-align:middle;position:absolute;left:0;top:.12rem}input[type=radio]:checked+label[data-v-60ff6a65]:before{width:.15rem;height:.15rem;border-radius:50%;border:4px solid #ff6300;color:#fff}.btn[data-v-60ff6a65]{text-align:center;background:#ffcc9b;color:#fff;width:94%;height:.8rem;line-height:.8rem;margin:.8rem auto .2rem;border-radius:.07rem;font-size:.5rem}.btnback[data-v-60ff6a65]{background:#ff7401}',""])}});