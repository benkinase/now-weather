import styled from "styled-components";

// custom Bar chart container
export const BarChartContainer = styled.div`
  width: 80%;
  height: 350px;
  margin: auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  .time {
    font-size: 17px;
  }
  .time {
    position: absolute;
    z-index: 100;
  }
  .temp-value {
    position: relative;
  }
  .rect-stroke {
    stroke: var(--secondary-color);
    stroke-width: 0.25em;
    padding-bottom: 10px;
  }
`;
