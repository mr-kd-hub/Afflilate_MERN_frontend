import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category()
 {
const [categoryData,setCategoryData] = useState([]);
  let arr = [];


  //ShowCategory called
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showCategory")
      .then((res) => {
        console.log(res.data.user)
        if (res.data.success) {
          const Categorytitle = res.data.user;

          // setCategoryData(res.data.user)

          Categorytitle.map((category) => {
            arr.push({"title":category.title,"image":category.image});
           });
        
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
  });
  // console.log(arr);

  //end

  console.log(categoryData)
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

                    
             
              {/* 1 */}
              <div className='col-lg-4 col-md-4 mb-30'>
                <div className='content'>
                  <a href='#' target='_blank'>
                    <div className='content-overlay'></div>
                    <img
                      className='content-image img-fluid d-block mx-auto'
                      src='assets/img/c1.jpg'
                      alt=''
                    />
                    <div className='content-details fadeIn-bottom'>
                      <h3 className='content-title'>YOur Title</h3>
                    </div>
                  </a>
                </div>
              </div>

              {/* 2 */}
              <div className='col-lg-4 col-md-4 mb-30'>
                <div className='content'>
                  <a href='#' target='_blank'>
                    <div className='content-overlay'></div>
                    <img
                      className='content-image img-fluid d-block mx-auto'
                      src='assets/img/c2.jpg'
                      alt=''
                    />
                    <div className='content-details fadeIn-bottom'>
                      <h3 className='content-title'>YOur Title</h3>
                    </div>
                  </a>
                </div>
              </div>

              {/* 3 */}
              <div className='col-lg-4 col-md-4 mb-30'>
                <div className='content'>
                  <a href='#' target='_blank'>
                    <div className='content-overlay'></div>
                    <img
                      className='content-image img-fluid d-block mx-auto'
                      src='assets/img/c2.jpg'
                      alt=''
                    />
                    <div className='content-details fadeIn-bottom'>
                      <h3 className='content-title'>YOur Title</h3>
                    </div>
                  </a>
                </div>
              </div>

              
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
