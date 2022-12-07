import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import Footer from './Footer'
import { db } from './firebase'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Video = () => {

 const param = useParams() 
 console.log(param.id)

 const [first, setFirst] = useState("")
 const [firstt, setFirstt] = useState("")

 
 useEffect(() => {
  if (param.id) {
    db.collection('bignews').doc(param?.id).onSnapshot(tap=>(
      setFirst(tap.data())
     ))
  }
 }, [param.id])

 
 useEffect(() => {
  db.collection('brekingnews').doc(param?.id).onSnapshot(tap=>(
    setFirstt(tap.data())
    
   ))
 }, [param.id])
 

 
 
 
  return (
    <>
    <Navbar/>
    <Menubar/>
   
    <>
     <div className=' container'>
      <div className=' vdiv col'>
<div className='col-lg-4'>
  <h3>shsks</h3>
</div>
<div className='col-lg-4'>
<video width="300" height="240" controls src='https://youtu.be/EN6KIOt0usA'>

</video>
</div>
<div className='col-lg-4'>
  information
</div>
      </div>
     </div>
    </>
    <Footer/>
    </>
  )
}

export default Video