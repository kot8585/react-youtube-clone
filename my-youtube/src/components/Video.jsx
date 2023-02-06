import React from 'react';

export default function Video({info}) {
  return (
    <article className='flex flex-col flex-none'>
        <img alt='thumbnail' src={info.thumbnail} className="w-36 text" />
        <h1 className="w-36 title font-bold" >{info.title}</h1>
        <span className='text-textGray text-sm'>{info.channelTitle}</span>
        <span className='text-textGray text-xs'>{info.publishedAt}</span>
      </article>
  );
}
