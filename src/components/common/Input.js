import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>

      <TextInput
          style={inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          value={value}
          autocorrect={false}
        />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18
  },
  inputStyle: {
    fontSize: 18,
    flex: 2
  }
}

export { Input };