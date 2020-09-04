import App from "./App";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  React.createElement(App, { app: this }),
  document.getElementById("app") || document.createElement("div")
);
