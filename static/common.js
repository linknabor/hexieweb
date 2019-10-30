//开发环境
var MasterConfig = function() {
    var t = {
        baseUrl: /127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
        /uat/.test(location.origin)?'https://uat.e-shequ.com/wechat/hexie/wechat/':
        'https://www.e-shequ.com/wechat/hexie/wechat/',
        
        basePageUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
        /uat/.test(location.origin)?'https://uat.e-shequ.com/hexie/weixin/':
        'https://www.e-shequ.com/weixin/',
        
        basePageUrlpay:/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/pay/':
        /uat/.test(location.origin)?'https://uat.e-shequ.com/hexie/weixin/pay/':
        'https://www.e-shequ.com/weixin/pay/',

        payPageFolder:/127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
        /uat/.test(location.origin)?'https://uat.e-shequ.com/pay/':
        'https://www.e-shequ.com/pay/',

        appId: /127|test/.test(location.origin)?'wx95f46f41ca5e570e':
        /uat/.test(location.origin)?'wx9ffe0a2b5a64a285':
        'wxbd214f5765f346c1',

        bindAppId: /127|test/.test(location.origin)?'wx95f46f41ca5e570e':
        /uat/.test(location.origin)?'wx9ffe0a2b5a64a285':
        'wxa48ca61b68163483',

		componentAppId:'wx4d706a1a7a139d1f',
        
		oauthUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?",
        oauthUrlPostFix:"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect",		
		//https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE&component_appid=component_appid#wechat_redirect


		oauthUrlPostSilent:"&response_type=code&scope=snsapi_base&state=123#wechat_redirect",
        baidu_map_key:"RUWUgrEEF5VjoaWsstMMZwOD",
        shop_name: "合协",
        payPageSuffix:"hx",

        is_debug:true
    },

    e = {};
    return e.C = function(e) {
        return t[e]
    },
    e
} ();
//角色
var Config = function() {
    var t = {
        download: {
        },
        pullload_text: {
            load_text: "正在玩命的加载...",
            no_orders: "没有更多的订单了...",
            no_tuan_orders: "没有更多的团订单了...",
            no_goods: "更多新品正在陆续推出..."
        },
        user_info: {
            avatar: "https://www.e-shequ.com/weixin/static/images/logo.jpg",
            nickname: "游客",
            levelname: "普通会员"
        },
        user_level:{
            0 : "普通会员",
            1 : "钻石会员",
            2 : "大楼VIP"
        },
        coupon:{
            seedImg:"https://www.e-shequ.com/weixin/static/img/banner/banner_market_shuiguo.jpg"
        }
    },
    e = {};
    return e.C = function(e) {
        return t[e]
    },
    e
} ();


 // 请求状态码
function dealWithAjaxData(o, e, i, r) {
    if (common.log(o, e), e.success) {
        i(e);
        return;
    }
    switch ("" + e.errorCode) {
        case "40001":
            reLogin();
            break;
        case "40002":
            alert("40002");
            break;
        case "42032":
            common.wechatAuthorize();
            break;
        default:
            r(e)
            break;
    }
}
//没授权在授权登录
function reLogin() {
	setTimeout(function(){
		console.log("waiting 1s for relogin.")
	},1000)
    setCookie("UID", "", 0),
    common.login(!0)
}
// 读取cookie方法
function getCookie(e) {
    var c_start;
    var c_end;
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}
 //定义存储cookie方法
function setCookie(e, o, n) {
    var t = e + "=" + o + "; ",
    i = "";
    null !== n && void 0 !== n && (i = "expires=" + new Date(1e3 * n) + "; "),
    document.cookie = t + i + "path=/"
}

//判断是不是微信环境
function isWeChatBrowser() {
    var e = navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i) ? !0 : !1
}
//获取参数方法
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return ""; //返回参数值
}

