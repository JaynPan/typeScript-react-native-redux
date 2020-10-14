import React, { FC, useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Center from '@/components/Center';
import { AppNavProps } from '@/navigations/AppParamList';
import { getUserData } from '@/store/actions/AuthActions';
import { RootStore } from '@/store';

const Home: FC<AppNavProps<'Home'>> = () => {
  const dispatch = useDispatch();
  const { uid, user } = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if (uid) {
      dispatch(getUserData(uid));
    }
  }, []);

  return (
    <Center>
      <Text>hello, {user.firstname}</Text>
    </Center>
  );
};

export default Home;
