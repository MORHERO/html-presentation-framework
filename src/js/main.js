
$(document).ready(function(){
    pageCount.pageCounter();
});

var vari = {
    currentPage : 0,
    pageAnimations : 0,
    animationList : ".fade-in, .fade-out",
    allAnimations : document.getElementsByClassName(this.animationList),
    animTrigger : 0
};

function isNumber(n){
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

var display = {
    all : function(){
        
    }
};

