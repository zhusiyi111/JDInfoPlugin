
 var bg = chrome.extension.getBackgroundPage();



$('.J_getSku').click(function(){
	var skuStr = bg.localStorage.getItem('skuid');
	$('.J_result').val(skuStr);
	var Url2=$('.J_result')[0];
	Url2.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
})

$('.J_getPromo').click(function(){
	var skuStr = bg.localStorage.getItem('promoId');
	$('.J_result').val(skuStr);
	var Url2=$('.J_result')[0];
	Url2.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
}) 