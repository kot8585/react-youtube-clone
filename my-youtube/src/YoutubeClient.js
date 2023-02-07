const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';

export async function getSearchList(text) {
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${API_KEY}`);
  const json = await response.json();
  const items = json.items;
  return items.map((item) => { return {
    'videoId': item.id.videoId || item.id.playlistId || item.id.channelId || item.id,
    'thumbnail': item.snippet.thumbnails.default.url,
    'title': item.snippet.title,
    'publishedAt': item.snippet.publishedAt, 
    'description' : item.snippet.description,
    'channelTitle': item.snippet.channelTitle,
    'channelId': item.snippet.channelId,
  }});
}

//
