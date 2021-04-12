import React from "react";
// Using the custom render function
import { render, screen, mockData } from "./test-utils";
import App from "./App";

describe("APP Test Suite", () => {
  it("Renders the store connected app with initialState", () => {
    const { container } = render(<App />, {
      initialState: { weather: { data: {} } },
    });
    expect(container).toBeInTheDocument();
  });
});
