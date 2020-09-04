/* eslint-disable @typescript-eslint/no-unused-vars */

import { Action, Store, Unsubscribe } from "redux";

type Constructor<T> = new (...args: any[]) => T;

interface CustomElement {
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  readonly isConnected: boolean;
}

export const connect = <S, A extends Action>(store: Store<S, A>) => <
  T extends Constructor<CustomElement>
>(
  baseElement: T
) =>
  class extends baseElement {
    _storeUnsubscribe!: Unsubscribe;

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      this._storeUnsubscribe = store.subscribe(() =>
        this.stateChanged(store.getState())
      );
      this.stateChanged(store.getState());
    }

    disconnectedCallback() {
      this._storeUnsubscribe();

      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }

    /**
     * The `stateChanged(state)` method will be called when the state is updated.
     */
    stateChanged(state: S) {
      // empty
    }
  };
