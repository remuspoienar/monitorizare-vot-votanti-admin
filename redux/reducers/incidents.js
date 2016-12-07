import { combineReducers } from 'redux';
import {
  INCIDENTS_FETCH_ALL_SUCCESS,
  INCIDENTS_FETCH_ALL_FAILURE,
} from '../constants/IncidentsActionTypes';

const list = (state = [], action) => {
  switch (action.type) {

    case COUNTIES_FETCH_ALL_SUCCESS:
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

export default combineReducers({
  byId,
  visibleIds,
  error,
});

export const getIncident = (state, id) =>
  state.byId[id];

export const getVisibleIncidents = (state) =>
  state.visibleIds.map((id) => getIncident(state, id));

