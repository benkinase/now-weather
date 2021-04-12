import { actionTypes as Action } from "../../actionTypes";

const initialState = {
  chartData: [],
  error: "",
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHART_DATA_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        error: "",
      };
    case Action.CHART_DATA_FAIL:
      return {
        ...state,
        error: "Unable to dispatch chart data to store",
      };

    default:
      return state;
  }
};
