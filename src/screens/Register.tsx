import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AuthNavProps } from '@/navigations/AuthParamList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Register: FC<AuthNavProps<'Register'>> = () => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
