import { LitElement } from "lit-element";
import { createStore } from "redux";
import { connect } from "../utils";
import { counterReducer } from "./reducer";

export const store = createStore(counterReducer);
export const ConnectedElement = connect(store)(LitElement);

export * from "./actions";
export * from "./helpers";
export * from "./reducer";
