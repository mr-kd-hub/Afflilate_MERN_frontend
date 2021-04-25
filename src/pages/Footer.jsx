import axios from 'axios';
import React, { useContext,useEffect,useState } from 'react';

var cssstyle = {
  position: 'absolute; left: -5000px',
};
function Footer() {
  const [aboutus,setAboutus] = useState()
  const [instagram,setInstagram] = useState()
  const [facebook,setFacebook] = useState()
  const [twitter,setTwitter] = useState()
  
  
  useEffect(() => {
    
    axios.get("http://localhost:9000/api/showSite/608535172fc387321482365e")
    .then((res)=>{
        const  { instagram, facebook, twitter, aboutus1 } = res.data.setting[0];
        setAboutus(aboutus1)
        setInstagram(instagram)
        setFacebook(facebook)
        setTwitter(twitter)
    })
    .catch((err)=>{

    })
  }, [])
  return (
    <>
      {/* <!-- start footer Area -->		 */}
      <footer className='footer-area section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3  col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>About Us</h6>
                <p style={{"text-overflow" : "ellipsis", overflow:"hidden","max-height": "3.6em"}}>
                  {aboutus}
                </p>
              </div>
            </div>
            <div className='col-lg-3  col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className='' id='mc_embed_signup'>
                  <form
                    target='_blank'
                    novalidate='true'
                    action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                    method='get'
                    className='form-inline'
                  >
                    <div className='d-flex flex-row'>
                      <input
                        className='form-control'
                        name='EMAIL'
                        placeholder='Enter Email'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Email '"
                        required=''
                        type='email'
                      />

                      <button className='click-btn btn btn-default'>
                        <i
                          className='fa fa-long-arrow-right'
                          aria-hidden='true'
                        ></i>
                      </button>
                      
                    </div>
                    <div className='info'></div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-3  col-md-6 col-sm-6'>
              <div className='single-footer-widget mail-chimp'>
                <h6 className='mb-20'>Instragram Feed</h6>
                <ul className='instafeed d-flex flex-wrap'>
                  <li>
                    <img src='assets/img/i1.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i2.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i3.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i4.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i5.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i6.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i7.jpg' alt='' />
                  </li>
                  <li>
                    <img src='assets/img/i8.jpg' alt='' />
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className='footer-social d-flex align-items-center'>
                  <a href={facebook}>
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a href={twitter}>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href={instagram}>
                    <i className='fa fa-instagram'></i>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom d-flex justify-content-center align-items-center flex-wrap'>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            <p className='footer-text m-0'>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{' '}
              <i className='fa fa-heart-o' aria-hidden='true'></i> by{' '}
              <a href='https://colorlib.com' target='_blank'>
                Colorlib
              </a>
            </p>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </div>
        </div>
      </footer>
      {/* <!-- End footer Area -->		 */}
    </>
  );
}
export default Footer;
