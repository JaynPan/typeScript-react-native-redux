import React, { FC } from 'react';
import { Text } from 'react-native';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';

const Settings: FC<AppNavProps<'Settings'>> = () => {
  return (
    <Center>
      <Text>Settings</Text>
    </Center>
  );
};

export default Settings;
