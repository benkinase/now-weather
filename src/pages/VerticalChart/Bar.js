import React from "react";
import PropTypes from "prop-types";
import { correctUnit } from "../../helpers";

// Component to render single bar (temp value::height)
export const Bar = ({ x, y, width, time, unit, height, highestTemp }) => {
  const yOffset = unit === "fahrenheit" ? 25 : 60;
  return (
    <React.Fragment>
      <text x={x + width / 30} y={y - 20} className='temp'>
        {height.toFixed(1)}
        {correctUnit(unit)}
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
Bar.protoTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  time: PropTypes.number,
  unit: PropTypes.string,
  height: PropTypes.number,
  highestTemp: PropTypes.number,
};
