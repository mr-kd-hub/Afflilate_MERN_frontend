import React from 'react';

function Product() {
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Shop Category page</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/home'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='category.html'>Fashon Category</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}
      <div className='container'>
        <div className='row'>
          <div className='col-xl-9 col-lg-8 col-md-7'>
            {/* <!-- Start Filter Bar --> */}
            <div className='filter-bar d-flex flex-wrap align-items-center'>
              <a href='#' className='grid-btn active'>
                <i className='fa fa-th' aria-hidden='true'></i>
              </a>
              <a href='#' className='list-btn'>
                <i className='fa fa-th-list' aria-hidden='true'></i>
              </a>
              <div className='sorting'>
                <select>
                  <option value='1'>Default sorting</option>
                  <option value='1'>Default sorting</option>
                  <option value='1'>Default sorting</option>
                </select>
              </div>
              <div className='sorting mr-auto'>
                <select>
                  <option value='1'>Show 12</option>
                  <option value='1'>Show 12</option>
                  <option value='1'>Show 12</option>
                </select>
              </div>
              <div className='pagination'>
                <a href='#' className='prev-arrow'>
                  <i className='fa fa-long-arrow-left' aria-hidden='true'></i>
                </a>
                <a href='#' className='active'>
                  1
                </a>
                <a href='#'>2</a>
                <a href='#'>3</a>
                <a href='#' className='dot-dot'>
                  <i className='fa fa-ellipsis-h' aria-hidden='true'></i>
                </a>
                <a href='#'>6</a>
                <a href='#' className='next-arrow'>
                  <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                </a>
              </div>
            </div>
            {/* <!-- End Filter Bar --> */}

            <section className='lattest-product-area pb-40 category-list'>
              <div className='row'>
                {/* 1 */}
                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-6 single-product'>
                  <div className='content'>
                    <div className='content-overlay'></div>
                    <img
                      className='content-image img-fluid d-block mx-auto'
                      src='assets/img/l5.jpg'
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
                        <a
                          href='#'
                          data-toggle='modal'
                          data-target='#exampleModal'
                        >
                          <span className='lnr lnr-frame-expand'></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                  </div>
                </div>

                {/* 2 */}
                <div className='col-xl-4 col-lg-6 col-md-12 col-sm-6 single-product'>
                  <div className='content'>
                    <div className='content-overlay'></div>
                    <img
                      className='content-image img-fluid d-block mx-auto'
                      src='assets/img/l6.jpg'
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
                        <a
                          href='#'
                          data-toggle='modal'
                          data-target='#exampleModal'
                        >
                          <span className='lnr lnr-frame-expand'></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h5>Long Sleeve shirt</h5>
                    <h3>$150.00</h3>
                  </div>
                </div>
              </div>
            </section>

            <div className='col-xl-3 col-lg-4 col-md-5'>
              <div className='sidebar-categories'>
                <div className='head'>Browse Categories</div>
                <ul className='main-categories'>
                  <li className='main-nav-list'>
                    <a
                      data-toggle='collapse'
                      href='#fruitsVegetable'
                      aria-expanded='false'
                      aria-controls='fruitsVegetable'
                    >
                      <span className='lnr lnr-arrow-right'></span>Fruits and
                      Vegetables<span className='number'>(53)</span>
                    </a>
                  </li>
                  <li className='main-nav-list'>
                    <a
                      data-toggle='collapse'
                      href='#fruitsVegetable'
                      aria-expanded='false'
                      aria-controls='fruitsVegetable'
                    >
                      <span className='lnr lnr-arrow-right'></span>Fruits and
                      Vegetables<span className='number'>(53)</span>
                    </a>
                  </li>
                  <li className='main-nav-list'>
                    <a
                      data-toggle='collapse'
                      href='#fruitsVegetable'
                      aria-expanded='false'
                      aria-controls='fruitsVegetable'
                    >
                      <span className='lnr lnr-arrow-right'></span>Fruits and
                      Vegetables<span className='number'>(53)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
