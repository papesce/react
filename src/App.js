import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from "./components/Fetch"
import { store } from "./redux/redux"
import {Provider} from "react-redux"


const style = { marginLeft : "20px"}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div  style={style}>
          <Fetch/>
        </div>
      </Provider>
    );
  }
}

export default App;
