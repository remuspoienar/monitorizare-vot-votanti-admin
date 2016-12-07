import reportsApi from '../api/reportsApi';
import * as types from '../constants/ReportsActionTypes';

const getReportsSuccess = data => ({
    type: types.REPORTS_FETCH_SUCCESS,
    data,
});

const getReportsFailure = error => ({
    type: types.REPORTS_FETCH_FAILURE,
    error,
});

export const getReports = () => dispatch => {
    dispatch({ type: types.REPORTS_FETCH_REQUEST });

    reportsApi.getReports(
        data => { dispatch(getReportsSuccess(data)); },
        error => { dispatch(getReportsFailure(error)); }
    );
};
