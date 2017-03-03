$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > $(window).height() * 0.60) {
        $(".navbar-pinkneypark").addClass("hidden");
        $(".navbar-pinkneypark-scroll").removeClass("hidden");
    } else if (scroll < $(window).height()) {
        $(".navbar-pinkneypark").removeClass("hidden");
        $(".navbar-pinkneypark-scroll").addClass("hidden");
    }
});
