import axios from "axios";
export class RealClient {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_API_KEY,
      }
    })
  }

  async search(params) {
    return this.instance.get('search', params);
  }

  async trend(params) {
    return this.instance.get('videos', params)
  }

  async related(params) {
    return this.instance.get('search', params);
  }

  async thumbnail(params) {
    return this.instance.get('channels', params)
    .then((response) => response.data.items[0].snippet.thumbnails.default.url);
  }

}