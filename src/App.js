// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { sum, SumComponent } from 'foobar-ui'
console.log(sum, SumComponent )

type Props = {}

class App extends Component<Props, void> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SumComponent input={1}/>
      </div>
    );
  }
}

export default App;
