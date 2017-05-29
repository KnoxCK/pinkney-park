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

		}, 700);
    }
    else if (scroll < $(window).height()) {
    }
});

function cycleMyImages(){
    var $active = $('#banner-main-image .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#banner-main-image img:first');
    $next.css('z-index',5);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
	$active.css('z-index',-10).show().removeClass('active');//reset the z-index and unhide the image
	$next.css('z-index',10).addClass('active');//make the next image the top one
	});
}

$(document).ready(function(){
// run every 7s
setInterval('cycleMyImages()', 4000);
})

