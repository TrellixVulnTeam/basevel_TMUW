import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/layout/Home';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Home />
      </div>
    </Router>
  );
};

export default App;
