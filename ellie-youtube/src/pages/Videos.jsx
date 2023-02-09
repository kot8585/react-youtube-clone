import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function Home() {
  const {keyword} = useParams();
  // ❓ 키워드별로 캐시..... 그러면 캐시가 너무 많이 되는거  아냐??
  const {isLoading, error, data: videos} = useQuery(['videos', keyword], async () => {return axios
    .get(`/videos/${keyword? 'search' : 'popular'}.json`)
    .then((res) => res.data.items);
  });


  return (
    <>
    <div>Videos {keyword ? `${keyword}` : '🔥'}</div>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error :</p>}
    {videos && <ul>
      {videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>}
    </>
  );
}

