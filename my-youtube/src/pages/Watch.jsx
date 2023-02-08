import React, {useEffect, useState} from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import Video from '../components/Video';
 import {
   useQueryClient,
   useQuery,
 } from 'react-query'
import { getChannelThumb, getRelatedList } from '../YoutubeClient';

const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';

export async function loader({params}) {
  return getRelatedList(params.videoId);
}

export default function Watch() {
  const {videoId} = useParams();
  const {state} = useLocation();
  const [channel, setChannelUrl] = useState('');
  
  const relatedVideos = useQuery('related', getRelatedList(videoId));

  
  
  //어디다 놔야할지,, 허허.. 이걸 usequery가 쉽게 해주네... react-router가 아니라... 
  // 에잇 모르겠다...
  // const {data, isError, isLoading} = useQuery(
  //   'channelImg', 
  //   fetch (`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${state.channelId}&key=${API_KEY}`)
  //   )

    
  console.log('channel', channel);
   return (
    <div className='flex'>
      <main>
        <iframe id="existing-iframe-example"
            width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            frameBorder="0"
            // style="border: solid 4px #37474F"
        ></iframe>
        <div>{state.title}</div>
        <div>
          {/* ❓이미지 어디서 가져오지? */}
          {/* <img src={channel} alt="channelImage" /> */}
          <span>{state.channelTitle}</span>
        </div>
        <div>{state.description}</div>
        </main>
        <aside className='flex flex-col'>
          {/* TODO : video 재사용하는건 맞는데 display가 달라야하는데 말이지 */}
          {relatedVideos.map((video) => <Video key={video.videoId} info={video}/>)}
        </aside>
    </div>
  );
}