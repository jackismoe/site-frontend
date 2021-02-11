import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
// import {Provider} from 'react-redux'

ReactDOM.render(
    <Router>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={App}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/contact' component={Contact}/>
    </Router>,
  document.getElementById('root')
);