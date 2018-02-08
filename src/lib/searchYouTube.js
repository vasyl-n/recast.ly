var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'key': YOUTUBE_API_KEY,
      'maxResults': '5',
      'part': 'snippet',
      'q': options
    },
    success: (data) => {
      // console.log(data)
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to send request', data);
    }
  });
};

var debounce = function(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout;

  // Calling debounce returns a new anonymous function
  return function() {
    // reference the context and args for the setTimeout function
    var context = this;
    var args = arguments;

    // Should the function be called now? If immediate is true
    //   and not already in a timeout then the answer is: Yes
    var callNow = immediate && !timeout;

    // This is the basic debounce behaviour where you can call this
    //   function several times, but it will only execute once
    //   [before or after imposing a delay].
    //   Each time the returned function is called, the timer starts over.
    clearTimeout(timeout);

    // Set the new timeout
    timeout = setTimeout(function() {

      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // Check if the function already ran with the immediate flag
      if (!immediate) {
        // Call the original function with apply
        // apply lets you define the 'this' object as well as the arguments
        //    (both captured before setTimeout)
        func.apply(context, args);
      }
    }, wait);

    // Immediate mode and no wait timer? Execute the function..
    if (callNow) { func.apply(context, args); }
  };
};

var getComments = function(videoId, callback) {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    data: {
      'key': YOUTUBE_API_KEY,
      // 'maxResults': '5',
      'part': 'snippet',
      'videoId': videoId
    },
    success: (data) => {
      // console.log(data)
      callback(data);
    },
    error: function (data) {
      console.error('Failed to send request', data);
    }
  });
};



window.searchYouTube = searchYouTube;

