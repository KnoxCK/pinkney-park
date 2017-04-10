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

$(document).on('click', '.resi-link', function(e) {
  $(".commercial-page").addClass("hidden");
  $(".residential-page").removeClass("hidden");
e.preventDefault();
});