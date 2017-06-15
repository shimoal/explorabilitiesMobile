import React from 'react';
import { View } from 'react-native';
import Card from'./Card';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection };