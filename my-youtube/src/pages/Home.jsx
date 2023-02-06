import React from 'react';
import '../App.css';
import useVideos from '../hooks/use-videos';
import Video from '../components/Video';

export default function Home() {
  const videos = useVideos('/data/search.json');

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

