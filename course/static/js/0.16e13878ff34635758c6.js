webpackJsonp([0],{"0/TZ":function(s,t){},"k/4q":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,o=e("Au9i"),r={data:function(){return{ruleId:"",productType:"",coverup:!0}},created:function(){c=this},components:{},computed:{},mounted:function(){c.query()},methods:{initSession4Test:function(){c.receiveData.getData(c,"/initSession4Test/46","Data",function(){})},query:function(){c.receiveData.getData(c,"/promotion/partner/checkValidation","res",function(){c.res.success?"success"==c.res.result&&(alert("success"==c.res.result),c.coverup=!1):40001!=c.res.errorCode&&c.getdetail()})},getdetail:function(){c.receiveData.getData(c,"/onsales/getPromotion?prodcutType=1003","res",function(){c.res.success?(c.ruleId=c.res.result[0].ruleId,c.productType=c.res.result[0].productType):null!=c.res.message&&alert(c.res.message)})},goods:function(s){c.coverup&&(s.preventDefault(),o.MessageBox.alert("请先成为社区合伙人").then(function(s){window.location.href=c.basePageUrl+"group/onsales.html?"+c.common.getoriApp()+"#/salesdetail?ruleId="+c.ruleId+"&productType="+c.productType}))}}},a={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"manual"},[e("div",{staticClass:"content"},[e("div",{staticClass:"hander"},[s._v("教程")]),s._v(" "),e("ul",[e("li",{staticClass:"title"},[s._v("一、物业SAAS")]),s._v(" "),e("li",{staticClass:"first"},[s._v("物业saas项目介绍")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业saas软件产品介绍-收银产品.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("物业saas软件产品介绍-收银产品")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业saas软件产品介绍-互动产品.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("物业saas软件产品介绍-互动产品")])]),s._v(" "),e("li",{staticClass:"first"},[s._v("物业saas销售")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售基本过程.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("现场销售基本过程")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售注意事项.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("现场销售注意事项")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/不同客户类型及产品应对策略.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("不同客户类型及产品应对策略")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品报价说明及策略.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("产品报价说明及策略")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/现场销售常见问题解答.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("现场销售常见问题解答")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/合协社区产品特色.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("合协社区产品特色")])]),s._v(" "),e("li",{staticClass:"first"},[s._v("操作指南")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-商户系统端 （交客户）.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("产品使用手册-商户系统端 （交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-POS端（交客户）.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("产品使用手册-POS端（交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用手册-公众号端（交客户）.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("产品使用手册-公众号端（交客户）")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/二维码收款操作手册.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("二维码收款操作手册")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/物业费二维码收款操作手册.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("物业费二维码收款操作手册")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/产品使用常见问题FAQ.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("产品使用常见问题FAQ")])])]),s._v(" "),e("ul",[e("li",{staticClass:"title"},[s._v("二、社区服务")]),s._v(" "),e("li",{staticClass:"first"},[s._v("社区合伙人落地运营")]),s._v(" "),e("li",{staticClass:"first"},[s._v("商户（供应商）")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何获客.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("如何获客")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何谈判.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("如何谈判")])]),s._v(" "),e("li",[s._v("如何上架")]),s._v(" "),e("li",{staticClass:"first"},[s._v("用户")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何拉新.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("如何拉新")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/如何运营.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("如何运营")])]),s._v(" "),e("li",[s._v("售后服务")]),s._v(" "),e("li",{staticClass:"first"},[s._v("操作指南")]),s._v(" "),e("li",{staticClass:"first"},[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/周边优惠操作手册.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("周边优惠操作手册")])]),s._v(" "),e("li",{staticClass:"first"},[e("a",{attrs:{href:"https://www.e-shequ.cn/servplat/course/周边服务操作手册.pdf"},on:{click:function(t){s.goods(t)}}},[s._v("周边服务操作手册")])])])])])])},staticRenderFns:[]};var n=e("VU/8")(r,a,!1,function(s){e("0/TZ")},"data-v-717c1607",null);t.default=n.exports}});