import React from 'react'

const Menubar = () => {
    return (
        <>
            <div className='menu container-fluid'>
                <div className='ull row'>
                    <li className='cat'>Home</li>
                    <li className='cat'>Live News</li>
                    <select className=" cat form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">Breking Ns</option>
  <option value="2">Trending Ns</option>
  <option value="3">Populer Ns</option>
  <option value="3">Top News </option>
  <option value="3">Film News</option>
  <option value="3">Comedy Ns</option>
  <option value="3">Business Ns</option>
  <option value="3">Sport News</option>
  <option value="3">Education Ns</option>
  
</select>
  
                    <li className='cat'>Login</li>
                </div>
            </div>
        </>
    )
}

export default Menubar