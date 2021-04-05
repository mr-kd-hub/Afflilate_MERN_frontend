import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
const cssStyle={
  width:'120px',height:'240px'
}
function Products() { 
  const [state, setState] = useState([])
  const [pages,setPages] = useState([]) 

  
  useEffect(()=>{
    axios
    .get("http://localhost:9000/api/showAllProduct")
    .then((res) => {
     // console.log(res.data)
      if (res.data.msg==="Success") 
      {
       
        setState(res.data.product)
          var total = state.length+0.50;
        setPages(Math.ceil(total / 12) )      
        
      }
    })
    .catch((err) => {
      console.log("problem in login : " + err);
    });
  },[])
 
  function handlePageClick()
  {

  }

  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Shop Products</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='/product'>Products</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            
            {/* <!-- Start pagination  --> */}
            <div className='filter-bar d-flex flex-wrap align-items-center'>          
              <div className='pagination'>
                {/* <ReactPaginate 
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}/> */}
                {/* <a href='#' className='prev-arrow'>
                  <i className='fa fa-long-arrow-left' aria-hidden='true'></i>
                </a>
                */}

              </div>
            </div>
            {/* <!-- End pagination  --> */}

          </div>
        </div>
            <section className='lattest-product-area pb-40 category-list'>
              <div className='row'>
                      {   
                          state && state.slice(0, 12).map((cardInfo,index)=>{
                            //console.log(cardInfo)
                            return (
                              <>    
                                  <div className='col-xl-3 single-product'>
                                      <div className='content'>
                                           <div className='content-overlay'></div>
                                              <iframe 
                                                 className="img-fluid d-block mx-auto"
                                                style={cssStyle}
                                                src={cardInfo.flipkart_link}>
                                              </iframe>    
                                      </div>
                                  </div>
                            </>
                            )
                          })
                      }
              </div>
            </section>

         

        
      </div>
    </>
  );
  }
export default Products;
