import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const cssStyle ={
    "float": "left",
    "width":  "300px",
    "height": "300px",
    "object-fit": "cover"
}
function Allcategories()
{
    const [state, setState] = useState([])
 
    //ShowCategory called
      useEffect(() => {
        axios
          .get("http://localhost:9000/api/showAllCategory")
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
    return(<>
    {/* <!-- Start Banner Area --> */}
    <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Shop Categories</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='/category'>Category</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!-- Start category Area --> */}
      <section className='category-area' id='catagory'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-40'>
              <div className='title text-center'>
                <h1 className='mb-10'>Everey Thing You Looking For Is Here...</h1>
              </div>
            </div>
          </div>
       
          <div className='row'>
            <div className='row category-bottom'>

              {
                state && state.map((cardInfo,index)=>{
                 // console.log(cardInfo)
                  return (

                    
                    <div className='col-sm-3 mb-30 mx-4' key={cardInfo._id}>
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
    </>)

}

export default Allcategories;