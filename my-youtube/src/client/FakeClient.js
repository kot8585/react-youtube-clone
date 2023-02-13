import axios from "axios";

export class FakeClient {
  constructor(){}

  async getVideos(keyword) {
    return keyword ? this.#getSearchList(keyword) : this.#getTrendList()
  }

  async #getSearchList(text) {
    console.log(`search ${text} 실행됨`);
    return axios.get(`/data/search.json`)
    .then((response) => this.#makeVideosList(response.data));
  }

  async #getTrendList() {
    return axios.get(`/data/trend.json`)
    .then((response) =>  this.#makeVideosList(response.data));
  }

  async getRelatedList(videoId) {
  return axios.get(`/data/related.json`) 
  .then((response) =>  this.#makeVideosList(response.data));

}

async getChannelThumb(channelId) {
  return `/data/fake-img.jpg`;
}


  #makeVideosList(data){
    if(!data) return [];
    const items = data.items;
    console.log('items', items);
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