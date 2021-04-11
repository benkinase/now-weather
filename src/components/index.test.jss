import React from "react";
//import { mount, shallow } from "enzyme";
import { BarChartContainer, WeatherContainer, FlexContainer } from "./index";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);
describe("Styled Components Test suite ", () => {
  test('"returns the correct property and value",', () => {
    render(
      <div>
        <BarChartContainer />
      </div>
    );
    // // snapshots
    // expect(screen.getByRole("button")).toBeInTheDocument();
    // // This works
    // expect(screen.getByRole("button", { hidden: true })).toBeInTheDocument();
    expect(style.background - color).toBe("var(--primary-color)");
    expect(style.width).toBe("80%");
  });
  // styles

  // it("should render a FlexContainer without props", () => {
  //   const wrapper = render(<FlexContainer />);
  //   expect(wrapper).not.toHaveStyleRule("margin", "20px");
  //   expect(wrapper).toHaveStyleRule("justify-content", "space-around");
  // });
  // it("should render a FlexContainer with props", () => {
  //   const wrapper = render(<FlexContainer margin space />);
  //   expect(wrapper).toHaveStyleRule("margin", "20px");
  //   expect(wrapper).toHaveStyleRule("justify-content", "space-between");
  // });
});
