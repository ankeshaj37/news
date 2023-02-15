import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './firebase'
import Footer from './Footer'
import Menubar from './Menubar'
import Navbar from './Navbar'

const Brekvideo = () => {

    const parms = useParams()
    
    const [brek, setBrek] = useState('')

useEffect(() => {
  db.collection('brekingnews').doc(parms.id).onSnapshot(tap=>(
    setBrek(tap.data())
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
      <h3>{brek?.title}</h3>
    </div>
    <video className='vvv' controls>
  <source src={brek?.video}/>
    </video>
    <div className='indivtitle'>
      <h3>{brek?.details}</h3>
    </div>
    </div>
    
  </div>
  </div>
    </>
    <Footer/>
    </>
  )
}

export default Brekvideo