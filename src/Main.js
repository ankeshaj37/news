import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'

const Main = () => {

    const [title, setTitle] = useState([])

    const [big, setBig] = useState([])

    useEffect(() => {
        db.collection('brekingnews').onSnapshot(tap => (
            setTitle(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
        ))
    }, [])

    useEffect(() => {
        db.collection('bignews').onSnapshot(tap => (
            setBig(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
        ))

    }, [])

    return (

        <>
            <div class="container">
            <div className="brekname">
           <h4 className="Breking">Breking News</h4>
           </div>
                <div class=" rrr row">
                    <div class="col-lg-8">
                        {title.map((e) => (
                            <>
                                <div data-aos="flip-left" class=" rr  ">
                                    <div className='brekingtitle'><Link to={`/${e.uid}`} href={e.data.video}><h3>{e.data.title}</h3></Link></div>
                                    <img class="img-fluid img-responsive" src={e.data.image} alt=" " />
                                </div>
                            </>
                        ))}
                    </div>
                    <div class="col-lg-4">
                        <div className='bigtitle'><h4>big News</h4></div>
                        {big.map((e) => (
                            <>
                                <div className='bignewsindiv'>
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