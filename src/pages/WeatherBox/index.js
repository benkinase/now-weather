import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { WeatherContainer } from "../../components";
import { convertToCelsius } from "../../helpers";
import { CheckBox, VerticalChart } from "../index";
import { Pagination } from "../Pagination";

export const WeatherBox = ({ weather }) => {
  // local states
  const [dayAverageTemp, setDayAverageTemp] = useState([]);
  const [dayTemps, setDayTemps] = useState([]);
  const [currentUnit, setSelectedUnit] = useState("fahrenheit");
  const [chartData, setChartData] = useState([]);

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
        const averageTempF = totalTempF / dateKeyArr.length;

        const totalFeelTemp = dateKeyArr
          .map((item) => item.main.feels_like)
          .reduce((acc, cur) => acc + cur);
        const averageFeel = totalFeelTemp / dateKeyArr.length;
        //pressure
        const totalPressure = dateKeyArr
          .map((item) => item.main.pressure)
          .reduce((acc, cur) => acc + cur);
        const averagePressure = totalPressure / dateKeyArr.length;

        // display correct temp based on unit
        const averageTemp =
          currentUnit === "fahrenheit"
            ? averageTempF
            : convertToCelsius(averageTempF);

        const averageFeelLike =
          currentUnit === "fahrenheit"
            ? averageFeel
            : convertToCelsius(averageFeel);

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
      setDayAverageTemp(currentWeatherArr);
    }
    findTempPressureAverages();
    return () => {};
  }, [weather, currentUnit]);

  useEffect(() => {
    // time of day vs temperature
    // Bar chart data
    function findDayTemps() {
      let currentDayTemps = [];
      for (let day of Object.keys(weather)) {
        const dayArr = Object.values(weather[day]);
        const tempArr = dayArr.map((item) => item.main.temp);
        const timeArr = dayArr.map((item) => item.time);
        const tempObj = tempArr.map((_, index) => {
          return {
            unit: currentUnit,
            temp:
              currentUnit === "fahrenheit"
                ? Number(tempArr[index])
                : convertToCelsius(Number(tempArr[index])),
            time: timeArr[index],
          };
        });
        currentDayTemps.push(tempObj);
      }
      setDayTemps(currentDayTemps);
    }
    findDayTemps();
    return () => {};
  }, [weather, chartData, currentUnit]);

  // handle temperature unit toggling
  const handleChange = ({ target }) => {
    setSelectedUnit(target.value);
  };

  function renderChart(index) {
    for (let arr of Object.keys(dayTemps)) {
      for (let x of arr) {
        if (Number(x) === Number(index)) {
          setChartData(Object.values(dayTemps[index]));
        }
      }
    }
  }
  return (
    <WeatherContainer>
      <CheckBox handleChange={handleChange} currentUnit={currentUnit} />
      <Pagination
        pageSize={3}
        data={dayAverageTemp}
        renderChart={renderChart}
      />
      <VerticalChart chartData={chartData} />
    </WeatherContainer>
  );
};

WeatherBox.propTypes = {
  weather: PropTypes.object.isRequired,
};
