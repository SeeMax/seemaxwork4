$(document).ready(function() {
  $('.toggle').click(function(){
    if ($(this).parent().hasClass('active')) {
      $('.client_box').removeClass("active");
    } else {
      $('.client_box').removeClass("active");
      $(this).parent().addClass('active');

      setTimeout(
        function()
        {
          $('html, body').animate({
            scrollTop: $('.active').offset().top - 70
          }, 'slow');
        }, 570);
    }
  });
});




