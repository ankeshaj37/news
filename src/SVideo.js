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
  db.collection('topnews').doc(param?.id).onSnapshot(tap=>(
    setFirst(tap.data())
    
   ))
 }, [param.id])
 useEffect(() => {
  db.collection('trendingnews').doc(param?.id).onSnapshot(tap=>(
    setFirstt(tap.data())
    
   ))
 }, [param.id])
 
 
  return (
    <>
    <Navbar/>
    <Menubar/>
     {first? <>
     <div>
      <p>{first?.title}</p>
     <video href={first?.video}></video>
     <img src= {first?.image}/>
     <p>
      {first?.info}
     </p>
      </div></>: <>
     <div>
      <p>{firstt?.title}</p>
     <video href={firstt?.video}></video>
     <img src= {firstt?.image}/>
     <p>
      {firstt?.info}
     </p>
      </div></>
    
     }
    <Footer/>
    </>
  )
}

export default Video