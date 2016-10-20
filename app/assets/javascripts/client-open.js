$(document).ready(function() {

  $('.title').click(function(){

    var masterTL = new TimelineMax();
        thisTitle = $(this)
        thisClient = $(this).parent()
        thisContent = thisClient.find(".client_content")
        thisCredits = thisClient.find(".credits")
        thisClose = thisClient.find('.close')
        thisSVG = thisClient.find('svg')
        thisSVGImage = thisSVG.find('image')
        groupImages =  thisClient.find(".lazy")
        thisGallery =  thisClient.find(".gallery")
        thisText =  thisClient.find(".text")
        thisVisitText =  thisClient.find(".visit-text")
        thisLaptop =  thisClient.find(".body-top")
        thisOtherContent = [thisText, thisVisitText, thisLaptop]
        otherTitles = $('.title').not(thisTitle)
        otherClients = $('.client_box').not(thisClient)
        SVGscreen = thisSVG.find(".screen-frame")
        mobileDevice = thisClient.find(".mobile-screen")
        fisherDevice = thisClient.find(".fisher-phone")
        firstImage = thisClient.find(".firstLoad")
        
        oddballScreen = $(".internal-oddball")
        allClients = $(".client_box");


    function addSVG() {
      // Add SVGS
      thisSVGImage.each(function( index ) {
        var imageLink = $( this ).attr('data-link');
        $( this ).attr('xlink:href', imageLink);
      });
    }


    function laptopanimateOpen() {

      var tl = new TimelineMax({})
            frame = thisSVG.find(".screen-frame")
            inside = thisSVG.find(".screen-inside")
            image = thisSVG.find(".screen-image")
            bTop = thisSVG.find(".body-top")
            bBottom = thisSVG.find(".body-bottom")
            latch = thisSVG.find(".body-latch")
            showEm = [frame, inside, bBottom, latch]
            defEase = Circ.easeIn
            defTime = .2
            defTimeHalf = .1

      tl.to(bTop, defTimeHalf, {opacity:1, attr:{d:"M 1254,683  c 0,2 -1,4 -4,4  H 33 c -2,0 -4,-1 -4,-4  v -14  c 0,-2 2,-4 4,-4  h 1217  c 2,0 4,2 4,4  V 683  z"}, ease:defEase})
      .set(showEm, {opacity:1})
      .to(frame, defTime, {attr:{d:"M 1106,0  H 181  c -18,0 -32,14 -32,32  V 666  h 990  V 32  C 1139,14, 1124,0, 1106,0 z"}, ease:defEase}, "screenUp")
      .to(latch, defTimeHalf, {attr:{d:"M 729,667  l -2,8  c -1,2 -5,4 -8,4  H 571  c -2,0 -6,-2 -8,-4  l -2,-9  H 729  z"}, ease:defEase}, "screenUp")
      .to(bBottom, defTimeHalf, {attr:{d:"M 1251,687  c 0,0 -30,14 -69,14  H 101  c -39,0 -69,-14 -69,-14  H 1251  z"}, ease:defEase}, "screenUp")
      .to(inside, defTime, {attr:{height:"587"}}, "screenUp+=.15")
      .to(oddballScreen, defTime, {opacity:1}, "screenUp+=.3")
      .to(image, defTime, {opacity:1});


      return tl;
    }



    function mobileDeviceOut() {

      var tl = new TimelineMax()
          defEase = Circ.easeInOut;

      tl.set(mobileDevice, {scale:.5, opacity:1, immediateRender:false})
        .to(mobileDevice, .15, {left:"91%", scale:1, ease:defEase})
        .set(mobileDevice, {zIndex:21})
        .to(mobileDevice, .15, {left:"79%", ease:defEase});

      return tl;
    }

    function fisherDeviceOut() {

      var tl = new TimelineMax()
          defEase = Circ.easeInOut;
          deviceOne = $('#fisher-device-one')
          deviceTwo = $('#fisher-device-two')

      tl.set(fisherDevice, {scale:.5, immediateRender:false})
        .to(deviceOne, .1, {x:"-50%", opacity:1,  scale:1, ease:defEase}, "fOut")
        .to(deviceTwo, .1, {x:"50%", opacity:1,  scale:1, ease:defEase}, "fOut")
        .to(deviceOne, .1, {x:"0%", ease:defEase}, "fIn")
        .to(deviceTwo, .1, {x:"0%", ease:defEase}, "fIn")

      return tl;
    }


    function swingOtherClientsOut() {

      var tl = new TimelineMax()

      tl.set(otherTitles, {backfaceVisibility:"hidden", transformPerspective:200, immediateRender:false})
        .to(otherTitles, .3, {rotationY:90, transformOrigin:"left 50%", transformStyle:"preserve-3d", ease:Back.easeOut.config(1)})
        .to(otherClients, .2, {height:0, ease: Back.easeIn.config(2)})
        .to(thisTitle, .01, {marginBottom:0});

      return tl;
    }


    function expandClient() {

      var tl = new TimelineMax();

      tl.set(thisContent, {height:"auto"})
        .from(thisContent, .0001, {height:0, ease:Back.easeOut.config(1)})
      return tl;
    }


    function expandCreditsAndClose() {

      var tl = new TimelineMax();

      tl.set(thisCredits, {y:-7, opacity:0})
        .set(thisClose, {transformOrigin:'50% 50%'})
        .to(thisCredits, .4, {y:0, opacity:1, ease:Back.easeOut.config(2)}, 'openCredits')
        .to(thisClose, .4,  {rotation:-720, opacity:1, ease:Back.easeOut.config(1.2)}, 'openCredits')

      return tl;
    }


    // SHOW THE CONTENT INSIDE THE CLICKED CLIENT - NOT INCLUDING JPGS
    function showOtherContent() {

      var tl = new TimelineMax

      tl.to(thisOtherContent, .5, {opacity:1});
      return tl;
    }

    // LOAD JPGS
    function loadImages() {

      $(groupImages).lazy({
          bind: "event"
      });

    }

    // SHOW IMAGES ONCE LOADED
    function showImages() {

      var tl = new TimelineMax({})
      tl.to(thisGallery, .5, {opacity:1})

    }

    // LOAD AN IMAGE FIRST IF IT IS MAIN IMAGE (ALA CRESCO)
    function loadFirstImage() {

      $(firstImage).lazy({
          bind: "event"
      });

    }

    // SHOW THE FIRST IMAGE IF IT IS MAIN IMAGE (ALA CRESCO)
    function showFirstImage() {

      var tl = new TimelineMax({})
      tl.to(firstImage, .2, {opacity:1})

    }


     // ADD .loading TO PREVENT CLICK WHILE ANIMATION RUNS
    function addLoading() {
      allClients.addClass('loading');
    }

     // REMOVE .loading  ONCE ANIMATION FINISHES
    function removeLoading() {
       allClients.removeClass('loading');
    }

    function removeoddBall() {
       thisClient.removeClass('oddball');
    }

    // DISABLE CLICKS TILL LOAD ANIMATION COMPLETE [Class Also added in page-transition.js]
    if (thisClient.hasClass("loading")) {
      return false;
    }

    else if (thisClient.hasClass("fisher")) {
      
      
      // IF IT'S OPEN AND SOMEONE CLICKS THE TITLE DO NOTHING
      if (thisTitle.hasClass("active")) {
        return false;
      }
      // OTHERWISE RUN THE OPENING ANIMATION
      else {
        thisTitle.addClass("active");

        masterTL.call(addLoading)
                .call(addSVG)
                .call(closeGallery)
                .add(swingOtherClientsOut())
                .add(expandClient())
                .add(stripeClientOpen(),"clientIn-=.07")
                .add(expandCreditsAndClose(),"clinetIn")
                .add(showOtherContent(),"clientIn")
                .add(fisherDeviceOut(), "-=.3")
                .call(loadImages)
                .call(showImages)
                .call(removeLoading);
        }
    }

    else if (thisClient.hasClass("cresco")) {
        
      // IF IT'S OPEN AND SOMEONE CLICKS THE TITLE DO NOTHING
      if (thisTitle.hasClass("active")) {
        return false;
      }
      // OTHERWISE RUN THE OPENING ANIMATION
      else {

       thisTitle.addClass("active");

        masterTL.call(addLoading)
                .call(loadFirstImage)
                .call(addSVG)
                .call(closeGallery)
                .add(swingOtherClientsOut())
                .add(expandClient())
                .add(stripeClientOpen(),"clientIn-=.07")
                .call(showFirstImage)
                .add(expandCreditsAndClose(),"clinetIn")
                .add(showOtherContent(),"clientIn")
                .add(laptopanimateOpen(),"-=.5")
                .add(mobileDeviceOut(), "-=.3")
                .call(loadImages)
                .call(showImages)
                .call(removeLoading);
        }
    }


    else if (thisClient.hasClass("oddball")) {
        
      // IF IT'S OPEN AND SOMEONE CLICKS THE TITLE DO NOTHING
      if (thisTitle.hasClass("active")) {
        return false;
      }
      // OTHERWISE RUN THE OPENING ANIMATION
      else {

        thisTitle.addClass("active");

        masterTL.call(addLoading)
                .call(addSVG)
                .call(closeGallery)
                .add(swingOtherClientsOut())
                .add(expandClient())
                .add(stripeClientOpen(),"clientIn-=.07")
                .add(expandCreditsAndClose(),"clinetIn")
                .add(showOtherContent(),"clientIn")
                .add(laptopanimateOpen(),"-=.5")
                .add(mobileDeviceOut(), "-=.3")
                .call(loadImages)
                .call(showImages)
                .call(removeLoading)
                .add(oddballAnimation().play(),"+=.5")
        }
    }
    
    // IF IT'S LOADED RUN THE IF/ELSE FOR OPENING CLIENTS
    else {
      // IF IT'S OPEN AND SOMEONE CLICKS THE TITLE DO NOTHING
      if (thisTitle.hasClass("active")) {
        return false;
      }
      // OTHERWISE RUN THE OPENING ANIMATION
      else {
        thisTitle.addClass("active");

        masterTL.call(addLoading)
                .call(addSVG)
                .call(closeGallery)
                .add(swingOtherClientsOut())
                .add(expandClient())
                .add(stripeClientOpen(),"clientIn-=.07")
                .add(expandCreditsAndClose(),"clinetIn")
                .add(showOtherContent(),"clientIn")
                .add(laptopanimateOpen(),"-=.5")
                .add(mobileDeviceOut(), "-=.3")
                .call(loadImages)
                .call(showImages)
                .call(removeLoading);
      }
    }

  });

});