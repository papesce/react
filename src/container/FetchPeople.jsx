import React from "react";
import PeopleView from "../components/PeopleView"
import {connect} from "react-redux"
import {getPeopleStarted, getPeopleAsync} from "../redux/store"

class FetchTestCont extends React.Component {

 // state = { loading: true} 
 componentDidMount() {
   const {dispatch} = this.props;
   // dispatch(getPeopleStarted)
   dispatch(getPeopleAsync)
  //  fetch("https://swapi.co/api/people/").then((resp)=>resp.json())
  //  .then(
  //   data => this.setState({loading:false, data}), 
  //   error => this.setState({loading : false, error}))
 }
 render(){
   const {loading, error, peopleList = [] } = this.props;
   // debugger;
   return (
     <div>
       <PeopleView loading={loading} error={error} peopleL={peopleList}/>
     </div>
   )
 } 
  
}

const mapStateToProps = (state) => ({
  ...state.peopleView
})

export default connect(mapStateToProps)(FetchTestCont)