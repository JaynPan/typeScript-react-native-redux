import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '@/screens/Register';
import Login from '@/screens/Login';
import EmailVerification from '@/screens/EmailVerification';

import { AuthParamList } from './AuthParamList';

const AuthStack = createStackNavigator<AuthParamList>();

const AuthStackNavigation: FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen
        name="EmailVerification"
        component={EmailVerification}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
