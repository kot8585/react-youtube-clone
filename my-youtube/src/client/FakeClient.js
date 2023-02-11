export class FakeClient {
  constructor(){}

  async getVideos(keyword) {
    return keyword ? this.#getSearchList(keyword) : this.#getTrendList()
  }

  async #getSearchList(text) {
    console.log(`search ${text} 실행됨`);
    const response = await fetch(`/data/search.json`);
    if(!response) {return []};
    const json = await response.json();
    return this.makeVideosList(json);
  }

  async #getTrendList() {
    console.log('trend 실행됨');

    const response = await fetch (`/data/trend.json`);
    console.log('response', response);
    const json = await response.json();
    return this.makeVideosList(json);
  }

  async getRelatedList(videoId) {
  const response = await fetch (`/data/related.json`);
  if(!response) {return []};
  const json = await response.json();
  return this.makeVideosList(json)
}

async getChannelThumb(channelId) {
  return `/data/fake-img.jpg`;
}


  makeVideosList(json){
    const items = json.items;
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