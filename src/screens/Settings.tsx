import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';
import { logout } from '@/store/actions/AuthActions';

const Settings: FC<AppNavProps<'Settings'>> = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Center>
      <Text>Settings</Text>
      <Button onPress={handleLogout} title="logout" />
    </Center>
  );
};

export default Settings;
