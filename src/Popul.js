import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
 
const Popul = () => {

  const [popu, setPopu] = useState([])

  useEffect(() => {
      db.collection('populernews').onSnapshot(tap => (
        setPopu(tap.docs.map((e) => ({uid:e.id,data:e.data()})))
      ))
  }, [])
  return (
    <>
      <div class="w3l-grids-block-5 pb-5">
        <div class="  container HomepageBlogPosts">
          <div
            class="title-main text-center mx-auto mb-4">
           <div className="brekname">
           <h4 className="alltitle">Populer News</h4>
           </div>
            
          </div>
          <div class=" popdiv row justify-content-center">
          {popu.map((e)=>(
                <>
            <div class="col-lg-4 col-sm-6 mt-sm-5 pt-lg-2">
             
                      <div class="  grids5-info">
             
                  <div data-aos="fade-up"
     data-aos-duration="3000" class=" cc post-thumbnail">
                    <img 
                      width="300px"
                      height="300px"
                      src={e.data.image}
                      class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                    />
                      <div class="blog-info">
                  <p>{e.data.title}</p>
                  <Link to={`/${e.uid}`} class="btn btn-style mt-4" href={e.data.video}>
                    Read More
                  </Link>
                </div>
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
