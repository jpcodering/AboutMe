$(document).ready(function() {

  /////////////////////////////////////
  // go top function //////////////////
  /////////////////////////////////////
  $('.ir-arriba').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });


  /////////////////////////////////////
  // Smooth Scroll function ///////////
  /////////////////////////////////////
  $('a').smoothScroll({
    // offset: -70,
    speed: 600
  });

  /////////////////////////////////////

})
