import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './firebase'
import Footer from './Footer'
import Menubar from './Menubar'
import Navbar from './Navbar'

const Bigvideo = () => {

const parms = useParams()

const [big, setBig] = useState('')
useEffect(() => {
  db.collection('bignews').doc(parms.id).onSnapshot(tap=>(
    setBig(tap.data())
  ))
}, [])
console.log(big);

  return (
    <>
    <Navbar/>
    <Menubar/>
    <>
  <div className='vdiv container-fluid'>
  <div>
    <div className='videodiv'>
    <div className='indivtitle'>
      <h3>{big.title}</h3>
    </div>
    <video className='vvv' controls>
  <source src={big.video}/>
    </video>
    <div className='indivtitle'>
      <h3>{big.details}</h3>
    </div>
    </div>
  </div>
  </div>
    </>
    <Footer/>
    </>
  )
}

export default Bigvideo