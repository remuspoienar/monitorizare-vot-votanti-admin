import { combineReducers, createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

import auth from "./auth";
import counties from "./counties";
import incidents from "./incidents";
import reports from "./reports";
import microcopies from "./microcopies";

const rootReducer = combineReducers({
  auth,
  counties,
  incidents,
  reports,
  microcopies
});

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middleware));
