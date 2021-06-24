import type { StoreContext } from "./flux/Store";

import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";
import Store from "./flux/Store";
import { initialState } from "./flux/state";
import { reducer } from "./flux/reducer";

function Root() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context: StoreContext = {
    state,
    dispatch,
  };
  return (
    <Store.Provider value={context}>
      <Counter />
    </Store.Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
