import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
                      <Link to='/' onClick={logout}>
                        logout
                      </Link>
                    ) : (
                      <Link to='/login'>signUp/login</Link>
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
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/category'>Category</Link>
                  </li>
                  <li>
                    <Link to='/product'>Product</Link>
                  </li>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact us</Link>
                  </li>
                  <li>
                    <Link to='/cart'>My Cart</Link>
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
