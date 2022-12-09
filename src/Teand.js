import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'

const Teand = () => {

    const [trend, setTrend] = useState([])

  useEffect(() => {
      db.collection('trendingnews').onSnapshot(tap => (
        setTrend(tap.docs.map((e) => ({uid:e.id,data:e.data()})))
      ))
  }, [])
  return (
    <>
      <section class="w3l-features" id="work">
                        <div class="container py-lg-5 py-4 HomePageServices">
                        <div className='brekname' >
                            <h4 className="alltitle" >Trending News</h4>     
                        </div>
                         
                                     <div class="row main-cont-wthree-2 py-5">
                                     
                <div class="col-lg-12 feature-grid-right mt-lg-0 mt-5">
             
                    <div class="row call-grids-w3 justify-content-center">
                    {trend.map((e)=>(
                                    <>

                    <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" class="col-md-4 col-6 col-sec">
                            <div className="box-wrap">
                                <div class="icon">
                                    <img src={e.data.image} class="img-fluid" alt="" />
                                </div>
                                <h4><Link to={`/${e.uid}`} href={e.data.video} class="title-head">
           {e.data.title}</Link></h4>
                            </div>
                        </div>
                        </>
                                  ))}
                    </div>
                   
                </div>
              
            </div>
                                 
                           </div>
                    </section>
    </>
  )
}

export default Teand