webpackJsonp([14],{"6GX0":function(e,t,s){var a=s("G0gh");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("28626638",a,!0)},G0gh:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".bottomBtn[data-v-32e1d19a]{font-size:.35rem;position:fixed;bottom:0;height:49px;overflow:hidden;background-color:#ff8a00;color:#fff;letter-spacing:2px;width:100%;line-height:49px;text-align:center}ul[data-v-32e1d19a]{margin:.1rem 0 0;padding:0}ul li[data-v-32e1d19a]{line-height:.7rem;color:#000;padding:.1rem .15rem;list-style:none;overflow:hidden}.fr[data-v-32e1d19a]{float:right}",""])},Wqrx:function(e,t,s){"use strict";function a(e){s("6GX0")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("pN0a"),o=s("ZeN2"),r=s("VU/8"),i=a,u=r(n.a,o.a,!1,i,"data-v-32e1d19a",null);t.default=u.exports},ZeN2:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bindhouse"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:e.canAddhouse,expression:"canAddhouse "}]},[s("li",[e._v(e._s(e.data.sect_name)+" "+e._s(e.data.city_name))]),e._v(" "),s("li",[s("span",{staticClass:"fl"},[e._v(e._s(e.data.cell_addr))]),e._v(" "),s("span",{staticClass:"fr"},[e._v(e._s(e.data.cnst_area)+"平米")])]),e._v(" "),s("li",[e._v("\n\t\t\t"+e._s(e.data.mng_cell_id)+"(户号)\n\t\t")])]),e._v(" "),s("div",{staticClass:"bottomBtn",on:{click:e.addHouse}},[e._v("绑定房子")])])},n=[],o={render:a,staticRenderFns:n};t.a=o},pN0a:function(e,t,s){"use strict";var a=s("Au9i"),n=(s.n(a),void 0);t.a={components:{},created:function(){n=this},data:function(){return{loadingShow:!0,data:{name:""},axiosParams:{number:this.$route.params.number},canAddhouse:!1}},mounted:function(){var e="/hexiehouse?stmtId="+this.axiosParams.number;this.receiveData.getData(n,e,"response",function(){n.response.success?null==n.response.result?(n.data={},alert("未查询到该房屋"),n.canAddhouse=!1):(n.data=n.response.result,n.canAddhouse=!0):alert(null==n.response.message?"未查询到该房屋":n.response.message)})},methods:{addHouse:function(){var e={url:/127|test/.test(location.origin)?"test.e-shequ.com":/uat/.test(location.origin)?"uat.e-shequ.com":"www.e-shequ.com"},t=this.axiosParams.number,s="/addhexiehouse?stmtId="+t+"&houseId="+this.data.mng_cell_id;n.receiveData.postData(n,s,{},"res",function(){n.res.success&&(null!==n.res.result&&a.MessageBox.alert("添加房子成功",e.url).then(function(e){n.$router.push("/myhouse")}),null==n.res.result&&a.MessageBox.alert("添加房子失败",e.url).then(function(e){n.$router.push("/myhouse")})),n.res.success||a.MessageBox.alert(n.res.message).then(function(e){n.$router.push("/addHouse")})})}}}}});