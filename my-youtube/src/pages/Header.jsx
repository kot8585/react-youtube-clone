import React, {useState} from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import useVideos from '../hooks/use-videos';

const API_KEY = 'AIzaSyD7S8L9gxOOPQLMVeMY1GzrKrsP8UoT_AE';
export default function Header() {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${API_KEY}`
    //버튼 눌리면 react-router로 페이지만 이동시키고 search페이지에서 뿌려주기
    //근데 search 페이지랑 home 페이지랑 데이터만 다른데 search 페이지를 따로 만들어야돼? 
    //url이 바뀌니까 새로 만들어야되는거야?? 
  }

  return (
    <header className='sticky top-0'>
      <button className='absolute'>
        <BsYoutube className='inline-block'/>
        <span>Youtube</span>
      </button>
      {/* 얘를 어떻게 가운데로 보내지? 얘만 flex로 주는거 맞나?*/}
      {/* 검색하면 dataset 해줘야하는데 */}
      <form onSubmit={handleSubmit} className='flex items-center justify-center'>
        <input value={search} onChange={handleChange} placeholder='Search..'/>
        <button type='submit'><BsSearch /></button>
      </form>
    </header>
  );
}

