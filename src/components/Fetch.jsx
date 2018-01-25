import React, { Component } from "react";
import {connect} from "react-redux"
import {fetchPersons} from "../redux/redux";


class Fetch extends Component {
  // state = {
  //  rows: [{ name: "sample" }, { name: "sample2" }]
  //};
  componentDidMount() {
    // fetch("https://reqres.in/api/users")
    //   .then(resp => resp.json())
    //   .then(json => {
    //     this.setState({ rows: json.data });
    //   })
    //   .catch(error => {
    //     this.setState({ error: error.message });
    //   });
    const { dispatch } = this.props;
    fetchPersons(dispatch);
  }
  render() {
    const { rows = [], error, loading } = this.props;
    if (loading) {
      return <p>loading...</p>
    }
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <div>
        <h1>Sample Rows</h1>
        <ul style={{ color: "red" }}>
          {rows.map((row, index) => <li key={index}>{row.first_name}</li>)}
        </ul>
      </div>
    );
  }
}

// state => props
const mapStateToProps = (state) => {
  // debugger;
  return {...state.persons}
}

export default connect(mapStateToProps)(Fetch)
