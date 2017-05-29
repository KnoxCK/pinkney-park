$(document).on('click', '.commercial-button', function(e) {
  $(".commercial-page").removeClass("hidden");
  $(".residential-page").addClass("hidden");
e.preventDefault();
});

$(document).on('click', '.residential-button', function(e) {
  $(".commercial-page").addClass("hidden");
  $(".residential-page").removeClass("hidden");
e.preventDefault();
});

$(document).ready(function(){
  var hash = window.location.hash
  console.log(hash);
  if (hash) {
    console.log($('.properties-buttons '+hash+''));
    $('.properties-buttons '+hash+'').addClass('properties-button-active');
    $(".commercial-page").addClass("hidden");
    $(".residential-page").removeClass("hidden");
  }
});




