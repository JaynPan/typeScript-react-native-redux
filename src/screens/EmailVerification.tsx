import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';

import { AuthNavProps } from '@/navigations/AuthParamList';

const EmailVerification: FC<AuthNavProps<'EmailVerification'>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>
        email has been sent to your mailbox, please verify your account.
      </Text>
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
    </View>
  );
};

export default EmailVerification;
