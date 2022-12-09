import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => {
    return (
        <>
            <div className='menu container-fluid'>
                      <Link to='/'> <h4 className='cat'>Home</h4></Link>
                      <Link  to='/'> <h4 className='cat' >Live News</h4> </Link>    
                      <Link  to='/'><h4 className='cat' >Catogry</h4> </Link>  
            </div>
        </>
    )
}

export default Menubar