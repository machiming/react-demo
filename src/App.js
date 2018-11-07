import React, { Component } from 'react';
import './App.css';
import {RouterComponent,RootHeader,RootFooter} from './router/index';
import { Route, Link, Switch} from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <div className="App">
          <RootHeader/>
          <div className="box">
              <RouterComponent/>
          </div>
          <RootFooter/>
      </div>
    );
  }
}

export default App;
