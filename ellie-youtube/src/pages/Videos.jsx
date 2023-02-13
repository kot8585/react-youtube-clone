import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const {youtube} = useYoutubeApi();
  console.log('youtube', youtube);
  const {keyword} = useParams();
  // ❓ 키워드별로 캐시..... 그러면 캐시가 너무 많이 되는거  아냐??
  const {isLoading, error, data: videos} = useQuery( ['videos', keyword], () =>  youtube.search(keyword));

  console.log('videos', videos)
  return (
    <>
    <div>Videos {keyword ? `${keyword}` : '🔥'}</div>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error :</p>}
    {videos && 
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
      {videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>}
    </>
  );
}

