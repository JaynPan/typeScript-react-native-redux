import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Main from '@/Main';
import store from '@/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
