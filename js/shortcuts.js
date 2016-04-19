$(document).keypress(function(event){
	siteKeyShortcut(String.fromCharCode(event.which)); 
});

function siteKeyShortcut(pressedKey) {
	var shortKeys = {
		nextPage:"n",
		backPage:"b",
		startPage:"s",
		endPage:"e",
		chapters: [1,2,3,4,5,6,7,8,9],
		testOutput: "+"
	};

	switch (pressedKey){
			case shortKeys["nextPage"]:
				nextPage();
				break;
			case shortKeys["backPage"]:
				backPage();
				break;
			case shortKeys["startPage"]:
				startPage()
				break;
			case shortKeys["endPage"]:
				endPage();
				break;
			case shortKeys['testOutput']:
				pageCounter();
				break;
			default:
				if(isNumber(pressedKey)){
					if(pressedKey == 0){
						break;
					}else{
						for(var i = 0; i < shortKeys["chapters"].length; i++){
							if(pressedKey == shortKeys.chapters[i]){
								jumpToChapter(pressedKey);
								i = shortKeys["chapters"].length;
							}else{}
						}
					}					
				}else{}
	}
}


