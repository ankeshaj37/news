import React, { useEffect, useState } from "react";
import { db } from "./firebase";
 
const Popul = () => {

  const [popu, setPopu] = useState([])

  useEffect(() => {
      db.collection('populernews').onSnapshot(tap => (
        setPopu(tap.docs.map((e) => (e.data())))
      ))
  }, [])
  return (
    <>
      <div class="w3l-grids-block-5 pb-5">
        <div class=" container HomepageBlogPosts">
          <div
            class="title-main text-center mx-auto mb-4">
            <h3 class="title-style">Populer News</h3>
            
          </div>
          <div class=" popdiv row justify-content-center">
          {popu.map((e)=>(
                <>
            <div class="col-lg-4 col-sm-6 mt-sm-5 pt-lg-2">
             
                      <div class=" grids5-info">
                <a href="https://wp.w3layouts.com/aquarium/2022/03/26/hello-world/">
                  <div class="post-thumbnail">
                    <img
                      width="640"
                      height="426"
                      src={e.image}
                      class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                    />
                  </div>
                </a>
                <div class="blog-info">
                  <p>{e.title}</p>
                  <a class="btn btn-style mt-4" href={e.video}>
                    Read More
                  </a>
                </div>
              </div>
              
        

            </div>

            </>
              ))}

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Popul;
