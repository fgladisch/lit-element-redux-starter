import { css } from "lit-element";

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    --border-radius: 8px;
    --border: 1px solid #ddd;

    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: var(--border);
    border-radius: var(--border-radius);
    width: 400px;
  }

  input,
  button {
    padding: 5px 10px;
    border: var(--border);
    border-radius: var(--border-radius);
    outline: none;
    margin: 5px;
  }

  button {
    background: white;
    cursor: pointer;
  }

  input {
    width: 80px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-top: 10px;
    padding: 10px;
    border: var(--border);
    border-radius: var(--border-radius);
    height: 200px;
    overflow-y: auto;
    width: 100%;
  }

  .log-entry {
    margin: 5px 0;
  }
`;
