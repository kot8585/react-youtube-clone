import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  //❗️헤더의 키워드가 바뀌면 search 부분도 바뀌도록 설정 -> 뒤로가기 했을때 이전 search가 세팅되도록 함 
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header>
      {/* ❗️button말고 <Link></Link>로도 감쌀수가 있네? */}
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button >
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
