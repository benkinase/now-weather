import { render, cities } from "../../test-utils";
import { City } from "./index";
import "@testing-library/jest-dom";

const props = {
  cities: cities,
  city: cities[0].name,
  handleCity: jest.fn(),
};
describe("City Test Suite", () => {
  test("render component with props", () => {
    const { getByTestId, container } = render(<City {...props} />);
    expect(container).toBeInTheDocument();
    // const elem = getByTestId("temp");
    // expect(elem.innerHTML).toBe("Temp: 265.45 °C");
    // const elem1 = getByTestId("pres");
    // expect(elem1.innerHTML).toBe("Pres: 1013 P");
    // expect(elem1.innerHTML).not.toBe("Pres: 101 P");
  });
});
