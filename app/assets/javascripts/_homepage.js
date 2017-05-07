$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > $(window).height() * 0.30) {
        setTimeout(function() {
	    $(".landing-header").removeClass("hidden");     
		e.preventDefault();
		}, 300);
        
        setTimeout(function() {
		$(".landing-para").removeClass("hidden");
		e.preventDefault();
		}, 700);

		setTimeout(function() {
		$(".landing-boxes-all").removeClass("hidden");
		$(".landing-margin").addClass("hidden");
		e.preventDefault();
		}, 1100);
    } 
    else if (scroll < $(window).height()) {
    }
});


