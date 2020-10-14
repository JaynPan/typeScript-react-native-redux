export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOADING = 'AUTH_LOADING';

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
  payload: { data: UserInfo };
}

export type AuthDispatchTypes = AuthFail | AuthLoading | AuthSuccess;
