import {
  AuthDispatchTypes,
  UserInfo,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  USER_INFO_SUCCESS,
} from '@/store/auth/actionTypes';

interface AuthState {
  isAuth: boolean;
  loading: boolean;
  user: UserInfo;
  uid: string | null;
}

const defaultState: AuthState = {
  isAuth: false,
  loading: false,
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
  action: AuthDispatchTypes,
): AuthState => {
  switch (action.type) {
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        uid: action.payload.uid,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: defaultState.user,
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
      };
    default:
      return state;
  }
};

export default authReducer;
