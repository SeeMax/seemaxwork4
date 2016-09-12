$(window).load(function() {

  function openSection(client) {

    // Create the variables for the function
    var openTL = new TimelineMax({paused:true})
        closeTL = new TimelineMax({paused:true})






    // Create the timeline animations


      // .to(openArrow, .5, {transformOrigin:'50% 50%', rotation:0, morphSVG:{shape:"#close-x", shapeIndex:31}, ease:Power4.easeIn}, "-=4");


    // closeTL.add("closing")
    //        .to($(this), .2, {maxHeight:"80px"}, "closing")
    //        .to(title, .4, { fontSize:70, lineHeight:'80px'}, "closing")
    //        .to(credits, .3, { fontSize:10, letterSpacing:1, opacity:0}, "closing");


    $(client).on( "click", function (event) {

      var content = $(this).find('.client_content')
          animationContainer =$(this).find(content).outerHeight(true)
          openArrow = $(this).find('#open-arrow');
          closeButton = $(this).find('.close-button')
          openArrow = $(this).find('#open-arrow')
          title = $(this).find('.title')
          credits = $(this).find('.credits')

          object = $(this).find('object')
          objectData= $(object).find("data-unloaded")
          image = $(this).find('img')
          imageData= $(image).find("data-unloaded");

      openTL.to(openArrow, .5, {transformOrigin:'50% 50%', rotation:720, morphSVG:{shape:"#close-x", shapeIndex:31}, ease:Power4.easeIn},"opeining")
            .to(client, 1, {maxHeight:animationContainer+ 100 +"px"}, "opeining")
            .to(title, .4, { fontSize:55, lineHeight:'70px'}, "opeining")
            .to(credits, .3, { fontSize:18, letterSpacing:6, opacity:1},"opeining")
            .to(client, 0, {maxHeight:"100%"});

      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        openTL.reverse();
        console.log("open");
      }
      else {
        console.log("closed");
        $(this).addClass("open");
        openTL.play();
      }

    });

    // $(allClients).on( "click", function (event) {

    //   openOne = $(".content").find(".client_box.open")

    //   if (!$(this).is(".open") && $(allClients).hasClass("open")) {
    //     console.log(openOne);
    //   }
    // });


  }

  // Get the id of each client box as an array
  var arr = [];
  i = 0;
  $('.client_box').each(function()
  {
        arr[i++] = this.id;
  });


  // Place each id in the array in to the animation function
  $.each( arr, function( key, value ) {
    openSection("#"+value);
    console.log( key + ": " + value );
  });


  $( window ).resize(function() {

    openClient = $(".client_box.open")
    content = $(".client_box.open .content")
    animationContainer =$(openClient).find(content).outerHeight(true)

    if ($(".client_box").hasClass("open")) {
      console.log(animationContainer);
      console.log(this);
      TweenMax.to(openClient, .2, {maxHeight:"100%"}, 0)
      console.log("moving 1");
    }
  });


});

