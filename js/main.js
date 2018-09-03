$(document).ready(function() {
  /////////////////////////////////////
  // Menu Scroll function /////////////
  /////////////////////////////////////
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#logo").css({
        "height": "50px",
        "margin-top": "-5px"
      });
      $("header").css({
        "background-color": "var(--header)"
      });
      $(".via").css({
        "visibility": "visible"
      });
      $("header>nav>ul").css({
        "display": "block"
      });
      $("#down").css({
        "display": "none"
      });

    } else {
      $("#logo").css({
        "height": "30vh",
        "margin-top": "30vh"
      });
      $("header").css({
        "background-color": "transparent"
      });
      $("header>nav>ul").css({
        "display": "none"
      });
      $(".via").css({
        "visibility": "hidden"
      });
      $("#down").css({
        "display": "flex"
      });
    }
  });
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
    offset: -70,
    speed: 1200
  });

  /////////////////////////////////////

})
