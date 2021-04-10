import { combineReducers } from "redux";
import { weatherReducer } from "./weather";

// combine reducers for scalability
const rootReducer = combineReducers({ weather: weatherReducer });

export default rootReducer;
