import { render, screen, mockCities } from "../../test-utils";
import { userEvent } from "@testing-library/user-event";
import { City } from "./index";
import "@testing-library/jest-dom";

const props = {
  cities: mockCities,
  city: mockCities[0].name,
  handleCity: jest.fn(),
};
describe("City Test Suite", () => {
  test("render component with props", () => {
    const { getAllByTestId, container } = render(<City {...props} />);
    expect(container).toBeInTheDocument();

    let options = getAllByTestId("select-option");
    expect(options[0].value).toBe("Berlin");
    expect(options[1].value).toBe("Cologne");
    expect(options[2].value).toBe("Dortmund");
  });
});
