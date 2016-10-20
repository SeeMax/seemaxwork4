function homeStripeInOne() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(.5)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 0, 1000 0, 1000 1001"}, ease:uniEase})
    
  return tl;
}

function homeStripeInTwo() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(.5)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"500 1000, 1000 0, 1000 0, 1000 1001"}, ease:uniEase}, "goOut")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#dedede', 'stroke-width':'.5'}}, "goOut+=.15");

  return tl;
}


function clientStripeIn() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(.5)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 1, 1000 1001, 1000 1001"}, ease:uniEase}, "goOut")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#f0553a'}}, "goOut+=.15");

  return tl;
}


function logoStripeIn() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(.5)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 0, 1000 0, 1000 1000"}, ease:uniEase}, "goOut")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#eaeaea', 'stroke-width':'4'}}, "goOut+=.15");

  return tl;
}


function stripeOut() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      uniEase = Back.easeInOut.config(1)
      uniTime = .3;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 0, 0 1001, 300 1001"}, ease:uniEase})

  return tl;
}


function stripeClientClose() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeIn.config(1)
      uniTime = .3;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 1, 1000 1001, 1000 1001"}, ease:uniEase}, "goOut")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#f0553a'}}, "goOut+=.15");

  return tl;
}


function stripeClientOpen() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(1)
      uniTime = .3;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 500, 500 1001, 500 1001"}, ease:uniEase}, "client")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#ffe33b'}}, "client");

  return tl;
}


function stripeLogoOpen() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(1)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 0, 50 1, 50 1001"}, ease:uniEase}, "client")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#00B165'}}, "client");

  return tl;
}


function stripeContact() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      solidBack = $('#solidBack')
      navLink = $(".nav-link")
      contactLink = $("#contactLink")
      uniEase =  Back.easeIn.config(1)
      uniTime = .3;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1001, 0 0, 1001 0, 1000 1001"}, ease:uniEase}, "client")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#231F20', 'stroke-width':5}, ease:uniEase}, "client")
    .to(solidBack, uniTime,  {attr:{'fill':'black'}, ease:uniEase}, "clientTwo")
    .to(navLink, uniTime,  {color:'white', ease:uniEase}, "clientTwo")

  contactLink.addClass("contact-open");

  return tl;
}