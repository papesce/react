import React from "react";
import PeopleList from "./PeopleList";

const Loading = () => <div>loading...</div>

const Error = ({error}) => <div>error: {error}</div>

class PeopleView extends React.Component {  
  render(){
      const {loading, error, peopleL} = this.props;
      // debugger;
      if (loading) {return <Loading />}
      if (error) {return <Error error={error}/>}
      return (
        <div><PeopleList peopleL={peopleL}/></div>
      )
    }
}

export default PeopleView;