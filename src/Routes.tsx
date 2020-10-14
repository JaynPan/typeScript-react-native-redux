import React, { FC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AuthStack from '@/navigations/AuthStack';
import AppTabs from '@/navigations/AppTabs';
import { RootStore } from '@/store';
import { checkAuthState } from '@/store/actions/AuthActions';
import Center from '@/components/Center';

const Routes: FC = () => {
  const { isAuth, loading } = useSelector((state: RootStore) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {isAuth ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
