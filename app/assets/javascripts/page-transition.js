$(document).ready(function() {

  // ANIMATE LINK CLICKS
  $(document).on('click', 'a.nav-link', function(event) {

    var tl = new TimelineMax({onComplete:getLink})
        solidBack = $(".animated-back #solidBack")
        stripeBack = $(".animated-back #stripe")
        emailSection = $("#emailSection")
        clients = $(".client_box")
        allLogos = $(".logo-tile")
        destination = $(this).attr('href')
        animatedLetter = $(".animatedLetter")
        animatedLogo = $(".animated-logo")
        uniEase = Circ.easeOut
        uniTime = .15;

    event.preventDefault();
    
    tl.to(emailSection, .1, {left:'100%'})
      .staggerTo(animatedLetter, .075, {y:"-500%", opacity:0, ease:Back.easeOut.config(1)}, .005, "loading")
      .to(animatedLogo, .75, {scale:0, opacity:0, ease:Back.easeOut.config(1)}, "loading")
      .staggerTo(clients, .05, {x:"-100%", ease:Back.easeOut.config(1)}, .05, "loading")
      .staggerTo(allLogos, .05, {x:'-330%', ease:Back.easeOut.config(1)}, .075, "loading")
      .add(codepenOut(), "loading")
      .add(homeLinkOut(), "loading")
      .to(stripeBack, uniTime, {attr:{points:"0 1000, 0 1000, 1000 1000, 1000 1000"}, ease:uniEase}, "loading+=.3")
      .to(solidBack, uniTime, {attr:{points:"0 1000, 0 0, 0 800, 0 1000"}, ease:uniEase}, "loading+=.5")
      

    function getLink() {
      window.location = destination;
    }

  });  


    // ANIMATE LINK CLICKS
  $(document).on('click', 'a.home-link', function(event) {

    var tl = new TimelineMax({onComplete:getLink})
        solidBack = $(".animated-back #solidBack")
        stripeBack = $(".animated-back #stripe")
        emailSection = $("#emailSection")
        clients = $(".client_box")
        allLogos = $(".logo-tile")
        destination = $(this).attr('href')
        uniEase = Circ.easeOut
        uniTime = .15;

    event.preventDefault();
    
    tl.to(emailSection, .1, {left:'100%'})
      .staggerTo(clients, .05, {x:"-100%", ease:Back.easeOut.config(1)}, .05, "loading")
      .staggerTo(allLogos, .05, {x:'-330%', ease:Back.easeOut.config(1)}, .075, "loading")
      .add(codepenOut(), "loading")
      .add(homeLinkOut(), "loading")
      .to(stripeBack, uniTime, {attr:{points:"0 1000, 0 0, 0 1001, 300 1001"}, ease:uniEase}, "loading+=.15")
      .to(solidBack, uniTime, {attr:{points:"0 1000, 0 0, 0 800, 0 1000"}, ease:uniEase}, "loading+=.25")
      

    function getLink() {
      window.location = destination;
    }

  });      
});


// ANIMATE HOME PAGE LOAD / Called in nav.js
  function homePageLoad() {
    var tl = new TimelineMax({delay:.3})
        solidBack = $(".animated-back .solid")
        allClients = $(".client_box")
        uniEase = Circ.easeInOut;

    allClients.addClass('loading')

    tl.add(homeStripeInOne(),"logoIn")
      .add(homeLogoAnimation(),"logoIn+=1")
      .add(homeStripeInTwo(), "-=.5")
      // .add(codepenIn(),"+=.75")
  }


// ANIMATE PROJECTS PAGE LOAD / Called in nav.js
  function projectsPageLoad() {
    var tl = new TimelineMax({delay:.3})
        solidBack = $(".animated-back .solid")
        allClients = $(".client_box")
        uniEase = Circ.easeOut;

    allClients.addClass('loading')

    function notLoading() {
      allClients.removeClass('loading')
    }

    tl.to(solidBack, .15, {attr:{points:"0 1000, 0 0, 1000 0, 1000 1000"}, ease:uniEase}, "loaded")
      .add(clientStripeIn(), "loaded+=.15")
      .staggerTo(allClients, .15, {x:0, ease:Back.easeOut.config(1), onComplete:notLoading}, .075, "loaded+=.075")
      .add(homeLinkIn())
  }

  // ANIMATE LOGO PAGE LOAD / Called in nav.js
  function logoPageLoad() {
    var tl = new TimelineMax({delay:.3})
        solidBack = $(".animated-back .solid")
        allLogos = $(".logo-tile")
        uniEase = Circ.easeOut;

    allLogos.addClass('loading')

    function notLoading() {
      allLogos.removeClass('loading')
    }

    tl.to(solidBack, .15, {attr:{points:"0 1000, 0 0, 1000 0, 1000 1000"}, ease:uniEase}, "loaded")
      .add(logoStripeIn(), "loaded+=.15")
      .staggerTo(allLogos, .15, {x:0, ease:Back.easeOut.config(1), onComplete:notLoading}, .075, "loaded+=.15")
      .add(homeLinkIn())
  }


