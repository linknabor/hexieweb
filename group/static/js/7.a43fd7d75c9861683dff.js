webpackJsonp([7],{ASeG:function(e,t,r){"use strict";(function(e){var n,s=r("fxnj");r.n(s);t.a={data:function(){return{orderId:"",item:{},imgUrl:"",falg:!1}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},methods:{query:function(){n.receiveData.getData(n,"/queryPromotionOrder","res",function(){n.res.success?0==n.res.result?n.getdetail():(n.orderId=n.res.result,n.order()):null!=n.res.message&&alert(n.res.message)})},order:function(){n.receiveData.getData(n,"/evoucher/getByOrder/"+n.orderId,"res",function(){n.res.success?(n.item=n.res.result,n.bgload()):null!=n.res.message&&alert(n.res.message)})},getdetail:function(){n.receiveData.getData(n,"/onsales/getPromotion","res",function(){n.res.success?n.$router.push({path:"/salesdetail",query:{ruleId:n.res.result[0].ruleId,productType:n.res.result[0].productType}}):null!=n.res.message&&alert(n.res.message)})},bgload:function(){n.imgUrl="http://img.e-shequ.com/FogXNV1BmqMXGGTQ-LDyVr1rkRZk";var t=document.documentElement.clientWidth||document.body.clientWidth,r=document.documentElement.clientHeight||document.body.clientHeight,s=document.getElementById("bg"),a=n.item.qrcode,o="";(o=document.getElementById("canvas")).width=t,o.height=r;var i=o.getContext("2d"),c=new Image;c.src=a,s.onload=function(){i.drawImage(s,0,0,i.canvas.width,i.canvas.height),i.drawImage(c,t-r/7.8-70,r-r/8.8-9,r/8,r/8),n.downloadFile("tox.png",o.toDataURL("image/png")),n.falg=!0,e("#bg").hide()}},base64Img2Blob:function(e){console.log("base64Img2Blobs");for(var t=e.split(";base64,"),r=t[0].split(":")[1],n=window.atob(t[1]),s=n.length,a=new Uint8Array(s),o=0;o<s;++o)a[o]=n.charCodeAt(o);return new Blob([a],{type:r})},downloadFile:function(e,t){n.base64Img2Blob(t)}}}}).call(t,r("7t+N"))},Nz9X:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("ASeG"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})])])},staticRenderFns:[]};var a=function(e){r("lkrb")},o=r("VU/8")(n.a,s,!1,a,"data-v-7b83d044",null);t.default=o.exports},lkrb:function(e,t){}});