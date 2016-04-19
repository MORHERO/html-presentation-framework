var currentPage = 0;

$(document).ready(function(){
	pageCounter();
});

 function isNumber(n){
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

