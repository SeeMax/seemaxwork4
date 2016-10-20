$(document).ready(function() {

  $(document).on('click', '#zearn', function() {

    var tl = new TimelineMax({repeat:-1, delay:2, repeatDelay:2})
        slide = $('#zearn .animated-screen');

        tl.staggerFrom(slide, .3, {opacity:0}, 2);
  });
});