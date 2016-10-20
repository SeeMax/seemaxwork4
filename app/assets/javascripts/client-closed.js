$(document).ready(function() {

  $('.close').click(function(){

    var masterTL = new TimelineMax();
        thisClose = $(this)
        thisClient = $(this).parent()
        thisTitle = thisClient.find('.title')
        thisContent = thisClient.find(".client_content")
        thisCredits = thisClient.find(".credits")
        thisSVG = thisClient.find('svg')
        thisSVGImage = thisSVG.find('image')
        groupImages =  thisClient.find(".lazy")
        thisGallery =  thisClient.find(".gallery")
        thisText =  thisClient.find(".text")
        thisVisitText =  thisClient.find(".visit-text")
        thisOtherContent = [thisText, thisVisitText, thisGallery]
        mobileDevice = thisClient.find(".mobile-screen")
        fisherDevice = thisClient.find(".fisher-phone")
        firstImage = thisClient.find(".firstLoad")
        oddballScreen = $(".internal-oddball")
        oddballScreenKids = $(".internal-oddball").children()
        oddballScreenKidsKids = $(".internal-oddball g").children()
        oddballScreenKidsKidsKids = $(".internal-oddball g g").children()
        otherTitles = $('.title').not(thisTitle)
        otherClients = $('.client_box').not(thisClient)
        allClients = $(".client_box");



    function colapseCreditsandClose() {

      var tl = new TimelineMax();

      tl.to(thisCredits, .3, {y:-20, opacity:0, ease:Back.easeInOut}, "closeUp")
        .to(thisClose, .3,  {rotation:0, opacity:0, ease:Back.easeIn.config(1.25)}, "closeUp")

      return tl;
    }



    function swingOtherClientsBack() {

      var tl = new TimelineMax()

      tl.set(otherTitles, {backfaceVisibility:"hidden", transformPerspective:200})
        .set(otherClients, {height:"auto"})
        .to(thisContent, .1,  {height:0}, "closeUpShop")
        .to(thisTitle, .15, {marginBottom:40}, "closeUpShop")
        .from(otherClients, .15, {height:0, ease: Back.easeOut.config(2)}, "closeUpShop")
        .to(otherTitles, .2, {rotationY:0, transformOrigin:"left 50%", transformStyle:"preserve-3d", ease:Back.easeOut.config(.25)});

      return tl;
    }



    function laptopanimateClosed() {

      var tl = new TimelineMax({})
          frame = thisSVG.find(".screen-frame")
          inside = thisSVG.find(".screen-inside")
          image = thisSVG.find(".screen-image")
          bTop = thisSVG.find(".body-top")
          bBottom = thisSVG.find(".body-bottom")
          latch = thisSVG.find(".body-latch")
          showEm = [frame, inside, bTop, bBottom, latch]
          defEase = Circ.easeOut;

      tl.to(image, .2, {opacity:0})
        .to(oddballScreen, .2, {opacity:0})
        .to(inside, .2, {opacity:0, attr:{height:"0"}}, "screenDown")
        .to(bBottom, .2, {attr:{d:"M 1251,687  c 0,0 -30,0 -69,0  H 101  c -39,0 -69,0 -69,0  H 1251  z"}}, "screenDown")
        .to(latch, .2, {attr:{d:"M 729,667  l -2,-1  c -1,0 -5,0 -8,0  H 571  c -2,-1 -6,0 -8,0  l -2,-1  H 729  z"}}, "screenDown")
        .to(frame, .2, {attr:{d:"M 1106,655  H 181  c -18,0 -32,14 -32,32  V 666  h 990  V 687  C 1139,669, 1124,655, 1106,655 z"}}, "screenDown")
        .set(showEm, {opacity:0})
        .to(bTop, .2, {opacity:0, attr:{d:"M 1254,683  c 0,0 -1,0 -4,0  H 33 c -2,0 -4,0 -4,1  v -10  c 0,0 -4,0 4,0  h 1217  c 2,0 4,2 4,4 V 683  z"}})

      return tl;
    }


    function mobileDeviceIn() {

      var tl = new TimelineMax()
          defEase = Circ.easeInOut;

      tl.to(mobileDevice, .125, {left:"91%", ease:defEase})
        .set(mobileDevice, {zIndex:19})
        .to(mobileDevice, .125, {left:"69%", opacity:0, ease:defEase});

      return tl;
    }


    function fisherDeviceIn() {

      var tl = new TimelineMax()
          defEase = Circ.easeInOut;
          deviceOne = $('#fisher-device-one')
          deviceTwo = $('#fisher-device-two')

      tl.to(deviceOne, .1, {x:"-50%", ease:defEase}, "fOut")
        .to(deviceTwo, .1, {x:"50%", ease:defEase}, "fOut")
        .to(deviceOne, .1, {x:"50%", opacity:0, scale: .5, ease:defEase}, "fIn")
        .to(deviceTwo, .1, {x:"-50%", opacity:0, scale: .5, ease:defEase}, "fIn")

      return tl;
    }


    function hideOtherContent() {

      var tl = new TimelineMax

      tl.to(thisOtherContent, .15, {opacity:0});
      return tl;
    }

    // HIDE THE FIRST IMAGE IF IT IS MAIN IMAGE (ALA CRESCO)
    function hideFirstImage() {

      var tl = new TimelineMax({})
      tl.to(firstImage, .1, {opacity:0})

    }


    function addLoading() {
      allClients.addClass('loading');
    }

     // REMOVE .loading  ONCE ANIMATION FINISHES
    function removeLoading() {
       allClients.removeClass('loading');
    }


    // DON'T ALLOW CLOSE TILL ANIMATION IS COMPLETE
    if (allClients.hasClass("loading")) {
      return false;
    }
    else if (thisClient.hasClass("fisher")) {

      masterTL.call(addLoading)
              .call(closeGallery)
              .add(hideOtherContent(),"closeOne")
              .add(fisherDeviceIn(),"closeOne")
              .add(colapseCreditsandClose(),"closeOne")
              .add(stripeClientClose(),"openAllClients-=.07")
              .add(swingOtherClientsBack(),"openAllClients")
              .call(removeLoading);

      thisTitle.removeClass("active");
      allClients.removeClass("loading");
    }
    else if (thisClient.hasClass("cresco")) {

      masterTL.call(addLoading)
              .call(closeGallery)
              .call(hideFirstImage)
              .add(hideOtherContent(),"closeOne")
              .add(mobileDeviceIn(),"closeOne")
              .add(colapseCreditsandClose(),"closeOne")
              .add(laptopanimateClosed(),"closeOne+=.25")
              .add(stripeClientClose(),"openAllClients-=.07")
              .add(swingOtherClientsBack(),"openAllClients")
              .call(removeLoading)

      thisTitle.removeClass("active");
      allClients.removeClass("loading");
    }
    else if (thisClient.hasClass("oddball")) {

      console.log('ok');

      // KILL THE INTERNAL ANIMATION FOR ODDBALL
      TweenMax.killChildTweensOf(oddballScreen);
      masterTL.call(addLoading)
              .call(closeGallery)
              .add(hideOtherContent(),"closeOne")
              .add(mobileDeviceIn(),"closeOne")
              .add(colapseCreditsandClose(),"closeOne")
              .add(laptopanimateClosed(),"closeOne+=.25")
              .add(stripeClientClose(),"openAllClients-=.07")
              .add(swingOtherClientsBack(),"openAllClients")
              .call(removeLoading)

      // CLEAR PROPERTIES / RESET ALL ELEMNTS ON ODDBALL SCREEN
      TweenMax.set(oddballScreenKids, {clearProps:"all"})
      TweenMax.set(oddballScreenKidsKids, {clearProps:"all"})
      TweenMax.set(oddballScreenKidsKidsKids, {clearProps:"all"})

      thisTitle.removeClass("active");
      allClients.removeClass("loading");
    }
    // IF ANIMATION IS COMPLETE CLOSE
    else {

      masterTL.call(addLoading)
              .call(closeGallery)
              .add(hideOtherContent(),"closeOne")
              .add(mobileDeviceIn(),"closeOne")
              .add(colapseCreditsandClose(),"closeOne")
              .add(laptopanimateClosed(),"closeOne+=.25")
              .add(stripeClientClose(),"openAllClients-=.07")
              .add(swingOtherClientsBack(),"openAllClients")
              .call(removeLoading)

      thisTitle.removeClass("active");
      allClients.removeClass("loading");
    }

  });


});