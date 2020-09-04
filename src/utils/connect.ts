import { LitElement } from "lit-element";
import { Action, Store, Unsubscribe } from "redux";

type Constructor<T> = new (...args: any[]) => T;

export const connect = <S, A extends Action>(store: Store<S, A>) => <
  T extends Constructor<LitElement>
>(
  baseElement: T
) =>
  class extends baseElement {
    _storeUnsubscribe: Unsubscribe | null = null;

    connectedCallback() {
      super.connectedCallback();

      this._storeUnsubscribe = store.subscribe(() =>
        this.stateChanged(store.getState())
      );

      this.stateChanged(store.getState());
    }

    disconnectedCallback() {
      if (this._storeUnsubscribe) {
        this._storeUnsubscribe();
      }

      super.disconnectedCallback();
    }

    stateChanged(_: S) {
      // empty
    }
  };
