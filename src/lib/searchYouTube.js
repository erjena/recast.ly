import YOUTUBE_API_KEY from '../config/youtube.js';

var options = {
  key: YOUTUBE_API_KEY,
  query: 'cats',
  max: 10
};

var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { options },
    contentType: 'application/json',
    success: successCB
  });

  searchByKeyword();
};

var searchByKeyword = () => {
  var results = YouTube.Search.list('id,snippet', { q: { searchResult }, maxResults: 5 });

  for (var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}

export default searchYouTube;
