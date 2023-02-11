import React, { useContext } from 'react';
import Video from '../components/Video';
import { useQuery } from '@tanstack/react-query';
import { ClientContext } from '../context/ClientContext';
import { useParams } from 'react-router-dom';

export default function Home() {
  const {keyword} = useParams(); 
  const client = useContext(ClientContext);

  const {isLoading, error, data: videos} = useQuery(['videos', keyword], () => client.getVideos(keyword));
  console.log('videos',videos);
  
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Home.jsx error! {error.message}</p>

  return (
    <main className='flex flex-wrap content-center gap-2 space-y-2'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

