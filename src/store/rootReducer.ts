import { combineReducers } from 'redux';

import authReducer from '@/store/auth/reducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export default RootReducer;
