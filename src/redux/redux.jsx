import { createStore, combineReducers } from "redux"
interface Person {
  first_name: string
}

interface Persons {
  error: string;
  loading: boolean;
  rows :  Array<Person>
}

interface State {
  persons: Persons
} 


//1-action type
const PERSON_LOADING = "PERSON_LOADING"
const PERSON_FETCH_SUCCESS = "PERSON_FETCH_SUCCESS"
const PERSON_FETCH_ERROR = "PERSON_FETCH_ERROR"


//2-actions  {type: actiontype, payload}
const startPersonsFetch = {type: PERSON_LOADING}
const personFetchSuccess = (persons: Array<Person>) => ({type: PERSON_FETCH_SUCCESS, 
payload: persons})
const personFetchError = (error: string) => ({type: PERSON_FETCH_ERROR,
payload: error})

//3-reducers  (prevState, action) => newState
const personsReducer = (prevState: State, action) => {
  switch (action.type) {
    case PERSON_LOADING: {
      return {loading: true}
    }
    case PERSON_FETCH_SUCCESS: {
      return {loading: false, rows: action.payload}
    }
    case PERSON_FETCH_ERROR : {
      return {loading: false, error: action.payload}
    }
    default: return {}
  }
}

const rootReducer = combineReducers({persons: personsReducer})

const initialState = {}

export const store = createStore(rootReducer, initialState) 

store.subscribe( () => {  
  console.log(store.getState())
});

export const fetchPersons = (dispatch) => {
  dispatch(startPersonsFetch);
  fetch("https://reqres.in/api/users").then(resp => resp.json())
  .then( resp => dispatch(personFetchSuccess(resp.data)))
  .catch( error => dispatch(personFetchError(error.message))); 
}

//get the persons


