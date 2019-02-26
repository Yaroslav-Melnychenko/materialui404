import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content">
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
