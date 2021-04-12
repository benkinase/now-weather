import styled, { keyframes } from "styled-components";
export const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  25% {
    opacity: 0.5;
    transform: translateY(50px);
  }
  50% {
    opacity: 0.8;
    transform: translateY(0px);
  }
 
  100% {
    opacity: 1;
    transform: translateY(-10px);
  }
`;
// custom Bar chart container
export const BarChartContainer = styled.div`
  width: 85%;
  height: 350px;
  margin: auto;
  padding: 10px;
  display: flex;
  animation: ${slideUp} 3s ease-in forwards;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  .time {
    font-size: 22px;
  }
  .temp {
    font-size: 18px;
  }

  .rect-stroke {
    stroke: var(--secondary-color);
    stroke-width: 0.25em;
    padding-bottom: 10px;
  }

  @media (max-width: 700px) {
    .time,
    .temp {
      font-size: 18px;
    }
  }
`;
