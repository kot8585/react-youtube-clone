import React from 'react';
import '../App.css';
import Video from '../components/Video';
import { useQuery } from '@tanstack/react-query';
import { FakeClient } from '../client/FakeClient';

const client = new FakeClient();
export default function Home() {

  const {isLoading, error, data: videos} = useQuery(['trend'], () => client.getTrendList());
  console.log('videos',videos);
  
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Home.jsx error! {error.message}</p>

  return (
    <main className='flex flex-wrap content-center gap-2 space-y-2'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

