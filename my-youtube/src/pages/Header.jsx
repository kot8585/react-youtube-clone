import React, {useState} from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    //버튼 눌리면 react-router로 페이지만 이동시키고 search페이지에서 뿌려주기
    navigate(`/videos/${search}`);
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

