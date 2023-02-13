import axios from "axios";

export class FakeClient {
  constructor(){}

  async search() {
    return axios.get(`/data/search.json`);
  }

  async trend() {
    return axios.get(`/data/trend.json`);
  }

  async related() {
  return axios.get(`/data/related.json`); 
}

  async thumbnail() {
    return `/data/fake-img.jpg`;
  }

}