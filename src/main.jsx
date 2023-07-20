import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { RecurlyProvider } from "@recurly/react-recurly";

ReactDOM.render(
  <React.StrictMode>
    <RecurlyProvider publicKey="sandbox_ndz7j27w_6kjmvscwhbbrw5mm">
      <App />
    </RecurlyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
