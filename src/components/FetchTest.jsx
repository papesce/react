import React from "react";

class FetchTest extends React.Component {

state = {
  loading: true,
  error: false
}  
componentDidMount() {
  fetch("https://swapi.co/api/people").then(resp =>
    resp.json()).then( 
      data => this.setState({loading:false, data}),
      error => this.setState({loading: false, error})
  )
   
}
render() {
  const {loading, error, data} = this.state;
  if (loading) {
     return (<div>loading...</div>)
  }
  if (error) {
    return (<div>error...</div>)
  }
 // debugger
 console.log(data.results);
  return (
    <div>
      <ul>
        {data.results.map( (people,index) =>
            <li key={index}>{people.name}</li>
        )}
      </ul>
    </div>  
  )
}
}

export default FetchTest