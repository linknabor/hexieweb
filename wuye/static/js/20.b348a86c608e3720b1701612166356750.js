webpackJsonp([20],{"Cr+A":function(t,i,e){"use strict";function s(t){e("miQr")}Object.defineProperty(i,"__esModule",{value:!0});var a=e("J5kY"),o=e("Fl4f"),n=e("VU/8"),c=s,l=n(a.a,o.a,!1,c,"data-v-8bc78fea",null);i.default=l.exports},Fl4f:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section",on:{scroll:t.getscroll}},[e("mt-navbar",{staticClass:"tabNav",model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"0"}},[t._v("物业板块")]),t._v(" "),e("mt-tab-item",{attrs:{id:"1"}},[t._v("业委会板块")]),t._v(" "),e("mt-tab-item",{attrs:{id:"2"}},[t._v("居委会板块")])],1),t._v(" "),e("mt-tab-container",{model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[e("mt-tab-container-item",{staticClass:"word",attrs:{id:"0"}},t._l(t.zixuns1,function(i,s){return e("div",{key:s,staticClass:"section3_zixuns",on:{click:function(e){t.jumpToDetail(i.id)}}},[e("div",{staticClass:"section3_sub_main_left"},[e("img",{staticClass:"section3_sub_img",attrs:{src:i.smallImage}})]),t._v(" "),e("div",{staticClass:"section3_sub_main_right"},[e("div",{staticClass:"section3_sub_title subadd"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"section3_sub_content "},[t._v(t._s(i.summary))])])])})),t._v(" "),e("mt-tab-container-item",{staticClass:"word",attrs:{id:"1"}},t._l(t.zixuns2,function(i,s){return e("div",{key:s,staticClass:"section3_zixuns",on:{click:function(e){t.jumpToDetail(i.id)}}},[e("div",{staticClass:"section3_sub_main_left"},[e("img",{staticClass:"section3_sub_img",attrs:{src:i.smallImage}})]),t._v(" "),e("div",{staticClass:"section3_sub_main_right"},[e("div",{staticClass:"section3_sub_title subadd"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"section3_sub_content"},[t._v(t._s(i.summary))])])])})),t._v(" "),e("mt-tab-container-item",{staticClass:"word",attrs:{id:"2"}},t._l(t.zixuns3,function(i,s){return e("div",{key:s,staticClass:"section3_zixuns",on:{click:function(e){t.jumpToDetail(i.id)}}},[e("div",{staticClass:"section3_sub_main_left"},[e("img",{staticClass:"section3_sub_img",attrs:{src:i.smallImage}})]),t._v(" "),e("div",{staticClass:"section3_sub_main_right"},[e("div",{staticClass:"section3_sub_title subadd"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"section3_sub_content"},[t._v(t._s(i.summary))])])])}))],1)],1)},a=[],o={render:s,staticRenderFns:a};i.a=o},J5kY:function(t,i,e){"use strict";(function(t){var e=void 0;i.a={data:function(){return{selected:this.$route.query.type||"0",zixuns1:[],zixuns2:[],zixuns3:[],type:this.$route.query.type||"0",page:0,isloadPage:!1}},created:function(){e=this},mounted:function(){e.tab()},components:{},watch:{selected:function(t,i){e.type=t,e.page=0,e.tab()}},methods:{tab:function(){this.common.invokeApi("GET","messages/"+e.type+"/"+e.page,null,null,function(t){"0"==e.type?e.zixuns1=t.result:"1"==e.type?e.zixuns2=t.result:e.zixuns3=t.result,e.page++},function(){})},getscroll:function(i){var s=i.srcElement.scrollTop,a=window.innerHeight,o=t(".word").height();console.log(s,a,o),s+a>=o&&!e.isloadPage&&(e.isloadPage=!0,e.loadNextPage())},loadNextPage:function(){e.receiveData.getData(e,"messages/"+e.type+"/"+e.page,"Data",function(){e.Data.success&&e.Data.result.length>0&&("0"==e.type?e.zixuns1=e.zixuns1.concat(e.Data.result):"1"==e.type?e.zixuns2=e.zixuns2.concat(e.Data.result):e.zixuns3=e.zixuns3.concat(e.Data.result),e.isloadPage=!1,e.page++)})},jumpToDetail:function(t){29==t?window.location.href="https://mp.weixin.qq.com/s/3N-yinJvq0jDJmh6fd6scw":30==t?window.location.href="https://mp.weixin.qq.com/s/WTgWmG5lknKExBmOsughmQ":31==t?window.location.href="https://mp.weixin.qq.com/s/-6gMOUi3vWJMRraOqtC2wQ":76==t?window.location.href="http://mp.weixin.qq.com/s/LoJjEaaQ0xhi2wD7uuJVJQ":78==t?window.location.href="http://mp.weixin.qq.com/s/28gpc3gW7byK6k3kQHqX8A":79==t?window.location.href="http://mp.weixin.qq.com/s/Em3EJ6lo4V8eITXpPcA3LQ":86==t?window.location.href="http://m.eqxiu.com/s/kg2hoy34?from=singlemessage&isappinstalled=0":110==t?window.location.href="http://mp.weixin.qq.com/s/4Ool8tH0lvij5PE8j14QMA":112==t?window.location.href="http://mp.weixin.qq.com/s/gQGtpj_taPUXddQNh_EJWA":189==t?window.location.href="http://mp.weixin.qq.com/s/8hjgD4eu7fhQHx8mKK9TRA":190==t?window.location.href="http://mp.weixin.qq.com/s/L6OoaaJmRD72NHsUtRdqig":197==t?window.location.href="https://mp.weixin.qq.com/s/X34PcEoCP-GizVczTC73nA":198==t?window.location.href="https://mp.weixin.qq.com/s/JEE5Yyx5ugzF8-WzrkVF4g":225==t?window.location.href="https://mp.weixin.qq.com/s/f-N1W8U1Q3Py-vTC_TjR6Q":239==t?window.location.href="https://mp.weixin.qq.com/s/9kW4VqWJB3P74zwZM1R2Lw":240==t?window.location.href="https://mp.weixin.qq.com/s/mSdQgIyVYBkG_Ceorxcl2g":245==t?window.location.href="https://mp.weixin.qq.com/s/ICAowITM_9n72BsBMxFZ8Q":246==t?window.location.href="https://mp.weixin.qq.com/s/Jp9fBZXSK4lyoImTL92iqw":this.$router.push({path:"/message",query:{messageId:t}})}},computed:{}}}).call(i,e("7t+N"))},miQr:function(t,i,e){var s=e("ycBu");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("f4884602",s,!0)},ycBu:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,".section[data-v-8bc78fea]{position:absolute;width:100%;height:100%;font-family:微软雅黑;background:#fff;overflow:auto}.section .mint-navbar .mint-tab-item.is-selected[data-v-8bc78fea]{border-bottom:1px solid #26a2ff;margin-bottom:0}.tabNav[data-v-8bc78fea]{border-bottom:1px solid #ccc}.section3_zixuns[data-v-8bc78fea]{height:105px;border-bottom:1px solid #d4cfc8;background-color:#fff}.section3_sub_main_left[data-v-8bc78fea]{height:105px;float:left}.section3_sub_main_right[data-v-8bc78fea]{height:105px;float:left;width:60%;margin-left:6%;text-align:left}.section3_sub_img[data-v-8bc78fea]{width:100px;height:75px;margin:15px 0;float:left}.section3_sub_title[data-v-8bc78fea]{height:18px;margin:16px 0 0;font-size:15px;color:#000}.subadd[data-v-8bc78fea]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.san[data-v-8bc78fea]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.section3_sub_content[data-v-8bc78fea]{height:59px;margin:10px 0 0;font-size:13px;color:#a1a1a1}",""])}});