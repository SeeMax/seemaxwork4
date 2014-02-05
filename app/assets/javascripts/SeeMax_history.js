// (function (window, undefined) {



//  $(function(){
//  var History = window.History;
//  if (History.enabled) {
//      State = History.getState();
//      // set initial state to first page that was loaded
//      History.pushState({urlPath: window.location.pathname}, $("title").text(), State.urlPath);
//  } else {
//      return false;
//  }

//  var loadAjaxContent = function(target, urlBase, selector) {
//      $(target).load(urlBase + ' ' + selector);
//  };

//  var updateContent = function(State) {
//      var selector = '#' + State.data.urlPath.substring(1);
//    if ($(selector).length) { //content is already in #hidden_content
//        $('#content').children().appendTo('#hidden_content');
//        $(selector).appendTo('#content');
//    } else {
//        $('#content').children().clone().appendTo('#hidden_content');
//        loadAjaxContent('#content', State.url, selector);
//    }
//  };

//  // Content update and back/forward button handler
//  History.Adapter.bind(window, 'statechange', function() {
//      updateContent(History.getState());
//  });

//  // navigation link handler


//  })(window);