avalon.ready(function() {
	
	/**
	 * 这个只是临时页面
	 * 云充的请求合协社区时，临时在此页面进行中转 
	 * 根据传入的type进行判该进入哪个函数执行哪个流程；type = 0 or 1 ; 0:用户认证；1：充值交易
	 */
	
	var o = avalon.define({
        $id: "root",
        sn: "",
        sectId: "",
        urlParam:""
    });
	
	//接收参数
	function ParamValue()
	{
		o.sn = getUrlParam("sn");//设备号
		o.sectId = getUrlParam("sectId");//设备所在小区ID servplat
	}
	
	//检查是否是注册用户
	function checkUserRegister(){
		if(!isRegisted())//未注册用户
		{
			common.checkRegisterStatus(o.sn,o.sectId);
		}else//已注册用户直接跳转到云充画面
		{
			isChargerUser();
			location.href="http://ev.evchar.cn/evcnw/partner_scan.php?"+o.urlParam;//跳转到第三方页面
		}
	}
	
	function isChargerUser()
	{
		var n = "GET",
        a = "getChargerUser?sn="+o.sn+"&sectId="+sectId,
        i = null,
        e = function(n) {
            o.urlParam = n.result.paramUrl;
        },
        r = function() {
            alert("注册用户失败");
        };
        common.invokeApi(n, a, i, null, e, r)
	}
	
	ParamValue();
	checkUserRegister();
	avalon.scan(document.body);
});