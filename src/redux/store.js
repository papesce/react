import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

interface PeopleView {
  people: string;
  loading: bool;
  error: string;
}

interface State {
  peopleView: PeopleView
}

//actionType
const GET_PEOPLE_STARTED = "GET_PEOPLE_STARTED";
const GET_PEOPLE_ERROR = "GET_PEOPLE_ERROR";
const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";

//action
export const getPeopleStarted = {type: GET_PEOPLE_STARTED}
const getPeopleSuccess = (data) => ({type: GET_PEOPLE_SUCCESS, payload: {results: data} })
const getPeopleError = (error) => ({type: GET_PEOPLE_ERROR, payload: {error: error} })

//action thunk
// export const getPeopleAsync = (dispatch) => {
//   dispatch(getPeopleStarted);
//   fetch("https://swapi.co/api/people/").then((resp) => (resp.json()))
//     .then( data => dispatch(getPeopleSuccess(data.results)))
//     .catch( error => dispatch(getPeopleError(error)))
// }

export const getPeopleAsync = async (dispatch) => {
  dispatch(getPeopleStarted);
  try {
    const resp = await fetch("https://swapi.co/api/people/");
    const data = await resp.json();
    dispatch(getPeopleSuccess(data.results))
  } catch (error) {
    dispatch(getPeopleError(error))
  }  
}

//reducer 
const peopleViewReducer = (state, action) => {
   switch (action.type) {
     case GET_PEOPLE_STARTED: 
         return { loading: true}
     case GET_PEOPLE_ERROR: 
         return { loading: false, error: action.payload.error }
     case GET_PEOPLE_SUCCESS:
         return { loading: false, peopleList: action.payload.results }  
     default: 
         return {}  
   }
}

const rootReducer = combineReducers({
  peopleView: peopleViewReducer,
})


const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store

