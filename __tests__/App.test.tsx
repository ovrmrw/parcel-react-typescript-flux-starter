import React from "react";
import { render } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  test("Initial State", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("hello").textContent).toBe("Hello, world.");
  });
});
