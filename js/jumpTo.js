function nextPage(){
	var pageCount = normalPageCount();
	
	if (currentPage < pageCount){
		currentPage++;
		var anchorid = "#normalPage" + currentPage;
		scrollToPage(anchorid);
	}
	else {
		endPage();
	}
}

function backPage(){

	if (currentPage > 1){
		currentPage--;
		var anchorid = "#normalPage" + currentPage;
		scrollToPage(anchorid);
	}
	else {
		startPage();
	}
}

function jumpToChapter(chapter){
	var anchorid = ".chapter" + chapter;
	scrollToPage(anchorid);
}

function startPage(){
	currentPage = 0;
	var anchorid = "#startPage";
	scrollToPage(anchorid);
}

function endPage() {
	currentPage = (normalPageCount() + 1);
	var anchorid = "#endPage";
	scrollToPage(anchorid);
}


function scrollToPage(anchor){
	if (anchor.startsWith(".")){
		var currentPageId = document.querySelector(anchor).id;
		currentPage = currentPageId.slice(-1);
	}
	$('html,body').animate({scrollTop: $(anchor).offset().top},'slow');
}