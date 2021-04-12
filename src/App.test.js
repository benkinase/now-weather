import React from "react";
// Using the custom render function
import { render, fireEvent, screen, mockData } from "./test-utils";
import App from "./App";

describe("APP Test Suite", () => {
  it("Renders the store connected app with initialState", () => {
    render(<App />, { initialState: { weather: { data: mockData } } });
  });
});
