import { render } from "../test-utils";
import "jest-styled-components";
import { Paragraph } from "./index";

describe("Styled Components test Suite", () => {
  test("render component structure/snapshot", () => {
    const { container } = render(<Paragraph />);
    expect(container).toMatchSnapshot();
  });
});
