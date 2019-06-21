var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
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
        group:html+'/group/onsales.html?v=20160229'
    },
    //绑定房子
    wuye_house:{
        url:/127|test/.test(location.origin)?'test.e-shequ.com':
            /uat/.test(location.origin)?'uat.e-shequ.com':
            'www.e-shequ.com'       //提示框网址
    },
    // 物业支付
    wuye_pay:{
        url:pay+'hxwuyepay.html?#/?'
    },
    // 集市跳转支付
    Buy:{
        url:pay+'hxgroup.html#/buy'
    },
    Mulybuy:{
        url:pay+'hxgroup.html'
    },
    //个人中心
    wuye_index:{
        order:pay+'hxorderpay.html?start=123#/orders',//全部订单
        onsaleorders:pay+'hxorderpay.html?start=123#/onsaleorders',//商品订单
        grouporders:pay+'hxorderpay.html?start=123#/grouporders',//团购订单
        homeorders:pay+'hxorderpay.html?start=123#/homeorders'//服务订单
    },
    repairPay:{
        url:pay+'hxorderpay.html?state=123#/repairPay?'
    },
    repaircom:{
        url:pay+'hxorderpay.html?state=123#/commentxiu?'
    },
    notices:{
        url:pay+'hxorderpay.html?start=123#/orderdetail?',
    },
    //我是业主
    wuye_house:{
        url:html+'/wuye/index.html?#/Myhouse',
    }

   
}

// export default config