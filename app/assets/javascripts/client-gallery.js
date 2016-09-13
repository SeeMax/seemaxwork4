$(document).ready(function() {

  function galleryExpand(galleryType, returnSize) {

    $(document).on('click', galleryType, function() {


      var tl = new TimelineMax
          $this = $(this)
          parent = $(this).closest(".gallery")
          nots = $(galleryType).not($this)
          others = parent.find(nots)
          all = $(galleryType)
          close = $this.find('.gallery-close')
          allClose = parent.find('.gallery-close')
          myEase = Circ.easeInOut
          elasticEaseIn = Elastic.easeIn.config(1, 1);
          elasticEaseOut = Elastic.easeOut.config(1, 1);

      if ($(galleryType).hasClass('open-gallery')) {

        tl.to(all, .3, {width:returnSize, ease: myEase}, "sameTime");
        tl.to(allClose, .3, {opacity:0, top:30, ease: elasticEaseIn}, "sameTime");
        all.removeClass('open-gallery');

      } else {

        $this.addClass('open-gallery');
        tl.to(others, .3, {width:"4%", ease: myEase})
          .to($(this), .3, {width:"90%", ease: myEase}, "-=.29")
          .to(close, .3, {opacity:1,top:-30, ease: elasticEaseOut});

      }
    });

  }

  galleryExpand('.gallery_tile', '32%');
  galleryExpand('.gallery_tile_2', '50%');

});

// GLOBAL FUNCTION
function closeGallery() {
  $('.gallery_tile').removeClass('open-gallery');
}
