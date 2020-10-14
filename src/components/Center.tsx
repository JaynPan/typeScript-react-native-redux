import React, { FC } from 'react';
import { View } from 'react-native';

// interface CenterProps {}

const Center: FC<object> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default Center;
