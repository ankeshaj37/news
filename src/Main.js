import React, { useEffect, useState } from 'react'
import { db } from './firebase'

const Main = () => {
    const [title, setTitle] = useState([])

    const [big, setBig] = useState([])

    useEffect(() => {
        db.collection('brekingnews').onSnapshot(tap => (
            setTitle(tap.docs.map((e) => (e.data())))
        ))
    }, [])

    useEffect(() => {
        db.collection('bignews').onSnapshot(tap => (
            setBig(tap.docs.map((e) => (e.data())))
        ))
    }, [])



    return (
        <>
            <div class="container py-md-5 py-sm-4 HomePageCWP">
                <div class="row">
                    {title.map((e) => (
                        <>
                            <div class="col-lg-8 left-wthree-img mb-lg-0 mb-md-5 mb-4">
                                <div className='brekingtitle'><a href={e.video}><h3>{e.title}</h3></a></div>
                                <img class="img-fluid img-responsive" src={e.image} alt=" " />
                            </div>
                        </>
                    ))}

                   
                            <div className=' col-lg-3 bignewstitle'>
                            {big.map((e) => (
                        <>
                                <div className='bignewsdiv'>
                                    <a href={e.video}><h6>{e.title}</h6></a>
                                    <img className='bigimage' src={e.image} />
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