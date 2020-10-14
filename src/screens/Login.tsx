import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { AuthNavProps } from '@/navigations/AuthParamList';
import { signInWithEmailPassword } from '@/store/actions/AuthActions';

const Login: FC<AuthNavProps<'Login'>> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>login In</Text>
      <Button
        onPress={() =>
          dispatch(signInWithEmailPassword('test@gmail.com', '00000000'))
        }
        title="login"
      />
    </View>
  );
};

export default Login;
