

chrome.runtime.onMessage.addListener(function(data, sender, sendResponse){
	
	if(/\/\/sale\.jd\.com\//.test(sender.url)){
		processSaleJd(data, sender, sendResponse);
	}

 	return true; //
});



function processSaleJd(data, sender, sendResponse){
	if(data.J_method === 'updateSku'){
		updateSku(data,sender,sendResponse);
	}else if(data.J_method === 'updatePromo'){
		updatePromo(data,sender,sendResponse);
	}
	
}

function updateSku(data, sender, sendResponse){
	localStorage.setItem('skuid',data.data.skuStr);
}

function updatePromo(data,sender,sendResponse){
	localStorage.setItem('promoId',data.data.promoStr);
}