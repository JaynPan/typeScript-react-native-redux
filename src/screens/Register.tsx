import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { AuthNavProps } from '@/navigations/AuthParamList';
import Input from '@/components/TextInput';
import { createUserByEmailPassword } from '@/store/auth/thunk';
import { RootStore } from '@/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Register: FC<AuthNavProps<'Register'>> = () => {
  const dispatch = useDispatch();
  const { signUpFailMsg, signUpLoading } = useSelector(
    (state: RootStore) => state.auth,
  );
  const [form, setState] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const updateField = (field: string, val: string) => {
    setState({ ...form, [field]: val });
  };

  const validation = (): boolean => {
    const { password, confirmPassword } = form;
    if (password !== confirmPassword) {
      return false;
    }

    return true;
  };

  const toggleSignUp = (): void => {
    Keyboard.dismiss();
    if (!validation()) return;

    const { nickname, email, password } = form;
    dispatch(createUserByEmailPassword(nickname, email, password));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Input
            label="暱稱"
            placeholder="Jay"
            leftIcon={<Ionicons name="md-person" size={18} color="#86939e" />}
            inputStyle={{ marginLeft: 10 }}
            keyboardType="email-address"
            value={form.nickname}
            onChangeText={(val) => updateField('nickname', val)}
          />
          <Input
            label="電子郵件"
            placeholder="email@gmail.com"
            leftIcon={<Ionicons name="md-mail" size={18} color="#86939e" />}
            inputStyle={{ marginLeft: 10 }}
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(val) => updateField('email', val)}
          />
          <Input
            label="密碼"
            secureTextEntry
            placeholder="Your Password"
            leftIcon={<Ionicons name="md-lock" size={18} color="#86939e" />}
            inputStyle={{ marginLeft: 10 }}
            value={form.password}
            onChangeText={(val) => updateField('password', val)}
          />
          <Input
            label="確認密碼"
            secureTextEntry
            placeholder="Confirm Password"
            leftIcon={<Ionicons name="md-lock" size={18} color="#86939e" />}
            inputStyle={{ marginLeft: 10 }}
            value={form.confirmPassword}
            onChangeText={(val) => updateField('confirmPassword', val)}
          />
          {signUpFailMsg && <Text>{signUpFailMsg}</Text>}
          <Button
            buttonStyle={{ borderRadius: 10 }}
            title="註冊"
            onPress={toggleSignUp}
            loading={signUpLoading}
            disabled={signUpLoading}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
