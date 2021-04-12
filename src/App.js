import React from "react";
import { AppContainer, CustomContainer } from "./components";
import { WeatherBox } from "./pages";
import { fetchOpenWeatherData } from "./store/actions";
import { connect } from "react-redux";

class App extends React.Component {
  // get open weather data upon component mounting
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    // destructuring props from state
    const { data, loading, error } = this.props;

    if (loading) return <CustomContainer title='Loading' />;
    if (error) return <CustomContainer title='Error' />;
    return (
      <AppContainer>
        <WeatherBox weather={data} />
      </AppContainer>
    );
  }
}
// connect component to store (state and actions)
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
