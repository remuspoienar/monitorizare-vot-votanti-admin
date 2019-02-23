import { combineReducers } from "redux";

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

export default rootReducer;
