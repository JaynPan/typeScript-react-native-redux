import React, { FC } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { Input, InputProps } from 'react-native-elements';

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
  },
});

const TextInput: FC<TextInputProps & InputProps> = ({ ...rest }) => {
  return (
    <Input
      style={styles.input}
      labelStyle={{
        fontSize: 11,
      }}
      inputContainerStyle={{
        height: 30,
      }}
      {...rest}
      keyboardAppearance="dark"
    />
  );
};

export default TextInput;
