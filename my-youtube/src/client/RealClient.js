export class RealClient {
  //꼭 constructor가 있어야 new를 쓸 수 있나? 
  constructor() {
  }

  API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';

  async getVideos(keyword) {
    return keyword ? this.#getSearchList(keyword) : this.#getTrendList()
  }

  async #getSearchList(text) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${this.API_KEY}`);
    
    const json = await response.json();
    return this.makeVideosList(json);
  }

  async #getTrendList() {
    const response = await fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.API_KEY}`);
    if(!response) {return []};
    const json = await response.json();
    return this.makeVideosList(json);
  }

  async getRelatedList(videoId) {
    const response = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${this.API_KEY}`);
    if(!response) {return []};
    const json = await response.json();
    return this.makeVideosList(json)
  }

  async getChannelThumb(channelId) {
    const response = await fetch (`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${this.API_KEY}`);
    if(!response) {return []};
    const json = await response.json();
    return json.items[0].snippet.thumbnails.default.url;
  }

  //이거 private인데
  makeVideosList(json){
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
}