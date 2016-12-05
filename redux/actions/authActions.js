import marketApi from '../api/authApi';
import * as types from '../constants/AuthActionTypes';

// GET AUTHURL
const getAuthUrlSuccess = markets => ({
  type: types.AUTH_GET_AUTHURL_SUCCESS,
  markets,
});

const getAuthUrlFailure = markets => ({
  type: types.AUTH_GET_AUTHURL_FAILURE,
  markets,
});

export const getAuthUrl = () => dispatch => {
  dispatch({ type: types.AUTH_GET_AUTHURL_REQUEST });

  marketApi.getAuthUrl(
    markets => { dispatch(getAuthUrlSuccess(markets)); },
    error => { dispatch(getAuthUrlFailure(error)); }
  );
};

// LOGIN
const loginSuccess = markets => ({
  type: types.AUTH_LOGIN_SUCCESS,
  markets,
});

const loginFailure = markets => ({
  type: types.AUTH_LOGIN_FAILURE,
  markets,
});

export const login = () => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_REQUEST });

  marketApi.login(
    markets => { dispatch(loginSuccess(markets)); },
    error => { dispatch(loginFailure(error)); }
  );
};
