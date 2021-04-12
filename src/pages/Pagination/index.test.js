import { render, mockItems } from "../../test-utils";
import { Pagination } from "./index";

const props = {
  data: mockItems,
  pageSize: 3,
};
describe("Pagination Test Suite", () => {
  test("render component with props", () => {
    const { container } = render(<Pagination {...props} />);

    expect(container).toBeInTheDocument();
  });
});
