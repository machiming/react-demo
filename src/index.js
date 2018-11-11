import React from 'react';
import ReactDOM from 'react-dom';
import fundebug from 'fundebug-javascript';
import './assets/css/common.scss';
import App from './App';

fundebug.apikey = "a185bbaaa69d392c690f0b005ecceb336024913043c8589c7963760b824d1e2b";
ReactDOM.render(
    <App/>
    , document.getElementById('root'));


