import React, { Component } from 'react';
import './App.css';
import {RouterComponent,RootHeader,RootFooter} from './router/index';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
         <div>
             <RootHeader/>
             <div className="box">
                 <RouterComponent/>
             </div>
             <RootFooter/>
         </div>
      </Router>
    );
  }
}

export default App;
