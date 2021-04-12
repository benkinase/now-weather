import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyledCard } from "../../components";
import { correctUnit } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";

export const WeatherCard = ({ cardItem, cardIndex }) => {
  const { dayTemps } = useSelector((state) => state.dayTemps);
  const dispatch = useDispatch();
  // destructuring cardItem prop
  const { unit, temp, feel, pres, date } = cardItem;

  // manage card index resetting on click
  const [currentIndex, setCurrent] = useState(0);

  //initial chart rendering with index=0
  useEffect(() => {
    fetchCharts(currentIndex);
  });

  // call renderChart with supplied card index
  function renderWithNewId(newIndex) {
    fetchCharts(newIndex);
    setCurrent(newIndex);
  }

  function fetchCharts(index) {
    for (let arr of Object.keys(dayTemps)) {
      for (let x of arr) {
        if (Number(x) === Number(index)) {
          dispatch({
            type: "CHART_DATA_SUCCESS",
            payload: Object.values(dayTemps[index]),
          });
        }
      }
    }
  }

  return (
    <StyledCard variant='outlined' onClick={() => renderWithNewId(cardIndex)}>
      <CardContent>
        <Typography
          className='value'
          color='textSecondary'
          data-testid='temp'
          gutterBottom
        >
          Temp: {temp} {correctUnit(unit)}
        </Typography>
        <Typography className='value' color='textSecondary' gutterBottom>
          Feels: {feel} {correctUnit(unit)}
        </Typography>
        <Typography
          className='value'
          data-testid='pres'
          color='textSecondary'
          gutterBottom
        >
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
  cardItem: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
};
