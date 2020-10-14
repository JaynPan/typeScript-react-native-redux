import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthNavProps } from '@/navigations/AuthParamList';

const Login: FC<AuthNavProps<'Login'>> = ({ navigation }) => {
  return (
    <View>
      <Text>login In</Text>
      <Button
        onPress={() => navigation.navigate('Register')}
        title="Register"
      />
    </View>
  );
};

export default Login;
