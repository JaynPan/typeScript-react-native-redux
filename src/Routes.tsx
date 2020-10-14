import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '@/navigations/AuthStack';
import AppTabs from '@/navigations/AppTabs';

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default Routes;
