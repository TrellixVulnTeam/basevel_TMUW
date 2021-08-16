import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Fragment>
      <div className='navbar text-primary'>
        <h1>
          <i class='fad fa-shopping-cart' /> BASEVEL
        </h1>
        <ul
          className='hide-mobile'
          style={menu ? { display: 'none' } : { display: 'block' }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/'>Contact Us</Link>
          </li>
          <li>
            <Link to='/'>FAQs</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: '2',
        }}
        onClick={() => setMenu(!menu)}>
        {menu ? (
          <i class='fas fa-bars menu '></i>
        ) : (
          <i class='far fa-times cross'></i>
        )}
      </div>
    </Fragment>
  );
};

export default NavBar;
