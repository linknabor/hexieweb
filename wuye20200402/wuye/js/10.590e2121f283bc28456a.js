webpackJsonp([10],{"9wWV":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p15 "},[e("div",{directives:[{name:"show",rawName:"v-show",value:"list"==t.currentpage,expression:"currentpage =='list'"}]},[e("div",{staticClass:"dropdown-wrap",class:{collapsed:t.dropdownCollapsed},on:{click:t.toggleDropdown}},[e("span",{directives:[{name:"show",rawName:"v-show",value:""==t.selectedDropdown,expression:"selectedDropdown==''"}]},[t._v("账单筛选")]),t._v("\n                 "+t._s(t.selectedDropdown.name)+"\n                 "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.dropdownCollapsed,expression:"!dropdownCollapsed"}],staticClass:"dropdown"},t._l(t.dropdowns,function(a,i){return e("div",{staticClass:"dropdown-item no-border",on:{click:function(a){t.selectDropdown(i)}}},[t._v(t._s(a.name))])}))]),t._v(" "),t._l(t.paymentHises,function(a,i){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"ov",staticStyle:{"margin-bottom":"25px"}},[e("span",{staticClass:"fs15",staticStyle:{color:"#3b3937"}},[t._v(t._s(a.tran_time))]),t._v(" "),e("span",{staticClass:"fr fs18 highlight"},[t._v("¥ "+t._s(a.bill_tran_amt))])]),t._v(" "),e("div",{staticClass:"ov fs13"},[t._v("\n                     流水号："+t._s(a.trade_water_id)+"\n                     "),e("span",{staticClass:"fr"},[t._v(t._s(a.paymethodStr))])])]),t._v(" "),e("div",{staticClass:"fold-btn",on:{click:function(a){t.showDetail(i)}}},[e("strong",{staticClass:"xiangqing"},[t._v("详情..")])])])})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"empty"==t.currentpage,expression:"currentpage=='empty'"}]},[e("div",{staticClass:"emptytip"},[t._v("没有缴费记录，快用微信进行缴费吧！")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"detail"==t.currentpage,expression:"currentpage=='detail'"}]},[e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"input-wrap lite-divider"},[e("span",{staticClass:"fl fs15"},[t._v("交易时间")]),t._v(" "),e("span",{staticClass:"fr fs14"},[t._v(t._s(t.payInfo.tran_time))])]),t._v(" "),e("div",{staticClass:"input-wrap lite-divider"},[e("span",{staticClass:"fl fs15"},[t._v("支付类型")]),t._v(" "),e("span",{staticClass:"fr fs14"},[t._v(t._s(t.payInfo.paymethodStr))])]),t._v(" "),e("div",{staticClass:"input-wrap"},[e("span",{staticClass:"fl fs15"},[t._v("账单总金额")]),t._v(" "),e("span",{staticClass:"fr fs14 highlight"},[t._v("¥ "+t._s(t.payInfo.bill_tran_amt))])])]),t._v(" "),t._l(t.payInfofee_data,function(a){return e("div",{staticClass:"p15",staticStyle:{"padding-bottom":"50px"}},[e("div",{staticClass:"card",staticStyle:{padding:"21px 10px"}},[e("span",{staticClass:"card-title"},[t._v("户号 "+t._s(a.ver_no))]),t._v(" "),e("div",{staticClass:"ov fs13",staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"ib text-el",staticStyle:{width:"250px"}},[t._v(t._s(a.cell_addr))]),t._v(" "),e("span",{staticClass:"fr"},[t._v(t._s(a.cnst_area)+"m")])])]),t._v(" "),t._l(a.fee_name,function(a){return e("div",{staticClass:"card fs15"},[e("div",{staticClass:"ov item",staticStyle:{border:"none"}},[e("span",{staticClass:"card-title"},[t._v(t._s(a.service_fee_name))]),t._v(" "),e("span",{staticClass:"fs15 fr highlight"},[t._v("¥"+t._s(a.totalFee))])]),t._v(" "),t._l(a.fee_detail,function(a){return e("div",{staticClass:"ov fs13 item"},[t._v("\n                         "+t._s(a.service_fee_cycle)+"\n                         "),e("span",{staticClass:"fr"},[t._v(t._s(a.fee_price))])])})],2)})],2)}),t._v(" "),e("div",{staticClass:"btn btn-fixed",on:{click:t.back}},[t._v("返回到列表")])],2)])},s=[],o={render:i,staticRenderFns:s};a.a=o},E26i:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".p15[data-v-00a76257]{padding:15px}.dropdown-wrap[data-v-00a76257]{position:relative;padding:15px 0;border-bottom:1px solid #d4cfc8;background:url("+e("iK4j")+") no-repeat;background-size:12px 7px;background-position:70px;font-size:14px}.dropdown-wrap.collapsed[data-v-00a76257]{background-image:url("+e("uSjm")+")}.dropdown[data-v-00a76257]{position:absolute;top:42px;width:100%;border:1px solid #d4cfc8;background-color:#fffff8;z-index:1}.xiangqing[data-v-00a76257]{height:20px;font-size:14px;padding-bottom:1px;border-bottom:1px solid #ccc}.dropdown-item[data-v-00a76257]{padding:15px 0;margin:0 15px;border-bottom:1px solid #d4cfc8}.no-border[data-v-00a76257]:last-child{border:none!important}.card-header[data-v-00a76257]{border-bottom:1px solid #d4cfc8;padding:20px 10px}.card-content[data-v-00a76257]{border-bottom:1px solid #d4cfc8;padding:20px 10px 5px;background:#fdfdef}.card[data-v-00a76257]{margin-bottom:15px;border:1px solid #d4cfc8;border-radius:3px;color:#666}.card-title[data-v-00a76257]{font-size:15px;color:#3b3937}.text-el[data-v-00a76257]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ov[data-v-00a76257]{overflow:hidden;padding:1px}.item[data-v-00a76257]{padding:20px 10px;border-top:1px solid #d4cfc8}.ib[data-v-00a76257]{display:inline-block}.fs15[data-v-00a76257]{font-size:15px}.fs13[data-v-00a76257]{font-size:13px}.fs14[data-v-00a76257]{font-size:14px}.fs18[data-v-00a76257]{font-size:18px}.highlight[data-v-00a76257]{color:#ff8a00}.fold-btn[data-v-00a76257]{height:32px;line-height:32px;text-align:center}.fold-btn i[data-v-00a76257]{display:inline-block}.moreIcon[data-v-00a76257]{width:15px;height:3px}.topIcon[data-v-00a76257]{width:12px;height:7px}.emptytip[data-v-00a76257]{padding:50px 0;text-align:center;font-size:30px;background-position:35px;background-size:35px;color:#ff8a00}.info-wrap[data-v-00a76257]{padding:4px;border-bottom:5px solid #f9f9e9;font-size:12px;color:#3b3937}.input-wrap[data-v-00a76257]{overflow:hidden;line-height:45px}.lite-divider[data-v-00a76257]{border-bottom:1px solid #d4cfc8;padding-left:15px}.btn[data-v-00a76257]{display:block;margin:15px;height:44px;line-height:44px;color:#fff!important;font-size:15px;text-align:center;background-color:#ff8a00;border-radius:3px;outline:none;border:none;text-decoration:none}.btn-fixed[data-v-00a76257]{position:fixed;bottom:-15px;left:-15px;right:-15px}",""])},LPEi:function(t,a,e){"use strict";var i=void 0;Date.prototype.format=function(t){var a={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t};var s=new Date,o=new Date(s.getTime()-79488e5).format("yyyy-MM-dd"),n=new Date(s.getTime()-158112e5).format("yyyy-MM-dd"),d=new Date(s.getTime()-31536e6).format("yyyy-MM-dd");a.a={data:function(){return{currentpage:"list",selectedDropdown:"",paymentHises:[],payInfo:{},payInfofee_data:[],dropdownCollapsed:!0,startDate:"",dropdowns:[{name:"近三个月账单",startDate:o},{name:"近半年账单",startDate:n},{name:"近一年账单",startDate:d},{name:"全部账单",startDate:""}]}},created:function(){i=this},mounted:function(){this.query()},components:{},methods:{toggleDropdown:function(){i.dropdownCollapsed=!i.dropdownCollapsed},selectDropdown:function(t){i.selectedDropdown=i.dropdowns[t],i.startDate!=i.dropdowns[t].startDate&&(i.startDate=i.dropdowns[t].startDate,this.query())},query:function(){var t="paymentHistory?startDate="+i.startDate;i.receiveData.getData(i,t,"res",function(){null!==i.res.result&&(i.paymentHises=i.res.result),0==i.paymentHises.length?i.currentpage="empty":i.currentpage="list",i.res.success||(i.currentpage="empty")})},showDetail:function(t){i.paymentHises[t].trade_water_id==i.payInfo.trade_water_id?i.currentpage="detail":(i.payInfo={},i.getDetail(i.paymentHises[t].trade_water_id))},getDetail:function(t){var a="queryPaymentDetail/"+t;i.receiveData.getData(i,a,"res",function(){i.currentpage="detail",i.payInfo=i.res.result,i.payInfofee_data=i.res.result.fee_data,i.res.success||alert(""==i.res.message?"获取缴费记录失败！":i.res.message)})},back:function(){i.currentpage="list"}},computed:{}}},Lp0o:function(t,a,e){var i=e("E26i");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("1eadd97a",i,!0)},iK4j:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDNBMkFBNkUzNDY2MTFFNTgzODhENjlEMkMyMDZDNjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDNBMkFBNkQzNDY2MTFFNTgzODhENjlEMkMyMDZDNjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDcwNUE2MUE3MzNFNTExQUI1QUVDRTRBMThFODgyOCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA0MzMzNTk4LTIzODAtMTFlNS04YzEwLWJlNmE2MDhlNjhkMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm7Vo0sAAAEeSURBVHjaYvn//z8DPrB8Si2MyQbEK4H4GxDHAfFfBiIACwNxAGT4GiD2hfJ5gTgEiH8R0shEouGfoNgXKsZGkQXA4OECUpuRDHeDYqItYSJg+Baoge+h9EkoRrZkOxBzkWQBkuGOQPwGiO2hBsMAiO0ClXOCquUiygKg4fxAaieS4SADLmPRexoq9waqFqslTFgM3wXENkD8Ao/hMHAZzZI9QMyP1QIkw82A+CkQ20bmNF8mIpVdhhoO0mMJNYMfxQKg4aJQ22GGOwANv8NAPLgC0gPVa4ZsCRPU8H1AbALED8gwHAbuoFlyAIhFmaC26QDxXWiwkGM4siX2ULMMQIkFZAEHEN+EuvwJA+XgLtQnIDPZGQkVdpQCgAADAKKQXXoIYYFaAAAAAElFTkSuQmCC"},uSjm:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAAAXNSR0IArs4c6QAABI5pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo4NDcwNUE2MUE3MzNFNTExQUI1QUVDRTRBMThFODgyODwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA0MzMzNTk4LTIzODAtMTFlNS04YzEwLWJlNmE2MDhlNjhkMjwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpEM0EyQUE2RTM0NjYxMUU1ODM4OEQ2OUQyQzIwNkM2NzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpEM0EyQUE2RDM0NjYxMUU1ODM4OEQ2OUQyQzIwNkM2NzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjNjOWI5ZjhmLTNjMTUtMzg0Zi1iNzA5LTNkY2I2NjljMDUyODwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrxCPrQAAABzUlEQVQ4EbWTP0gCURzH33v3VAg0AgehNgOnxoq2ENEIHYKyApsbKhtr6OBA6M9qNbSWVEibQxBRRi1FQ5BtjTVENVQQpee9fr+zU+/IlP784Hf37ve+v8/3d++UkH8OurksXxEhJI3wQCyu3PyFXyqptDGi7hNKBSNEvBNKfIyq2e3knPe3BjocWMgE9hvjohgC6AWkV6PkaGN1tv2nJtjLWOEYWZA5YAcpwtJrM81q3rYHyy7I2yJTe8cmFq9xr9FAuKTxLOhbIc8B3h+NL9zrBgixmjBN6xuZns/hXr2wwM+4vRCMji89YV/ZAB8+TXZh2UMEedAo9cemEpe4VytSy3IHIwLf3gNpgmMPfORKoKvTzgPwqzoEazcT4gABFYV5pcNBA1UPDHRSPbmhNBlgMTKuvDodtrDJZFXuNBqMexkOg6DW6eAh41gMDd5NR1S9kVlTml7yagZqfshnSmlwdDJxipqtFblbCIFH2VKC28I4GO5Zo6YBCtOKYlfdxR2AROBRN8E6wPHMXYKQPZedD9SCo/ZbAxRYTbAG4YJ/aYY/SINRRcmXSl9f6xpgm8UExmoMjr0NGegm6SGpcOdbh4Ym/siH602OPRgf4/bHuC4YJ2AAAAAASUVORK5CYII="},"uX9+":function(t,a,e){"use strict";function i(t){e("Lp0o")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("LPEi"),o=e("9wWV"),n=e("VU/8"),d=i,r=n(s.a,o.a,!1,d,"data-v-00a76257",null);a.default=r.exports}});