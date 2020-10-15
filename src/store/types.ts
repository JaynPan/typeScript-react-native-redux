import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootStore } from './index';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  Action<string>
>;
