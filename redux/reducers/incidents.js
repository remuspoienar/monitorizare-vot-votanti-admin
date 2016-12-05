import { combineReducers } from 'redux';
import {
  INCIDENTS_FETCH_ALL_SUCCESS,
  INCIDENTS_FETCH_ALL_FAILURE,
} from '../constants/IncidentsActionTypes';

const incidents = (state, action) => {
  console.log(action);

  switch (action.type) {
    case INCIDENTS_FETCH_ALL_SUCCESS:
      return { ...state, incidents: action.data.data };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case INCIDENTS_FETCH_ALL_SUCCESS:
      return { ...state, ...action.data.data.reduce((obj, incident) => {
        obj[incident.id] = incident;
        return obj;
      }, {})
      };
    default:
      const { incidentId } = action;
      if (incidentId) {
        return { ...state, [incidentId]: incidents(state[incidentId], action) };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case INCIDENTS_FETCH_ALL_SUCCESS:
      return action.data.data.map((incident) => incident.id);
    default:
      return state;
  }
};

const error = (state = [], action) => {
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

