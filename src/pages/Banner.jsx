import React from 'react';
import {Helmet} from "react-helmet";
var cssStyle = {
  size: 'flex',
};

function Banner() {
  
  return (
    <>
    
    {/* <Helmet>
    <script type="text/javascript" language="javascript">
          var aax_size='728x90';
          var aax_pubname = 'zoddok-21';
          var aax_src='302';
        </script>
        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
    
    </Helmet> */}

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
              <img alt="Amazon logo PNG" class="n3VNCb" src="http://pngimg.com/uploads/amazon/amazon_PNG13.png" data-noaft="1" jsname="HiaYvf" jsaction="load:XAeZkd;" style={{width: "200px", height: "150.75px"}}/>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End banner Area -->	 */}
    </>
  );
}
export default Banner;
