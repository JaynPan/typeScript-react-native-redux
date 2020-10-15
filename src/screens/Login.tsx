import React, { FC, useState } from 'react';
import {
  Keyboard,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { AuthNavProps } from '@/navigations/AuthParamList';
import { signInWithEmailPassword } from '@/store/auth/thunk';
import Input from '@/components/TextInput';

const Login: FC<AuthNavProps<'Login'>> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLogin = () => {
    dispatch(signInWithEmailPassword(email, password));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Input
          label="電子郵件"
          placeholder="email@gmail.com"
          leftIcon={<Ionicons name="md-mail" size={24} color="#86939e" />}
          inputStyle={{ marginLeft: 10 }}
          value={email}
          autoCapitalize="none"
          onChangeText={(val: string) => setEmail(val)}
        />
        <Input
          label="密碼"
          secureTextEntry
          autoCompleteType="password"
          placeholder="Password"
          leftIcon={<Ionicons name="md-lock" size={24} color="#86939e" />}
          inputStyle={{ marginLeft: 10 }}
          value={password}
          onChangeText={(val: string) => setPassword(val)}
        />
        <Button onPress={toggleLogin} title="login" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
