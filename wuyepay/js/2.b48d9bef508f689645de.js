webpackJsonp([2],{"/0gC":function(e,r,t){"use strict";function n(e){t("zOA5")}Object.defineProperty(r,"__esModule",{value:!0});var a=t("mX1n"),o=t("qGax"),i=t("VU/8"),c=n,u=i(a.a,o.a,!1,c,"data-v-736b5090",null);r.default=u.exports},VhgO:function(e,r,t){r=e.exports=t("FZ+f")(!1),r.push([e.i,"",""])},mX1n:function(e,r,t){"use strict";var n=t("fxnj"),a=t.n(n),o=void 0,i=t("xrTZ").Base64;r.a={data:function(){return{billId:"",payFeeType:"",payType:"",reduceAmt:"",reductionAmt:"",ruleType:"",stmtId:"",regionname:"",openid:"",user_id:""}},beforeCreate:function(){o=this,o.query()},created:function(){},beforeMount:function(){o.getUrlParam()},mounted:function(){pay()},components:{},computed:{},methods:{IsWeixinOrAlipay:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)?"WeiXin":"alipayclient"==e.match(/AlipayClient/i)?"Alipay":"false"},query:function(){var e=o.IsWeixinOrAlipay();if("Alipay"===e)o.common.alipayAuthorize();else{if("WeiXin"!==e)return alert("请用微信或支付扫码支付"),!1;o.common.weixinAuthorize()}},getUrlParam:function(){var e={},r=window.location.search.substr(1);console.log(r);var t=o.getParam(r,"param");t=i.decode(t),console.log(t);var n=t.split("&");console.log(n);for(var a=0;a<n.length;a++)e[n[a].split("=")[0]]=unescape(n[a].split("=")[1]);o.billId=e.bill_id,o.payFeeType=e.pay_fee_type,o.payType=e.pay_type,o.reduceAmt=e.reduceAmt,o.reductionAmt=e.reduction_amt,o.ruleType=e.rule_type,o.stmtId=e.stmt_id,o.regionname=e.regionname,o.openid=o.getParam(r,"openid"),o.user_id=o.getParam(r,"user_id"),console.log(o.openid),alert(o.user_id)},pay:function(){var e=o.IsWeixinOrAlipay();if("false"===e)return void alert("请使用微信或支付宝扫码支付");var r={},t=void 0;r.isQrcode="1",r.billId=o.billId,r.payFeeType=o.payFeeType,r.payType=o.payType,r.reduceAmt=o.reduceAmt,r.reductionAmt=o.reductionAmt,r.ruleType=o.ruleType,r.stmtId=o.stmtId,r.regionname=o.regionname,"Alipay"===e?(t="/getPrePayInfoAlipay",r.alipayUserId=o.user_id,r.appid=o.$route.query.app_id):"WeiXin"===e&&(t="/getPrePayInfo",r.openid=o.openid),console.log(r),alert(r.alipayUserId),alert(r.appid),o.receiveData.postData(o,t,r,"res",function(){if(alert(o.res.errorCode),o.res.success){if("Alipay"===e){if(alert("123"),0==o.res.success)return void alert(o.res.message);var r=o.res.result.packageId;alert(r),ap.tradePay({tradeNo:r},function(e){"9000"===e.resultCode&&ap.call("closeWebview")})}else if("WeiXin"===e){if(0==o.res.success)return void alert(o.res.message);a.a.config({debug:!1,appId:o.res.result.appid,timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,signature:o.res.result.paysign,jsApiList:["chooseWXPay"]}),a.a.chooseWXPay({appId:o.res.result.appid,timestamp:o.res.result.timestamp,nonceStr:o.res.result.noncestr,package:o.res.result.package,signType:o.res.result.signtype,paySign:o.res.result.paysign,success:function(e){a.a.closeWindow()},fail:function(){},cancel:function(){}})}}else alert(null==o.res.message?"支付请求失败，请稍后重试!":o.res.message)})}}}},qGax:function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticStyle:{width:"200px",height:"200px","background-color":"red"},on:{click:function(r){e.pay()}}})])},a=[],o={render:n,staticRenderFns:a};r.a=o},xrTZ:function(e,r,t){(function(t){var n,a;!function(r,t){e.exports=t(r)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:this,function(t){"use strict";t=t||{};var o,i=t.Base64,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=function(e){for(var r={},t=0,n=e.length;t<n;t++)r[e.charAt(t)]=t;return r}(c),s=String.fromCharCode,l=function(e){if(e.length<2){var r=e.charCodeAt(0);return r<128?e:r<2048?s(192|r>>>6)+s(128|63&r):s(224|r>>>12&15)+s(128|r>>>6&63)+s(128|63&r)}var r=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return s(240|r>>>18&7)+s(128|r>>>12&63)+s(128|r>>>6&63)+s(128|63&r)},p=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,d=function(e){return e.replace(p,l)},f=function(e){var r=[0,2,1][e.length%3],t=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[c.charAt(t>>>18),c.charAt(t>>>12&63),r>=2?"=":c.charAt(t>>>6&63),r>=1?"=":c.charAt(63&t)].join("")},y=t.btoa&&"function"==typeof t.btoa?function(e){return t.btoa(e)}:function(e){if(e.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return e.replace(/[\s\S]{1,3}/g,f)},g=function(e){return y(d(String(e)))},h=function(e){return e.replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,"")},m=function(e,r){return r?h(g(e)):g(e)},A=function(e){return m(e,!0)};t.Uint8Array&&(o=function(e,r){for(var t="",n=0,a=e.length;n<a;n+=3){var o=e[n],i=e[n+1],u=e[n+2],s=o<<16|i<<8|u;t+=c.charAt(s>>>18)+c.charAt(s>>>12&63)+(void 0!==i?c.charAt(s>>>6&63):"=")+(void 0!==u?c.charAt(63&s):"=")}return r?h(t):t});var v,x=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,b=function(e){switch(e.length){case 4:var r=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),t=r-65536;return s(55296+(t>>>10))+s(56320+(1023&t));case 3:return s((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return s((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},C=function(e){return e.replace(x,b)},B=function(e){var r=e.length,t=r%4,n=(r>0?u[e.charAt(0)]<<18:0)|(r>1?u[e.charAt(1)]<<12:0)|(r>2?u[e.charAt(2)]<<6:0)|(r>3?u[e.charAt(3)]:0),a=[s(n>>>16),s(n>>>8&255),s(255&n)];return a.length-=[0,0,2,1][t],a.join("")},F=t.atob&&"function"==typeof t.atob?function(e){return t.atob(e)}:function(e){return e.replace(/\S{1,4}/g,B)},I=function(e){return F(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},w=function(e){return C(F(e))},_=function(e){return String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,"")},P=function(e){return w(_(e))};t.Uint8Array&&(v=function(e){return Uint8Array.from(I(_(e)),function(e){return e.charCodeAt(0)})});var T=function(){var e=t.Base64;return t.Base64=i,e};if(t.Base64={VERSION:"2.6.3",atob:I,btoa:y,fromBase64:P,toBase64:m,utob:d,encode:m,encodeURI:A,btou:C,decode:P,noConflict:T,fromUint8Array:o,toUint8Array:v},"function"==typeof Object.defineProperty){var S=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};t.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",S(function(){return P(this)})),Object.defineProperty(String.prototype,"toBase64",S(function(e){return m(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",S(function(){return m(this,!0)}))}}return t.Meteor&&(Base64=t.Base64),void 0!==e&&e.exports?e.exports.Base64=t.Base64:(n=[],void 0!==(a=function(){return t.Base64}.apply(r,n))&&(e.exports=a)),{Base64:t.Base64}})}).call(r,t("DuR2"))},zOA5:function(e,r,t){var n=t("VhgO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("460b3547",n,!0)}});