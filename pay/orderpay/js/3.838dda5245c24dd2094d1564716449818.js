webpackJsonp([3],{"+hq5":function(t,s){},CWjC:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=void 0,o={data:function(){return{order:{},score:5,score1:5,score2:5,comments:"",anonymous:!1}},created:function(){r=this},mounted:function(){r.comment()},computed:{itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=Math.floor(s),r=0;r<e;r++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses1:function(){for(var t=[],s=Math.floor(2*this.score1)/2,e=Math.floor(s),r=0;r<e;r++)t.push("on");for(;t.length<5;)t.push("off");return t},itemClasses2:function(){for(var t=[],s=Math.floor(2*this.score2)/2,e=Math.floor(s),r=0;r<e;r++)t.push("on");for(;t.length<5;)t.push("off");return t}},methods:{comment:function(){r.receiveData.getData(r,"/getOrder/"+r.$route.query.orderId,"n",function(){r.n.success?r.order=r.n.result:alert("获取订单信息失败！")})},focus:function(){},storeComment:function(t){r.comments=t.srcElement.innerText},serverClick:function(t){r.score=t+1},serverClick1:function(t){r.score1=t+1},serverClick2:function(t){r.score2=t+1},toggleCheckbox:function(){r.anonymous=!r.anonymous},submit:function(){""==r.comments||r.comments.length<5?alert("评论字数不能小于5个！"):r.comments.length>400?alert("评论字数不能大于400！"):r.sendComment()},sendComment:function(){var t={orderId:r.order.id,productId:r.order.productId,productName:r.order.productName,anonymous:r.anonymous,serviceNo:r.score,productNo:r.score1,logisticNo:r.score2,comments:r.comments};r.receiveData.postData(r,"/comment",t,"res",function(){r.res.success?(alert("评价成功！"),r.$router.push({path:"/orders"})):alert("评价失败，请稍后重试！")})}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"order-number fs13 plr15"},[t._v("订单编号 "+t._s(t.order.orderNo))]),t._v(" "),e("div",{staticClass:"p15"},[e("img",{staticClass:"fl order-picture",attrs:{src:t.order.productThumbPic}}),t._v(" "),e("div",{staticClass:"ov pb15 fs14"},[t._v(t._s(t.order.productName))]),t._v(" "),e("div",{staticClass:"ov pb15",staticStyle:{color:"#3b3937"}},[e("span",{staticClass:"fl fs15"},[t._v("\n                         总计 ¥"+t._s(t.order.price)+"\n                     ")]),t._v(" "),e("span",{staticClass:"fr fs15 highlight"},[t._v("共"+t._s(t.order.count)+"个商品")])])]),t._v(" "),e("div",{staticClass:"title fs18"},[t._v("评论内容")]),t._v(" "),e("div",{staticStyle:{"line-height":"35px"}},[e("span",{staticClass:"grade fs15"},[t._v("服务评价：")]),t._v(" "),e("ul",{staticStyle:{float:"right","margin-right":"15px"}},t._l(t.itemClasses,function(s,r){return e("li",{staticClass:"fwpin  fl",class:s,staticStyle:{"margin-left":"10px"},on:{click:function(s){t.serverClick(r)}}})}))]),t._v(" "),e("div",{staticStyle:{"line-height":"35px"}},[e("span",{staticClass:"grade fs15"},[t._v("商品评价：")]),t._v(" "),e("ul",{staticStyle:{float:"right","margin-right":"15px"}},t._l(t.itemClasses1,function(s,r){return e("li",{staticClass:"fwpin  fl",class:s,staticStyle:{"margin-left":"10px"},on:{click:function(s){t.serverClick1(r)}}})}))]),t._v(" "),e("div",{staticStyle:{"line-height":"35px"}},[e("span",{staticClass:"grade fs15"},[t._v("物流评价：")]),t._v(" "),e("ul",{staticStyle:{float:"right","margin-right":"15px"}},t._l(t.itemClasses2,function(s,r){return e("li",{staticClass:"fwpin  fl",class:s,staticStyle:{"margin-left":"10px"},on:{click:function(s){t.serverClick2(r)}}})}))]),t._v(" "),e("div",{staticClass:"content p15 fs15",class:{hasvalue:t.comments},staticStyle:{"line-height":"20px"},attrs:{contenteditable:""},on:{click:t.focus,blur:t.storeComment}}),t._v(" "),e("div",{staticClass:"fr pr15 fs15",staticStyle:{"margin-top":"15px"},on:{click:t.toggleCheckbox}},[e("i",{staticClass:"checkbox",class:{checked:t.anonymous},staticStyle:{"margin-right":"5px"}}),t._v("\n             我要匿名评论\n         ")]),t._v(" "),e("div",{staticClass:"btn",staticStyle:{"margin-top":"190px"},on:{click:t.submit}},[t._v("发表评论")])])},staticRenderFns:[]};var c=e("VU/8")(o,n,!1,function(t){e("+hq5")},"data-v-7c2ec994",null);s.default=c.exports}});
//# sourceMappingURL=3.838dda5245c24dd2094d1564716449818.js.map