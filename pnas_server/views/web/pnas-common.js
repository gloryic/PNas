var pnas = {
	
	setDefaultUrl : function(url){
		DEFAULT_URL = 'web/' + url;
	},

	setPageNum : function(pageNum){
		document.getElementById('pageNumber').value = pageNum;
		var event = new CustomEvent('change', {});
		document.getElementById('pageNumber').dispatchEvent(event);
	}, 

	setPdf : function(url){
		pnas.setDefaultUrl(url);
		webViewerInitialized();
	}
}