import { actionTypes as Action } from "../../actionTypes";
import { openWeatherDataFormatter, groupBy, axiosAPI } from "../../../helpers";

export const fetchOpenWeatherData = (city) => async (dispatch) => {
  dispatch({
    type: Action.GET_WEATHER_REQUEST,
    payload: { city },
  });
  try {
    const { data } = await axiosAPI(city);
    const formattedData = openWeatherDataFormatter(data);
    const groupDataByDate = groupBy("day");
    const groupedWeatherInfo = groupDataByDate(formattedData);

    dispatch({
      type: Action.GET_WEATHER_SUCCESS,
      payload: groupedWeatherInfo,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_WEATHER_FAIL,
      payload: error.message,
    });
  }
};
