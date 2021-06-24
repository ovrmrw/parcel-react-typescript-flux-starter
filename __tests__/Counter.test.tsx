import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../src/Counter";
import Store from "../src/flux/Store";

describe("Counter", () => {
  const dispatch = jest.fn();
  let context: any;

  beforeEach(() => {
    const state = {
      counter: {
        count: 0,
      },
    };
    context = { state, dispatch };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Initial state", () => {
    const { getByTestId } = render(
      <Store.Provider value={context}>
        <Counter />
      </Store.Provider>
    );

    expect(getByTestId("count").textContent).toBe("0");
  });

  test("Handle click events", () => {
    const { getByTestId } = render(
      <Store.Provider value={context}>
        <Counter />
      </Store.Provider>
    );

    fireEvent.click(getByTestId("increment"));
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({ type: "INCREMENT" });

    fireEvent.click(getByTestId("reset"));
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: "RESET" });
  });
});
