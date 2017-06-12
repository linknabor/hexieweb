 var o;
avalon.ready(function() {
	function getUserInfo() {
        var n = "GET",
        a = "userInfo",
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));
			o.user = n.result;
			if(common.hasRegister()) {
				location.href="index.html";
			}
        },
        r = function() {};
        common.invokeApi(n, a, i, null, e, r)
    }
	
	function getComeFrom(){
		o.comeFrom=getUrlParam("comeFrom");
		o.sn=getUrlParam("sn");//充电桩设备号
		o.sn=getUrlParam("sectId");//设备所在小区ID servplat
	}
	
	//拼接请求参数
	function mosParam()
	{
		 var n = "GET",
	        a = "mosParam/"+o.sn,
	        i = null,
	        e = function(n) {
	            o.urlParam = n.result.paramUrl;
	        },
	        r = function() {
	    		alert("获取banner异常");
	        };
	        common.invokeApi(n, a, i, null, e, r)
	}
	
	function simpleRegister() {
    	var n = "POST",
        a = "simpleRegister",
        i = {
    			mobile:o.user.tel,
    			name:o.user.name,
    			yzm:o.captcha,
    			sn:o.sn,
    			sectId:o.sectId
    		},
        e = function(n) {
    		updateUserStatus(n.result);
    		console.log("success:" + JSON.stringify(n));
    		
    		var page = "";		    	
			
			var forwardPage = "";
			
			if(o.comeFrom){
				forwardPage = o.comeFrom;
			} else {
				forwardPage = MasterConfig.C('basePageUrl')+"person/index.html";
			}
			
			if (page) {
				location.href = page+"?comeFrom="+forwardPage;
			}else{
				alert("注册成功。");
				if(!o.sn)
				{
					//组参数
					mosParam();
					location.href="http://ev.evchar.cn/evcnw/partner_scan.php?"+o.urlParam;//跳转到第三方页面
				}else{
					location.href = forwardPage;
				}
			}
        },
        r = function(n) {
        	commonui.hideAjaxLoading();
    		$("#zzmb").hide();
    		o.isClick = false;
        	alert(n.message==null?"验证码不正确或信息保存失败，请重试！":n.message);
        };
        common.invokeApi(n, a, i, null, e, r)
    }
	function yzmreq(){
    	var n = "POST",
        a = "getyzm",
        i = {mobile:o.user.tel},
        e = function(n) {
			console.log(JSON.stringify(n));
			o.yzmtime = 60;
			var tt=setInterval("updateBtn()",1000);
			var ss = setTimeout(function(){clearInterval(tt);}, 61*1000);
        },
        r = function() {
			alert("验证码已下发，请查收短信");
			o.yzmtime = 60;
        	o.yzmstr="重新获取";
        };
        common.invokeApi(n, a, i, null, e, r)
    }
	
    o = avalon.define({
        $id: "root",
        comeFrom:"",
        isClick: false,
        sn : "",
        sectId:"",
        urlParam:"",
        
        user:{},
        save:function(){
        	if(!(/^1[3-9][0-9]\d{4,8}$/.test(o.user.tel))) {
        		alert("请填写正确的手机号！");
        		return;
        	}
        	if(o.captcha=='') {
    			alert('请输入验证码！');
    			return;
    		}
        	
        	commonui.showAjaxLoading();
    		$("#zzmb").show();
        	if($(window).height()>$(document).height()){
        		$(".zzmb").height($(window).height());
        	}else{
        		$(".zzmb").height($(document).height());
        	}
        	if (o.isClick == true) {
				alert("请勿重复提交。");
			}
        	o.isClick = true;
        	simpleRegister();
        },
        
        
        yzmtime : 60,
        yzmstr:"获取验证码",
        captcha: '',
        directSave: true,//使用该属性改变页面的按钮状态和提示信息的显示或者隐藏
        getCaptcha: function() {
        	var reg = /^1[3-9][0-9]\d{8}$/;
	       	if (!reg.test(o.user.tel)) {
	       	     alert("请输入正确的手机号");
	       	     return;
	       	};
	       	if(o.yzmstr=="获取验证码"||o.yzmstr=="重新获取"){
	       		o.yzmstr="获取中";
	       		yzmreq();
	       	}
        }
    });
    
    getComeFrom();
    getUserInfo();

	avalon.scan(document.body),
    FastClick.attach(document.body),
    common.setTitle("用户注册");
});

function updateBtn(){
	o.yzmstr=o.yzmtime+"秒后重新获取";
	console.log(o.yzmstr);
	o.yzmtime--;
	if(o.yzmtime<=0){
		o.yzmstr="重新获取";
	}
}