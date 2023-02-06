import React, {useEffect, useState} from 'react';

export default function useVideos(url) {
  const [videos, setVideos] = useState([])
  //근데 이렇게 하면 한번밖에 안되는 거 아니야?
  // '/data/search.json'
  useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const items = json.items;
      return items.map((item) => { return {
        'videoId': item.id.videoId,
        'thumbnail': item.snippet.thumbnails.default.url,
        'title': item.snippet.title,
        'publishedAt': item.snippet.publishedAt, 
        'channelTitle': item.snippet.channelTitle,
      }})
    })
    .then((data) => {setVideos(data)});
  }, []);

  return videos
}

