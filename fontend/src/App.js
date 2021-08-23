import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/layout/Home';
import Register from './components/pages/Register';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
