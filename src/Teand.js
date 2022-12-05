import React, { useEffect, useState } from 'react'
import { db } from './firebase'

const Teand = () => {

    const [trend, setTrend] = useState([])

  useEffect(() => {
      db.collection('trendingnews').onSnapshot(tap => (
        setTrend(tap.docs.map((e) => (e.data())))
      ))
  }, [])
  return (
    <>
      <section class="w3l-features" id="work">
                        <div class="container py-lg-5 py-4 HomePageServices">
                           <div className='terndingtitle'> <h3>Trending News</h3></div>
                         
                                     <div class="row main-cont-wthree-2 py-5">
                                     
                <div class="col-lg-12 feature-grid-right mt-lg-0 mt-5">
             
                    <div class="row call-grids-w3 justify-content-center">
                    {trend.map((e)=>(
                                    <>

                    <div class="col-md-4 col-6 col-sec">
                            <div class="box-wrap">
                                <div class="icon">
                                    <img src="https://wp.w3layouts.com/aquarium/wp-content/themes/aquarium/assets/images/s5.jpg" class="img-fluid" alt="" />
                                </div>
                                <h4><a href="#url" class="title-head">
            Healthy Services</a></h4>
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