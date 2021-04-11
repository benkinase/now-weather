import React from "react";
// Using the custom render function and not RTL's render
import { render, fireEvent, screen, mockData } from "./test-utils";
import App from "./App";

it("Renders the connected app with initialState", () => {
  render(<App />, { initialState: { weather: { data: mockData } } });
});
