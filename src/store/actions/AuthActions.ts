import firebase from 'firebase';
import { Dispatch } from 'redux';

import {} from '@/store/actions/AuthActionTypes';
import {
  AUTH_SUCCESS,
  AUTH_LOADING,
  AUTH_FAIL,
  AuthDispatchTypes,
  UserInfo,
} from './AuthActionTypes';

export const checkAuthState = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
): Promise<void> => {
  try {
    dispatch({ type: AUTH_LOADING });
    firebase.auth().onAuthStateChanged(async (result) => {
      if (result) {
        // fetch user info
        const doc = await firebase
          .firestore()
          .collection('users')
          .doc(result.uid)
          .get();

        dispatch({
          type: AUTH_SUCCESS,
          payload: {
            data: doc.data() as UserInfo,
          },
        });
      } else {
        dispatch({ type: AUTH_FAIL });
      }
    });
  } catch (e) {
    dispatch({ type: AUTH_FAIL });
  }
};
