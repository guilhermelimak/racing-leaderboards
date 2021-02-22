import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Toaster } from "react-hot-toast";
import { theme } from "./theme";
import { ThemeProvider } from "theme-ui";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Toaster />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
