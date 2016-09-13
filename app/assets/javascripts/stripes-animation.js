function stripeIn() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      stripeColor = $('#diagonal line')
      uniEase =  Back.easeOut.config(.5)
      uniTime = .5;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 1, 1000 1001, 1000 1001"}, ease:uniEase}, "goOut")
    .to(stripeColor, uniTime,  {attr:{'stroke':'#f0553a'}}, "goOut+=.15");

  return tl;
}

function stripeOut() {

  var tl = new TimelineMax
      stripeBack = $(".animated-back .stripe")
      uniEase = Back.easeInOut.config(1)
      uniTime = .3;

  tl.to(stripeBack, uniTime, {attr:{points:"0 1000, 0 300, 0 1001, 0 1001"}, ease:uniEase})

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
    .to(stripeColor, uniTime,  {attr:{'stroke':'#ffe33b'}}, "client-=.15");

  return tl;
}