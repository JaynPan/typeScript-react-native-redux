import {
  AUTH_SUCCESS,
  AUTH_LOADING,
  AUTH_FAIL,
  AuthActionTypes,
  UserInfo,
  LOGOUT_SUCCESS,
  FETCH_USER_INFO_SUCCESS,
  SIGNUP_EMAIL_PWD_FAIL,
  SIGNUP_EMAIL_PWD_LOADING,
  SIGNUP_EMAIL_PWD_SUCCESS,
} from './types';

export const authSuccess = (uid: string): AuthActionTypes => {
  return {
    type: AUTH_SUCCESS,
    payload: { uid },
  };
};

export const authFail = (): AuthActionTypes => {
  return {
    type: AUTH_FAIL,
  };
};

export const authLoading = (): AuthActionTypes => {
  return {
    type: AUTH_LOADING,
  };
};

export const fetchUserInfoSuccess = (data: UserInfo): AuthActionTypes => {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: { data },
  };
};

export const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const signUpLoading = (): AuthActionTypes => {
  return {
    type: SIGNUP_EMAIL_PWD_LOADING,
  };
};

export const signUpFail = (message: string): AuthActionTypes => {
  return {
    type: SIGNUP_EMAIL_PWD_FAIL,
    payload: { message },
  };
};

export const signUpSuccess = (): AuthActionTypes => {
  return {
    type: SIGNUP_EMAIL_PWD_SUCCESS,
  };
};
