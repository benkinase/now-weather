import React, { useEffect } from "react";
import { AppContainer } from "./components";
import { WeatherBox, LoadingScreen } from "./pages";
// eslint-disable-next-line
import { fetchLocalWeatherData, fetchOpenWeatherData } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const { data, loading } = useSelector((state) => state.weather);
  console.log({ REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT });
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchWeather());
    // load grouped weather objects
    dispatch(fetchOpenWeatherData());
    //dispatch(fetchLocalWeatherData());
  }, [dispatch]);

  return (
    <AppContainer>
      {loading ? (
        <LoadingScreen title='Loading...' />
      ) : (
        <WeatherBox weather={data} />
      )}
    </AppContainer>
  );
};
