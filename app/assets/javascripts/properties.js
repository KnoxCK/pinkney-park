// $(document).on('click', '.commercial-button', function(e) {
//   $(".commercial-page").removeClass("hidden");
//   $(".residential-page").addClass("hidden");
// e.preventDefault();
// });

// $(document).on('click', '.residential-button', function(e) {
//   $(".commercial-page").addClass("hidden");
//   $(".residential-page").removeClass("hidden");
// e.preventDefault();
// });

// $(document).on('click', '.resi-link', function(e) {
//   $(".a[href$=properties").addClass("hidden");
//   $(".commercial-page").addClass("hidden");
//   $(".residential-page").removeClass("hidden");
// e.preventDefault();
// });

$(document).click('.residential-link', function(e){
  e.preventDefault();
  console.log('oi');
  $(".properties-buttons").tabs({active: 1});
});

