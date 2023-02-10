import axios from 'axios';

export default class YoutubeClient {
  //❗️기본 네트워크 설정 해주기 
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
    })
  }

  //❗️파라미터 세팅해주기
  async search(params) {
    //.get의 첫번째 Param은 뭐가 들어가는거지?
    return this.httpClient.get('search', params);
  }

   async videos(params) {
    return this.httpClient.get('videos', params);
   }

}