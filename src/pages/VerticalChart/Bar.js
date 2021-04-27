import React from "react";
import PropTypes from "prop-types";
import { correctUnit } from "../../helpers";

// Component to render single bar (temp value::height)
export const Bar = ({ x, y, width, time, unit, height }) => {
  const yOffset = unit === "celsius" ? 20 : 25;
  // scale down to actual height values
  const actualHeight = unit === "celsius" ? height * 0.2 : height / 2;
  return (
    <React.Fragment>
      <text x={x + width / 30} y={y - 20} className='temp'>
        {actualHeight.toFixed(2)}
        {correctUnit(unit)}
      </text>
      <text x={x + width / 25} y={yOffset} className='time'>
        {time}
      </text>

      <rect
        x={x}
        y={y}
        rx='5'
        ry='5'
        width={width}
        height={height}
        fill={`var(--primary-color)`}
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
