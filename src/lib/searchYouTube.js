var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbaddable: 'true'
    },
    contentType: 'application/json',
    error: function (error) {
      console.error('Failed to fetch messages', error);
    }
  }).done(function (response) {
    callback(response.items);
  });
};

export default searchYouTube;
