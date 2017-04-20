var pageCount = {
    /**
     * @returns {int}
     * Returns the amount of normal pages
     */ 
    normalPageCount : function(){
        return $('[id^=normalPage]').length;
    },

    /**
     * @returns {undefined}
     * Includes the page numbers to all "normalPage" elements
     */
    pageCounter : function(){
        var totalPageCount = ($(".page")).length;

        for(var i=0; i<totalPageCount; i++){
            $("#normalPage"+i).append('<span class="pageNumber" id="pageNumber">'+i+'</span>');
        }
        return;
    }
};