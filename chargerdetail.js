var o;

avalon.ready(function() {
	
	o = avalon.define({
        $id: "root",
        phone:'',
        money: 0.00,
        isPaying: false,
        userPayType: '',
        tradeWaterId:'',
        device_no: '',
        packageId:'',
		classtype:'white',
		paramUrl:"",
        
        pay: function() {
        	
        	if(o.isPaying){
        		alert("订单处理中，请勿重复提交！");
        		return;
        	}
        	if(o.money==''){
        		alert('充值金额获取失败，请返回重新选择！');
        		o.isPaying = false;
        		return;
        	}
        	payAction();
        },

		CharGerSelected: function(idx,amt)
		{
			for(var i=0;i<o.type.length;i++)
			{
				o.type[i].selected = "solid 2px #b7b7b7";
			}
			o.money = amt;
			o.type[idx].selected = o.type[idx].selected==="solid 2px #b7b7b7"?" solid 2px #da7c0c":"solid 2px #b7b7b7";
		},
        
        payInfo:{},
        type:[]
        
    });

	function payAction() {
		
		var fact = parseFloat(o.money);
		if(fact< 0.001){
			alert("实际支付金额为0。");
			return false;
		}
		
		commonui.showAjaxLoading();
		$("#zzmb").show();
    	if($(window).height()>$(document).height()){
    		$(".zzmb").height($(window).height());
    	}else{
    		$(".zzmb").height($(document).height());
    	}
		o.isPaying = true;
        var n = "POST",
        a = "getChargerPay?phone="+o.phone+"&money="+o.money,
        i = null,
        e = function(n) {
        	o.userPayType = n.result.user_pay_type;
        	o.tradeWaterId = n.result.trade_water_id;
        	o.packageId = n.result.packageId;
            wx.chooseWXPay({
                "timestamp":n.result.timestamp,
                "nonceStr":n.result.noncestr,
                "package":n.result.packageValue,
                "signType":n.result.signtype,
                "paySign":n.result.paysign,
          	    success: function (res) {
                	notifyPaySuccess();
          	    },
          	    fail:function(res) {
          	    	alert(JSON.stringify(res));
			        	o.isPaying = false;
			        	commonui.hideAjaxLoading();
			        	$("#zzmb").hide();
          	    },
          	    cancel:function(res){
					console.log(JSON.stringify(n));
					o.isPaying = false;
			        commonui.hideAjaxLoading();
			        $("#zzmb").hide();
				}
          	});
        },
        r = function(n) {
        	console.log(JSON.stringify(n));
        	if(n.message != '' || n.message != "undefined"){
        		alert(n.message);
        	}else{
            	alert("获取支付信息失败，请稍后再试！");
            }
        	
        	o.isPaying = false;
        	commonui.hideAjaxLoading();
        	$("#zzmb").hide();
        };
        common.invokeApi(n, a, i, null, e, r)
    }
	
	function checkUserRegister(){
		if(!isRegisted())
		{
			common.checkRegisterStatus(true,true);
			return false;
		}
	}

	function getChargerType()
	{
		//云充带过来的参数有：手机号,设备号
		o.phone=getUrlParam("phone");
		
		checkUserRegister();

		var n = "GET",
        a = "getChargerType",
        i = null,
        e = function(n) {
            console.log(JSON.stringify(n));
            o.type=n.result.chargerTypeItem;
        },
        r = function() {
            alert("获取充值类别信息失败，请稍后再试！");
        };
        common.invokeApi(n, a, i, null, e, r)
	}

    function notifyPaySuccess() {
    	var reqUrl = "noticeCharger?phone="+o.phone+"&tradeWaterId="+o.tradeWaterId+"&packageId="+o.packageId;
    	var n = "POST",
        a = reqUrl;
        i = null,
        e = function(n) {
    		console.log(JSON.stringify(n));
			//var forwardUrl = MasterConfig.C("basePageUrl");
			o.paramUrl = n.result;
			alert("支付成功。");
			forwardUrl = "http://ev.evchar.cn/partner/index.php?";//跳云充画面
			location.href = forwardUrl+o.paramUrl;
    	},
        r = function() {
    		o.isPaying=false;
    		alert("支付情况未知，请稍后查询。");
    	};
        common.invokeApi(n, a, i, null, e, r)
    }

    getChargerType();
    initWechat(['chooseWXPay']) ;
    avalon.scan(document.body);
    FastClick.attach(document.body);  
});