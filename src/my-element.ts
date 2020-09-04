import {
  customElement,
  html,
  internalProperty,
  PropertyValues,
} from "lit-element";
import styles from "./my-element.styles";
import {
  ConnectedElement,
  CounterState,
  decrementCounter,
  incrementCounter,
} from "./state";

@customElement("my-element")
export class MyElement extends ConnectedElement {
  static styles = styles;

  @internalProperty() counter = 0;
  @internalProperty() value = "1";
  @internalProperty() log: string[] = [];

  public updated(props: PropertyValues<MyElement>) {
    if (props.has("counter")) {
      this.log = [...this.log, `Counter changed to ${this.counter}!`];
    }
    if (props.has("value")) {
      this.log = [...this.log, `Value changed to ${this.value}!`];
    }
  }

  public stateChanged(state: CounterState) {
    this.counter = state.value;
  }

  private add() {
    incrementCounter(Number(this.value));
  }

  private substract() {
    decrementCounter(Number(this.value));
  }

  private handleInput(event: InputEvent) {
    this.value = (event.target as HTMLInputElement).value;
  }

  public render() {
    return html`
      <p class="counter">${this.counter}</p>
      <input .value=${this.value} @input=${this.handleInput} type="number" />
      <button @click=${this.add}>Add</button>
      <button @click=${this.substract}>Substract</button>
      <div class="log">
        ${this.log
          .reverse()
          .map((entry) => html`<div class="log-entry">${entry}</div>`)}
      </div>
    `;
  }
}
