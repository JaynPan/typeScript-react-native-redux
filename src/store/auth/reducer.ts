import {
  AuthActionTypes,
  UserInfo,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER_INFO_SUCCESS,
  SIGNUP_EMAIL_PWD_LOADING,
  SIGNUP_EMAIL_PWD_SUCCESS,
  SignupEMailPwdFail,
  SIGNUP_EMAIL_PWD_FAIL,
} from '@/store/auth/types';

interface AuthState {
  isAuth: boolean;
  authLoading: boolean;
  signUpLoading: boolean;
  signUpFailMsg: string | null;
  user: UserInfo;
  uid: string | null;
}

const defaultState: AuthState = {
  isAuth: false,
  authLoading: false,
  signUpLoading: false,
  signUpFailMsg: null,
  user: {
    firstname: '',
    lastname: '',
    email: '',
    profilePicture: '',
  },
  uid: null,
};

const authReducer = (
  state: AuthState = defaultState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case AUTH_FAIL:
      return {
        ...state,
        authLoading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isAuth: true,
        uid: action.payload.uid,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authLoading: false,
        isAuth: false,
        user: defaultState.user,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
      };
    case SIGNUP_EMAIL_PWD_LOADING:
      return {
        ...state,
        signUpLoading: true,
        signUpFailMsg: null,
      };
    case SIGNUP_EMAIL_PWD_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
      };
    case SIGNUP_EMAIL_PWD_FAIL:
      return {
        ...state,
        signUpFailMsg: action.payload.message,
        signUpLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
