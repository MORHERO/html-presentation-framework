var animation = {
    
    /**
     * @returns {undefined}
     * Sets the animation class to the next animation element
     */
    trigger : function() {
        var elem = vari.pageAnimations.eq(vari.animTrigger);
        vari.animTrigger++;
        
        switch(elem.attr('class')){
            case "fade-in":
                elem.addClass("fade-in-anim");
                break;
            case "fade-out":
                elem.addClass("fade-out-anim");
                break;
        }
        
        return;
    },
    
    /**
     * @returns {array}
     * Return an array with all elements with animation classes
     */
    elements : function() {
        var currentId; 

        if(vari.currentPage === 0){
            currentId = $("#startPage .content");
        }else if(vari.currentPage === pageCount.normalPageCount()+1){
            currentId = $("#endPage .content");
        }else if(vari.currentPage > 0 && vari.currentPage < pageCount.normalPageCount()+1){
            currentId = $("#normalPage"+vari.currentPage+" .content"); 
        }
        
        return currentId.children(vari.animationList);  
    }
};
