import axios from "axios";
export class RealClient {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        key: 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE',
      }
    })
  }

  API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';

  async getVideos(keyword) {
    return keyword ? this.#getSearchList(keyword) : this.#getTrendList();
  }

  async #getSearchList(text) {
    return this.instance.get('search',
    {params: {
      part: 'snippet',
      maxResults: 25,
      q: text,
    }})
    .then((response) =>  this.#makeVideosList(response.data));
  }

  async #getTrendList() {
    return this.instance.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular', 
      }
    })
    .then((response) =>  this.#makeVideosList(response.data));
  }

  async getRelatedList(videoId) {
    // return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${this.API_KEY}`)
    return this.instance.get('search', {
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video',
        maxResults: 25,
      }
    })
    .then((response) =>  this.#makeVideosList(response.data));
  }

  async getChannelThumb(channelId) {
    // return axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${this.API_KEY}`)
    return this.instance.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      }
    })
    .then((response) => response.data.items[0].snippet.thumbnails.default.url)
  }

  //이거 private인데
  #makeVideosList(data){
    if(!data) return [];
    const items = data.items;
              
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