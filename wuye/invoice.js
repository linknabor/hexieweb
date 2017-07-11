 var o;
avalon.ready(function() {

    o = avalon.define({
        $id: "root",
        yzmtime : 60,
        yzmstr:"获取验证码",
        captcha: '',//验证码
		invoice_title:'',//发票抬头
		userId: '12345',
		isClick: false,
		trade_water_id: getUrlParam("trade_water_id"),//交易ID
		tel:'',//手机号
		invoice_title_type:'0',//发票类型;个人/公司,默认:个人
		credit_code:'',//信用代码
        directSave: true,//使用该属性改变页面的按钮状态和提示信息的显示或者隐藏
		check1:true,
		check2:'',
		showcom:'1',
		readonly:'readonly',
		init_title:'',
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
        getType:function(obj,flag){
			var boxArray = document.getElementsByName("per");
			for(var i=0;i<=boxArray.length-1;i++){
				if(boxArray[i]==obj && obj.checked){
					boxArray[i].checked = true;
					o.invoice_title_type = flag;
					showdiw(flag);
				}else{
					boxArray[i].checked = false;
				}
			}
        },
        applyInvoice:function(){
        	if (o.isClick == true) {
				alert("请勿重复提交。");
				return;
			}
			
			if(o.tel=='')
			{
				alert("手机号码不能为空！");
				return;
			}
			
			if(o.captcha=='')
			{
				alert("验证码不能为空！");
				return;
			}

			if(o.invoice_title=='')
			{
				alert("发票抬头不能为空！");
				return;
			}

			if(o.invoice_title_type=='02'){
				if(o.credit_code==''){
					alert('请填写电子发票公司信用代码信息!');
					return;
				}
			}

        	o.isClick = true;
        	var n = "POST",
			a = "applyInvoice?mobile="+o.tel+"&yzm="+o.captcha+"&trade_water_id="+o.trade_water_id+"&invoice_title_type="+o.invoice_title_type+"&credit_code="+o.credit_code+"&invoice_title="+o.invoice_title,
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
			alert("验证码已下发，请查收短信");
			o.yzmtime = 60;
			var tt=setInterval("updateBtn()",1000);
			var ss = setTimeout(function(){clearInterval(tt);}, 61*1000);
        },
        r = function() {
			alert("验证码获取失败,请重新获取");
			o.yzmtime = 60;
        	o.yzmstr="重新获取";
        };
        common.invokeApi(n, a, i, null, e, r)
    }


	
	function showdiw(flag)
	{
		if(flag=='02')
		{
			document.getElementById("div3").style.display="block";
			o.readonly = '';
		}else
		{
			document.getElementById("div3").style.display="none";
			o.readonly = 'readonly';
			o.invoice_title = o.init_title;
		}
	}

	function getInvoiceInfo()
	{
		var n = "POST",
		a = "getInvoice?trade_water_id="+o.trade_water_id,
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));

			if(n.result!=null)
			{
				o.tel = n.result.mobile;
				o.invoice_title=n.result.invoice_title;
				o.init_title = n.result.invoice_title;
				o.showcom = n.result.showcom;
				o.invoice_title_type=n.result.invoice_title_type;
				if(o.invoice_title_type=='02')
				{
					o.readonly = '';
				}
				if(n.result.credit_code!=null)
				{
					o.credit_code=n.result.credit_code;
					o.check1 = false;
					o.check2 = true;
					showdiw(o.invoice_title_type);
				}
			}
        },
        r = function() {
        };
        common.invokeApi(n, a, i, null, e, r)
	}

	getInvoiceInfo();
    avalon.scan(document.body);
    common.setTitle("申请电子发票");
});

	function updateBtn(){
		o.yzmstr=o.yzmtime+"秒后重新获取";
		console.log(o.yzmstr);
		o.yzmtime--;
		if(o.yzmtime<=0){
			o.yzmstr="重新获取";
		}
	}