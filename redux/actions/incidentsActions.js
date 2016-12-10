import incidentsApi from '../api/incidentsApi';
import * as types from '../constants/IncidentsActionTypes';

const fetchIncidentsSuccess = data => ({
    type: types.INCIDENTS_FETCH_ALL_SUCCESS,
    data,
});

const fetchIncidentsFailure = error => ({
    type: types.INCIDENTS_FETCH_ALL_FAILURE,
    error,
});

export const selectIncident = incident => ({
    type: types.INCIDENTS_SELECTED,
    incident,
});

export const fetchIncidents = () => dispatch => {
    dispatch({ type: types.INCIDENTS_FETCH_ALL_REQUEST });

    incidentsApi.getIncidents(
        data => { dispatch(fetchIncidentsSuccess(data)); },
        error => { dispatch(fetchIncidentsFailure(error)); }
    );
};
