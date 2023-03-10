import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';

export default function RelatedVideo({info}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/videos/watch/${info.videoId}`, {state: info});
  }

  return (
    <article className='flex flex-none gap-2' onClick={handleClick}>
        <img alt='thumbnail' src={info.thumbnail} className='w-40 rounded-xl'/>
        <div className='flex flex-col w-full'>
        <h1 className="title font-bold text-sm line-clamp-2" >{info.title}</h1>
        <span className='text-textGray text-xs mt-2 line-clamp-1'>{info.channelTitle}</span>
        <span className='text-textGray text-xs'>{format(info.publishedAt)}</span>
        </div>
      </article>
  );
}

