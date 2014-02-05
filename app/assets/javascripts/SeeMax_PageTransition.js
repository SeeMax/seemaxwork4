

// $(document).ready(function(){

//   var urlRoot = location.toString().match(/web/) ? "/web" : "/design" : "/logos" :"/fun" :"/store" :"/email" :;



//   var currentCard;
//   var toggleCard = function(card) {
//     if ( card.is('#current') ) {
//       $(".content-box#current").attr("id", 'current');
//       card.removeAttr('id', 'current');
//       card.addClass('last-active');
//       currentCard = null;
//     } else {
//       $(".content-box#current").removeAttr("id", 'current');
//       card.removeClass('last-active');
//       card.attr("id","current");
//       currentCard = card[0];

//       var wrapper = card.find(".paragraph-wrapper");
//       if (wrapper.length) {
//         $.get(card.attr("href"), function(r) {
//           var content = $(r).find(".paragraph");
//           content.find("img").on("load", function() {
//             $('.isotope-container').isotope('reLayout');
//           });
//           wrapper.replaceWith(content);
//           $('.isotope-container').isotope('reLayout');
//         });
//       }
//     }

//     $('.isotope-container').isotope('reLayout');


//     if ( $(".content-box#current").length ) {
//       setTimeout(function(){
//         $('html, body').animate({
//           scrollTop: $(".content-box#current").offset().top
//         }, 1000);
//       }, 500);
//     } else if ( $(".content-box.last-active").length ) {
//       setTimeout(function(){
//         $('html, body').animate({
//           scrollTop: $(".content-box.last-active").offset().top
//         }, 1000);
//       }, 500);
//     }


//     if (currentCard) {
//       History.pushState({url: card.attr("href")}, '', card.attr("href"));
//     } else {
//       History.pushState({url: ""}, '', urlRoot);
//     }
//     return false;
//   };

//   History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
//     var State = History.getState(); // Note: We are using History.getState() instead of event.state
//     var card = $("div[href='" + State.data.url + "']");
//     if (currentCard != card[0]) {
//       toggleCard(card);
//     }
//   });

// });