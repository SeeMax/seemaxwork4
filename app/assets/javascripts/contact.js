$(document).ready(function() {

	function contactLoad() {

	  // var tl = new TimelineMax()
	  
	  // tl.add(stripeContact(), "contactOut")
	  // tl.add(contactOpen(), "contactOut")

	var tlLink = new TimelineMax({reversed:true, paused:true})
	  stripeBack = $(".animated-back .stripe")
	  stripeColor = $('#diagonal line')
	  solidBack = $('#solidBack')
	  navLink = $(".nav-link")
	  thisPage = $(".pages")
	  contactLink = $("#contactLink")
	  emailSection = $("#emailSection")
	  contactClose = $("#contact-close")
	  animatedLogo = $(".animated-logo")
	  animatedLetter = $(".animatedLetter")
	  uniEase =  Back.easeInOut.config(.75)
	  uniTime = .25;

	tlLink.to(stripeBack, uniTime, {attr:{points:"0 1001, 0 0, 1001 0, 1000 1001"}, ease:uniEase}, "contactOne")
	  .to(stripeColor, uniTime,  {attr:{'stroke':'#231F20', 'stroke-width':5}, ease:uniEase}, "contactOne")
	  .to(thisPage, uniTime, {x:"-100%", ease:uniEase}, "contactOne")
	  .to(animatedLogo, uniTime, {scale:0}, "contactOne")
	  .staggerTo(animatedLetter, uniTime, {y:1000}, .025, "contactOne")
	  .to(emailSection, uniTime, {left:'10%'}, "contactTwo")
	  .to(solidBack, uniTime,  {attr:{'fill':'black'}, ease:uniEase}, "contactTwo")
	  .to(navLink, uniTime,  {color:'white', ease:uniEase}, "contactTwo")
	  .to(contactClose, uniTime,  {opacity:1, rotation:360, ease:uniEase}, "contactTwo")

	// contactLink.addClass("contact-open");

	$(document).on('click', '#contactLink', function(event) {

		event.preventDefault();

	  if (tlLink.reversed()) {
	    tlLink.play();
	    contactLink.removeClass("contact-open");
	  } else {
	    tlLink.reverse();
	    contactLink.addClass("contact-open");
	  }
	});

	}
	// CALL THE ABOVE ON READY
	contactLoad();

});