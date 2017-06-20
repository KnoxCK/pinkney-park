$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > $(window).height() * 0.30) {
        setTimeout(function() {
	    $(".landing-header").removeClass("hidden");
		}, 100);

        setTimeout(function() {
		$(".landing-para").removeClass("hidden");
		}, 300);

		setTimeout(function() {
		$(".landing-boxes-all").removeClass("hidden");
		$(".blank-block").addClass("hidden");
		$(".landing-wrapper-appear").addClass("hidden");

		}, 700);
    }
    else if (scroll < $(window).height()) {
    }
});


