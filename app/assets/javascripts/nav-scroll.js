$(document).scroll(function() {
  if($(window).scrollTop() > 75) {
          $(".nav").addClass("darklink");
      } else {
          $(".nav").removeClass("darklink");
      }
});



