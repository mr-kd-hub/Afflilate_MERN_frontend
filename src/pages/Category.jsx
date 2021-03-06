import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const cssStyle ={
    "float": "left",
    "width":  "300px",
    "height": "300px",
    "object-fit": "cover"
}
function Category()
 {

    const [state, setState] = useState([])
 
//ShowCategory called
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showCategory")
      .then((res) => {
        if (res.data.msg==="Success") {
          setState(res.data.user)
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
    },[]);    
  //end


  return (
    <>

      {/* <!-- Start category Area --> */}
      <section className='category-area section-gap section-gap' id='catagory'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-40'>
              <div className='title text-center'>
                <h1 className='mb-10'>Categories</h1>
              </div>
            </div>
          </div>
       
          <div className='row'>
            <div className='row category-bottom'>

              {
                state && state.slice(0, 4).map((cardInfo,index)=>{
                 // console.log(cardInfo)
                  return (

                    
                    <div className='col-sm-3 mb-30' key={cardInfo._id}>
                    <div className='content'>
                      <a href={cardInfo.link} target='_blank'>
                        <div className='content-overlay'></div>
                        <img
                          className='content-image img-fluid d-block mx-auto'
                          src={cardInfo.image}
                          alt=''
                          style={cssStyle}
                        />
                        <div className='content-details fadeIn-bottom'>
                          <h3 className='content-title'>{cardInfo.title}</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                  )
                })
              }
            </div>

            {/* end row */}
          </div>
        </div>
      </section>
      {/* <!-- End category Area --> */}
    </>
  );

  
}
export default Category;
