import React, { useEffect } from "react";
import { AppContainer } from "./components";
import { WeatherBox, LoadingScreen } from "./pages";
// eslint-disable-next-line
import { fetchLocalWeatherData, fetchOpenWeatherData } from "./store/actions";
import { useDispatch, connect, useSelector } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    const { data, loading, error } = this.props;
    console.log(data);
    return (
      <AppContainer>
        {loading ? (
          <LoadingScreen title='Loading...' data-testid='Loading' />
        ) : (
          <WeatherBox weather={data} data-testid='Weather' />
        )}
      </AppContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.weather.data,
    loading: state.weather.loading,
    error: state.weather.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: () => dispatch(fetchLocalWeatherData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
