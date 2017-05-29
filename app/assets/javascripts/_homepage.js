$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > $(window).height() * 0.30) {
        setTimeout(function() {
	    $(".landing-header").removeClass("hidden");
		}, 300);

        setTimeout(function() {
		$(".landing-para").removeClass("hidden");
		}, 700);

		setTimeout(function() {
		$(".landing-boxes-all").removeClass("hidden");
		$(".landing-margin").addClass("hidden");
		}, 1100);
    }
    else if (scroll < $(window).height()) {
    }
});


