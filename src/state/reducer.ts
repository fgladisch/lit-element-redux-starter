import { Reducer } from "redux";
import { CounterAction, CounterActionType } from "./actions";

export type CounterState = {
  readonly value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT: {
      return {
        ...state,
        value: state.value + action.value,
      };
    }
    case CounterActionType.DECREMENT: {
      return {
        ...state,
        value: state.value - action.value,
      };
    }
    default: {
      return state;
    }
  }
};
