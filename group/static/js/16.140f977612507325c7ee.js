webpackJsonp([16],{ASeG:function(e,t,i){"use strict";(function(e){var r,s=i("fxnj");i.n(s);t.a={data:function(){return{orderId:"",item:{},imgUrl:"",falg:!1,imgs:""}},created:function(){r=this},components:{},computed:{},mounted:function(){r.query()},methods:{query:function(){r.receiveData.getData(r,"/queryPromotionOrder?orderType=13","res",function(){r.res.success?0==r.res.result?r.getdetail():(r.orderId=r.res.result,r.order()):null!=r.res.message&&alert(r.res.message)})},order:function(){r.receiveData.getData(r,"/evoucher/getAvailable/1","res",function(){r.res.success?(r.item=r.res.result,r.bgload()):null!=r.res.message&&alert(r.res.message)})},getdetail:function(){r.receiveData.getData(r,"/onsales/getPromotion?prodcutType=1003","res",function(){r.res.success?r.$router.push({path:"/salesdetail",query:{ruleId:r.res.result[0].ruleId,productType:r.res.result[0].productType}}):null!=r.res.message&&alert(r.res.message)})},bgload:function(){r.imgUrl="http://img.e-shequ.com/FogXNV1BmqMXGGTQ-LDyVr1rkRZk";var t=document.documentElement.clientWidth||document.body.clientWidth,i=document.documentElement.clientHeight||document.body.clientHeight,s=document.getElementById("bg"),a=r.item.qrcode,n="";s.onload=function(){var o=(n=document.getElementById("canvas")).getContext("2d");n.style.width=t+"px",n.style.height=i+"px";var c,d,l=(d=(c=o).backingStorePixelRatio||c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1,(window.devicePixelRatio||1)/d);n.width=t*l,n.height=i*l;var u=new Image;u.src=a,o.drawImage(s,0,0,o.canvas.width,o.canvas.height),o.drawImage(u,n.width-n.height/4,n.height-n.height/8-10,n.height/8,n.height/8),r.imgs=n.toDataURL("image/jpeg"),r.falg=!1,e("#bg").hide()}}}}}).call(t,i("7t+N"))},Nz9X:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("ASeG"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})]),this._v(" "),t("img",{attrs:{id:"imgs",src:this.imgs,alt:"",width:"750",height:"1334"}}),this._v(" "),t("img",{staticStyle:{display:"none"},attrs:{src:this.item.qrcode,alt:""}})])},staticRenderFns:[]};var a=function(e){i("fB3x")},n=i("VU/8")(r.a,s,!1,a,"data-v-7510ff3f",null);t.default=n.exports},fB3x:function(e,t){}});