
	$(document).ready(function() {
		var trade_water_id  =getUrlParam("trade_water_id");//交易编号,接口ur获取
		var type = '01';//类型’
		var telInput = $("input[name='tel']");//手机号input 框
		var invoiceTitle = $("input[name='invoice_title']");//发票抬头框
		var checkBox2 = $('#checkbox_b2');
		var creditCode = $("input[name='credit_code']");//公司税号
		var captcha = $("input[name='captcha']");//验证码
		var tempSelfTitle = '';//title临时储存
		var tempCspTitle ="";//公司title临时储存
		var tempCreditCode = ""
		//获取发票抬头
		function getInvoiceInfo()
	{
		var n = "POST",
		a = "getInvoice?trade_water_id="+trade_water_id,
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));

			if(n.result!=null)
			{
				//两个title
				tempSelfTitle = n.result.invoice_title;
				tempCspTitle =  n.result.csp_invoice_title;
				//保存税号
				tempCreditCode = n.result.credit_code;
				//赋初始值
				telInput.val(n.result.mobile) ;
				//invoiceTitle.val(n.result.invoice_title)  ;
				//判断公司是否显示 1是允许公司选项显示 0是不允许公司选项
					if(n.result.showcom == 0){

						$('#csp').css('display','none');
					}
				//判断默认勾选的是谁 01是个人 02是公司
				 if(n.result.invoice_title_type == '02'){
				 	checkBox2.attr('checked','checked');
				 	$('#div3').css('display','block');

				 	invoiceTitle.val(tempCspTitle)  ;
				 }else{
				 	//个人只读
				 	invoiceTitle.attr('readonly','readonly')

				 	invoiceTitle.val(tempSelfTitle)  ;
				 }
				if(n.result.credit_code!=null)
				{
					creditCode.val(n.result.credit_code) ;
				}
			}
        },
        r = function() {
        	alert('无法获取发票抬头')
        };
        common.invokeApi(n, a, i, null, e, r)
	}
	var isClick = true;
	getInvoiceInfo();
        //判断是个人还是公司
        $("#checkbox_b2,#checkbox_b1").click(function(){
          	if(this.id == 'checkbox_b2'){//公司
          		$('#div3').css('display','block');
          		invoiceTitle.val(tempCspTitle);
          		invoiceTitle.removeAttr('readonly');
          		creditCode.val(tempCreditCode)
          		type = '02';
          	}else{//个人
          		type = '01';
          		creditCode.val("");
          		$('#div3').css('display','none')
          		invoiceTitle.attr('readonly','readonly')
          		invoiceTitle.val(tempSelfTitle);	
          	} 
  		});
  		//点击申请开票 判断input框是否为空
  		$("#submit").click(function(){
  			var a = $('.input');
  			var next = true;//执行请求接口操作
  			a.each(function(){
  				//判断是否为空
  				if($(this).val().trim() == ''){
  					if(type == '01' && $(this).attr('name') == 'credit_code'){//税号
  						//个人不需要税号
  						return true;
  					}else{
  						next = false;
  						if($(this).attr('name') == 'captcha'){
  							alert('请输入验证码');	
  						}else{
  							alert($(this).attr('placeholder'));	
  						}
  						return false;
  					}
  				};
  				//判断手机号是否为正确格式
  				if($(this).attr('name') == 'tel'){
  					var a = $(this).val()
  					var reg = /^1[3-9][0-9]\d{8}$/;
  					if( !reg.test(a) ){
  						next = false;
  						alert('请输入正确的手机号')
  						return false;
  					}
  				};

  				
  			});

  			if( next == true && isClick == true){
  				//调接口
  				isClick= false;
  				var n = "POST",
				a = "applyInvoice?mobile="+telInput.val()+"&yzm="+captcha.val()+"&trade_water_id="+trade_water_id+"&invoice_title_type="+type
					+ "&credit_code="+creditCode.val()+"&invoice_title="+invoiceTitle.val(),
				i = null,
				e = function(n) {
	        		console.log("success:" + JSON.stringify(n));
	        		alert("电子发票申请成功！");
				},
				r = function(n) {
					isClick= true;
					commonui.hideAjaxLoading();
		    		$("#zzmb").hide();
		        	alert("验证码不正确或信息保存失败，请重试！");
				};
				common.invokeApi(n, a, i, null, e, r);
				isClick = false;
  			}
  		});

  		
		
		$('.button1').click(function(){//获取验证码
			
			time(this);
			//获取手机号值
			var phoneNumber = telInput.val();
			var reg = /^1[3-9][0-9]\d{8}$/;
			if( !reg.test(phoneNumber)){
				alert('请输入正确的手机号')
			}else{
				yzmreq(phoneNumber)
			}
			
		});
		function yzmreq(tel){//请求验证码
	    	var n = "POST",
	        a = "getyzm1",
	        i = {
				mobile: tel
			},
	        e = function(n) {
				console.log(JSON.stringify(n));
				alert("验证码已下发，请查收短信");
				wait = 60;
				//var tt=setInterval("updateBtn()",1000);
				//var ss = setTimeout(function(){clearInterval(tt);}, 61*1000);
	        },
	        r = function() {
				alert("验证码获取失败,请重新获取");
				wait = 60;
	        	$('.button1').val()="重新获取";
	        };
	        common.invokeApi(n, a, i, null, e, r)
    	};
    	//验证码倒计时
    	var wait=60; 
		function time(o) {  //倒计时
	        if (wait == 0) {  
	            o.removeAttribute("disabled");            
	            o.value="获取验证码";  
	            wait = 60;  
	        } else {  
	            o.setAttribute("disabled", true);  
	            o.value="重新发送(" + wait + ")";  
	            wait--;  
	            setTimeout(function() {  
	                time(o)  
	            },  
	            1000)  
	        }  
		}; 

	})
