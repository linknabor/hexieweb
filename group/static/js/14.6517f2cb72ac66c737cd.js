webpackJsonp([14],{Sh3F:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("fxnj");var n,o={data:function(){return{imgUrl:"",falg:!1,imgs:""}},created:function(){n=this},components:{},computed:{},mounted:function(){n.bgload()},methods:{bgload:function(){n.imgUrl="http://img.e-shequ.com/FszR3YBT5tH_TMtKe4TuIvk2tE3p";var t=document.documentElement.clientWidth||document.body.clientWidth,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.getElementById("bg"),o="";i.onload=function(){var a=(o=document.getElementById("canvas")).getContext("2d");o.style.width=t+"px",o.style.height=e+"px";var c,s,d=(s=(c=a).backingStorePixelRatio||c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1,(window.devicePixelRatio||1)/s);o.width=t*d,o.height=e*d,a.drawImage(i,0,0,a.canvas.width,a.canvas.height),n.imgs=o.toDataURL("image/jpeg")}},good:function(){n.$router.push({path:"/salesnabo"})}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[e("canvas",{attrs:{id:"canvas"}}),this._v(" "),e("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})]),this._v(" "),e("img",{attrs:{src:this.imgs,alt:""},on:{click:this.good}})])},staticRenderFns:[]};var c=i("VU/8")(o,a,!1,function(t){i("TL2i")},"data-v-0799a100",null);e.default=c.exports},TL2i:function(t,e){}});