$(document).ready(function() {

  function logoExpand(logoType, returnSize) {

    $(document).on('click', logoType, function() {


      var tl = new TimelineMax
          $this = $(this)
          thisPage = $('.logos-page')
          all = $(logoType)
          parent = $(this).closest(".logo-gallery")
          nots = $(logoType).not($this)
          thisImage = $this.find('img')
          notsTitles = nots.find(".logo-title")
          allTitles = all.find(".logo-title")
          thisTitle = $this.find(".logo-title")
          others = parent.find(nots)
          close = $this.find('.logo-close')
          allClose = parent.find('.logo-close')
          myEaseIn = Circ.easeIn
          myEaseOut = Circ.easeOut
          myEaseInOut = Circ.easeInOut
          topY = parent.offset().top -100
          thisPageHeight = $(document).height()
          returnHeight = $(window).scrollTop()
          


      if ($(window).width() < 767) {

         return false;
      
      }
      
      else {
        
        tl.set(thisPage, {height:thisPageHeight});
        
        if ($(logoType).hasClass('open-logo')) {

          tl.add(logoStripeIn(), "sameTime")
            .to(all, .3, {width:returnSize, ease: myEaseOut}, "sameTime")
            .to(thisImage, .15, {width:"80%", ease: myEaseOut}, "sameTime")
            .to(all, .1, {opacity:1}, "sameTime+=.25")
            .to(allClose, .4, {rotation:0, scale:0, transformOrigin:'50% 50%'}, "sameTime-=.1")
            .to(allTitles, .3, {opacity:1, color:"#afafaf"}, "sameTime")

          all.removeClass('open-logo');

        } else {

          tl.set(thisPage, {attr:{'return-height':returnHeight}});

          $this.addClass('open-logo');

          tl.set(close, {scale:0})
            .add(stripeLogoOpen(), "disappear")
            .to(nots, .29, {width:"0%", ease: myEaseOut}, "disappear")
            .to(nots, .3, {opacity:0}, "disappear")
            .to(notsTitles, .2, {opacity:0}, "disappear")
            .to($this, .3, {width:"100%", opacity:1, ease: myEaseIn}, "disappear")
            .to(thisImage, .3, {width:"50%"}, "disappear")
            .to(window, .2, {scrollTo:topY, ease: Circ.easeIn}, "disappear+=.1")
            .to(thisTitle, .1, {color:"#00B165"}, "disappear+=.28")
            .to(close, .1, {opacity:1, rotation:720, scale:1, transformOrigin:'50% 50%'}, "disappear+=.28")
            
        }
      
      }
    });

  }

  logoExpand('.logo-tile', '32%');


});

// GLOBAL FUNCTION
function closelogo() {
  $('.logo-tile').removeClass('open-logo');
}
