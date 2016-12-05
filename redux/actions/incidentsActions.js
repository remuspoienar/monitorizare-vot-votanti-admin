import incidentsApi from '../api/incidentsApi';
import * as types from '../constants/IncidentsActionTypes';

const getIncidentsSuccess = data => ({
    type: types.INCIDENTS_FETCH_ALL_SUCCESS,
    data,
});

const getIncidentsFailure = error => ({
    type: types.INCIDENTS_FETCH_ALL_FAILURE,
    error,
});

export const getIncidents = () => dispatch => {
    dispatch({ type: types.INCIDENTS_FETCH_ALL_REQUEST });

    incidentsApi.getIncidents(
        data => { dispatch(getIncidentsSuccess(data)); },
        error => { dispatch(getIncidentsFailure(error)); }
    );
};

