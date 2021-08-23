import React from 'react';
import Footer from './Footer';
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
      <Footer />
    </div>
  );
};

export default Home;
