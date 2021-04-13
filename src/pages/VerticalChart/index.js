import React, { useState, useEffect } from "react";
import { BarChartContainer } from "../../components";
import { useSelector } from "react-redux";
import { Bar } from "./Bar";
import { Chart } from "./Chart";

// Parent chart component
export const VerticalChart = () => {
  const { chartData } = useSelector((state) => state.chartData);
  // set array length
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
  const width = numberOfBars * (barWidth + barMargin);

  // Calculate highest temperature in a day (interval::3hrs)
  const highestTemp = Math.max(...chartData.map((data) => data.temp));

  return (
    <BarChartContainer>
      <Chart height={chartHeight} width={width}>
        {chartData.map((data, index) => {
          // scale up barHeight to accommodate some low value
          const barHeight =
            data.unit === "celsius" ? data.temp * 30 : data.temp * 5;

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
