$(document).ready(function() {
  $(".fancybox").fancybox({
    helpers : {
      title: {
        type: 'inside',
        position: 'top'
      },
      overlay : {
        css : {
          'background' : 'rgba(0, 0, 0, 0.85)'
        }
      }
    }
  });

  $('.fancybox-media').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      helpers : {
        media : {}
      }
    });
});
