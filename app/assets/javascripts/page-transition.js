$(document).ready(function() {

  // ANIMATE LINK CLICKS
  $(document).on('click', '.nav_item a', function(event) {

    var tl = new TimelineMax({onComplete:getLink})
        solidBack = $(".animated-back .solid")
        stripeBack = $(".animated-back .stripe")
        clients = $(".client_box")
        destination = $(this).attr('href')
        uniEase = Circ.easeOut
        uniTime = .3;

    event.preventDefault();
    tl.staggerTo(clients, .1, {x:"-100%", ease:Back.easeOut.config(1)}, .05, "loading")
      .to(solidBack, uniTime, {attr:{points:"0 1000, 0 0, 0 800, 0 1000"}, ease:uniEase}, "loading+=.3")
      .to(stripeBack, uniTime, {attr:{points:"0 1000, 0 300, 0 1001, 0 1001"}, ease:uniEase}, "loading+=.3")

    function getLink() {
      window.location = destination;
    }

  });


  // ANIMATE PAGE LOAD OUT
  function pageLoad() {
    var tl = new TimelineMax({delay:.5})
        solidBack = $(".animated-back .solid")
        allClients = $(".client_box")
        uniEase = Circ.easeOut;

    allClients.addClass('loading')

    function notLoading() {
      allClients.removeClass('loading')
    }

    tl.to(solidBack, .3, {attr:{points:"0 1000, 0 0, 1000 0, 1000 1000"}, ease:uniEase}, "loaded")
      .add(stripeIn(), "loaded+=.15")
      .staggerTo(allClients, .2, {x:0, ease:Back.easeOut.config(1), onComplete:notLoading}, .075, "loaded+=.15")
  }



  pageLoad();


});

