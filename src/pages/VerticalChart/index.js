import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BarChartContainer } from "../../components";

//Component to render SVG chart

export const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width='100%'
    height='70%'
    preserveAspectRatio='xMidYMax meet'
  >
    {children}
  </svg>
);

export const Bar = ({ x, y, width, time, unit, height, highestTemp }) => {
  const tUnit = unit === "fahrenheit" ? "°F" : "°C";
  const yOffset = unit === "fahrenheit" ? 25 : 60;
  return (
    <React.Fragment>
      <text x={x + width / 25} y={y - 20} className='temp-value'>
        {height.toFixed(1)}
        {tUnit}
      </text>
      <text x={x + width / 25} y={yOffset} className='time'>
        {time.substring(0, 6)}
      </text>

      <rect
        x={x}
        y={y}
        rx='5'
        ry='5'
        width={width}
        height={height}
        fill={highestTemp === height ? `#e0e0e0` : `var(--primary-color)`}
        className='rect-stroke'
      />
    </React.Fragment>
  );
};

export const VerticalChart = ({ chartData }) => {
  const [length, setLength] = useState(0);

  // component mounting, set length
  useEffect(() => {
    setLength(chartData.length);
  }, [chartData]);

  // Initialization values that include chart and bar dimensions
  const maxTemp = 380;
  const chartHeight = maxTemp + 20;
  const barWidth = 50;
  const barMargin = 30;
  const numberOfBars = length;
  let width = numberOfBars * (barWidth + barMargin);

  // Calculate highest temperature for a day
  const highestTemp = Math.max(...chartData.map((data) => data.temp));

  return (
    <BarChartContainer>
      <Chart height={chartHeight} width={width}>
        {chartData.map((data, index) => {
          const barHeight = data.temp;
          return (
            <Bar
              key={index}
              x={index * (barWidth + barMargin)}
              y={chartHeight - barHeight}
              width={barWidth}
              height={barHeight}
              unit={data.unit}
              time={data.time}
              highestTemp={highestTemp}
            />
          );
        })}
      </Chart>
    </BarChartContainer>
  );
};
VerticalChart.propTypes = {
  chartData: PropTypes.array.isRequired,
};
