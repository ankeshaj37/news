import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'

const Extra = () => {

    const [top, setTop] = useState([])

  useEffect(() => {
      db.collection('topnews').onSnapshot(tap => (
        setTop(tap.docs.map((e) => ({uid:e.id,data:e.data()})))
      ))
  }, [])

    return (
        <>
            <div class="w3l-cutomer-main-cont">
                <div class="testimonials py-5">
                    <div class="container py-md-5 py-4 HomePageTestimonials">

                        <div className='brekname' >
                            <h4 className="alltitle">Top News</h4>     
                        </div>
             
                <div class="row content-sec mt-md-5 justify-content-center">
                {top.map((e)=>(
                <>
                            <div class="col-lg-3 col-md-6 testi-sections">
                                <div class="testimonials_grid">
                                <img src={e.data.image} class="img-fluid" alt="" />
                                    <p class="sub-test">
                                        <Link  to={`/${e.uid}`}href={e.data.video}><p>{e.data.title}</p></Link>
                                    </p>
                                </div>
                            </div>
                            </>
              ))}
                        </div>

             
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Extra