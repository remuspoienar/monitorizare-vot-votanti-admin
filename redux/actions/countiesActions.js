import countiesApi from '../api/countiesApi';
import * as types from '../constants/CountiesActionTypes';

const getCountiesSuccess = data => ({
    type: types.COUNTIES_FETCH_ALL_SUCCESS,
    data,
});

const getCountiesFailure = error => ({
    type: types.COUNTIES_FETCH_ALL_FAILURE,
    error,
});

export const getCounties = () => dispatch => {
    dispatch({ type: types.COUNTIES_FETCH_ALL_REQUEST });

    countiesApi.getCounties(
        data => { dispatch(getCountiesSuccess(data)); },
        error => { dispatch(getCountiesFailure(error)); }
    );
};
