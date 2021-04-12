import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyledCard } from "../../components";

export class WeatherCard extends React.Component {
  // destructuring cardItem prop
  state = {
    currentIndex: 0,
  };

  // manage card index resetting on click
  //const [currentIndex, setIndex] = useState(0);

  // initial chart rendering with index=0
  // useEffect(() => {
  //   renderChart(currentIndex);
  // }, [currentIndex, unit]);
  componentDidMount() {
    this.props.renderChart(this.state.currentIndex);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentIndex !== this.state.currentIndex) {
      this.props.renderChart(this.state.currentIndex);
      console.log("unit");
    }
  }
  // call renderChart with supplied card index
  renderWithNewId(newIndex) {
    this.props.renderChart(newIndex);
    //setIndex(newIndex);
    this.setState({ currentIndex: newIndex });
  }
  render() {
    const { cardItem, cardIndex } = this.props;
    const { unit, temp, feel, pres, date } = cardItem;
    return (
      <StyledCard
        variant='outlined'
        onClick={() => this.renderWithNewId(cardIndex)}
      >
        <CardContent>
          <Typography className='value' color='textSecondary' gutterBottom>
            Temp: {temp} {unit === "fahrenheit" ? "°F" : "°C"}
          </Typography>
          <Typography className='value' color='textSecondary' gutterBottom>
            Feels: {feel} {unit === "fahrenheit" ? "°F" : "°C"}
          </Typography>
          <Typography className='value' color='textSecondary' gutterBottom>
            Pres: {pres} P
          </Typography>
          <Typography className='value' color='textSecondary' gutterBottom>
            Date: {date}
          </Typography>
        </CardContent>
      </StyledCard>
    );
  }
}
WeatherCard.propTypes = {
  renderChart: PropTypes.func.isRequired,
  cardItem: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
};
