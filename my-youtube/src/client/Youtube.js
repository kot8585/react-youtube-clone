export class Youtube {
  constructor(client) {
    this.client = client;
  }

  async getVideos(keyword) {
    return keyword ? this.#getSearchList(keyword) : this.#getTrendList();
  }

  async #getSearchList(text) {
    return this.client.search({params: {
      part: 'snippet',
      maxResults: 25,
      q: text,
      }
    })
    .then((response) =>  this.#makeVideosList(response.data));
  }

  async #getTrendList() {
    return this.client.trend({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular', 
      }
    })
      .then((response) =>  this.#makeVideosList(response.data));
  }

  async getRelatedList(videoId) {
    return this.client.related({
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
    return this.client.thumbnail({
      params: {
        part: 'snippet',
        id: channelId,
      }
    });
  }

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