//检查微信状态  检查用户可不可用
function checkFromShare(salePlanType,salePlanId) {
    var shareCode = getUrlParam("shareCode");
    if(shareCode!=null&&shareCode!=''){
        var pobj = {};
        if(salePlanType!=null)pobj.salePlanType=salePlanType;
        if(salePlanId!=null)pobj.salePlanId=salePlanId;
        common.invokeApi("POST",'shared/'+shareCode,pobj,null,function(){
            //common.removeParamFromUrl(["shareCode"]);
        });
    }
}
/**本地没标识或者40001需要重新登录|换号是否还保留cookie*/
function checkCodeAndLogin(){
    var getData = common._GET();
    var b = getData.bind;
    var o = getData.code;
    if(!b&&o){
        common.login();
        return false;
    } else {
        return true;
    }
}
 //子公众号  挂载父级 
 /*
function toBindLink(){
    var p = common.removeParamObject(["from","bind", "code", "share_id", "isappinstalled", "state", "m", "c", "a"]);
    p = common.addParamObject(p,"bind","true");
    var n = location.origin + location.pathname + common.buildUrlParamString(p)+common.addParamHsah(),
    t = MasterConfig.C("oauthUrl");
    end = MasterConfig.C("oauthUrlPostFix");
    var url = t + "appid=" + MasterConfig.C("bindAppId") + "&redirect_uri=" + encodeURIComponent(n) +end+ "#wechat_redirect";
    // console.log(url);
    location.href = url;
}
*/
// 检查绑定没绑定
/*
function checkBindAndBind(){
    var getData = common._GET();
    var b = getData.bind;
    var o = getData.code;
    if(b&&o) {
        // common.alert("start api bind"),
        common.invokeApi("POST", "bindWechat/"+MasterConfig.C("bindAppId")+"/" + o, null,
            null,
        function(x) {
            // common.alert("api binded")
            // console.log(location.origin);
            location.href = location.origin +common.removeParamFromUrl(["bind","code"]);
        })
    }
}
*/

//只更新地址
function updateCurrentAddrId(addrId){
    var duration = new Date().getTime()/1000 + 3600*24*30;
    setCookie("currentAddrId", addrId, duration);
}
//注册没注册   根据电话判断
function isRegisted(){
    var tel = getCookie("tel");
    return tel&&tel!='null';
}
 //没注册 跳转注册页
function toRegisterAndBack(){
    var n = location.origin + common.removeParamFromUrl(["from", "bind", "code", "share_id", "isappinstalled", "state", "m", "c", "a"])+common.addParamHsah();
    let appurl='';
    if(getUrlParam('oriApp')){
        appurl='oriApp='+getUrlParam('oriApp');
    }else {
        appurl='';
    }
    location.href=MasterConfig.C('basePageUrl')+"person/index.html?"+appurl+"#/register?comeFrom="+encodeURIComponent(n);
}


