import React,{ useEffect, useState } from 'react';
import axios from 'axios';


const cssStyle={
  width:'120px',height:'240px'
}
function Newproduct() 
{
  const [state, setState] = useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:9000/api/showProduct")
    .then((res) => {
     // console.log(res.data)
      if (res.data.msg==="Success") {
        setState(res.data.product)
      }
    })
    .catch((err) => {
      console.log("problem in login : " + err);
    });
  },[])
  
  return (
    <>
     {/* <!-- Start men-product Area --> */}
      <section className='men-product-area section-gap relative' id='men'>
        <div className='overlay overlay-bg'></div>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-40'>
              <div className='title text-center'>
                <h1 className='text-white mb-10'>
                  New realeased Products for Men
                </h1>
                <p className='text-white'>
                  Who are in extremely love with eco friendly system.
                </p>
              </div>
            </div>
          </div>
          <div className='row mx-2'>
          {   
              state && state.slice(0, 6).map((cardInfo,index)=>{
                  return (
                  <>    
                      <div className='col-sm-2 single-product'>
                        {/* <div className='bottom d-flex align-items-center justify-content-center'> */}
                        <div className='content-overlay'></div>
                          <iframe 
                          className="img-fluid d-block mx-auto"
                            style={cssStyle}
                            src={cardInfo.flipkart_link}>
                          </iframe>    
                        {/* </div>      */}
                      </div>      
                      
                </>
                )
              })
            }

            {/* 2 */}
            {/* <div className='col-lg-3 col-md-6 single-product'>
              <div className='content'>
                <div className='content-overlay'></div>
                <img
                  className='content-image img-fluid d-block mx-auto'
                  src='assets/img/l2.jpg'
                  alt=''
                /> */}
                {/* <div className='content-details fadeIn-bottom'> */}
                  {/* <div className='bottom d-flex align-items-center justify-content-center'>
                    <a href='#'>
                      <span className='lnr lnr-heart'></span>
                    </a>
                    <a href='#'>
                      <span className='lnr lnr-layers'></span>
                    </a>
                    <a href='#'>
                      <span className='lnr lnr-cart'></span>
                    </a>
                    <a href='#' data-toggle='modal' data-target='#exampleModal'>
                      <span className='lnr lnr-frame-expand'></span>
                    </a>
                  </div> */}
                {/* </div>
              </div>
              
            </div> */}

            {/* 3 */}
            {/* <div className='col-lg-3 col-md-6 single-product'>
              <div className='content'>
                <div className='content-overlay'></div>
               
                
              </div>              
            </div> */}

            {/* 4 */}
            {/* <div className='col-lg-3 col-md-6 single-product'>
              <div className='content'>
                <div className='content-overlay'></div>
                <img
                  className='content-image img-fluid d-block mx-auto'
                  src='assets/img/l4.jpg'
                  alt=''
                />
                <div className='content-details fadeIn-bottom'>
                  <div className='bottom d-flex align-items-center justify-content-center'>
                    <a href='#'>
                      <span className='lnr lnr-heart'></span>
                    </a>
                    <a href='#'>
                      <span className='lnr lnr-layers'></span>
                    </a>
                    <a href='#'>
                      <span className='lnr lnr-cart'></span>
                    </a>
                    <a href='#' data-toggle='modal' data-target='#exampleModal'>
                      <span className='lnr lnr-frame-expand'></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h5 className='text-white'>Long Sleeve shirt</h5>
                <h3 className='text-white'>$150.00</h3>
              </div>
            </div>
 */}

          </div>
        </div>
      </section>
      {/* <!-- End men-product Area --> */}
    </>);
}
export default Newproduct;
