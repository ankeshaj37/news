import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Video from './Video';
import SVideo from './SVideo'
import Teand from './Teand';
const App = () => {
 
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Video/>}/>
      <Route path='/:id' element={<SVideo/>}/>
      <Route path='/live' element={<Teand/>}/>
      
    </Routes>
    
    </BrowserRouter>
     
    
    </>
  )
}

export default App