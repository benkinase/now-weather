import React from "react";
import Radio from "@material-ui/core/Radio";
import { FlexContainer, Wrapper, Label } from "../../components";

export const CheckBox = ({ currentUnit, handleChange }) => {
  return (
    <FlexContainer space='space-around'>
      <Wrapper>
        <Radio
          checked={currentUnit === "celsius"}
          onChange={handleChange}
          value='celsius'
          name='radio-button-demo'
          color='primary'
        />
        <Label>Celsius</Label>
      </Wrapper>
      <Wrapper>
        <Radio
          checked={currentUnit === "fahrenheit"}
          onChange={handleChange}
          value='fahrenheit'
          name='radio-button-demo'
          color='primary'
        />
        <Label>Fahrenheit</Label>
      </Wrapper>
    </FlexContainer>
  );
};
