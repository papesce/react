import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchTest from "./components/FetchTest"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchTest/>
      </div>
    );
  }
}

export default App;
