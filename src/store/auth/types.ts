export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const SIGNUP_EMAIL_PWD_LOADING = 'SIGNUP_EMAIL_PWD_LOADING';
export const SIGNUP_EMAIL_PWD_SUCCESS = 'SIGNUP_EMAIL_PWD_SUCCESS';
export const SIGNUP_EMAIL_PWD_FAIL = 'SIGNUP_EMAIL_PWD_FAIL';

export type UserInfo = {
  firstname: string;
  lastname: string;
  email: string;
  profilePicture: string;
};

export interface AuthLoading {
  type: typeof AUTH_LOADING;
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: { uid: string | null };
}

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export interface UserInfoSuccess {
  type: typeof FETCH_USER_INFO_SUCCESS;
  payload: { data: UserInfo };
}

export interface SignUpEmailPwdLoading {
  type: typeof SIGNUP_EMAIL_PWD_LOADING;
}

export interface SignUpEmailPwdSuccess {
  type: typeof SIGNUP_EMAIL_PWD_SUCCESS;
}

export interface SignupEMailPwdFail {
  type: typeof SIGNUP_EMAIL_PWD_FAIL;
  payload: { message: string };
}

export type AuthActionTypes =
  | AuthFail
  | AuthLoading
  | AuthSuccess
  | LogoutSuccess
  | UserInfoSuccess
  | SignUpEmailPwdLoading
  | SignUpEmailPwdSuccess
  | SignupEMailPwdFail;
