webpackJsonp([23],{"9Amn":function(e,s){},iHYi:function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=i("lbHh"),n=i.n(t),a=void 0,c={data:function(){return{service_list:[],flay:!0,Mask:0,text:"",index:"",person_id:"",signin_flag:"",nubmer1:"",nubmer2:""}},created:function(){a=this},mounted:function(){a.qrCodePayService()},components:{},methods:{qrCodePayService:function(){a.receiveData.getData(a,"/qrCodePayService","res",function(){a.res.success?a.service_list=a.res.result.service_list:alert(a.res.message)})},ViewOrder:function(e,s,i,t){n.a.set("service_id",s),1==e?a.$router.push({path:"/CanReceiveOrders"}):a.$router.push({path:"/ordermation",query:{sectId:i,feeId:t}})},ViewQRcode:function(e,s,i){a.$router.push({path:"/codeimg",query:{qrcode_id:e,sect_name:s,service_type_cn:i}})},SigninOut:function(e,s,i){a.flay?a.Mask=1:a.Mask=0,a.index=e,a.person_id=s,a.signin_flag=i,"1"==a.signin_flag?a.text="是否下线":a.text="是否上线"},Determine:function(){if(a.flay){a.flay=!1;var e=void 0,s=a.index;e="1"==a.signin_flag?"0":"1";var i={person_id:a.person_id,sign_in:e};"1"==a.signin_flag?a.receiveData.postData(a,"/signInOut",i,"res",function(){a.res.success?(a.flay=!0,a.Mask=0,a.$set(a.service_list[s],"signin_flag","0")):(a.flay=!0,a.Mask=0,alert(a.res.message))}):a.receiveData.postData(a,"/signInOut",i,"res",function(){a.res.success?(a.flay=!0,a.Mask=0,a.$set(a.service_list[s],"signin_flag","1")):(a.flay=!0,a.Mask=0,alert(a.res.message))})}},cancel:function(){a.flay=!0,a.Mask=0}},computed:{}},r={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[e._l(e.service_list,function(s,t){return i("ul",{key:t,staticClass:"content"},[i("li",[i("span",{directives:[{name:"show",rawName:"v-show",value:1!=s.service_type,expression:"item.service_type != 1"}]},[e._v("项目: "+e._s(s.sect_name))])]),e._v(" "),i("li",{staticClass:"text-service"},[i("span",[e._v("服务内容: "+e._s(s.service_type_cn))])]),e._v(" "),i("li",{staticClass:"ov"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1!=s.service_type&&"01"==s.scene_type&&""==s.qrcode_id,expression:"item.service_type != 1 && item.scene_type == '01'&& item.qrcode_id == ''"}],staticClass:"fl border",on:{click:function(i){e.ViewQRcode(s.qrcode_id,s.sect_name,s.service_type_cn)}}},[e._v("查看二维码")]),e._v(" "),i("span",{staticClass:"fl border",class:{M17:"01"==s.scene_type&&""==s.qrcode_id},on:{click:function(i){e.ViewOrder(s.service_type,s.service_id,s.sect_id,s.fee_id)}}},[e._v("查看订单")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:1!=s.service_type,expression:"item.service_type != 1"}],staticClass:"fr border1",on:{click:function(i){e.SigninOut(t,s.person_id,s.signin_flag)}}},[e._v(e._s("1"==s.signin_flag?"下线":"上线"))])])])}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Mask,expression:"Mask == 1"}],staticClass:"v-modal",on:{click:function(s){e.cancel()}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.Mask,expression:"Mask == 1"}],staticStyle:{position:"absolute","z-index":"2003"}},[i("div",{staticClass:"mint-msgbox"},[e._m(0),e._v(" "),i("div",{staticClass:"mint-msgbox-content"},[i("div",{staticClass:"mint-msgbox-message"},[e._v(e._s(e.text))])]),e._v(" "),i("div",{staticClass:"mint-msgbox-btns"},[i("div",{staticClass:"mint-msgbox-btn mint-msgbox-cancel ",on:{click:function(s){e.cancel()}}},[e._v("取消")]),e._v(" "),i("div",{staticClass:"mint-msgbox-btn mint-msgbox-confirm ",on:{click:function(s){e.Determine()}}},[e._v("确定")])])])])],2)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"mint-msgbox-header"},[s("div",{staticClass:"mint-msgbox-title"},[this._v("提示")])])}]};var o=i("VU/8")(c,r,!1,function(e){i("9Amn")},"data-v-49d6933e",null);s.default=o.exports}});