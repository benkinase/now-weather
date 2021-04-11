// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import thunk from "redux-thunk";

// async
const middleware = [thunk];

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(...middleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override RTL render method
export { render };
export const mockData = {
  "2021-04-10": [
    {
      dt: 1618185600,
      main: { temp: 285.66, feels_like: 284.22, pressure: 1018 },
      dt_txt: "2021-04-10 12:00:00",
      day: "2021-04-10",
      time: " 12:00:00",
      id: 1618056000,
    },
    {
      dt: 1618185600,
      main: { temp: 265.45, feels_like: 254.22, pressure: 1018 },
      dt_txt: "2021-04-10 12:00:00",
      day: "2021-04-10",
      time: " 12:00:00",
      id: 1618056000,
    },
  ],
  "2021-04-11": [
    {
      dt: 1618185600,
      main: { temp: 285.66, feels_like: 284.22, pressure: 1018 },
      dt_txt: "2021-04-10 12:00:00",
      day: "2021-04-10",
      time: " 12:00:00",
      id: 1618056000,
    },
    {
      dt: 1618185600,
      main: { temp: 265.45, feels_like: 254.22, pressure: 1018 },
      dt_txt: "2021-04-10 12:00:00",
      day: "2021-04-10",
      time: " 12:00:00",
      id: 1618056000,
    },
  ],
};
