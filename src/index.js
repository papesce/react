import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date : props.date};
    setInterval(()=>{
      this.setState({date: new Date()});
    }, 
    3000);
  }
  render() {
    return (<div>
      <h1>hello worlds</h1>
      <h2>Is is {this.state.date.toLocaleTimeString()}</h2>
    </div>);
  }
}

  // ========================================
  
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
  
  