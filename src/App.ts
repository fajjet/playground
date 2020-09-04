import Main from "./Main";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  React.createElement(Main, { app: this }),
  document.getElementById("app") || document.createElement("div")
);
