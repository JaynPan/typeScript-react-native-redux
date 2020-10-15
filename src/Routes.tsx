import React, { FC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AuthStack from '@/navigations/AuthStack';
import AppTabs from '@/navigations/AppTabs';
import { RootStore } from '@/store';
import { checkAuthState } from '@/store/auth/thunk';
import Center from '@/components/Center';
import { navigationRef } from '@/utils/RootNavigations';

const Routes: FC = () => {
  const { isAuth, authLoading } = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, []);

  if (authLoading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuth ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
