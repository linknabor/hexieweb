webpackJsonp([7],{ASeG:function(e,t,a){"use strict";(function(e){var a;t.a={data:function(){return{orderId:"8677",item:{},imgUrl:"",falg:!1}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},updated:function(){},methods:{query:function(){a.receiveData.getData(a,"/queryPromotionOrder","res",function(){a.res.success?0==a.res.result?a.getdetail():a.order():null!=a.res.message&&alert(a.res.message)})},order:function(){a.receiveData.getData(a,"/evoucher/getByOrder/"+a.orderId,"res",function(){a.res.success?(a.item=a.res.result,a.bgload()):null!=a.res.message&&alert(a.res.message)})},getdetail:function(){a.receiveData.getData(a,"/onsales/getPromotion","res",function(){a.res.success?a.$router.push({path:"/salesdetail",query:{ruleId:a.res.result[0].ruleId,productType:a.res.result[0].productType}}):null!=a.res.message&&alert(a.res.message)})},bgload:function(){var t=document.documentElement.clientWidth||document.body.clientWidth,n=document.documentElement.clientHeight||document.body.clientHeight,r=document.getElementById("bg"),s=a.item.qrcode,o="";(o=document.getElementById("canvas")).width=t,o.height=n;var i=o.getContext("2d"),c=new Image;c.src=s,i.drawImage(r,0,0,i.canvas.width,i.canvas.height),c.onload=function(){i.drawImage(c,t-n/7.8-60,n-n/8.8-9,n/8,n/8),a.downloadFile("tox.png",o.toDataURL("image/png")),a.falg=!0,e("#bg").hide()}},base64Img2Blob:function(e){console.log("base64Img2Blobs");for(var t=e.split(";base64,"),a=t[0].split(":")[1],n=window.atob(t[1]),r=n.length,s=new Uint8Array(r),o=0;o<r;++o)s[o]=n.charCodeAt(o);return new Blob([s],{type:a})},downloadFile:function(e,t){a.base64Img2Blob(t)}}}}).call(t,a("7t+N"))},Nz9X:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ASeG"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:"https://img13.360buyimg.com/pop/s590x470_jfs/t1/130411/17/8291/97148/5f475a1dEaa1434af/9cdc4eeaaacbe30e.jpg",id:"bg"}})])])},staticRenderFns:[]};var s=function(e){a("TZ8E")},o=a("VU/8")(n.a,r,!1,s,"data-v-63faa071",null);t.default=o.exports},TZ8E:function(e,t){}});