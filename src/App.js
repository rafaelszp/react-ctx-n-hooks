import React, { Component } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './view/Home'

class App extends Component {
  render() {
    return (
      <Home version={'1.0.0-SNAPSHOT'}/>
    );
  }
}

export default App;
