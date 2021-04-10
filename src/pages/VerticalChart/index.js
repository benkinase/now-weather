import React, { useState, useEffect } from "react";
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

export const Bar = ({ x, y, width, unit, height, highestTemp }) => {
  const tUnit = unit === "fahrenheit" ? "°F" : "°C";
  return (
    <React.Fragment>
      <text x={x + width / 25} y={y - 20} className='temp-value'>
        {height.toFixed(0)}
        {tUnit}
      </text>
      <rect
        x={x}
        y={y}
        rx='5'
        ry='5'
        width={width}
        height={height}
        fill={highestTemp === height ? `highest` : `var(--primary-color)`}
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
  const highestTemp = Math.max(...chartData.map((d) => d.temp));

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
              highestTemp={highestTemp}
            />
          );
        })}
      </Chart>
    </BarChartContainer>
  );
};
