import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    console.log(`Searching for ${keyword}...`);
    return axios
    .get(`/videos/search.json`)
    .then((response) => response.data.items)
    .then((items) => items.map((item) => ({...item, id: item.id.videoId})))
  }

  async #mostPopular() {
      return axios
      .get(`/videos/popular.json`)
      .then((response) => response.data.items);
  }

}