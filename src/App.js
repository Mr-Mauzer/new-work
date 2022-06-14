import React from 'react';
import './App.css';
import Header from './component/header'
import Nav from './component/navigation';
import Profile from './component/profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;