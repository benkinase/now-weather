import React from "react";
import PropTypes from "prop-types";

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

Chart.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
