import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Calculator</h1>
        </header>
        <p className="App-intro">
          Soona needs to get<code> stuff</code> started. 
        </p>
      </div>
    );
  }
}


export default App;