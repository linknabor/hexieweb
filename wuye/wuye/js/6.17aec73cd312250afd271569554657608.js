webpackJsonp([6],{"0JLP":function(e,t,a){"use strict";t.a={}},"6FB8":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".loading[data-v-d899ae7e]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:#000;opacity:.4;z-index:10}.loading img[data-v-d899ae7e]{width:.8rem;height:.8rem;position:absolute;top:50%;left:50%;margin-top:-.4rem;margin-left:-.4rem}",""])},"9WCl":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bindhouse"},[a("ul",{directives:[{name:"show",rawName:"v-show",value:e.canAddhouse,expression:"canAddhouse "}]},[a("li",[e._v(e._s(e.data.sect_name)+" "+e._s(e.data.city_name))]),e._v(" "),a("li",[a("span",{staticClass:"fl"},[e._v(e._s(e.data.cell_addr))]),e._v(" "),a("span",{staticClass:"fr"},[e._v(e._s(e.data.cnst_area)+"平米")])]),e._v(" "),a("li",[e._v("\n\t\t\t"+e._s(e.data.mng_cell_id)+"(户号)\n\t\t")])]),e._v(" "),a("div",{staticClass:"bottomBtn",on:{click:e.addHouse}},[e._v("绑定房子")])])},n=[],o={render:s,staticRenderFns:n};t.a=o},COFb:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loading"},[a("img",{attrs:{src:"http://7xnqht.com1.z0.glb.clouddn.com/loading.gif",alt:"loading..."}})])}],o={render:s,staticRenderFns:n};t.a=o},IMGh:function(e,t,a){var s=a("wxPD");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("b49c414e",s,!0)},KgXo:function(e,t,a){"use strict";function s(e){a("exyP")}var n=a("0JLP"),o=a("COFb"),i=a("VU/8"),r=s,c=i(n.a,o.a,!1,r,"data-v-d899ae7e",null);t.a=c.exports},Wqrx:function(e,t,a){"use strict";function s(e){a("IMGh")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("pN0a"),o=a("9WCl"),i=a("VU/8"),r=s,c=i(n.a,o.a,!1,r,"data-v-8c8ce660",null);t.default=c.exports},exyP:function(e,t,a){var s=a("6FB8");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("070f78f6",s,!0)},pN0a:function(e,t,a){"use strict";var s=a("Au9i"),n=(a.n(s),a("KgXo")),o=void 0;t.a={components:{loading:n.a},created:function(){o=this},data:function(){return{loadingShow:!0,data:{name:""},axiosParams:{number:this.$route.params.number},canAddhouse:!1}},mounted:function(){var e="/hexiehouse?stmtId="+this.axiosParams.number;this.receiveData.getData(o,e,"response",function(){o.response.success?null==o.response.result?(o.data={},alert("未查询到该房屋"),o.canAddhouse=!1):(o.data=o.response.result,o.canAddhouse=!0):alert(null==o.response.message?"未查询到该房屋":o.response.message)})},methods:{addHouse:function(){var e={url:/127|test/.test(location.origin)?"test.e-shequ.com":/uat/.test(location.origin)?"uat.e-shequ.com":"www.e-shequ.com"},t=this.axiosParams.number,a="/addhexiehouse?stmtId="+t+"&houseId="+this.data.mng_cell_id;o.receiveData.postData(o,a,{},"res",function(){o.res.success&&(null!==o.res.result&&s.MessageBox.alert("添加房子成功",e.url).then(function(e){o.$router.push("/myhouse")}),null==o.res.result&&s.MessageBox.alert("添加房子失败",e.url).then(function(e){o.$router.push("/myhouse")})),o.res.success||s.MessageBox.alert(o.res.message).then(function(e){o.$router.push("/addHouse")})})}}}},wxPD:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".bottomBtn[data-v-8c8ce660]{font-size:.35rem;position:fixed;bottom:0;height:49px;overflow:hidden;background-color:#ff8a00;color:#fff;letter-spacing:2px;width:100%;line-height:49px;text-align:center}ul[data-v-8c8ce660]{margin:.1rem 0 0;padding:0}ul li[data-v-8c8ce660]{line-height:.7rem;color:#000;padding:.1rem .15rem;list-style:none;overflow:hidden}.fr[data-v-8c8ce660]{float:right}",""])}});