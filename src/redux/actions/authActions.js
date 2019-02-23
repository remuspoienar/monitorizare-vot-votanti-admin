import authApi from "../api/authApi";
import * as types from "../constants/AuthActionTypes";

export const loginSuccess = response => ({
  type: types.AUTH_LOGIN_SUCCESS,
  response
});

const loginFailure = error => ({
  type: types.AUTH_LOGIN_FAILURE,
  error
});

export const login = payload => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_REQUEST });
  authApi.login(
    response => {
      localStorage.setItem("token", response.token);
      dispatch(loginSuccess(response));
    },
    error => {
      dispatch(loginFailure(error));
    },
    payload
  );
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: types.AUTH_LOGOUT });
};
