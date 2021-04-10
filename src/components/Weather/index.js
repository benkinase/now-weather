import React from "react";
import styled from "styled-components";

// custom weather display container
export const StyledWeather = styled.div`
  width: 85%;
  min-height: 20vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr 1.5fr;
  row-gap: 10px;
  padding: 10px;
  margin: 2rem auto;
  border-radius: 3px;
  border: 3px solid var(--secondary-color);

  @media screen and (min-width: 700px) {
    width: 70%;
  }

  @media screen and (min-width: 1000px) {
    width: 50%;
  }
`;

// reuse WeatherContainer with display modification
const StyledLoading = styled(StyledWeather)`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const WeatherContainer = ({ children }) => {
  return <StyledWeather>{children}</StyledWeather>;
};

export const LoadingContainer = ({ children }) => {
  return <StyledLoading>{children}</StyledLoading>;
};
