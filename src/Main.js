import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'

const Main = () => {

    const [title, setTitle] = useState([])
    
    const [big, setBig] = useState([])

    useEffect(() => {
        db.collection('brekingnews').onSnapshot(tap => (
            setTitle(tap.docs.map((e) => ({uid:e.id,data:e.data()})))
        ))
    }, [])

    useEffect(() => {
        db.collection('bignews').onSnapshot(tap => (
            setBig(tap.docs.map((e) => ({uid:e.id,data:e.data()})))
        ))
        
    }, [])
    
  


    return (
        
        <>
       
           
            <div class="container py-md-5 py-sm-4 HomePageCWP">
            <div className='brekname'>
            <h3 className='Breking'>Breking News</h3>
           </div>
                <div class=" rrr row">
                    {title.map((e) => (
                        <>
                            <div class=" rr col-lg-8 left-wthree-img mb-lg-0 mb-md-5 mb-4">
                                <div className='brekingtitle'><Link to={`/${e.uid}`} href={e.data.video}><h3>{e.data.title}</h3></Link></div>
                                <img class="img-fluid img-responsive" src={e.data.image} alt=" " />
                            </div>
                        </>
                    ))}

                            <div className='bignewsdiv col-lg-3 '>
                            <div><h4>बड़ी खबरें </h4></div>
                            {big.map((e) => (
                                        <>
                            
                                <div className='bignewsindiv '>
                                    <Link to={`/${e.uid}`} href={e.data.video}><h6>{e.data.title}</h6></Link>
                                    <img className='bigimage' src={e.data.image} />
                                </div>
                                </>
                    ))}
                            </div>
                   
                </div>
            </div>

        </>
    )
}

export default Main