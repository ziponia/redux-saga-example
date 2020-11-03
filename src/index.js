import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./store/api.saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleware);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
