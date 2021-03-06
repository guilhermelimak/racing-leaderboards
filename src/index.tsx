import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css } from "@emotion/core";
import { styles } from "./styles";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <>
    <Global
      styles={css`
        * {
          font-family: Roboto;
        }

        html,
        body {
          background-color: ${styles.colors.background10};
          color: ${styles.colors.foreground};
        }
      `}
    />
    <Toaster />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
