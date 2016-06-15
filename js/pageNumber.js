 function normalPageCount(){
		return $('[id^=normalPage]').length;
}

function pageCounter(){
	var totalPageCount = ($(".page")).length;
	var allPageClassNamesList = ($(".page"));
	//var allPageNumberList = ($("div[id^='normalPage'] .page #pageNumber"));
	var allPageNumberList = [];
	
	
	
	for(var i=0; i<totalPageCount; i++){	
		allPageNumberList[i] = allPageClassNamesList[i].lastElementChild;
	}
	
	for(var i=0; i<totalPageCount; i++){	
		if( $(allPageNumberList[i]).attr('id')=='pageNumber'){
			var page = i + 1
			$(allPageNumberList[i]).html(page);
		}else {}
	}
	
	console.log(allPageClassNamesList);
	console.log(allPageNumberList);
	console.log(document.getElementsByClassName("page")[1]);
	console.log();
	
	

}