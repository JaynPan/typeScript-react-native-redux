import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '@/navigations/AuthStack';

const Main: FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Main;
