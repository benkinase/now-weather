import { render, mockCities } from "../../test-utils";
import { City } from "./index";
import "@testing-library/jest-dom";

const props = {
  cities: mockCities,
  city: mockCities[0].name,
  handleCity: jest.fn(),
};
describe("City Test Suite", () => {
  test("render component with props", () => {
    const { getByTestId, container } = render(<City {...props} />);
    expect(container).toBeInTheDocument();
    const defaultCity = getByTestId("city");
    expect(defaultCity.innerHTML).toBe("Berlin");
  });
});
