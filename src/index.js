import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer () {
  return {
    id: null,
    username: null,
    color: null,
    displayName: null,
    loggedIn: false,
    baseApi: "http://127.0.0.1:5000"
  };
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
