webpackJsonp([22],{"0LOy":function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".delivery[data-v-4ee8b332]{position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;overflow:auto}.cent[data-v-4ee8b332]{padding:.3rem .5rem 0}.hands[data-v-4ee8b332]{background:#fff;border-radius:.16rem;padding:.2rem .4rem;-webkit-box-shadow:2px 2px 7px -3px #675eb2;box-shadow:2px 2px 7px -3px #675eb2;margin-bottom:.4rem}.top[data-v-4ee8b332]{margin-bottom:.3rem;text-align:center}.toptest[data-v-4ee8b332]{font-size:.3rem;color:#979797}.btext1[data-v-4ee8b332]{line-height:.4rem;font-size:.3rem;font-family:PingFangSC-Semibold,sans-serif;font-weight:600;color:#ff7e00}.btext2[data-v-4ee8b332]{line-height:.4rem;font-size:.26rem;font-family:PingFangSC-Thin,sans-serif;color:#202020}.adimg[data-v-4ee8b332]{width:100%;height:auto}",""])},Xkxp:function(e,t,s){"use strict";var a=s("lbHh"),n=s.n(a),i=void 0;t.a={data:function(){return{content:[],bgImage:this.common.GetImages("6")}},created:function(){i=this},mounted:function(){i.query()},components:{},methods:{query:function(){var e=i.$route.query.userId||n.a.get("userId"),t="/servplat/express/getExpress?userId="+e;i.receiveData.postData(i,t,null,"res",function(){i.res.success?i.content=i.res.result:alert(null==i.res.messages?"获取数据失败":i.res.messages)})}},computed:{}}},qzJK:function(e,t,s){var a=s("0LOy");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("7ee803f0",a,!0)},vaBn:function(e,t,s){"use strict";function a(e){s("qzJK")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("Xkxp"),i=s("zUns"),r=s("VU/8"),o=a,c=r(n.a,i.a,!1,o,"data-v-4ee8b332",null);t.default=c.exports},zUns:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"delivery"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.content.length,expression:"content.length==0"}]},[s("img",{staticClass:"adimg",attrs:{src:e.bgImage,alt:""}})]),e._v(" "),s("div",{staticClass:"cent"},e._l(e.content,function(t){return s("div",{key:t.id,staticClass:"hands"},[s("div",{staticClass:"top"},[s("span",{staticClass:"toptest"},[e._v(e._s(t.date_time))])]),e._v(" "),s("div",{staticClass:"bott"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"0"==t.type,expression:"item.type=='0'"}],staticClass:"btext1"},[e._v("\n                    快递\n                ")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.type,expression:"item.type=='1'"}],staticClass:"btext1"},[e._v("\n                    外卖\n                ")]),e._v(" "),s("div",{staticClass:"btext2"},[s("span",[e._v(e._s(t.sect_name))]),e._v(" "),s("span",[e._v(e._s(t.cell_addr))])])])])}))])},n=[],i={render:a,staticRenderFns:n};t.a=i}});