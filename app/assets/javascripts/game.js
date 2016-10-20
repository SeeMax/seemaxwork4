$( document ).ready(function() {

  var tl = new TimelineMax({paused:true, reversed:true});

  tl.to("#g1", .25, {attr:{points:"212.8, 52.8, 2.5, 52.8, 49.5, 5.8, 176.3, 5.8"}, ease:Circ.easeInOut});

  tl.to("#g2", .25, {attr:{points:"49.5, 5.8, 49.5, 294.3, 2.5, 247.3, 2.5, 52.3"}, ease:Circ.easeInOut});

  tl.to("#g5", .25, {attr:{points:"230.9, 247.3, 2.5, 247.3, 49.9, 294.3, 194.4, 294.3"}, ease:Circ.easeInOut},"move3");
  tl.to("#gr3", .25, {width:47},"move3+=.2");
  tl.to("#g4", .25, {attr:{points:"137.1, 98.8, 137.1, 305.9, 184.5, 352.9, 184.5, 145.3 "}, ease:Circ.easeInOut},"move3");

  tl.to("#g3", .25, {attr:{points:"230.9, 247.3, 85, 136.1, 85, 183.1, 207.4, 277.6"}, ease:Circ.easeInOut},"move4-=.2");
  tl.to("#ga2", .25, {attr:{points:"294.2, 305.9, 137.1, 305.9, 184.5, 352.9, 247.1, 352.9"}, ease:Circ.easeInOut},"move4");

  tl.to("#ga1", .25, {attr:{points:"294.2, 136.1, 85, 136.1, 85, 183.1, 247.6, 183.1"}, ease:Circ.easeInOut},"move5");
  tl.to("#a3", .25, {attr:{points:"247.1, 352.9, 247.1, 206.6, 294.2, 159.6, 294.2, 305.9"}, ease:Circ.easeInOut},"move5");
  // 120 Delay
  tl.to("#gr2", .0625, {width:47},"move5+=.0625");
  tl.to("#gr1", .0625, {attr:{points:"137.1, 118.4, 157, 118.4, 175, 136.1, 137.1, 136.1"}, ease:Power0.easeInOut},"move5+=.0625");

  tl.to("#a1", .25, {attr:{points:"294.2, 7.8, 294.2, 137.1, 247.1, 183.1, 247.1, 54.9"}, ease:Circ.easeInOut},"move6");
  tl.to("#am1", .25, {attr:{points:"525.7, 159.6, 293.6, 159.6, 247.1, 206.6, 572.2, 206.6"}, ease:Circ.easeInOut},"move6");

  tl.to("#a2", .25, {attr:{points:"362.5, 7.8, 293.6, 7.8, 247.1, 54.9, 409.6, 54.9"}, ease:Circ.easeInOut},"move7");
  tl.to("#m6", .25, {attr:{points:"572.2, 206.6, 572.2, 285.3, 525.2, 238.2, 525.2, 159.6"}, ease:Circ.easeInOut},"move7");

  tl.to("#a4", .25, {attr:{points:"409.6, 352.9, 409.6, 54.4, 362.5, 7.8, 362.5, 305.9"}, ease:Circ.easeInOut},"move8");
  // 50 Delay
  tl.to("#gr4", .1, {height:47},"move8+=.125");
  tl.to("#gr5", .1, {height:47},"move8+=.125");
  // AFTER 50 Delay
  tl.to("#m1", .25, {attr:{points:"585.8, 285.3, 572.2, 285.3, 525.2, 238.2, 632.8, 238.2"}, ease:Circ.easeInOut},"move8+=.125");

  tl.to("#am2", .25, {attr:{points:"448.3, 352.9, 409.6, 352.9, 362.5, 305.9, 495.3, 305.9"}, ease:Circ.easeInOut},"move9");
  tl.to("#m2", .25, {attr:{points:"585.8, 51.8, 585.8, 285.3, 632.8, 238.2, 632.8, 4.8"}, ease:Circ.easeInOut},"move9");

  tl.to("#m8", .25, {attr:{points:"495.3, 5.3, 495.3, 305.9, 448.3, 352.9, 448.3, 52.8"}, ease:Circ.easeInOut},"move10");
  // 100 Delay
  tl.to("#gr6", .25, {height:17.7},"move10+=.125");
  tl.to("#gr7", .25, {height:17.7},"move10+=.125");
  // AFTER 100 Delay
  tl.to("#m9", .25, {attr:{points:"585.8, 51.8, 711.9, 51.8, 664.8, 4.8, 632.3, 4.8"}, ease:Circ.easeInOut},"move10");

  tl.to("#m7", .25, {attr:{points:"448.3, 52.3, 572.2, 52.3, 524.8, 5.3, 495.3, 5.3"}, ease:Circ.easeInOut},"move11");
  tl.to("#m10", .25, {attr:{points:"711.9, 51.8, 711.9, 357.2, 664.8, 310.2, 664.8, 4.8"}, ease:Circ.easeInOut},"move11");

  tl.to("#m5", .25, {attr:{points:"572.2, 52.3, 572.2, 177, 525.2, 129.9, 525.2, 5.3"}, ease:Circ.easeInOut},"move12");
  tl.to("#me2", .25, {attr:{points:"752.2, 357.2, 711.9, 357.2, 664.8, 310.2, 799.6, 310.2"}, ease:Circ.easeInOut},"move12");

  tl.to("#me1", .25, {attr:{points:"905.6, 176.9, 572.2, 176.9, 525.2, 129.9, 905.6, 129.9"}, ease:Circ.easeInOut},"move13");
  // 20 Delay
  tl.to("#gr8", .25, {width:46.6},"move13+=.0625");
  tl.to("#gr9", .25, {width:46.6},"move13+=.0625");
  // 40 Delay
  tl.to("#m4", .25, {width:47},"move13+=.125");
  tl.to("#m3", .25, {width:47},"move13+=.125");
  // 80 Delay
  tl.to("#gr12", .25, {width:47},"move13+=.15");
  tl.to("#gr13", .25, {width:47},"move13+=.15");
  // AFTER 80 Delay
  tl.to("#e3", .25, {attr:{points:"799.4, 12.3, 799.4, 310.2, 752.4, 357.2, 752.4, 58.8"}, ease:Circ.easeInOut},"move13");

  tl.to("#e1", .25, {attr:{points:"905.6, 177.1, 725.9, 299.6, 725.9, 252.6, 905.6, 129.9"}, ease:Circ.easeInOut},"move14");
  tl.to("#e2", .25, {attr:{points:"955.2, 12.3, 799.4, 12.3, 752.4, 59.3, 908.2, 59.3"}, ease:Circ.easeInOut},"move14");

  tl.to("#e4", .25, {attr:{points:"961.9, 252.6, 725.9, 252.6, 725.9, 299.6, 915.4, 299.6"}, ease:Circ.easeInOut},"move16");
  // 100 Delay
  tl.to("#gr14", .25, {width:47},"move14+=.35");


  $(".button").on("click", function(){
    tl.reversed() ? tl.play() : tl.reverse();
  });

});
