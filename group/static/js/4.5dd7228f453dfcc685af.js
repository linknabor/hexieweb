webpackJsonp([4],{ASeG:function(e,t,n){"use strict";(function(e){var n;t.a={data:function(){return{orderId:"8677",item:{},imgUrl:"",falg:!1,flg:!1}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},updated:function(){},methods:{query:function(){n.receiveData.getData(n,"/queryPromotionOrder","res",function(){n.res.success?0==n.res.result?n.getdetail():n.order():null!=n.res.message&&alert(n.res.message)})},order:function(){n.receiveData.getData(n,"/evoucher/getByOrder/"+n.orderId,"res",function(){n.res.success?(n.item=n.res.result,console.log("bgload开始"),n.bgload()):null!=n.res.message&&alert(n.res.message)})},getdetail:function(){n.receiveData.getData(n,"/onsales/getPromotion","res",function(){n.res.success?n.$router.push({path:"/salesdetail",query:{ruleId:n.res.result[0].ruleId,productType:n.res.result[0].productType}}):null!=n.res.message&&alert(n.res.message)})},bgload:function(){var t=document.documentElement.clientWidth||document.body.clientWidth,a=document.documentElement.clientHeight||document.body.clientHeight,r=document.getElementById("bg");console.log("bg加载"+r);var s=n.item.qrcode,o="";(o=document.getElementById("canvas")).width=t,o.height=a;var i=o.getContext("2d");i.drawImage(r,0,0,i.canvas.width,i.canvas.height);var c=new Image;c.src=s,c.onload=function(){console.log("load开始"),i.drawImage(c,t-a/9.3-68,a-a/9.3-9,a/9.3,a/9.3),n.downloadFile("tox.png",o.toDataURL("image/png")),n.falg=!0,e("#bg").hide()}},base64Img2Blob:function(e){for(var t=e.split(";base64,"),n=t[0].split(":")[1],a=window.atob(t[1]),r=a.length,s=new Uint8Array(r),o=0;o<r;++o)s[o]=a.charCodeAt(o);return new Blob([s],{type:n})},downloadFile:function(e,t){n.base64Img2Blob(t)}}}}).call(t,n("7t+N"))},Nz9X:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ASeG"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:n("il9N"),id:"bg"}})]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.flg,expression:"flg"}]},[t("img",{attrs:{src:this.imgUrl,alt:""}})])])},staticRenderFns:[]};var s=function(e){n("zHKI")},o=n("VU/8")(a.a,r,!1,s,"data-v-c54f7bb0",null);t.default=o.exports},il9N:function(e,t,n){e.exports=n.p+"static/img/haib.efbbc25.png"},zHKI:function(e,t){}});