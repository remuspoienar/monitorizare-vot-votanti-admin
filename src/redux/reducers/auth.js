import { combineReducers } from "redux";
import {
  AUTH_LOGOUT,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE
} from "../constants/AuthActionTypes";
// import history from "../../core/history";

const authenticated = (state = false, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      // setTimeout(() => {
      //   history.push({ pathname: "/" });
      // }, 300);
      return true;

    case AUTH_LOGIN_FAILURE:
      return false;

    case AUTH_LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = false, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      // sessionStorage.setItem("token", action.response.token);
      return true; //change or remove this whole portion

    case AUTH_LOGIN_FAILURE:
      // sessionStorage.removeItem("token");
      return false;

    case AUTH_LOGOUT:
      // sessionStorage.removeItem("token");
      return false;

    default:
      return state;
  }
};

const error = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return state;

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
