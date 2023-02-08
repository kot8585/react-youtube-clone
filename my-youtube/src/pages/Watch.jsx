import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { FakeClient, getChannelThumb, getRelatedList } from '../client/FakeClient';
import RelatedVideo from '../components/RelatedVideo';

const client = new FakeClient();
export default function Watch() {
  const {videoId} = useParams();
  const {state} = useLocation();
  
  const { isLoading, error, data: relatedVideos } = useQuery(['related'], () => client.getRelatedList(videoId));
  const { isLoading:isLoadingChannelImg, error: errorChannelImg, data: channelImg } = useQuery(['channelImg'], () => client.getChannelThumb(state.channelId));

  if (isLoading) return 'relatedVideo Loading...'  ;
  if (error) return 'An relatedVideo error has occurred: ' + error.message;
  if (isLoadingChannelImg) return 'channelImg Loading...'  ;
  if (errorChannelImg) return 'An channelImg error has occurred: ' + error.message;


   return (
    <div className='flex w-full gap-10'>
      <main className='flex-auto space-y-3 w-4/6'>
        <iframe id="existing-iframe-example"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            frameBorder="0"
            className='w-full h-1/5'
            // style="border: solid 4px #37474F"
        ></iframe>
        <div className='font-bold  text-xl'>{state.title}</div>
        <div>
          <img src={channelImg} alt="channelImage" className='inline-block w-8 h-8 rounded-full mr-2'/>
          <span className='font-bold'>{state.channelTitle}</span>
        </div>
        <div className='text-sm text-gray-600'>{state.description}</div>
      </main>
      <aside className='flex flex-col space-y-3 w-2/6'>
        {/* TODO : video 재사용하는건 맞는데 display가 달라야하는데 말이지 */}
        {relatedVideos.map((video) => <RelatedVideo key={video.videoId} info={video}/>)}
      </aside>
    </div>
  );
}