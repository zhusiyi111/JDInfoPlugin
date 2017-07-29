


$(function(){



	initSku();
	initPromo();


})

function initSku(){
	var skuArr = [],
		skuStr = '';

	// 寻找sku
	$('a').filter(function(){
		var _this = $(this),
			href = _this.attr('href');
		if(/\/\/item\.jd\.com\/[0-9]+/.test(href)){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		skuArr.push($(this).attr('href').match(/\/\/item\.jd\.com\/[0-9]+/)[0].substring(14));
	})

	if(skuArr.length<4){
		return;
	}

	skuStr = skuArr.slice(0,8).join(',');

	var data = {
		skuStr:skuStr
	}

	chrome.runtime.sendMessage({
		J_method:'updateSku',
		data:data
	}, function(res) {

	});
}


function initPromo(){
	var promoArr = [],
		promoStr = '';

	// 寻找promo
	$('[prompt-id]').each(function(){
		promoArr.push($(this).attr('prompt-id'));
	})

	if(promoArr.length<4){
		return;
	}

	promoStr = promoArr.slice(0,8).join(',');



	var data = {
		promoStr:promoStr
	}

	chrome.runtime.sendMessage({
		J_method:'updatePromo',
		data:data
	}, function(res) {

	});
}


