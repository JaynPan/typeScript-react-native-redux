import React, { FC } from 'react';
import { Text } from 'react-native';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';

const Home: FC<AppNavProps<'Home'>> = () => {
  return (
    <Center>
      <Text>Home</Text>
    </Center>
  );
};

export default Home;
