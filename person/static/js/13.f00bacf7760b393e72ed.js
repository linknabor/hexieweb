webpackJsonp([13],{"BLY/":function(e,s){},iHYi:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=void 0,n={data:function(){return{service_list:[],flay:!0,Mask:0,text:"",index:"",person_id:"",signin_flag:"",nubmer1:"",nubmer2:""}},created:function(){t=this},mounted:function(){t.qrCodePayService()},components:{},methods:{qrCodePayService:function(){t.receiveData.getData(t,"/qrCodePayService","res",function(){t.res.success?t.service_list=t.res.result.service_list:alert(t.res.message)})},ViewOrder:function(e){1==e&&t.$router.push({path:"/CanReceiveOrders"})},ViewQRcode:function(e,s,i){t.$router.push({path:"/codeimg",query:{qrcode_id:e,sect_name:s,service_type_cn:i}})},SigninOut:function(e,s,i){t.flay?t.Mask=1:t.Mask=0,t.index=e,t.person_id=s,t.signin_flag=i,"1"==t.signin_flag?t.text="是否下线":t.text="是否上线"},Determine:function(){if(t.flay){t.flay=!1;var e=void 0,s=t.index;e="1"==t.signin_flag?"0":"1";var i={person_id:t.person_id,sign_in:e};"1"==t.signin_flag?t.receiveData.postData(t,"/signInOut",i,"res",function(){t.res.success?(t.flay=!0,t.Mask=0,t.$set(t.service_list[s],"signin_flag","0")):(t.flay=!0,t.Mask=0,alert(t.res.message))}):t.receiveData.postData(t,"/signInOut",i,"res",function(){t.res.success?(t.flay=!0,t.Mask=0,t.$set(t.service_list[s],"signin_flag","1")):(t.flay=!0,t.Mask=0,alert(t.res.message))})}},cancel:function(){t.flay=!0,t.Mask=0}},computed:{}},a={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[e._l(e.service_list,function(s,t){return i("ul",{key:t,staticClass:"content"},[i("li",[i("span",[e._v("项目: "+e._s(s.sect_name))])]),e._v(" "),i("li",{staticClass:"text-service"},[i("span",[e._v("服务内容: "+e._s(s.service_type_cn))])]),e._v(" "),i("li",{staticClass:"ov"},[i("span",{staticClass:"fl border",on:{click:function(i){e.ViewQRcode(s.qrcode_id,s.sect_name,s.service_type_cn)}}},[e._v("查看二维码")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:0!=s.service_type,expression:"item.service_type != 0"}],staticClass:"fl border",class:{M17:0!=s.service_type},on:{click:function(i){e.ViewOrder(s.service_type)}}},[e._v("查看订单")]),e._v(" "),i("span",{staticClass:"fr border1",on:{click:function(i){e.SigninOut(t,s.person_id,s.signin_flag)}}},[e._v(e._s("1"==s.signin_flag?"下线":"上线"))])])])}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Mask,expression:"Mask == 1"}],staticClass:"v-modal",on:{click:function(s){e.cancel()}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Mask,expression:"Mask == 1"}],staticStyle:{position:"absolute","z-index":"2003"}},[i("div",{staticClass:"mint-msgbox"},[e._m(0),e._v(" "),i("div",{staticClass:"mint-msgbox-content"},[i("div",{staticClass:"mint-msgbox-message"},[e._v(e._s(e.text))])]),e._v(" "),i("div",{staticClass:"mint-msgbox-btns"},[i("div",{staticClass:"mint-msgbox-btn mint-msgbox-cancel ",on:{click:function(s){e.cancel()}}},[e._v("取消")]),e._v(" "),i("div",{staticClass:"mint-msgbox-btn mint-msgbox-confirm ",on:{click:function(s){e.Determine()}}},[e._v("确定")])])])])],2)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"mint-msgbox-header"},[s("div",{staticClass:"mint-msgbox-title"},[this._v("提示")])])}]};var c=i("VU/8")(n,a,!1,function(e){i("BLY/")},"data-v-de00131a",null);s.default=c.exports}});