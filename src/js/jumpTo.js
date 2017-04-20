/**
 * @type type
 */
var scrollTo = {
    /**
     *  Gives the anchorid to anchor() when the next page is a normal page
     *  When the next page is the last Page jump to endPage()
     */
    nextPage : function(){
        var pages = pageCount.normalPageCount();

        if (vari.currentPage < pages){
            vari.currentPage++;
            var anchorid = "#normalPage" + vari.currentPage;
            scrollTo.anchor(anchorid);
        }
        else {
            scrollTo.endPage();
        }
        return;
    },

    /**
     * Gives the anchorid from the last page to anchor()
     * When the last page is the start page jump to startPage()
     */
    backPage : function(){
        if (vari.currentPage > 1){
            vari.currentPage--;
            var anchorid = "#normalPage" + vari.currentPage;
            scrollTo.anchor(anchorid);
        }
        else {
            scrollTo.startPage();
        }
        return;
    },

    /**
     * @param {int} chapter
     * Gives the anchorclass from the chapter to anchor()
     */
    chapter : function(chapter){
        var anchorclass = ".chapter" + chapter;
        scrollTo.anchor(anchorclass);
        return;
    },

    /**
     *  Gives the anchorid of the start page to anchor()
     */
    startPage : function(){
        vari.currentPage = 0;
        var anchorid = "#startPage";
        scrollTo.anchor(anchorid);
        return;
    },

    /**
     *  Gives the anchorid of the last page to anchor()
     */
    endPage : function(){
        vari.currentPage = (pageCount.normalPageCount() + 1);
        var anchorid = "#endPage";
        scrollTo.anchor(anchorid);
        return;
    },

    /**
     * @param {string} anchor
     * Scrolls to the given anchor 
     */
    anchor : function(anchor){
        // When anchor is a class the Id of the element will be selected
        if (anchor.startsWith(".")){
            var currentPageId = document.querySelector(anchor).id;
            vari.currentPage = currentPageId.slice(-1);
        }
        // customOffset is needed for the correct point to scroll to
        var customOffset = $(anchor).offset().top -$(window).height() * 0.05;
        $('html,body').animate({scrollTop: customOffset },'slow', function(){
            vari.pageAnimations = animation.elements();
        });
        vari.animTrigger = 0;
        return;
    }
};