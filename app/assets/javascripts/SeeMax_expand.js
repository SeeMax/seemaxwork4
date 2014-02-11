// $(document).ready(function(){

//   var urlRoot = location.toString().match(/training/) ? "/training" : "/programs";

//   var currentCard;
//   var toggleCard = function(card) {
//     if ( card.is('.active') ) {
//       alert("hi")
//       $(".client_box .active").addClasss('active');
//       card.removeClasss('active');;
//       card.addClass('last-active');
//       currentCard = null;
//     } else {
//       $(".client_box .active").removeClass('active');
//       card.removeClass('last-active');
//       $card.addClass('active')
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


//     if ( $(".client_box .active").length ) {
//       setTimeout(function(){
//         $('html, body').animate({
//           scrollTop: $(".client_box .active").offset().top
//         }, 1000);
//       }, 500);
//     } else if ( $(".client_box .last-active").length ) {
//       setTimeout(function(){
//         $('html, body').animate({
//           scrollTop: $(".client_box .last-active").offset().top
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
