
$('a[href^="#"]').click(function(){

var arrow = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(arrow).offset().top
    }, 'slow');

return false;});


