import counterReducer from "./counter.js";
import loggedReducer from "./islogged.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  counter: counterReducer
});

export default allReducers;
