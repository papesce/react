import React, { Component } from "react";


export default class Fetch extends Component {
  state = {
    rows: [{ name: "sample" }, { name: "sample2" }]
  };
  componentDidMount() {
    fetch("https://reqres.in/api/users").then(
      resp => resp.json())
      .then(json => {
        this.setState({rows: json.data});
      })
      .catch(error => {
        this.setState({error: error.message})
      } )
    
  }
  render() {
    const { rows, error } = this.state;
    if (error) {
      return <p>Error: {error}</p>
    }
    return (
      <React.Fragment>
        <h1>Sample Rows</h1>
        <ul style={{color: "red"}}>{rows.map(row => <li>{row.first_name}</li>)}</ul>
      </React.Fragment>
    );
  }
}
