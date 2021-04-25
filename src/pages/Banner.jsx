import axios from 'axios';
import React, { useContext,useEffect,useState } from 'react';
var cssStyle = {
  size: 'flex',
};

function Banner() {
  const [title,setTitle] = useState()
  const [subttle,setSubtitle] = useState();
  useEffect(() => {    
    axios.get("http://localhost:9000/api/showSite/608535172fc387321482365e")
    .then((res)=>{
        const  { bannertitle, bannersubtitle } = res.data.setting[0];
        setTitle(bannertitle)
        setSubtitle(bannersubtitle)
    })
    .catch((err)=>{

    })
  }, [])
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
              
              <h1 className='text-uppercase'>
               {title}
              </h1>
              <h1 className='title-top'>
                {subttle}
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
