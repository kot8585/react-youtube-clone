import React, {useEffect, useState} from 'react';

export default function useVideos(url) {
  const [videos, setVideos] = useState([]);
  //근데 이렇게 하면 한번밖에 안되는 거 아니야? 응.. trend의 경우 계속 url이 같을테니 호출을 안하겠다.
  // '/data/search.json'
  useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(`fetch 호출 : ${url}`);
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
      setVideos(data);
    });
  }, [url]);

  return videos;
}

