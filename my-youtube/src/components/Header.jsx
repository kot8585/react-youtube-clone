import React from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'

export default function Header() {
  return (
    <header className='sticky top-0'>
      <button className='absolute'>
        <BsYoutube className='inline-block'/>
        <span>Youtube</span>
      </button>
      {/* 얘를 어떻게 가운데로 보내지? 얘만 flex로 주는거 맞나?*/}
      <form action="" className='flex items-center justify-center'>
        <input placeholder='Search..'/>
        <button type='submit'><BsSearch /></button>
      </form>
    </header>
  );
}

