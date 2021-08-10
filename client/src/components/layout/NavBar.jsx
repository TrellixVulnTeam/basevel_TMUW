import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar text-primary'>
      <h1>
        <i class='fad fa-shopping-cart'></i> ARCAVEL
      </h1>
      <ul>
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
  );
};

export default NavBar;
