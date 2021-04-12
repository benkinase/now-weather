import { render } from "@testing-library/react";
import "jest-styled-components";
import { Paragraph } from "./index";
test("it works", () => {
  const { container } = render(<Paragraph />);
  expect(container).toMatchSnapshot();
  //expect(container).toHaveStyleRule("font-size", "14px");
});
