webpackJsonp([2],{O2E7:function(s,t){},"k/4q":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=e("Au9i"),i={data:function(){return{ruleId:"",productType:"",coverup:!0}},created:function(){a=this},components:{},computed:{},mounted:function(){a.query()},methods:{initSession4Test:function(){a.receiveData.getData(a,"/initSession4Test/46","Data",function(){})},query:function(){a.receiveData.getData(a,"/promotion/partner/checkValidation","res",function(){a.res.success?"success"==a.res.result?a.coverup=!1:a.getdetail():null!=a.res.message&&alert(a.res.message)})},getdetail:function(){a.receiveData.getData(a,"/onsales/getPromotion?prodcutType=1003","res",function(){a.res.success?(a.ruleId=a.res.result[0].ruleId,a.productType=a.res.result[0].productType,r.MessageBox.alert("请先成为社区合伙人").then(function(s){window.location.href=a.basePageUrl+"group/onsales.html?"+a.common.getoriApp()+"#/salesdetail?ruleId="+a.ruleId+"&productType="+a.productType})):null!=a.res.message&&alert(a.res.message)})}}},c={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("div",{staticClass:"manual"},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.coverup,expression:"coverup"}],staticClass:"bg"}),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"hander"},[s._v("教程")]),s._v(" "),e("ul",[e("li",{staticClass:"title"},[s._v("一、物业SAAS")]),s._v(" "),e("li",{staticClass:"first"},[s._v("物业saas项目介绍")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业saas软件产品介绍-收银产品.pdf"}},[s._v("物业saas软件产品介绍-收银产品")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业saas软件产品介绍-互动产品.pdf"}},[s._v("物业saas软件产品介绍-互动产品")])]),s._v(" "),e("li",{staticClass:"first"},[s._v("物业saas销售")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售基本过程.pdf"}},[s._v("现场销售基本过程")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售注意事项.pdf"}},[s._v("现场销售注意事项")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/不同客户类型及产品应对策略.pdf"}},[s._v("不同客户类型及产品应对策略")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品报价说明及策略.pdf"}},[s._v("产品报价说明及策略")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售常见问题解答.pdf"}},[s._v("现场销售常见问题解答")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/合协社区产品特色.pdf"}},[s._v("合协社区产品特色")])]),s._v(" "),e("li",{staticClass:"first"},[s._v("操作指南")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-商户系统端 （交客户）.pdf"}},[s._v("产品使用手册-商户系统端 （交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-POS端（交客户）.pdf"}},[s._v("产品使用手册-POS端（交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-公众号端（交客户）.pdf"}},[s._v("产品使用手册-公众号端（交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/二维码收款操作手册.pdf"}},[s._v("二维码收款操作手册")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业费二维码收款操作手册.pdf"}},[s._v("物业费二维码收款操作手册")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用常见问题FAQ.pdf"}},[s._v("产品使用常见问题FAQ")])])]),s._v(" "),e("ul",[e("li",{staticClass:"title"},[s._v("二、社区服务")]),s._v(" "),e("li",{staticClass:"first"},[s._v("社区合伙人落地运营")]),s._v(" "),e("li",{staticClass:"first"},[s._v("商户（供应商）")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何获客.pdf"}},[s._v("如何获客")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何谈判.pdf"}},[s._v("如何谈判")])]),s._v(" "),e("li",[s._v("如何上架")]),s._v(" "),e("li",{staticClass:"first"},[s._v("用户")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何拉新.pdf"}},[s._v("如何拉新")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何运营.pdf"}},[s._v("如何运营")])]),s._v(" "),e("li",[s._v("售后服务")]),s._v(" "),e("li",{staticClass:"first"},[s._v("操作指南")]),s._v(" "),e("li",{staticClass:"first"},[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/周边优惠操作手册.pdf"}},[s._v("周边优惠操作手册")])]),s._v(" "),e("li",{staticClass:"first"},[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/周边服务操作手册.pdf"}},[s._v("周边服务操作手册")])])])])}]};var l=e("VU/8")(i,c,!1,function(s){e("O2E7")},"data-v-2db407e5",null);t.default=l.exports}});