import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyledCard } from "../../components";

export const WeatherCard = ({ renderChart, cardItem, cardIndex }) => {
  // destructuring cardItem prop
  const { unit, temp, feel, pres, date } = cardItem;

  // manage card index resetting on click
  //const [currentIndex, setIndex] = useState(0);

  // initial chart rendering with index=0
  // useEffect(() => {
  //   renderChart(currentIndex);
  // }, [currentIndex, unit]);

  // call renderChart with supplied card index
  function renderWithNewId(newIndex) {
    renderChart(newIndex);
    //setIndex(newIndex);
  }

  return (
    <StyledCard variant='outlined' onClick={() => renderWithNewId(cardIndex)}>
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
};
WeatherCard.propTypes = {
  renderChart: PropTypes.func.isRequired,
  cardItem: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
};
