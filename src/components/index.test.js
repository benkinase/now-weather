import { render } from "../test-utils";
import "jest-styled-components";
import { Paragraph } from "./index";
test("render component structure and styles", () => {
  const { container } = render(<Paragraph />);
  expect(container).toMatchSnapshot();
});
