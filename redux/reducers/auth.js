import { combineReducers } from 'redux';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from '../constants/aUTHActionTypes';

const authenticated = (state = false, action) => {
  switch (action.type) {

    case AUTH_LOGIN_SUCCESS:
      return true;

    case AUTH_LOGIN_FAILURE:
      return true;

    default:
      return state;
  }
};

const token = (state = false, action) => {
  switch (action.type) {

    case AUTH_LOGIN_SUCCESS:
      return aciton.data.token;

    case AUTH_LOGIN_FAILURE:
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
  error,
});
