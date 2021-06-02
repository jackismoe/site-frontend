import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home';
import Header from './Header';
import Resume from './Resume'
import Blog from './Blog'

import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/resume' component={Resume}/>
    </Router>,
  document.getElementById('root')
);