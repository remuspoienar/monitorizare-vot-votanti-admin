import { combineReducers } from "redux";
import {
  REPORTS_FETCH_SUCCESS,
  REPORTS_FETCH_FAILURE
} from "../constants/ReportsActionTypes";

const initialState = {
  incidentsByType: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case REPORTS_FETCH_SUCCESS:
      return action.data;

    default:
      return state;
  }
};

const error = (state = [], action) => {
  switch (action.type) {
    case REPORTS_FETCH_SUCCESS:
      return null;
    case REPORTS_FETCH_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  error
});
