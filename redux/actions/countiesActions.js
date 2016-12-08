import countiesApi from '../api/countiesApi';
import * as types from '../constants/CountiesActionTypes';

const fetchCountiesSuccess = data => ({
    type: types.COUNTIES_FETCH_ALL_SUCCESS,
    data,
});

const fetchCountiesFailure = error => ({
    type: types.COUNTIES_FETCH_ALL_FAILURE,
    error,
});

export const fetchCounties = () => dispatch => {
    dispatch({ type: types.COUNTIES_FETCH_ALL_REQUEST });

    countiesApi.getCounties(
        data => { dispatch(fetchCountiesSuccess(data)); },
        error => { dispatch(fetchCountiesFailure(error)); }
    );
};
