import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20}}>
      <ActivityIndicator />
    </View>
  );
}

export { Spinner };