import React from 'react';
import '../App.css';
import { getTrendList } from '../YoutubeClient';
import Video from '../components/Video';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  return getTrendList();
}

export default function Home() {
  const videos = useLoaderData();

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

