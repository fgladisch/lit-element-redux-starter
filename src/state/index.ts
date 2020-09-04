import { LitElement } from "lit-element";
import { createStore } from "redux";
import { CounterAction } from "./actions";
import { connect } from "./connect";
import { counterReducer, CounterState } from "./reducer";

export const store = createStore(counterReducer);

export const ConnectedElement = connect<CounterState, CounterAction>(store)(
  LitElement
);

export * from "./actions";
export * from "./helpers";
export * from "./reducer";
