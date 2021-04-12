import { render } from "../../test-utils";
import { VerticalChart } from "./index";

describe("VerticalChart component test Suite", () => {
  test("render component", () => {
    const { container } = render(<VerticalChart />);

    expect(container).toBeInTheDocument();
  });
});
