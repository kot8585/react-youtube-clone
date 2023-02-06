import React, {useState, useEffect} from 'react';
import '../App.css';
import Video from './Video';

export default function Home() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetch('/data/search.json')
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
    .then((videos) => setVideos(videos))
    })
  

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video info={video}/>)}
    </main>
  );
}

