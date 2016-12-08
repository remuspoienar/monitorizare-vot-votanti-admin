import authApi from '../api/authApi';
import * as types from '../constants/AuthActionTypes';

const loginSuccess = response => ({
  type: types.AUTH_LOGIN_SUCCESS,
  response,
});

const loginFailure = error => ({
  type: types.AUTH_LOGIN_FAILURE,
  error,
});

export const login = () => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_REQUEST });

  authApi.login(
    response => { dispatch(loginSuccess(response)); },
    error => { dispatch(loginFailure(error)); }
  );
};

export const logout = () => dispatch => {
  dispatch({ type: types.AUTH_LOGOUT });
};
