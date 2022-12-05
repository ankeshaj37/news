import React, { useEffect, useState } from 'react'
import { db } from './firebase'

const Latesnews = () => {

const [lates, setLates] = useState([])
useEffect(() => {
 db.collection('latesnews').onSnapshot(tap=>(
    setLates(tap.docs.map((e)=>(e.data())))
 ))
}, [])


return (
        <>
            <div className='container-fluid'>
             <h3 className='latestitle'>Lates News</h3>
                <div class=" latesdiv row mt-5 pt-lg-4">

                    {lates.map((e)=>(
                        <>
                         <div class="  col-lg-3 left-wthree-img mb-lg-0 mb-md-5 mb-4 order-lg-last">
                        <div>
                            <img class="  img-responsive" src={e.image} alt=" " />
                        </div>
             <a href={e.video}> <h3>{e.title} </h3></a>
                    </div>
                        </>
                    ))}
                   
                </div>
            </div>

        </>
    )
}

export default Latesnews