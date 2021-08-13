import React from 'react';
import shoppingCart from '../../img/shopping-cart.jpg';
import shopping1 from '../../img/shopping-1.png';
import shopping2 from '../../img/shopping-2.png';
import shopping3 from '../../img/shopping-3.jpg';

const Shoppings = () => {
  return (
    <div className='shopping'>
      <div className='grid-2 shopping-1'>
        <h1>Our Finished Shoppings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className='grid shopping-2'>
        <img src={shoppingCart} alt='' />
        <div className='img-landing'></div>
        <div>
          <h1>Smart Home Shopping</h1>
          <p>In Nigerian Cities and Towns</p>
        </div>
        <span className='cart-icon'>
          <i class='fas fa-dolly'></i>
        </span>
      </div>
      <div className='grid-2 shopping-3'>
        <div className='app'>
          <div className='app-img'>
            <img src={shopping1} alt='Shopping App' />
            <img src={shopping2} alt='Shopping App' />
          </div>
          <div className='app-landing'></div>
          <div className='app-market'>
            <h1>Sparklite App</h1>
            <p>Marketplace</p>
          </div>
        </div>
        <div className='site'>
          <div className='app-img'>
            <img src={shopping3} alt='Shopping App' />
          </div>
          <div className='app-landing'></div>
          <div className='app-market'>
            <h1>Sparklite App</h1>
            <p>Marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppings;
