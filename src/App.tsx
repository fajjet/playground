import React, { useEffect } from "react";
import CodeMirror from "codemirror";
require("codemirror/mode/javascript/javascript");

import { Header, Sidebar } from "./components";

import "./styles/reset.css";
import "./styles/codemirror/codemirror.css";
import "./styles/codemirror/monokai.css";
import "./styles/global.css";
import "./styles/fonts.css";

function App() {
  useEffect(() => {
    const container = document.querySelector("#code");
    const myCodeMirror = CodeMirror(container as HTMLElement, {
      mode: {
        name: "javascript",
        json: true,
      },
      theme: "monokai",
      lineNumbers: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
