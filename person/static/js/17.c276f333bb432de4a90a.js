webpackJsonp([17],{bsM4:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("fxnj"),a=s.n(e),r=(s("Au9i"),void 0),l={data:function(){return{item:{},imgUrlList:[],commentImgUrlList:[]}},created:function(){r=this},mounted:function(){},methods:{queryOrder:function(){r.receiveData.getData(r,"operator/repair/query/repairId/"+r.$route.query.ordersID,"res",function(){if(r.res.success){var t=r.res.result;r.imgUrlList=t.imgUrlList,r.commentImgUrlList=t.commentImgUrlList,r.item=t}})},showPhoto:function(t){a.a.previewImage({current:r.imgUrlList[t],urls:r.imgUrlList})}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"operorder"},[s("div",{staticClass:"opers"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticStyle:{background:"white",padding:"0 15px",margin:"15px 0"}},[s("div",{staticClass:"lite-divider detail-title fs14"},[t._v("\n                        客户信息\n                    ")]),t._v(" "),s("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"custom-menu-link lite-dividers"},[s("p",{staticClass:"value2"},[t._v("脑子坏了开心\n                                    "),s("a",{staticStyle:{float:"right","padding-right":"10px",color:"#3b3937"},attrs:{href:"tel:"+t.item.tel}},[t._v(t._s(150722287666))])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticStyle:{width:"100%",height:"15px"}})])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"ov top-title pr15",staticStyle:{"padding-left":"15px"}},[i("div",{staticClass:"ov ptb15"},[i("span",{staticClass:"fl fs15",staticStyle:{color:"#FF8A00"}},[this._v("快递详情")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{background:"white"}},[i("div",{staticClass:"top-info"},[i("div",{staticClass:"item",staticStyle:{"padding-left":"15px"}},[i("span",{staticClass:"value"},[this._v("的萨芬撒大打算")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"bottomLine",staticStyle:{color:"#3b3937"}},[i("span",{staticClass:"custom-menu-link lite-dividers"},[i("p",{staticClass:"value2"},[this._v("所在小区"),i("span",{staticStyle:{float:"right","padding-right":"10px"}},[this._v("森兰明轩（演示）")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"top-info"},[i("div",{staticClass:"item lite-divider pl0",staticStyle:{"padding-bottom":"15px"}},[i("p",{staticClass:"value",staticStyle:{"padding-top":"5px"}},[this._v("上海市浦东新区森兰名轩（演示）浦东新区三林路800号2号601室")])])])}]};var c=s("VU/8")(l,n,!1,function(t){s("q+K0")},"data-v-0235abc2",null);i.default=c.exports},"q+K0":function(t,i){}});