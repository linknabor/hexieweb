webpackJsonp([2],{"+lO3":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"200px",height:"200px","background-color":"red"},on:{click:function(t){e.pay()}}})])},a=[],i={render:n,staticRenderFns:a};t.a=i},"/0gC":function(e,t,r){"use strict";function n(e){r("2f72")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("mX1n"),i=r("+lO3"),o=r("VU/8"),c=n,u=o(a.a,i.a,!1,c,"data-v-3a31512c",null);t.default=u.exports},"2f72":function(e,t,r){var n=r("d7/Y");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r("rjj0")("33fcb168",n,!0)},"d7/Y":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])},mX1n:function(e,t,r){"use strict";var n=r("fxnj"),a=r.n(n),i=void 0,o=r("xrTZ").Base64;t.a={data:function(){return{billId:"",payFeeType:"",payType:"",reduceAmt:"",reductionAmt:"",ruleType:"",stmtId:"",regionname:"",openid:"",user_id:""}},created:function(){i=this,i.query()},mounted:function(){window.onload=function(){i.getUrlParam()}},components:{},computed:{},methods:{IsWeixinOrAlipay:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)?"WeiXin":"alipayclient"==e.match(/AlipayClient/i)?"Alipay":"false"},query:function(){var e=i.IsWeixinOrAlipay();if("Alipay"===e)i.common.alipayAuthorize();else{if("WeiXin"!==e)return alert("请用微信或支付扫码支付"),!1;i.common.weixinAuthorize()}},getUrlParam:function(){var e={},t=window.location.search.substr(1),r=i.getParam(t,"param");r=o.decode(r);for(var n=r.split("&"),a=0;a<n.length;a++)e[n[a].split("=")[0]]=unescape(n[a].split("=")[1]);i.billId=e.bill_id,i.payFeeType=e.pay_fee_type,i.payType=e.pay_type,i.reduceAmt=e.reduceAmt,i.reductionAmt=e.reduction_amt,i.ruleType=e.rule_type,i.stmtId=e.stmt_id,i.regionname=e.regionname,i.openid=i.getParam(t,"openid"),i.user_id=i.getParam(t,"user_id"),alert(i.openid),alert(i.user_id)},pay:function(){var e=i.IsWeixinOrAlipay();if("false"===e)return void alert("请使用微信或支付宝扫码支付");var t={};t.isQrcode="1",t.billId=i.billId,t.payFeeType=i.payFeeType,t.payType=i.payType,t.reduceAmt=i.reduceAmt,t.reductionAmt=i.reductionAmt,t.ruleType=i.ruleType,t.stmtId=i.stmtId,t.regionname=i.regionname,"Alipay"===e?t.alipayUserId=i.user_id:"WeiXin"===e&&(t.openid=i.openid),alert(t),i.receiveData.postData(i,"/getPrePayInfo",t,"res",function(){if(i.res.success){if("Alipay"===e){if(alert("123"),0==i.res.success)return void alert(i.res.message);var t=i.res.result.packageId;alert(t),ap.tradePay({tradeNo:t},function(e){"9000"===e.resultCode&&ap.call("closeWebview")})}else if("WeiXin"===e){if(0==i.res.success)return void alert(i.res.message);a.a.config({debug:!1,appId:i.res.result.appid,timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,signature:i.res.result.paysign,jsApiList:["chooseWXPay"]}),a.a.chooseWXPay({appId:i.res.result.appid,timestamp:i.res.result.timestamp,nonceStr:i.res.result.noncestr,package:i.res.result.package,signType:i.res.result.signtype,paySign:i.res.result.paysign,success:function(e){a.a.closeWindow()},fail:function(){},cancel:function(){}})}}else alert(null==i.res.message?"支付请求失败，请稍后重试!":i.res.message)})}}}},xrTZ:function(e,t,r){(function(r){var n,a;!function(t,r){e.exports=r(t)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:this,function(r){"use strict";r=r||{};var i,o=r.Base64,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=function(e){for(var t={},r=0,n=e.length;r<n;r++)t[e.charAt(r)]=r;return t}(c),s=String.fromCharCode,l=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?s(192|t>>>6)+s(128|63&t):s(224|t>>>12&15)+s(128|t>>>6&63)+s(128|63&t)}var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return s(240|t>>>18&7)+s(128|t>>>12&63)+s(128|t>>>6&63)+s(128|63&t)},p=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,d=function(e){return e.replace(p,l)},f=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[c.charAt(r>>>18),c.charAt(r>>>12&63),t>=2?"=":c.charAt(r>>>6&63),t>=1?"=":c.charAt(63&r)].join("")},y=r.btoa&&"function"==typeof r.btoa?function(e){return r.btoa(e)}:function(e){if(e.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return e.replace(/[\s\S]{1,3}/g,f)},g=function(e){return y(d(String(e)))},h=function(e){return e.replace(/[+\/]/g,function(e){return"+"==e?"-":"_"}).replace(/=/g,"")},m=function(e,t){return t?h(g(e)):g(e)},A=function(e){return m(e,!0)};r.Uint8Array&&(i=function(e,t){for(var r="",n=0,a=e.length;n<a;n+=3){var i=e[n],o=e[n+1],u=e[n+2],s=i<<16|o<<8|u;r+=c.charAt(s>>>18)+c.charAt(s>>>12&63)+(void 0!==o?c.charAt(s>>>6&63):"=")+(void 0!==u?c.charAt(63&s):"=")}return t?h(r):r});var v,x=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,b=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),r=t-65536;return s(55296+(r>>>10))+s(56320+(1023&r));case 3:return s((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return s((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},C=function(e){return e.replace(x,b)},B=function(e){var t=e.length,r=t%4,n=(t>0?u[e.charAt(0)]<<18:0)|(t>1?u[e.charAt(1)]<<12:0)|(t>2?u[e.charAt(2)]<<6:0)|(t>3?u[e.charAt(3)]:0),a=[s(n>>>16),s(n>>>8&255),s(255&n)];return a.length-=[0,0,2,1][r],a.join("")},F=r.atob&&"function"==typeof r.atob?function(e){return r.atob(e)}:function(e){return e.replace(/\S{1,4}/g,B)},w=function(e){return F(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},I=function(e){return C(F(e))},_=function(e){return String(e).replace(/[-_]/g,function(e){return"-"==e?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,"")},T=function(e){return I(_(e))};r.Uint8Array&&(v=function(e){return Uint8Array.from(w(_(e)),function(e){return e.charCodeAt(0)})});var P=function(){var e=r.Base64;return r.Base64=o,e};if(r.Base64={VERSION:"2.6.3",atob:w,btoa:y,fromBase64:T,toBase64:m,utob:d,encode:m,encodeURI:A,btou:C,decode:T,noConflict:P,fromUint8Array:i,toUint8Array:v},"function"==typeof Object.defineProperty){var S=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};r.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",S(function(){return T(this)})),Object.defineProperty(String.prototype,"toBase64",S(function(e){return m(this,e)})),Object.defineProperty(String.prototype,"toBase64URI",S(function(){return m(this,!0)}))}}return r.Meteor&&(Base64=r.Base64),void 0!==e&&e.exports?e.exports.Base64=r.Base64:(n=[],void 0!==(a=function(){return r.Base64}.apply(t,n))&&(e.exports=a)),{Base64:r.Base64}})}).call(t,r("DuR2"))}});