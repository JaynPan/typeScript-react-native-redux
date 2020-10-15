import React, { FC } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';
import { RootStore } from '@/store';

const Home: FC<AppNavProps<'Home'>> = () => {
  const { user } = useSelector((state: RootStore) => state.auth);

  return (
    <Center>
      <Text>hello, {user.firstname}</Text>
    </Center>
  );
};

export default Home;
