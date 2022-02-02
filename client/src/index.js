import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Redux start------------------------------------------------------
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
//by default redux is synchronous,thunk is a middleware that allows us to make async calls
//middleware is a function that gets called before the action is dispatched
//thunk is a function that returns a function
import thunk from "redux-thunk";
//Redux end------------------------------------------------------
import "./index.css";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
