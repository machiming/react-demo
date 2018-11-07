import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.render(
       <Router>
           <App />
       </Router>
, document.getElementById('root'));