var AJAXFlag = !0;
window.common = {
    isDebug: !1,
    getApi: function(e) {
        var o = parseInt(getCookie("BackendPort"));
        return MasterConfig.C("baseUrl") + (o ? ":" + o: "") + "/" + e;
    },
    //定义请求方法
    invokeApi: function(e, o, n, t, i, r) {
        if (common.alert("url: " + o), AJAXFlag) { (null === t || void 0 === t) && (t = function() {}),
            (null === i || void 0 === i) && (i = function() {}),
            (null === r || void 0 === r) && (r = function() {});
            var a = {
                url: this.getApi(o),
                type: e,
                xhrFields: {
                    withCredentials: !0
                },
                dataType: "json",
                beforeSend: t,
                success: function(e) {
                    common.alert("success data: " + JSON.stringify(e));
                    dealWithAjaxData(o, e, i, r);
                },
                error: function(e) {
                    common.alert("error data: " + JSON.stringify(e));
                }
            };
            null !== n && void 0 !== n && (a.data = JSON.stringify(n), ("PUT" == e || "POST" == e) && (a.contentType = "application/json; charset=UTF-8")),
            $.ajax(a)
        }
    },
    initWechat: function(apis) {
        let n = "POST",
        a = "getUrlJsSign",
        i = {url:window.location.href.split('#')[0]},
        e = function(n) {
            wx.config({
                appId: n.result.appId, // 必填，公众号的唯一标识
                timestamp: n.result.timestamp , // 必填，生成签名的时间戳
                nonceStr: n.result.nonceStr, // 必填，生成签名的随机串
                signature: n.result.signature,// 必填，签名，见附录1
                jsApiList: apis // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        },
        r = function(n) {
            alert(n.message==''?"获取支付权限失败！":n.message);
        };
        common.invokeApi(n, a, i, null, e, r);
    },
    GetImages:function(type) {
        let imgUrl=getCookie(type);
        if(imgUrl == undefined ||imgUrl == ''){
            let n = "GET",
            a = "userInfo?oriApp="+getUrlParam('oriApp'),
            i = null,
            e = function(n) {
                var duration = new Date().getTime()/1000 + 3600*24*30;
                for(var j=0;j<n.result.bgImageList.length;j++){
                    setCookie(n.result.bgImageList[j].type,n.result.bgImageList[j].imgUrl,duration)
                } 
                location.reload();
            },
            r = function() { 
            };
            common.invokeApi(n, a, i, null, e, r);
        }else {
            imgUrl=getCookie(type)
        }
        return imgUrl;
   },
     //授权
    login: function() {
		var o = this._GET().code;
		var oriApp = getUrlParam("oriApp");
		var param = {"oriApp":oriApp};
        if (common.alert("code: " + o), void 0 === o) {
			var n = location.origin + common.removeParamFromUrl(["from","bind", "code", "share_id", "isappinstalled", "state", "m", "c", "a"]),
			t = MasterConfig.C("oauthUrl"),
		    end = MasterConfig.C("oauthUrlPostFix");
			var url = t + "appid=" ;
			if(oriApp){
				url +=  oriApp + "&component_appid=" + MasterConfig.C("componentAppId"); 
			}else{
				url +=  MasterConfig.C("appId") 
			}
			url+="&redirect_uri=" + encodeURIComponent(n) +end+ "#wechat_redirect";
			console.log("url:"+url);
            location.href = url;
			
        } else common.alert("start api login"),
        this.invokeApi("POST", "login/" + o, param,
        function() {
            AJAXFlag = !1
        },
        function(x) {
            common.updateUserStatus(x.result);
            AJAXFlag = !0,
            location.href = location.origin +common.removeParamFromUrl(["code"])+common.addParamHsah();
        })
    },
    /**变更才需要重设置*/
updateUserStatus(user) {
    var duration = new Date().getTime()/1000 + 3600*24*30;
    setCookie("UID", user.uid,  duration);
    setCookie("currentAddrId", user.currentAddrId, duration);
    setCookie("tel", user.tel, duration);
    setCookie("shareCode", user.shareCode, duration);
	setCookie("appId", user.appId);
},
     //入口程序 检查状态
    checkRegisterStatus:function(){
        if(!getCookie("UID")){
            common.login();/**不应该出现*/
            return false;
        }
        if(!isRegisted()){
            alert("请先完成注册！");
            toRegisterAndBack();
            return false;
        }
        return true;
    },
    //需不需要注册
    hasRegister:function(){
        return getCookie("UID")&&isRegisted();
    },
    //结合微信授权  
    _GET: function() {
        var e = location.search,
        o = {};
        if ("" === e || void 0 === e) return o;
        e = e.substr(1).split("&");
        for (var n in e) {
            var t = e[n].split("=");
            o[t[0]] = t[1]
        }
        return o.from && delete o.code,
        o
    },
    log: function() {
        for (var e = arguments.length,
        o = 0; e > o; o++) console.log(arguments[o])
    },
    alert: function(e) {
        "" === getCookie("DevDebug") ? console.log(e) : alert(e)
    },
    //设置title
    setTitle: function(e) {
        $("title").text(e)
    },

    addParamObject:function(e, name,value){
        e[name]=value;
        return e;
    },
    removeParamObject:function(e){
        var o = common._GET();
        common.log(o);
        for (var n in e) delete o[e[n]];
        return o;
    },
    // 添加 定义获取哈希值
    addParamHsah:function() {
        // console.log(location.hash)
        return  location.hash 
    },
    removeParamFromUrl: function(e) {
        // console.log(location.pathname);
        return location.pathname + common.buildUrlParamString(common.removeParamObject(e));
    },
    buildUrlParamString: function(e) {
        var o = "";
        for (var n in e) o += n + "=" + e[n] + "&";
        o = o.slice(0, o.length - 1);
        var t = "" === o || void 0 === o;
        return t ? "": "?" + o
    },
    wechatAuthorize: function() {
        var e = MasterConfig.C("appId");
        var n = location.origin + common.removeParamFromUrl(["from", "code", "share_id", "isappinstalled", "state", "m", "c", "a"])+common.addParamHsah(),
        t = MasterConfig.C("oauthUrl");
        end = MasterConfig.C("oauthUrlPostFix");
        location.href = t + "appid=" + e + "&redirect_uri=" + encodeURIComponent(n) +end+ "#wechat_redirect";
    },
    initShareConfig(title,link,img,desc,wx){
        if(link.indexOf(MasterConfig.C("basePageUrl"))>=0
                &&link.indexOf('shareCode')<0
                &&getCookie("shareCode")!=null&&getCookie("shareCode")!=''){
    
            if(link.indexOf('?')<0) {
                link = link +"?";
            }
            if(link.indexOf('?')<link.length-1){
                link = link + "&";
            }

            link = link + "shareCode="+getCookie("shareCode");
			var appId = getCookie("appId");
			link += "&oriApp=" + appId;
        }
    
        wx.ready(function(){
            wx.onMenuShareTimeline({
                title:title, // 分享标题
                link:link, // 分享链接
                imgUrl:img
            });
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: img
            });
        });
    }

};

//checkBindAndBind();
checkCodeAndLogin();
common.setTitle(MasterConfig.C("shop_name") + "社区");
// export default common