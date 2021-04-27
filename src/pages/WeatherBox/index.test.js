import { render, mockData, cities } from "../../test-utils";
import { WeatherBox } from "./index";

const props = {
  weather: mockData,
  cities: cities,
  city: cities[0].name,
  handleChange: jest.fn(),
};

describe("WeatherBox Test Suite", () => {
  test("render component with props", () => {
    const { container } = render(<WeatherBox {...props} />);

    expect(container).toBeInTheDocument();
  });
});
