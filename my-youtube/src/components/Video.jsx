import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as timeago from 'timeago.js';


export default function Video({info}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/videos/watch/${info.videoId}`, {state: info});
  }

  return (
    <li onClick={handleClick}>
        <img alt='thumbnail' src={info.thumbnail} className="w-full text rounded-xl" />
        <div className='px-2'>
          <p className="my-2 line-clamp-2 font-bold" >{info.title}</p>
          <p className='line-clamp-1 text-textGray text-sm'>{info.channelTitle}</p>
          <p className='text-textGray text-xs'>{timeago.format(info.publishedAt)}</p>
        </div>
      </li>
  );
}

