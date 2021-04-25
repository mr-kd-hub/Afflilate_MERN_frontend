import axios from 'axios';
import React, { useContext,useEffect,useState } from 'react';
import { Toolbar } from '@material-ui/core'

function Aboutus() {
  const [aboutus1,setAboutus1] = useState()
  const [aboutus2,setAboutus2] = useState()
  useEffect(() => {    
    axios.get("http://localhost:9000/api/showSite/608535172fc387321482365e")
    .then((res)=>{
        const  { aboutus1, aboutus2 } = res.data.setting[0];
        setAboutus1(aboutus1)
        setAboutus2(aboutus2)
    })
    .catch((err)=>{

    })
  }, [])
  return (
    <>
    <Toolbar />
    <div className="mx-auto container">
      <div className='section-top-border'>
        <h3 className='mb-30'>Left Aligned</h3>
        <div className='row'>
          <div className='col-md-3'>
            <img src='assets/img/elements/d.jpg' alt='' className='img-fluid' />
          </div>
          <div className='col-md-9 mt-sm-20'>
            <p>
             {aboutus1}
            </p>
          </div>
        </div>
      </div>

      <div className='section-top-border text-right'>
        <h3 className='mb-30'>Right Aligned</h3>
        <div className='row'>
          <div className='col-md-9'>
            <p className='text-right'>
              {aboutus2}
            </p>
            <p className='text-right'>
              Before we discuss all of the things that could be affecting your
              PC’s performance, let’s talk a little about what symptoms
            </p>
          </div>
          <div className='col-md-3'>
            <img src='assets/img/elements/d.jpg' alt='' className='img-fluid' />
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default Aboutus;
