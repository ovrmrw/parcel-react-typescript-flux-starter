import React, { useContext } from "react";

import Store from "./flux/Store";

export default function Counter() {
  const context = useContext(Store);
  const { state, dispatch } = context;

  const increment = () => dispatch({ type: "INCREMENT" });

  const reset = () => dispatch({ type: "RESET" });

  return (
    <div>
      <h1 data-testid="count">{state.counter.count}</h1>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
