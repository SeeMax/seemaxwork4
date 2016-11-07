function homeLogoAnimation() {

  var MasterTL = new TimelineMax()
      MorphSVGPlugin.convertToPath('circle')
      animatedLogo = $(".animated-logo")
      vidContainer = $(".vid-container")
      oCircle = $("#outer-circle") 
      iCircle = $("#inner-circle")
      tStraight = $("#t-straightLine")
      rStraight = $("#r-straightLine")
      bStraight = $("#b-straightLine")
      lStraight = $("#l-straightLine")
      tlCross = $("#t-leftCross")
      trCross = $("#t-rightCross")
      allLcross = $(".leftCross")
      allRcross = $(".rightCross")
      allStraight = $(".straightLine")
      allTcrossOne = $(".topCrossOne")
      allTcrossTwo = $(".topCrossTwo")
      allTcrossThree = $(".topCrossThree")
      allTcrossFour = $(".topCrossFour")
      logoPencil = $(".logo-pencil")
      logoPencilSOne = $(".logo-pencil-strokeOne")
      logoPencilSTwo = $(".logo-pencil-strokeTwo")
      // Start The Lines in the Correct Position Either 0% 0% or 100% 100%
      allHundo = [oCircle , tStraight , lStraight ,  "#b-topCrossThree" , "#b-topCrossFour" ,  "#b-leftCross" ,  "#b-rightCross" ,  "#l-leftCross", "#l-rightCross" , "#l-topCrossThree" , "#l-topCrossFour"]
      allZero = [iCircle , allTcrossOne , allTcrossTwo , bStraight , rStraight , "#t-topCrossThree" , "#t-topCrossFour" , "#t-leftCross" , "#t-rightCross" , "#r-leftCross", "#r-rightCross" , "#r-topCrossThree" , "#r-topCrossFour"]
      // For closing animation grouped without the circles
      allHundoNoCirc = [tStraight , lStraight ,  "#b-topCrossThree" , "#b-topCrossFour" ,  "#b-leftCross" ,  "#b-rightCross" ,  "#l-leftCross", "#l-rightCross" , "#l-topCrossThree" , "#l-topCrossFour"]
      allZeroNoCirc = [allTcrossOne , allTcrossTwo , bStraight , rStraight , "#t-topCrossThree" , "#t-topCrossFour" , "#t-leftCross" , "#t-rightCross" , "#r-leftCross", "#r-rightCross" , "#r-topCrossThree" , "#r-topCrossFour"]
      animatedLetter = $(".animatedLetter")


  function drawGuides() {

    var tl = new TimelineMax()
        baseTime = .75
        baseEase = Circ.easeInOut

    tl.set(allZero, {drawSVG:"0% 0%", visibility: 'visible', immediateRender:false})
      .set(allHundo, {drawSVG:"100% 100%", visibility: 'visible', immediateRender:false})
      
      .to(oCircle, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides1')
      .to(allStraight, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides1')      
      .to(allTcrossOne, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides2-=.3')
      .to(allTcrossTwo, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides2-=.3')
      .to(allTcrossThree, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides2-=.3')
      .to(allTcrossFour, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides2-=.3')      
      .to(allLcross, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides4-=.05')
      .to(allRcross, baseTime, {drawSVG:"100% 0%", ease: baseEase}, 'guides4-=.05')
      .to(iCircle, .5, {drawSVG:"100% 0%", ease: baseEase}, 'guides4-=.05')
          
    return tl;
  }


  function drawLogo() {

    var tl = new TimelineMax()
        baseTime = .5
        baseStagger = .05
        baseEase = Circ.easeInOut

    tl.set(logoPencil, {drawSVG:"59% 59%", visibility: 'visible', immediateRender:false})
      .set(logoPencilSOne, {drawSVG:"0% 0%", visibility: 'visible', immediateRender:false})
      .set(logoPencilSTwo, {drawSVG:"100% 100%", visibility: 'visible', immediateRender:false})
      .set(oCircle, {rotation:-120, transformOrigin:"50% 50%", immediateRender:false})
      .set(iCircle, {rotation:-120, transformOrigin:"50% 50%", immediateRender:false})
      
      .to(logoPencil, baseTime, {drawSVG:"100% 0%", ease: Power2.easeOut,})
      .staggerTo(allHundoNoCirc, baseTime, {drawSVG:"100% 100%", ease: baseEase}, baseStagger, 'guidesOut-=.1')
      .staggerTo(allZeroNoCirc, baseTime, {drawSVG:"0% 0%", ease: baseEase}, baseStagger, 'guidesOut-=.1')

      .staggerTo(logoPencilSOne, baseTime/8.5, {drawSVG:"0% 100%", ease: baseEase}, baseTime/5.2, "circlesOut-=.3")
      .staggerTo(logoPencilSTwo, baseTime/8.5, {drawSVG:"100% 0%", ease: baseEase}, baseTime/5.2, "circlesOut-=.3")
      .to(oCircle, baseTime, {drawSVG:"100% 100%", ease: baseEase}, "circlesOut-=.3")
      .to(iCircle, baseTime, {drawSVG:"100% 100%", ease: baseEase}, "circlesOut-=.3")
      
      return tl;
  }

  function showType() {


    var tl = new TimelineMax()
        baseEase =  Elastic.easeOut.config(1, 1)
    
    tl.set(animatedLetter, {opacity:0, scale:10, fill:"red", transformOrigin:"50% 100%"})
      .add(bounceLogo(), 'typeIn')
      .staggerTo(animatedLetter, .3, {opacity:1, scale:1, fill:"#e2e2e2", ease:baseEase}, .1, 'typeIn')


    return tl;
  }


  function bounceLogo() {

    var tl = new TimelineMax()
        baseTime = .05
        startScale = 1.4

    tl.to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale:startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})
      .to(animatedLogo, baseTime, {scale: startScale})
      .to(animatedLogo, baseTime, {scale:1, ease:baseEase})

    return tl;
  }

  MasterTL
          .add(drawGuides())
          .add(drawLogo())
          .add(showType(),'+=.7')

  return MasterTL;


}

