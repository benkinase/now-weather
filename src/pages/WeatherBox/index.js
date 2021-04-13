import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { WeatherContainer } from "../../components";
import { correctTemp } from "../../helpers";
import { CheckBox, VerticalChart } from "../index";
import { Pagination } from "../Pagination";
import { useDispatch } from "react-redux";

export const WeatherBox = ({ weather }) => {
  // local states
  // calculated average temperature and pressure for a day
  const [dayAverages, setDayAverages] = useState([]);
  const [currentUnit, setSelectedUnit] = useState("fahrenheit");

  const dispatch = useDispatch();

  useEffect(() => {
    // day of week vs averages(temperature and pressure)
    function findTempPressureAverages() {
      let currentWeatherArr = [];
      for (let date of Object.keys(weather)) {
        // get all object arrays for each date
        const dateKeyArr = Object.values(weather[date]);
        // calculate total and average temp/press for each date
        const totalTempF = dateKeyArr
          .map((item) => item.main.temp)
          .reduce((acc, cur) => acc + cur);

        // Average day temperature in fahrenheit
        const averageTempF = totalTempF / dateKeyArr.length;

        const totalFeelTemp = dateKeyArr
          .map((item) => item.main.feels_like)
          .reduce((acc, cur) => acc + cur);

        // Average day temperature (feels_like) in fahrenheit
        const averageFeel = totalFeelTemp / dateKeyArr.length;

        // Average pressure in Pascal
        const totalPressure = dateKeyArr
          .map((item) => item.main.pressure)
          .reduce((acc, cur) => acc + cur);
        const averagePressure = totalPressure / dateKeyArr.length;

        // display correct temperature based on unit
        const averageTemp = correctTemp(averageTempF, currentUnit);
        const averageFeelLike = correctTemp(averageFeel, currentUnit);

        // create a temp/press object for every date
        const tempObj = {
          unit: currentUnit,
          temp: Number(averageTemp).toFixed(1),
          feel: Number(averageFeelLike).toFixed(2),
          pres: Number(averagePressure).toFixed(1),
          date,
        };
        currentWeatherArr.push(tempObj);
      }
      setDayAverages(currentWeatherArr);
    }
    findTempPressureAverages();
    return () => {};
  }, [weather, currentUnit]);

  useEffect(() => {
    // time of day vs temperature
    // Bar chart data
    function getDayTemps() {
      let currentDayTemps = [];
      for (let day of Object.keys(weather)) {
        const dayArr = Object.values(weather[day]);
        const tempArr = dayArr.map((item) => item.main.temp);
        const timeArr = dayArr.map((item) => item.time);
        const tempObj = tempArr.map((_, index) => {
          return {
            unit: currentUnit,
            temp: correctTemp(Number(tempArr[index]), currentUnit),
            time: timeArr[index].substring(0, 6),
          };
        });
        currentDayTemps.push(tempObj);
      }
      //dispatch calculated (3hr) interval day temperatures to store
      dispatch({
        type: "DAY_TEMPS_SUCCESS",
        payload: currentDayTemps,
      });
    }
    getDayTemps();
    return () => {};
  }, [weather, currentUnit, dispatch]);

  // handle temperature unit toggling
  const handleChange = ({ target }) => {
    setSelectedUnit(target.value);
  };

  return (
    <WeatherContainer>
      <CheckBox handleChange={handleChange} currentUnit={currentUnit} />
      <Pagination pageSize={3} data={dayAverages} />
      <VerticalChart />
    </WeatherContainer>
  );
};

WeatherBox.propTypes = {
  weather: PropTypes.object.isRequired,
};
