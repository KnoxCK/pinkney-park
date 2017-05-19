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

$(document).on('click', '.resi-link', function(e) {
  $(".a[href$=properties").addClass("hidden");
  $(".commercial-page").addClass("hidden");
  $(".residential-page").removeClass("hidden");
e.preventDefault();
});
