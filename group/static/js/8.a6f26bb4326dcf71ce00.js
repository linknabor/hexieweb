webpackJsonp([8],{ASeG:function(e,t,i){"use strict";(function(e){var a,r=i("fxnj");i.n(r);t.a={data:function(){return{orderId:"",item:{},imgUrl:"",falg:!1,imgs:""}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},methods:{query:function(){a.receiveData.getData(a,"/queryPromotionOrder","res",function(){a.res.success?0==a.res.result?a.getdetail():(a.orderId=a.res.result,a.order()):null!=a.res.message&&alert(a.res.message)})},order:function(){a.receiveData.getData(a,"/evoucher/getAvailable/1","res",function(){a.res.success?(a.item=a.res.result,a.bgload()):null!=a.res.message&&alert(a.res.message)})},getdetail:function(){a.receiveData.getData(a,"/onsales/getPromotion","res",function(){a.res.success?a.$router.push({path:"/salesdetail",query:{ruleId:a.res.result[0].ruleId,productType:a.res.result[0].productType}}):null!=a.res.message&&alert(a.res.message)})},bgload:function(){a.imgUrl="http://img.e-shequ.com/FogXNV1BmqMXGGTQ-LDyVr1rkRZk";var t=document.documentElement.clientWidth||document.body.clientWidth,i=document.documentElement.clientHeight||document.body.clientHeight,r=document.getElementById("bg"),s=a.item.qrcode,n="";r.onload=function(){var o=(n=document.getElementById("canvas")).getContext("2d");n.style.width=t+"px",n.style.height=i+"px";var c,l,d=(l=(c=o).backingStorePixelRatio||c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1,(window.devicePixelRatio||1)/l);n.width=t*d,n.height=i*d;var g=new Image;g.src=s,o.drawImage(r,0,0,o.canvas.width,o.canvas.height),o.drawImage(g,n.width-n.height/4,n.height-n.height/8-10,n.height/8,n.height/8),a.imgs=n.toDataURL("image/jpeg"),a.falg=!1,e("#bg").hide()}}}}}).call(t,i("7t+N"))},Nz9X:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("ASeG"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})]),this._v(" "),t("img",{attrs:{id:"imgs",src:this.imgs,alt:"",width:"750",height:"1334"}}),this._v(" "),t("img",{staticStyle:{display:"none"},attrs:{src:this.item.qrcode,alt:""}})])},staticRenderFns:[]};var s=function(e){i("V6wp")},n=i("VU/8")(a.a,r,!1,s,"data-v-a9648198",null);t.default=n.exports},V6wp:function(e,t){}});