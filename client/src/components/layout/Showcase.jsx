import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../../img/shopping_cart.svg';

const Showcase = () => {
  return (
    <div className='grid-2 showcase'>
      <div className='showcase-content'>
        <h1>Shop From Home At Ease Enjoy Free Delivery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <Link to='/'>Shop Now</Link>
      </div>
      <div className='showcase-img'>
        <img src={shoppingCart} alt='Shopping Cart' />
      </div>
    </div>
  );
};

export default Showcase;
