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

export const login = (payload) => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_REQUEST });
  console.log(payload);
  authApi.login(
    response => {
      dispatch(loginSuccess(response));
    },
    error => { dispatch(loginFailure(error)); },
    payload

  );
};

export const logout = () => dispatch => {
  dispatch({ type: types.AUTH_LOGOUT });
};
