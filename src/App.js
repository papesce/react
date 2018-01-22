import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchPeople from "./container/FetchPeople"

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchPeople/>
      </div>
    );
  }
}

export default App;
