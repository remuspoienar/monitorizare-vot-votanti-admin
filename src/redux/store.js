import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(loggerMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(middlewareEnhancer)
);

export default store;
