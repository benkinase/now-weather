import { actionTypes as Action } from "../../actionTypes";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_WEATHER_REQUEST:
      return { loading: true };
    case Action.GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case Action.GET_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
