import { actionTypes as Action } from "../../actionTypes";

const initialState = {
  dayTemps: {},
  error: "",
};

export const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.DAY_TEMPS_SUCCESS:
      return {
        ...state,
        dayTemps: action.payload,
        error: "",
      };
    case Action.DAY_TEMPS_FAIL:
      return {
        ...state,
        error: "Unable to dispatch data to store",
      };

    default:
      return state;
  }
};
