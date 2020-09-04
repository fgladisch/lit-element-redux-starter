import { store } from ".";
import { CounterAction, CounterActionType } from "./actions";

export const incrementCounter = (value: number) =>
  store.dispatch<CounterAction>({
    type: CounterActionType.INCREMENT,
    value,
  });

export const decrementCounter = (value: number) =>
  store.dispatch<CounterAction>({
    type: CounterActionType.DECREMENT,
    value,
  });
