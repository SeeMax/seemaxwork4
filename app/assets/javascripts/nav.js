$(document).ready(function () {
  if(window.location.href.indexOf("project") > -1) {
     $("#projects a").addClass("nav-active");
			projectsPageLoad();
  }

  else if(window.location.href.indexOf("logos") > -1) {
    $("#logos a").addClass("nav-active");
    logoPageLoad();
  }

  else {	
    homePageLoad();
    $(".nav-link").addClass("white-nav");	
  }

});
