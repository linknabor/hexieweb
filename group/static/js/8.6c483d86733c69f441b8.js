webpackJsonp([8],{Nz9X:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("fxnj");var s,n={data:function(){return{orderId:"8722",item:{},imgUrl:"",falg:!1,imgs:""}},created:function(){s=this},components:{},computed:{},mounted:function(){s.query()},methods:{query:function(){s.receiveData.getData(s,"/queryPromotionOrder","res",function(){s.res.success?0==s.res.result?s.getdetail():s.order():null!=s.res.message&&alert(s.res.message)})},order:function(){s.receiveData.getData(s,"/evoucher/getByOrder/"+s.orderId,"res",function(){s.res.success?(s.item=s.res.result,s.bgload()):null!=s.res.message&&alert(s.res.message)})},getdetail:function(){s.receiveData.getData(s,"/onsales/getPromotion","res",function(){s.res.success?s.$router.push({path:"/salesdetail",query:{ruleId:s.res.result[0].ruleId,productType:s.res.result[0].productType}}):null!=s.res.message&&alert(s.res.message)})},bgload:function(){s.imgUrl="http://img.e-shequ.com/FogXNV1BmqMXGGTQ-LDyVr1rkRZk";var e=document.documentElement.clientWidth||document.body.clientWidth,t=document.documentElement.clientHeight||document.body.clientHeight,r=document.getElementById("bg"),n=s.item.qrcode,a="";(a=document.getElementById("canvas")).width=e,a.height=t;var o=a.getContext("2d"),i=new Image;i.src=n,r.onload=function(){o.drawImage(r,0,0,o.canvas.width,o.canvas.height),o.drawImage(i,e-t/7.6-76,t-t/8.8-9,t/7,t/8),s.imgs=a.toDataURL("image/jpeg",1),s.downloadFile("tox.png",s.imgs)}},base64Img2Blob:function(e){for(var t=e.split(";base64,"),r=t[0].split(":")[1],s=window.atob(t[1]),n=s.length,a=new Uint8Array(n),o=0;o<n;++o)a[o]=s.charCodeAt(o);return new Blob([a],{type:r})},downloadFile:function(e,t){s.base64Img2Blob(t)}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})]),this._v(" "),t("img",{attrs:{src:this.imgs,alt:""}})])},staticRenderFns:[]};var o=r("VU/8")(n,a,!1,function(e){r("hhL7")},"data-v-e4c4283c",null);t.default=o.exports},hhL7:function(e,t){}});