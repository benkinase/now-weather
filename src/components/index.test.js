import React from "react";
import { mount, shallow } from "enzyme";
import { BarChartContainer, WeatherContainer, FlexContainer } from "./index";

describe("Styled Components Test suite ", () => {
  // snapshots
  it("shallow renders BarChartContainer", () => {
    const wrapper = shallow(<BarChartContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  test("full DOM rendering of WeatherContainer", () => {
    const wrapper = mount(<WeatherContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  // styles
  it("returns the correct property and value", () => {
    const wrapper = shallow(<BarChartContainer />);
    expect(wrapper).toHaveStyleRule("background-color", "var(--primary-color)");
  });
  it("should render a FlexContainer without props", () => {
    const wrapper = shallow(<FlexContainer />);
    expect(wrapper).not.toHaveStyleRule("margin", "0 20px");
    expect(wrapper).toHaveStyleRule("justify-content", "space-around");
  });
  it("should render a FlexContainer with props", () => {
    const wrapper = shallow(<FlexContainer margin space />);
    expect(wrapper).toHaveStyleRule("margin", "0 20px");
    expect(wrapper).toHaveStyleRule("justify-content", "space-between");
  });
});
