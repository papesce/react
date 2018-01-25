import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from "./components/Fetch"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FetchTest/> */}
        <Fetch />
      </div>
    );
  }
}

export default App;
