import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
//protect route in laravel(autometic redirect)
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  // const history = useHistory();
  return (
    <>
    {/* {
      user ? (
        <>User found</>
      ) : (
        
        history.push("/login")
      )
    } */}

      <div id='header'>
        {/* <!-- Start Header Area --> */}
        <header className='default-header' id='header'>
          <div className='menutop-wrap'>
            <div className='menu-top container'>
              <div className='d-flex justify-content-between align-items-center'>
                <ul className='list'>
                  <li>
                    <a href='tel:+12312-3-1209'>+12312-3-1209</a>
                  </li>
                  <li>
                    <a href='zoddoks@gmail.com'>
                    zoddoks@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className='list'>
                  <li>
                    {user ? (
                      <a href='/' onClick={logout}>
                        logout
                      </a>
                    ) : (
                      <a href='/login'>signUp/login</a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className='navbar navbar-expand-lg  navbar-light'>
            <div className='container'>
              <a className='navbar-brand' href='/'>
                <img src='assets/img/logo.png' alt='' />
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-end align-items-center'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav'>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/category'>Category</a>
                  </li>
                  <li>
                    <a href='/product'>Product</a>
                  </li>
                  <li>
                    <a href='/about'>About Us</a>
                  </li>
                  <li>
                    <a href='/contact'>Contact us</a>
                  </li>
                  <li>
                    <a href='/cart'>My Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* <!-- End Header Area --> */}
    </>
  );
}
export default Navbar;
