import { render, mockData } from "../../test-utils";
import { WeatherBox } from "./index";

const props = {
  weather: mockData,
};

describe("WeatherBox test Suite", () => {
  test("render component with props", () => {
    const { container } = render(<WeatherBox {...props} />);

    expect(container).toBeInTheDocument();
  });
});
