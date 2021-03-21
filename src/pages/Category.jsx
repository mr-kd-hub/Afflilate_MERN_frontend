import React from 'react';

function Category() {
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
                      <h3 className='content-title'>Product for Women</h3>
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
                      <h3 className='content-title'>Product for Couple</h3>
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
                      <h3 className='content-title'>Product for Couple</h3>
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
