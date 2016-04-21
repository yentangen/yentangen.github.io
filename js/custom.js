/* Activate BounceJS when scroll from top to bottom */
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 950 ) {
        $(".animate").addClass("animation-target");
    } else {
        $(".animate").removeClass("animation-target");
    }
});

/* Dynamic resize of element to fit height of viewing window */
$( ".window-height" ).each(function( index ) {
  var window_height = $(window).height() - 25;
  if ($(this).height() < window_height) {
    $(this).height(window_height);
  }
});
