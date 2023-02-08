import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSearchList } from '../YoutubeClient';
import Video from '../components/Video';

export async function loader({params}) {
  console.log(params);
  return getSearchList(params.search);
}

export default function Search() {

  const videos = useLoaderData();

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

