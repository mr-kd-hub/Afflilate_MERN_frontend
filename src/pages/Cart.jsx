import React from 'react';

function Cart() {
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Shopping Cart</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/home'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='/cart'>Shopping Cart</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!-- Start Cart Area --> */}
      <div className='container'>
        <div className='cart-title'>
          <div className='row'>
            <div className='col-md-6'>
              <h6 className='ml-15'>Product</h6>
            </div>
            <div className='col-md-2'>
              <h6>Price</h6>
            </div>
            <div className='col-md-2'>
              <h6>Quantity</h6>
            </div>
            <div className='col-md-2'>
              <h6>Total</h6>
            </div>
          </div>
        </div>
        <div className='cart-single-item'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12'>
              <div className='product-item d-flex align-items-center'>
                <img src='assets/img/ci1.jpg' className='img-fluid' alt='' />
                <h6>Pixelstore fresh Blackberry</h6>
              </div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='price'>$360.00</div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='quantity-container d-flex align-items-center mt-15'>
                <input type='text' className='quantity-amount' value='1' />
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
            </div>
            <div className='col-md-2 col-12'>
              <div className='total'>$720.00</div>
            </div>
          </div>
        </div>
        <div className='cart-single-item'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12'>
              <div className='product-item d-flex align-items-center'>
                <img src='assets/img/ci2.jpg' className='img-fluid' alt='' />
                <h6>Pixelstore fresh Blackberry</h6>
              </div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='price'>$360.00</div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='quantity-container d-flex align-items-center mt-15'>
                <input type='text' className='quantity-amount' value='1' />
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
            </div>
            <div className='col-md-2 col-12'>
              <div className='total'>$720.00</div>
            </div>
          </div>
        </div>
        <div className='cart-single-item'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12'>
              <div className='product-item d-flex align-items-center'>
                <img src='assets/img/ci3.jpg' className='img-fluid' alt='' />
                <h6>Pixelstore fresh Blackberry</h6>
              </div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='price'>$360.00</div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='quantity-container d-flex align-items-center mt-15'>
                <input type='text' className='quantity-amount' value='1' />
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
            </div>
            <div className='col-md-2 col-12'>
              <div className='total'>$720.00</div>
            </div>
          </div>
        </div>
        <div className='cupon-area d-flex align-items-center justify-content-between flex-wrap'>
          <a href='#' className='view-btn color-2'>
            <span>Update Cart</span>
          </a>
          <div className='cuppon-wrap d-flex align-items-center flex-wrap'>
            <div className='cupon-code'>
              <input type='text' />
              <button className='view-btn color-2'>
                <span>Apply</span>
              </button>
            </div>
            <a href='#' className='view-btn color-2 have-btn'>
              <span>Have a Coupon?</span>
            </a>
          </div>
        </div>
        <div className='subtotal-area d-flex align-items-center justify-content-end'>
          <div className='title text-uppercase'>Subtotal</div>
          <div className='subtotal'>$2160.00</div>
        </div>
        <div className='shipping-area d-flex justify-content-end'>
          <div className='tile text-uppercase'>Shipping</div>
          <form
            action='#'
            className='d-inline-flex flex-column align-items-end'
          >
            <ul className='d-flex flex-column align-items-end'>
              <li className='filter-list'>
                <label for='flat-rate'>
                  Flat Rate:<span>$5.00</span>
                </label>
                <input
                  className='pixel-radio'
                  type='radio'
                  id='flat-rate'
                  name='brand'
                />
              </li>
              <li className='filter-list'>
                <label for='free-shipping'>Free Shipping</label>
                <input
                  className='pixel-radio'
                  type='radio'
                  id='free-shipping'
                  name='brand'
                />
              </li>
              <li className='filter-list'>
                <label for='flat-rate-2'>
                  Flat Rate:<span>$10.00</span>
                </label>
                <input
                  className='pixel-radio'
                  type='radio'
                  id='flat-rate-2'
                  name='brand'
                />
              </li>
              <li className='filter-list'>
                <label for='local-delivery'>
                  Local Delivery:<span>$2.00</span>
                </label>
                <input
                  className='pixel-radio'
                  type='radio'
                  id='local-delivery'
                  name='brand'
                />
              </li>
              <li className='calculate'>Calculate Shipping</li>
            </ul>
            <div className='sorting'>
              <select>
                <option value='1'>Bangladesh</option>
                <option value='1'>India</option>
                <option value='1'>Srilanka</option>
              </select>
            </div>
            <div className='sorting mt-20'>
              <select>
                <option value='1'>Select a State</option>
                <option value='1'>Select a State</option>
                <option value='1'>Select a State</option>
              </select>
            </div>
            <input
              type='text'
              placeholder='Postcode/Zipcode'
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Postcode/Zipcode'"
              required
              className='common-input mt-10'
            />
            <button className='view-btn color-2 mt-10'>
              <span>Update Details</span>
            </button>
          </form>
        </div>
      </div>
      {/* <!-- End Cart Area --> */}
    </>
  );
}
export default Cart;
