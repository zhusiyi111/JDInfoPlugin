


$(function(){



	var skuArr = [];

	// 寻找sku
	$('a').filter(function(){
		var _this = $(this),
			href = _this.attr('href');
			console.log(href);
		if(/\/\/item\.jd\.com\/[0-9]+/.test(href)){
			return true;
		}else{
			return false;
		}
	}).each(function(){
		skuArr.push($(this).attr('href').match(/\/\/item\.jd\.com\/[0-9]+/)[0]);
	})




})


