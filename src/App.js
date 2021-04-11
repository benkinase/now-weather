import React from "react";
import { AppContainer } from "./components";
import { WeatherBox, LoadingScreen } from "./pages";
import { fetchOpenWeatherData } from "./store/actions";

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
          <LoadingScreen title='Loading...' />
        ) : (
          <WeatherBox weather={data} />
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
    getWeatherData: () => dispatch(fetchOpenWeatherData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
