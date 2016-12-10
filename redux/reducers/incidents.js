import { combineReducers } from 'redux';
import {
  INCIDENTS_FETCH_ALL_SUCCESS,
  INCIDENTS_FETCH_ALL_FAILURE,
  INCIDENTS_SELECTED,
} from '../constants/IncidentsActionTypes';

const list = (state = [], action) => {
  switch (action.type) {

    case INCIDENTS_FETCH_ALL_SUCCESS:
      return action.data.data;

    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {

    case INCIDENTS_FETCH_ALL_SUCCESS:
      return null;

    case INCIDENTS_FETCH_ALL_FAILURE:
      return action.error;

    default:
      return state;
  }
};

const selectedIncident = (state = null, action) => {
  switch (action.type) {
    case INCIDENTS_SELECTED:
      return action.incident;
  }
  return state;
}

export default combineReducers({
  list,
  selectedIncident,
  error,
});

export const getIncidents = (state, id) =>
  state.list

export const getSelectedIncident = (state) =>
  state.selectedIncident
