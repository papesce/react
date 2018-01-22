import React, { Component } from 'react';
import FetchPeople from "./container/FetchPeople"
import store, {getPeopleAsync, getPeopleStarted} from "./redux/store"
import { Provider } from "react-redux"
// debugger;
// store.dispatch({type: GET_PEOPLE_ERROR, payload: {error: "error 404"}});
// store.dispatch({type: GET_PEOPLE_SUCCESS, payload: {results: []}});
// store.dispatch(getPeopleError("error 404"));
// store.dispatch(getPeopleSuccess([]));
// store.dispatch(getPeopleStarted);

// store.dispatch(getPeopleAsync);
// console.log(store.getState()); 

store.subscribe( () => {
  console.log(store.getState()); 
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <FetchPeople/>
        </Provider>
      </div>
    );
  }
}

export default App;
