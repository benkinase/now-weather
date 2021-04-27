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


export const Wrapper = styled.div``;

// app root container
export const AppContainer = styled(Wrapper)`
  margin: 5rem auto;
`;

// custom Bar chart container
export const BarChartContainer = styled.(Wrapper)`
  width: 85%;
  height: 350px;
  margin: auto;
  padding: 10px;
  display: flex;
  //animation: ${slideUp} 3s ease-in forwards;
  flex-direction: ${(props) => props.direction};
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


export const CitySelect = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    option,
    select {
      font-size: 12px;
    }
  }
`;

// reusable flex container
export const FlexContainer = styled(Wrapper)`
  display: flex;
  justify-content: ${(props) => props.space};
  align-items: center;
  position: relative;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.mt};

  .hide {
    display: none;
  }
  .arrow {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: absolute;
  }
  .next {
    right: 0;
  }
  .arrow:hover {
    cursor: pointer;
    background-color: var(--secondary-color);
    border-radius: 50%;
    padding: 3px;
  }
`;

export const GridContainer = styled(Wrapper)`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  column-gap: 10px;
`;
