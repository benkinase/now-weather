import { render } from "@testing-library/react";
import { Paragraph } from "./index";
test("it works", () => {
  const { container } = render(<Paragraph />);
  expect(container.firstChild).toMatchSnapshot();
  //expect(container.firstChild).toHaveStyleRule(" font-size", "14px");
});
