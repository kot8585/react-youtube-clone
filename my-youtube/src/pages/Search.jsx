import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import { ClientContext } from '../context/ClientContext';

export default function Search() {
  const {keyword} = useParams(); 
  const client = useContext(ClientContext);
  //Todo : Home component로 합치키 키워드 있으면 있는대로 검색하고 없으면 없는대로 검색하면 됌
  const {isLoading, error, data:videos} = useQuery(['search', keyword], () => client.getVideos(keyword));

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Search.jsx error! {error.message}</p>

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

