webpackJsonp([9],{Sh3F:function(t,e,i){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{imgUrl:"",falg:!1,imgs:""}},created:function(){n=this},components:{},computed:{},mounted:function(){n.bgload()},methods:{bgload:function(){n.imgUrl="http://img.e-shequ.com/FszR3YBT5tH_TMtKe4TuIvk2tE3p";var t=document.documentElement.clientWidth||document.body.clientWidth,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.getElementById("bg"),a="";i.onload=function(){var o=(a=document.getElementById("canvas")).getContext("2d");a.style.width=t+"px",a.style.height=e+"px";var c,s,d=(s=(c=o).backingStorePixelRatio||c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1,(window.devicePixelRatio||1)/s);a.width=t*d,a.height=e*d,o.drawImage(i,0,0,o.canvas.width,o.canvas.height),n.imgs=a.toDataURL("image/jpeg")}},good:function(){n.$router.push({path:"/salesnabo"})}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"add"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.falg,expression:"falg"}]},[e("canvas",{attrs:{id:"canvas"}}),this._v(" "),e("img",{attrs:{src:this.imgUrl,id:"bg",crossOrigin:"Anonymous"}})]),this._v(" "),e("img",{attrs:{src:this.imgs,alt:""},on:{click:this.good}})])},staticRenderFns:[]};var c=i("VU/8")(a,o,!1,function(t){i("znah"),i("fB8C")},"data-v-43db3af8",null);e.default=c.exports},fB8C:function(t,e){},znah:function(t,e){}});