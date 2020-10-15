import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';
import { thunkLogout as logout } from '@/store/auth/thunk';

const Settings: FC<AppNavProps<'Settings'>> = () => {
  const dispatch = useDispatch();

  return (
    <Center>
      <Text>Settings</Text>
      <Button onPress={() => dispatch(logout())} title="logout" />
    </Center>
  );
};

export default Settings;
