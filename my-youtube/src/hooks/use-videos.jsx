import React, {useEffect, useState} from 'react';

export default function useVideos(url) {
  const [videos, setVideos] = useState([]);
  //근데 이렇게 하면 한번밖에 안되는 거 아니야?
  // '/data/search.json'
  useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const items = json.items;
      return items.map((item) => { return {
        'videoId': item.id.videoId || item.id.playlistId || item.id.channelId,
        'thumbnail': item.snippet.thumbnails.default.url,
        'title': item.snippet.title,
        'publishedAt': item.snippet.publishedAt, 
        'description' : item.snippet.description,
        'channelTitle': item.snippet.channelTitle,
        'channelId': item.snippet.channelId,
      }})
    })
    .then((data) => {
      console.log('호출');
      setVideos(data);
    });
  }, [url]);

  return videos;
}

