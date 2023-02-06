import React from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import useVideos from '../hooks/use-videos';

const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';
export default function Search() {
  const {search} = useParams();
  
  //얘 처음 렌더링 할때 호출하는 곳에서 다 일어난다.... custom hook쓰는거 아닌가..
  // const videos = useVideos(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`);
  const videos = useVideos('/data/search.json');


  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

