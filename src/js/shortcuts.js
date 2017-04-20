$(document).keypress(function(event){
	shortcut.pressed(String.fromCharCode(event.which)); 
});

var shortcut = {
    /**
     * @param {string} pressedKey
     * Triggers and defines the keyboard shortcuts
     */
    pressed : function(pressedKey) {
        var shortKeys = {
                nextPage:"n",
                backPage:"b",
                startPage:"s",
                endPage:"e",
                chapters:[1,2,3,4,5,6,7,8,9],
                displayEverything:"a",
                animation:"+",
                devTest:"!"
        };

        switch (pressedKey){
            case shortKeys["nextPage"]:
                scrollTo.nextPage();
                break;
            case shortKeys["backPage"]:
                scrollTo.backPage();
                break;
            case shortKeys["startPage"]:
                scrollTo.startPage();
                break;
            case shortKeys["endPage"]:
                scrollTo.endPage();
                break;
            case shortKeys["animation"]:
                animation.trigger();
                break;
            case shortKeys["devTest"]:
                test.func();
                break;
            default:
                if(isNumber(pressedKey)){
                    if(pressedKey == 0){
                        break;
                    }else{
                        for(var i = 0; i < shortKeys["chapters"].length; i++){
                            if(pressedKey == shortKeys.chapters[i]){
                                scrollTo.chapter(pressedKey);
                                i = shortKeys["chapters"].length;
                            }else{}
                        }
                    }					
                }else{}
        }
        return;
    }
};