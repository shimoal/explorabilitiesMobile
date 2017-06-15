import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity> 
  );
};

const styles = {
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 3,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    flex: 1
  },
  textStyle: {
    color: 'green',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '700'
  }
}

export { Button };