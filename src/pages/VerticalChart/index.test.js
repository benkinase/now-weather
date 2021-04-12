import { render, screen } from "../../test-utils";
import { VerticalChart } from "./index";

describe("< VerticalChart />", () => {
  test("render component", () => {
    const { container } = render(<VerticalChart />);

    expect(container).toBeInTheDocument();
  });
});
