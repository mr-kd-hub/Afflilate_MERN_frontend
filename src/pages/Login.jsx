import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/auth';

function Login() {
  const context = useContext(AuthContext);

  const history = useHistory();
  //signup
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 

  function onNameChange(obj) {
    setFullname(obj.target.value);
  }
  function onEmailChange(obj) {
    setEmail(obj.target.value);
  }
  function onPasswordChange(obj) {
    setPassword(obj.target.value);
  }
  function onSubmit(obj) {
    obj.preventDefault();

    const register = {
      fullname: fullname,
      email: email,
      password: password,
    };

    //signupAPI called
    axios
      .post('http://localhost:9000/api/signup', register)
      .then((res) => {
        context.login(res.data);//data sent to auth.js file

        if(res.data.success)
        {
          toast.success(res.data.msg, {
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
          toast.error(res.data.msg,
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
        console.log('problem in signup : '+err);
      });

    //field will be reset
    setEmail('');
    setFullname('');
    setPassword('');
  }
  //signup end

  /////

  //login
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  function onEmailChangeL(obj) {
    setEmailLogin(obj.target.value);
  }

  function onPasswordChangeL(obj) {
    setPasswordLogin(obj.target.value);
  }
  function onLogin(obj) {
    obj.preventDefault();

    const detail = {
      email: emailLogin,
      password: passwordLogin,
    };

    //LoginAPI called
    axios
      .post('http://localhost:9000/api/login', detail)
      .then((res) => {
        if (res.data.success) 
        {
          localStorage.setItem('token', res.data.token);
          context.login(res.data);
          history.push('/');          
        } 
        else 
        {
          toast.error(res.data.msg,
           {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });         
          //alert('Please Enter Correct Detail');
        }
      })
      .catch((err) => {
        console.log('problem in login : '+err);
      });

    //field will be reset
    setEmailLogin('');
    setPasswordLogin('');
  }
  //login end

  return (
    <>
      <ToastContainer />
      {/* <!-- Start Banner Area --> */}
      <section className='banner-area organic-breadcrumb'>
        <div className='container'>
          <div className='breadcrumb-banner d-flex flex-wrap align-items-center'>
            <div className='col-first'>
              <h1>Shopping Cart</h1>
              <nav className='d-flex align-items-center justify-content-start'>
                <a href='/'>
                  Home<i className='fa fa-caret-right' aria-hidden='true'></i>
                </a>
                <a href='/login'>Login</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!-- Start My Account --> */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='login-form'>
              <h3 className='billing-title text-center'>Login</h3>
              <p className='text-center mt-80 mb-40'>
                Welcome back! Sign in to your account{' '}
              </p>
              <form onSubmit={onLogin}>
                <input
                  type='text'
                  placeholder='Username or Email*'
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Username or Email*'"
                  required
                  className='common-input mt-20'
                  onChange={onEmailChangeL}
                  value={emailLogin}
                  name='emailLogin'
                />
                <input
                  type='password'
                  placeholder='Password*'
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Password*'"
                  required
                  className='common-input mt-20'
                  onChange={onPasswordChangeL}
                  value={passwordLogin}
                  name='passwordLogin'
                />
                <button className='view-btn color-2 mt-20 w-100'>
                  <span>Login</span>
                </button>
                <div className='mt-20 d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <input
                      type='checkbox'
                      className='pixel-checkbox'
                      id='login-1'
                    />
                    <label for='login-1'>Remember me</label>
                  </div>
                  <a href='#'>Lost your password?</a>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='login-form'>
              <h3 className='billing-title text-center'>Register</h3>
              <p className='text-center mt-40 mb-30'>
                Create your very own account{' '}
              </p>
              <form onSubmit={onSubmit}>
                <input
                  type='text'
                  placeholder='Full name*'
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Full name*'"
                  required
                  className='common-input mt-20'
                  name='fullname'
                  onChange={onNameChange}
                  value={fullname}
                />
                <input
                  type='email'
                  placeholder='Email address*'
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Email address*'"
                  required
                  className='common-input mt-20'
                  name='email'
                  onChange={onEmailChange}
                  value={email}
                />
                <input
                  type='password'
                  placeholder='Password*'
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Password*'"
                  required
                  className='common-input mt-20'
                  name='password'
                  onChange={onPasswordChange}
                  value={password}
                />
                <button className='view-btn color-2 mt-20 w-100'>
                  <span>Register</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End My Account --> */}
    </>
  );
}
export default Login;
