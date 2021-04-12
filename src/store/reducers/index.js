import { combineReducers } from "redux";
import { weatherReducer } from "./weather";
import { tempReducer } from "./dayTemps";
import { chartReducer } from "./chartData";

// combine reducers for scalability
const rootReducer = combineReducers({
  weather: weatherReducer,
  dayTemps: tempReducer,
  chartData: chartReducer,
});

export default rootReducer;
