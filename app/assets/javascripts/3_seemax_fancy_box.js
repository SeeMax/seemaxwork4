$(document).ready(function() {
  $(".fancybox").fancybox({
    helpers : {
          title: {
              type: 'inside',
              position: 'top'
          },
            overlay : {
                css : {
                    'background' : 'rgba(250, 250, 250, 0.85)'
                }
            }
        }
    });
  });