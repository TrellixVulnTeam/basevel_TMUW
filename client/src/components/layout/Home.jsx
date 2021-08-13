import React from 'react';
import NavBar from './NavBar';
import Shoppings from './Shoppings';
import Showcase from './Showcase';
import Work from './Work';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Showcase />
      <Work />
      <Shoppings />
    </div>
  );
};

export default Home;
