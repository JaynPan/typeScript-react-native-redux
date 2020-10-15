export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';

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

export type AuthActionTypes =
  | AuthFail
  | AuthLoading
  | AuthSuccess
  | LogoutSuccess
  | UserInfoSuccess;
