import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Views/App";
import store from "./Store/Store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);


