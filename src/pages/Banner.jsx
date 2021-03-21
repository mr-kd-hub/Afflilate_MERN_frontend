import React from 'react';
var cssStyle = {
  size: 'flex',
};

function Banner() {
  return (
    <>
      {/* <!-- start banner Area --> */}
      <section className='banner-area relative' id='home'>
        <div className='container-fluid'>
          <div className='row fullscreen align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-12 d-flex align-self-end img-right no-padding'>
              <img
                className='img-fluid'
                src='assets/img/header-img.png'
                alt=''
              />
            </div>
            <div className='banner-content col-lg-6 col-md-12'>
              <h1 className='title-top'>
                <span>Flat</span> 75%Off
              </h1>
              <h1 className='text-uppercase'>
                It’s Happening <br />
                this Season!
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End banner Area -->	 */}
    </>
  );
}
export default Banner;
