import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  // ❗️ video를 바로 가져왔군
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          {/* //❗️channelInfo컴포넌트로 뺏네. 나는 안뺐는데. 빼면은 가독성 좋아지겠네 */}
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
