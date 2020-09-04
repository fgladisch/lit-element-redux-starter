import { css } from "lit-element";

export default css`
  :host {
    --border-radius: 8px;
    --border: 1px solid #ddd;

    font-family: sans-serif;
    display: inline-block;
    padding: 20px;
    border: var(--border);
    border-radius: var(--border-radius);
  }

  input,
  button {
    padding: 5px 10px;
    border: var(--border);
    border-radius: var(--border-radius);
    outline: none;
  }

  input {
    width: 40px;
  }

  .counter {
    font-family: monospace;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  .log {
    font-family: monospace;
    background: #f6f6f6;
    margin: 10px 0;
    padding: 10px;
    border: var(--border);
    border-radius: var(--border-radius);
    height: 200px;
    overflow-y: auto;
  }

  .log-entry {
    margin: 5px 0;
  }
`;
