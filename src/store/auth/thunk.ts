import firebase from 'firebase';

import {
  authLoading,
  authSuccess,
  authFail,
  fetchUserInfoSuccess,
  logout,
} from '@/store/auth/actions';
import { UserInfo } from '@/store/auth/types';
import { AppThunk } from '@/store/types';

export const checkAuthState = (): AppThunk => async (dispatch) => {
  try {
    dispatch(authLoading());
    firebase.auth().onAuthStateChanged(async (result) => {
      if (result && result.emailVerified) {
        dispatch(fetchUserData(result.uid));
        dispatch(authSuccess(result.uid));
      } else {
        if (!result?.emailVerified) {
          // tell user that account not being verified, please check your mailbox
        }
        dispatch(authFail());
      }
    });
  } catch (e) {
    dispatch(authFail());
  }
};

export const signInWithEmailPassword = (
  signInEmail: string,
  signInPassword: string,
): AppThunk => async (dispatch) => {
  dispatch(authLoading());
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(signInEmail, signInPassword);

    dispatch(checkAuthState());
  } catch (e) {
    console.log(e.message);
    dispatch(authFail());
  }
};

export const thunkLogout = (): AppThunk => async (dispatch) => {
  try {
    dispatch(authLoading());
    await firebase.auth().signOut();
    dispatch(logout());
  } catch (e) {
    dispatch(authFail());
  }
};

export const fetchUserData = (uid: string): AppThunk => async (dispatch) => {
  try {
    const doc = await firebase.firestore().collection('users').doc(uid).get();

    if (doc.data()) {
      dispatch(fetchUserInfoSuccess(doc.data() as UserInfo));
    }
  } catch (e) {}
};
