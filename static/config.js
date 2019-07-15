var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/pay/':
		  'https://www.e-shequ.com/pay/';

var html= /127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
          'https://www.e-shequ.com/weixin/';
          
var url = /127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
          /uat/.test(location.origin)?'https://uat.e-shequ.com/wechat/hexie/wechat/':
          'https://www.e-shequ.com/wechat/hexie/wechat/';

window.config={
    //公共的请求地址
    URL:url,
    //公共的底部跳转
    footer:{
        wuye:html+'/wuye/index.html?v=20162299',
        person:html+'/person/index.html?v=20160229',
    },
    wuye_myhouse:{
        url: /127|test/.test(location.origin)?'test.e-shequ.com':
                /uat/.test(location.origin)?'uat.e-shequ.com':
                'www.e-shequ.com'       //提示框网址
    },
    // 物业支付
    wuye_pay:{
        url:html+'wuyepay.html?#/?'
    },
    //团购
    rgroups_url :{
        url:html+'group/rgroups.html?state=123'
    },
     //支付成功跳转详细
     wuye_detail:{
        url:html+"wuye/index.html?state=123#/paymentquery"
    }
   
}

