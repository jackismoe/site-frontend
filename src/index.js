import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import {Provider} from 'react-redux'

ReactDOM.render(
    <Router>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={App}/>
    </Router>,
  document.getElementById('root')
);