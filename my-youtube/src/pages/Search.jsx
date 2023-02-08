import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FakeClient } from '../client/FakeClient';
import Video from '../components/Video';

//Todo : client 전역으로 만들기?
const client = new FakeClient();
export default function Search() {

  const {isLoading, error, data:videos} = useQuery(['search'], () => client.getSearchList());

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Search.jsx error! {error.message}</p>

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

