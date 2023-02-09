import axios from 'axios';

export default class Youtube {
  //❗️기본 네트워크 설정 해주기 
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
    })
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  //❗️파라미터 세팅해주기
  async #searchByKeyword(keyword) {
    return this.httpClient
    .get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      }
    })
    .then((response) => response.data.items)
    .then((items) => items.map((item) => ({...item, id: item.id.videoId})))
  }

   async #mostPopular() {
    return this.httpClient
    .get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      }
    })
    .then((response) => response.data.items);
  }

}