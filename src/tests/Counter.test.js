import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./Counter";

test("renders Counter component", () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test("increment button works", () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const incrementButton = screen.getByText("Increment");
  incrementButton.click();
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});
