import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import RelatedVideo from '../components/RelatedVideo';
import { ClientContext } from '../context/ClientContext';


export default function Watch() {
  const client = useContext(ClientContext);
  const {videoId} = useParams();
  const {state} = useLocation();
  //❗️TODO : 아직 이미지가 로딩중이거나 에러가 났을때 기본 이미지를 보여주는게 좋음
  const { isLoading, error, data: relatedVideos } = useQuery(['related'], () => client.getRelatedList(videoId));
  const { isLoading:isLoadingChannelImg, error: errorChannelImg, data: channelImg } = useQuery(['channelImg'], () => client.getChannelThumb(state.channelId));

  if (isLoading) return 'relatedVideo Loading...'  ;
  if (error) return 'An relatedVideo error has occurred: ' + error.message;
  if (isLoadingChannelImg) return 'channelImg Loading...'  ;
  if (errorChannelImg) return 'An channelImg error has occurred: ' + error.message;


   return (
    <div className='flex w-full h-full gap-10'>
      <main className='flex-auto space-y-3 w-4/6'>
        <iframe id="existing-iframe-example"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            frameBorder="0"
            className='w-full h-2/3 md:max-h-96'
            // style="border: solid 4px #37474F"
        ></iframe>
        <div className='font-bold  text-xl'>{state.title}</div>
        <div>
          <img src={channelImg} alt="channelImage" className='inline-block w-8 h-8 rounded-full mr-2'/>
          <span className='font-bold'>{state.channelTitle}</span>
        </div>
        <div className='text-sm text-gray-600'>{state.description}</div>
      </main>
      <aside className='flex-col space-y-3 w-2/6 hidden md:flex '>
        {relatedVideos.map((video) => <RelatedVideo key={video.videoId} info={video}/>)}
      </aside>
    </div>
  );
}