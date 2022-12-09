import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import Footer from './Footer'
import { db } from './firebase'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Video = () => {

 const param = useParams() 

 const [first, setFirst] = useState("")

 useEffect(() => {
  
    db.collection('brekingnews').doc(param.id).onSnapshot(tap=>(
      setFirst(tap.data())
     ))

     db.collection('populernews').doc(param.id).onSnapshot(tap=>(
      setFirst(tap.data())
     ))

 }, [])


  return (
    <>
    <Navbar/>
    <Menubar/>
    <>
  <div className='vdiv container-fluid'>
  <div>
    <div className='videodiv'>
    <div className='indivtitle'>
      <h3>{first.title}</h3>
    </div>
    <video className='vvv' controls>
  <source src={first.video}/>
    </video>
    <div className='indivtitle'>
      <h3>{first.details}</h3>
    </div>
    </div>
  </div>
  </div>
    </>
    <Footer/>
    </>
  )
}

export default Video