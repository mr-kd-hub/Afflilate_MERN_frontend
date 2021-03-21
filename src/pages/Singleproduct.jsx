import React from 'react';

function Singleproduct() {
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Single Product Page</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/home'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='/home'>Single Product</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!-- Start Product Details --> */}
      <div className='container'>
        <div className='product-quick-view'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='quick-view-carousel-details'>
                <div
                  className='item'
                  style='background: url(assets/img/q1.jpg);'
                ></div>
                <div
                  className='item'
                  style='background: url(assets/img/q1.jpg);'
                ></div>
                <div
                  className='item'
                  style='background: url(assets/img/q1.jpg);'
                ></div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='quick-view-content'>
                <div className='top'>
                  <h3 className='head'>Faded SkyBlu Denim Jeans</h3>
                  <div className='price d-flex align-items-center'>
                    <span className='lnr lnr-tag'></span>{' '}
                    <span className='ml-10'>$149.99</span>
                  </div>
                  <div className='category'>
                    Category: <span>Household</span>
                  </div>
                  <div className='available'>
                    Availibility: <span>In Stock</span>
                  </div>
                </div>
                <div className='middle'>
                  <p className='content'>
                    Mill Oil is an innovative oil filled radiator with the most
                    modern technology. If you are looking for something that can
                    make your interior look awesome, and at the same time give
                    you the pleasant warm feeling during the winter.
                  </p>
                </div>
                <div>
                  <div className='quantity-container d-flex align-items-center mt-15'>
                    Quantity:
                    <input
                      type='text'
                      className='quantity-amount ml-15'
                      value='1'
                    />
                    <div className='arrow-btn d-inline-flex flex-column'>
                      <button
                        className='increase arrow'
                        type='button'
                        title='Increase Quantity'
                      >
                        <span className='lnr lnr-chevron-up'></span>
                      </button>
                      <button
                        className='decrease arrow'
                        type='button'
                        title='Decrease Quantity'
                      >
                        <span className='lnr lnr-chevron-down'></span>
                      </button>
                    </div>
                  </div>
                  <div className='d-flex mt-20'>
                    <a href='#' className='view-btn color-2'>
                      <span>Add to Cart</span>
                    </a>
                    <a href='#' className='like-btn'>
                      <span className='lnr lnr-layers'></span>
                    </a>
                    <a href='#' className='like-btn'>
                      <span className='lnr lnr-heart'></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='details-tab-navigation d-flex justify-content-center mt-30'>
          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            <li>
              <a
                className='nav-link'
                id='description-tab'
                data-toggle='tab'
                href='#description'
                role='tab'
                aria-controls='description'
                aria-expanded='true'
              >
                Description
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                id='specification-tab'
                data-toggle='tab'
                href='#specification'
                role='tab'
                aria-controls='specification'
              >
                Specification
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                id='comments-tab'
                data-toggle='tab'
                href='#comments'
                role='tab'
                aria-controls='comments'
              >
                Comments
              </a>
            </li>
            <li>
              <a
                className='nav-link active'
                id='reviews-tab'
                data-toggle='tab'
                href='#reviews'
                role='tab'
                aria-controls='reviews'
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className='tab-content' id='myTabContent'>
          <div
            className='tab-pane fade'
            id='description'
            role='tabpanel'
            aria-labelledby='description'
          >
            <div className='description'>
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists
                .Beryl’s pictures feature women of all shapes and sizes enjoying
                themselves .Born between the two world wars, Beryl Cook
                eventually left Kendrick School in Reading at the age of 15,
                where she went to secretarial school and then into an insurance
                office. After moving to London and then Hampton, she eventually
                married her next door neighbour from Reading, John Cook. He was
                an officer in the Merchant Navy and after he left the sea in
                1956, they bought a pub for a year before John took a job in
                Southern Rhodesia with a motor company. Beryl bought their young
                son a box of watercolours, and when showing him how to use it,
                she decided that she herself quite enjoyed painting. John
                subsequently bought her a child’s painting set for her birthday
                and it was with this that she produced her first significant
                work, a half-length portrait of a dark-skinned lady with a
                vacant expression and large drooping breasts. It was aptly named
                ‘Hangover’ by Beryl’s husband and still hangs in their house
                today
              </p>
              <p>
                It is often frustrating to attempt to plan meals that are
                designed for one. Despite this fact, we are seeing more and more
                recipe books and Internet websites that are dedicated to the act
                of cooking for one. Divorce and the death of spouses or grown
                children leaving for college are all reasons that someone
                accustomed to cooking for more than one would suddenly need to
                learn how to adjust all the cooking practices utilized before
                into a streamlined plan of cooking that is more efficient for
                one person creating less waste. The mission
              </p>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='specification'
            role='tabpanel'
            aria-labelledby='specification'
          >
            <div className='specification-table'>
              <div className='single-row'>
                <span>Width</span>
                <span>128mm</span>
              </div>
              <div className='single-row'>
                <span>Height</span>
                <span>508mm</span>
              </div>
              <div className='single-row'>
                <span>Depth</span>
                <span>85mm</span>
              </div>
              <div className='single-row'>
                <span>Weight</span>
                <span>52gm</span>
              </div>
              <div className='single-row'>
                <span>Quality checking</span>
                <span>Yes</span>
              </div>
              <div className='single-row'>
                <span>Freshness Duration</span>
                <span>03days</span>
              </div>
              <div className='single-row'>
                <span>When packeting</span>
                <span>Without touch of hand</span>
              </div>
              <div className='single-row'>
                <span>Each Box contains</span>
                <span>60pcs</span>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='comments'
            role='tabpanel'
            aria-labelledby='comments'
          >
            <div className='review-wrapper'>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='total-comment'>
                    <div className='single-comment'>
                      <div className='user-details d-flex align-items-center flex-wrap'>
                        <img
                          src='assets/img/organic-food/u1.png'
                          className='img-fluid order-1 order-sm-1'
                          alt=''
                        />
                        <div className='user-name order-3 order-sm-2'>
                          <h5>Blake Ruiz</h5>
                          <span>12th Feb, 2017 at 05:56 pm</span>
                        </div>
                        <a
                          href='#'
                          className='view-btn color-2 reply order-2 order-sm-3'
                        >
                          <i className='fa fa-reply' aria-hidden='true'></i>
                          <span>Reply</span>
                        </a>
                      </div>

                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                    <div className='single-comment reply-comment'>
                      <div className='user-details d-flex align-items-center flex-wrap'>
                        <img
                          src='assets/img/organic-food/u2.png'
                          className='img-fluid order-1 order-sm-1'
                          alt=''
                        />
                        <div className='user-name order-3 order-sm-2'>
                          <h5>Logan May</h5>
                          <span>12th Feb, 2017 at 05:56 pm</span>
                        </div>
                        <a
                          href='#'
                          className='view-btn color-2 reply order-2 order-sm-3'
                        >
                          <i className='fa fa-reply' aria-hidden='true'></i>
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                    <div className='single-comment'>
                      <div className='user-details d-flex align-items-center flex-wrap'>
                        <img
                          src='assets/img/organic-food/u3.png'
                          className='img-fluid order-1 order-sm-1'
                          alt=''
                        />
                        <div className='user-name order-3 order-sm-2'>
                          <h5>Aaron Anderson</h5>
                          <span>12th Feb, 2017 at 05:56 pm</span>
                        </div>
                        <a
                          href='#'
                          className='view-btn color-2 reply order-2 order-sm-3'
                        >
                          <i className='fa fa-reply' aria-hidden='true'></i>
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade show active'
            id='reviews'
            role='tabpanel'
            aria-labelledby='reviews'
          >
            <div className='review-wrapper'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='review-stat d-flex align-items-center flex-wrap'>
                    <div className='review-overall'>
                      <h3>Overall</h3>
                      <div className='main-review'>4.0</div>
                      <span>(03 Reviews)</span>
                    </div>
                    <div className='review-count'>
                      <h4>Based on 3 Reviews</h4>
                      <div className='single-review-count d-flex align-items-center'>
                        <span>5 Star</span>
                        <div className='total-star five-star d-flex align-items-center'>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                        </div>
                        <span>01</span>
                      </div>
                      <div className='single-review-count d-flex align-items-center'>
                        <span>4 Star</span>
                        <div className='total-star four-star d-flex align-items-center'>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                        </div>
                        <span>01</span>
                      </div>
                      <div className='single-review-count d-flex align-items-center'>
                        <span>3 Star</span>
                        <div className='total-star three-star d-flex align-items-center'>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                        </div>
                        <span>01</span>
                      </div>
                      <div className='single-review-count d-flex align-items-center'>
                        <span>2 Star</span>
                        <div className='total-star two-star d-flex align-items-center'>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                        </div>
                        <span>00</span>
                      </div>
                      <div className='single-review-count d-flex align-items-center'>
                        <span>1 Star</span>
                        <div className='total-star one-star d-flex align-items-center'>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                          <i className='fa fa-star' aria-hidden='true'></i>
                        </div>
                        <span>00</span>
                      </div>
                    </div>
                  </div>
                  <div className='total-comment'>
                    <div className='single-comment'>
                      <div className='user-details d-flex align-items-center'>
                        <img
                          src='assets/img/organic-food/u1.png'
                          className='img-fluid'
                          alt=''
                        />
                        <div className='user-name'>
                          <h5>Blake Ruiz</h5>
                          <div className='total-star five-star d-flex align-items-center'>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                          </div>
                        </div>
                      </div>
                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                    <div className='single-comment'>
                      <div className='user-details d-flex align-items-center'>
                        <img
                          src='assets/img/organic-food/u2.png'
                          className='img-fluid'
                          alt=''
                        />
                        <div className='user-name'>
                          <h5>Logan May</h5>
                          <div className='total-star four-star d-flex align-items-center'>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                          </div>
                        </div>
                      </div>
                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                    <div className='single-comment'>
                      <div className='user-details d-flex align-items-center'>
                        <img
                          src='assets/img/organic-food/u3.png'
                          className='img-fluid'
                          alt=''
                        />
                        <div className='user-name'>
                          <h5>Aaron Anderson</h5>
                          <div className='total-star three-star d-flex align-items-center'>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                            <i className='fa fa-star' aria-hidden='true'></i>
                          </div>
                        </div>
                      </div>
                      <p className='user-comment'>
                        Acres of Diamonds… you’ve read the famous story, or at
                        least had it related to you. A farmer hears tales of
                        diamonds and begins dreaming of vast riches. He sells
                        his farm and hikes off over the horizon, never to be
                        heard from again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Product Details --> */}

      {/* <!-- Modal Quick Product View --> */}
      <div
        className='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='container relative'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <div className='product-quick-view'>
              <div className='row align-items-center'>
                <div className='col-lg-6'>
                  <div className='quick-view-carousel'>
                    <div
                      className='item'
                      style='background: url(img/organic-food/q1.jpg);'
                    ></div>
                    <div
                      className='item'
                      style='background: url(img/organic-food/q1.jpg);'
                    ></div>
                    <div
                      className='item'
                      style='background: url(img/organic-food/q1.jpg);'
                    ></div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='quick-view-content'>
                    <div className='top'>
                      <h3 className='head'>Mill Oil 1000W Heater, White</h3>
                      <div className='price d-flex align-items-center'>
                        <span className='lnr lnr-tag'></span>{' '}
                        <span className='ml-10'>$149.99</span>
                      </div>
                      <div className='category'>
                        Category: <span>Household</span>
                      </div>
                      <div className='available'>
                        Availibility: <span>In Stock</span>
                      </div>
                    </div>
                    <div className='middle'>
                      <p className='content'>
                        Mill Oil is an innovative oil filled radiator with the
                        most modern technology. If you are looking for something
                        that can make your interior look awesome, and at the
                        same time give you the pleasant warm feeling during the
                        winter.
                      </p>
                      <a href='#' className='view-full'>
                        View full Details{' '}
                        <span className='lnr lnr-arrow-right'></span>
                      </a>
                    </div>
                    <div className='bottom'>
                      <div className='color-picker d-flex align-items-center'>
                        Color:
                        <span className='single-pick'></span>
                        <span className='single-pick'></span>
                        <span className='single-pick'></span>
                        <span className='single-pick'></span>
                        <span className='single-pick'></span>
                      </div>
                      <div className='quantity-container d-flex align-items-center mt-15'>
                        Quantity:
                        <input
                          type='text'
                          className='quantity-amount ml-15'
                          value='1'
                        />
                        <div className='arrow-btn d-inline-flex flex-column'>
                          <button
                            className='increase arrow'
                            type='button'
                            title='Increase Quantity'
                          >
                            <span className='lnr lnr-chevron-up'></span>
                          </button>
                          <button
                            className='decrease arrow'
                            type='button'
                            title='Decrease Quantity'
                          >
                            <span className='lnr lnr-chevron-down'></span>
                          </button>
                        </div>
                      </div>
                      <div className='d-flex mt-20'>
                        <a href='#' className='view-btn color-2'>
                          <span>Add to Cart</span>
                        </a>
                        <a href='#' className='like-btn'>
                          <span className='lnr lnr-layers'></span>
                        </a>
                        <a href='#' className='like-btn'>
                          <span className='lnr lnr-heart'></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Singleproduct;
