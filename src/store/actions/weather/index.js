import { actionTypes as Action } from "../../actionTypes";
import axios from "axios";
import { localData } from "../../../data";
import {
  openWeatherDataFormatter,
  groupBy,
  OPEN_WEATHER_URL,
} from "../../../helpers";

const API_URL = `${process.env.REACT_APP_API_ENDPOINT}`;

export const fetchOpenWeatherData = () => async (dispatch) => {
  dispatch({
    type: Action.GET_WEATHER_REQUEST,
    payload: {},
  });
  try {
    const { data } = await axios.get(OPEN_WEATHER_URL);
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

export const fetchLocalWeatherData = () => async (dispatch) => {
  dispatch({
    type: Action.GET_WEATHER_REQUEST,
    payload: {},
  });
  try {
    const formattedData = openWeatherDataFormatter(localData);
    const groupDataByDate = groupBy("day");
    const newWeatherInfo = groupDataByDate(formattedData);
    // dispatch to weather data store
    dispatch({
      type: Action.GET_WEATHER_SUCCESS,
      payload: newWeatherInfo,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_WEATHER_FAIL,
      payload: error.message,
    });
  }
};
