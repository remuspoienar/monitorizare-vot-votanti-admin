import { combineReducers } from 'redux';
import {
  COUNTIES_FETCH_ALL_SUCCESS,
  COUNTIES_FETCH_ALL_FAILURE,
} from '../constants/CountiesActionTypes';

const list = (state = [], action) => {
  switch (action.type) {

    case COUNTIES_FETCH_ALL_SUCCESS:
      return action.data.data;

    default:
      return state;
  }
};

const error = (state = [], action) => {
  switch (action.type) {
    case COUNTIES_FETCH_ALL_SUCCESS:
      return null;
    case COUNTIES_FETCH_ALL_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  error,
});

export const getCounties = (state) => state.list
