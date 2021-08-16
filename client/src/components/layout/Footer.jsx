import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content m-auto'>
        <div className='client grid-2'>
          <h1>Our Beloved Client</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            quidem libero non, molestiae nesciunt vel reprehenderit magnam
            dolore doloribus expedita aperiam laborum? Accusantium id a saepe
          </p>
        </div>
        <div className='clients-logo grid-4'>
          <div className='logo'>
            <p className='logo-1'>LOGO #1 </p>
          </div>
          <div className='logo'>
            <p className='logo-1'>LOGO #2</p>
          </div>
          <div className='logo'>
            <p className='logo-1'>LOGO #3</p>
          </div>
          <div className='logo'>
            <p className='logo-1 hide-border'>LOGO #4</p>
          </div>
          <div className='logo'>
            <p className='logo-2'>LOGO #5</p>
          </div>
          <div className='logo'>
            <p className='logo-2'>LOGO #6</p>
          </div>
          <div className='logo'>
            <p className='logo-2'>LOGO #7</p>
          </div>
          <div className='logo'>
            <p className='logo-2  hide-border'>LOGO #8</p>
          </div>
        </div>
      </div>
      <div className='footer-link'>
        <div className='grid-2'>
          <div className='m-2'>
            <h1>Intersted to woek with our team?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className='link-div'>
            <Link to='/'>Let Talk</Link>
          </div>
        </div>
        <div className='footer-links'>
          <div className='grid-3'>
            <div className='contacts'>
              <h1>
                <i class='fad fa-shopping-cart' /> BASEVEL
              </h1>
              <p>
                <b>Address:</b>
                {'  '}
                <address style={{ display: 'inline' }}>
                  Lorem ipsum dolor sit amet.
                </address>
              </p>
              <p>
                <b>Tell: </b> +234-BASEVEL{' '}
              </p>
              <p>
                <b>Email: </b> contact@basevel.com{' '}
              </p>
            </div>
            <div className='about-us'>
              <h1>About Us</h1>
              <Link to='/'>About</Link>
              <Link to='/'>What We Do</Link>
              <Link to='/'>How to work with Us</Link>
              <Link to='/'>Project</Link>
            </div>
            <div className='social-media'>
              <h1>Follow Us</h1>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Twitter</Link>
              <Link to='/'>LinkedIn</Link>
            </div>
          </div>
          <p style={{ color: '#ccc' }}>
            {new Date().getFullYear()} &copy; Basevel. All right reserved{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
