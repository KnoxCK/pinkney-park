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

// $(document).on('click', '.resi-link', function(e) {
//   $(".a[href$=properties").addClass("hidden");
//   $(".commercial-page").addClass("hidden");
//   $(".residential-page").removeClass("hidden");
// e.preventDefault();
// });

$(document).click('.residential-link', function(e){
  e.preventDefault();
  window.location.href = "/properties#residential-button"
  console.log('fuck');
  var hash = document.location.hash;
  if (hash) {
    console.log($('.properties-buttons .'+hash+''));
    $('.properties-buttons .'+hash+'').addClass('properties-button-active');
    $(".commercial-page").addClass("hidden");
    $(".residential-page").removeClass("hidden");

  }
});




