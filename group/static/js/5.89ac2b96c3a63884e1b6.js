webpackJsonp([5],{Nz9X:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{orderId:"8677",item:{},imgUrl:"",falg:!1,flg:!1}},created:function(){n=this},components:{},computed:{},mounted:function(){n.query()},updated:function(){},methods:{query:function(){n.receiveData.getData(n,"/queryPromotionOrder","res",function(){n.res.success?0==n.res.result?n.getdetail():n.order():null!=n.res.message&&alert(n.res.message)})},order:function(){n.receiveData.getData(n,"/evoucher/getByOrder/"+n.orderId,"res",function(){n.res.success?n.item=n.res.result:null!=n.res.message&&alert(n.res.message),n.bgload()})},getdetail:function(){n.receiveData.getData(n,"/onsales/getPromotion","res",function(){n.res.success?n.$router.push({path:"/salesdetail",query:{ruleId:n.res.result[0].ruleId,productType:n.res.result[0].productType}}):null!=n.res.message&&alert(n.res.message)})},bgload:function(){var e=document.documentElement.clientWidth||document.body.clientWidth,t=document.documentElement.clientHeight||document.body.clientHeight,r=document.getElementById("bg"),a=n.item.qrcode,s="";(s=document.getElementById("canvas")).width=e,s.height=t;var i=s.getContext("2d");i.drawImage(r,0,0,i.canvas.width,i.canvas.height);var o=new Image;o.src=a,o.onload=function(){i.drawImage(o,e-t/9.3-68,t-t/9.3-9,t/9.3,t/9.3),n.downloadFile("tox.png",s.toDataURL("image/png")),n.imgUrl=s.toDataURL("image/png")}},base64Img2Blob:function(e){for(var t=e.split(";base64,"),r=t[0].split(":")[1],a=window.atob(t[1]),s=a.length,i=new Uint8Array(s),o=0;o<s;++o)i[o]=a.charCodeAt(o);return n.flg=!0,new Blob([i],{type:r})},downloadFile:function(e,t){n.base64Img2Blob(t)}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("img",{attrs:{src:r("il9N"),id:"bg"}})]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.flg,expression:"flg"}]},[t("img",{attrs:{src:this.imgUrl,alt:""}})])])},staticRenderFns:[]};var i=r("VU/8")(a,s,!1,function(e){r("ZV4+")},"data-v-438f36ce",null);t.default=i.exports},"ZV4+":function(e,t){},il9N:function(e,t,r){e.exports=r.p+"static/img/haib.efbbc25.png"}});