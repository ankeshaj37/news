import React from 'react';
import './App.css'
import Extra from './Extra';
import Footer from './Footer';
import Latesnews from './Latesnews';
import Main from './Main';
import Menubar from './Menubar';
import Navbar from './Navbar';
import Popul from './Popul';
import Teand from './Teand';

const App = () => {
 
  return (
    <>
     <Navbar/>
     <Menubar/>
     <Main/>
     <Latesnews/>
     <Popul/>
     <Teand/>
     <Extra/>
     <Footer/>
    </>
  )
}

export default App