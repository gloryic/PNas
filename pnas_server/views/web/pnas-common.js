var pnas = {
	
	setDefaultUrl : function(url){
		DEFAULT_URL = 'pdf/' + url;
	},

	setPageNum : function(pageNum){
		document.getElementById('pageNumber').value = pageNum;
		document.getElementById('pageNumber').dispatchEvent(new CustomEvent('change', {}));
	}, 

	setPdf : function(url){
		pnas.setDefaultUrl(url);
		webViewerInitialized();
	}
}