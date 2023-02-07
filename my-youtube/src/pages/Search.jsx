import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchList } from '../YoutubeClient';
import Video from '../components/Video';


export default function Search() {
  const [videos, setVideos] = useState([]);

  const {search} = useParams();

  useEffect( () => {
    async function fetchData() {
    const searchData = await getSearchList(search)
    console.log('searchData', searchData);
    setVideos(searchData);
    }
    fetchData();
  }, [search])
    

  return (
    <main className='flex flex-wrap content-center'>
      {videos.map((video) => <Video key={video.videoId} info={video}/>)}
    </main>
  );
}

