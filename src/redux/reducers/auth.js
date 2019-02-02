import { combineReducers } from "redux";
import {
  AUTH_LOGOUT,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE
} from "../constants/AuthActionTypes";
import history from "../../core/history";

const authenticated = (state = false, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      console.log("auth success & redirect");
      setTimeout(() => {
        history.push({ pathname: "/" });
      }, 300);
      return true;

    case AUTH_LOGIN_FAILURE:
      return true;

    case AUTH_LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = false, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      sessionStorage.setItem("token", action.response.token);
      return action.response.token;

    case AUTH_LOGIN_FAILURE:
      sessionStorage.removeItem("token");
      return false;

    case AUTH_LOGOUT:
      sessionStorage.removeItem("token");
      return false;

    default:
      return state;
  }
};

const error = (state = [], action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return false;

    case AUTH_LOGIN_FAILURE:
      return action.error;

    default:
      return state;
  }
};

export default combineReducers({
  authenticated,
  token,
  error
});
