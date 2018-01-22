import React from "react";
import PeopleView from "../components/PeopleView"

class FetchTestCont extends React.Component {

 state = { loading: true} 
 componentDidMount() {
   fetch("https://swapi.co/api/people/").then((resp)=>resp.json())
   .then(
    data => this.setState({loading:false, data}), 
    error => this.setState({loading : false, error}))
 }
 render(){
   const {loading, error, data = {}} = this.state;
   // debugger;
   return (
     <div>
       <PeopleView loading={loading} error={error} peopleL={data.results}/>
     </div>
   )
 } 
  
}

export default FetchTestCont