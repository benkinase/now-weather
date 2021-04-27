import { render, mockData, mockCities } from "../../test-utils";
import { WeatherBox } from "./index";

const props = {
  weather: mockData,
  cities: mockCities,
  city: mockCities[0].name,
  handleChange: jest.fn(),
};

describe("WeatherBox Test Suite", () => {
  test("render component with props", () => {
    const { container } = render(<WeatherBox {...props} />);

    expect(container).toBeInTheDocument();
  });
});
