import React from "react";
import { connect } from "react-redux";
import { AppContainer, CustomContainer } from "./components";
import { mainCities } from "./helpers";
import { WeatherBox } from "./pages";
import { fetchOpenWeatherData } from "./store/actions";

class App extends React.Component {
  state = {
    city: "",
    cities: [],
  };
  // get open weather data upon component mounting
  componentDidMount() {
    const { city } = this.state;
    this.setState({ city: mainCities[0].name, cities: mainCities });
    this.props.getWeatherData(city);
  }
  handleChange = (e) => {
    this.setState({ city: e.target.value });
    this.props.getWeatherData(e.target.value);
  };
  render() {
    const { cities, city } = this.state;
    // destructuring props from state
    const { data, loading, error } = this.props;

    if (loading) return <CustomContainer title='Loading' />;
    if (error) return <CustomContainer title='Error' />;
    return (
      <AppContainer>
        <WeatherBox
          weather={data}
          handleCity={this.handleChange}
          cities={cities}
          city={city}
        />
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
    getWeatherData: (city) => dispatch(fetchOpenWeatherData(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
