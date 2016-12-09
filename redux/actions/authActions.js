import authApi from '../api/authApi';
import * as types from '../constants/AuthActionTypes';
import history from '../../core/history';

const loginSuccess = response => ({
  type: types.AUTH_LOGIN_SUCCESS,
  response,
});

const loginFailure = error => ({
  type: types.AUTH_LOGIN_FAILURE,
  error,
});

export const login = () => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_SUCCESS, data: {token: ''} });
  history.push({ pathname: '/' });

 /*
 dispatch({ type: types.AUTH_LOGIN_REQUEST });

  authApi.login(
    response => {dispatch(loginSuccess(response)); },
    error => { dispatch(loginFailure(error)); }
  );*/
};

export const logout = () => dispatch => {
  dispatch({ type: types.AUTH_LOGOUT });
};
