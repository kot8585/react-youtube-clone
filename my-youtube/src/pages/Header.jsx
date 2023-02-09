import React, {useState} from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('로그 클릭 되었음');
    navigate('/');
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    //버튼 눌리면 react-router로 페이지만 이동시키고 search페이지에서 뿌려주기
    setSearch('');
    navigate(`/videos/${search}`);
  }

  return (
    <header className='sticky top-0 py-3 align-middle  border-b-2 bg-bgPrimary'>
      
      <button className='absolute' onClick={handleClick}>
        <BsYoutube className='inline-block text-red-500 w-7 h-7 mr-1'/>
        <span className='font-bold text-lg text-textPrimary'>Youtube</span>
      </button>
      {/* 얘를 어떻게 가운데로 보내지? 얘만 flex로 주는거 맞나?*/}
      <form onSubmit={handleSubmit} className='flex items-center justify-center'>
        <input type='text' value={search} onChange={handleChange} placeholder='Search..' className='border p-1 h-9 w-80'/>
        <button type='submit' className='border h-9 w-9 text-center'><BsSearch className='inline-block align-baseline'/></button>
      </form>
    </header>
  );
}

