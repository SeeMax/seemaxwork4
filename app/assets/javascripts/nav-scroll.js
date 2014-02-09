$(document).scroll(function() {
  if($(window).scrollTop() > 80) {
          $(".nav").addClass("darklink");
          $(".scrollback").css("opacity", "1");
      } else {
          $(".nav").removeClass("darklink");
          $(".scrollback").css("opacity", "0");
      }
});



