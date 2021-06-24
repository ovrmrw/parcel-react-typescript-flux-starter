import type { Action } from "./actions";

export type GlobalState = {
  action: Action | null;
  user: Record<string, any>;
  locale: Record<string, any>;
  theme: Record<string, any>;
  counter: CounterState;
};

type CounterState = {
  count: number;
};

export const initialState: GlobalState = {
  action: null,
  user: {},
  locale: {},
  theme: {},
  counter: {
    count: 0,
  },
};
