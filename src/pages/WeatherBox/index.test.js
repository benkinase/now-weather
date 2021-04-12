import { render, fireEvent, mockData } from "../../test-utils";

import { WeatherBox } from "./index";
import { CheckBox } from "../CheckBox";

const props = {
  weather: mockData,
};

describe("<CheckBox />", () => {
  test("render component with props", () => {
    const { container } = render(<WeatherBox {...props} />);

    expect(container).toBeInTheDocument();
  });
});
