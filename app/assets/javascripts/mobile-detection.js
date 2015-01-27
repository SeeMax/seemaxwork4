$( document ).ready(function() {
   if (navigator.userAgent.match(/Mobi/)) {
         $(".homevideo").css({"display" : "none"});
         $(".mobile--background").css({"display" : "block"});
     }
});
