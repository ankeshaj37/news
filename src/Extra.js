import React, { useEffect, useState } from 'react'
import { db } from './firebase'

const Extra = () => {

    const [top, setTop] = useState([])

  useEffect(() => {
      db.collection('topnews').onSnapshot(tap => (
        setTop(tap.docs.map((e) => (e.data())))
      ))
  }, [])

    return (
        <>
            <div class="w3l-cutomer-main-cont">
                <div class="testimonials py-5">
                    <div class="container py-md-5 py-4 HomePageTestimonials">

                        <div class="title-main text-center mx-auto mb-4" >
                            <h3 class="title-style">Top News</h3>     
                        </div>
             
                <div class="row content-sec mt-md-5 justify-content-center">
                {top.map((e)=>(
                <>
                            <div class="col-lg-3 col-md-6 testi-sections">
                                <div class="testimonials_grid">
                                <img src={e.image} class="img-fluid" alt="" />
                                    <p class="sub-test">
                                        <a href={e.video}><p>{e.title}</p></a>
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