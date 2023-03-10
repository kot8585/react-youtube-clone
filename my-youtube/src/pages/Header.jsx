import React, {useEffect, useState} from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom';

export default function Header() {
  const {keyword} = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('로그 클릭 되었음');
    navigate('/');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(() => setText(keyword ? keyword : ''), [keyword]);

  return (
    <header className='sticky top-0 py-3 align-middle  border-b-2 bg-bgPrimary flex mb-4'>
      <button className='flex items-center' onClick={handleClick}>
        <BsYoutube className='inline-block text-red-500 w-7 h-7 mr-1'/>
        <span className='font-bold text-lg text-textPrimary'>Youtube</span>
      </button>
      {/* 얘를 어떻게 가운데로 보내지? 얘만 flex로 주는거 맞나?*/}
      <form onSubmit={handleSubmit} className='flex items-center justify-center w-full'>
        <input type='text' value={text} onChange={handleChange} placeholder='Search..' className='border p-1 h-9 w-1/3'/>
        <button type='submit' className='border h-9 w-9 text-center'><BsSearch className='inline-block align-baseline'/></button>
      </form>
    </header>
  );
}

