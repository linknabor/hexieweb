avalon.ready(function() {

    var o = avalon.define({
        $id: "root",
        yzmtime : 60,
        yzmstr:"获取验证码",
        captcha: '',
		invoice_title: "",
		userId: '12345',
		isClick: false,
		trade_water_id: getUrlParam("trade_water_id"),
		tel:"",
        directSave: true,//使用该属性改变页面的按钮状态和提示信息的显示或者隐藏
        getCaptcha: function() {
        	var reg = /^1[3-9][0-9]\d{8}$/;
	       	if (!reg.test(o.tel)) {
	       	     alert("请输入正确的手机号");
	       	     return;
	       	};
	       	if(o.yzmstr=="获取验证码"||o.yzmstr=="重新获取"){
	       		o.yzmstr="获取中";
	       		yzmreq();
	       	}
        },
        
        applyInvoice:function(){
        	if (o.isClick == true) {
				alert("请勿重复提交。");
			}
        	o.isClick = true;
			//alert(o.invoice_title);
        	var n = "POST",
			a = "applyInvoice?mobile="+o.tel+"&yzm="+o.captcha+"&trade_water_id="+o.trade_water_id+"&invoice_title="+o.invoice_title,
			i = null,
			e = function(n) {
        		console.log("success:" + JSON.stringify(n));
        		alert("电子发票申请成功！");
			},
			r = function(n) {
				commonui.hideAjaxLoading();
	    		$("#zzmb").hide();
	    		o.isClick = false;
	        	alert("验证码不正确或信息保存失败，请重试！");
			};
			common.invokeApi(n, a, i, null, e, r)
        },
    });

	function yzmreq(){
    	var n = "POST",
        a = "getyzm1",
        i = {
			mobile:o.tel
		},
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

	function updateBtn(){
		o.yzmstr=o.yzmtime+"秒后重新获取";
		console.log(o.yzmstr);
		o.yzmtime--;
		if(o.yzmtime<=0){
			o.yzmstr="重新获取";
		}
	}

    avalon.scan(document.body);
    common.setTitle("申请电子发票");
});