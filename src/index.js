import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Banner from './Banner'
import Resume from './Resume'
// import {Provider} from 'react-redux'

ReactDOM.render(
    <Router>
      <Route path='/' component={Header}/>
      {/* <Route exact path='/' component={Banner}/> */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/resume' component={Resume}/>
    </Router>,
  document.getElementById('root')
);