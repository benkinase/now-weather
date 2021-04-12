import { render, fireEvent } from "@testing-library/react";

import { CheckBox } from "./index";

const props = {
  handleChange: jest.fn(),
  currentUnit: "fahrenheit",
};
describe("<CheckBox />", () => {
  test("render component with props", () => {
    const { container, getByTestId } = render(<CheckBox {...props} />);

    expect(container).toBeInTheDocument();
    const cElement = getByTestId("Cel");
    const fElement = getByTestId("Fah");
    expect(cElement).toHaveTextContent("Celsius");
    expect(fElement).toHaveTextContent("Fahrenheit");
  });
});
