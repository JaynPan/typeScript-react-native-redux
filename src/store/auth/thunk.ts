import firebase from 'firebase';

import {
  authLoading,
  authSuccess,
  authFail,
  fetchUserInfoSuccess,
  logout,
  signUpLoading,
  signUpFail,
  signUpSuccess,
} from '@/store/auth/actions';
import { UserInfo } from '@/store/auth/types';
import { AppThunk } from '@/store/types';
import * as RootNavigation from '@/utils/RootNavigations';

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

export const createUserByEmailPassword = (
  nickname: string,
  email: string,
  password: string,
): AppThunk => async (dispatch) => {
  try {
    dispatch(signUpLoading());
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (result?.user) {
      console.log('sending email and execute storeUserInfoToDatabase');
      dispatch(storeUserInfoToDatabase(nickname, email, result.user.uid));
      dispatch(signUpSuccess());
      RootNavigation.navigate('EmailVerification');
      await result.user.sendEmailVerification();
    } else {
      dispatch(signUpFail('something went wrong! Try again later.'));
    }
  } catch (e) {
    dispatch(signUpFail(e.message));
  }
};

export const storeUserInfoToDatabase = (
  nickname: string,
  email: string,
  uid: string,
): AppThunk => async () => {
  try {
    console.log('store user info');
    await firebase.firestore().collection('users').doc(uid).set({
      nickname,
      email,
      createdAt: new Date(),
    });
  } catch (e) {
    console.log(e.message);
  }
};
