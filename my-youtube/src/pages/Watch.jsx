import React, {useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Video from '../components/Video';
import useVideos from '../hooks/use-videos';

const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';
export default function Watch() {
  const {videoId} = useParams();
  const {state} = useLocation();
  const [channel, setChannelUrl] = useState('');
  
  //채널 이미지 가져오기 
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${state.channelId}&key=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      setChannelUrl(json.items[0].snippet.thumbnails.default.url);
    })
  }, [state.channelId])
  
  // const relatedVideos = useVideos(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${API_KEY}`);
  const relatedVideos = useVideos('/data/related.json');

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
          <img src={channel} alt="channelImage" />
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