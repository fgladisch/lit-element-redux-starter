import { Action } from "redux";

export enum CounterActionType {
  INCREMENT = "counter:add",
  DECREMENT = "counter:substract",
}

export interface IncrementAction extends Action<CounterActionType.INCREMENT> {
  readonly value: number;
}

export interface DecrementAction extends Action<CounterActionType.DECREMENT> {
  readonly value: number;
}

export type CounterAction = IncrementAction | DecrementAction;
