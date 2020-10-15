import firebase from 'firebase';
import { Dispatch } from 'redux';

import {
  AUTH_SUCCESS,
  AUTH_LOADING,
  AUTH_FAIL,
  AuthDispatchTypes,
  UserInfo,
  LOGOUT_SUCCESS,
  USER_INFO_SUCCESS,
} from './actionTypes';

export const checkAuthState = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
): Promise<void> => {
  try {
    dispatch({ type: AUTH_LOADING });
    firebase.auth().onAuthStateChanged(async (result) => {
      if (result) {
        dispatch({ type: AUTH_SUCCESS, payload: { uid: result.uid } });
      }
    });
  } catch (e) {
    dispatch({ type: AUTH_FAIL });
  }
};

export const getUserData = (uid: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>,
): Promise<void> => {
  try {
    const doc = await firebase.firestore().collection('users').doc(uid).get();

    if (doc.data()) {
      dispatch({
        type: USER_INFO_SUCCESS,
        payload: { data: doc.data() as UserInfo },
      });
    }
  } catch (e) {}
};

export const logout = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
): Promise<void> => {
  try {
    dispatch({ type: AUTH_LOADING });
    await firebase.auth().signOut();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    dispatch({ type: AUTH_FAIL });
  }
};

export const signInWithEmailPassword = (
  signInEmail: string,
  signInPassword: string,
) => async (dispatch: Dispatch<AuthDispatchTypes>): Promise<void> => {
  try {
    dispatch({ type: AUTH_LOADING });
    await firebase
      .auth()
      .signInWithEmailAndPassword(signInEmail, signInPassword);

    // the onAuthStateChanged observer will trigger at this moment
    // thus, no need to further dispatch any actions
  } catch (e) {
    dispatch({ type: AUTH_FAIL });
  }
};
