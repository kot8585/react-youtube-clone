import React from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {

  const {keyword} = useParams();


  return (
    <div>
      Videos {keyword ? `${keyword}` : '🔥'}
    </div>
  );
}

