import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Video from './Video';

import Teand from './Teand';
import Bigvideo from './Bigvideo';

const App = () => {
 
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/live' element={<Teand/>}/>

      <Route path='/:id' element={<Video/>}/>
      <Route path='/:name' element={<Bigvideo/>}/>

   
    </Routes>
    
    </BrowserRouter>
     
    
    </>
  )
}

export default App