import React from 'react'
import Extra from './Extra';
import Footer from './Footer';

import Main from './Main';
import Menubar from './Menubar';
import Navbar from './Navbar';
import Popul from './Popul';
import Teand from './Teand';

const Home = () => {
  return (
    <>
    <Navbar/>
     <Menubar/>
     <Main/>
     <Popul/>
     <Teand/>
     <Extra/>
     <Footer/>
    </>
  )
}

export default Home