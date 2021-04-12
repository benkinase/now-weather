import { render, mockItems } from "../../test-utils";
import { WeatherCard } from "./index";
import "@testing-library/jest-dom";

const props = {
  cardItem: mockItems[0],
  cardIndex: 1,
};
describe("<WeatherCard />", () => {
  test("render component with props", () => {
    const { getAllByText, getByTestId, container } = render(
      <WeatherCard {...props} />
    );
    expect(container).toBeInTheDocument();
    const elem = getByTestId("temp");
    expect(elem.innerHTML).toBe("Temp: 265.45 °C");
    const elem1 = getByTestId("pres");
    expect(elem1.innerHTML).toBe("Pres: 1013 P");
  });
});
