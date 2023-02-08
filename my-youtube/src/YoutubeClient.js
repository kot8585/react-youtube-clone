const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';

export async function getSearchList(text) {
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${API_KEY}`);
  const json = await response.json();
  return makeVideosList(json);
}

export async function getTrendList() {
  const response = await fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`);
  const json = await response.json();
  return makeVideosList(json);
}

export async function getRelatedList(videoId) {
  const response = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${API_KEY}`);
  const json = await response.json();
  return makeVideosList(json)
}

export async function getChannelThumb(channelId) {
  const response = await fetch (`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
  const json = await response.json();
  return json.items[0].snippet.thumbnails.default.url;
}

function makeVideosList(json){
  const items = json.items;
            
  console.log('items', json);
  return items.map((item) => { return {
    'videoId': item.id.videoId || item.id.playlistId || item.id.channelId || item.id,
    'thumbnail': item.snippet.thumbnails.medium.url,
    'title': item.snippet.title,
    'publishedAt': item.snippet.publishedAt, 
    'description' : item.snippet.description,
    'channelTitle': item.snippet.channelTitle,
    'channelId': item.snippet.channelId,
  }});
}