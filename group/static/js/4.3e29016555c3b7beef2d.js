webpackJsonp([4],{"6hBg":function(e,t){},ASeG:function(e,t,n){"use strict";(function(e){var n;t.a={data:function(){return{orderId:"8677",item:{},imgUrl:"",falg:!1}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},updated:function(){},methods:{query:function(){n.receiveData.getData(n,"/queryPromotionOrder","res",function(){n.res.success?0==n.res.result?n.getdetail():n.order():null!=n.res.message&&alert(n.res.message)})},order:function(){n.receiveData.getData(n,"/evoucher/getByOrder/"+n.orderId,"res",function(){n.res.success?n.item=n.res.result:null!=n.res.message&&alert(n.res.message),n.bgload()})},getdetail:function(){n.receiveData.getData(n,"/onsales/getPromotion","res",function(){n.res.success?n.$router.push({path:"/salesdetail",query:{ruleId:n.res.result[0].ruleId,productType:n.res.result[0].productType}}):null!=n.res.message&&alert(n.res.message)})},bgload:function(){var e=document.documentElement.clientWidth||document.body.clientWidth,t=document.documentElement.clientHeight||document.body.clientHeight,a=document.getElementById("bg"),r=n.item.qrcode,s="";a.onload=function(){},(s=document.getElementById("canvas")).width=e,s.height=t;var o=s.getContext("2d");o.drawImage(a,0,0,o.canvas.width,o.canvas.height);var i=new Image;i.src=r,i.onload=function(){o.drawImage(i,e-t/9.3-68,t-t/9.3-9,t/9.3,t/9.3),n.downloadFile("tox.png",s.toDataURL("image/png"))}},base64Img2Blob:function(t){for(var a=t.split(";base64,"),r=a[0].split(":")[1],s=window.atob(a[1]),o=s.length,i=new Uint8Array(o),c=0;c<o;++c)i[c]=s.charCodeAt(c);return n.falg=!0,e("#bg").hide(),new Blob([i],{type:r})},downloadFile:function(e,t){n.base64Img2Blob(t)}}}}).call(t,n("7t+N"))},Nz9X:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ASeG"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:n("il9N"),id:"bg"}})])},staticRenderFns:[]};var s=function(e){n("6hBg")},o=n("VU/8")(a.a,r,!1,s,"data-v-30dfd680",null);t.default=o.exports},il9N:function(e,t,n){e.exports=n.p+"static/img/haib.efbbc25.png"}});