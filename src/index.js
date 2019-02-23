import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Grommet } from "grommet";
import { css } from "styled-components";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";

const theme = {
  button: {
    opacity: 1,
    border: {
      radius: 0,
      width: 0
    },
    extend: css`
      text-transform: uppercase;
      font-weight: bold;
    `
  },
  global: {
    hover: {
      background: "brand",
      color: { light: "white", dark: "black" },
      size: "large"
    },
    colors: {
      appYellow: "#fdda44",
      brand: "#5f288d",
      active: "brand"
    },
    font: {
      family: "Lato",
      size: "14px",
      height: "20px"
    }
  }
};
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Grommet full theme={theme}>
        <App />
      </Grommet>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
