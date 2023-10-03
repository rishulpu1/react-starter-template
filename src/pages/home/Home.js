import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import './Home.scss';
function Home() {
  const {name} = useSelector((state) => state.data);
  return (
    <div className='home'>
      <div className='container'>
        <h2>Home Page</h2>
        <p>Welcome to <b>Home</b> page.</p>
        <p>This page has <b>Redux Toolkit</b> set up.</p>
        <p>The name: <b>{name}</b> is stored in the dataSlice</p>
      </div>
    </div>
  )
}

export default Home