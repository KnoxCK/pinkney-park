$(document).on('click', '.commercial-button', function(e) {
  $(".commercial-page").removeClass("hidden");
  $(".residential-page").addClass("hidden-sm hidden-md hidden-lg hidden-xl");
e.preventDefault();
});

$(document).on('click', '.residential-button', function(e) {
  $(".commercial-page").addClass("hidden");
  $(".residential-page").removeClass("hidden-sm hidden-md hidden-lg hidden-xl");
e.preventDefault();
});

$(document).ready(function(){
  var hash = window.location.hash
  if (hash) {
    $('.properties-buttons '+hash+'').addClass('properties-button-active');
    $(".commercial-page").addClass("hidden");
    $(".residential-page").removeClass("hidden-sm hidden-md hidden-lg hidden-xl");
  }
});




