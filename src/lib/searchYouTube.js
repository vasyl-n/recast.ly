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
      // console.log(data.items);
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to send request', data);
    }
  });
};

window.searchYouTube = searchYouTube;
