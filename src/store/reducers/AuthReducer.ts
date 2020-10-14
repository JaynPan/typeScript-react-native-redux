import {
  AuthDispatchTypes,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
  UserInfo,
} from '@/store/actions/AuthActionTypes';

interface AuthState {
  isAuth: boolean;
  loading: boolean;
  user: UserInfo;
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
        user: action.payload.data,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
