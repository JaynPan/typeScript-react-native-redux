import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Routes from '@/Routes';
import store from '@/store';

import './firebase.config';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
