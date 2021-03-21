import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [namee, setName] = useState();
  const [emaill, setEmail] = useState();
  const [message, setMessage] = useState();

  function onNameChange(obj) {
    setName(obj.target.value);
  }
  function onEmailChange(obj) {
    setEmail(obj.target.value);
  }
  function onMessageChange(obj) {
    setMessage(obj.target.value);
  }
  function onSubmitt(obj) {
    obj.preventDefault();
    const detaill = {
      name: namee,
      email: emaill,
      message: message,
    };
    //contactAPI called
    axios
      .post('http://localhost:9000/api/contact', detaill)
      .then((res) => {
        //console.log(res.data);
        if(res.data.success)
        {
         // alert("done")
          toast.success('Thank you For Writeing us...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        else
         {
           alert("not done")
          toast.error('Problem In conatacting',
          {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           });    
        }
      })
      .catch((err) => {
        console.log('problem in Contactup API CALLED'+err);
      });

    window.location.reload();
  }

  return (
    <>
      <ToastContainer />
      <div className='section-top-border'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 mx-auto'>
            <h3 className='mb-30'>Write Us</h3>
            <form onSubmit={onSubmitt}>

              <div className='mt-10'>
                <input
                  type='text'
                  name='namee'
                  onChange={onNameChange}
                  value={namee}
                  placeholder='Enter Name'
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'First Name'"
                  required
                  className='single-input'/>
              </div>

              <div className='mt-10'>
                <input
                  type='email'
                  name='emaill'
                  onChange={onEmailChange}
                  value={emaill}
                  placeholder='Enter Email'
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'First Name'"
                  required
                  className='single-input'/>
              </div>

              <div className='mt-10'>
                <textarea
                  className='single-textarea'
                  name='message'
                  onChange={onMessageChange}
                  value={message}
                  placeholder='Message'
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Message'"
                  required></textarea>
              </div>

              <div className='mt-10'>
                <button className='genric-btn success radius'>
                  <span>Contact</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
