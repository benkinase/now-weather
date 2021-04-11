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
    if (weather) {
      findTempPressureAverages();
    }
  }, [weather, currentUnit]);

  useEffect(() => {
    findDayTemps();
  }, [weather, chartData, currentUnit]);

  // day of week vs averages(temperature and pressure)
  // eslint-disable-next-line
  function correctTemp(averageT) {
    return averageT.unit === "fahrenheit"
      ? averageT
      : convertToCelsius(averageT);
  }

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
      // covert temp to celsius
      const aveTempCelsius = convertToCelsius(averageTempF);
      const aveFeelTempCelsius = convertToCelsius(averageFeel);
      // toggle temp unit
      const finalAveFeelLike = //correctTemp(averageFeel);
        currentUnit === "fahrenheit" ? averageFeel : aveFeelTempCelsius;
      const finalAverageTemp = //correctTemp(averageTempF);
        currentUnit === "fahrenheit" ? averageTempF : aveTempCelsius;
      // create a temp/press object for every date
      const tempObj = {
        unit: currentUnit,
        temp: Number(finalAverageTemp).toFixed(1),
        feel: Number(finalAveFeelLike).toFixed(2),
        pres: Number(averagePressure).toFixed(1),
        date,
      };
      currentWeatherArr.push(tempObj);
    }
    setDayAverageTemp(currentWeatherArr);
  }

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
              : convertToCelsius(Number(tempArr[index])), //50%
          time: timeArr[index],
        };
      });
      currentDayTemps.push(tempObj);
    }
    setDayTemps(currentDayTemps);
  }

  // handle temperature unit toggling
  const handleChange = (e) => {
    setSelectedUnit(e.target.value);
    findTempPressureAverages();
  };

  const renderChart = React.useCallback(
    (index) => {
      for (let arr of Object.keys(dayTemps)) {
        for (let x of arr) {
          if (Number(x) === Number(index)) {
            setChartData(Object.values(dayTemps[index]));
          }
        }
      }
    },
    [dayTemps]
  );

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
  weather: PropTypes.array.isRequired,
};
